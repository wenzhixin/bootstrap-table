/**
 * Bootstrap Table Event System Utility Library
 * Provides jQuery-style event handling APIs using native JavaScript
 */

import DOMHelper from '../helpers/dom.js'

export class EventHelper {
  /**
   * Add event listener with namespace support
   * @param {Element|string} element - DOM element or selector
   * @param {string} event - Event name with optional namespace (e.g., "click.namespace")
   * @param {Function} handler - Event handler function
   * @param {Object|boolean} [options] - Event options or useCapture flag
   * @returns {Element|null} The element itself or null if no element is found
   */
  static on (element, event, handler, options = {}) {
    if (typeof element === 'string') element = DOMHelper.$(element)
    if (!element) return element

    // Validate handler
    if (typeof handler !== 'function') {
      throw new Error('Event handler must be a function')
    }

    // Parse event type and namespace (support multiple namespace segments)
    const parts = event.split('.')
    const eventType = parts[0]
    const namespace = parts.slice(1).join('.')

    // Initialize event handlers storage if not exists
    if (!element._eventHandlers) {
      element._eventHandlers = {}
    }
    if (!element._eventHandlers[eventType]) {
      element._eventHandlers[eventType] = []
    }

    // Create wrapped handler to maintain context
    const wrappedHandler = e => {
      handler.call(element, e)
    }

    // Store handler info including options for proper removal
    element._eventHandlers[eventType].push({
      namespace,
      wrappedHandler,
      original: handler,
      options // Store options for use in removeEventListener
    })

    // Add native event listener
    element.addEventListener(eventType, wrappedHandler, options)
    return element
  }

  /**
   * Remove event listener with namespace support
   * @param {Element|string} element - DOM element or selector
   * @param {string} event - Event name with optional namespace
   * @param {Function} [handler] - Specific handler to remove (optional)
   * @returns {Element|null} The element itself or null if no element is found
   */
  static off (element, event, handler) {
    if (typeof element === 'string') element = DOMHelper.$(element)
    if (!element || !element._eventHandlers) return element

    // Parse event type and namespace (support multiple namespace segments)
    const parts = event.split('.')
    const eventType = parts[0]
    const namespace = parts.slice(1).join('.')

    if (element._eventHandlers[eventType]) {
      // Find handlers to remove
      const handlersToRemove = element._eventHandlers[eventType].filter(info => {
        const matches =
          (!namespace || info.namespace === namespace) &&
          (!handler || info.original === handler)

        if (matches && info.wrappedHandler) {
          // Use the same options that were used in addEventListener
          element.removeEventListener(eventType, info.wrappedHandler, info.options)
        }

        return matches
      })

      // Remove handlers from array
      element._eventHandlers[eventType] = element._eventHandlers[eventType].filter(info =>
        !handlersToRemove.includes(info)
      )

      // Clean up empty event type arrays
      if (element._eventHandlers[eventType].length === 0) {
        delete element._eventHandlers[eventType]
      }

      // Clean up if no handlers left at all
      if (Object.keys(element._eventHandlers).length === 0) {
        delete element._eventHandlers
      }
    }

    return element
  }

  /**
   * Trigger event
   * @param {Element|string} element - DOM element or selector
   * @param {string|Event} event - Event name or Event instance
   * @param {*} [detail] - Custom data to pass with event (uses CustomEvent when provided)
   * @param {Object} [options] - Event options
   * @returns {Element|null} The element itself or null if no element is found
   */
  static trigger (element, event, detail, options = {}) {
    if (typeof element === 'string') element = DOMHelper.$(element)
    if (!element) return element

    let eventObj

    // Allow passing an already constructed Event instance
    if (event instanceof Event) {
      eventObj = event
    } else {
      const baseOptions = {
        bubbles: options.bubbles !== false,
        cancelable: options.cancelable !== false
      }

      // If a detail argument is provided, use CustomEvent; otherwise, use a plain Event
      const hasDetailArgument = arguments.length >= 3 && detail !== undefined

      if (hasDetailArgument) {
        eventObj = new CustomEvent(event, {
          ...baseOptions,
          detail
        })
      } else {
        eventObj = new Event(event, baseOptions)
      }
    }

    element.dispatchEvent(eventObj)
    return element
  }

  /**
   * Event delegation - add event listener that works for dynamically added elements
   * @param {Element|string} parent - Parent element or selector
   * @param {string} selector - Child element selector
   * @param {string} event - Event name with optional namespace
   * @param {Function} handler - Event handler function
   * @param {Object|boolean} [options] - Event options or useCapture flag
   * @returns {Element|null} The parent element
   */
  static delegate (parent, selector, event, handler, options = {}) {
    if (typeof parent === 'string') parent = DOMHelper.$(parent)
    if (!parent) return parent

    // Validate handler
    if (typeof handler !== 'function') {
      throw new Error('Event handler must be a function')
    }

    // Parse event type and namespace (support multiple namespace segments)
    const parts = event.split('.')
    const eventType = parts[0]
    const namespace = parts.slice(1).join('.')
    const eventWithNamespace = namespace ? `${eventType}.${namespace}` : eventType

    // Delegate handler that checks if target matches selector
    const delegateHandler = e => {
      const target = e.target.closest(selector)

      if (target && parent.contains(target)) {
        // Set the correct context and pass target as this
        handler.call(target, e)
      }
    }

    // Store delegate handler for potential removal
    if (!parent._delegates) {
      parent._delegates = []
    }
    parent._delegates.push({
      selector,
      eventType,
      namespace,
      handler: delegateHandler,
      original: handler // Store original handler for undelegate matching
    })

    // Add event listener to parent
    return this.on(parent, eventWithNamespace, delegateHandler, options)
  }

  /**
   * Remove delegated event listener
   * @param {Element|string} parent - Parent element or selector
   * @param {string} selector - Child element selector
   * @param {string} event - Event name with optional namespace
   * @param {Function} [handler] - Specific handler to remove
   * @returns {Element|null} The parent element
   */
  static undelegate (parent, selector, event, handler) {
    if (typeof parent === 'string') parent = DOMHelper.$(parent)
    if (!parent || !parent._delegates) return parent

    // Parse event type and namespace (support multiple namespace segments)
    const parts = event.split('.')
    const eventType = parts[0]
    const namespace = parts.slice(1).join('.')
    const eventWithNamespace = namespace ? `${eventType}.${namespace}` : eventType

    // Find and remove matching delegate
    parent._delegates = parent._delegates.filter(delegate => {
      const matches =
        delegate.selector === selector &&
        delegate.eventType === eventType &&
        (!namespace || delegate.namespace === namespace) &&
        (!handler || delegate.original === handler) // Compare with original handler

      if (matches) {
        this.off(parent, eventWithNamespace, delegate.handler)
      }

      return !matches
    })

    // Clean up delegates storage if no delegates remain
    if (parent._delegates.length === 0) {
      delete parent._delegates
    }

    return parent
  }

  /**
   * One-time event listener - automatically removes itself after first execution
   * @param {Element|string} element - DOM element or selector
   * @param {string} event - Event name with optional namespace
   * @param {Function} handler - Event handler function
   * @param {Object|boolean} [options] - Event options or useCapture flag
   * @returns {Element|null} The element itself or null if no element is found
   */
  static one (element, event, handler, options = {}) {
    if (typeof element === 'string') element = DOMHelper.$(element)
    if (!element) return element

    // Parse event type and namespace (support multiple namespace segments)
    const parts = event.split('.')
    const eventType = parts[0]
    const namespace = parts.slice(1).join('.')
    const eventWithNamespace = namespace ? `${eventType}.${namespace}` : eventType

    // Wrap handler to remove itself after first call
    const wrapper = e => {
      this.off(element, eventWithNamespace, wrapper)
      handler.call(element, e)
    }

    return this.on(element, eventWithNamespace, wrapper, options)
  }

  /**
   * Remove all event listeners matching a namespace
   * @param {Element|string} element - DOM element or selector
   * @param {string} [namespace] - Namespace to match (optional, removes all if not specified)
   * @returns {Element|null} The element itself or null if no element is found
   */
  static offAll (element, namespace) {
    if (typeof element === 'string') element = DOMHelper.$(element)
    if (!element) return element

    // Clean up non-delegated event handlers first
    if (element._eventHandlers) {
      // Iterate through all event types
      Object.keys(element._eventHandlers).forEach(eventType => {
        if (namespace) {
          // Remove only handlers matching the namespace
          element._eventHandlers[eventType] = element._eventHandlers[eventType].filter(info => {
            if (info && info.namespace === namespace) {
              element.removeEventListener(eventType, info.wrappedHandler, info.options)
              return false
            }
            return true
          })
        } else {
          // Remove all handlers for this event type
          element._eventHandlers[eventType].forEach(info => {
            if (info) {
              element.removeEventListener(eventType, info.wrappedHandler, info.options)
            }
          })
          element._eventHandlers[eventType] = []
        }

        // Clean up empty event type arrays
        if (!element._eventHandlers[eventType] || element._eventHandlers[eventType].length === 0) {
          delete element._eventHandlers[eventType]
        }
      })

      // Clean up if no handlers left at all
      if (Object.keys(element._eventHandlers).length === 0) {
        delete element._eventHandlers
      }
    }

    // Also clean up any delegated handlers tied to this element
    if (element._delegates) {
      if (namespace) {
        // Remove only delegates matching the namespace
        element._delegates = element._delegates.filter(delegate => {
          if (delegate.namespace === namespace) {
            // Remove the underlying event listener
            const eventWithNamespace = delegate.namespace ?
              `${delegate.eventType}.${delegate.namespace}` :
              delegate.eventType

            this.off(element, eventWithNamespace, delegate.handler)
            return false
          }
          return true
        })
      } else {
        // Remove all delegates
        element._delegates.forEach(delegate => {
          const eventWithNamespace = delegate.namespace ?
            `${delegate.eventType}.${delegate.namespace}` :
            delegate.eventType

          this.off(element, eventWithNamespace, delegate.handler)
        })
        element._delegates = []
      }

      // Clean up delegates storage if no delegates remain
      if (element._delegates.length === 0) {
        delete element._delegates
      }
    }

    return element
  }

  /**
   * Native DOM helper methods
   */
  static $ (...args) {
    return DOMHelper.$(...args)
  }

  /**
   * Find parent element matching selector
   * @param {Element|string} element - DOM element or selector
   * @param {string} selector - Parent selector to match
   * @param {number} [layer] - Index of the matching parent to return (0 = closest)
   * @returns {Element|null} The parent element
   */
  static parents (element, selector, layer = 0) {
    if (typeof element === 'string') element = DOMHelper.$(element)
    if (!element) return null

    let current = element.parentElement
    let matchIndex = 0

    while (current) {
      const isMatch = !selector || typeof current.matches === 'function' && current.matches(selector)

      if (isMatch) {
        if (matchIndex === layer) {
          return current
        }
        matchIndex += 1
      }

      current = current.parentElement
    }

    return null
  }

  /**
   * Get data attribute value
   * @param {Element|string} element - DOM element or selector
   * @param {string} key - Data key
   * @returns {string|undefined|null} The data attribute value, undefined if the key is missing, or null if the element is not found
   */
  static getData (element, key) {
    if (typeof element === 'string') element = DOMHelper.$(element)
    if (!element) return null

    return DOMHelper.data(element, key)
  }

  /**
   * Set data attribute value
   * @param {Element|string} element - DOM element or selector
   * @param {string} key - Data key
   * @param {string} value - Data value
   * @returns {Element|null} The element itself or null if no element is found
   */
  static setData (element, key, value) {
    if (typeof element === 'string') element = DOMHelper.$(element)
    if (!element) return null

    DOMHelper.data(element, key, value)
    return element
  }
}
