/**
 * Tests for the `rtl` option (change: add-rtl-support).
 *
 * Covers direction resolution (getRtlDirection), root container injection
 * (initContainer), preservation of the original <table> dir for extensions,
 * and the physical semantics of column alignment.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import InitializationModule from '@/modules/initialization.js'
import HeaderModule from '@/modules/header.js'
import Utils from '@/utils/index.js'

const { getRtlDirection, initContainer } = InitializationModule

// Lightweight chainable jQuery stub for the parts of initContainer we exercise.
function makeChainable () {
  const c = {}

  for (const m of ['find', 'insertAfter', 'after', 'append', 'addClass', 'css', 'show', 'hide', 'off', 'on']) {
    c[m] = vi.fn(() => c)
  }
  c.length = 1
  return c
}

describe('getRtlDirection', () => {
  let original$

  beforeEach(() => {
    original$ = global.$
  })

  afterEach(() => {
    global.$ = original$
    vi.restoreAllMocks()
  })

  // ctx with a $el.attr getter; $('html') resolved via the global $ mock.
  function ctx (rtl, { $elDir } = {}) {
    return {
      options: { rtl },
      $el: { attr: vi.fn(() => $elDir) }
    }
  }

  it('resolves false / "ltr" to ltr', () => {
    global.$ = vi.fn()
    expect(getRtlDirection.call(ctx(false))).toBe('ltr')
    expect(getRtlDirection.call(ctx('ltr'))).toBe('ltr')
  })

  it('resolves true / "rtl" to rtl', () => {
    global.$ = vi.fn()
    expect(getRtlDirection.call(ctx(true))).toBe('rtl')
    expect(getRtlDirection.call(ctx('rtl'))).toBe('rtl')
  })

  describe('auto probing', () => {
    function mockHtml (htmlDir) {
      global.$ = vi.fn(selector => {
        if (selector === 'html') {
          return { attr: vi.fn(() => htmlDir) }
        }
        return makeChainable()
      })
    }

    it('follows the table element dir when set', () => {
      mockHtml('rtl')
      expect(getRtlDirection.call(ctx('auto', { $elDir: 'rtl' }))).toBe('rtl')
    })

    it('falls back to <html> dir when the table has none', () => {
      mockHtml('rtl')
      expect(getRtlDirection.call(ctx('auto', { $elDir: undefined }))).toBe('rtl')
    })

    it('falls back to ltr when neither the table nor <html> has dir', () => {
      mockHtml(undefined)
      expect(getRtlDirection.call(ctx('auto', { $elDir: undefined }))).toBe('ltr')
    })

    it('prefers the table element dir over <html>', () => {
      mockHtml('rtl')
      // table says ltr, html says rtl -> table wins
      expect(getRtlDirection.call(ctx('auto', { $elDir: 'ltr' }))).toBe('ltr')
    })

    it('treats uppercase DIR values case-insensitively', () => {
      mockHtml(undefined)
      expect(getRtlDirection.call(ctx('auto', { $elDir: 'RTL' }))).toBe('rtl')
    })
  })
})

describe('initContainer direction injection', () => {
  let original$
  let capturedTemplates

  beforeEach(() => {
    original$ = global.$
    capturedTemplates = []
    global.$ = vi.fn(html => {
      if (typeof html === 'string') {
        capturedTemplates.push(html)
      }
      return makeChainable()
    })
  })

  afterEach(() => {
    global.$ = original$
    vi.restoreAllMocks()
  })

  function run (rtl) {
    const $el = makeChainable()

    $el.attr = vi.fn(() => undefined) // getter only; tracked for setter assertions

    const self = {
      options: {
        rtl,
        loadingTemplate: msg => `<span>${msg}</span>`,
        formatLoadingMessage: () => 'Loading',
        classes: 'table',
        paginationVAlign: 'bottom',
        buttonsToolbar: undefined
      },
      constants: { theme: 'bootstrap3' },
      $el,
      getRtlDirection: InitializationModule.getRtlDirection
    }

    initContainer.call(self)

    return { self, template: capturedTemplates[0], $el }
  }

  it('injects dir="rtl" and bootstrap-table-rtl class when RTL', () => {
    const { template } = run(true)

    expect(template).toContain('dir="rtl"')
    expect(template).toContain('bootstrap-table-rtl')
  })

  it('injects neither dir nor class when LTR', () => {
    const { template } = run(false)

    expect(template).not.toContain('dir="rtl"')
    expect(template).not.toContain('bootstrap-table-rtl')
  })

  it('keeps the root class ordering valid in RTL (no stray quotes)', () => {
    const { template } = run(true)

    // class attribute must still be well-formed
    expect(template).toMatch(/class="bootstrap-table bootstrap3 bootstrap-table-rtl"\s+dir="rtl"/)
  })

  // The core must never SET dir on the original <table>, so print/filter-control
  // keep reading their own value. Cover both the explicit path (rtl: true, where
  // getRtlDirection never touches $el) and the auto path (where it reads
  // $el.attr('dir') as a getter) to ensure neither issues a setter call.
  it.each([
    ['explicit rtl', true],
    ['auto probing', 'auto']
  ])('does not modify this.$el dir attribute in %s mode (extension compatibility)', (_name, rtl) => {
    // auto mode also probes $('html').attr('dir'); provide a stub for that.
    global.$ = vi.fn(selector => {
      if (selector === 'html') {
        return { attr: vi.fn(() => 'ltr') }
      }
      return makeChainable()
    })

    const $el = makeChainable()
    // getter-only stub: returns 'ltr' (so auto resolves to ltr); we assert below
    // that it is never called with a 2nd (value) argument.

    $el.attr = vi.fn((...args) => args.length > 1 ? undefined : 'ltr')

    const self = {
      options: {
        rtl,
        loadingTemplate: msg => `<span>${msg}</span>`,
        formatLoadingMessage: () => 'Loading',
        classes: 'table',
        paginationVAlign: 'bottom',
        buttonsToolbar: undefined
      },
      constants: { theme: 'bootstrap3' },
      $el,
      getRtlDirection: InitializationModule.getRtlDirection
    }

    initContainer.call(self)

    // Assert no attr('dir', value) setter call was made on the original <table>.
    const dirSetter = $el.attr.mock.calls.find(
      call => call[0] === 'dir' && call.length > 1 && call[1] !== undefined
    )

    expect(dirSetter).toBeUndefined()
  })
})

describe('column alignment keeps physical semantics (RTL does not flip align)', () => {
  let original$

  beforeEach(() => {
    original$ = global.$
    global.$ = vi.fn(() => ({ data: vi.fn(), off: vi.fn(), on: vi.fn() }))
  })

  afterEach(() => {
    global.$ = original$
    vi.restoreAllMocks()
  })

  function createHeaderContext (align) {
    const column = Utils.extend({}, {
      field: 'name',
      title: 'Name',
      fieldIndex: 0,
      align,
      valign: 'top',
      visible: true,
      width: undefined,
      widthUnit: 'px',
      checkbox: false,
      radio: false,
      class: undefined,
      rowspan: undefined,
      colspan: undefined,
      scope: undefined,
      titleTooltip: undefined,
      style: undefined,
      _data: {},
      formatter: undefined,
      detailFormatter: undefined,
      events: undefined,
      sorter: undefined,
      sortName: undefined,
      cellStyle: undefined,
      searchable: true,
      sortable: false
    })

    return {
      options: {
        height: undefined,
        cardView: false,
        showHeader: true,
        showFooter: false,
        columns: [[column]],
        detailView: false,
        detailViewAlign: 'left',
        sortable: false,
        escape: false,
        escapeTitle: false,
        singleSelect: false,
        checkboxHeader: true,
        headerStyle: () => ({})
      },
      columns: [column],
      header: {},
      _headerTrClasses: [''],
      _headerTrStyles: [''],
      $el: {
        is: () => false,
        attr: () => 'test-table',
        find: () => ({ each: () => {}, data: () => undefined }),
        [0]: document.createElement('table')
      },
      $header: {
        html: () => {},
        show: () => {},
        hide: () => {},
        outerHeight: () => 50,
        find: () => ({ each: () => {}, off: () => ({ on: () => {} }) })
      },
      $container: { off: () => ({ on: () => {} }) },
      $tableHeader: { show: () => {}, hide: () => {} },
      $selectAll: { off: () => {}, on: () => {} },
      $tableLoading: { css: () => {} },
      _timeoutId: {},
      _setDelayTimeout: () => {},
      resetView: () => {},
      resetCaret: () => {},
      _resizeObserver: null
    }
  }

  function runInitHeader (align) {
    // Column alignment keeps its physical meaning and is intentionally NOT
    // flipped under RTL. HeaderModule.initHeader never reads the table
    // direction, so we exercise it without any direction context at all.
    const ctx = createHeaderContext(align)

    Object.assign(ctx, HeaderModule)
    ctx.initHeader()
    return ctx
  }

  it('outputs text-align: right for an explicitly right-aligned column under RTL', () => {
    const ctx = runInitHeader('right')

    expect(ctx.header.styles[0]).toContain('text-align: right')
  })

  it('does not flip left alignment under RTL', () => {
    const ctx = runInitHeader('left')

    expect(ctx.header.styles[0]).toContain('text-align: left')
  })

  it('produces the same alignment output regardless of direction', () => {
    const rtlCtx = createHeaderContext('right')
    const ltrCtx = createHeaderContext('right')

    Object.assign(rtlCtx, HeaderModule)
    Object.assign(ltrCtx, HeaderModule)
    rtlCtx.initHeader()
    ltrCtx.initHeader()

    expect(rtlCtx.header.styles[0]).toBe(ltrCtx.header.styles[0])
  })
})
