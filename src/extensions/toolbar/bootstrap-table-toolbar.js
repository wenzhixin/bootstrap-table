/**
 * @author: aperez <aperez@datadec.es>
 * @version: v2.0.0
 *
 * @update Dennis Hernández <http://djhvscf.github.io/Blog>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

($ => {
  const Utils = $.fn.bootstrapTable.utils

  $.extend($.fn.bootstrapTable.defaults, {
    advancedSearch: false,
    idForm: 'advancedSearch',
    actionForm: '',
    idTable: undefined,
    onColumnAdvancedSearch (field, text) {
      return false
    }
  })

  $.extend($.fn.bootstrapTable.defaults.icons, {
    advancedSearchIcon: 'glyphicon-chevron-down'
  })

  $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
    'column-advanced-search.bs.table': 'onColumnAdvancedSearch'
  })

  $.extend($.fn.bootstrapTable.locales, {
    formatAdvancedSearch () {
      return 'Advanced search'
    },
    formatAdvancedCloseButton () {
      return 'Close'
    }
  })

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

  $.BootstrapTable = class extends $.BootstrapTable {
    initToolbar () {
      super.initToolbar()

      const o = this.options
      if (!o.search || !o.advancedSearch || !o.idTable) {
        return
      }

      this.$toolbar.prepend(`
        <div class="columns columns-${o.buttonsAlign} btn-group pull-${o.buttonsAlign}" role="group">
        <button class="btn btn-default${Utils.sprintf(' btn-%s', o.buttonsClass)}${Utils.sprintf(' btn-%s', o.iconSize)}"
          type="button"
          name="advancedSearch"
          aria-label="advanced search"
          title="${o.formatAdvancedSearch()}">
        <i class="${o.iconsPrefix} ${o.icons.advancedSearchIcon}"></i>
        </button></div>
      `)

      this.$toolbar.find('button[name="advancedSearch"]').off('click').on('click', () => this.showAvdSearch())
    }

    showAvdSearch () {
      const o = this.options

      if (!$(`#avdSearchModal_${o.idTable}`).hasClass('modal')) {
        $('body').append(`
          <div id="avdSearchModal_${o.idTable}"  class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xs">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
                  <h4 class="modal-title">${o.formatAdvancedSearch()}</h4>
                </div>
                <div class="modal-body modal-body-custom">
                  <div class="container-fluid" id="avdSearchModalContent_${o.idTable}" style="padding-right: 0px; padding-left: 0px;" >
                  </div>
                </div>
              </div>
            </div>
          </div>
        `)

        let timeoutId = 0

        $(`#avdSearchModalContent_${o.idTable}`).append(this.createFormAvd().join(''))

        $(`#${o.idForm}`).off('keyup blur', 'input').on('keyup blur', 'input', e => {
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => {
            this.onColumnAdvancedSearch(e)
          }, o.searchTimeOut)
        })

        $(`#btnCloseAvd_${o.idTable}`).click(() => {
          $(`#avdSearchModal_${o.idTable}`).modal('hide')
        })

        $(`#avdSearchModal_${o.idTable}`).modal()
      } else {
        $(`#avdSearchModal_${o.idTable}`).modal()
      }
    }

    createFormAvd () {
      const o = this.options
      const html = [`<form class="form-horizontal" id="${o.idForm}" action="${o.actionForm}">`]

      for (let column of this.columns) {
        if (!column.checkbox && column.visible && column.searchable) {
          html.push(`
            <div class="form-group">
              <label class="col-sm-4 control-label">${column.title}</label>
              <div class="col-sm-6">
                <input type="text" class="form-control input-md" name="${column.field}" placeholder="${column.title}" id="${column.field}">
              </div>
            </div>
          `)
        }
      }

      html.push(`
        <div class="form-group">
          <div class="col-sm-offset-9 col-sm-3">
            <button type="button" id="btnCloseAvd_${o.idTable}" class="btn btn-default">${o.formatAdvancedCloseButton()}</button>
          </div>
        </div>
      `)
      html.push('</form>')

      return html
    }

    initSearch () {
      super.initSearch()

      if (!this.options.advancedSearch) {
        return
      }

      const fp = $.isEmptyObject(this.filterColumnsPartial) ? null : this.filterColumnsPartial

      this.data = fp ? $.grep(this.data, function (item, i) {
        for (const key in fp) {
          const fval = fp[key].toLowerCase()
          let value = item[key]
          const index = this.header.fields.indexOf(key)
          value = Utils.calculateObjectValue(this.header, this.header.formatters[index], [value, item, i], value)

          if (
            !(index !== -1 &&
            (typeof value === 'string' || typeof value === 'number') &&
            (`${value}`).toLowerCase().includes(fval))
          ) {
            return false
          }
        }
        return true
      }) : this.data
    }

    onColumnAdvancedSearch (e) {
      const text = $.trim($(e.currentTarget).val())
      const $field = $(e.currentTarget)[0].id

      if ($.isEmptyObject(this.filterColumnsPartial)) {
        this.filterColumnsPartial = {}
      }
      if (text) {
        this.filterColumnsPartial[$field] = text
      } else {
        delete this.filterColumnsPartial[$field]
      }

      this.options.pageNumber = 1
      this.onSearch(e)
      this.updatePagination()
      this.trigger('column-advanced-search', $field, text)
    }
  }
})(jQuery)
