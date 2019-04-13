/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

($ => {
  $.extend($.fn.bootstrapTable.defaults, {
    fixedColumns: false,
    fixedNumber: 1
  })

  $.BootstrapTable = class extends $.BootstrapTable {

    fitHeader (...args) {
      super.fitHeader(...args)

      if (!this.options.fixedColumns) {
        return
      }

      if (this.$el.is(':hidden')) {
        return
      }

      this.$container.find('.fixed-table-header-columns').remove()
      this.$fixedHeader = $('<div class="fixed-table-header-columns"></div>')
      this.$fixedHeader.append(this.$tableHeader.find('>table').clone(true))
      this.$tableHeader.after(this.$fixedHeader)

      const width = this.getFixedColumnsWidth()

      this.$fixedHeader.css({
        top: 0,
        width,
        height: this.$tableHeader.outerHeight(true)
      })

      this.initFixedColumnsBody()

      this.$fixedBody.css({
        top: this.$tableHeader.outerHeight(true),
        width,
        height: this.$tableBody.outerHeight(true) - 1
      })

      this.initFixedColumnsEvents()
    }

    initBody (...args) {
      super.initBody(...args)

      if (!this.options.fixedColumns) {
        return
      }

      if (this.options.showHeader && this.options.height) {
        return
      }

      this.initFixedColumnsBody()

      this.$fixedBody.css({
        top: 0,
        width: this.getFixedColumnsWidth(),
        height: this.$tableHeader.outerHeight(true) + this.$tableBody.outerHeight(true)
      })

      this.initFixedColumnsEvents()
    }

    initFixedColumnsBody () {
      this.$container.find('.fixed-table-body-columns').remove()
      this.$fixedBody = $('<div class="fixed-table-body-columns"></div>')
      this.$fixedBody.append(this.$tableBody.find('>table').clone(true))
      this.$tableBody.after(this.$fixedBody)
    }

    getFixedColumnsWidth () {
      const visibleFields = this.getVisibleFields()
      let width = 0

      for (let i = 0; i < this.options.fixedNumber; i++) {
        width += this.$header.find(`th[data-field="${visibleFields[i]}"]`).outerWidth(true)
      }

      return width + 1
    }

    initFixedColumnsEvents () {
      // events
      this.$tableBody.off('scroll.fixed-columns').on('scroll.fixed-columns', e => {
        this.$fixedBody.find('table').css('top', -$(e.currentTarget).scrollTop())
      })

      this.$body.find('> tr[data-index]').off('hover').hover(e => {
        const index = $(e.currentTarget).data('index')
        this.$fixedBody.find(`tr[data-index="${index}"]`)
          .css('background-color', $(e.currentTarget).css('background-color'))
      }, e => {
        const index = $(e.currentTarget).data('index')
        const $tr = this.$fixedBody.find(`tr[data-index="${index}"]`)
        $tr.attr('style', $tr.attr('style').replace(/background-color:.*;/, ''))
      })

      this.$fixedBody.find('tr[data-index]').off('hover').hover(e => {
        const index = $(e.currentTarget).data('index')
        this.$body.find(`tr[data-index="${index}"]`)
          .css('background-color', $(e.currentTarget).css('background-color'))
      }, e => {
        const index = $(e.currentTarget).data('index')
        const $tr = this.$body.find(`> tr[data-index="${index}"]`)
        $tr.attr('style', $tr.attr('style').replace(/background-color:.*;/, ''))
      })
    }
  }
})(jQuery)
