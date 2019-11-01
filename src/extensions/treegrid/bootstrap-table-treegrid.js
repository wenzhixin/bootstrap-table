/**
 * @author: YL
 * @update: zhixin wen <wenzhixin2010@gmail.com>
 */

$.extend($.fn.bootstrapTable.defaults, {
  treeEnable: false,
  treeShowField: null,
  idField: 'id',
  parentIdField: 'pid',
  rootParentId: null
})

$.BootstrapTable = class extends $.BootstrapTable {

  init (...args) {
    this._rowStyle = this.options.rowStyle
    super.init(...args)
  }

  initHeader (...args) {
    super.initHeader(...args)
    const treeShowField = this.options.treeShowField
    if (treeShowField) {
      for (const field of this.header.fields) {
        if (treeShowField === field) {
          this.treeEnable = true
          break
        }
      }
    }
  }

  initBody (...args) {
    if (this.treeEnable) {
      this.options.virtualScroll = false
    }
    super.initBody(...args)
  }

  initTr (item, idx, data, parentDom) {
    const nodes = data.filter(it => item[this.options.idField] === it[this.options.parentIdField])

    parentDom.append(super.initRow(item, idx, data, parentDom))

    // init sub node
    const len = nodes.length - 1
    for (let i = 0; i <= len; i++) {
      const node = nodes[i]
      const defaultItem = $.extend(true, {}, item)
      node._level = defaultItem._level + 1
      node._parent = defaultItem
      if (i === len) {
        node._last = 1
      }
      // jquery.treegrid.js
      this.options.rowStyle = (item, idx) => {
        const res = this._rowStyle(item, idx)
        const id = item[this.options.idField] ? item[this.options.idField] : 0
        const pid = item[this.options.parentIdField] ? item[this.options.parentIdField] : 0
        res.classes = [
          res.classes || '',
          `treegrid-${id}`,
          `treegrid-parent-${pid}`
        ].join(' ')
        return res
      }
      this.initTr(node, $.inArray(node, data), data, parentDom)
    }
  }

  initRow (item, idx, data, parentDom) {
    if (this.treeEnable) {
      if (
        this.options.rootParentId === item[this.options.parentIdField] ||
        !item[this.options.parentIdField]
      ) {
        if (item._level === undefined) {
          item._level = 0
        }
        // jquery.treegrid.js
        this.options.rowStyle = (item, idx) => {
          const res = this._rowStyle(item, idx)
          const x = item[this.options.idField] ? item[this.options.idField] : 0
          res.classes = [
            res.classes || '',
            `treegrid-${x}`
          ].join(' ')
          return res
        }
        this.initTr(item, idx, data, parentDom)
        return true
      }
      return false
    }
    return super.initRow(item, idx, data, parentDom)
  }
}
