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

  // happy-dom reports selectedIndex -1 for a multiple select with selections, which makes jQuery's val() return [].
  Object.defineProperty(HTMLSelectElement.prototype, 'selectedIndex', {
    ...Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'selectedIndex'),
    get () {
      return Array.from(this.options).findIndex(option => option.selected)
    }
  })

  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/filter-control/bootstrap-table-filter-control.js')
  await import('../../src/extensions/cookie/bootstrap-table-cookie.js')

  $ = globalThis.jQuery || globalThis.$
})

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
const rows = Array.from({ length: 9 }, (_, i) => ({ id: i, category: `Option${i % 3 + 1}` }))

const buildTable = (columnOptions = {}, tableOptions = {}, beforeInit = () => {}) => {
  document.body.innerHTML = '<table id="ms-table"></table>'

  const $table = $('#ms-table')

  beforeInit($table)
  $table.bootstrapTable({
    filterControl: true,
    searchTimeOut: 0,
    columns: [
      { field: 'id', title: 'ID' },
      { field: 'category', title: 'Category', filterControl: 'select', filterControlMultipleSelect: true, ...columnOptions }
    ],
    data: rows,
    ...tableOptions
  })

  return $table
}

const visibleSelect = $table => {
  const instance = $table.data('bootstrap.table')
  const $container = instance.options.height ? instance.$tableHeader : instance.$header

  return $container.find('select.bootstrap-table-filter-control-category')
}

const shownCategories = $table => [...new Set($table.find('tbody tr[data-index] td:nth-child(2)')
  .map((i, td) => td.textContent).get())].sort()

const optionsLoaded = ($table, count = 3) => vi.waitFor(() => expect(visibleSelect($table).find('option').length).toBe(count))
const pluginBuilt = $table => vi.waitFor(() => expect(visibleSelect($table).data('multipleSelect')).toBeDefined())

const installFakeMultipleSelect = () => {
  const calls = []

  $.fn.multipleSelect = function (option, ...args) {
    return this.each((_, element) => {
      const $element = $(element)
      const optionValues = [...element.options].map(o => o.value)

      if (typeof option === 'string') {
        calls.push({ method: option, element, args, optionValues })
        return
      }

      $element.data('multipleSelect', { $el: $element })
      $element.after('<div class="ms-parent"><div class="ms-drop"><div class="ms-search"><input type="text"></div></div></div>')
      calls.push({ method: 'init', element, options: option, optionValues })
    })
  }

  return calls
}

describe('filter-control filterControlMultipleSelect', () => {
  afterEach(() => {
    const $table = $('#ms-table')

    if ($table.data('bootstrap.table')) {
      $table.bootstrapTable('destroy')
    }
    delete $.fn.multipleSelect
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  describe('native select', () => {
    it('shows rows matching any selected value and all rows once cleared', async () => {
      const $table = buildTable()

      await optionsLoaded($table)
      expect(visibleSelect($table).prop('multiple')).toBe(true)

      visibleSelect($table).val(['Option1', 'Option2']).trigger('change')
      await vi.waitFor(() => expect(shownCategories($table)).toEqual(['Option1', 'Option2']))

      visibleSelect($table).val([]).trigger('change')
      await vi.waitFor(() => expect(shownCategories($table)).toEqual(['Option1', 'Option2', 'Option3']))
    })

    it('does not fire column-search for an empty selection on the first render', async () => {
      const events = []

      buildTable({}, { onColumnSearch: (field, text) => events.push([field, text]) })
      await wait(50)

      expect(events).toEqual([])
    })

    it('does not add an empty placeholder option for filterData', async () => {
      window.msCategories = { Option1: 'Option1', Option2: 'Option2', Option3: 'Option3' }

      const $table = buildTable({ filterData: 'var:msCategories', filterControlPlaceholder: 'Pick' })

      await vi.waitFor(() => expect(visibleSelect($table).find('option').map((i, o) => o.value).get()).toEqual(['Option1', 'Option2', 'Option3']))
    })

    it('matches every selected value of a formatted column', async () => {
      const $table = buildTable({ formatter: value => `Label ${value}` })

      await optionsLoaded($table)
      visibleSelect($table).val(['Label Option1', 'Label Option2']).trigger('change')

      await vi.waitFor(() => expect(shownCategories($table)).toEqual(['Label Option1', 'Label Option2']))
    })

    it('keeps only the chosen values after the fixed header is rebuilt', async () => {
      const quotedRows = [...rows, { id: 9, category: 'O\'Reilly' }]
      const $table = buildTable({ filterDefault: 'Option1' }, { height: 300, data: quotedRows }, $el => {
        Object.defineProperty($el[0], 'offsetWidth', { value: 500, configurable: true })
      })

      await vi.waitFor(() => expect(visibleSelect($table).find('option').length).toBe(4))
      visibleSelect($table).val(['Option2', 'O\'Reilly']).trigger('change')
      await vi.waitFor(() => expect(shownCategories($table)).toEqual(['O\'Reilly', 'Option2']))
      $table.bootstrapTable('resetView')
      await wait(50)

      await vi.waitFor(() => expect(visibleSelect($table).val()).toEqual(['Option2', 'O\'Reilly']))
      expect(shownCategories($table)).toEqual(['O\'Reilly', 'Option2'])
    })

    it('keeps a new selection when the header is restored before the search runs', async () => {
      const $table = buildTable({}, { searchTimeOut: 200 })

      await optionsLoaded($table)
      await vi.waitFor(() => expect($table.data('bootstrap.table')._valuesFilterControl).toHaveLength(1))
      visibleSelect($table).val(['Option1']).trigger('change')
      $table.bootstrapTable('resetView')
      await wait(50)

      expect(visibleSelect($table).val()).toEqual(['Option1'])
      await vi.waitFor(() => expect(shownCategories($table)).toEqual(['Option1']))
    })

    it('clearFilterControl deselects the values and shows all rows', async () => {
      const $table = buildTable()

      await optionsLoaded($table)
      visibleSelect($table).val(['Option1']).trigger('change')
      await vi.waitFor(() => expect(shownCategories($table)).toEqual(['Option1']))

      $table.bootstrapTable('clearFilterControl')
      await vi.waitFor(() => expect(shownCategories($table)).toEqual(['Option1', 'Option2', 'Option3']))
      expect(visibleSelect($table).val()).toEqual([])
    })
  })

  describe('multiple-select plugin', () => {
    it('builds the plugin from the column options once they are added', async () => {
      const calls = installFakeMultipleSelect()
      const $table = buildTable({
        filterControlPlaceholder: 'Pick',
        filterControlMultipleSelectOptions: { selectAll: false }
      })

      const builds = () => calls.filter(call => call.element === visibleSelect($table)[0] && call.method !== 'setSelects')

      await vi.waitFor(() => expect(builds().at(-1)?.optionValues).toEqual(['Option1', 'Option2', 'Option3']))
      expect(builds()[0].options).toEqual({ placeholder: 'Pick', container: null, selectAll: false })
    })

    it('keeps the plugin instance while the user filters', async () => {
      const calls = installFakeMultipleSelect()
      const $table = buildTable()

      await optionsLoaded($table)
      await pluginBuilt($table)
      calls.length = 0
      visibleSelect($table).val(['Option2']).trigger('change')

      await vi.waitFor(() => expect(calls.at(-1)).toMatchObject({ method: 'setSelects', args: [['Option2'], 'value', true] }))
      expect(shownCategories($table)).toEqual(['Option2'])
      expect(calls.filter(call => call.method === 'init' || call.method === 'refresh')).toEqual([])
    })

    it('does not treat the plugin search input as a filter control', async () => {
      installFakeMultipleSelect()

      const $table = buildTable()

      await optionsLoaded($table)
      await pluginBuilt($table)
      $table.find('thead .ms-drop input').val('Option3').trigger('keyup')
      await wait(50)
      expect(shownCategories($table)).toEqual(['Option1', 'Option2', 'Option3'])

      visibleSelect($table).val(['Option2']).trigger('change')
      await vi.waitFor(() => expect(shownCategories($table)).toEqual(['Option2']))
    })

    it('builds the plugin only on the visible fixed-header select, with a body container', async () => {
      window.msCategories = { Option1: 'Option1', Option2: 'Option2', Option3: 'Option3' }

      const calls = installFakeMultipleSelect()
      const $table = buildTable({ filterData: 'var:msCategories' }, { height: 300 }, $el => {
        Object.defineProperty($el[0], 'offsetWidth', { value: 500, configurable: true })
      })

      await vi.waitFor(() => expect(visibleSelect($table).data('multipleSelect')).toBeDefined())

      const $select = visibleSelect($table)

      expect($select.data('multipleSelect').$el[0]).toBe($select[0])
      expect($select.siblings('.ms-parent').length).toBe(1)
      expect($table.data('bootstrap.table').$header.find('select').data('multipleSelect')).toBeUndefined()
      expect(calls.find(call => call.element === $select[0] && call.method === 'init').options.container).toBe('body')
    })

    it('closes a fixed-header dropdown when the table is destroyed', async () => {
      const calls = installFakeMultipleSelect()
      const $table = buildTable({}, { height: 300 }, $el => {
        Object.defineProperty($el[0], 'offsetWidth', { value: 500, configurable: true })
      })

      await vi.waitFor(() => expect(visibleSelect($table).data('multipleSelect')).toBeDefined())

      const select = visibleSelect($table)[0]

      $table.bootstrapTable('destroy')
      expect(calls.some(call => call.element === select && call.method === 'close')).toBe(true)
    })

    it('closes a body-mounted dropdown without a height when the table is destroyed', async () => {
      const calls = installFakeMultipleSelect()
      const $table = buildTable({ filterControlMultipleSelectOptions: { container: 'body' } })

      await pluginBuilt($table)

      const select = visibleSelect($table)[0]

      $table.bootstrapTable('destroy')
      expect(calls.some(call => call.element === select && call.method === 'close')).toBe(true)
    })

    it('closes a fixed-header dropdown before load replaces its control', async () => {
      const calls = installFakeMultipleSelect()
      const $table = buildTable({}, { height: 300 }, $el => {
        Object.defineProperty($el[0], 'offsetWidth', { value: 500, configurable: true })
      })

      await vi.waitFor(() => expect(visibleSelect($table).data('multipleSelect')).toBeDefined())

      const select = visibleSelect($table)[0]

      $table.bootstrapTable('load', rows)
      expect(calls.some(call => call.element === select && call.method === 'close')).toBe(true)
    })
  })

  describe('cookie extension', () => {
    afterEach(() => {
      document.cookie = 'ms-cookie.bs.table.filterControl=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    })

    it('restores a saved multi-select filter', async () => {
      const saved = [{ field: 'category', text: ['Option1', 'Option3'] }]

      document.cookie = `ms-cookie.bs.table.filterControl=${encodeURIComponent(JSON.stringify(saved))}`

      const $table = buildTable({}, { cookie: true, cookieIdTable: 'ms-cookie' })

      await vi.waitFor(() => expect(shownCategories($table)).toEqual(['Option1', 'Option3']))
      expect(visibleSelect($table).val()).toEqual(['Option1', 'Option3'])
    })

    it('shows and clears a filter restored before server-side rows arrive', async () => {
      const saved = [{ field: 'category', text: ['Option1'] }]

      document.cookie = `ms-cookie.bs.table.filterControl=${encodeURIComponent(JSON.stringify(saved))}`
      const ajax = request => {
        setTimeout(() => request.success({ total: rows.length, rows }), 1000)
      }
      const $table = buildTable({}, { cookie: true, cookieIdTable: 'ms-cookie', sidePagination: 'server', ajax, data: [] })
      const instance = $table.data('bootstrap.table')

      await vi.waitFor(() => expect(instance.filterColumnsPartial).toEqual({ category: ['Option1'] }))
      expect(visibleSelect($table).val()).toEqual(['Option1'])

      $table.bootstrapTable('clearFilterControl')
      await vi.waitFor(() => expect(instance.filterColumnsPartial).toEqual({}))
    })
  })
})
