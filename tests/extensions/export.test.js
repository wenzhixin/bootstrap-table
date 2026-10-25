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

  describe('formatter return values', () => {
    it('exports the text of DOM nodes and jQuery objects returned by formatters', async () => {
      const $table = await createTable({
        columns: [
          { field: 'id', title: 'ID' },
          {
            field: 'name',
            title: 'Name',
            formatter: value => {
              const span = document.createElement('span')

              span.textContent = value
              return span
            }
          },
          {
            field: 'price',
            title: 'Price',
            formatter: value => globalThis.$('<i></i>').text(value)
          }
        ]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('1,Item 1,1.00')
        expect(text).not.toContain('[object')

        const sql = await exportAs($table, 'sql')

        expect(sql).toContain('\'Item 1\'')
        expect(sql).not.toContain('[object')

        const xml = await exportAs($table, 'xml')

        expect(xml).toContain('<name>Item 1</name>')
        expect(xml).not.toContain('[object')
      } finally {
        destroy($table)
      }
    })

    it('passes the data index to formatters', async () => {
      const $table = await createTable({
        columns: [
          { field: 'id', title: 'ID' },
          {
            field: 'name',
            title: 'Name',
            formatter: (value, row, index) => `${value} #${index}`
          },
          { field: 'price', title: 'Price' }
        ],
        data: [
          { id: 1, name: 'a', price: '1.00' },
          { id: 2, name: 'b', price: '2.00' },
          { id: 3, name: 'c', price: '3.00' }
        ]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('1,a #0,1.00')
        expect(text).toContain('2,b #1,2.00')
        expect(text).toContain('3,c #2,3.00')
      } finally {
        destroy($table)
      }
    })

    it('keeps the absolute data index for current-page rows', async () => {
      const $table = await createTable({
        pagination: true,
        pageSize: 2,
        pageNumber: 2,
        columns: [
          { field: 'id', title: 'ID' },
          {
            field: 'name',
            title: 'Name',
            formatter: (value, row, index) => `${value} #${index}`
          },
          { field: 'price', title: 'Price' }
        ],
        data: [
          { id: 1, name: 'a', price: '1.00' },
          { id: 2, name: 'b', price: '2.00' },
          { id: 3, name: 'c', price: '3.00' }
        ]
      })

      try {
        const text = await exportAs($table, 'csv')

        expect(text).toContain('3,c #2,3.00')
        expect(text).not.toContain('a #')
        expect(text).not.toContain('undefined')
      } finally {
        destroy($table)
      }
    })

    it('keeps the absolute data index for selected rows', async () => {
      const $table = await createTable({
        exportDataType: 'selected',
        columns: [
          { checkbox: true, field: 'state' },
          { field: 'id', title: 'ID' },
          {
            field: 'name',
            title: 'Name',
            formatter: (value, row, index) => `${value} #${index}`
          },
          { field: 'price', title: 'Price' }
        ],
        data: [
          { id: 1, name: 'a', price: '1.00' },
          { id: 2, name: 'b', price: '2.00' },
          { id: 3, name: 'c', price: '3.00' }
        ]
      })

      try {
        const instance = $table.data('bootstrap.table')

        instance.check(0)
        instance.check(2)

        const text = await exportAs($table, 'csv')

        expect(text).toContain('1,a #0,1.00')
        expect(text).toContain('3,c #2,3.00')
        expect(text).not.toContain('b #')
        expect(text).not.toContain('undefined')
      } finally {
        destroy($table)
      }
    })
  })

  it('keeps generated xml tags unique when the suffix matches an existing tag', async () => {
    const $table = await createTable({
      columns: [
        { field: 'name_3', title: 'A' },
        { field: 'name', title: 'B' },
        { field: 'name?', title: 'C' }
      ],
      data: [{ name_3: 'a', name: 'b', 'name?': 'c' }]
    })

    try {
      const text = await exportAs($table, 'xml')

      expect(text).toContain('<name_3>a</name_3>')
      expect(text).toContain('<name>b</name>')
      expect(text).toContain('<name_4>c</name_4>')
      expect(text).not.toContain('<name_3>c</name_3>')
    } finally {
      destroy($table)
    }
  })

  it('strips markup from json strings but keeps numbers, booleans and null typed', async () => {
    const $table = await createTable({
      columns: [
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name', formatter: value => `<b>${value}</b>` },
        { field: 'price', title: 'Price' },
        { field: 'active', title: 'Active' }
      ],
      data: [
        { id: 1, name: 'Item 1', price: 1.5, active: true },
        { id: 2, name: 'Item 2', price: null, active: false }
      ]
    })

    try {
      const objects = JSON.parse(await exportAs($table, 'json'))

      expect(objects).toEqual([
        { id: 1, name: 'Item 1', price: 1.5, active: true },
        { id: 2, name: 'Item 2', price: null, active: false }
      ])
    } finally {
      destroy($table)
    }
  })

  it('includes columns whose field defaults to the numeric index zero', async () => {
    const $table = await createTable({
      columns: [[{ title: 'First' }, { title: 'Second' }]],
      data: [{ 0: 'a', 1: 'b' }]
    })

    try {
      const text = await exportAs($table, 'csv')

      expect(text).toContain('First,Second')
      expect(text).toContain('a,b')

      const sql = await exportAs($table, 'sql')

      expect(sql).toContain('(`0`, `1`)')
      expect(sql).not.toContain('`col1`')
    } finally {
      destroy($table)
    }
  })

  it('applies undefinedText to text exports but keeps typed values for sql and json', async () => {
    const $table = await createTable({
      undefinedText: 'N/A',
      data: [
        { id: 1, name: 'Item 1', price: '1.00' },
        { id: 2, name: null, price: '2.00' },
        { id: 3, price: '3.00' }
      ]
    })

    try {
      const text = await exportAs($table, 'csv')

      expect(text).toContain('2,N/A,2.00')
      expect(text).toContain('3,N/A,3.00')

      const sql = await exportAs($table, 'sql')

      expect(sql).toContain('(2, NULL, \'2.00\')')

      const objects = JSON.parse(await exportAs($table, 'json'))

      expect(objects[1].name).toBe(null)
      expect(objects[1].id).toBe(2)
    } finally {
      destroy($table)
    }
  })

  it('exports the footer when it is computed only by footer formatters', async () => {
    const $table = await createTable({
      showFooter: true,
      exportFooter: true,
      columns: [
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name' },
        { field: 'price', title: 'Price', footerFormatter: () => 'total' }
      ]
    })

    try {
      const text = await exportAs($table, 'csv')

      expect(text.endsWith(',,total')).toBe(true)
    } finally {
      destroy($table)
    }
  })

  it('matches the rendered current page when rows are hidden', async () => {
    const $table = await createTable({
      pagination: true,
      pageSize: 2,
      data: [
        { id: 1, name: 'Item 1', price: '1.00' },
        { id: 2, name: 'Item 2', price: '2.00' },
        { id: 3, name: 'Item 3', price: '3.00' }
      ]
    })

    try {
      $table.data('bootstrap.table').hideRow({ index: 0 })

      const text = await exportAs($table, 'csv')

      expect(text).toContain('2,Item 2,2.00')
      expect(text).not.toContain('Item 1')
      expect(text).not.toContain('Item 3')
    } finally {
      destroy($table)
    }
  })

  it('excludes hidden rows from all-data-type exports', async () => {
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
      $table.data('bootstrap.table').hideRow({ index: 0 })

      const text = await exportAs($table, 'csv')

      expect(text).toContain('2,Item 2,2.00')
      expect(text).toContain('3,Item 3,3.00')
      expect(text).not.toContain('Item 1')
    } finally {
      destroy($table)
    }
  })

  it('neutralizes formula-like text in headers, cells and footers', async () => {
    const $table = await createTable({
      showFooter: true,
      exportFooter: true,
      columns: [
        { field: 'id', title: '=Header' },
        { field: 'name', title: 'Name' },
        { field: 'price', title: 'Price', footerFormatter: () => '=Footer' }
      ],
      data: [
        { id: 1, name: '=1+1', price: -1.5 },
        { id: 2, name: '@SUM(1)', price: '=2+2' }
      ]
    })

    try {
      const text = await exportAs($table, 'csv')

      expect(text).toContain('\'=Header')
      expect(text).toContain('1,\'=1+1,-1.5')
      expect(text).toContain('2,\'@SUM(1),\'=2+2')
      expect(text).toContain('\'=Footer')
      expect(text).not.toContain('\'-1.5')

      const excel = await exportAs($table, 'excel')

      expect(excel).toContain('\'=1+1')
    } finally {
      destroy($table)
    }
  })

  it('doubles backslashes in sql string literals', async () => {
    const $table = await createTable({
      data: [
        { id: 1, name: 'C:\\temp', price: 'a\\b' }
      ]
    })

    try {
      const text = await exportAs($table, 'sql')

      expect(text).toContain('C:\\\\temp')
      expect(text).toContain('a\\\\b')
      expect(text).toContain('(1, \'C:\\\\temp\', \'a\\\\b\')')
    } finally {
      destroy($table)
    }
  })

  it('preserves primitive types in json when escape is enabled', async () => {
    const $table = await createTable({
      escape: true,
      columns: [
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name' },
        { field: 'price', title: 'Price' },
        { field: 'active', title: 'Active' }
      ],
      data: [
        { id: 7, name: '<b>Item</b>', price: 0, active: true },
        { id: 8, name: 'plain', price: 2.5, active: false }
      ]
    })

    try {
      const objects = JSON.parse(await exportAs($table, 'json'))

      expect(objects).toEqual([
        { id: 7, name: '<b>Item</b>', price: 0, active: true },
        { id: 8, name: 'plain', price: 2.5, active: false }
      ])

      const sql = await exportAs($table, 'sql')

      expect(sql).toContain(', 0, true)')
    } finally {
      destroy($table)
    }
  })

  it('uses the selected rows for footer formatters in selected mode', async () => {
    const $table = await createTable({
      exportDataType: 'selected',
      showFooter: true,
      exportFooter: true,
      columns: [
        { checkbox: true, field: 'state' },
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name' },
        {
          field: 'price',
          title: 'Price',
          footerFormatter: data => `sum: ${data.reduce((total, row) => total + Number(row.price), 0)}`
        }
      ],
      data: [
        { id: 1, name: 'a', price: 10 },
        { id: 2, name: 'b', price: 20 }
      ]
    })

    try {
      $table.data('bootstrap.table').check(0)

      const text = await exportAs($table, 'csv')

      expect(text).toContain('sum: 10')
      expect(text).not.toContain('sum: 30')
    } finally {
      destroy($table)
    }
  })

  it('removes xml-invalid control characters before escaping', async () => {
    const $table = await createTable({
      data: [{ id: 1, name: 'a\u0001b', price: 'ok' }]
    })

    try {
      const text = await exportAs($table, 'xml')

      expect(text).toContain('<name>ab</name>')
      expect(text).not.toContain('\u0001')
    } finally {
      destroy($table)
    }
  })

  it('quotes txt cells containing tabs or line breaks', async () => {
    const $table = await createTable({
      columns: [
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Na\tme' },
        { field: 'price', title: 'Price' }
      ],
      data: [{ id: 1, name: 'Item\t1', price: 'line\nbreak' }]
    })

    try {
      const text = await exportAs($table, 'txt')

      expect(text).toContain('ID\t"Na\tme"\tPrice')
      expect(text).toContain('1\t"Item\t1"\t"line\nbreak"')
      expect(text.split('\r\n')).toHaveLength(2)
    } finally {
      destroy($table)
    }
  })

  it('exports a column whose field is __proto__', async () => {
    const $table = await createTable({
      columns: [
        { field: 'id', title: 'ID' },
        { field: '__proto__', title: 'Proto' }
      ],
      data: [{ id: 1 }]
    })

    try {
      const instance = $table.data('bootstrap.table')

      // Define the own property after initData() deep-copies the rows
      Object.defineProperty(instance.options.data[0], '__proto__', {
        value: 7,
        enumerable: true,
        configurable: true,
        writable: true
      })

      const text = await exportAs($table, 'json')

      expect(text).toContain('"__proto__": 7')

      const objects = JSON.parse(text)

      expect(Object.prototype.hasOwnProperty.call(objects[0], '__proto__')).toBe(true)
      expect(objects[0].__proto__).toBe(7)
      expect(objects[0].id).toBe(1)
    } finally {
      destroy($table)
    }
  })

  it('excludes hidden selection columns even with forceExport', async () => {
    const $table = await createTable({
      columns: [
        { checkbox: true, field: 'state', visible: false, forceExport: true },
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name' },
        { field: 'price', title: 'Price' }
      ]
    })

    try {
      const text = await exportAs($table, 'csv')

      expect(text).toContain('ID,Name,Price')
      expect(text).not.toContain('state')
    } finally {
      destroy($table)
    }
  })

  it('keeps escaped array values visible instead of stripping their markup', async () => {
    const $table = await createTable({
      escape: true,
      columns: [
        { field: 'id', title: 'ID' },
        { field: 'name', title: 'Name' },
        { field: 'price', title: 'Price' }
      ],
      data: [{ id: 1, name: ['<b>Item</b>'], price: '1.00' }]
    })

    try {
      const text = await exportAs($table, 'csv')

      expect(text).toContain('<b>Item</b>')
      expect(text).not.toContain('1,Item,')
    } finally {
      destroy($table)
    }
  })

  it('keeps an explicitly blank column title blank', async () => {
    const $table = await createTable({
      columns: [
        { field: 'id', title: '' },
        { field: 'name', title: 'Name' },
        { field: 'price', title: 'Price' }
      ]
    })

    try {
      const text = await exportAs($table, 'csv')

      expect(text).toContain(',Name,Price')
      expect(text).not.toContain('id,Name,Price')
    } finally {
      destroy($table)
    }
  })

  it('uses the first type when exportTypes is configured as a string list', async () => {
    const $table = await createTable({ exportTypes: '[\'csv\']' })

    try {
      const result = $table.data('bootstrap.table').exportTable({})

      expect(result).toBe(true)
      expect(downloadName).toBe('table.csv')

      const text = await capturedBlob.text()

      expect(text).toContain('ID,Name,Price')
    } finally {
      destroy($table)
    }
  })

  it('serializes non-finite numbers as NULL in sql', async () => {
    const $table = await createTable({
      data: [
        { id: 1, name: NaN, price: Infinity },
        { id: 2, name: -Infinity, price: 1.5 }
      ]
    })

    try {
      const text = await exportAs($table, 'sql')

      expect(text).toContain('(1, NULL, NULL)')
      expect(text).toContain('(2, NULL, 1.5)')
      expect(text).not.toContain('NaN')
      expect(text).not.toContain('Infinity')
    } finally {
      destroy($table)
    }
  })
})
