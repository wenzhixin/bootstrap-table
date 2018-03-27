/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/kayalshri/tableExport.jquery.plugin
 */

($ => {
  const utils = $.fn.bootstrapTable.utils
  const BootstrapTable = $.fn.bootstrapTable.Constructor

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

  $.extend($.fn.bootstrapTable.defaults, {
    showExport: false,
    exportDataType: 'basic', // basic, all, selected
    exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
    exportOptions: {},
    exportFooter: false
  })

  $.extend($.fn.bootstrapTable.defaults.icons, {
    export: {
      3: 'glyphicon-export icon-share',
      4: 'fa-download'
    }[utils.bootstrapVersion]
  })

  $.extend($.fn.bootstrapTable.locales, {
    formatExport() {
      return 'Export data'
    }
  })
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

  $.fn.bootstrapTable.Constructor = class extends BootstrapTable {
    initToolbar () {
      const o = this.options

      this.showToolbar = this.showToolbar || o.showExport

      super.initToolbar()

      if (!this.options.showExport) {
        return
      }
      const $btnGroup = this.$toolbar.find('>.btn-group')
      let $export = $btnGroup.find('div.export')

      if ($export.length) {
        return
      }
      $export = $(`
        <div class="export btn-group">
        <button class="btn btn-${o.buttonsClass} btn-${o.iconSize} dropdown-toggle"
          aria-label="export type"
          title="${o.formatExport()}"
          data-toggle="dropdown"
          type="button">
          <i class="${o.iconsPrefix} ${o.icons.export}"></i>
          <span class="caret"></span>
        </button>
        ${utils.bs.toobarDropdowHtml[0]}
        ${utils.bs.toobarDropdowHtml[1]}
        </div>
      `).appendTo($btnGroup)

      const $menu = $export.find('.dropdown-menu')
      let exportTypes = o.exportTypes

      if (typeof exportTypes === 'string') {
        const types = exportTypes.slice(1, -1).replace(/ /g, '').split(',')
        exportTypes = types.map(t => t.slice(1, -1))
      }
      for (type of exportTypes) {
        if (TYPE_NAME.hasOwnProperty(type)) {
          const item = utils.bootstrapVersion === 4 ?
            TYPE_NAME[type] : `<a href="javascript:void(0)">${TYPE_NAME[type]}</a>`
          const $item = $(utils.sprintf(utils.bs.toobarDropdowItemHtml, item))
          $item.attr('data-type', type)
          $menu.append($item)
        }
      }

      $menu.find('>li, >label').click(e => {
        const type = $(e.currentTarget).data('type')
        const doExport = () => {
          if (o.exportFooter) {
            const data = this.getData()
            const $footerRow = this.$tableFooter.find('tr').first()

            const footerData = {}
            const footerHtml = []

            $.each($footerRow.children(), function(index, footerCell) {

              var footerCellHtml = $(footerCell).children(".th-inner").first().html()
              footerData[this.columns[index].field] = footerCellHtml == '&nbsp;' ? null : footerCellHtml

              // grab footer cell text into cell index-based array
              footerHtml.push(footerCellHtml)
            })

            this.append(footerData)

            var $lastTableRow = this.$body.children().last()

            $.each($lastTableRow.children(), function(index, lastTableRowCell) {

              $(lastTableRowCell).html(footerHtml[index])
            })
          }

          this.$el.tableExport($.extend({}, o.exportOptions, {
            type: type,
            escape: false
          }))

          if (o.exportFooter) {
            this.load(data)
          }
        }

        const stateField = this.header.stateField

        if (o.exportDataType === 'all' && o.pagination) {
          this.$el.one(o.sidePagination === 'server' ? 'post-body.bs.table' : 'page-change.bs.table', () => {
            if (stateField) {
              this.hideColumn(stateField)
            }
            doExport()
            this.togglePagination()
          })
          this.togglePagination()
        } else if (o.exportDataType === 'selected') {
          const data = this.getData()
          const selectedData = this.getSelections()
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
          if (stateField) {
            this.hideColumn(stateField)
          }
          doExport()
          this.load(data)
        } else {
          if (stateField) {
            this.hideColumn(stateField)
          }
          doExport()
        }
        if (stateField) {
          this.showColumn(stateField)
        }
      })
    }
  }

})(jQuery)
