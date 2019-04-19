import { isUndefined, isJQueryObject} from '../utils/types'

export const addEvent = (obj, type, func, capture) => {
  if (isJQueryObject(obj)) {
    obj = obj[0]
  }
  if (isUndefined(obj)) {
    return
  }
  if (obj.addEventListener) {
    obj.addEventListener(type, func, capture)
  }
  else if (obj.attachEvent) {
    obj.attachEvent('on' + type, func)
  } else {
    obj['on' + type] = func
  }
}

export const removeEvent = (obj, type, func, capture) => {
  if (isJQueryObject(obj)) {
    obj = obj[0]
  }
  if (isUndefined(obj)) {
    return
  }
  if (obj.removeEventListener) {
    obj.removeEventListener(type, func, capture)
  } else if (obj.detachEvent) {
    obj.detachEvent('on' + type, func)
  } else {
    obj['on' + type] = null
  }
}

export const keyCode = (evt) => {
  return evt.charCode ? evt.charCode :
    (evt.keyCode ? evt.keyCode : (evt.which ? evt.which : 0))
}

export const isKeyPressed = (evt, keyCodes = []) => {
  return keyCodes.indexOf(keyCode(evt)) !== -1
}