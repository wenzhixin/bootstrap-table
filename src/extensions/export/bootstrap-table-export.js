/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/hhurz/tableExport.jquery.plugin
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

Object.assign($.fn.bootstrapTable.defaults.icons, {
  export: {
    bootstrap3: 'glyphicon-export icon-share',
    bootstrap5: 'bi-download',
    materialize: 'file_download',
    'bootstrap-table': 'icon-download'
  }[$.fn.bootstrapTable.theme] || 'fa-download'
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

  exportTable (options) {
    const o = this.options
    const stateField = this.header.stateField
    const isCardView = o.cardView

    const doExport = callback => {
      this.trigger('export-started')
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

        $.each($footerRow.children(), (index, footerCell) => {
          const footerCellHtml = $(footerCell).children('.th-inner').first().html()

          footerData[this.columns[index].field] = footerCellHtml === '&nbsp;' ? null : footerCellHtml

          // grab footer cell text into cell index-based array
          footerHtml.push(footerCellHtml)
        })

        this.$body.append(this.$body.children().last()[0].outerHTML)
        const $lastTableRow = this.$body.children().last()

        $.each($lastTableRow.children(), (index, lastTableRowCell) => {
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

      this.$el.tableExport(Utils.extend({
        onAfterSaveToFile: () => {
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
      }, o.exportOptions, options))
    }

    if (o.exportDataType === 'all' && o.pagination) {
      const eventName = o.sidePagination === 'server' ?
        'post-body.bs.table' : 'page-change.bs.table'
      const virtualScroll = this.options.virtualScroll

      this.$el.one(eventName, () => {
        setTimeout(() => {
          doExport(() => {
            this.options.virtualScroll = virtualScroll
            this.togglePagination()
          })
        }, 0)
      })
      this.options.virtualScroll = false
      this.togglePagination()
      this.trigger('export-saved', this.getData())
    } else if (o.exportDataType === 'selected') {
      let data = this.getData()
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
