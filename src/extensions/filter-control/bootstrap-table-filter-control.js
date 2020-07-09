/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v2.3.0
 */

import * as UtilsFilterControl from './utils.js'
const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  filterControl: false,
  filterControlVisible: true,
  onColumnSearch (field, text) {
    return false
  },
  onCreatedControls () {
    return false
  },
  alignmentSelectControlOptions: undefined,
  filterTemplate: {
    input (that, field, placeholder, value) {
      return Utils.sprintf(
        '<input type="text" class="form-control bootstrap-table-filter-control-%s search-input" style="width: 100%;" placeholder="%s" value="%s">',
        field,
        'undefined' === typeof placeholder ? '' : placeholder,
        'undefined' === typeof value ? '' : value
      )
    },

    select ({options}, field) {
      return Utils.sprintf(
        '<select class="form-control bootstrap-table-filter-control-%s" style="width: 100%;" dir="%s"></select>',
        field,
        UtilsFilterControl.getDirectionOfSelectOptions(
          options.alignmentSelectControlOptions
        )
      )
    },
    datepicker (that, field, value) {
      return Utils.sprintf(
        '<input type="text" class="form-control date-filter-control bootstrap-table-filter-control-%s" style="width: 100%;" value="%s">',
        field,
        'undefined' === typeof value ? '' : value
      )
    }
  },
  disableControlWhenSearch: false,
  searchOnEnterKey: false,
  showFilterControlSwitch: false,
  // internal variables
  valuesFilterControl: []
})

$.extend($.fn.bootstrapTable.columnDefaults, {
  filterControl: undefined, // input, select, datepicker
  filterDataCollector: undefined,
  filterData: undefined,
  filterDatepickerOptions: undefined,
  filterStrictSearch: false,
  filterStartsWithSearch: false,
  filterControlPlaceholder: '',
  filterDefault: '',
  filterOrderBy: 'asc' // asc || desc
})

$.extend($.fn.bootstrapTable.Constructor.EVENTS, {
  'column-search.bs.table': 'onColumnSearch',
  'created-controls.bs.table': 'onCreatedControls'
})

$.extend($.fn.bootstrapTable.defaults.icons, {
  clear: {
    bootstrap3: 'glyphicon-trash icon-clear'
  }[$.fn.bootstrapTable.theme] || 'fa-trash',
  filterControlSwitchHide: {
    bootstrap3: 'glyphicon-zoom-out icon-zoom-out',
    materialize: 'zoom_out'
  }[$.fn.bootstrapTable.theme] || 'fa-search-minus',
  filterControlSwitchShow: {
    bootstrap3: 'glyphicon-zoom-in icon-zoom-in',
    materialize: 'zoom_in'
  }[$.fn.bootstrapTable.theme] || 'fa-search-plus'
})

$.extend($.fn.bootstrapTable.locales, {
  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  }
})
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.extend($.fn.bootstrapTable.defaults, {
  formatClearSearch () {
    return 'Clear filters'
  }
})

$.fn.bootstrapTable.methods.push('triggerSearch')
$.fn.bootstrapTable.methods.push('clearFilterControl')
$.fn.bootstrapTable.methods.push('toggleFilterControl')

$.BootstrapTable = class extends $.BootstrapTable {
  init () {
    // Make sure that the filterControl option is set
    if (this.options.filterControl) {
      // Make sure that the internal variables are set correctly
      this.options.valuesFilterControl = []

      this.$el
        .on('reset-view.bs.table', () => {
          // Create controls on $tableHeader if the height is set
          if (!this.options.height) {
            return
          }

          // Avoid recreate the controls
          const $controlContainer = UtilsFilterControl.getControlContainer(this)
          if ($controlContainer.find('select').length > 0 || $controlContainer.find('input:not([type="checkbox"]):not([type="radio"])').length > 0) {
            return
          }

          UtilsFilterControl.createControls(this, $controlContainer)
        })
        .on('post-header.bs.table', () => {
          UtilsFilterControl.setValues(this)
        })
        .on('post-body.bs.table', () => {
          if (this.options.height && !this.options.filterControlContainer) {
            UtilsFilterControl.fixHeaderCSS(this)
          }
          this.$tableLoading.css('top', this.$header.outerHeight() + 1)
        })
        .on('column-switch.bs.table', () => {
          UtilsFilterControl.setValues(this)
        })
        .on('load-success.bs.table', () => {
          this.enableControls(true)
        })
        .on('load-error.bs.table', () => {
          this.enableControls(true)
        })
    }

    super.init()
  }

  initHeader () {
    super.initHeader()

    if (!this.options.filterControl || this.options.height) {
      return
    }

    UtilsFilterControl.createControls(this, UtilsFilterControl.getControlContainer(this))
  }

  initBody () {
    super.initBody()
    UtilsFilterControl.syncControls(this)
    UtilsFilterControl.initFilterSelectControls(this)
  }

  initSearch () {
    const that = this
    const fp = $.isEmptyObject(that.filterColumnsPartial) ? null : that.filterColumnsPartial

    super.initSearch()

    if (this.options.sidePagination === 'server' || fp === null) {
      return
    }

    // Check partial column filter
    that.data = fp
      ? that.data.filter((item, i) => {
        const itemIsExpected = []
        const keys1 = Object.keys(item)
        const keys2 = Object.keys(fp)
        const keys = keys1.concat(keys2.filter(item => !keys1.includes(item)))

        keys.forEach(key => {
          const thisColumn = that.columns[that.fieldsColumnsIndex[key]]
          const fval = (fp[key] || '').toLowerCase()
          let value = Utils.getItemField(item, key, false)
          let tmpItemIsExpected

          if (fval === '') {
            tmpItemIsExpected = true
          } else {
            // Fix #142: search use formatted data
            if (thisColumn && thisColumn.searchFormatter) {
              value = $.fn.bootstrapTable.utils.calculateObjectValue(
                that.header,
                that.header.formatters[$.inArray(key, that.header.fields)],
                [value, item, i],
                value
              )
            }

            if ($.inArray(key, that.header.fields) !== -1) {
              if (value === undefined || value === null) {
                tmpItemIsExpected = false
              } else if (typeof value === 'object') {
                value.forEach((objectValue) => {
                  if (tmpItemIsExpected) {
                    return
                  }

                  if (this.options.searchAccentNeutralise) {
                    objectValue = Utils.normalizeAccent(objectValue)
                  }

                  tmpItemIsExpected = that.isValueExpected(fval, objectValue, thisColumn, key)
                })
              } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                if (this.options.searchAccentNeutralise) {
                  value = Utils.normalizeAccent(value)
                }
                tmpItemIsExpected = that.isValueExpected(fval, value, thisColumn, key)
              }
            }
          }

          itemIsExpected.push(tmpItemIsExpected)
        })

        return !itemIsExpected.includes(false)
      })
      : that.data

    that.unsortedData = [...that.data]
  }

  isValueExpected (searchValue, value, column, key) {
    let tmpItemIsExpected = false
    if (column.filterStrictSearch) {
      tmpItemIsExpected = value.toString().toLowerCase() === searchValue.toString().toLowerCase()
    } else if (column.filterStartsWithSearch) {
      tmpItemIsExpected = (`${value}`).toLowerCase().indexOf(searchValue) === 0
    } else {
      tmpItemIsExpected = (`${value}`).toLowerCase().includes(searchValue)
    }

    const largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm
    const matches = largerSmallerEqualsRegex.exec(searchValue)

    if (matches) {
      const operator = matches[1] || `${matches[5]}l`
      const comparisonValue = matches[2] || matches[3]
      const int = parseInt(value, 10)
      const comparisonInt = parseInt(comparisonValue, 10)

      switch (operator) {
        case '>':
        case '<l':
          tmpItemIsExpected = int > comparisonInt
          break
        case '<':
        case '>l':
          tmpItemIsExpected = int < comparisonInt
          break
        case '<=':
        case '=<':
        case '>=l':
        case '=>l':
          tmpItemIsExpected = int <= comparisonInt
          break
        case '>=':
        case '=>':
        case '<=l':
        case '=<l':
          tmpItemIsExpected = int >= comparisonInt
          break
        default:
          break
      }
    }

    if (column.filterCustomSearch) {
      const customSearchResult = Utils.calculateObjectValue(this, column.filterCustomSearch, [searchValue, value, key, this.options.data], true)
      if (customSearchResult !== null) {
        tmpItemIsExpected = customSearchResult
      }
    }

    return tmpItemIsExpected
  }

  initColumnSearch (filterColumnsDefaults) {
    UtilsFilterControl.copyValues(this)

    if (filterColumnsDefaults) {
      this.filterColumnsPartial = filterColumnsDefaults
      this.updatePagination()

      for (const filter in filterColumnsDefaults) {
        this.trigger('column-search', filter, filterColumnsDefaults[filter])
      }
    }
  }

  onColumnSearch ({currentTarget, keyCode}) {
    if ($.inArray(keyCode, [37, 38, 39, 40]) > -1) {
      return
    }

    UtilsFilterControl.copyValues(this)
    const text = $.trim($(currentTarget).val())
    const $field = $(currentTarget).closest('[data-field]').data('field')

    this.trigger('column-search', $field, text)

    if ($.isEmptyObject(this.filterColumnsPartial)) {
      this.filterColumnsPartial = {}
    }
    if (text) {
      this.filterColumnsPartial[$field] = text
    } else {
      delete this.filterColumnsPartial[$field]
    }

    this.options.pageNumber = 1
    this.enableControls(false)
    this.onSearch({currentTarget}, false)
  }

  initToolbar () {
    this.showToolbar = this.showToolbar || this.options.showFilterControlSwitch
    this.showSearchClearButton = this.options.filterControl && this.options.showSearchClearButton
    super.initToolbar()

    if (this.options.showFilterControlSwitch) {
      const $btnGroup = this.$toolbar.find('>.columns')
      let $btnFilterControlSwitch = $btnGroup.find('.filter-control-switch')

      if (!$btnFilterControlSwitch.length) {
        $btnFilterControlSwitch = $(`
          <button class="filter-control-switch ${this.constants.buttonsClass}"
          type="button" title="${this.options.formatFilterControlSwitch()}">
          ${this.options.showButtonIcons ? Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow) : ''}
          ${this.options.showButtonText ? this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow() : ''}
          </button>
        `).appendTo($btnGroup)

        $btnFilterControlSwitch.on('click', $.proxy(this.toggleFilterControl, this))
      }
    }
  }

  resetSearch (text) {
    if (this.options.filterControl && this.options.showSearchClearButton) {
      this.clearFilterControl()
    }
    super.resetSearch(text)
  }

  clearFilterControl () {
    if (this.options.filterControl) {
      const that = this
      const cookies = UtilsFilterControl.collectBootstrapCookies()
      const table = this.$el.closest('table')
      const controls = UtilsFilterControl.getSearchControls(that)
      const search = that.$toolbar.find('.search input')
      let hasValues = false
      let timeoutId = 0

      $.each(that.options.valuesFilterControl, (i, item) => {
        hasValues = hasValues ? true : item.value !== ''
        item.value = ''
      })

      $.each(that.options.filterControls, (i, item) => {
        item.text = ''
      })

      UtilsFilterControl.setValues(that)

      // clear cookies once the filters are clean
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (cookies && cookies.length > 0) {
          $.each(cookies, (i, item) => {
            if (that.deleteCookie !== undefined) {
              that.deleteCookie(item)
            }
          })
        }
      }, that.options.searchTimeOut)

      // If there is not any value in the controls exit this method
      if (!hasValues) {
        return
      }

      // Clear each type of filter if it exists.
      // Requires the body to reload each time a type of filter is found because we never know
      // which ones are going to be present.
      if (controls.length > 0) {
        this.filterColumnsPartial = {}
        $(controls[0]).trigger(
          controls[0].tagName === 'INPUT' ? 'keyup' : 'change', {keyCode: 13}
        )
      } else {
        return
      }

      if (search.length > 0) {
        that.resetSearch()
      }

      // use the default sort order if it exists. do nothing if it does not
      if (that.options.sortName !== table.data('sortName') || that.options.sortOrder !== table.data('sortOrder')) {
        const sorter = this.$header.find(Utils.sprintf('[data-field="%s"]', $(controls[0]).closest('table').data('sortName')))
        if (sorter.length > 0) {
          that.onSort({type: 'keypress', currentTarget: sorter})
          $(sorter).find('.sortable').trigger('click')
        }
      }
    }
  }

  triggerSearch () {
    const searchControls = UtilsFilterControl.getSearchControls(this)

    searchControls.each(function () {
      const el = $(this)
      if (el.is('select')) {
        el.change()
      } else {
        el.keyup()
      }
    })
  }

  enableControls (enable) {
    if (this.options.disableControlWhenSearch && this.options.sidePagination === 'server') {
      const searchControls = UtilsFilterControl.getSearchControls(this)

      if (!enable) {
        searchControls.prop('disabled', 'disabled')
      } else {
        searchControls.removeProp('disabled')
      }
    }
  }

  toggleFilterControl () {
    this.options.filterControlVisible = !this.options.filterControlVisible
    const $filterControls = UtilsFilterControl.getControlContainer(this).find('.filter-control, .no-filter-control')
    if (this.options.filterControlVisible) {
      $filterControls.show()
    } else {
      $filterControls.hide()
      this.clearFilterControl()
    }
    const icon = this.options.showButtonIcons ? this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow : ''
    const text = this.options.showButtonText ? this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow() : ''
    this.$toolbar.find('>.columns').find('.filter-control-switch')
      .html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon) + ' ' + text)
  }
}
