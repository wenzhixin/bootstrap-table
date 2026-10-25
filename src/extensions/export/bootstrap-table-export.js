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

const csvEscape = (value, delimiter) => {
  const d = delimiter || ','
  const str = stringifyValue(value)

  return str.includes(d) || str.includes('"') || str.includes('\n') || str.includes('\r') ?
    `"${str.replace(/"/g, '""')}"` : str
}

// Strip HTML tags and decode entities, mimicking jQuery's `.text()` semantics
const toText = value => {
  if (value === null || typeof value === 'undefined') {
    return ''
  }

  return DOMHelper.text(DOMHelper.html(DOMHelper.create('<div></div>'), stringifyValue(value)))
}

const escapeXmlText = value => stringifyValue(value)
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

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }

  return `'${toText(value).replace(/'/g, '\'\'')}'`
}

const buildSqlColumns = columns => columns.map((column, i) =>
  `\`${escapeSqlIdentifier(column.field || `col${i + 1}`)}\``)

const buildXmlTags = columns => {
  const used = new Set()

  return columns.map((column, i) => {
    let tag = sanitizeXmlTag(column.field, `col${i + 1}`)

    if (used.has(tag)) {
      tag = `${tag}_${i + 1}`
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
        lines.push(headerRow.join('\t'))
      }

      rows.forEach(row => lines.push(row.join('\t')))

      return {
        mime: 'text/plain;charset=utf-8',
        ext: 'txt',
        content: lines.join('\r\n')
      }
    }
    case 'json': {
      const objects = values.map(rowValues => {
        const object = {}

        columns.forEach((column, i) => {
          object[column.field] = rowValues[i]
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
  exportFooter: false
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
  onExportStarted () {
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
    let exportTypes = o.exportTypes

    this.showToolbar = this.showToolbar || o.showExport

    if (this.options.showExport) {

      if (typeof exportTypes === 'string') {
        const types = exportTypes.slice(1, -1).replace(/ /g, '').split(',')

        exportTypes = types.map(t => t.slice(1, -1))
      }

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
    return this.columns.filter(column => column.field &&
      column.field !== this.header.stateField &&
      (column.visible || column.forceExport) &&
      !column.forceHide)
  }

  getExportValue (row, column) {
    const o = this.options
    const value_ = Utils.getItemField(row, column.field, o.escape, column.escape)

    return Utils.calculateObjectValue(column,
      this.header.formatters[column.fieldIndex],
      [value_, row, row.index, column.field],
      value_)
  }

  collectExportData (data) {
    const o = this.options
    const exportColumns = this.getExportColumns()
    const columns = exportColumns.map(column => {
      const title = column.title || column.field

      return {
        field: column.field,
        title: toText(o.escape && o.escapeTitle ? Utils.escapeHTML(title) : title)
      }
    })
    const rows = data.map(row => exportColumns.map(column => this.getExportValue(row, column)))
    // `rows` holds the raw values, `textRows` the html stripped text used by most types
    const textRows = rows.map(row => row.map(value => toText(value)))

    if (o.exportFooter) {
      const footerData = this.getFooterData()

      if (footerData.length) {
        const footerRow = exportColumns.map(column => {
          const base = footerData[0][column.field] || ''

          return Utils.calculateObjectValue(column,
            column.footerFormatter,
            [this.getData(), base],
            base)
        })

        rows.push(footerRow)
        textRows.push(footerRow.map(value => toText(value)))
      }
    }

    return { columns, rows: textRows, values: rows }
  }

  exportTable (options) {
    const o = this.options
    let selectedData = null

    // Early return for selected data type when no rows are selected
    if (o.exportDataType === 'selected') {
      selectedData = this.getSelections()

      if (!selectedData.length) {
        return false
      }
    }

    const exportOptions = Utils.extend({}, o.exportOptions, options)
    const type = String(exportOptions.type || o.exportTypes[0] || 'csv').toLowerCase()

    if (!EXPORT_TYPES.includes(type)) {
      console.warn(`bootstrap-table: unsupported export type "${type}", expected one of ${EXPORT_TYPES.join(', ')}`)
      return false
    }

    const fileName = exportOptions.fileName
    const name = typeof fileName === 'function' ? fileName() : fileName || 'table'

    const save = data => {
      const built = buildFile(type, this.collectExportData(data), exportOptions)

      if (!built) {
        return
      }

      saveAs(built.content, built.mime, `${name}.${built.ext}`)
    }

    // Trigger export-started after early-return checks and before any export operation
    this.trigger('export-started')

    if (o.exportDataType === 'all') {
      if (o.pagination && o.sidePagination === 'server') {
        // Server side data can only be fetched completely by disabling pagination
        const virtualScroll = o.virtualScroll

        o.virtualScroll = false
        this.$el.one('post-body.bs.table', () => {
          setTimeout(() => {
            const data = this.getData()

            save(data)
            o.virtualScroll = virtualScroll
            this.togglePagination()
            this.trigger('export-saved', data)
          }, 0)
        })
        this.togglePagination()
        return true
      }

      const data = this.getData()

      save(data)
      this.trigger('export-saved', data)
      return true
    }

    if (o.exportDataType === 'selected') {
      save(selectedData)
      this.trigger('export-saved', selectedData)
      return true
    }

    // Basic type exports the current page only, as the rendered rows did before
    save(this.getData({ useCurrentPage: true }))
    this.trigger('export-saved', this.getData(true))
    return true
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
