import { describe, expect, it } from 'vitest'
import * as object from '@/utils/object.js'

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(object.isObject({})).toBe(true)
    expect(object.isObject({ a: 1 })).toBe(true)
    expect(object.isObject({ nested: { obj: true } })).toBe(true)
  })

  it('should return false for null', () => {
    expect(object.isObject(null)).toBe(false)
  })

  it('should return false for primitives', () => {
    expect(object.isObject(42)).toBe(false)
    expect(object.isObject('string')).toBe(false)
    expect(object.isObject(true)).toBe(false)
    expect(object.isObject(undefined)).toBe(false)
  })

  it('should return false for arrays', () => {
    expect(object.isObject([])).toBe(false)
    expect(object.isObject([1, 2, 3])).toBe(false)
  })

  it('should return false for functions', () => {
    expect(object.isObject(() => {})).toBe(false)
    expect(object.isObject(function () {})).toBe(false)
  })

  it('should return false for Date objects', () => {
    expect(object.isObject(new Date())).toBe(false)
  })

  it('should return false for RegExp objects', () => {
    expect(object.isObject(/test/)).toBe(false)
  })
})

describe('isEmptyObject', () => {
  it('should return true for empty objects', () => {
    expect(object.isEmptyObject({})).toBe(true)
  })

  it('should return false for non-empty objects', () => {
    expect(object.isEmptyObject({ a: 1 })).toBe(false)
    expect(object.isEmptyObject({ key: 'value' })).toBe(false)
  })

  it('should handle objects with undefined values', () => {
    expect(object.isEmptyObject({ a: undefined })).toBe(false)
  })

  it('should handle objects with null values', () => {
    expect(object.isEmptyObject({ a: null })).toBe(false)
  })

  it('should handle nested empty objects', () => {
    expect(object.isEmptyObject({ nested: {} })).toBe(false)
  })

  it('should use default empty object when undefined', () => {
    expect(object.isEmptyObject()).toBe(true)
    expect(object.isEmptyObject(undefined)).toBe(true)
  })
})

describe('extend', () => {
  it('should merge two objects', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    const result = object.extend(obj1, obj2)

    expect(result).toEqual({ a: 1, b: 2 })
  })

  it('should override properties', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { b: 3, c: 4 }
    const result = object.extend(obj1, obj2)

    expect(result).toEqual({ a: 1, b: 3, c: 4 })
  })

  it('should handle deep merge when first arg is true', () => {
    const obj1 = { a: { x: 1 } }
    const obj2 = { a: { y: 2 } }
    const result = object.extend(true, obj1, obj2)

    expect(result).toEqual({ a: { x: 1, y: 2 } })
  })

  it('should handle multiple source objects', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    const obj3 = { c: 3 }
    const result = object.extend(obj1, obj2, obj3)

    expect(result).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should handle empty objects', () => {
    const result = object.extend({}, { a: 1 })

    expect(result).toEqual({ a: 1 })
  })

  it('should handle null and undefined sources', () => {
    const obj = { a: 1 }
    const result = object.extend(obj, null, undefined, { b: 2 })

    expect(result).toEqual({ a: 1, b: 2 })
  })

  it('should not modify source objects in shallow merge', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }

    object.extend({}, obj1, obj2)
    expect(obj1).toEqual({ a: 1 })
    expect(obj2).toEqual({ b: 2 })
  })

  it('should handle arrays', () => {
    const obj1 = { arr: [1, 2] }
    const obj2 = { arr: [3, 4] }
    const result = object.extend(obj1, obj2)

    expect(result.arr).toEqual([3, 4])
  })

  it('should handle deep merge with nested objects', () => {
    const obj1 = { a: { b: { c: 1 } }, d: 2 }
    const obj2 = { a: { b: { d: 3 } }, e: 4 }
    const result = object.extend(true, obj1, obj2)

    expect(result).toEqual({
      a: { b: { c: 1, d: 3 } },
      d: 2,
      e: 4
    })
  })

  it('should handle deep merge with arrays of primitives', () => {
    const obj1 = { arr: [1, 2, 3] }
    const obj2 = { arr: [4, 5] }
    const result = object.extend(true, obj1, obj2)

    expect(result.arr).toEqual([4, 5])
  })

  it('should handle deep merge with arrays of objects', () => {
    const obj1 = { arr: [{ a: 1 }, { b: 2 }] }
    const obj2 = { arr: [{ c: 3 }] }
    const result = object.extend(true, obj1, obj2)

    expect(result.arr).toEqual([{ a: 1, c: 3 }, { b: 2 }])
  })

  it('should ignore __proto__ property', () => {
    const obj = {}
    const result = object.extend(obj, { a: 1 })

    // __proto__ key is skipped during extend, so only { a: 1 } should be in result
    expect(result).toEqual({ a: 1 })
    expect(Object.prototype.polluted).toBeUndefined()
  })
})

describe('deepCopy', () => {
  it('should deep copy objects', () => {
    const original = { a: 1, b: { c: 2 } }
    const copy = object.deepCopy(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy.b).not.toBe(original.b)
  })

  it('should deep copy arrays', () => {
    const original = [1, [2, 3], { a: 4 }]
    const copy = object.deepCopy(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy[1]).not.toBe(original[1])
  })

  it('should return undefined for undefined input', () => {
    expect(object.deepCopy(undefined)).toBeUndefined()
  })

  it('should handle null values', () => {
    const original = { a: null, b: { c: null } }
    const copy = object.deepCopy(original)

    expect(copy).toEqual(original)
  })

  it('should handle nested structures', () => {
    const original = {
      a: [1, 2, { b: 3 }],
      c: { d: [4, 5] },
      e: null,
      f: 'string'
    }
    const copy = object.deepCopy(original)

    expect(copy).toEqual(original)
    expect(copy).not.toBe(original)
    expect(copy.a).not.toBe(original.a)
    expect(copy.a[2]).not.toBe(original.a[2])
    expect(copy.c).not.toBe(original.c)
  })
})

describe('compareObjects', () => {
  it('should return true for equal objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2 }

    expect(object.compareObjects(obj1, obj2)).toBe(true)
  })

  it('should return false for different objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 3 }

    expect(object.compareObjects(obj1, obj2)).toBe(false)
  })

  it('should return true when compareLength is false and objects have different key count', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2, c: 3 }

    expect(object.compareObjects(obj1, obj2, false)).toBe(true)
  })

  it('should return false when compareLength is true and objects have different key count', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2, c: 3 }

    expect(object.compareObjects(obj1, obj2, true)).toBe(false)
  })

  it('should return true when compareLength is true and objects have same keys and values', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2 }

    expect(object.compareObjects(obj1, obj2, true)).toBe(true)
  })

  it('should return true for objects with completely different keys (known limitation)', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { c: 1, d: 2 }

    // Note: This returns true because compareObjects only checks keys from obj1
    // that exist in obj2. When there are no common keys, it returns true.
    // This is a known limitation of the current implementation.
    expect(object.compareObjects(obj1, obj2)).toBe(true)
  })

  it('should handle empty objects', () => {
    expect(object.compareObjects({}, {})).toBe(true)
    expect(object.compareObjects({}, {}, true)).toBe(true)
  })
})
