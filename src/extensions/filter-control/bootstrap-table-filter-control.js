/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v3.0.0
 */

import {createElem, createOpt, is, find, hide, show} from '../../dom/dom.js'
import Sort from '../../utils/sort.js'
import {isEmptyObject, isJQueryObject} from '../../utils/types.js'
import Utils from '../../utils/index.js'

const UtilsFilterControl = {
  hideUnusedSelectOptions (selectControl, uniqueValues) {
    const options = selectControl.options

    for (let i = 0; i < options.length; i++) {
      if (options[i].value !== '') {
        if (!uniqueValues.hasOwnProperty(options[i].value)) {
          hide(find(selectControl, Utils.sprintf('option[value=\'%s\']', options[i].value)))
        } else {
          show(find(selectControl, Utils.sprintf('option[value=\'%s\']', options[i].value)))
        }
      }
    }
  },
  addOptionToSelectControl (selectControl, value, text) {
    if (!UtilsFilterControl.existOptionInSelectControl(selectControl, value)) {
      selectControl.appendChild(createOpt(text, value))
    }
  },
  sortSelectControl (selectControl, orderBy) {
    const $selectControl = $(selectControl)
    const $opts = $selectControl.find('option:gt(0)')

    $opts.sort((a, b) => {
      return Sort(a.textContent, b.textContent, orderBy === 'desc' ? -1 : 1)
    })

    $selectControl.find('option:gt(0)').remove()
    $selectControl.append($opts)
  },
  existOptionInSelectControl (selectControl, value) {
    for (let i = 0; i < selectControl.options.length; i++) {
      if (selectControl.options[i].value === value.toString()) {
        // The value is not valid to add
        return true
      }
    }

    // If we get here, the value is valid to add
    return false
  },
  fixHeaderCSS ({ $tableHeader, options }) {
    let header = $tableHeader
    let useMultipleControl = false
    if (isJQueryObject($tableHeader)) {
      header = $tableHeader[0]
    }

    options.columns.forEach((columns, i) => {
      columns.forEach((_column, j) => {
        if (_column.filterControl === 'multiple') {
          useMultipleControl = true
        }
      })
    })

    header.style.height = useMultipleControl ? '123px' : '77px'
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
      if (is(el, 'input[type=text]')) {
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
  copyValues (that) {
    const header = UtilsFilterControl.getCurrentHeader(that)
    const searchControls = UtilsFilterControl.getCurrentSearchControls(that)

    that.options.valuesFilterControl = []

    find(header, searchControls).forEach((elem, i) => {
      that.options.valuesFilterControl.push({
        field: elem.closest('[data-field]').getAttribute('data-field'),
        value: elem.value,
        position: UtilsFilterControl.getCursorPosition(elem),
        hasFocus: is(elem, ':focus')
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
      find(header, searchControls).forEach((elem, i) => {
        field = elem.closest('[data-field]').getAttribute('data-field')
        result = that.options.valuesFilterControl.filter(valueObj => valueObj.field === field)

        if (result.length > 0) {
          elem.value = result[0].value
          if (result[0].hasFocus) {
            // set callback if the field had the focus.
            fieldToFocusCallback = ((fieldToFocus, carretPosition) => {
              // Closure here to capture the field and cursor position
              const closedCallback = () => {
                fieldToFocus.focus()
                fieldToFocus.value = fieldToFocus.value
              }
              return closedCallback
            })(elem, result[0].position)
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
      foundCookies.forEach((cookie, i) => {
        if (/./.test(cookie)) {
          cookie = cookie.split('.').pop()
        }

        if (!cookies.includes(cookie)) {
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
    return filterControl && (filterControl.toLowerCase() === 'select' || filterControl.toLowerCase() === 'multiple') && searchable
  },
  isFilterDataNotGiven ({ filterData }) {
    return filterData === undefined || filterData.toLowerCase() === 'column'
  },
  initFilterSelectControls (that) {
    const data = that.data
    const itemsPerPage = that.pageTo < that.options.data.length ? that.options.data.length : that.pageTo
    const z = that.options.pagination
      ? that.options.sidePagination === 'server'
        ? that.pageTo
        : that.options.totalRows
      : that.pageTo

    that.header.fields.forEach((field, j) => {
      const column = that.columns[that.fieldsColumnsIndex[field]]
      const selectControl = document.getElementsByClassName(`bootstrap-table-filter-control-${UtilsFilterControl.escapeID(column.field)}`)[0]

      if (selectControl && UtilsFilterControl.isColumnSearchableViaSelect(column) && UtilsFilterControl.isFilterDataNotGiven(column)) {
        if (selectControl.options.length === 0) {
          // Added the default option
          UtilsFilterControl.addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder)
        }

        const uniqueValues = {}
        for (let i = 0; i < z; i++) {
          // Added a new value
          const fieldValue = data[i][field]
          const formattedValue = Utils.calculateObjectValue(that.header, that.header.formatters[j], [fieldValue, data[i], i], fieldValue)

          uniqueValues[formattedValue] = fieldValue
        }

        // eslint-disable-next-line guard-for-in
        for (const key in uniqueValues) {
          UtilsFilterControl.addOptionToSelectControl(selectControl, uniqueValues[key], key)
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
    let controls

    that.columns.forEach((column, i) => {
      isVisible = 'hidden'

      if (!column.visible) {
        return
      }

      if (!column.filterControl) {
        controls = createElem('div', ['class', 'no-filter-control'])
      } else {
        controls = createElem('div', ['class', 'filter-control'])

        const nameControl = column.filterControl.toLowerCase()
        if (column.searchable && that.options.filterTemplate[nameControl]) {
          addedFilterControl = true
          isVisible = 'visible'
          controls.appendChild(
            that.options.filterTemplate[nameControl](
              that,
              column.field,
              isVisible,
              column.filterControlPlaceholder ? column.filterControlPlaceholder : '',
              `filter-control-${i}`
            )
          )
        }
      }

      find(header, 'th').forEach((th, i) => {
        if (th.getAttribute('data-field') === column.field) {
          const div = find(th, '.th-inner')

          if (div && div.length > 0) {
            div[0].parentNode.insertBefore(controls, div[0])
          }

          return false
        }
      })

      if (column.filterData !== undefined && column.filterData.toLowerCase() !== 'column') {
        // eslint-disable-next-line no-use-before-define
        const filterDataType = UtilsFilterControl.getFilterDataMethod(filterDataMethods, column.filterData.substring(0, column.filterData.indexOf(':')))
        let filterDataSource
        let selectControl

        if (filterDataType !== null) {
          filterDataSource = column.filterData.substring(column.filterData.indexOf(':') + 1, column.filterData.length)
          selectControl = document.getElementsByClassName(`bootstrap-table-filter-control-${UtilsFilterControl.escapeID(column.field)}`)[0]

          UtilsFilterControl.addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder)
          filterDataType(filterDataSource, selectControl)
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
                  UtilsFilterControl.addOptionToSelectControl(selectControl, key, data[key])
                }
                UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy)
              }
            })
            break
          case 'var':
            variableValues = window[filterDataSource]
            // eslint-disable-next-line guard-for-in
            for (key in variableValues) {
              UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key])
            }
            UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy)
            break
          case 'jso':
            variableValues = JSON.parse(filterDataSource)
            // eslint-disable-next-line guard-for-in
            for (key in variableValues) {
              UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key])
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

        if ([37, 38, 39, 40].includes(event.keyCode)) {
          return
        }

        if (is(event.currentTarget, ':checkbox') || is(event.currentTarget, ':radio')) {
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

        if ([37, 38, 39, 40].includes(event.keyCode)) {
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
    } else {
      hide(find(header, '.filterControl'))
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
  var (filterDataSource, selectControl, filterOrderBy) {
    const variableValues = window[filterDataSource]
    // eslint-disable-next-line guard-for-in
    for (const key in variableValues) {
      UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key])
    }
    UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy)
  },
  url (filterDataSource, selectControl, filterOrderBy) {
    $.ajax({
      url: filterDataSource,
      dataType: 'json',
      success (data) {
        // eslint-disable-next-line guard-for-in
        for (const key in data) {
          UtilsFilterControl.addOptionToSelectControl(selectControl, key, data[key])
        }
        UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy)
      }
    })
  },
  json (filterDataSource, selectControl, filterOrderBy) {
    const variableValues = JSON.parse(filterDataSource)
    // eslint-disable-next-line guard-for-in
    for (const key in variableValues) {
      UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key])
    }
    UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy)
  }
}

Utils.extend($.fn.bootstrapTable.defaults, {
  filterControl: false,
  onColumnSearch (field, text) {
    return false
  },
  onCreatedControls () {
    return true
  },
  filterShowClear: false,
  alignmentSelectControlOptions: undefined,
  filterTemplate: {
    input (that, field, isVisible, placeholder) {
      return createElem('input',
        ['type', 'text'],
        ['class', Utils.sprintf('form-control bootstrap-table-filter-control-%s', field)],
        ['width', '100%'],
        ['visibility', isVisible],
        ['placeholder', placeholder])
    },
    select ({ options }, field, isVisible) {
      return createElem('select',
        ['class', Utils.sprintf('form-control bootstrap-table-filter-control-%s', field)],
        ['visibility', isVisible],
        ['width', '100%'],
        ['dir', UtilsFilterControl.getDirectionOfSelectOptions(options.alignmentSelectControlOptions)])
    },
    multiple ({ options }, field, isVisible) {
      return createElem('select',
        ['class', Utils.sprintf('form-control bootstrap-table-filter-control-%s', field)],
        ['visibility', isVisible],
        ['width', '100%'],
        ['multiple', 'multiple'],
        ['dir', UtilsFilterControl.getDirectionOfSelectOptions(options.alignmentSelectControlOptions)])
    }
  },
  disableControlWhenSearch: false,
  searchOnEnterKey: false,
  // internal variables
  valuesFilterControl: []
})

Utils.extend($.fn.bootstrapTable.columnDefaults, {
  filterControl: undefined,
  filterData: undefined,
  filterStrictSearch: false,
  filterStartsWithSearch: false,
  filterControlPlaceholder: '',
  filterOrderBy: 'asc' // asc || desc
})

Utils.extend($.fn.bootstrapTable.Constructor.EVENTS, {
  'column-search.bs.table': 'onColumnSearch',
  'created-controls.bs.table': 'onCreatedControls'
})

Utils.extend($.fn.bootstrapTable.defaults.icons, {
  clear: {
    bootstrap3: 'glyphicon-trash icon-clear'
  }[$.fn.bootstrapTable.theme] || 'fa-trash'
})

Utils.extend($.fn.bootstrapTable.locales, {
  formatClearFilters () {
    return 'Clear Filters'
  }
})

Utils.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

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
          if (find(that.$tableHeader, 'select').length > 0 || find(that.$tableHeader, 'input').length > 0) {
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

  initToolbar () {
    this.showToolbar = this.showToolbar || (this.options.filterControl && this.options.filterShowClear)

    super.initToolbar()

    if (this.options.filterControl && this.options.filterShowClear) {
      const $btnGroup = find(this.$toolbar, '.btn-group')[0]
      let $btnClear = find($btnGroup, '.filter-show-clear')

      if (!$btnClear.length) {
        $btnClear = createElem('button',
          ['class', Utils.sprintf('btn btn-%s filter-show-clear', this.options.buttonsClass)],
          ['type', 'button'],
          ['title', this.options.formatClearFilters()])

        const iElem = createElem('i', ['class', Utils.sprintf('%s %s', this.options.iconsPrefix, this.options.icons.clear)])

        $btnClear.appendChild(iElem)
        $btnClear.addEventListener('click', this.clearFilterControl.bind(this))
        $btnGroup.appendChild($btnClear)
      }
    }
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
    const fp = isEmptyObject(that.filterColumnsPartial)
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
        Object.keys(item).forEach((key, index) => {
          const thisColumn = that.columns[that.fieldsColumnsIndex[key]]
          const fval = (fp[key] || '').toLowerCase()
          let value = item[key]

          if (fval === '') {
            itemIsExpected.push(true)
          } else {
            // Fix #142: search use formated data
            if (thisColumn && thisColumn.searchFormatter) {
              value = Utils.calculateObjectValue(
                that.header,
                that.header.formatters[that.header.fields.indexOf(key)],
                [value, item, i],
                value
              )
            }

            if (that.header.fields.includes(key)) {
              if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
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
    if ([37, 38, 39, 40].includes(event.keyCode)) {
      return
    }

    UtilsFilterControl.copyValues(this)
    const text = event.currentTarget.value.trim()
    const $field = event.currentTarget.closest('[data-field]').getAttribute('data-field')

    if (isEmptyObject(this.filterColumnsPartial)) {
      this.filterColumnsPartial = {}
    }
    if (text) {
      this.filterColumnsPartial[$field] = text
    } else {
      delete this.filterColumnsPartial[$field]
    }

    // if the searchText is the same as the previously selected column value,
    // bootstrapTable will not try searching again (even though the selected column
    // may be different from the previous search).  As a work around
    // we're manually appending some text to bootrap's searchText field
    // to guarantee that it will perform a search again when we call this.onSearch(event)
    this.searchText += 'randomText'

    this.options.pageNumber = 1
    this.EnableControls(false)
    this.onSearch(event)
    this.trigger('column-search', $field, text)
  }

  clearFilterControl () {
    if (this.options.filterControl && this.options.filterShowClear) {
      const that = this
      const cookies = UtilsFilterControl.collectBootstrapCookies()
      const header = UtilsFilterControl.getCurrentHeader(that)
      const table = header.closest('table')
      const controls = find(header, UtilsFilterControl.getCurrentSearchControls(that))
      const search = find(that.$toolbar, '.search input')
      let hasValues = false
      let timeoutId = 0

      that.options.valuesFilterControl.forEach((item, i) => {
        hasValues = hasValues ? true : item.value !== ''
        item.value = ''
      })

      if (that.options.filterControls) {
        that.options.filterControls.forEach((item, i) => {
          item.text = ''
        })
      }

      UtilsFilterControl.setValues(that)

      // clear cookies once the filters are clean
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (cookies && cookies.length > 0) {
          cookies.forEach((item, i) => {
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
        $(controls[0]).trigger(controls[0].tagName === 'INPUT' ? 'keyup' : 'change', { keyCode: 13 })
      } else {
        return
      }

      if (search.length > 0) {
        that.resetSearch()
      }

      // use the default sort order if it exists. do nothing if it does not
      if (that.options.sortName !== table.data('sortName') || that.options.sortOrder !== table.data('sortOrder')) {
        const sorter = find(header, Utils.sprintf('[data-field="%s"]', controls[0].closest('table').getAttribute('data-sort-name')))
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

    find(header, searchControls).forEach((item, i) => {
      const el = $(item)
      if (is(el, 'select')) {
        el.change()
      } else {
        el.keyup()
      }
    })
  }

  EnableControls (enable) {
    if (this.options.disableControlWhenSearch) {
      const header = UtilsFilterControl.getCurrentHeader(this)
      const searchControls = UtilsFilterControl.getCurrentSearchControls(this)

      if (!enable) {
        find(header, searchControls).forEach((elem, i) => {
          elem.setAttribute('disabled', 'disabled')
        })
      } else {
        find(header, searchControls).forEach((elem, i) => {
          elem.removeAttribute('disabled')
        })
      }
    }
  }
}
