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
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: true
            } : {
              done: false,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = true,
      u = false;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = true, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
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
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t, "prototype", {
      writable: false
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
    var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
    return 2 & r && "function" == typeof p ? function (t) {
      return p.apply(e, t);
    } : p;
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
  	// eslint-disable-next-line es/no-function-prototype-bind -- safe
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
  	// eslint-disable-next-line es/no-function-prototype-bind -- safe
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
  	  version: '3.44.0',
  	  mode: IS_PURE ? 'pure' : 'global',
  	  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  	  license: 'https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE',
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
  	var toString = uncurryThis(1.1.toString);

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

  var es_array_find = {};

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

  var es_array_join = {};

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

  var es_array_map = {};

  var hasRequiredEs_array_map;

  function requireEs_array_map () {
  	if (hasRequiredEs_array_map) return es_array_map;
  	hasRequiredEs_array_map = 1;
  	var $ = require_export();
  	var $map = requireArrayIteration().map;
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();

  	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

  	// `Array.prototype.map` method
  	// https://tc39.es/ecma262/#sec-array.prototype.map
  	// with adding support of @@species
  	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  	  map: function map(callbackfn /* , thisArg */) {
  	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});
  	return es_array_map;
  }

  requireEs_array_map();

  var es_array_slice = {};

  var arraySlice;
  var hasRequiredArraySlice;

  function requireArraySlice () {
  	if (hasRequiredArraySlice) return arraySlice;
  	hasRequiredArraySlice = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	arraySlice = uncurryThis([].slice);
  	return arraySlice;
  }

  var hasRequiredEs_array_slice;

  function requireEs_array_slice () {
  	if (hasRequiredEs_array_slice) return es_array_slice;
  	hasRequiredEs_array_slice = 1;
  	var $ = require_export();
  	var isArray = requireIsArray();
  	var isConstructor = requireIsConstructor();
  	var isObject = requireIsObject();
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var toIndexedObject = requireToIndexedObject();
  	var createProperty = requireCreateProperty();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();
  	var nativeSlice = requireArraySlice();

  	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

  	var SPECIES = wellKnownSymbol('species');
  	var $Array = Array;
  	var max = Math.max;

  	// `Array.prototype.slice` method
  	// https://tc39.es/ecma262/#sec-array.prototype.slice
  	// fallback for not array-like ES3 strings and DOM objects
  	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  	  slice: function slice(start, end) {
  	    var O = toIndexedObject(this);
  	    var length = lengthOfArrayLike(O);
  	    var k = toAbsoluteIndex(start, length);
  	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
  	    var Constructor, result, n;
  	    if (isArray(O)) {
  	      Constructor = O.constructor;
  	      // cross-realm fallback
  	      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
  	        Constructor = undefined;
  	      } else if (isObject(Constructor)) {
  	        Constructor = Constructor[SPECIES];
  	        if (Constructor === null) Constructor = undefined;
  	      }
  	      if (Constructor === $Array || Constructor === undefined) {
  	        return nativeSlice(O, k, fin);
  	      }
  	    }
  	    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
  	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
  	    result.length = n;
  	    return result;
  	  }
  	});
  	return es_array_slice;
  }

  requireEs_array_slice();

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
  	  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
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

  var es_regexp_exec = {};

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

  var es_string_replace = {};

  var functionApply;
  var hasRequiredFunctionApply;

  function requireFunctionApply () {
  	if (hasRequiredFunctionApply) return functionApply;
  	hasRequiredFunctionApply = 1;
  	var NATIVE_BIND = requireFunctionBindNative();

  	var FunctionPrototype = Function.prototype;
  	var apply = FunctionPrototype.apply;
  	var call = FunctionPrototype.call;

  	// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
  	functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  	  return call.apply(apply, arguments);
  	});
  	return functionApply;
  }

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

  var regexpFlagsDetection;
  var hasRequiredRegexpFlagsDetection;

  function requireRegexpFlagsDetection () {
  	if (hasRequiredRegexpFlagsDetection) return regexpFlagsDetection;
  	hasRequiredRegexpFlagsDetection = 1;
  	var globalThis = requireGlobalThis();
  	var fails = requireFails();

  	// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
  	var RegExp = globalThis.RegExp;

  	var FLAGS_GETTER_IS_CORRECT = !fails(function () {
  	  var INDICES_SUPPORT = true;
  	  try {
  	    RegExp('.', 'd');
  	  } catch (error) {
  	    INDICES_SUPPORT = false;
  	  }

  	  var O = {};
  	  // modern V8 bug
  	  var calls = '';
  	  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  	  var addGetter = function (key, chr) {
  	    // eslint-disable-next-line es/no-object-defineproperty -- safe
  	    Object.defineProperty(O, key, { get: function () {
  	      calls += chr;
  	      return true;
  	    } });
  	  };

  	  var pairs = {
  	    dotAll: 's',
  	    global: 'g',
  	    ignoreCase: 'i',
  	    multiline: 'm',
  	    sticky: 'y'
  	  };

  	  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  	  for (var key in pairs) addGetter(key, pairs[key]);

  	  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	  var result = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(O);

  	  return result !== expected || calls !== expected;
  	});

  	regexpFlagsDetection = { correct: FLAGS_GETTER_IS_CORRECT };
  	return regexpFlagsDetection;
  }

  var regexpGetFlags;
  var hasRequiredRegexpGetFlags;

  function requireRegexpGetFlags () {
  	if (hasRequiredRegexpGetFlags) return regexpGetFlags;
  	hasRequiredRegexpGetFlags = 1;
  	var call = requireFunctionCall();
  	var hasOwn = requireHasOwnProperty();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var regExpFlagsDetection = requireRegexpFlagsDetection();
  	var regExpFlagsGetterImplementation = requireRegexpFlags();

  	var RegExpPrototype = RegExp.prototype;

  	regexpGetFlags = regExpFlagsDetection.correct ? function (it) {
  	  return it.flags;
  	} : function (it) {
  	  return (!regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, 'flags'))
  	    ? call(regExpFlagsGetterImplementation, it)
  	    : it.flags;
  	};
  	return regexpGetFlags;
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
  	var isObject = requireIsObject();
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var advanceStringIndex = requireAdvanceStringIndex();
  	var getMethod = requireGetMethod();
  	var getSubstitution = requireGetSubstitution();
  	var getRegExpFlags = requireRegexpGetFlags();
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
  	      var replacer = isObject(searchValue) ? getMethod(searchValue, REPLACE) : undefined;
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

  	      var flags = toString(getRegExpFlags(rx));
  	      var global = stringIndexOf(flags, 'g') !== -1;
  	      var fullUnicode;
  	      if (global) {
  	        fullUnicode = stringIndexOf(flags, 'u') !== -1;
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

  /**
   * @author zhixin wen <wenzhixin2010@gmail.com>
   * extensions: https://github.com/hhurz/tableExport.jquery.plugin
   */

  var Utils = $.fn.bootstrapTable.utils;
  var TYPE_NAME = {
    json: 'JSON',
    xml: 'XML',
    png: 'PNG',
    csv: 'CSV',
    txt: 'TXT',
    sql: 'SQL',
    doc: 'MS-Word',
    excel: 'MS-Excel',
    xlsx: 'MS-Excel (OpenXML)',
    powerpoint: 'MS-Powerpoint',
    pdf: 'PDF'
  };
  Object.assign($.fn.bootstrapTable.defaults, {
    showExport: false,
    exportDataType: 'basic',
    // basic, all, selected
    exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
    exportOptions: {},
    exportFooter: false
  });
  Object.assign($.fn.bootstrapTable.columnDefaults, {
    forceExport: false,
    forceHide: false
  });
  Utils.assignIcons($.fn.bootstrapTable.icons, 'export', {
    glyphicon: 'glyphicon-export icon-share',
    fa: 'fa-download',
    bi: 'bi-download',
    icon: 'icon-download',
    'material-icons': 'file_download'
  });
  Object.assign($.fn.bootstrapTable.locales, {
    formatExport: function formatExport() {
      return 'Export data';
    }
  });
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
  $.fn.bootstrapTable.methods.push('exportTable');
  Object.assign($.fn.bootstrapTable.defaults, {
    // eslint-disable-next-line no-unused-vars
    onExportSaved: function onExportSaved(exportedRows) {
      return false;
    },
    onExportStarted: function onExportStarted() {
      return false;
    }
  });
  Object.assign($.fn.bootstrapTable.events, {
    'export-saved.bs.table': 'onExportSaved',
    'export-started.bs.table': 'onExportStarted'
  });
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "initToolbar",
      value: function initToolbar() {
        var _this = this;
        var o = this.options;
        var exportTypes = o.exportTypes;
        this.showToolbar = this.showToolbar || o.showExport;
        if (this.options.showExport) {
          if (typeof exportTypes === 'string') {
            var types = exportTypes.slice(1, -1).replace(/ /g, '').split(',');
            exportTypes = types.map(function (t) {
              return t.slice(1, -1);
            });
          }
          if (typeof o.exportOptions === 'string') {
            o.exportOptions = Utils.calculateObjectValue(null, o.exportOptions);
          }
          this.$export = this.$toolbar.find('>.columns div.export');
          if (this.$export.length) {
            this.updateExportButton();
            return;
          }
          this.buttons = Object.assign(this.buttons, {
            export: {
              html: function html() {
                if (exportTypes.length === 1) {
                  return "\n                  <div class=\"export ".concat(_this.constants.classes.buttonsDropdown, "\"\n                  data-type=\"").concat(exportTypes[0], "\">\n                  <button class=\"").concat(_this.constants.buttonsClass, "\"\n                  aria-label=\"").concat(o.formatExport(), "\"\n                  type=\"button\"\n                  title=\"").concat(o.formatExport(), "\">\n                  ").concat(o.showButtonIcons ? Utils.sprintf(_this.constants.html.icon, o.iconsPrefix, o.icons.export) : '', "\n                  ").concat(o.showButtonText ? o.formatExport() : '', "\n                  </button>\n                  </div>\n                ");
                }
                var html = [];
                html.push("\n                <div class=\"export ".concat(_this.constants.classes.buttonsDropdown, "\">\n                <button class=\"").concat(_this.constants.buttonsClass, " dropdown-toggle\"\n                aria-label=\"").concat(o.formatExport(), "\"\n                ").concat(_this.constants.dataToggle, "=\"dropdown\"\n                type=\"button\"\n                title=\"").concat(o.formatExport(), "\">\n                ").concat(o.showButtonIcons ? Utils.sprintf(_this.constants.html.icon, o.iconsPrefix, o.icons.export) : '', "\n                ").concat(o.showButtonText ? o.formatExport() : '', "\n                ").concat(_this.constants.html.dropdownCaret, "\n                </button>\n                ").concat(_this.constants.html.toolbarDropdown[0], "\n              "));
                var _iterator = _createForOfIteratorHelper(exportTypes),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var type = _step.value;
                    if (TYPE_NAME.hasOwnProperty(type)) {
                      var $item = $(Utils.sprintf(_this.constants.html.pageDropdownItem, '', TYPE_NAME[type]));
                      $item.attr('data-type', type);
                      html.push($item.prop('outerHTML'));
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                html.push(_this.constants.html.toolbarDropdown[1], '</div>');
                return html.join('');
              }
            }
          });
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _superPropGet(_class, "initToolbar", this, 3)(args);
        this.$export = this.$toolbar.find('>.columns div.export');
        if (!this.options.showExport) {
          return;
        }
        this.updateExportButton();
        var $exportButtons = this.$export.find('[data-type]');
        if (exportTypes.length === 1) {
          $exportButtons = this.$export;
        }
        $exportButtons.click(function (e) {
          e.preventDefault();
          _this.trigger('export-started');
          _this.exportTable({
            type: $(e.currentTarget).data('type')
          });
        });
        this.handleToolbar();
      }
    }, {
      key: "handleToolbar",
      value: function handleToolbar() {
        if (!this.$export) {
          return;
        }
        if (_superPropGet(_class, "handleToolbar", this, 1)) {
          _superPropGet(_class, "handleToolbar", this, 3)([]);
        }
      }
    }, {
      key: "exportTable",
      value: function exportTable(options) {
        var _this2 = this;
        var o = this.options;
        var stateField = this.header.stateField;
        var isCardView = o.cardView;
        var doExport = function doExport(callback) {
          if (stateField) {
            _this2.hideColumn(stateField);
          }
          if (isCardView) {
            _this2.toggleView();
          }
          _this2.columns.forEach(function (row) {
            if (row.forceHide) {
              _this2.hideColumn(row.field);
            }
          });
          var data = _this2.getData();
          if (o.detailView && o.detailViewIcon) {
            var detailViewIndex = o.detailViewAlign === 'left' ? 0 : _this2.getVisibleFields().length + Utils.getDetailViewIndexOffset(_this2.options);
            o.exportOptions.ignoreColumn = [detailViewIndex].concat(o.exportOptions.ignoreColumn || []);
          }
          if (o.exportFooter && o.height) {
            var $footerRow = _this2.$tableFooter.find('tr').first();
            var footerData = {};
            var footerHtml = [];
            $footerRow.children().forEach(function (footerCell, index) {
              var footerCellHtml = $(footerCell).children('.th-inner').first().html();
              footerData[_this2.columns[index].field] = footerCellHtml === '&nbsp;' ? null : footerCellHtml;

              // grab footer cell text into cell index-based array
              footerHtml.push(footerCellHtml);
            });
            _this2.$body.append(_this2.$body.children().last()[0].outerHTML);
            var $lastTableRow = _this2.$body.children().last();
            $lastTableRow.children().forEach(function (lastTableRowCell, index) {
              $(lastTableRowCell).html(footerHtml[index]);
            });
          }
          var hiddenColumns = _this2.getHiddenColumns();
          hiddenColumns.forEach(function (row) {
            if (row.forceExport) {
              _this2.showColumn(row.field);
            }
          });
          if (typeof o.exportOptions.fileName === 'function') {
            options.fileName = o.exportOptions.fileName();
          }
          _this2.$el.tableExport(Utils.extend({
            onAfterSaveToFile: function onAfterSaveToFile() {
              if (o.exportFooter) {
                _this2.load(data);
              }
              if (stateField) {
                _this2.showColumn(stateField);
              }
              if (isCardView) {
                _this2.toggleView();
              }
              hiddenColumns.forEach(function (row) {
                if (row.forceExport) {
                  _this2.hideColumn(row.field);
                }
              });
              _this2.columns.forEach(function (row) {
                if (row.forceHide) {
                  _this2.showColumn(row.field);
                }
              });
              if (callback) callback();
            }
          }, o.exportOptions, options));
        };
        if (o.exportDataType === 'all' && o.pagination) {
          var eventName = o.sidePagination === 'server' ? 'post-body.bs.table' : 'page-change.bs.table';
          var virtualScroll = this.options.virtualScroll;
          this.$el.one(eventName, function () {
            setTimeout(function () {
              var data = _this2.getData();
              doExport(function () {
                _this2.options.virtualScroll = virtualScroll;
                _this2.togglePagination();
              });
              _this2.trigger('export-saved', data);
            }, 0);
          });
          this.options.virtualScroll = false;
          this.togglePagination();
        } else if (o.exportDataType === 'selected') {
          var data = this.getData({
            includeHiddenRows: true,
            unfiltered: true
          });
          var selectedData = this.getSelections();
          var pagination = o.pagination;
          if (!selectedData.length) {
            return;
          }
          if (o.sidePagination === 'server') {
            data = _defineProperty({
              total: o.totalRows
            }, this.options.dataField, data);
            selectedData = _defineProperty({
              total: selectedData.length
            }, this.options.dataField, selectedData);
          }
          this.load(selectedData);
          if (pagination) {
            this.togglePagination();
          }
          doExport(function () {
            if (pagination) {
              _this2.togglePagination();
            }
            _this2.load(data);
          });
          this.trigger('export-saved', selectedData);
        } else {
          doExport();
          this.trigger('export-saved', this.getData(true));
        }
      }
    }, {
      key: "updateSelected",
      value: function updateSelected() {
        _superPropGet(_class, "updateSelected", this, 3)([]);
        this.updateExportButton();
      }
    }, {
      key: "updateExportButton",
      value: function updateExportButton() {
        if (this.options.exportDataType === 'selected') {
          this.$export.find('> button').prop('disabled', !this.getSelections().length);
        }
      }
    }]);
  }($.BootstrapTable);

}));
