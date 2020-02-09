/**
 * @author: aperez <aperez@datadec.es>
 * @version: v2.0.0
 *
 * @update Dennis Hernández <http://djhvscf.github.io/Blog>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

const bootstrap = {
  bootstrap3: {
    icons: {
      advancedSearchIcon: 'glyphicon-chevron-down'
    },
    html: {
      modal: `
        <div id="avdSearchModal_%s"  class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xs">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">%s</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body modal-body-custom">
                <div class="container-fluid" id="avdSearchModalContent_%s"
                  style="padding-right: 0px; padding-left: 0px;" >
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" id="btnCloseAvd_%s" class="btn btn-%s">%s</button>
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  bootstrap4: {
    icons: {
      advancedSearchIcon: 'fa-chevron-down'
    },
    html: {
      modal: `
        <div id="avdSearchModal_%s"  class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xs">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">%s</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body modal-body-custom">
                <div class="container-fluid" id="avdSearchModalContent_%s"
                  style="padding-right: 0px; padding-left: 0px;" >
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" id="btnCloseAvd_%s" class="btn btn-%s">%s</button>
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  bulma: {
    icons: {
      advancedSearchIcon: 'fa-chevron-down'
    },
    html: {
      modal: `
        <div class="modal" id="avdSearchModal_%s">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">%s</p>
              <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body" id="avdSearchModalContent_%s"></section>
            <footer class="modal-card-foot">
              <button class="button" id="btnCloseAvd_%s" data-close="btn btn-%s">%s</button>
            </footer>
          </div>
        </div>
      `
    }
  },
  foundation: {
    icons: {
      advancedSearchIcon: 'fa-chevron-down'
    },
    html: {
      modal: `
        <div class="reveal" id="avdSearchModal_%s" data-reveal>
          <h1>%s</h1>
          <div id="avdSearchModalContent_%s">
          
          </div>
          <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
          
          <button id="btnCloseAvd_%s" class="%s" type="button">%s</button>
        </div>
      `
    }
  },
  materialize: {
    icons: {
      advancedSearchIcon: 'expand_more'
    },
    html: {
      modal: `
        <div id="avdSearchModal_%s" class="modal">
          <div class="modal-content">
            <h4>%s</h4>
            <div id="avdSearchModalContent_%s">
            
            </div>
          </div>
          <div class="modal-footer">
            <a href="javascript:void(0)"" id="btnCloseAvd_%s" class="modal-close waves-effect waves-green btn-flat %s">%s</a>
          </div>
        </div>
      `
    }
  },
  semantic: {
    icons: {
      advancedSearchIcon: 'fa-chevron-down'
    },
    html: {
      modal: `
        <div class="ui modal" id="avdSearchModal_%s">
          <i class="close icon"></i>
          <div class="header">
            %s
          </div>
          <div class="image content ui form" id="avdSearchModalContent_%s"></div>
          <div class="actions">
            <div id="btnCloseAvd_%s" class="ui black deny button %s">%s</div>
          </div>
        </div>
      `
    }
  }
}[$.fn.bootstrapTable.theme]

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

    this.$toolbar.find('>.columns').append(`
      <button class="${this.constants.buttonsClass} "
        type="button"
        name="advancedSearch"
        aria-label="advanced search"
        title="${o.formatAdvancedSearch()}">
        ${ this.options.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.advancedSearchIcon) : ''}
        ${ this.options.showButtonText ? this.options.formatAdvancedSearch() : ''}
      </button>
    `)

    this.$toolbar.find('button[name="advancedSearch"]').off('click').on('click', () => this.showAvdSearch())
  }

  showAvdSearch () {
    const o = this.options
    const modalSelector = '#avdSearchModal_' + o.idTable
    if ($(modalSelector).length <= 0) {
      $('body').append(Utils.sprintf(bootstrap.html.modal, o.idTable, o.formatAdvancedSearch(), o.idTable, o.idTable, o.buttonsClass, o.formatAdvancedCloseButton()))

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

      $(`#btnCloseAvd_${o.idTable}`).click(() => this.hideModal())

      if ($.fn.bootstrapTable.theme === 'bulma') {
        $(modalSelector).find('.delete').off('click').on('click', () => this.hideModal())
      }

      this.showModal()
    } else {
      this.showModal()
    }
  }

  showModal () {
    const modalSelector = '#avdSearchModal_' + this.options.idTable
    if ($.inArray($.fn.bootstrapTable.theme, ['bootstrap3', 'bootstrap4']) !== -1) {
      $(modalSelector).modal()
    } else if ($.fn.bootstrapTable.theme === 'bulma') {
      $(modalSelector).toggleClass('is-active')
    } else if ($.fn.bootstrapTable.theme === 'foundation') {
      if (!this.toolbarModal) {
        // eslint-disable-next-line no-undef
        this.toolbarModal = new Foundation.Reveal($(modalSelector))
      }
      this.toolbarModal.open()
    } else if ($.fn.bootstrapTable.theme === 'materialize') {
      $(modalSelector).modal()
      $(modalSelector).modal('open')
    } else if ($.fn.bootstrapTable.theme === 'semantic') {
      $(modalSelector).modal('show')
    }

  }

  hideModal () {
    const $closeModalButton = $(`#avdSearchModal_${this.options.idTable}`)
    const modalSelector = '#avdSearchModal_' + this.options.idTable
    if ($.inArray($.fn.bootstrapTable.theme, ['bootstrap3', 'bootstrap4']) !== -1) {
      $closeModalButton.modal('hide')
    } else if ($.fn.bootstrapTable.theme === 'bulma') {
      $('html').toggleClass('is-clipped')
      $(modalSelector).toggleClass('is-active')
    } else if ($.fn.bootstrapTable.theme === 'foundation') {
      this.toolbarModal.close()
    } else if ($.fn.bootstrapTable.theme === 'materialize') {
      $(modalSelector).modal('open')
    } else if ($.fn.bootstrapTable.theme === 'semantic') {
      $(modalSelector).modal('close')
    }

    if (this.options.sidePagination === 'server') {
      this.options.pageNumber = 1
      this.updatePagination()
      this.trigger('column-advanced-search', this.filterColumnsPartial)
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
              <input type="text" class="form-control ${this.constants.classes.input}" name="${column.field}" placeholder="${column.title}" id="${column.field}">
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

    this.data = fp ? this.data.filter((item, i) => {
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
