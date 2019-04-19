import {isString, isUndefined, isJQueryObject} from '../utils/types'
import {showHide} from './helpers'

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
      if (arg[1] !== undefined) {
        el.setAttribute(arg[0], arg[1])
      }
    }
  }
  return el
}

export const removeElem = (node) => {
  if (isJQueryObject(node)) {
    node = node[0]
  }
  if (isUndefined(node)) {
    return
  }
  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }
}

export const hasClass = (ele, cls) => {
  if (isUndefined(ele)) {
    return false
  }

  return ele.classList.contains(cls)
}

export const toggleClass = (elements, cls, force) => {
  let elem
  const length = elements.length
  const classes = cls.match(/\S+/g) || []

  for (let index = 0; index < length; index++) {
    elem = elements[index]
    if (!elem.classList) {
      continue
    }

    if (isJQueryObject(elem)) {
      elem = elem[0]
    }

    for (let i = 0; i < classes.length; i++) {
      if (force !== undefined) {
        if (force) {
          elem.classList.add(classes[i])
        } else {
          elem.classList.remove(classes[i])
        }
      } else {
        if (elem.classList.contains(classes[i])) {
          elem.classList.remove(classes[i])
        } else {
          elem.classList.add(classes[i])
        }
      }
    }
  }
}

export const addClass = (elements, cls) => toggleClass(elements, cls, true)

export const removeClass = (elements, cls) => toggleClass(elements, cls, false)

export const createOpt = (text, value, isSel) => {
  const isSelected = isSel ? true : false
  const _value = '' + value
  const opt = isSelected ?
    createElem('option', ['value', _value.trim()], ['selected', 'true']) :
    createElem('option', ['value', _value.trim()])
  opt.appendChild(createText(text.trim()))
  return opt
}

export const is = (ele, tag) => {
  tag = tag.toLowerCase()
  if (isJQueryObject(ele)) {
    ele = ele[0]
  }

  if (isUndefined(ele)) {
    return
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

  return ele.nodeName.toLowerCase() === tag
}

export const find = (ele, selector) => {
  if (isJQueryObject(ele)) {
    ele = ele[0]
  }
  if (isUndefined(ele)) {
    return
  }

  return ele.querySelectorAll(selector)
}

export const show = (elements) => showHide(elements, true)

export const hide = (elements) => showHide(elements)

export const appendTo = (target, elem) => {
  if (isJQueryObject(target)) {
    target = target[0]
  }

  if (isJQueryObject(elem)) {
    elem = elem[0]
  }

  if (isUndefined(target) || isUndefined(elem)) {
    return
  }

  target.appendChild(elem)
}