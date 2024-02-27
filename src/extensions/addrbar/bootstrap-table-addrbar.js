/**
 * @author: general
 * @website: note.generals.space
 * @email: generals.space@gmail.com
 * @github: https://github.com/generals-space/bootstrap-table-addrbar
 * @update: zhixin wen <wenzhixin2010@gmail.com>
 */

Object.assign($.fn.bootstrapTable.defaults, {
  addrbar: false,
  addrPrefix: ''
})

$.BootstrapTable = class extends $.BootstrapTable {
  init (...args) {
    if (
      this.options.pagination &&
      this.options.addrbar
    ) {
      this.initAddrbar()
    }
    super.init(...args)
  }

  /*
   * Priority order:
   * The value specified by the user has the highest priority.
   * If it is not specified, it will be obtained from the address bar.
   * If it is not obtained, the default value will be used.
   */
  getDefaultOptionValue (optionName, prefixName) {
    if (this.options[optionName] !== $.BootstrapTable.DEFAULTS[optionName]) {
      return this.options[optionName]
    }

    return this.searchParams.get(`${this.options.addrPrefix || ''}${prefixName}`) ||
      $.BootstrapTable.DEFAULTS[optionName]
  }

  initAddrbar () {
    // 标志位, 初始加载后关闭
    this.addrbarInit = true

    this.searchParams = new URLSearchParams(window.location.search.substring(1))
    this.options.pageNumber = +this.getDefaultOptionValue('pageNumber', 'page')
    this.options.pageSize = +this.getDefaultOptionValue('pageSize', 'size')
    this.options.sortOrder = this.getDefaultOptionValue('sortOrder', 'order')
    this.options.sortName = this.getDefaultOptionValue('sortName', 'sort')
    this.options.searchText = this.getDefaultOptionValue('searchText', 'search')

    const prefix = this.options.addrPrefix || ''
    const onLoadSuccess = this.options.onLoadSuccess
    const onPageChange = this.options.onPageChange

    this.options.onLoadSuccess = data => {
      if (this.addrbarInit) {
        this.addrbarInit = false
      } else {
        this.updateHistoryState(prefix)
      }

      if (onLoadSuccess) {
        onLoadSuccess.call(this, data)
      }
    }
    this.options.onPageChange = (number, size) => {
      this.updateHistoryState(prefix)

      if (onPageChange) {
        onPageChange.call(this, number, size)
      }
    }
  }

  updateHistoryState (prefix) {
    const params = {}

    params[`${prefix}page`] = this.options.pageNumber
    params[`${prefix}size`] = this.options.pageSize
    params[`${prefix}order`] = this.options.sortOrder
    params[`${prefix}sort`] = this.options.sortName
    params[`${prefix}search`] = this.options.searchText

    for (const [key, value] of Object.entries(params)) {
      if (value === undefined) {
        this.searchParams.delete(key)
      } else {
        this.searchParams.set(key, value)
      }
    }

    let url = `?${this.searchParams.toString()}`

    if (location.hash) {
      url += location.hash
    }

    window.history.pushState({}, '', url)
  }

  resetSearch (text) {
    super.resetSearch(text)
    this.options.searchText = text || ''
  }
}
