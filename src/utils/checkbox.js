import { escapeAttr, escapeHTML } from './string.js'
import { getBootstrapVersion } from './framework.js'

/**
 * Bootstrap Table Checkbox Utilities
 * Generate Bootstrap 5 or Bootstrap 3/4 compatible checkbox HTML and virtual DOM config
 *
 * @module utils/checkbox
 */

/**
 * Generate Bootstrap 5 or Bootstrap 3/4 compatible checkbox HTML
 * @param {Object} options - Configuration options
 * @param {string} options.name - checkbox name attribute
 * @param {string} [options.value] - checkbox value attribute
 * @param {boolean} [options.checked] - whether checked
 * @param {boolean} [options.disabled] - whether disabled
 * @param {string} [options.label] - display text
 * @param {string} [options.extraClass] - extra CSS classes (must contain only safe CSS characters: letters, digits, hyphens, underscores)
 * @param {boolean} [options.centered=true] - whether centered (for table checkbox)
 * @param {boolean} [options.withLabel=false] - whether include label (for dropdown menu)
 * @returns {string} HTML string
 */
export function getCheckboxHtml (options) {
  const {
    name,
    value = '',
    checked = false,
    disabled = false,
    label = '',
    extraClass = '',
    centered = true,
    withLabel = false
  } = options

  const checkedAttr = checked ? ' checked="checked"' : ''
  const disabledAttr = disabled ? ' disabled="disabled"' : ''
  const valueAttr = value !== undefined && value !== '' ? ` value="${escapeAttr(value)}"` : ''
  const classAttr = extraClass ? ` ${extraClass}` : ''
  const escapedName = escapeAttr(name)
  const escapedLabel = escapeHTML(label)

  if (getBootstrapVersion() === 5) {
    if (withLabel) {
      return `<label class="dropdown-item dropdown-item-marker d-flex align-items-center gap-2">
        <input class="form-check-input m-0${classAttr}" type="checkbox" name="${escapedName}"${valueAttr}${checkedAttr}${disabledAttr} />
        <span>${escapedLabel}</span>
      </label>`
    }
    const centerClass = centered ? ' d-flex justify-content-center' : ''

    return `<div class="form-check${centerClass}">
      <input class="form-check-input${classAttr}" type="checkbox" name="${escapedName}"${valueAttr}${checkedAttr}${disabledAttr} />
    </div>`
  }

  if (withLabel) {
    return `<label><input type="checkbox" name="${escapedName}"${valueAttr}${checkedAttr}${disabledAttr}${classAttr}> <span>${escapedLabel}</span></label>`
  }
  return `<label><input type="checkbox" name="${escapedName}"${valueAttr}${checkedAttr}${disabledAttr}${classAttr} /><span></span></label>`
}

/**
 * Generate form-check wrapped checkbox HTML (for table cells)
 * @param {string} inputHtml - input element HTML (must be trusted or pre-escaped, as it is inserted without additional escaping)
 * @param {boolean} [centered=true] - whether centered
 * @returns {string} HTML string
 */
export function wrapCheckbox (inputHtml, centered = true) {
  if (getBootstrapVersion() === 5) {
    const centerClass = centered ? ' d-flex justify-content-center' : ''

    return `<div class="form-check${centerClass}">${inputHtml}</div>`
  }
  return `<label>${inputHtml}<span></span></label>`
}

/**
 * Get checkbox virtual DOM config (for virtual DOM rendering in body.js)
 * @param {Object} options - Configuration options
 * @param {Object} options.inputAttrs - input element attributes object
 * @param {string} options.formCheckClass - form-check CSS class name
 * @param {string} options.formCheckInputClass - form-check-input CSS class name
 * @param {boolean} [options.centered=true] - whether centered
 * @returns {Object} Virtual DOM config object with inputAttrs, wrapperAttrs, wrapperTag and hasSpan
 */
export function getCheckboxVdomConfig (options) {
  const { inputAttrs, formCheckClass, formCheckInputClass, centered = true } = options

  if (getBootstrapVersion() === 5) {
    const centerClass = centered ? ' d-flex justify-content-center' : ''

    return {
      inputAttrs: { ...inputAttrs, class: formCheckInputClass },
      wrapperAttrs: { class: `${formCheckClass}${centerClass}` },
      wrapperTag: 'div',
      hasSpan: false
    }
  }

  return {
    inputAttrs,
    wrapperAttrs: {},
    wrapperTag: 'label',
    hasSpan: true
  }
}

/**
 * Generate showColumns dropdown menu column selection checkbox HTML
 * Differs from getCheckboxHtml by using data-field instead of name attribute
 * @param {Object} options - Configuration options
 * @param {string} options.dataField - column field name (for data-field attribute)
 * @param {string} options.value - checkbox value attribute
 * @param {boolean} options.checked - whether checked
 * @param {boolean} options.disabled - whether disabled
 * @param {string} options.label - display text
 * @returns {string} HTML string
 */
export function getDropdownColumnCheckboxHtml (options) {
  const { dataField, value, checked, disabled, label } = options

  const checkedAttr = checked ? ' checked="checked"' : ''
  const disabledAttr = disabled ? ' disabled="disabled"' : ''
  const escapedLabel = escapeHTML(label)

  if (getBootstrapVersion() === 5) {
    return `<label class="dropdown-item dropdown-item-marker d-flex align-items-center gap-2">
      <input class="form-check-input m-0" type="checkbox" data-field="${escapeAttr(dataField)}" value="${escapeAttr(value)}"${checkedAttr}${disabledAttr} />
      <span>${escapedLabel}</span>
    </label>`
  }

  return `<input type="checkbox" data-field="${escapeAttr(dataField)}" value="${escapeAttr(value)}"${checkedAttr}${disabledAttr}> <span>${escapedLabel}</span>`
}
