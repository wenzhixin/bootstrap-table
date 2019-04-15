import {isString, isUndefined, isJQueryObject} from './types'

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

export const removeElem = (node) => node.parentNode.removeChild(node)

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

export const is = (ele, tag) => {
  tag = tag.toLowerCase()
  if (isJQueryObject(ele)) {
    ele = ele[0]
  }

  if (tag === ':focus') {
    return ele === document.activeElement
  }

  if (tag === ':checkbox') {
    return ele.type === 'checkbox'
  }

  if (tag === ':radio') {
    return ele.type === 'radio'
  }

  if (tag === 'input[type=text]') {
    return ele.type === 'text' && ele.nodeName.toLowerCase() === 'input'
  }

  ele.nodeName.toLowerCase() === tag
}