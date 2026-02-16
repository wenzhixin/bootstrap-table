import { sprintf } from './string.js'

/**
 * General helper utilities.
 *
 * This module provides miscellaneous helper functions used throughout Bootstrap Table,
 * including debouncing, event handling, URL manipulation, and browser detection.
 *
 * @module utils/helper
 */

/**
 * Calculates the value of an object property, supporting function calls and nested properties.
 *
 * @param {Object.<string, *>} self - The context to use when calling functions.
 * @param {string|Function|*} name - The property name, function, or value to calculate.
 * @param {Array.<*>} args - The arguments to pass to the function.
 * @param {*} defaultValue - The default value to return if calculation fails.
 * @returns {*} The calculated value or default value.
 */
export function calculateObjectValue (self, name, args, defaultValue) {
  let func = name

  if (typeof name === 'string') {
    // support obj.func1.func2
    const names = name.split('.')

    if (names.length > 1) {
      func = window
      for (const f of names) {
        func = func[f]
      }
    } else {
      func = window[name]
    }
  }

  if (func !== null && typeof func === 'object') {
    return func
  }

  if (typeof func === 'function') {
    return func.apply(self, args || [])
  }

  if (
    !func &&
    typeof name === 'string' &&
    args &&
    sprintf(name, ...args)
  ) {
    return sprintf(name, ...args)
  }

  return defaultValue
}

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @param {boolean} [immediate=false] - If true, trigger the function on the leading edge.
 * @returns {Function} The debounced function.
 */
export function debounce (func, wait, immediate) {
  let timeout

  return function executedFunction () {
    const context = this
    const args = arguments

    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}

/**
 * Generates a unique event name with a prefix and optional ID.
 *
 * @param {string} eventPrefix - The prefix for the event name.
 * @param {string} [id=''] - The optional ID to append. If not provided, generates a random ID.
 * @returns {string} The generated event name.
 */
export function getEventName (eventPrefix, id = '') {
  id = id || `${+new Date()}${~~(Math.random() * 1000000)}`
  return `${eventPrefix}-${id}`
}

/**
 * Checks if the table has a detail view icon.
 *
 * @param {Object.<string, *>} options - The table options.
 * @returns {boolean} True if the table has a detail view icon, false otherwise.
 */
export function hasDetailViewIcon (options) {
  return options.detailView && options.detailViewIcon && !options.cardView
}

/**
 * Gets the index offset for the detail view column.
 *
 * @param {Object.<string, *>} options - The table options.
 * @returns {number} The index offset (1 if detail view is on the left, 0 otherwise).
 */
export function getDetailViewIndexOffset (options) {
  return hasDetailViewIcon(options) && options.detailViewAlign !== 'right' ? 1 : 0
}

/**
 * Adds query parameters to a URL while preserving the hash fragment.
 *
 * @param {string} url - The base URL.
 * @param {Object.<string, string>} query - The query parameters to add.
 * @returns {string} The URL with query parameters added.
 */
export function addQueryToUrl (url, query) {
  const hashArray = url.split('#')
  const [baseUrl, search] = hashArray[0].split('?')
  const urlParams = new URLSearchParams(search)

  for (const [key, value] of Object.entries(query)) {
    urlParams.set(key, value)
  }
  return `${baseUrl}?${urlParams.toString()}#${hashArray.slice(1).join('#')}`
}

/**
 * Checks if a value is numeric.
 *
 * @param {*} n - The value to check.
 * @returns {boolean} True if the value is numeric, false otherwise.
 */
export function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

/**
 * Checks if the current browser is Internet Explorer.
 *
 * @returns {boolean} True if the browser is IE, false otherwise.
 */
export function isIEBrowser () {
  return navigator.userAgent.includes('MSIE ') ||
    /Trident.*rv:11\./.test(navigator.userAgent)
}
