import { escapeApostrophe, escapeHTML } from './string.js'
import DOMHelper from '../helpers/dom.js'

/**
 * Table column and data processing utilities.
 *
 * This module provides utility functions for working with Bootstrap Table columns and data,
 * including field indexing, data attribute parsing, and conversion between DOM and data formats.
 *
 * @module utils/table-data
 */

/**
 * Gets the title of a field from a list of column definitions.
 *
 * @param {Array.<Object.<string, *>>} list - The list of column definitions.
 * @param {string} value - The field name to look for.
 * @returns {string} The title of the field, or empty string if not found.
 */
export function getFieldTitle (list, value) {
  for (const item of list) {
    if (item.field === value) {
      return item.title
    }
  }
  return ''
}

/**
 * Sets field indices for columns with colspan/rowspan support.
 * Modifies the column definitions in place to add fieldIndex and colspanIndex properties.
 *
 * @param {Array.<Array.<Object.<string, *>>>} columns - The column definitions array.
 */
export function setFieldIndex (columns) {
  let totalCol = 0
  const flag = []

  for (const column of columns[0]) {
    totalCol += +column.colspan || 1
  }

  for (let i = 0; i < columns.length; i++) {
    flag[i] = []
    for (let j = 0; j < totalCol; j++) {
      flag[i][j] = false
    }
  }

  for (let i = 0; i < columns.length; i++) {
    for (const r of columns[i]) {
      const rowspan = +r.rowspan || 1
      const colspan = +r.colspan || 1
      const index = flag[i].indexOf(false)

      r.colspanIndex = index

      if (colspan === 1) {
        r.fieldIndex = index
        // when field is undefined, use index instead
        if (typeof r.field === 'undefined') {
          r.field = index
        }
      } else {
        r.colspanGroup = +r.colspan
      }

      for (let j = 0; j < rowspan; j++) {
        for (let k = 0; k < colspan; k++) {
          flag[i + j][index + k] = true
        }
      }
    }
  }
}

/**
 * Updates field groups based on column visibility.
 * Modifies the column definitions in place to update colspan and visible properties.
 *
 * @param {Array.<Array.<Object.<string, *>>>} columns - The column definitions array.
 * @param {Array.<Object.<string, *>>} fieldColumns - The field columns to update.
 */
export function updateFieldGroup (columns, fieldColumns) {
  const allColumns = [].concat(...columns)

  for (const c of columns) {
    for (const r of c) {
      if (r.colspanGroup > 1) {
        let colspan = 0

        for (let i = r.colspanIndex; i < r.colspanIndex + r.colspanGroup; i++) {
          const underColumns = allColumns.filter(col => col.fieldIndex === i)
          const column = underColumns[underColumns.length - 1]

          if (underColumns.length > 1) {
            for (let j = 0; j < underColumns.length - 1; j++) {
              underColumns[j].visible = column.visible
            }
          }

          if (column.visible) {
            colspan++
          }
        }
        r.colspan = colspan
        r.visible = colspan > 0
      }
    }
  }

  if (columns.length < 2) {
    return
  }

  for (const column of fieldColumns) {
    const sameColumns = allColumns.filter(col => col.fieldIndex === column.fieldIndex)

    if (sameColumns.length > 1) {
      for (const c of sameColumns) {
        c.visible = column.visible
      }
    }
  }
}

/**
 * Converts camelCase data attribute names to kebab-case.
 *
 * @param {Object.<string, *>} dataAttr - The data attributes object.
 * @returns {Object.<string, *>} The data attributes with kebab-case keys.
 */
export function getRealDataAttr (dataAttr) {
  for (const [attr, value] of Object.entries(dataAttr)) {
    const auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase()

    if (auxAttr !== attr) {
      dataAttr[auxAttr] = value
      delete dataAttr[attr]
    }
  }
  return dataAttr
}

/**
 * Gets a field value from an item, supporting nested properties.
 *
 * @param {Object.<string, *>} item - The item to get the field from.
 * @param {string} field - The field name (supports dot notation for nested properties).
 * @param {boolean} escape - Whether to escape HTML in the returned value.
 * @param {boolean} [columnEscape=undefined] - Override for the escape parameter.
 * @returns {*} The field value, escaped if requested.
 */
export function getItemField (item, field, escape, columnEscape = undefined) {
  // use column escape if it is defined
  if (typeof columnEscape !== 'undefined') {
    escape = columnEscape
  }

  if (
    typeof field !== 'string' ||
    item.hasOwnProperty(field) ||
    !field.includes('.')
  ) {
    return escape ? escapeHTML(item[field]) : item[field]
  }

  const props = field.split('.')
  let value = item

  for (const p of props) {
    if (value === null || value === undefined) {
      return // undefined
    }
    value = value[p]
  }
  return escape ? escapeHTML(value) : value
}

/**
 * Finds the index of an item in an array using deep equality.
 *
 * @param {Array.<*>} items - The array to search in.
 * @param {*} item - The item to find.
 * @returns {number} The index of the item, or -1 if not found.
 */
export function findIndex (items, item) {
  for (const it of items) {
    if (JSON.stringify(it) === JSON.stringify(item)) {
      return items.indexOf(it)
    }
  }
  return -1
}

/**
 * Converts table rows (tr elements) to data array.
 * Preserves row and cell attributes including id, class, style, and data-* attributes.
 *
 * @param {Array.<Object.<string, *>>} columns - The column definitions.
 * @param {HTMLCollection|NodeList|Array<Element>} els - The tr elements.
 * @returns {Array.<Object.<string, *>>} The array of row data objects.
 */
export function trToData (columns, els) {
  const data = []
  const m = []
  const elsArray = Array.from(els)

  for (let y = 0; y < elsArray.length; y++) {
    const el = elsArray[y]
    const row = {}

    // save tr's id, class and data-* attributes
    row._id = DOMHelper.attr(el, 'id')
    row._class = DOMHelper.attr(el, 'class')
    row._data = getRealDataAttr(el.dataset || {})
    row._style = DOMHelper.attr(el, 'style')

    const cells = DOMHelper.children(el, 'td,th')

    for (let x = 0; x < cells.length; x++) {
      const cell = cells[x]
      const colspan = parseInt(DOMHelper.attr(cell, 'colspan'), 10) || 1
      const rowspan = parseInt(DOMHelper.attr(cell, 'rowspan'), 10) || 1
      let currentX = x

      // skip already occupied cells in current row
      for (; m[y] && m[y][currentX]; currentX++) {
        // ignore
      }

      // mark matrix elements occupied by current cell with true
      for (let tx = currentX; tx < currentX + colspan; tx++) {
        for (let ty = y; ty < y + rowspan; ty++) {
          if (!m[ty]) { // fill missing rows
            m[ty] = []
          }
          m[ty][tx] = true
        }
      }

      const field = columns[currentX].field

      row[field] = escapeApostrophe(DOMHelper.html(cell).trim())
      // save td's id, class and data-* attributes
      row[`_${field}_id`] = DOMHelper.attr(cell, 'id')
      row[`_${field}_class`] = DOMHelper.attr(cell, 'class')
      row[`_${field}_rowspan`] = DOMHelper.attr(cell, 'rowspan')
      row[`_${field}_colspan`] = DOMHelper.attr(cell, 'colspan')
      row[`_${field}_title`] = DOMHelper.attr(cell, 'title')
      row[`_${field}_data`] = getRealDataAttr(cell.dataset || {})
      row[`_${field}_style`] = DOMHelper.attr(cell, 'style')
    }
    data.push(row)
  }
  return data
}

/**
 * Checks if any row in the data has auto-merge cells (rowspan/colspan).
 *
 * @param {Array.<Object.<string, *>>} data - The data array to check.
 * @returns {boolean} True if any row has auto-merge cells, false otherwise.
 */
export function checkAutoMergeCells (data) {
  for (const row of data) {
    for (const key of Object.keys(row)) {
      if (key.startsWith('_') && (key.endsWith('_rowspan') || key.endsWith('_colspan'))) {
        return true
      }
    }
  }
  return false
}
