/**
 * Tests for the addrbar extension page size.
 *
 * Choosing "All" writes the formatAllRows() text to the address bar
 * (for example size=All). Reading it back must keep that text,
 * because +'All' is NaN and the table then shows no rows.
 */
import { afterEach, describe, expect, it } from 'vitest'

async function loadAddrbar () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/addrbar/bootstrap-table-addrbar.js')
  await import('../../src/locale/bootstrap-table-de-DE.js')
  // the en-US locale is loaded last, so it stays the default
  await import('../../src/locale/bootstrap-table-en-US.js')

  return globalThis.$
}

const rows = Array.from({ length: 30 }, (_, i) => ({ id: i }))

function createTable ($, options = {}) {
  document.body.innerHTML = '<table id="addrbar-test"></table>'

  $('#addrbar-test').bootstrapTable({
    addrbar: true,
    pagination: true,
    pageList: [10, 25, 'all'],
    columns: [{ field: 'id' }],
    data: rows,
    ...options
  })

  return $('#addrbar-test').data('bootstrap.table')
}

function selectAllAndReload ($, options = {}) {
  window.history.replaceState({}, '', '/')
  const table = createTable($, options)
  const allText = table.options.formatAllRows()

  table.$pagination.find('.page-list a').filter((i, el) => $(el).text() === allText).trigger('click')
  expect(new URLSearchParams(window.location.search).get('size')).toBe(allText)

  // reload the page with the address bar the table just wrote
  return createTable($, options)
}

describe('addrbar page size', () => {
  afterEach(() => {
    window.history.replaceState({}, '', '/')
    document.body.innerHTML = ''
  })

  it('keeps the "All" page size after a reload', async () => {
    const $ = await loadAddrbar()
    const table = selectAllAndReload($)

    expect(table.options.pageSize).toBe('All')
    expect(table.$body.find('tr[data-index]').length).toBe(30)
  })

  it('keeps the translated "All" page size with the locale option', async () => {
    const $ = await loadAddrbar()
    const table = selectAllAndReload($, { locale: 'de-DE' })

    expect(table.options.pageSize).toBe('Alle')
    expect(table.$body.find('tr[data-index]').length).toBe(30)
  })

  it('does not send NaN to the server for size=All', async () => {
    const $ = await loadAddrbar()
    const requests = []

    window.history.replaceState({}, '', '/?size=All')
    createTable($, {
      sidePagination: 'server',
      data: undefined,
      ajax: params => {
        requests.push(params.data)
        params.success({ total: rows.length, rows })
      }
    })

    expect(requests.at(-1)).toMatchObject({ offset: 0 })
    expect(requests.at(-1)).not.toHaveProperty('limit')
  })

  it('reads a numeric page size from the address bar', async () => {
    const $ = await loadAddrbar()

    window.history.replaceState({}, '', '/?size=25')
    const table = createTable($)

    expect(table.options.pageSize).toBe(25)
    expect(table.$body.find('tr[data-index]').length).toBe(25)
  })
})
