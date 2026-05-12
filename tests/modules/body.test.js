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
})
