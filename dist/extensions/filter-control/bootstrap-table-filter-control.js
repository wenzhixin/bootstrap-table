(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = _superPropBase(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
    return t;
  }
  function _superPropGet(t, o, e, r) {
    var p = _get(_getPrototypeOf(t.prototype ), o, e);
    return "function" == typeof p ? function (t) {
      return p.apply(e, t);
    } : p;
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var es_array_concat = {};

  var globalThis_1;
  var hasRequiredGlobalThis;

  function requireGlobalThis () {
  	if (hasRequiredGlobalThis) return globalThis_1;
  	hasRequiredGlobalThis = 1;
  	var check = function (it) {
  	  return it && it.Math === Math && it;
  	};

  	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  	globalThis_1 =
  	  // eslint-disable-next-line es/no-global-this -- safe
  	  check(typeof globalThis == 'object' && globalThis) ||
  	  check(typeof window == 'object' && window) ||
  	  // eslint-disable-next-line no-restricted-globals -- safe
  	  check(typeof self == 'object' && self) ||
  	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  	  check(typeof globalThis_1 == 'object' && globalThis_1) ||
  	  // eslint-disable-next-line no-new-func -- fallback
  	  (function () { return this; })() || Function('return this')();
  	return globalThis_1;
  }

  var objectGetOwnPropertyDescriptor = {};

  var fails;
  var hasRequiredFails;

  function requireFails () {
  	if (hasRequiredFails) return fails;
  	hasRequiredFails = 1;
  	fails = function (exec) {
  	  try {
  	    return !!exec();
  	  } catch (error) {
  	    return true;
  	  }
  	};
  	return fails;
  }

  var descriptors;
  var hasRequiredDescriptors;

  function requireDescriptors () {
  	if (hasRequiredDescriptors) return descriptors;
  	hasRequiredDescriptors = 1;
  	var fails = requireFails();

  	// Detect IE8's incomplete defineProperty implementation
  	descriptors = !fails(function () {
  	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  	});
  	return descriptors;
  }

  var functionBindNative;
  var hasRequiredFunctionBindNative;

  function requireFunctionBindNative () {
  	if (hasRequiredFunctionBindNative) return functionBindNative;
  	hasRequiredFunctionBindNative = 1;
  	var fails = requireFails();

  	functionBindNative = !fails(function () {
  	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  	  var test = (function () { /* empty */ }).bind();
  	  // eslint-disable-next-line no-prototype-builtins -- safe
  	  return typeof test != 'function' || test.hasOwnProperty('prototype');
  	});
  	return functionBindNative;
  }

  var functionCall;
  var hasRequiredFunctionCall;

  function requireFunctionCall () {
  	if (hasRequiredFunctionCall) return functionCall;
  	hasRequiredFunctionCall = 1;
  	var NATIVE_BIND = requireFunctionBindNative();

  	var call = Function.prototype.call;

  	functionCall = NATIVE_BIND ? call.bind(call) : function () {
  	  return call.apply(call, arguments);
  	};
  	return functionCall;
  }

  var objectPropertyIsEnumerable = {};

  var hasRequiredObjectPropertyIsEnumerable;

  function requireObjectPropertyIsEnumerable () {
  	if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
  	hasRequiredObjectPropertyIsEnumerable = 1;
  	var $propertyIsEnumerable = {}.propertyIsEnumerable;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// Nashorn ~ JDK8 bug
  	var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  	// `Object.prototype.propertyIsEnumerable` method implementation
  	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  	  var descriptor = getOwnPropertyDescriptor(this, V);
  	  return !!descriptor && descriptor.enumerable;
  	} : $propertyIsEnumerable;
  	return objectPropertyIsEnumerable;
  }

  var createPropertyDescriptor;
  var hasRequiredCreatePropertyDescriptor;

  function requireCreatePropertyDescriptor () {
  	if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
  	hasRequiredCreatePropertyDescriptor = 1;
  	createPropertyDescriptor = function (bitmap, value) {
  	  return {
  	    enumerable: !(bitmap & 1),
  	    configurable: !(bitmap & 2),
  	    writable: !(bitmap & 4),
  	    value: value
  	  };
  	};
  	return createPropertyDescriptor;
  }

  var functionUncurryThis;
  var hasRequiredFunctionUncurryThis;

  function requireFunctionUncurryThis () {
  	if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
  	hasRequiredFunctionUncurryThis = 1;
  	var NATIVE_BIND = requireFunctionBindNative();

  	var FunctionPrototype = Function.prototype;
  	var call = FunctionPrototype.call;
  	var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

  	functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  	  return function () {
  	    return call.apply(fn, arguments);
  	  };
  	};
  	return functionUncurryThis;
  }

  var classofRaw;
  var hasRequiredClassofRaw;

  function requireClassofRaw () {
  	if (hasRequiredClassofRaw) return classofRaw;
  	hasRequiredClassofRaw = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	var toString = uncurryThis({}.toString);
  	var stringSlice = uncurryThis(''.slice);

  	classofRaw = function (it) {
  	  return stringSlice(toString(it), 8, -1);
  	};
  	return classofRaw;
  }

  var indexedObject;
  var hasRequiredIndexedObject;

  function requireIndexedObject () {
  	if (hasRequiredIndexedObject) return indexedObject;
  	hasRequiredIndexedObject = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var fails = requireFails();
  	var classof = requireClassofRaw();

  	var $Object = Object;
  	var split = uncurryThis(''.split);

  	// fallback for non-array-like ES3 and non-enumerable old V8 strings
  	indexedObject = fails(function () {
  	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  	  // eslint-disable-next-line no-prototype-builtins -- safe
  	  return !$Object('z').propertyIsEnumerable(0);
  	}) ? function (it) {
  	  return classof(it) === 'String' ? split(it, '') : $Object(it);
  	} : $Object;
  	return indexedObject;
  }

  var isNullOrUndefined;
  var hasRequiredIsNullOrUndefined;

  function requireIsNullOrUndefined () {
  	if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
  	hasRequiredIsNullOrUndefined = 1;
  	// we can't use just `it == null` since of `document.all` special case
  	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  	isNullOrUndefined = function (it) {
  	  return it === null || it === undefined;
  	};
  	return isNullOrUndefined;
  }

  var requireObjectCoercible;
  var hasRequiredRequireObjectCoercible;

  function requireRequireObjectCoercible () {
  	if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
  	hasRequiredRequireObjectCoercible = 1;
  	var isNullOrUndefined = requireIsNullOrUndefined();

  	var $TypeError = TypeError;

  	// `RequireObjectCoercible` abstract operation
  	// https://tc39.es/ecma262/#sec-requireobjectcoercible
  	requireObjectCoercible = function (it) {
  	  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  	  return it;
  	};
  	return requireObjectCoercible;
  }

  var toIndexedObject;
  var hasRequiredToIndexedObject;

  function requireToIndexedObject () {
  	if (hasRequiredToIndexedObject) return toIndexedObject;
  	hasRequiredToIndexedObject = 1;
  	// toObject with fallback for non-array-like ES3 strings
  	var IndexedObject = requireIndexedObject();
  	var requireObjectCoercible = requireRequireObjectCoercible();

  	toIndexedObject = function (it) {
  	  return IndexedObject(requireObjectCoercible(it));
  	};
  	return toIndexedObject;
  }

  var isCallable;
  var hasRequiredIsCallable;

  function requireIsCallable () {
  	if (hasRequiredIsCallable) return isCallable;
  	hasRequiredIsCallable = 1;
  	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  	var documentAll = typeof document == 'object' && document.all;

  	// `IsCallable` abstract operation
  	// https://tc39.es/ecma262/#sec-iscallable
  	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  	isCallable = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  	  return typeof argument == 'function' || argument === documentAll;
  	} : function (argument) {
  	  return typeof argument == 'function';
  	};
  	return isCallable;
  }

  var isObject;
  var hasRequiredIsObject;

  function requireIsObject () {
  	if (hasRequiredIsObject) return isObject;
  	hasRequiredIsObject = 1;
  	var isCallable = requireIsCallable();

  	isObject = function (it) {
  	  return typeof it == 'object' ? it !== null : isCallable(it);
  	};
  	return isObject;
  }

  var getBuiltIn;
  var hasRequiredGetBuiltIn;

  function requireGetBuiltIn () {
  	if (hasRequiredGetBuiltIn) return getBuiltIn;
  	hasRequiredGetBuiltIn = 1;
  	var globalThis = requireGlobalThis();
  	var isCallable = requireIsCallable();

  	var aFunction = function (argument) {
  	  return isCallable(argument) ? argument : undefined;
  	};

  	getBuiltIn = function (namespace, method) {
  	  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
  	};
  	return getBuiltIn;
  }

  var objectIsPrototypeOf;
  var hasRequiredObjectIsPrototypeOf;

  function requireObjectIsPrototypeOf () {
  	if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
  	hasRequiredObjectIsPrototypeOf = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
  	return objectIsPrototypeOf;
  }

  var environmentUserAgent;
  var hasRequiredEnvironmentUserAgent;

  function requireEnvironmentUserAgent () {
  	if (hasRequiredEnvironmentUserAgent) return environmentUserAgent;
  	hasRequiredEnvironmentUserAgent = 1;
  	var globalThis = requireGlobalThis();

  	var navigator = globalThis.navigator;
  	var userAgent = navigator && navigator.userAgent;

  	environmentUserAgent = userAgent ? String(userAgent) : '';
  	return environmentUserAgent;
  }

  var environmentV8Version;
  var hasRequiredEnvironmentV8Version;

  function requireEnvironmentV8Version () {
  	if (hasRequiredEnvironmentV8Version) return environmentV8Version;
  	hasRequiredEnvironmentV8Version = 1;
  	var globalThis = requireGlobalThis();
  	var userAgent = requireEnvironmentUserAgent();

  	var process = globalThis.process;
  	var Deno = globalThis.Deno;
  	var versions = process && process.versions || Deno && Deno.version;
  	var v8 = versions && versions.v8;
  	var match, version;

  	if (v8) {
  	  match = v8.split('.');
  	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  	  // but their correct versions are not interesting for us
  	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  	}

  	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  	// so check `userAgent` even if `.v8` exists, but 0
  	if (!version && userAgent) {
  	  match = userAgent.match(/Edge\/(\d+)/);
  	  if (!match || match[1] >= 74) {
  	    match = userAgent.match(/Chrome\/(\d+)/);
  	    if (match) version = +match[1];
  	  }
  	}

  	environmentV8Version = version;
  	return environmentV8Version;
  }

  var symbolConstructorDetection;
  var hasRequiredSymbolConstructorDetection;

  function requireSymbolConstructorDetection () {
  	if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
  	hasRequiredSymbolConstructorDetection = 1;
  	/* eslint-disable es/no-symbol -- required for testing */
  	var V8_VERSION = requireEnvironmentV8Version();
  	var fails = requireFails();
  	var globalThis = requireGlobalThis();

  	var $String = globalThis.String;

  	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  	symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
  	  var symbol = Symbol('symbol detection');
  	  // Chrome 38 Symbol has incorrect toString conversion
  	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  	  // of course, fail.
  	  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
  	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  	});
  	return symbolConstructorDetection;
  }

  var useSymbolAsUid;
  var hasRequiredUseSymbolAsUid;

  function requireUseSymbolAsUid () {
  	if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
  	hasRequiredUseSymbolAsUid = 1;
  	/* eslint-disable es/no-symbol -- required for testing */
  	var NATIVE_SYMBOL = requireSymbolConstructorDetection();

  	useSymbolAsUid = NATIVE_SYMBOL &&
  	  !Symbol.sham &&
  	  typeof Symbol.iterator == 'symbol';
  	return useSymbolAsUid;
  }

  var isSymbol;
  var hasRequiredIsSymbol;

  function requireIsSymbol () {
  	if (hasRequiredIsSymbol) return isSymbol;
  	hasRequiredIsSymbol = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var isCallable = requireIsCallable();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();

  	var $Object = Object;

  	isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  	  return typeof it == 'symbol';
  	} : function (it) {
  	  var $Symbol = getBuiltIn('Symbol');
  	  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  	};
  	return isSymbol;
  }

  var tryToString;
  var hasRequiredTryToString;

  function requireTryToString () {
  	if (hasRequiredTryToString) return tryToString;
  	hasRequiredTryToString = 1;
  	var $String = String;

  	tryToString = function (argument) {
  	  try {
  	    return $String(argument);
  	  } catch (error) {
  	    return 'Object';
  	  }
  	};
  	return tryToString;
  }

  var aCallable;
  var hasRequiredACallable;

  function requireACallable () {
  	if (hasRequiredACallable) return aCallable;
  	hasRequiredACallable = 1;
  	var isCallable = requireIsCallable();
  	var tryToString = requireTryToString();

  	var $TypeError = TypeError;

  	// `Assert: IsCallable(argument) is true`
  	aCallable = function (argument) {
  	  if (isCallable(argument)) return argument;
  	  throw new $TypeError(tryToString(argument) + ' is not a function');
  	};
  	return aCallable;
  }

  var getMethod;
  var hasRequiredGetMethod;

  function requireGetMethod () {
  	if (hasRequiredGetMethod) return getMethod;
  	hasRequiredGetMethod = 1;
  	var aCallable = requireACallable();
  	var isNullOrUndefined = requireIsNullOrUndefined();

  	// `GetMethod` abstract operation
  	// https://tc39.es/ecma262/#sec-getmethod
  	getMethod = function (V, P) {
  	  var func = V[P];
  	  return isNullOrUndefined(func) ? undefined : aCallable(func);
  	};
  	return getMethod;
  }

  var ordinaryToPrimitive;
  var hasRequiredOrdinaryToPrimitive;

  function requireOrdinaryToPrimitive () {
  	if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
  	hasRequiredOrdinaryToPrimitive = 1;
  	var call = requireFunctionCall();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();

  	var $TypeError = TypeError;

  	// `OrdinaryToPrimitive` abstract operation
  	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
  	ordinaryToPrimitive = function (input, pref) {
  	  var fn, val;
  	  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  	  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  	  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  	  throw new $TypeError("Can't convert object to primitive value");
  	};
  	return ordinaryToPrimitive;
  }

  var sharedStore = {exports: {}};

  var isPure;
  var hasRequiredIsPure;

  function requireIsPure () {
  	if (hasRequiredIsPure) return isPure;
  	hasRequiredIsPure = 1;
  	isPure = false;
  	return isPure;
  }

  var defineGlobalProperty;
  var hasRequiredDefineGlobalProperty;

  function requireDefineGlobalProperty () {
  	if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
  	hasRequiredDefineGlobalProperty = 1;
  	var globalThis = requireGlobalThis();

  	// eslint-disable-next-line es/no-object-defineproperty -- safe
  	var defineProperty = Object.defineProperty;

  	defineGlobalProperty = function (key, value) {
  	  try {
  	    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  	  } catch (error) {
  	    globalThis[key] = value;
  	  } return value;
  	};
  	return defineGlobalProperty;
  }

  var hasRequiredSharedStore;

  function requireSharedStore () {
  	if (hasRequiredSharedStore) return sharedStore.exports;
  	hasRequiredSharedStore = 1;
  	var IS_PURE = requireIsPure();
  	var globalThis = requireGlobalThis();
  	var defineGlobalProperty = requireDefineGlobalProperty();

  	var SHARED = '__core-js_shared__';
  	var store = sharedStore.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

  	(store.versions || (store.versions = [])).push({
  	  version: '3.39.0',
  	  mode: IS_PURE ? 'pure' : 'global',
  	  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  	  license: 'https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE',
  	  source: 'https://github.com/zloirock/core-js'
  	});
  	return sharedStore.exports;
  }

  var shared;
  var hasRequiredShared;

  function requireShared () {
  	if (hasRequiredShared) return shared;
  	hasRequiredShared = 1;
  	var store = requireSharedStore();

  	shared = function (key, value) {
  	  return store[key] || (store[key] = value || {});
  	};
  	return shared;
  }

  var toObject;
  var hasRequiredToObject;

  function requireToObject () {
  	if (hasRequiredToObject) return toObject;
  	hasRequiredToObject = 1;
  	var requireObjectCoercible = requireRequireObjectCoercible();

  	var $Object = Object;

  	// `ToObject` abstract operation
  	// https://tc39.es/ecma262/#sec-toobject
  	toObject = function (argument) {
  	  return $Object(requireObjectCoercible(argument));
  	};
  	return toObject;
  }

  var hasOwnProperty_1;
  var hasRequiredHasOwnProperty;

  function requireHasOwnProperty () {
  	if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
  	hasRequiredHasOwnProperty = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var toObject = requireToObject();

  	var hasOwnProperty = uncurryThis({}.hasOwnProperty);

  	// `HasOwnProperty` abstract operation
  	// https://tc39.es/ecma262/#sec-hasownproperty
  	// eslint-disable-next-line es/no-object-hasown -- safe
  	hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  	  return hasOwnProperty(toObject(it), key);
  	};
  	return hasOwnProperty_1;
  }

  var uid;
  var hasRequiredUid;

  function requireUid () {
  	if (hasRequiredUid) return uid;
  	hasRequiredUid = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	var id = 0;
  	var postfix = Math.random();
  	var toString = uncurryThis(1.0.toString);

  	uid = function (key) {
  	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  	};
  	return uid;
  }

  var wellKnownSymbol;
  var hasRequiredWellKnownSymbol;

  function requireWellKnownSymbol () {
  	if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
  	hasRequiredWellKnownSymbol = 1;
  	var globalThis = requireGlobalThis();
  	var shared = requireShared();
  	var hasOwn = requireHasOwnProperty();
  	var uid = requireUid();
  	var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  	var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();

  	var Symbol = globalThis.Symbol;
  	var WellKnownSymbolsStore = shared('wks');
  	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

  	wellKnownSymbol = function (name) {
  	  if (!hasOwn(WellKnownSymbolsStore, name)) {
  	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
  	      ? Symbol[name]
  	      : createWellKnownSymbol('Symbol.' + name);
  	  } return WellKnownSymbolsStore[name];
  	};
  	return wellKnownSymbol;
  }

  var toPrimitive;
  var hasRequiredToPrimitive;

  function requireToPrimitive () {
  	if (hasRequiredToPrimitive) return toPrimitive;
  	hasRequiredToPrimitive = 1;
  	var call = requireFunctionCall();
  	var isObject = requireIsObject();
  	var isSymbol = requireIsSymbol();
  	var getMethod = requireGetMethod();
  	var ordinaryToPrimitive = requireOrdinaryToPrimitive();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var $TypeError = TypeError;
  	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  	// `ToPrimitive` abstract operation
  	// https://tc39.es/ecma262/#sec-toprimitive
  	toPrimitive = function (input, pref) {
  	  if (!isObject(input) || isSymbol(input)) return input;
  	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  	  var result;
  	  if (exoticToPrim) {
  	    if (pref === undefined) pref = 'default';
  	    result = call(exoticToPrim, input, pref);
  	    if (!isObject(result) || isSymbol(result)) return result;
  	    throw new $TypeError("Can't convert object to primitive value");
  	  }
  	  if (pref === undefined) pref = 'number';
  	  return ordinaryToPrimitive(input, pref);
  	};
  	return toPrimitive;
  }

  var toPropertyKey;
  var hasRequiredToPropertyKey;

  function requireToPropertyKey () {
  	if (hasRequiredToPropertyKey) return toPropertyKey;
  	hasRequiredToPropertyKey = 1;
  	var toPrimitive = requireToPrimitive();
  	var isSymbol = requireIsSymbol();

  	// `ToPropertyKey` abstract operation
  	// https://tc39.es/ecma262/#sec-topropertykey
  	toPropertyKey = function (argument) {
  	  var key = toPrimitive(argument, 'string');
  	  return isSymbol(key) ? key : key + '';
  	};
  	return toPropertyKey;
  }

  var documentCreateElement;
  var hasRequiredDocumentCreateElement;

  function requireDocumentCreateElement () {
  	if (hasRequiredDocumentCreateElement) return documentCreateElement;
  	hasRequiredDocumentCreateElement = 1;
  	var globalThis = requireGlobalThis();
  	var isObject = requireIsObject();

  	var document = globalThis.document;
  	// typeof document.createElement is 'object' in old IE
  	var EXISTS = isObject(document) && isObject(document.createElement);

  	documentCreateElement = function (it) {
  	  return EXISTS ? document.createElement(it) : {};
  	};
  	return documentCreateElement;
  }

  var ie8DomDefine;
  var hasRequiredIe8DomDefine;

  function requireIe8DomDefine () {
  	if (hasRequiredIe8DomDefine) return ie8DomDefine;
  	hasRequiredIe8DomDefine = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var fails = requireFails();
  	var createElement = requireDocumentCreateElement();

  	// Thanks to IE8 for its funny defineProperty
  	ie8DomDefine = !DESCRIPTORS && !fails(function () {
  	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	  return Object.defineProperty(createElement('div'), 'a', {
  	    get: function () { return 7; }
  	  }).a !== 7;
  	});
  	return ie8DomDefine;
  }

  var hasRequiredObjectGetOwnPropertyDescriptor;

  function requireObjectGetOwnPropertyDescriptor () {
  	if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
  	hasRequiredObjectGetOwnPropertyDescriptor = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var call = requireFunctionCall();
  	var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	var toIndexedObject = requireToIndexedObject();
  	var toPropertyKey = requireToPropertyKey();
  	var hasOwn = requireHasOwnProperty();
  	var IE8_DOM_DEFINE = requireIe8DomDefine();

  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// `Object.getOwnPropertyDescriptor` method
  	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  	objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  	  O = toIndexedObject(O);
  	  P = toPropertyKey(P);
  	  if (IE8_DOM_DEFINE) try {
  	    return $getOwnPropertyDescriptor(O, P);
  	  } catch (error) { /* empty */ }
  	  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  	};
  	return objectGetOwnPropertyDescriptor;
  }

  var objectDefineProperty = {};

  var v8PrototypeDefineBug;
  var hasRequiredV8PrototypeDefineBug;

  function requireV8PrototypeDefineBug () {
  	if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
  	hasRequiredV8PrototypeDefineBug = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var fails = requireFails();

  	// V8 ~ Chrome 36-
  	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
  	v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
  	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
  	    value: 42,
  	    writable: false
  	  }).prototype !== 42;
  	});
  	return v8PrototypeDefineBug;
  }

  var anObject;
  var hasRequiredAnObject;

  function requireAnObject () {
  	if (hasRequiredAnObject) return anObject;
  	hasRequiredAnObject = 1;
  	var isObject = requireIsObject();

  	var $String = String;
  	var $TypeError = TypeError;

  	// `Assert: Type(argument) is Object`
  	anObject = function (argument) {
  	  if (isObject(argument)) return argument;
  	  throw new $TypeError($String(argument) + ' is not an object');
  	};
  	return anObject;
  }

  var hasRequiredObjectDefineProperty;

  function requireObjectDefineProperty () {
  	if (hasRequiredObjectDefineProperty) return objectDefineProperty;
  	hasRequiredObjectDefineProperty = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var IE8_DOM_DEFINE = requireIe8DomDefine();
  	var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  	var anObject = requireAnObject();
  	var toPropertyKey = requireToPropertyKey();

  	var $TypeError = TypeError;
  	// eslint-disable-next-line es/no-object-defineproperty -- safe
  	var $defineProperty = Object.defineProperty;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  	var ENUMERABLE = 'enumerable';
  	var CONFIGURABLE = 'configurable';
  	var WRITABLE = 'writable';

  	// `Object.defineProperty` method
  	// https://tc39.es/ecma262/#sec-object.defineproperty
  	objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  	  anObject(O);
  	  P = toPropertyKey(P);
  	  anObject(Attributes);
  	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
  	    var current = $getOwnPropertyDescriptor(O, P);
  	    if (current && current[WRITABLE]) {
  	      O[P] = Attributes.value;
  	      Attributes = {
  	        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
  	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
  	        writable: false
  	      };
  	    }
  	  } return $defineProperty(O, P, Attributes);
  	} : $defineProperty : function defineProperty(O, P, Attributes) {
  	  anObject(O);
  	  P = toPropertyKey(P);
  	  anObject(Attributes);
  	  if (IE8_DOM_DEFINE) try {
  	    return $defineProperty(O, P, Attributes);
  	  } catch (error) { /* empty */ }
  	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  	  if ('value' in Attributes) O[P] = Attributes.value;
  	  return O;
  	};
  	return objectDefineProperty;
  }

  var createNonEnumerableProperty;
  var hasRequiredCreateNonEnumerableProperty;

  function requireCreateNonEnumerableProperty () {
  	if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
  	hasRequiredCreateNonEnumerableProperty = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var definePropertyModule = requireObjectDefineProperty();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();

  	createNonEnumerableProperty = DESCRIPTORS ? function (object, key, value) {
  	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  	} : function (object, key, value) {
  	  object[key] = value;
  	  return object;
  	};
  	return createNonEnumerableProperty;
  }

  var makeBuiltIn = {exports: {}};

  var functionName;
  var hasRequiredFunctionName;

  function requireFunctionName () {
  	if (hasRequiredFunctionName) return functionName;
  	hasRequiredFunctionName = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var hasOwn = requireHasOwnProperty();

  	var FunctionPrototype = Function.prototype;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

  	var EXISTS = hasOwn(FunctionPrototype, 'name');
  	// additional protection from minified / mangled / dropped function names
  	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  	var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

  	functionName = {
  	  EXISTS: EXISTS,
  	  PROPER: PROPER,
  	  CONFIGURABLE: CONFIGURABLE
  	};
  	return functionName;
  }

  var inspectSource;
  var hasRequiredInspectSource;

  function requireInspectSource () {
  	if (hasRequiredInspectSource) return inspectSource;
  	hasRequiredInspectSource = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var isCallable = requireIsCallable();
  	var store = requireSharedStore();

  	var functionToString = uncurryThis(Function.toString);

  	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  	if (!isCallable(store.inspectSource)) {
  	  store.inspectSource = function (it) {
  	    return functionToString(it);
  	  };
  	}

  	inspectSource = store.inspectSource;
  	return inspectSource;
  }

  var weakMapBasicDetection;
  var hasRequiredWeakMapBasicDetection;

  function requireWeakMapBasicDetection () {
  	if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
  	hasRequiredWeakMapBasicDetection = 1;
  	var globalThis = requireGlobalThis();
  	var isCallable = requireIsCallable();

  	var WeakMap = globalThis.WeakMap;

  	weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  	return weakMapBasicDetection;
  }

  var sharedKey;
  var hasRequiredSharedKey;

  function requireSharedKey () {
  	if (hasRequiredSharedKey) return sharedKey;
  	hasRequiredSharedKey = 1;
  	var shared = requireShared();
  	var uid = requireUid();

  	var keys = shared('keys');

  	sharedKey = function (key) {
  	  return keys[key] || (keys[key] = uid(key));
  	};
  	return sharedKey;
  }

  var hiddenKeys;
  var hasRequiredHiddenKeys;

  function requireHiddenKeys () {
  	if (hasRequiredHiddenKeys) return hiddenKeys;
  	hasRequiredHiddenKeys = 1;
  	hiddenKeys = {};
  	return hiddenKeys;
  }

  var internalState;
  var hasRequiredInternalState;

  function requireInternalState () {
  	if (hasRequiredInternalState) return internalState;
  	hasRequiredInternalState = 1;
  	var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
  	var globalThis = requireGlobalThis();
  	var isObject = requireIsObject();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var hasOwn = requireHasOwnProperty();
  	var shared = requireSharedStore();
  	var sharedKey = requireSharedKey();
  	var hiddenKeys = requireHiddenKeys();

  	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  	var TypeError = globalThis.TypeError;
  	var WeakMap = globalThis.WeakMap;
  	var set, get, has;

  	var enforce = function (it) {
  	  return has(it) ? get(it) : set(it, {});
  	};

  	var getterFor = function (TYPE) {
  	  return function (it) {
  	    var state;
  	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
  	      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
  	    } return state;
  	  };
  	};

  	if (NATIVE_WEAK_MAP || shared.state) {
  	  var store = shared.state || (shared.state = new WeakMap());
  	  /* eslint-disable no-self-assign -- prototype methods protection */
  	  store.get = store.get;
  	  store.has = store.has;
  	  store.set = store.set;
  	  /* eslint-enable no-self-assign -- prototype methods protection */
  	  set = function (it, metadata) {
  	    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
  	    metadata.facade = it;
  	    store.set(it, metadata);
  	    return metadata;
  	  };
  	  get = function (it) {
  	    return store.get(it) || {};
  	  };
  	  has = function (it) {
  	    return store.has(it);
  	  };
  	} else {
  	  var STATE = sharedKey('state');
  	  hiddenKeys[STATE] = true;
  	  set = function (it, metadata) {
  	    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
  	    metadata.facade = it;
  	    createNonEnumerableProperty(it, STATE, metadata);
  	    return metadata;
  	  };
  	  get = function (it) {
  	    return hasOwn(it, STATE) ? it[STATE] : {};
  	  };
  	  has = function (it) {
  	    return hasOwn(it, STATE);
  	  };
  	}

  	internalState = {
  	  set: set,
  	  get: get,
  	  has: has,
  	  enforce: enforce,
  	  getterFor: getterFor
  	};
  	return internalState;
  }

  var hasRequiredMakeBuiltIn;

  function requireMakeBuiltIn () {
  	if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
  	hasRequiredMakeBuiltIn = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var fails = requireFails();
  	var isCallable = requireIsCallable();
  	var hasOwn = requireHasOwnProperty();
  	var DESCRIPTORS = requireDescriptors();
  	var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
  	var inspectSource = requireInspectSource();
  	var InternalStateModule = requireInternalState();

  	var enforceInternalState = InternalStateModule.enforce;
  	var getInternalState = InternalStateModule.get;
  	var $String = String;
  	// eslint-disable-next-line es/no-object-defineproperty -- safe
  	var defineProperty = Object.defineProperty;
  	var stringSlice = uncurryThis(''.slice);
  	var replace = uncurryThis(''.replace);
  	var join = uncurryThis([].join);

  	var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  	  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  	});

  	var TEMPLATE = String(String).split('String');

  	var makeBuiltIn$1 = makeBuiltIn.exports = function (value, name, options) {
  	  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
  	    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  	  }
  	  if (options && options.getter) name = 'get ' + name;
  	  if (options && options.setter) name = 'set ' + name;
  	  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
  	    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
  	    else value.name = name;
  	  }
  	  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
  	    defineProperty(value, 'length', { value: options.arity });
  	  }
  	  try {
  	    if (options && hasOwn(options, 'constructor') && options.constructor) {
  	      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
  	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
  	    } else if (value.prototype) value.prototype = undefined;
  	  } catch (error) { /* empty */ }
  	  var state = enforceInternalState(value);
  	  if (!hasOwn(state, 'source')) {
  	    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  	  } return value;
  	};

  	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  	// eslint-disable-next-line no-extend-native -- required
  	Function.prototype.toString = makeBuiltIn$1(function toString() {
  	  return isCallable(this) && getInternalState(this).source || inspectSource(this);
  	}, 'toString');
  	return makeBuiltIn.exports;
  }

  var defineBuiltIn;
  var hasRequiredDefineBuiltIn;

  function requireDefineBuiltIn () {
  	if (hasRequiredDefineBuiltIn) return defineBuiltIn;
  	hasRequiredDefineBuiltIn = 1;
  	var isCallable = requireIsCallable();
  	var definePropertyModule = requireObjectDefineProperty();
  	var makeBuiltIn = requireMakeBuiltIn();
  	var defineGlobalProperty = requireDefineGlobalProperty();

  	defineBuiltIn = function (O, key, value, options) {
  	  if (!options) options = {};
  	  var simple = options.enumerable;
  	  var name = options.name !== undefined ? options.name : key;
  	  if (isCallable(value)) makeBuiltIn(value, name, options);
  	  if (options.global) {
  	    if (simple) O[key] = value;
  	    else defineGlobalProperty(key, value);
  	  } else {
  	    try {
  	      if (!options.unsafe) delete O[key];
  	      else if (O[key]) simple = true;
  	    } catch (error) { /* empty */ }
  	    if (simple) O[key] = value;
  	    else definePropertyModule.f(O, key, {
  	      value: value,
  	      enumerable: false,
  	      configurable: !options.nonConfigurable,
  	      writable: !options.nonWritable
  	    });
  	  } return O;
  	};
  	return defineBuiltIn;
  }

  var objectGetOwnPropertyNames = {};

  var mathTrunc;
  var hasRequiredMathTrunc;

  function requireMathTrunc () {
  	if (hasRequiredMathTrunc) return mathTrunc;
  	hasRequiredMathTrunc = 1;
  	var ceil = Math.ceil;
  	var floor = Math.floor;

  	// `Math.trunc` method
  	// https://tc39.es/ecma262/#sec-math.trunc
  	// eslint-disable-next-line es/no-math-trunc -- safe
  	mathTrunc = Math.trunc || function trunc(x) {
  	  var n = +x;
  	  return (n > 0 ? floor : ceil)(n);
  	};
  	return mathTrunc;
  }

  var toIntegerOrInfinity;
  var hasRequiredToIntegerOrInfinity;

  function requireToIntegerOrInfinity () {
  	if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
  	hasRequiredToIntegerOrInfinity = 1;
  	var trunc = requireMathTrunc();

  	// `ToIntegerOrInfinity` abstract operation
  	// https://tc39.es/ecma262/#sec-tointegerorinfinity
  	toIntegerOrInfinity = function (argument) {
  	  var number = +argument;
  	  // eslint-disable-next-line no-self-compare -- NaN check
  	  return number !== number || number === 0 ? 0 : trunc(number);
  	};
  	return toIntegerOrInfinity;
  }

  var toAbsoluteIndex;
  var hasRequiredToAbsoluteIndex;

  function requireToAbsoluteIndex () {
  	if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
  	hasRequiredToAbsoluteIndex = 1;
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();

  	var max = Math.max;
  	var min = Math.min;

  	// Helper for a popular repeating case of the spec:
  	// Let integer be ? ToInteger(index).
  	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  	toAbsoluteIndex = function (index, length) {
  	  var integer = toIntegerOrInfinity(index);
  	  return integer < 0 ? max(integer + length, 0) : min(integer, length);
  	};
  	return toAbsoluteIndex;
  }

  var toLength;
  var hasRequiredToLength;

  function requireToLength () {
  	if (hasRequiredToLength) return toLength;
  	hasRequiredToLength = 1;
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();

  	var min = Math.min;

  	// `ToLength` abstract operation
  	// https://tc39.es/ecma262/#sec-tolength
  	toLength = function (argument) {
  	  var len = toIntegerOrInfinity(argument);
  	  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  	};
  	return toLength;
  }

  var lengthOfArrayLike;
  var hasRequiredLengthOfArrayLike;

  function requireLengthOfArrayLike () {
  	if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
  	hasRequiredLengthOfArrayLike = 1;
  	var toLength = requireToLength();

  	// `LengthOfArrayLike` abstract operation
  	// https://tc39.es/ecma262/#sec-lengthofarraylike
  	lengthOfArrayLike = function (obj) {
  	  return toLength(obj.length);
  	};
  	return lengthOfArrayLike;
  }

  var arrayIncludes;
  var hasRequiredArrayIncludes;

  function requireArrayIncludes () {
  	if (hasRequiredArrayIncludes) return arrayIncludes;
  	hasRequiredArrayIncludes = 1;
  	var toIndexedObject = requireToIndexedObject();
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var lengthOfArrayLike = requireLengthOfArrayLike();

  	// `Array.prototype.{ indexOf, includes }` methods implementation
  	var createMethod = function (IS_INCLUDES) {
  	  return function ($this, el, fromIndex) {
  	    var O = toIndexedObject($this);
  	    var length = lengthOfArrayLike(O);
  	    if (length === 0) return !IS_INCLUDES && -1;
  	    var index = toAbsoluteIndex(fromIndex, length);
  	    var value;
  	    // Array#includes uses SameValueZero equality algorithm
  	    // eslint-disable-next-line no-self-compare -- NaN check
  	    if (IS_INCLUDES && el !== el) while (length > index) {
  	      value = O[index++];
  	      // eslint-disable-next-line no-self-compare -- NaN check
  	      if (value !== value) return true;
  	    // Array#indexOf ignores holes, Array#includes - not
  	    } else for (;length > index; index++) {
  	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
  	    } return !IS_INCLUDES && -1;
  	  };
  	};

  	arrayIncludes = {
  	  // `Array.prototype.includes` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.includes
  	  includes: createMethod(true),
  	  // `Array.prototype.indexOf` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  	  indexOf: createMethod(false)
  	};
  	return arrayIncludes;
  }

  var objectKeysInternal;
  var hasRequiredObjectKeysInternal;

  function requireObjectKeysInternal () {
  	if (hasRequiredObjectKeysInternal) return objectKeysInternal;
  	hasRequiredObjectKeysInternal = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var hasOwn = requireHasOwnProperty();
  	var toIndexedObject = requireToIndexedObject();
  	var indexOf = requireArrayIncludes().indexOf;
  	var hiddenKeys = requireHiddenKeys();

  	var push = uncurryThis([].push);

  	objectKeysInternal = function (object, names) {
  	  var O = toIndexedObject(object);
  	  var i = 0;
  	  var result = [];
  	  var key;
  	  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  	  // Don't enum bug & hidden keys
  	  while (names.length > i) if (hasOwn(O, key = names[i++])) {
  	    ~indexOf(result, key) || push(result, key);
  	  }
  	  return result;
  	};
  	return objectKeysInternal;
  }

  var enumBugKeys;
  var hasRequiredEnumBugKeys;

  function requireEnumBugKeys () {
  	if (hasRequiredEnumBugKeys) return enumBugKeys;
  	hasRequiredEnumBugKeys = 1;
  	// IE8- don't enum bug keys
  	enumBugKeys = [
  	  'constructor',
  	  'hasOwnProperty',
  	  'isPrototypeOf',
  	  'propertyIsEnumerable',
  	  'toLocaleString',
  	  'toString',
  	  'valueOf'
  	];
  	return enumBugKeys;
  }

  var hasRequiredObjectGetOwnPropertyNames;

  function requireObjectGetOwnPropertyNames () {
  	if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
  	hasRequiredObjectGetOwnPropertyNames = 1;
  	var internalObjectKeys = requireObjectKeysInternal();
  	var enumBugKeys = requireEnumBugKeys();

  	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  	// `Object.getOwnPropertyNames` method
  	// https://tc39.es/ecma262/#sec-object.getownpropertynames
  	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
  	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  	  return internalObjectKeys(O, hiddenKeys);
  	};
  	return objectGetOwnPropertyNames;
  }

  var objectGetOwnPropertySymbols = {};

  var hasRequiredObjectGetOwnPropertySymbols;

  function requireObjectGetOwnPropertySymbols () {
  	if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
  	hasRequiredObjectGetOwnPropertySymbols = 1;
  	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  	return objectGetOwnPropertySymbols;
  }

  var ownKeys;
  var hasRequiredOwnKeys;

  function requireOwnKeys () {
  	if (hasRequiredOwnKeys) return ownKeys;
  	hasRequiredOwnKeys = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var uncurryThis = requireFunctionUncurryThis();
  	var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
  	var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  	var anObject = requireAnObject();

  	var concat = uncurryThis([].concat);

  	// all object keys, includes non-enumerable and symbols
  	ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  	  var keys = getOwnPropertyNamesModule.f(anObject(it));
  	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  	};
  	return ownKeys;
  }

  var copyConstructorProperties;
  var hasRequiredCopyConstructorProperties;

  function requireCopyConstructorProperties () {
  	if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
  	hasRequiredCopyConstructorProperties = 1;
  	var hasOwn = requireHasOwnProperty();
  	var ownKeys = requireOwnKeys();
  	var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
  	var definePropertyModule = requireObjectDefineProperty();

  	copyConstructorProperties = function (target, source, exceptions) {
  	  var keys = ownKeys(source);
  	  var defineProperty = definePropertyModule.f;
  	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  	  for (var i = 0; i < keys.length; i++) {
  	    var key = keys[i];
  	    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
  	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  	    }
  	  }
  	};
  	return copyConstructorProperties;
  }

  var isForced_1;
  var hasRequiredIsForced;

  function requireIsForced () {
  	if (hasRequiredIsForced) return isForced_1;
  	hasRequiredIsForced = 1;
  	var fails = requireFails();
  	var isCallable = requireIsCallable();

  	var replacement = /#|\.prototype\./;

  	var isForced = function (feature, detection) {
  	  var value = data[normalize(feature)];
  	  return value === POLYFILL ? true
  	    : value === NATIVE ? false
  	    : isCallable(detection) ? fails(detection)
  	    : !!detection;
  	};

  	var normalize = isForced.normalize = function (string) {
  	  return String(string).replace(replacement, '.').toLowerCase();
  	};

  	var data = isForced.data = {};
  	var NATIVE = isForced.NATIVE = 'N';
  	var POLYFILL = isForced.POLYFILL = 'P';

  	isForced_1 = isForced;
  	return isForced_1;
  }

  var _export;
  var hasRequired_export;

  function require_export () {
  	if (hasRequired_export) return _export;
  	hasRequired_export = 1;
  	var globalThis = requireGlobalThis();
  	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var defineGlobalProperty = requireDefineGlobalProperty();
  	var copyConstructorProperties = requireCopyConstructorProperties();
  	var isForced = requireIsForced();

  	/*
  	  options.target         - name of the target object
  	  options.global         - target is the global object
  	  options.stat           - export as static methods of target
  	  options.proto          - export as prototype methods of target
  	  options.real           - real prototype method for the `pure` version
  	  options.forced         - export even if the native feature is available
  	  options.bind           - bind methods to the target, required for the `pure` version
  	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  	  options.sham           - add a flag to not completely full polyfills
  	  options.enumerable     - export as enumerable property
  	  options.dontCallGetSet - prevent calling a getter on target
  	  options.name           - the .name of the function if it does not match the key
  	*/
  	_export = function (options, source) {
  	  var TARGET = options.target;
  	  var GLOBAL = options.global;
  	  var STATIC = options.stat;
  	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  	  if (GLOBAL) {
  	    target = globalThis;
  	  } else if (STATIC) {
  	    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  	  } else {
  	    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  	  }
  	  if (target) for (key in source) {
  	    sourceProperty = source[key];
  	    if (options.dontCallGetSet) {
  	      descriptor = getOwnPropertyDescriptor(target, key);
  	      targetProperty = descriptor && descriptor.value;
  	    } else targetProperty = target[key];
  	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
  	    // contained in target
  	    if (!FORCED && targetProperty !== undefined) {
  	      if (typeof sourceProperty == typeof targetProperty) continue;
  	      copyConstructorProperties(sourceProperty, targetProperty);
  	    }
  	    // add a flag to not completely full polyfills
  	    if (options.sham || (targetProperty && targetProperty.sham)) {
  	      createNonEnumerableProperty(sourceProperty, 'sham', true);
  	    }
  	    defineBuiltIn(target, key, sourceProperty, options);
  	  }
  	};
  	return _export;
  }

  var isArray;
  var hasRequiredIsArray;

  function requireIsArray () {
  	if (hasRequiredIsArray) return isArray;
  	hasRequiredIsArray = 1;
  	var classof = requireClassofRaw();

  	// `IsArray` abstract operation
  	// https://tc39.es/ecma262/#sec-isarray
  	// eslint-disable-next-line es/no-array-isarray -- safe
  	isArray = Array.isArray || function isArray(argument) {
  	  return classof(argument) === 'Array';
  	};
  	return isArray;
  }

  var doesNotExceedSafeInteger;
  var hasRequiredDoesNotExceedSafeInteger;

  function requireDoesNotExceedSafeInteger () {
  	if (hasRequiredDoesNotExceedSafeInteger) return doesNotExceedSafeInteger;
  	hasRequiredDoesNotExceedSafeInteger = 1;
  	var $TypeError = TypeError;
  	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  	doesNotExceedSafeInteger = function (it) {
  	  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  	  return it;
  	};
  	return doesNotExceedSafeInteger;
  }

  var createProperty;
  var hasRequiredCreateProperty;

  function requireCreateProperty () {
  	if (hasRequiredCreateProperty) return createProperty;
  	hasRequiredCreateProperty = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var definePropertyModule = requireObjectDefineProperty();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();

  	createProperty = function (object, key, value) {
  	  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  	  else object[key] = value;
  	};
  	return createProperty;
  }

  var toStringTagSupport;
  var hasRequiredToStringTagSupport;

  function requireToStringTagSupport () {
  	if (hasRequiredToStringTagSupport) return toStringTagSupport;
  	hasRequiredToStringTagSupport = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  	var test = {};

  	test[TO_STRING_TAG] = 'z';

  	toStringTagSupport = String(test) === '[object z]';
  	return toStringTagSupport;
  }

  var classof;
  var hasRequiredClassof;

  function requireClassof () {
  	if (hasRequiredClassof) return classof;
  	hasRequiredClassof = 1;
  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var isCallable = requireIsCallable();
  	var classofRaw = requireClassofRaw();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  	var $Object = Object;

  	// ES3 wrong here
  	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

  	// fallback for IE11 Script Access Denied error
  	var tryGet = function (it, key) {
  	  try {
  	    return it[key];
  	  } catch (error) { /* empty */ }
  	};

  	// getting tag from ES6+ `Object.prototype.toString`
  	classof = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  	  var O, tag, result;
  	  return it === undefined ? 'Undefined' : it === null ? 'Null'
  	    // @@toStringTag case
  	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
  	    // builtinTag case
  	    : CORRECT_ARGUMENTS ? classofRaw(O)
  	    // ES3 arguments fallback
  	    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  	};
  	return classof;
  }

  var isConstructor;
  var hasRequiredIsConstructor;

  function requireIsConstructor () {
  	if (hasRequiredIsConstructor) return isConstructor;
  	hasRequiredIsConstructor = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var fails = requireFails();
  	var isCallable = requireIsCallable();
  	var classof = requireClassof();
  	var getBuiltIn = requireGetBuiltIn();
  	var inspectSource = requireInspectSource();

  	var noop = function () { /* empty */ };
  	var construct = getBuiltIn('Reflect', 'construct');
  	var constructorRegExp = /^\s*(?:class|function)\b/;
  	var exec = uncurryThis(constructorRegExp.exec);
  	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

  	var isConstructorModern = function isConstructor(argument) {
  	  if (!isCallable(argument)) return false;
  	  try {
  	    construct(noop, [], argument);
  	    return true;
  	  } catch (error) {
  	    return false;
  	  }
  	};

  	var isConstructorLegacy = function isConstructor(argument) {
  	  if (!isCallable(argument)) return false;
  	  switch (classof(argument)) {
  	    case 'AsyncFunction':
  	    case 'GeneratorFunction':
  	    case 'AsyncGeneratorFunction': return false;
  	  }
  	  try {
  	    // we can't check .prototype since constructors produced by .bind haven't it
  	    // `Function#toString` throws on some built-it function in some legacy engines
  	    // (for example, `DOMQuad` and similar in FF41-)
  	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  	  } catch (error) {
  	    return true;
  	  }
  	};

  	isConstructorLegacy.sham = true;

  	// `IsConstructor` abstract operation
  	// https://tc39.es/ecma262/#sec-isconstructor
  	isConstructor = !construct || fails(function () {
  	  var called;
  	  return isConstructorModern(isConstructorModern.call)
  	    || !isConstructorModern(Object)
  	    || !isConstructorModern(function () { called = true; })
  	    || called;
  	}) ? isConstructorLegacy : isConstructorModern;
  	return isConstructor;
  }

  var arraySpeciesConstructor;
  var hasRequiredArraySpeciesConstructor;

  function requireArraySpeciesConstructor () {
  	if (hasRequiredArraySpeciesConstructor) return arraySpeciesConstructor;
  	hasRequiredArraySpeciesConstructor = 1;
  	var isArray = requireIsArray();
  	var isConstructor = requireIsConstructor();
  	var isObject = requireIsObject();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var SPECIES = wellKnownSymbol('species');
  	var $Array = Array;

  	// a part of `ArraySpeciesCreate` abstract operation
  	// https://tc39.es/ecma262/#sec-arrayspeciescreate
  	arraySpeciesConstructor = function (originalArray) {
  	  var C;
  	  if (isArray(originalArray)) {
  	    C = originalArray.constructor;
  	    // cross-realm fallback
  	    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
  	    else if (isObject(C)) {
  	      C = C[SPECIES];
  	      if (C === null) C = undefined;
  	    }
  	  } return C === undefined ? $Array : C;
  	};
  	return arraySpeciesConstructor;
  }

  var arraySpeciesCreate;
  var hasRequiredArraySpeciesCreate;

  function requireArraySpeciesCreate () {
  	if (hasRequiredArraySpeciesCreate) return arraySpeciesCreate;
  	hasRequiredArraySpeciesCreate = 1;
  	var arraySpeciesConstructor = requireArraySpeciesConstructor();

  	// `ArraySpeciesCreate` abstract operation
  	// https://tc39.es/ecma262/#sec-arrayspeciescreate
  	arraySpeciesCreate = function (originalArray, length) {
  	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  	};
  	return arraySpeciesCreate;
  }

  var arrayMethodHasSpeciesSupport;
  var hasRequiredArrayMethodHasSpeciesSupport;

  function requireArrayMethodHasSpeciesSupport () {
  	if (hasRequiredArrayMethodHasSpeciesSupport) return arrayMethodHasSpeciesSupport;
  	hasRequiredArrayMethodHasSpeciesSupport = 1;
  	var fails = requireFails();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var V8_VERSION = requireEnvironmentV8Version();

  	var SPECIES = wellKnownSymbol('species');

  	arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  	  // We can't use this feature detection in V8 since it causes
  	  // deoptimization and serious performance degradation
  	  // https://github.com/zloirock/core-js/issues/677
  	  return V8_VERSION >= 51 || !fails(function () {
  	    var array = [];
  	    var constructor = array.constructor = {};
  	    constructor[SPECIES] = function () {
  	      return { foo: 1 };
  	    };
  	    return array[METHOD_NAME](Boolean).foo !== 1;
  	  });
  	};
  	return arrayMethodHasSpeciesSupport;
  }

  var hasRequiredEs_array_concat;

  function requireEs_array_concat () {
  	if (hasRequiredEs_array_concat) return es_array_concat;
  	hasRequiredEs_array_concat = 1;
  	var $ = require_export();
  	var fails = requireFails();
  	var isArray = requireIsArray();
  	var isObject = requireIsObject();
  	var toObject = requireToObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();
  	var createProperty = requireCreateProperty();
  	var arraySpeciesCreate = requireArraySpeciesCreate();
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var V8_VERSION = requireEnvironmentV8Version();

  	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

  	// We can't use this feature detection in V8 since it causes
  	// deoptimization and serious performance degradation
  	// https://github.com/zloirock/core-js/issues/679
  	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  	  var array = [];
  	  array[IS_CONCAT_SPREADABLE] = false;
  	  return array.concat()[0] !== array;
  	});

  	var isConcatSpreadable = function (O) {
  	  if (!isObject(O)) return false;
  	  var spreadable = O[IS_CONCAT_SPREADABLE];
  	  return spreadable !== undefined ? !!spreadable : isArray(O);
  	};

  	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

  	// `Array.prototype.concat` method
  	// https://tc39.es/ecma262/#sec-array.prototype.concat
  	// with adding support of @@isConcatSpreadable and @@species
  	$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  	  // eslint-disable-next-line no-unused-vars -- required for `.length`
  	  concat: function concat(arg) {
  	    var O = toObject(this);
  	    var A = arraySpeciesCreate(O, 0);
  	    var n = 0;
  	    var i, k, length, len, E;
  	    for (i = -1, length = arguments.length; i < length; i++) {
  	      E = i === -1 ? O : arguments[i];
  	      if (isConcatSpreadable(E)) {
  	        len = lengthOfArrayLike(E);
  	        doesNotExceedSafeInteger(n + len);
  	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
  	      } else {
  	        doesNotExceedSafeInteger(n + 1);
  	        createProperty(A, n++, E);
  	      }
  	    }
  	    A.length = n;
  	    return A;
  	  }
  	});
  	return es_array_concat;
  }

  requireEs_array_concat();

  var es_array_filter = {};

  var functionUncurryThisClause;
  var hasRequiredFunctionUncurryThisClause;

  function requireFunctionUncurryThisClause () {
  	if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
  	hasRequiredFunctionUncurryThisClause = 1;
  	var classofRaw = requireClassofRaw();
  	var uncurryThis = requireFunctionUncurryThis();

  	functionUncurryThisClause = function (fn) {
  	  // Nashorn bug:
  	  //   https://github.com/zloirock/core-js/issues/1128
  	  //   https://github.com/zloirock/core-js/issues/1130
  	  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
  	};
  	return functionUncurryThisClause;
  }

  var functionBindContext;
  var hasRequiredFunctionBindContext;

  function requireFunctionBindContext () {
  	if (hasRequiredFunctionBindContext) return functionBindContext;
  	hasRequiredFunctionBindContext = 1;
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var aCallable = requireACallable();
  	var NATIVE_BIND = requireFunctionBindNative();

  	var bind = uncurryThis(uncurryThis.bind);

  	// optional / simple context binding
  	functionBindContext = function (fn, that) {
  	  aCallable(fn);
  	  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
  	    return fn.apply(that, arguments);
  	  };
  	};
  	return functionBindContext;
  }

  var arrayIteration;
  var hasRequiredArrayIteration;

  function requireArrayIteration () {
  	if (hasRequiredArrayIteration) return arrayIteration;
  	hasRequiredArrayIteration = 1;
  	var bind = requireFunctionBindContext();
  	var uncurryThis = requireFunctionUncurryThis();
  	var IndexedObject = requireIndexedObject();
  	var toObject = requireToObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var arraySpeciesCreate = requireArraySpeciesCreate();

  	var push = uncurryThis([].push);

  	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  	var createMethod = function (TYPE) {
  	  var IS_MAP = TYPE === 1;
  	  var IS_FILTER = TYPE === 2;
  	  var IS_SOME = TYPE === 3;
  	  var IS_EVERY = TYPE === 4;
  	  var IS_FIND_INDEX = TYPE === 6;
  	  var IS_FILTER_REJECT = TYPE === 7;
  	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  	  return function ($this, callbackfn, that, specificCreate) {
  	    var O = toObject($this);
  	    var self = IndexedObject(O);
  	    var length = lengthOfArrayLike(self);
  	    var boundFunction = bind(callbackfn, that);
  	    var index = 0;
  	    var create = specificCreate || arraySpeciesCreate;
  	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
  	    var value, result;
  	    for (;length > index; index++) if (NO_HOLES || index in self) {
  	      value = self[index];
  	      result = boundFunction(value, index, O);
  	      if (TYPE) {
  	        if (IS_MAP) target[index] = result; // map
  	        else if (result) switch (TYPE) {
  	          case 3: return true;              // some
  	          case 5: return value;             // find
  	          case 6: return index;             // findIndex
  	          case 2: push(target, value);      // filter
  	        } else switch (TYPE) {
  	          case 4: return false;             // every
  	          case 7: push(target, value);      // filterReject
  	        }
  	      }
  	    }
  	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  	  };
  	};

  	arrayIteration = {
  	  // `Array.prototype.forEach` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  	  forEach: createMethod(0),
  	  // `Array.prototype.map` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.map
  	  map: createMethod(1),
  	  // `Array.prototype.filter` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.filter
  	  filter: createMethod(2),
  	  // `Array.prototype.some` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.some
  	  some: createMethod(3),
  	  // `Array.prototype.every` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.every
  	  every: createMethod(4),
  	  // `Array.prototype.find` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.find
  	  find: createMethod(5),
  	  // `Array.prototype.findIndex` method
  	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  	  findIndex: createMethod(6),
  	  // `Array.prototype.filterReject` method
  	  // https://github.com/tc39/proposal-array-filtering
  	  filterReject: createMethod(7)
  	};
  	return arrayIteration;
  }

  var hasRequiredEs_array_filter;

  function requireEs_array_filter () {
  	if (hasRequiredEs_array_filter) return es_array_filter;
  	hasRequiredEs_array_filter = 1;
  	var $ = require_export();
  	var $filter = requireArrayIteration().filter;
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();

  	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  	// `Array.prototype.filter` method
  	// https://tc39.es/ecma262/#sec-array.prototype.filter
  	// with adding support of @@species
  	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  	  filter: function filter(callbackfn /* , thisArg */) {
  	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});
  	return es_array_filter;
  }

  requireEs_array_filter();

  var es_array_find = {};

  var objectDefineProperties = {};

  var objectKeys;
  var hasRequiredObjectKeys;

  function requireObjectKeys () {
  	if (hasRequiredObjectKeys) return objectKeys;
  	hasRequiredObjectKeys = 1;
  	var internalObjectKeys = requireObjectKeysInternal();
  	var enumBugKeys = requireEnumBugKeys();

  	// `Object.keys` method
  	// https://tc39.es/ecma262/#sec-object.keys
  	// eslint-disable-next-line es/no-object-keys -- safe
  	objectKeys = Object.keys || function keys(O) {
  	  return internalObjectKeys(O, enumBugKeys);
  	};
  	return objectKeys;
  }

  var hasRequiredObjectDefineProperties;

  function requireObjectDefineProperties () {
  	if (hasRequiredObjectDefineProperties) return objectDefineProperties;
  	hasRequiredObjectDefineProperties = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  	var definePropertyModule = requireObjectDefineProperty();
  	var anObject = requireAnObject();
  	var toIndexedObject = requireToIndexedObject();
  	var objectKeys = requireObjectKeys();

  	// `Object.defineProperties` method
  	// https://tc39.es/ecma262/#sec-object.defineproperties
  	// eslint-disable-next-line es/no-object-defineproperties -- safe
  	objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  	  anObject(O);
  	  var props = toIndexedObject(Properties);
  	  var keys = objectKeys(Properties);
  	  var length = keys.length;
  	  var index = 0;
  	  var key;
  	  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  	  return O;
  	};
  	return objectDefineProperties;
  }

  var html;
  var hasRequiredHtml;

  function requireHtml () {
  	if (hasRequiredHtml) return html;
  	hasRequiredHtml = 1;
  	var getBuiltIn = requireGetBuiltIn();

  	html = getBuiltIn('document', 'documentElement');
  	return html;
  }

  var objectCreate;
  var hasRequiredObjectCreate;

  function requireObjectCreate () {
  	if (hasRequiredObjectCreate) return objectCreate;
  	hasRequiredObjectCreate = 1;
  	/* global ActiveXObject -- old IE, WSH */
  	var anObject = requireAnObject();
  	var definePropertiesModule = requireObjectDefineProperties();
  	var enumBugKeys = requireEnumBugKeys();
  	var hiddenKeys = requireHiddenKeys();
  	var html = requireHtml();
  	var documentCreateElement = requireDocumentCreateElement();
  	var sharedKey = requireSharedKey();

  	var GT = '>';
  	var LT = '<';
  	var PROTOTYPE = 'prototype';
  	var SCRIPT = 'script';
  	var IE_PROTO = sharedKey('IE_PROTO');

  	var EmptyConstructor = function () { /* empty */ };

  	var scriptTag = function (content) {
  	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  	};

  	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  	var NullProtoObjectViaActiveX = function (activeXDocument) {
  	  activeXDocument.write(scriptTag(''));
  	  activeXDocument.close();
  	  var temp = activeXDocument.parentWindow.Object;
  	  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  	  activeXDocument = null;
  	  return temp;
  	};

  	// Create object with fake `null` prototype: use iframe Object with cleared prototype
  	var NullProtoObjectViaIFrame = function () {
  	  // Thrash, waste and sodomy: IE GC bug
  	  var iframe = documentCreateElement('iframe');
  	  var JS = 'java' + SCRIPT + ':';
  	  var iframeDocument;
  	  iframe.style.display = 'none';
  	  html.appendChild(iframe);
  	  // https://github.com/zloirock/core-js/issues/475
  	  iframe.src = String(JS);
  	  iframeDocument = iframe.contentWindow.document;
  	  iframeDocument.open();
  	  iframeDocument.write(scriptTag('document.F=Object'));
  	  iframeDocument.close();
  	  return iframeDocument.F;
  	};

  	// Check for document.domain and active x support
  	// No need to use active x approach when document.domain is not set
  	// see https://github.com/es-shims/es5-shim/issues/150
  	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  	// avoid IE GC bug
  	var activeXDocument;
  	var NullProtoObject = function () {
  	  try {
  	    activeXDocument = new ActiveXObject('htmlfile');
  	  } catch (error) { /* ignore */ }
  	  NullProtoObject = typeof document != 'undefined'
  	    ? document.domain && activeXDocument
  	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  	      : NullProtoObjectViaIFrame()
  	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  	  var length = enumBugKeys.length;
  	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  	  return NullProtoObject();
  	};

  	hiddenKeys[IE_PROTO] = true;

  	// `Object.create` method
  	// https://tc39.es/ecma262/#sec-object.create
  	// eslint-disable-next-line es/no-object-create -- safe
  	objectCreate = Object.create || function create(O, Properties) {
  	  var result;
  	  if (O !== null) {
  	    EmptyConstructor[PROTOTYPE] = anObject(O);
  	    result = new EmptyConstructor();
  	    EmptyConstructor[PROTOTYPE] = null;
  	    // add "__proto__" for Object.getPrototypeOf polyfill
  	    result[IE_PROTO] = O;
  	  } else result = NullProtoObject();
  	  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  	};
  	return objectCreate;
  }

  var addToUnscopables;
  var hasRequiredAddToUnscopables;

  function requireAddToUnscopables () {
  	if (hasRequiredAddToUnscopables) return addToUnscopables;
  	hasRequiredAddToUnscopables = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var create = requireObjectCreate();
  	var defineProperty = requireObjectDefineProperty().f;

  	var UNSCOPABLES = wellKnownSymbol('unscopables');
  	var ArrayPrototype = Array.prototype;

  	// Array.prototype[@@unscopables]
  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	if (ArrayPrototype[UNSCOPABLES] === undefined) {
  	  defineProperty(ArrayPrototype, UNSCOPABLES, {
  	    configurable: true,
  	    value: create(null)
  	  });
  	}

  	// add a key to Array.prototype[@@unscopables]
  	addToUnscopables = function (key) {
  	  ArrayPrototype[UNSCOPABLES][key] = true;
  	};
  	return addToUnscopables;
  }

  var hasRequiredEs_array_find;

  function requireEs_array_find () {
  	if (hasRequiredEs_array_find) return es_array_find;
  	hasRequiredEs_array_find = 1;
  	var $ = require_export();
  	var $find = requireArrayIteration().find;
  	var addToUnscopables = requireAddToUnscopables();

  	var FIND = 'find';
  	var SKIPS_HOLES = true;

  	// Shouldn't skip holes
  	// eslint-disable-next-line es/no-array-prototype-find -- testing
  	if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  	// `Array.prototype.find` method
  	// https://tc39.es/ecma262/#sec-array.prototype.find
  	$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  	  find: function find(callbackfn /* , that = undefined */) {
  	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables(FIND);
  	return es_array_find;
  }

  requireEs_array_find();

  var es_array_includes = {};

  var hasRequiredEs_array_includes;

  function requireEs_array_includes () {
  	if (hasRequiredEs_array_includes) return es_array_includes;
  	hasRequiredEs_array_includes = 1;
  	var $ = require_export();
  	var $includes = requireArrayIncludes().includes;
  	var fails = requireFails();
  	var addToUnscopables = requireAddToUnscopables();

  	// FF99+ bug
  	var BROKEN_ON_SPARSE = fails(function () {
  	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  	  return !Array(1).includes();
  	});

  	// `Array.prototype.includes` method
  	// https://tc39.es/ecma262/#sec-array.prototype.includes
  	$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  	  includes: function includes(el /* , fromIndex = 0 */) {
  	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables('includes');
  	return es_array_includes;
  }

  requireEs_array_includes();

  var es_array_indexOf = {};

  var arrayMethodIsStrict;
  var hasRequiredArrayMethodIsStrict;

  function requireArrayMethodIsStrict () {
  	if (hasRequiredArrayMethodIsStrict) return arrayMethodIsStrict;
  	hasRequiredArrayMethodIsStrict = 1;
  	var fails = requireFails();

  	arrayMethodIsStrict = function (METHOD_NAME, argument) {
  	  var method = [][METHOD_NAME];
  	  return !!method && fails(function () {
  	    // eslint-disable-next-line no-useless-call -- required for testing
  	    method.call(null, argument || function () { return 1; }, 1);
  	  });
  	};
  	return arrayMethodIsStrict;
  }

  var hasRequiredEs_array_indexOf;

  function requireEs_array_indexOf () {
  	if (hasRequiredEs_array_indexOf) return es_array_indexOf;
  	hasRequiredEs_array_indexOf = 1;
  	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var $indexOf = requireArrayIncludes().indexOf;
  	var arrayMethodIsStrict = requireArrayMethodIsStrict();

  	var nativeIndexOf = uncurryThis([].indexOf);

  	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  	var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

  	// `Array.prototype.indexOf` method
  	// https://tc39.es/ecma262/#sec-array.prototype.indexof
  	$({ target: 'Array', proto: true, forced: FORCED }, {
  	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
  	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
  	    return NEGATIVE_ZERO
  	      // convert -0 to +0
  	      ? nativeIndexOf(this, searchElement, fromIndex) || 0
  	      : $indexOf(this, searchElement, fromIndex);
  	  }
  	});
  	return es_array_indexOf;
  }

  requireEs_array_indexOf();

  var es_object_assign = {};

  var objectAssign;
  var hasRequiredObjectAssign;

  function requireObjectAssign () {
  	if (hasRequiredObjectAssign) return objectAssign;
  	hasRequiredObjectAssign = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var uncurryThis = requireFunctionUncurryThis();
  	var call = requireFunctionCall();
  	var fails = requireFails();
  	var objectKeys = requireObjectKeys();
  	var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  	var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  	var toObject = requireToObject();
  	var IndexedObject = requireIndexedObject();

  	// eslint-disable-next-line es/no-object-assign -- safe
  	var $assign = Object.assign;
  	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
  	var defineProperty = Object.defineProperty;
  	var concat = uncurryThis([].concat);

  	// `Object.assign` method
  	// https://tc39.es/ecma262/#sec-object.assign
  	objectAssign = !$assign || fails(function () {
  	  // should have correct order of operations (Edge bug)
  	  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
  	    enumerable: true,
  	    get: function () {
  	      defineProperty(this, 'b', {
  	        value: 3,
  	        enumerable: false
  	      });
  	    }
  	  }), { b: 2 })).b !== 1) return true;
  	  // should work with symbols and should have deterministic property order (V8 bug)
  	  var A = {};
  	  var B = {};
  	  // eslint-disable-next-line es/no-symbol -- safe
  	  var symbol = Symbol('assign detection');
  	  var alphabet = 'abcdefghijklmnopqrst';
  	  A[symbol] = 7;
  	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  	  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
  	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  	  var T = toObject(target);
  	  var argumentsLength = arguments.length;
  	  var index = 1;
  	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  	  while (argumentsLength > index) {
  	    var S = IndexedObject(arguments[index++]);
  	    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
  	    var length = keys.length;
  	    var j = 0;
  	    var key;
  	    while (length > j) {
  	      key = keys[j++];
  	      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
  	    }
  	  } return T;
  	} : $assign;
  	return objectAssign;
  }

  var hasRequiredEs_object_assign;

  function requireEs_object_assign () {
  	if (hasRequiredEs_object_assign) return es_object_assign;
  	hasRequiredEs_object_assign = 1;
  	var $ = require_export();
  	var assign = requireObjectAssign();

  	// `Object.assign` method
  	// https://tc39.es/ecma262/#sec-object.assign
  	// eslint-disable-next-line es/no-object-assign -- required for testing
  	$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  	  assign: assign
  	});
  	return es_object_assign;
  }

  requireEs_object_assign();

  var es_object_keys = {};

  var hasRequiredEs_object_keys;

  function requireEs_object_keys () {
  	if (hasRequiredEs_object_keys) return es_object_keys;
  	hasRequiredEs_object_keys = 1;
  	var $ = require_export();
  	var toObject = requireToObject();
  	var nativeKeys = requireObjectKeys();
  	var fails = requireFails();

  	var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

  	// `Object.keys` method
  	// https://tc39.es/ecma262/#sec-object.keys
  	$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  	  keys: function keys(it) {
  	    return nativeKeys(toObject(it));
  	  }
  	});
  	return es_object_keys;
  }

  requireEs_object_keys();

  var es_object_toString = {};

  var objectToString;
  var hasRequiredObjectToString;

  function requireObjectToString () {
  	if (hasRequiredObjectToString) return objectToString;
  	hasRequiredObjectToString = 1;
  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var classof = requireClassof();

  	// `Object.prototype.toString` method implementation
  	// https://tc39.es/ecma262/#sec-object.prototype.tostring
  	objectToString = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  	  return '[object ' + classof(this) + ']';
  	};
  	return objectToString;
  }

  var hasRequiredEs_object_toString;

  function requireEs_object_toString () {
  	if (hasRequiredEs_object_toString) return es_object_toString;
  	hasRequiredEs_object_toString = 1;
  	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var toString = requireObjectToString();

  	// `Object.prototype.toString` method
  	// https://tc39.es/ecma262/#sec-object.prototype.tostring
  	if (!TO_STRING_TAG_SUPPORT) {
  	  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
  	}
  	return es_object_toString;
  }

  requireEs_object_toString();

  var es_object_values = {};

  var correctPrototypeGetter;
  var hasRequiredCorrectPrototypeGetter;

  function requireCorrectPrototypeGetter () {
  	if (hasRequiredCorrectPrototypeGetter) return correctPrototypeGetter;
  	hasRequiredCorrectPrototypeGetter = 1;
  	var fails = requireFails();

  	correctPrototypeGetter = !fails(function () {
  	  function F() { /* empty */ }
  	  F.prototype.constructor = null;
  	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  	  return Object.getPrototypeOf(new F()) !== F.prototype;
  	});
  	return correctPrototypeGetter;
  }

  var objectGetPrototypeOf;
  var hasRequiredObjectGetPrototypeOf;

  function requireObjectGetPrototypeOf () {
  	if (hasRequiredObjectGetPrototypeOf) return objectGetPrototypeOf;
  	hasRequiredObjectGetPrototypeOf = 1;
  	var hasOwn = requireHasOwnProperty();
  	var isCallable = requireIsCallable();
  	var toObject = requireToObject();
  	var sharedKey = requireSharedKey();
  	var CORRECT_PROTOTYPE_GETTER = requireCorrectPrototypeGetter();

  	var IE_PROTO = sharedKey('IE_PROTO');
  	var $Object = Object;
  	var ObjectPrototype = $Object.prototype;

  	// `Object.getPrototypeOf` method
  	// https://tc39.es/ecma262/#sec-object.getprototypeof
  	// eslint-disable-next-line es/no-object-getprototypeof -- safe
  	objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  	  var object = toObject(O);
  	  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  	  var constructor = object.constructor;
  	  if (isCallable(constructor) && object instanceof constructor) {
  	    return constructor.prototype;
  	  } return object instanceof $Object ? ObjectPrototype : null;
  	};
  	return objectGetPrototypeOf;
  }

  var objectToArray;
  var hasRequiredObjectToArray;

  function requireObjectToArray () {
  	if (hasRequiredObjectToArray) return objectToArray;
  	hasRequiredObjectToArray = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var fails = requireFails();
  	var uncurryThis = requireFunctionUncurryThis();
  	var objectGetPrototypeOf = requireObjectGetPrototypeOf();
  	var objectKeys = requireObjectKeys();
  	var toIndexedObject = requireToIndexedObject();
  	var $propertyIsEnumerable = requireObjectPropertyIsEnumerable().f;

  	var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
  	var push = uncurryThis([].push);

  	// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
  	// of `null` prototype objects
  	var IE_BUG = DESCRIPTORS && fails(function () {
  	  // eslint-disable-next-line es/no-object-create -- safe
  	  var O = Object.create(null);
  	  O[2] = 2;
  	  return !propertyIsEnumerable(O, 2);
  	});

  	// `Object.{ entries, values }` methods implementation
  	var createMethod = function (TO_ENTRIES) {
  	  return function (it) {
  	    var O = toIndexedObject(it);
  	    var keys = objectKeys(O);
  	    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
  	    var length = keys.length;
  	    var i = 0;
  	    var result = [];
  	    var key;
  	    while (length > i) {
  	      key = keys[i++];
  	      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
  	        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
  	      }
  	    }
  	    return result;
  	  };
  	};

  	objectToArray = {
  	  // `Object.entries` method
  	  // https://tc39.es/ecma262/#sec-object.entries
  	  entries: createMethod(true),
  	  // `Object.values` method
  	  // https://tc39.es/ecma262/#sec-object.values
  	  values: createMethod(false)
  	};
  	return objectToArray;
  }

  var hasRequiredEs_object_values;

  function requireEs_object_values () {
  	if (hasRequiredEs_object_values) return es_object_values;
  	hasRequiredEs_object_values = 1;
  	var $ = require_export();
  	var $values = requireObjectToArray().values;

  	// `Object.values` method
  	// https://tc39.es/ecma262/#sec-object.values
  	$({ target: 'Object', stat: true }, {
  	  values: function values(O) {
  	    return $values(O);
  	  }
  	});
  	return es_object_values;
  }

  requireEs_object_values();

  var es_parseInt = {};

  var toString;
  var hasRequiredToString;

  function requireToString () {
  	if (hasRequiredToString) return toString;
  	hasRequiredToString = 1;
  	var classof = requireClassof();

  	var $String = String;

  	toString = function (argument) {
  	  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  	  return $String(argument);
  	};
  	return toString;
  }

  var whitespaces;
  var hasRequiredWhitespaces;

  function requireWhitespaces () {
  	if (hasRequiredWhitespaces) return whitespaces;
  	hasRequiredWhitespaces = 1;
  	// a string of all valid unicode whitespaces
  	whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  	return whitespaces;
  }

  var stringTrim;
  var hasRequiredStringTrim;

  function requireStringTrim () {
  	if (hasRequiredStringTrim) return stringTrim;
  	hasRequiredStringTrim = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var toString = requireToString();
  	var whitespaces = requireWhitespaces();

  	var replace = uncurryThis(''.replace);
  	var ltrim = RegExp('^[' + whitespaces + ']+');
  	var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

  	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  	var createMethod = function (TYPE) {
  	  return function ($this) {
  	    var string = toString(requireObjectCoercible($this));
  	    if (TYPE & 1) string = replace(string, ltrim, '');
  	    if (TYPE & 2) string = replace(string, rtrim, '$1');
  	    return string;
  	  };
  	};

  	stringTrim = {
  	  // `String.prototype.{ trimLeft, trimStart }` methods
  	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  	  start: createMethod(1),
  	  // `String.prototype.{ trimRight, trimEnd }` methods
  	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  	  end: createMethod(2),
  	  // `String.prototype.trim` method
  	  // https://tc39.es/ecma262/#sec-string.prototype.trim
  	  trim: createMethod(3)
  	};
  	return stringTrim;
  }

  var numberParseInt;
  var hasRequiredNumberParseInt;

  function requireNumberParseInt () {
  	if (hasRequiredNumberParseInt) return numberParseInt;
  	hasRequiredNumberParseInt = 1;
  	var globalThis = requireGlobalThis();
  	var fails = requireFails();
  	var uncurryThis = requireFunctionUncurryThis();
  	var toString = requireToString();
  	var trim = requireStringTrim().trim;
  	var whitespaces = requireWhitespaces();

  	var $parseInt = globalThis.parseInt;
  	var Symbol = globalThis.Symbol;
  	var ITERATOR = Symbol && Symbol.iterator;
  	var hex = /^[+-]?0x/i;
  	var exec = uncurryThis(hex.exec);
  	var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  	  // MS Edge 18- broken with boxed symbols
  	  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

  	// `parseInt` method
  	// https://tc39.es/ecma262/#sec-parseint-string-radix
  	numberParseInt = FORCED ? function parseInt(string, radix) {
  	  var S = trim(toString(string));
  	  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
  	} : $parseInt;
  	return numberParseInt;
  }

  var hasRequiredEs_parseInt;

  function requireEs_parseInt () {
  	if (hasRequiredEs_parseInt) return es_parseInt;
  	hasRequiredEs_parseInt = 1;
  	var $ = require_export();
  	var $parseInt = requireNumberParseInt();

  	// `parseInt` method
  	// https://tc39.es/ecma262/#sec-parseint-string-radix
  	$({ global: true, forced: parseInt !== $parseInt }, {
  	  parseInt: $parseInt
  	});
  	return es_parseInt;
  }

  requireEs_parseInt();

  var es_promise = {};

  var es_promise_constructor = {};

  var environment;
  var hasRequiredEnvironment;

  function requireEnvironment () {
  	if (hasRequiredEnvironment) return environment;
  	hasRequiredEnvironment = 1;
  	/* global Bun, Deno -- detection */
  	var globalThis = requireGlobalThis();
  	var userAgent = requireEnvironmentUserAgent();
  	var classof = requireClassofRaw();

  	var userAgentStartsWith = function (string) {
  	  return userAgent.slice(0, string.length) === string;
  	};

  	environment = (function () {
  	  if (userAgentStartsWith('Bun/')) return 'BUN';
  	  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  	  if (userAgentStartsWith('Deno/')) return 'DENO';
  	  if (userAgentStartsWith('Node.js/')) return 'NODE';
  	  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  	  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  	  if (classof(globalThis.process) === 'process') return 'NODE';
  	  if (globalThis.window && globalThis.document) return 'BROWSER';
  	  return 'REST';
  	})();
  	return environment;
  }

  var environmentIsNode;
  var hasRequiredEnvironmentIsNode;

  function requireEnvironmentIsNode () {
  	if (hasRequiredEnvironmentIsNode) return environmentIsNode;
  	hasRequiredEnvironmentIsNode = 1;
  	var ENVIRONMENT = requireEnvironment();

  	environmentIsNode = ENVIRONMENT === 'NODE';
  	return environmentIsNode;
  }

  var functionUncurryThisAccessor;
  var hasRequiredFunctionUncurryThisAccessor;

  function requireFunctionUncurryThisAccessor () {
  	if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
  	hasRequiredFunctionUncurryThisAccessor = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var aCallable = requireACallable();

  	functionUncurryThisAccessor = function (object, key, method) {
  	  try {
  	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  	  } catch (error) { /* empty */ }
  	};
  	return functionUncurryThisAccessor;
  }

  var isPossiblePrototype;
  var hasRequiredIsPossiblePrototype;

  function requireIsPossiblePrototype () {
  	if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
  	hasRequiredIsPossiblePrototype = 1;
  	var isObject = requireIsObject();

  	isPossiblePrototype = function (argument) {
  	  return isObject(argument) || argument === null;
  	};
  	return isPossiblePrototype;
  }

  var aPossiblePrototype;
  var hasRequiredAPossiblePrototype;

  function requireAPossiblePrototype () {
  	if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
  	hasRequiredAPossiblePrototype = 1;
  	var isPossiblePrototype = requireIsPossiblePrototype();

  	var $String = String;
  	var $TypeError = TypeError;

  	aPossiblePrototype = function (argument) {
  	  if (isPossiblePrototype(argument)) return argument;
  	  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
  	};
  	return aPossiblePrototype;
  }

  var objectSetPrototypeOf;
  var hasRequiredObjectSetPrototypeOf;

  function requireObjectSetPrototypeOf () {
  	if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
  	hasRequiredObjectSetPrototypeOf = 1;
  	/* eslint-disable no-proto -- safe */
  	var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  	var isObject = requireIsObject();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var aPossiblePrototype = requireAPossiblePrototype();

  	// `Object.setPrototypeOf` method
  	// https://tc39.es/ecma262/#sec-object.setprototypeof
  	// Works with __proto__ only. Old v8 can't work with null proto objects.
  	// eslint-disable-next-line es/no-object-setprototypeof -- safe
  	objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  	  var CORRECT_SETTER = false;
  	  var test = {};
  	  var setter;
  	  try {
  	    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
  	    setter(test, []);
  	    CORRECT_SETTER = test instanceof Array;
  	  } catch (error) { /* empty */ }
  	  return function setPrototypeOf(O, proto) {
  	    requireObjectCoercible(O);
  	    aPossiblePrototype(proto);
  	    if (!isObject(O)) return O;
  	    if (CORRECT_SETTER) setter(O, proto);
  	    else O.__proto__ = proto;
  	    return O;
  	  };
  	}() : undefined);
  	return objectSetPrototypeOf;
  }

  var setToStringTag;
  var hasRequiredSetToStringTag;

  function requireSetToStringTag () {
  	if (hasRequiredSetToStringTag) return setToStringTag;
  	hasRequiredSetToStringTag = 1;
  	var defineProperty = requireObjectDefineProperty().f;
  	var hasOwn = requireHasOwnProperty();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

  	setToStringTag = function (target, TAG, STATIC) {
  	  if (target && !STATIC) target = target.prototype;
  	  if (target && !hasOwn(target, TO_STRING_TAG)) {
  	    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  	  }
  	};
  	return setToStringTag;
  }

  var defineBuiltInAccessor;
  var hasRequiredDefineBuiltInAccessor;

  function requireDefineBuiltInAccessor () {
  	if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
  	hasRequiredDefineBuiltInAccessor = 1;
  	var makeBuiltIn = requireMakeBuiltIn();
  	var defineProperty = requireObjectDefineProperty();

  	defineBuiltInAccessor = function (target, name, descriptor) {
  	  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  	  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  	  return defineProperty.f(target, name, descriptor);
  	};
  	return defineBuiltInAccessor;
  }

  var setSpecies;
  var hasRequiredSetSpecies;

  function requireSetSpecies () {
  	if (hasRequiredSetSpecies) return setSpecies;
  	hasRequiredSetSpecies = 1;
  	var getBuiltIn = requireGetBuiltIn();
  	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var DESCRIPTORS = requireDescriptors();

  	var SPECIES = wellKnownSymbol('species');

  	setSpecies = function (CONSTRUCTOR_NAME) {
  	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  	  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
  	    defineBuiltInAccessor(Constructor, SPECIES, {
  	      configurable: true,
  	      get: function () { return this; }
  	    });
  	  }
  	};
  	return setSpecies;
  }

  var anInstance;
  var hasRequiredAnInstance;

  function requireAnInstance () {
  	if (hasRequiredAnInstance) return anInstance;
  	hasRequiredAnInstance = 1;
  	var isPrototypeOf = requireObjectIsPrototypeOf();

  	var $TypeError = TypeError;

  	anInstance = function (it, Prototype) {
  	  if (isPrototypeOf(Prototype, it)) return it;
  	  throw new $TypeError('Incorrect invocation');
  	};
  	return anInstance;
  }

  var aConstructor;
  var hasRequiredAConstructor;

  function requireAConstructor () {
  	if (hasRequiredAConstructor) return aConstructor;
  	hasRequiredAConstructor = 1;
  	var isConstructor = requireIsConstructor();
  	var tryToString = requireTryToString();

  	var $TypeError = TypeError;

  	// `Assert: IsConstructor(argument) is true`
  	aConstructor = function (argument) {
  	  if (isConstructor(argument)) return argument;
  	  throw new $TypeError(tryToString(argument) + ' is not a constructor');
  	};
  	return aConstructor;
  }

  var speciesConstructor;
  var hasRequiredSpeciesConstructor;

  function requireSpeciesConstructor () {
  	if (hasRequiredSpeciesConstructor) return speciesConstructor;
  	hasRequiredSpeciesConstructor = 1;
  	var anObject = requireAnObject();
  	var aConstructor = requireAConstructor();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var SPECIES = wellKnownSymbol('species');

  	// `SpeciesConstructor` abstract operation
  	// https://tc39.es/ecma262/#sec-speciesconstructor
  	speciesConstructor = function (O, defaultConstructor) {
  	  var C = anObject(O).constructor;
  	  var S;
  	  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
  	};
  	return speciesConstructor;
  }

  var functionApply;
  var hasRequiredFunctionApply;

  function requireFunctionApply () {
  	if (hasRequiredFunctionApply) return functionApply;
  	hasRequiredFunctionApply = 1;
  	var NATIVE_BIND = requireFunctionBindNative();

  	var FunctionPrototype = Function.prototype;
  	var apply = FunctionPrototype.apply;
  	var call = FunctionPrototype.call;

  	// eslint-disable-next-line es/no-reflect -- safe
  	functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  	  return call.apply(apply, arguments);
  	});
  	return functionApply;
  }

  var arraySlice;
  var hasRequiredArraySlice;

  function requireArraySlice () {
  	if (hasRequiredArraySlice) return arraySlice;
  	hasRequiredArraySlice = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	arraySlice = uncurryThis([].slice);
  	return arraySlice;
  }

  var validateArgumentsLength;
  var hasRequiredValidateArgumentsLength;

  function requireValidateArgumentsLength () {
  	if (hasRequiredValidateArgumentsLength) return validateArgumentsLength;
  	hasRequiredValidateArgumentsLength = 1;
  	var $TypeError = TypeError;

  	validateArgumentsLength = function (passed, required) {
  	  if (passed < required) throw new $TypeError('Not enough arguments');
  	  return passed;
  	};
  	return validateArgumentsLength;
  }

  var environmentIsIos;
  var hasRequiredEnvironmentIsIos;

  function requireEnvironmentIsIos () {
  	if (hasRequiredEnvironmentIsIos) return environmentIsIos;
  	hasRequiredEnvironmentIsIos = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	// eslint-disable-next-line redos/no-vulnerable -- safe
  	environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
  	return environmentIsIos;
  }

  var task;
  var hasRequiredTask;

  function requireTask () {
  	if (hasRequiredTask) return task;
  	hasRequiredTask = 1;
  	var globalThis = requireGlobalThis();
  	var apply = requireFunctionApply();
  	var bind = requireFunctionBindContext();
  	var isCallable = requireIsCallable();
  	var hasOwn = requireHasOwnProperty();
  	var fails = requireFails();
  	var html = requireHtml();
  	var arraySlice = requireArraySlice();
  	var createElement = requireDocumentCreateElement();
  	var validateArgumentsLength = requireValidateArgumentsLength();
  	var IS_IOS = requireEnvironmentIsIos();
  	var IS_NODE = requireEnvironmentIsNode();

  	var set = globalThis.setImmediate;
  	var clear = globalThis.clearImmediate;
  	var process = globalThis.process;
  	var Dispatch = globalThis.Dispatch;
  	var Function = globalThis.Function;
  	var MessageChannel = globalThis.MessageChannel;
  	var String = globalThis.String;
  	var counter = 0;
  	var queue = {};
  	var ONREADYSTATECHANGE = 'onreadystatechange';
  	var $location, defer, channel, port;

  	fails(function () {
  	  // Deno throws a ReferenceError on `location` access without `--location` flag
  	  $location = globalThis.location;
  	});

  	var run = function (id) {
  	  if (hasOwn(queue, id)) {
  	    var fn = queue[id];
  	    delete queue[id];
  	    fn();
  	  }
  	};

  	var runner = function (id) {
  	  return function () {
  	    run(id);
  	  };
  	};

  	var eventListener = function (event) {
  	  run(event.data);
  	};

  	var globalPostMessageDefer = function (id) {
  	  // old engines have not location.origin
  	  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
  	};

  	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  	if (!set || !clear) {
  	  set = function setImmediate(handler) {
  	    validateArgumentsLength(arguments.length, 1);
  	    var fn = isCallable(handler) ? handler : Function(handler);
  	    var args = arraySlice(arguments, 1);
  	    queue[++counter] = function () {
  	      apply(fn, undefined, args);
  	    };
  	    defer(counter);
  	    return counter;
  	  };
  	  clear = function clearImmediate(id) {
  	    delete queue[id];
  	  };
  	  // Node.js 0.8-
  	  if (IS_NODE) {
  	    defer = function (id) {
  	      process.nextTick(runner(id));
  	    };
  	  // Sphere (JS game engine) Dispatch API
  	  } else if (Dispatch && Dispatch.now) {
  	    defer = function (id) {
  	      Dispatch.now(runner(id));
  	    };
  	  // Browsers with MessageChannel, includes WebWorkers
  	  // except iOS - https://github.com/zloirock/core-js/issues/624
  	  } else if (MessageChannel && !IS_IOS) {
  	    channel = new MessageChannel();
  	    port = channel.port2;
  	    channel.port1.onmessage = eventListener;
  	    defer = bind(port.postMessage, port);
  	  // Browsers with postMessage, skip WebWorkers
  	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  	  } else if (
  	    globalThis.addEventListener &&
  	    isCallable(globalThis.postMessage) &&
  	    !globalThis.importScripts &&
  	    $location && $location.protocol !== 'file:' &&
  	    !fails(globalPostMessageDefer)
  	  ) {
  	    defer = globalPostMessageDefer;
  	    globalThis.addEventListener('message', eventListener, false);
  	  // IE8-
  	  } else if (ONREADYSTATECHANGE in createElement('script')) {
  	    defer = function (id) {
  	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
  	        html.removeChild(this);
  	        run(id);
  	      };
  	    };
  	  // Rest old browsers
  	  } else {
  	    defer = function (id) {
  	      setTimeout(runner(id), 0);
  	    };
  	  }
  	}

  	task = {
  	  set: set,
  	  clear: clear
  	};
  	return task;
  }

  var safeGetBuiltIn;
  var hasRequiredSafeGetBuiltIn;

  function requireSafeGetBuiltIn () {
  	if (hasRequiredSafeGetBuiltIn) return safeGetBuiltIn;
  	hasRequiredSafeGetBuiltIn = 1;
  	var globalThis = requireGlobalThis();
  	var DESCRIPTORS = requireDescriptors();

  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// Avoid NodeJS experimental warning
  	safeGetBuiltIn = function (name) {
  	  if (!DESCRIPTORS) return globalThis[name];
  	  var descriptor = getOwnPropertyDescriptor(globalThis, name);
  	  return descriptor && descriptor.value;
  	};
  	return safeGetBuiltIn;
  }

  var queue;
  var hasRequiredQueue;

  function requireQueue () {
  	if (hasRequiredQueue) return queue;
  	hasRequiredQueue = 1;
  	var Queue = function () {
  	  this.head = null;
  	  this.tail = null;
  	};

  	Queue.prototype = {
  	  add: function (item) {
  	    var entry = { item: item, next: null };
  	    var tail = this.tail;
  	    if (tail) tail.next = entry;
  	    else this.head = entry;
  	    this.tail = entry;
  	  },
  	  get: function () {
  	    var entry = this.head;
  	    if (entry) {
  	      var next = this.head = entry.next;
  	      if (next === null) this.tail = null;
  	      return entry.item;
  	    }
  	  }
  	};

  	queue = Queue;
  	return queue;
  }

  var environmentIsIosPebble;
  var hasRequiredEnvironmentIsIosPebble;

  function requireEnvironmentIsIosPebble () {
  	if (hasRequiredEnvironmentIsIosPebble) return environmentIsIosPebble;
  	hasRequiredEnvironmentIsIosPebble = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';
  	return environmentIsIosPebble;
  }

  var environmentIsWebosWebkit;
  var hasRequiredEnvironmentIsWebosWebkit;

  function requireEnvironmentIsWebosWebkit () {
  	if (hasRequiredEnvironmentIsWebosWebkit) return environmentIsWebosWebkit;
  	hasRequiredEnvironmentIsWebosWebkit = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);
  	return environmentIsWebosWebkit;
  }

  var microtask_1;
  var hasRequiredMicrotask;

  function requireMicrotask () {
  	if (hasRequiredMicrotask) return microtask_1;
  	hasRequiredMicrotask = 1;
  	var globalThis = requireGlobalThis();
  	var safeGetBuiltIn = requireSafeGetBuiltIn();
  	var bind = requireFunctionBindContext();
  	var macrotask = requireTask().set;
  	var Queue = requireQueue();
  	var IS_IOS = requireEnvironmentIsIos();
  	var IS_IOS_PEBBLE = requireEnvironmentIsIosPebble();
  	var IS_WEBOS_WEBKIT = requireEnvironmentIsWebosWebkit();
  	var IS_NODE = requireEnvironmentIsNode();

  	var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
  	var document = globalThis.document;
  	var process = globalThis.process;
  	var Promise = globalThis.Promise;
  	var microtask = safeGetBuiltIn('queueMicrotask');
  	var notify, toggle, node, promise, then;

  	// modern engines have queueMicrotask method
  	if (!microtask) {
  	  var queue = new Queue();

  	  var flush = function () {
  	    var parent, fn;
  	    if (IS_NODE && (parent = process.domain)) parent.exit();
  	    while (fn = queue.get()) try {
  	      fn();
  	    } catch (error) {
  	      if (queue.head) notify();
  	      throw error;
  	    }
  	    if (parent) parent.enter();
  	  };

  	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  	  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
  	    toggle = true;
  	    node = document.createTextNode('');
  	    new MutationObserver(flush).observe(node, { characterData: true });
  	    notify = function () {
  	      node.data = toggle = !toggle;
  	    };
  	  // environments with maybe non-completely correct, but existent Promise
  	  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
  	    // Promise.resolve without an argument throws an error in LG WebOS 2
  	    promise = Promise.resolve(undefined);
  	    // workaround of WebKit ~ iOS Safari 10.1 bug
  	    promise.constructor = Promise;
  	    then = bind(promise.then, promise);
  	    notify = function () {
  	      then(flush);
  	    };
  	  // Node.js without promises
  	  } else if (IS_NODE) {
  	    notify = function () {
  	      process.nextTick(flush);
  	    };
  	  // for other environments - macrotask based on:
  	  // - setImmediate
  	  // - MessageChannel
  	  // - window.postMessage
  	  // - onreadystatechange
  	  // - setTimeout
  	  } else {
  	    // `webpack` dev server bug on IE global methods - use bind(fn, global)
  	    macrotask = bind(macrotask, globalThis);
  	    notify = function () {
  	      macrotask(flush);
  	    };
  	  }

  	  microtask = function (fn) {
  	    if (!queue.head) notify();
  	    queue.add(fn);
  	  };
  	}

  	microtask_1 = microtask;
  	return microtask_1;
  }

  var hostReportErrors;
  var hasRequiredHostReportErrors;

  function requireHostReportErrors () {
  	if (hasRequiredHostReportErrors) return hostReportErrors;
  	hasRequiredHostReportErrors = 1;
  	hostReportErrors = function (a, b) {
  	  try {
  	    // eslint-disable-next-line no-console -- safe
  	    arguments.length === 1 ? console.error(a) : console.error(a, b);
  	  } catch (error) { /* empty */ }
  	};
  	return hostReportErrors;
  }

  var perform;
  var hasRequiredPerform;

  function requirePerform () {
  	if (hasRequiredPerform) return perform;
  	hasRequiredPerform = 1;
  	perform = function (exec) {
  	  try {
  	    return { error: false, value: exec() };
  	  } catch (error) {
  	    return { error: true, value: error };
  	  }
  	};
  	return perform;
  }

  var promiseNativeConstructor;
  var hasRequiredPromiseNativeConstructor;

  function requirePromiseNativeConstructor () {
  	if (hasRequiredPromiseNativeConstructor) return promiseNativeConstructor;
  	hasRequiredPromiseNativeConstructor = 1;
  	var globalThis = requireGlobalThis();

  	promiseNativeConstructor = globalThis.Promise;
  	return promiseNativeConstructor;
  }

  var promiseConstructorDetection;
  var hasRequiredPromiseConstructorDetection;

  function requirePromiseConstructorDetection () {
  	if (hasRequiredPromiseConstructorDetection) return promiseConstructorDetection;
  	hasRequiredPromiseConstructorDetection = 1;
  	var globalThis = requireGlobalThis();
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var isCallable = requireIsCallable();
  	var isForced = requireIsForced();
  	var inspectSource = requireInspectSource();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var ENVIRONMENT = requireEnvironment();
  	var IS_PURE = requireIsPure();
  	var V8_VERSION = requireEnvironmentV8Version();

  	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  	var SPECIES = wellKnownSymbol('species');
  	var SUBCLASSING = false;
  	var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);

  	var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  	  // We can't detect it synchronously, so just check versions
  	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  	  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  	  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  	  // We can't use @@species feature detection in V8 since it causes
  	  // deoptimization and performance degradation
  	  // https://github.com/zloirock/core-js/issues/679
  	  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
  	    // Detect correctness of subclassing with @@species support
  	    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
  	    var FakePromise = function (exec) {
  	      exec(function () { /* empty */ }, function () { /* empty */ });
  	    };
  	    var constructor = promise.constructor = {};
  	    constructor[SPECIES] = FakePromise;
  	    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  	    if (!SUBCLASSING) return true;
  	  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  	  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT;
  	});

  	promiseConstructorDetection = {
  	  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  	  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  	  SUBCLASSING: SUBCLASSING
  	};
  	return promiseConstructorDetection;
  }

  var newPromiseCapability = {};

  var hasRequiredNewPromiseCapability;

  function requireNewPromiseCapability () {
  	if (hasRequiredNewPromiseCapability) return newPromiseCapability;
  	hasRequiredNewPromiseCapability = 1;
  	var aCallable = requireACallable();

  	var $TypeError = TypeError;

  	var PromiseCapability = function (C) {
  	  var resolve, reject;
  	  this.promise = new C(function ($$resolve, $$reject) {
  	    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
  	    resolve = $$resolve;
  	    reject = $$reject;
  	  });
  	  this.resolve = aCallable(resolve);
  	  this.reject = aCallable(reject);
  	};

  	// `NewPromiseCapability` abstract operation
  	// https://tc39.es/ecma262/#sec-newpromisecapability
  	newPromiseCapability.f = function (C) {
  	  return new PromiseCapability(C);
  	};
  	return newPromiseCapability;
  }

  var hasRequiredEs_promise_constructor;

  function requireEs_promise_constructor () {
  	if (hasRequiredEs_promise_constructor) return es_promise_constructor;
  	hasRequiredEs_promise_constructor = 1;
  	var $ = require_export();
  	var IS_PURE = requireIsPure();
  	var IS_NODE = requireEnvironmentIsNode();
  	var globalThis = requireGlobalThis();
  	var call = requireFunctionCall();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var setPrototypeOf = requireObjectSetPrototypeOf();
  	var setToStringTag = requireSetToStringTag();
  	var setSpecies = requireSetSpecies();
  	var aCallable = requireACallable();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();
  	var anInstance = requireAnInstance();
  	var speciesConstructor = requireSpeciesConstructor();
  	var task = requireTask().set;
  	var microtask = requireMicrotask();
  	var hostReportErrors = requireHostReportErrors();
  	var perform = requirePerform();
  	var Queue = requireQueue();
  	var InternalStateModule = requireInternalState();
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var PromiseConstructorDetection = requirePromiseConstructorDetection();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();

  	var PROMISE = 'Promise';
  	var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
  	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  	var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
  	var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
  	var setInternalState = InternalStateModule.set;
  	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  	var PromiseConstructor = NativePromiseConstructor;
  	var PromisePrototype = NativePromisePrototype;
  	var TypeError = globalThis.TypeError;
  	var document = globalThis.document;
  	var process = globalThis.process;
  	var newPromiseCapability = newPromiseCapabilityModule.f;
  	var newGenericPromiseCapability = newPromiseCapability;

  	var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
  	var UNHANDLED_REJECTION = 'unhandledrejection';
  	var REJECTION_HANDLED = 'rejectionhandled';
  	var PENDING = 0;
  	var FULFILLED = 1;
  	var REJECTED = 2;
  	var HANDLED = 1;
  	var UNHANDLED = 2;

  	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  	// helpers
  	var isThenable = function (it) {
  	  var then;
  	  return isObject(it) && isCallable(then = it.then) ? then : false;
  	};

  	var callReaction = function (reaction, state) {
  	  var value = state.value;
  	  var ok = state.state === FULFILLED;
  	  var handler = ok ? reaction.ok : reaction.fail;
  	  var resolve = reaction.resolve;
  	  var reject = reaction.reject;
  	  var domain = reaction.domain;
  	  var result, then, exited;
  	  try {
  	    if (handler) {
  	      if (!ok) {
  	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
  	        state.rejection = HANDLED;
  	      }
  	      if (handler === true) result = value;
  	      else {
  	        if (domain) domain.enter();
  	        result = handler(value); // can throw
  	        if (domain) {
  	          domain.exit();
  	          exited = true;
  	        }
  	      }
  	      if (result === reaction.promise) {
  	        reject(new TypeError('Promise-chain cycle'));
  	      } else if (then = isThenable(result)) {
  	        call(then, result, resolve, reject);
  	      } else resolve(result);
  	    } else reject(value);
  	  } catch (error) {
  	    if (domain && !exited) domain.exit();
  	    reject(error);
  	  }
  	};

  	var notify = function (state, isReject) {
  	  if (state.notified) return;
  	  state.notified = true;
  	  microtask(function () {
  	    var reactions = state.reactions;
  	    var reaction;
  	    while (reaction = reactions.get()) {
  	      callReaction(reaction, state);
  	    }
  	    state.notified = false;
  	    if (isReject && !state.rejection) onUnhandled(state);
  	  });
  	};

  	var dispatchEvent = function (name, promise, reason) {
  	  var event, handler;
  	  if (DISPATCH_EVENT) {
  	    event = document.createEvent('Event');
  	    event.promise = promise;
  	    event.reason = reason;
  	    event.initEvent(name, false, true);
  	    globalThis.dispatchEvent(event);
  	  } else event = { promise: promise, reason: reason };
  	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis['on' + name])) handler(event);
  	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  	};

  	var onUnhandled = function (state) {
  	  call(task, globalThis, function () {
  	    var promise = state.facade;
  	    var value = state.value;
  	    var IS_UNHANDLED = isUnhandled(state);
  	    var result;
  	    if (IS_UNHANDLED) {
  	      result = perform(function () {
  	        if (IS_NODE) {
  	          process.emit('unhandledRejection', value, promise);
  	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
  	      });
  	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
  	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
  	      if (result.error) throw result.value;
  	    }
  	  });
  	};

  	var isUnhandled = function (state) {
  	  return state.rejection !== HANDLED && !state.parent;
  	};

  	var onHandleUnhandled = function (state) {
  	  call(task, globalThis, function () {
  	    var promise = state.facade;
  	    if (IS_NODE) {
  	      process.emit('rejectionHandled', promise);
  	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  	  });
  	};

  	var bind = function (fn, state, unwrap) {
  	  return function (value) {
  	    fn(state, value, unwrap);
  	  };
  	};

  	var internalReject = function (state, value, unwrap) {
  	  if (state.done) return;
  	  state.done = true;
  	  if (unwrap) state = unwrap;
  	  state.value = value;
  	  state.state = REJECTED;
  	  notify(state, true);
  	};

  	var internalResolve = function (state, value, unwrap) {
  	  if (state.done) return;
  	  state.done = true;
  	  if (unwrap) state = unwrap;
  	  try {
  	    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
  	    var then = isThenable(value);
  	    if (then) {
  	      microtask(function () {
  	        var wrapper = { done: false };
  	        try {
  	          call(then, value,
  	            bind(internalResolve, wrapper, state),
  	            bind(internalReject, wrapper, state)
  	          );
  	        } catch (error) {
  	          internalReject(wrapper, error, state);
  	        }
  	      });
  	    } else {
  	      state.value = value;
  	      state.state = FULFILLED;
  	      notify(state, false);
  	    }
  	  } catch (error) {
  	    internalReject({ done: false }, error, state);
  	  }
  	};

  	// constructor polyfill
  	if (FORCED_PROMISE_CONSTRUCTOR) {
  	  // 25.4.3.1 Promise(executor)
  	  PromiseConstructor = function Promise(executor) {
  	    anInstance(this, PromisePrototype);
  	    aCallable(executor);
  	    call(Internal, this);
  	    var state = getInternalPromiseState(this);
  	    try {
  	      executor(bind(internalResolve, state), bind(internalReject, state));
  	    } catch (error) {
  	      internalReject(state, error);
  	    }
  	  };

  	  PromisePrototype = PromiseConstructor.prototype;

  	  // eslint-disable-next-line no-unused-vars -- required for `.length`
  	  Internal = function Promise(executor) {
  	    setInternalState(this, {
  	      type: PROMISE,
  	      done: false,
  	      notified: false,
  	      parent: false,
  	      reactions: new Queue(),
  	      rejection: false,
  	      state: PENDING,
  	      value: null
  	    });
  	  };

  	  // `Promise.prototype.then` method
  	  // https://tc39.es/ecma262/#sec-promise.prototype.then
  	  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
  	    var state = getInternalPromiseState(this);
  	    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
  	    state.parent = true;
  	    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
  	    reaction.fail = isCallable(onRejected) && onRejected;
  	    reaction.domain = IS_NODE ? process.domain : undefined;
  	    if (state.state === PENDING) state.reactions.add(reaction);
  	    else microtask(function () {
  	      callReaction(reaction, state);
  	    });
  	    return reaction.promise;
  	  });

  	  OwnPromiseCapability = function () {
  	    var promise = new Internal();
  	    var state = getInternalPromiseState(promise);
  	    this.promise = promise;
  	    this.resolve = bind(internalResolve, state);
  	    this.reject = bind(internalReject, state);
  	  };

  	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
  	    return C === PromiseConstructor || C === PromiseWrapper
  	      ? new OwnPromiseCapability(C)
  	      : newGenericPromiseCapability(C);
  	  };

  	  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
  	    nativeThen = NativePromisePrototype.then;

  	    if (!NATIVE_PROMISE_SUBCLASSING) {
  	      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
  	      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
  	        var that = this;
  	        return new PromiseConstructor(function (resolve, reject) {
  	          call(nativeThen, that, resolve, reject);
  	        }).then(onFulfilled, onRejected);
  	      // https://github.com/zloirock/core-js/issues/640
  	      }, { unsafe: true });
  	    }

  	    // make `.constructor === Promise` work for native promise-based APIs
  	    try {
  	      delete NativePromisePrototype.constructor;
  	    } catch (error) { /* empty */ }

  	    // make `instanceof Promise` work for native promise-based APIs
  	    if (setPrototypeOf) {
  	      setPrototypeOf(NativePromisePrototype, PromisePrototype);
  	    }
  	  }
  	}

  	// `Promise` constructor
  	// https://tc39.es/ecma262/#sec-promise-executor
  	$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  	  Promise: PromiseConstructor
  	});

  	setToStringTag(PromiseConstructor, PROMISE, false, true);
  	setSpecies(PROMISE);
  	return es_promise_constructor;
  }

  var es_promise_all = {};

  var iterators;
  var hasRequiredIterators;

  function requireIterators () {
  	if (hasRequiredIterators) return iterators;
  	hasRequiredIterators = 1;
  	iterators = {};
  	return iterators;
  }

  var isArrayIteratorMethod;
  var hasRequiredIsArrayIteratorMethod;

  function requireIsArrayIteratorMethod () {
  	if (hasRequiredIsArrayIteratorMethod) return isArrayIteratorMethod;
  	hasRequiredIsArrayIteratorMethod = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var Iterators = requireIterators();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var ArrayPrototype = Array.prototype;

  	// check on default Array iterator
  	isArrayIteratorMethod = function (it) {
  	  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  	};
  	return isArrayIteratorMethod;
  }

  var getIteratorMethod;
  var hasRequiredGetIteratorMethod;

  function requireGetIteratorMethod () {
  	if (hasRequiredGetIteratorMethod) return getIteratorMethod;
  	hasRequiredGetIteratorMethod = 1;
  	var classof = requireClassof();
  	var getMethod = requireGetMethod();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var Iterators = requireIterators();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var ITERATOR = wellKnownSymbol('iterator');

  	getIteratorMethod = function (it) {
  	  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
  	    || getMethod(it, '@@iterator')
  	    || Iterators[classof(it)];
  	};
  	return getIteratorMethod;
  }

  var getIterator;
  var hasRequiredGetIterator;

  function requireGetIterator () {
  	if (hasRequiredGetIterator) return getIterator;
  	hasRequiredGetIterator = 1;
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var anObject = requireAnObject();
  	var tryToString = requireTryToString();
  	var getIteratorMethod = requireGetIteratorMethod();

  	var $TypeError = TypeError;

  	getIterator = function (argument, usingIterator) {
  	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  	  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  	  throw new $TypeError(tryToString(argument) + ' is not iterable');
  	};
  	return getIterator;
  }

  var iteratorClose;
  var hasRequiredIteratorClose;

  function requireIteratorClose () {
  	if (hasRequiredIteratorClose) return iteratorClose;
  	hasRequiredIteratorClose = 1;
  	var call = requireFunctionCall();
  	var anObject = requireAnObject();
  	var getMethod = requireGetMethod();

  	iteratorClose = function (iterator, kind, value) {
  	  var innerResult, innerError;
  	  anObject(iterator);
  	  try {
  	    innerResult = getMethod(iterator, 'return');
  	    if (!innerResult) {
  	      if (kind === 'throw') throw value;
  	      return value;
  	    }
  	    innerResult = call(innerResult, iterator);
  	  } catch (error) {
  	    innerError = true;
  	    innerResult = error;
  	  }
  	  if (kind === 'throw') throw value;
  	  if (innerError) throw innerResult;
  	  anObject(innerResult);
  	  return value;
  	};
  	return iteratorClose;
  }

  var iterate;
  var hasRequiredIterate;

  function requireIterate () {
  	if (hasRequiredIterate) return iterate;
  	hasRequiredIterate = 1;
  	var bind = requireFunctionBindContext();
  	var call = requireFunctionCall();
  	var anObject = requireAnObject();
  	var tryToString = requireTryToString();
  	var isArrayIteratorMethod = requireIsArrayIteratorMethod();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var getIterator = requireGetIterator();
  	var getIteratorMethod = requireGetIteratorMethod();
  	var iteratorClose = requireIteratorClose();

  	var $TypeError = TypeError;

  	var Result = function (stopped, result) {
  	  this.stopped = stopped;
  	  this.result = result;
  	};

  	var ResultPrototype = Result.prototype;

  	iterate = function (iterable, unboundFunction, options) {
  	  var that = options && options.that;
  	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  	  var IS_RECORD = !!(options && options.IS_RECORD);
  	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  	  var INTERRUPTED = !!(options && options.INTERRUPTED);
  	  var fn = bind(unboundFunction, that);
  	  var iterator, iterFn, index, length, result, next, step;

  	  var stop = function (condition) {
  	    if (iterator) iteratorClose(iterator, 'normal', condition);
  	    return new Result(true, condition);
  	  };

  	  var callFn = function (value) {
  	    if (AS_ENTRIES) {
  	      anObject(value);
  	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
  	    } return INTERRUPTED ? fn(value, stop) : fn(value);
  	  };

  	  if (IS_RECORD) {
  	    iterator = iterable.iterator;
  	  } else if (IS_ITERATOR) {
  	    iterator = iterable;
  	  } else {
  	    iterFn = getIteratorMethod(iterable);
  	    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
  	    // optimisation for array iterators
  	    if (isArrayIteratorMethod(iterFn)) {
  	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
  	        result = callFn(iterable[index]);
  	        if (result && isPrototypeOf(ResultPrototype, result)) return result;
  	      } return new Result(false);
  	    }
  	    iterator = getIterator(iterable, iterFn);
  	  }

  	  next = IS_RECORD ? iterable.next : iterator.next;
  	  while (!(step = call(next, iterator)).done) {
  	    try {
  	      result = callFn(step.value);
  	    } catch (error) {
  	      iteratorClose(iterator, 'throw', error);
  	    }
  	    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  	  } return new Result(false);
  	};
  	return iterate;
  }

  var checkCorrectnessOfIteration;
  var hasRequiredCheckCorrectnessOfIteration;

  function requireCheckCorrectnessOfIteration () {
  	if (hasRequiredCheckCorrectnessOfIteration) return checkCorrectnessOfIteration;
  	hasRequiredCheckCorrectnessOfIteration = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var SAFE_CLOSING = false;

  	try {
  	  var called = 0;
  	  var iteratorWithReturn = {
  	    next: function () {
  	      return { done: !!called++ };
  	    },
  	    'return': function () {
  	      SAFE_CLOSING = true;
  	    }
  	  };
  	  iteratorWithReturn[ITERATOR] = function () {
  	    return this;
  	  };
  	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  	  Array.from(iteratorWithReturn, function () { throw 2; });
  	} catch (error) { /* empty */ }

  	checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  	  try {
  	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  	  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  	  var ITERATION_SUPPORT = false;
  	  try {
  	    var object = {};
  	    object[ITERATOR] = function () {
  	      return {
  	        next: function () {
  	          return { done: ITERATION_SUPPORT = true };
  	        }
  	      };
  	    };
  	    exec(object);
  	  } catch (error) { /* empty */ }
  	  return ITERATION_SUPPORT;
  	};
  	return checkCorrectnessOfIteration;
  }

  var promiseStaticsIncorrectIteration;
  var hasRequiredPromiseStaticsIncorrectIteration;

  function requirePromiseStaticsIncorrectIteration () {
  	if (hasRequiredPromiseStaticsIncorrectIteration) return promiseStaticsIncorrectIteration;
  	hasRequiredPromiseStaticsIncorrectIteration = 1;
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var checkCorrectnessOfIteration = requireCheckCorrectnessOfIteration();
  	var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;

  	promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  	  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
  	});
  	return promiseStaticsIncorrectIteration;
  }

  var hasRequiredEs_promise_all;

  function requireEs_promise_all () {
  	if (hasRequiredEs_promise_all) return es_promise_all;
  	hasRequiredEs_promise_all = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();
  	var perform = requirePerform();
  	var iterate = requireIterate();
  	var PROMISE_STATICS_INCORRECT_ITERATION = requirePromiseStaticsIncorrectIteration();

  	// `Promise.all` method
  	// https://tc39.es/ecma262/#sec-promise.all
  	$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  	  all: function all(iterable) {
  	    var C = this;
  	    var capability = newPromiseCapabilityModule.f(C);
  	    var resolve = capability.resolve;
  	    var reject = capability.reject;
  	    var result = perform(function () {
  	      var $promiseResolve = aCallable(C.resolve);
  	      var values = [];
  	      var counter = 0;
  	      var remaining = 1;
  	      iterate(iterable, function (promise) {
  	        var index = counter++;
  	        var alreadyCalled = false;
  	        remaining++;
  	        call($promiseResolve, C, promise).then(function (value) {
  	          if (alreadyCalled) return;
  	          alreadyCalled = true;
  	          values[index] = value;
  	          --remaining || resolve(values);
  	        }, reject);
  	      });
  	      --remaining || resolve(values);
  	    });
  	    if (result.error) reject(result.value);
  	    return capability.promise;
  	  }
  	});
  	return es_promise_all;
  }

  var es_promise_catch = {};

  var hasRequiredEs_promise_catch;

  function requireEs_promise_catch () {
  	if (hasRequiredEs_promise_catch) return es_promise_catch;
  	hasRequiredEs_promise_catch = 1;
  	var $ = require_export();
  	var IS_PURE = requireIsPure();
  	var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var getBuiltIn = requireGetBuiltIn();
  	var isCallable = requireIsCallable();
  	var defineBuiltIn = requireDefineBuiltIn();

  	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  	// `Promise.prototype.catch` method
  	// https://tc39.es/ecma262/#sec-promise.prototype.catch
  	$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  	  'catch': function (onRejected) {
  	    return this.then(undefined, onRejected);
  	  }
  	});

  	// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  	if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  	  var method = getBuiltIn('Promise').prototype['catch'];
  	  if (NativePromisePrototype['catch'] !== method) {
  	    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  	  }
  	}
  	return es_promise_catch;
  }

  var es_promise_race = {};

  var hasRequiredEs_promise_race;

  function requireEs_promise_race () {
  	if (hasRequiredEs_promise_race) return es_promise_race;
  	hasRequiredEs_promise_race = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var aCallable = requireACallable();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();
  	var perform = requirePerform();
  	var iterate = requireIterate();
  	var PROMISE_STATICS_INCORRECT_ITERATION = requirePromiseStaticsIncorrectIteration();

  	// `Promise.race` method
  	// https://tc39.es/ecma262/#sec-promise.race
  	$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  	  race: function race(iterable) {
  	    var C = this;
  	    var capability = newPromiseCapabilityModule.f(C);
  	    var reject = capability.reject;
  	    var result = perform(function () {
  	      var $promiseResolve = aCallable(C.resolve);
  	      iterate(iterable, function (promise) {
  	        call($promiseResolve, C, promise).then(capability.resolve, reject);
  	      });
  	    });
  	    if (result.error) reject(result.value);
  	    return capability.promise;
  	  }
  	});
  	return es_promise_race;
  }

  var es_promise_reject = {};

  var hasRequiredEs_promise_reject;

  function requireEs_promise_reject () {
  	if (hasRequiredEs_promise_reject) return es_promise_reject;
  	hasRequiredEs_promise_reject = 1;
  	var $ = require_export();
  	var newPromiseCapabilityModule = requireNewPromiseCapability();
  	var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;

  	// `Promise.reject` method
  	// https://tc39.es/ecma262/#sec-promise.reject
  	$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  	  reject: function reject(r) {
  	    var capability = newPromiseCapabilityModule.f(this);
  	    var capabilityReject = capability.reject;
  	    capabilityReject(r);
  	    return capability.promise;
  	  }
  	});
  	return es_promise_reject;
  }

  var es_promise_resolve = {};

  var promiseResolve;
  var hasRequiredPromiseResolve;

  function requirePromiseResolve () {
  	if (hasRequiredPromiseResolve) return promiseResolve;
  	hasRequiredPromiseResolve = 1;
  	var anObject = requireAnObject();
  	var isObject = requireIsObject();
  	var newPromiseCapability = requireNewPromiseCapability();

  	promiseResolve = function (C, x) {
  	  anObject(C);
  	  if (isObject(x) && x.constructor === C) return x;
  	  var promiseCapability = newPromiseCapability.f(C);
  	  var resolve = promiseCapability.resolve;
  	  resolve(x);
  	  return promiseCapability.promise;
  	};
  	return promiseResolve;
  }

  var hasRequiredEs_promise_resolve;

  function requireEs_promise_resolve () {
  	if (hasRequiredEs_promise_resolve) return es_promise_resolve;
  	hasRequiredEs_promise_resolve = 1;
  	var $ = require_export();
  	var getBuiltIn = requireGetBuiltIn();
  	var IS_PURE = requireIsPure();
  	var NativePromiseConstructor = requirePromiseNativeConstructor();
  	var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;
  	var promiseResolve = requirePromiseResolve();

  	var PromiseConstructorWrapper = getBuiltIn('Promise');
  	var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

  	// `Promise.resolve` method
  	// https://tc39.es/ecma262/#sec-promise.resolve
  	$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  	  resolve: function resolve(x) {
  	    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  	  }
  	});
  	return es_promise_resolve;
  }

  var hasRequiredEs_promise;

  function requireEs_promise () {
  	if (hasRequiredEs_promise) return es_promise;
  	hasRequiredEs_promise = 1;
  	// TODO: Remove this module from `core-js@4` since it's split to modules listed below
  	requireEs_promise_constructor();
  	requireEs_promise_all();
  	requireEs_promise_catch();
  	requireEs_promise_race();
  	requireEs_promise_reject();
  	requireEs_promise_resolve();
  	return es_promise;
  }

  requireEs_promise();

  var es_regexp_exec = {};

  var regexpFlags;
  var hasRequiredRegexpFlags;

  function requireRegexpFlags () {
  	if (hasRequiredRegexpFlags) return regexpFlags;
  	hasRequiredRegexpFlags = 1;
  	var anObject = requireAnObject();

  	// `RegExp.prototype.flags` getter implementation
  	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  	regexpFlags = function () {
  	  var that = anObject(this);
  	  var result = '';
  	  if (that.hasIndices) result += 'd';
  	  if (that.global) result += 'g';
  	  if (that.ignoreCase) result += 'i';
  	  if (that.multiline) result += 'm';
  	  if (that.dotAll) result += 's';
  	  if (that.unicode) result += 'u';
  	  if (that.unicodeSets) result += 'v';
  	  if (that.sticky) result += 'y';
  	  return result;
  	};
  	return regexpFlags;
  }

  var regexpStickyHelpers;
  var hasRequiredRegexpStickyHelpers;

  function requireRegexpStickyHelpers () {
  	if (hasRequiredRegexpStickyHelpers) return regexpStickyHelpers;
  	hasRequiredRegexpStickyHelpers = 1;
  	var fails = requireFails();
  	var globalThis = requireGlobalThis();

  	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  	var $RegExp = globalThis.RegExp;

  	var UNSUPPORTED_Y = fails(function () {
  	  var re = $RegExp('a', 'y');
  	  re.lastIndex = 2;
  	  return re.exec('abcd') !== null;
  	});

  	// UC Browser bug
  	// https://github.com/zloirock/core-js/issues/1008
  	var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  	  return !$RegExp('a', 'y').sticky;
  	});

  	var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  	  var re = $RegExp('^r', 'gy');
  	  re.lastIndex = 2;
  	  return re.exec('str') !== null;
  	});

  	regexpStickyHelpers = {
  	  BROKEN_CARET: BROKEN_CARET,
  	  MISSED_STICKY: MISSED_STICKY,
  	  UNSUPPORTED_Y: UNSUPPORTED_Y
  	};
  	return regexpStickyHelpers;
  }

  var regexpUnsupportedDotAll;
  var hasRequiredRegexpUnsupportedDotAll;

  function requireRegexpUnsupportedDotAll () {
  	if (hasRequiredRegexpUnsupportedDotAll) return regexpUnsupportedDotAll;
  	hasRequiredRegexpUnsupportedDotAll = 1;
  	var fails = requireFails();
  	var globalThis = requireGlobalThis();

  	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  	var $RegExp = globalThis.RegExp;

  	regexpUnsupportedDotAll = fails(function () {
  	  var re = $RegExp('.', 's');
  	  return !(re.dotAll && re.test('\n') && re.flags === 's');
  	});
  	return regexpUnsupportedDotAll;
  }

  var regexpUnsupportedNcg;
  var hasRequiredRegexpUnsupportedNcg;

  function requireRegexpUnsupportedNcg () {
  	if (hasRequiredRegexpUnsupportedNcg) return regexpUnsupportedNcg;
  	hasRequiredRegexpUnsupportedNcg = 1;
  	var fails = requireFails();
  	var globalThis = requireGlobalThis();

  	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  	var $RegExp = globalThis.RegExp;

  	regexpUnsupportedNcg = fails(function () {
  	  var re = $RegExp('(?<a>b)', 'g');
  	  return re.exec('b').groups.a !== 'b' ||
  	    'b'.replace(re, '$<a>c') !== 'bc';
  	});
  	return regexpUnsupportedNcg;
  }

  var regexpExec;
  var hasRequiredRegexpExec;

  function requireRegexpExec () {
  	if (hasRequiredRegexpExec) return regexpExec;
  	hasRequiredRegexpExec = 1;
  	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  	/* eslint-disable regexp/no-useless-quantifier -- testing */
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var toString = requireToString();
  	var regexpFlags = requireRegexpFlags();
  	var stickyHelpers = requireRegexpStickyHelpers();
  	var shared = requireShared();
  	var create = requireObjectCreate();
  	var getInternalState = requireInternalState().get;
  	var UNSUPPORTED_DOT_ALL = requireRegexpUnsupportedDotAll();
  	var UNSUPPORTED_NCG = requireRegexpUnsupportedNcg();

  	var nativeReplace = shared('native-string-replace', String.prototype.replace);
  	var nativeExec = RegExp.prototype.exec;
  	var patchedExec = nativeExec;
  	var charAt = uncurryThis(''.charAt);
  	var indexOf = uncurryThis(''.indexOf);
  	var replace = uncurryThis(''.replace);
  	var stringSlice = uncurryThis(''.slice);

  	var UPDATES_LAST_INDEX_WRONG = (function () {
  	  var re1 = /a/;
  	  var re2 = /b*/g;
  	  call(nativeExec, re1, 'a');
  	  call(nativeExec, re2, 'a');
  	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  	})();

  	var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

  	// nonparticipating capturing group, copied from es5-shim's String#split patch.
  	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  	if (PATCH) {
  	  patchedExec = function exec(string) {
  	    var re = this;
  	    var state = getInternalState(re);
  	    var str = toString(string);
  	    var raw = state.raw;
  	    var result, reCopy, lastIndex, match, i, object, group;

  	    if (raw) {
  	      raw.lastIndex = re.lastIndex;
  	      result = call(patchedExec, raw, str);
  	      re.lastIndex = raw.lastIndex;
  	      return result;
  	    }

  	    var groups = state.groups;
  	    var sticky = UNSUPPORTED_Y && re.sticky;
  	    var flags = call(regexpFlags, re);
  	    var source = re.source;
  	    var charsAdded = 0;
  	    var strCopy = str;

  	    if (sticky) {
  	      flags = replace(flags, 'y', '');
  	      if (indexOf(flags, 'g') === -1) {
  	        flags += 'g';
  	      }

  	      strCopy = stringSlice(str, re.lastIndex);
  	      // Support anchored sticky behavior.
  	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
  	        source = '(?: ' + source + ')';
  	        strCopy = ' ' + strCopy;
  	        charsAdded++;
  	      }
  	      // ^(? + rx + ) is needed, in combination with some str slicing, to
  	      // simulate the 'y' flag.
  	      reCopy = new RegExp('^(?:' + source + ')', flags);
  	    }

  	    if (NPCG_INCLUDED) {
  	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
  	    }
  	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

  	    match = call(nativeExec, sticky ? reCopy : re, strCopy);

  	    if (sticky) {
  	      if (match) {
  	        match.input = stringSlice(match.input, charsAdded);
  	        match[0] = stringSlice(match[0], charsAdded);
  	        match.index = re.lastIndex;
  	        re.lastIndex += match[0].length;
  	      } else re.lastIndex = 0;
  	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
  	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
  	    }
  	    if (NPCG_INCLUDED && match && match.length > 1) {
  	      // Fix browsers whose `exec` methods don't consistently return `undefined`
  	      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
  	      call(nativeReplace, match[0], reCopy, function () {
  	        for (i = 1; i < arguments.length - 2; i++) {
  	          if (arguments[i] === undefined) match[i] = undefined;
  	        }
  	      });
  	    }

  	    if (match && groups) {
  	      match.groups = object = create(null);
  	      for (i = 0; i < groups.length; i++) {
  	        group = groups[i];
  	        object[group[0]] = match[group[1]];
  	      }
  	    }

  	    return match;
  	  };
  	}

  	regexpExec = patchedExec;
  	return regexpExec;
  }

  var hasRequiredEs_regexp_exec;

  function requireEs_regexp_exec () {
  	if (hasRequiredEs_regexp_exec) return es_regexp_exec;
  	hasRequiredEs_regexp_exec = 1;
  	var $ = require_export();
  	var exec = requireRegexpExec();

  	// `RegExp.prototype.exec` method
  	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
  	$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  	  exec: exec
  	});
  	return es_regexp_exec;
  }

  requireEs_regexp_exec();

  var es_regexp_toString = {};

  var regexpGetFlags;
  var hasRequiredRegexpGetFlags;

  function requireRegexpGetFlags () {
  	if (hasRequiredRegexpGetFlags) return regexpGetFlags;
  	hasRequiredRegexpGetFlags = 1;
  	var call = requireFunctionCall();
  	var hasOwn = requireHasOwnProperty();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var regExpFlags = requireRegexpFlags();

  	var RegExpPrototype = RegExp.prototype;

  	regexpGetFlags = function (R) {
  	  var flags = R.flags;
  	  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
  	    ? call(regExpFlags, R) : flags;
  	};
  	return regexpGetFlags;
  }

  var hasRequiredEs_regexp_toString;

  function requireEs_regexp_toString () {
  	if (hasRequiredEs_regexp_toString) return es_regexp_toString;
  	hasRequiredEs_regexp_toString = 1;
  	var PROPER_FUNCTION_NAME = requireFunctionName().PROPER;
  	var defineBuiltIn = requireDefineBuiltIn();
  	var anObject = requireAnObject();
  	var $toString = requireToString();
  	var fails = requireFails();
  	var getRegExpFlags = requireRegexpGetFlags();

  	var TO_STRING = 'toString';
  	var RegExpPrototype = RegExp.prototype;
  	var nativeToString = RegExpPrototype[TO_STRING];

  	var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
  	// FF44- RegExp#toString has a wrong name
  	var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

  	// `RegExp.prototype.toString` method
  	// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  	if (NOT_GENERIC || INCORRECT_NAME) {
  	  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
  	    var R = anObject(this);
  	    var pattern = $toString(R.source);
  	    var flags = $toString(getRegExpFlags(R));
  	    return '/' + pattern + '/' + flags;
  	  }, { unsafe: true });
  	}
  	return es_regexp_toString;
  }

  requireEs_regexp_toString();

  var es_string_includes = {};

  var isRegexp;
  var hasRequiredIsRegexp;

  function requireIsRegexp () {
  	if (hasRequiredIsRegexp) return isRegexp;
  	hasRequiredIsRegexp = 1;
  	var isObject = requireIsObject();
  	var classof = requireClassofRaw();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var MATCH = wellKnownSymbol('match');

  	// `IsRegExp` abstract operation
  	// https://tc39.es/ecma262/#sec-isregexp
  	isRegexp = function (it) {
  	  var isRegExp;
  	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
  	};
  	return isRegexp;
  }

  var notARegexp;
  var hasRequiredNotARegexp;

  function requireNotARegexp () {
  	if (hasRequiredNotARegexp) return notARegexp;
  	hasRequiredNotARegexp = 1;
  	var isRegExp = requireIsRegexp();

  	var $TypeError = TypeError;

  	notARegexp = function (it) {
  	  if (isRegExp(it)) {
  	    throw new $TypeError("The method doesn't accept regular expressions");
  	  } return it;
  	};
  	return notARegexp;
  }

  var correctIsRegexpLogic;
  var hasRequiredCorrectIsRegexpLogic;

  function requireCorrectIsRegexpLogic () {
  	if (hasRequiredCorrectIsRegexpLogic) return correctIsRegexpLogic;
  	hasRequiredCorrectIsRegexpLogic = 1;
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var MATCH = wellKnownSymbol('match');

  	correctIsRegexpLogic = function (METHOD_NAME) {
  	  var regexp = /./;
  	  try {
  	    '/./'[METHOD_NAME](regexp);
  	  } catch (error1) {
  	    try {
  	      regexp[MATCH] = false;
  	      return '/./'[METHOD_NAME](regexp);
  	    } catch (error2) { /* empty */ }
  	  } return false;
  	};
  	return correctIsRegexpLogic;
  }

  var hasRequiredEs_string_includes;

  function requireEs_string_includes () {
  	if (hasRequiredEs_string_includes) return es_string_includes;
  	hasRequiredEs_string_includes = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThis();
  	var notARegExp = requireNotARegexp();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var toString = requireToString();
  	var correctIsRegExpLogic = requireCorrectIsRegexpLogic();

  	var stringIndexOf = uncurryThis(''.indexOf);

  	// `String.prototype.includes` method
  	// https://tc39.es/ecma262/#sec-string.prototype.includes
  	$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  	  includes: function includes(searchString /* , position = 0 */) {
  	    return !!~stringIndexOf(
  	      toString(requireObjectCoercible(this)),
  	      toString(notARegExp(searchString)),
  	      arguments.length > 1 ? arguments[1] : undefined
  	    );
  	  }
  	});
  	return es_string_includes;
  }

  requireEs_string_includes();

  var es_string_split = {};

  var fixRegexpWellKnownSymbolLogic;
  var hasRequiredFixRegexpWellKnownSymbolLogic;

  function requireFixRegexpWellKnownSymbolLogic () {
  	if (hasRequiredFixRegexpWellKnownSymbolLogic) return fixRegexpWellKnownSymbolLogic;
  	hasRequiredFixRegexpWellKnownSymbolLogic = 1;
  	// TODO: Remove from `core-js@4` since it's moved to entry points
  	requireEs_regexp_exec();
  	var call = requireFunctionCall();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var regexpExec = requireRegexpExec();
  	var fails = requireFails();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();

  	var SPECIES = wellKnownSymbol('species');
  	var RegExpPrototype = RegExp.prototype;

  	fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  	  var SYMBOL = wellKnownSymbol(KEY);

  	  var DELEGATES_TO_SYMBOL = !fails(function () {
  	    // String methods call symbol-named RegExp methods
  	    var O = {};
  	    O[SYMBOL] = function () { return 7; };
  	    return ''[KEY](O) !== 7;
  	  });

  	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
  	    // Symbol-named RegExp methods call .exec
  	    var execCalled = false;
  	    var re = /a/;

  	    if (KEY === 'split') {
  	      // We can't use real regex here since it causes deoptimization
  	      // and serious performance degradation in V8
  	      // https://github.com/zloirock/core-js/issues/306
  	      re = {};
  	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
  	      // a new one. We need to return the patched regex when creating the new one.
  	      re.constructor = {};
  	      re.constructor[SPECIES] = function () { return re; };
  	      re.flags = '';
  	      re[SYMBOL] = /./[SYMBOL];
  	    }

  	    re.exec = function () {
  	      execCalled = true;
  	      return null;
  	    };

  	    re[SYMBOL]('');
  	    return !execCalled;
  	  });

  	  if (
  	    !DELEGATES_TO_SYMBOL ||
  	    !DELEGATES_TO_EXEC ||
  	    FORCED
  	  ) {
  	    var nativeRegExpMethod = /./[SYMBOL];
  	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
  	      var $exec = regexp.exec;
  	      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
  	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
  	          // The native String method already delegates to @@method (this
  	          // polyfilled function), leasing to infinite recursion.
  	          // We avoid it by directly calling the native @@method method.
  	          return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
  	        }
  	        return { done: true, value: call(nativeMethod, str, regexp, arg2) };
  	      }
  	      return { done: false };
  	    });

  	    defineBuiltIn(String.prototype, KEY, methods[0]);
  	    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  	  }

  	  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
  	};
  	return fixRegexpWellKnownSymbolLogic;
  }

  var stringMultibyte;
  var hasRequiredStringMultibyte;

  function requireStringMultibyte () {
  	if (hasRequiredStringMultibyte) return stringMultibyte;
  	hasRequiredStringMultibyte = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();
  	var toString = requireToString();
  	var requireObjectCoercible = requireRequireObjectCoercible();

  	var charAt = uncurryThis(''.charAt);
  	var charCodeAt = uncurryThis(''.charCodeAt);
  	var stringSlice = uncurryThis(''.slice);

  	var createMethod = function (CONVERT_TO_STRING) {
  	  return function ($this, pos) {
  	    var S = toString(requireObjectCoercible($this));
  	    var position = toIntegerOrInfinity(pos);
  	    var size = S.length;
  	    var first, second;
  	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  	    first = charCodeAt(S, position);
  	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
  	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
  	        ? CONVERT_TO_STRING
  	          ? charAt(S, position)
  	          : first
  	        : CONVERT_TO_STRING
  	          ? stringSlice(S, position, position + 2)
  	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  	  };
  	};

  	stringMultibyte = {
  	  // `String.prototype.codePointAt` method
  	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  	  codeAt: createMethod(false),
  	  // `String.prototype.at` method
  	  // https://github.com/mathiasbynens/String.prototype.at
  	  charAt: createMethod(true)
  	};
  	return stringMultibyte;
  }

  var advanceStringIndex;
  var hasRequiredAdvanceStringIndex;

  function requireAdvanceStringIndex () {
  	if (hasRequiredAdvanceStringIndex) return advanceStringIndex;
  	hasRequiredAdvanceStringIndex = 1;
  	var charAt = requireStringMultibyte().charAt;

  	// `AdvanceStringIndex` abstract operation
  	// https://tc39.es/ecma262/#sec-advancestringindex
  	advanceStringIndex = function (S, index, unicode) {
  	  return index + (unicode ? charAt(S, index).length : 1);
  	};
  	return advanceStringIndex;
  }

  var regexpExecAbstract;
  var hasRequiredRegexpExecAbstract;

  function requireRegexpExecAbstract () {
  	if (hasRequiredRegexpExecAbstract) return regexpExecAbstract;
  	hasRequiredRegexpExecAbstract = 1;
  	var call = requireFunctionCall();
  	var anObject = requireAnObject();
  	var isCallable = requireIsCallable();
  	var classof = requireClassofRaw();
  	var regexpExec = requireRegexpExec();

  	var $TypeError = TypeError;

  	// `RegExpExec` abstract operation
  	// https://tc39.es/ecma262/#sec-regexpexec
  	regexpExecAbstract = function (R, S) {
  	  var exec = R.exec;
  	  if (isCallable(exec)) {
  	    var result = call(exec, R, S);
  	    if (result !== null) anObject(result);
  	    return result;
  	  }
  	  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  	  throw new $TypeError('RegExp#exec called on incompatible receiver');
  	};
  	return regexpExecAbstract;
  }

  var hasRequiredEs_string_split;

  function requireEs_string_split () {
  	if (hasRequiredEs_string_split) return es_string_split;
  	hasRequiredEs_string_split = 1;
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  	var anObject = requireAnObject();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var speciesConstructor = requireSpeciesConstructor();
  	var advanceStringIndex = requireAdvanceStringIndex();
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var getMethod = requireGetMethod();
  	var regExpExec = requireRegexpExecAbstract();
  	var stickyHelpers = requireRegexpStickyHelpers();
  	var fails = requireFails();

  	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  	var MAX_UINT32 = 0xFFFFFFFF;
  	var min = Math.min;
  	var push = uncurryThis([].push);
  	var stringSlice = uncurryThis(''.slice);

  	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
  	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  	  var re = /(?:)/;
  	  var originalExec = re.exec;
  	  re.exec = function () { return originalExec.apply(this, arguments); };
  	  var result = 'ab'.split(re);
  	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  	});

  	var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  	  'test'.split(/(?:)/, -1).length !== 4 ||
  	  'ab'.split(/(?:ab)*/).length !== 2 ||
  	  '.'.split(/(.?)(.?)/).length !== 4 ||
  	  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  	  '.'.split(/()()/).length > 1 ||
  	  ''.split(/.?/).length;

  	// @@split logic
  	fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  	  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
  	    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  	  } : nativeSplit;

  	  return [
  	    // `String.prototype.split` method
  	    // https://tc39.es/ecma262/#sec-string.prototype.split
  	    function split(separator, limit) {
  	      var O = requireObjectCoercible(this);
  	      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
  	      return splitter
  	        ? call(splitter, separator, O, limit)
  	        : call(internalSplit, toString(O), separator, limit);
  	    },
  	    // `RegExp.prototype[@@split]` method
  	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  	    //
  	    // NOTE: This cannot be properly polyfilled in engines that don't support
  	    // the 'y' flag.
  	    function (string, limit) {
  	      var rx = anObject(this);
  	      var S = toString(string);

  	      if (!BUGGY) {
  	        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
  	        if (res.done) return res.value;
  	      }

  	      var C = speciesConstructor(rx, RegExp);
  	      var unicodeMatching = rx.unicode;
  	      var flags = (rx.ignoreCase ? 'i' : '') +
  	                  (rx.multiline ? 'm' : '') +
  	                  (rx.unicode ? 'u' : '') +
  	                  (UNSUPPORTED_Y ? 'g' : 'y');
  	      // ^(? + rx + ) is needed, in combination with some S slicing, to
  	      // simulate the 'y' flag.
  	      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
  	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
  	      if (lim === 0) return [];
  	      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
  	      var p = 0;
  	      var q = 0;
  	      var A = [];
  	      while (q < S.length) {
  	        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
  	        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
  	        var e;
  	        if (
  	          z === null ||
  	          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
  	        ) {
  	          q = advanceStringIndex(S, q, unicodeMatching);
  	        } else {
  	          push(A, stringSlice(S, p, q));
  	          if (A.length === lim) return A;
  	          for (var i = 1; i <= z.length - 1; i++) {
  	            push(A, z[i]);
  	            if (A.length === lim) return A;
  	          }
  	          q = p = e;
  	        }
  	      }
  	      push(A, stringSlice(S, p));
  	      return A;
  	    }
  	  ];
  	}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
  	return es_string_split;
  }

  requireEs_string_split();

  var es_string_trim = {};

  var stringTrimForced;
  var hasRequiredStringTrimForced;

  function requireStringTrimForced () {
  	if (hasRequiredStringTrimForced) return stringTrimForced;
  	hasRequiredStringTrimForced = 1;
  	var PROPER_FUNCTION_NAME = requireFunctionName().PROPER;
  	var fails = requireFails();
  	var whitespaces = requireWhitespaces();

  	var non = '\u200B\u0085\u180E';

  	// check that a method works with the correct list
  	// of whitespaces and has a correct name
  	stringTrimForced = function (METHOD_NAME) {
  	  return fails(function () {
  	    return !!whitespaces[METHOD_NAME]()
  	      || non[METHOD_NAME]() !== non
  	      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  	  });
  	};
  	return stringTrimForced;
  }

  var hasRequiredEs_string_trim;

  function requireEs_string_trim () {
  	if (hasRequiredEs_string_trim) return es_string_trim;
  	hasRequiredEs_string_trim = 1;
  	var $ = require_export();
  	var $trim = requireStringTrim().trim;
  	var forcedStringTrimMethod = requireStringTrimForced();

  	// `String.prototype.trim` method
  	// https://tc39.es/ecma262/#sec-string.prototype.trim
  	$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  	  trim: function trim() {
  	    return $trim(this);
  	  }
  	});
  	return es_string_trim;
  }

  requireEs_string_trim();

  var web_domCollections_forEach = {};

  var domIterables;
  var hasRequiredDomIterables;

  function requireDomIterables () {
  	if (hasRequiredDomIterables) return domIterables;
  	hasRequiredDomIterables = 1;
  	// iterable DOM collections
  	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  	domIterables = {
  	  CSSRuleList: 0,
  	  CSSStyleDeclaration: 0,
  	  CSSValueList: 0,
  	  ClientRectList: 0,
  	  DOMRectList: 0,
  	  DOMStringList: 0,
  	  DOMTokenList: 1,
  	  DataTransferItemList: 0,
  	  FileList: 0,
  	  HTMLAllCollection: 0,
  	  HTMLCollection: 0,
  	  HTMLFormElement: 0,
  	  HTMLSelectElement: 0,
  	  MediaList: 0,
  	  MimeTypeArray: 0,
  	  NamedNodeMap: 0,
  	  NodeList: 1,
  	  PaintRequestList: 0,
  	  Plugin: 0,
  	  PluginArray: 0,
  	  SVGLengthList: 0,
  	  SVGNumberList: 0,
  	  SVGPathSegList: 0,
  	  SVGPointList: 0,
  	  SVGStringList: 0,
  	  SVGTransformList: 0,
  	  SourceBufferList: 0,
  	  StyleSheetList: 0,
  	  TextTrackCueList: 0,
  	  TextTrackList: 0,
  	  TouchList: 0
  	};
  	return domIterables;
  }

  var domTokenListPrototype;
  var hasRequiredDomTokenListPrototype;

  function requireDomTokenListPrototype () {
  	if (hasRequiredDomTokenListPrototype) return domTokenListPrototype;
  	hasRequiredDomTokenListPrototype = 1;
  	// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  	var documentCreateElement = requireDocumentCreateElement();

  	var classList = documentCreateElement('span').classList;
  	var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

  	domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;
  	return domTokenListPrototype;
  }

  var arrayForEach;
  var hasRequiredArrayForEach;

  function requireArrayForEach () {
  	if (hasRequiredArrayForEach) return arrayForEach;
  	hasRequiredArrayForEach = 1;
  	var $forEach = requireArrayIteration().forEach;
  	var arrayMethodIsStrict = requireArrayMethodIsStrict();

  	var STRICT_METHOD = arrayMethodIsStrict('forEach');

  	// `Array.prototype.forEach` method implementation
  	// https://tc39.es/ecma262/#sec-array.prototype.foreach
  	arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
  	} : [].forEach;
  	return arrayForEach;
  }

  var hasRequiredWeb_domCollections_forEach;

  function requireWeb_domCollections_forEach () {
  	if (hasRequiredWeb_domCollections_forEach) return web_domCollections_forEach;
  	hasRequiredWeb_domCollections_forEach = 1;
  	var globalThis = requireGlobalThis();
  	var DOMIterables = requireDomIterables();
  	var DOMTokenListPrototype = requireDomTokenListPrototype();
  	var forEach = requireArrayForEach();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();

  	var handlePrototype = function (CollectionPrototype) {
  	  // some Chrome versions have non-configurable methods on DOMTokenList
  	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
  	    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  	  } catch (error) {
  	    CollectionPrototype.forEach = forEach;
  	  }
  	};

  	for (var COLLECTION_NAME in DOMIterables) {
  	  if (DOMIterables[COLLECTION_NAME]) {
  	    handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
  	  }
  	}

  	handlePrototype(DOMTokenListPrototype);
  	return web_domCollections_forEach;
  }

  requireWeb_domCollections_forEach();

  var es_array_join = {};

  var hasRequiredEs_array_join;

  function requireEs_array_join () {
  	if (hasRequiredEs_array_join) return es_array_join;
  	hasRequiredEs_array_join = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThis();
  	var IndexedObject = requireIndexedObject();
  	var toIndexedObject = requireToIndexedObject();
  	var arrayMethodIsStrict = requireArrayMethodIsStrict();

  	var nativeJoin = uncurryThis([].join);

  	var ES3_STRINGS = IndexedObject !== Object;
  	var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

  	// `Array.prototype.join` method
  	// https://tc39.es/ecma262/#sec-array.prototype.join
  	$({ target: 'Array', proto: true, forced: FORCED }, {
  	  join: function join(separator) {
  	    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  	  }
  	});
  	return es_array_join;
  }

  requireEs_array_join();

  var es_array_sort = {};

  var deletePropertyOrThrow;
  var hasRequiredDeletePropertyOrThrow;

  function requireDeletePropertyOrThrow () {
  	if (hasRequiredDeletePropertyOrThrow) return deletePropertyOrThrow;
  	hasRequiredDeletePropertyOrThrow = 1;
  	var tryToString = requireTryToString();

  	var $TypeError = TypeError;

  	deletePropertyOrThrow = function (O, P) {
  	  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  	};
  	return deletePropertyOrThrow;
  }

  var arraySort;
  var hasRequiredArraySort;

  function requireArraySort () {
  	if (hasRequiredArraySort) return arraySort;
  	hasRequiredArraySort = 1;
  	var arraySlice = requireArraySlice();

  	var floor = Math.floor;

  	var sort = function (array, comparefn) {
  	  var length = array.length;

  	  if (length < 8) {
  	    // insertion sort
  	    var i = 1;
  	    var element, j;

  	    while (i < length) {
  	      j = i;
  	      element = array[i];
  	      while (j && comparefn(array[j - 1], element) > 0) {
  	        array[j] = array[--j];
  	      }
  	      if (j !== i++) array[j] = element;
  	    }
  	  } else {
  	    // merge sort
  	    var middle = floor(length / 2);
  	    var left = sort(arraySlice(array, 0, middle), comparefn);
  	    var right = sort(arraySlice(array, middle), comparefn);
  	    var llength = left.length;
  	    var rlength = right.length;
  	    var lindex = 0;
  	    var rindex = 0;

  	    while (lindex < llength || rindex < rlength) {
  	      array[lindex + rindex] = (lindex < llength && rindex < rlength)
  	        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
  	        : lindex < llength ? left[lindex++] : right[rindex++];
  	    }
  	  }

  	  return array;
  	};

  	arraySort = sort;
  	return arraySort;
  }

  var environmentFfVersion;
  var hasRequiredEnvironmentFfVersion;

  function requireEnvironmentFfVersion () {
  	if (hasRequiredEnvironmentFfVersion) return environmentFfVersion;
  	hasRequiredEnvironmentFfVersion = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	var firefox = userAgent.match(/firefox\/(\d+)/i);

  	environmentFfVersion = !!firefox && +firefox[1];
  	return environmentFfVersion;
  }

  var environmentIsIeOrEdge;
  var hasRequiredEnvironmentIsIeOrEdge;

  function requireEnvironmentIsIeOrEdge () {
  	if (hasRequiredEnvironmentIsIeOrEdge) return environmentIsIeOrEdge;
  	hasRequiredEnvironmentIsIeOrEdge = 1;
  	var UA = requireEnvironmentUserAgent();

  	environmentIsIeOrEdge = /MSIE|Trident/.test(UA);
  	return environmentIsIeOrEdge;
  }

  var environmentWebkitVersion;
  var hasRequiredEnvironmentWebkitVersion;

  function requireEnvironmentWebkitVersion () {
  	if (hasRequiredEnvironmentWebkitVersion) return environmentWebkitVersion;
  	hasRequiredEnvironmentWebkitVersion = 1;
  	var userAgent = requireEnvironmentUserAgent();

  	var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

  	environmentWebkitVersion = !!webkit && +webkit[1];
  	return environmentWebkitVersion;
  }

  var hasRequiredEs_array_sort;

  function requireEs_array_sort () {
  	if (hasRequiredEs_array_sort) return es_array_sort;
  	hasRequiredEs_array_sort = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThis();
  	var aCallable = requireACallable();
  	var toObject = requireToObject();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var deletePropertyOrThrow = requireDeletePropertyOrThrow();
  	var toString = requireToString();
  	var fails = requireFails();
  	var internalSort = requireArraySort();
  	var arrayMethodIsStrict = requireArrayMethodIsStrict();
  	var FF = requireEnvironmentFfVersion();
  	var IE_OR_EDGE = requireEnvironmentIsIeOrEdge();
  	var V8 = requireEnvironmentV8Version();
  	var WEBKIT = requireEnvironmentWebkitVersion();

  	var test = [];
  	var nativeSort = uncurryThis(test.sort);
  	var push = uncurryThis(test.push);

  	// IE8-
  	var FAILS_ON_UNDEFINED = fails(function () {
  	  test.sort(undefined);
  	});
  	// V8 bug
  	var FAILS_ON_NULL = fails(function () {
  	  test.sort(null);
  	});
  	// Old WebKit
  	var STRICT_METHOD = arrayMethodIsStrict('sort');

  	var STABLE_SORT = !fails(function () {
  	  // feature detection can be too slow, so check engines versions
  	  if (V8) return V8 < 70;
  	  if (FF && FF > 3) return;
  	  if (IE_OR_EDGE) return true;
  	  if (WEBKIT) return WEBKIT < 603;

  	  var result = '';
  	  var code, chr, value, index;

  	  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  	  for (code = 65; code < 76; code++) {
  	    chr = String.fromCharCode(code);

  	    switch (code) {
  	      case 66: case 69: case 70: case 72: value = 3; break;
  	      case 68: case 71: value = 4; break;
  	      default: value = 2;
  	    }

  	    for (index = 0; index < 47; index++) {
  	      test.push({ k: chr + index, v: value });
  	    }
  	  }

  	  test.sort(function (a, b) { return b.v - a.v; });

  	  for (index = 0; index < test.length; index++) {
  	    chr = test[index].k.charAt(0);
  	    if (result.charAt(result.length - 1) !== chr) result += chr;
  	  }

  	  return result !== 'DGBEFHACIJK';
  	});

  	var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

  	var getSortCompare = function (comparefn) {
  	  return function (x, y) {
  	    if (y === undefined) return -1;
  	    if (x === undefined) return 1;
  	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
  	    return toString(x) > toString(y) ? 1 : -1;
  	  };
  	};

  	// `Array.prototype.sort` method
  	// https://tc39.es/ecma262/#sec-array.prototype.sort
  	$({ target: 'Array', proto: true, forced: FORCED }, {
  	  sort: function sort(comparefn) {
  	    if (comparefn !== undefined) aCallable(comparefn);

  	    var array = toObject(this);

  	    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

  	    var items = [];
  	    var arrayLength = lengthOfArrayLike(array);
  	    var itemsLength, index;

  	    for (index = 0; index < arrayLength; index++) {
  	      if (index in array) push(items, array[index]);
  	    }

  	    internalSort(items, getSortCompare(comparefn));

  	    itemsLength = lengthOfArrayLike(items);
  	    index = 0;

  	    while (index < itemsLength) array[index] = items[index++];
  	    while (index < arrayLength) deletePropertyOrThrow(array, index++);

  	    return array;
  	  }
  	});
  	return es_array_sort;
  }

  requireEs_array_sort();

  var es_string_match = {};

  var hasRequiredEs_string_match;

  function requireEs_string_match () {
  	if (hasRequiredEs_string_match) return es_string_match;
  	hasRequiredEs_string_match = 1;
  	var call = requireFunctionCall();
  	var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  	var anObject = requireAnObject();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var getMethod = requireGetMethod();
  	var advanceStringIndex = requireAdvanceStringIndex();
  	var regExpExec = requireRegexpExecAbstract();

  	// @@match logic
  	fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  	  return [
  	    // `String.prototype.match` method
  	    // https://tc39.es/ecma262/#sec-string.prototype.match
  	    function match(regexp) {
  	      var O = requireObjectCoercible(this);
  	      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
  	      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
  	    },
  	    // `RegExp.prototype[@@match]` method
  	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
  	    function (string) {
  	      var rx = anObject(this);
  	      var S = toString(string);
  	      var res = maybeCallNative(nativeMatch, rx, S);

  	      if (res.done) return res.value;

  	      if (!rx.global) return regExpExec(rx, S);

  	      var fullUnicode = rx.unicode;
  	      rx.lastIndex = 0;
  	      var A = [];
  	      var n = 0;
  	      var result;
  	      while ((result = regExpExec(rx, S)) !== null) {
  	        var matchStr = toString(result[0]);
  	        A[n] = matchStr;
  	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
  	        n++;
  	      }
  	      return n === 0 ? null : A;
  	    }
  	  ];
  	});
  	return es_string_match;
  }

  requireEs_string_match();

  var es_string_replace = {};

  var getSubstitution;
  var hasRequiredGetSubstitution;

  function requireGetSubstitution () {
  	if (hasRequiredGetSubstitution) return getSubstitution;
  	hasRequiredGetSubstitution = 1;
  	var uncurryThis = requireFunctionUncurryThis();
  	var toObject = requireToObject();

  	var floor = Math.floor;
  	var charAt = uncurryThis(''.charAt);
  	var replace = uncurryThis(''.replace);
  	var stringSlice = uncurryThis(''.slice);
  	// eslint-disable-next-line redos/no-vulnerable -- safe
  	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  	// `GetSubstitution` abstract operation
  	// https://tc39.es/ecma262/#sec-getsubstitution
  	getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
  	  var tailPos = position + matched.length;
  	  var m = captures.length;
  	  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  	  if (namedCaptures !== undefined) {
  	    namedCaptures = toObject(namedCaptures);
  	    symbols = SUBSTITUTION_SYMBOLS;
  	  }
  	  return replace(replacement, symbols, function (match, ch) {
  	    var capture;
  	    switch (charAt(ch, 0)) {
  	      case '$': return '$';
  	      case '&': return matched;
  	      case '`': return stringSlice(str, 0, position);
  	      case "'": return stringSlice(str, tailPos);
  	      case '<':
  	        capture = namedCaptures[stringSlice(ch, 1, -1)];
  	        break;
  	      default: // \d\d?
  	        var n = +ch;
  	        if (n === 0) return match;
  	        if (n > m) {
  	          var f = floor(n / 10);
  	          if (f === 0) return match;
  	          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
  	          return match;
  	        }
  	        capture = captures[n - 1];
  	    }
  	    return capture === undefined ? '' : capture;
  	  });
  	};
  	return getSubstitution;
  }

  var hasRequiredEs_string_replace;

  function requireEs_string_replace () {
  	if (hasRequiredEs_string_replace) return es_string_replace;
  	hasRequiredEs_string_replace = 1;
  	var apply = requireFunctionApply();
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  	var fails = requireFails();
  	var anObject = requireAnObject();
  	var isCallable = requireIsCallable();
  	var isNullOrUndefined = requireIsNullOrUndefined();
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var advanceStringIndex = requireAdvanceStringIndex();
  	var getMethod = requireGetMethod();
  	var getSubstitution = requireGetSubstitution();
  	var regExpExec = requireRegexpExecAbstract();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var REPLACE = wellKnownSymbol('replace');
  	var max = Math.max;
  	var min = Math.min;
  	var concat = uncurryThis([].concat);
  	var push = uncurryThis([].push);
  	var stringIndexOf = uncurryThis(''.indexOf);
  	var stringSlice = uncurryThis(''.slice);

  	var maybeToString = function (it) {
  	  return it === undefined ? it : String(it);
  	};

  	// IE <= 11 replaces $0 with the whole match, as if it was $&
  	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  	var REPLACE_KEEPS_$0 = (function () {
  	  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  	  return 'a'.replace(/./, '$0') === '$0';
  	})();

  	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  	  if (/./[REPLACE]) {
  	    return /./[REPLACE]('a', '$0') === '';
  	  }
  	  return false;
  	})();

  	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  	  var re = /./;
  	  re.exec = function () {
  	    var result = [];
  	    result.groups = { a: '7' };
  	    return result;
  	  };
  	  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  	  return ''.replace(re, '$<a>') !== '7';
  	});

  	// @@replace logic
  	fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  	  return [
  	    // `String.prototype.replace` method
  	    // https://tc39.es/ecma262/#sec-string.prototype.replace
  	    function replace(searchValue, replaceValue) {
  	      var O = requireObjectCoercible(this);
  	      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
  	      return replacer
  	        ? call(replacer, searchValue, O, replaceValue)
  	        : call(nativeReplace, toString(O), searchValue, replaceValue);
  	    },
  	    // `RegExp.prototype[@@replace]` method
  	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
  	    function (string, replaceValue) {
  	      var rx = anObject(this);
  	      var S = toString(string);

  	      if (
  	        typeof replaceValue == 'string' &&
  	        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
  	        stringIndexOf(replaceValue, '$<') === -1
  	      ) {
  	        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
  	        if (res.done) return res.value;
  	      }

  	      var functionalReplace = isCallable(replaceValue);
  	      if (!functionalReplace) replaceValue = toString(replaceValue);

  	      var global = rx.global;
  	      var fullUnicode;
  	      if (global) {
  	        fullUnicode = rx.unicode;
  	        rx.lastIndex = 0;
  	      }

  	      var results = [];
  	      var result;
  	      while (true) {
  	        result = regExpExec(rx, S);
  	        if (result === null) break;

  	        push(results, result);
  	        if (!global) break;

  	        var matchStr = toString(result[0]);
  	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
  	      }

  	      var accumulatedResult = '';
  	      var nextSourcePosition = 0;
  	      for (var i = 0; i < results.length; i++) {
  	        result = results[i];

  	        var matched = toString(result[0]);
  	        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
  	        var captures = [];
  	        var replacement;
  	        // NOTE: This is equivalent to
  	        //   captures = result.slice(1).map(maybeToString)
  	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
  	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
  	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
  	        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
  	        var namedCaptures = result.groups;
  	        if (functionalReplace) {
  	          var replacerArgs = concat([matched], captures, position, S);
  	          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
  	          replacement = toString(apply(replaceValue, undefined, replacerArgs));
  	        } else {
  	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
  	        }
  	        if (position >= nextSourcePosition) {
  	          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
  	          nextSourcePosition = position + matched.length;
  	        }
  	      }

  	      return accumulatedResult + stringSlice(S, nextSourcePosition);
  	    }
  	  ];
  	}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
  	return es_string_replace;
  }

  requireEs_string_replace();

  var es_string_startsWith = {};

  var hasRequiredEs_string_startsWith;

  function requireEs_string_startsWith () {
  	if (hasRequiredEs_string_startsWith) return es_string_startsWith;
  	hasRequiredEs_string_startsWith = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var notARegExp = requireNotARegexp();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
  	var IS_PURE = requireIsPure();

  	var stringSlice = uncurryThis(''.slice);
  	var min = Math.min;

  	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
  	// https://github.com/zloirock/core-js/pull/702
  	var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  	  return descriptor && !descriptor.writable;
  	}();

  	// `String.prototype.startsWith` method
  	// https://tc39.es/ecma262/#sec-string.prototype.startswith
  	$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  	  startsWith: function startsWith(searchString /* , position = 0 */) {
  	    var that = toString(requireObjectCoercible(this));
  	    notARegExp(searchString);
  	    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
  	    var search = toString(searchString);
  	    return stringSlice(that, index, index + search.length) === search;
  	  }
  	});
  	return es_string_startsWith;
  }

  requireEs_string_startsWith();

  /* eslint-disable no-use-before-define */
  var Utils$1 = $.fn.bootstrapTable.utils;
  var searchControls = 'select, input:not([type="checkbox"]):not([type="radio"])';
  function getInputClass(that) {
    var isSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formControlClass = isSelect ? that.constants.classes.select : that.constants.classes.input;
    return that.options.iconSize ? Utils$1.sprintf('%s %s-%s', formControlClass, formControlClass, that.options.iconSize) : formControlClass;
  }
  function getOptionsFromSelectControl(selectControl) {
    return selectControl[0].options;
  }
  function getControlContainer(that) {
    if (that.options.filterControlContainer) {
      return $("".concat(that.options.filterControlContainer));
    }
    if (that.options.height && that._initialized) {
      return that.$tableContainer.find('.fixed-table-header table thead');
    }
    return that.$header;
  }
  function isKeyAllowed(keyCode) {
    return $.inArray(keyCode, [37, 38, 39, 40]) > -1;
  }
  function getSearchControls(that) {
    return getControlContainer(that).find(searchControls);
  }
  function existOptionInSelectControl(selectControl, value) {
    var options = getOptionsFromSelectControl(selectControl);
    for (var i = 0; i < options.length; i++) {
      if (options[i].value === Utils$1.unescapeHTML(value)) {
        // The value is not valid to add
        return true;
      }
    }

    // If we get here, the value is valid to add
    return false;
  }
  function addOptionToSelectControl(selectControl, _value, text, selected, shouldCompareText) {
    var value = _value === undefined || _value === null ? '' : _value.toString().trim();
    value = Utils$1.removeHTML(Utils$1.unescapeHTML(value));
    text = Utils$1.removeHTML(Utils$1.unescapeHTML(text));
    if (existOptionInSelectControl(selectControl, value)) {
      return;
    }
    var isSelected = shouldCompareText ? value === selected || text === selected : value === selected;
    var option = new Option(text, value, false, isSelected);
    selectControl.get(0).add(option);
  }
  function sortSelectControl(selectControl, orderBy, options) {
    var $selectControl = selectControl.get(0);
    if (orderBy === 'server') {
      return;
    }
    var tmpAry = new Array();
    for (var i = 0; i < $selectControl.options.length; i++) {
      tmpAry[i] = new Array();
      tmpAry[i][0] = $selectControl.options[i].text;
      tmpAry[i][1] = $selectControl.options[i].value;
      tmpAry[i][2] = $selectControl.options[i].selected;
    }
    tmpAry.sort(function (a, b) {
      return Utils$1.sort(a[0], b[0], orderBy === 'desc' ? -1 : 1, options);
    });
    while ($selectControl.options.length > 0) {
      $selectControl.options[0] = null;
    }
    for (var _i = 0; _i < tmpAry.length; _i++) {
      var op = new Option(tmpAry[_i][0], tmpAry[_i][1], false, tmpAry[_i][2]);
      $selectControl.add(op);
    }
  }
  function fixHeaderCSS(_ref) {
    var $tableHeader = _ref.$tableHeader;
    $tableHeader.css('height', $tableHeader.find('table').outerHeight(true));
  }
  function getElementClass($element) {
    return $element.attr('class').split(' ').filter(function (className) {
      return className.startsWith('bootstrap-table-filter-control-');
    });
  }
  function getCursorPosition(el) {
    if ($(el).is('input[type=search]')) {
      var pos = 0;
      if ('selectionStart' in el) {
        pos = el.selectionStart;
      } else if ('selection' in document) {
        el.focus();
        var Sel = document.selection.createRange();
        var SelLength = document.selection.createRange().text.length;
        Sel.moveStart('character', -el.value.length);
        pos = Sel.text.length - SelLength;
      }
      return pos;
    }
    return -1;
  }
  function cacheValues(that) {
    var searchControls = getSearchControls(that);
    that._valuesFilterControl = [];
    searchControls.each(function () {
      var $field = $(this);
      var fieldClass = escapeID(getElementClass($field));
      if (that.options.height && !that.options.filterControlContainer) {
        $field = that.$el.find(".fixed-table-header .".concat(fieldClass));
      } else if (that.options.filterControlContainer) {
        $field = $("".concat(that.options.filterControlContainer, " .").concat(fieldClass));
      } else {
        $field = that.$el.find(".".concat(fieldClass));
      }
      that._valuesFilterControl.push({
        field: $field.closest('[data-field]').data('field'),
        value: $field.val(),
        position: getCursorPosition($field.get(0)),
        hasFocus: $field.is(':focus')
      });
    });
  }
  function setCaretPosition(elem, caretPos) {
    try {
      if (elem) {
        if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
        } else {
          elem.setSelectionRange(caretPos, caretPos);
        }
      }
    } catch (ex) {
      console.error(ex);
    }
  }
  function setValues(that) {
    var field = null;
    var result = [];
    var searchControls = getSearchControls(that);
    if (that._valuesFilterControl.length > 0) {
      //  Callback to apply after settings fields values
      var callbacks = [];
      searchControls.each(function (i, el) {
        var $this = $(el);
        field = $this.closest('[data-field]').data('field');
        result = that._valuesFilterControl.filter(function (valueObj) {
          return valueObj.field === field;
        });
        if (result.length > 0) {
          if (result[0].hasFocus || result[0].value) {
            var fieldToFocusCallback = function (element, cacheElementInfo) {
              // Closure here to capture the field information
              var closedCallback = function closedCallback() {
                if (cacheElementInfo.hasFocus) {
                  element.focus();
                }
                if (Array.isArray(cacheElementInfo.value)) {
                  var $element = $(element);
                  $.each(cacheElementInfo.value, function (i, e) {
                    $element.find(Utils$1.sprintf('option[value=\'%s\']', e)).prop('selected', true);
                  });
                } else {
                  element.value = cacheElementInfo.value;
                }
                setCaretPosition(element, cacheElementInfo.position);
              };
              return closedCallback;
            }($this.get(0), result[0]);
            callbacks.push(fieldToFocusCallback);
          }
        }
      });

      // Callback call.
      if (callbacks.length > 0) {
        callbacks.forEach(function (callback) {
          return callback();
        });
      }
    }
  }
  function collectBootstrapTableFilterCookies() {
    var cookies = [];
    var cookieRegex = /bs\.table\.(filterControl|searchText)/g;
    var foundCookies = document.cookie.match(cookieRegex);
    var foundLocalStorage = localStorage;
    if (foundCookies) {
      $.each(foundCookies, function (i, _cookie) {
        var cookie = _cookie;
        if (/./.test(cookie)) {
          cookie = cookie.split('.').pop();
        }
        if ($.inArray(cookie, cookies) === -1) {
          cookies.push(cookie);
        }
      });
    }
    if (!foundLocalStorage) {
      return cookies;
    }
    Object.keys(localStorage).forEach(function (cookie) {
      if (!cookieRegex.test(cookie)) {
        return;
      }
      cookie = cookie.split('.').pop();
      if (!cookies.includes(cookie)) {
        cookies.push(cookie);
      }
    });
    return cookies;
  }
  function escapeID(id) {
    // eslint-disable-next-line no-useless-escape
    return String(id).replace(/([:.\[\],])/g, '\\$1');
  }
  function isColumnSearchableViaSelect(_ref2) {
    var filterControl = _ref2.filterControl,
      searchable = _ref2.searchable;
    return filterControl && filterControl.toLowerCase() === 'select' && searchable;
  }
  function isFilterDataNotGiven(_ref3) {
    var filterData = _ref3.filterData;
    return filterData === undefined || filterData.toLowerCase() === 'column';
  }
  function hasSelectControlElement(selectControl) {
    return selectControl && selectControl.length > 0;
  }
  function initFilterSelectControls(that) {
    var data = that.options.data;
    $.each(that.header.fields, function (j, field) {
      var column = that.columns[that.fieldsColumnsIndex[field]];
      var selectControl = getControlContainer(that).find("select.bootstrap-table-filter-control-".concat(escapeID(column.field)));
      if (isColumnSearchableViaSelect(column) && isFilterDataNotGiven(column) && hasSelectControlElement(selectControl)) {
        if (!selectControl[0].multiple && selectControl.get(selectControl.length - 1).options.length === 0) {
          // Added the default option, must use a non-breaking space(&nbsp;) to pass the W3C validator
          addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder || ' ', column.filterDefault);
        }
        var uniqueValues = {};
        for (var i = 0; i < data.length; i++) {
          // Added a new value
          var fieldValue = Utils$1.getItemField(data[i], field, false);
          var formatter = that.options.editable && column.editable ? column._formatter : that.header.formatters[j];
          var formattedValue = Utils$1.calculateObjectValue(that.header, formatter, [fieldValue, data[i], i], fieldValue);
          if (fieldValue === undefined || fieldValue === null) {
            fieldValue = formattedValue;
            column._forceFormatter = true;
          }
          if (column.filterDataCollector) {
            formattedValue = Utils$1.calculateObjectValue(that.header, column.filterDataCollector, [fieldValue, data[i], formattedValue], formattedValue);
          }
          if (column.searchFormatter) {
            fieldValue = formattedValue;
          }
          uniqueValues[formattedValue] = fieldValue;
          if (_typeof(formattedValue) === 'object' && formattedValue !== null) {
            formattedValue.forEach(function (value) {
              addOptionToSelectControl(selectControl, value, value, column.filterDefault);
            });
            continue;
          }
        }

        // eslint-disable-next-line guard-for-in
        for (var key in uniqueValues) {
          addOptionToSelectControl(selectControl, uniqueValues[key], key, column.filterDefault);
        }
        if (that.options.sortSelectOptions) {
          sortSelectControl(selectControl, column.filterOrderBy, that.options);
        }
      }
    });
  }
  function getFilterDataMethod(objFilterDataMethod, searchTerm) {
    var keys = Object.keys(objFilterDataMethod);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === searchTerm) {
        return objFilterDataMethod[searchTerm];
      }
    }
    return null;
  }
  function createControls(that, header) {
    var addedFilterControl = false;
    var html;
    $.each(that.columns, function (_, column) {
      html = [];
      if (!column.visible && !(that.options.filterControlContainer && $(".bootstrap-table-filter-control-".concat(escapeID(column.field))).length >= 1)) {
        return;
      }
      if (!column.filterControl && !that.options.filterControlContainer) {
        html.push('<div class="no-filter-control"></div>');
      } else if (that.options.filterControlContainer) {
        // Use a filter control container instead of th
        var $filterControls = $(".bootstrap-table-filter-control-".concat(escapeID(column.field)));
        $.each($filterControls, function (_, filterControl) {
          var $filterControl = $(filterControl);
          if (!$filterControl.is('[type=radio]')) {
            var placeholder = column.filterControlPlaceholder || '';
            $filterControl.attr('placeholder', placeholder).val(column.filterDefault);
          }
          $filterControl.attr('data-field', column.field);
        });
        addedFilterControl = true;
      } else {
        // Create the control based on the html defined in the filterTemplate array.
        var nameControl = column.filterControl.toLowerCase();
        html.push('<div class="filter-control">');
        addedFilterControl = true;
        if (column.searchable && that.options.filterTemplate[nameControl]) {
          html.push(that.options.filterTemplate[nameControl](that, column, column.filterControlPlaceholder ? column.filterControlPlaceholder : '', column.filterDefault));
        }
      }

      // Filtering by default when it is set.
      if (column.filterControl && '' !== column.filterDefault && 'undefined' !== typeof column.filterDefault) {
        if (Utils$1.isEmptyObject(that.filterColumnsPartial)) {
          that.filterColumnsPartial = {};
        }
        if (!(column.field in that.filterColumnsPartial)) {
          that.filterColumnsPartial[column.field] = column.filterDefault;
        }
      }
      $.each(header.find('th'), function (_, th) {
        var $th = $(th);
        if ($th.data('field') === column.field) {
          $th.find('.filter-control').remove();
          $th.find('.fht-cell').html(html.join(''));
          return false;
        }
      });
      if (column.filterData && column.filterData.toLowerCase() !== 'column') {
        var filterDataType = getFilterDataMethod(filterDataMethods, column.filterData.substring(0, column.filterData.indexOf(':')));
        var filterDataSource;
        var selectControl;
        if (filterDataType) {
          filterDataSource = column.filterData.substring(column.filterData.indexOf(':') + 1, column.filterData.length);
          selectControl = header.find(".bootstrap-table-filter-control-".concat(escapeID(column.field)));
          addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault, true);
          filterDataType(that, filterDataSource, selectControl, that.options.filterOrderBy, column.filterDefault);
        } else {
          throw new SyntaxError('Error. You should use any of these allowed filter data methods: var, obj, json, url, func.' + ' Use like this: var: {key: "value"}');
        }
      }
    });
    if (addedFilterControl) {
      header.off('keyup', 'input').on('keyup', 'input', function (_ref4, obj) {
        var currentTarget = _ref4.currentTarget,
          keyCode = _ref4.keyCode;
        keyCode = obj ? obj.keyCode : keyCode;
        if (that.options.searchOnEnterKey && keyCode !== 13) {
          return;
        }
        if (isKeyAllowed(keyCode)) {
          return;
        }
        var $currentTarget = $(currentTarget);
        if ($currentTarget.is(':checkbox') || $currentTarget.is(':radio')) {
          return;
        }
        clearTimeout(currentTarget.timeoutId || 0);
        currentTarget.timeoutId = setTimeout(function () {
          that.onColumnSearch({
            currentTarget: currentTarget,
            keyCode: keyCode
          });
        }, that.options.searchTimeOut);
      });
      header.off('change', 'select').on('change', 'select', function (_ref5) {
        var currentTarget = _ref5.currentTarget,
          keyCode = _ref5.keyCode;
        var $selectControl = $(currentTarget);
        var value = $selectControl.val();
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            if (value[i] && value[i].length > 0 && value[i].trim()) {
              $selectControl.find("option[value=\"".concat(value[i], "\"]")).attr('selected', true);
            }
          }
        } else if (value && value.length > 0 && value.trim()) {
          $selectControl.find('option[selected]').removeAttr('selected');
          $selectControl.find("option[value=\"".concat(value, "\"]")).attr('selected', true);
        } else {
          $selectControl.find('option[selected]').removeAttr('selected');
        }
        clearTimeout(currentTarget.timeoutId || 0);
        currentTarget.timeoutId = setTimeout(function () {
          that.onColumnSearch({
            currentTarget: currentTarget,
            keyCode: keyCode
          });
        }, that.options.searchTimeOut);
      });
      header.off('mouseup', 'input:not([type=radio])').on('mouseup', 'input:not([type=radio])', function (_ref6) {
        var currentTarget = _ref6.currentTarget,
          keyCode = _ref6.keyCode;
        var $input = $(currentTarget);
        var oldValue = $input.val();
        if (oldValue === '') {
          return;
        }
        setTimeout(function () {
          var newValue = $input.val();
          if (newValue === '') {
            clearTimeout(currentTarget.timeoutId || 0);
            currentTarget.timeoutId = setTimeout(function () {
              that.onColumnSearch({
                currentTarget: currentTarget,
                keyCode: keyCode
              });
            }, that.options.searchTimeOut);
          }
        }, 1);
      });
      header.off('change', 'input[type=radio]').on('change', 'input[type=radio]', function (_ref7) {
        var currentTarget = _ref7.currentTarget,
          keyCode = _ref7.keyCode;
        clearTimeout(currentTarget.timeoutId || 0);
        currentTarget.timeoutId = setTimeout(function () {
          that.onColumnSearch({
            currentTarget: currentTarget,
            keyCode: keyCode
          });
        }, that.options.searchTimeOut);
      });

      // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
      if (header.find('.date-filter-control').length > 0) {
        $.each(that.columns, function (i, _ref8) {
          var filterDefault = _ref8.filterDefault,
            filterControl = _ref8.filterControl,
            field = _ref8.field,
            filterDatepickerOptions = _ref8.filterDatepickerOptions;
          if (filterControl !== undefined && filterControl.toLowerCase() === 'datepicker') {
            var $datepicker = header.find(".date-filter-control.bootstrap-table-filter-control-".concat(escapeID(field)));
            if (filterDefault) {
              $datepicker.value(filterDefault);
            }
            if (filterDatepickerOptions.min) {
              $datepicker.attr('min', filterDatepickerOptions.min);
            }
            if (filterDatepickerOptions.max) {
              $datepicker.attr('max', filterDatepickerOptions.max);
            }
            if (filterDatepickerOptions.step) {
              $datepicker.attr('step', filterDatepickerOptions.step);
            }
            if (filterDatepickerOptions.pattern) {
              $datepicker.attr('pattern', filterDatepickerOptions.pattern);
            }
            $datepicker.on('change', function (_ref9) {
              var currentTarget = _ref9.currentTarget;
              clearTimeout(currentTarget.timeoutId || 0);
              currentTarget.timeoutId = setTimeout(function () {
                that.onColumnSearch({
                  currentTarget: currentTarget
                });
              }, that.options.searchTimeOut);
            });
          }
        });
      }
      if (that.options.sidePagination !== 'server') {
        that.triggerSearch();
      }
      if (!that.options.filterControlVisible) {
        header.find('.filter-control, .no-filter-control').hide();
      }
    } else {
      header.find('.filter-control, .no-filter-control').hide();
    }
    that.trigger('created-controls');
  }
  function getDirectionOfSelectOptions(_alignment) {
    var alignment = _alignment === undefined ? 'left' : _alignment.toLowerCase();
    switch (alignment) {
      case 'left':
        return 'ltr';
      case 'right':
        return 'rtl';
      case 'auto':
        return 'auto';
      default:
        return 'ltr';
    }
  }
  function syncHeaders(that) {
    if (!that.options.height) {
      return;
    }
    var fixedHeader = that.$tableContainer.find('.fixed-table-header table thead');
    if (fixedHeader.length === 0) {
      return;
    }
    that.$header.children().find('th[data-field]').each(function (_, element) {
      if (element.classList[0] !== 'bs-checkbox') {
        var $element = $(element);
        var $field = $element.data('field');
        var $fixedField = that.$tableContainer.find("th[data-field='".concat($field, "']")).not($element);
        var input = $element.find('input');
        var fixedInput = $fixedField.find('input');
        if (input.length > 0 && fixedInput.length > 0) {
          if (input.val() !== fixedInput.val()) {
            input.val(fixedInput.val());
          }
        }
      }
    });
  }
  var filterDataMethods = {
    func: function func(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var variableValues = window[filterDataSource].apply();

      // eslint-disable-next-line guard-for-in
      for (var key in variableValues) {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected);
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    },
    obj: function obj(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var objectKeys = filterDataSource.split('.');
      var variableName = objectKeys.shift();
      var variableValues = window[variableName];
      if (objectKeys.length > 0) {
        objectKeys.forEach(function (key) {
          variableValues = variableValues[key];
        });
      }

      // eslint-disable-next-line guard-for-in
      for (var key in variableValues) {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected);
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    },
    var: function _var(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var variableValues = window[filterDataSource];
      var isArray = Array.isArray(variableValues);
      for (var key in variableValues) {
        if (isArray) {
          addOptionToSelectControl(selectControl, variableValues[key], variableValues[key], selected, true);
        } else {
          addOptionToSelectControl(selectControl, key, variableValues[key], selected, true);
        }
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    },
    url: function url(that, filterDataSource, selectControl, filterOrderBy, selected) {
      $.ajax({
        url: filterDataSource,
        dataType: 'json',
        success: function success(data) {
          // eslint-disable-next-line guard-for-in
          for (var key in data) {
            addOptionToSelectControl(selectControl, key, data[key], selected);
          }
          if (that.options.sortSelectOptions) {
            sortSelectControl(selectControl, filterOrderBy, that.options);
          }
          setValues(that);
        }
      });
    },
    json: function json(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var variableValues = JSON.parse(filterDataSource);

      // eslint-disable-next-line guard-for-in
      for (var key in variableValues) {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected);
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    }
  };

  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults, {
    filterControl: false,
    filterControlVisible: true,
    filterControlMultipleSearch: false,
    filterControlMultipleSearchDelimiter: ',',
    filterControlSearchClear: true,
    // eslint-disable-next-line no-unused-vars
    onColumnSearch: function onColumnSearch(field, text) {
      return false;
    },
    onCreatedControls: function onCreatedControls() {
      return false;
    },
    alignmentSelectControlOptions: undefined,
    filterTemplate: {
      input: function input(that, column, placeholder, value) {
        return Utils.sprintf('<input type="search" class="%s bootstrap-table-filter-control-%s search-input" style="width: 100%;" placeholder="%s" value="%s">', getInputClass(that), column.field, 'undefined' === typeof placeholder ? '' : placeholder, 'undefined' === typeof value ? '' : value);
      },
      select: function select(that, column) {
        return Utils.sprintf('<select class="%s bootstrap-table-filter-control-%s %s" %s style="width: 100%;" dir="%s"></select>', getInputClass(that, true), column.field, '', '', getDirectionOfSelectOptions(that.options.alignmentSelectControlOptions));
      },
      datepicker: function datepicker(that, column, value) {
        return Utils.sprintf('<input type="date" class="%s date-filter-control bootstrap-table-filter-control-%s" style="width: 100%;" value="%s">', getInputClass(that), column.field, 'undefined' === typeof value ? '' : value);
      }
    },
    searchOnEnterKey: false,
    showFilterControlSwitch: false,
    sortSelectOptions: false,
    // internal variables
    _valuesFilterControl: [],
    _initialized: false,
    _isRendering: false,
    _usingMultipleSelect: false
  });
  Object.assign($.fn.bootstrapTable.columnDefaults, {
    filterControl: undefined,
    // input, select, datepicker
    filterControlMultipleSelect: false,
    filterControlMultipleSelectOptions: {},
    filterDataCollector: undefined,
    filterData: undefined,
    filterDatepickerOptions: {},
    filterStrictSearch: false,
    filterStartsWithSearch: false,
    filterControlPlaceholder: '',
    filterDefault: '',
    filterOrderBy: 'asc',
    // asc || desc
    filterCustomSearch: undefined
  });
  Object.assign($.fn.bootstrapTable.events, {
    'column-search.bs.table': 'onColumnSearch',
    'created-controls.bs.table': 'onCreatedControls'
  });
  Object.assign($.fn.bootstrapTable.defaults.icons, {
    filterControlSwitchHide: {
      bootstrap3: 'glyphicon-zoom-out icon-zoom-out',
      bootstrap5: 'bi-zoom-out',
      materialize: 'zoom_out'
    }[$.fn.bootstrapTable.theme] || 'fa-search-minus',
    filterControlSwitchShow: {
      bootstrap3: 'glyphicon-zoom-in icon-zoom-in',
      bootstrap5: 'bi-zoom-in',
      materialize: 'zoom_in'
    }[$.fn.bootstrapTable.theme] || 'fa-search-plus'
  });
  Object.assign($.fn.bootstrapTable.locales, {
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Hide/Show controls';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Hide controls';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Show controls';
    },
    formatClearSearch: function formatClearSearch() {
      return 'Clear filters';
    }
  });
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
  $.fn.bootstrapTable.methods.push('triggerSearch');
  $.fn.bootstrapTable.methods.push('clearFilterControl');
  $.fn.bootstrapTable.methods.push('toggleFilterControl');
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "init",
      value: function init() {
        var _this = this;
        // Make sure that the filterControl option is set
        if (this.options.filterControl) {
          // Make sure that the internal variables are set correctly
          this._valuesFilterControl = [];
          this._initialized = false;
          this._usingMultipleSelect = false;
          this._isRendering = false;
          this.$el.on('reset-view.bs.table', Utils.debounce(function () {
            initFilterSelectControls(_this);
            setValues(_this);
          }, 3)).on('toggle.bs.table', Utils.debounce(function (_, cardView) {
            _this._initialized = false;
            if (!cardView) {
              initFilterSelectControls(_this);
              setValues(_this);
              _this._initialized = true;
            }
          }, 1)).on('post-header.bs.table', Utils.debounce(function () {
            initFilterSelectControls(_this);
            setValues(_this);
          }, 3)).on('column-switch.bs.table', Utils.debounce(function () {
            setValues(_this);
            if (_this.options.height) {
              _this.fitHeader();
            }
          }, 1)).on('post-body.bs.table', Utils.debounce(function () {
            if (_this.options.height && !_this.options.filterControlContainer && _this.options.filterControlVisible) {
              fixHeaderCSS(_this);
            }
            _this.$tableLoading.css('top', _this.$header.outerHeight() + 1);
          }, 1)).on('all.bs.table', function () {
            syncHeaders(_this);
          });
        }
        _superPropGet(_class, "init", this)([]);
      }
    }, {
      key: "initBody",
      value: function initBody() {
        var _this2 = this;
        _superPropGet(_class, "initBody", this)([]);
        if (!this.options.filterControl) {
          return;
        }
        setTimeout(function () {
          initFilterSelectControls(_this2);
          setValues(_this2);
        }, 3);
      }
    }, {
      key: "load",
      value: function load(data) {
        _superPropGet(_class, "load", this)([data]);
        if (!this.options.filterControl) {
          return;
        }
        createControls(this, getControlContainer(this));
        setValues(this);
      }
    }, {
      key: "initHeader",
      value: function initHeader() {
        _superPropGet(_class, "initHeader", this)([]);
        if (!this.options.filterControl) {
          return;
        }
        createControls(this, getControlContainer(this));
        this._initialized = true;
      }
    }, {
      key: "initSearch",
      value: function initSearch() {
        var _this3 = this;
        var that = this;
        var filterPartial = Utils.isEmptyObject(that.filterColumnsPartial) ? null : that.filterColumnsPartial;
        _superPropGet(_class, "initSearch", this)([]);
        if (this.options.sidePagination === 'server' || filterPartial === null) {
          return;
        }

        // Check partial column filter
        that.data = filterPartial ? that.data.filter(function (item, i) {
          var itemIsExpected = [];
          var keys1 = Object.keys(item);
          var keys2 = Object.keys(filterPartial);
          var keys = keys1.concat(keys2.filter(function (item) {
            return !keys1.includes(item);
          }));
          keys.forEach(function (key) {
            var thisColumn = that.columns[that.fieldsColumnsIndex[key]];
            var rawFilterValue = filterPartial[key] || '';
            var filterValue = rawFilterValue.toLowerCase();
            var value = Utils.unescapeHTML(Utils.getItemField(item, key, false));
            var tmpItemIsExpected;
            if (_this3.options.searchAccentNeutralise) {
              filterValue = Utils.normalizeAccent(filterValue);
            }
            var filterValues = [filterValue];
            if (_this3.options.filterControlMultipleSearch) {
              filterValues = filterValue.split(_this3.options.filterControlMultipleSearchDelimiter);
            }
            filterValues.forEach(function (filterValue) {
              if (tmpItemIsExpected === true) {
                return;
              }
              filterValue = filterValue.trim();
              if (filterValue === '') {
                tmpItemIsExpected = true;
              } else {
                // Fix #142: search use formatted data
                if (thisColumn) {
                  if (thisColumn.searchFormatter || thisColumn._forceFormatter) {
                    value = $.fn.bootstrapTable.utils.calculateObjectValue(thisColumn, that.header.formatters[$.inArray(key, that.header.fields)], [value, item, i], value);
                  }
                }
                if ($.inArray(key, that.header.fields) !== -1) {
                  if (value === undefined || value === null) {
                    tmpItemIsExpected = false;
                  } else if (_typeof(value) === 'object' && thisColumn.filterCustomSearch) {
                    itemIsExpected.push(that.isValueExpected(rawFilterValue, value, thisColumn, key));
                  } else if (_typeof(value) === 'object' && Array.isArray(value)) {
                    value.forEach(function (objectValue) {
                      if (tmpItemIsExpected) {
                        return;
                      }
                      tmpItemIsExpected = that.isValueExpected(filterValue, objectValue, thisColumn, key);
                    });
                  } else if (_typeof(value) === 'object' && !Array.isArray(value)) {
                    Object.values(value).forEach(function (objectValue) {
                      if (tmpItemIsExpected) {
                        return;
                      }
                      tmpItemIsExpected = that.isValueExpected(filterValue, objectValue, thisColumn, key);
                    });
                  } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                    tmpItemIsExpected = that.isValueExpected(filterValue, value, thisColumn, key);
                  }
                }
              }
            });
            itemIsExpected.push(tmpItemIsExpected);
          });
          return !itemIsExpected.includes(false);
        }) : that.data;
        that.unsortedData = _toConsumableArray(that.data);
      }
    }, {
      key: "isValueExpected",
      value: function isValueExpected(searchValue, value, column, key) {
        var tmpItemIsExpected;
        if (column.filterControl === 'select') {
          value = Utils.removeHTML(value.toString().toLowerCase());
        }
        if (this.options.searchAccentNeutralise) {
          value = Utils.normalizeAccent(value);
        }
        if (column.filterStrictSearch || column.filterControl === 'select' && column.passed.filterStrictSearch !== false) {
          tmpItemIsExpected = value.toString().toLowerCase() === searchValue.toString().toLowerCase();
        } else if (column.filterStartsWithSearch) {
          tmpItemIsExpected = "".concat(value).toLowerCase().indexOf(searchValue) === 0;
        } else if (column.filterControl === 'datepicker') {
          tmpItemIsExpected = new Date(value).getTime() === new Date(searchValue).getTime();
        } else if (this.options.regexSearch) {
          tmpItemIsExpected = Utils.regexCompare(value, searchValue);
        } else {
          tmpItemIsExpected = "".concat(value).toLowerCase().includes(searchValue);
        }
        var largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm;
        var matches = largerSmallerEqualsRegex.exec(searchValue);
        if (matches) {
          var operator = matches[1] || "".concat(matches[5], "l");
          var comparisonValue = matches[2] || matches[3];
          var int = parseInt(value, 10);
          var comparisonInt = parseInt(comparisonValue, 10);
          switch (operator) {
            case '>':
            case '<l':
              tmpItemIsExpected = int > comparisonInt;
              break;
            case '<':
            case '>l':
              tmpItemIsExpected = int < comparisonInt;
              break;
            case '<=':
            case '=<':
            case '>=l':
            case '=>l':
              tmpItemIsExpected = int <= comparisonInt;
              break;
            case '>=':
            case '=>':
            case '<=l':
            case '=<l':
              tmpItemIsExpected = int >= comparisonInt;
              break;
          }
        }
        if (column.filterCustomSearch) {
          var customSearchResult = Utils.calculateObjectValue(column, column.filterCustomSearch, [searchValue, value, key, this.options.data], true);
          if (customSearchResult !== null) {
            tmpItemIsExpected = customSearchResult;
          }
        }
        return tmpItemIsExpected;
      }
    }, {
      key: "initColumnSearch",
      value: function initColumnSearch(filterColumnsDefaults) {
        cacheValues(this);
        if (filterColumnsDefaults) {
          this.filterColumnsPartial = filterColumnsDefaults;
          this.updatePagination();

          // eslint-disable-next-line guard-for-in
          for (var filter in filterColumnsDefaults) {
            this.trigger('column-search', filter, filterColumnsDefaults[filter]);
          }
        }
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        this.showToolbar = this.showToolbar || this.options.showFilterControlSwitch;
        this.showSearchClearButton = this.options.filterControl && this.options.showSearchClearButton;
        if (this.options.showFilterControlSwitch) {
          this.buttons = Object.assign(this.buttons, {
            filterControlSwitch: {
              text: this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow(),
              icon: this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow,
              event: this.toggleFilterControl,
              attributes: {
                'aria-label': this.options.formatFilterControlSwitch(),
                title: this.options.formatFilterControlSwitch()
              }
            }
          });
        }
        _superPropGet(_class, "initToolbar", this)([]);
      }
    }, {
      key: "resetSearch",
      value: function resetSearch(text) {
        if (this.options.filterControl && this.options.filterControlSearchClear && this.options.showSearchClearButton) {
          this.clearFilterControl();
        }
        _superPropGet(_class, "resetSearch", this)([text]);
      }
    }, {
      key: "clearFilterControl",
      value: function clearFilterControl() {
        if (!this.options.filterControl) {
          return;
        }
        var that = this;
        var table = this.$el.closest('table');
        var cookies = collectBootstrapTableFilterCookies();
        var controls = getSearchControls(that);
        // const search = Utils.getSearchInput(this)
        var hasValues = false;
        var timeoutId = 0;

        // Clear cache values
        $.each(that._valuesFilterControl, function (i, item) {
          hasValues = hasValues ? true : item.value !== '';
          item.value = '';
        });

        // Clear controls in UI
        $.each(controls, function (i, item) {
          item.value = '';
        });

        // Cache controls again
        setValues(that);

        // clear cookies once the filters are clean
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
          if (cookies && cookies.length > 0) {
            $.each(cookies, function (i, item) {
              if (that.deleteCookie !== undefined) {
                that.deleteCookie(item);
              }
            });
          }
        }, that.options.searchTimeOut);

        // If there is not any value in the controls exit this method
        if (!hasValues) {
          return;
        }

        // Clear each type of filter if it exists.
        // Requires the body to reload each time a type of filter is found because we never know
        // which ones are going to be present.
        if (controls.length > 0) {
          this.filterColumnsPartial = {};
          controls.eq(0).trigger(this.tagName === 'INPUT' ? 'keyup' : 'change', {
            keyCode: 13
          });
          /* controls.each(function () {
            $(this).trigger(this.tagName === 'INPUT' ? 'keyup' : 'change', { keyCode: 13 })
          })*/
        } else {
          return;
        }

        /* if (search.length > 0) {
          that.resetSearch('fc')
        }*/

        // use the default sort order if it exists. do nothing if it does not
        if (that.options.sortName !== table.data('sortName') || that.options.sortOrder !== table.data('sortOrder')) {
          var sorter = this.$header.find(Utils.sprintf('[data-field="%s"]', $(controls[0]).closest('table').data('sortName')));
          if (sorter.length > 0) {
            that.onSort({
              type: 'keypress',
              currentTarget: sorter
            });
            $(sorter).find('.sortable').trigger('click');
          }
        }
      }

      // EVENTS
    }, {
      key: "onColumnSearch",
      value: function onColumnSearch(_ref) {
        var _this4 = this;
        var currentTarget = _ref.currentTarget,
          keyCode = _ref.keyCode;
        if (isKeyAllowed(keyCode)) {
          return;
        }
        cacheValues(this);

        // Cookie extension support
        if (!this.options.cookie) {
          this.options.pageNumber = 1;
        } else {
          // Force call the initServer method in Cookie extension
          this._filterControlValuesLoaded = true;
        }
        if (Utils.isEmptyObject(this.filterColumnsPartial)) {
          this.filterColumnsPartial = {};
        }

        // If searchOnEnterKey is set to true, then we need to iterate over all controls and grab their values.
        var controls = this.options.searchOnEnterKey ? getSearchControls(this).toArray() : [currentTarget];
        controls.forEach(function (element) {
          var $element = $(element);
          var elementValue = $element.val();
          var text = elementValue ? elementValue.trim() : '';
          var $field = $element.closest('[data-field]').data('field');
          _this4.trigger('column-search', $field, text);
          if (text) {
            _this4.filterColumnsPartial[$field] = text;
          } else {
            delete _this4.filterColumnsPartial[$field];
          }
        });
        this.onSearch({
          currentTarget: currentTarget
        }, false);
      }
    }, {
      key: "toggleFilterControl",
      value: function toggleFilterControl() {
        this.options.filterControlVisible = !this.options.filterControlVisible;
        // Controls in original header or container.
        var $filterControls = getControlContainer(this).find('.filter-control, .no-filter-control');
        if (this.options.filterControlVisible) {
          $filterControls.show();
        } else {
          $filterControls.hide();
          this.clearFilterControl();
        }

        // Controls in fixed header
        if (this.options.height) {
          var $fixedControls = this.$tableContainer.find('.fixed-table-header table thead').find('.filter-control, .no-filter-control');
          $fixedControls.toggle(this.options.filterControlVisible);
          fixHeaderCSS(this);
        }
        var icon = this.options.showButtonIcons ? this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow : '';
        var text = this.options.showButtonText ? this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow() : '';
        this.$toolbar.find('>.columns').find('.filter-control-switch').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(text));
      }
    }, {
      key: "triggerSearch",
      value: function triggerSearch() {
        var searchControls = getSearchControls(this);
        searchControls.each(function () {
          var $element = $(this);
          if ($element.is('select')) {
            $element.trigger('change');
          } else {
            $element.trigger('keyup');
          }
        });
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn(index, checked, needUpdate) {
        this._initialized = false;
        _superPropGet(_class, "_toggleColumn", this)([index, checked, needUpdate]);
        syncHeaders(this);
      }
    }]);
  }($.BootstrapTable);

}));
