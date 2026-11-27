import { afterEach, describe, expect, it, vi } from 'vitest'

async function loadKeyEvents () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/key-events/bootstrap-table-key-events.js')

  return globalThis.jQuery
}

function createTable ($, id, onRefresh, options = {}) {
  $('body').append(`<table id="${id}"></table>`)

  return $(`#${id}`).bootstrapTable({
    keyEvents: true,
    showRefresh: true,
    columns: [{ field: 'a', title: 'A' }],
    data: [{ a: 1 }],
    onRefresh,
    ...options
  })
}

describe('key-events extension', () => {
  afterEach(() => {
    globalThis.jQuery(document).off('keydown')
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('keeps other keydown handlers of the page', async () => {
    const $ = await loadKeyEvents()
    const pageHandler = vi.fn()

    $(document).on('keydown', pageHandler)
    createTable($, 'ke-page', vi.fn())

    $(document).trigger($.Event('keydown', { keyCode: 65 }))

    expect(pageHandler).toHaveBeenCalledTimes(1)
  })

  it('keeps the handlers of every table on the page', async () => {
    const $ = await loadKeyEvents()
    const refresh1 = vi.fn()
    const refresh2 = vi.fn()

    createTable($, 'ke-first', refresh1)
    createTable($, 'ke-second', refresh2)

    $(document).trigger($.Event('keydown', { keyCode: 82 }))

    expect(refresh1).toHaveBeenCalledTimes(1)
    expect(refresh2).toHaveBeenCalledTimes(1)
  })

  it('registers one handler per table after refreshOptions', async () => {
    const $ = await loadKeyEvents()
    const onRefresh = vi.fn()
    const $table = createTable($, 'ke-refresh-options', onRefresh)

    $table.bootstrapTable('refreshOptions', { pageSize: 5 })
    $table.bootstrapTable('refreshOptions', { pageSize: 6 })
    onRefresh.mockClear()

    $(document).trigger($.Event('keydown', { keyCode: 82 }))

    expect(onRefresh).toHaveBeenCalledTimes(1)
  })

  it('registers one handler per table without an id', async () => {
    const $ = await loadKeyEvents()
    const onRefresh = vi.fn()

    $('body').append('<table class="no-id"></table>')
    const $table = $('.no-id').bootstrapTable({
      keyEvents: true,
      showRefresh: true,
      columns: [{ field: 'a', title: 'A' }],
      data: [{ a: 1 }],
      onRefresh
    })

    $table.bootstrapTable('refreshOptions', { pageSize: 5 })
    onRefresh.mockClear()

    $(document).trigger($.Event('keydown', { keyCode: 82 }))

    expect(onRefresh).toHaveBeenCalledTimes(1)
  })
})
