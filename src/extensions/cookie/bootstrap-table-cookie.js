/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */
const Utils = $.fn.bootstrapTable.utils
const UtilsCookie = {
  cookieIds: {
    sortOrder: 'bs.table.sortOrder',
    sortName: 'bs.table.sortName',
    pageNumber: 'bs.table.pageNumber',
    pageList: 'bs.table.pageList',
    columns: 'bs.table.columns',
    searchText: 'bs.table.searchText',
    reorderColumns: 'bs.table.reorderColumns',
    filterControl: 'bs.table.filterControl',
    filterBy: 'bs.table.filterBy'
  },
  getCurrentHeader (that) {
    let header = that.$header
    if (that.options.height) {
      header = that.$tableHeader
    }

    return header
  },
  getCurrentSearchControls (that) {
    let searchControls = 'select, input'
    if (that.options.height) {
      searchControls = 'table select, table input'
    }

    return searchControls
  },
  cookieEnabled () {
    return !!(navigator.cookieEnabled)
  },
  inArrayCookiesEnabled (cookieName, cookiesEnabled) {
    let index = -1

    for (let i = 0; i < cookiesEnabled.length; i++) {
      if (cookieName.toLowerCase() === cookiesEnabled[i].toLowerCase()) {
        index = i
        break
      }
    }

    return index
  },
  setCookie (that, cookieName, cookieValue) {
    if ((!that.options.cookie) || (!UtilsCookie.cookieEnabled()) || (that.options.cookieIdTable === '')) {
      return
    }

    if (UtilsCookie.inArrayCookiesEnabled(cookieName, that.options.cookiesEnabled) === -1) {
      return
    }

    cookieName = `${that.options.cookieIdTable}.${cookieName}`

    switch (that.options.cookieStorage) {
      case 'cookieStorage':
        document.cookie = [
          cookieName, '=', encodeURIComponent(cookieValue),
          `; expires=${UtilsCookie.calculateExpiration(that.options.cookieExpire)}`,
          that.options.cookiePath ? `; path=${that.options.cookiePath}` : '',
          that.options.cookieDomain ? `; domain=${that.options.cookieDomain}` : '',
          that.options.cookieSecure ? '; secure' : ''
        ].join('')
        break
      case 'localStorage':
        localStorage.setItem(cookieName, cookieValue)
        break
      case 'sessionStorage':
        sessionStorage.setItem(cookieName, cookieValue)
        break
      case 'customStorage':
        if (
          !that.options.cookieCustomStorageSet
          || !that.options.cookieCustomStorageGet
          || !that.options.cookieCustomStorageDelete
        ) {
          throw new Error('The following options must be set while using the customStorage: cookieCustomStorageSet, cookieCustomStorageGet and cookieCustomStorageDelete')
        }

        Utils.calculateObjectValue(that.options, that.options.cookieCustomStorageSet, [cookieName, cookieValue], '')
        break
      default:
        return false
    }

    return true
  },
  getCookie (that, tableName, cookieName) {
    if (!cookieName) {
      return null
    }

    if (UtilsCookie.inArrayCookiesEnabled(cookieName, that.options.cookiesEnabled) === -1) {
      return null
    }

    cookieName = `${tableName}.${cookieName}`

    switch (that.options.cookieStorage) {
      case 'cookieStorage':
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${cookieName}=`)
        return parts.length === 2 ? decodeURIComponent(parts.pop().split(';').shift()) : null
      case 'localStorage':
        return localStorage.getItem(cookieName)
      case 'sessionStorage':
        return sessionStorage.getItem(cookieName)
      case 'customStorage':
        if (
          !that.options.cookieCustomStorageSet
          || !that.options.cookieCustomStorageGet
          || !that.options.cookieCustomStorageDelete
        ) {
          throw new Error('The following options must be set while using the customStorage: cookieCustomStorageSet, cookieCustomStorageGet and cookieCustomStorageDelete')
        }

        return Utils.calculateObjectValue(that.options, that.options.cookieCustomStorageGet, [cookieName], '')
      default:
        return null
    }
  },
  deleteCookie (that, tableName, cookieName) {
    cookieName = `${tableName}.${cookieName}`

    switch (that.options.cookieStorage) {
      case 'cookieStorage':
        document.cookie = [
          encodeURIComponent(cookieName), '=',
          '; expires=Thu, 01 Jan 1970 00:00:00 GMT',
          that.options.cookiePath ? `; path=${that.options.cookiePath}` : '',
          that.options.cookieDomain ? `; domain=${that.options.cookieDomain}` : ''
        ].join('')
        break
      case 'localStorage':
        localStorage.removeItem(cookieName)
        break
      case 'sessionStorage':
        sessionStorage.removeItem(cookieName)
        break
      case 'customStorage':
        if (
          !that.options.cookieCustomStorageSet
          || !that.options.cookieCustomStorageGet
          || !that.options.cookieCustomStorageDelete
        ) {
          throw new Error('The following options must be set while using the customStorage: cookieCustomStorageSet, cookieCustomStorageGet and cookieCustomStorageDelete')
        }

        Utils.calculateObjectValue(that.options, that.options.cookieCustomStorageDelete, [cookieName], '')
        break
      default:
        return false
    }
    return true
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
  initCookieFilters (bootstrapTable) {
    setTimeout(() => {
      const parsedCookieFilters = JSON.parse(UtilsCookie.getCookie(bootstrapTable, bootstrapTable.options.cookieIdTable, UtilsCookie.cookieIds.filterControl))

      if (!bootstrapTable.options.filterControlValuesLoaded && parsedCookieFilters) {

        const cachedFilters = {}
        const header = UtilsCookie.getCurrentHeader(bootstrapTable)
        const searchControls = UtilsCookie.getCurrentSearchControls(bootstrapTable)

        const applyCookieFilters = (element, filteredCookies) => {
          filteredCookies.forEach(cookie => {
            if (cookie.text === '' || (element.type === 'radio' && element.value.toString() !== cookie.text.toString())) {
              return
            }

            if (element.tagName === 'INPUT' && element.type === 'radio' && element.value.toString() === cookie.text.toString()) {
              element.checked = true
              cachedFilters[cookie.field] = cookie.text
            } else if (element.tagName === 'INPUT') {
              element.value = cookie.text
              cachedFilters[cookie.field] = cookie.text
            } else if (element.tagName === 'SELECT' && bootstrapTable.options.filterControlContainer) {
              element.value = cookie.text
              cachedFilters[cookie.field] = cookie.text
            } else if (cookie.text !== '' && element.tagName === 'SELECT') {
              for (let i = 0; i < element.length; i++) {
                const currentElement = element[i]
                if (currentElement.value === cookie.text) {
                  currentElement.selected = true
                  return
                }
              }
              const option = document.createElement('option')
              option.value = cookie.text
              option.text = cookie.text
              element.add(option, element[1])
              element.selectedIndex = 1
              cachedFilters[cookie.field] = cookie.text
            }
          })
        }

        let filterContainer = header
        if (bootstrapTable.options.filterControlContainer) {
          filterContainer = $(`${bootstrapTable.options.filterControlContainer}`)
        }

        filterContainer.find(searchControls).each(function () {
          const field = $(this).closest('[data-field]').data('field')
          const filteredCookies = parsedCookieFilters.filter(cookie => cookie.field === field)

          applyCookieFilters(this, filteredCookies)
        })

        bootstrapTable.initColumnSearch(cachedFilters)
        bootstrapTable.options.filterControlValuesLoaded = true
        bootstrapTable.initServer()
      }
    }, 250)
  }
}

$.extend($.fn.bootstrapTable.defaults, {
  cookie: false,
  cookieExpire: '2h',
  cookiePath: null,
  cookieDomain: null,
  cookieSecure: null,
  cookieIdTable: '',
  cookiesEnabled: [
    'bs.table.sortOrder', 'bs.table.sortName',
    'bs.table.pageNumber', 'bs.table.pageList',
    'bs.table.columns', 'bs.table.searchText',
    'bs.table.filterControl', 'bs.table.filterBy',
    'bs.table.reorderColumns'
  ],
  cookieStorage: 'cookieStorage', // localStorage, sessionStorage, customStorage
  cookieCustomStorageGet: null,
  cookieCustomStorageSet: null,
  cookieCustomStorageDelete: null,
  // internal variable
  filterControls: [],
  filterControlValuesLoaded: false
})

$.fn.bootstrapTable.methods.push('getCookies')
$.fn.bootstrapTable.methods.push('deleteCookie')

$.extend($.fn.bootstrapTable.utils, {
  setCookie: UtilsCookie.setCookie,
  getCookie: UtilsCookie.getCookie
})

$.BootstrapTable = class extends $.BootstrapTable {
  init () {
    if (this.options.cookie) {
      // FilterBy logic
      const filterByCookieValue = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.filterBy)
      if (typeof filterByCookieValue === 'boolean' && !filterByCookieValue) {
        throw new Error('The cookie value of filterBy must be a json!')
      }

      let filterByCookie = {}
      try {
        filterByCookie = JSON.parse(filterByCookieValue)
      } catch (e) {
        throw new Error('Could not parse the json of the filterBy cookie!')
      }
      this.filterColumns = filterByCookie ? filterByCookie : {}

      // FilterControl logic
      this.options.filterControls = []
      this.options.filterControlValuesLoaded = false

      this.options.cookiesEnabled = typeof this.options.cookiesEnabled === 'string' ?
        this.options.cookiesEnabled.replace('[', '').replace(']', '')
          .replace(/'/g, '').replace(/ /g, '').toLowerCase().split(',') :
        this.options.cookiesEnabled

      if (this.options.filterControl) {
        const that = this
        this.$el.on('column-search.bs.table', (e, field, text) => {
          let isNewField = true

          for (let i = 0; i < that.options.filterControls.length; i++) {
            if (that.options.filterControls[i].field === field) {
              that.options.filterControls[i].text = text
              isNewField = false
              break
            }
          }
          if (isNewField) {
            that.options.filterControls.push({
              field,
              text
            })
          }

          UtilsCookie.setCookie(that, UtilsCookie.cookieIds.filterControl, JSON.stringify(that.options.filterControls))
        }).on('created-controls.bs.table', UtilsCookie.initCookieFilters(that))
      }
    }
    super.init()
  }

  initServer (...args) {
    if (
      this.options.cookie &&
      this.options.filterControl &&
      !this.options.filterControlValuesLoaded
    ) {
      const cookie = JSON.parse(UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.filterControl))
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
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortOrder, this.options.sortOrder)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortName, this.options.sortName)
  }

  onPageNumber (...args) {
    super.onPageNumber(...args)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  onPageListChange (...args) {
    super.onPageListChange(...args)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageList, this.options.pageSize)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  onPagePre (...args) {
    super.onPagePre(...args)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  onPageNext (...args) {
    super.onPageNext(...args)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  _toggleColumn (...args) {
    super._toggleColumn(...args)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.columns, JSON.stringify(this.getVisibleColumns()))
  }

  _toggleAllColumns (...args) {
    super._toggleAllColumns(...args)

    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.columns, JSON.stringify(this.getVisibleColumns()))
  }

  selectPage (page) {
    super.selectPage(page)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, page)
  }

  onSearch (event) {
    super.onSearch(event)

    if (this.options.search) {
      UtilsCookie.setCookie(this, UtilsCookie.cookieIds.searchText, this.searchText)
    }
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber)
  }

  initHeader (...args) {
    if (this.options.reorderableColumns) {
      this.columnsSortOrder = JSON.parse(UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.reorderColumns))
    }
    super.initHeader(...args)
  }

  persistReorderColumnsState (that) {
    UtilsCookie.setCookie(that, UtilsCookie.cookieIds.reorderColumns, JSON.stringify(that.columnsSortOrder))
  }

  filterBy (...args) {
    super.filterBy(...args)
    UtilsCookie.setCookie(this, UtilsCookie.cookieIds.filterBy, JSON.stringify(this.filterColumns))
  }

  initCookie () {
    if (!this.options.cookie) {
      return
    }

    if ((this.options.cookieIdTable === '') || (this.options.cookieExpire === '') || (!UtilsCookie.cookieEnabled())) {
      console.error('Configuration error. Please review the cookieIdTable and the cookieExpire property. If the properties are correct, then this browser does not support cookies.')
      this.options.cookie = false // Make sure that the cookie extension is disabled
      return
    }

    const sortOrderCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.sortOrder)
    const sortOrderNameCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.sortName)
    const pageNumberCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.pageNumber)
    const pageListCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.pageList)
    const searchTextCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.searchText)

    const columnsCookieValue = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.columns)
    if (typeof columnsCookieValue === 'boolean' && !columnsCookieValue) {
      throw new Error('The cookie value of filterBy must be a json!')
    }

    let columnsCookie = {}
    try {
      columnsCookie = JSON.parse(columnsCookieValue)
    } catch (e) {
      throw new Error('Could not parse the json of the columns cookie!', columnsCookieValue)
    }

    // sortOrder
    this.options.sortOrder = sortOrderCookie ? sortOrderCookie : this.options.sortOrder
    // sortName
    this.options.sortName = sortOrderNameCookie ? sortOrderNameCookie : this.options.sortName
    // pageNumber
    this.options.pageNumber = pageNumberCookie ? +pageNumberCookie : this.options.pageNumber
    // pageSize
    this.options.pageSize = pageListCookie ? pageListCookie === this.options.formatAllRows() ? pageListCookie : +pageListCookie : this.options.pageSize
    // searchText
    this.options.searchText = searchTextCookie ? searchTextCookie : ''

    if (columnsCookie) {
      for (const column of this.columns) {
        column.visible = columnsCookie.filter((c) => { return c.field === column.field }).length > 0 || !column.switchable
      }
    }
  }

  getCookies () {
    const bootstrapTable = this
    const cookies = {}
    $.each(UtilsCookie.cookieIds, (key, value) => {
      cookies[key] = UtilsCookie.getCookie(bootstrapTable, bootstrapTable.options.cookieIdTable, value)
      if (key === 'columns') {
        cookies[key] = JSON.parse(cookies[key])
      }
    })
    return cookies
  }

  deleteCookie (cookieName) {
    if ((cookieName === '') || (!UtilsCookie.cookieEnabled())) {
      return
    }

    UtilsCookie.deleteCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds[cookieName])
  }
}
