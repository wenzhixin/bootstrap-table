import { describe, expect, it, vi } from 'vitest'

async function loadFilterControlPrototype () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/filter-control/bootstrap-table-filter-control.js')

  const $ = globalThis.jQuery || globalThis.$

  expect($?.BootstrapTable).toBeTruthy()

  return {
    $,
    BootstrapTable: $.BootstrapTable
  }
}

describe('filter-control issue #7053', () => {
  it('triggerSearch() runs the column search when searchOnEnterKey is true', async () => {
    const { $, BootstrapTable } = await loadFilterControlPrototype()
    const onColumnSearchSpy = vi.spyOn(BootstrapTable.prototype, 'onColumnSearch')

    document.body.innerHTML = '<table id="issue-7053-table"></table>'
    const $table = $('#issue-7053-table')

    try {
      $table.bootstrapTable({
        filterControl: true,
        searchOnEnterKey: true,
        searchTimeOut: 0,
        columns: [{ field: 'name', title: 'Name', filterControl: 'input' }],
        data: [{ name: 'alpha' }, { name: 'beta' }]
      })

      await new Promise(resolve => setTimeout(resolve, 20))
      onColumnSearchSpy.mockClear()

      const $input = $table.closest('.bootstrap-table').find('thead input').first()

      expect($input.length).toBe(1)
      $input.val('alp')

      $table.bootstrapTable('triggerSearch')

      await new Promise(resolve => setTimeout(resolve, 20))

      expect(onColumnSearchSpy).toHaveBeenCalled()
    } finally {
      onColumnSearchSpy.mockRestore()
      if ($table.data('bootstrap.table')) {
        $table.bootstrapTable('destroy')
      }
      document.body.innerHTML = ''
    }
  })
})
