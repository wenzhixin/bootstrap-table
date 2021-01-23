/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v2.0.0
 */

const isInit = that => that.$el.data('resizableColumns') !== undefined

const initResizable = that => {
  if (
    that.options.resizable &&
    !that.options.cardView &&
    !isInit(that) &&
    that.$el.is(':visible')
  ) {
    that.$el.resizableColumns({
      store: window.store
    })
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

$.BootstrapTable = class extends $.BootstrapTable {

  initBody (...args) {
    super.initBody(...args)

    this.$el.off('column-switch.bs.table page-change.bs.table')
      .on('column-switch.bs.table page-change.bs.table', () => {
        reInitResizable(this)
      })
  }

  toggleView (...args) {
    super.toggleView(...args)

    if (this.options.resizable && this.options.cardView) {
      // Destroy the plugin
      destroy(this)
    }
  }

  resetView (...args) {
    super.resetView(...args)

    if (this.options.resizable) {
      // because in fitHeader function, we use setTimeout(func, 100);
      setTimeout(() => {
        initResizable(this)
      }, 100)
    }
  }
}
