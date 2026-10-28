import { describe, expect, it } from 'vitest'
import * as string from '@/utils/string.js'

describe('sprintf', () => {
  it('should handle basic string formatting', () => {
    expect(string.sprintf('Hello %s', 'World')).toBe('Hello World')
    expect(string.sprintf('%s %s', 'Hello', 'World')).toBe('Hello World')
  })

  it('should handle number formatting', () => {
    expect(string.sprintf('Number: %s', 42)).toBe('Number: 42')
    expect(string.sprintf('%s + %s = %s', 1, 2, 3)).toBe('1 + 2 = 3')
  })

  it('should handle missing arguments', () => {
    expect(string.sprintf('Hello %s %s', 'World')).toBe('')
    expect(string.sprintf('%s %s %s', 'A')).toBe('')
  })

  it('should handle no placeholders', () => {
    expect(string.sprintf('Hello World')).toBe('Hello World')
    expect(string.sprintf('No placeholders here', 'unused')).toBe('No placeholders here')
  })

  it('should handle multiple same placeholders', () => {
    expect(string.sprintf('%s %s %s', 'A', 'B', 'C')).toBe('A B C')
  })

  it('should handle special characters', () => {
    expect(string.sprintf('Special: %s', '!@#$%^&*()')).toBe('Special: !@#$%^&*()')
  })

  it('should handle empty strings', () => {
    expect(string.sprintf('%s', '')).toBe('')
    expect(string.sprintf('', 'test')).toBe('')
  })

  it('should handle undefined arguments', () => {
    expect(string.sprintf('Test %s', undefined)).toBe('')
    expect(string.sprintf('%s %s', 'A', undefined)).toBe('')
  })

  it('should handle null arguments', () => {
    expect(string.sprintf('Test %s', null)).toBe('Test null')
  })
})

describe('escapeApostrophe', () => {
  it('should escape single quotes', () => {
    expect(string.escapeApostrophe('It\'s')).toBe('It&#39;s')
    expect(string.escapeApostrophe('don\'t')).toBe('don&#39;t')
    expect(string.escapeApostrophe('\'hello\'')).toBe('&#39;hello&#39;')
  })

  it('should handle empty strings and non-string values', () => {
    expect(string.escapeApostrophe('')).toBe('')
    expect(string.escapeApostrophe(123)).toBe('123')
  })
})

describe('escapeHTML', () => {
  it('should escape all HTML special characters', () => {
    expect(string.escapeHTML('<div>')).toBe('&lt;div&gt;')
    expect(string.escapeHTML('"quote"')).toBe('&quot;quote&quot;')
    expect(string.escapeHTML('\'apostrophe\'')).toBe('&#39;apostrophe&#39;')
    expect(string.escapeHTML('&amp;')).toBe('&amp;amp;')
    expect(string.escapeHTML('<div class="test">Hello & welcome</div>'))
      .toBe('&lt;div class=&quot;test&quot;&gt;Hello &amp; welcome&lt;/div&gt;')
  })

  it('should return falsy values as is and convert non-string values to string', () => {
    expect(string.escapeHTML('')).toBe('')
    expect(string.escapeHTML(null)).toBe(null)
    expect(string.escapeHTML(undefined)).toBe(undefined)
    expect(string.escapeHTML(false)).toBe(false)
    expect(string.escapeHTML(0)).toBe(0)
    expect(string.escapeHTML(123)).toBe('123')
    expect(string.escapeHTML(true)).toBe('true')
  })
})

describe('escapeAttr', () => {
  it('should escape in correct order for attributes', () => {
    // & must be first to prevent double-escaping
    expect(string.escapeAttr('&<"\'')).toBe('&amp;&lt;&quot;&#39;')
  })

  it('should handle XSS attempts and URLs', () => {
    expect(string.escapeAttr('" onclick="alert(1)')).toBe('&quot; onclick=&quot;alert(1)')
    expect(string.escapeAttr('\' onerror=\'alert(1)')).toBe('&#39; onerror=&#39;alert(1)')
    expect(string.escapeAttr('http://example.com?foo=bar&baz=qux'))
      .toBe('http://example.com?foo=bar&amp;baz=qux')
  })

  it('should return falsy values as is', () => {
    expect(string.escapeAttr('')).toBe('')
    expect(string.escapeAttr(null)).toBe(null)
    expect(string.escapeAttr(undefined)).toBe(undefined)
  })
})

describe('unescapeHTML', () => {
  it('should unescape all HTML entities', () => {
    expect(string.unescapeHTML('&lt;div&gt;')).toBe('<div>')
    expect(string.unescapeHTML('&quot;quote&quot;')).toBe('"quote"')
    expect(string.unescapeHTML('&#39;apostrophe&#39;')).toBe('\'apostrophe\'')
    expect(string.unescapeHTML('&amp;amp;')).toBe('&amp;')
  })

  it('should handle mixed entities', () => {
    expect(string.unescapeHTML('&lt;div class=&quot;test&quot;&gt;Hello &amp; welcome&lt;/div&gt;'))
      .toBe('<div class="test">Hello & welcome</div>')
  })

  it('should return non-string values as is', () => {
    expect(string.unescapeHTML(123)).toBe(123)
    expect(string.unescapeHTML(null)).toBe(null)
    expect(string.unescapeHTML(undefined)).toBe(undefined)
    expect(string.unescapeHTML(true)).toBe(true)
  })

  it('should return empty string as is', () => {
    expect(string.unescapeHTML('')).toBe('')
  })
})

describe('removeHTML', () => {
  it('should remove HTML tags', () => {
    expect(string.removeHTML('<div>Hello</div>')).toBe('Hello')
    expect(string.removeHTML('<p>Paragraph</p>')).toBe('Paragraph')
    expect(string.removeHTML('<span class="test">Text</span>')).toBe('Text')
  })

  it('should remove nested HTML tags', () => {
    expect(string.removeHTML('<div><p>Hello <strong>World</strong></p></div>')).toBe('Hello World')
  })

  it('should remove HTML entities', () => {
    expect(string.removeHTML('Hello &amp; World')).toBe('Hello  World')
    expect(string.removeHTML('&lt;tag&gt;')).toBe('tag')
    // Note: &lt;tag&gt; is first processed by HTML entity removal which turns it into <tag>,
    // then the HTML tag removal strips <tag>, leaving just "tag"
    expect(string.removeHTML('&nbsp;text')).toBe('text')
  })

  it('should remove self-closing tags', () => {
    expect(string.removeHTML('<br />')).toBe('')
    expect(string.removeHTML('Hello<br />World')).toBe('HelloWorld')
  })

  it('should trim whitespace', () => {
    expect(string.removeHTML('  <div>Hello</div>  ')).toBe('Hello')
    expect(string.removeHTML('<p>  Text  </p>')).toBe('Text')
  })

  it('should return falsy values as is', () => {
    expect(string.removeHTML('')).toBe('')
    expect(string.removeHTML(null)).toBe(null)
    expect(string.removeHTML(undefined)).toBe(undefined)
  })
})

describe('normalizeAccent', () => {
  it('should handle non-string inputs', () => {
    expect(string.normalizeAccent(null)).toBe(null)
    expect(string.normalizeAccent(undefined)).toBe(undefined)
    expect(string.normalizeAccent(123)).toBe(123)
    expect(string.normalizeAccent({})).toStrictEqual({})
    expect(string.normalizeAccent([])).toStrictEqual([])
  })

  it('should handle empty strings', () => {
    expect(string.normalizeAccent('')).toBe('')
    expect(string.normalizeAccent('   ')).toBe('')
  })

  it('should handle basic ASCII characters', () => {
    expect(string.normalizeAccent('hello')).toBe('hello')
    expect(string.normalizeAccent('WORLD')).toBe('world')
    expect(string.normalizeAccent('123')).toBe('123')
    expect(string.normalizeAccent('!@#$')).toBe('!@#$')
  })

  it('should handle accented Latin characters (uppercase)', () => {
    // Test various forms of A
    expect(string.normalizeAccent('Á')).toBe('a')
    expect(string.normalizeAccent('À')).toBe('a')
    expect(string.normalizeAccent('Â')).toBe('a')
    expect(string.normalizeAccent('Ä')).toBe('a')
    expect(string.normalizeAccent('Ã')).toBe('a')
    expect(string.normalizeAccent('Å')).toBe('a')
    expect(string.normalizeAccent('Ā')).toBe('a')
    expect(string.normalizeAccent('Ă')).toBe('a')
    expect(string.normalizeAccent('Ą')).toBe('a')

    // Test various forms of E
    expect(string.normalizeAccent('É')).toBe('e')
    expect(string.normalizeAccent('È')).toBe('e')
    expect(string.normalizeAccent('Ê')).toBe('e')
    expect(string.normalizeAccent('Ë')).toBe('e')
    expect(string.normalizeAccent('Ē')).toBe('e')
    expect(string.normalizeAccent('Ĕ')).toBe('e')
    expect(string.normalizeAccent('Ė')).toBe('e')
    expect(string.normalizeAccent('Ę')).toBe('e')
    expect(string.normalizeAccent('Ě')).toBe('e')

    // Test various forms of I
    expect(string.normalizeAccent('Í')).toBe('i')
    expect(string.normalizeAccent('Ì')).toBe('i')
    expect(string.normalizeAccent('Î')).toBe('i')
    expect(string.normalizeAccent('Ï')).toBe('i')
    expect(string.normalizeAccent('Ĩ')).toBe('i')
    expect(string.normalizeAccent('Ī')).toBe('i')
    expect(string.normalizeAccent('Ĭ')).toBe('i')
    expect(string.normalizeAccent('Į')).toBe('i')
    expect(string.normalizeAccent('İ')).toBe('i')

    // Test various forms of O
    expect(string.normalizeAccent('Ó')).toBe('o')
    expect(string.normalizeAccent('Ò')).toBe('o')
    expect(string.normalizeAccent('Ô')).toBe('o')
    expect(string.normalizeAccent('Ö')).toBe('o')
    expect(string.normalizeAccent('Õ')).toBe('o')
    expect(string.normalizeAccent('Ø')).toBe('o')
    expect(string.normalizeAccent('Ō')).toBe('o')
    expect(string.normalizeAccent('Ŏ')).toBe('o')
    expect(string.normalizeAccent('Ő')).toBe('o')

    // Test various forms of U
    expect(string.normalizeAccent('Ú')).toBe('u')
    expect(string.normalizeAccent('Ù')).toBe('u')
    expect(string.normalizeAccent('Û')).toBe('u')
    expect(string.normalizeAccent('Ü')).toBe('u')
    expect(string.normalizeAccent('Ũ')).toBe('u')
    expect(string.normalizeAccent('Ū')).toBe('u')
    expect(string.normalizeAccent('Ŭ')).toBe('u')
    expect(string.normalizeAccent('Ů')).toBe('u')
    expect(string.normalizeAccent('Ű')).toBe('u')

    // Test various forms of Y
    expect(string.normalizeAccent('Ý')).toBe('y')
    expect(string.normalizeAccent('Ŷ')).toBe('y')
    expect(string.normalizeAccent('Ÿ')).toBe('y')

    // Test various forms of C
    expect(string.normalizeAccent('Ç')).toBe('c')
    expect(string.normalizeAccent('Ć')).toBe('c')
    expect(string.normalizeAccent('Ĉ')).toBe('c')
    expect(string.normalizeAccent('Ċ')).toBe('c')
    expect(string.normalizeAccent('Č')).toBe('c')

    // Test various forms of N
    expect(string.normalizeAccent('Ñ')).toBe('n')
    expect(string.normalizeAccent('Ń')).toBe('n')
    expect(string.normalizeAccent('Ņ')).toBe('n')
    expect(string.normalizeAccent('Ň')).toBe('n')

    // Test various forms of S
    expect(string.normalizeAccent('Ś')).toBe('s')
    expect(string.normalizeAccent('Ŝ')).toBe('s')
    expect(string.normalizeAccent('Ş')).toBe('s')
    expect(string.normalizeAccent('Š')).toBe('s')

    // Test various forms of Z
    expect(string.normalizeAccent('Ź')).toBe('z')
    expect(string.normalizeAccent('Ż')).toBe('z')
    expect(string.normalizeAccent('Ž')).toBe('z')
  })

  it('should handle accented Latin characters (lowercase)', () => {
    // Test various forms of a
    expect(string.normalizeAccent('á')).toBe('a')
    expect(string.normalizeAccent('à')).toBe('a')
    expect(string.normalizeAccent('â')).toBe('a')
    expect(string.normalizeAccent('ä')).toBe('a')
    expect(string.normalizeAccent('ã')).toBe('a')
    expect(string.normalizeAccent('å')).toBe('a')
    expect(string.normalizeAccent('ā')).toBe('a')
    expect(string.normalizeAccent('ă')).toBe('a')
    expect(string.normalizeAccent('ą')).toBe('a')

    // Test various forms of e
    expect(string.normalizeAccent('é')).toBe('e')
    expect(string.normalizeAccent('è')).toBe('e')
    expect(string.normalizeAccent('ê')).toBe('e')
    expect(string.normalizeAccent('ë')).toBe('e')
    expect(string.normalizeAccent('ē')).toBe('e')
    expect(string.normalizeAccent('ĕ')).toBe('e')
    expect(string.normalizeAccent('ė')).toBe('e')
    expect(string.normalizeAccent('ę')).toBe('e')
    expect(string.normalizeAccent('ě')).toBe('e')

    // Test various forms of i
    expect(string.normalizeAccent('í')).toBe('i')
    expect(string.normalizeAccent('ì')).toBe('i')
    expect(string.normalizeAccent('î')).toBe('i')
    expect(string.normalizeAccent('ï')).toBe('i')
    expect(string.normalizeAccent('ĩ')).toBe('i')
    expect(string.normalizeAccent('ī')).toBe('i')
    expect(string.normalizeAccent('ĭ')).toBe('i')
    expect(string.normalizeAccent('į')).toBe('i')

    // Test various forms of o
    expect(string.normalizeAccent('ó')).toBe('o')
    expect(string.normalizeAccent('ò')).toBe('o')
    expect(string.normalizeAccent('ô')).toBe('o')
    expect(string.normalizeAccent('ö')).toBe('o')
    expect(string.normalizeAccent('õ')).toBe('o')
    expect(string.normalizeAccent('ø')).toBe('o')
    expect(string.normalizeAccent('ō')).toBe('o')
    expect(string.normalizeAccent('ŏ')).toBe('o')
    expect(string.normalizeAccent('ő')).toBe('o')

    // Test various forms of u
    expect(string.normalizeAccent('ú')).toBe('u')
    expect(string.normalizeAccent('ù')).toBe('u')
    expect(string.normalizeAccent('û')).toBe('u')
    expect(string.normalizeAccent('ü')).toBe('u')
    expect(string.normalizeAccent('ũ')).toBe('u')
    expect(string.normalizeAccent('ū')).toBe('u')
    expect(string.normalizeAccent('ŭ')).toBe('u')
    expect(string.normalizeAccent('ů')).toBe('u')
    expect(string.normalizeAccent('ű')).toBe('u')

    // Test various forms of y
    expect(string.normalizeAccent('ý')).toBe('y')
    expect(string.normalizeAccent('ÿ')).toBe('y')
    expect(string.normalizeAccent('ŷ')).toBe('y')

    // Test various forms of c
    expect(string.normalizeAccent('ç')).toBe('c')
    expect(string.normalizeAccent('ć')).toBe('c')
    expect(string.normalizeAccent('ĉ')).toBe('c')
    expect(string.normalizeAccent('ċ')).toBe('c')
    expect(string.normalizeAccent('č')).toBe('c')

    // Test various forms of n
    expect(string.normalizeAccent('ñ')).toBe('n')
    expect(string.normalizeAccent('ń')).toBe('n')
    expect(string.normalizeAccent('ņ')).toBe('n')
    expect(string.normalizeAccent('ň')).toBe('n')

    // Test various forms of s
    expect(string.normalizeAccent('ś')).toBe('s')
    expect(string.normalizeAccent('ŝ')).toBe('s')
    expect(string.normalizeAccent('ş')).toBe('s')
    expect(string.normalizeAccent('š')).toBe('s')

    // Test various forms of z
    expect(string.normalizeAccent('ź')).toBe('z')
    expect(string.normalizeAccent('ż')).toBe('z')
    expect(string.normalizeAccent('ž')).toBe('z')
  })

  it('should handle special character combinations', () => {
    // Test German special characters
    expect(string.normalizeAccent('ß')).toBe('ss')

    // Test Nordic special characters
    expect(string.normalizeAccent('Æ')).toBe('ae')
    expect(string.normalizeAccent('æ')).toBe('ae')
    expect(string.normalizeAccent('Ø')).toBe('o')
    expect(string.normalizeAccent('ø')).toBe('o')
    expect(string.normalizeAccent('Å')).toBe('a')
    expect(string.normalizeAccent('å')).toBe('a')

    // Test French special characters
    expect(string.normalizeAccent('Œ')).toBe('oe')
    expect(string.normalizeAccent('œ')).toBe('oe')

    // Test Slavic special characters
    expect(string.normalizeAccent('Č')).toBe('c')
    expect(string.normalizeAccent('č')).toBe('c')
    expect(string.normalizeAccent('Š')).toBe('s')
    expect(string.normalizeAccent('š')).toBe('s')
    expect(string.normalizeAccent('Ž')).toBe('z')
    expect(string.normalizeAccent('ž')).toBe('z')
    expect(string.normalizeAccent('Ł')).toBe('l')
    expect(string.normalizeAccent('ł')).toBe('l')
    expect(string.normalizeAccent('Đ')).toBe('dj')
    expect(string.normalizeAccent('đ')).toBe('dj')

    // Test Turkish special characters
    expect(string.normalizeAccent('Ğ')).toBe('g')
    expect(string.normalizeAccent('ğ')).toBe('g')
    expect(string.normalizeAccent('İ')).toBe('i')
    expect(string.normalizeAccent('ı')).toBe('i')
    expect(string.normalizeAccent('Ş')).toBe('s')
    expect(string.normalizeAccent('ş')).toBe('s')

    // Test Romanian special characters
    expect(string.normalizeAccent('Ă')).toBe('a')
    expect(string.normalizeAccent('ă')).toBe('a')
    expect(string.normalizeAccent('Â')).toBe('a')
    expect(string.normalizeAccent('â')).toBe('a')
    expect(string.normalizeAccent('Î')).toBe('i')
    expect(string.normalizeAccent('î')).toBe('i')
    expect(string.normalizeAccent('Ș')).toBe('s')
    expect(string.normalizeAccent('ș')).toBe('s')
    expect(string.normalizeAccent('Ț')).toBe('t')
    expect(string.normalizeAccent('ț')).toBe('t')

    // Test Greek special characters
    expect(string.normalizeAccent('Α')).toBe('a')
    expect(string.normalizeAccent('Ά')).toBe('a')
    expect(string.normalizeAccent('α')).toBe('a')
    expect(string.normalizeAccent('ά')).toBe('a')
    expect(string.normalizeAccent('Β')).toBe('v')
    expect(string.normalizeAccent('β')).toBe('v')
    expect(string.normalizeAccent('Γ')).toBe('g')
    expect(string.normalizeAccent('γ')).toBe('g')
    expect(string.normalizeAccent('Δ')).toBe('d')
    expect(string.normalizeAccent('δ')).toBe('d')
    expect(string.normalizeAccent('Χ')).toBe('ch')
    expect(string.normalizeAccent('χ')).toBe('ch')
    expect(string.normalizeAccent('Ψ')).toBe('ps')
    expect(string.normalizeAccent('ψ')).toBe('ps')
  })

  it('should handle mixed strings', () => {
    expect(string.normalizeAccent('Héllo Wörld')).toBe('hello world')
    expect(string.normalizeAccent('Café')).toBe('cafe')
    expect(string.normalizeAccent('Résumé')).toBe('resume')
    expect(string.normalizeAccent('Naïve')).toBe('naive')
    expect(string.normalizeAccent('São Paulo')).toBe('sao paulo')
    expect(string.normalizeAccent('Zürich')).toBe('zurich')
    expect(string.normalizeAccent('München')).toBe('munchen')
    expect(string.normalizeAccent('Français')).toBe('francais')
    expect(string.normalizeAccent('Español')).toBe('espanol')
    expect(string.normalizeAccent('Český')).toBe('cesky')
    expect(string.normalizeAccent('Polski')).toBe('polski')
    expect(string.normalizeAccent('Русский')).toBe('русскии')
  })

  it('should handle strings with spaces', () => {
    expect(string.normalizeAccent('  Héllo  ')).toBe('hello')
    expect(string.normalizeAccent('\tWörld\n')).toBe('world')
    expect(string.normalizeAccent('  Café  ')).toBe('cafe')
  })

  it('should handle mixed numbers and special characters', () => {
    expect(string.normalizeAccent('Héllo 123')).toBe('hello 123')
    expect(string.normalizeAccent('Wörld!@#')).toBe('world!@#')
    expect(string.normalizeAccent('Café 2023')).toBe('cafe 2023')
  })

  it('should handle strings with unmapped characters', () => {
    // Test some Unicode characters not in the mapping table
    expect(string.normalizeAccent('你好')).toBe('你好') // Chinese characters should remain unchanged
    expect(string.normalizeAccent('こんにちは')).toBe('こんにちは') // Japanese characters should remain unchanged
    expect(string.normalizeAccent('안녕하세요')).toBe('안녕하세요') // Korean characters should remain unchanged
    expect(string.normalizeAccent('مرحبا')).toBe('مرحبا') // Arabic characters should remain unchanged
  })

  it('should handle edge cases', () => {
    // Test very long strings
    const longString = 'Á'.repeat(1000)

    expect(string.normalizeAccent(longString)).toBe('a'.repeat(1000))
  })
})

describe('normalizeStyle', () => {
  it('should return undefined for falsy values', () => {
    expect(string.normalizeStyle(undefined)).toBe(undefined)
    expect(string.normalizeStyle(null)).toBe(undefined)
    expect(string.normalizeStyle('')).toBe(undefined)
    expect(string.normalizeStyle('   ')).toBe(undefined)
    expect(string.normalizeStyle('\t\n')).toBe(undefined)
  })

  it('should add trailing semicolon and space to style without one', () => {
    expect(string.normalizeStyle('color: red')).toBe('color: red; ')
    expect(string.normalizeStyle('text-align: center')).toBe('text-align: center; ')
    expect(string.normalizeStyle('width: 100px')).toBe('width: 100px; ')
  })

  it('should preserve existing trailing semicolon', () => {
    expect(string.normalizeStyle('color: red;')).toBe('color: red; ')
    expect(string.normalizeStyle('color: red; ')).toBe('color: red; ')
    expect(string.normalizeStyle('color: red;  ')).toBe('color: red; ')
  })

  it('should handle multiple CSS properties', () => {
    expect(string.normalizeStyle('color: red; background: blue')).toBe('color: red; background: blue; ')
    expect(string.normalizeStyle('color: red;background: blue')).toBe('color: red;background: blue; ')
    expect(string.normalizeStyle('color: red; background: blue;')).toBe('color: red; background: blue; ')
  })

  it('should trim leading and trailing whitespace', () => {
    expect(string.normalizeStyle('  color: red  ')).toBe('color: red; ')
    expect(string.normalizeStyle('\tcolor: red\n')).toBe('color: red; ')
    expect(string.normalizeStyle('  color: red;  ')).toBe('color: red; ')
  })

  it('should handle complex CSS values', () => {
    expect(string.normalizeStyle('background: url("test.png")')).toBe('background: url("test.png"); ')
    expect(string.normalizeStyle('font-family: Arial, sans-serif')).toBe('font-family: Arial, sans-serif; ')
    expect(string.normalizeStyle('box-shadow: 0 0 5px rgba(0,0,0,0.5)')).toBe('box-shadow: 0 0 5px rgba(0,0,0,0.5); ')
  })

  it('should handle !important declarations', () => {
    expect(string.normalizeStyle('color: red !important')).toBe('color: red !important; ')
    expect(string.normalizeStyle('color: red !important;')).toBe('color: red !important; ')
  })
})

describe('serializeStyle', () => {
  it('should return string input as-is', () => {
    expect(string.serializeStyle('color: red')).toBe('color: red')
    expect(string.serializeStyle('')).toBe('')
  })

  it('should return empty string for falsy values', () => {
    expect(string.serializeStyle(undefined)).toBe('')
    expect(string.serializeStyle(null)).toBe('')
    expect(string.serializeStyle(false)).toBe('')
  })

  it('should serialize object format', () => {
    expect(string.serializeStyle({ color: 'red' })).toBe('color: red')
    expect(string.serializeStyle({ color: 'red', 'font-size': '12px' })).toBe('color: red; font-size: 12px')
  })

  it('should serialize array format', () => {
    expect(string.serializeStyle(['color: red', 'font-size: 12px'])).toBe('color: red; font-size: 12px')
    expect(string.serializeStyle(['color: red', { 'font-weight': 'bold' }])).toBe('color: red; font-weight: bold')
  })

  it('should filter out null and undefined from arrays', () => {
    expect(string.serializeStyle(['color: red', null, undefined, 'font-size: 12px'])).toBe('color: red; font-size: 12px')
    expect(string.serializeStyle([null, undefined])).toBe('')
  })

  it('should handle nested arrays', () => {
    expect(string.serializeStyle([['color: red'], ['font-size: 12px']])).toBe('color: red; font-size: 12px')
  })

  it('should return empty string for non-object types', () => {
    expect(string.serializeStyle(123)).toBe('')
    expect(string.serializeStyle(true)).toBe('')
  })
})
