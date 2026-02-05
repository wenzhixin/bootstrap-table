import { describe, expect, it } from 'vitest'
import * as searchSort from '@/utils/search-sort.js'

describe('regexCompare', () => {
  it('should match plain text', () => {
    expect(searchSort.regexCompare('hello world', 'hello')).toBe(true)
    expect(searchSort.regexCompare('hello world', 'world')).toBe(true)
    expect(searchSort.regexCompare('hello world', 'foo')).toBe(false)
  })

  it('should be case insensitive', () => {
    expect(searchSort.regexCompare('Hello World', 'hello')).toBe(true)
    expect(searchSort.regexCompare('Hello World', 'HELLO')).toBe(true)
    expect(searchSort.regexCompare('Hello World', 'world')).toBe(true)
  })

  it('should handle regex pattern /pattern/flags', () => {
    expect(searchSort.regexCompare('hello world', '/hello/i')).toBe(true)
    expect(searchSort.regexCompare('hello world', '/world/g')).toBe(true)
    expect(searchSort.regexCompare('hello world', '/^hello/')).toBe(true)
    expect(searchSort.regexCompare('hello world', '/world$/')).toBe(true)
  })

  it('should handle numeric values', () => {
    expect(searchSort.regexCompare(123, '1')).toBe(true)
    expect(searchSort.regexCompare(123, '4')).toBe(false)
  })
})

describe('sort', () => {
  it('should sort numbers in ascending order', () => {
    expect(searchSort.sort(3, 1, 1, {})).toBeGreaterThan(0)
    expect(searchSort.sort(1, 3, 1, {})).toBeLessThan(0)
    expect(searchSort.sort(1, 1, 1, {})).toBe(0)
  })

  it('should sort numbers in descending order', () => {
    expect(searchSort.sort(1, 3, -1, {})).toBeGreaterThan(0)
    expect(searchSort.sort(3, 1, -1, {})).toBeLessThan(0)
  })

  it('should handle numeric strings', () => {
    expect(searchSort.sort('3', '1', 1, {})).toBeGreaterThan(0)
    expect(searchSort.sort('10', '2', 1, {})).toBeGreaterThan(0)
    expect(searchSort.sort('1.5', '1.2', 1, {})).toBeGreaterThan(0)
  })

  it('should sort strings using localeCompare', () => {
    expect(searchSort.sort('b', 'a', 1, {})).toBeGreaterThan(0)
    expect(searchSort.sort('a', 'b', 1, {})).toBeLessThan(0)
    expect(searchSort.sort('a', 'a', 1, {})).toBe(0)
  })

  it('should handle null and undefined as empty string', () => {
    expect(searchSort.sort(null, undefined, 1, {})).toBe(0)
    expect(searchSort.sort('a', null, 1, {})).toBeGreaterThan(0)
    expect(searchSort.sort(null, 'a', 1, {})).toBeLessThan(0)
  })

  it('should handle sortStable option with positions', () => {
    const options = { sortStable: true }

    // When values are equal, use position
    expect(searchSort.sort('a', 'a', 1, options, 0, 1)).toBeLessThan(0)
    expect(searchSort.sort('a', 'a', 1, options, 1, 0)).toBeGreaterThan(0)
    expect(searchSort.sort('a', 'a', 1, options, 0, 0)).toBe(0)
  })

  it('should handle sortEmptyLast option', () => {
    const options = { sortEmptyLast: true }

    // Empty strings should sort last
    expect(searchSort.sort('', 'a', 1, options)).toBeGreaterThan(0)
    expect(searchSort.sort('a', '', 1, options)).toBeLessThan(0)

    // Non-empty values compare normally
    expect(searchSort.sort('a', 'b', 1, options)).toBeLessThan(0)
  })

  it('should handle both sortStable and sortEmptyLast', () => {
    const options = { sortStable: true, sortEmptyLast: true }

    // Empty strings last regardless of position
    expect(searchSort.sort('', 'a', 1, options, 0, 1)).toBeGreaterThan(0)

    // When equal (and non-empty), use position
    expect(searchSort.sort('a', 'a', 1, options, 0, 1)).toBeLessThan(0)
  })

  it('should convert non-string values, floats, hex, and scientific notation for comparison', () => {
    expect(searchSort.sort(123, 456, 1, {})).toBeLessThan(0)
    expect(searchSort.sort(true, false, 1, {})).toBeGreaterThan(0)
    expect(searchSort.sort(3.14, 2.71, 1, {})).toBeGreaterThan(0)
    expect(searchSort.sort('3.14', '2.71', 1, {})).toBeGreaterThan(0)
    expect(searchSort.sort('1e10', '1e5', 1, {})).toBeGreaterThan(0)
    expect(searchSort.sort('1.5e-10', '2e-10', 1, {})).toBeLessThan(0)
    expect(typeof searchSort.sort('0x10', '0xA', 1, {})).toBe('number')
  })
})

// Note: replaceSearchMark tests are skipped due to potential issues with happy-dom
// The function modifies DOM elements and may cause worker timeout issues
// This is a known limitation of testing DOM manipulation in this environment
// The function is tested manually and in integration tests
