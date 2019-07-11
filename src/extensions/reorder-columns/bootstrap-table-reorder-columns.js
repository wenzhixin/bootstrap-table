/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.1.0
 */

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
          //       But that method's new, and collisions should be
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

const BootstrapTable = $.fn.bootstrapTable.Constructor
const _initHeader = BootstrapTable.prototype.initHeader
const _toggleColumn = BootstrapTable.prototype._toggleColumn
const _toggleView = BootstrapTable.prototype.toggleView
const _resetView = BootstrapTable.prototype.resetView

BootstrapTable.prototype.initHeader = function (...args) {
  _initHeader.apply(this, Array.prototype.slice.apply(args))

  if (!this.options.reorderableColumns) {
    return
  }

  this.makeRowsReorderable()
}

BootstrapTable.prototype._toggleColumn = function (...args) {
  _toggleColumn.apply(this, Array.prototype.slice.apply(args))

  if (!this.options.reorderableColumns) {
    return
  }

  this.makeRowsReorderable()
}

BootstrapTable.prototype.toggleView = function (...args) {
  _toggleView.apply(this, Array.prototype.slice.apply(args))

  if (!this.options.reorderableColumns) {
    return
  }

  if (this.options.cardView) {
    return
  }

  this.makeRowsReorderable()
}

BootstrapTable.prototype.resetView = function (...args) {
  _resetView.apply(this, Array.prototype.slice.apply(args))

  if (!this.options.reorderableColumns) {
    return
  }

  this.makeRowsReorderable()
}

BootstrapTable.prototype.makeRowsReorderable = function () {
  const that = this
  try {
    $(this.$el).dragtable('destroy')
  } catch (e) {
    //
  }
  $(this.$el).dragtable({
    maxMovingRows: that.options.maxMovingRows,
    dragaccept: that.options.dragaccept,
    clickDelay: 200,
    dragHandle: '.th-inner',
    beforeStop () {
      const ths = []
      const formatters = []
      const columns = []
      let columnsHidden = []
      let columnIndex = -1
      const optionsColumns = []
      that.$header.find('th').each(function (i) {
        ths.push($(this).data('field'))
        formatters.push($(this).data('formatter'))
      })

      // Exist columns not shown
      if (ths.length < that.columns.length) {
        columnsHidden = that.columns.filter(column => !column.visible)
        for (var i = 0; i < columnsHidden.length; i++) {
          ths.push(columnsHidden[i].field)
          formatters.push(columnsHidden[i].formatter)
        }
      }

      for (let i = 0; i < ths.length; i++ ) {
        columnIndex = that.fieldsColumnsIndex[ths[i]]
        if (columnIndex !== -1) {
          that.fieldsColumnsIndex[ths[i]] = i
          that.columns[columnIndex].fieldIndex = i
          columns.push(that.columns[columnIndex])
        }
      }

      that.columns = columns

      filterFn() // Support <IE9
      $.each(that.columns, (i, column) => {
        let found = false
        const field = column.field
        that.options.columns[0].filter(item => {
          if (!found && item['field'] === field) {
            optionsColumns.push(item)
            found = true
            return false
          }
          return true
        })
      })

      that.options.columns[0] = optionsColumns

      that.header.fields = ths
      that.header.formatters = formatters
      that.initHeader()
      that.initToolbar()
      that.initSearchText()
      that.initBody()
      that.resetView()
      that.trigger('reorder-column', ths)
    }
  })
}
