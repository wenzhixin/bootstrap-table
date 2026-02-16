import DOMHelper from '../helpers/dom.js'

/**
 * DOM manipulation utility functions.
 *
 * This module provides helper functions for DOM manipulation using native JavaScript,
 * including scrollbar width calculation, class name conversion, style parsing,
 * h() function for element creation, and HTML-to-DOM conversion.
 *
 * Note: For a full jQuery-like DOM manipulation library, see src/helpers/dom.js
 *
 * @module utils/dom
 */

let cachedWidth

/**
 * Gets the width of the browser scrollbar.
 * The result is cached after the first call for performance.
 *
 * @returns {number} The width of the scrollbar in pixels.
 */
export function getScrollBarWidth () {
  if (cachedWidth === undefined) {
    const inner = DOMHelper.create('<div class="fixed-table-scroll-inner"></div>')
    const outer = DOMHelper.create('<div class="fixed-table-scroll-outer"></div>')

    DOMHelper.append(outer, inner)
    DOMHelper.append(document.body, outer)

    const w1 = inner.offsetWidth

    DOMHelper.css(outer, 'overflow', 'scroll')
    let w2 = inner.offsetWidth

    if (w1 === w2) {
      w2 = outer.clientWidth
    }

    DOMHelper.remove(outer)
    cachedWidth = w1 - w2
  }
  return cachedWidth
}

/**
 * Converts a class specification to a string.
 * Handles string, array, and object formats.
 *
 * @param {string|Array|Object.<string, boolean>} class_ - The class specification.
 * @returns {string} The class names as a space-separated string.
 */
export function classToString (class_) {
  if (typeof class_ === 'string') {
    return class_
  }
  if (Array.isArray(class_)) {
    return class_.map(x => classToString(x)).filter(x => x).join(' ')
  }
  if (class_ && typeof class_ === 'object') {
    return Object.entries(class_).map(([k, v]) => v ? k : '').filter(x => x).join(' ')
  }
  return ''
}

/**
 * Parses and applies CSS styles to a DOM element.
 * Supports string, array, and object formats. Handles !important priority.
 *
 * @param {HTMLElement} dom - The DOM element to apply styles to.
 * @param {string|Array|Object.<string, string>} style - The style(s) to apply.
 * @returns {HTMLElement} The DOM element with styles applied.
 */
export function parseStyle (dom, style) {
  if (!style) {
    return dom
  }

  // Helper function to handle !important priority
  const IMPORTANT_PRIORITY_REGEX = /\s*!important\s*$/i
  const parsePriority = value => {
    if (typeof value === 'string' && IMPORTANT_PRIORITY_REGEX.test(value)) {
      return {
        value: value.replace(IMPORTANT_PRIORITY_REGEX, ''),
        priority: 'important'
      }
    }
    return { value, priority: '' }
  }

  if (typeof style === 'string') {
    style.split(';').forEach(i => {
      const index = i.indexOf(':')

      if (index > 0) {
        const k = i.substring(0, index).trim()
        const v = i.substring(index + 1).trim()
        const { value, priority } = parsePriority(v)

        dom.style.setProperty(k, value, priority)
      }
    })
  } else if (Array.isArray(style)) {
    for (const item of style) {
      parseStyle(dom, item)
    }
  } else if (typeof style === 'object') {
    for (const [k, v] of Object.entries(style)) {
      const { value, priority } = parsePriority(v)

      dom.style.setProperty(k, value, priority)
    }
  }
  return dom
}

/**
 * Creates a DOM element with attributes and children.
 * This function provides a shorthand syntax for creating DOM elements.
 *
 * @param {string|HTMLElement} element - The tag name or existing element.
 * @param {Object.<string, *>} [attrs={}] - The attributes to set on the element.
 * @param {Array.<HTMLElement|string>} [children=[]] - The children to append.
 * @returns {HTMLElement} The created or modified element.
 */
export function h (element, attrs, children) {
  const el = element instanceof HTMLElement ? element : document.createElement(element)
  const _attrs = attrs || {}
  const _children = children || []

  // default attributes
  if (el.tagName === 'A') {
    el.href = 'javascript:'
  }

  for (const [k, v] of Object.entries(_attrs)) {
    if (v === undefined) {
      continue
    }
    if (['text', 'innerText'].includes(k)) {
      el.innerText = v
    } else if (['html', 'innerHTML'].includes(k)) {
      el.innerHTML = v
    } else if (k === 'children') {
      _children.push(...v)
    } else if (k === 'class') {
      el.setAttribute('class', classToString(v))
    } else if (k === 'style') {
      if (typeof v === 'string') {
        el.setAttribute('style', v)
      } else {
        parseStyle(el, v)
      }
    } else if (k.startsWith('@') || k.startsWith('on')) {
      // event handlers
      const event = k.startsWith('@') ? k.substring(1) : k.substring(2).toLowerCase()
      const args = Array.isArray(v) ? v : [v]

      el.addEventListener(event, ...args)
    } else if (k.startsWith('.')) {
      // set property
      el[k.substring(1)] = v
    } else {
      el.setAttribute(k, v)
    }
  }
  if (_children.length) {
    el.append(..._children)
  }
  return el
}

/**
 * Converts HTML to DOM nodes.
 * Uses duck typing to detect jQuery objects without direct dependency.
 *
 * @param {string|Node|Object} html - The HTML to convert. Can be a string, Node, or jQuery-like object.
 * @returns {NodeList|Array<Node>} The DOM nodes.
 */
export function htmlToNodes (html) {
  // Duck typing check for jQuery objects (check for 'jquery' property)
  if (html && typeof html === 'object' && 'jquery' in html) {
    return Array.from(html)
  }
  if (html instanceof Node) {
    return [html]
  }
  if (typeof html !== 'string') {
    html = new String(html).toString()
  }
  const d = document.createElement('div')

  d.innerHTML = html
  return d.childNodes
}
