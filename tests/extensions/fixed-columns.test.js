import { afterEach, describe, expect, it, vi } from 'vitest'

async function loadFixedColumnsPrototype () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/fixed-columns/bootstrap-table-fixed-columns.js')

  const $ = globalThis.jQuery || globalThis.$

  expect($?.BootstrapTable).toBeTruthy()

  return { $ }
}

const TH_WIDTHS = {
  state: 40, a: 100, b: 120, c: 140, d: 160
}
const COLUMNS = [
  { field: 'state', checkbox: true },
  { field: 'a', title: 'A' },
  { field: 'b', title: 'B' },
  { field: 'c', title: 'C' },
  { field: 'd', title: 'D' }
]
const DATA = [
  { state: false, a: 1, b: 2, c: 3, d: 4 },
  { state: false, a: 5, b: 6, c: 7, d: 8 }
]

/**
 * Layout stubs: happy-dom does not run a real layout engine, so the
 * dimension getters need deterministic values. The mocks resolve by
 * class/tag so that jQuery clones (new wrapper objects) are covered too.
 *
 * Layout: the table (560px) is wider than the body (200px) => horizontally
 * scrollable; the vertical scroll bar is 17px wide (clientWidth 183) and the
 * horizontal one 17px high. Header 40px, footer 30px, container 300px.
 */
function stubLayout ($, {
  bodyWidth = 200, tableWidth = 560, headerHeight = 40, footerHeight = 30,
  containerHeight = 300, verticalScrollBarWidth = 17, horizontalScrollBarHeight = 17
} = {}) {
  const layout = { bodyWidth, tableWidth, headerHeight, footerHeight, containerHeight }

  const dimOf = el => {
    if (!el || !el.classList) {
      return { w: 0, h: 0 }
    }
    if (el.classList.contains('fixed-table-container')) {
      return { w: layout.bodyWidth, h: layout.containerHeight }
    }
    if (el.classList.contains('fixed-table-header')) {
      return { w: layout.bodyWidth, h: layout.headerHeight }
    }
    if (el.classList.contains('fixed-table-footer')) {
      return { w: layout.bodyWidth, h: layout.footerHeight }
    }
    if (el.classList.contains('fixed-table-body')) {
      return { w: layout.bodyWidth, h: layout.containerHeight - layout.headerHeight - layout.footerHeight }
    }
    if (el.tagName === 'TABLE') {
      return { w: layout.tableWidth, h: 0 }
    }
    if (el.tagName === 'TH') {
      return { w: TH_WIDTHS[el.getAttribute('data-field')] || 100, h: 0 }
    }
    if (el.tagName === 'TD') {
      return { w: 100, h: 0 }
    }
    return { w: 0, h: 0 }
  }

  for (const method of ['outerWidth', 'outerHeight', 'width', 'height', 'innerWidth']) {
    vi.spyOn($.fn, method).mockImplementation(function () {
      return dimOf(this[0])[method === 'outerHeight' || method === 'height' ? 'h' : 'w']
    })
  }

  return {
    applyTo (table) {
      const bodyEl = table.$tableBody[0]
      const bodyElHeight = containerHeight - headerHeight - footerHeight

      Object.defineProperty(bodyEl, 'offsetWidth', { value: bodyWidth, configurable: true })
      Object.defineProperty(bodyEl, 'clientWidth', {
        value: bodyWidth - verticalScrollBarWidth,
        configurable: true
      })
      Object.defineProperty(bodyEl, 'scrollWidth', { value: tableWidth, configurable: true })
      Object.defineProperty(bodyEl, 'offsetHeight', { value: bodyElHeight, configurable: true })
      Object.defineProperty(bodyEl, 'clientHeight', {
        value: bodyElHeight - horizontalScrollBarHeight,
        configurable: true
      })
    }
  }
}

function createFixedColumnsTable ($, options = {}, layout = {}) {
  document.body.innerHTML = '<table id="fixed-test"></table>'

  $('#fixed-test').bootstrapTable({
    height: 300,
    fixedColumns: true,
    fixedNumber: 2,
    fixedRightNumber: 1,
    columns: COLUMNS,
    data: DATA,
    ...options
  })

  const table = $('#fixed-test').data('bootstrap.table')
  const stubs = stubLayout($, layout)

  stubs.applyTo(table)
  return table
}

describe('fixed-columns footer (issue #4264)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('clones the footer into both fixed columns with height + showFooter', async () => {
    const { $ } = await loadFixedColumnsPrototype()
    const table = createFixedColumnsTable($, { showFooter: true })

    table.trigger('post-header')

    expect(table.$fixedColumns.find('> .fixed-table-footer').length).toBe(1)
    expect(table.$fixedColumnsRight.find('> .fixed-table-footer').length).toBe(1)
    expect(table.$fixedColumns.find('> .fixed-table-footer th').length)
      .toBe(table.$tableFooter.find('th').length)
  })

  it('does not clone a separate footer without height (tfoot lives in the body)', async () => {
    const { $ } = await loadFixedColumnsPrototype()
    const table = createFixedColumnsTable($, { height: undefined, showFooter: true })

    table.trigger('post-header')

    expect(table.$fixedColumns.find('> .fixed-table-footer').length).toBe(0)
    expect(table.$fixedColumnsRight.find('> .fixed-table-footer').length).toBe(0)
  })

  it('reserves the footer height in the fixed body height calculation', async () => {
    const { $ } = await loadFixedColumnsPrototype()
    const table = createFixedColumnsTable($, { showFooter: true })

    table.trigger('post-header')

    // container 300 = header 40 + body + footer 30, and the body also stops
    // above the 17px horizontal scroll bar: 300 - 40 - 30 - 17
    expect(table.$fixedColumns[0].style.height).toBe('300px')
    expect(table.$fixedBody[0].style.height).toBe('213px')
  })

  it('uses the full body height when there is no horizontal scroll bar', async () => {
    const { $ } = await loadFixedColumnsPrototype()
    const table = createFixedColumnsTable($, { showFooter: true }, {
      horizontalScrollBarHeight: 0
    })

    table.trigger('post-header')

    // overlay scroll bars (e.g. macOS): 300 - 40 - 30
    expect(table.$fixedBody[0].style.height).toBe('230px')
  })

  it('does not cover the horizontal scroll bar when no footer is pinned', async () => {
    const { $ } = await loadFixedColumnsPrototype()
    const table = createFixedColumnsTable($, { showFooter: false })

    table.trigger('post-header')

    // keep the original sizing: the body stops above the horizontal scroll
    // bar (17px) and the 1px container bottom border
    expect(table.$fixedColumns[0].style.height).toBe('300px')
    expect(table.$fixedBody[0].style.height).toBe(`${300 - 17 - 1 - 40}px`)
  })

  it('does not reserve the bottom border when the footer is pinned but empty', async () => {
    const { $ } = await loadFixedColumnsPrototype()
    const table = createFixedColumnsTable($, { showFooter: true }, { footerHeight: 0 })

    table.trigger('post-header')

    // `has-footer` is set from `height && showFooter`, so the container border
    // is gone even though the measured footer height is 0: 300 - 40 - 0 - 17
    expect(table.$fixedBody[0].style.height).toBe('243px')
  })

  it('keeps the cloned footers in sync with the asynchronously fitted footer (#8582 timing)', async () => {
    const { $ } = await loadFixedColumnsPrototype()
    const table = createFixedColumnsTable($, { showFooter: true })

    // fitHeader ran and reserved the scroll bar gutter on the main header
    table.$tableHeader.css('margin-right', 17)
    table.trigger('post-header')

    // #7585/#8582: fitFooter re-runs asynchronously once the container
    // height is applied and the real scroll bar width (17px) is known
    table.fitFooter()

    const $fixedFooter = table.$fixedColumns.find('> .fixed-table-footer')
    const $fixedFooterRight = table.$fixedColumnsRight.find('> .fixed-table-footer')

    // the main footer reserves the scroll bar gutter after the async fit
    expect(table.$tableFooter[0].style.marginRight).toBe('17px')
    // the right fixed footer must reserve the same gutter as the right
    // fixed header (its container width includes it via getFixedColumnsWidth)
    expect($fixedFooterRight[0].style.marginRight).toBe('17px')
    // the left fixed columns are pinned left: the gutter would clip the
    // last fixed footer column, so it must be removed (like the left header)
    expect($fixedFooter[0].style.marginRight).toBe('')
  })

  it('scrolls the right fixed footer to its rightmost position', async () => {
    const { $ } = await loadFixedColumnsPrototype()
    const table = createFixedColumnsTable($, { showFooter: true })

    table.trigger('post-footer')
    table.trigger('post-header')

    const $fixedFooterRight = table.$fixedColumnsRight.find('> .fixed-table-footer')

    expect($fixedFooterRight[0].scrollLeft).toBe(560)
  })

  it('removes the cloned footer when showFooter is disabled', async () => {
    const { $ } = await loadFixedColumnsPrototype()
    const table = createFixedColumnsTable($, { showFooter: false })

    table.trigger('post-header')

    expect(table.$fixedColumns.find('> .fixed-table-footer').length).toBe(0)
    expect(table.$fixedColumnsRight.find('> .fixed-table-footer').length).toBe(0)
  })
})
