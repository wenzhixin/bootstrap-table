import { isUndefined, isJQueryObject} from '../utils/types'

export const addEvent = (obj, type, func, capture) => {
  if (isJQueryObject(obj)) {
    obj = obj[0]
  }
  if (isUndefined(obj)) {
    return
  }

  obj = (obj && obj.length) ? Array.from(obj) : [obj]
  const types = type.match(/\S+/g) || []

  for (let index = 0; index < obj.length; index++) {
    for (let i = 0; i < types.length; i++) {
      if (obj[index].addEventListener) {
        obj[index].addEventListener(types[i], func, capture)
      }
      else if (obj[index].attachEvent) {
        obj[index].attachEvent('on' + types[i], func)
      } else {
        obj[index]['on' + types[i]] = func
      }
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
  obj = (obj && obj.length) ? Array.from(obj) : [obj]
  const types = type.match(/\S+/g) || []

  for (let index = 0; index < obj.length; index++) {
    for (let i = 0; i < types.length; i++) {
      if (obj[index].removeEventListener) {
        obj[index].removeEventListener(types[i], func, capture)
      } else if (obj[index].detachEvent) {
        obj[index].detachEvent('on' + types[i], func)
      } else {
        obj[index]['on' + types[i]] = null
      }
    }
  }
}