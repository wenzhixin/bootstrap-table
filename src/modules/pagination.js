import Utils from '../utils/index.js'

export default {
  initPagination () {
    const opts = this.options

    if (!opts.pagination) {
      this.$pagination.hide()
      return
    }
    this.$pagination.show()

    const html = []
    let allSelected = false
    let i
    let from
    let to
    let $pageList
    let $pre
    let $next
    let $number
    const data = this.getData({ includeHiddenRows: false })
    let pageList = opts.pageList

    if (typeof pageList === 'string') {
      pageList = pageList.replace(/\[|\]| /g, '').toLowerCase().split(',')
    }

    pageList = pageList.map(value => {
      if (typeof value === 'string') {
        return value.toLowerCase() === opts.formatAllRows().toLowerCase() ||
          ['all', 'unlimited'].includes(value.toLowerCase()) ? opts.formatAllRows() : +value
      }
      return value
    })

    this.paginationParts = opts.paginationParts
    if (typeof this.paginationParts === 'string') {
      this.paginationParts = this.paginationParts.replace(/\[|\]| |'/g, '').split(',')
    }

    if (opts.sidePagination !== 'server') {
      opts.totalRows = data.length
    }

    this.totalPages = 0
    if (opts.totalRows) {
      if (opts.pageSize === opts.formatAllRows()) {
        opts.pageSize = opts.totalRows
        allSelected = true
      }

      this.totalPages = ~~((opts.totalRows - 1) / opts.pageSize) + 1

      opts.totalPages = this.totalPages
    }
    if (this.totalPages > 0 && opts.pageNumber > this.totalPages) {
      opts.pageNumber = this.totalPages
    }

    this.pageFrom = (opts.pageNumber - 1) * opts.pageSize + 1
    this.pageTo = opts.pageNumber * opts.pageSize
    if (this.pageTo > opts.totalRows) {
      this.pageTo = opts.totalRows
    }

    if (this.options.pagination && this.options.sidePagination !== 'server') {
      this.options.totalNotFiltered = this.options.data.length
    }

    if (!this.options.showExtendedPagination) {
      this.options.totalNotFiltered = undefined
    }

    if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
      html.push(`<div class="${this.constants.classes.pull}-${opts.paginationDetailHAlign} pagination-detail">`)
    }

    if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort')) {
      let totalRows = this.options.totalRows

      if (
        this.options.sidePagination === 'client' &&
        this.options.paginationLoadMore &&
        !this._paginationLoaded &&
        this.totalPages > 1
      ) {
        totalRows += ' +'
      }

      const paginationInfo = this.paginationParts.includes('pageInfoShort') ?
        opts.formatDetailPagination(totalRows) :
        opts.formatShowingRows(this.pageFrom, this.pageTo, totalRows, opts.totalNotFiltered)

      html.push(`<span class="pagination-info">
      ${paginationInfo}
      </span>`)
    }

    if (this.paginationParts.includes('pageSize')) {
      html.push('<div class="page-list">')

      const pageNumber = [
        `<div class="${this.constants.classes.paginationDropdown}">
        <button class="${this.constants.buttonsClass} dropdown-toggle" type="button" ${this.constants.dataToggle}="dropdown">
        <span class="page-size">
        ${allSelected ? opts.formatAllRows() : opts.pageSize}
        </span>
        ${this.constants.html.dropdownCaret}
        </button>
        ${this.constants.html.pageDropdown[0]}`
      ]

      pageList.forEach((page, i) => {
        if (!opts.smartDisplay || i === 0 || pageList[i - 1] < opts.totalRows || page === opts.formatAllRows()) {
          let active

          if (allSelected) {
            active = page === opts.formatAllRows() ? this.constants.classes.dropdownActive : ''
          } else {
            active = page === opts.pageSize ? this.constants.classes.dropdownActive : ''
          }
          pageNumber.push(Utils.sprintf(this.constants.html.pageDropdownItem, active, page))
        }
      })
      pageNumber.push(`${this.constants.html.pageDropdown[1]}</div>`)

      html.push(opts.formatRecordsPerPage(pageNumber.join('')))
    }

    if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
      html.push('</div></div>')
    }

    if (this.paginationParts.includes('pageList')) {
      html.push(`<div class="${this.constants.classes.pull}-${opts.paginationHAlign} pagination">`,
        Utils.sprintf(this.constants.html.pagination[0], Utils.sprintf(' pagination-%s', opts.iconSize)),
        Utils.sprintf(this.constants.html.paginationItem, ' page-pre', opts.formatSRPaginationPreText(), opts.paginationPreText))

      if (this.totalPages < opts.paginationSuccessivelySize) {
        from = 1
        to = this.totalPages
      } else {
        from = opts.pageNumber - opts.paginationPagesBySide
        to = from + opts.paginationPagesBySide * 2
      }

      if (opts.pageNumber < opts.paginationSuccessivelySize - 1) {
        to = opts.paginationSuccessivelySize
      }

      if (opts.paginationSuccessivelySize > this.totalPages - from) {
        from = from - (opts.paginationSuccessivelySize - (this.totalPages - from)) + 1
      }

      if (from < 1) {
        from = 1
      }

      if (to > this.totalPages) {
        to = this.totalPages
      }

      const middleSize = Math.round(opts.paginationPagesBySide / 2)
      const pageItem = (i, classes = '') => Utils.sprintf(this.constants.html.paginationItem,
        classes + (i === opts.pageNumber ? ` ${this.constants.classes.paginationActive}` : ''), opts.formatSRPaginationPageText(i), i)

      if (from > 1) {
        let max = opts.paginationPagesBySide

        if (max >= from) max = from - 1
        for (i = 1; i <= max; i++) {
          html.push(pageItem(i))
        }
        if (from - 1 === max + 1) {
          i = from - 1
          html.push(pageItem(i))
        } else if (from - 1 > max) {
          if (
            from - opts.paginationPagesBySide * 2 > opts.paginationPagesBySide &&
              opts.paginationUseIntermediate
          ) {
            i = Math.round((from - middleSize) / 2 + middleSize)
            html.push(pageItem(i, ' page-intermediate'))
          } else {
            html.push(Utils.sprintf(this.constants.html.paginationItem,
              ' page-first-separator disabled', '', '...'))
          }
        }
      }

      for (i = from; i <= to; i++) {
        html.push(pageItem(i))
      }

      if (this.totalPages > to) {
        let min = this.totalPages - (opts.paginationPagesBySide - 1)

        if (to >= min) min = to + 1
        if (to + 1 === min - 1) {
          i = to + 1
          html.push(pageItem(i))
        } else if (min > to + 1) {
          if (
            this.totalPages - to > opts.paginationPagesBySide * 2 &&
              opts.paginationUseIntermediate
          ) {
            i = Math.round((this.totalPages - middleSize - to) / 2 + to)
            html.push(pageItem(i, ' page-intermediate'))
          } else {
            html.push(Utils.sprintf(this.constants.html.paginationItem,
              ' page-last-separator disabled', '', '...'))
          }
        }

        for (i = min; i <= this.totalPages; i++) {
          html.push(pageItem(i))
        }
      }

      html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-next', opts.formatSRPaginationNextText(), opts.paginationNextText))
      html.push(this.constants.html.pagination[1], '</div>')
    }
    this.$pagination.html(html.join(''))

    const dropupClass = ['bottom', 'both'].includes(opts.paginationVAlign) ?
      ` ${this.constants.classes.dropup}` : ''

    this.$pagination.last().find('.page-list > div').addClass(dropupClass)

    if (!opts.onlyInfoPagination) {
      $pageList = this.$pagination.find('.page-list a')
      $pre = this.$pagination.find('.page-pre')
      $next = this.$pagination.find('.page-next')
      $number = this.$pagination.find('.page-item').not('.page-next, .page-pre, .page-last-separator, .page-first-separator')

      if (this.totalPages <= 1) {
        this.$pagination.find('div.pagination').hide()
      }

      if (opts.smartDisplay) {
        if (pageList.length < 2 || opts.totalRows <= pageList[0]) {
          this.$pagination.find('div.page-list').hide()
        }
      }

      // when data is empty, hide the pagination
      this.$pagination[this.getData().length ? 'show' : 'hide']()

      if (!opts.paginationLoop) {
        if (opts.pageNumber === 1) {
          $pre.addClass('disabled')
        }
        if (opts.pageNumber === this.totalPages) {
          $next.addClass('disabled')
        }
      }

      if (allSelected) {
        opts.pageSize = opts.formatAllRows()
      }
      $pageList.off('click').on('click', e => this.onPageListChange(e))
      $pre.off('click').on('click', e => this.onPagePre(e))
      $next.off('click').on('click', e => this.onPageNext(e))
      $number.off('click').on('click', e => this.onPageNumber(e))
    }
  },

  updatePagination (event) {
    // Fix #171: IE disabled button can be clicked bug.
    if (event && $(event.currentTarget).hasClass('disabled')) {
      return
    }

    if (!this.options.maintainMetaData) {
      this.resetRows()
    }

    this.initPagination()

    this.trigger('page-change', this.options.pageNumber, this.options.pageSize)

    if (
      this.options.sidePagination === 'server' ||
      this.options.sidePagination === 'client' &&
      this.options.paginationLoadMore &&
      !this._paginationLoaded &&
      this.options.pageNumber === this.totalPages
    ) {
      this.initServer()
    } else {
      this.initBody()
    }
  },

  onPageListChange (event) {
    event.preventDefault()
    const $this = $(event.currentTarget)

    $this.parent().addClass(this.constants.classes.dropdownActive)
      .siblings().removeClass(this.constants.classes.dropdownActive)
    this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ?
      this.options.formatAllRows() : +$this.text()
    this.$toolbar.find('.page-size').text(this.options.pageSize)

    this.updatePagination(event)
    return false
  },

  onPagePre (event) {
    if ($(event.target).hasClass('disabled')) {
      return
    }
    event.preventDefault()
    if (this.options.pageNumber - 1 === 0) {
      this.options.pageNumber = this.options.totalPages
    } else {
      this.options.pageNumber--
    }
    this.updatePagination(event)
    return false
  },

  onPageNext (event) {
    if ($(event.target).hasClass('disabled')) {
      return
    }
    event.preventDefault()
    if (this.options.pageNumber + 1 > this.options.totalPages) {
      this.options.pageNumber = 1
    } else {
      this.options.pageNumber++
    }
    this.updatePagination(event)
    return false
  },

  onPageNumber (event) {
    event.preventDefault()
    if (this.options.pageNumber === +$(event.currentTarget).text()) {
      return
    }
    this.options.pageNumber = +$(event.currentTarget).text()
    this.updatePagination(event)
    return false
  },

  selectPage (page) {
    if (page > 0 && page <= this.options.totalPages) {
      this.options.pageNumber = page
      this.updatePagination()
    }
  },

  prevPage () {
    if (this.options.pageNumber > 1) {
      this.options.pageNumber--
      this.updatePagination()
    }
  },

  nextPage () {
    if (this.options.pageNumber < this.options.totalPages) {
      this.options.pageNumber++
      this.updatePagination()
    }
  },

  togglePagination () {
    this.options.pagination = !this.options.pagination

    const icon = this.options.showButtonIcons ? this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp : ''
    const text = this.options.showButtonText ? this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown() : ''

    this.$toolbar.find('button[name="paginationSwitch"]')
      .html(`${Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon)} ${text}`)
    this.updatePagination()
    this.trigger('toggle-pagination', this.options.pagination)
  }
}
