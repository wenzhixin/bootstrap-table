/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @update: https://github.com/wenzhixin
 * @version: v1.2.0
 */

$.akottr.dragtable.prototype._restoreState = function (persistObj) {
  for (const [field, value] of Object.entries(persistObj)) {
    const $th = this.originalTable.el.find(`th[data-field="${field}"]`)
    this.originalTable.startIndex = $th.prevAll().length + 1
    this.originalTable.endIndex = parseInt(value, 10) + 1
    this._bubbleCols()
  }
}

// From MDN site, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const filterFn = () => {
  if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun/* , thisArg*/) {
      if (this === undefined || this === null) {
        throw new TypeError()
      }

      const t = Object(this)
      const len = t.length >>> 0
      if (typeof fun !== 'function') {
        throw new TypeError()
      }

      const res = []
      const thisArg = arguments.length >= 2 ? arguments[1] : undefined
      for (let i = 0; i < len; i++) {
        if (i in t) {
          const val = t[i]

          // NOTE: Technically this should Object.defineProperty at
          //       the next index, as push can be affected by
          //       properties on Object.prototype and Array.prototype.
          //       But this method's new, and collisions should be
          //       rare, so use the more-compatible alternative.
          if (fun.call(thisArg, val, i, t)) {
            res.push(val)
          }
        }
      }

      return res
    }
  }
}

$.extend($.fn.bootstrapTable.defaults, {
  reorderableColumns: false,
  maxMovingRows: 10,
  onReorderColumn (headerFields) {
    return false
  },
  dragaccept: null
})

$.extend($.fn.bootstrapTable.Constructor.EVENTS, {
  'reorder-column.bs.table': 'onReorderColumn'
})

$.fn.bootstrapTable.methods.push('orderColumns')

$.BootstrapTable = class extends $.BootstrapTable {
  initHeader (...args) {
    super.initHeader(...args)

    if (!this.options.reorderableColumns) {
      return
    }

    this.makeRowsReorderable()
  }

  _toggleColumn (...args) {
    super._toggleColumn(...args)

    if (!this.options.reorderableColumns) {
      return
    }

    this.makeRowsReorderable()
  }

  toggleView (...args) {
    super.toggleView(...args)

    if (!this.options.reorderableColumns) {
      return
    }

    if (this.options.cardView) {
      return
    }

    this.makeRowsReorderable()
  }

  resetView (...args) {
    super.resetView(...args)

    if (!this.options.reorderableColumns) {
      return
    }

    this.makeRowsReorderable()
  }

  makeRowsReorderable (order = null) {
    try {
      $(this.$el).dragtable('destroy')
    } catch (e) {
      // do nothing
    }
    $(this.$el).dragtable({
      maxMovingRows: this.options.maxMovingRows,
      dragaccept: this.options.dragaccept,
      clickDelay: 200,
      dragHandle: '.th-inner',
      restoreState: order ? order : this.columnsSortOrder,
      beforeStop: (table) => {
        const sortOrder = {}
        table.el.find('th').each((i, el) => {
          sortOrder[$(el).data('field')] = i
        })

        this.columnsSortOrder = sortOrder
        if (this.options.cookie) {
          this.persistReorderColumnsState(this)
        }

        const ths = []
        const formatters = []
        const columns = []
        let columnsHidden = []
        let columnIndex = -1
        const optionsColumns = []
        this.$header.find('th:not(.detail)').each(function (i) {
          ths.push($(this).data('field'))
          formatters.push($(this).data('formatter'))
        })

        // Exist columns not shown
        if (ths.length < this.columns.length) {
          columnsHidden = this.columns.filter(column => !column.visible)
          for (let i = 0; i < columnsHidden.length; i++) {
            ths.push(columnsHidden[i].field)
            formatters.push(columnsHidden[i].formatter)
          }
        }

        for (let i = 0; i < ths.length; i++) {
          columnIndex = this.fieldsColumnsIndex[ths[i]]
          if (columnIndex !== -1) {
            this.fieldsColumnsIndex[ths[i]] = i
            this.columns[columnIndex].fieldIndex = i
            columns.push(this.columns[columnIndex])
          }
        }

        this.columns = columns

        filterFn() // Support <IE9
        $.each(this.columns, (i, column) => {
          let found = false
          const field = column.field
          this.options.columns[0].filter(item => {
            if (!found && item['field'] === field) {
              optionsColumns.push(item)
              found = true
              return false
            }
            return true
          })
        })

        this.options.columns[0] = optionsColumns

        this.header.fields = ths
        this.header.formatters = formatters
        this.initHeader()
        this.initToolbar()
        this.initSearchText()
        this.initBody()
        this.resetView()
        this.trigger('reorder-column', ths)
      }
    })
  }

  orderColumns (order) {
    this.columnsSortOrder = order
    this.makeRowsReorderable()
  }
}
