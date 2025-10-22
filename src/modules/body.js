import Utils from '../utils/index.js'
import VirtualScroll from '../virtual-scroll/index.js'

export default {
  initBodyEvent () {
    // click to select by column
    this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', e => {
      const $td = $(e.currentTarget)

      if (
        $td.find('.detail-icon').length ||
        $td.index() - Utils.getDetailViewIndexOffset(this.options) < 0
      ) {
        return
      }

      const $tr = $td.parent()
      const $cardViewArr = $(e.target).parents('.card-views').children()
      const $cardViewTarget = $(e.target).parents('.card-view')
      const rowIndex = $tr.data('index')
      const item = this.data[rowIndex]
      const index = this.options.cardView ? $cardViewArr.index($cardViewTarget) : $td[0].cellIndex
      const fields = this.getVisibleFields()
      const field = fields[index - Utils.getDetailViewIndexOffset(this.options)]
      const column = this.columns[this.fieldsColumnsIndex[field]]
      const value = Utils.getItemField(item, field, this.options.escape, column.escape)

      this.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td)
      this.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field)

      // if click to select - then trigger the checkbox/radio click
      if (
        e.type === 'click' &&
        this.options.clickToSelect &&
        column.clickToSelect &&
        !Utils.calculateObjectValue(this.options, this.options.ignoreClickToSelectOn, [e.target])
      ) {
        const $selectItem = $tr.find(Utils.sprintf('[name="%s"]', this.options.selectItemName))

        if ($selectItem.length) {
          $selectItem[0].click()
        }
      }

      if (e.type === 'click' && this.options.detailViewByClick) {
        this.toggleDetailView(rowIndex, this.header.detailFormatters[this.fieldsColumnsIndex[field]])
      }
    }).off('mousedown').on('mousedown', e => {
      // https://github.com/jquery/jquery/issues/1741
      this.multipleSelectRowCtrlKey = e.ctrlKey || e.metaKey
      this.multipleSelectRowShiftKey = e.shiftKey
    })

    this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click', e => {
      e.preventDefault()
      this.toggleDetailView($(e.currentTarget).parent().parent().data('index'))
      return false
    })

    this.$selectItem = this.$body.find(Utils.sprintf('[name="%s"]', this.options.selectItemName))
    this.$selectItem.off('click').on('click', e => {
      e.stopImmediatePropagation()

      const $this = $(e.currentTarget)

      this._toggleCheck($this.prop('checked'), $this.data('index'))
    })

    this.header.events.forEach((_events, i) => {
      let events = _events

      if (!events) {
        return
      }
      // fix bug, if events is defined with namespace
      if (typeof events === 'string') {
        events = Utils.calculateObjectValue(null, events)
      }

      if (!events) {
        throw new Error(`Unknown event in the scope: ${_events}`)
      }

      const field = this.header.fields[i]
      let fieldIndex = this.getVisibleFields().indexOf(field)

      if (fieldIndex === -1) {
        return
      }

      fieldIndex += Utils.getDetailViewIndexOffset(this.options)

      for (const key in events) {
        if (!events.hasOwnProperty(key)) {
          continue
        }
        const event = events[key]

        this.$body.find('>tr:not(.no-records-found)').each((i, tr) => {
          const $tr = $(tr)
          const $td = $tr.find(this.options.cardView ? '.card-views>.card-view' : '>td').eq(fieldIndex)
          const index = key.indexOf(' ')
          const name = key.substring(0, index)
          const el = key.substring(index + 1)

          $td.find(el).off(name).on(name, e => {
            const index = $tr.data('index')
            const row = this.data[index]
            const value = row[field]

            event.apply(this, [e, value, row, index])
          })
        })
      }
    })
  },

  initHiddenRows () {
    this.hiddenRows = []
  },

  // eslint-disable-next-line no-unused-vars
  initRow (item, i, data, trFragments) {
    if (Utils.findIndex(this.hiddenRows, item) > -1) {
      return
    }
    const style = Utils.calculateObjectValue(this.options, this.options.rowStyle, [item, i], {})
    const attributes = Utils.calculateObjectValue(this.options,
      this.options.rowAttributes, [item, i], {})
    const data_ = {}

    if (item._data && !Utils.isEmptyObject(item._data)) {
      for (const [k, v] of Object.entries(item._data)) {
        // ignore data-index
        if (k === 'index') {
          return
        }
        data_[`data-${k}`] = typeof v === 'object' ? JSON.stringify(v) : v
      }
    }
    const tr = Utils.h('tr', {
      id: Array.isArray(item) ? undefined : item._id,
      class: style && style.classes || (Array.isArray(item) ? undefined : item._class),
      style: style && style.css || (Array.isArray(item) ? undefined : item._style),
      'data-index': i,
      'data-uniqueid': Utils.getItemField(item, this.options.uniqueId, false),
      'data-has-detail-view': this.options.detailView &&
        Utils.calculateObjectValue(null, this.options.detailFilter, [i, item]) ? 'true' : undefined,
      ...attributes,
      ...data_
    })
    const trChildren = []
    let detailViewTemplate = ''

    if (Utils.hasDetailViewIcon(this.options)) {
      detailViewTemplate = Utils.h('td')

      if (Utils.calculateObjectValue(null, this.options.detailFilter, [i, item])) {
        detailViewTemplate.append(Utils.h('a', {
          class: 'detail-icon',
          href: '#',
          html: Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen)
        }))
      }
    }

    if (detailViewTemplate && this.options.detailViewAlign !== 'right') {
      trChildren.push(detailViewTemplate)
    }

    const tds = this.header.fields.map((field, j) => {
      const column = this.columns[j]
      const value_ = Utils.getItemField(item, field, this.options.escape, column.escape)
      let value = ''
      const attrs = {
        class: this.header.classes[j] ? [this.header.classes[j]] : [],
        style: this.header.styles[j] ? [this.header.styles[j]] : []
      }
      const cardViewClass = `card-view card-view-field-${field}`

      if ((this.fromHtml || this.autoMergeCells) && typeof value_ === 'undefined') {
        if (!column.checkbox && !column.radio) {
          return
        }
      }

      if (!column.visible) {
        return
      }

      if (this.options.cardView && !column.cardVisible) {
        return
      }

      // handle class, style, id, rowspan, colspan and title of td
      for (const attr of ['class', 'style', 'id', 'rowspan', 'colspan', 'title']) {
        const value = item[`_${field}_${attr}`]

        if (!value) {
          continue
        }
        if (attrs[attr]) {
          attrs[attr].push(value)
        } else {
          attrs[attr] = value
        }
      }

      const cellStyle = Utils.calculateObjectValue(this.header,
        this.header.cellStyles[j], [value_, item, i, field], {})

      if (cellStyle.classes) {
        attrs.class.push(cellStyle.classes)
      }
      if (cellStyle.css) {
        attrs.style.push(cellStyle.css)
      }

      value = Utils.calculateObjectValue(column,
        this.header.formatters[j], [value_, item, i, field], value_)

      if (!(column.checkbox || column.radio)) {
        value = typeof value === 'undefined' || value === null ?
          this.options.undefinedText : value
      }

      if (
        column.searchable &&
        this.searchText &&
        this.options.searchHighlight &&
        !(column.checkbox || column.radio)
      ) {
        let searchText = this.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        if (this.options.searchAccentNeutralise && typeof value === 'string') {
          const indexRegex = new RegExp(`${Utils.normalizeAccent(searchText)}`, 'gmi')
          const match = indexRegex.exec(Utils.normalizeAccent(value))

          if (match) {
            searchText = value.substring(match.index, match.index + searchText.length)
          }
        }

        const defValue = Utils.replaceSearchMark(value, searchText)

        value = Utils.calculateObjectValue(column, column.searchHighlightFormatter,
          [value, this.searchText], defValue)
      }

      if (item[`_${field}_data`] && !Utils.isEmptyObject(item[`_${field}_data`])) {
        for (const [k, v] of Object.entries(item[`_${field}_data`])) {
          // ignore data-index
          if (k === 'index') {
            return
          }
          attrs[`data-${k}`] = v
        }
      }

      if (column.checkbox || column.radio) {
        const type = column.checkbox ? 'checkbox' : 'radio'
        const isChecked = Utils.isObject(value) && value.hasOwnProperty('checked') ?
          value.checked : (value === true || value_) && value !== false
        const isDisabled = !column.checkboxEnabled || value && value.disabled
        const valueNodes = this.header.formatters[j] && (
          typeof value === 'string' || value instanceof Node || value instanceof $) ? Utils.htmlToNodes(value) : []

        item[this.header.stateField] = value === true || (!!value_ || value && value.checked)

        return Utils.h(this.options.cardView ? 'div' : 'td', {
          class: [this.options.cardView ? cardViewClass : 'bs-checkbox', column.class],
          style: this.options.cardView ? undefined : attrs.style
        }, [
          Utils.h('label', {}, [
            Utils.h('input', {
              'data-index': i,
              name: this.options.selectItemName,
              type,
              value: item[this.options.idField],
              checked: isChecked ? 'checked' : undefined,
              disabled: isDisabled ? 'disabled' : undefined
            }),
            Utils.h('span')
          ]),
          ...valueNodes
        ])
      }

      if (this.options.cardView) {
        if (this.options.smartDisplay && value === '') {
          return Utils.h('div', { class: cardViewClass })
        }

        const cardTitle = this.options.showHeader ?
          Utils.h('span', {
            class: ['card-view-title', cellStyle.classes],
            style: attrs.style,
            html: Utils.getFieldTitle(this.columns, field)
          }) : ''

        return Utils.h('div', { class: cardViewClass }, [
          cardTitle,
          Utils.h('span', {
            class: ['card-view-value', cellStyle.classes],
            style: attrs.style
          }, [...Utils.htmlToNodes(value)])
        ])
      }

      return Utils.h('td', attrs, [...Utils.htmlToNodes(value)])
    }).filter(x => x)

    trChildren.push(...tds)

    if (detailViewTemplate && this.options.detailViewAlign === 'right') {
      trChildren.push(detailViewTemplate)
    }

    if (this.options.cardView) {
      tr.append(Utils.h('td', {
        colspan: this.header.fields.length
      }, [
        Utils.h('div', { class: 'card-views' }, trChildren)
      ]))
    } else {
      tr.append(...trChildren)
    }

    return tr
  },

  initBody (fixedScroll, updatedUid) {
    const data = this.getData()

    this.trigger('pre-body', data)

    this.$body = this.$el.find('>tbody')
    if (!this.$body.length) {
      this.$body = $('<tbody></tbody>').appendTo(this.$el)
    }

    // Fix #389 Bootstrap-table-flatJSON is not working
    if (!this.options.pagination || this.options.sidePagination === 'server') {
      this.pageFrom = 1
      this.pageTo = data.length
    }

    const rows = []
    const trFragments = $(document.createDocumentFragment())
    let hasTr = false
    const toExpand = []

    this.autoMergeCells = Utils.checkAutoMergeCells(data.slice(this.pageFrom - 1, this.pageTo))

    for (let i = this.pageFrom - 1; i < this.pageTo; i++) {
      const item = data[i]
      const tr = this.initRow(item, i, data, trFragments)

      hasTr = hasTr || !!tr
      if (tr && tr instanceof Node) {

        const uniqueId = this.options.uniqueId
        const toAppend = [tr]

        if (uniqueId && item.hasOwnProperty(uniqueId)) {
          const itemUniqueId = item[uniqueId]

          const oldTr = this.$body.find(Utils.sprintf('> tr[data-uniqueid="%s"][data-has-detail-view]', itemUniqueId))
          const oldTrNext = oldTr.next()

          if (oldTrNext.is('tr.detail-view')) {

            toExpand.push(i)

            if (!updatedUid || itemUniqueId !== updatedUid) {
              toAppend.push(oldTrNext[0])
            }
          }
        }

        if (!this.options.virtualScroll) {
          trFragments.append(toAppend)
        } else {
          rows.push($('<div>').html(toAppend).html())
        }
      }
    }

    this.$el.removeAttr('role')

    // show no records
    if (!hasTr) {
      this.$body.html(`<tr class="no-records-found">${Utils.sprintf('<td colspan="%s">%s</td>',
        this.getVisibleFields().length + Utils.getDetailViewIndexOffset(this.options),
        this.options.formatNoMatches())}</tr>`)
      this.$el.attr('role', 'presentation')
    } else if (!this.options.virtualScroll) {
      this.$body.html(trFragments)
    } else {
      if (this.virtualScroll) {
        this.virtualScroll.destroy()
      }
      this.virtualScroll = new VirtualScroll({
        rows,
        fixedScroll,
        scrollEl: this.$tableBody[0],
        contentEl: this.$body[0],
        itemHeight: this.options.virtualScrollItemHeight,
        callback: (startIndex, endIndex) => {
          this.fitHeader()
          this.initBodyEvent()
          this.trigger('virtual-scroll', startIndex, endIndex)
        }
      })
    }

    toExpand.forEach(index => {
      this.expandRow(index)
    })

    if (!fixedScroll) {
      this.scrollTo(0)
    }

    this.initBodyEvent()
    this.initFooter()
    this.resetView()
    this.updateSelected()

    if (this.options.sidePagination !== 'server') {
      this.options.totalRows = data.length
    }

    this.trigger('post-body', data)
  },

  resetView (params) {
    let padding = 0

    if (params && params.height) {
      this.options.height = params.height
    }

    this.$tableContainer.toggleClass('has-card-view', this.options.cardView)

    if (this.options.height) {
      const fixedBody = this.$tableBody.get(0)

      this.hasScrollBar = fixedBody.scrollWidth > fixedBody.clientWidth
    }

    if (!this.options.cardView && this.options.showHeader && this.options.height) {
      this.$tableHeader.show()
      this.resetHeader()
      padding += this.$header.outerHeight(true) + 1
    } else {
      this.$tableHeader.hide()
      this.trigger('post-header')
    }

    if (!this.options.cardView && this.options.showFooter) {
      this.$tableFooter.show()
      this.fitFooter()
      if (this.options.height) {
        padding += this.$tableFooter.outerHeight(true)
      }
    }

    if (this.$container.hasClass('fullscreen')) {
      this.$tableContainer.css('height', '')
      this.$tableContainer.css('width', '')
    } else if (this.options.height) {
      if (this.$tableBorder) {
        this.$tableBorder.css('width', '')
        this.$tableBorder.css('height', '')
      }

      const toolbarHeight = this.$toolbar.outerHeight(true)
      const paginationHeight = this.$pagination.outerHeight(true)
      const height = this.options.height - toolbarHeight - paginationHeight
      const $bodyTable = this.$tableBody.find('>table')
      const tableHeight = $bodyTable.outerHeight()

      this.$tableContainer.css('height', `${height}px`)

      if (this.$tableBorder && $bodyTable.is(':visible')) {
        let tableBorderHeight = height - tableHeight - 2

        if (this.hasScrollBar) {
          tableBorderHeight -= Utils.getScrollBarWidth()
        }
        this.$tableBorder.css('width', `${$bodyTable.outerWidth()}px`)
        this.$tableBorder.css('height', `${tableBorderHeight}px`)
      }
    }

    if (this.options.cardView) {
      // remove the element css
      this.$el.css('margin-top', '0')
      this.$tableContainer.css('padding-bottom', '0')
      this.$tableFooter.hide()
    } else {
      // Assign the correct sortable arrow
      this.resetCaret()
      this.$tableContainer.css('padding-bottom', `${padding}px`)
    }

    this.trigger('reset-view')
  },

  showLoading () {
    this.$tableLoading.toggleClass('open', true)

    let fontSize = this.options.loadingFontSize

    if (this.options.loadingFontSize === 'auto') {
      fontSize = this.$tableLoading.width() * 0.04
      fontSize = Math.max(12, fontSize)
      fontSize = Math.min(32, fontSize)
      fontSize = `${fontSize}px`
    }

    this.$tableLoading.find('.loading-text').css('font-size', fontSize)
  },

  hideLoading () {
    this.$tableLoading.toggleClass('open', false)
  },

  scrollTo (params) {
    let options = { unit: 'px', value: 0 }

    if (typeof params === 'object') {
      options = Object.assign(options, params)
    } else if (typeof params === 'string' && params === 'bottom') {
      options.value = this.$tableBody[0].scrollHeight
    } else if (typeof params === 'string' || typeof params === 'number') {
      options.value = params
    }

    let scrollTo = options.value

    if (options.unit === 'rows') {
      scrollTo = 0
      this.$body.find(`> tr:lt(${options.value})`).each((i, el) => {
        scrollTo += $(el).outerHeight(true)
      })
    }

    this.$tableBody.scrollTop(scrollTo)
  },

  getScrollPosition () {
    return this.$tableBody.scrollTop()
  },

  showRow (params) {
    this._toggleRow(params, true)
  },

  hideRow (params) {
    this._toggleRow(params, false)
  },

  _toggleRow (params, visible) {
    let row

    if (params.hasOwnProperty('index')) {
      row = this.getData()[params.index]
    } else if (params.hasOwnProperty('uniqueId')) {
      row = this.getRowByUniqueId(params.uniqueId)
    }

    if (!row) {
      return
    }

    const index = Utils.findIndex(this.hiddenRows, row)

    if (!visible && index === -1) {
      this.hiddenRows.push(row)
    } else if (visible && index > -1) {
      this.hiddenRows.splice(index, 1)
    }

    this.initBody(true)
    this.initPagination()
  },

  getHiddenRows (show) {
    if (show) {
      this.initHiddenRows()
      this.initBody(true)
      this.initPagination()
      return
    }
    const data = this.getData()
    const rows = []

    for (const row of data) {
      if (this.hiddenRows.includes(row)) {
        rows.push(row)
      }
    }
    this.hiddenRows = rows
    return rows
  },

  showColumn (field) {
    const fields = Array.isArray(field) ? field : [field]

    fields.forEach(field => {
      this._toggleColumn(this.fieldsColumnsIndex[field], true, true)
    })
  },

  hideColumn (field) {
    const fields = Array.isArray(field) ? field : [field]

    fields.forEach(field => {
      this._toggleColumn(this.fieldsColumnsIndex[field], false, true)
    })
  },

  _toggleColumn (index, checked, needUpdate) {
    if (index === undefined || this.columns[index].visible === checked) {
      return
    }
    this.columns[index].visible = checked
    this.initHeader()
    this.initSearch()
    this.initPagination()
    this.initBody()

    if (this.options.showColumns) {
      const $items = this.$toolbar.find('.keep-open input:not(".toggle-all")').prop('disabled', false)

      if (needUpdate) {
        $items.filter(Utils.sprintf('[value="%s"]', index)).prop('checked', checked)
      }

      if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
        $items.filter(':checked').prop('disabled', true)
      }
    }
  },

  showAllColumns () {
    this._toggleAllColumns(true)
  },

  hideAllColumns () {
    this._toggleAllColumns(false)
  },

  _toggleAllColumns (visible) {
    for (const column of this.columns.slice().reverse()) {
      if (column.switchable) {
        if (
          !visible &&
          this.options.showColumns &&
          this.getVisibleColumns().filter(it => it.switchable).length === this.options.minimumCountColumns
        ) {
          continue
        }
        column.visible = visible
      }
    }

    this.initHeader()
    this.initSearch()
    this.initPagination()
    this.initBody()
    if (this.options.showColumns) {
      const $items = this.$toolbar.find('.keep-open input[type="checkbox"]:not(".toggle-all")').prop('disabled', false)

      if (visible) {
        $items.prop('checked', visible)
      } else {
        $items.get().reverse().forEach(item => {
          if ($items.filter(':checked').length > this.options.minimumCountColumns) {
            $(item).prop('checked', visible)
          }
        })
      }

      if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
        $items.filter(':checked').prop('disabled', true)
      }
    }
  },

  mergeCells (options) {
    const row = options.index
    let col = this.getVisibleFields().indexOf(options.field)
    const rowspan = +options.rowspan || 1
    const colspan = +options.colspan || 1
    let i
    let j
    const $tr = this.$body.find('>tr[data-index]')

    col += Utils.getDetailViewIndexOffset(this.options)

    const $td = $tr.eq(row).find('>td').eq(col)

    if (row < 0 || col < 0 || row >= this.data.length) {
      return
    }

    for (i = row; i < row + rowspan; i++) {
      for (j = col; j < col + colspan; j++) {
        $tr.eq(i).find('>td').eq(j).hide()
      }
    }

    $td.attr('rowspan', rowspan).attr('colspan', colspan).show()
  },

  getVisibleColumns () {
    return this.columns.filter(column => column.visible && !this.isSelectionColumn(column))
  },

  getHiddenColumns () {
    return this.columns.filter(({ visible }) => !visible)
  }
}
