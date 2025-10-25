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
