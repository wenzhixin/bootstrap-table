/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v3.0.0
 */

import * as UtilsFilterControl from './utils.js'
const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  filterControl: false,
  filterControlVisible: true,
  // eslint-disable-next-line no-unused-vars
  onColumnSearch (field, text) {
    return false
  },
  onCreatedControls () {
    return false
  },
  alignmentSelectControlOptions: undefined,
  filterTemplate: {
    input (that, column, placeholder, value) {
      return Utils.sprintf(
        '<input type="search" class="form-control bootstrap-table-filter-control-%s search-input" style="width: 100%;" placeholder="%s" value="%s">',
        column.field,
        'undefined' === typeof placeholder ? '' : placeholder,
        'undefined' === typeof value ? '' : value
      )
    },

    select ({ options }, column) {
      return Utils.sprintf(
        '<select class="form-control bootstrap-table-filter-control-%s %s" style="width: 100%;" dir="%s"></select>',
        column.field,
        column.filterControlMultipleSelect ? 'fc-multipleselect' : '',
        UtilsFilterControl.getDirectionOfSelectOptions(
          options.alignmentSelectControlOptions
        )
      )
    },

    datepicker (that, column, value) {
      return Utils.sprintf(
        '<input type="date" class="form-control date-filter-control bootstrap-table-filter-control-%s" style="width: 100%;" value="%s">',
        column.field,
        'undefined' === typeof value ? '' : value
      )
    }
  },
  searchOnEnterKey: false,
  showFilterControlSwitch: false,
  // internal variables
  _valuesFilterControl: [],
  _initialized: false,
  _usingMultipleSelect: false
})

$.extend($.fn.bootstrapTable.columnDefaults, {
  filterControl: undefined, // input, select, datepicker
  filterControlMultipleSelect: false,
  filterDataCollector: undefined,
  filterData: undefined,
  filterDatepickerOptions: {},
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
      this.options._valuesFilterControl = []
      this.options._initialized = false
      this.options._usingMultipleSelect = false

      this.$el
        .on('reset-view.bs.table', () => {
          setTimeout(() => {
            UtilsFilterControl.initFilterSelectControls(this)
            UtilsFilterControl.setValues(this)
          }, 2)
        })
        .on('toggle.bs.table', (_, cardView) => {
          this.options._initialized = false
          if (!cardView) {
            UtilsFilterControl.initFilterSelectControls(this)
            UtilsFilterControl.setValues(this)
            this.options._initialized = true
          }
        })
        .on('post-header.bs.table', () => {
          setTimeout(() => {
            UtilsFilterControl.initFilterSelectControls(this)
            UtilsFilterControl.setValues(this)
            setTimeout(() => {
              const multipleSelects = $('.fc-multipleselect')

              if (multipleSelects.length > 0 && $('.ms-parent').length === 0) {
                multipleSelects.multipleSelect()
              }
            }, 2)
          }, 2)
        })
        .on('column-switch.bs.table', () => {
          UtilsFilterControl.setValues(this)
          if (this.options.height) {
            this.fitHeader()
          }
        })
        .on('post-body.bs.table', () => {
          if (this.options.height && !this.options.filterControlContainer && this.options.filterControlVisible) {
            UtilsFilterControl.fixHeaderCSS(this)
          }
          this.$tableLoading.css('top', this.$header.outerHeight() + 1)
        })
        .on('all.bs.table', () => {
          UtilsFilterControl.syncHeaders(this)
        })
    }

    super.init()
  }

  initBody () {
    super.initBody()
    setTimeout(() => {
      UtilsFilterControl.initFilterSelectControls(this)
      UtilsFilterControl.setValues(this)
    }, 3)
  }

  initHeader () {
    super.initHeader()
    if (!this.options.filterControl) {
      return
    }

    UtilsFilterControl.createControls(this, UtilsFilterControl.getControlContainer(this))
    this.options._initialized = true
  }

  initSearch () {
    const that = this
    const fp = $.isEmptyObject(that.filterColumnsPartial) ? null : that.filterColumnsPartial

    super.initSearch()

    if (this.options.sidePagination === 'server' || fp === null) {
      return
    }

    // Check partial column filter
    that.data = fp ?
      that.data.filter((item, i) => {
        const itemIsExpected = []
        const keys1 = Object.keys(item)
        const keys2 = Object.keys(fp)
        const keys = keys1.concat(keys2.filter(item => !keys1.includes(item)))

        keys.forEach(key => {
          const thisColumn = that.columns[that.fieldsColumnsIndex[key]]
          const fval = (fp[key] || '').toLowerCase()
          let value = Utils.unescapeHTML(Utils.getItemField(item, key, false))
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
                value.forEach(objectValue => {
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
      }) :
      that.data

    that.unsortedData = [...that.data]
  }

  isValueExpected (searchValue, value, column, key) {
    let tmpItemIsExpected = false

    if (column.filterStrictSearch) {
      tmpItemIsExpected = value.toString().toLowerCase() === searchValue.toString().toLowerCase()
    } else if (column.filterStartsWithSearch) {
      tmpItemIsExpected = (`${value}`).toLowerCase().indexOf(searchValue) === 0
    } else if (column.filterControl === 'datepicker') {
      tmpItemIsExpected = new Date(value) === new Date(searchValue)
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
    UtilsFilterControl.cacheValues(this)

    if (filterColumnsDefaults) {
      this.filterColumnsPartial = filterColumnsDefaults
      this.updatePagination()

      // eslint-disable-next-line guard-for-in
      for (const filter in filterColumnsDefaults) {
        this.trigger('column-search', filter, filterColumnsDefaults[filter])
      }
    }
  }

  initToolbar () {
    this.showToolbar = this.showToolbar || this.options.showFilterControlSwitch
    this.showSearchClearButton = this.options.filterControl && this.options.showSearchClearButton

    if (this.options.showFilterControlSwitch) {
      this.buttons = Object.assign(this.buttons, {
        filterControlSwitch: {
          text: this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow(),
          icon: this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow,
          event: this.toggleFilterControl,
          attributes: {
            'aria-label': this.options.formatFilterControlSwitch(),
            title: this.options.formatFilterControlSwitch()
          }
        }
      })
    }

    super.initToolbar()
  }

  resetSearch (text) {
    if (this.options.filterControl && this.options.showSearchClearButton) {
      this.clearFilterControl()
    }
    super.resetSearch(text)
  }

  clearFilterControl () {
    if (!this.options.filterControl) {
      return
    }

    const that = this
    const cookies = UtilsFilterControl.collectBootstrapCookies()
    const table = this.$el.closest('table')
    const controls = UtilsFilterControl.getSearchControls(that)
    const search = Utils.getSearchInput(this)
    let hasValues = false
    let timeoutId = 0

    $.each(that.options._valuesFilterControl, (i, item) => {
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
        controls[0].tagName === 'INPUT' ? 'keyup' : 'change', { keyCode: 13 }
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
        that.onSort({ type: 'keypress', currentTarget: sorter })
        $(sorter).find('.sortable').trigger('click')
      }
    }
  }

  // EVENTS
  onColumnSearch ({ currentTarget, keyCode }) {
    if (UtilsFilterControl.isKeyAllowed(keyCode)) {
      return
    }
    UtilsFilterControl.cacheValues(this)

    const $currentTarget = $(currentTarget)
    const currentTargetValue = $currentTarget.val()

    const text = currentTargetValue ? currentTargetValue.trim() : ''
    const $field = $currentTarget.closest('[data-field]').data('field')

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
    this.onSearch({ currentTarget }, false)
  }

  toggleFilterControl () {
    this.options.filterControlVisible = !this.options.filterControlVisible
    // Controls in original header or container.
    const $filterControls = UtilsFilterControl.getControlContainer(this).find('.filter-control, .no-filter-control')

    if (this.options.filterControlVisible) {
      $filterControls.show()
    } else {
      $filterControls.hide()
      this.clearFilterControl()
    }

    // Controls in fixed header
    if (this.options.height) {
      const $fixedControls = $('.fixed-table-header table thead').find('.filter-control, .no-filter-control')

      if (this.options.filterControlVisible) {
        $fixedControls.show()
        UtilsFilterControl.fixHeaderCSS(this)
      } else {
        $fixedControls.hide()
        UtilsFilterControl.fixHeaderCSS(this, '49px')
      }
    }

    const icon = this.options.showButtonIcons ? this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow : ''
    const text = this.options.showButtonText ? this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow() : ''

    this.$toolbar.find('>.columns').find('.filter-control-switch')
      .html(`${Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon) } ${ text}`)
  }

  triggerSearch () {
    const searchControls = UtilsFilterControl.getSearchControls(this)

    searchControls.each(function () {
      const $element = $(this)

      if ($element.is('select')) {
        $element.trigger('change')
      } else {
        $element.trigger('keyup')
      }
    })
  }

  _toggleColumn (index, checked, needUpdate) {
    this.options._initialized = false
    super._toggleColumn(index, checked, needUpdate)
    UtilsFilterControl.syncHeaders(this)
  }
}
