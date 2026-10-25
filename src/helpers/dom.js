/**
 * Bootstrap Table DOM Manipulation Utility Library
 * Provides jQuery-style DOM manipulation APIs using native JavaScript
 *
 * Security Notice:
 * - The `create()` method uses innerHTML to parse HTML strings. Always sanitize user input
 *   before passing it to create() to prevent XSS attacks.
 * - The `html()` method sets innerHTML directly. Use the `text()` method for user-provided content.
 * - The `attr()` method allows setting arbitrary attributes including event handlers.
 *   Avoid setting event handler attributes (onclick, onerror, etc.) with user-controlled data.
 */

class DOMHelper {
  /**
   * Element selector
   * @param {string|Element} selector - CSS selector or DOM element
   * @param {Element} context - Search context, defaults to document
   * @returns {Element|null} First matched element
   */
  static $ (selector, context = document) {
    if (typeof selector === 'string') {
      return context.querySelector(selector)
    }
    if (selector instanceof Element) {
      return selector
    }
    return null
  }

  /**
   * Element selector (multiple)
   * @param {string|Element|NodeList} selector - CSS selector, DOM element, or NodeList
   * @param {Element} context - Search context, defaults to document
   * @returns {Element[]} Array of all matched elements. Note: if selector is an Element, returns [Element]
   */
  static $$ (selector, context = document) {
    if (typeof selector === 'string') {
      return Array.from(context.querySelectorAll(selector))
    }
    if (selector instanceof NodeList) {
      return Array.from(selector)
    }
    if (selector instanceof Element) {
      return [selector]
    }
    return []
  }

  /**
   * Create DOM element
   * @param {string} html - HTML string. Note: This method uses innerHTML and can execute scripts.
   *                        Always sanitize user input before passing it to this method.
   * @returns {Element|null} Created DOM element. Returns null if html is empty, not a string,
   *                         or contains only whitespace.
   */
  static create (html) {
    if (typeof html !== 'string') return null

    const trimmed = html.trim()

    if (!trimmed) return null

    const template = document.createElement('template')

    template.innerHTML = trimmed
    return template.content.firstChild
  }

  /**
   * Add CSS class
   * @param {Element|string} element - DOM element or selector
   * @param {string} className - Class name to add (space-separated for multiple classes)
   * @returns {Element|null} The element itself
   */
  static addClass (element, className) {
    if (typeof element === 'string') element = this.$(element)
    if (!element || !element.classList) return element
    if (!className) return element

    const classes = className.split(' ').filter(c => c)

    element.classList.add(...classes)
    return element
  }

  /**
   * Remove CSS class
   * @param {Element|string} element - DOM element or selector
   * @param {string} className - Class name to remove (space-separated for multiple classes)
   * @returns {Element|null} The element itself
   */
  static removeClass (element, className) {
    if (typeof element === 'string') element = this.$(element)
    if (!element || !element.classList) return element
    if (!className) return element

    const classes = className.split(' ').filter(c => c)

    element.classList.remove(...classes)
    return element
  }

  /**
   * Toggle CSS class
   * @param {Element|string} element - DOM element or selector
   * @param {string} className - Class name to toggle (space-separated for multiple classes)
   * @returns {Element|null} The element itself
   */
  static toggleClass (element, className) {
    if (typeof element === 'string') element = this.$(element)
    if (!element || !element.classList) return element
    if (!className) return element

    const classes = className.split(' ').filter(c => c)

    classes.forEach(cls => element.classList.toggle(cls))
    return element
  }

  /**
   * Check if element has CSS class
   * @param {Element|string} element - DOM element or selector
   * @param {string} className - Class name to check
   * @returns {boolean} Whether the class exists
   */
  static hasClass (element, className) {
    if (typeof element === 'string') element = this.$(element)
    if (!element || !element.classList) return false
    if (!className) return false

    return element.classList.contains(className)
  }

  /**
   * Get or set attribute
   * @param {Element|string} element - DOM element or selector
   * @param {string} name - Attribute name. Warning: Avoid setting event handler attributes
   *                        (onclick, onerror, etc.) with user-controlled data to prevent XSS.
   * @param {string} [value] - Attribute value (omit to get)
   * @returns {Element|null} Element when setting, or string|null when getting attribute
   */
  static attr (element, name, value) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return value === undefined ? null : element

    if (value === undefined) {
      return element.getAttribute(name)
    }
    element.setAttribute(name, value)
    return element
  }

  /**
   * Remove attribute
   * @param {Element|string} element - DOM element or selector
   * @param {string} name - Attribute name
   * @returns {Element|null} The element itself
   */
  static removeAttr (element, name) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return element

    element.removeAttribute(name)
    return element
  }

  /**
   * Get or set data attribute
   * @param {Element|string} element - DOM element or selector
   * @param {string} key - Data key name
   * @param {string} [value] - Data value (omit to get)
   * @returns {(string|undefined) when getting (value omitted); (Element|null|undefined) when setting (value provided)}
   * Returns the data attribute value (string or undefined) when getting, or the element (or null/undefined if not found) when setting.
   */
  static data (element, key, value) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return value === undefined ? undefined : element

    if (value === undefined) {
      return element.dataset[key]
    }
    element.dataset[key] = value
    return element
  }

  /**
   * Append child element
   * @param {Element|string} parent - Parent element or selector
   * @param {Element|string} child - Child element or HTML string
   * @returns {Element|null} Parent element
   */
  static append (parent, child) {
    if (typeof parent === 'string') parent = this.$(parent)
    if (typeof child === 'string') child = this.create(child)

    if (parent && child) {
      parent.appendChild(child)
    }
    return parent
  }

  /**
   * Prepend child element
   * @param {Element|string} parent - Parent element or selector
   * @param {Element|string} child - Child element or HTML string
   * @returns {Element|null} Parent element
   */
  static prepend (parent, child) {
    if (typeof parent === 'string') parent = this.$(parent)
    if (typeof child === 'string') child = this.create(child)

    if (parent && child) {
      parent.insertBefore(child, parent.firstChild)
    }
    return parent
  }

  /**
   * Insert element after target
   * @param {Element|string} newElement - Element to insert
   * @param {Element|string} targetElement - Target element
   * @returns {Element|null} Inserted element
   */
  static insertAfter (newElement, targetElement) {
    if (typeof targetElement === 'string') targetElement = this.$(targetElement)
    if (typeof newElement === 'string') newElement = this.create(newElement)

    if (targetElement && newElement && targetElement.parentNode) {
      targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling)
    }
    return newElement
  }

  /**
   * Insert element before target
   * @param {Element|string} newElement - Element to insert
   * @param {Element|string} targetElement - Target element
   * @returns {Element|null} Inserted element
   */
  static insertBefore (newElement, targetElement) {
    if (typeof targetElement === 'string') targetElement = this.$(targetElement)
    if (typeof newElement === 'string') newElement = this.create(newElement)

    if (targetElement && newElement && targetElement.parentNode) {
      targetElement.parentNode.insertBefore(newElement, targetElement)
    }
    return newElement
  }

  /**
   * Find child elements
   * @param {Element|string} element - Parent element or selector
   * @param {string} selector - CSS selector
   * @returns {Element[]} Array of matched child elements
   */
  static find (element, selector) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return []

    return Array.from(element.querySelectorAll(selector))
  }

  /**
   * Find first matching child element
   * @param {Element|string} element - Parent element or selector
   * @param {string} selector - CSS selector
   * @returns {Element|null} First matched child element
   */
  static findFirst (element, selector) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return null

    return element.querySelector(selector)
  }

  /**
   * Get or set style
   * @param {Element|string} element - DOM element or selector
   * @param {string|Object} property - Property name or property object
   * @param {string} [value] - Style value (when property is string)
   * @returns {Element|string|null} Element when setting, style value when getting
   */
  static css (element, property, value) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) {
      return null
    }

    if (typeof property === 'object') {
      // Batch set styles
      Object.assign(element.style, property)
      return element
    }
    if (value === undefined) {
      // Get style
      return getComputedStyle(element)[property]
    }
    // Set style
    element.style[property] = value

    return element
  }

  /**
   * Get element width
   * @param {Element|string} element - DOM element or selector
   * @returns {number} Element width
   */
  static width (element) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return 0

    return element.offsetWidth
  }

  /**
   * Get element height
   * @param {Element|string} element - DOM element or selector
   * @returns {number} Element height
   */
  static height (element) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return 0

    return element.offsetHeight
  }

  /**
   * Get element outer width (including border, optionally including margin)
   * @param {Element|string} element - DOM element or selector
   * @param {boolean} [includeMargin=false] - Whether to include margin
   * @returns {number} Element outer width
   */
  static outerWidth (element, includeMargin = false) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return 0

    let width = element.offsetWidth

    if (includeMargin) {
      const style = getComputedStyle(element)
      const marginLeft = parseInt(style.marginLeft, 10) || 0
      const marginRight = parseInt(style.marginRight, 10) || 0

      width += marginLeft + marginRight
    }
    return width
  }

  /**
   * Get element outer height (including border, optionally including margin)
   * @param {Element|string} element - DOM element or selector
   * @param {boolean} [includeMargin=false] - Whether to include margin
   * @returns {number} Element outer height
   */
  static outerHeight (element, includeMargin = false) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return 0

    let height = element.offsetHeight

    if (includeMargin) {
      const style = getComputedStyle(element)
      const marginTop = parseInt(style.marginTop, 10) || 0
      const marginBottom = parseInt(style.marginBottom, 10) || 0

      height += marginTop + marginBottom
    }
    return height
  }

  /**
   * Get or set element value
   * @param {Element|string} element - DOM element or selector
   * @param {string} [value] - Value (omit to get)
   * @returns {Element|string|null} Element when setting, current value when getting
   */
  static val (element, value) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return value === undefined ? null : element

    if (value === undefined) {
      return element.value
    }
    element.value = value
    return element
  }

  /**
   * Get or set HTML content
   * @param {Element|string} element - DOM element or selector
   * @param {string} [content] - HTML content (omit to get). Warning: This method uses innerHTML
   *                             and can execute scripts. Use text() for user-provided content.
   * @returns {Element|string|null} Element when setting, HTML content when getting
   */
  static html (element, content) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return content === undefined ? null : element

    if (content === undefined) {
      return element.innerHTML
    }
    element.innerHTML = content
    return element
  }

  /**
   * Get or set text content
   * @param {Element|string} element - DOM element or selector
   * @param {string} [content] - Text content (omit to get)
   * @returns {Element|string|null} Element when setting, text content when getting
   */
  static text (element, content) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return content === undefined ? null : element

    if (content === undefined) {
      return element.textContent
    }
    element.textContent = content
    return element
  }

  /**
   * Remove element
   * @param {Element|string} element - DOM element or selector
   * @returns {Element|null} Removed element
   */
  static remove (element) {
    if (typeof element === 'string') element = this.$(element)
    if (!element || !element.parentNode) return element

    element.parentNode.removeChild(element)
    return element
  }

  /**
   * Empty element content
   * @param {Element|string} element - DOM element or selector
   * @returns {Element|null} Emptied element
   */
  static empty (element) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return element

    element.innerHTML = ''
    return element
  }

  /**
   * Iterate over element collection
   * @param {Element[]|NodeList|string} elements - Element collection or selector
   * @param {Function} callback - Callback function with params (index, element)
   * @returns {Element[]} Element collection
   */
  static each (elements, callback) {
    if (typeof elements === 'string') {
      elements = this.$$(elements)
    } else if (elements instanceof NodeList) {
      elements = Array.from(elements)
    } else if (!Array.isArray(elements)) {
      elements = [elements]
    }

    elements.forEach((element, index) => {
      callback.call(element, index, element)
    })
    return elements
  }

  /**
   * Get parent element
   * @param {Element|string} element - DOM element or selector
   * @param {string} [selector] - Parent element selector (optional)
   * @returns {Element|null} Parent element
   */
  static parent (element, selector) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return null

    let parent = element.parentElement

    if (selector) {
      while (parent && !parent.matches(selector)) {
        parent = parent.parentElement
      }
    }
    return parent
  }

  /**
   * Get child elements
   * @param {Element|string} element - DOM element or selector
   * @param {string} [selector] - Child element selector (optional)
   * @returns {Element[]} Array of child elements
   */
  static children (element, selector) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return []

    let children = Array.from(element.children)

    if (selector) {
      children = children.filter(child => child.matches(selector))
    }
    return children
  }

  /**
   * Get next sibling element
   * @param {Element|string} element - DOM element or selector
   * @param {string} [selector] - Sibling element selector (optional)
   * @returns {Element|null} Next sibling element
   */
  static next (element, selector) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return null

    let next = element.nextElementSibling

    if (selector) {
      while (next && !next.matches(selector)) {
        next = next.nextElementSibling
      }
    }
    return next
  }

  /**
   * Get previous sibling element
   * @param {Element|string} element - DOM element or selector
   * @param {string} [selector] - Sibling element selector (optional)
   * @returns {Element|null} Previous sibling element
   */
  static prev (element, selector) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return null

    let prev = element.previousElementSibling

    if (selector) {
      while (prev && !prev.matches(selector)) {
        prev = prev.previousElementSibling
      }
    }
    return prev
  }

  /**
   * Get element position relative to document
   * @param {Element|string} element - DOM element or selector
   * @returns {Object} Position info {top, left, width, height}
   */
  static offset (element) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return { top: 0, left: 0, width: 0, height: 0 }

    const rect = element.getBoundingClientRect()

    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height
    }
  }

  /**
   * Get element position relative to parent
   * @param {Element|string} element - DOM element or selector
   * @returns {Object} Position info {top, left}
   */
  static position (element) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return { top: 0, left: 0 }

    return {
      top: element.offsetTop,
      left: element.offsetLeft
    }
  }

  /**
   * Check if element matches selector
   * @param {Element|string} element - DOM element or selector
   * @param {string} selector - CSS selector
   * @returns {boolean} Whether it matches
   */
  static is (element, selector) {
    if (typeof element === 'string') element = this.$(element)
    if (!element) return false

    return element.matches(selector)
  }
}

// Export DOMHelper class
export default DOMHelper
