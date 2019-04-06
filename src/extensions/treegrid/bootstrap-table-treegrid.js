/**
 * @author: YL
 * @version: v1.0.0
 */

$.extend($.fn.bootstrapTable.defaults, {
  treeShowField: null,
  idField: 'id',
  parentIdField: 'pid',
  rootParentId: null,
  onGetNodes (row, data) {
    const that = this
    const nodes = []
    $.each(data, (i, item) => {
      if (row[that.options.idField] === item[that.options.parentIdField]) {
        nodes.push(item)
      }
    })
    return nodes
  },
  onCheckRoot (row, data) {
    const that = this
    return that.options.rootParentId === row[that.options.parentIdField] ||
              !row[that.options.parentIdField]
  }
})

const BootstrapTable = $.fn.bootstrapTable.Constructor
const _init = BootstrapTable.prototype.init
const _initRow = BootstrapTable.prototype.initRow
const _initHeader = BootstrapTable.prototype.initHeader
let _rowStyle = null

BootstrapTable.prototype.init = function (...args) {
  _rowStyle = this.options.rowStyle
  _init.apply(this, Array.prototype.slice.apply(args))
}

// td
BootstrapTable.prototype.initHeader = function (...args) {
  const that = this
  _initHeader.apply(that, Array.prototype.slice.apply(args))
  const treeShowField = that.options.treeShowField
  if (treeShowField) {
    $.each(this.header.fields, (i, field) => {
      if (treeShowField === field) {
        that.treeEnable = true
        return false
      }
    })
  }
}

const initTr = function (item, idx, data, parentDom) {
  const that = this
  const nodes = that.options.onGetNodes.apply(that, [item, data])
  item._nodes = nodes
  parentDom.append(_initRow.apply(that, [item, idx, data, parentDom]))

  // init sub node
  const len = nodes.length - 1
  for (let i = 0; i <= len; i++) {
    const node = nodes[i]
    const defaultItem = $.extend(true, {}, item)
    node._level = defaultItem._level + 1
    node._parent = defaultItem
    if (i === len)
      node._last = 1
    // jquery.treegrid.js
    that.options.rowStyle = function (item, idx) {
      const res = _rowStyle.apply(that, Array.prototype.slice.apply(arguments))
      const id = item[that.options.idField] ? item[that.options.idField] : 0
      const pid = item[that.options.parentIdField] ? item[that.options.parentIdField] : 0
      res.classes = [
        res.classes || '',
        `treegrid-${id}`,
        `treegrid-parent-${pid}`
      ].join(' ')
      return res
    }
    initTr.apply(that, [node, $.inArray(node, data), data, parentDom])
  }
}

// tr
BootstrapTable.prototype.initRow = function (item, idx, data, parentDom) {
  const that = this
  if (that.treeEnable) {
    // init root node
    if (that.options.onCheckRoot.apply(that, [item, data])) {
      if (item._level === undefined) {
        item._level = 0
      }
      // jquery.treegrid.js
      that.options.rowStyle = function (item, idx) {
        const res = _rowStyle.apply(that, Array.prototype.slice.apply(arguments))
        const x = item[that.options.idField] ? item[that.options.idField] : 0
        res.classes = [
          res.classes || '',
          `treegrid-${x}`
        ].join(' ')
        return res
      }
      initTr.apply(that, [item, idx, data, parentDom])
      return true
    }
    return false
  }
  return _initRow.apply(that, Array.prototype.slice.apply(arguments))
}
