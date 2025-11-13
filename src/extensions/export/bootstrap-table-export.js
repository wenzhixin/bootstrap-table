/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * Built-in export implementation (replacing deprecated tableExport.jquery.plugin)
 */

const Utils = $.fn.bootstrapTable.utils

const TYPE_NAME = {
  json: 'JSON',
  xml: 'XML',
  png: 'PNG',
  csv: 'CSV',
  txt: 'TXT',
  sql: 'SQL',
  doc: 'MS-Word',
  excel: 'MS-Excel',
  xlsx: 'MS-Excel (OpenXML)',
  powerpoint: 'MS-Powerpoint',
  pdf: 'PDF'
}

Object.assign($.fn.bootstrapTable.defaults, {
  showExport: false,
  exportDataType: 'basic', // basic, all, selected
  exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
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
      this.trigger('export-started')
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

  exportTable (options) {
    const o = this.options
    const stateField = this.header.stateField
    const isCardView = o.cardView

    // Helper: escape CSV field
    const csvEscape = (value, delimiter) => {
      const d = delimiter || ','
      if (value == null) return ''
      const str = String(value)
      const mustQuote = str.includes(d) || str.includes('"') || str.includes('\n') || str.includes('\r')
      if (!mustQuote) return str
      return `"${str.replace(/"/g, '""')}"`
    }

    // Helper: build a 2D array of visible table content from DOM
    const collectTableMatrix = (ignoreColumnIdxs) => {
      const ignore = new Set((ignoreColumnIdxs || []).map(i => Number(i)))
      const headerRow = []
      const headerTr = this.$el.find('thead tr').last()
      const $ths = headerTr.children()
      $ths.each((idx, th) => {
        if ($(th).is(':visible') && !ignore.has(idx)) {
          headerRow.push($(th).text().trim())
        }
      })

      const rows = []
      const $trs = this.$el.find('tbody > tr:visible')
      $trs.each((_, tr) => {
        // skip detail view rows or non-data rows
        const $tr = $(tr)
        if ($tr.hasClass('detail-view') || $tr.hasClass('no-records-found')) return
        const row = []
        $tr.children().each((idx, td) => {
          if ($(td).is(':visible') && !ignore.has(idx)) {
            row.push($(td).text().trim())
          }
        })
        if (row.length) rows.push(row)
      })
      return { headerRow, rows }
    }

    // Helper: convert to content by type
    const buildFile = (type, matrix, exportOptions) => {
      const delimiter = exportOptions && exportOptions.csvDelimiter ? exportOptions.csvDelimiter : ','
      const tableName = (exportOptions && exportOptions.tableName) || 'table'
      const { headerRow, rows } = matrix
      switch (type) {
        case 'csv': {
          const lines = []
          if (headerRow.length) lines.push(headerRow.map(h => csvEscape(h, delimiter)).join(delimiter))
          rows.forEach(r => lines.push(r.map(v => csvEscape(v, delimiter)).join(delimiter)))
          return { mime: 'text/csv;charset=utf-8', ext: 'csv', content: lines.join('\r\n') }
        }
        case 'txt': {
          const d = '\t'
          const lines = []
          if (headerRow.length) lines.push(headerRow.join(d))
          rows.forEach(r => lines.push(r.join(d)))
          return { mime: 'text/plain;charset=utf-8', ext: 'txt', content: lines.join('\r\n') }
        }
        case 'json': {
          const objs = []
          if (headerRow.length) {
            rows.forEach(r => {
              const obj = {}
              headerRow.forEach((h, i) => { obj[h || `col${i + 1}`] = r[i] })
              objs.push(obj)
            })
          } else {
            rows.forEach(r => objs.push(r))
          }
          return { mime: 'application/json;charset=utf-8', ext: 'json', content: JSON.stringify(objs, null, 2) }
        }
        case 'xml': {
          const esc = s => String(s == null ? '' : s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;')
          const lines = ['<?xml version="1.0" encoding="UTF-8"?>', `<${tableName}>`]
          rows.forEach(r => {
            lines.push('  <row>')
            r.forEach((v, i) => {
              const key = headerRow[i] || `col${i + 1}`
              lines.push(`    <${key}>${esc(v)}</${key}>`)
            })
            lines.push('  </row>')
          })
          lines.push(`</${tableName}>`)
          return { mime: 'application/xml;charset=utf-8', ext: 'xml', content: lines.join('\n') }
        }
        case 'sql': {
          const cols = headerRow.map(h => (h || '').replace(/`/g, '``') || null).map((c, i) => c || `col${i + 1}`)
          const values = rows.map(r => '(' + r.map(v => {
            if (v == null || v === '') return 'NULL'
            const s = String(v).replace(/'/g, "''")
            return `'${s}'`
          }).join(', ') + ')')
          const sql = `INSERT INTO \`${tableName}\` (\`${cols.join('`, `')}\`) VALUES\n${values.join(',\n')};`
          return { mime: 'application/sql;charset=utf-8', ext: 'sql', content: sql }
        }
        case 'excel': {
          // Map to CSV for compatibility with legacy default 'excel' option
          const csv = buildFile('csv', matrix, exportOptions)
          return { mime: 'application/vnd.ms-excel', ext: 'xls', content: csv.content }
        }
        default:
          return null
      }
    }

    // Helper: trigger browser download
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

    const doExport = callback => {
      if (stateField) {
        this.hideColumn(stateField)
      }
      if (isCardView) {
        this.toggleView()
      }

      this.columns.forEach(row => {
        if (row.forceHide) {
          this.hideColumn(row.field)
        }
      })

      const data = this.getData()

      if (o.detailView && o.detailViewIcon) {
        const detailViewIndex = o.detailViewAlign === 'left' ? 0 : this.getVisibleFields().length + Utils.getDetailViewIndexOffset(this.options)

        o.exportOptions.ignoreColumn = [detailViewIndex].concat(o.exportOptions.ignoreColumn || [])
      }

      if (o.exportFooter && o.height) {
        const $footerRow = this.$tableFooter.find('tr').first()
        const footerData = {}
        const footerHtml = []

        $footerRow.children().forEach((footerCell, index) => {
          const footerCellHtml = $(footerCell).children('.th-inner').first().html()

          footerData[this.columns[index].field] = footerCellHtml === '&nbsp;' ? null : footerCellHtml

          // grab footer cell text into cell index-based array
          footerHtml.push(footerCellHtml)
        })

        this.$body.append(this.$body.children().last()[0].outerHTML)
        const $lastTableRow = this.$body.children().last()

        $lastTableRow.children().forEach((lastTableRowCell, index) => {
          $(lastTableRowCell).html(footerHtml[index])
        })
      }

      const hiddenColumns = this.getHiddenColumns()

      hiddenColumns.forEach(row => {
        if (row.forceExport) {
          this.showColumn(row.field)
        }
      })

      if (typeof o.exportOptions.fileName === 'function') {
        options.fileName = o.exportOptions.fileName()
      }

      // Build content and save without external plugin
      const effective = Utils.extend({}, o.exportOptions, options)
      const type = (effective.type || 'csv').toLowerCase()
      const ignoreIdx = effective.ignoreColumn
      const matrix = collectTableMatrix(ignoreIdx)
      const built = buildFile(type, matrix, effective)

      const onAfter = () => {
        if (o.exportFooter) {
          this.load(data)
        }

        if (stateField) {
          this.showColumn(stateField)
        }
        if (isCardView) {
          this.toggleView()
        }

        hiddenColumns.forEach(row => {
          if (row.forceExport) {
            this.hideColumn(row.field)
          }
        })

        this.columns.forEach(row => {
          if (row.forceHide) {
            this.showColumn(row.field)
          }
        })

        if (callback) callback()
      }

      if (!built) {
        // unsupported type without deprecated plugin; no-op but still restore state
        onAfter()
        return
      }

      const fileBase = effective.fileName || 'table-export'
      const filename = `${fileBase}.${built.ext}`
      saveAs(built.content, built.mime, filename)
      onAfter()
    }

    if (o.exportDataType === 'all' && o.pagination) {
      const eventName = o.sidePagination === 'server' ?
        'post-body.bs.table' : 'page-change.bs.table'
      const virtualScroll = this.options.virtualScroll

      this.$el.one(eventName, () => {
        setTimeout(() => {
          const data = this.getData()

          doExport(() => {
            this.options.virtualScroll = virtualScroll
            this.togglePagination()
          })
          this.trigger('export-saved', data)
        }, 0)
      })
      this.options.virtualScroll = false
      this.togglePagination()
    } else if (o.exportDataType === 'selected') {
      let data = this.getData({
        includeHiddenRows: true,
        unfiltered: true
      })
      let selectedData = this.getSelections()
      const pagination = o.pagination

      if (!selectedData.length) {
        return
      }

      if (o.sidePagination === 'server') {
        data = {
          total: o.totalRows,
          [this.options.dataField]: data
        }
        selectedData = {
          total: selectedData.length,
          [this.options.dataField]: selectedData
        }
      }

      this.load(selectedData)
      if (pagination) {
        this.togglePagination()
      }
      doExport(() => {
        if (pagination) {
          this.togglePagination()
        }
        this.load(data)
      })
      this.trigger('export-saved', selectedData)
    } else {
      doExport()
      this.trigger('export-saved', this.getData(true))
    }
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
