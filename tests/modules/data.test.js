import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import DataModule from '@/modules/data.js'
import { normalizeOrderList } from '@/utils/search-sort.js'

// Self-referencing jQuery chain stub: any of `add/find/eq/remove` returns the
// same chain, so the header DOM calls in onSort are no-ops without nesting.
const headerChain = {
  add: () => headerChain,
  find: () => headerChain,
  eq: () => headerChain,
  remove: () => headerChain
}

// Builds a minimal `this` context for exercising DataModule.onSort in isolation.
// orderList inputs are normalized the same way init/initHeader do, so tests can
// pass raw strings/arrays and observe the post-init behavior.
function createSortContext ({ options = {}, columns = [] } = {}) {
  const ctx = {
    options: {
      sortName: undefined,
      sortOrder: undefined,
      sortReset: false,
      rememberOrder: false,
      sidePagination: 'client',
      ...options,
      orderList: normalizeOrderList(options.orderList)
    },
    // per-field remembered order, written by onSort via `$el.data('order', val)`
    _remembered: {},
    $header: headerChain,
    $header_: {}
  }

  ctx.columns = columns.map(column => ({ ...column, orderList: normalizeOrderList(column.orderList) }))
  ctx.fieldsColumnsIndex = {}
  ctx.columns.forEach((column, i) => {
    ctx.fieldsColumnsIndex[column.field] = i
  })
  Object.assign(ctx, DataModule)
  // DataModule also defines _sort; override it (and resetCaret) AFTER the merge
  // so onSort's tail calls are no-ops in this isolated test.
  ctx._sort = vi.fn()
  ctx.resetCaret = vi.fn()
  return ctx
}

// Simulates a click on a column header for `field`, returning the resulting sort state.
function click (ctx, field) {
  const $this = {
    data (key, val) {
      if (arguments.length === 1) {
        return key === 'field' ? field : ctx._remembered[field]
      }
      if (key === 'order') {
        ctx._remembered[field] = val
      }
    },
    index () {
      return 0
    },
    add () {
      return this
    }
  }

  // @ts-expect-error - `$` is a rollup-injected global, mocked here for tests
  global.$ = vi.fn(() => ({ parent: () => $this }))
  ctx.onSort({ type: 'click', currentTarget: {} })
  return { sortName: ctx.options.sortName, sortOrder: ctx.options.sortOrder }
}

// Clicks the same field `times` times and collects the sortOrder after each click.
function cycleOf (ctx, field, times) {
  const result = []

  for (let i = 0; i < times; i++) {
    result.push(click(ctx, field).sortOrder)
  }
  return result
}

describe('onSort orderList cycle', () => {
  let original$

  beforeEach(() => {
    // @ts-expect-error - testing purposes
    original$ = global.$
  })

  afterEach(() => {
    // @ts-expect-error - testing purposes
    global.$ = original$
    vi.restoreAllMocks()
  })

  it('reproduces legacy behavior with the default cycle (asc → desc → asc)', () => {
    const ctx = createSortContext({ columns: [{ field: 'name' }] })

    expect(cycleOf(ctx, 'name', 4)).toEqual(['asc', 'desc', 'asc', 'desc'])
  })

  it('supports a descending-first column via column orderList (desc → asc → desc)', () => {
    const ctx = createSortContext({
      columns: [{ field: 'date', orderList: ['desc', 'asc'] }]
    })

    expect(cycleOf(ctx, 'date', 3)).toEqual(['desc', 'asc', 'desc'])
  })

  it('applies a global orderList to every sortable column', () => {
    const ctx = createSortContext({
      options: { orderList: ['desc', 'asc'] },
      columns: [{ field: 'a' }, { field: 'b' }]
    })

    expect(cycleOf(ctx, 'a', 2)).toEqual(['desc', 'asc'])
    // switch to column b: starts from the global cycle's first direction too
    expect(click(ctx, 'b').sortOrder).toBe('desc')
  })

  it('lets a column orderList override the global orderList', () => {
    const ctx = createSortContext({
      options: { orderList: ['asc', 'desc'] },
      columns: [
        { field: 'override', orderList: ['desc', 'asc'] },
        { field: 'default' }
      ]
    })

    expect(click(ctx, 'override').sortOrder).toBe('desc')
    expect(click(ctx, 'default').sortOrder).toBe('asc')
  })

  it('treats a comma-separated string equivalently to an array', () => {
    const ctx = createSortContext({
      columns: [{ field: 'date', orderList: 'desc, asc' }]
    })

    expect(ctx.columns[0].orderList).toEqual(['desc', 'asc'])
    expect(cycleOf(ctx, 'date', 3)).toEqual(['desc', 'asc', 'desc'])
  })

  it('falls back to the default cycle when an orderList has no valid token', () => {
    const ctx = createSortContext({
      columns: [{ field: 'name', orderList: 'foo, bar' }]
    })

    expect(ctx.columns[0].orderList).toBeUndefined()
    expect(cycleOf(ctx, 'name', 2)).toEqual(['asc', 'desc'])
  })
})

describe('onSort sortReset', () => {
  let original$

  beforeEach(() => {
    // @ts-expect-error - testing purposes
    original$ = global.$
  })

  afterEach(() => {
    // @ts-expect-error - testing purposes
    global.$ = original$
    vi.restoreAllMocks()
  })

  it('appends an undefined terminal state with the default cycle (asc → desc → undefined → asc)', () => {
    const ctx = createSortContext({
      options: { sortReset: true },
      columns: [{ field: 'name' }]
    })

    expect(cycleOf(ctx, 'name', 4)).toEqual(['asc', 'desc', undefined, 'asc'])
  })

  it('appends an undefined terminal state with a descending-first cycle', () => {
    const ctx = createSortContext({
      options: { sortReset: true },
      columns: [{ field: 'date', orderList: ['desc', 'asc'] }]
    })

    expect(cycleOf(ctx, 'date', 4)).toEqual(['desc', 'asc', undefined, 'desc'])
  })

  it('clears both sortName and sortOrder when reaching the terminal state', () => {
    const ctx = createSortContext({
      options: { sortReset: true },
      columns: [{ field: 'name' }]
    })

    click(ctx, 'name') // asc
    click(ctx, 'name') // desc
    const afterReset = click(ctx, 'name') // undefined

    expect(afterReset.sortName).toBeUndefined()
    expect(afterReset.sortOrder).toBeUndefined()
  })
})

describe('onSort legacy column order fallback', () => {
  let original$

  beforeEach(() => {
    // @ts-expect-error - testing purposes
    original$ = global.$
  })

  afterEach(() => {
    // @ts-expect-error - testing purposes
    global.$ = original$
    vi.restoreAllMocks()
  })

  it('keeps the order: "desc" cycle byte-for-byte when sortReset is off (desc → asc → desc)', () => {
    const ctx = createSortContext({
      columns: [{ field: 'date', order: 'desc' }]
    })

    expect(cycleOf(ctx, 'date', 3)).toEqual(['desc', 'asc', 'desc'])
  })

  it('restarts from the configured direction after reset with order: "desc" (desc → asc → undefined → desc)', () => {
    const ctx = createSortContext({
      options: { sortReset: true },
      columns: [{ field: 'date', order: 'desc' }]
    })

    expect(cycleOf(ctx, 'date', 4)).toEqual(['desc', 'asc', undefined, 'desc'])
  })

  it('respects orderList over a conflicting legacy order on the same column', () => {
    const ctx = createSortContext({
      columns: [{ field: 'date', order: 'desc', orderList: ['asc', 'desc'] }]
    })

    // orderList wins: first click is asc, not the legacy order's desc
    expect(cycleOf(ctx, 'date', 2)).toEqual(['asc', 'desc'])
  })

  it('keeps the default order: "asc" + sortReset cycle byte-for-byte (asc → desc → undefined → asc)', () => {
    const ctx = createSortContext({
      options: { sortReset: true },
      columns: [{ field: 'name' }]
    })

    expect(cycleOf(ctx, 'name', 4)).toEqual(['asc', 'desc', undefined, 'asc'])
  })
})

describe('onSort rememberOrder', () => {
  let original$

  beforeEach(() => {
    // @ts-expect-error - testing purposes
    original$ = global.$
  })

  afterEach(() => {
    // @ts-expect-error - testing purposes
    global.$ = original$
    vi.restoreAllMocks()
  })

  it('flips each column from its own remembered direction when switching columns', () => {
    const ctx = createSortContext({
      options: { rememberOrder: true, sortName: 'b', sortOrder: 'asc' },
      columns: [{ field: 'a' }, { field: 'b' }]
    })

    // column a was last sorted desc, column b was last sorted asc
    ctx._remembered = { a: 'desc', b: 'asc' }

    // switching to a flips its remembered desc -> asc
    expect(click(ctx, 'a').sortOrder).toBe('asc')
    // switching to b flips its remembered asc -> desc
    expect(click(ctx, 'b').sortOrder).toBe('desc')
  })
})

describe('onSort server pagination', () => {
  let original$

  beforeEach(() => {
    // @ts-expect-error - testing purposes
    original$ = global.$
  })

  afterEach(() => {
    // @ts-expect-error - testing purposes
    global.$ = original$
    vi.restoreAllMocks()
  })

  it('selects orderList[0] for the first click; the request wire format is unchanged', () => {
    const ctx = createSortContext({
      options: { sidePagination: 'server' },
      columns: [{ field: 'date', orderList: ['desc', 'asc'] }]
    })

    const result = click(ctx, 'date')

    // The only behavioral change for server-side sorting is the first sortOrder;
    // _sort -> initServer still reads this.options.sortOrder/sortName unchanged.
    expect(result.sortOrder).toBe('desc')
    expect(result.sortName).toBe('date')
    expect(ctx._sort).toHaveBeenCalledTimes(1)
  })
})
