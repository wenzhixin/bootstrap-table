/**
 * Integration tests for DOMHelper utility
 * Tests DOMHelper integration with real DOM scenarios
 */

import { beforeEach, describe, expect, it } from 'vitest'
import DOMHelper from '@/utils/dom.js'

// Setup test environment
beforeEach(() => {
  // Clear document body before each test
  document.body.innerHTML = ''
})

describe('DOMHelper Integration Tests', () => {
  describe('Complex DOM operations', () => {
    it('should build complex DOM structure', () => {
      // Build a table structure similar to Bootstrap Table
      const container = DOMHelper.create('<div class="bootstrap-table"></div>')

      DOMHelper.append(document.body, container)

      const toolbar = DOMHelper.create('<div class="fixed-table-toolbar"></div>')

      DOMHelper.append(container, toolbar)

      const tableContainer = DOMHelper.create('<div class="fixed-table-container"></div>')

      DOMHelper.append(container, tableContainer)

      const header = DOMHelper.create('<div class="fixed-table-header"><table></table></div>')
      const body = DOMHelper.create('<div class="fixed-table-body"><table><tbody></tbody></table></div>')

      DOMHelper.append(tableContainer, header)
      DOMHelper.append(tableContainer, body)

      // Verify structure
      expect(DOMHelper.$('.bootstrap-table')).toBeTruthy()
      expect(DOMHelper.$('.fixed-table-toolbar')).toBeTruthy()
      expect(DOMHelper.$('.fixed-table-container')).toBeTruthy()
      expect(DOMHelper.$('.fixed-table-header')).toBeTruthy()
      expect(DOMHelper.$('.fixed-table-body')).toBeTruthy()
      expect(DOMHelper.$('.fixed-table-header table')).toBeTruthy()
      expect(DOMHelper.$('.fixed-table-body table')).toBeTruthy()
      expect(DOMHelper.$('.fixed-table-body tbody')).toBeTruthy()
    })

    it('should handle dynamic content creation', () => {
      const container = DOMHelper.create('<div id="dynamic-container"></div>')

      DOMHelper.append(document.body, container)

      // Add multiple elements dynamically
      for (let i = 1; i <= 5; i++) {
        const item = DOMHelper.create('<div class="item"></div>')

        // Set attributes and text content safely
        DOMHelper.attr(item, 'data-index', String(i))
        DOMHelper.text(item, `Item ${i}`)

        DOMHelper.append(container, item)
      }

      // Verify all items were added
      const items = DOMHelper.$$('#dynamic-container .item')

      expect(items).toHaveLength(5)

      // Verify data attributes
      DOMHelper.each(items, (index, element) => {
        expect(DOMHelper.data(element, 'index')).toBe(String(index + 1))
      })
    })

    it('should manipulate table structure', () => {
      // Create table
      const table = DOMHelper.create('<table id="test-table"></table>')

      DOMHelper.append(document.body, table)

      // Create thead
      const thead = DOMHelper.create('<thead><tr></tr></thead>')

      DOMHelper.append(table, thead)

      // Add headers
      const headers = ['ID', 'Name', 'Age']
      const headerRow = DOMHelper.$('thead tr', table)

      headers.forEach(text => {
        const th = DOMHelper.create('<th></th>')

        DOMHelper.text(th, text) // Safe text content setting

        DOMHelper.append(headerRow, th)
      })

      // Create tbody
      const tbody = DOMHelper.create('<tbody></tbody>')

      DOMHelper.append(table, tbody)

      // Add rows
      const data = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 35 }
      ]

      data.forEach(row => {
        const tr = DOMHelper.create('<tr></tr>')

        DOMHelper.append(tbody, tr)

        // Create cells safely by setting text content instead of HTML injection
        const idCell = DOMHelper.create('<td></td>')
        const nameCell = DOMHelper.create('<td></td>')
        const ageCell = DOMHelper.create('<td></td>')

        DOMHelper.text(idCell, String(row.id))
        DOMHelper.text(nameCell, row.name)
        DOMHelper.text(ageCell, String(row.age))

        DOMHelper.append(tr, idCell)
        DOMHelper.append(tr, nameCell)
        DOMHelper.append(tr, ageCell)
      })

      // Verify table structure
      expect(DOMHelper.$$('#test-table thead th')).toHaveLength(3)
      expect(DOMHelper.$$('#test-table tbody tr')).toHaveLength(3)
      expect(DOMHelper.$('#test-table tbody tr:first-child td:first-child').textContent).toBe('1')
      expect(DOMHelper.$('#test-table tbody tr:last-child td:last-child').textContent).toBe('35')
    })
  })

  describe('Event-driven DOM operations', () => {
    it('should support DOM operations in event handlers', () => {
      const container = DOMHelper.create('<div id="event-container"></div>')
      const button = DOMHelper.create('<button id="add-item">Add Item</button>')
      const list = DOMHelper.create('<ul id="item-list"></ul>')

      DOMHelper.append(document.body, container)
      DOMHelper.append(container, button)
      DOMHelper.append(container, list)

      // Mock click event
      let clickCount = 0

      button.addEventListener('click', () => {
        clickCount++
        const item = DOMHelper.create('<li></li>')

        DOMHelper.text(item, `Item ${clickCount}`) // Safe text content setting

        DOMHelper.append(list, item)
      })

      // Simulate clicks
      button.click()
      button.click()
      button.click()

      // Verify items were added
      const items = DOMHelper.$$('#item-list li')

      expect(items).toHaveLength(3)
      expect(items[0].textContent).toBe('Item 1')
      expect(items[2].textContent).toBe('Item 3')
    })

    it('should handle DOM updates based on user input', () => {
      const container = DOMHelper.create('<div id="form-container"></div>')
      const input = DOMHelper.create('<input id="text-input" type="text" placeholder="Enter text">')
      const display = DOMHelper.create('<div id="display"></div>')

      DOMHelper.append(document.body, container)
      DOMHelper.append(container, input)
      DOMHelper.append(container, display)

      // Mock input event
      input.addEventListener('input', e => {
        const text = e.target.value

        if (text) {
          // Create HTML safely to avoid XSS
          const p = DOMHelper.create('<p></p>')
          const strong = DOMHelper.create('<strong></strong>')

          DOMHelper.text(strong, text) // Safe text content setting

          const span = DOMHelper.create('<span></span>')

          DOMHelper.text(span, 'You typed: ')
          DOMHelper.append(p, span)
          DOMHelper.append(p, strong)

          DOMHelper.empty(display)
          DOMHelper.append(display, p)
          DOMHelper.addClass(display, 'has-content')
        } else {
          DOMHelper.html(display, '')
          DOMHelper.removeClass(display, 'has-content')
        }
      })

      // Simulate input
      DOMHelper.val(input, 'Hello World')
      input.dispatchEvent(new Event('input'))

      // Verify display was updated
      expect(DOMHelper.$('#display p')).toBeTruthy()
      expect(DOMHelper.$('#display strong').textContent).toBe('Hello World')
      expect(DOMHelper.hasClass(display, 'has-content')).toBe(true)

      // Clear input
      DOMHelper.val(input, '')
      input.dispatchEvent(new Event('input'))

      // Verify display was cleared
      expect(DOMHelper.html(display)).toBe('')
      expect(DOMHelper.hasClass(display, 'has-content')).toBe(false)
    })
  })

  describe('Performance considerations', () => {
    it('should handle large number of elements efficiently', () => {
      const container = DOMHelper.create('<div id="large-container"></div>')

      DOMHelper.append(document.body, container)

      // Create fragment for better performance
      const fragment = document.createDocumentFragment()

      // Add 1000 elements safely
      for (let i = 0; i < 1000; i++) {
        const item = DOMHelper.create('<div class="item"></div>')

        // Set attributes and text content safely
        DOMHelper.attr(item, 'data-id', String(i))
        DOMHelper.text(item, `Item ${i}`)

        fragment.appendChild(item)
      }

      // Append all at once
      container.appendChild(fragment)

      // Verify all elements were added
      const items = DOMHelper.$$('#large-container .item')

      expect(items).toHaveLength(1000)

      // Test finding specific elements
      const item500 = DOMHelper.$('#large-container [data-id="500"]')

      expect(item500).toBeTruthy()
      expect(item500.textContent).toBe('Item 500')
    })

    it('should batch DOM operations for better performance', () => {
      const container = DOMHelper.create('<div id="batch-container"></div>')

      DOMHelper.append(document.body, container)

      // Add initial elements safely
      for (let i = 0; i < 100; i++) {
        const item = DOMHelper.create('<div class="item"></div>')

        // Set attributes and text content safely
        DOMHelper.attr(item, 'id', `item-${i}`)
        DOMHelper.text(item, `Item ${i}`)

        DOMHelper.append(container, item)
      }

      // Batch update all elements
      const items = DOMHelper.$$('#batch-container .item')

      DOMHelper.each(items, (index, element) => {
        DOMHelper.addClass(element, 'processed')
        DOMHelper.css(element, 'color', index % 2 === 0 ? 'blue' : 'green')
        DOMHelper.data(element, 'processed', 'true')
      })

      // Verify batch updates
      expect(DOMHelper.$$('#batch-container .processed')).toHaveLength(100)
      expect(DOMHelper.data(DOMHelper.$('#item-50'), 'processed')).toBe('true')
    })
  })

  describe('Complex interactions', () => {
    it('should handle nested DOM operations', () => {
      // Create nested structure
      const main = DOMHelper.create('<div id="main"></div>')

      DOMHelper.append(document.body, main)

      // Level 1
      const level1 = DOMHelper.create('<div class="level-1"><h2>Level 1</h2></div>')

      DOMHelper.append(main, level1)

      // Level 2
      const level2 = DOMHelper.create('<div class="level-2"><h3>Level 2</h3></div>')

      DOMHelper.append(level1, level2)

      // Level 3 with items
      const level3 = DOMHelper.create('<div class="level-3"><ul></ul></div>')
      const ul = DOMHelper.$('ul', level3)

      for (let i = 1; i <= 3; i++) {
        const li = DOMHelper.create('<li></li>')

        DOMHelper.text(li, `Sub-item ${i}`) // Safe text content setting
        DOMHelper.append(ul, li)
      }
      DOMHelper.append(level2, level3)

      // Verify nested structure
      expect(DOMHelper.$('#main .level-1')).toBeTruthy()
      expect(DOMHelper.$('#main .level-2')).toBeTruthy()
      expect(DOMHelper.$('#main .level-3')).toBeTruthy()
      expect(DOMHelper.$$('#main .level-3 li')).toHaveLength(3)

      // Test complex selectors
      const firstLi = DOMHelper.$('#main .level-1 .level-2 .level-3 li:first-child')

      expect(firstLi.textContent).toBe('Sub-item 1')
    })

    it('should support dynamic styling based on state', () => {
      const container = DOMHelper.create('<div id="state-container"></div>')

      DOMHelper.append(document.body, container)

      // Create interactive elements
      const buttons = ['primary', 'secondary', 'success', 'warning', 'danger']

      buttons.forEach(type => {
        const button = DOMHelper.create('<button class="btn" data-type=""></button>')

        // Set attributes and text content safely
        DOMHelper.addClass(button, `btn-${type}`)
        DOMHelper.attr(button, 'data-type', type)
        DOMHelper.text(button, type)

        DOMHelper.append(container, button)

        // Add click handler to toggle active state
        button.addEventListener('click', () => {
          // Remove active from all buttons
          DOMHelper.$$('#state-container .btn').forEach(btn => {
            DOMHelper.removeClass(btn, 'active')
          })

          // Add active to clicked button
          DOMHelper.addClass(button, 'active')

          // Update display based on active button
          const display = DOMHelper.$('#button-display')

          if (display) {
            DOMHelper.text(display, `Active button: ${type}`)
            DOMHelper.attr(display, 'data-active-type', type)
          }
        })
      })

      // Add display element
      const display = DOMHelper.create('<div id="button-display">No button selected</div>')

      DOMHelper.append(container, display)

      // Simulate button clicks
      const successButton = DOMHelper.$('[data-type="success"]')

      successButton.click()

      // Verify state changes
      expect(DOMHelper.hasClass(successButton, 'active')).toBe(true)
      expect(DOMHelper.$('#button-display').textContent).toBe('Active button: success')
      expect(DOMHelper.attr(DOMHelper.$('#button-display'), 'data-active-type')).toBe('success')
    })
  })

  describe('Form manipulation', () => {
    it('should handle complex form operations', () => {
      const form = DOMHelper.create('<form id="test-form"></form>')

      DOMHelper.append(document.body, form)

      // Add form fields
      const fields = [
        { type: 'text', name: 'username', label: 'Username', value: '' },
        { type: 'email', name: 'email', label: 'Email', value: '' },
        { type: 'password', name: 'password', label: 'Password', value: '' },
        { type: 'checkbox', name: 'remember', label: 'Remember me', checked: false },
        { type: 'select', name: 'country', label: 'Country', options: ['US', 'UK', 'Canada'] }
      ]

      fields.forEach(field => {
        const fieldGroup = DOMHelper.create('<div class="form-group"></div>')
        const label = DOMHelper.create('<label></label>')

        // Set label text safely
        DOMHelper.text(label, field.label)
        DOMHelper.append(fieldGroup, label)

        if (field.type === 'select') {
          const select = DOMHelper.create('<select></select>')

          // Set attributes safely
          DOMHelper.attr(select, 'name', field.name)

          field.options.forEach(option => {
            const optionElement = DOMHelper.create('<option></option>')

            DOMHelper.attr(optionElement, 'value', option)
            DOMHelper.text(optionElement, option) // Safe text content setting
            DOMHelper.append(select, optionElement)
          })
          DOMHelper.append(fieldGroup, select)
        } else if (field.type === 'checkbox') {
          const input = DOMHelper.create('<input type="checkbox">')

          // Set attributes safely
          DOMHelper.attr(input, 'name', field.name)
          if (field.checked) {
            DOMHelper.attr(input, 'checked', 'checked')
          }

          DOMHelper.append(fieldGroup, input)
        } else {
          const input = DOMHelper.create('<input>')

          // Set attributes safely
          DOMHelper.attr(input, 'type', field.type)
          DOMHelper.attr(input, 'name', field.name)
          if (field.value) {
            DOMHelper.attr(input, 'value', field.value)
          }

          DOMHelper.append(fieldGroup, input)
        }

        DOMHelper.append(form, fieldGroup)
      })

      // Verify form structure
      expect(DOMHelper.$$('#test-form .form-group')).toHaveLength(5)
      expect(DOMHelper.$('input[name="username"]')).toBeTruthy()
      expect(DOMHelper.$('select[name="country"]')).toBeTruthy()
      expect(DOMHelper.$$('#test-form select option')).toHaveLength(3)

      // Fill form
      DOMHelper.val(DOMHelper.$('input[name="username"]'), 'john_doe')
      DOMHelper.val(DOMHelper.$('input[name="email"]'), 'john@example.com')
      DOMHelper.val(DOMHelper.$('input[name="password"]'), 'secret123')
      DOMHelper.attr(DOMHelper.$('input[name="remember"]'), 'checked', 'checked')
      DOMHelper.val(DOMHelper.$('select[name="country"]'), 'UK')

      // Verify form values
      expect(DOMHelper.val(DOMHelper.$('input[name="username"]'))).toBe('john_doe')
      expect(DOMHelper.val(DOMHelper.$('input[name="email"]'))).toBe('john@example.com')
      expect(DOMHelper.val(DOMHelper.$('select[name="country"]'))).toBe('UK')
    })
  })

  describe('Browser compatibility simulation', () => {
    it('should handle elements with special characters in IDs', () => {
      const element = DOMHelper.create('<div id="special.id.with[brackets]">Special ID</div>')

      DOMHelper.append(document.body, element)

      // Should be able to select with escaped selector or by attribute
      const byAttribute = DOMHelper.$('[id="special.id.with[brackets]"]')

      expect(byAttribute).toBeTruthy()
      expect(byAttribute.textContent).toBe('Special ID')
    })

    it('should handle elements with unicode content', () => {
      const element = DOMHelper.create('<div>Unicode: 中文 Español Français 日本語 한국어 العربية</div>')

      DOMHelper.append(document.body, element)

      expect(DOMHelper.text(element)).toContain('中文')
      expect(DOMHelper.text(element)).toContain('日本語')
      expect(DOMHelper.text(element)).toContain('العربية')
    })
  })
})
