import Utils from '../utils/index.js'

export default {
  initToolbar () {
    const opts = this.options
    let html = []
    let timeoutId = 0
    let $keepOpen
    let switchableCount = 0

    if (this.$toolbar.find('.bs-bars').children().length) {
      $('body').append($(opts.toolbar))
    }
    this.$toolbar.html('')

    if (typeof opts.toolbar === 'string' || typeof opts.toolbar === 'object') {
      $(Utils.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, opts.toolbarAlign))
        .appendTo(this.$toolbar)
        .append($(opts.toolbar))
    }

    // showColumns, showToggle, showRefresh
    html = [`<div class="${[
      'columns',
      `columns-${opts.buttonsAlign}`,
      this.constants.classes.buttonsGroup,
      `${this.constants.classes.pull}-${opts.buttonsAlign}`
    ].join(' ')}">`]

    if (typeof opts.buttonsOrder === 'string') {
      opts.buttonsOrder = opts.buttonsOrder.replace(/\[|\]| |'/g, '').split(',')
    }

    this.buttons = Object.assign(this.buttons, {
      paginationSwitch: {
        text: opts.pagination ? opts.formatPaginationSwitchUp() : opts.formatPaginationSwitchDown(),
        icon: opts.pagination ? opts.icons.paginationSwitchDown : opts.icons.paginationSwitchUp,
        render: false,
        event: this.togglePagination,
        attributes: {
          'aria-label': opts.formatPaginationSwitch(),
          title: opts.formatPaginationSwitch()
        }
      },
      refresh: {
        text: opts.formatRefresh(),
        icon: opts.icons.refresh,
        render: false,
        event: this.refresh,
        attributes: {
          'aria-label': opts.formatRefresh(),
          title: opts.formatRefresh()
        }
      },
      toggle: {
        text: opts.formatToggleOn(),
        icon: opts.icons.toggleOff,
        render: false,
        event: this.toggleView,
        attributes: {
          'aria-label': opts.formatToggleOn(),
          title: opts.formatToggleOn()
        }
      },
      fullscreen: {
        text: opts.formatFullscreen(),
        icon: opts.icons.fullscreen,
        render: false,
        event: this.toggleFullscreen,
        attributes: {
          'aria-label': opts.formatFullscreen(),
          title: opts.formatFullscreen()
        }
      },
      columns: {
        render: false,
        html: () => {
          const html = []

          html.push(`<div class="keep-open ${this.constants.classes.buttonsDropdown}">
            <button class="${this.constants.buttonsClass} dropdown-toggle" type="button" ${this.constants.dataToggle}="dropdown"
            aria-label="${opts.formatColumns()}" ${opts.buttonsAttributeTitle}="${opts.formatColumns()}">
            ${opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.columns) : ''}
            ${opts.showButtonText ? opts.formatColumns() : ''}
            ${this.constants.html.dropdownCaret}
            </button>
            ${this.constants.html.toolbarDropdown[0]}`)

          if (opts.showColumnsSearch) {
            html.push(
              Utils.sprintf(this.constants.html.toolbarDropdownItem,
                Utils.sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">', this.constants.classes.input, opts.formatSearch())
              )
            )
            html.push(this.constants.html.toolbarDropdownSeparator)
          }

          if (opts.showColumnsToggleAll) {
            const allFieldsVisible = this.getVisibleColumns().length === this.columns.filter(column => !this.isSelectionColumn(column)).length

            html.push(
              Utils.sprintf(this.constants.html.toolbarDropdownItem,
                Utils.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>',
                  allFieldsVisible ? 'checked="checked"' : '', opts.formatColumnsToggleAll())
              )
            )

            html.push(this.constants.html.toolbarDropdownSeparator)
          }

          let visibleColumns = 0

          this.columns.forEach(column => {
            if (column.visible) {
              visibleColumns++
            }
          })

          this.columns.forEach((column, i) => {
            if (this.isSelectionColumn(column)) {
              return
            }

            if (opts.cardView && !column.cardVisible) {
              return
            }

            const checked = column.visible ? ' checked="checked"' : ''
            const disabled = visibleColumns <= opts.minimumCountColumns && checked ? ' disabled="disabled"' : ''

            if (column.switchable) {
              html.push(Utils.sprintf(this.constants.html.toolbarDropdownItem,
                Utils.sprintf('<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>',
                  column.field, i, checked, disabled, column.switchableLabel || column.title)))
              switchableCount++
            }
          })
          html.push(this.constants.html.toolbarDropdown[1], '</div>')
          return html.join('')
        }
      }
    })

    const buttonsHtml = {}

    for (const [buttonName, buttonConfig] of Object.entries(this.buttons)) {
      let buttonHtml

      if (buttonConfig.hasOwnProperty('html')) {
        if (typeof buttonConfig.html === 'function') {
          buttonHtml = buttonConfig.html()
        } else if (typeof buttonConfig.html === 'string') {
          buttonHtml = buttonConfig.html
        }
      } else {
        let buttonClass = this.constants.buttonsClass

        if (buttonConfig.hasOwnProperty('attributes') && buttonConfig.attributes.class) {
          buttonClass += ` ${buttonConfig.attributes.class}`
        }
        buttonHtml = `<button class="${buttonClass}" type="button" name="${buttonName}"`

        if (buttonConfig.hasOwnProperty('attributes')) {
          for (const [attributeName, value] of Object.entries(buttonConfig.attributes)) {
            if (attributeName === 'class') {
              continue
            }

            const attribute = attributeName === 'title' ?
              this.options.buttonsAttributeTitle : attributeName

            buttonHtml += ` ${attribute}="${value}"`
          }
        }

        buttonHtml += '>'

        if (opts.showButtonIcons && buttonConfig.hasOwnProperty('icon')) {
          buttonHtml += `${Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, buttonConfig.icon)} `
        }

        if (opts.showButtonText && buttonConfig.hasOwnProperty('text')) {
          buttonHtml += buttonConfig.text
        }

        buttonHtml += '</button>'
      }

      buttonsHtml[buttonName] = buttonHtml
      const optionName = `show${buttonName.charAt(0).toUpperCase()}${buttonName.substring(1)}`
      const showOption = opts[optionName]

      if ((
        !buttonConfig.hasOwnProperty('render') ||
        buttonConfig.hasOwnProperty('render') &&
        buttonConfig.render) &&
        (showOption === undefined || showOption === true)
      ) {
        opts[optionName] = true
      }

      if (!opts.buttonsOrder.includes(buttonName)) {
        opts.buttonsOrder.push(buttonName)
      }
    }

    // Adding the button html to the final toolbar html when the showOption is true
    for (const button of opts.buttonsOrder) {
      const showOption = opts[`show${button.charAt(0).toUpperCase()}${button.substring(1)}`]

      if (showOption) {
        html.push(buttonsHtml[button])
      }
    }

    html.push('</div>')

    // Fix #188: this.showToolbar is for extensions
    if (this.showToolbar || html.length > 2) {
      this.$toolbar.append(html.join(''))
    }

    for (const [buttonName, buttonConfig] of Object.entries(this.buttons)) {
      if (buttonConfig.hasOwnProperty('event')) {
        if (typeof buttonConfig.event === 'function' || typeof buttonConfig.event === 'string') {
          const event = typeof buttonConfig.event === 'string' ? window[buttonConfig.event] : buttonConfig.event

          this.$toolbar.find(`button[name="${buttonName}"]`)
            .off('click')
            .on('click', () => event.call(this))
          continue
        }

        for (const [eventType, eventFunction] of Object.entries(buttonConfig.event)) {
          const event = typeof eventFunction === 'string' ? window[eventFunction] : eventFunction

          this.$toolbar.find(`button[name="${buttonName}"]`)
            .off(eventType)
            .on(eventType, () => event.call(this))
        }
      }
    }

    if (opts.showColumns) {
      $keepOpen = this.$toolbar.find('.keep-open')
      const $checkboxes = $keepOpen.find('input[type="checkbox"]:not(".toggle-all")')
      const $toggleAll = $keepOpen.find('input[type="checkbox"].toggle-all')

      if (switchableCount <= opts.minimumCountColumns) {
        $keepOpen.find('input').prop('disabled', true)
      }

      $keepOpen.find('li, label').off('click').on('click', e => {
        e.stopImmediatePropagation()
      })

      $checkboxes.off('click').on('click', ({ currentTarget }) => {
        const $this = $(currentTarget)

        this._toggleColumn($this.val(), $this.prop('checked'), false)
        this.trigger('column-switch', $this.data('field'), $this.prop('checked'))
        $toggleAll.prop('checked', $checkboxes.filter(':checked').length === this.columns.filter(column => !this.isSelectionColumn(column)).length)
      })

      $toggleAll.off('click').on('click', ({ currentTarget }) => {
        this._toggleAllColumns($(currentTarget).prop('checked'))
        this.trigger('column-switch-all', $(currentTarget).prop('checked'))
      })

      if (opts.showColumnsSearch) {
        const $columnsSearch = $keepOpen.find('[name="columnsSearch"]')
        const $listItems = $keepOpen.find('.dropdown-item-marker')

        $columnsSearch.on('keyup paste change', ({ currentTarget }) => {
          const $this = $(currentTarget)
          const searchValue = $this.val().toLowerCase()

          $listItems.show()
          $checkboxes.each((i, el) => {
            const $checkbox = $(el)
            const $listItem = $checkbox.parents('.dropdown-item-marker')
            const text = $listItem.text().toLowerCase()

            if (!text.includes(searchValue)) {
              $listItem.hide()
            }
          })
        })
      }
    }
    const handleInputEvent = $searchInput => {
      const eventTriggers = $searchInput.is('select') ? 'change' : 'keyup drop blur mouseup'

      $searchInput.off(eventTriggers).on(eventTriggers, event => {
        if (opts.searchOnEnterKey && event.keyCode !== 13) {
          return
        }

        if ([37, 38, 39, 40].includes(event.keyCode)) {
          return
        }

        clearTimeout(timeoutId) // doesn't matter if it's 0
        timeoutId = setTimeout(() => {
          this.onSearch({ currentTarget: event.currentTarget })
        }, opts.searchTimeOut)
      })
    }

    // Fix #4516: this.showSearchClearButton is for extensions
    if (
      (opts.search || this.showSearchClearButton) &&
      typeof opts.searchSelector !== 'string'
    ) {
      html = []
      const showSearchButton = Utils.sprintf(this.constants.html.searchButton,
        this.constants.buttonsClass,
        opts.formatSearch(),
        opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.search) : '',
        opts.showButtonText ? opts.formatSearch() : ''
      )
      const showSearchClearButton = Utils.sprintf(this.constants.html.searchClearButton,
        this.constants.buttonsClass,
        opts.formatClearSearch(),
        opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.clearSearch) : '',
        opts.showButtonText ? opts.formatClearSearch() : ''
      )
      const searchInputHtml = `<input class="${this.constants.classes.input}
        ${Utils.sprintf(' %s%s', this.constants.classes.inputPrefix, opts.iconSize)}
        search-input" type="search" aria-label="${opts.formatSearch()}" placeholder="${opts.formatSearch()}" autocomplete="off">`
      let searchInputFinalHtml = searchInputHtml

      if (opts.showSearchButton || opts.showSearchClearButton) {
        const buttonsHtml = (opts.showSearchButton ? showSearchButton : '') +
          (opts.showSearchClearButton ? showSearchClearButton : '')

        searchInputFinalHtml = opts.search ? Utils.sprintf(this.constants.html.inputGroup,
          searchInputHtml, buttonsHtml) : buttonsHtml
      }

      html.push(Utils.sprintf(`
        <div class="${this.constants.classes.pull}-${opts.searchAlign} search ${this.constants.classes.inputGroup}">
          %s
        </div>
      `, searchInputFinalHtml))

      this.$toolbar.append(html.join(''))
      const $searchInput = Utils.getSearchInput(this)

      if (opts.showSearchButton) {
        this.$toolbar.find('.search button[name=search]').off('click').on('click', () => {
          clearTimeout(timeoutId) // doesn't matter if it's 0
          timeoutId = setTimeout(() => {
            this.onSearch({ currentTarget: $searchInput })
          }, opts.searchTimeOut)
        })

        if (opts.searchOnEnterKey) {
          handleInputEvent($searchInput)
        }
      } else {
        handleInputEvent($searchInput)
      }

      if (opts.showSearchClearButton) {
        this.$toolbar.find('.search button[name=clearSearch]').click(() => {
          this.resetSearch()
        })
      }
    } else if (typeof opts.searchSelector === 'string') {
      handleInputEvent(Utils.getSearchInput(this))
    }
  },

  refresh (params) {
    if (params && params.url) {
      this.options.url = params.url
    }
    if (params && params.pageNumber) {
      this.options.pageNumber = params.pageNumber
    }
    if (params && params.pageSize) {
      this.options.pageSize = params.pageSize
    }
    if (params && params.query) {
      this.options.url = Utils.addQueryToUrl(this.options.url, params.query)
    }

    this.trigger('refresh', this.initServer(params && params.silent))
  },

  toggleView () {
    this.options.cardView = !this.options.cardView
    this.initHeader()

    const icon = this.options.showButtonIcons ? this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff : ''
    const text = this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn()

    this.$toolbar.find('button[name="toggle"]')
      .html(`${Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix,
        icon)} ${this.options.showButtonText ? text : ''}`)
      .attr('aria-label', text)
      .attr(this.options.buttonsAttributeTitle, text)

    this.initBody()
    this.trigger('toggle', this.options.cardView)
  },

  toggleFullscreen () {
    this.$el.closest('.bootstrap-table').toggleClass('fullscreen')
    this.resetView()
  }
}
