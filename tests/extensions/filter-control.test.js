import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { beforeAll, describe, expect, it, vi } from 'vitest'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SOURCE_PATH = path.resolve(
  __dirname,
  '../../src/extensions/filter-control/bootstrap-table-filter-control.js'
)

describe('filter-control issue #8246', () => {
  describe('source regression guards', () => {
    let source

    beforeAll(() => {
      source = fs.readFileSync(SOURCE_PATH, 'utf-8')
    })

    it('declares _isFilterControlInitialRender in defaults', () => {
      expect(source).toMatch(/_isFilterControlInitialRender:\s*false/)
    })

    it('resets _isFilterControlInitialRender in init()', () => {
      expect(source).toMatch(/this\._isFilterControlInitialRender\s*=\s*false/)
    })

    it('initHeader() sets the flag, schedules a cleanup, and keeps _initialized = true', () => {
      const match = source.match(/initHeader\s*\(\s*\)\s*\{[\s\S]*?\n {2}\}/)

      expect(match, 'initHeader block must be present').not.toBeNull()
      const initHeaderBody = match[0]

      expect(initHeaderBody).toMatch(/this\._isFilterControlInitialRender\s*=\s*true/)
      expect(initHeaderBody).toMatch(/this\._initialized\s*=\s*true/)
      expect(initHeaderBody).toMatch(/setTimeout\s*\(/)
      expect(initHeaderBody).toMatch(/this\.options\.searchTimeOut\s*\+\s*50/)
    })

    it('onColumnSearch derives isInitialRender from both flags', () => {
      expect(source).toMatch(
        /const isInitialRender = !this\._initialized \|\| this\._isFilterControlInitialRender/
      )
    })
  })

  describe('isInitialRender truth table', () => {
    const computeIsInitialRender = state =>
      !state._initialized || state._isFilterControlInitialRender

    it('treats pre-initialization as initial render', () => {
      expect(
        computeIsInitialRender({ _initialized: false, _isFilterControlInitialRender: false })
      ).toBe(true)
    })

    it('treats the initHeader grace window as initial render (the #8246 fix)', () => {
      expect(
        computeIsInitialRender({ _initialized: true, _isFilterControlInitialRender: true })
      ).toBe(true)
    })

    it('treats user-initiated searches after the grace window as not initial', () => {
      expect(
        computeIsInitialRender({ _initialized: true, _isFilterControlInitialRender: false })
      ).toBe(false)
    })

    it('treats not-initialized state as initial even if the flag is somehow true', () => {
      expect(
        computeIsInitialRender({ _initialized: false, _isFilterControlInitialRender: true })
      ).toBe(true)
    })
  })

  describe('onColumnSearch effect simulation', () => {
    function simulateOnColumnSearch (state) {
      const ctx = {
        _initialized: state._initialized,
        _isFilterControlInitialRender: state._isFilterControlInitialRender,
        _filterControlValuesLoaded: state._filterControlValuesLoaded ?? false,
        options: {
          cookie: state.cookie,
          pageNumber: state.pageNumber
        },
        onSearch: vi.fn()
      }

      const isInitialRender = !ctx._initialized || ctx._isFilterControlInitialRender

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
        _isFilterControlInitialRender: true,
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

    it('user-initiated cookie+filter search after the grace window does NOT reset pageNumber inside filter-control, but signals core onSearch to reset', () => {
      const ctx = simulateOnColumnSearch({
        _initialized: true,
        _isFilterControlInitialRender: false,
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

    it('non-cookie user search after the grace window resets pageNumber to 1', () => {
      const ctx = simulateOnColumnSearch({
        _initialized: true,
        _isFilterControlInitialRender: false,
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
        _isFilterControlInitialRender: false,
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
})
