/**
 * @author: Dennis Hernández
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  keyEvents: false
})

$.BootstrapTable = class extends $.BootstrapTable {

  init (...args) {
    super.init(...args)

    if (this.options.keyEvents) {
      this.initKeyEvents()
    }
  }

  initKeyEvents () {
    $(document).off('keydown').on('keydown', e => {
      const $search = Utils.getSearchInput(this)
      const $refresh = this.$toolbar.find('button[name="refresh"]')
      const $toggle = this.$toolbar.find('button[name="toggle"]')
      const $paginationSwitch = this.$toolbar.find('button[name="paginationSwitch"]')

      if (document.activeElement === $search.get(0) || !$.contains(document.activeElement, this.$toolbar.get(0))) {
        return true
      }

      switch (e.keyCode) {
        case 83: // s
          if (!this.options.search) {
            return
          }
          $search.focus()
          return false
        case 82: // r
          if (!this.options.showRefresh) {
            return
          }
          $refresh.click()
          return false
        case 84: // t
          if (!this.options.showToggle) {
            return
          }
          $toggle.click()
          return false
        case 80: // p
          if (!this.options.showPaginationSwitch) {
            return
          }
          $paginationSwitch.click()
          return false
        case 37: // left
          if (!this.options.pagination) {
            return
          }
          this.prevPage()
          return false
        case 39: // right
          if (!this.options.pagination) {
            return
          }
          this.nextPage()
          return
        default:
          break
      }
    })
  }
}
