/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/kayalshri/tableExport.jquery.plugin
 */

($ => {
  const Utils = $.fn.bootstrapTable.utils

  const bootstrap = {
    3: {
      icons: {
        export: 'glyphicon-export icon-share'
      },
      html: {
        dropmenu: '<ul class="dropdown-menu" role="menu"></ul>',
        dropitem: '<li role="menuitem" data-type="%s"><a href="javascript:">%s</a></li>'
      }
    },
    4: {
      icons: {
        export: 'fa-download'
      },
      html: {
        dropmenu: '<div class="dropdown-menu dropdown-menu-right"></div>',
        dropitem: '<a class="dropdown-item" data-type="%s" href="javascript:">%s</a>'
      }
    }
  }[Utils.bootstrapVersion]

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
    export: bootstrap.icons.export
  })

  $.extend($.fn.bootstrapTable.locales, {
    formatExport () {
      return 'Export data'
    }
  })
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

  $.fn.bootstrapTable.methods.push('exportTable')

  $.BootstrapTable = class extends $.BootstrapTable {
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
        ${bootstrap.html.dropmenu}
        </div>
      `).appendTo($btnGroup)

      const $menu = $export.find('.dropdown-menu')
      let exportTypes = o.exportTypes

      if (typeof exportTypes === 'string') {
        const types = exportTypes.slice(1, -1).replace(/ /g, '').split(',')
        exportTypes = types.map(t => t.slice(1, -1))
      }
      for (let type of exportTypes) {
        if (TYPE_NAME.hasOwnProperty(type)) {
          $menu.append(Utils.sprintf(bootstrap.html.dropitem, type, TYPE_NAME[type]))
        }
      }

      $menu.find('>li, >a').click(e => {
        const type = $(e.currentTarget).data('type')
        const exportOptions = {
            type: type,
            escape: false
        }

        this.exportTable(exportOptions)
      })
    }

    exportTable(options) {
      const o = this.options

      const doExport = () => {
        const that = this
        const data = this.getData()
        if (o.exportFooter) {
          const $footerRow = this.$tableFooter.find('tr').first()
          const footerData = {}
          const footerHtml = []

          $.each($footerRow.children(), function (index, footerCell) {
            var footerCellHtml = $(footerCell).children('.th-inner').first().html()
            footerData[that.columns[index].field] = footerCellHtml === '&nbsp;' ? null : footerCellHtml

            // grab footer cell text into cell index-based array
            footerHtml.push(footerCellHtml)
          })

          this.append(footerData)

          var $lastTableRow = this.$body.children().last()

          $.each($lastTableRow.children(), function (index, lastTableRowCell) {
            $(lastTableRowCell).html(footerHtml[index])
          })
        }

        this.$el.tableExport($.extend({}, o.exportOptions, options))

        if (o.exportFooter) {
          this.load(data)
        }
      }

      const stateField = this.header.stateField

      if (o.exportDataType === 'all' && o.pagination) {
        const eventName = o.sidePagination === 'server'
          ? 'post-body.bs.table' : 'page-change.bs.table'
        this.$el.one(eventName, () => {
          if (stateField) {
            this.hideColumn(stateField)
          }
          doExport()
          this.togglePagination()
        })
        this.togglePagination()
      } else if (o.exportDataType === 'selected') {
        let data = this.getData()
        let selectedData = this.getSelections()
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
    }
  }
})(jQuery)
