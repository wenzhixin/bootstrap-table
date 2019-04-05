/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.1
 */

const isSearch = false

const rowAttr = (row, index) => ({
  id: `customId_${index}`
})

$.extend($.fn.bootstrapTable.defaults, {
  reorderableRows: false,
  onDragStyle: null,
  onDropStyle: null,
  onDragClass: 'reorder_rows_onDragClass',
  dragHandle: null,
  useRowAttrFunc: false,
  onReorderRowsDrag (table, row) {
    return false
  },
  onReorderRowsDrop (table, row) {
    return false
  },
  onReorderRow (newData) {
    return false
  }
})

$.extend($.fn.bootstrapTable.Constructor.EVENTS, {
  'reorder-row.bs.table': 'onReorderRow'
})

const BootstrapTable = $.fn.bootstrapTable.Constructor
const _init = BootstrapTable.prototype.init
const _initSearch = BootstrapTable.prototype.initSearch

BootstrapTable.prototype.init = function (...args) {

  if (!this.options.reorderableRows) {
    _init.apply(this, Array.prototype.slice.apply(args))
    return
  }

  const that = this
  if (this.options.useRowAttrFunc) {
    this.options.rowAttributes = rowAttr
  }

  const onPostBody = this.options.onPostBody
  this.options.onPostBody = () => {
    setTimeout(() => {
      that.makeRowsReorderable()
      onPostBody.apply()
    }, 1)
  }

  _init.apply(this, Array.prototype.slice.apply(args))
}

BootstrapTable.prototype.initSearch = function (...args) {
  _initSearch.apply(this, Array.prototype.slice.apply(args))

  if (!this.options.reorderableRows) {
    return
  }

  // Known issue after search if you reorder the rows the data is not display properly
  // isSearch = true;
}

BootstrapTable.prototype.makeRowsReorderable = function () {
  if (this.options.cardView) {
    return
  }

  const that = this
  this.$el.tableDnD({
    onDragStyle: that.options.onDragStyle,
    onDropStyle: that.options.onDropStyle,
    onDragClass: that.options.onDragClass,
    onDrop: that.onDrop,
    onDragStart: that.options.onReorderRowsDrag,
    dragHandle: that.options.dragHandle
  })
}

BootstrapTable.prototype.onDrop = (table, droppedRow) => {
  const tableBs = $(table)
  const tableBsData = tableBs.data('bootstrap.table')
  const tableBsOptions = tableBs.data('bootstrap.table').options
  let row = null
  const newData = []

  for (let i = 0; i < table.tBodies[0].rows.length; i++) {
    row = $(table.tBodies[0].rows[i])
    newData.push(tableBsOptions.data[row.data('index')])
    row.data('index', i).attr('data-index', i)
  }

  tableBsOptions.data = tableBsOptions.data.slice(0, tableBsData.pageFrom - 1)
    .concat(newData)
    .concat(tableBsOptions.data.slice(tableBsData.pageTo))

  // Call the user defined function
  tableBsOptions.onReorderRowsDrop.apply(table, [table, droppedRow])

  // Call the event reorder-row
  tableBsData.trigger('reorder-row', newData)
}
