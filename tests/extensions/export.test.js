/**
 * Tests for the built-in export extension.
 *
 * The exporter is data driven: values are read from the table data model
 * instead of the rendered DOM, so the tests assert the produced file content
 * through a mocked download.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

if (typeof URL.createObjectURL !== 'function') {
  URL.createObjectURL = () => 'blob:mock'
}

if (typeof URL.revokeObjectURL !== 'function') {
  URL.revokeObjectURL = () => {}
}

let capturedBlob
let downloadName
let saveCount

async function loadExport () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/export/bootstrap-table-export.js')

  const $ = globalThis.jQuery || globalThis.$

  expect($?.BootstrapTable).toBeTruthy()

  return { $ }
}

async function createTable (options = {}) {
  await loadExport()

  document.body.innerHTML = '<table id="export-test"></table>'

  const $ = globalThis.jQuery
  const $table = $('#export-test').bootstrapTable({
    columns: [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
      { field: 'price', title: 'Price' }
    ],
    data: [
      { id: 1, name: 'Item 1', price: '1.00' },
      { id: 2, name: 'Item 2', price: '2.00' }
    ],
    ...options
  })

  return $table
}

function destroy ($table) {
  if ($table.data('bootstrap.table')) {
    $table.bootstrapTable('destroy')
  }
}

async function exportAs ($table, type, options = {}) {
  $table.data('bootstrap.table').exportTable({ type, ...options })

  expect(capturedBlob, 'a file should have been created').toBeTruthy()

  return capturedBlob.text()
}

describe('export extension', () => {
  beforeEach(() => {
    capturedBlob = undefined
    downloadName = undefined
    saveCount = 0

    vi.spyOn(URL, 'createObjectURL').mockImplementation(blob => {
      capturedBlob = blob
      saveCount += 1
      return 'blob:mock'
    })
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {})
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function () {
      downloadName = this.download
    })
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  describe('csv', () => {
    it('exports the header and rows with a BOM and CRLF line endings', async () => {
      const $table = await createTable()

      try {
        const text = await exportAs($table, 'csv')

        expect(downloadName).toBe('table.csv')
        expect(text.charCodeAt(0)).toBe(0xFEFF)
        expect(text).toContain('ID,Name,Price\r\n')
        expect(text).toContain('1,Item 1,1.00\r\n')
        expect(text).toContain('2,Item 2,2.00')
      } finally {
        destroy($table)
      }
    })

    it('quotes values containing the delimiter, quotes or newlines', async () => {
      const $table = await createTable({
        data: [{ id: 1, name: 'Item, 1', price: 'say "hi"' }, { id: 2, name: 'line\nbreak', price: 'ok' }]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('1,"Item, 1","say ""hi"""')
        expect(text).toContain('2,"line\nbreak",ok')
      } finally {
        destroy($table)
      }
    })

    it('supports a custom csv delimiter', async () => {
      const $table = await createTable({
        data: [{ id: 1, name: 'Item, 1', price: '1.00' }],
        exportOptions: { csvDelimiter: ';' }
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('ID;Name;Price')
        expect(text).toContain('1;Item, 1;1.00')
      } finally {
        destroy($table)
      }
    })
  })

  it('exports txt files with tab separated values', async () => {
    const $table = await createTable()

    try {
      const text = await exportAs($table, 'txt')

      expect(downloadName).toBe('table.txt')
      expect(text).toContain('ID\tName\tPrice\r\n')
      expect(text).toContain('1\tItem 1\t1.00')
    } finally {
      destroy($table)
    }
  })

  it('exports json objects keyed by column field', async () => {
    const $table = await createTable()

    try {
      const text = await exportAs($table, 'json')

      expect(downloadName).toBe('table.json')
      expect(text.startsWith('[')).toBe(true)
      expect(JSON.parse(text)).toEqual([
        { id: 1, name: 'Item 1', price: '1.00' },
        { id: 2, name: 'Item 2', price: '2.00' }
      ])
      expect(text).toContain('\n  {\n    "id": 1')
    } finally {
      destroy($table)
    }
  })

  describe('xml', () => {
    it('sanitizes the root element and column tags into valid xml names', async () => {
      const $table = await createTable({
        columns: [
          { field: 'First Name', title: 'First Name' },
          { field: '1st', title: 'First' }
        ],
        data: [{ 'First Name': 'Tom', '1st': 'x' }],
        exportOptions: { tableName: 'My Table' }
      })

      try {
        const text = await exportAs($table, 'xml')

        expect(text).toContain('<?xml version="1.0" encoding="UTF-8"?>')
        expect(text).toContain('<My_Table>')
        expect(text).toContain('</My_Table>')
        expect(text).toContain('<First_Name>Tom</First_Name>')
        expect(text).toContain('<col2>x</col2>')
        expect(text).not.toContain('<First Name>')
      } finally {
        destroy($table)
      }
    })

    it('deduplicates colliding column tags', async () => {
      const $table = await createTable({
        columns: [
          { field: 'name', title: 'Name' },
          { field: 'name?', title: 'Name again' }
        ],
        data: [{ name: 'a', 'name?': 'b' }]
      })

      try {
        const text = await exportAs($table, 'xml')

        expect(text).toContain('<name>a</name>')
        expect(text).toContain('<name_2>b</name_2>')
      } finally {
        destroy($table)
      }
    })

    it('escapes xml special characters in values', async () => {
      const $table = await createTable({
        data: [{ id: 1, name: 'Tom & Jerry', price: '\'q"' }]
      })

      try {
        const text = await exportAs($table, 'xml')

        expect(text).toContain('<name>Tom &amp; Jerry</name>')
        expect(text).toContain('<price>&apos;q&quot;</price>')
      } finally {
        destroy($table)
      }
    })
  })

  describe('sql', () => {
    it('escapes backticks in the table name and quotes by type', async () => {
      const $table = await createTable({
        data: [
          { id: 1, name: 'Item 1', price: 1.5 },
          { id: 2, name: null, price: 2 }
        ],
        exportOptions: { tableName: 'my`table' }
      })

      try {
        const text = await exportAs($table, 'sql')

        expect(text).toContain('INSERT INTO `my``table`')
        expect(text).toContain('(`id`, `name`, `price`)')
        expect(text).toContain('(1, \'Item 1\', 1.5)')
        expect(text).toContain('(2, NULL, 2)')
      } finally {
        destroy($table)
      }
    })

    it('escapes single quotes in values', async () => {
      const $table = await createTable({
        data: [{ id: 1, name: 'O\'Neil', price: '' }]
      })

      try {
        const text = await exportAs($table, 'sql')

        expect(text).toContain('(1, \'O\'\'Neil\', \'\')')
      } finally {
        destroy($table)
      }
    })

    it('returns empty content instead of an invalid statement without rows', async () => {
      const $table = await createTable({ data: [] })

      try {
        const text = await exportAs($table, 'sql')

        expect(text).toBe('')
        expect(text).not.toContain('VALUES')
      } finally {
        destroy($table)
      }
    })
  })

  it('exports excel as csv content with an xls extension', async () => {
    const $table = await createTable()

    try {
      const text = await exportAs($table, 'excel')

      expect(downloadName).toBe('table.xls')
      expect(capturedBlob.type).toBe('application/vnd.ms-excel')
      expect(text).toContain('ID,Name,Price\r\n1,Item 1,1.00')
    } finally {
      destroy($table)
    }
  })

  describe('file name', () => {
    it('accepts a string', async () => {
      const $table = await createTable({ exportOptions: { fileName: 'report' } })

      try {
        await exportAs($table, 'csv')

        expect(downloadName).toBe('report.csv')
      } finally {
        destroy($table)
      }
    })

    it('accepts a function', async () => {
      const callArgs = []
      const $table = await createTable({
        exportOptions: {
          fileName (...args) {
            callArgs.push(args)
            return 'custom-export-name'
          }
        }
      })

      try {
        await exportAs($table, 'csv')

        expect(downloadName).toBe('custom-export-name.csv')
        expect(callArgs).toHaveLength(1)
      } finally {
        destroy($table)
      }
    })

    it('is overridden by the option passed to exportTable', async () => {
      const $table = await createTable({ exportOptions: { fileName: 'report' } })

      try {
        await exportAs($table, 'csv', { fileName: 'override' })

        expect(downloadName).toBe('override.csv')
      } finally {
        destroy($table)
      }
    })
  })

  describe('exported columns', () => {
    it('includes hidden columns with forceExport and excludes visible columns with forceHide', async () => {
      const $table = await createTable({
        columns: [
          { field: 'id', title: 'ID' },
          { field: 'secret', title: 'Secret', visible: false, forceExport: true },
          { field: 'icon', title: 'Icon', forceHide: true },
          { field: 'name', title: 'Name' }
        ],
        data: [{ id: 1, secret: 'hidden value', icon: 'ignored', name: 'Item 1' }]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('ID,Secret,Name')
        expect(text).toContain('1,hidden value,Item 1')
        expect(text).not.toContain('Icon')
        expect(text).not.toContain('ignored')
      } finally {
        destroy($table)
      }
    })

    it('excludes the checkbox column', async () => {
      const $table = await createTable({
        columns: [
          { checkbox: true, field: 'state' },
          { field: 'id', title: 'ID' },
          { field: 'name', title: 'Name' }
        ]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('ID,Name')
        expect(text).not.toMatch(/^\uFEFF?state,/i)
      } finally {
        destroy($table)
      }
    })

    it('excludes colspan columns without a field', async () => {
      const $table = await createTable({
        columns: [
          [{ title: 'Group', colspan: 2 }, { title: 'Details', colspan: 1 }],
          [
            { field: 'id', title: 'ID' },
            { field: 'name', title: 'Name' },
            { field: 'price', title: 'Price' }
          ]
        ]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('ID,Name,Price')
        expect(text).not.toContain('Group')
        expect(text).not.toContain('Details')
      } finally {
        destroy($table)
      }
    })
  })

  describe('values', () => {
    it('exports the formatted value with html tags stripped', async () => {
      const $table = await createTable({
        columns: [
          { field: 'id', title: 'ID' },
          {
            field: 'name',
            title: 'Name',
            formatter: value => `<span class="badge">${value}</span>`
          },
          { field: 'price', title: 'Price' }
        ]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('1,Item 1,1.00')
        expect(text).not.toContain('span')
      } finally {
        destroy($table)
      }
    })

    it('uses the visible text for titles when escapeTitle is enabled', async () => {
      const $table = await createTable({
        escape: true,
        escapeTitle: true,
        columns: [
          { field: 'id', title: 'ID' },
          { field: 'name', title: 'P <b>&</b> P' }
        ]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('ID,P <b>&</b> P')
        expect(text).not.toContain('&lt;b&gt;')
      } finally {
        destroy($table)
      }
    })

    it('strips html from titles when escapeTitle is disabled', async () => {
      const $table = await createTable({
        escape: true,
        escapeTitle: false,
        columns: [
          { field: 'id', title: 'ID' },
          { field: 'name', title: '<b>Name</b>' }
        ]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('ID,Name')
        expect(text).not.toContain('<b>')
      } finally {
        destroy($table)
      }
    })
  })

  it('appends the footer row using the footer formatters', async () => {
    const $table = await createTable({
      showFooter: true,
      exportFooter: true,
      columns: [
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name' },
        {
          field: 'price',
          title: 'Price',
          footerFormatter: (data, value) => `sum: ${value}`
        }
      ]
    })

    try {
      const instance = $table.data('bootstrap.table')

      instance.footerData = [{ id: '', name: '', price: '3.00' }]

      const text = await exportAs($table, 'csv')

      expect(text.endsWith(',,sum: 3.00')).toBe(true)
    } finally {
      destroy($table)
    }
  })

  describe('events', () => {
    it('triggers export-started and export-saved', async () => {
      const $table = await createTable()

      try {
        let started = 0
        let savedPayload = null

        $table.on('export-started.bs.table', () => {
          started += 1
        })
        $table.on('export-saved.bs.table', (_e, rows) => {
          savedPayload = rows
        })

        await exportAs($table, 'csv')

        expect(started).toBe(1)
        expect(savedPayload).toHaveLength(2)
      } finally {
        destroy($table)
      }
    })

    it('does not export or trigger events for unsupported types', async () => {
      const $table = await createTable()

      try {
        let started = 0
        let saved = 0

        $table.on('export-started.bs.table', () => {
          started += 1
        })
        $table.on('export-saved.bs.table', () => {
          saved += 1
        })

        const result = $table.data('bootstrap.table').exportTable({ type: 'pdf' })

        expect(result).toBe(false)
        expect(started).toBe(0)
        expect(saved).toBe(0)
        expect(saveCount).toBe(0)
      } finally {
        destroy($table)
      }
    })

    it('does not export when selected rows are required but none are selected', async () => {
      const $table = await createTable({ exportDataType: 'selected' })

      try {
        let started = 0

        $table.on('export-started.bs.table', () => {
          started += 1
        })

        const result = $table.data('bootstrap.table').exportTable({ type: 'csv' })

        expect(result).toBe(false)
        expect(started).toBe(0)
        expect(saveCount).toBe(0)
      } finally {
        destroy($table)
      }
    })

    it('exports only the selected rows', async () => {
      const $table = await createTable({
        exportDataType: 'selected',
        checkboxHeader: true,
        columns: [
          { checkbox: true, field: 'state' },
          { field: 'id', title: 'ID' },
          { field: 'name', title: 'Name' }
        ]
      })

      try {
        const instance = $table.data('bootstrap.table')

        instance.check(1)

        const text = await exportAs($table, 'csv')

        expect(text).toContain('ID,Name\r\n2,Item 2')
        expect(text).not.toContain('Item 1')
      } finally {
        destroy($table)
      }
    })
  })

  it('exports the current page only for the basic data type', async () => {
    const $table = await createTable({
      pagination: true,
      pageSize: 2,
      data: [
        { id: 1, name: 'Item 1', price: '1.00' },
        { id: 2, name: 'Item 2', price: '2.00' },
        { id: 3, name: 'Item 3', price: '3.00' },
        { id: 4, name: 'Item 4', price: '4.00' },
        { id: 5, name: 'Item 5', price: '5.00' }
      ]
    })

    try {
      const text = await exportAs($table, 'csv')

      expect(text).toContain('1,Item 1,1.00')
      expect(text).toContain('2,Item 2,2.00')
      expect(text).not.toContain('Item 3')
    } finally {
      destroy($table)
    }
  })

  it('exports all pages with the all data type', async () => {
    const $table = await createTable({
      exportDataType: 'all',
      pagination: true,
      pageSize: 2,
      data: [
        { id: 1, name: 'Item 1', price: '1.00' },
        { id: 2, name: 'Item 2', price: '2.00' },
        { id: 3, name: 'Item 3', price: '3.00' }
      ]
    })

    try {
      const text = await exportAs($table, 'csv')

      expect(text).toContain('1,Item 1,1.00')
      expect(text).toContain('3,Item 3,3.00')
    } finally {
      destroy($table)
    }
  })
})
