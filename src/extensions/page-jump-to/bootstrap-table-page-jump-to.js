/**
 * @author Jay <jwang@dizsoft.com>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

Object.assign($.fn.bootstrapTable.defaults, {
  showJumpTo: false,
  showJumpToByPages: 0
})

Object.assign($.fn.bootstrapTable.locales, {
  formatJumpTo () {
    return 'GO'
  }
})
Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.BootstrapTable = class extends $.BootstrapTable {
  initPagination (...args) {
    super.initPagination(...args)

    if (this.options.showJumpTo && this.totalPages >= this.options.showJumpToByPages) {
      const $pageGroup = this.$pagination.find('> .pagination')
      let $jumpTo = $pageGroup.find('.page-jump-to')

      if (!$jumpTo.length) {
        $jumpTo = $(Utils.sprintf(this.constants.html.inputGroup,
          `<input type="number"
            class="${this.constants.classes.input}${Utils.sprintf(' %s%s', this.constants.classes.inputPrefix, this.options.iconSize)}"
            value="${this.options.pageNumber}"
            min="1"
            max="${this.totalPages}">`,
          `<button class="${this.constants.buttonsClass}"  type="button">
          ${this.options.formatJumpTo()}
          </button>`)
        ).addClass('page-jump-to').appendTo($pageGroup)

        const $input = $jumpTo.find('input')

        $jumpTo.find('button').click(() => {
          this.selectPage(+$input.val())
        })

        $input.keyup(e => {
          if ($input.val() === '') {
            return
          }
          if (e.keyCode === 13) {
            this.selectPage(+$input.val())
            return
          }
          if (+$input.val() < +$input.attr('min')) {
            $input.val($input.attr('min'))
          } else if (+$input.val() > +$input.attr('max')) {
            $input.val($input.attr('max'))
          }
        })

        $input.blur(() => {
          if ($input.val() === '') {
            $input.val(this.options.pageNumber)
          }
        })
      }
    }
  }
}
