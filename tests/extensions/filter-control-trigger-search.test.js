import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Utils from '@/utils/index.js'

// The filter-control extension is written as a classic jQuery plugin: it
// expects a global `$` to already exist and never imports jQuery itself.
// jquery is only a peerDependency of this repo, so it is not installed by a
// frozen lockfile install and cannot be imported from a test. This test
// builds the small subset of jQuery the extension actually exercises here:
// element wrapping, delegated events and the multi-argument trigger() used
// by triggerSearch().
class MiniQuery {
  constructor (elements) {
    this.els = elements
    elements.forEach((el, i) => {
      this[i] = el
    })
    this.length = elements.length
  }

  find (selector) {
    const found = []

    this.els.forEach(el => found.push(...el.querySelectorAll(selector)))
    return new MiniQuery(found)
  }

  each (callback) {
    this.els.forEach((el, i) => callback.call(el, i, el))
    return this
  }

  eq (index) {
    return new MiniQuery(this.els[index] ? [this.els[index]] : [])
  }

  is (selector) {
    const el = this.els[0]

    if (!el) {
      return false
    }
    if (selector === ':checkbox') {
      return el.tagName === 'INPUT' && el.type === 'checkbox'
    }
    if (selector === ':radio') {
      return el.tagName === 'INPUT' && el.type === 'radio'
    }
    return el.matches(selector)
  }

  attr (name, value) {
    if (value === undefined) {
      return this.els[0] ? this.els[0].getAttribute(name) : undefined
    }
    this.els.forEach(el => el.setAttribute(name, value))
    return this
  }

  val (value) {
    if (value === undefined) {
      return this.els[0] ? this.els[0].value : undefined
    }
    this.els.forEach(el => {
      el.value = value
    })
    return this
  }

  data (key) {
    return this.els[0] ? this.els[0].dataset[key] : undefined
  }

  html (value) {
    if (value === undefined) {
      return this.els[0] ? this.els[0].innerHTML : undefined
    }
    this.els.forEach(el => {
      el.innerHTML = value
    })
    return this
  }

  remove () {
    this.els.forEach(el => el.remove())
    return this
  }

  toArray () {
    return this.els.slice()
  }

  on (type, selector, handler) {
    this.els.forEach(el => {
      el.delegatedHandlers = el.delegatedHandlers || {}
      el.delegatedHandlers[type] = el.delegatedHandlers[type] || []
      el.delegatedHandlers[type].push({ selector, handler })
    })
    return this
  }

  off (type, selector) {
    this.els.forEach(el => {
      if (el.delegatedHandlers && el.delegatedHandlers[type]) {
        el.delegatedHandlers[type] = el.delegatedHandlers[type].filter(entry => entry.selector !== selector)
      }
    })
    return this
  }

  // Mirrors jQuery.fn.trigger(type, extraParameters): delegated handlers
  // bound on an ancestor are called as handler(event, extraParameters).
  trigger (type, data) {
    this.els.forEach(el => {
      let node = el.parentElement

      while (node) {
        const entries = node.delegatedHandlers && node.delegatedHandlers[type]

        if (entries) {
          entries.forEach(({ selector, handler }) => {
            if (el.matches(selector)) {
              handler({ currentTarget: el, keyCode: undefined }, data)
            }
          })
        }
        node = node.parentElement
      }
    })
    return this
  }
}

function miniJQuery (selector) {
  if (selector instanceof MiniQuery) {
    return selector
  }
  if (typeof selector === 'string') {
    return new MiniQuery(Array.from(document.querySelectorAll(selector)))
  }
  if (selector instanceof Element) {
    return new MiniQuery([selector])
  }
  if (Array.isArray(selector) || selector instanceof NodeList) {
    return new MiniQuery(Array.from(selector))
  }
  return new MiniQuery([])
}

miniJQuery.each = (collection, callback) => {
  const arr = collection && typeof collection.toArray === 'function' ? collection.toArray() : collection

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (callback.call(arr[i], i, arr[i]) === false) {
        break
      }
    }
  } else if (arr && typeof arr === 'object') {
    for (const key of Object.keys(arr)) {
      if (callback.call(arr[key], key, arr[key]) === false) {
        break
      }
    }
  }
  return collection
}

miniJQuery.inArray = (value, array) => array.indexOf(value)

// Loads the extension under test against the mini jQuery above instead of
// the real bootstrap-table.js, which needs a lot more of the jQuery API
// surface (rendering, virtual scroll, toolbar) that this test never touches.
async function loadFilterControlExtension () {
  miniJQuery.fn = {
    bootstrapTable: {
      defaults: {},
      columnDefaults: {},
      events: {},
      icons: {},
      locales: {},
      methods: [],
      utils: Utils
    }
  }
  miniJQuery.BootstrapTable = class {}
  globalThis.$ = miniJQuery

  await import('../../src/extensions/filter-control/bootstrap-table-filter-control.js')
  const UtilsFilterControl = await import('../../src/extensions/filter-control/utils.js')

  return {
    BootstrapTable: globalThis.$.BootstrapTable,
    UtilsFilterControl
  }
}

describe('filter-control issue #7053', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
    delete globalThis.$
  })

  it('triggerSearch() runs the column search when searchOnEnterKey is true', async () => {
    const { BootstrapTable, UtilsFilterControl } = await loadFilterControlExtension()

    const table = document.createElement('table')

    table.innerHTML = '<thead><tr><th data-field="name"><div class="fht-cell"></div></th></tr></thead>'
    document.body.appendChild(table)

    const $header = miniJQuery(table)
    const onColumnSearch = vi.fn()
    const that = {
      constants: { classes: { input: 'form-control' } },
      columns: [{
        field: 'name',
        filterControl: 'input',
        searchable: true,
        visible: true,
        filterControlPlaceholder: '',
        filterDefault: ''
      }],
      options: {
        filterTemplate: globalThis.$.fn.bootstrapTable.defaults.filterTemplate,
        filterControlContainer: undefined,
        height: undefined,
        searchOnEnterKey: true,
        searchTimeOut: 0,
        filterControlVisible: true
      },
      filterColumnsPartial: {},
      $header,
      onColumnSearch,
      // createControls() also fires the generic 'created-controls' bs.table
      // event, unrelated to the bug under test here.
      trigger: () => {}
    }

    // createControls() calls that.triggerSearch() itself once the controls
    // are rendered, the same way it does right after a real table loads data.
    that.triggerSearch = () => BootstrapTable.prototype.triggerSearch.call(that)

    UtilsFilterControl.createControls(that, $header)
    vi.runAllTimers()

    expect(onColumnSearch).toHaveBeenCalledTimes(1)
    expect(onColumnSearch).toHaveBeenCalledWith({
      currentTarget: expect.any(HTMLInputElement),
      keyCode: 13
    })
  })
})
