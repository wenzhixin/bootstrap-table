import { describe, expect, it, vi } from 'vitest'
import Constants from '@/constants/index.js'
import DetailModule from '@/modules/detail.js'

function createDetailMockContext (overrides = {}) {
  const detailRow = document.createElement('tr')

  detailRow.className = 'detail-view'

  const td = document.createElement('td')

  td.colSpan = 4
  detailRow.appendChild(td)

  const dataTr = document.createElement('tr')

  dataTr.setAttribute('data-index', '0')
  dataTr.setAttribute('data-has-detail-view', 'true')

  const $tr = {
    next: vi.fn(() => ({
      is: vi.fn(cls => cls === 'tr.detail-view'),
      find: vi.fn(() => ({
        length: 1,
        empty: vi.fn(),
        append: vi.fn()
      })),
      get: () => detailRow
    }))
  }

  return {
    options: {
      detailFormatter: vi.fn(() => 'updated content'),
      onUpdateDetailView: vi.fn(() => false)
    },
    data: [{ id: 1, name: 'test' }],
    $body: {
      find: vi.fn(() => $tr)
    },
    trigger: vi.fn(function (name, ...args) {
      return this.options[Constants.EVENTS[`${name}.bs.table`]](...args)
    }),
    getRowByUniqueId: vi.fn(function () {
      return this.data[0]
    }),
    updateDetailView: DetailModule.updateDetailView,
    ...overrides
  }
}

describe('updateDetailView', () => {
  it('re-renders the detail content when the row is expanded', () => {
    const ctx = createDetailMockContext()

    DetailModule.updateDetailView.call(ctx, 0)

    expect(ctx.options.detailFormatter).toHaveBeenCalledWith(0, ctx.data[0], expect.anything())
    expect(ctx.trigger).toHaveBeenCalledWith('update-detail-view', 0, ctx.data[0], expect.anything())
  })

  it('prefers the column detail formatter over the table-level one', () => {
    const columnDetailFormatter = vi.fn(() => 'column content')
    const ctx = createDetailMockContext()

    DetailModule.updateDetailView.call(ctx, 0, columnDetailFormatter)

    expect(columnDetailFormatter).toHaveBeenCalledWith(0, ctx.data[0], expect.anything())
    expect(ctx.options.detailFormatter).not.toHaveBeenCalled()
  })

  it('does nothing when the row is not expanded', () => {
    const $trCollapsed = {
      next: vi.fn(() => ({ is: vi.fn(() => false) }))
    }
    const ctx = createDetailMockContext({
      $body: { find: vi.fn(() => $trCollapsed) }
    })

    DetailModule.updateDetailView.call(ctx, 0)

    expect(ctx.options.detailFormatter).not.toHaveBeenCalled()
    expect(ctx.trigger).not.toHaveBeenCalled()
  })

  it('handles out-of-range index', () => {
    const $trCollapsed = {
      next: vi.fn(() => ({ is: vi.fn(() => false) }))
    }
    const ctx = createDetailMockContext({
      $body: { find: vi.fn(() => $trCollapsed) }
    })

    expect(() => DetailModule.updateDetailView.call(ctx, 5)).not.toThrow()
  })
})

describe('updateDetailViewByUniqueId', () => {
  it('updates the detail view of the row with the unique id', () => {
    const ctx = createDetailMockContext()

    DetailModule.updateDetailViewByUniqueId.call(ctx, 1)

    expect(ctx.getRowByUniqueId).toHaveBeenCalledWith(1)
    expect(ctx.options.detailFormatter).toHaveBeenCalledWith(0, ctx.data[0], expect.anything())
  })

  it('does nothing when the unique id is not found', () => {
    const ctx = createDetailMockContext({
      getRowByUniqueId: vi.fn(() => null)
    })

    expect(() => DetailModule.updateDetailViewByUniqueId.call(ctx, 999)).not.toThrow()
    expect(ctx.options.detailFormatter).not.toHaveBeenCalled()
  })
})
