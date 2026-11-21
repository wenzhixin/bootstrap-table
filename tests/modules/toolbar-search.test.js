import { describe, expect, it } from 'vitest'

async function loadBootstrapTable () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../src/bootstrap-table.js')

  return globalThis.jQuery || globalThis.$
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

async function withTable (options, run) {
  const $ = await loadBootstrapTable()

  document.body.innerHTML = '<table id="toolbar-search-table"></table>'
  const $table = $('#toolbar-search-table')

  try {
    $table.bootstrapTable({
      search: true,
      searchTimeOut: 0,
      columns: [{ field: 'name', title: 'Name' }],
      data: [{ name: 'alpha' }, { name: 'beta' }, { name: 'gamma' }],
      ...options
    })

    const $input = $table.closest('.bootstrap-table').find('.search input')

    expect($input.length).toBe(1)

    await run({
      $input,
      keyup: keyCode => $input.trigger($.Event('keyup', { keyCode })),
      rowNames: () => $table.bootstrapTable('getData').map(row => row.name)
    })
  } finally {
    if ($table.data('bootstrap.table')) {
      $table.bootstrapTable('destroy')
    }
    document.body.innerHTML = ''
  }
}

describe('toolbar search with searchOnEnterKey (#7897)', () => {
  it('does not search while typing, only on Enter', () => withTable({ searchOnEnterKey: true },
    async ({ $input, keyup, rowNames }) => {
      $input.val('alp')
      keyup(80)
      await wait(20)
      expect(rowNames()).toEqual(['alpha', 'beta', 'gamma'])

      keyup(13)
      await wait(20)
      expect(rowNames()).toEqual(['alpha'])
    }))

  it('restores all rows when the clear (x) button empties the input', () => withTable({ searchOnEnterKey: true },
    async ({ $input, keyup, rowNames }) => {
      $input.val('alp')
      keyup(13)
      await wait(20)
      expect(rowNames()).toEqual(['alpha'])

      $input.trigger('mouseup')
      $input.val('')
      await wait(20)
      expect(rowNames()).toEqual(['alpha', 'beta', 'gamma'])
    }))

  it('does not search a partial term on a click that leaves the value unchanged', () => withTable({ searchOnEnterKey: true },
    async ({ $input, keyup, rowNames }) => {
      $input.val('alp')
      keyup(13)
      await wait(20)

      $input.val('be')
      $input.trigger('mouseup')
      await wait(20)
      expect(rowNames()).toEqual(['alpha'])
    }))

  it('does not cancel a pending Enter search when the input is clicked', () => withTable({ searchOnEnterKey: true, searchTimeOut: 50 },
    async ({ $input, keyup, rowNames }) => {
      $input.val('alp')
      keyup(13)
      $input.trigger('mouseup')
      await wait(100)
      expect(rowNames()).toEqual(['alpha'])
    }))

  it('still searches while typing when searchOnEnterKey is false', () => withTable({ searchOnEnterKey: false },
    async ({ $input, keyup, rowNames }) => {
      $input.val('alp')
      keyup(80)
      await wait(20)
      expect(rowNames()).toEqual(['alpha'])
    }))
})
