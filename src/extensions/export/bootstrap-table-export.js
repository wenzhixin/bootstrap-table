/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * Built-in export implementation (replacing deprecated tableExport.jquery.plugin)
 */

import DOMHelper from '../../helpers/dom.js'

const Utils = $.fn.bootstrapTable.utils

// Supported export types, the single source of truth for defaults and validation
const EXPORT_TYPES = ['json', 'xml', 'csv', 'txt', 'sql', 'excel']

const TYPE_NAME = {
  json: 'JSON',
  xml: 'XML',
  csv: 'CSV',
  txt: 'TXT',
  sql: 'SQL',
  excel: 'MS-Excel'
}

const stringifyValue = value =>
  value === null || typeof value === 'undefined' ? '' : String(value)

// Spreadsheet apps evaluate cells starting with these characters as formulas
const FORMULA_PREFIX = /^[=+\-@\t\r]/
const NUMERIC_TEXT = /^-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/

const csvEscape = (value, delimiter) => {
  const d = delimiter || ','
  const raw = stringifyValue(value)
  // Neutralize formula-like text, but keep legitimate numeric values untouched
  const str = FORMULA_PREFIX.test(raw) && !NUMERIC_TEXT.test(raw) ? `'${raw}` : raw

  return str.includes(d) || str.includes('"') || str.includes('\n') || str.includes('\r') ?
    `"${str.replace(/"/g, '""')}"` : str
}

// Strip HTML tags and decode entities, mimicking jQuery's `.text()` semantics
const toText = value => {
  if (value === null || typeof value === 'undefined') {
    return ''
  }

  // Formatters may return DOM nodes or jQuery objects; use their displayed text
  if (Utils.isDomNode(value)) {
    return Array.from(Utils.htmlToNodes(value)).map(node => node.textContent).join('')
  }

  return DOMHelper.text(DOMHelper.html(DOMHelper.create('<div></div>'), stringifyValue(value)))
}

const hasField = column => column.field !== undefined && column.field !== null

// `exportTypes` may be configured as a string such as "['csv', 'xml']"
const parseExportTypes = exportTypes => typeof exportTypes === 'string' ?
  exportTypes.slice(1, -1).replace(/ /g, '').split(',').map(type => type.slice(1, -1)) :
  exportTypes

// Keep the typed values for JSON while stripping markup from strings and DOM values
const jsonValue = value =>
  value === null || typeof value === 'number' || typeof value === 'boolean' ?
    value : toText(value)

// Drop code points outside the XML 1.0 character range before escaping
const isXmlChar = char => {
  const code = char.codePointAt(0)

  return code === 0x9 || code === 0xA || code === 0xD ||
    code >= 0x20 && code <= 0xD7FF ||
    code >= 0xE000 && code <= 0xFFFD ||
    code >= 0x10000 && code <= 0x10FFFF
}

const escapeXmlText = value => Array.from(stringifyValue(value))
  .filter(isXmlChar)
  .join('')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;')

const sanitizeXmlTag = (name, fallback) => {
  const tag = stringifyValue(name)
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^A-Za-z0-9_.-]/g, '')

  return /^[A-Za-z_]/.test(tag) ? tag : fallback
}

const escapeSqlIdentifier = name => stringifyValue(name).replace(/`/g, '``')

const sqlValue = value => {
  if (value === null || typeof value === 'undefined') {
    return 'NULL'
  }

  if (typeof value === 'number') {
    // NaN and infinities are not valid numeric literals in the generated SQL
    return Number.isFinite(value) ? String(value) : 'NULL'
  }

  if (typeof value === 'boolean') {
    return String(value)
  }

  // The generated statement uses backtick identifiers (MySQL dialect), where
  // backslashes are escape characters; double them before doubling quotes
  return `'${toText(value).replace(/\\/g, '\\\\').replace(/'/g, '\'\'')}'`
}

const buildSqlColumns = columns => columns.map((column, i) =>
  `\`${escapeSqlIdentifier(hasField(column) ? column.field : `col${i + 1}`)}\``)

const buildXmlTags = columns => {
  const used = new Set()

  return columns.map((column, i) => {
    let tag = sanitizeXmlTag(column.field, `col${i + 1}`)

    if (used.has(tag)) {
      let suffix = i + 1

      while (used.has(`${tag}_${suffix}`)) {
        suffix += 1
      }
      tag = `${tag}_${suffix}`
    }

    used.add(tag)
    return tag
  })
}

const buildFile = (type, matrix, exportOptions) => {
  const { columns, rows, values } = matrix
  const options = exportOptions || {}
  const delimiter = options.csvDelimiter || ','
  const tableName = options.tableName || 'table'
  const headerRow = columns.map(column => column.title)

  switch (type) {
    case 'csv': {
      const lines = []

      if (headerRow.length) {
        lines.push(headerRow.map(title => csvEscape(title, delimiter)).join(delimiter))
      }

      rows.forEach(row => lines.push(row.map(value => csvEscape(value, delimiter)).join(delimiter)))

      return {
        mime: 'text/csv;charset=utf-8',
        ext: 'csv',
        // The BOM keeps Excel from mis-detecting the UTF-8 encoding
        content: `\uFEFF${lines.join('\r\n')}`
      }
    }
    case 'txt': {
      const lines = []

      if (headerRow.length) {
        lines.push(headerRow.map(title => csvEscape(title, '\t')).join('\t'))
      }

      rows.forEach(row => lines.push(row.map(value => csvEscape(value, '\t')).join('\t')))

      return {
        mime: 'text/plain;charset=utf-8',
        ext: 'txt',
        content: lines.join('\r\n')
      }
    }
    case 'json': {
      const objects = values.map(rowValues => {
        // A null prototype keeps fields such as `__proto__` as own properties
        const object = Object.create(null)

        columns.forEach((column, i) => {
          object[column.field] = jsonValue(rowValues[i])
        })
        return object
      })

      return {
        mime: 'application/json;charset=utf-8',
        ext: 'json',
        content: JSON.stringify(objects, null, 2)
      }
    }
    case 'xml': {
      const root = sanitizeXmlTag(tableName, 'table')
      const tags = buildXmlTags(columns)
      const lines = ['<?xml version="1.0" encoding="UTF-8"?>', `<${root}>`]

      rows.forEach(row => {
        lines.push('  <row>')

        columns.forEach((column, i) => {
          lines.push(`    <${tags[i]}>${escapeXmlText(row[i])}</${tags[i]}>`)
        })

        lines.push('  </row>')
      })

      lines.push(`</${root}>`)

      return {
        mime: 'application/xml;charset=utf-8',
        ext: 'xml',
        content: lines.join('\n')
      }
    }
    case 'sql': {
      if (!rows.length) {
        return {
          mime: 'application/sql;charset=utf-8',
          ext: 'sql',
          content: ''
        }
      }

      const rowsSql = values.map(
        rowValues => `(${rowValues.map(value => sqlValue(value)).join(', ')})`
      )

      return {
        mime: 'application/sql;charset=utf-8',
        ext: 'sql',
        content: `INSERT INTO \`${escapeSqlIdentifier(tableName)}\` (${buildSqlColumns(columns).join(', ')}) VALUES\n${rowsSql.join(',\n')};`
      }
    }
    case 'excel': {
      const csv = buildFile('csv', matrix, exportOptions)

      // Kept for backwards compatibility: the content is CSV with an .xls extension
      return {
        mime: 'application/vnd.ms-excel',
        ext: 'xls',
        content: csv.content
      }
    }
    default:
      return null
  }
}

const saveAs = (content, mime, filename) => {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')

  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

Object.assign($.fn.bootstrapTable.defaults, {
  showExport: false,
  exportDataType: 'basic', // basic, all, selected
  exportTypes: [...EXPORT_TYPES],
  exportOptions: {},
  exportFooter: false,
  beforeExport: () => true
})

Object.assign($.fn.bootstrapTable.columnDefaults, {
  forceExport: false,
  forceHide: false
})

Utils.assignIcons($.fn.bootstrapTable.icons, 'export', {
  glyphicon: 'glyphicon-export icon-share',
  fa: 'fa-download',
  bi: 'bi-download',
  icon: 'icon-download',
  'material-icons': 'file_download'
})

Object.assign($.fn.bootstrapTable.locales, {
  formatExport () {
    return 'Export data'
  }
})
Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.fn.bootstrapTable.methods.push('exportTable')

Object.assign($.fn.bootstrapTable.defaults, {
  // eslint-disable-next-line no-unused-vars
  onExportSaved (exportedRows) {
    return false
  },
  // eslint-disable-next-line no-unused-vars
  onExportStarted (type) {
    return false
  }
})

Object.assign($.fn.bootstrapTable.events, {
  'export-saved.bs.table': 'onExportSaved',
  'export-started.bs.table': 'onExportStarted'
})

$.BootstrapTable = class extends $.BootstrapTable {
  initToolbar (...args) {
    const o = this.options
    const exportTypes = parseExportTypes(o.exportTypes)

    this.showToolbar = this.showToolbar || o.showExport

    if (this.options.showExport) {

      if (typeof o.exportOptions === 'string') {
        o.exportOptions = Utils.calculateObjectValue(null, o.exportOptions)
      }

      this.$export = this.$toolbar.find('>.columns div.export')
      if (this.$export.length) {
        this.updateExportButton()
        return
      }

      this.buttons = Object.assign(this.buttons, {
        export: {
          html:
            () => {
              if (exportTypes.length === 1) {
                return `
                  <div class="export ${this.constants.classes.buttonsDropdown}"
                  data-type="${exportTypes[0]}">
                  <button class="${this.constants.buttonsClass}"
                  aria-label="${o.formatExport()}"
                  type="button"
                  title="${o.formatExport()}">
                  ${o.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.export) : ''}
                  ${o.showButtonText ? o.formatExport() : ''}
                  </button>
                  </div>
                `
              }

              const html = []

              html.push(`
                <div class="export ${this.constants.classes.buttonsDropdown}">
                <button class="${this.constants.buttonsClass} dropdown-toggle"
                aria-label="${o.formatExport()}"
                ${this.constants.dataToggle}="dropdown"
                type="button"
                title="${o.formatExport()}">
                ${o.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.export) : ''}
                ${o.showButtonText ? o.formatExport() : ''}
                ${this.constants.html.dropdownCaret}
                </button>
                ${this.constants.html.toolbarDropdown[0]}
              `)

              for (const type of exportTypes) {
                if (TYPE_NAME.hasOwnProperty(type)) {
                  const $item = $(Utils.sprintf(this.constants.html.pageDropdownItem, '', TYPE_NAME[type]))

                  $item.attr('data-type', type)
                  html.push($item.prop('outerHTML'))
                }
              }

              html.push(this.constants.html.toolbarDropdown[1], '</div>')
              return html.join('')
            }
        }
      })
    }

    super.initToolbar(...args)
    this.$export = this.$toolbar.find('>.columns div.export')

    if (!this.options.showExport) {
      return
    }

    this.updateExportButton()
    let $exportButtons = this.$export.find('[data-type]')

    if (exportTypes.length === 1) {
      $exportButtons = this.$export
    }

    $exportButtons.click(e => {
      e.preventDefault()
      this.exportTable({
        type: $(e.currentTarget).data('type')
      })
    })
    this.handleToolbar()
  }

  handleToolbar () {
    if (!this.$export) {
      return
    }

    if (super.handleToolbar) {
      super.handleToolbar()
    }
  }

  getExportColumns () {
    return this.columns.filter(column => hasField(column) &&
      !column.checkbox && !column.radio &&
      column.field !== this.header.stateField &&
      (column.visible || column.forceExport) &&
      !column.forceHide)
  }

  getExportValue (row, column, index) {
    const o = this.options
    const value_ = Utils.getItemField(row, column.field, o.escape, column.escape)
    const rawValue = Utils.getItemField(row, column.field)
    // Formatters keep receiving the escaped value; only keep untyped primitives
    // as the fallback so escaping still applies to arrays, objects and strings
    const keepRawType = rawValue === null || typeof rawValue === 'undefined' ||
      typeof rawValue === 'number' || typeof rawValue === 'boolean'
    const fallback = keepRawType ? rawValue : value_

    return Utils.calculateObjectValue(column,
      this.header.formatters[column.fieldIndex],
      [value_, row, index, column.field],
      fallback)
  }

  filterHiddenRows (data) {
    return data.filter(row => Utils.findIndex(this.hiddenRows, row) === -1)
  }

  collectExportData (data) {
    const o = this.options
    const exportColumns = this.getExportColumns()
    const columns = exportColumns.map(column => {
      const title = column.title ?? column.field

      return {
        field: column.field,
        title: toText(o.escape && o.escapeTitle ? Utils.escapeHTML(title) : title)
      }
    })
    // The body renderer passes each row's index in `this.getData()` to formatters,
    // so keep those positions for current-page and selected rows
    const indexes = new Map(this.getData().map((row, i) => [row, i]))
    const rows = data.map((row, i) => exportColumns.map(column =>
      this.getExportValue(row, column, indexes.get(row) ?? i)))
    // `rows` holds the raw values, `textRows` the html stripped text used by most types
    const textRows = rows.map(row => row.map(value =>
      value === null || typeof value === 'undefined' ? toText(o.undefinedText) : toText(value)))

    if (o.exportFooter) {
      const footerData = this.getFooterData()
      const hasFooterData = footerData.length > 0
      const footerRow = exportColumns.map(column => {
        const base = hasFooterData ? footerData[0][column.field] || '' : ''

        return Utils.calculateObjectValue(column,
          column.footerFormatter,
          [o.exportDataType === 'selected' ? data : this.getData(), base],
          base)
      })

      rows.push(footerRow)
      textRows.push(footerRow.map(value => toText(value)))
    }

    return { columns, rows: textRows, values: rows }
  }

  exportTable (options) {
    const o = this.options
    let selectedData = null

    // Early return for selected data type when no rows are selected,
    // unless custom data is provided
    if (o.exportDataType === 'selected' && !Array.isArray(options?.data)) {
      selectedData = this.getSelections()

      if (!selectedData.length) {
        return false
      }
    }

    const exportOptions = Utils.extend({}, o.exportOptions, options)
    const exportTypes = parseExportTypes(o.exportTypes) || []
    const type = String(exportOptions.type || exportTypes[0] || 'csv').toLowerCase()

    if (!EXPORT_TYPES.includes(type)) {
      console.warn(`bootstrap-table: unsupported export type "${type}", expected one of ${EXPORT_TYPES.join(', ')}`)
      return false
    }

    const fileName = exportOptions.fileName
    const name = typeof fileName === 'function' ? fileName() : fileName || 'table'

    const save = data => {
      if (o.beforeExport(data, type, this) === false) {
        return false
      }

      const built = buildFile(type, this.collectExportData(data), exportOptions)

      if (!built) {
        return
      }

      saveAs(built.content, built.mime, `${name}.${built.ext}`)
      return true
    }

    // Trigger export-started after early-return checks and before any export operation
    this.trigger('export-started', type)

    // Custom data takes precedence over exportDataType
    if (Array.isArray(options.data)) {
      const data = this.filterHiddenRows(options.data)
      const saved = save(data) !== false

      if (saved) {
        this.trigger('export-saved', data)
      }
      return saved
    }

    if (o.exportDataType === 'all') {
      if (o.pagination && o.sidePagination === 'server') {
        // Server side data can only be fetched completely by disabling pagination
        const virtualScroll = o.virtualScroll

        o.virtualScroll = false
        this.$el.one('post-body.bs.table', () => {
          setTimeout(() => {
            const data = this.filterHiddenRows(this.getData())
            const saved = save(data) !== false

            // Restore the pagination state even if the export was cancelled
            o.virtualScroll = virtualScroll
            this.togglePagination()

            if (saved) {
              this.trigger('export-saved', data)
            }
          }, 0)
        })
        this.togglePagination()
        return true
      }

      const data = this.filterHiddenRows(this.getData())
      const saved = save(data) !== false

      if (saved) {
        this.trigger('export-saved', data)
      }
      return saved
    }

    if (o.exportDataType === 'selected') {
      const data = this.filterHiddenRows(selectedData)
      const saved = save(data) !== false

      if (saved) {
        this.trigger('export-saved', data)
      }
      return saved
    }

    // Basic type exports the current page only, as the rendered rows did before:
    // slice the full data first, then skip hidden rows like the body renderer does
    const data = this.filterHiddenRows(
      this.getData({ useCurrentPage: true, includeHiddenRows: true })
    )
    const saved = save(data) !== false

    if (saved) {
      this.trigger('export-saved', data)
    }
    return saved
  }

  updateSelected () {
    super.updateSelected()
    this.updateExportButton()
  }

  updateExportButton () {
    if (this.options.exportDataType === 'selected') {
      this.$export.find('> button')
        .prop('disabled', !this.getSelections().length)
    }
  }
}
