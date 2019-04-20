import {isJQueryObject, isUndefined} from '../utils/types'

export const defaultDisplay = (tag) => {
  const iframe = document.createElement('iframe')
  iframe.setAttribute('frameborder', 0)
  iframe.setAttribute('width', 0)
  iframe.setAttribute('height', 0)
  document.documentElement.appendChild(iframe)

  const doc = (iframe.contentWindow || iframe.contentDocument).document

  // IE support
  doc.write()
  doc.close()

  const testEl = doc.createElement(tag)
  doc.documentElement.appendChild(testEl)
  const display = (window.getComputedStyle ? getComputedStyle(testEl, null) : testEl.currentStyle).display
  iframe.parentNode.removeChild(iframe)
  return display
}

export const showHide = (elements, show) => {
  let display
  let elem
  let computedDisplay
  const values = []
  elements = Array.isArray(elements) ? elements : [elements]
  const length = elements.length

  for (let index = 0; index < length; index++) {
    elem = elements[index]
    if (isJQueryObject(elem)) {
      elem = elem[0]
    }

    if (isUndefined(elem)) {
      continue
    }

    if (!elem.style) {
      continue
    }

    values[index] = elem.getAttribute('data-olddisplay')
    display = elem.style.display
    computedDisplay = (window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle).display

    if (show) {
      if (!values[index] && display === 'none') elem.style.display = ''
      if (elem.style.display === '' && (computedDisplay === 'none')) values[index] = values[index] || defaultDisplay(elem.nodeName)
    } else {
      if (display && display !== 'none' || !(computedDisplay === 'none'))
        elem.setAttribute('data-olddisplay', (computedDisplay === 'none') ? display : computedDisplay)
    }
    if (!show || elem.style.display === 'none' || elem.style.display === '')
      elem.style.display = show ? values[index] || '' : 'none'
  }

  return elements
}

const htmlRegex = /^[\s]*<([a-z][^\\/\s>]+)/i

const WRAP_MAP = {
  div: ['div', '<div>', '</div>'],
  thead: ['table', '<table>', '</table>'],
  col: ['colgroup', '<table><colgroup>', '</colgroup></table>'],
  tr: ['tbody', '<table><tbody>', '</tbody></table>'],
  td: ['tr', '<table><tr>', '</tr></table>']
}
WRAP_MAP.caption = WRAP_MAP.colgroup = WRAP_MAP.tbody = WRAP_MAP.tfoot = WRAP_MAP.thead
WRAP_MAP.th = WRAP_MAP.td

export function createFragmentFromWrap (html) {
  const fragment = document.createDocumentFragment()
  const queryContainer = document.createElement('div')
  let firstTag = null
  const match = html.match(htmlRegex)
  if (match) {
    firstTag = match[1]
  }

  const wrap = WRAP_MAP[firstTag || 'div']

  if (wrap[0] === 'div') {
    const newElement = document.createRange().createContextualFragment(html)
    return newElement.childElementCount > 1 ? newElement : newElement.firstChild
  }

  queryContainer.insertAdjacentHTML('beforeend', `${wrap[1]}${html}${wrap[2]}`)

  const query = queryContainer.querySelector(wrap[0])

  while (query.firstChild) {
    fragment.appendChild(query.firstChild)
  }

  return fragment.childElementCount > 1 ? fragment : fragment.firstChild
}