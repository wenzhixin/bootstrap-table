import { describe, expect, it } from 'vitest'

async function loadFilterControlPrototype () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../../src/bootstrap-table.js')
  await import('../../../src/extensions/filter-control/bootstrap-table-filter-control.js')
  const { initFilterSelectControls } = await import('../../../src/extensions/filter-control/utils.js')
  const $ = globalThis.jQuery || globalThis.$

  expect($?.BootstrapTable).toBeTruthy()

  return { $, initFilterSelectControls }
}

function settle () {
  // Drain extension callbacks; elapsed time is never an assertion.
  return new Promise(resolve => setTimeout(resolve, 60))
}

async function withTable ({ data, column = {}, options = {}, globals = {} }, check) {
  const { $, initFilterSelectControls } = await loadFilterControlPrototype()
  const hadOption = typeof globalThis.Option === 'function'
  const optionDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'Option')
  const globalDescriptors = new Map(
    Object.keys(globals).map(name => [name, Object.getOwnPropertyDescriptor(globalThis, name)])
  )

  document.body.innerHTML = '<table id="fc-5777"></table>'
  const $table = $('#fc-5777')

  try {
    if (!hadOption) {
      // happy-dom has no Option constructor.
      globalThis.Option = function (text, value, _default, selected) {
        const option = document.createElement('option')

        option.textContent = text
        option.value = value
        option.selected = !!selected
        return option
      }
    }
    Object.assign(globalThis, globals)
    $table.bootstrapTable({
      filterControl: true,
      searchTimeOut: 0,
      columns: [
        { field: 'a', title: 'A', filterControl: 'select', ...column },
        { field: 'b', title: 'B' }
      ],
      ...options,
      data
    })
    await settle()

    const getSelect = () => {
      const $select = $table.closest('.bootstrap-table')
        .find('select.bootstrap-table-filter-control-a')

      expect($select).toHaveLength(1)
      return $select
    }

    return await check({
      $table,
      table: $table.data('bootstrap.table'),
      getSelect,
      initFilterSelectControls
    })
  } finally {
    try {
      // Also drain callbacks when an assertion fails before the next settle.
      await settle()
      if ($table.data('bootstrap.table')) {
        $table.bootstrapTable('destroy')
      }
    } finally {
      document.body.innerHTML = ''
      for (const [name, descriptor] of globalDescriptors) {
        if (descriptor) {
          Object.defineProperty(globalThis, name, descriptor)
        } else {
          delete globalThis[name]
        }
      }
      if (!hadOption) {
        if (optionDescriptor) {
          Object.defineProperty(globalThis, 'Option', optionDescriptor)
        } else {
          delete globalThis.Option
        }
      }
    }
  }
}

function optionValues ($select) {
  return Array.from($select[0].options, option => option.value)
}

function countOptionValueReads (populate) {
  let prototype = Object.getPrototypeOf(document.createElement('option'))
  let descriptor

  while (prototype) {
    descriptor = Object.getOwnPropertyDescriptor(prototype, 'value')
    if (descriptor?.get) {
      break
    }
    prototype = Object.getPrototypeOf(prototype)
  }

  expect(typeof descriptor?.get).toBe('function')
  let reads = 0

  Object.defineProperty(prototype, 'value', {
    ...descriptor,
    get () {
      reads++
      return descriptor.get.call(this)
    }
  })
  try {
    populate()
    return reads
  } finally {
    Object.defineProperty(prototype, 'value', descriptor)
  }
}

async function populateReads (distinctCount, emptySelect) {
  const data = Array.from({ length: 2 * distinctCount }, (_, r) => ({
    a: `v${r % distinctCount}`,
    b: r
  }))

  return withTable({ data }, ({ table, getSelect, initFilterSelectControls }) => {
    const select = getSelect()[0]

    expect(select.options).toHaveLength(distinctCount + 1)
    if (emptySelect) {
      while (select.options.length) {
        select.remove(0)
      }
    }

    // Only the synchronous populate pass is measured, excluding setup,
    // removal, assertions, deferred renders and teardown.
    const reads = countOptionValueReads(() => initFilterSelectControls(table))

    expect(select.options).toHaveLength(distinctCount + 1)
    expect(optionValues(getSelect())).toEqual([
      '',
      ...Array.from({ length: distinctCount }, (_, i) => `v${i}`)
    ])
    return reads
  })
}

describe('filter-control issue #5777 select options', () => {
  it('AC1_empty_build_linear', async () => {
    const small = await populateReads(100, true)
    const large = await populateReads(400, true)

    expect(large).toBeLessThanOrEqual(10 * 400)
    // Cross-multiply the ratio bound so a zero-read implementation is valid.
    expect(large).toBeLessThanOrEqual(6 * small)
  }, 30000)

  it('AC2_populated_rebuild_linear', async () => {
    const small = await populateReads(100, false)
    const large = await populateReads(400, false)

    expect(large).toBeLessThanOrEqual(10 * 400)
    expect(large).toBeLessThanOrEqual(6 * small)
  }, 30000)

  it('AC3_values_text_order_and_repeated_population', async () => {
    await withTable({
      data: ['b', 'a', 'b', '2', '1', 'a'].map(a => ({ a }))
    }, async ({ $table, table, getSelect, initFilterSelectControls }) => {
      const options = Array.from(getSelect()[0].options)

      expect(options[0].value).toBe('')
      expect(options.slice(1).map(option => [option.value, option.text])).toEqual([
        ['1', '1'],
        ['2', '2'],
        ['b', 'b'],
        ['a', 'a']
      ])
      initFilterSelectControls(table)
      expect(optionValues(getSelect())).toEqual(['', '1', '2', 'b', 'a'])

      $table.bootstrapTable('selectPage', 1)
      await settle()

      expect(optionValues(getSelect())).toEqual(['', '1', '2', 'b', 'a'])
    })
  })

  it('AC4_normalized_values_are_deduplicated', async () => {
    await withTable({
      data: ['<b>x</b>', 'x', 'a &amp; b', 'a & b', ' y ', 'y', 1, '1', null, undefined, '']
        .map(a => ({ a }))
    }, ({ table, getSelect, initFilterSelectControls }) => {
      const expected = ['', '1', 'x', 'a & b', 'y']

      expect(optionValues(getSelect())).toEqual(expected)
      initFilterSelectControls(table)
      expect(optionValues(getSelect())).toEqual(expected)
    })
  })

  it('AC5_selection_and_filtered_body_survive_rerender', async () => {
    await withTable({
      options: { pagination: true, pageSize: 10 },
      data: Array.from({ length: 30 }, (_, i) => ({ a: `v${i % 5}`, b: i }))
    }, async ({ $table, getSelect }) => {
      getSelect().val('v3').trigger('change')
      await settle()

      const rows = $table.find('tbody > tr[data-index]')

      expect(rows).toHaveLength(6)
      expect(Array.from(rows, row => row.cells[0].textContent)).toEqual(Array(6).fill('v3'))

      $table.bootstrapTable('selectPage', 1)
      await settle()

      expect(getSelect().val()).toBe('v3')
      expect(optionValues(getSelect())).toEqual(['', 'v0', 'v1', 'v2', 'v3', 'v4'])
    })
  })

  it('AC6_append_adds_new_values_exactly_once', async () => {
    await withTable({
      data: [{ a: 'p' }, { a: 'q' }]
    }, async ({ $table, getSelect }) => {
      expect(optionValues(getSelect())).toEqual(['', 'p', 'q'])

      $table.bootstrapTable('append', [{ a: 'r' }, { a: 'p' }])
      await settle()

      expect(optionValues(getSelect())).toEqual(['', 'p', 'q', 'r'])
    })
  })

  it('AC7a_formatter_output_and_missing_fields_are_deduplicated', async () => {
    await withTable({
      column: { formatter: value => value === undefined ? 'N/A' : `<i>${value}</i>` },
      data: [{ a: 'k' }, { b: 2 }, { a: 'k' }]
    }, ({ table, getSelect, initFilterSelectControls }) => {
      expect(optionValues(getSelect())).toEqual(['', 'k', 'N/A'])

      initFilterSelectControls(table)

      expect(optionValues(getSelect())).toEqual(['', 'k', 'N/A'])
    })
  })

  it('AC7b_collector_arrays_are_deduplicated_across_rows_and_passes', async () => {
    await withTable({
      globals: { fcSplitCollector5777: value => value.split(',') },
      column: { filterDataCollector: 'fcSplitCollector5777' },
      data: [{ a: 'Line 1,Line 2,Line 3' }, { a: 'Line 2,Line 4' }]
    }, ({ table, getSelect, initFilterSelectControls }) => {
      const assertOptions = () => {
        const values = optionValues(getSelect())

        expect(values).toHaveLength(5)
        expect(values[0]).toBe('')
        expect(values.slice(1).sort()).toEqual(['Line 1', 'Line 2', 'Line 3', 'Line 4'])
      }

      assertOptions()
      initFilterSelectControls(table)
      assertOptions()
    })
  })

  it('AC8_filterData_var_source_keeps_removing_duplicates', async () => {
    await withTable({
      globals: { fcList: ['x', 'y', 'x', 'z'] },
      column: { filterData: 'var:fcList' },
      data: [{ a: 'x' }]
    }, ({ getSelect }) => {
      expect(optionValues(getSelect())).toEqual(['', 'x', 'y', 'z'])
    })
  })
})
