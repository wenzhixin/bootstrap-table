export default {
  getBootstrapVersion () {
    let bootstrapVersion = 5

    if (typeof window !== 'undefined' && window.bootstrap?.Tooltip?.VERSION) {
      const rawVersion = window.bootstrap.Tooltip.VERSION

      if (rawVersion !== undefined) {
        bootstrapVersion = parseInt(rawVersion, 10)
      }
    } else if (typeof $ !== 'undefined' && $.fn?.dropdown?.Constructor?.VERSION) {
      const rawVersion = $.fn.dropdown.Constructor.VERSION

      // Only try to parse VERSION if it is defined.
      // It is undefined in older versions of Bootstrap (tested with 3.1.1).
      if (rawVersion !== undefined) {
        bootstrapVersion = parseInt(rawVersion, 10)
      }
    }

    return bootstrapVersion
  },

  /**
   * Returns the prefix for the icons based on the theme.
   *
   * @param {string} theme - The theme name (bootstrap3, bootstrap4, bootstrap5, bootstrap-table, bulma, foundation, materialize, semantic).
   * @returns {string} The icons prefix.
   */
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

  /**
   * Gets the icons for a given prefix.
   *
   * @param {Object.<string, Object>} icons - The icons object.
   * @param {string} prefix - The prefix. For example, 'fa', 'bi', etc.
   * @return {Object} The icons object for the given prefix.
   */
  getIcons (icons, prefix) {
    return icons[prefix] || {}
  },

  /**
   * Assigns new icons to icons object.
   *
   * @param {Object.<string, Object>} icons - The icons object.
   * @param {string} icon - The icon name. For example, 'search', 'refresh', etc.
   * @param {Object.<string, string>} values - The values object.
   */
  assignIcons (icons, icon, values) {
    for (const key of Object.keys(icons)) {
      icons[key][icon] = values[key]
    }
  },

  getSearchInput (that) {
    if (typeof that.options.searchSelector === 'string') {
      return $(that.options.searchSelector)
    }
    return that.$toolbar.find('.search input')
  },

  // $.extend: https://github.com/jquery/jquery/blob/3.6.2/src/core.js#L132
  extend (...args) {
    let target = args[0] || {}
    let i = 1
    let deep = false
    let clone

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target

      // Skip the boolean and the target
      target = args[i] || {}
      i++
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object' && typeof target !== 'function') {
      target = {}
    }

    for (; i < args.length; i++) {
      const options = args[i]

      // Ignore undefined/null values
      if (typeof options === 'undefined' || options === null) {
        continue
      }

      // Extend the base object
      // eslint-disable-next-line guard-for-in
      for (const name in options) {
        const copy = options[name]

        // Prevent Object.prototype pollution
        // Prevent never-ending loop
        if (name === '__proto__' || target === copy) {
          continue
        }

        const copyIsArray = Array.isArray(copy)

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (this.isObject(copy) || copyIsArray)) {
          const src = target[name]

          if (copyIsArray && Array.isArray(src)) {
            if (src.every(it => !this.isObject(it) && !Array.isArray(it))) {
              target[name] = copy
              continue
            }
          }

          if (copyIsArray && !Array.isArray(src)) {
            clone = []
          } else if (!copyIsArray && !this.isObject(src)) {
            clone = {}
          } else {
            clone = src
          }

          // Never move original objects, clone them
          target[name] = this.extend(deep, clone, copy)

        // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }

    return target
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

  isObject (obj) {
    if (typeof obj !== 'object' || obj === null) {
      return false
    }

    let proto = obj

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto)
    }

    return Object.getPrototypeOf(obj) === proto
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
      totalCol += +column.colspan || 1
    }

    for (let i = 0; i < columns.length; i++) {
      flag[i] = []
      for (let j = 0; j < totalCol; j++) {
        flag[i][j] = false
      }
    }

    for (let i = 0; i < columns.length; i++) {
      for (const r of columns[i]) {
        const rowspan = +r.rowspan || 1
        const colspan = +r.colspan || 1
        const index = flag[i].indexOf(false)

        r.colspanIndex = index

        if (colspan === 1) {
          r.fieldIndex = index
          // when field is undefined, use index instead
          if (typeof r.field === 'undefined') {
            r.field = index
          }
        } else {
          r.colspanGroup = +r.colspan
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
            const underColumns = allColumns.filter(col => col.fieldIndex === i)
            const column = underColumns[underColumns.length - 1]

            if (underColumns.length > 1) {
              for (let j = 0; j < underColumns.length - 1; j++) {
                underColumns[j].visible = column.visible
              }
            }

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
      console.error(e)
      return false
    }
    return false
  },

  escapeApostrophe (value) {
    return value.toString()
      .replace(/'/g, '&#39;')
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
        const colspan = +$el.attr('colspan') || 1
        const rowspan = +$el.attr('rowspan') || 1
        let x = _x

        // skip already occupied cells in current row
        for (; m[y] && m[y][x]; x++) {
          // ignore
        }

        // mark matrix elements occupied by current cell with true
        for (let tx = x; tx < x + colspan; tx++) {
          for (let ty = y; ty < y + rowspan; ty++) {
            if (!m[ty]) { // fill missing rows
              m[ty] = []
            }
            m[ty][tx] = true
          }
        }

        const field = columns[x].field

        row[field] = this.escapeApostrophe($el.html().trim())
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
    return this.extend(true, Array.isArray(arg) ? [] : {}, arg)
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
  },

  replaceSearchMark (html, searchText) {
    const isDom = html instanceof Element
    const node = isDom ? html : document.createElement('div')
    const regExp = new RegExp(searchText, 'gim')
    const replaceTextWithDom = (text, regExp) => {
      const result = []
      let match
      let lastIndex = 0

      while ((match = regExp.exec(text)) !== null) {
        if (lastIndex !== match.index) {
          result.push(document.createTextNode(text.substring(lastIndex, match.index)))
        }
        const mark = document.createElement('mark')

        mark.innerText = match[0]
        result.push(mark)
        lastIndex = match.index + match[0].length
      }
      if (!result.length) {
        // no match
        return
      }
      if (lastIndex !== text.length) {
        result.push(document.createTextNode(text.substring(lastIndex)))
      }
      return result
    }
    const replaceMark = node => {
      for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i]

        if (child.nodeType === document.TEXT_NODE) {
          const elements = replaceTextWithDom(child.data, regExp)

          if (elements) {
            for (const el of elements) {
              node.insertBefore(el, child)
            }
            node.removeChild(child)
            i += elements.length - 1
          }
        }
        if (child.nodeType === document.ELEMENT_NODE) {
          replaceMark(child)
        }
      }
    }

    if (!isDom) {
      node.innerHTML = html
    }
    replaceMark(node)
    return isDom ? node : node.innerHTML
  },

  classToString (class_) {
    if (typeof class_ === 'string') {
      return class_
    }
    if (Array.isArray(class_)) {
      return class_.map(x => this.classToString(x)).filter(x => x).join(' ')
    }
    if (class_ && typeof class_ === 'object') {
      return Object.entries(class_).map(([k, v]) => v ? k : '').filter(x => x).join(' ')
    }
    return ''
  },

  parseStyle (dom, style) {
    if (!style) {
      return dom
    }
    if (typeof style === 'string') {
      style.split(';').forEach(i => {
        const index = i.indexOf(':')

        if (index > 0) {
          const k = i.substring(0, index).trim()
          const v = i.substring(index + 1).trim()

          dom.style.setProperty(k, v)
        }
      })
    } else if (Array.isArray(style)) {
      for (const item of style) {
        this.parseStyle(dom, item)
      }
    } else if (typeof style === 'object') {
      for (const [k, v] of Object.entries(style)) {
        dom.style.setProperty(k, v)
      }
    }
    return dom
  },

  h (element, attrs, children) {
    const el = element instanceof HTMLElement ? element : document.createElement(element)
    const _attrs = attrs || {}
    const _children = children || []

    // default attributes
    if (el.tagName === 'A') {
      el.href = 'javascript:'
    }

    for (const [k, v] of Object.entries(_attrs)) {
      if (v === undefined) {
        continue
      }
      if (['text', 'innerText'].includes(k)) {
        el.innerText = v
      } else if (['html', 'innerHTML'].includes(k)) {
        el.innerHTML = v
      } else if (k === 'children') {
        _children.push(...v)
      } else if (k === 'class') {
        el.setAttribute('class', this.classToString(v))
      } else if (k === 'style') {
        if (typeof v === 'string') {
          el.setAttribute('style', v)
        } else {
          this.parseStyle(el, v)
        }
      } else if (k.startsWith('@') || k.startsWith('on')) {
        // event handlers
        const event = k.startsWith('@') ? k.substring(1) : k.substring(2).toLowerCase()
        const args = Array.isArray(v) ? v : [v]

        el.addEventListener(event, ...args)
      } else if (k.startsWith('.')) {
        // set property
        el[k.substring(1)] = v
      } else {
        el.setAttribute(k, v)
      }
    }
    if (_children.length) {
      el.append(..._children)
    }
    return el
  },

  htmlToNodes (html) {
    if (html instanceof $) {
      return html.get()
    }
    if (html instanceof Node) {
      return [html]
    }
    if (typeof html !== 'string') {
      html = new String(html).toString()
    }
    const d = document.createElement('div')

    d.innerHTML = html
    return d.childNodes
  },

  addQueryToUrl (url, query) {
    const hashArray = url.split('#')
    const [baseUrl, search] = hashArray[0].split('?')
    const urlParams = new URLSearchParams(search)

    for (const [key, value] of Object.entries(query)) {
      urlParams.set(key, value)
    }
    return `${baseUrl}?${urlParams.toString()}#${hashArray.slice(1).join('#')}`
  }
}
