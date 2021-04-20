/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const rowAttr = (row, index) => ({
  id: `customId_${index}`
})

$.extend($.fn.bootstrapTable.defaults, {
  reorderableRows: false,
  onDragStyle: null,
  onDropStyle: null,
  onDragClass: 'reorder_rows_onDragClass',
  dragHandle: '>tbody>tr>td',
  useRowAttrFunc: false,
  // eslint-disable-next-line no-unused-vars
  onReorderRowsDrag (row) {
    return false
  },
  // eslint-disable-next-line no-unused-vars
  onReorderRowsDrop (row) {
    return false
  },
  // eslint-disable-next-line no-unused-vars
  onReorderRow (newData) {
    return false
  }
})

$.extend($.fn.bootstrapTable.Constructor.EVENTS, {
  'reorder-row.bs.table': 'onReorderRow'
})

$.BootstrapTable = class extends $.BootstrapTable {
  init (...args) {
    if (!this.options.reorderableRows) {
      super.init(...args)
      return
    }

    if (this.options.useRowAttrFunc) {
      this.options.rowAttributes = rowAttr
    }

    const onPostBody = this.options.onPostBody

    this.options.onPostBody = () => {
      setTimeout(() => {
        this.makeRowsReorderable()
        onPostBody.call(this.options, this.options.data)
      }, 1)
    }

    super.init(...args)
  }

  makeRowsReorderable () {
    this.$el.tableDnD({
      onDragStyle: this.options.onDragStyle,
      onDropStyle: this.options.onDropStyle,
      onDragClass: this.options.onDragClass,
      onDragStart: (table, droppedRow) => this.onDropStart(table, droppedRow),
      onDrop: (table, droppedRow) => this.onDrop(table, droppedRow),
      dragHandle: this.options.dragHandle
    })
  }

  onDropStart (table, draggingTd) {
    this.$draggingTd = $(draggingTd).css('cursor', 'move')
    this.draggingIndex = $(this.$draggingTd.parent()).data('index')
    // Call the user defined function
    this.options.onReorderRowsDrag(this.data[this.draggingIndex])
  }

  onDrop (table) {
    this.$draggingTd.css('cursor', '')
    const newData = []

    for (let i = 0; i < table.tBodies[0].rows.length; i++) {
      const $tr = $(table.tBodies[0].rows[i])

      newData.push(this.data[$tr.data('index')])
      $tr.data('index', i)
    }

    const draggingRow = this.data[this.draggingIndex]
    const droppedIndex = newData.indexOf(this.data[this.draggingIndex])
    const droppedRow = this.data[droppedIndex]
    const index = this.options.data.indexOf(this.data[droppedIndex])

    this.options.data.splice(this.options.data.indexOf(draggingRow), 1)
    this.options.data.splice(index, 0, draggingRow)

    this.initSearch()

    // Call the user defined function
    this.options.onReorderRowsDrop(droppedRow)

    // Call the event reorder-row
    this.trigger('reorder-row', newData, draggingRow, droppedRow)
  }

  initSearch () {
    this.ignoreInitSort = true
    super.initSearch()
  }

  initSort () {
    if (this.ignoreInitSort) {
      this.ignoreInitSort = false
      return
    }

    super.initSort()
  }
}
