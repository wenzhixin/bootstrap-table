/**
 * @author: Jewway
 * @version: v1.1.1
 */

function getCurrentHeader (that) {
  let header = that.$header
  if (that.options.height) {
    header = that.$tableHeader
  }

  return header
}

function initFilterValues (that) {
  if (!$.isEmptyObject(that.filterColumnsPartial)) {
    const $header = getCurrentHeader(that)

    $.each(that.columns, (idx, column) => {
      const value = that.filterColumnsPartial[column.field]

      if (column.filter) {
        if (column.filter.setFilterValue) {
          const $filter = $header.find(`[data-field=${column.field}] .filter`)
          column.filter.setFilterValue($filter, column.field, value)
        } else {
          const $ele = $header.find(`[data-filter-field=${column.field}]`)
          switch (column.filter.type) {
            case 'input':
              $ele.val(value)
              break
            case 'select':
              $ele.val(value).trigger('change')
              break
            default:
              break
          }
        }
      }
    })
  }
}

function createFilter (that, header) {
  let enableFilter = false
  let isVisible
  let html
  let timeoutId = 0

  $.each(that.columns, (i, column) => {
    isVisible = 'hidden'
    html = null

    if (!column.visible) {
      return
    }

    if (!column.filter) {
      html = $('<div class="no-filter"></div>')
    } else {
      const filterClass = column.filter.class ? ` ${column.filter.class}` : ''
      html = $(`<div style="margin: 0px 2px 2px 2px;" class="filter${filterClass}">`)

      if (column.searchable) {
        enableFilter = true
        isVisible = 'visible'
      }

      if (column.filter.template) {
        html.append(column.filter.template(that, column, isVisible))
      } else {
        const $filter = $(that.options.filterTemplate[column.filter.type.toLowerCase()](that, column, isVisible))

        switch (column.filter.type) {
          case 'input':
            let cpLock = true
            $filter.off('compositionstart').on('compositionstart', event => {
              cpLock = false
            })

            $filter.off('compositionend').on('compositionend', function (event) {
              cpLock = true
              const $input = $(this)
              clearTimeout(timeoutId)
              timeoutId = setTimeout(() => {
                that.onColumnSearch(event, column.field, $input.val())
              }, that.options.searchTimeOut)
            })

            $filter.off('keyup').on('keyup', function (event) {
              if (cpLock) {
                const $input = $(this)
                clearTimeout(timeoutId)
                timeoutId = setTimeout(() => {
                  that.onColumnSearch(event, column.field, $input.val())
                }, that.options.searchTimeOut)
              }
            })

            $filter.off('mouseup').on('mouseup', function (event) {
              const $input = $(this)
              const oldValue = $input.val()

              if (oldValue === '') {
                return
              }

              setTimeout(() => {
                const newValue = $input.val()

                if (newValue === '') {
                  clearTimeout(timeoutId)
                  timeoutId = setTimeout(() => {
                    that.onColumnSearch(event, column.field, newValue)
                  }, that.options.searchTimeOut)
                }
              }, 1)
            })
            break
          case 'select':
            $filter.on('select2:select', function (event) {
              that.onColumnSearch(event, column.field, $(this).val())
            })

            $filter.on('select2:unselecting', function (event) {
              const $select2 = $(this)
              event.preventDefault()
              $select2.val(null).trigger('change')
              that.searchText = undefined
              that.onColumnSearch(event, column.field, $select2.val())
            })
            break
          default:
            break
        }

        html.append($filter)
      }
    }

    $.each(header.children().children(), (i, tr) => {
      tr = $(tr)
      if (tr.data('field') === column.field) {
        tr.find('.fht-cell').append(html)
        return false
      }
    })
  })

  if (!enableFilter) {
    header.find('.filter').hide()
  }
}

function initSelect2 (that) {
  const $header = getCurrentHeader(that)

  $.each(that.columns, (idx, column) => {
    if (column.filter && column.filter.type === 'select') {
      const $selectEle = $header.find(`select[data-filter-field="${column.field}"]`)

      if ($selectEle.length > 0 && !$selectEle.data().select2) {
        const select2Opts = {
          placeholder: '',
          allowClear: true,
          data: column.filter.data,
          dropdownParent: that.$el.closest('.bootstrap-table')
        }

        $selectEle.select2(select2Opts)
      }
    }
  })
}

$.extend($.fn.bootstrapTable.defaults, {
  filter: false,
  filterValues: {},
  filterTemplate: {
    input (instance, column, isVisible) {
      return `<input type="text" class="form-control" data-filter-field="${column.field}" style="width: 100%; visibility:${isVisible}">`
    },
    select (instance, column, isVisible) {
      return `<select data-filter-field="${column.field}" style="width: 100%; visibility:${isVisible}"></select>`
    }
  },
  onColumnSearch (field, text) {
    return false
  }
})

$.extend($.fn.bootstrapTable.COLUMN_DEFAULTS, {
  filter: undefined
})

$.extend($.fn.bootstrapTable.Constructor.EVENTS, {
  'column-search.bs.table': 'onColumnSearch'
})

const BootstrapTable = $.fn.bootstrapTable.Constructor
const _init = BootstrapTable.prototype.init
const _initHeader = BootstrapTable.prototype.initHeader
const _initSearch = BootstrapTable.prototype.initSearch

BootstrapTable.prototype.init = function (...args) {
  // Make sure that the filtercontrol option is set
  if (this.options.filter) {
    const that = this

    if (that.options.filterTemplate) {
      that.options.filterTemplate = $.extend({}, $.fn.bootstrapTable.defaults.filterTemplate, that.options.filterTemplate)
    }

    if (!$.isEmptyObject(that.options.filterValues)) {
      that.filterColumnsPartial = that.options.filterValues
      that.options.filterValues = {}
    }

    this.$el.on('reset-view.bs.table', () => {
      // Create controls on $tableHeader if the height is set
      if (!that.options.height) {
        return
      }

      // Avoid recreate the controls
      if (that.$tableHeader.find('select').length > 0 || that.$tableHeader.find('input').length > 0) {
        return
      }

      createFilter(that, that.$tableHeader)
    }).on('post-header.bs.table', () => {
      let timeoutId = 0

      initSelect2(that)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        initFilterValues(that)
      }, that.options.searchTimeOut - 1000)
    }).on('column-switch.bs.table', (field, checked) => {
      initFilterValues(that)
    })
  }

  _init.apply(this, Array.prototype.slice.apply(args))
}

BootstrapTable.prototype.initHeader = function (...args) {
  _initHeader.apply(this, Array.prototype.slice.apply(args))
  if (this.options.filter) {
    createFilter(this, this.$header)
  }
}

BootstrapTable.prototype.initSearch = function (...args) {
  const that = this
  const filterValues = that.filterColumnsPartial

  // Filter for client
  if (that.options.sidePagination === 'client') {
    this.data = this.data.filter((row, idx) => {
      for (const field in filterValues) {
        if (Object.prototype.hasOwnProperty(field, filterValues)) {
          const column = that.columns[that.fieldsColumnsIndex[field]]
          const filterValue = filterValues[field].toLowerCase()
          let rowValue = row[field]

          rowValue = $.fn.bootstrapTable.utils.calculateObjectValue(
            that.header,
            that.header.formatters[$.inArray(field, that.header.fields)], [rowValue, row, idx], rowValue)

          if (column.filterStrictSearch) {
            if (!($.inArray(field, that.header.fields) !== -1 &&
              (typeof rowValue === 'string' || typeof rowValue === 'number') &&
              rowValue.toString().toLowerCase() === filterValue.toString().toLowerCase())) {
              return false
            }
          } else {
            if (!($.inArray(field, that.header.fields) !== -1 &&
              (typeof rowValue === 'string' || typeof rowValue === 'number') &&
              (`${rowValue}`).toLowerCase().includes(filterValue))) {
              return false
            }
          }
        }
      }

      return true
    })
  }

  _initSearch.apply(this, Array.prototype.slice.apply(args))
}

BootstrapTable.prototype.onColumnSearch = function (event, field, value) {
  if ($.isEmptyObject(this.filterColumnsPartial)) {
    this.filterColumnsPartial = {}
  }

  if (value) {
    this.filterColumnsPartial[field] = value
  } else {
    delete this.filterColumnsPartial[field]
  }

  this.options.pageNumber = 1
  this.onSearch(event)
  this.trigger('column-search', field, value)
}

BootstrapTable.prototype.setSelect2Data = function (field, data) {
  const that = this
  const $header = getCurrentHeader(that)
  const $selectEle = $header.find(`select[data-filter-field="${field}"]`)
  $selectEle.empty()
  $selectEle.select2({
    data,
    placeholder: '',
    allowClear: true,
    dropdownParent: that.$el.closest('.bootstrap-table')
  })

  $.each(this.columns, (idx, column) => {
    if (column.field === field) {
      column.filter.data = data
      return false
    }
  })
}

BootstrapTable.prototype.setFilterValues = function (values) {
  this.filterColumnsPartial = values
}

$.fn.bootstrapTable.methods.push('setSelect2Data')
$.fn.bootstrapTable.methods.push('setFilterValues')
