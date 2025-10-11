/**
 * @author: Dennis Hernández
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */
const Utils = $.fn.bootstrapTable.utils
const UtilsCookie = {
  cookieIds: {
    sortOrder: 'bs.table.sortOrder',
    sortName: 'bs.table.sortName',
    sortPriority: 'bs.table.sortPriority',
    pageNumber: 'bs.table.pageNumber',
    pageList: 'bs.table.pageList',
    hiddenColumns: 'bs.table.hiddenColumns',
    columns: 'bs.table.columns',
    cardView: 'bs.table.cardView',
    customView: 'bs.table.customView',
    searchText: 'bs.table.searchText',
    reorderColumns: 'bs.table.reorderColumns',
    filterControl: 'bs.table.filterControl',
    filterBy: 'bs.table.filterBy'
  },
  getCurrentHeader (that) {
    return that.options.height ? that.$tableHeader : that.$header
  },
  getCurrentSearchControls (that) {
    return that.options.height ? 'table select, table input' : 'select, input'
  },
  isCookieSupportedByBrowser () {
    return navigator.cookieEnabled
  },
  isCookieEnabled (that, cookieName) {
    if (cookieName === 'bs.table.columns') {
      return that.options.cookiesEnabled.includes('bs.table.hiddenColumns')
    }
    return that.options.cookiesEnabled.includes(cookieName)
  },
  setCookie (that, cookieName, cookieValue) {
    if (
      !that.options.cookie ||
      !UtilsCookie.isCookieEnabled(that, cookieName)
    ) {
      return
    }

    return that._storage.setItem(`${that.options.cookieIdTable}.${cookieName}`, cookieValue)
  },
  getCookie (that, cookieName) {
    if (
      !cookieName ||
      !UtilsCookie.isCookieEnabled(that, cookieName)
    ) {
      return null
    }

    return that._storage.getItem(`${that.options.cookieIdTable}.${cookieName}`)
  },
  deleteCookie (that, cookieName) {
    return that._storage.removeItem(`${that.options.cookieIdTable}.${cookieName}`)
  },
  calculateExpiration (cookieExpire) {
    const time = cookieExpire.replace(/[0-9]*/, '') // s,mi,h,d,m,y

    cookieExpire = cookieExpire.replace(/[A-Za-z]{1,2}/, '') // number

    switch (time.toLowerCase()) {
      case 's':
        cookieExpire = +cookieExpire
        break
      case 'mi':
        cookieExpire *= 60
        break
      case 'h':
        cookieExpire = cookieExpire * 60 * 60
        break
      case 'd':
        cookieExpire = cookieExpire * 24 * 60 * 60
        break
      case 'm':
        cookieExpire = cookieExpire * 30 * 24 * 60 * 60
        break
      case 'y':
        cookieExpire = cookieExpire * 365 * 24 * 60 * 60
        break
      default:
        cookieExpire = undefined
        break
    }
    if (!cookieExpire) {
      return ''
    }
    const d = new Date()

    d.setTime(d.getTime() + cookieExpire * 1000)
    return d.toGMTString()
  },
  initCookieFilters (that) {
    setTimeout(() => {
      const parsedCookieFilters = JSON.parse(
        UtilsCookie.getCookie(that, UtilsCookie.cookieIds.filterControl))

      if (!that._filterControlValuesLoaded && parsedCookieFilters) {
        const cachedFilters = {}
        const header = UtilsCookie.getCurrentHeader(that)
        const searchControls = UtilsCookie.getCurrentSearchControls(that)

        const applyCookieFilters = (element, filteredCookies) => {
          filteredCookies.forEach(cookie => {
            const value = element.value.toString()
            const text = cookie.text

            if (
              text === '' ||
              element.type === 'radio' &&
              value !== text
            ) {
              return
            }

            if (
              element.tagName === 'INPUT' &&
              element.type === 'radio' &&
              value === text
            ) {
              element.checked = true
              cachedFilters[cookie.field] = text
            } else if (element.tagName === 'INPUT') {
              element.value = text
              cachedFilters[cookie.field] = text
            } else if (
              element.tagName === 'SELECT' &&
              that.options.filterControlContainer
            ) {
              element.value = text
              cachedFilters[cookie.field] = text
            } else if (text !== '' && element.tagName === 'SELECT') {
              cachedFilters[cookie.field] = text
              for (const currentElement of element) {
                if (currentElement.value === text) {
                  currentElement.selected = true
                  return
                }
              }
              const option = document.createElement('option')

              option.value = text
              option.text = text
              element.add(option, element[1])
              element.selectedIndex = 1
            }
          })
        }

        let filterContainer = header

        if (that.options.filterControlContainer) {
          filterContainer = $(`${that.options.filterControlContainer}`)
        }

        filterContainer.find(searchControls).each(function () {
          const field = $(this).closest('[data-field]').data('field')
          const filteredCookies = parsedCookieFilters.filter(cookie => cookie.field === field)

          applyCookieFilters(this, filteredCookies)
        })

        that.initColumnSearch(cachedFilters)
        that._filterControlValuesLoaded = true
        that.initServer()
      }
    }, 250)
  }
}

Object.assign($.fn.bootstrapTable.defaults, {
  cookie: false,
  cookieExpire: '2h',
  cookiePath: null,
  cookieDomain: null,
  cookieSecure: null,
  cookieSameSite: 'Lax',
  cookieIdTable: '',
  cookiesEnabled: [
    'bs.table.sortOrder', 'bs.table.sortName', 'bs.table.sortPriority',
    'bs.table.pageNumber', 'bs.table.pageList',
    'bs.table.hiddenColumns', 'bs.table.searchText',
    'bs.table.filterControl', 'bs.table.filterBy',
    'bs.table.reorderColumns', 'bs.table.cardView', 'bs.table.customView'
  ],
  cookieStorage: 'cookieStorage', // localStorage, sessionStorage, customStorage
  cookieCustomStorageGet: null,
  cookieCustomStorageSet: null,
  cookieCustomStorageDelete: null,
  // internal variable
  _filterControls: [],
  _filterControlValuesLoaded: false,
  _storage: {
    setItem: undefined,
    getItem: undefined,
    removeItem: undefined
  }
})

$.fn.bootstrapTable.methods.push('getCookies')
$.fn.bootstrapTable.methods.push('deleteCookie')

Object.assign($.fn.bootstrapTable.utils, {
  setCookie: UtilsCookie.setCookie,
  getCookie: UtilsCookie.getCookie
})

$.BootstrapTable = class extends $.BootstrapTable {
  init () {
    if (this.options.cookie) {
      if (
        this.options.cookieStorage === 'cookieStorage' &&
        !UtilsCookie.isCookieSupportedByBrowser()
      ) {
        throw new Error('Cookies are not enabled in this browser.')
      }

      this.configureStorage()

      // FilterBy logic
      const filterByCookieValue = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.filterBy)

      if (typeof filterByCookieValue === 'boolean' && !filterByCookieValue) {
        throw new Error('The cookie value of filterBy must be a json!')
      }

      let filterByCookie = {}

      try {
        filterByCookie = JSON.parse(filterByCookieValue)
      } catch (e) {
        console.error(e)
        throw new Error('Could not parse the json of the filterBy cookie!')
      }
      this.filterColumns = filterByCookie ? filterByCookie : {}

      // FilterControl logic
      this._filterControls = []
      this._filterControlValuesLoaded = false

      this.options.cookiesEnabled = typeof this.options.cookiesEnabled === 'string' ?
        this.options.cookiesEnabled.replace('[', '').replace(']', '')
          .replace(/'/g, '').replace(/ /g, '').split(',') :
        this.options.cookiesEnabled

      if (this.options.filterControl) {
        this.$el.on('column-search.bs.table', (e, field, text) => {
          let isNewField = true

          for (let i = 0; i < this._filterControls.length; i++) {
            if (this._filterControls[i].field === field) {
              this._filterControls[i].text = text
              isNewField = false
              break
            }
          }
          if (isNewField) {
            this._filterControls.push({
              field,
              text
            })
          }

          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.filterControl, JSON.stringify(this._filterControls))
        }).on('created-controls.bs.table', UtilsCookie.initCookieFilters(this))
      }
    }
    super.init()
  }

  initServer (...args) {
    if (
      this.options.cookie &&
      this.options.filterControl &&
      !this._filterControlValuesLoaded
    ) {
      const cookie = JSON.parse(UtilsCookie.getCookie(this, UtilsCookie.cookieIds.filterControl))

      if (cookie) {
        return
      }
    }
    super.initServer(...args)
  }

  initTable (...args) {
    super.initTable(...args)
    this.initCookie()
  }

  onSort (...args) {
    super.onSort(...args)

    if (!this.options.cookie) {
      return
    }

    if (this.options.sortName === undefined || this.options.sortOrder === undefined) {
      UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortName)
      UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortOrder)
    } else {
      this.options.sortPriority = null
      UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortPriority)

      UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortOrder, this.options.sortOrder)
      UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortName, this.options.sortName)
    }
  }

  onMultipleSort (...args) {
    super.onMultipleSort(...args)

    if (!this.options.cookie) {
      return
    }

    if (this.options.sortPriority === undefined) {
      UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortPriority)
    } else {
      this.options.sortName = undefined
      this.options.sortOrder = undefined
      UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortName)
      UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortOrder)

      UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortPriority, JSON.stringify(this.options.sortPriority))
    }
  }

  onPageNumber (...args) {
    super.onPageNumber(...args)
    if (!this.options.cookie) {
      return
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  onPageListChange (...args) {
    super.onPageListChange(...args)
    if (!this.options.cookie) {
      return
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageList,
      this.options.pageSize === this.options.formatAllRows() ? 'all' : this.options.pageSize)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  onPagePre (...args) {
    super.onPagePre(...args)
    if (!this.options.cookie) {
      return
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  onPageNext (...args) {
    super.onPageNext(...args)
    if (!this.options.cookie) {
      return
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  _toggleColumn (...args) {
    super._toggleColumn(...args)
    if (!this.options.cookie) {
      return
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.hiddenColumns,
      JSON.stringify(this.getHiddenColumns().map(column => column.field)))
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.columns,
      JSON.stringify(this.columns.map(column => column.field)))
  }

  _toggleAllColumns (...args) {
    super._toggleAllColumns(...args)
    if (!this.options.cookie) {
      return
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.hiddenColumns,
      JSON.stringify(this.getHiddenColumns().map(column => column.field)))
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.columns,
      JSON.stringify(this.columns.map(column => column.field)))
  }

  toggleView () {
    super.toggleView()
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.cardView, this.options.cardView)
  }

  toggleCustomView () {
    super.toggleCustomView()
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.customView, this.customViewDefaultView)
  }

  selectPage (page) {
    super.selectPage(page)
    if (!this.options.cookie) {
      return
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, page)
  }

  onSearch (event) {
    super.onSearch(event, arguments.length > 1 ? arguments[1] : true)
    if (!this.options.cookie) {
      return
    }
    if (this.options.search) {
      UtilsCookie.setCookie(this, UtilsCookie.cookieIds.searchText, this.searchText)
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  initHeader (...args) {
    if (this.options.reorderableColumns && this.options.cookie) {
      if (this.columnsSortOrder) {
        this.options.columns[0] = this.reorderColumnsFromCookies(this.columnsSortOrder)
      }
      this.columnsSortOrder = JSON.parse(UtilsCookie.getCookie(this, UtilsCookie.cookieIds.reorderColumns))
    }
    super.initHeader(...args)
  }

  reorderColumnsFromCookies (reorderedColumns) {
    const reorderedList = []
    const notInReorderedList = []
    const reorderedKeys = Object.keys(reorderedColumns)

    this.options.columns[0].forEach(column => {
      if (reorderedKeys.includes(column.field)) {
        const fieldIndex = reorderedColumns[column.field] - 1

        reorderedList[fieldIndex] = column
      } else {
        notInReorderedList.push(column)
      }
    })

    let finalList = [...reorderedList, ...notInReorderedList]

    finalList = finalList.map((item, index) => {
      item.fieldIndex = index
      item.colspanIndex = index
      return item
    })

    return finalList
  }

  persistReorderColumnsState (that) {
    UtilsCookie.setCookie(that, UtilsCookie.cookieIds.reorderColumns, JSON.stringify(that.columnsSortOrder))
  }

  filterBy (...args) {
    super.filterBy(...args)
    if (!this.options.cookie) {
      return
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.filterBy, JSON.stringify(this.filterColumns))
  }

  initCookie () {
    if (!this.options.cookie) {
      return
    }

    if (this.options.cookieIdTable === '' || this.options.cookieExpire === '') {
      console.error('Configuration error. Please review the cookieIdTable and the cookieExpire property. If the properties are correct, then this browser does not support cookies.')
      this.options.cookie = false // Make sure that the cookie extension is disabled
      return
    }

    const sortOrderCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.sortOrder)
    const sortOrderNameCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.sortName)
    let sortPriorityCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.sortPriority)
    const pageNumberCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.pageNumber)
    const pageListCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.pageList)
    const searchTextCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.searchText)
    const cardViewCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.cardView)
    const customViewCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.customView)
    const hiddenColumnsCookieValue = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.hiddenColumns)
    const columnsCookieValue = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.columns)

    let hiddenColumnsCookie = {}
    let columnsCookie = {}

    try {
      hiddenColumnsCookie = JSON.parse(hiddenColumnsCookieValue)
      columnsCookie = JSON.parse(columnsCookieValue)
    } catch (e) {
      console.error(e)
      throw new Error('Could not parse the json of the columns cookie!')
    }

    try {
      sortPriorityCookie = JSON.parse(sortPriorityCookie)
    } catch (e) {
      console.error(e)
      throw new Error('Could not parse the json of the sortPriority cookie!', sortPriorityCookie)
    }

    if (!sortPriorityCookie) {
      // sortOrder
      this.options.sortOrder = sortOrderCookie ? sortOrderCookie : this.options.sortOrder
      // sortName
      this.options.sortName = sortOrderNameCookie ? sortOrderNameCookie : this.options.sortName
    } else {
      this.options.sortOrder = undefined
      this.options.sortName = undefined
    }

    // sortPriority
    this.options.sortPriority = sortPriorityCookie ? sortPriorityCookie : this.options.sortPriority

    if (this.options.sortOrder || this.options.sortName) {
      // sortPriority
      this.options.sortPriority = null
    }

    // pageNumber
    this.options.pageNumber = pageNumberCookie ? +pageNumberCookie : this.options.pageNumber
    // pageSize
    this.options.pageSize = pageListCookie ? pageListCookie === 'all' ?
      this.options.formatAllRows() : +pageListCookie : this.options.pageSize
    // searchText
    if (UtilsCookie.isCookieEnabled(this, UtilsCookie.cookieIds.searchText) && this.options.searchText === '') {
      this.options.searchText = searchTextCookie ? searchTextCookie : ''
    }
    // cardView
    if (cardViewCookie !== null) {
      this.options.cardView = cardViewCookie === 'true' ? cardViewCookie : false
    }
    this.customViewDefaultView = customViewCookie === 'true'

    if (hiddenColumnsCookie) {
      columnsCookie = columnsCookie || this.columns.map(column => column.field)

      for (const column of this.columns) {
        if (
          !column.switchable ||
          !columnsCookie.includes(column.field)
        ) {
          continue
        }

        column.visible = this.isSelectionColumn(column) ||
          !hiddenColumnsCookie.includes(column.field)
      }
    }
  }

  getCookies () {
    const cookies = {}

    for (const [key, value] of Object.entries(UtilsCookie.cookieIds)) {
      cookies[key] = UtilsCookie.getCookie(this, value)
      if (['columns', 'hiddenColumns', 'sortPriority'].includes(key)) {
        cookies[key] = JSON.parse(cookies[key])
      }
    }
    return cookies
  }

  deleteCookie (cookieName) {
    if (!cookieName || !this.options.cookie) {
      return
    }

    UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds[cookieName])
  }

  configureStorage () {
    this._storage = {}
    switch (this.options.cookieStorage) {
      case 'cookieStorage':
        this._storage.setItem = (cookieName, cookieValue) => {
          document.cookie = [
            cookieName, '=', encodeURIComponent(cookieValue),
            `; expires=${UtilsCookie.calculateExpiration(this.options.cookieExpire)}`,
            this.options.cookiePath ? `; path=${this.options.cookiePath}` : '',
            this.options.cookieDomain ? `; domain=${this.options.cookieDomain}` : '',
            this.options.cookieSecure ? '; secure' : '',
            `;SameSite=${this.options.cookieSameSite}`
          ].join('')
        }
        this._storage.getItem = cookieName => {
          const value = `; ${document.cookie}`
          const parts = value.split(`; ${cookieName}=`)

          return parts.length === 2 ? decodeURIComponent(parts.pop().split(';').shift()) : null
        }
        this._storage.removeItem = cookieName => {
          document.cookie = [
            encodeURIComponent(cookieName), '=',
            '; expires=Thu, 01 Jan 1970 00:00:00 GMT',
            this.options.cookiePath ? `; path=${this.options.cookiePath}` : '',
            this.options.cookieDomain ? `; domain=${this.options.cookieDomain}` : '',
            `;SameSite=${this.options.cookieSameSite}`
          ].join('')
        }
        break
      case 'localStorage':
        this._storage.setItem = (cookieName, cookieValue) => {
          localStorage.setItem(cookieName, cookieValue)
        }
        this._storage.getItem = cookieName => localStorage.getItem(cookieName)
        this._storage.removeItem = cookieName => {
          localStorage.removeItem(cookieName)
        }
        break
      case 'sessionStorage':
        this._storage.setItem = (cookieName, cookieValue) => {
          sessionStorage.setItem(cookieName, cookieValue)
        }
        this._storage.getItem = cookieName => sessionStorage.getItem(cookieName)
        this._storage.removeItem = cookieName => {
          sessionStorage.removeItem(cookieName)
        }
        break
      case 'customStorage':
        if (
          !this.options.cookieCustomStorageSet ||
          !this.options.cookieCustomStorageGet ||
          !this.options.cookieCustomStorageDelete
        ) {
          throw new Error('The following options must be set while using the customStorage: cookieCustomStorageSet, cookieCustomStorageGet and cookieCustomStorageDelete')
        }

        this._storage.setItem = (cookieName, cookieValue) => {
          Utils.calculateObjectValue(this.options, this.options.cookieCustomStorageSet, [cookieName, cookieValue], '')
        }
        this._storage.getItem = cookieName => Utils.calculateObjectValue(this.options, this.options.cookieCustomStorageGet, [cookieName], '')
        this._storage.removeItem = cookieName => {
          Utils.calculateObjectValue(this.options, this.options.cookieCustomStorageDelete, [cookieName], '')
        }
        break
      default:
        throw new Error('Storage method not supported.')
    }
  }
}
