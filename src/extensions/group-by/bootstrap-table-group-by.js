/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.1.0
 */

let originalRowAttr
const dataTTId = 'data-tt-id'
const dataTTParentId = 'data-tt-parent-id'
const obj = {}
let parentId

const getParentRowId = (that, id) => {
  const parentRows = that.$body.find('tr').not('[' + 'data-tt-parent-id]')

  for (let i = 0; i < parentRows.length; i++) {
    if (i === id) {
      return $(parentRows[i]).attr('data-tt-id')
    }
  }

  return undefined
}

const sumData = (that, data) => {
  const sumRow = {}
  $.each(data, (i, row) => {
    if (!row.IsParent) {
      for (const prop in row) {
        if (!isNaN(parseFloat(row[prop]))) {
          if (that.columns[that.fieldsColumnsIndex[prop]].groupBySumGroup) {
            if (sumRow[prop] === undefined) {
              sumRow[prop] = 0
            }
            sumRow[prop] += +row[prop]
          }
        }
      }
    }
  })
  return sumRow
}

const rowAttr = (row, index) => {
  // Call the User Defined Function
  originalRowAttr.apply([row, index])

  obj[dataTTId.toString()] = index

  if (!row.IsParent) {
    obj[dataTTParentId.toString()] = parentId === undefined ? index : parentId
  } else {
    parentId = index
    delete obj[dataTTParentId.toString()]
  }

  return obj
}

const setObjectKeys = () => {
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  Object.keys = o => {
    if (o !== Object(o)) {
      throw new TypeError('Object.keys called on a non-object')
    }
    const k = []
    let p
    for (p in o) {
      if (Object.prototype.hasOwnProperty.call(o, p)) {
        k.push(p)
      }
    }
    return k
  }
}

const getDataArrayFromItem = (that, item) => {
  const itemDataArray = []
  for (let i = 0; i < that.options.groupByField.length; i++) {
    itemDataArray.push(item[that.options.groupByField[i]])
  }

  return itemDataArray
}

const getNewRow = (that, result, index) => {
  const newRow = {}
  for (let i = 0; i < that.options.groupByField.length; i++) {
    newRow[that.options.groupByField[i].toString()] = result[index][0][that.options.groupByField[i]]
  }

  newRow.IsParent = true

  return newRow
}

const groupBy = (array, f) => {
  const groups = {}
  $.each(array, (i, o) => {
    const group = JSON.stringify(f(o))
    groups[group] = groups[group] || []
    groups[group].push(o)
  })
  return Object.keys(groups).map(group => groups[group])
}

const makeGrouped = (that, data) => {
  let newData = []
  let sumRow = {}

  const result = groupBy(data, item => getDataArrayFromItem(that, item))

  for (let i = 0; i < result.length; i++) {
    result[i].unshift(getNewRow(that, result, i))
    if (that.options.groupBySumGroup) {
      sumRow = sumData(that, result[i])
      if (!$.isEmptyObject(sumRow)) {
        result[i].push(sumRow)
      }
    }
  }

  newData = newData.concat(...result)

  if (!that.options.loaded && newData.length > 0) {
    that.options.loaded = true
    that.options.originalData = that.options.data
    that.options.data = newData
  }

  return newData
}

$.extend($.fn.bootstrapTable.defaults, {
  groupBy: false,
  groupByField: [],
  groupBySumGroup: false,
  groupByInitExpanded: undefined, // node, 'all'
  // internal variables
  loaded: false,
  originalData: undefined
})

$.fn.bootstrapTable.methods.push('collapseAll', 'expandAll', 'refreshGroupByField')

$.extend($.fn.bootstrapTable.COLUMN_DEFAULTS, {
  groupBySumGroup: false
})

const BootstrapTable = $.fn.bootstrapTable.Constructor
const _init = BootstrapTable.prototype.init
const _initData = BootstrapTable.prototype.initData

BootstrapTable.prototype.init = function (...args) {
  // Temporal validation
  if (!this.options.sortName) {
    if ((this.options.groupBy) && (this.options.groupByField.length > 0)) {
      const that = this

      // Compatibility: IE < 9 and old browsers
      if (!Object.keys) {
        $.fn.bootstrapTable.utils.objectKeys()
      }

      // Make sure that the internal variables are set correctly
      this.options.loaded = false
      this.options.originalData = undefined

      originalRowAttr = this.options.rowAttributes
      this.options.rowAttributes = rowAttr
      this.$el.off('post-body.bs.table').on('post-body.bs.table', () => {
        that.$el.treetable({
          expandable: true,
          onNodeExpand () {
            if (that.options.height) {
              that.resetHeader()
            }
          },
          onNodeCollapse () {
            if (that.options.height) {
              that.resetHeader()
            }
          }
        }, true)

        if (that.options.groupByInitExpanded !== undefined) {
          if (typeof that.options.groupByInitExpanded === 'number') {
            that.expandNode(that.options.groupByInitExpanded)
          } else if (that.options.groupByInitExpanded.toLowerCase() === 'all') {
            that.expandAll()
          }
        }
      })
    }
  }
  _init.apply(this, Array.prototype.slice.apply(args))
}

BootstrapTable.prototype.initData = function (data, type) {
  // Temporal validation
  if (!this.options.sortName) {
    if ((this.options.groupBy) && (this.options.groupByField.length > 0)) {

      this.options.groupByField = typeof this.options.groupByField === 'string' ?
        this.options.groupByField.replace('[', '').replace(']', '')
          .replace(/ /g, '').toLowerCase().split(',') : this.options.groupByField

      data = makeGrouped(this, data ? data : this.options.data)
    }
  }
  _initData.apply(this, [data, type])
}

BootstrapTable.prototype.expandAll = function () {
  this.$el.treetable('expandAll')
}

BootstrapTable.prototype.collapseAll = function () {
  this.$el.treetable('collapseAll')
}

BootstrapTable.prototype.expandNode = function (id) {
  id = getParentRowId(this, id)
  if (id !== undefined) {
    this.$el.treetable('expandNode', id)
  }
}

BootstrapTable.prototype.refreshGroupByField = function (groupByFields) {
  if (!$.fn.bootstrapTable.utils.compareObjects(this.options.groupByField, groupByFields)) {
    this.options.groupByField = groupByFields
    this.load(this.options.originalData)
  }
}
