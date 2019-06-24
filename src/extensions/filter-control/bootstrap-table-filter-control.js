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
      const option = $(
        $('<option></option>')
          .attr('value', value)
          .text(
            $('<div />')
              .html(text)
              .text()
          )
      )

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
  fixHeaderCSS ({ $tableHeader }) {
    $tableHeader.css('height', '77px')
  },
  getCurrentHeader ({ $header, options, $tableHeader }) {
    let header = $header
    if (options.height) {
      header = $tableHeader
    }

    return header
  },
  getCurrentSearchControls ({ options }) {
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
    const header = UtilsFilterControl.getCurrentHeader(that)
    const searchControls = UtilsFilterControl.getCurrentSearchControls(that)

    that.options.valuesFilterControl = []

    header.find(searchControls).each(function () {
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
    const header = UtilsFilterControl.getCurrentHeader(that)
    const searchControls = UtilsFilterControl.getCurrentSearchControls(that)

    if (that.options.valuesFilterControl.length > 0) {
      //  Callback to apply after settings fields values
      let fieldToFocusCallback = null
      header.find(searchControls).each(function (index, ele) {
        field = $(this)
          .closest('[data-field]')
          .data('field')
        result = that.options.valuesFilterControl.filter(valueObj => valueObj.field === field)

        if (result.length > 0) {
          $(this).val(result[0].value)
          if (result[0].hasFocus) {
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
      return cookies
    }
  },
  escapeID (id) {
    return String(id).replace(/(:|\.|\[|\]|,)/g, '\\$1')
  },
  isColumnSearchableViaSelect ({ filterControl, searchable }) {
    return filterControl &&
      filterControl.toLowerCase() === 'select' &&
      searchable
  },
  isFilterDataNotGiven ({ filterData }) {
    return filterData === undefined ||
      filterData.toLowerCase() === 'column'
  },
  hasSelectControlElement (selectControl) {
    return selectControl && selectControl.length > 0
  },
  initFilterSelectControls (that) {
    const data = that.data
    const itemsPerPage = that.pageTo < that.options.data.length ? that.options.data.length : that.pageTo
    const z = that.options.pagination
      ? that.options.sidePagination === 'server'
        ? that.pageTo
        : that.options.totalRows
      : that.pageTo

    $.each(that.header.fields, (j, field) => {
      const column = that.columns[that.fieldsColumnsIndex[field]]
      const selectControl = $(`.bootstrap-table-filter-control-${UtilsFilterControl.escapeID(column.field)}`)

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
          let formattedValue = Utils.calculateObjectValue(that.header, that.header.formatters[j], [fieldValue, data[i], i], fieldValue)

          if (column.filterDataCollector) {
            formattedValue = Utils.calculateObjectValue(that.header, column.filterDataCollector, [fieldValue, data[i], formattedValue], formattedValue)
          }

          if (typeof formattedValue === 'object') {
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
      isVisible = 'hidden'
      html = []

      if (!column.visible) {
        return
      }

      if (!column.filterControl) {
        html.push('<div class="no-filter-control"></div>')
      } else {
        html.push('<div class="filter-control">')

        const nameControl = column.filterControl.toLowerCase()
        if (column.searchable && that.options.filterTemplate[nameControl]) {
          addedFilterControl = true
          isVisible = 'visible'
          html.push(
            that.options.filterTemplate[nameControl](
              that,
              column.field,
              isVisible,
              column.filterControlPlaceholder
                ? column.filterControlPlaceholder
                : '',
              column.filterDefault
            )
          )

          if ('' !== column.filterDefault && 'undefined' !== typeof column.filterDefault) {
            if ($.isEmptyObject(that.filterColumnsPartial)) {
              that.filterColumnsPartial = {}
            }

            that.filterColumnsPartial[column.field] = column.filterDefault
          }
        }
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
          selectControl = $(
            `.bootstrap-table-filter-control-${UtilsFilterControl.escapeID(column.field)}`
          )

          UtilsFilterControl.addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault)
          filterDataType(filterDataSource, selectControl, column.filterDefault)
        } else {
          throw new SyntaxError(
            'Error. You should use any of these allowed filter data methods: var, json, url.' +
            ' Use like this: var: {key: "value"}'
          )
        }

        let variableValues
        let key
        // eslint-disable-next-line default-case
        switch (filterDataType) {
          case 'url':
            $.ajax({
              url: filterDataSource,
              dataType: 'json',
              success (data) {
                // eslint-disable-next-line guard-for-in
                for (const key in data) {
                  UtilsFilterControl.addOptionToSelectControl(selectControl, key, data[key], column.filterDefault)
                }
                UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy)
              }
            })
            break
          case 'var':
            variableValues = window[filterDataSource]
            // eslint-disable-next-line guard-for-in
            for (key in variableValues) {
              UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], column.filterDefault)
            }
            UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy)
            break
          case 'jso':
            variableValues = JSON.parse(filterDataSource)
            // eslint-disable-next-line guard-for-in
            for (key in variableValues) {
              UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], column.filterDefault)
            }
            UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy)
            break
        }
      }
    })

    if (addedFilterControl) {
      header.off('keyup', 'input').on('keyup', 'input', (event, obj) => {
        // Simulate enter key action from clear button
        event.keyCode = obj ? obj.keyCode : event.keyCode

        if (that.options.searchOnEnterKey && event.keyCode !== 13) {
          return
        }

        if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
          return
        }

        const $currentTarget = $(event.currentTarget)

        if ($currentTarget.is(':checkbox') || $currentTarget.is(':radio')) {
          return
        }

        clearTimeout(event.currentTarget.timeoutId || 0)
        event.currentTarget.timeoutId = setTimeout(() => {
          that.onColumnSearch(event)
        }, that.options.searchTimeOut)
      })

      header.off('change', 'select').on('change', 'select', event => {
        if (that.options.searchOnEnterKey && event.keyCode !== 13) {
          return
        }

        if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
          return
        }

        clearTimeout(event.currentTarget.timeoutId || 0)
        event.currentTarget.timeoutId = setTimeout(() => {
          that.onColumnSearch(event)
        }, that.options.searchTimeOut)
      })

      header.off('mouseup', 'input').on('mouseup', 'input', function (event) {
        const $input = $(this)
        const oldValue = $input.val()

        if (oldValue === '') {
          return
        }

        setTimeout(() => {
          const newValue = $input.val()

          if (newValue === '') {
            clearTimeout(event.currentTarget.timeoutId || 0)
            event.currentTarget.timeoutId = setTimeout(() => {
              that.onColumnSearch(event)
            }, that.options.searchTimeOut)
          }
        }, 1)
      })

      if (header.find('.date-filter-control').length > 0) {
        $.each(that.columns, (i, { filterControl, field, filterDatepickerOptions }) => {
          if (
            filterControl !== undefined &&
            filterControl.toLowerCase() === 'datepicker'
          ) {
            header
              .find(
                `.date-filter-control.bootstrap-table-filter-control-${field}`
              )
              .datepicker(filterDatepickerOptions)
              .on('changeDate', (event) => {
                clearTimeout(event.currentTarget.timeoutId || 0)
                event.currentTarget.timeoutId = setTimeout(() => {
                  that.onColumnSearch(event)
                }, that.options.searchTimeOut)
              })
          }
        })
      }

      if (that.options.sidePagination !== 'server') {
        header.find('[class*=\'bootstrap-table-filter-control\']').each((k, input) => {
          $(input).trigger('change')
        })
      }

    } else {
      header.find('.filterControl').hide()
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
  var (filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = window[filterDataSource]
    // eslint-disable-next-line guard-for-in
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
        // eslint-disable-next-line guard-for-in
        for (const key in data) {
          UtilsFilterControl.addOptionToSelectControl(selectControl, key, data[key], selected)
        }
        UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy)
      }
    })
  },
  json (filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = JSON.parse(filterDataSource)
    // eslint-disable-next-line guard-for-in
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
    input (that, field, isVisible, placeholder, value) {
      return Utils.sprintf(
        '<input type="text" class="form-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s" placeholder="%s" value="%s">',
        field,
        isVisible,
        'undefined' === typeof placeholder ? '' : placeholder,
        'undefined' === typeof value ? '' : value
      )
    },
    select ({ options }, field, isVisible) {
      return Utils.sprintf(
        '<select class="form-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s" dir="%s"></select>',
        field,
        isVisible,
        UtilsFilterControl.getDirectionOfSelectOptions(
          options.alignmentSelectControlOptions
        )
      )
    },
    datepicker (that, field, isVisible, value) {
      return Utils.sprintf(
        '<input type="text" class="form-control date-filter-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s" value="%s">',
        field,
        isVisible,
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
            that.$tableHeader.find('select').length > 0 ||
            that.$tableHeader.find('input').length > 0
          ) {
            return
          }

          UtilsFilterControl.createControls(that, that.$tableHeader)
        })
        .on('post-header.bs.table', () => {
          UtilsFilterControl.setValues(that)
        })
        .on('post-body.bs.table', () => {
          if (that.options.height) {
            UtilsFilterControl.fixHeaderCSS(that)
          }
          this.$tableLoading.css('top', this.$header.outerHeight() + 1)
        })
        .on('column-switch.bs.table', () => {
          UtilsFilterControl.setValues(that)
        })
        .on('load-success.bs.table', () => {
          that.EnableControls(true)
        })
        .on('load-error.bs.table', () => {
          that.EnableControls(true)
        })
    }

    super.init()
  }

  initHeader () {
    super.initHeader()

    if (!this.options.filterControl) {
      return
    }
    UtilsFilterControl.createControls(this, this.$header)
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
        Object.keys(item).forEach((x, index) => {
          const key = that.header.fields[index]
          const thisColumn = that.columns[that.fieldsColumnsIndex[key]]
          const fval = (fp[key] || '').toLowerCase()
          let value = Utils.getItemField(item, key, false)

          if (fval === '') {
            itemIsExpected.push(true)
          } else {
            // Fix #142: search use formated data
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
                itemIsExpected.push(false)
              } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                if (thisColumn.filterStrictSearch) {
                  itemIsExpected.push(value.toString().toLowerCase() === fval.toString().toLowerCase())
                } else if (thisColumn.filterStartsWithSearch) {
                  itemIsExpected.push((`${value}`).toLowerCase().indexOf(fval) === 0)
                } else {
                  itemIsExpected.push((`${value}`).toLowerCase().includes(fval))
                }
              }
            }
          }
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

      // eslint-disable-next-line guard-for-in
      for (const filter in filterColumnsDefaults) {
        this.trigger('column-search', filter, filterColumnsDefaults[filter])
      }
    }
  }

  onColumnSearch (event) {
    if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
      return
    }

    UtilsFilterControl.copyValues(this)
    const text = $.trim($(event.currentTarget).val())
    const $field = $(event.currentTarget)
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
    this.EnableControls(false)
    this.onSearch(event, false)
    this.trigger('column-search', $field, text)
  }

  resetSearch () {
    if (this.options.filterControl && this.options.showSearchClearButton) {
      this.clearFilterControl()
    }
    super.resetSearch()
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
          controls[0].tagName === 'INPUT' ? 'keyup' : 'change', { keyCode: 13 }
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
          that.onSort({ type: 'keypress', currentTarget: sorter })
          $(sorter)
            .find('.sortable')
            .trigger('click')
        }
      }
    }
  }

  triggerSearch () {
    const header = UtilsFilterControl.getCurrentHeader(this)
    const searchControls = UtilsFilterControl.getCurrentSearchControls(this)

    header.find(searchControls).each(function () {
      const el = $(this)
      if (el.is('select')) {
        el.change()
      } else {
        el.keyup()
      }
    })
  }

  EnableControls (enable) {
    if (
      this.options.disableControlWhenSearch &&
      this.options.sidePagination === 'server'
    ) {
      const header = UtilsFilterControl.getCurrentHeader(this)
      const searchControls = UtilsFilterControl.getCurrentSearchControls(this)

      if (!enable) {
        header.find(searchControls).prop('disabled', 'disabled')
      } else {
        header.find(searchControls).removeProp('disabled')
      }
    }
  }
}
