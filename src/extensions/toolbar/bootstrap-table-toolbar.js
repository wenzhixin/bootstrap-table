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
        <div id="avdSearchModal_%s" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-xs">
            <div class="modal-content">
              <div class="modal-header">
                <button class="close toolbar-modal-close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title toolbar-modal-title"></h4>
              </div>
              <div class="modal-body toolbar-modal-body"></div>
              <div class="modal-footer toolbar-modal-footer">
                <button class="btn btn-%s toolbar-modal-close"></button>
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
        <div id="avdSearchModal_%s" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-xs">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title toolbar-modal-title"></h4>
                <button class="close toolbar-modal-close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body toolbar-modal-body"></div>
              <div class="modal-footer toolbar-modal-footer">
                <button class="btn btn-%s toolbar-modal-close"></button>
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
        <div id="avdSearchModal_%s" class="modal fade" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-xs">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title toolbar-modal-title"></h5>
                <button class="btn-close toolbar-modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body toolbar-modal-body"></div>
              <div class="modal-footer toolbar-modal-footer">
                <button class="btn btn-%s toolbar-modal-close"></button>
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
              <p class="modal-card-title toolbar-modal-title"></p>
              <button class="delete toolbar-modal-close"></button>
            </header>
            <section class="modal-card-body toolbar-modal-body"></section>
            <footer class="modal-card-foot toolbar-modal-footer">
              <button class="button button-%s toolbar-modal-close"></button>
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
          <h1 class="toolbar-modal-title"></h1>
          <div class="toolbar-modal-body"></div>
          <button class="close-button toolbar-modal-close" data-close aria-label="Close modal">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="toolbar-modal-footer">
            <button class="button button-%s toolbar-modal-close"></button>
          </div>
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
            <h4 class="toolbar-modal-title"></h4>
            <div class="toolbar-modal-body"></div>
          </div>
          <div class="modal-footer toolbar-modal-footer">
            <a href="javascript:void(0)" class="modal-close waves-effect waves-green btn-flat btn-%s toolbar-modal-close"></a>
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
          <i class="close icon toolbar-modal-close"></i>
          <div class="header toolbar-modal-title""></div>
          <div class="image content ui form toolbar-modal-body"></div>
          <div class="actions toolbar-modal-footer">
            <div class="ui black deny button button-%s toolbar-modal-close"></div>
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

    if (this.showToolbar) {
      this.buttons = Object.assign(this.buttons, {
        advancedSearch: {
          text: this.options.formatAdvancedSearch(),
          icon: this.options.icons.advancedSearchIcon,
          event: this.showAdvancedSearch,
          attributes: {
            'aria-label': this.options.formatAdvancedSearch(),
            title: this.options.formatAdvancedSearch()
          }
        }
      })

      if (Utils.isEmptyObject(this.filterColumnsPartial)) {
        this.filterColumnsPartial = {}
      }
    }

    super.initToolbar()
  }

  showAdvancedSearch () {
    this.$toolbarModal = $(`#avdSearchModal_${this.options.idTable}`)

    if (this.$toolbarModal.length <= 0) {
      $('body').append(Utils.sprintf(theme.html.modal,
        this.options.idTable, this.options.buttonsClass))

      this.$toolbarModal = $(`#avdSearchModal_${this.options.idTable}`)
      this.$toolbarModal.find('.toolbar-modal-close')
        .off('click')
        .on('click', () => this.hideToolbarModal())
    }

    this.initToolbarModalBody()
    this.showToolbarModal()
  }

  initToolbarModalBody () {
    this.$toolbarModal.find('.toolbar-modal-title')
      .html(this.options.formatAdvancedSearch())
    this.$toolbarModal.find('.toolbar-modal-footer .toolbar-modal-close')
      .html(this.options.formatAdvancedCloseButton())

    this.$toolbarModal.find('.toolbar-modal-body')
      .html(this.createToolbarForm())
      .off('keyup blur', 'input').on('keyup blur', 'input', e => {
        this.onColumnAdvancedSearch(e)
      })
  }

  showToolbarModal () {
    const theme = $.fn.bootstrapTable.theme

    if (['bootstrap3', 'bootstrap4'].includes(theme)) {
      this.$toolbarModal.modal()
    } else if (theme === 'bootstrap5') {
      if (!this.toolbarModal) {
        this.toolbarModal = new window.bootstrap.Modal(this.$toolbarModal[0], {})
      }
      this.toolbarModal.show()
    } else if (theme === 'bulma') {
      this.$toolbarModal.toggleClass('is-active')
    } else if (theme === 'foundation') {
      if (!this.toolbarModal) {
        this.toolbarModal = new window.Foundation.Reveal(this.$toolbarModal)
      }
      this.toolbarModal.open()
    } else if (theme === 'materialize') {
      this.$toolbarModal.modal().modal('open')
    } else if (theme === 'semantic') {
      this.$toolbarModal.modal('show')
    }
  }

  hideToolbarModal () {
    const theme = $.fn.bootstrapTable.theme

    if (['bootstrap3', 'bootstrap4'].includes(theme)) {
      this.$toolbarModal.modal('hide')
    } else if (theme === 'bootstrap5') {
      this.toolbarModal.hide()
    } else if (theme === 'bulma') {
      $('html').toggleClass('is-clipped')
      this.$toolbarModal.toggleClass('is-active')
    } else if (theme === 'foundation') {
      this.toolbarModal.close()
    } else if (theme === 'materialize') {
      this.$toolbarModal.modal('open')
    } else if (theme === 'semantic') {
      this.$toolbarModal.modal('close')
    }

    if (this.options.sidePagination === 'server') {
      this.options.pageNumber = 1
      this.updatePagination()
      this.trigger('column-advanced-search', this.filterColumnsPartial)
    }
  }

  createToolbarForm () {
    const html = [
      `<form class="form-horizontal toolbar-model-form" action="${this.options.actionForm}">`
    ]

    for (const column of this.columns) {
      if (!column.checkbox && column.visible && column.searchable) {
        const title = $('<div/>').html(column.title).text().trim()
        const value = this.filterColumnsPartial[column.field] || ''

        html.push(`
          <div class="form-group row ${theme.classes.formGroup || ''}">
            <label class="col-sm-4 control-label">${title}</label>
            <div class="col-sm-6">
              <input type="text" class="form-control ${this.constants.classes.input}"
                name="${column.field}" placeholder="${title}" value="${value}">
            </div>
          </div>
        `)
      }
    }

    html.push('</form>')

    return html.join('')
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
    const field = $(e.currentTarget).attr('name')

    if (text) {
      this.filterColumnsPartial[field] = text
    } else {
      delete this.filterColumnsPartial[field]
    }

    if (this.options.sidePagination !== 'server') {
      this.options.pageNumber = 1
      this.initSearch()
      this.updatePagination()
      this.trigger('column-advanced-search', field, text)
    }
  }
}
