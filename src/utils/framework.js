import DOMHelper from '../helpers/dom.js'

/**
 * Framework detection and icon utilities.
 *
 * This module provides utility functions for detecting the Bootstrap framework version
 * and managing icon prefixes and mappings for different CSS frameworks.
 *
 * @module utils/framework
 */

/**
 * Returns the prefix for the icons based on the theme.
 *
 * @param {string} theme - The theme name (bootstrap3, bootstrap4, bootstrap5, bootstrap-table, bulma, foundation, materialize, semantic).
 * @returns {string} The icons prefix.
 */
export function getIconsPrefix (theme) {
  return {
    bootstrap3: 'glyphicon',
    bootstrap4: 'fa',
    bootstrap5: 'bi',
    'bootstrap-table': 'icon',
    bulma: 'fa',
    foundation: 'fa',
    materialize: 'material-icons',
    semantic: 'fa'
  }[theme] || 'fa'
}

/**
 * Gets the icons for a given prefix.
 *
 * @param {Object.<string, Object>} icons - The icons object.
 * @param {string} prefix - The prefix. For example, 'fa', 'bi', etc.
 * @return {Object} The icons object for the given prefix.
 */
export function getIcons (icons, prefix) {
  return icons[prefix] || {}
}

/**
 * Assigns new icons to icons object.
 *
 * @param {Object.<string, Object>} icons - The icons object.
 * @param {string} icon - The icon name. For example, 'search', 'refresh', etc.
 * @param {Object.<string, string>} values - The values object.
 */
export function assignIcons (icons, icon, values) {
  for (const key of Object.keys(icons)) {
    icons[key][icon] = values[key]
  }
}

/**
 * Gets the Bootstrap version.
 *
 * @returns {number} The Bootstrap version number (3, 4, or 5).
 */
export function getBootstrapVersion () {
  let bootstrapVersion = 5

  if (typeof window !== 'undefined' && window.bootstrap?.Tooltip?.VERSION) {
    const rawVersion = window.bootstrap.Tooltip.VERSION

    if (rawVersion !== undefined) {
      bootstrapVersion = parseInt(rawVersion, 10)
    }
  } else if (typeof $ !== 'undefined' && $.fn?.dropdown?.Constructor?.VERSION) {
    const rawVersion = $.fn.dropdown.Constructor.VERSION

    // Only try to parse VERSION if it is defined.
    // It is undefined in older versions of Bootstrap (tested with 3.1.1).
    if (rawVersion !== undefined) {
      bootstrapVersion = parseInt(rawVersion, 10)
    }
  }

  return bootstrapVersion
}

/**
 * Gets the search input element.
 *
 * @param {Object} that - The Bootstrap Table instance.
 * @returns {HTMLElement|null} The search input element, or null if not found.
 */
export function getSearchInput (that) {
  if (typeof that.options.searchSelector === 'string') {
    return DOMHelper.$(that.options.searchSelector)
  }

  const toolbar = that.$toolbar ? that.$toolbar[0] : null

  if (!toolbar) {
    return null
  }

  const result = DOMHelper.find(toolbar, '.search input')

  return result.length > 0 ? result[0] : null
}
