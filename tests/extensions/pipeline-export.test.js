/**
 * Tests for export extension working with the pipeline extension (#5980).
 *
 * Pipeline caches server responses in windows; exporting with
 * exportDataType 'all' toggles pagination off to fetch all rows.
 * These tests verify the exported file contains the full data set
 * instead of an empty or partial file.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

if (typeof URL.createObjectURL !== 'function') {
  URL.createObjectURL = () => 'blob:mock'
}

if (typeof URL.revokeObjectURL !== 'function') {
  URL.revokeObjectURL = () => {}
}

let capturedBlob

async function loadExtensions () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/export/bootstrap-table-export.js')
  await import('../../src/extensions/pipeline/bootstrap-table-pipeline.js')

  const $ = globalThis.jQuery || globalThis.$

  expect($?.BootstrapTable).toBeTruthy()

  return { $ }
}

// Build a total of `total` rows; the ajax handler serves the requested
// offset/limit window from the in-memory data set, like a real server would.
function createServerData (total) {
  const data = []

  for (let i = 1; i <= total; i++) {
    data.push({ id: i, name: `Item ${i}`, price: `$${i}` })
  }
  return data
}

async function createPipelineTable ({
  total = 60,
  pipelineSize = 20,
  pageSize = 10,
  serverData = null
} = {}) {
  await loadExtensions()

  document.body.innerHTML = '<table id="pipeline-export-test"></table>'

  const $ = globalThis.jQuery
  const data = serverData || createServerData(total)
  const ajax = request => {
    const { offset = 0, limit = data.length } = request.data
    const res = {
      total: data.length,
      rows: data.slice(offset, offset + limit)
    }

    request.success(res)
  }

  const $table = $('#pipeline-export-test').bootstrapTable({
    columns: [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' }
    ],
    pagination: true,
    sidePagination: 'server',
    queryParamsType: 'limit',
    pageSize,
    usePipeline: true,
    pipelineSize,
    ajax,
    showExport: true,
    exportTypes: ['csv'],
    exportDataType: 'all',
    responseHandler: res => res
  })

  return $table
}

function destroy ($table) {
  if ($table.data('bootstrap.table')) {
    $table.bootstrapTable('destroy')
  }
}

function exportAndRead () {
  return capturedBlob.text()
}

describe('export + pipeline', () => {
  beforeEach(() => {
    capturedBlob = undefined

    vi.spyOn(URL, 'createObjectURL').mockImplementation(blob => {
      capturedBlob = blob
      return 'blob:mock'
    })
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {})
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {})
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('exports all rows when exportDataType is all', async () => {
    const $table = await createPipelineTable({ total: 60, pipelineSize: 20, pageSize: 10 })

    try {
      const table = $table.data('bootstrap.table')

      table.exportTable({ type: 'csv' })

      // The 'post-body' handler runs in a setTimeout(0) after the server
      // response is loaded; flush it before asserting on the file content.
      await new Promise(resolve => setTimeout(resolve, 10))

      expect(capturedBlob, 'a file should have been created').toBeTruthy()
      const text = await exportAndRead()

      expect(text).toContain('ID,Name')
      expect((text.match(/Item \d+/g) || []).length).toBe(60)
    } finally {
      destroy($table)
    }
  })

  it('exports the current page only for basic export type', async () => {
    const $table = await createPipelineTable({ total: 60, pipelineSize: 20, pageSize: 10 })

    try {
      const table = $table.data('bootstrap.table')

      table.options.exportDataType = 'basic'
      table.exportTable({ type: 'csv' })

      await new Promise(resolve => setTimeout(resolve, 10))

      expect(capturedBlob, 'a file should have been created').toBeTruthy()
      const text = await exportAndRead()

      expect(text).toContain('ID,Name')
      expect((text.match(/Item \d+/g) || []).length).toBe(10)
    } finally {
      destroy($table)
    }
  })

  it('draws the correct page after moving into a new cache window', async () => {
    const $table = await createPipelineTable({ total: 60, pipelineSize: 20, pageSize: 10 })

    try {
      const table = $table.data('bootstrap.table')

      // page 3 lives in cache window 0, page 4 in window 1: the second
      // ajax response must be sliced with the fresh draw parameters,
      // not the ones captured by the first request
      table.options.pageNumber = 4
      table.updatePagination()
      await new Promise(resolve => setTimeout(resolve, 10))

      expect(table.data.length).toBe(10)
      expect(table.data[0].id).toBe(31)
      expect(table.data[9].id).toBe(40)
    } finally {
      destroy($table)
    }
  })

  it('draws the correct page after a cache reset', async () => {
    const $table = await createPipelineTable({ total: 60, pipelineSize: 20, pageSize: 10 })

    try {
      const table = $table.data('bootstrap.table')

      table.options.pageNumber = 5
      table.resetPipelineCache()
      table.updatePagination()
      await new Promise(resolve => setTimeout(resolve, 10))

      expect(table.data.length).toBe(10)
      // the mock server ignores sorting and always returns ascending data:
      // page 5 (offset 40) must still be drawn from the fresh window
      expect(table.data[0].id).toBe(41)
      expect(table.data[9].id).toBe(50)
    } finally {
      destroy($table)
    }
  })
})
