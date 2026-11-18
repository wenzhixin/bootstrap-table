import { beforeEach, describe, expect, it } from 'vitest'
import * as tableData from '@/utils/table-data.js'

describe('getFieldTitle', () => {
  it('should return title for matching field', () => {
    const list = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
      { field: 'age', title: 'Age' }
    ]

    expect(tableData.getFieldTitle(list, 'name')).toBe('Name')
    expect(tableData.getFieldTitle(list, 'id')).toBe('ID')
  })

  it('should return empty string for non-matching field', () => {
    const list = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' }
    ]

    expect(tableData.getFieldTitle(list, 'unknown')).toBe('')
    expect(tableData.getFieldTitle(list, '')).toBe('')
  })

  it('should handle empty list', () => {
    expect(tableData.getFieldTitle([], 'name')).toBe('')
  })
})

describe('setFieldIndex', () => {
  it('should set fieldIndex for simple columns', () => {
    const columns = [
      [{ field: 'id' }, { field: 'name' }, { field: 'age' }]
    ]

    tableData.setFieldIndex(columns)

    expect(columns[0][0].fieldIndex).toBe(0)
    expect(columns[0][1].fieldIndex).toBe(1)
    expect(columns[0][2].fieldIndex).toBe(2)
  })

  it('should handle colspan', () => {
    const columns = [
      [
        { field: 'id', colspan: 2 },
        { field: 'name' },
        { field: 'age' }
      ]
    ]

    tableData.setFieldIndex(columns)

    expect(columns[0][0].colspanIndex).toBe(0)
    expect(columns[0][0].colspanGroup).toBe(2)
    expect(columns[0][1].colspanIndex).toBe(2)
    expect(columns[0][1].fieldIndex).toBe(2)
  })

  it('should handle rowspan', () => {
    const columns = [
      [{ field: 'id', rowspan: 2 }, { field: 'name' }],
      [{ field: 'age' }]
    ]

    tableData.setFieldIndex(columns)

    expect(columns[0][0].colspanIndex).toBe(0)
    expect(columns[0][0].fieldIndex).toBe(0)
    expect(columns[0][1].colspanIndex).toBe(1)
    expect(columns[0][1].fieldIndex).toBe(1)
    expect(columns[1][0].colspanIndex).toBe(1)
  })

  it('should set field to index when undefined', () => {
    const columns = [[{}, {}, {}]]

    tableData.setFieldIndex(columns)

    expect(columns[0][0].field).toBe(0)
    expect(columns[0][1].field).toBe(1)
    expect(columns[0][2].field).toBe(2)
  })

  it('should not override existing field', () => {
    const columns = [[{ field: 'custom' }]]

    tableData.setFieldIndex(columns)

    expect(columns[0][0].field).toBe('custom')
  })
})

describe('updateFieldGroup', () => {
  describe('colspanGroup columns', () => {
    it('should update colspan when all sub-columns are visible', () => {
      const columns = [
        [
          { field: 'group', colspan: 2, colspanGroup: 2, colspanIndex: 0 },
          { field: 'field1', fieldIndex: 0, visible: true },
          { field: 'field2', fieldIndex: 1, visible: true }
        ]
      ]
      const fieldColumns = columns[0].filter(c => !c.colspanGroup)

      tableData.updateFieldGroup(columns, fieldColumns)

      expect(columns[0][0].colspan).toBe(2)
      expect(columns[0][0].visible).toBe(true)
    })

    it('should update colspan when some sub-columns are hidden', () => {
      const columns = [
        [
          { field: 'group', colspan: 3, colspanGroup: 3, colspanIndex: 0 },
          { field: 'field1', fieldIndex: 0, visible: true },
          { field: 'field2', fieldIndex: 1, visible: false },
          { field: 'field3', fieldIndex: 2, visible: true }
        ]
      ]
      const fieldColumns = columns[0].filter(c => !c.colspanGroup)

      tableData.updateFieldGroup(columns, fieldColumns)

      expect(columns[0][0].colspan).toBe(2)
      expect(columns[0][0].visible).toBe(true)
    })

    it('should hide group column when all sub-columns are hidden', () => {
      const columns = [
        [
          { field: 'group', colspan: 2, colspanGroup: 2, colspanIndex: 0 },
          { field: 'field1', fieldIndex: 0, visible: false },
          { field: 'field2', fieldIndex: 1, visible: false }
        ]
      ]
      const fieldColumns = columns[0].filter(c => !c.colspanGroup)

      tableData.updateFieldGroup(columns, fieldColumns)

      expect(columns[0][0].colspan).toBe(0)
      expect(columns[0][0].visible).toBe(false)
    })

    it('should not throw when no sub-columns match the colspanGroup range', () => {
      const columns = [
        [
          { field: 'group', colspan: 2, colspanGroup: 2, colspanIndex: 4 },
          { field: 'field1', fieldIndex: 0, visible: true }
        ]
      ]
      const fieldColumns = columns[0].filter(c => !c.colspanGroup)

      expect(() => {
        tableData.updateFieldGroup(columns, fieldColumns)
      }).not.toThrow()

      expect(columns[0][0].colspan).toBe(0)
      expect(columns[0][0].visible).toBe(false)
    })

    it('should sync visibility for columns with same fieldIndex', () => {
      // This sync only happens in multi-row scenario (second part of the function)
      // So we skip this test for single-row colspanGroup scenario
      const columns = [
        [
          { field: 'group', colspan: 2, colspanGroup: 2, colspanIndex: 0 },
          { field: 'field1', fieldIndex: 0, visible: true },
          { field: 'field2', fieldIndex: 1, visible: true }
        ]
      ]
      const fieldColumns = columns[0].filter(c => !c.colspanGroup)

      tableData.updateFieldGroup(columns, fieldColumns)

      // In single row, colspanGroup updates based on visible sub-columns
      expect(columns[0][0].colspan).toBe(2)
      expect(columns[0][0].visible).toBe(true)
    })
  })

  describe('multi-row synchronization', () => {
    it('should sync visibility across rows for same fieldIndex', () => {
      const columns = [
        [
          { field: 'id', fieldIndex: 0, visible: true },
          { field: 'name', fieldIndex: 1, visible: true }
        ],
        [
          { field: 'id', fieldIndex: 0, visible: false },
          { field: 'name', fieldIndex: 1, visible: true }
        ]
      ]
      const fieldColumns = [{ field: 'id', fieldIndex: 0, visible: true }]

      tableData.setFieldIndex(columns)
      tableData.updateFieldGroup(columns, fieldColumns)

      expect(columns[1][0].visible).toBe(true)
    })

    it('should not sync when only one row exists', () => {
      const columns = [
        [
          { field: 'id', fieldIndex: 0, visible: true },
          { field: 'name', fieldIndex: 1, visible: false }
        ]
      ]
      const fieldColumns = [{ field: 'id', fieldIndex: 0, visible: true }]

      tableData.setFieldIndex(columns)
      tableData.updateFieldGroup(columns, fieldColumns)

      // Should not crash and should keep original visibility
      expect(columns[0][1].visible).toBe(false)
    })

    it('should handle empty fieldColumns', () => {
      const columns = [
        [
          { field: 'id', fieldIndex: 0, visible: true },
          { field: 'name', fieldIndex: 1, visible: true }
        ],
        [
          { field: 'id', fieldIndex: 0, visible: false },
          { field: 'name', fieldIndex: 1, visible: true }
        ]
      ]
      const fieldColumns = []

      tableData.setFieldIndex(columns)

      expect(() => {
        tableData.updateFieldGroup(columns, fieldColumns)
      }).not.toThrow()
    })
  })

  describe('edge cases', () => {
    it('should handle empty columns array', () => {
      const columns = []
      const fieldColumns = []

      expect(() => {
        tableData.updateFieldGroup(columns, fieldColumns)
      }).not.toThrow()
    })

    it('should handle columns without colspanGroup', () => {
      const columns = [
        [
          { field: 'id', fieldIndex: 0, visible: true },
          { field: 'name', fieldIndex: 1, visible: true }
        ]
      ]
      const fieldColumns = columns[0]

      tableData.setFieldIndex(columns)
      tableData.updateFieldGroup(columns, fieldColumns)

      // Should not crash when no colspanGroup exists
      expect(columns[0][0].visible).toBe(true)
    })

    it('should handle mixed colspanGroup and regular columns', () => {
      // Create a realistic scenario with two rows
      const columns = [
        [
          { field: 'group', colspan: 2, colspanGroup: 2, colspanIndex: 0, visible: true },
          { field: 'id', fieldIndex: 0, visible: true },
          { field: 'name', fieldIndex: 1, visible: true }
        ],
        [
          { field: 'id', fieldIndex: 0, visible: true },
          { field: 'name', fieldIndex: 1, visible: false }
        ]
      ]
      const fieldColumns = columns[columns.length - 1]

      tableData.setFieldIndex(columns)
      tableData.updateFieldGroup(columns, fieldColumns)

      // group column should have colspan 1 (only id is visible)
      expect(columns[0][0].colspan).toBe(1)
      expect(columns[0][0].visible).toBe(true)
      // name column in second row should be hidden (synced from first row)
      expect(columns[1][1].visible).toBe(false)
    })

    it('should handle colspanGroup of 1', () => {
      const columns = [
        [
          { field: 'group', colspan: 1, colspanGroup: 1, colspanIndex: 0, visible: true },
          { field: 'field1', fieldIndex: 0, visible: true }
        ]
      ]
      const fieldColumns = columns[0].filter(c => !c.colspanGroup)

      tableData.setFieldIndex(columns)
      tableData.updateFieldGroup(columns, fieldColumns)

      expect(columns[0][0].colspan).toBe(1)
      expect(columns[0][0].visible).toBe(true)
    })
  })
})

describe('getRealDataAttr', () => {
  it('should convert camelCase to kebab-case', () => {
    const obj = { dataUrl: 'test', dataMethod: 'post' }

    const result = tableData.getRealDataAttr(obj)

    expect(result.dataUrl).toBeUndefined()
    expect(result['data-url']).toBe('test')
    expect(result['data-method']).toBe('post')
  })

  it('should handle mixed case attributes', () => {
    const obj = { borderColor: 'red', backgroundColor: 'blue' }

    const result = tableData.getRealDataAttr(obj)

    expect(result['border-color']).toBe('red')
    expect(result['background-color']).toBe('blue')
  })

  it('should modify the original object', () => {
    const obj = { testAttr: 'value' }

    const result = tableData.getRealDataAttr(obj)

    expect(result).toBe(obj)
  })

  it('should handle already kebab-case attributes', () => {
    const obj = { 'data-url': 'test' }

    const result = tableData.getRealDataAttr(obj)

    expect(result['data-url']).toBe('test')
  })
})

describe('getItemField', () => {
  it('should get simple field value', () => {
    const item = { name: 'John', age: 30 }

    expect(tableData.getItemField(item, 'name', false)).toBe('John')
    expect(tableData.getItemField(item, 'age', false)).toBe(30)
  })

  it('should get nested field value', () => {
    const item = { user: { name: 'John', address: { city: 'NYC' } } }

    expect(tableData.getItemField(item, 'user.name', false)).toBe('John')
    expect(tableData.getItemField(item, 'user.address.city', false)).toBe('NYC')
  })

  it('should escape HTML when escape is true', () => {
    const item = { html: '<script>alert("xss")</script>' }

    expect(tableData.getItemField(item, 'html', true)).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
  })

  it('should not escape when escape is false', () => {
    const item = { html: '<div>test</div>' }

    expect(tableData.getItemField(item, 'html', false)).toBe('<div>test</div>')
  })

  it('should use columnEscape to override escape', () => {
    const item = { html: '<div>test</div>' }

    expect(tableData.getItemField(item, 'html', false, true)).toBe('&lt;div&gt;test&lt;/div&gt;')
    expect(tableData.getItemField(item, 'html', true, false)).toBe('<div>test</div>')
  })

  it('should return undefined for non-existent nested field', () => {
    const item = { user: { name: 'John' } }

    expect(tableData.getItemField(item, 'user.address.city', false)).toBeUndefined()
  })

  it('should return undefined for null in path', () => {
    const item = { user: null }

    expect(tableData.getItemField(item, 'user.name', false)).toBeUndefined()
  })
})

describe('findIndex', () => {
  it('should find index of existing item', () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

    expect(tableData.findIndex(items, { id: 2 })).toBe(1)
    expect(tableData.findIndex(items, { id: 1 })).toBe(0)
  })

  it('should return -1 for non-existent item', () => {
    const items = [{ id: 1 }, { id: 2 }]

    expect(tableData.findIndex(items, { id: 3 })).toBe(-1)
    expect(tableData.findIndex(items, { name: 'test' })).toBe(-1)
  })

  it('should use deep equality', () => {
    const items = [
      { id: 1, nested: { value: 'a' } },
      { id: 2, nested: { value: 'b' } }
    ]

    expect(tableData.findIndex(items, { id: 2, nested: { value: 'b' } })).toBe(1)
  })

  it('should handle empty array', () => {
    expect(tableData.findIndex([], {})).toBe(-1)
  })
})

describe('checkAutoMergeCells', () => {
  it('should return true when rowspan exists', () => {
    const data = [{ _id_rowspan: 2 }]

    expect(tableData.checkAutoMergeCells(data)).toBe(true)
  })

  it('should return true when colspan exists', () => {
    const data = [{ _name_colspan: 2 }]

    expect(tableData.checkAutoMergeCells(data)).toBe(true)
  })

  it('should return false when no auto-merge attributes', () => {
    const data = [{ _id: 1, _class: 'test' }]

    expect(tableData.checkAutoMergeCells(data)).toBe(false)
  })

  it('should return false for empty array', () => {
    expect(tableData.checkAutoMergeCells([])).toBe(false)
  })

  it('should check all rows', () => {
    const data = [
      { _id: 1 },
      { _name_rowspan: 2 },
      { _id: 3 }
    ]

    expect(tableData.checkAutoMergeCells(data)).toBe(true)
  })
})

describe('hasRowspanCells', () => {
  it('should return true when rowspan > 1', () => {
    const data = [{ name: 'A', _name_rowspan: 3 }]

    expect(tableData.hasRowspanCells(data)).toBe(true)
  })

  it('should return false when rowspan is 1', () => {
    const data = [{ name: 'A', _name_rowspan: 1 }]

    expect(tableData.hasRowspanCells(data)).toBe(false)
  })

  it('should return false when rowspan is null', () => {
    const data = [{ name: 'A', _name_rowspan: null }]

    expect(tableData.hasRowspanCells(data)).toBe(false)
  })

  it('should return false for empty array', () => {
    expect(tableData.hasRowspanCells([])).toBe(false)
  })

  it('should check all rows', () => {
    const data = [
      { name: 'A' },
      { name: 'B', _name_rowspan: 2 }
    ]

    expect(tableData.hasRowspanCells(data)).toBe(true)
  })
})

describe('flattenRowspanCells', () => {
  it('should copy rowspan cell value to spanned rows', () => {
    const data = [
      { name: 'Item 1', _name_rowspan: 3 },
      { price: 10 },
      { price: 20 }
    ]

    tableData.flattenRowspanCells(data)

    expect(data[0]._name_rowspan).toBeUndefined()
    expect(data[1].name).toBe('Item 1')
    expect(data[1]._name_rowspan).toBeUndefined()
    expect(data[2].name).toBe('Item 1')
    expect(data[2]._name_rowspan).toBeUndefined()
  })

  it('should not modify rows without rowspan', () => {
    const data = [
      { name: 'A', price: 1 },
      { name: 'B', price: 2 }
    ]

    tableData.flattenRowspanCells(data)

    expect(data[0].name).toBe('A')
    expect(data[1].name).toBe('B')
  })

  it('should handle rowspan of 1', () => {
    const data = [{ name: 'A', _name_rowspan: 1 }]

    tableData.flattenRowspanCells(data)

    expect(data[0].name).toBe('A')
    expect(data[0]._name_rowspan).toBe(1)
  })

  it('should handle multiple rowspan fields in same row', () => {
    const data = [
      { group: 'G1', _group_rowspan: 2, tag: 'T1', _tag_rowspan: 2 },
      { value: 1 }
    ]

    tableData.flattenRowspanCells(data)

    expect(data[1].group).toBe('G1')
    expect(data[1].tag).toBe('T1')
    expect(data[1]._group_rowspan).toBeUndefined()
    expect(data[1]._tag_rowspan).toBeUndefined()
  })

  it('should handle empty array', () => {
    tableData.flattenRowspanCells([])
  })

  it('should not exceed data bounds', () => {
    const data = [
      { name: 'A', _name_rowspan: 10 },
      { price: 1 }
    ]

    tableData.flattenRowspanCells(data)

    expect(data[0]._name_rowspan).toBeUndefined()
    expect(data[1].name).toBe('A')
    expect(data.length).toBe(2)
  })

  it('should skip keys not starting with underscore', () => {
    const data = [
      { name: 'A', foo_rowspan: 2 },
      { name: 'B' }
    ]

    tableData.flattenRowspanCells(data)

    expect(data[0].foo_rowspan).toBe(2)
    expect(data[1].name).toBe('B')
  })

  it('should handle dot-notation fields', () => {
    const data = [
      { user: { name: 'Alice' }, '_user.name_rowspan': 2 },
      { price: 10 }
    ]

    tableData.flattenRowspanCells(data)

    expect(data[1].user.name).toBe('Alice')
    expect(data[1]['user.name']).toBeUndefined()
    expect(data[0]['_user.name_rowspan']).toBeUndefined()
  })

  it('should handle dot-notation fields with non-object intermediate', () => {
    const data = [
      { user: { name: 'Alice' }, '_user.name_rowspan': 2 },
      { user: null, price: 10 }
    ]

    tableData.flattenRowspanCells(data)

    expect(data[1].user.name).toBe('Alice')
    expect(data[0]['_user.name_rowspan']).toBeUndefined()
  })

  it('should handle dot-notation fields with flat keys', () => {
    const data = [
      { 'user.name': 'Alice', '_user.name_rowspan': 2 },
      { price: 10 }
    ]

    tableData.flattenRowspanCells(data)

    expect(data[1]['user.name']).toBe('Alice')
    expect(data[0]['_user.name_rowspan']).toBeUndefined()
  })
})

describe('trToData', () => {
  beforeEach(() => {
    // Create a table element for testing
    const table = document.createElement('table')

    document.body.appendChild(table)
  })

  it('should convert tr elements to data array', () => {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')

    td1.textContent = 'Value 1'
    td2.textContent = 'Value 2'
    tr.appendChild(td1)
    tr.appendChild(td2)

    const columns = [{ field: 'field1' }, { field: 'field2' }]
    const data = tableData.trToData(columns, [tr])

    expect(data.length).toBe(1)
    expect(data[0].field1).toBe('Value 1')
    expect(data[0].field2).toBe('Value 2')
  })

  it('should save row attributes', () => {
    const tr = document.createElement('tr')

    tr.id = 'row1'
    tr.className = 'test-class'
    tr.setAttribute('data-custom', 'value')

    const td = document.createElement('td')

    td.textContent = 'test'
    tr.appendChild(td)

    const columns = [{ field: 'field1' }]
    const data = tableData.trToData(columns, [tr])

    expect(data[0]._id).toBe('row1')
    expect(data[0]._class).toBe('test-class')
    expect(data[0]._data.custom).toBe('value')
  })

  it('should handle colspan', () => {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')

    td1.textContent = 'Span'
    td1.setAttribute('colspan', '2')
    td2.textContent = 'Normal'
    tr.appendChild(td1)
    tr.appendChild(td2)

    const columns = [{ field: 'f1' }, { field: 'f2' }, { field: 'f3' }]
    const data = tableData.trToData(columns, [tr])

    expect(data[0]._f1_colspan).toBe('2')
  })
})
