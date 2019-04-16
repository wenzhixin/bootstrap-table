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
  const length = elements.length

  for (let index = 0; index < length; index++) {
    elem = elements[index]
    if ( !elem.style ) {
      continue
    }

    values[index] = elements.getAttribute('data-olddisplay')
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