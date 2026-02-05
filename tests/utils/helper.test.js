import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as helper from '@/utils/helper.js'

describe('calculateObjectValue', () => {
  it('should return the value when it is an object', () => {
    const obj = { key: 'value' }
    const self = {}

    expect(helper.calculateObjectValue(self, obj, [], 'default')).toBe(obj)
  })

  it('should call function with self as context', () => {
    const self = { value: 'test' }
    const func = function () {
      return this.value
    }

    expect(helper.calculateObjectValue(self, func, [], 'default')).toBe('test')
  })

  it('should pass args to function', () => {
    const self = {}
    const func = (a, b) => a + b

    expect(helper.calculateObjectValue(self, func, [2, 3], 'default')).toBe(5)
  })

  it('should access nested properties on window', () => {
    // Create a test object on window
    window.testObj = { nested: { func: () => 'result' } }

    expect(helper.calculateObjectValue({}, 'testObj.nested.func', [], 'default')).toBe('result')

    delete window.testObj
  })

  it('should access global function', () => {
    window.testFunc = () => 'global result'

    expect(helper.calculateObjectValue({}, 'testFunc', [], 'default')).toBe('global result')

    delete window.testFunc
  })

  it('should use sprintf for string format with args', () => {
    expect(helper.calculateObjectValue({}, '%s %s', ['Hello', 'World'], 'default')).toBe('Hello World')
  })

  it('should return the name string when function does not exist and args is empty', () => {
    // When window.nonexistentFunc123 is undefined and args is empty,
    // sprintf returns the name string itself (no placeholders to replace)
    const result = helper.calculateObjectValue({}, 'nonexistentFunc123', [], 'default')

    expect(result).toBe('nonexistentFunc123')
  })

  it('should return default value when sprintf fails', () => {
    expect(helper.calculateObjectValue({}, '%s %s', ['only one'], 'default')).toBe('default')
  })
})

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should delay function execution', () => {
    const fn = vi.fn()
    const debounced = helper.debounce(fn, 100)

    debounced()
    expect(fn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should cancel previous call', () => {
    const fn = vi.fn()
    const debounced = helper.debounce(fn, 100)

    debounced()
    vi.advanceTimersByTime(50)
    debounced()
    vi.advanceTimersByTime(100)

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should call immediately when immediate is true', () => {
    const fn = vi.fn()
    const debounced = helper.debounce(fn, 100, true)

    debounced()
    expect(fn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should not call again within wait period when immediate is true', () => {
    const fn = vi.fn()
    const debounced = helper.debounce(fn, 100, true)

    debounced()
    expect(fn).toHaveBeenCalledTimes(1)

    debounced()
    expect(fn).toHaveBeenCalledTimes(1) // Still 1, not called again

    vi.advanceTimersByTime(100)
    debounced()
    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('should preserve context and arguments', () => {
    const fn = vi.fn(function (a, b) {
      return this.value + a + b
    })
    const context = { value: 10 }
    const debounced = helper.debounce(fn, 100)

    debounced.call(context, 5, 3)
    vi.advanceTimersByTime(100)

    expect(fn).toHaveBeenCalledWith(5, 3)
    expect(fn.mock.instances[0]).toBe(context)
  })
})

describe('getEventName', () => {
  it('should combine prefix with provided id', () => {
    expect(helper.getEventName('bs', 'table1')).toBe('bs-table1')
    expect(helper.getEventName('custom', '123')).toBe('custom-123')
  })

  it('should generate id when not provided', () => {
    const name1 = helper.getEventName('bs')
    const name2 = helper.getEventName('bs')

    expect(name1).toMatch(/^bs-\d+$/)
    expect(name2).toMatch(/^bs-\d+$/)
    // IDs should be different (highly probable)
    expect(name1).not.toBe(name2)
  })

  it('should handle empty string id', () => {
    const name = helper.getEventName('test', '')

    expect(name).toMatch(/^test-\d+$/)
  })

  it('should handle prefix with special characters', () => {
    expect(helper.getEventName('my.event', '123')).toBe('my.event-123')
  })
})

describe('hasDetailViewIcon', () => {
  it('should return true when all conditions are met', () => {
    const options = {
      detailView: true,
      detailViewIcon: true,
      cardView: false
    }

    expect(helper.hasDetailViewIcon(options)).toBe(true)
  })

  it('should return false when detailView is false', () => {
    const options = {
      detailView: false,
      detailViewIcon: true,
      cardView: false
    }

    expect(helper.hasDetailViewIcon(options)).toBe(false)
  })

  it('should return false when detailViewIcon is false', () => {
    const options = {
      detailView: true,
      detailViewIcon: false,
      cardView: false
    }

    expect(helper.hasDetailViewIcon(options)).toBe(false)
  })

  it('should return false when cardView is true', () => {
    const options = {
      detailView: true,
      detailViewIcon: true,
      cardView: true
    }

    expect(helper.hasDetailViewIcon(options)).toBe(false)
  })

})

describe('getDetailViewIndexOffset', () => {
  it('should return 1 when detail view is on left', () => {
    const options = {
      detailView: true,
      detailViewIcon: true,
      cardView: false,
      detailViewAlign: 'left'
    }

    expect(helper.getDetailViewIndexOffset(options)).toBe(1)
  })

  it('should return 0 when detail view is on right', () => {
    const options = {
      detailView: true,
      detailViewIcon: true,
      cardView: false,
      detailViewAlign: 'right'
    }

    expect(helper.getDetailViewIndexOffset(options)).toBe(0)
  })

  it('should return 0 when no detail view icon', () => {
    const options = {
      detailView: false,
      detailViewIcon: false,
      cardView: false,
      detailViewAlign: 'left'
    }

    expect(helper.getDetailViewIndexOffset(options)).toBe(0)
  })

  it('should return 1 for undefined align (defaults to left)', () => {
    const options = {
      detailView: true,
      detailViewIcon: true,
      cardView: false
    }

    expect(helper.getDetailViewIndexOffset(options)).toBe(1) // defaults to left
  })
})

describe('addQueryToUrl', () => {
  it('should add query parameters to URL without existing query', () => {
    const url = 'https://example.com/page'
    const query = { foo: 'bar', baz: 'qux' }
    const result = helper.addQueryToUrl(url, query)

    expect(result).toContain('foo=bar')
    expect(result).toContain('baz=qux')
  })

  it('should add query parameters to URL with existing query', () => {
    const url = 'https://example.com/page?existing=param'
    const query = { foo: 'bar' }
    const result = helper.addQueryToUrl(url, query)

    expect(result).toContain('existing=param')
    expect(result).toContain('foo=bar')
  })

  it('should override existing query parameters', () => {
    const url = 'https://example.com/page?foo=old'
    const query = { foo: 'new' }
    const result = helper.addQueryToUrl(url, query)

    expect(result).toContain('foo=new')
    expect(result).not.toContain('foo=old')
  })

  it('should preserve URL hash', () => {
    const url = 'https://example.com/page#section'
    const query = { foo: 'bar' }
    const result = helper.addQueryToUrl(url, query)

    expect(result).toContain('#section')
    expect(result).toContain('foo=bar')
  })

  it('should handle URL with both query and hash', () => {
    const url = 'https://example.com/page?existing=param#section'
    const query = { foo: 'bar' }
    const result = helper.addQueryToUrl(url, query)

    expect(result).toContain('existing=param')
    expect(result).toContain('foo=bar')
    expect(result).toContain('#section')
  })

  it('should handle empty query object', () => {
    const url = 'https://example.com/page'
    const query = {}
    const result = helper.addQueryToUrl(url, query)

    expect(result).toContain('https://example.com/page')
  })

  it('should handle special characters in query values', () => {
    const url = 'https://example.com/page'
    const query = { search: 'hello world', special: '!@#$' }
    const result = helper.addQueryToUrl(url, query)

    expect(result).toContain('search=')
    expect(result).toContain('special=')
  })

  it('should handle multiple hash segments', () => {
    const url = 'https://example.com/page#section#subsection'
    const query = { foo: 'bar' }
    const result = helper.addQueryToUrl(url, query)

    expect(result).toContain('#section#subsection')
  })

  it('should handle URL without path', () => {
    const url = 'https://example.com'
    const query = { foo: 'bar' }
    const result = helper.addQueryToUrl(url, query)

    expect(result).toContain('foo=bar')
  })
})

describe('isNumeric', () => {
  it('should return true for numbers', () => {
    expect(helper.isNumeric(42)).toBe(true)
    expect(helper.isNumeric(0)).toBe(true)
    expect(helper.isNumeric(-1)).toBe(true)
    expect(helper.isNumeric(3.14)).toBe(true)
  })

  it('should return true for numeric strings', () => {
    expect(helper.isNumeric('42')).toBe(true)
    expect(helper.isNumeric('0')).toBe(true)
    expect(helper.isNumeric('-1')).toBe(true)
    expect(helper.isNumeric('3.14')).toBe(true)
  })

  it('should return false for non-numeric values', () => {
    expect(helper.isNumeric('abc')).toBe(false)
    expect(helper.isNumeric('12abc')).toBe(false)
    expect(helper.isNumeric('')).toBe(false)
    expect(helper.isNumeric(null)).toBe(false)
    expect(helper.isNumeric(undefined)).toBe(false)
  })

  it('should return false for NaN', () => {
    expect(helper.isNumeric(NaN)).toBe(false)
  })

  it('should return false for Infinity', () => {
    expect(helper.isNumeric(Infinity)).toBe(false)
    expect(helper.isNumeric(-Infinity)).toBe(false)
  })

  it('should handle scientific notation', () => {
    expect(helper.isNumeric('1e10')).toBe(true)
    expect(helper.isNumeric('1.5e-10')).toBe(true)
  })

  it('should handle hexadecimal strings', () => {
    expect(helper.isNumeric('0x10')).toBe(true)
  })
})

describe('isIEBrowser', () => {
  let originalUserAgent

  beforeEach(() => {
    originalUserAgent = Object.getOwnPropertyDescriptor(Navigator.prototype, 'userAgent')
  })

  afterEach(() => {
    if (originalUserAgent) {
      Object.defineProperty(Navigator.prototype, 'userAgent', originalUserAgent)
    }
  })

  it('should detect IE 10', () => {
    Object.defineProperty(Navigator.prototype, 'userAgent', {
      get: () => 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1)',
      configurable: true
    })

    expect(helper.isIEBrowser()).toBe(true)
  })

  it('should detect IE 11', () => {
    Object.defineProperty(Navigator.prototype, 'userAgent', {
      get: () => 'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko',
      configurable: true
    })

    expect(helper.isIEBrowser()).toBe(true)
  })

  it('should return false for modern browsers', () => {
    const modernBrowsers = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15'
    ]

    for (const ua of modernBrowsers) {
      Object.defineProperty(Navigator.prototype, 'userAgent', {
        get: () => ua,
        configurable: true
      })

      expect(helper.isIEBrowser()).toBe(false)
    }
  })
})
