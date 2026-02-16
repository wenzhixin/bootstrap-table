/**
 * String manipulation utilities.
 *
 * This module provides utility functions for string processing, including:
 * - String formatting (sprintf)
 * - HTML escaping and unescaping
 * - Accent character normalization for search
 * - HTML tag removal
 * - CSS style string normalization
 *
 * @module utils/string
 */

/**
 * Mapping of accented characters to their non-accented equivalents.
 * Used by normalizeAccent function to convert accented characters.
 *
 * @constant {Object.<string, string>}
 */
const ACCENT_MAP = {
  // Nordic
  Æ: 'AE', æ: 'ae',
  Ø: 'O', ø: 'o',
  Å: 'A', å: 'a',

  // German
  Ä: 'A', ä: 'a',
  Ö: 'O', ö: 'o',
  Ü: 'U', ü: 'u',
  ẞ: 'SS', ß: 'ss',

  // French & others
  Œ: 'OE', œ: 'oe',

  // Slavic/Central European
  Č: 'C', č: 'c',
  Ć: 'C', ć: 'c',
  Š: 'S', š: 's',
  Ž: 'Z', ž: 'z',
  Ł: 'L', ł: 'l',
  Đ: 'Dj', đ: 'dj',
  Ń: 'N', ń: 'n',
  Ę: 'E', ę: 'e',
  Ą: 'A', ą: 'a',
  Ŕ: 'R', ŕ: 'r',

  // Turkish
  Ğ: 'G', ğ: 'g',
  İ: 'I', ı: 'i',
  Ş: 'S', ş: 's',

  // Romanian
  Ă: 'A', ă: 'a',
  Â: 'A', â: 'a',
  Î: 'I', î: 'i',
  Ș: 'S', ș: 's',
  Ț: 'T', ț: 't',

  // Greek
  Α: 'A', Ά: 'A', α: 'a', ά: 'a',
  Β: 'V', β: 'v',
  Γ: 'G', γ: 'g',
  Δ: 'D', δ: 'd',
  Ε: 'E', Έ: 'E', ε: 'e', έ: 'e',
  Ζ: 'Z', ζ: 'z',
  Η: 'I', Ή: 'I', η: 'i', ή: 'i',
  Ι: 'I', Ί: 'I', ι: 'i', ί: 'i',
  Κ: 'K', κ: 'k',
  Λ: 'L', λ: 'l',
  Μ: 'M', μ: 'm',
  Ν: 'N', ν: 'n',
  Ξ: 'X', ξ: 'x',
  Ο: 'O', Ό: 'O', ο: 'o', ό: 'o',
  Π: 'P', π: 'p',
  Ρ: 'R', ρ: 'r',
  Σ: 'S', σ: 's', ς: 's',
  Τ: 'T', τ: 't',
  Υ: 'Y', Ύ: 'Y', υ: 'y', ύ: 'y',
  Φ: 'F', φ: 'f',
  Χ: 'CH', χ: 'ch',
  Ψ: 'PS', ψ: 'ps',
  Ω: 'O', Ώ: 'O', ω: 'o', ώ: 'o'
}

/**
 * Simple string formatter that replaces %s placeholders with provided arguments.
 * Only supports %s placeholder. Returns empty string if any argument is undefined.
 *
 * @param {string} _str - The format string containing %s placeholders.
 * @param {...*} args - The values to replace the placeholders with.
 * @returns {string} The formatted string, or empty string if any argument is undefined.
 */
export function sprintf (_str, ...args) {
  let flag = true
  let i = 0

  const str = _str.replace(/%s/g, () => {
    const arg = args[i++]

    if (typeof arg === 'undefined') {
      flag = false
      return ''
    }
    return arg
  })

  return flag ? str : ''
}

/**
 * Escapes apostrophes in a string by replacing them with HTML entity.
 *
 * @param {*} value - The value to escape.
 * @returns {string} The string with apostrophes escaped.
 */
export function escapeApostrophe (value) {
  return value.toString()
    .replace(/'/g, '&#39;')
}

/**
 * Escapes HTML special characters in a string.
 *
 * @param {*} text - The text to escape.
 * @returns {*} The escaped text, or the original value if falsy.
 */
export function escapeHTML (text) {
  if (!text) {
    return text
  }
  return text.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Escapes HTML attribute value to prevent XSS attacks.
 * The order of replacements is important for attributes: & must be first,
 * then " and ' to prevent breaking out of the attribute.
 *
 * @param {*} text - The attribute value to escape.
 * @returns {*} The escaped text, or the original value if falsy.
 */
export function escapeAttr (text) {
  if (!text) {
    return text
  }
  return text.toString()
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/**
 * Unescapes HTML entities in a string.
 *
 * @param {*} text - The text to unescape.
 * @returns {*} The unescaped text, or the original value if not a string or falsy.
 */
export function unescapeHTML (text) {
  if (typeof text !== 'string' || !text) {
    return text
  }
  return text.toString()
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&amp;/g, '&')
}

/**
 * Removes HTML tags and HTML entities from a string.
 *
 * @param {*} text - The text to remove HTML from.
 * @returns {*} The text with HTML removed, or the original value if falsy.
 */
export function removeHTML (text) {
  if (!text) {
    return text
  }
  return text.toString()
    .replace(/(<([^>]+)>)/ig, '')
    .replace(/&[#A-Za-z0-9]+;/gi, '')
    .trim()
}

/**
 * Normalizes accented characters in a string to their non-accented equivalents.
 * Converts to lowercase and removes diacritical marks.
 *
 * @param {*} value - The value to normalize.
 * @returns {*} The normalized string, or the original value if not a string.
 */
export function normalizeAccent (value) {
  if (typeof value !== 'string') {
    return value
  }
  const pattern = new RegExp(`[${Object.keys(ACCENT_MAP).join('')}]`, 'g')

  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(pattern, char => ACCENT_MAP[char])
    .toLowerCase()
    .trim()
}

/**
 * Normalizes a CSS style string by ensuring it ends with '; ' for proper concatenation.
 * Returns undefined if the input is empty or contains only whitespace.
 *
 * @param {string|undefined} style - The style string to normalize.
 * @returns {string|undefined} The normalized style string ending with '; ', or undefined.
 * @example
 * normalizeStyle('color: red')  // returns 'color: red; '
 * normalizeStyle('color: red;') // returns 'color: red; '
 * normalizeStyle('')            // returns undefined
 * normalizeStyle(undefined)     // returns undefined
 */
export function normalizeStyle (style) {
  if (!style) {
    return undefined
  }

  const trimmed = style.trim()

  if (!trimmed) {
    return undefined
  }

  return trimmed.replace(/;?\s*$/, '; ')
}
