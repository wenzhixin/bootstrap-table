/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v2.0.0
 */

const isInit = that => that.$el.data('resizableColumns') !== undefined

const initResizable = that => {
  if (that.options.resizable && !that.options.cardView && !isInit(that)) {
    that.$el.resizableColumns()
  }
}

const destroy = that => {
  if (isInit(that)) {
    that.$el.data('resizableColumns').destroy()
  }
}

const reInitResizable = that => {
  destroy(that)
  initResizable(that)
}

$.extend($.fn.bootstrapTable.defaults, {
  resizable: false
})

const BootstrapTable = $.fn.bootstrapTable.Constructor
const _initBody = BootstrapTable.prototype.initBody
const _toggleView = BootstrapTable.prototype.toggleView
const _resetView = BootstrapTable.prototype.resetView

BootstrapTable.prototype.initBody = function (...args) {
  const that = this
  _initBody.apply(this, Array.prototype.slice.apply(args))

  that.$el
    .off('column-switch.bs.table, page-change.bs.table')
    .on('column-switch.bs.table, page-change.bs.table', () => {
      reInitResizable(that)
    })
}

BootstrapTable.prototype.toggleView = function (...args) {
  _toggleView.apply(this, Array.prototype.slice.apply(args))

  if (this.options.resizable && this.options.cardView) {
    // Destroy the plugin
    destroy(this)
  }
}

BootstrapTable.prototype.resetView = function (...args) {
  const that = this

  _resetView.apply(this, Array.prototype.slice.apply(args))

  if (this.options.resizable) {
    // because in fitHeader function, we use setTimeout(func, 100);
    setTimeout(() => {
      initResizable(that)
    }, 100)
  }
}
