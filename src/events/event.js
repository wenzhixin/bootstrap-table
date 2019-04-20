import { isUndefined, isJQueryObject} from '../utils/types'

export const addEvent = (obj, type, func, capture) => {
  if (isJQueryObject(obj)) {
    obj = obj[0]
  }
  if (isUndefined(obj)) {
    return
  }
  const types = type.match(/\S+/g) || []
  for (let i = 0; i < types.length; i++) {
    if (obj.addEventListener) {
      obj.addEventListener(types[i], func, capture)
    }
    else if (obj.attachEvent) {
      obj.attachEvent('on' + types[i], func)
    } else {
      obj['on' + types[i]] = func
    }
  }
}

export const removeEvent = (obj, type, func, capture) => {
  if (isJQueryObject(obj)) {
    obj = obj[0]
  }
  if (isUndefined(obj)) {
    return
  }
  const types = type.match(/\S+/g) || []
  for (let i = 0; i < types.length; i++) {
    if (obj.removeEventListener) {
      obj.removeEventListener(types[i], func, capture)
    } else if (obj.detachEvent) {
      obj.detachEvent('on' + types[i], func)
    } else {
      obj['on' + types[i]] = null
    }
  }
}

export const keyCode = (evt) => {
  return evt.charCode ? evt.charCode :
    (evt.keyCode ? evt.keyCode : (evt.which ? evt.which : 0))
}

export const isKeyPressed = (evt, keyCodes = []) => {
  return keyCodes.indexOf(keyCode(evt)) !== -1
}