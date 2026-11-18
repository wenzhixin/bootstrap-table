/**
 * Object manipulation utilities.
 *
 * This module provides utility functions for working with plain JavaScript objects,
 * including deep copying, merging, comparing, and checking object properties.
 *
 * @module utils/object
 */

/**
 * Checks if a value is a plain object.
 *
 * @param {*} obj - The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
export function isObject (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false
  }

  let proto = obj

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(obj) === proto
}

// $.extend: https://github.com/jquery/jquery/blob/3.6.2/src/core.js#L132
/**
 * Merges the contents of two or more objects together into the first object.
 * This is a re-implementation of jQuery's extend function.
 *
 * @param {boolean} [deep=false] - If true, the merge becomes recursive (deep copy).
 * @param {Object} target - The object to extend.
 * @param {...Object} objects - The objects to merge into the target.
 * @returns {Object} The extended target object.
 */
export function extend (...args) {
  let target = args[0] || {}
  let i = 1
  let deep = false
  let clone

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target

    // Skip the boolean and the target
    target = args[i] || {}
    i++
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== 'object' && typeof target !== 'function') {
    target = {}
  }

  for (; i < args.length; i++) {
    const options = args[i]

    // Ignore undefined/null values
    if (typeof options === 'undefined' || options === null) {
      continue
    }

    // Extend the base object
    // eslint-disable-next-line guard-for-in
    for (const name in options) {
      const copy = options[name]

      // Prevent Object.prototype pollution
      // Prevent never-ending loop
      if (name === '__proto__' || target === copy) {
        continue
      }

      const copyIsArray = Array.isArray(copy)

      // Recurse if we're merging plain objects or arrays
      if (deep && copy && (isObject(copy) || copyIsArray)) {
        const src = target[name]

        if (copyIsArray && Array.isArray(src)) {
          if (src.every(it => !isObject(it) && !Array.isArray(it))) {
            target[name] = copy
            continue
          }
        }

        if (copyIsArray && !Array.isArray(src)) {
          clone = []
        } else if (!copyIsArray && !isObject(src)) {
          clone = {}
        } else {
          clone = src
        }

        // Never move original objects, clone them
        target[name] = extend(deep, clone, copy)

      // Don't bring in undefined values
      } else if (copy !== undefined) {
        target[name] = copy
      }
    }
  }

  return target
}

/**
 * Creates a deep copy of a value.
 *
 * @param {*} arg - The value to deep copy.
 * @returns {*} A deep copy of the input value.
 */
export function deepCopy (arg) {
  if (arg === undefined) {
    return arg
  }
  return extend(true, Array.isArray(arg) ? [] : {}, arg)
}

/**
 * Compares two objects for equality.
 *
 * @param {Object} objectA - The first object to compare.
 * @param {Object} objectB - The second object to compare.
 * @param {boolean} [compareLength=false] - If true, also compare the number of keys.
 * @returns {boolean} True if the objects are equal, false otherwise.
 */
export function compareObjects (objectA, objectB, compareLength) {
  const aKeys = Object.keys(objectA)
  const bKeys = Object.keys(objectB)

  if (compareLength && aKeys.length !== bKeys.length) {
    return false
  }

  for (const key of aKeys) {
    if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
      return false
    }
  }

  return true
}

/**
 * Checks if an object is empty (has no own properties).
 *
 * @param {Object} [obj={}] - The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export function isEmptyObject (obj = {}) {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}
