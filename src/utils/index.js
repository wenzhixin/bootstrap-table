export default {
  getBootstrapVersion () {
    let bootstrapVersion = 5

    try {
      const rawVersion = $.fn.dropdown.Constructor.VERSION

      // Only try to parse VERSION if it is defined.
      // It is undefined in older versions of Bootstrap (tested with 3.1.1).
      if (rawVersion !== undefined) {
        bootstrapVersion = parseInt(rawVersion, 10)
      }
    } catch (e) {
      // ignore
    }

    try {
      // eslint-disable-next-line no-undef
      const rawVersion = bootstrap.Tooltip.VERSION

      if (rawVersion !== undefined) {
        bootstrapVersion = parseInt(rawVersion, 10)
      }
    } catch (e) {
      // ignore
    }

    return bootstrapVersion
  },

  getIconsPrefix (theme) {
    return {
      bootstrap3: 'glyphicon',
      bootstrap4: 'fa',
      bootstrap5: 'bi',
      'bootstrap-table': 'icon',
      bulma: 'fa',
      foundation: 'fa',
      materialize: 'material-icons',
      semantic: 'fa'
    }[theme] || 'fa'
  },

  getIcons (prefix) {
    return {
      glyphicon: {
        paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
        paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
        refresh: 'glyphicon-refresh icon-refresh',
        toggleOff: 'glyphicon-list-alt icon-list-alt',
        toggleOn: 'glyphicon-list-alt icon-list-alt',
        columns: 'glyphicon-th icon-th',
        detailOpen: 'glyphicon-plus icon-plus',
        detailClose: 'glyphicon-minus icon-minus',
        fullscreen: 'glyphicon-fullscreen',
        search: 'glyphicon-search',
        clearSearch: 'glyphicon-trash'
      },
      fa: {
        paginationSwitchDown: 'fa-caret-square-down',
        paginationSwitchUp: 'fa-caret-square-up',
        refresh: 'fa-sync',
        toggleOff: 'fa-toggle-off',
        toggleOn: 'fa-toggle-on',
        columns: 'fa-th-list',
        detailOpen: 'fa-plus',
        detailClose: 'fa-minus',
        fullscreen: 'fa-arrows-alt',
        search: 'fa-search',
        clearSearch: 'fa-trash'
      },
      bi: {
        paginationSwitchDown: 'bi-caret-down-square',
        paginationSwitchUp: 'bi-caret-up-square',
        refresh: 'bi-arrow-clockwise',
        toggleOff: 'bi-toggle-off',
        toggleOn: 'bi-toggle-on',
        columns: 'bi-list-ul',
        detailOpen: 'bi-plus',
        detailClose: 'bi-dash',
        fullscreen: 'bi-arrows-move',
        search: 'bi-search',
        clearSearch: 'bi-trash'
      },
      icon: {
        paginationSwitchDown: 'icon-arrow-up-circle',
        paginationSwitchUp: 'icon-arrow-down-circle',
        refresh: 'icon-refresh-cw',
        toggleOff: 'icon-toggle-right',
        toggleOn: 'icon-toggle-right',
        columns: 'icon-list',
        detailOpen: 'icon-plus',
        detailClose: 'icon-minus',
        fullscreen: 'icon-maximize',
        search: 'icon-search',
        clearSearch: 'icon-trash-2'
      },
      'material-icons': {
        paginationSwitchDown: 'grid_on',
        paginationSwitchUp: 'grid_off',
        refresh: 'refresh',
        toggleOff: 'tablet',
        toggleOn: 'tablet_android',
        columns: 'view_list',
        detailOpen: 'add',
        detailClose: 'remove',
        fullscreen: 'fullscreen',
        sort: 'sort',
        search: 'search',
        clearSearch: 'delete'
      }
    }[prefix]
  },

  getSearchInput (that) {
    if (typeof that.options.searchSelector === 'string') {
      return $(that.options.searchSelector)
    }
    return that.$toolbar.find('.search input')
  },

  // it only does '%s', and return '' when arguments are undefined
  sprintf (_str, ...args) {
    let flag = true
    let i = 0

    const str = _str.replace(/%s/g, () => {
      const arg = args[i++]

      if (typeof arg === 'undefined') {
        flag = false
        return ''
      }
      return arg
    })

    return flag ? str : ''
  },

  isObject (val) {
    return val instanceof Object && !Array.isArray(val)
  },

  isEmptyObject (obj = {}) {
    return Object.entries(obj).length === 0 && obj.constructor === Object
  },

  isNumeric (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  },

  getFieldTitle (list, value) {
    for (const item of list) {
      if (item.field === value) {
        return item.title
      }
    }
    return ''
  },

  setFieldIndex (columns) {
    let totalCol = 0
    const flag = []

    for (const column of columns[0]) {
      totalCol += column.colspan || 1
    }

    for (let i = 0; i < columns.length; i++) {
      flag[i] = []
      for (let j = 0; j < totalCol; j++) {
        flag[i][j] = false
      }
    }

    for (let i = 0; i < columns.length; i++) {
      for (const r of columns[i]) {
        const rowspan = r.rowspan || 1
        const colspan = r.colspan || 1
        const index = flag[i].indexOf(false)

        r.colspanIndex = index

        if (colspan === 1) {
          r.fieldIndex = index
          // when field is undefined, use index instead
          if (typeof r.field === 'undefined') {
            r.field = index
          }
        } else {
          r.colspanGroup = r.colspan
        }

        for (let j = 0; j < rowspan; j++) {
          for (let k = 0; k < colspan; k++) {
            flag[i + j][index + k] = true
          }
        }
      }
    }
  },

  normalizeAccent (value) {
    if (typeof value !== 'string') {
      return value
    }
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  },

  updateFieldGroup (columns, fieldColumns) {
    const allColumns = [].concat(...columns)

    for (const c of columns) {
      for (const r of c) {
        if (r.colspanGroup > 1) {
          let colspan = 0

          for (let i = r.colspanIndex; i < r.colspanIndex + r.colspanGroup; i++) {
            const column = allColumns.find(col => col.fieldIndex === i)

            if (column.visible) {
              colspan++
            }
          }
          r.colspan = colspan
          r.visible = colspan > 0
        }
      }
    }

    if (columns.length < 2) {
      return
    }

    for (const column of fieldColumns) {
      const sameColumns = allColumns.filter(col => col.fieldIndex === column.fieldIndex)

      if (sameColumns.length > 1) {
        for (const c of sameColumns) {
          c.visible = column.visible
        }
      }
    }
  },

  getScrollBarWidth () {
    if (this.cachedWidth === undefined) {
      const $inner = $('<div/>').addClass('fixed-table-scroll-inner')
      const $outer = $('<div/>').addClass('fixed-table-scroll-outer')

      $outer.append($inner)
      $('body').append($outer)

      const w1 = $inner[0].offsetWidth

      $outer.css('overflow', 'scroll')
      let w2 = $inner[0].offsetWidth

      if (w1 === w2) {
        w2 = $outer[0].clientWidth
      }

      $outer.remove()
      this.cachedWidth = w1 - w2
    }
    return this.cachedWidth
  },

  calculateObjectValue (self, name, args, defaultValue) {
    let func = name

    if (typeof name === 'string') {
      // support obj.func1.func2
      const names = name.split('.')

      if (names.length > 1) {
        func = window
        for (const f of names) {
          func = func[f]
        }
      } else {
        func = window[name]
      }
    }

    if (func !== null && typeof func === 'object') {
      return func
    }

    if (typeof func === 'function') {
      return func.apply(self, args || [])
    }

    if (
      !func &&
      typeof name === 'string' &&
      args &&
      this.sprintf(name, ...args)
    ) {
      return this.sprintf(name, ...args)
    }

    return defaultValue
  },

  compareObjects (objectA, objectB, compareLength) {
    const aKeys = Object.keys(objectA)
    const bKeys = Object.keys(objectB)

    if (compareLength && aKeys.length !== bKeys.length) {
      return false
    }

    for (const key of aKeys) {
      if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
        return false
      }
    }

    return true
  },

  regexCompare (value, search) {
    try {
      const regexpParts = search.match(/^\/(.*?)\/([gim]*)$/)

      if (value.toString().search(regexpParts ? new RegExp(regexpParts[1], regexpParts[2]) : new RegExp(search, 'gim')) !== -1) {
        return true
      }
    } catch (e) {
      return false
    }
    return false
  },

  escapeHTML (text) {
    if (!text) {
      return text
    }
    return text.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
  },

  unescapeHTML (text) {
    if (typeof text !== 'string' || !text) {
      return text
    }
    return text.toString()
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
  },

  removeHTML (text) {
    if (!text) {
      return text
    }
    return text.toString()
      .replace(/(<([^>]+)>)/ig, '')
      .replace(/&[#A-Za-z0-9]+;/gi, '')
      .trim()
  },

  getRealDataAttr (dataAttr) {
    for (const [attr, value] of Object.entries(dataAttr)) {
      const auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase()

      if (auxAttr !== attr) {
        dataAttr[auxAttr] = value
        delete dataAttr[attr]
      }
    }
    return dataAttr
  },

  getItemField (item, field, escape, columnEscape = undefined) {
    let value = item

    // use column escape if it is defined
    if (typeof columnEscape !== 'undefined') {
      escape = columnEscape
    }

    if (typeof field !== 'string' || item.hasOwnProperty(field)) {
      return escape ? this.escapeHTML(item[field]) : item[field]
    }

    const props = field.split('.')

    for (const p of props) {
      value = value && value[p]
    }
    return escape ? this.escapeHTML(value) : value
  },

  isIEBrowser () {
    return navigator.userAgent.includes('MSIE ') ||
      /Trident.*rv:11\./.test(navigator.userAgent)
  },

  findIndex (items, item) {
    for (const it of items) {
      if (JSON.stringify(it) === JSON.stringify(item)) {
        return items.indexOf(it)
      }
    }
    return -1
  },

  trToData (columns, $els) {
    const data = []
    const m = []

    $els.each((y, el) => {
      const $el = $(el)
      const row = {}

      // save tr's id, class and data-* attributes
      row._id = $el.attr('id')
      row._class = $el.attr('class')
      row._data = this.getRealDataAttr($el.data())
      row._style = $el.attr('style')

      $el.find('>td,>th').each((_x, el) => {
        const $el = $(el)
        const cspan = +$el.attr('colspan') || 1
        const rspan = +$el.attr('rowspan') || 1
        let x = _x

        // skip already occupied cells in current row
        for (; m[y] && m[y][x]; x++) {
          // ignore
        }

        // mark matrix elements occupied by current cell with true
        for (let tx = x; tx < x + cspan; tx++) {
          for (let ty = y; ty < y + rspan; ty++) {
            if (!m[ty]) { // fill missing rows
              m[ty] = []
            }
            m[ty][tx] = true
          }
        }

        const field = columns[x].field

        row[field] = $el.html().trim()
        // save td's id, class and data-* attributes
        row[`_${field}_id`] = $el.attr('id')
        row[`_${field}_class`] = $el.attr('class')
        row[`_${field}_rowspan`] = $el.attr('rowspan')
        row[`_${field}_colspan`] = $el.attr('colspan')
        row[`_${field}_title`] = $el.attr('title')
        row[`_${field}_data`] = this.getRealDataAttr($el.data())
        row[`_${field}_style`] = $el.attr('style')
      })
      data.push(row)
    })
    return data
  },

  sort (a, b, order, options, aPosition, bPosition) {
    if (a === undefined || a === null) {
      a = ''
    }
    if (b === undefined || b === null) {
      b = ''
    }

    if (options.sortStable && a === b) {
      a = aPosition
      b = bPosition
    }

    // If both values are numeric, do a numeric comparison
    if (this.isNumeric(a) && this.isNumeric(b)) {
      // Convert numerical values form string to float.
      a = parseFloat(a)
      b = parseFloat(b)
      if (a < b) {
        return order * -1
      }
      if (a > b) {
        return order
      }
      return 0
    }

    if (options.sortEmptyLast) {
      if (a === '') {
        return 1
      }

      if (b === '') {
        return -1
      }
    }

    if (a === b) {
      return 0
    }

    // If value is not a string, convert to string
    if (typeof a !== 'string') {
      a = a.toString()
    }

    if (a.localeCompare(b) === -1) {
      return order * -1
    }

    return order
  },

  getEventName (eventPrefix, id = '') {
    id = id || `${+new Date()}${~~(Math.random() * 1000000)}`
    return `${eventPrefix}-${id}`
  },

  hasDetailViewIcon (options) {
    return options.detailView && options.detailViewIcon && !options.cardView
  },

  getDetailViewIndexOffset (options) {
    return this.hasDetailViewIcon(options) && options.detailViewAlign !== 'right' ? 1 : 0
  },

  checkAutoMergeCells (data) {
    for (const row of data) {
      for (const key of Object.keys(row)) {
        if (key.startsWith('_') && (key.endsWith('_rowspan') || key.endsWith('_colspan'))) {
          return true
        }
      }
    }
    return false
  },

  deepCopy (arg) {
    if (arg === undefined) {
      return arg
    }
    return $.extend(true, Array.isArray(arg) ? [] : {}, arg)
  },

  debounce (func, wait, immediate) {
    let timeout

    return function executedFunction () {
      const context = this
      const args = arguments

      const later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }

      const callNow = immediate && !timeout

      clearTimeout(timeout)

      timeout = setTimeout(later, wait)

      if (callNow) func.apply(context, args)
    }
  }
}
