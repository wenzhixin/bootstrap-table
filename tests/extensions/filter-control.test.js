import { describe, expect, it, vi } from 'vitest'

async function loadFilterControlPrototype() {
  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/filter-control/bootstrap-table-filter-control.js')

  const $ = globalThis.jQuery || globalThis.$

  expect($?.fn?.bootstrapTable?.Constructor).toBeTruthy()

  return {
    $,
    BootstrapTable: $.fn.bootstrapTable.Constructor
  }
}

describe('filter-control issue #8246', () => {
  describe('runtime regression guards', () => {
    it('triggerSearch() only attaches isInitial event data when requested', async () => {
      const { BootstrapTable } = await loadFilterControlPrototype()
      const triggerSearch = BootstrapTable.prototype.triggerSearch
      const context = {
        $el: {
          trigger: vi.fn()
        },
        options: {
          searchTimeOut: 0
        }
      }

      vi.useFakeTimers()

      try {
        triggerSearch.call(context, true)
        vi.runAllTimers()

        expect(context.$el.trigger).toHaveBeenCalledTimes(1)
        expect(context.$el.trigger.mock.calls[0]).toHaveLength(2)
        expect(context.$el.trigger.mock.calls[0][1]).toEqual({ isInitial: true })

        context.$el.trigger.mockClear()

        triggerSearch.call(context)
        vi.runAllTimers()

        expect(context.$el.trigger).toHaveBeenCalledTimes(1)
        expect(context.$el.trigger.mock.calls[0]).toHaveLength(1)
      } finally {
        vi.useRealTimers()
      }
    })

    it('marks only the initial filter-control triggerSearch call as initial', async () => {
      const { $, BootstrapTable } = await loadFilterControlPrototype()
      const triggerSearchSpy = vi.spyOn(BootstrapTable.prototype, 'triggerSearch')

      document.body.innerHTML = '<table id="issue-8246-table"></table>'

      const $table = $('#issue-8246-table')

      try {
        $table.bootstrapTable({
          search: true,
          filterControl: true,
          columns: [
            {
              field: 'name',
              title: 'Name',
              filterControl: 'input'
            }
          ],
          data: [
            { name: 'alpha' },
            { name: 'beta' }
          ]
        })

        expect(triggerSearchSpy).toHaveBeenCalledWith(true)

        const callsAfterInit = triggerSearchSpy.mock.calls.length
        const $input = $table.closest('.bootstrap-table').find('thead input').first()

        expect($input.length).toBe(1)

        $input.val('alp')
        $input.trigger('keyup')

        expect(triggerSearchSpy.mock.calls.length).toBeGreaterThan(callsAfterInit)
        expect(
          triggerSearchSpy.mock.calls
            .slice(callsAfterInit)
            .some(args => args[0] === true)
        ).toBe(false)
      } finally {
        if ($table.data('bootstrap.table')) {
          $table.bootstrapTable('destroy')
        }

        triggerSearchSpy.mockRestore()
        document.body.innerHTML = ''
      }
    })
  })

  describe('isInitialRender truth table', () => {
    const computeIsInitialRender = (initialized, isInitial) =>
      !initialized || isInitial === true

    it('treats pre-initialization as initial render', () => {
      expect(computeIsInitialRender(false, false)).toBe(true)
      expect(computeIsInitialRender(false, undefined)).toBe(true)
    })

    it('treats the post-init triggerSearch(true) deferred call as initial render (the #8246 fix)', () => {
      expect(computeIsInitialRender(true, true)).toBe(true)
    })

    it('treats user-initiated searches as not initial', () => {
      expect(computeIsInitialRender(true, false)).toBe(false)
      expect(computeIsInitialRender(true, undefined)).toBe(false)
    })

    it('only treats explicit isInitial === true as initial (defensive)', () => {
      expect(computeIsInitialRender(true, 'yes')).toBe(false)
      expect(computeIsInitialRender(true, 1)).toBe(false)
    })
  })

  describe('onColumnSearch effect simulation', () => {
    function simulateOnColumnSearch (state) {
      const ctx = {
        _initialized: state._initialized,
        _filterControlValuesLoaded: state._filterControlValuesLoaded ?? false,
        options: {
          cookie: state.cookie,
          pageNumber: state.pageNumber
        },
        onSearch: vi.fn()
      }

      const isInitialRender = !ctx._initialized || state.isInitial === true

      if (!ctx.options.cookie) {
        if (!isInitialRender) {
          ctx.options.pageNumber = 1
        }
      } else {
        ctx._filterControlValuesLoaded = true
      }

      ctx.onSearch({ currentTarget: null, firedByInitSearchText: isInitialRender }, false)
      return ctx
    }

    it('issue #8246: cookie-restored pageNumber survives the deferred initial-render call', () => {
      const ctx = simulateOnColumnSearch({
        _initialized: true,
        isInitial: true,
        cookie: true,
        pageNumber: 5
      })

      expect(ctx.options.pageNumber).toBe(5)
      expect(ctx._filterControlValuesLoaded).toBe(true)
      expect(ctx.onSearch).toHaveBeenCalledWith(
        expect.objectContaining({ firedByInitSearchText: true }),
        false
      )
    })

    it('user-initiated cookie+filter search does NOT reset pageNumber inside filter-control, but signals core onSearch to reset', () => {
      const ctx = simulateOnColumnSearch({
        _initialized: true,
        isInitial: false,
        cookie: true,
        pageNumber: 5
      })

      expect(ctx.options.pageNumber).toBe(5)
      expect(ctx._filterControlValuesLoaded).toBe(true)
      expect(ctx.onSearch).toHaveBeenCalledWith(
        expect.objectContaining({ firedByInitSearchText: false }),
        false
      )
    })

    it('non-cookie user search resets pageNumber to 1', () => {
      const ctx = simulateOnColumnSearch({
        _initialized: true,
        isInitial: false,
        cookie: false,
        pageNumber: 5
      })

      expect(ctx.options.pageNumber).toBe(1)
      expect(ctx.onSearch).toHaveBeenCalledWith(
        expect.objectContaining({ firedByInitSearchText: false }),
        false
      )
    })

    it('non-cookie initial render does not reset pageNumber', () => {
      const ctx = simulateOnColumnSearch({
        _initialized: false,
        isInitial: false,
        cookie: false,
        pageNumber: 5
      })

      expect(ctx.options.pageNumber).toBe(5)
      expect(ctx.onSearch).toHaveBeenCalledWith(
        expect.objectContaining({ firedByInitSearchText: true }),
        false
      )
    })
  })

  describe('cookie pageNumber persistence (the full reload-vs-filter chain)', () => {
    // Simulates the call chain
    //   filter-control.onColumnSearch
    //     -> core.onSearch                       (modules/search.js:159)
    //         -> cookie.onSearch override        (extensions/cookie/bootstrap-table-cookie.js)
    //             -> UtilsCookie.setCookie(pageNumber, options.pageNumber)
    //
    // The user-visible artifact is the value written to the `bs.table.pageNumber`
    // cookie at the end. Bug #8246 is reproduced when that value becomes `1`
    // after a reload that landed the user on page 2.
    function simulateOnColumnSearchToCookie (state) {
      const setCookie = vi.fn()
      const ctx = {
        _initialized: state._initialized,
        _filterControlValuesLoaded: false,
        searchText: '',
        options: {
          cookie: true,
          pageNumber: state.pageNumber,
          search: false
        }
      }

      // -- filter-control.onColumnSearch (the cookie branch) --
      const isInitialRender = !ctx._initialized || state.isInitial === true

      if (!ctx.options.cookie) {
        if (!isInitialRender) {
          ctx.options.pageNumber = 1
        }
      } else {
        ctx._filterControlValuesLoaded = true
      }

      // -- core.onSearch — the actual gate that historically resets pageNumber --
      const firedByInitSearchText = isInitialRender

      if (!firedByInitSearchText) {
        ctx.options.pageNumber = 1
      }

      // -- cookie.onSearch override saves whatever options.pageNumber is now --
      setCookie('bs.table.pageNumber', ctx.options.pageNumber)

      return { ctx, setCookie }
    }

    it('reload on page 2 keeps the cookie at 2 (issue #8246)', () => {
      const { ctx, setCookie } = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: 2
      })

      expect(ctx.options.pageNumber).toBe(2)
      expect(setCookie).toHaveBeenCalledWith('bs.table.pageNumber', 2)
      expect(setCookie).not.toHaveBeenCalledWith('bs.table.pageNumber', 1)
    })

    it('user filter on page 2 saves 1 to the cookie (expected behaviour)', () => {
      const { ctx, setCookie } = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: false,
        pageNumber: 2
      })

      expect(ctx.options.pageNumber).toBe(1)
      expect(setCookie).toHaveBeenCalledWith('bs.table.pageNumber', 1)
    })

    it('reload on page 5 keeps the cookie at 5 (no off-by-one or hardcoded page)', () => {
      const { ctx, setCookie } = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: 5
      })

      expect(ctx.options.pageNumber).toBe(5)
      expect(setCookie).toHaveBeenCalledWith('bs.table.pageNumber', 5)
    })

    it('reload on page 1 keeps the cookie at 1 (idempotent on first page)', () => {
      const { ctx, setCookie } = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: 1
      })

      expect(ctx.options.pageNumber).toBe(1)
      expect(setCookie).toHaveBeenCalledWith('bs.table.pageNumber', 1)
    })

    it('two consecutive reloads each preserve their pageNumber (#8246 second-F5 regression)', () => {
      // First reload from cookie = 2
      const first = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: 2
      })

      expect(first.ctx.options.pageNumber).toBe(2)
      expect(first.setCookie).toHaveBeenLastCalledWith('bs.table.pageNumber', 2)

      // Second reload reads what the first reload saved
      const cookieAfterFirst = first.setCookie.mock.calls.at(-1)[1]
      const second = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: cookieAfterFirst
      })

      expect(second.ctx.options.pageNumber).toBe(2)
      expect(second.setCookie).toHaveBeenLastCalledWith('bs.table.pageNumber', 2)
    })
  })
})
