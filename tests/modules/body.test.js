import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import BodyModule from '@/modules/body.js'

function createBodyMockContext (overrides = {}) {
  const timeoutIds = {}

  return {
    options: {
      height: 500,
      cardView: false,
      showHeader: true,
      showFooter: false
    },
    $el: {
      is: vi.fn(() => false),
      attr: vi.fn(() => 'test-table'),
      outerWidth: vi.fn(() => 800),
      outerHeight: vi.fn(() => 50),
      css: vi.fn(),
      [0]: document.createElement('table')
    },
    $tableContainer: { toggleClass: vi.fn(), css: vi.fn() },
    $tableHeader: { show: vi.fn(), hide: vi.fn() },
    $tableBody: {
      get: vi.fn(() => ({ scrollWidth: 100, clientWidth: 100 })),
      scrollTop: vi.fn(),
      find: vi.fn(() => ({
        outerHeight: vi.fn(() => 400),
        outerWidth: vi.fn(() => 800),
        is: vi.fn(() => true)
      }))
    },
    $header: { outerHeight: vi.fn(() => 50) },
    $tableFooter: {
      show: vi.fn(),
      hide: vi.fn(),
      outerHeight: vi.fn(() => 30)
    },
    $container: { hasClass: vi.fn(() => false) },
    $toolbar: { outerHeight: vi.fn(() => 40) },
    $pagination: { outerHeight: vi.fn(() => 20) },
    $tableBorder: null,
    _timeoutId: timeoutIds,
    _setDelayTimeout: vi.fn((type, callback, delay) => {
      clearTimeout(timeoutIds[type])
      timeoutIds[type] = setTimeout(callback, delay)
    }),
    resetHeader: vi.fn(),
    resetCaret: vi.fn(),
    fitFooter: vi.fn(),
    trigger: vi.fn(),
    hasScrollBar: false,
    ...overrides
  }
}

describe('BodyModule', () => {
  describe('resetView hidden detection', () => {
    let ctx

    beforeEach(() => {
      vi.useFakeTimers()
      ctx = createBodyMockContext()
      Object.assign(ctx, BodyModule)
    })

    afterEach(() => {
      vi.clearAllTimers()
      vi.useRealTimers()
      vi.restoreAllMocks()
    })

    it('should schedule delayed resetView when table is hidden', () => {
      ctx.$el.is = vi.fn(() => true)

      ctx.resetView()

      expect(ctx._setDelayTimeout).toHaveBeenCalledWith(
        'resetView', expect.any(Function), 100
      )
      expect(ctx.trigger).not.toHaveBeenCalledWith('reset-view', expect.anything())
    })

    it('should not schedule delayed resetView when table is visible', () => {
      ctx.$el.is = vi.fn(() => false)

      ctx.resetView()

      const resetViewCalls = ctx._setDelayTimeout.mock.calls.filter(
        call => call[0] === 'resetView'
      )

      expect(resetViewCalls).toHaveLength(0)
    })

    it('should debounce multiple resetView calls when hidden', () => {
      ctx.$el.is = vi.fn(() => true)

      ctx.resetView()
      ctx.resetView()
      ctx.resetView()

      expect(ctx._setDelayTimeout).toHaveBeenCalledTimes(3)
      const allCalls = ctx._setDelayTimeout.mock.calls
      const resetViewCalls = allCalls.filter(call => call[0] === 'resetView')

      expect(resetViewCalls).toHaveLength(3)
    })

    it('should not schedule delayed resetView when height is not set', () => {
      ctx.options.height = undefined
      ctx.$el.is = vi.fn(() => true)

      ctx.resetView()

      const resetViewCalls = ctx._setDelayTimeout.mock.calls.filter(
        call => call[0] === 'resetView'
      )

      expect(resetViewCalls).toHaveLength(0)
    })

    it('should not schedule timeout when ResizeObserver is active', () => {
      ctx.$el.is = vi.fn(() => true)
      ctx._resizeObserver = { disconnect: vi.fn(), observe: vi.fn() }

      ctx.resetView()

      const resetViewCalls = ctx._setDelayTimeout.mock.calls.filter(
        call => call[0] === 'resetView'
      )

      expect(resetViewCalls).toHaveLength(0)
    })
  })

  describe('scrollTo with rows unit', () => {
    let ctx
    let original$

    // A stand-in for the jQuery collection of body rows
    function createRows (rows) {
      return {
        length: rows.length,
        not: selector => createRows(rows.filter(row => !selector.split(', ').includes(`.${row.className}`))),
        slice: (start, end) => createRows(rows.slice(start, end)),
        each: callback => rows.forEach((row, i) => callback(i, row))
      }
    }

    function setBodyRows (rows) {
      ctx.$body = {
        find: vi.fn(selector => {
          const lt = selector.match(/:lt\((\d+)\)/)

          return createRows(lt ? rows.slice(0, Number(lt[1])) : rows)
        })
      }
    }

    function renderedRows (count, height = 20) {
      return Array.from({ length: count }, () => ({ className: '', height }))
    }

    beforeEach(() => {
      original$ = global.$
      // @ts-expect-error - testing purposes
      global.$ = el => ({ outerHeight: () => el.height })
      ctx = createBodyMockContext()
      Object.assign(ctx, BodyModule)
    })

    afterEach(() => {
      // @ts-expect-error - testing purposes
      global.$ = original$
      vi.restoreAllMocks()
    })

    it('should sum the heights of the rows above the target row', () => {
      setBodyRows([...renderedRows(2, 20), ...renderedRows(3, 30)])

      ctx.scrollTo({ unit: 'rows', value: 4 })

      expect(ctx.$tableBody.scrollTop).toHaveBeenCalledWith(100)
    })

    it('should not count the bottom spacer of the virtual scroll', () => {
      ctx.options.virtualScroll = true
      ctx.virtualScroll = { itemHeight: 20, startIndex: 0 }
      setBodyRows([...renderedRows(200), { className: 'virtual-scroll-bottom', height: 9800 * 20 }])

      ctx.scrollTo({ unit: 'rows', value: 150 })
      expect(ctx.$tableBody.scrollTop).toHaveBeenLastCalledWith(150 * 20)

      ctx.scrollTo({ unit: 'rows', value: 225 })
      expect(ctx.$tableBody.scrollTop).toHaveBeenLastCalledWith(225 * 20)
    })

    it('should count the rows replaced by the top spacer of the virtual scroll', () => {
      ctx.options.virtualScroll = true
      ctx.virtualScroll = { itemHeight: 20, startIndex: 1050 }
      setBodyRows([
        { className: 'virtual-scroll-top', height: 1050 * 20 },
        ...renderedRows(200),
        { className: 'virtual-scroll-bottom', height: 8750 * 20 }
      ])

      ctx.scrollTo({ unit: 'rows', value: 100 })
      expect(ctx.$tableBody.scrollTop).toHaveBeenLastCalledWith(100 * 20)

      ctx.scrollTo({ unit: 'rows', value: 1100 })
      expect(ctx.$tableBody.scrollTop).toHaveBeenLastCalledWith(1100 * 20)

      ctx.scrollTo({ unit: 'rows', value: 5000 })
      expect(ctx.$tableBody.scrollTop).toHaveBeenLastCalledWith(5000 * 20)
    })

    it('should use the rendered rows when the virtual scroll has no spacers', () => {
      ctx.options.virtualScroll = true
      ctx.virtualScroll = { itemHeight: 20, startIndex: undefined }
      setBodyRows([...renderedRows(10, 20), ...renderedRows(10, 40)])

      ctx.scrollTo({ unit: 'rows', value: 15 })

      expect(ctx.$tableBody.scrollTop).toHaveBeenCalledWith(10 * 20 + 5 * 40)
    })
  })
})
