import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'

let $

beforeAll(async () => {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }

  if (typeof globalThis.Option !== 'function') {
    globalThis.Option = function (text, value, defaultSelected, selected) {
      const option = document.createElement('option')

      option.text = text
      option.value = value
      option.defaultSelected = !!defaultSelected
      option.selected = !!selected
      return option
    }
  }

  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/filter-control/bootstrap-table-filter-control.js')

  $ = globalThis.jQuery || globalThis.$
})

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
const optionValues = $select => Array.from($select[0].options, option => option.value)

const buildTable = (tableOptions = {}, beforeInit = () => {}) => {
  const events = []

  document.body.innerHTML = '<table id="oa-table"></table>'

  const $table = $('#oa-table')

  beforeInit($table)
  $table.bootstrapTable({
    filterControl: true,
    searchTimeOut: 0,
    columns: [
      { field: 'name', title: 'Name', filterControl: 'input' },
      { field: 'category', title: 'Category', filterControl: 'select' }
    ],
    data: [{ name: 'a', category: 'Beta' }, { name: 'b', category: 'Alpha' }],
    onOptionsAdded: (field, $select) => events.push({ field, select: $select[0], values: optionValues($select) }),
    ...tableOptions
  })

  return { $table, events }
}

describe('filter-control onOptionsAdded', () => {
  afterEach(() => {
    const $table = $('#oa-table')

    if ($table.data('bootstrap.table')) {
      $table.bootstrapTable('destroy')
    }
    document.body.innerHTML = ''
  })

  it('fires once the select has the column values, which created-controls does not see', async () => {
    let valuesAtCreatedControls

    const { $table, events } = buildTable({
      onCreatedControls () {
        valuesAtCreatedControls = optionValues($('#oa-table').data('bootstrap.table').$header.find('select'))
      }
    })

    await wait(50)

    expect(valuesAtCreatedControls).toEqual([])
    expect(events).toEqual([{
      field: 'category',
      select: $table.data('bootstrap.table').$header.find('select')[0],
      values: ['', 'Beta', 'Alpha']
    }])
  })

  it('fires again only when new values are added', async () => {
    const { $table, events } = buildTable()

    await wait(50)
    $table.bootstrapTable('resetView')
    $table.bootstrapTable('filterBy', {})
    await wait(50)
    expect(events.length).toBe(1)

    $table.bootstrapTable('load', [{ name: 'c', category: 'Gamma' }])
    await wait(50)
    expect(events.length).toBe(2)
    expect(events[1].values).toContain('Gamma')
  })

  it('does not fire for selects filled from filterData', async () => {
    window.oaCategories = { Alpha: 'Alpha', Beta: 'Beta' }

    const { events } = buildTable({
      columns: [{ field: 'category', title: 'Category', filterControl: 'select', filterData: 'var:oaCategories' }]
    })

    await wait(50)
    expect(events).toEqual([])
  })

  it('passes the visible fixed-header select when the table has a height', async () => {
    const { $table, events } = buildTable({ height: 300 }, $el => {
      Object.defineProperty($el[0], 'offsetWidth', { value: 500, configurable: true })
    })

    await vi.waitFor(() => expect(events.length).toBeGreaterThan(0))

    const visibleSelect = $table.data('bootstrap.table').$tableHeader.find('select')[0]

    expect(events.at(-1)).toEqual({ field: 'category', select: visibleSelect, values: ['', 'Beta', 'Alpha'] })
  })
})
