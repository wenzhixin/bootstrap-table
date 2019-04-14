// eslint-disable-next-line no-void
const UNDEFINED = void 0

export const EMPTY_FN = function () {}

export const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]'

export const isFunction = (obj) => Object.prototype.toString.call(obj) === '[object Function]'

export const isString = (obj) => Object.prototype.toString.call(obj) === '[object String]'

export const isNumeric = (obj) => Object.prototype.toString.call(obj) === '[object Number]'

export const isBoolean = (obj) => Object.prototype.toString.call(obj) === '[object Boolean]'

export const isUndefined = (obj) => obj === UNDEFINED

export const isNull = (obj) => obj === null

export const isEmptyObject = (obj) => isUndefined(obj) || isNull(obj) || obj.length === 0