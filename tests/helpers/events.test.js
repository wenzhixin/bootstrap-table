/**
 * Unit tests for EventHelper utility
 */

import { beforeEach, describe, expect, it } from 'vitest'
import EventHelper from '@/helpers/events.js'
import DOMHelper from '@/helpers/dom.js'

// Setup test environment
beforeEach(() => {
  // Clear document body before each test
  document.body.innerHTML = ''
})

describe('EventHelper', () => {
  describe('Basic event handling', () => {
    it('should add and trigger event listener', () => {
      const element = DOMHelper.create('<div id="test">Test</div>')
      let clicked = false

      EventHelper.on(element, 'click', () => {
        clicked = true
      })

      EventHelper.trigger(element, 'click')
      expect(clicked).toBe(true)
    })

    it('should add event listener with selector', () => {
      document.body.innerHTML = '<div id="test">Test</div>'
      let clicked = false

      EventHelper.on('#test', 'click', () => {
        clicked = true
      })

      DOMHelper.$('#test').click()
      expect(clicked).toBe(true)
    })

    it('should remove specific event listener', () => {
      const element = DOMHelper.create('<div></div>')
      let clickCount = 0

      const handler1 = () => clickCount++
      const handler2 = () => clickCount++

      EventHelper.on(element, 'click', handler1)
      EventHelper.on(element, 'click', handler2)

      EventHelper.trigger(element, 'click')
      expect(clickCount).toBe(2)

      EventHelper.off(element, 'click', handler1)
      EventHelper.trigger(element, 'click')
      expect(clickCount).toBe(3)
    })

    it('should handle multiple event types', () => {
      const element = DOMHelper.create('<div></div>')
      const events = []

      EventHelper.on(element, 'click', () => events.push('click'))
      EventHelper.on(element, 'mouseover', () => events.push('mouseover'))

      EventHelper.trigger(element, 'click')
      EventHelper.trigger(element, 'mouseover')

      expect(events).toEqual(['click', 'mouseover'])
    })
  })

  describe('Namespace support', () => {
    it('should add namespaced events', () => {
      const element = DOMHelper.create('<div></div>')
      let clicked = false

      EventHelper.on(element, 'click.namespace', () => {
        clicked = true
      })

      EventHelper.trigger(element, 'click')
      expect(clicked).toBe(true)
    })

    it('should remove events by namespace', () => {
      const element = DOMHelper.create('<div></div>')
      let ns1Count = 0
      let ns2Count = 0

      EventHelper.on(element, 'click.ns1', () => ns1Count++)
      EventHelper.on(element, 'click.ns2', () => ns2Count++)

      EventHelper.trigger(element, 'click')
      expect(ns1Count).toBe(1)
      expect(ns2Count).toBe(1)

      EventHelper.off(element, 'click.ns1')
      EventHelper.trigger(element, 'click')
      expect(ns1Count).toBe(1)
      expect(ns2Count).toBe(2)
    })

    it('should handle multiple namespace segments', () => {
      const element = DOMHelper.create('<div></div>')
      let count = 0

      EventHelper.on(element, 'click.ns1.ns2', () => count++)
      EventHelper.trigger(element, 'click')
      expect(count).toBe(1)
    })

    it('should remove all events with namespace', () => {
      const element = DOMHelper.create('<div></div>')
      let clickCount = 0
      let mouseoverCount = 0

      EventHelper.on(element, 'click.ns', () => clickCount++)
      EventHelper.on(element, 'mouseover.ns', () => mouseoverCount++)
      EventHelper.on(element, 'keydown', () => {})

      EventHelper.offAll(element, 'ns')

      EventHelper.trigger(element, 'click')
      EventHelper.trigger(element, 'mouseover')

      expect(clickCount).toBe(0)
      expect(mouseoverCount).toBe(0)
    })
  })

  describe('Event delegation', () => {
    it('should delegate events to child elements', () => {
      const container = DOMHelper.create('<div><button class="btn">Click</button></div>')
      let clicked = false
      let targetText = ''

      EventHelper.delegate(container, '.btn', 'click', e => {
        clicked = true
        targetText = e.target.textContent
      })

      const button = container.querySelector('.btn')

      button.click()

      expect(clicked).toBe(true)
      expect(targetText).toBe('Click')
    })

    it('should work with dynamically added elements', () => {
      const container = DOMHelper.create('<div></div>')
      const clicks = []

      EventHelper.delegate(container, '.item', 'click', e => {
        clicks.push(e.target.textContent)
      })

      // Add button dynamically
      const button1 = DOMHelper.create('<button class="item">Item 1</button>')

      DOMHelper.append(container, button1)
      button1.click()

      // Add another button dynamically
      const button2 = DOMHelper.create('<button class="item">Item 2</button>')

      DOMHelper.append(container, button2)
      button2.click()

      expect(clicks).toEqual(['Item 1', 'Item 2'])
    })

    it('should not trigger on non-matching elements', () => {
      const container = DOMHelper.create('<div><button class="btn">Click</button><span>No match</span></div>')
      let clicked = false

      EventHelper.delegate(container, '.btn', 'click', () => {
        clicked = true
      })

      const span = container.querySelector('span')

      span.click()

      expect(clicked).toBe(false)
    })

    it('should support delegated event namespacing', () => {
      const container = DOMHelper.create('<div><button class="btn">Click</button></div>')
      let clicked = false

      EventHelper.delegate(container, '.btn', 'click.ns', () => {
        clicked = true
      })

      const button = container.querySelector('.btn')

      button.click()

      expect(clicked).toBe(true)
    })

    it('should undelegate events', () => {
      const container = DOMHelper.create('<div><button class="btn">Click</button></div>')
      let clickCount = 0

      const handler = () => clickCount++

      EventHelper.delegate(container, '.btn', 'click.ns', handler)

      const button = container.querySelector('.btn')

      button.click()
      expect(clickCount).toBe(1)

      EventHelper.undelegate(container, '.btn', 'click.ns')
      button.click()
      expect(clickCount).toBe(1)
    })
  })

  describe('Custom events and data', () => {
    it('should trigger custom events with data', () => {
      const element = DOMHelper.create('<div></div>')
      let receivedData = null

      EventHelper.on(element, 'custom', e => {
        receivedData = e.detail
      })

      const data = { message: 'Hello', value: 42 }

      EventHelper.trigger(element, 'custom', data)

      expect(receivedData).toEqual(data)
    })

    it('should support event bubbling', () => {
      const parent = DOMHelper.create('<div><span>Child</span></div>')
      const child = parent.querySelector('span')
      const events = []

      EventHelper.on(parent, 'click', () => events.push('parent'))
      EventHelper.on(child, 'click', () => events.push('child'))

      child.click()

      expect(events).toEqual(['child', 'parent'])
    })

    it('should support cancelable events', () => {
      const element = DOMHelper.create('<div></div>')
      let defaultPrevented = false

      EventHelper.on(element, 'custom', e => {
        e.preventDefault()
        defaultPrevented = e.defaultPrevented
      })

      EventHelper.trigger(element, 'custom', {}, { cancelable: true })

      expect(defaultPrevented).toBe(true)
    })
  })

  describe('One-time event listeners', () => {
    it('should execute one-time listener only once', () => {
      const element = DOMHelper.create('<div></div>')
      let count = 0

      EventHelper.one(element, 'click', () => {
        count++
      })

      EventHelper.trigger(element, 'click')
      EventHelper.trigger(element, 'click')

      expect(count).toBe(1)
    })

    it('should work with namespace', () => {
      const element = DOMHelper.create('<div></div>')
      let count = 0

      EventHelper.one(element, 'click.ns', () => {
        count++
      })

      EventHelper.trigger(element, 'click')
      EventHelper.trigger(element, 'click')

      expect(count).toBe(1)
    })
  })

  describe('Helper methods', () => {
    it('should find parent elements', () => {
      const parent = DOMHelper.create('<div class="outer"><div class="inner"><span>Child</span></div></div>')
      const child = parent.querySelector('span')

      const found = EventHelper.parents(child, '.outer')

      expect(found).toBe(parent)
    })

    it('should get and set data attributes', () => {
      const element = DOMHelper.create('<div></div>')

      EventHelper.setData(element, 'test', 'value')
      expect(EventHelper.getData(element, 'test')).toBe('value')
    })
  })

  describe('Edge cases', () => {
    it('should handle null elements gracefully', () => {
      expect(EventHelper.on(null, 'click', () => {})).toBeNull()
      expect(EventHelper.off(null, 'click', () => {})).toBeNull()
      expect(EventHelper.trigger(null, 'click')).toBeNull()
    })

    it('should handle non-existent selectors gracefully', () => {
      expect(EventHelper.on('#non-existent', 'click', () => {})).toBeNull()
    })

    it('should validate handler is a function', () => {
      const element = DOMHelper.create('<div></div>')

      expect(() => {
        EventHelper.on(element, 'click', 'not a function')
      }).toThrow('Event handler must be a function')
    })
  })

  describe('Memory management', () => {
    it('should clean up empty handler arrays', () => {
      const element = DOMHelper.create('<div></div>')
      const handler = () => {}

      EventHelper.on(element, 'click', handler)
      expect(element._eventHandlers).toBeDefined()
      expect(element._eventHandlers.click.length).toBe(1)

      EventHelper.off(element, 'click', handler)
      expect(element._eventHandlers).toBeUndefined()
    })

    it('should clean up delegate storage when empty', () => {
      const container = DOMHelper.create('<div><button class="btn">Click</button></div>')
      const handler = () => {}

      EventHelper.delegate(container, '.btn', 'click', handler)
      expect(container._delegates).toBeDefined()
      expect(container._delegates.length).toBe(1)

      EventHelper.undelegate(container, '.btn', 'click', handler)
      expect(container._delegates).toBeUndefined()
    })
  })
})
