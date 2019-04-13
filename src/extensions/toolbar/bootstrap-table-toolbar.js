/**
 * @author: aperez <aperez@datadec.es>
 * @version: v2.0.0
 *
 * @update Dennis Hernández <http://djhvscf.github.io/Blog>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

($ => {
  const Utils = $.fn.bootstrapTable.utils

  const bootstrap = {
    3: {
      icons: {
        advancedSearchIcon: 'glyphicon-chevron-down'
      },
      html: {
        modalHeader: `
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">%s</h4>
          </div>
        `
      }
    },
    4: {
      icons: {
        advancedSearchIcon: 'fa-chevron-down'
      },
      html: {
        modalHeader: `
          <div class="modal-header">
            <h4 class="modal-title">%s</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        `
      }
    }
  }[Utils.bootstrapVersion]

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
    advancedSearchIcon: bootstrap.icons.advancedSearchIcon
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
      const o = this.options

      this.showToolbar = this.showToolbar ||
        (o.search &&
        o.advancedSearch &&
        o.idTable)

      super.initToolbar()

      if (!o.search || !o.advancedSearch || !o.idTable) {
        return
      }

      this.$toolbar.find('>.btn-group').append(`
        <button class="btn btn-default${Utils.sprintf(' btn-%s', o.buttonsClass)}${Utils.sprintf(' btn-%s', o.iconSize)}"
          type="button"
          name="advancedSearch"
          aria-label="advanced search"
          title="${o.formatAdvancedSearch()}">
        <i class="${o.iconsPrefix} ${o.icons.advancedSearchIcon}"></i>
        </button>
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
                ${Utils.sprintf(bootstrap.html.modalHeader, o.formatAdvancedSearch())}
                <div class="modal-body modal-body-custom">
                  <div class="container-fluid" id="avdSearchModalContent_${o.idTable}"
                    style="padding-right: 0px; padding-left: 0px;" >
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" id="btnCloseAvd_${o.idTable}" class="btn btn-${o.buttonsClass}">
                    ${o.formatAdvancedCloseButton()}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `)

        let timeoutId = 0

        $(`#avdSearchModalContent_${o.idTable}`).append(this.createFormAvd().join(''))

        $(`#${o.idForm}`).off('keyup blur', 'input').on('keyup blur', 'input', e => {
          if (o.sidePagination === 'server') {
            this.onColumnAdvancedSearch(e)
          } else {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
              this.onColumnAdvancedSearch(e)
            }, o.searchTimeOut)
          }
        })

        $(`#btnCloseAvd_${o.idTable}`).click(() => {
          $(`#avdSearchModal_${o.idTable}`).modal('hide')
          if (o.sidePagination === 'server') {
            this.options.pageNumber = 1
            this.updatePagination()
            this.trigger('column-advanced-search', this.filterColumnsPartial)
          }
        })

        $(`#avdSearchModal_${o.idTable}`).modal()
      } else {
        $(`#avdSearchModal_${o.idTable}`).modal()
      }
    }

    createFormAvd () {
      const o = this.options
      const html = [`<form class="form-horizontal" id="${o.idForm}" action="${o.actionForm}">`]

      for (const column of this.columns) {
        if (!column.checkbox && column.visible && column.searchable) {
          html.push(`
            <div class="form-group row">
              <label class="col-sm-4 control-label">${column.title}</label>
              <div class="col-sm-6">
                <input type="text" class="form-control input-md" name="${column.field}" placeholder="${column.title}" id="${column.field}">
              </div>
            </div>
          `)
        }
      }

      html.push('</form>')

      return html
    }

    initSearch () {
      super.initSearch()

      if (!this.options.advancedSearch || this.options.sidePagination === 'server') {
        return
      }

      const fp = $.isEmptyObject(this.filterColumnsPartial) ? null : this.filterColumnsPartial

      this.data = fp ? $.grep(this.data, (item, i) => {
        for (const [key, v] of Object.entries(fp)) {
          const fval = v.toLowerCase()
          let value = item[key]
          const index = this.header.fields.indexOf(key)
          value = Utils.calculateObjectValue(this.header,
            this.header.formatters[index], [value, item, i], value)

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

      if (this.options.sidePagination !== 'server') {
        this.options.pageNumber = 1
        this.onSearch(e)
        this.updatePagination()
        this.trigger('column-advanced-search', $field, text)
      }
    }
  }
})(jQuery)
