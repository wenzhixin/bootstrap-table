import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('filter-control utils', () => {
  describe('setCaretPosition', () => {
    let original$
    let setCaretPosition

    beforeEach(async () => {
      vi.resetModules()
      original$ = globalThis.$
      globalThis.$ = {
        fn: {
          bootstrapTable: {
            utils: {}
          }
        },
        inArray: vi.fn()
      }
      const utils = await import('@/extensions/filter-control/utils.js')

      setCaretPosition = utils.setCaretPosition
    })

    afterEach(() => {
      globalThis.$ = original$
      vi.restoreAllMocks()
    })

    it('sets the caret for text-like filter inputs', () => {
      const input = document.createElement('input')
      const setSelectionRange = vi.fn()

      input.type = 'search'
      input.setSelectionRange = setSelectionRange

      setCaretPosition(input, 3)

      expect(setSelectionRange).toHaveBeenCalledWith(3, 3)
    })

    it('skips unsupported input types without logging an error', () => {
      const input = document.createElement('input')
      const setSelectionRange = vi.fn(() => {
        throw new Error('unsupported input type')
      })
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      input.type = 'date'
      input.setSelectionRange = setSelectionRange

      setCaretPosition(input, -1)

      expect(setSelectionRange).not.toHaveBeenCalled()
      expect(consoleError).not.toHaveBeenCalled()
    })

    it('skips select filter controls even if a selection API is present', () => {
      const select = document.createElement('select')
      const setSelectionRange = vi.fn()
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      select.setSelectionRange = setSelectionRange

      setCaretPosition(select, -1)

      expect(setSelectionRange).not.toHaveBeenCalled()
      expect(consoleError).not.toHaveBeenCalled()
    })
  })

  describe('collectBootstrapTableFilterCookies', () => {
    let original$
    let collectBootstrapTableFilterCookies

    beforeEach(async () => {
      vi.resetModules()
      original$ = globalThis.$
      globalThis.$ = {
        fn: {
          bootstrapTable: {
            utils: {}
          }
        },
        inArray: (value, array) => array.indexOf(value),
        each: (array, callback) => array.forEach((value, i) => callback(i, value))
      }
      const utils = await import('@/extensions/filter-control/utils.js')

      collectBootstrapTableFilterCookies = utils.collectBootstrapTableFilterCookies
      localStorage.clear()
    })

    afterEach(() => {
      globalThis.$ = original$
      localStorage.clear()
    })

    it('finds both names when the filterControl key comes first', () => {
      localStorage.setItem('table.bs.table.filterControl', '[]')
      localStorage.setItem('table.bs.table.searchText', 'abc')

      expect(collectBootstrapTableFilterCookies().sort()).toEqual(['filterControl', 'searchText'])
    })

    it('finds both names when the searchText key comes first', () => {
      localStorage.setItem('table.bs.table.searchText', 'abc')
      localStorage.setItem('table.bs.table.filterControl', '[]')

      expect(collectBootstrapTableFilterCookies().sort()).toEqual(['filterControl', 'searchText'])
    })

    it('ignores keys that are not bootstrap table cookies', () => {
      localStorage.setItem('other', '1')
      localStorage.setItem('table.bs.table.searchText', 'abc')

      expect(collectBootstrapTableFilterCookies()).toEqual(['searchText'])
    })
  })
})
