/**
 * @author vincent loh <vincent.ml@gmail.com>
 * @update J Manuel Corona <jmcg92@gmail.com>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  stickyHeader: false,
  stickyHeaderOffsetY: 0,
  stickyHeaderOffsetLeft: 0,
  stickyHeaderOffsetRight: 0
})

const hiddenClass = {
  bootstrap3: 'hidden'
}[$.fn.bootstrapTable.theme] || 'd-none'

$.BootstrapTable = class extends $.BootstrapTable {
  initHeader (...args) {
    super.initHeader(...args)

    if (!this.options.stickyHeader) {
      return
    }

    this.$el.before('<div class="sticky-header-container"></div>')
    this.$el.before('<div class="sticky_anchor_begin"></div>')
    this.$el.after('<div class="sticky_anchor_end"></div>')
    this.$header.addClass('sticky-header')

    // clone header just once, to be used as sticky header
    // deep clone header, using source header affects tbody>td width
    this.$stickyContainer = this.$tableBody.find('.sticky-header-container')
    this.$stickyBegin = this.$tableBody.find('.sticky_anchor_begin')
    this.$stickyEnd = this.$tableBody.find('.sticky_anchor_end')
    this.$stickyHeader = this.$header.clone(true, true)

    // render sticky on window scroll or resize
    $(window).on('resize.sticky-header-table', () => this.renderStickyHeader())
    $(window).on('scroll.sticky-header-table', () => this.renderStickyHeader())
    this.$tableBody.off('scroll').on('scroll', () => this.matchPositionX())
  }

  renderStickyHeader () {
    const top = $(window).scrollTop()
    // top anchor scroll position, minus header height
    const start = this.$stickyBegin.offset().top - this.options.stickyHeaderOffsetY
    // bottom anchor scroll position, minus header height, minus sticky height
    const end = this.$stickyEnd.offset().top - this.options.stickyHeaderOffsetY - this.$header.height()
    // show sticky when top anchor touches header, and when bottom anchor not exceeded
    if (top > start && top <= end) {
      // ensure clone and source column widths are the same
      this.$stickyHeader.find('tr:eq(0)').find('th').each((index, el) => {
        $(el).css('min-width', this.$header.find('tr:eq(0)').find('th').eq(index).css('width'))
      })
      // match bootstrap table style
      this.$stickyContainer.removeClass(hiddenClass).addClass('fix-sticky fixed-table-container')
      // stick it in position
      this.$stickyContainer.css('top', `${this.options.stickyHeaderOffsetY}`)
      this.$stickyContainer.css('left', `${this.options.stickyHeaderOffsetLeft}`)
      this.$stickyContainer.css('right', `${this.options.stickyHeaderOffsetRight}`)
      // create scrollable container for header
      this.$stickyTable = $('<table/>')
      this.$stickyTable.addClass(this.options.classes)
      // append cloned header to dom
      this.$stickyContainer.html(this.$stickyTable.append(this.$stickyHeader))
      // match clone and source header positions when left-right scroll
      this.matchPositionX()
    } else {
      this.$stickyContainer.removeClass('fix-sticky').addClass(hiddenClass)
    }
  }

  matchPositionX () {
    this.$stickyContainer.scrollLeft(this.$tableBody.scrollLeft())
  }
}
