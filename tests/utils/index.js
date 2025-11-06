import { describe, it, expect } from 'vitest'
import Utils from '@/utils/index.js'

describe('normalizeAccent', () => {
  it('should handle non-string inputs', () => {
    expect(Utils.normalizeAccent(null)).toBe(null)
    expect(Utils.normalizeAccent(undefined)).toBe(undefined)
    expect(Utils.normalizeAccent(123)).toBe(123)
    expect(Utils.normalizeAccent({})).toStrictEqual({})
    expect(Utils.normalizeAccent([])).toStrictEqual([])
  })

  it('should handle empty strings', () => {
    expect(Utils.normalizeAccent('')).toBe('')
    expect(Utils.normalizeAccent('   ')).toBe('')
  })

  it('should handle basic ASCII characters', () => {
    expect(Utils.normalizeAccent('hello')).toBe('hello')
    expect(Utils.normalizeAccent('WORLD')).toBe('world')
    expect(Utils.normalizeAccent('123')).toBe('123')
    expect(Utils.normalizeAccent('!@#$')).toBe('!@#$')
  })

  it('should handle accented Latin characters (uppercase)', () => {
    // Test various forms of A
    expect(Utils.normalizeAccent('Á')).toBe('a')
    expect(Utils.normalizeAccent('À')).toBe('a')
    expect(Utils.normalizeAccent('Â')).toBe('a')
    expect(Utils.normalizeAccent('Ä')).toBe('a')
    expect(Utils.normalizeAccent('Ã')).toBe('a')
    expect(Utils.normalizeAccent('Å')).toBe('a')
    expect(Utils.normalizeAccent('Ā')).toBe('a')
    expect(Utils.normalizeAccent('Ă')).toBe('a')
    expect(Utils.normalizeAccent('Ą')).toBe('a')

    // Test various forms of E
    expect(Utils.normalizeAccent('É')).toBe('e')
    expect(Utils.normalizeAccent('È')).toBe('e')
    expect(Utils.normalizeAccent('Ê')).toBe('e')
    expect(Utils.normalizeAccent('Ë')).toBe('e')
    expect(Utils.normalizeAccent('Ē')).toBe('e')
    expect(Utils.normalizeAccent('Ĕ')).toBe('e')
    expect(Utils.normalizeAccent('Ė')).toBe('e')
    expect(Utils.normalizeAccent('Ę')).toBe('e')
    expect(Utils.normalizeAccent('Ě')).toBe('e')

    // Test various forms of I
    expect(Utils.normalizeAccent('Í')).toBe('i')
    expect(Utils.normalizeAccent('Ì')).toBe('i')
    expect(Utils.normalizeAccent('Î')).toBe('i')
    expect(Utils.normalizeAccent('Ï')).toBe('i')
    expect(Utils.normalizeAccent('Ĩ')).toBe('i')
    expect(Utils.normalizeAccent('Ī')).toBe('i')
    expect(Utils.normalizeAccent('Ĭ')).toBe('i')
    expect(Utils.normalizeAccent('Į')).toBe('i')
    expect(Utils.normalizeAccent('İ')).toBe('i')

    // Test various forms of O
    expect(Utils.normalizeAccent('Ó')).toBe('o')
    expect(Utils.normalizeAccent('Ò')).toBe('o')
    expect(Utils.normalizeAccent('Ô')).toBe('o')
    expect(Utils.normalizeAccent('Ö')).toBe('o')
    expect(Utils.normalizeAccent('Õ')).toBe('o')
    expect(Utils.normalizeAccent('Ø')).toBe('o')
    expect(Utils.normalizeAccent('Ō')).toBe('o')
    expect(Utils.normalizeAccent('Ŏ')).toBe('o')
    expect(Utils.normalizeAccent('Ő')).toBe('o')

    // Test various forms of U
    expect(Utils.normalizeAccent('Ú')).toBe('u')
    expect(Utils.normalizeAccent('Ù')).toBe('u')
    expect(Utils.normalizeAccent('Û')).toBe('u')
    expect(Utils.normalizeAccent('Ü')).toBe('u')
    expect(Utils.normalizeAccent('Ũ')).toBe('u')
    expect(Utils.normalizeAccent('Ū')).toBe('u')
    expect(Utils.normalizeAccent('Ŭ')).toBe('u')
    expect(Utils.normalizeAccent('Ů')).toBe('u')
    expect(Utils.normalizeAccent('Ű')).toBe('u')

    // Test various forms of Y
    expect(Utils.normalizeAccent('Ý')).toBe('y')
    expect(Utils.normalizeAccent('Ŷ')).toBe('y')
    expect(Utils.normalizeAccent('Ÿ')).toBe('y')

    // Test various forms of C
    expect(Utils.normalizeAccent('Ç')).toBe('c')
    expect(Utils.normalizeAccent('Ć')).toBe('c')
    expect(Utils.normalizeAccent('Ĉ')).toBe('c')
    expect(Utils.normalizeAccent('Ċ')).toBe('c')
    expect(Utils.normalizeAccent('Č')).toBe('c')

    // Test various forms of N
    expect(Utils.normalizeAccent('Ñ')).toBe('n')
    expect(Utils.normalizeAccent('Ń')).toBe('n')
    expect(Utils.normalizeAccent('Ņ')).toBe('n')
    expect(Utils.normalizeAccent('Ň')).toBe('n')

    // Test various forms of S
    expect(Utils.normalizeAccent('Ś')).toBe('s')
    expect(Utils.normalizeAccent('Ŝ')).toBe('s')
    expect(Utils.normalizeAccent('Ş')).toBe('s')
    expect(Utils.normalizeAccent('Š')).toBe('s')

    // Test various forms of Z
    expect(Utils.normalizeAccent('Ź')).toBe('z')
    expect(Utils.normalizeAccent('Ż')).toBe('z')
    expect(Utils.normalizeAccent('Ž')).toBe('z')
  })

  it('should handle accented Latin characters (lowercase)', () => {
    // Test various forms of a
    expect(Utils.normalizeAccent('á')).toBe('a')
    expect(Utils.normalizeAccent('à')).toBe('a')
    expect(Utils.normalizeAccent('â')).toBe('a')
    expect(Utils.normalizeAccent('ä')).toBe('a')
    expect(Utils.normalizeAccent('ã')).toBe('a')
    expect(Utils.normalizeAccent('å')).toBe('a')
    expect(Utils.normalizeAccent('ā')).toBe('a')
    expect(Utils.normalizeAccent('ă')).toBe('a')
    expect(Utils.normalizeAccent('ą')).toBe('a')

    // Test various forms of e
    expect(Utils.normalizeAccent('é')).toBe('e')
    expect(Utils.normalizeAccent('è')).toBe('e')
    expect(Utils.normalizeAccent('ê')).toBe('e')
    expect(Utils.normalizeAccent('ë')).toBe('e')
    expect(Utils.normalizeAccent('ē')).toBe('e')
    expect(Utils.normalizeAccent('ĕ')).toBe('e')
    expect(Utils.normalizeAccent('ė')).toBe('e')
    expect(Utils.normalizeAccent('ę')).toBe('e')
    expect(Utils.normalizeAccent('ě')).toBe('e')

    // Test various forms of i
    expect(Utils.normalizeAccent('í')).toBe('i')
    expect(Utils.normalizeAccent('ì')).toBe('i')
    expect(Utils.normalizeAccent('î')).toBe('i')
    expect(Utils.normalizeAccent('ï')).toBe('i')
    expect(Utils.normalizeAccent('ĩ')).toBe('i')
    expect(Utils.normalizeAccent('ī')).toBe('i')
    expect(Utils.normalizeAccent('ĭ')).toBe('i')
    expect(Utils.normalizeAccent('į')).toBe('i')

    // Test various forms of o
    expect(Utils.normalizeAccent('ó')).toBe('o')
    expect(Utils.normalizeAccent('ò')).toBe('o')
    expect(Utils.normalizeAccent('ô')).toBe('o')
    expect(Utils.normalizeAccent('ö')).toBe('o')
    expect(Utils.normalizeAccent('õ')).toBe('o')
    expect(Utils.normalizeAccent('ø')).toBe('o')
    expect(Utils.normalizeAccent('ō')).toBe('o')
    expect(Utils.normalizeAccent('ŏ')).toBe('o')
    expect(Utils.normalizeAccent('ő')).toBe('o')

    // Test various forms of u
    expect(Utils.normalizeAccent('ú')).toBe('u')
    expect(Utils.normalizeAccent('ù')).toBe('u')
    expect(Utils.normalizeAccent('û')).toBe('u')
    expect(Utils.normalizeAccent('ü')).toBe('u')
    expect(Utils.normalizeAccent('ũ')).toBe('u')
    expect(Utils.normalizeAccent('ū')).toBe('u')
    expect(Utils.normalizeAccent('ŭ')).toBe('u')
    expect(Utils.normalizeAccent('ů')).toBe('u')
    expect(Utils.normalizeAccent('ű')).toBe('u')

    // Test various forms of y
    expect(Utils.normalizeAccent('ý')).toBe('y')
    expect(Utils.normalizeAccent('ÿ')).toBe('y')
    expect(Utils.normalizeAccent('ŷ')).toBe('y')

    // Test various forms of c
    expect(Utils.normalizeAccent('ç')).toBe('c')
    expect(Utils.normalizeAccent('ć')).toBe('c')
    expect(Utils.normalizeAccent('ĉ')).toBe('c')
    expect(Utils.normalizeAccent('ċ')).toBe('c')
    expect(Utils.normalizeAccent('č')).toBe('c')

    // Test various forms of n
    expect(Utils.normalizeAccent('ñ')).toBe('n')
    expect(Utils.normalizeAccent('ń')).toBe('n')
    expect(Utils.normalizeAccent('ņ')).toBe('n')
    expect(Utils.normalizeAccent('ň')).toBe('n')

    // Test various forms of s
    expect(Utils.normalizeAccent('ś')).toBe('s')
    expect(Utils.normalizeAccent('ŝ')).toBe('s')
    expect(Utils.normalizeAccent('ş')).toBe('s')
    expect(Utils.normalizeAccent('š')).toBe('s')

    // Test various forms of z
    expect(Utils.normalizeAccent('ź')).toBe('z')
    expect(Utils.normalizeAccent('ż')).toBe('z')
    expect(Utils.normalizeAccent('ž')).toBe('z')
  })

  it('should handle special character combinations', () => {
    // Test German special characters
    expect(Utils.normalizeAccent('ß')).toBe('ss')

    // Test Nordic special characters
    expect(Utils.normalizeAccent('Æ')).toBe('ae')
    expect(Utils.normalizeAccent('æ')).toBe('ae')
    expect(Utils.normalizeAccent('Ø')).toBe('o')
    expect(Utils.normalizeAccent('ø')).toBe('o')
    expect(Utils.normalizeAccent('Å')).toBe('a')
    expect(Utils.normalizeAccent('å')).toBe('a')

    // Test French special characters
    expect(Utils.normalizeAccent('Œ')).toBe('oe')
    expect(Utils.normalizeAccent('œ')).toBe('oe')

    // Test Slavic special characters
    expect(Utils.normalizeAccent('Č')).toBe('c')
    expect(Utils.normalizeAccent('č')).toBe('c')
    expect(Utils.normalizeAccent('Š')).toBe('s')
    expect(Utils.normalizeAccent('š')).toBe('s')
    expect(Utils.normalizeAccent('Ž')).toBe('z')
    expect(Utils.normalizeAccent('ž')).toBe('z')
    expect(Utils.normalizeAccent('Ł')).toBe('l')
    expect(Utils.normalizeAccent('ł')).toBe('l')
    expect(Utils.normalizeAccent('Đ')).toBe('dj')
    expect(Utils.normalizeAccent('đ')).toBe('dj')

    // Test Turkish special characters
    expect(Utils.normalizeAccent('Ğ')).toBe('g')
    expect(Utils.normalizeAccent('ğ')).toBe('g')
    expect(Utils.normalizeAccent('İ')).toBe('i')
    expect(Utils.normalizeAccent('ı')).toBe('i')
    expect(Utils.normalizeAccent('Ş')).toBe('s')
    expect(Utils.normalizeAccent('ş')).toBe('s')

    // Test Romanian special characters
    expect(Utils.normalizeAccent('Ă')).toBe('a')
    expect(Utils.normalizeAccent('ă')).toBe('a')
    expect(Utils.normalizeAccent('Â')).toBe('a')
    expect(Utils.normalizeAccent('â')).toBe('a')
    expect(Utils.normalizeAccent('Î')).toBe('i')
    expect(Utils.normalizeAccent('î')).toBe('i')
    expect(Utils.normalizeAccent('Ș')).toBe('s')
    expect(Utils.normalizeAccent('ș')).toBe('s')
    expect(Utils.normalizeAccent('Ț')).toBe('t')
    expect(Utils.normalizeAccent('ț')).toBe('t')

    // Test Greek special characters
    expect(Utils.normalizeAccent('Α')).toBe('a')
    expect(Utils.normalizeAccent('Ά')).toBe('a')
    expect(Utils.normalizeAccent('α')).toBe('a')
    expect(Utils.normalizeAccent('ά')).toBe('a')
    expect(Utils.normalizeAccent('Β')).toBe('v')
    expect(Utils.normalizeAccent('β')).toBe('v')
    expect(Utils.normalizeAccent('Γ')).toBe('g')
    expect(Utils.normalizeAccent('γ')).toBe('g')
    expect(Utils.normalizeAccent('Δ')).toBe('d')
    expect(Utils.normalizeAccent('δ')).toBe('d')
    expect(Utils.normalizeAccent('Χ')).toBe('ch')
    expect(Utils.normalizeAccent('χ')).toBe('ch')
    expect(Utils.normalizeAccent('Ψ')).toBe('ps')
    expect(Utils.normalizeAccent('ψ')).toBe('ps')
  })

  it('should handle mixed strings', () => {
    expect(Utils.normalizeAccent('Héllo Wörld')).toBe('hello world')
    expect(Utils.normalizeAccent('Café')).toBe('cafe')
    expect(Utils.normalizeAccent('Résumé')).toBe('resume')
    expect(Utils.normalizeAccent('Naïve')).toBe('naive')
    expect(Utils.normalizeAccent('São Paulo')).toBe('sao paulo')
    expect(Utils.normalizeAccent('Zürich')).toBe('zurich')
    expect(Utils.normalizeAccent('München')).toBe('munchen')
    expect(Utils.normalizeAccent('Français')).toBe('francais')
    expect(Utils.normalizeAccent('Español')).toBe('espanol')
    expect(Utils.normalizeAccent('Český')).toBe('cesky')
    expect(Utils.normalizeAccent('Polski')).toBe('polski')
    expect(Utils.normalizeAccent('Русский')).toBe('русскии')
  })

  it('should handle strings with spaces', () => {
    expect(Utils.normalizeAccent('  Héllo  ')).toBe('hello')
    expect(Utils.normalizeAccent('\tWörld\n')).toBe('world')
    expect(Utils.normalizeAccent('  Café  ')).toBe('cafe')
  })

  it('should handle mixed numbers and special characters', () => {
    expect(Utils.normalizeAccent('Héllo 123')).toBe('hello 123')
    expect(Utils.normalizeAccent('Wörld!@#')).toBe('world!@#')
    expect(Utils.normalizeAccent('Café 2023')).toBe('cafe 2023')
  })

  it('should handle strings with unmapped characters', () => {
    // Test some Unicode characters not in the mapping table
    expect(Utils.normalizeAccent('你好')).toBe('你好') // Chinese characters should remain unchanged
    expect(Utils.normalizeAccent('こんにちは')).toBe('こんにちは') // Japanese characters should remain unchanged
    expect(Utils.normalizeAccent('안녕하세요')).toBe('안녕하세요') // Korean characters should remain unchanged
    expect(Utils.normalizeAccent('مرحبا')).toBe('مرحبا') // Arabic characters should remain unchanged
  })

  it('should handle edge cases', () => {
    // Test very long strings
    const longString = 'Á'.repeat(1000)
    expect(Utils.normalizeAccent(longString)).toBe('a'.repeat(1000))
  })
})

describe('sprintf', () => {
  it('should handle basic string formatting', () => {
    expect(Utils.sprintf('Hello %s', 'World')).toBe('Hello World')
    expect(Utils.sprintf('%s %s', 'Hello', 'World')).toBe('Hello World')
  })

  it('should handle number formatting', () => {
    expect(Utils.sprintf('Number: %s', 42)).toBe('Number: 42')
    expect(Utils.sprintf('%s + %s = %s', 1, 2, 3)).toBe('1 + 2 = 3')
  })

  it('should handle missing arguments', () => {
    expect(Utils.sprintf('Hello %s %s', 'World')).toBe('Hello World %s')
    expect(Utils.sprintf('%s %s %s', 'A')).toBe('A %s %s')
  })

  it('should handle no placeholders', () => {
    expect(Utils.sprintf('Hello World')).toBe('Hello World')
    expect(Utils.sprintf('No placeholders here', 'unused')).toBe('No placeholders here')
  })

  it('should handle multiple same placeholders', () => {
    expect(Utils.sprintf('%s %s %s', 'A', 'B', 'C')).toBe('A B C')
  })

  it('should handle special characters', () => {
    expect(Utils.sprintf('Special: %s', '!@#$%^&*()')).toBe('Special: !@#$%^&*()')
  })

  it('should handle empty strings', () => {
    expect(Utils.sprintf('%s', '')).toBe('')
    expect(Utils.sprintf('', 'test')).toBe('')
  })
})

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(Utils.isObject({})).toBe(true)
    expect(Utils.isObject({ a: 1 })).toBe(true)
    expect(Utils.isObject({ nested: { obj: true } })).toBe(true)
  })

  it('should return false for null', () => {
    expect(Utils.isObject(null)).toBe(false)
  })

  it('should return false for primitives', () => {
    expect(Utils.isObject(42)).toBe(false)
    expect(Utils.isObject('string')).toBe(false)
    expect(Utils.isObject(true)).toBe(false)
    expect(Utils.isObject(undefined)).toBe(false)
  })

  it('should return false for arrays', () => {
    expect(Utils.isObject([])).toBe(false)
    expect(Utils.isObject([1, 2, 3])).toBe(false)
  })

  it('should return false for functions', () => {
    expect(Utils.isObject(() => {})).toBe(false)
    expect(Utils.isObject(function() {})).toBe(false)
  })

  it('should return false for Date objects', () => {
    expect(Utils.isObject(new Date())).toBe(false)
  })

  it('should return false for RegExp objects', () => {
    expect(Utils.isObject(/test/)).toBe(false)
  })
})

describe('isEmptyObject', () => {
  it('should return true for empty objects', () => {
    expect(Utils.isEmptyObject({})).toBe(true)
  })

  it('should return false for non-empty objects', () => {
    expect(Utils.isEmptyObject({ a: 1 })).toBe(false)
    expect(Utils.isEmptyObject({ key: 'value' })).toBe(false)
  })

  it('should handle objects with undefined values', () => {
    expect(Utils.isEmptyObject({ a: undefined })).toBe(false)
  })

  it('should handle objects with null values', () => {
    expect(Utils.isEmptyObject({ a: null })).toBe(false)
  })

  it('should handle nested empty objects', () => {
    expect(Utils.isEmptyObject({ nested: {} })).toBe(false)
  })
})

describe('isNumeric', () => {
  it('should return true for numbers', () => {
    expect(Utils.isNumeric(42)).toBe(true)
    expect(Utils.isNumeric(0)).toBe(true)
    expect(Utils.isNumeric(-1)).toBe(true)
    expect(Utils.isNumeric(3.14)).toBe(true)
  })

  it('should return true for numeric strings', () => {
    expect(Utils.isNumeric('42')).toBe(true)
    expect(Utils.isNumeric('0')).toBe(true)
    expect(Utils.isNumeric('-1')).toBe(true)
    expect(Utils.isNumeric('3.14')).toBe(true)
  })

  it('should return false for non-numeric values', () => {
    expect(Utils.isNumeric('abc')).toBe(false)
    expect(Utils.isNumeric('12abc')).toBe(false)
    expect(Utils.isNumeric('')).toBe(false)
    expect(Utils.isNumeric(null)).toBe(false)
    expect(Utils.isNumeric(undefined)).toBe(false)
  })

  it('should return false for NaN', () => {
    expect(Utils.isNumeric(NaN)).toBe(false)
  })

  it('should return true for Infinity', () => {
    expect(Utils.isNumeric(Infinity)).toBe(true)
    expect(Utils.isNumeric(-Infinity)).toBe(true)
  })

  it('should handle scientific notation', () => {
    expect(Utils.isNumeric('1e10')).toBe(true)
    expect(Utils.isNumeric('1.5e-10')).toBe(true)
  })

  it('should handle hexadecimal strings', () => {
    expect(Utils.isNumeric('0x10')).toBe(true)
  })
})

describe('extend', () => {
  it('should merge two objects', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    const result = Utils.extend(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 2 })
  })

  it('should override properties', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { b: 3, c: 4 }
    const result = Utils.extend(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 3, c: 4 })
  })

  it('should handle deep merge when first arg is true', () => {
    const obj1 = { a: { x: 1 } }
    const obj2 = { a: { y: 2 } }
    const result = Utils.extend(true, obj1, obj2)
    expect(result).toEqual({ a: { x: 1, y: 2 } })
  })

  it('should handle multiple source objects', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    const obj3 = { c: 3 }
    const result = Utils.extend(obj1, obj2, obj3)
    expect(result).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should handle empty objects', () => {
    const result = Utils.extend({}, { a: 1 })
    expect(result).toEqual({ a: 1 })
  })

  it('should handle null and undefined sources', () => {
    const obj = { a: 1 }
    const result = Utils.extend(obj, null, undefined, { b: 2 })
    expect(result).toEqual({ a: 1, b: 2 })
  })

  it('should not modify source objects in shallow merge', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    Utils.extend({}, obj1, obj2)
    expect(obj1).toEqual({ a: 1 })
    expect(obj2).toEqual({ b: 2 })
  })

  it('should handle arrays', () => {
    const obj1 = { arr: [1, 2] }
    const obj2 = { arr: [3, 4] }
    const result = Utils.extend(obj1, obj2)
    expect(result.arr).toEqual([3, 4])
  })
})

describe('addQueryToUrl', () => {
  it('should add query parameters to URL without existing query', () => {
    const url = 'https://example.com/page'
    const query = { foo: 'bar', baz: 'qux' }
    const result = Utils.addQueryToUrl(url, query)
    expect(result).toContain('foo=bar')
    expect(result).toContain('baz=qux')
  })

  it('should add query parameters to URL with existing query', () => {
    const url = 'https://example.com/page?existing=param'
    const query = { foo: 'bar' }
    const result = Utils.addQueryToUrl(url, query)
    expect(result).toContain('existing=param')
    expect(result).toContain('foo=bar')
  })

  it('should override existing query parameters', () => {
    const url = 'https://example.com/page?foo=old'
    const query = { foo: 'new' }
    const result = Utils.addQueryToUrl(url, query)
    expect(result).toContain('foo=new')
    expect(result).not.toContain('foo=old')
  })

  it('should preserve URL hash', () => {
    const url = 'https://example.com/page#section'
    const query = { foo: 'bar' }
    const result = Utils.addQueryToUrl(url, query)
    expect(result).toContain('#section')
    expect(result).toContain('foo=bar')
  })

  it('should handle URL with both query and hash', () => {
    const url = 'https://example.com/page?existing=param#section'
    const query = { foo: 'bar' }
    const result = Utils.addQueryToUrl(url, query)
    expect(result).toContain('existing=param')
    expect(result).toContain('foo=bar')
    expect(result).toContain('#section')
  })

  it('should handle empty query object', () => {
    const url = 'https://example.com/page'
    const query = {}
    const result = Utils.addQueryToUrl(url, query)
    expect(result).toContain('https://example.com/page')
  })

  it('should handle special characters in query values', () => {
    const url = 'https://example.com/page'
    const query = { search: 'hello world', special: '!@#$' }
    const result = Utils.addQueryToUrl(url, query)
    expect(result).toContain('search=')
    expect(result).toContain('special=')
  })

  it('should handle multiple hash segments', () => {
    const url = 'https://example.com/page#section#subsection'
    const query = { foo: 'bar' }
    const result = Utils.addQueryToUrl(url, query)
    expect(result).toContain('#section#subsection')
  })
})
