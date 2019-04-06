/**
 * @author Jay <jwang@dizsoft.com>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  showJumpTo: false
})

$.extend($.fn.bootstrapTable.locales, {
  formatJumpTo () {
    return 'GO'
  }
})
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.BootstrapTable = class extends $.BootstrapTable {
  initPagination (...args) {
    super.initPagination(...args)

    if (this.options.showJumpTo) {
      const that = this
      const $pageGroup = this.$pagination.find('> .pagination')
      let $jumpTo = $pageGroup.find('.page-jump-to')

      if (!$jumpTo.length) {
        $jumpTo = $(`
          <div class="page-jump-to ${this.constants.classes.inputGroup}">
          <input type="number" class="${this.constants.classes.input}${Utils.sprintf(' input-%s', this.options.iconSize)}" value="${this.options.pageNumber}">
          <button class="${this.constants.buttonsClass}"  type="button">
          ${this.options.formatJumpTo()}
          </button>
          </div>
        `).appendTo($pageGroup)

        $jumpTo.find('button').click(() => {
          this.selectPage(+$jumpTo.find('input').val())
        })
      }
    }
  }
}
