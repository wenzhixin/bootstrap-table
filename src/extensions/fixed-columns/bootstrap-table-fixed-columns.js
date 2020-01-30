/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

$.extend($.fn.bootstrapTable.defaults, {
  fixedColumns: false,
  fixedNumber: 0,
  fixedRightNumber: 0
})

$.BootstrapTable = class extends $.BootstrapTable {

  initContainer () {
    if (
      this.options.fixedColumns &&
      (this.options.fixedNumber || this.options.fixedRightNumber)
    ) {
      this.options.classes = this.options.classes.replace('table-hover', '')
    }

    super.initContainer()

    if (!this.options.fixedColumns) {
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

  fitHeader (...args) {
    super.fitHeader(...args)

    if (!this.options.fixedColumns) {
      return
    }

    if (this.$el.is(':hidden')) {
      return
    }

    this.needFixedColumns = this.$tableHeader.width() < this.$tableHeader.find('table').width()

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedColumns.find('.fixed-table-header').remove()
      this.$fixedColumns.append(this.$tableHeader.clone(true))
      this.$fixedHeader = this.$fixedColumns.find('.fixed-table-header')

      this.$fixedColumns.css({
        width: this.getFixedColumnsWidth()
      })
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      this.$fixedColumnsRight.find('.fixed-table-header').remove()
      this.$fixedColumnsRight.append(this.$tableHeader.clone(true))
      this.$fixedHeaderRight = this.$fixedColumnsRight.find('.fixed-table-header')

      this.$fixedColumnsRight.css({
        width: this.getFixedColumnsWidth(true)
      })
      this.$fixedHeaderRight.scrollLeft(this.$fixedHeaderRight.find('table').width())
    }

    this.initFixedColumnsBody()
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
    this.initFixedColumnsEvents()
  }

  initFixedColumnsBody () {
    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedColumns.find('.fixed-table-body').remove()
      this.$fixedColumns.append(this.$tableBody.clone(true))
      this.$fixedBody = this.$fixedColumns.find('.fixed-table-body')

      this.$fixedBody.css({
        height: this.$fixedColumns.height() - this.$fixedHeader.height()
      })
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      this.$fixedColumnsRight.find('.fixed-table-body').remove()
      this.$fixedColumnsRight.append(this.$tableBody.clone(true))
      this.$fixedBodyRight = this.$fixedColumnsRight.find('.fixed-table-body')

      this.$fixedBodyRight.css({
        height: this.$fixedColumnsRight.height() - this.$fixedHeaderRight.height()
      })
      this.$fixedBodyRight.scrollLeft(this.$fixedBodyRight.find('table').width())
    }
  }

  getFixedColumnsWidth (isRight) {
    let visibleFields = this.getVisibleFields()
    let width = 0
    let fixedNumber = this.options.fixedNumber

    if (isRight) {
      visibleFields = visibleFields.reverse()
      fixedNumber = this.options.fixedRightNumber
    }

    for (let i = 0; i < fixedNumber; i++) {
      width += this.$header.find(`th[data-field="${visibleFields[i]}"]`).outerWidth(true)
    }

    return width + 1
  }

  trigger (...args) {
    super.trigger(...args)

    if (args[0] === 'scroll-body') {
      if (this.needFixedColumns && this.options.fixedNumber) {
        this.$fixedBody.scrollTop(this.$tableBody.scrollTop())
      }

      if (this.needFixedColumns && this.options.fixedRightNumber) {
        this.$fixedBodyRight.scrollTop(this.$tableBody.scrollTop())
      }
    }
  }

  initFixedColumnsEvents () {
    this.$tableBody.find('tr').hover(e => {
      const index = $(e.currentTarget).data('index')
      $(e.currentTarget).addClass('hover')

      if (this.options.fixedNumber) {
        this.$fixedBody.find(`tr[data-index="${index}"]`).addClass('hover')
      }
      if (this.options.fixedRightNumber) {
        this.$fixedBodyRight.find(`tr[data-index="${index}"]`).addClass('hover')
      }
    }, e => {
      const index = $(e.currentTarget).data('index')
      $(e.currentTarget).removeClass('hover')

      if (this.options.fixedNumber) {
        this.$fixedBody.find(`tr[data-index="${index}"]`).removeClass('hover')
      }
      if (this.options.fixedRightNumber) {
        this.$fixedBodyRight.find(`tr[data-index="${index}"]`).removeClass('hover')
      }
    })

    if (this.needFixedColumns && this.options.fixedNumber) {
      this.$fixedBody.off('mousewheel').on('mousewheel', e => {
        const deltaY = e.originalEvent.wheelDeltaY
        const top = this.$tableBody.scrollTop() - deltaY
        const fixedBody = this.$fixedBody[0]

        if (
          deltaY > 0 && top > 0 ||
          deltaY < 0 && top < fixedBody.scrollHeight - fixedBody.clientHeight
        ) {
          e.preventDefault()
        }
        this.$fixedBody.scrollTop(top)
        this.$tableBody.scrollTop(top)
        if (this.options.fixedRightNumber) {
          this.$fixedBodyRight.scrollTop(top)
        }
      }).find('tr').hover(e => {
        const index = $(e.currentTarget).data('index')
        $(e.currentTarget).addClass('hover')

        this.$tableBody.find(`tr[data-index="${index}"]`).addClass('hover')
        if (this.options.fixedRightNumber) {
          this.$fixedBodyRight.find(`tr[data-index="${index}"]`).addClass('hover')
        }
      }, e => {
        const index = $(e.currentTarget).data('index')
        $(e.currentTarget).removeClass('hover')

        this.$tableBody.find(`tr[data-index="${index}"]`).removeClass('hover')
        if (this.options.fixedRightNumber) {
          this.$fixedBodyRight.find(`tr[data-index="${index}"]`).removeClass('hover')
        }
      })
    }

    if (this.needFixedColumns && this.options.fixedRightNumber) {
      this.$fixedBodyRight.off('mousewheel').on('mousewheel', e => {
        const deltaY = e.originalEvent.wheelDeltaY
        const top = this.$tableBody.scrollTop() - deltaY
        const fixedBody = this.$fixedBodyRight[0]

        if (
          deltaY > 0 && top > 0 ||
          deltaY < 0 && top < fixedBody.scrollHeight - fixedBody.clientHeight
        ) {
          e.preventDefault()
        }
        this.$fixedBodyRight.scrollTop(top)
        this.$tableBody.scrollTop(top)
        if (this.options.fixedNumber) {
          this.$fixedBody.scrollTop(top)
        }
      }).find('tr').hover(e => {
        const index = $(e.currentTarget).data('index')
        $(e.currentTarget).addClass('hover')

        this.$tableBody.find(`tr[data-index="${index}"]`).addClass('hover')
        if (this.options.fixedNumber) {
          this.$fixedBody.find(`tr[data-index="${index}"]`).addClass('hover')
        }
      }, e => {
        const index = $(e.currentTarget).data('index')
        $(e.currentTarget).removeClass('hover')

        this.$tableBody.find(`tr[data-index="${index}"]`).removeClass('hover')
        if (this.options.fixedNumber) {
          this.$fixedBody.find(`tr[data-index="${index}"]`).removeClass('hover')
        }
      })
    }
  }
}
