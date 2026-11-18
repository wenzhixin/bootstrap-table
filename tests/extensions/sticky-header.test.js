import { afterEach, describe, expect, it, vi } from 'vitest'

async function loadStickyHeaderPrototype () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/sticky-header/bootstrap-table-sticky-header.js')

  const $ = globalThis.jQuery || globalThis.$

  expect($?.BootstrapTable).toBeTruthy()

  return { $ }
}

function createStickyTable ($, options = {}) {
  document.body.innerHTML = '<table id="sticky-test"></table>'

  $('#sticky-test').bootstrapTable({
    stickyHeader: true,
    columns: [{ field: 'a', title: 'A' }, { field: 'b', title: 'B' }],
    data: [{ a: 1, b: 2 }, { a: 3, b: 4 }],
    ...options
  })

  const table = $('#sticky-test').data('bootstrap.table')

  // make the sticky header visible: window scrolled between the anchors
  vi.spyOn($.fn, 'scrollTop').mockReturnValue(200)
  table.$stickyBegin.offset = vi.fn(() => ({ top: 100, left: 16 }))
  table.$stickyEnd.offset = vi.fn(() => ({ top: 800, left: 16 }))
  table.$header.height = vi.fn(() => 40)

  // simulate a table body of 1178px with a 17px vertical scroll bar
  const bodyEl = table.$tableBody[0]

  bodyEl.getBoundingClientRect = () => ({
    left: 16, top: 200, right: 1194, bottom: 500, width: 1178, height: 300
  })
  Object.defineProperty(bodyEl, 'offsetWidth', { value: 1178, configurable: true })
  Object.defineProperty(bodyEl, 'clientWidth', { value: 1161, configurable: true })

  return table
}

describe('sticky-header issue #7090/#6006', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('uses the table width (without scroll bar) when both offsets are set', async () => {
    const { $ } = await loadStickyHeaderPrototype()
    const table = createStickyTable($, {
      stickyHeaderOffsetLeft: 10,
      stickyHeaderOffsetRight: 12
    })

    table.renderStickyHeader()

    const style = table.$stickyContainer[0].style

    expect(style.left).toBe('10px')
    expect(style.right).toBe('12px')
    expect(style.width).toBe('1161px')
  })

  it('falls back to the table position and width when no offset is set', async () => {
    const { $ } = await loadStickyHeaderPrototype()
    const table = createStickyTable($)

    table.renderStickyHeader()

    const style = table.$stickyContainer[0].style

    expect(style.left).toBe('16px')
    expect(style.right).toBe('0px')
    expect(style.width).toBe('1161px')
  })

  it('keeps the full table width when there is no vertical scroll bar', async () => {
    const { $ } = await loadStickyHeaderPrototype()
    const table = createStickyTable($)

    Object.defineProperty(table.$tableBody[0], 'clientWidth', { value: 1178 })

    table.renderStickyHeader()

    expect(table.$stickyContainer[0].style.width).toBe('1178px')
  })

  it('uses the full width in fullscreen mode', async () => {
    const { $ } = await loadStickyHeaderPrototype()
    const table = createStickyTable($, {
      stickyHeaderOffsetLeft: 10,
      stickyHeaderOffsetRight: 12
    })

    table.$el.closest('.bootstrap-table').addClass('fullscreen')

    table.renderStickyHeader()

    const style = table.$stickyContainer[0].style

    expect(style.left).toBe('0px')
    expect(style.right).toBe('0px')
    expect(style.width).toBe('100%')
  })
})
