import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { beforeAll, describe, expect, it, vi } from 'vitest'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const FILTER_CONTROL_PATH = path.resolve(
  __dirname,
  '../../src/extensions/filter-control/bootstrap-table-filter-control.js'
)
const FILTER_CONTROL_UTILS_PATH = path.resolve(
  __dirname,
  '../../src/extensions/filter-control/utils.js'
)

describe('filter-control issue #8246', () => {
  describe('source regression guards', () => {
    let mainSource
    let utilsSource

    beforeAll(() => {
      mainSource = fs.readFileSync(FILTER_CONTROL_PATH, 'utf-8')
      utilsSource = fs.readFileSync(FILTER_CONTROL_UTILS_PATH, 'utf-8')
    })

    it('triggerSearch() accepts an isInitial parameter and forwards it via trigger data', () => {
      const match = mainSource.match(/triggerSearch\s*\([^)]*\)\s*\{[\s\S]*?\n {2}\}/)

      expect(match, 'triggerSearch block must be present').not.toBeNull()
      const body = match[0]

      expect(body).toMatch(/triggerSearch\s*\(\s*isInitial\s*=\s*false\s*\)/)
      expect(body).toMatch(/\.trigger\('change',\s*\{\s*isInitial\s*\}\)/)
      expect(body).toMatch(/\.trigger\('keyup',\s*\{\s*isInitial\s*\}\)/)
    })

    it('createControls calls triggerSearch(true) for the initial render', () => {
      expect(utilsSource).toMatch(/that\.triggerSearch\s*\(\s*true\s*\)/)
    })

    it('keyup handler reads isInitial from event data and forwards to onColumnSearch', () => {
      // capture from the keyup binding up to (but not including) the next binding
      const m = utilsSource.match(/header\.off\('keyup',\s*'input'\)[\s\S]*?(?=header\.off\(|$)/)

      expect(m, 'keyup handler must be present').not.toBeNull()
      const body = m[0]

      expect(body).toMatch(/const isInitial\s*=\s*!!\(obj && obj\.isInitial\)/)
      expect(body).toMatch(/onColumnSearch\(\{[^}]*isInitial[^}]*\}\)/)
    })

    it('change handler on select reads isInitial from event data and forwards to onColumnSearch', () => {
      const m = utilsSource.match(/header\.off\('change',\s*'select'\)[\s\S]*?(?=header\.off\(|$)/)

      expect(m, 'select change handler must be present').not.toBeNull()
      const body = m[0]

      expect(body).toMatch(/const isInitial\s*=\s*!!\(obj && obj\.isInitial\)/)
      expect(body).toMatch(/onColumnSearch\(\{[^}]*isInitial[^}]*\}\)/)
    })

    it('onColumnSearch derives isInitialRender from _initialized OR the per-call isInitial flag', () => {
      expect(mainSource).toMatch(
        /onColumnSearch\s*\(\{[^}]*\bisInitial\b[^}]*\}\)/
      )
      expect(mainSource).toMatch(
        /const isInitialRender = !this\._initialized \|\| isInitial === true/
      )
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
})
