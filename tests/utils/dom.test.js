/**
 * Unit tests for DOMHelper utility
 */

import { beforeEach, describe, expect, it } from 'vitest'
import DOMHelper from '@/utils/dom.js'

// Setup test environment
beforeEach(() => {
  // Clear document body before each test
  document.body.innerHTML = ''
})

describe('DOMHelper', () => {
  describe('Selector methods', () => {
    it('should select single element with $', () => {
      document.body.innerHTML = '<div id="test">Test</div>'
      const element = DOMHelper.$('#test')

      expect(element).toBeTruthy()
      expect(element.id).toBe('test')
      expect(element.textContent).toBe('Test')
    })

    it('should return null when element not found with $', () => {
      const element = DOMHelper.$('#nonexistent')

      expect(element).toBeNull()
    })

    it('should return element itself when passing element to $', () => {
      const element = document.createElement('div')
      const result = DOMHelper.$(element)

      expect(result).toBe(element)
    })

    it('should return null for invalid input to $', () => {
      expect(DOMHelper.$(null)).toBeNull()
      expect(DOMHelper.$(undefined)).toBeNull()
      expect(DOMHelper.$(123)).toBeNull()
      expect(DOMHelper.$({})).toBeNull()
      expect(DOMHelper.$([])).toBeNull()
      expect(DOMHelper.$(true)).toBeNull()
      expect(DOMHelper.$(false)).toBeNull()
    })

    it('should select multiple elements with $$', () => {
      document.body.innerHTML = '<div class="item">1</div><div class="item">2</div><div class="item">3</div>'
      const elements = DOMHelper.$$('.item')

      expect(elements).toHaveLength(3)
      expect(elements[0].textContent).toBe('1')
      expect(elements[1].textContent).toBe('2')
      expect(elements[2].textContent).toBe('3')
    })

    it('should return empty array when no elements found with $$', () => {
      const elements = DOMHelper.$$('.nonexistent')

      expect(elements).toHaveLength(0)
    })

    it('should handle context parameter', () => {
      const container = document.createElement('div')

      container.innerHTML = '<div id="inside">Inside</div>'
      document.body.innerHTML = '<div id="outside">Outside</div>'
      document.body.appendChild(container)

      const insideElement = DOMHelper.$('#inside', container)

      expect(insideElement.textContent).toBe('Inside')
    })
  })

  describe('Element creation', () => {
    it('should create element from HTML string', () => {
      const element = DOMHelper.create('<div class="created">Created</div>')

      expect(element).toBeTruthy()
      expect(element.className).toBe('created')
      expect(element.textContent).toBe('Created')
    })

    it('should handle complex HTML structure', () => {
      const element = DOMHelper.create('<p><span>Text</span></p>')

      expect(element.tagName.toLowerCase()).toBe('p')
      expect(element.querySelector('span').textContent).toBe('Text')
    })

    it('should return null for empty HTML string', () => {
      const element = DOMHelper.create('')

      expect(element).toBeNull()
    })

    it('should return null for whitespace-only HTML string', () => {
      const element = DOMHelper.create('   \n\t  ')

      expect(element).toBeNull()
    })

    it('should return null for non-string input', () => {
      expect(DOMHelper.create(null)).toBeNull()
      expect(DOMHelper.create(undefined)).toBeNull()
      expect(DOMHelper.create(123)).toBeNull()
      expect(DOMHelper.create({})).toBeNull()
      expect(DOMHelper.create([])).toBeNull()
    })
  })

  describe('Class manipulation', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="test"></div>'
    })

    it('should add single class', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.addClass(element, 'new-class')
      expect(element.classList.contains('new-class')).toBe(true)
    })

    it('should add multiple classes', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.addClass(element, 'class1 class2 class3')
      expect(element.classList.contains('class1')).toBe(true)
      expect(element.classList.contains('class2')).toBe(true)
      expect(element.classList.contains('class3')).toBe(true)
    })

    it('should add class using selector', () => {
      DOMHelper.addClass('#test', 'selector-class')
      expect(DOMHelper.$('#test').classList.contains('selector-class')).toBe(true)
    })

    it('should remove single class', () => {
      const element = DOMHelper.$('#test')

      element.className = 'class1 class2 class3'
      DOMHelper.removeClass(element, 'class2')
      expect(element.classList.contains('class1')).toBe(true)
      expect(element.classList.contains('class2')).toBe(false)
      expect(element.classList.contains('class3')).toBe(true)
    })

    it('should remove multiple classes', () => {
      const element = DOMHelper.$('#test')

      element.className = 'class1 class2 class3 class4'
      DOMHelper.removeClass(element, 'class2 class4')
      expect(element.classList.contains('class1')).toBe(true)
      expect(element.classList.contains('class2')).toBe(false)
      expect(element.classList.contains('class3')).toBe(true)
      expect(element.classList.contains('class4')).toBe(false)
    })

    it('should toggle class', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.toggleClass(element, 'toggle-class')
      expect(element.classList.contains('toggle-class')).toBe(true)
      DOMHelper.toggleClass(element, 'toggle-class')
      expect(element.classList.contains('toggle-class')).toBe(false)
    })

    it('should toggle multiple classes', () => {
      const element = DOMHelper.$('#test')

      // Add multiple classes at once
      DOMHelper.toggleClass(element, 'class1 class2 class3')
      expect(element.classList.contains('class1')).toBe(true)
      expect(element.classList.contains('class2')).toBe(true)
      expect(element.classList.contains('class3')).toBe(true)

      // Toggle one class off, others should remain
      DOMHelper.toggleClass(element, 'class1')
      expect(element.classList.contains('class1')).toBe(false)
      expect(element.classList.contains('class2')).toBe(true)
      expect(element.classList.contains('class3')).toBe(true)
    })

    it('should handle empty strings and extra spaces in toggleClass', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.toggleClass(element, '  class1   class2  ')
      expect(element.classList.contains('class1')).toBe(true)
      expect(element.classList.contains('class2')).toBe(true)
    })

    it('should check if element has class', () => {
      const element = DOMHelper.$('#test')

      element.className = 'has-class'
      expect(DOMHelper.hasClass(element, 'has-class')).toBe(true)
      expect(DOMHelper.hasClass(element, 'no-class')).toBe(false)
    })

    it('should handle null/undefined className gracefully', () => {
      const element = DOMHelper.$('#test')

      // addClass should handle null/undefined className
      expect(DOMHelper.addClass(element, null)).toBe(element)
      expect(DOMHelper.addClass(element, undefined)).toBe(element)
      expect(DOMHelper.addClass(element, '')).toBe(element)
      expect(element.className).toBe('')

      // removeClass should handle null/undefined className
      expect(DOMHelper.removeClass(element, null)).toBe(element)
      expect(DOMHelper.removeClass(element, undefined)).toBe(element)
      expect(DOMHelper.removeClass(element, '')).toBe(element)
      expect(element.className).toBe('')

      // toggleClass should handle null/undefined className
      expect(DOMHelper.toggleClass(element, null)).toBe(element)
      expect(DOMHelper.toggleClass(element, undefined)).toBe(element)
      expect(DOMHelper.toggleClass(element, '')).toBe(element)
      expect(element.className).toBe('')

      // hasClass should handle null/undefined className
      expect(DOMHelper.hasClass(element, null)).toBe(false)
      expect(DOMHelper.hasClass(element, undefined)).toBe(false)
      expect(DOMHelper.hasClass(element, '')).toBe(false)
    })
  })

  describe('Attribute manipulation', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="test"></div>'
    })

    it('should get attribute value', () => {
      const element = DOMHelper.$('#test')

      element.setAttribute('data-test', 'value')
      expect(DOMHelper.attr(element, 'data-test')).toBe('value')
    })

    it('should set attribute value', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.attr(element, 'data-test', 'new-value')
      expect(element.getAttribute('data-test')).toBe('new-value')
    })

    it('should return null for non-existent attribute', () => {
      const element = DOMHelper.$('#test')

      expect(DOMHelper.attr(element, 'non-existent')).toBeNull()
    })

    it('should remove attribute', () => {
      const element = DOMHelper.$('#test')

      element.setAttribute('data-test', 'value')
      DOMHelper.removeAttr(element, 'data-test')
      expect(element.hasAttribute('data-test')).toBe(false)
    })
  })

  describe('Data manipulation', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="test"></div>'
    })

    it('should get data value', () => {
      const element = DOMHelper.$('#test')

      element.dataset.test = 'value'
      expect(DOMHelper.data(element, 'test')).toBe('value')
    })

    it('should set data value', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.data(element, 'test', 'new-value')
      expect(element.dataset.test).toBe('new-value')
    })

    it('should return undefined for non-existent data', () => {
      const element = DOMHelper.$('#test')

      expect(DOMHelper.data(element, 'nonexistent')).toBeUndefined()
    })
  })

  describe('DOM manipulation', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="parent"><div id="child">Child</div></div>'
    })

    it('should append child', () => {
      const parent = DOMHelper.$('#parent')
      const newChild = DOMHelper.create('<div id="new-child">New Child</div>')

      DOMHelper.append(parent, newChild)
      expect(parent.children.length).toBe(2)
      expect(parent.querySelector('#new-child')).toBeTruthy()
    })

    it('should append child using HTML string', () => {
      const parent = DOMHelper.$('#parent')

      DOMHelper.append(parent, '<div id="html-child">HTML Child</div>')
      expect(parent.children.length).toBe(2)
      expect(parent.querySelector('#html-child').textContent).toBe('HTML Child')
    })

    it('should prepend child', () => {
      const parent = DOMHelper.$('#parent')
      const newChild = DOMHelper.create('<div id="prepend-child">Prepend</div>')

      DOMHelper.prepend(parent, newChild)
      expect(parent.children.length).toBe(2)
      expect(parent.firstChild.id).toBe('prepend-child')
    })

    it('should insert after element', () => {
      const child = DOMHelper.$('#child')
      const newElement = DOMHelper.create('<div id="after">After</div>')

      DOMHelper.insertAfter(newElement, child)
      expect(child.nextElementSibling.id).toBe('after')
    })

    it('should insert before element', () => {
      const child = DOMHelper.$('#child')
      const newElement = DOMHelper.create('<div id="before">Before</div>')

      DOMHelper.insertBefore(newElement, child)
      expect(child.previousElementSibling.id).toBe('before')
    })

    it('should find child elements', () => {
      const parent = DOMHelper.$('#parent')

      parent.innerHTML = '<div class="item">1</div><div class="item">2</div><span>Not Item</span>'
      const items = DOMHelper.find(parent, '.item')

      expect(items).toHaveLength(2)
    })

    it('should find first matching child element', () => {
      const parent = DOMHelper.$('#parent')

      parent.innerHTML = '<div class="item">1</div><div class="item">2</div>'
      const firstItem = DOMHelper.findFirst(parent, '.item')

      expect(firstItem.textContent).toBe('1')
    })

    it('should remove element', () => {
      const child = DOMHelper.$('#child')

      DOMHelper.remove(child)
      expect(DOMHelper.$('#child')).toBeNull()
      expect(DOMHelper.$('#parent').children.length).toBe(0)
    })

    it('should empty element', () => {
      const parent = DOMHelper.$('#parent')

      DOMHelper.empty(parent)
      expect(parent.children.length).toBe(0)
      expect(parent.innerHTML).toBe('')
    })
  })

  describe('Style manipulation', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="test"></div>'
    })

    it('should get style value', () => {
      const element = DOMHelper.$('#test')

      element.style.display = 'none'
      const display = DOMHelper.css(element, 'display')

      expect(display).toBe('none')
    })

    it('should set single style', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.css(element, 'display', 'block')
      expect(element.style.display).toBe('block')
    })

    it('should set multiple styles', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.css(element, {
        display: 'block',
        color: 'red',
        fontSize: '16px'
      })
      expect(element.style.display).toBe('block')
      expect(element.style.color).toBe('red')
      expect(element.style.fontSize).toBe('16px')
    })
  })

  describe('Dimension methods', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="test" style="width: 100px; height: 50px; padding: 10px; margin: 20px; border: 2px solid black;"></div>'
    })

    it('should get element width', () => {
      const element = DOMHelper.$('#test')
      const width = DOMHelper.width(element)

      expect(typeof width).toBe('number')
      expect(width).toBeGreaterThanOrEqual(0)
    })

    it('should get element height', () => {
      const element = DOMHelper.$('#test')
      const height = DOMHelper.height(element)

      expect(typeof height).toBe('number')
      expect(height).toBeGreaterThanOrEqual(0)
    })

    it('should get outer width', () => {
      const element = DOMHelper.$('#test')
      const outerWidth = DOMHelper.outerWidth(element)

      expect(typeof outerWidth).toBe('number')
      expect(outerWidth).toBeGreaterThanOrEqual(0)
    })

    it('should get outer width with margin', () => {
      const element = DOMHelper.$('#test')
      const outerWidthWithMargin = DOMHelper.outerWidth(element, true)
      const outerWidthWithoutMargin = DOMHelper.outerWidth(element, false)

      expect(typeof outerWidthWithMargin).toBe('number')
      expect(outerWidthWithMargin).toBeGreaterThanOrEqual(outerWidthWithoutMargin)
    })

    it('should get outer height', () => {
      const element = DOMHelper.$('#test')
      const outerHeight = DOMHelper.outerHeight(element)

      expect(typeof outerHeight).toBe('number')
      expect(outerHeight).toBeGreaterThanOrEqual(0)
    })

    it('should get outer height with margin', () => {
      const element = DOMHelper.$('#test')
      const outerHeightWithMargin = DOMHelper.outerHeight(element, true)
      const outerHeightWithoutMargin = DOMHelper.outerHeight(element, false)

      expect(typeof outerHeightWithMargin).toBe('number')
      expect(outerHeightWithMargin).toBeGreaterThanOrEqual(outerHeightWithoutMargin)
    })
  })

  describe('Content methods', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="test"></div><input id="input" type="text" value="initial">'
    })

    it('should get and set value', () => {
      const input = DOMHelper.$('#input')

      expect(DOMHelper.val(input)).toBe('initial')
      DOMHelper.val(input, 'new value')
      expect(input.value).toBe('new value')
    })

    it('should get and set HTML content', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.html(element, '<span>HTML Content</span>')
      expect(element.innerHTML).toBe('<span>HTML Content</span>')
      expect(DOMHelper.html(element)).toBe('<span>HTML Content</span>')
    })

    it('should get and set text content', () => {
      const element = DOMHelper.$('#test')

      DOMHelper.text(element, 'Text Content')
      expect(element.textContent).toBe('Text Content')
      expect(DOMHelper.text(element)).toBe('Text Content')
    })
  })

  describe('Traversal methods', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div class="container">
          <div id="parent">
            <span class="sibling-before">Before</span>
            <div id="target" class="target">Target</div>
            <span class="sibling-after">After</span>
            <div class="child">Child 1</div>
            <div class="child">Child 2</div>
          </div>
        </div>
      `
    })

    it('should get parent element', () => {
      const target = DOMHelper.$('#target')
      const parent = DOMHelper.parent(target)

      expect(parent.id).toBe('parent')
    })

    it('should get parent element with selector', () => {
      const target = DOMHelper.$('#target')
      const container = DOMHelper.parent(target, '.container')

      expect(container.className).toBe('container')
    })

    it('should get children elements', () => {
      const parent = DOMHelper.$('#parent')
      const children = DOMHelper.children(parent)

      expect(children).toHaveLength(5)
    })

    it('should get children elements with selector', () => {
      const parent = DOMHelper.$('#parent')
      const children = DOMHelper.children(parent, '.child')

      expect(children).toHaveLength(2)
    })

    it('should get next sibling', () => {
      const target = DOMHelper.$('#target')
      const next = DOMHelper.next(target)

      expect(next.className).toBe('sibling-after')
    })

    it('should get next sibling with selector', () => {
      const target = DOMHelper.$('#target')
      const nextChild = DOMHelper.next(target, '.child')

      expect(nextChild.className).toBe('child')
    })

    it('should get previous sibling', () => {
      const target = DOMHelper.$('#target')
      const prev = DOMHelper.prev(target)

      expect(prev.className).toBe('sibling-before')
    })

    it('should iterate over elements', () => {
      const children = DOMHelper.$$('.child')
      const texts = []

      DOMHelper.each(children, (_, element) => {
        texts.push(element.textContent)
      })
      expect(texts).toEqual(['Child 1', 'Child 2'])
    })

    it('should iterate over elements with selector', () => {
      const texts = []

      DOMHelper.each('.child', (_, element) => {
        texts.push(element.textContent)
      })
      expect(texts).toEqual(['Child 1', 'Child 2'])
    })

    it('should handle single element input', () => {
      const element = DOMHelper.$('#parent')
      const texts = []

      DOMHelper.each(element, (_, el) => {
        texts.push(el.tagName)
      })
      expect(texts).toEqual(['DIV'])
    })

    it('should handle NodeList input', () => {
      const nodeList = document.querySelectorAll('.child')
      const texts = []

      DOMHelper.each(nodeList, (_, element) => {
        texts.push(element.textContent)
      })
      expect(texts).toEqual(['Child 1', 'Child 2'])
    })

    it('should handle array input', () => {
      const elements = [DOMHelper.$('.child'), DOMHelper.$('.child:last-child')]
      const texts = []

      DOMHelper.each(elements, (_, element) => {
        texts.push(element.textContent)
      })
      expect(texts).toEqual(['Child 1', 'Child 2'])
    })

    it('should handle non-iterable object by wrapping in array', () => {
      const singleElement = DOMHelper.$('.child')
      const texts = []

      DOMHelper.each(singleElement, (_, element) => {
        texts.push(element.textContent)
      })
      expect(texts).toEqual(['Child 1'])
    })
  })

  describe('Position methods', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="test" style="position: absolute; top: 100px; left: 200px; width: 50px; height: 30px;"></div>'
    })

    it('should get element position relative to parent', () => {
      const element = DOMHelper.$('#test')
      const position = DOMHelper.position(element)

      expect(position).toHaveProperty('top')
      expect(position).toHaveProperty('left')
      expect(typeof position.top).toBe('number')
      expect(typeof position.left).toBe('number')
    })

    it('should get element offset relative to document', () => {
      const element = DOMHelper.$('#test')
      const offset = DOMHelper.offset(element)

      expect(offset).toHaveProperty('top')
      expect(offset).toHaveProperty('left')
      expect(offset).toHaveProperty('width')
      expect(offset).toHaveProperty('height')
      expect(typeof offset.top).toBe('number')
      expect(typeof offset.left).toBe('number')
      expect(typeof offset.width).toBe('number')
      expect(typeof offset.height).toBe('number')
    })
  })

  describe('Utility methods', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="test" class="my-class"></div>'
    })

    it('should check if element matches selector', () => {
      const element = DOMHelper.$('#test')

      expect(DOMHelper.is(element, '#test')).toBe(true)
      expect(DOMHelper.is(element, '.my-class')).toBe(true)
      expect(DOMHelper.is(element, 'div')).toBe(true)
      expect(DOMHelper.is(element, '.nonexistent')).toBe(false)
    })
  })

  describe('Error handling', () => {
    it('should handle null/undefined elements gracefully', () => {
      expect(DOMHelper.addClass(null, 'class')).toBeNull()
      expect(DOMHelper.removeClass(undefined, 'class')).toBeUndefined()
      expect(DOMHelper.attr(null, 'attr')).toBeNull()
      expect(DOMHelper.css(undefined, 'prop')).toBeNull()
      expect(DOMHelper.width(null)).toBe(0)
      expect(DOMHelper.height(undefined)).toBe(0)
    })

    it('should handle non-existent selectors gracefully', () => {
      expect(DOMHelper.addClass('#nonexistent', 'class')).toBeNull()
      expect(DOMHelper.removeClass('#nonexistent', 'class')).toBeNull()
      expect(DOMHelper.attr('#nonexistent', 'attr')).toBeNull()
      expect(DOMHelper.width('#nonexistent')).toBe(0)
    })

    it('should return null for getter methods when element not found', () => {
      // Test css method
      expect(DOMHelper.css('#nonexistent', 'color')).toBeNull()
      expect(DOMHelper.css('#nonexistent', {})).toBeNull()

      // Test val method
      expect(DOMHelper.val('#nonexistent')).toBeNull()

      // Test html method
      expect(DOMHelper.html('#nonexistent')).toBeNull()

      // Test text method
      expect(DOMHelper.text('#nonexistent')).toBeNull()
    })
  })
})
