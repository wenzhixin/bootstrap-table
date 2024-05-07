/**
 * @author: aperez <aperez@datadec.es>
 * @version: v2.0.0
 *
 * @update Dennis Hernández
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

const theme = {
  bootstrap3: {
    icons: {
      advancedSearchIcon: 'glyphicon-chevron-down'
    },
    classes: {},
    html: {
      modal: `
        <div id="avdSearchModal_%s"  class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xs">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">%s</h4>
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
    classes: {},
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
                  style="padding-right: 0; padding-left: 0;" >
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
  bootstrap5: {
    icons: {
      advancedSearchIcon: 'bi-chevron-down'
    },
    classes: {
      formGroup: 'mb-3'
    },
    html: {
      modal: `
        <div id="avdSearchModal_%s" class="modal fade" tabindex="-1" aria-labelledby="mySmallModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xs">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">%s</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body modal-body-custom">
                <div class="container-fluid" id="avdSearchModalContent_%s"
                  style="padding-right: 0; padding-left: 0;" >
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
    classes: {},
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
    classes: {},
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
    classes: {},
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
    classes: {},
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

Object.assign($.fn.bootstrapTable.defaults, {
  advancedSearch: false,
  idForm: 'advancedSearch',
  actionForm: '',
  idTable: undefined,
  // eslint-disable-next-line no-unused-vars
  onColumnAdvancedSearch (field, text) {
    return false
  }
})

Object.assign($.fn.bootstrapTable.defaults.icons, {
  advancedSearchIcon: theme.icons.advancedSearchIcon
})

Object.assign($.fn.bootstrapTable.events, {
  'column-advanced-search.bs.table': 'onColumnAdvancedSearch'
})

Object.assign($.fn.bootstrapTable.locales, {
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  }
})

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.BootstrapTable = class extends $.BootstrapTable {
  initToolbar () {
    this.showToolbar = this.showToolbar ||
      this.options.search &&
      this.options.advancedSearch &&
      this.options.idTable

    if (this.options.search && this.options.advancedSearch && this.options.idTable) {
      this.buttons = Object.assign(this.buttons, {
        advancedSearch: {
          text: this.options.formatAdvancedSearch(),
          icon: this.options.icons.advancedSearchIcon,
          event: this.showAvdSearch,
          attributes: {
            'aria-label': this.options.formatAdvancedSearch(),
            title: this.options.formatAdvancedSearch()
          }
        }
      })
    }

    super.initToolbar()
  }

  showAvdSearch () {
    const modalSelector = `#avdSearchModal_${this.options.idTable}`

    if ($(modalSelector).length <= 0) {
      $('body').append(Utils.sprintf(theme.html.modal,
        this.options.idTable, this.options.formatAdvancedSearch(),
        this.options.idTable, this.options.idTable, this.options.buttonsClass,
        this.options.formatAdvancedCloseButton()))

      let timeoutId = 0

      $(`#avdSearchModalContent_${this.options.idTable}`).append(this.createFormAvd().join(''))

      $(`#${this.options.idForm}`).off('keyup blur', 'input').on('keyup blur', 'input', e => {
        if (this.options.sidePagination === 'server') {
          this.onColumnAdvancedSearch(e)
        } else {
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => {
            this.onColumnAdvancedSearch(e)
          }, this.options.searchTimeOut)
        }
      })

      $(`#btnCloseAvd_${this.options.idTable}`).click(() => this.hideModal())

      if ($.fn.bootstrapTable.theme === 'bulma') {
        $(modalSelector).find('.delete').off('click').on('click', () => this.hideModal())
      }

      this.showModal()
    } else {
      this.showModal()
    }
  }

  showModal () {
    const modalSelector = `#avdSearchModal_${this.options.idTable}`

    if ($.inArray($.fn.bootstrapTable.theme, ['bootstrap3', 'bootstrap4']) !== -1) {
      $(modalSelector).modal()
    } else if ($.fn.bootstrapTable.theme === 'bootstrap5') {
      if (!this.toolbarModal) {
      //   eslint-disable-next-line no-undef
        this.toolbarModal = new bootstrap.Modal(document.getElementById(`avdSearchModal_${this.options.idTable}`), {})
      }
      this.toolbarModal.show()
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
    const modalSelector = `#avdSearchModal_${this.options.idTable}`

    if ($.inArray($.fn.bootstrapTable.theme, ['bootstrap3', 'bootstrap4']) !== -1) {
      $closeModalButton.modal('hide')
    } else if ($.fn.bootstrapTable.theme === 'bootstrap5') {
      this.toolbarModal.hide()
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
    const html = [`<form class="form-horizontal" id="${this.options.idForm}" action="${this.options.actionForm}">`]

    for (const column of this.columns) {
      if (!column.checkbox && column.visible && column.searchable) {
        const title = $('<div/>').html(column.title).text()

        html.push(`
          <div class="form-group row ${theme.classes.formGroup || ''}">
            <label class="col-sm-4 control-label">${title}</label>
            <div class="col-sm-6">
              <input type="text" class="form-control ${this.constants.classes.input}"
                name="${column.field}" placeholder="${title}" id="${column.field}">
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

    const fp = Utils.isEmptyObject(this.filterColumnsPartial) ? null : this.filterColumnsPartial

    this.data = fp ? this.data.filter((item, i) => {
      for (const [key, v] of Object.entries(fp)) {
        const val = v.toLowerCase()
        let value = item[key]
        const index = this.header.fields.indexOf(key)

        value = Utils.calculateObjectValue(this.header,
          this.header.formatters[index], [value, item, i], value)

        if (
          !(index !== -1 &&
          (typeof value === 'string' || typeof value === 'number') &&
          `${value}`.toLowerCase().includes(val))
        ) {
          return false
        }
      }
      return true
    }) : this.data
    this.unsortedData = [...this.data]
  }

  onColumnAdvancedSearch (e) {
    const text = $(e.currentTarget).val().trim()
    const $field = $(e.currentTarget)[0].id

    if (Utils.isEmptyObject(this.filterColumnsPartial)) {
      this.filterColumnsPartial = {}
    }
    if (text) {
      this.filterColumnsPartial[$field] = text
    } else {
      delete this.filterColumnsPartial[$field]
    }

    if (this.options.sidePagination !== 'server') {
      this.options.pageNumber = 1
      this.initSearch()
      this.updatePagination()
      this.trigger('column-advanced-search', $field, text)
    }
  }
}
