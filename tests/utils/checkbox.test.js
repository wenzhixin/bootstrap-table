import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import * as checkbox from '@/utils/checkbox.js'

describe('getCheckboxHtml', () => {
  let originalWindow
  let original$

  beforeEach(() => {
    // Save original globals
    originalWindow = global.window
    original$ = global.$

    // Mock Bootstrap 5 by default
    // @ts-expect-error - testing purposes
    global.window = {
      bootstrap: {
        Tooltip: { VERSION: '5.0.0' }
      }
    }
  })

  afterEach(() => {
    // Restore original globals
    global.window = originalWindow
    // @ts-expect-error - testing purposes
    global.$ = original$
  })

  describe('Bootstrap 5', () => {
    beforeEach(() => {
      // @ts-expect-error - testing purposes
      global.window = {
        bootstrap: {
          Tooltip: { VERSION: '5.0.0' }
        }
      }
    })

    it('should generate basic checkbox HTML', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test'
      })

      expect(html).toContain('type="checkbox"')
      expect(html).toContain('name="test"')
      expect(html).toContain('form-check')
    })

    it('should include checked attribute', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test',
        checked: true
      })

      expect(html).toContain('checked="checked"')
    })

    it('should include disabled attribute', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test',
        disabled: true
      })

      expect(html).toContain('disabled="disabled"')
    })

    it('should include value attribute', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test',
        value: 'val1'
      })

      expect(html).toContain('value="val1"')
    })

    it('should include extra class', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test',
        extraClass: 'custom-class'
      })

      expect(html).toContain('custom-class')
    })

    it('should handle centered option', () => {
      const html1 = checkbox.getCheckboxHtml({
        name: 'test',
        centered: true
      })

      expect(html1).toContain('justify-content-center')

      const html2 = checkbox.getCheckboxHtml({
        name: 'test',
        centered: false
      })

      expect(html2).not.toContain('justify-content-center')
    })

    it('should handle withLabel option', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test',
        label: 'Label Text',
        withLabel: true
      })

      expect(html).toContain('dropdown-item')
      expect(html).toContain('Label Text')
    })
  })

  describe('Bootstrap 3/4', () => {
    beforeEach(() => {
      // @ts-expect-error - testing purposes
      global.window = {
        bootstrap: undefined
      }
      // @ts-expect-error - testing purposes
      global.$ = {
        fn: {
          dropdown: {
            Constructor: { VERSION: '4.0.0' }
          }
        }
      }
    })

    it('should generate basic checkbox HTML', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test'
      })

      expect(html).toContain('type="checkbox"')
      expect(html).toContain('name="test"')
      expect(html).toContain('<label>')
    })

    it('should include checked attribute', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test',
        checked: true
      })

      expect(html).toContain('checked="checked"')
    })

    it('should include disabled attribute', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test',
        disabled: true
      })

      expect(html).toContain('disabled="disabled"')
    })

    it('should handle withLabel option', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test',
        label: 'Label Text',
        withLabel: true
      })

      expect(html).toContain('<label>')
      expect(html).toContain('Label Text')
    })

    it('should handle extra class', () => {
      const html = checkbox.getCheckboxHtml({
        name: 'test',
        extraClass: 'custom-class'
      })

      expect(html).toContain('custom-class')
    })
  })
})

describe('wrapCheckbox', () => {
  let originalWindow

  beforeEach(() => {
    originalWindow = global.window
  })

  afterEach(() => {
    global.window = originalWindow
  })

  describe('Bootstrap 5', () => {
    beforeEach(() => {
      // @ts-expect-error - testing purposes
      global.window = {
        bootstrap: {
          Tooltip: { VERSION: '5.0.0' }
        }
      }
    })

    it('should wrap input in form-check div', () => {
      const html = checkbox.wrapCheckbox('<input type="checkbox">')

      expect(html).toContain('<div class="form-check')
      expect(html).toContain('<input type="checkbox">')
      expect(html).toContain('</div>')
    })

    it('should handle centered option', () => {
      const html1 = checkbox.wrapCheckbox('<input type="checkbox">', true)

      expect(html1).toContain('justify-content-center')

      const html2 = checkbox.wrapCheckbox('<input type="checkbox">', false)

      expect(html2).not.toContain('justify-content-center')
    })
  })

  describe('Bootstrap 3/4', () => {
    beforeEach(() => {
      // @ts-expect-error - testing purposes
      global.window = {
        bootstrap: undefined
      }
      // @ts-expect-error - testing purposes
      global.$ = {
        fn: {
          dropdown: {
            Constructor: { VERSION: '4.0.0' }
          }
        }
      }
    })

    it('should wrap input in label', () => {
      const html = checkbox.wrapCheckbox('<input type="checkbox">')

      expect(html).toContain('<label>')
      expect(html).toContain('<input type="checkbox">')
      expect(html).toContain('<span></span>')
      expect(html).toContain('</label>')
    })
  })
})

describe('getCheckboxVdomConfig', () => {
  let originalWindow

  beforeEach(() => {
    originalWindow = global.window
  })

  afterEach(() => {
    global.window = originalWindow
  })

  describe('Bootstrap 5', () => {
    beforeEach(() => {
      // @ts-expect-error - testing purposes
      global.window = {
        bootstrap: {
          Tooltip: { VERSION: '5.0.0' }
        }
      }
    })

    it('should return Bootstrap 5 config', () => {
      const config = checkbox.getCheckboxVdomConfig({
        inputAttrs: { type: 'checkbox', name: 'test' },
        formCheckClass: 'form-check',
        formCheckInputClass: 'form-check-input',
        centered: false
      })

      expect(config.inputAttrs).toEqual({
        type: 'checkbox',
        name: 'test',
        class: 'form-check-input'
      })
      // centered: false prevents centering classes
      expect(config.wrapperAttrs.class).toBe('form-check')
      expect(config.wrapperTag).toBe('div')
      expect(config.hasSpan).toBe(false)
    })

    it('should handle centered option', () => {
      const config = checkbox.getCheckboxVdomConfig({
        inputAttrs: { type: 'checkbox' },
        formCheckClass: 'form-check',
        formCheckInputClass: 'form-check-input',
        centered: true
      })

      expect(config.wrapperAttrs.class).toContain('justify-content-center')

      const config2 = checkbox.getCheckboxVdomConfig({
        inputAttrs: { type: 'checkbox' },
        formCheckClass: 'form-check',
        formCheckInputClass: 'form-check-input',
        centered: false
      })

      expect(config2.wrapperAttrs.class).not.toContain('justify-content-center')
    })
  })

  describe('Bootstrap 3/4', () => {
    beforeEach(() => {
      // @ts-expect-error - testing purposes
      global.window = {
        bootstrap: undefined
      }
      // @ts-expect-error - testing purposes
      global.$ = {
        fn: {
          dropdown: {
            Constructor: { VERSION: '4.0.0' }
          }
        }
      }
    })

    it('should return Bootstrap 3/4 config', () => {
      const config = checkbox.getCheckboxVdomConfig({
        inputAttrs: { type: 'checkbox', name: 'test' },
        formCheckClass: 'form-check',
        formCheckInputClass: 'form-check-input'
      })

      expect(config.inputAttrs).toEqual({
        type: 'checkbox',
        name: 'test'
      })
      expect(config.wrapperAttrs).toEqual({})
      expect(config.wrapperTag).toBe('label')
      expect(config.hasSpan).toBe(true)
    })
  })
})

describe('getDropdownColumnCheckboxHtml', () => {
  let originalWindow

  beforeEach(() => {
    originalWindow = global.window
  })

  afterEach(() => {
    global.window = originalWindow
  })

  describe('Bootstrap 5', () => {
    beforeEach(() => {
      // @ts-expect-error - testing purposes
      global.window = {
        bootstrap: {
          Tooltip: { VERSION: '5.0.0' }
        }
      }
    })

    it('should generate dropdown checkbox with data-field', () => {
      const html = checkbox.getDropdownColumnCheckboxHtml({
        dataField: 'fieldName',
        value: 'value1',
        checked: false,
        disabled: false,
        label: 'Field Label'
      })

      expect(html).toContain('data-field="fieldName"')
      expect(html).toContain('value="value1"')
      expect(html).toContain('Field Label')
      expect(html).toContain('dropdown-item')
    })

    it('should include checked attribute', () => {
      const html = checkbox.getDropdownColumnCheckboxHtml({
        dataField: 'fieldName',
        value: 'value1',
        checked: true,
        disabled: false,
        label: 'Label'
      })

      expect(html).toContain('checked="checked"')
    })

    it('should include disabled attribute', () => {
      const html = checkbox.getDropdownColumnCheckboxHtml({
        dataField: 'fieldName',
        value: 'value1',
        checked: false,
        disabled: true,
        label: 'Label'
      })

      expect(html).toContain('disabled="disabled"')
    })
  })

  describe('Bootstrap 3/4', () => {
    beforeEach(() => {
      // @ts-expect-error - testing purposes
      global.window = {
        bootstrap: undefined
      }
      // @ts-expect-error - testing purposes
      global.$ = {
        fn: {
          dropdown: {
            Constructor: { VERSION: '4.0.0' }
          }
        }
      }
    })

    it('should generate dropdown checkbox with data-field', () => {
      const html = checkbox.getDropdownColumnCheckboxHtml({
        dataField: 'fieldName',
        value: 'value1',
        checked: false,
        disabled: false,
        label: 'Field Label'
      })

      expect(html).toContain('data-field="fieldName"')
      expect(html).toContain('value="value1"')
      expect(html).toContain('Field Label')
    })

    it('should include checked attribute', () => {
      const html = checkbox.getDropdownColumnCheckboxHtml({
        dataField: 'fieldName',
        value: 'value1',
        checked: true,
        disabled: false,
        label: 'Label'
      })

      expect(html).toContain('checked="checked"')
    })

    it('should include disabled attribute', () => {
      const html = checkbox.getDropdownColumnCheckboxHtml({
        dataField: 'fieldName',
        value: 'value1',
        checked: false,
        disabled: true,
        label: 'Label'
      })

      expect(html).toContain('disabled="disabled"')
    })
  })
})
