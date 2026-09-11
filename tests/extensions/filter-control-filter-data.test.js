import { beforeAll, describe, expect, it } from 'vitest'

let $
let UtilsFilterControl

beforeAll(async () => {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }

  // happy-dom does not expose a global Option constructor, which
  // addOptionToSelectControl relies on. Inert on environments that do.
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
  UtilsFilterControl = await import('../../src/extensions/filter-control/utils.js')

  $ = globalThis.jQuery || globalThis.$
})

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

const buildTable = id => {
  window.statusList = { A: 'Active', I: 'Inactive' }
  document.body.innerHTML = `<table id="${id}"></table>`

  const $table = $(`#${id}`)

  $table.bootstrapTable({
    filterControl: true,
    columns: [
      { field: 'id', title: 'ID', filterControl: 'input' },
      { field: 'status', title: 'Status', filterControl: 'select', filterData: 'var:statusList' }
    ],
    data: [
      { id: 1, status: 'Active' },
      { id: 2, status: 'Inactive' }
    ]
  })

  return $table
}

const statusOptionValues = $table => $table.closest('.bootstrap-table')
  .find('select.bootstrap-table-filter-control-status option')
  .map((i, option) => option.value)
  .get()

describe('filter-control filterData against a non-select control (issue #8238)', () => {
  describe('select helpers tolerate a non-select element', () => {
    it('getOptionsFromSelectControl returns an empty list instead of undefined', () => {
      const $input = $('<input type="search" class="bootstrap-table-filter-control-status">')

      // Returning undefined here is what produced
      // `TypeError: can't access property "length", <options> is undefined`
      expect(UtilsFilterControl.getOptionsFromSelectControl($input)).toEqual([])
      expect(UtilsFilterControl.getOptionsFromSelectControl($())).toEqual([])
      expect(UtilsFilterControl.getOptionsFromSelectControl(undefined)).toEqual([])
    })

    it('existOptionInSelectControl does not throw for a non-select', () => {
      const $input = $('<input type="search">')

      expect(() => UtilsFilterControl.existOptionInSelectControl($input, 'A')).not.toThrow()
      expect(UtilsFilterControl.existOptionInSelectControl($input, 'A')).toBe(false)
    })

    it('addOptionToSelectControl is a no-op for a non-select', () => {
      const $input = $('<input type="search">')

      expect(() => UtilsFilterControl.addOptionToSelectControl($input, 'A', 'Active', '')).not.toThrow()
      expect($input.children().length).toBe(0)
    })

    it('sortSelectControl is a no-op for a non-select', () => {
      const $input = $('<input type="search">')

      expect(() => UtilsFilterControl.sortSelectControl($input, 'asc', {})).not.toThrow()
    })

    it('getSelectControlElement only accepts real select elements', () => {
      expect(UtilsFilterControl.getSelectControlElement($('<input type="search">'))).toBeUndefined()
      expect(UtilsFilterControl.getSelectControlElement($('<select></select>'))).toBeDefined()
      expect(UtilsFilterControl.getSelectControlElement($())).toBeUndefined()
    })
  })

  describe('createControls', () => {
    it('populates a filterData select normally', async () => {
      const $table = buildTable('fd-happy')

      await wait(50)

      expect(statusOptionValues($table)).toEqual(['', 'A', 'I'])

      $table.bootstrapTable('destroy')
      document.body.innerHTML = ''
    })

    it('does not throw when the control carrying the class is an input', async () => {
      const $table = buildTable('fd-swapped')

      await wait(50)

      const instance = $table.data('bootstrap.table')
      const $header = instance.$header
      const $th = $header.find('th[data-field="status"]')

      expect($th.length).toBe(1)
      expect($header.find('select.bootstrap-table-filter-control-status').length).toBe(1)

      // Reproduce the state a reorder-columns drag leaves behind. Two things
      // have to hold for the reported crash: the header cell for the column is
      // not matched (so createControls does not regenerate the control), and
      // the filter-control class is left on an input rather than a select.
      $th.removeAttr('data-field').removeData('field')
      $header.find('select.bootstrap-table-filter-control-status')
        .replaceWith('<input type="search" class="bootstrap-table-filter-control-status search-input">')

      expect($header.find('input.bootstrap-table-filter-control-status').length).toBe(1)
      expect($header.find('select.bootstrap-table-filter-control-status').length).toBe(0)

      expect(() => {
        UtilsFilterControl.createControls(instance, $header)
      }).not.toThrow()

      $table.bootstrapTable('destroy')
      document.body.innerHTML = ''
    })
  })
})
