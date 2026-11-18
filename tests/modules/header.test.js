import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import HeaderModule from '@/modules/header.js'

function createHeaderMockContext (overrides = {}) {
  const timeoutIds = {}

  return {
    options: {
      height: 500,
      cardView: false,
      showHeader: true,
      showFooter: false,
      columns: [[]],
      detailView: false,
      sortable: false,
      escape: false,
      escapeTitle: false,
      singleSelect: false,
      checkboxHeader: true
    },
    columns: [],
    _headerTrClasses: [''],
    _headerTrStyles: [''],
    header: {},
    $el: {
      is: vi.fn(() => false),
      attr: vi.fn(() => 'test-table'),
      find: vi.fn(() => ({ each: vi.fn(), data: vi.fn() })),
      [0]: document.createElement('table')
    },
    $header: {
      html: vi.fn(),
      show: vi.fn(),
      hide: vi.fn(),
      outerHeight: vi.fn(() => 50),
      find: vi.fn(() => ({
        each: vi.fn(),
        data: vi.fn(),
        off: vi.fn(() => ({ on: vi.fn() }))
      }))
    },
    $container: { off: vi.fn(() => ({ on: vi.fn() })) },
    $tableHeader: { show: vi.fn(), hide: vi.fn() },
    $tableLoading: { css: vi.fn() },
    $selectAll: { off: vi.fn(), on: vi.fn() },
    _timeoutId: timeoutIds,
    _setDelayTimeout: vi.fn((type, callback, delay) => {
      clearTimeout(timeoutIds[type])
      timeoutIds[type] = setTimeout(callback, delay)
    }),
    resetView: vi.fn(),
    resetCaret: vi.fn(),
    _resizeObserver: null,
    destroy () {
      for (const type of Object.keys(this._timeoutId)) {
        clearTimeout(this._timeoutId[type])
      }
      if (this._resizeObserver) {
        this._resizeObserver.disconnect()
        this._resizeObserver = null
      }
    },
    ...overrides
  }
}

describe('HeaderModule', () => {
  describe('ResizeObserver hidden-to-visible detection', () => {
    let ctx
    let originalResizeObserver
    let original$

    beforeEach(() => {
      originalResizeObserver = globalThis.ResizeObserver
      // @ts-expect-error - testing purposes
      original$ = global.$
      // @ts-expect-error - testing purposes
      global.$ = vi.fn(() => ({ off: vi.fn(), on: vi.fn() }))
      ctx = createHeaderMockContext()
      Object.assign(ctx, HeaderModule)
    })

    afterEach(() => {
      if (ctx._resizeObserver) {
        ctx._resizeObserver.disconnect()
        ctx._resizeObserver = null
      }
      globalThis.ResizeObserver = originalResizeObserver
      // @ts-expect-error - testing purposes
      global.$ = original$
      vi.restoreAllMocks()
    })

    it('should create ResizeObserver when table is hidden at init', () => {
      globalThis.ResizeObserver = vi.fn(function (cb) {
        this.callback = cb
        this.observe = vi.fn()
        this.disconnect = vi.fn()
      })
      ctx.$el.is = vi.fn(() => true)

      ctx.initHeader()

      expect(ctx._resizeObserver).toBeTruthy()
      expect(ctx._resizeObserver.observe).toHaveBeenCalledWith(ctx.$el[0])
    })

    it('should not create ResizeObserver when table is visible at init', () => {
      const MockRO = vi.fn(function (cb) {
        this.callback = cb
        this.observe = vi.fn()
        this.disconnect = vi.fn()
      })

      globalThis.ResizeObserver = MockRO
      ctx.$el.is = vi.fn(() => false)

      ctx.initHeader()

      expect(ctx._resizeObserver).toBeNull()
      expect(MockRO).not.toHaveBeenCalled()
    })

    it('should call resetView and disconnect when hidden-to-visible is detected', () => {
      let observerCallback

      globalThis.ResizeObserver = vi.fn(function (cb) {
        observerCallback = cb
        this.observe = vi.fn()
        this.disconnect = vi.fn()
      })
      ctx.$el.is = vi.fn(() => true)

      ctx.initHeader()

      expect(observerCallback).toBeDefined()

      const observer = ctx._resizeObserver

      observerCallback([{
        contentRect: { width: 800, height: 600 }
      }])

      expect(observer.disconnect).toHaveBeenCalled()
      expect(ctx.resetView).toHaveBeenCalled()
    })

    it('should disconnect observer after first hidden-to-visible trigger', () => {
      let observerCallback

      globalThis.ResizeObserver = vi.fn(function (cb) {
        observerCallback = cb
        this.observe = vi.fn()
        this.disconnect = vi.fn()
      })
      ctx.$el.is = vi.fn(() => true)

      ctx.initHeader()

      observerCallback([{
        contentRect: { width: 800, height: 600 }
      }])

      expect(ctx.resetView).toHaveBeenCalledTimes(1)
      expect(ctx._resizeObserver).toBeNull()
    })

    it('should not trigger resetView while still hidden', () => {
      let observerCallback

      globalThis.ResizeObserver = vi.fn(function (cb) {
        observerCallback = cb
        this.observe = vi.fn()
        this.disconnect = vi.fn()
      })
      ctx.$el.is = vi.fn(() => true)

      ctx.initHeader()

      observerCallback([{
        contentRect: { width: 0, height: 0 }
      }])

      expect(ctx.resetView).not.toHaveBeenCalled()
      expect(ctx._resizeObserver.disconnect).not.toHaveBeenCalled()
    })

    it('should not trigger resetView when only one dimension is non-zero', () => {
      let observerCallback

      globalThis.ResizeObserver = vi.fn(function (cb) {
        observerCallback = cb
        this.observe = vi.fn()
        this.disconnect = vi.fn()
      })
      ctx.$el.is = vi.fn(() => true)

      ctx.initHeader()

      observerCallback([{
        contentRect: { width: 800, height: 0 }
      }])

      expect(ctx.resetView).not.toHaveBeenCalled()
      expect(ctx._resizeObserver.disconnect).not.toHaveBeenCalled()
    })

    it('should disconnect existing observer before creating a new one', () => {
      const disconnectSpy = vi.fn()
      const oldObserver = { disconnect: disconnectSpy, observe: vi.fn() }

      ctx._resizeObserver = oldObserver

      globalThis.ResizeObserver = vi.fn(function (cb) {
        this.callback = cb
        this.observe = vi.fn()
        this.disconnect = vi.fn()
      })
      ctx.$el.is = vi.fn(() => true)

      ctx.initHeader()

      expect(disconnectSpy).toHaveBeenCalled()
      expect(ctx._resizeObserver).toBeTruthy()
      expect(ctx._resizeObserver).not.toBe(oldObserver)
    })
  })

  describe('destroy cleanup', () => {
    it('should disconnect ResizeObserver on destroy', () => {
      const mockDisconnect = vi.fn()
      const ctx = createHeaderMockContext({
        _resizeObserver: {
          disconnect: mockDisconnect
        }
      })

      ctx.destroy()

      expect(mockDisconnect).toHaveBeenCalled()
      expect(ctx._resizeObserver).toBeNull()
    })

    it('should handle destroy when no ResizeObserver exists', () => {
      const ctx = createHeaderMockContext({
        _resizeObserver: null
      })

      expect(() => ctx.destroy()).not.toThrow()
    })
  })
})
