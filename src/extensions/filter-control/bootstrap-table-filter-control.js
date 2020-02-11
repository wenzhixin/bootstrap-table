/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v2.2.0
 */

const Utils = $.fn.bootstrapTable.utils
const UtilsFilterControl = {
  getOptionsFromSelectControl (selectControl) {
    return selectControl.get(selectControl.length - 1).options
  },
  getControlContainer () {
    if (UtilsFilterControl.bootstrapTableInstance.options.filterControlContainer) {
      return $(`${UtilsFilterControl.bootstrapTableInstance.options.filterControlContainer}`)
    }

    return UtilsFilterControl.getCurrentHeader(UtilsFilterControl.bootstrapTableInstance)
  },
  getSearchControls (scope) {
    const header = UtilsFilterControl.getControlContainer()
    const searchControls = UtilsFilterControl.getCurrentSearchControls(scope)

    return header.find(searchControls)
  },
  hideUnusedSelectOptions (selectControl, uniqueValues) {
    const options = UtilsFilterControl.getOptionsFromSelectControl(
      selectControl
    )

    for (let i = 0; i < options.length; i++) {
      if (options[i].value !== '') {
        if (!uniqueValues.hasOwnProperty(options[i].value)) {
          selectControl
            .find(Utils.sprintf('option[value=\'%s\']', options[i].value))
            .hide()
        } else {
          selectControl
            .find(Utils.sprintf('option[value=\'%s\']', options[i].value))
            .show()
        }
      }
    }
  },
  addOptionToSelectControl (selectControl, _value, text, selected) {
    const value = $.trim(_value)
    const $selectControl = $(selectControl.get(selectControl.length - 1))
    if (
      !UtilsFilterControl.existOptionInSelectControl(selectControl, value)
    ) {
      const option = $(`<option value="${value}">${text}</option>`)

      if (value === selected) {
        option.attr('selected', true)
      }

      $selectControl.append(option)
    }
  },
  sortSelectControl (selectControl, orderBy) {
    const $selectControl = $(selectControl.get(selectControl.length - 1))
    const $opts = $selectControl.find('option:gt(0)')

    $opts.sort((a, b) => {
      return Utils.sort(a.textContent, b.textContent, orderBy === 'desc' ? -1 : 1)
    })

    $selectControl.find('option:gt(0)').remove()
    $selectControl.append($opts)
  },
  existOptionInSelectControl (selectControl, value) {
    const options = UtilsFilterControl.getOptionsFromSelectControl(
      selectControl
    )
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === value.toString()) {
        // The value is not valid to add
        return true
      }
    }

    // If we get here, the value is valid to add
    return false
  },
  fixHeaderCSS ({$tableHeader}) {
    $tableHeader.css('height', '77px')
  },
  getCurrentHeader ({$header, options, $tableHeader}) {
    let header = $header
    if (options.height) {
      header = $tableHeader
    }

    return header
  },
  getCurrentSearchControls ({options}) {
    let searchControls = 'select, input'
    if (options.height) {
      searchControls = 'table select, table input'
    }

    return searchControls
  },
  getCursorPosition (el) {
    if (Utils.isIEBrowser()) {
      if ($(el).is('input[type=text]')) {
        let pos = 0
        if ('selectionStart' in el) {
          pos = el.selectionStart
        } else if ('selection' in document) {
          el.focus()
          const Sel = document.selection.createRange()
          const SelLength = document.selection.createRange().text.length
          Sel.moveStart('character', -el.value.length)
          pos = Sel.text.length - SelLength
        }
        return pos
      }
      return -1

    }
    return -1
  },
  setCursorPosition (el) {
    $(el).val(el.value)
  },
  copyValues (that) {
    const searchControls = UtilsFilterControl.getSearchControls(that)

    that.options.valuesFilterControl = []

    searchControls.each(function () {
      that.options.valuesFilterControl.push({
        field: $(this)
          .closest('[data-field]')
          .data('field'),
        value: $(this).val(),
        position: UtilsFilterControl.getCursorPosition($(this).get(0)),
        hasFocus: $(this).is(':focus')
      })
    })
  },
  setValues (that) {
    let field = null
    let result = []
    const searchControls = UtilsFilterControl.getSearchControls(that)

    if (that.options.valuesFilterControl.length > 0) {
      //  Callback to apply after settings fields values
      let fieldToFocusCallback = null
      searchControls.each(function (index, ele) {
        field = $(this)
          .closest('[data-field]')
          .data('field')
        result = that.options.valuesFilterControl.filter(valueObj => valueObj.field === field)

        if (result.length > 0) {
          $(this).val(result[0].value)
          if (result[0].hasFocus && result[0].value !== '') {
            // set callback if the field had the focus.
            fieldToFocusCallback = ((fieldToFocus, carretPosition) => {
              // Closure here to capture the field and cursor position
              const closedCallback = () => {
                fieldToFocus.focus()
                UtilsFilterControl.setCursorPosition(fieldToFocus, carretPosition)
              }
              return closedCallback
            })($(this).get(0), result[0].position)
          }
        }
      })

      // Callback call.
      if (fieldToFocusCallback !== null) {
        fieldToFocusCallback()
      }
    }
  },
  collectBootstrapCookies () {
    const cookies = []
    const foundCookies = document.cookie.match(/(?:bs.table.)(\w*)/g)
    const foundLocalStorage = localStorage

    if (foundCookies) {
      $.each(foundCookies, (i, _cookie) => {
        let cookie = _cookie
        if (/./.test(cookie)) {
          cookie = cookie.split('.').pop()
        }

        if ($.inArray(cookie, cookies) === -1) {
          cookies.push(cookie)
        }
      })
    }
    if (foundLocalStorage) {
      for (let i = 0; i < foundLocalStorage.length; i++) {
        let cookie = foundLocalStorage.key(i)
        if (/./.test(cookie)) {
          cookie = cookie.split('.').pop()
        }

        if (!cookies.includes(cookie)) {
          cookies.push(cookie)
        }
      }
    }
    return cookies
  },
  escapeID (id) {
    // eslint-disable-next-line no-useless-escape
    return String(id).replace(/([:.\[\],])/g, '\\$1')
  },
  isColumnSearchableViaSelect ({filterControl, searchable}) {
    return filterControl &&
      filterControl.toLowerCase() === 'select' &&
      searchable
  },
  isFilterDataNotGiven ({filterData}) {
    return filterData === undefined ||
      filterData.toLowerCase() === 'column'
  },
  hasSelectControlElement (selectControl) {
    return selectControl && selectControl.length > 0
  },
  initFilterSelectControls (that) {
    const data = that.data
    const z = that.options.pagination
      ? that.options.sidePagination === 'server'
        ? that.pageTo
        : that.options.totalRows
      : that.pageTo

    $.each(that.header.fields, (j, field) => {
      const column = that.columns[that.fieldsColumnsIndex[field]]
      const selectControl = UtilsFilterControl.getControlContainer().find(`.bootstrap-table-filter-control-${UtilsFilterControl.escapeID(column.field)}`)
      if (
        UtilsFilterControl.isColumnSearchableViaSelect(column) &&
        UtilsFilterControl.isFilterDataNotGiven(column) &&
        UtilsFilterControl.hasSelectControlElement(selectControl)
      ) {
        if (selectControl.get(selectControl.length - 1).options.length === 0) {
          // Added the default option
          UtilsFilterControl.addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault)
        }

        const uniqueValues = {}
        for (let i = 0; i < z; i++) {
          // Added a new value
          const fieldValue = data[i][field]
          const formatter = that.options.editable && column.editable ? column._formatter : that.header.formatters[j]
          let formattedValue = Utils.calculateObjectValue(that.header, formatter, [fieldValue, data[i], i], fieldValue)

          if (column.filterDataCollector) {
            formattedValue = Utils.calculateObjectValue(that.header, column.filterDataCollector, [fieldValue, data[i], formattedValue], formattedValue)
          }

          uniqueValues[formattedValue] = fieldValue

          if (typeof formattedValue === 'object' && formattedValue !== null) {
            formattedValue.forEach((value) => {
              UtilsFilterControl.addOptionToSelectControl(selectControl, value, value, column.filterDefault)
            })
            continue
          }

          UtilsFilterControl.addOptionToSelectControl(selectControl, formattedValue, formattedValue, column.filterDefault)
        }

        UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy)

        if (that.options.hideUnusedSelectOptions) {
          UtilsFilterControl.hideUnusedSelectOptions(selectControl, uniqueValues)
        }
      }
    })

    that.trigger('created-controls')
  },
  getFilterDataMethod (objFilterDataMethod, searchTerm) {
    const keys = Object.keys(objFilterDataMethod)
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === searchTerm) {
        return objFilterDataMethod[searchTerm]
      }
    }
    return null
  },
  createControls (that, header) {
    let addedFilterControl = false
    let isVisible
    let html

    $.each(that.columns, (i, column) => {
      html = []

      if (!column.visible) {
        return
      }

      if (!column.filterControl && !that.options.filterControlContainer) {
        html.push('<div class="no-filter-control"></div>')
      } else if (that.options.filterControlContainer) {
        const $filterControl = $(`.bootstrap-table-filter-control-${column.field}`)
        const placeholder = column.filterControlPlaceholder ? column.filterControlPlaceholder : ''
        $filterControl.attr('placeholder', placeholder)
        $filterControl.val(column.filterDefault)
        $filterControl.attr('data-field', column.field)
        addedFilterControl = true
      } else {
        const nameControl = column.filterControl.toLowerCase()

        html.push('<div class="filter-control">')
        addedFilterControl = true

        if (column.searchable && that.options.filterTemplate[nameControl]) {
          html.push(
            that.options.filterTemplate[nameControl](
              that,
              column.field,
              column.filterControlPlaceholder
                ? column.filterControlPlaceholder
                : '',
              column.filterDefault
            )
          )
        }
      }

      if (!column.filterControl && '' !== column.filterDefault && 'undefined' !== typeof column.filterDefault) {
        if ($.isEmptyObject(that.filterColumnsPartial)) {
          that.filterColumnsPartial = {}
        }

        that.filterColumnsPartial[column.field] = column.filterDefault
      }

      $.each(header.children().children(), (i, tr) => {
        const $tr = $(tr)
        if ($tr.data('field') === column.field) {
          $tr.find('.fht-cell').append(html.join(''))
          return false
        }
      })

      if (
        column.filterData !== undefined &&
        column.filterData.toLowerCase() !== 'column'
      ) {
        const filterDataType = UtilsFilterControl.getFilterDataMethod(
          /* eslint-disable no-use-before-define */
          filterDataMethods,
          column.filterData.substring(0, column.filterData.indexOf(':'))
        )
        let filterDataSource
        let selectControl

        if (filterDataType !== null) {
          filterDataSource = column.filterData.substring(
            column.filterData.indexOf(':') + 1,
            column.filterData.length
          )
          selectControl = UtilsFilterControl.getControlContainer().find(`.bootstrap-table-filter-control-${UtilsFilterControl.escapeID(column.field)}`)

          UtilsFilterControl.addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault)
          filterDataType(filterDataSource, selectControl, that.options.filterOrderBy, column.filterDefault)
        } else {
          throw new SyntaxError(
            'Error. You should use any of these allowed filter data methods: var, obj, json, url, func.' +
            ' Use like this: var: {key: "value"}'
          )
        }
      }
    })

    if (addedFilterControl) {
      UtilsFilterControl.getControlContainer().off('keyup', 'input').on('keyup', 'input', ({currentTarget, keyCode}, obj) => {
        // Simulate enter key action from clear button
        keyCode = obj ? obj.keyCode : keyCode

        if (that.options.searchOnEnterKey && keyCode !== 13) {
          return
        }

        if ($.inArray(keyCode, [37, 38, 39, 40]) > -1) {
          return
        }

        const $currentTarget = $(currentTarget)

        if ($currentTarget.is(':checkbox') || $currentTarget.is(':radio')) {
          return
        }

        clearTimeout(currentTarget.timeoutId || 0)
        currentTarget.timeoutId = setTimeout(() => {
          that.onColumnSearch({currentTarget, keyCode})
        }, that.options.searchTimeOut)
      })

      UtilsFilterControl.getControlContainer().off('change', 'select').on('change', 'select', ({currentTarget, keyCode}) => {
        if (that.options.searchOnEnterKey && keyCode !== 13) {
          return
        }

        if ($.inArray(keyCode, [37, 38, 39, 40]) > -1) {
          return
        }

        const $select = $(currentTarget)
        const value = $select.val()
        if ($.trim(value)) {
          $select.find('option[selected]').removeAttr('selected')
          $select.find('option[value="' + value + '"]').attr('selected', true)
        } else {
          $select.find('option[selected]').removeAttr('selected')
        }

        clearTimeout(currentTarget.timeoutId || 0)
        currentTarget.timeoutId = setTimeout(() => {
          that.onColumnSearch({currentTarget, keyCode})
        }, that.options.searchTimeOut)
      })

      header.off('mouseup', 'input').on('mouseup', 'input', ({currentTarget, keyCode}) => {
        const $input = $(currentTarget)
        const oldValue = $input.val()

        if (oldValue === '') {
          return
        }

        setTimeout(() => {
          const newValue = $input.val()

          if (newValue === '') {
            clearTimeout(currentTarget.timeoutId || 0)
            currentTarget.timeoutId = setTimeout(() => {
              that.onColumnSearch({currentTarget, keyCode})
            }, that.options.searchTimeOut)
          }
        }, 1)
      })

      if (UtilsFilterControl.getControlContainer().find('.date-filter-control').length > 0) {
        $.each(that.columns, (i, {filterControl, field, filterDatepickerOptions}) => {
          if (
            filterControl !== undefined &&
            filterControl.toLowerCase() === 'datepicker'
          ) {
            UtilsFilterControl.getControlContainer()
              .find(
                `.date-filter-control.bootstrap-table-filter-control-${field}`
              )
              .datepicker(filterDatepickerOptions)
              .on('changeDate', ({currentTarget, keyCode}) => {
                clearTimeout(currentTarget.timeoutId || 0)
                currentTarget.timeoutId = setTimeout(() => {
                  that.onColumnSearch({currentTarget, keyCode})
                }, that.options.searchTimeOut)
              })
          }
        })
      }

      if (that.options.sidePagination !== 'server') {
        that.triggerSearch()
      }

    } else {
      UtilsFilterControl.getControlContainer().find('.filterControl').hide()
    }
  },
  getDirectionOfSelectOptions (_alignment) {
    const alignment = _alignment === undefined ? 'left' : _alignment.toLowerCase()

    switch (alignment) {
      case 'left':
        return 'ltr'
      case 'right':
        return 'rtl'
      case 'auto':
        return 'auto'
      default:
        return 'ltr'
    }
  }
}
const filterDataMethods = {
  func (filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = window[filterDataSource].apply()
    for (const key in variableValues) {
      UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], selected)
    }
    UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy)
  },
  obj (filterDataSource, selectControl, filterOrderBy, selected) {
    const objectKeys = filterDataSource.split('.')
    const variableName = objectKeys.shift()
    let variableValues = window[variableName]

    if (objectKeys.length > 0) {
      objectKeys.forEach((key) => {
        variableValues = variableValues[key]
      })
    }

    for (const key in variableValues) {
      UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], selected)
    }
    UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy)
  },
  var (filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = window[filterDataSource]
    for (const key in variableValues) {
      UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], selected)
    }
    UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy)
  },
  url (filterDataSource, selectControl, filterOrderBy, selected) {
    $.ajax({
      url: filterDataSource,
      dataType: 'json',
      success (data) {
        for (const key in data) {
          UtilsFilterControl.addOptionToSelectControl(selectControl, key, data[key], selected)
        }
        UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy)
      }
    })
  },
  json (filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = JSON.parse(filterDataSource)
    for (const key in variableValues) {
      UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], selected)
    }
    UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy)
  }
}

$.extend($.fn.bootstrapTable.defaults, {
  filterControl: false,
  onColumnSearch (field, text) {
    return false
  },
  onCreatedControls () {
    return true
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
  // internal variables
  valuesFilterControl: []
})

$.extend($.fn.bootstrapTable.columnDefaults, {
  filterControl: undefined,
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
  }[$.fn.bootstrapTable.theme] || 'fa-trash'
})

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.extend($.fn.bootstrapTable.defaults, {
  formatClearSearch () {
    return 'Clear filters'
  }
})

$.fn.bootstrapTable.methods.push('triggerSearch')
$.fn.bootstrapTable.methods.push('clearFilterControl')

$.BootstrapTable = class extends $.BootstrapTable {
  init () {
    UtilsFilterControl.bootstrapTableInstance = this
    // Make sure that the filterControl option is set
    if (this.options.filterControl) {
      const that = this

      // Make sure that the internal variables are set correctly
      this.options.valuesFilterControl = []

      this.$el
        .on('reset-view.bs.table', () => {
          // Create controls on $tableHeader if the height is set
          if (!that.options.height) {
            return
          }

          // Avoid recreate the controls
          if (
            UtilsFilterControl.getControlContainer().find('select').length > 0 ||
            UtilsFilterControl.getControlContainer().find('input').length > 0
          ) {
            return
          }

          UtilsFilterControl.createControls(that, UtilsFilterControl.getControlContainer())
        })
        .on('post-header.bs.table', () => {
          UtilsFilterControl.setValues(that)
        })
        .on('post-body.bs.table', () => {
          if (that.options.height && !that.options.filterControlContainer) {
            UtilsFilterControl.fixHeaderCSS(that)
          }
          this.$tableLoading.css('top', this.$header.outerHeight() + 1)
        })
        .on('column-switch.bs.table', () => {
          UtilsFilterControl.setValues(that)
        })
        .on('load-success.bs.table', () => {
          that.enableControls(true)
        })
        .on('load-error.bs.table', () => {
          that.enableControls(true)
        })
    }

    super.init()
  }

  initHeader () {
    super.initHeader()

    if (!this.options.filterControl) {
      return
    }
    UtilsFilterControl.createControls(this, UtilsFilterControl.getControlContainer())
  }

  initBody () {
    super.initBody()

    UtilsFilterControl.initFilterSelectControls(this)
  }

  initSearch () {
    const that = this
    const fp = $.isEmptyObject(that.filterColumnsPartial)
      ? null
      : that.filterColumnsPartial

    if (fp === null || Object.keys(fp).length <= 1) {
      super.initSearch()
    }

    if (this.options.sidePagination === 'server') {
      return
    }

    if (fp === null) {
      return
    }

    // Check partial column filter
    that.data = fp
      ? that.options.data.filter((item, i) => {
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
              } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                if (thisColumn.filterStrictSearch) {
                  tmpItemIsExpected = value.toString().toLowerCase() === fval.toString().toLowerCase()
                } else if (thisColumn.filterStartsWithSearch) {
                  tmpItemIsExpected = (`${value}`).toLowerCase().indexOf(fval) === 0
                } else {
                  tmpItemIsExpected = (`${value}`).toLowerCase().includes(fval)
                }

                const largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm
                const matches = largerSmallerEqualsRegex.exec(fval)

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

                if (thisColumn.filterCustomSearch) {
                  const customSearchResult = Utils.calculateObjectValue(that, thisColumn.filterCustomSearch, [fval, value, key, that.options.data], true)
                  if (customSearchResult !== null) {
                    tmpItemIsExpected = customSearchResult
                  }
                }
              }
            }
          }

          itemIsExpected.push(tmpItemIsExpected)
        })

        return !itemIsExpected.includes(false)
      })
      : that.data
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
    const $field = $(currentTarget)
      .closest('[data-field]')
      .data('field')

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
    this.trigger('column-search', $field, text)
  }

  initToolbar () {
    this.showSearchClearButton = this.options.filterControl && this.options.showSearchClearButton
    super.initToolbar()
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
      const header = UtilsFilterControl.getCurrentHeader(that)
      const table = header.closest('table')
      const controls = header.find(UtilsFilterControl.getCurrentSearchControls(that))
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
      if (
        that.options.sortName !== table.data('sortName') ||
        that.options.sortOrder !== table.data('sortOrder')
      ) {
        const sorter = header.find(
          Utils.sprintf(
            '[data-field="%s"]',
            $(controls[0])
              .closest('table')
              .data('sortName')
          )
        )
        if (sorter.length > 0) {
          that.onSort({type: 'keypress', currentTarget: sorter})
          $(sorter)
            .find('.sortable')
            .trigger('click')
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
    if (
      this.options.disableControlWhenSearch &&
      this.options.sidePagination === 'server'
    ) {
      const searchControls = UtilsFilterControl.getSearchControls(this)

      if (!enable) {
        searchControls.prop('disabled', 'disabled')
      } else {
        searchControls.removeProp('disabled')
      }
    }
  }
}
