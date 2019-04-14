import {isString, isUndefined} from './types'

export const createText = (text) => document.createTextNode(text)

export const getText = (node) => {
  if (isUndefined(node.textContent)) {
    return node.innerText.trim()
  }
  return node.textContent.trim()
}

export const createElem = (...args) => {
  const tag = args[0]
  if (!isString(tag)) {
    return null
  }

  const el = document.createElement(tag)
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    if (Array.isArray(arg) && arg.length === 2) {
      el.setAttribute(arg[0], arg[1])
    }
  }
  return el
}

export const removeElm = (node) => node.parentNode.removeChild(node)

export const hasClass = (ele, cls) => {
  if (isUndefined(ele)) {
    return false
  }

  return ele.classList.contains(cls)
}

export const addClass = (ele, cls) => ele.classList.add(cls)

export const removeClass = (ele, cls) => ele.classList.remove(cls)

export const createOpt = (text, value, isSel) => {
  const isSelected = isSel ? true : false
  const opt = isSelected ?
    createElem('option', ['value', value.trim()], ['selected', 'true']) :
    createElem('option', ['value', value.trim()])
  opt.appendChild(createText(text.trim()))
  return opt
}