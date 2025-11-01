import Utils from '../utils/index.js'

export default {
  initServer (silent, query) {
    let data = {}
    const index = this.header.fields.indexOf(this.options.sortName)

    let params = {
      searchText: this.searchText,
      sortName: this.options.sortName,
      sortOrder: this.options.sortOrder
    }

    if (this.header.sortNames[index]) {
      params.sortName = this.header.sortNames[index]
    }

    if (this.options.pagination && this.options.sidePagination === 'server') {
      params.pageSize = this.options.pageSize === this.options.formatAllRows() ?
        this.options.totalRows : this.options.pageSize
      params.pageNumber = this.options.pageNumber
    }

    if (!this.options.url && !this.options.ajax) {
      return
    }

    if (this.options.queryParamsType === 'limit') {
      params = {
        search: params.searchText,
        sort: params.sortName,
        order: params.sortOrder
      }

      if (this.options.pagination && this.options.sidePagination === 'server') {
        params.offset = this.options.pageSize === this.options.formatAllRows() ?
          0 : this.options.pageSize * (this.options.pageNumber - 1)
        params.limit = this.options.pageSize
        if (params.limit === 0 || this.options.pageSize === this.options.formatAllRows()) {
          delete params.limit
        }
      }
    }

    if (
      this.options.search &&
      this.options.sidePagination === 'server' &&
      this.options.searchable &&
      this.columns.filter(column => column.searchable).length
    ) {
      params.searchable = []

      for (const column of this.columns) {
        if (
          !column.checkbox &&
          column.searchable &&
          (
            this.options.visibleSearch &&
            column.visible ||
            !this.options.visibleSearch
          )
        ) {
          params.searchable.push(column.field)
        }
      }
    }

    if (!Utils.isEmptyObject(this.filterColumnsPartial)) {
      params.filter = JSON.stringify(this.filterColumnsPartial, null)
    }

    Utils.extend(params, query || {})

    data = Utils.calculateObjectValue(this.options, this.options.queryParams, [params], data)

    // false to stop request
    if (data === false) {
      return
    }

    if (!silent) {
      this.showLoading()
    }
    const request = Utils.extend({}, Utils.calculateObjectValue(null, this.options.ajaxOptions), {
      type: this.options.method,
      url: this.options.url,
      data: this.options.contentType === 'application/json' && this.options.method === 'post' ?
        JSON.stringify(data) : data,
      cache: this.options.cache,
      contentType: this.options.contentType,
      dataType: this.options.dataType,
      success: (_res, textStatus, jqXHR) => {
        const res = Utils.calculateObjectValue(this.options,
          this.options.responseHandler, [_res, jqXHR], _res)

        if (
          this.options.sidePagination === 'client' &&
          this.options.paginationLoadMore
        ) {
          this._paginationLoaded = this.data.length === res.length
        }

        this.load(res)
        this.trigger('load-success', res, jqXHR && jqXHR.status, jqXHR)
        if (!silent) {
          this.hideLoading()
        }

        if (
          this.options.sidePagination === 'server' &&
          this.options.pageNumber > 1 &&
          res[this.options.totalField] > 0 &&
          !res[this.options.dataField].length
        ) {
          this.updatePagination()
        }
      },
      error: jqXHR => {
        // abort ajax by multiple request
        if (jqXHR && jqXHR.status === 0 && this._xhrAbort) {
          this._xhrAbort = false
          return
        }

        let data = []

        if (this.options.sidePagination === 'server') {
          data = {}
          data[this.options.totalField] = 0
          data[this.options.dataField] = []
        }
        this.load(data)
        this.trigger('load-error', jqXHR && jqXHR.status, jqXHR)
        if (!silent) {
          this.hideLoading()
        }
      }
    })

    if (this.options.ajax) {
      Utils.calculateObjectValue(this, this.options.ajax, [request], null)
    } else {
      if (this._xhr && this._xhr.readyState !== 4) {
        this._xhrAbort = true
        this._xhr.abort()
      }
      this._xhr = $.ajax(request)
    }

    return data
  },

  initData (data, type) {
    if (type === 'append') {
      this.options.data = this.options.data.concat(data)
    } else if (type === 'prepend') {
      this.options.data = [].concat(data).concat(this.options.data)
    } else {
      data = data || Utils.deepCopy(this.options.data)
      this.options.data = Array.isArray(data) ? data : data[this.options.dataField]
    }

    this.data = [...this.options.data]

    if (this.options.sortReset) {
      this.unsortedData = [...this.data]
    }

    if (this.options.sidePagination === 'server') {
      return
    }
    this.initSort()
  },

  initSort () {
    let name = this.options.sortName
    const order = this.options.sortOrder === 'desc' ? -1 : 1
    const index = this.header.fields.indexOf(this.options.sortName)

    if (index !== -1) {
      if (this.options.sortStable) {
        this.data.forEach((row, i) => {
          if (!row.hasOwnProperty('_position')) {
            row._position = i
          }
        })
      }

      if (this.options.customSort) {
        Utils.calculateObjectValue(this.options, this.options.customSort, [
          this.options.sortName,
          this.options.sortOrder,
          this.data
        ])
      } else {
        this.data.sort((a, b) => {
          if (this.header.sortNames[index]) {
            name = this.header.sortNames[index]
          }
          const aa = Utils.getItemField(a, name, this.options.escape)
          const bb = Utils.getItemField(b, name, this.options.escape)
          const value = Utils.calculateObjectValue(this.header, this.header.sorters[index], [aa, bb, a, b])

          if (value !== undefined) {
            if (this.options.sortStable && value === 0) {
              return order * (a._position - b._position)
            }
            return order * value
          }

          return Utils.sort(aa, bb, order, this.options, a._position, b._position)
        })
      }

      if (this.options.sortClass !== undefined) {
        setTimeout(() => {
          this.$el.removeClass(this.options.sortClass)
          const index = this.$header.find(`[data-field="${this.options.sortName}"]`).index()

          this.$el.find(`tr td:nth-child(${index + 1})`).addClass(this.options.sortClass)
        }, 250)
      }
    } else if (this.options.sortReset) {
      this.data = [...this.unsortedData]
    }
  },

  onSort ({ type, currentTarget }) {
    const $this = type === 'keypress' ? $(currentTarget) : $(currentTarget).parent()
    const $this_ = this.$header.find('th').eq($this.index())

    this.$header.add(this.$header_).find('span.order').remove()

    if (this.options.sortName === $this.data('field')) {
      const currentSortOrder = this.options.sortOrder
      const initialSortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].sortOrder ||
        this.columns[this.fieldsColumnsIndex[$this.data('field')]].order

      if (currentSortOrder === undefined) {
        this.options.sortOrder = 'asc'
      } else if (currentSortOrder === 'asc') {
        this.options.sortOrder = this.options.sortReset ? initialSortOrder === 'asc' ? 'desc' : undefined : 'desc'
      } else if (this.options.sortOrder === 'desc') {
        this.options.sortOrder = this.options.sortReset ? initialSortOrder === 'desc' ? 'asc' : undefined : 'asc'
      }

      if (this.options.sortOrder === undefined) {
        this.options.sortName = undefined
      }
    } else {
      this.options.sortName = $this.data('field')
      if (this.options.rememberOrder) {
        this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc'
      } else {
        this.options.sortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].sortOrder ||
          this.columns[this.fieldsColumnsIndex[$this.data('field')]].order
      }
    }

    $this.add($this_).data('order', this.options.sortOrder)

    // Assign the correct sortable arrow
    this.resetCaret()

    this._sort()
  },

  _sort () {
    if (this.options.sidePagination === 'server' && this.options.serverSort) {
      this.options.pageNumber = 1

      this.trigger('sort', this.options.sortName, this.options.sortOrder)
      this.initServer(this.options.silentSort)
      return
    }

    if (this.options.pagination && this.options.sortResetPage) {
      this.options.pageNumber = 1
      this.initPagination()
    }

    this.trigger('sort', this.options.sortName, this.options.sortOrder)
    this.initSort()
    this.initBody()
  },

  sortReset () {
    this.options.sortName = undefined
    this.options.sortOrder = undefined
    this._sort()
  },

  sortBy (params) {
    this.options.sortName = params.field
    this.options.sortOrder = params.hasOwnProperty('sortOrder') ? params.sortOrder : 'asc'
    this._sort()
  },

  getData (params) {
    let data = this.options.data

    if (
      (
        this.searchText ||
        this.options.customSearch ||
        this.options.sortName !== undefined ||
        this.enableCustomSort || // Fix #4616: this.enableCustomSort is for extensions
        !Utils.isEmptyObject(this.filterColumns) ||
        typeof this.options.filterOptions.filterAlgorithm === 'function' ||
        !Utils.isEmptyObject(this.filterColumnsPartial)
      ) && (!params || !params.unfiltered)
    ) {
      data = this.data
    }

    if (params && !params.includeHiddenRows) {
      const hiddenRows = this.getHiddenRows()

      data = data.filter(row => Utils.findIndex(hiddenRows, row) === -1)
    }

    if (params && params.useCurrentPage) {
      data = data.slice(this.pageFrom - 1, this.pageTo)
    }

    if (params && params.formatted) {
      return data.map(row => {
        const formattedColumns = {}

        for (const [key, value] of Object.entries(row)) {
          const column = this.columns[this.fieldsColumnsIndex[key]]

          if (!column) {
            continue
          }

          formattedColumns[key] = Utils.calculateObjectValue(column, this.header.formatters[column.fieldIndex],
            [value, row, row.index, column.field], value)
        }
        return formattedColumns
      })
    }

    return data
  },

  getFooterData () {
    return this.footerData ?? []
  },

  load (_data) {
    let fixedScroll = false
    let data = _data

    // #431: support pagination
    if (this.options.pagination && this.options.sidePagination === 'server') {
      this.options.totalRows = data[this.options.totalField]
      this.options.totalNotFiltered = data[this.options.totalNotFilteredField]
      this.footerData = data[this.options.footerField] ? [data[this.options.footerField]] : undefined
    }

    fixedScroll = this.options.fixedScroll || data.fixedScroll
    data = Array.isArray(data) ? data : data[this.options.dataField]

    this.initData(data)
    this.initSearch()
    this.initPagination()
    this.initBody(fixedScroll)
  },

  append (data) {
    this.initData(data, 'append')
    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  },

  prepend (data) {
    this.initData(data, 'prepend')
    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  },

  remove (params) {
    let removed = 0

    for (let i = this.options.data.length - 1; i >= 0; i--) {
      const row = this.options.data[i]
      const value = Utils.getItemField(row, params.field, this.options.escape, row.escape)

      if (value === undefined && params.field !== '$index') {
        continue
      }

      if (
        !row.hasOwnProperty(params.field) &&
        params.field === '$index' &&
        params.values.includes(i) ||
        params.values.includes(value)
      ) {
        removed++

        this.options.data.splice(i, 1)
      }
    }

    if (!removed) {
      return
    }

    if (this.options.sidePagination === 'server') {
      this.options.totalRows -= removed
      this.data = [...this.options.data]
    }

    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  },

  removeAll () {
    if (this.options.data.length > 0) {
      this.data.splice(0, this.data.length)
      this.options.data.splice(0, this.options.data.length)
      this.initSearch()
      this.initPagination()
      this.initBody(true)
    }
  },

  insertRow (params) {
    if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
      return
    }
    const row = this.data[params.index]
    const originalIndex = this.options.data.indexOf(row)

    if (originalIndex === -1) {
      this.append([params.row])
      return
    }

    this.data.splice(params.index, 0, params.row)
    this.options.data.splice(originalIndex, 0, params.row)
    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  },

  updateRow (params) {
    const allParams = Array.isArray(params) ? params : [params]

    for (const params of allParams) {
      if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
        continue
      }
      const row = this.data[params.index]
      const originalIndex = this.options.data.indexOf(row)

      if (params.hasOwnProperty('replace') && params.replace) {
        this.data[params.index] = params.row
        this.options.data[originalIndex] = params.row
      } else {
        Utils.extend(this.data[params.index], params.row)
        Utils.extend(this.options.data[originalIndex], params.row)
      }
    }

    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  },

  getRowByUniqueId (_id) {
    const uniqueId = this.options.uniqueId
    const len = this.options.data.length
    let id = _id
    let dataRow = null
    let i
    let row

    for (i = len - 1; i >= 0; i--) {
      row = this.options.data[i]
      const rowUniqueId = Utils.getItemField(row, uniqueId, this.options.escape, row.escape)

      if (rowUniqueId === undefined) {
        continue
      }

      if (typeof rowUniqueId === 'string') {
        id = _id.toString()
      } else if (typeof rowUniqueId === 'number') {
        if (Number(rowUniqueId) === rowUniqueId && rowUniqueId % 1 === 0) {
          id = parseInt(_id, 10)
        } else if (rowUniqueId === Number(rowUniqueId) && rowUniqueId !== 0) {
          id = parseFloat(_id)
        }
      }

      if (rowUniqueId === id) {
        dataRow = row
        break
      }
    }

    return dataRow
  },

  updateByUniqueId (params) {
    const allParams = Array.isArray(params) ? params : [params]
    let updatedUid = null

    for (const params of allParams) {
      if (!params.hasOwnProperty('id') || !params.hasOwnProperty('row')) {
        continue
      }

      const rowId = this.options.data.indexOf(this.getRowByUniqueId(params.id))

      if (rowId === -1) {
        continue
      }

      if (params.hasOwnProperty('replace') && params.replace) {
        this.options.data[rowId] = params.row
      } else {
        Utils.extend(this.options.data[rowId], params.row)
      }
      updatedUid = params.id
    }

    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true, updatedUid)
  },

  removeByUniqueId (id) {
    const len = this.options.data.length
    const row = this.getRowByUniqueId(id)

    if (row) {
      this.options.data.splice(this.options.data.indexOf(row), 1)
    }

    if (len === this.options.data.length) {
      return
    }

    if (this.options.sidePagination === 'server') {
      this.options.totalRows -= 1
      this.data = [...this.options.data]
    }

    this.initSearch()
    this.initPagination()
    this.initBody(true)
  },

  _updateCellOnly (field, index) {
    if (index === -1) {
      return
    }

    const rowHtml = this.initRow(this.data[index], index)
    let fieldIndex = this.getVisibleFields().indexOf(field)

    if (fieldIndex === -1) {
      return
    }

    fieldIndex += Utils.getDetailViewIndexOffset(this.options)

    this.$body.find(`>tr[data-index=${index}]`)
      .find(`>td:eq(${fieldIndex})`)
      .replaceWith($(rowHtml).find(`>td:eq(${fieldIndex})`))

    this.initBodyEvent()
    this.initFooter()
    this.resetView()
    this.updateSelected()
  },

  updateCell (params) {
    if (!params.hasOwnProperty('index') ||
      !params.hasOwnProperty('field') ||
      !params.hasOwnProperty('value')) {
      return
    }
    const row = this.data[params.index]
    const originalIndex = this.options.data.indexOf(row)

    this.data[params.index][params.field] = params.value
    this.options.data[originalIndex][params.field] = params.value

    if (params.reinit === false) {
      this._updateCellOnly(params.field, params.index)
      return
    }
    this.initSort()
    this.initBody(true)
  },

  updateCellByUniqueId (params) {
    const allParams = Array.isArray(params) ? params : [params]

    allParams.forEach(({ id, field, value }) => {
      const row = this.getRowByUniqueId(id)
      const index = this.data.indexOf(row)
      const originalIndex = this.options.data.indexOf(row)

      if (!row || index === -1) {
        return
      }

      this.data[index][field] = value
      this.options.data[originalIndex][field] = value
    })

    if (params.reinit === false) {
      this._updateCellOnly(params.field,
        this.data.indexOf(this.getRowByUniqueId(params.id)))
      return
    }
    this.initSort()
    this.initBody(true)
  }
}
