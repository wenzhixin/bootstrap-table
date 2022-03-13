/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

// Reasonable defaults
const PIXEL_STEP = 10
const LINE_HEIGHT = 40
const PAGE_HEIGHT = 800

function normalizeWheel (event) {
  let sX = 0 // spinX
  let sY = 0 // spinY
  let pX = 0 // pixelX
  let pY = 0 // pixelY

  // Legacy
  if ('detail' in event) { sY = event.detail }
  if ('wheelDelta' in event) { sY = -event.wheelDelta / 120 }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120 }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120 }

  // side scrolling on FF with DOMMouseScroll
  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
    sX = sY
    sY = 0
  }

  pX = sX * PIXEL_STEP
  pY = sY * PIXEL_STEP

  if ('deltaY' in event) { pY = event.deltaY }
  if ('deltaX' in event) { pX = event.deltaX }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode === 1) { // delta in LINE units
      pX *= LINE_HEIGHT
      pY *= LINE_HEIGHT
    } else { // delta in PAGE units
      pX *= PAGE_HEIGHT
      pY *= PAGE_HEIGHT
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1 }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1 }

  return {
    spinX: sX,
    spinY: sY,
    pixelX: pX,
    pixelY: pY
  }
}

$.extend($.fn.bootstrapTable.defaults, {
  fixedColumns: false,
  fixedNumber: 0,
  fixedRightNumber: 0
})

$.BootstrapTable = class extends $.BootstrapTable {

  fixedColumnsSupported () {
    return this.options.fixedColumns &&
      !this.options.detailView &&
      !this.options.cardView
  }

  initContainer () {
    super.initContainer()

    if (!this.fixedColumnsSupported()) {
      return
    }

    if (this.options.fixedNumber) {
      this.$tableContainer.append('<div class="fixed-columns"></div>')
      this.$fixedColumns = this.$tableContainer.find('.fixed-columns')
    }

    if (this.options.fixedRightNumber) {
      this.$tableContainer.append('<div class="fixed-columns-right"></div>')
      this.$fixedColumnsRight = this.$tableContainer.find('.fixed-columns-right')
    }
  }

  initBody (...args) {
    super.initBody(...args)

    if (this.$fixedColumns && this.$fixedColumns.length) {
      this.$fixedColumns.toggle(this.fixedColumnsSupported())
    }
    if (this.$fixedColumnsRight && this.$fixedColumnsRight.length) {
      this.$fixedColumnsRight.toggle(this.fixedColumnsSupported())
    }

    if (!this.fixedColumnsSupported()) {
      return
    }

    if (this.options.showHeader && this.options.height) {
      return
    }

    this.initFixedColumnsBody()
    this.initFixedColumnsEvents()
  }

  trigger (...args) {
    super.trigger(...args)

    if (!this.fixedColumnsSupported()) {
      return
    }

    if (args[0] === 'post-header') {
      this.initFixedColumnsHeader()
    } else if (args[0] === 'scroll-body') {
      if (this.needFixedColumns && this.options.fixedNumber) {
        this.$fixedBody.scrollTop(this.$tableBody.scrollTop())
      }

      if (this.needFixedColumns && this.options.fixedRightNumber) {
        this.$fixedBodyRight.scrollTop(this.$tableBody.scrollTop())
      }
    }
  }

  updateSelected () {
    super.updateSelected()

    if (!this.fixedColumnsSupported()) {
      return
    }

    this.$tableBody.find('tr').each((i, el) => {
      const $el = $(el)
      const index = $el.data('index')
      const classes = $el.attr('class')

      const inputSelector = `[name="${this.options.selectItemName}"]`
      const $input = $el.find(inputSelector)

      if (typeof index === 'undefined') {
        return
      }

      const updateFixedBody = ($fixedHeader, $fixedBody) => {
        const $tr = $fixedBody.find(`tr[data-index="${index}"]`)

        $tr.attr('class', classes)

        if ($input.length) {
          $tr.find(inputSelector).prop('checked', $input.prop('checked'))
        }

        if (this.$selectAll.length) {
          $fixedHeader.add($fixedBody)
            .find('[name="btSelectAll"]')
            .prop('checked', this.$selectAll.prop('checked'))
        }
      }

      if (this.$fixedBody && this.options.fixedNumber) {
        updateFixedBody(this.$fixedHeader, this.$fixedBody)
      }

      if (this.$fixedBodyRight && this.options.fixedRightNumber) {
        updateFixedBody(this.$fixedHeaderRight, this.$fixedBodyRight)
      }
    })
  }

  hideLoading () {
    super.hideLoading()

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedColumns.find('.fixed-table-loading').hide()
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      this.$fixedColumnsRight.find('.fixed-table-loading').hide()
    }
  }

  initFixedColumnsHeader () {
    if (this.options.height) {
      this.needFixedColumns = this.$tableHeader.outerWidth(true) < this.$tableHeader.find('table').outerWidth(true)
    } else {
      this.needFixedColumns = this.$tableBody.outerWidth(true) < this.$tableBody.find('table').outerWidth(true)
    }

    const initFixedHeader = ($fixedColumns, isRight) => {
      $fixedColumns.find('.fixed-table-header').remove()
      $fixedColumns.append(this.$tableHeader.clone(true))

      $fixedColumns.css({
        width: this.getFixedColumnsWidth(isRight)
      })
      return $fixedColumns.find('.fixed-table-header')
    }

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedHeader = initFixedHeader(this.$fixedColumns)
      this.$fixedHeader.css('margin-right', '')
    } else if (this.$fixedColumns) {
      this.$fixedColumns.html('').css('width', '')
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      this.$fixedHeaderRight = initFixedHeader(this.$fixedColumnsRight, true)
      this.$fixedHeaderRight.scrollLeft(this.$fixedHeaderRight.find('table').width())
    } else if (this.$fixedColumnsRight) {
      this.$fixedColumnsRight.html('').css('width', '')
    }

    this.initFixedColumnsBody()
    this.initFixedColumnsEvents()
  }

  initFixedColumnsBody () {
    const initFixedBody = ($fixedColumns, $fixedHeader) => {
      $fixedColumns.find('.fixed-table-body').remove()
      $fixedColumns.append(this.$tableBody.clone(true))
      $fixedColumns.find('.fixed-table-body table').removeAttr('id')

      const $fixedBody = $fixedColumns.find('.fixed-table-body')

      const tableBody = this.$tableBody.get(0)
      const scrollHeight = tableBody.scrollWidth > tableBody.clientWidth ?
        Utils.getScrollBarWidth() : 0
      const height = this.$tableContainer.outerHeight(true) - scrollHeight - 1

      $fixedColumns.css({
        height
      })

      $fixedBody.css({
        height: height - $fixedHeader.height()
      })

      return $fixedBody
    }

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedBody = initFixedBody(this.$fixedColumns, this.$fixedHeader)
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      this.$fixedBodyRight = initFixedBody(this.$fixedColumnsRight, this.$fixedHeaderRight)
      this.$fixedBodyRight.scrollLeft(this.$fixedBodyRight.find('table').width())
      this.$fixedBodyRight.css('overflow-y', this.options.height ? 'auto' : 'hidden')
    }
  }

  getFixedColumnsWidth (isRight) {
    let visibleFields = this.getVisibleFields()
    let width = 0
    let fixedNumber = this.options.fixedNumber
    let marginRight = 0

    if (isRight) {
      visibleFields = visibleFields.reverse()
      fixedNumber = this.options.fixedRightNumber
      marginRight = parseInt(this.$tableHeader.css('margin-right'), 10)
    }

    for (let i = 0; i < fixedNumber; i++) {
      width += this.$header.find(`th[data-field="${visibleFields[i]}"]`).outerWidth(true)
    }

    return width + marginRight + 1
  }

  initFixedColumnsEvents () {
    const toggleHover = (e, toggle) => {
      const tr = `tr[data-index="${$(e.currentTarget).data('index')}"]`
      let $trs = this.$tableBody.find(tr)

      if (this.$fixedBody) {
        $trs = $trs.add(this.$fixedBody.find(tr))
      }
      if (this.$fixedBodyRight) {
        $trs = $trs.add(this.$fixedBodyRight.find(tr))
      }

      $trs.css('background-color', toggle ? $(e.currentTarget).css('background-color') : '')
    }

    this.$tableBody.find('tr').hover(e => {
      toggleHover(e, true)
    }, e => {
      toggleHover(e, false)
    })

    const isFirefox = typeof navigator !== 'undefined' &&
      navigator.userAgent.toLowerCase().indexOf('firefox') > -1
    const mousewheel = isFirefox ? 'DOMMouseScroll' : 'mousewheel'
    const updateScroll = (e, fixedBody) => {
      const normalized = normalizeWheel(e)
      const deltaY = Math.ceil(normalized.pixelY)
      const top = this.$tableBody.scrollTop() + deltaY

      if (
        deltaY < 0 && top > 0 ||
        deltaY > 0 && top < fixedBody.scrollHeight - fixedBody.clientHeight
      ) {
        e.preventDefault()
      }

      this.$tableBody.scrollTop(top)
      if (this.$fixedBody) {
        this.$fixedBody.scrollTop(top)
      }
      if (this.$fixedBodyRight) {
        this.$fixedBodyRight.scrollTop(top)
      }
    }

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedBody.find('tr').hover(e => {
        toggleHover(e, true)
      }, e => {
        toggleHover(e, false)
      })

      this.$fixedBody[0].addEventListener(mousewheel, e => {
        updateScroll(e, this.$fixedBody[0])
      })
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      this.$fixedBodyRight.find('tr').hover(e => {
        toggleHover(e, true)
      }, e => {
        toggleHover(e, false)
      })

      this.$fixedBodyRight.off('scroll').on('scroll', () => {
        const top = this.$fixedBodyRight.scrollTop()

        this.$tableBody.scrollTop(top)
        if (this.$fixedBody) {
          this.$fixedBody.scrollTop(top)
        }
      })
    }

    if (this.options.filterControl) {
      $(this.$fixedColumns).off('keyup change').on('keyup change', e => {
        const $target = $(e.target)
        const value = $target.val()
        const field = $target.parents('th').data('field')
        const $coreTh = this.$header.find(`th[data-field="${field}"]`)

        if ($target.is('input')) {
          $coreTh.find('input').val(value)
        } else if ($target.is('select')) {
          const $select = $coreTh.find('select')

          $select.find('option[selected]').removeAttr('selected')
          $select.find(`option[value="${value}"]`).attr('selected', true)
        }

        this.triggerSearch()
      })
    }
  }

  renderStickyHeader () {
    if (!this.options.stickyHeader) {
      return
    }

    this.$stickyContainer = this.$container.find('.sticky-header-container')
    super.renderStickyHeader()

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedColumns.css('z-index', 101)
        .find('.sticky-header-container')
        .css('right', '')
        .width(this.$fixedColumns.outerWidth())
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      const $stickyHeaderContainerRight = this.$fixedColumnsRight.find('.sticky-header-container')

      this.$fixedColumnsRight.css('z-index', 101)
      $stickyHeaderContainerRight.css('left', '')
        .scrollLeft($stickyHeaderContainerRight.find('.table').outerWidth())
        .width(this.$fixedColumnsRight.outerWidth())
    }
  }

  matchPositionX () {
    if (!this.options.stickyHeader) {
      return
    }

    this.$stickyContainer.eq(0).scrollLeft(this.$tableBody.scrollLeft())
  }
}
