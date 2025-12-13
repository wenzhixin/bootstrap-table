import Utils from '../utils/index.js'

export default {
  initHeader () {
    const visibleColumns = {}
    const headerHtml = []

    this.header = {
      fields: [],
      styles: [],
      classes: [],
      formatters: [],
      detailFormatters: [],
      events: [],
      sorters: [],
      sortNames: [],
      cellStyles: [],
      searchables: []
    }

    Utils.updateFieldGroup(this.options.columns, this.columns)

    this.options.columns.forEach((columns, i) => {
      const html = []

      html.push(`<tr${Utils.sprintf(' class="%s"', this._headerTrClasses[i])} ${Utils.sprintf(' style="%s"', this._headerTrStyles[i])}>`)

      let detailViewTemplate = ''

      if (i === 0 && Utils.hasDetailViewIcon(this.options)) {
        const rowspan = this.options.columns.length > 1 ?
          ` rowspan="${this.options.columns.length}"` : ''

        detailViewTemplate = `<th class="detail"${rowspan}>
          <div class="fht-cell"></div>
          </th>`
      }

      if (detailViewTemplate && this.options.detailViewAlign !== 'right') {
        html.push(detailViewTemplate)
      }

      columns.forEach((column, j) => {
        const class_ = Utils.sprintf(' class="%s"', column.class)
        const unitWidth = column.widthUnit
        const width = parseFloat(column.width)

        const columnHalign = column.halign ? column.halign : column.align
        const halign = Utils.sprintf('text-align: %s; ', columnHalign)
        const align = Utils.sprintf('text-align: %s; ', column.align)
        let style = Utils.sprintf('vertical-align: %s; ', column.valign)

        style += Utils.sprintf('width: %s; ', (column.checkbox || column.radio) && !width ?
          !column.showSelectTitle ? '36px' : undefined :
          width ? width + unitWidth : undefined)

        if (typeof column.fieldIndex === 'undefined' && !column.visible) {
          return
        }

        const headerStyle = Utils.calculateObjectValue(null, this.options.headerStyle, [column])
        const csses = []
        const data_ = []
        let classes = ''

        if (headerStyle && headerStyle.css) {
          for (const [key, value] of Object.entries(headerStyle.css)) {
            csses.push(`${key}: ${value}`)
          }
        }
        if (headerStyle && headerStyle.classes) {
          classes = Utils.sprintf(' class="%s"', column['class'] ?
            [column['class'], headerStyle.classes].join(' ') : headerStyle.classes)
        }

        if (typeof column.fieldIndex !== 'undefined') {
          this.header.fields[column.fieldIndex] = column.field
          this.header.styles[column.fieldIndex] = align + style
          this.header.classes[column.fieldIndex] = column.class
          this.header.formatters[column.fieldIndex] = column.formatter
          this.header.detailFormatters[column.fieldIndex] = column.detailFormatter
          this.header.events[column.fieldIndex] = column.events
          this.header.sorters[column.fieldIndex] = column.sorter
          this.header.sortNames[column.fieldIndex] = column.sortName
          this.header.cellStyles[column.fieldIndex] = column.cellStyle
          this.header.searchables[column.fieldIndex] = column.searchable

          if (!column.visible) {
            return
          }

          if (this.options.cardView && !column.cardVisible) {
            return
          }

          visibleColumns[column.field] = column
        }

        if (Object.keys(column._data || {}).length > 0) {
          for (const [k, v] of Object.entries(column._data)) {
            data_.push(`data-${k}='${typeof v === 'object' ? JSON.stringify(v) : v}'`)
          }
        }

        html.push(`<th${Utils.sprintf(' title="%s"', column.titleTooltip)}`,
          column.checkbox || column.radio ?
            Utils.sprintf(' class="bs-checkbox %s"', column['class'] || '') :
            classes || class_,
          Utils.sprintf(' style="%s"', halign + style + csses.join('; ') || undefined),
          Utils.sprintf(' rowspan="%s"', column.rowspan),
          Utils.sprintf(' colspan="%s"', column.colspan),
          Utils.sprintf(' scope="%s"', column.scope),
          Utils.sprintf(' data-field="%s"', column.field),
          // If `column` is not the first element of `this.options.columns[0]`, then className 'data-not-first-th' should be added.
          j === 0 && i > 0 ? ' data-not-first-th' : '',
          data_.length > 0 ? data_.join(' ') : '',
          '>')

        html.push(Utils.sprintf('<div class="th-inner %s">',
          this.options.sortable && column.sortable ? `sortable${columnHalign === 'center' ? ' sortable-center' : ''} both` : ''))

        let text = this.options.escape && this.options.escapeTitle ? Utils.escapeHTML(column.title) : column.title

        const title = text

        if (column.checkbox) {
          text = ''
          if (!this.options.singleSelect && this.options.checkboxHeader) {
            text = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>'
          }
          this.header.stateField = column.field
        }
        if (column.radio) {
          text = ''
          this.header.stateField = column.field
        }
        if (!text && column.showSelectTitle) {
          text += title
        }

        html.push(text)
        html.push('</div>')
        html.push('<div class="fht-cell"></div>')
        html.push('</div>')
        html.push('</th>')
      })

      if (detailViewTemplate && this.options.detailViewAlign === 'right') {
        html.push(detailViewTemplate)
      }

      html.push('</tr>')

      if (html.length > 3) {
        headerHtml.push(html.join(''))
      }
    })

    this.$header.html(headerHtml.join(''))
    this.$header.find('th[data-field]').each((i, el) => {
      $(el).data(visibleColumns[$(el).data('field')])
    })
    this.$container.off('click', '.th-inner').on('click', '.th-inner', e => {
      const $this = $(e.currentTarget)

      if (this.options.detailView && !$this.parent().hasClass('bs-checkbox')) {
        if ($this.closest('.bootstrap-table')[0] !== this.$container[0]) {
          return false
        }
      }

      if (this.options.sortable && $this.parent().data().sortable) {
        this.onSort(e)
      }
    })

    const resizeEvent = Utils.getEventName('resize.bootstrap-table', this.$el.attr('id'))

    $(window).off(resizeEvent)
    if (!this.options.showHeader || this.options.cardView) {
      this.$header.hide()
      this.$tableHeader.hide()
      this.$tableLoading.css('top', 0)
    } else {
      this.$header.show()
      this.$tableHeader.show()
      this.$tableLoading.css('top', this.$header.outerHeight() + 1)
      // Assign the correct sortable arrow
      this.resetCaret()
      $(window).on(resizeEvent, () => this.resetView())
    }

    this.$selectAll = this.$header.find('[name="btSelectAll"]')
    this.$selectAll.off('click').on('click', e => {
      e.stopPropagation()
      const checked = $(e.currentTarget).prop('checked')

      this[checked ? 'checkAll' : 'uncheckAll']()
      this.updateSelected()
    })
  },

  getVisibleFields () {
    const visibleFields = []

    for (const field of this.header.fields) {
      const column = this.columns[this.fieldsColumnsIndex[field]]

      if (!column || !column.visible || this.options.cardView && !column.cardVisible) {
        continue
      }
      visibleFields.push(field)
    }
    return visibleFields
  },

  resetHeader () {
    // Fix #61: the hidden table reset header bug.
    // Fix bug: get $el.css('width') error sometime (height = 500)
    this._setDelayTimeout('header', () => this.fitHeader(), this.$el.is(':hidden') ? 100 : 0)
  },

  fitHeader () {
    if (this.$el.is(':hidden')) {
      this._setDelayTimeout('header', () => this.fitHeader(), 100)
      return
    }

    const fixedBody = this.$tableBody.get(0)
    const scrollWidth = this.hasScrollBar &&
    fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ?
      Utils.getScrollBarWidth() : 0

    this.$el.css('margin-top', -this.$header.outerHeight())

    const focused = this.$tableHeader.find(':focus')

    if (focused.length > 0) {
      const $th = focused.parents('th')

      if ($th.length > 0) {
        const dataField = $th.attr('data-field')

        if (dataField !== undefined) {
          const $headerTh = this.$header.find(`[data-field='${dataField}']`)

          if ($headerTh.length > 0) {
            $headerTh.find(':input').addClass('focus-temp')
          }
        }
      }
    }

    this.$header_ = this.$header.clone(true, true)
    this.$selectAll_ = this.$header_.find('[name="btSelectAll"]')

    const $caption = this.$el.find('caption')
    const $fixedHeaderTable = this.$tableHeader
      .css('margin-right', scrollWidth)
      .find('table').css('width', this.$el.outerWidth())
      .html('').attr('class', this.$el.attr('class'))

    if ($caption.length > 0) {
      $fixedHeaderTable.append($caption.clone(true, true))
    }

    $fixedHeaderTable.append(this.$header_)

    this.$tableLoading.css('width', this.$el.outerWidth())

    const focusedTemp = $('.focus-temp:visible:eq(0)')

    if (focusedTemp.length > 0) {
      focusedTemp.focus()
      this.$header.find('.focus-temp').removeClass('focus-temp')
    }

    // fix bug: $.data() is not working as expected after $.append()
    this.$header.find('th[data-field]').each((i, el) => {
      this.$header_.find(Utils.sprintf('th[data-field="%s"]', $(el).data('field'))).data($(el).data())
    })

    const visibleFields = this.getVisibleFields()
    const $ths = this.$header_.find('th')
    let $tr = this.$body.find('>tr:not(.no-records-found,.virtual-scroll-top)').eq(0)

    while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
      $tr = $tr.next()
    }

    const trLength = $tr.find('> *').length

    $tr.find('> *').each((i, el) => {
      const $this = $(el)

      if (Utils.hasDetailViewIcon(this.options)) {
        if (
          i === 0 && this.options.detailViewAlign !== 'right' ||
          i === trLength - 1 && this.options.detailViewAlign === 'right'
        ) {
          const $thDetail = $ths.filter('.detail')
          const zoomWidth = $thDetail.innerWidth() - $thDetail.find('.fht-cell').width()

          $thDetail.find('.fht-cell').width($this.innerWidth() - zoomWidth)
          return
        }
      }

      const index = i - Utils.getDetailViewIndexOffset(this.options)
      let $th = this.$header_.find(Utils.sprintf('th[data-field="%s"]', visibleFields[index]))

      if ($th.length > 1) {
        $th = $($ths[$this[0].cellIndex])
      }

      const zoomWidth = $th.innerWidth() - $th.find('.fht-cell').width()

      $th.find('.fht-cell').width($this.innerWidth() - zoomWidth)
    })

    this.horizontalScroll()
    this.trigger('post-header')
  },

  resetCaret () {
    const { sortName, sortOrder } = this.options
    const ariaSort = sortOrder === 'asc' ? 'ascending' : 'descending'

    this.$header.find('th').each((i, th) => {
      const isActive = $(th).data('field') === sortName

      $(th)
        .attr('aria-sort', isActive ? ariaSort : null)
        .find('.sortable')
        .removeClass('desc asc')
        .addClass(isActive ? sortOrder : 'both')
    })
  },

  initFooter () {
    if (!this.options.showFooter || this.options.cardView) { // do nothing
      return
    }

    const data = this.getData()
    const html = []
    let detailTemplate = ''

    if (Utils.hasDetailViewIcon(this.options)) {
      detailTemplate = Utils.h('th', { class: 'detail' }, [
        Utils.h('div', { class: 'th-inner' }),
        Utils.h('div', { class: 'fht-cell' })
      ])
    }

    if (detailTemplate && this.options.detailViewAlign !== 'right') {
      html.push(detailTemplate)
    }

    for (const column of this.columns) {
      const hasData = this.footerData && this.footerData.length > 0

      if (
        !column.visible ||
        hasData && !(column.field in this.footerData[0])
      ) {
        continue
      }

      if (this.options.cardView && !column.cardVisible) {
        return
      }

      const style = Utils.calculateObjectValue(null, column.footerStyle || this.options.footerStyle, [column])
      const csses = style && style.css || {}
      const colspan = hasData && this.footerData[0][`_${column.field}_colspan`] || 0
      let value = hasData && this.footerData[0][column.field] || ''

      value = Utils.calculateObjectValue(column, column.footerFormatter,
        [data, value], value)

      html.push(Utils.h('th', {
        class: [column['class'], style && style.classes],
        style: {
          'text-align': column.falign ? column.falign : column.align,
          'vertical-align': column.valign,
          ...csses
        },
        colspan: colspan || undefined
      }, [
        Utils.h('div', {
          class: 'th-inner'
        }, [...Utils.htmlToNodes(value)]),
        Utils.h('div', { class: 'fht-cell' })
      ]))
    }

    if (detailTemplate && this.options.detailViewAlign === 'right') {
      html.push(detailTemplate)
    }

    if (!this.options.height && !this.$tableFooter.length) {
      this.$el.append('<tfoot><tr></tr></tfoot>')
      this.$tableFooter = this.$el.find('tfoot')
    }

    if (!this.$tableFooter.find('tr').length) {
      this.$tableFooter.html('<table><thead><tr></tr></thead></table>')
    }

    this.$tableFooter.find('tr').html(html)

    this.trigger('post-footer', this.$tableFooter)
  },

  fitFooter () {
    if (this.$el.is(':hidden')) {
      this._setDelayTimeout('footer', () => this.fitFooter(), 100)
      return
    }

    const fixedBody = this.$tableBody.get(0)
    const scrollWidth = this.hasScrollBar &&
      fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ?
      Utils.getScrollBarWidth() : 0

    this.$tableFooter
      .css('margin-right', scrollWidth)
      .find('table').css('width', this.$el.outerWidth())
      .attr('class', this.$el.attr('class'))

    const $ths = this.$tableFooter.find('th')
    let $tr = this.$body.find('>tr:first-child:not(.no-records-found)')

    $ths.find('.fht-cell').width('auto')

    while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
      $tr = $tr.next()
    }

    const trLength = $tr.find('> *').length

    $tr.find('> *').each((i, el) => {
      const $this = $(el)

      if (Utils.hasDetailViewIcon(this.options)) {
        if (
          i === 0 && this.options.detailViewAlign === 'left' ||
          i === trLength - 1 && this.options.detailViewAlign === 'right'
        ) {
          const $thDetail = $ths.filter('.detail')
          const zoomWidth = $thDetail.innerWidth() - $thDetail.find('.fht-cell').width()

          $thDetail.find('.fht-cell').width($this.innerWidth() - zoomWidth)
          return
        }
      }

      const $th = $ths.eq(i)
      const zoomWidth = $th.innerWidth() - $th.find('.fht-cell').width()

      $th.find('.fht-cell').width($this.innerWidth() - zoomWidth)
    })

    this.horizontalScroll()
  },

  horizontalScroll () {
    // horizontal scroll event
    // TODO: it's probably better improving the layout than binding to scroll event
    this.$tableBody.off('scroll').on('scroll', () => {
      const scrollLeft = this.$tableBody.scrollLeft()

      if (this.options.showHeader && this.options.height) {
        this.$tableHeader.scrollLeft(scrollLeft)
      }

      if (this.options.showFooter && !this.options.cardView) {
        this.$tableFooter.scrollLeft(scrollLeft)
      }

      this.trigger('scroll-body', this.$tableBody)
    })
  },

  updateColumnTitle (params) {
    if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
      return
    }

    this.columns[this.fieldsColumnsIndex[params.field]].title =
      this.options.escape && this.options.escapeTitle ? Utils.escapeHTML(params.title) : params.title

    if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
      this.$header.find('th[data-field]').each((i, el) => {
        if ($(el).data('field') === params.field) {
          $($(el).find('.th-inner')[0]).html(params.title)
          return false
        }
      })

      this.resetView()
    }
  }
}
