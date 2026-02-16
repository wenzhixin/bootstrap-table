import { isNumeric } from './helper.js'

/**
 * Search and sorting utilities.
 *
 * This module provides utility functions for searching and sorting table data,
 * including regex comparison, custom sorting logic, and search result highlighting.
 *
 * @module utils/search-sort
 */

/**
 * Compares a value against a search pattern using regex.
 * Supports both plain text search and regex patterns (e.g., /pattern/flags).
 *
 * @param {*} value - The value to search in.
 * @param {string} search - The search pattern or regex.
 * @returns {boolean} True if the value matches the search pattern, false otherwise.
 */
export function regexCompare (value, search) {
  try {
    const regexpParts = search.match(/^\/(.*?)\/([gim]*)$/)

    if (value.toString().search(regexpParts ? new RegExp(regexpParts[1], regexpParts[2]) : new RegExp(search, 'gim')) !== -1) {
      return true
    }
  } catch (e) {
    console.error(e)
    return false
  }
  return false
}

/**
 * Sorts two values with support for numeric, string, and empty value handling.
 *
 * @param {*} a - The first value to compare.
 * @param {*} b - The second value to compare.
 * @param {number} order - The sort order (1 for ascending, -1 for descending).
 * @param {Object.<string, *>} options - Sort options.
 * @param {boolean} [options.sortStable=false] - If true, use position for equal values.
 * @param {boolean} [options.sortEmptyLast=false] - If true, sort empty values last.
 * @param {number} aPosition - The position of the first value.
 * @param {number} bPosition - The position of the second value.
 * @returns {number} Negative if a < b, positive if a > b, 0 if equal.
 */
export function sort (a, b, order, options, aPosition, bPosition) {
  if (a === undefined || a === null) {
    a = ''
  }
  if (b === undefined || b === null) {
    b = ''
  }

  if (options.sortStable && a === b) {
    a = aPosition
    b = bPosition
  }

  // If both values are numeric, do a numeric comparison
  if (isNumeric(a) && isNumeric(b)) {
    // Convert numerical values from string to float.
    a = parseFloat(a)
    b = parseFloat(b)
    if (a < b) {
      return order * -1
    }
    if (a > b) {
      return order
    }
    return 0
  }

  if (options.sortEmptyLast) {
    if (a === '') {
      return 1
    }

    if (b === '') {
      return -1
    }
  }

  if (a === b) {
    return 0
  }

  // If value is not a string, convert to string
  if (typeof a !== 'string') {
    a = a.toString()
  }

  if (a.localeCompare(b) === -1) {
    return order * -1
  }

  return order
}

/**
 * Highlights search text matches in HTML by wrapping them in <mark> tags.
 * Recursively processes all text nodes in the HTML.
 *
 * @param {string|Element} html - The HTML string or DOM element to process.
 * @param {string} searchText - The text to search for and highlight.
 * @returns {string|Element} The HTML with matches highlighted, or the processed element.
 */
export function replaceSearchMark (html, searchText) {
  const isDom = html instanceof Element
  const node = isDom ? html : document.createElement('div')
  const regExp = new RegExp(searchText, 'gim')
  const replaceTextWithDom = (text, regExp) => {
    const result = []
    let match
    let lastIndex = 0

    while ((match = regExp.exec(text)) !== null) {
      if (lastIndex !== match.index) {
        result.push(document.createTextNode(text.substring(lastIndex, match.index)))
      }
      const mark = document.createElement('mark')

      mark.innerText = match[0]
      result.push(mark)
      lastIndex = match.index + match[0].length
    }
    if (!result.length) {
      // no match
      return
    }
    if (lastIndex !== text.length) {
      result.push(document.createTextNode(text.substring(lastIndex)))
    }
    return result
  }
  const replaceMark = node => {
    for (let i = 0; i < node.childNodes.length; i++) {
      const child = node.childNodes[i]

      if (child.nodeType === document.TEXT_NODE) {
        const elements = replaceTextWithDom(child.data, regExp)

        if (elements) {
          for (const el of elements) {
            node.insertBefore(el, child)
          }
          node.removeChild(child)
          i += elements.length - 1
        }
      }
      if (child.nodeType === document.ELEMENT_NODE) {
        replaceMark(child)
      }
    }
  }

  if (!isDom) {
    node.innerHTML = html
  }
  replaceMark(node)
  return isDom ? node : node.innerHTML
}
