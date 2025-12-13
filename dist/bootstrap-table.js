(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BootstrapTable = factory(global.jQuery));
})(this, (function ($) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
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
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = true,
        o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = true, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys$1(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
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
    return ("string" === r ? String : Number)(t);
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
  	  version: '3.46.0',
  	  mode: IS_PURE ? 'pure' : 'global',
  	  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)',
  	  license: 'https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE',
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

  var es_array_includes = {};

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

  var es_object_entries = {};

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

  var hasRequiredEs_object_entries;

  function requireEs_object_entries () {
  	if (hasRequiredEs_object_entries) return es_object_entries;
  	hasRequiredEs_object_entries = 1;
  	var $ = require_export();
  	var $entries = requireObjectToArray().entries;

  	// `Object.entries` method
  	// https://tc39.es/ecma262/#sec-object.entries
  	$({ target: 'Object', stat: true }, {
  	  entries: function entries(O) {
  	    return $entries(O);
  	  }
  	});
  	return es_object_entries;
  }

  requireEs_object_entries();

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
  	var isObject = requireIsObject();
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
  	      var splitter = isObject(separator) ? getMethod(separator, SPLIT) : undefined;
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

  var es_array_filter = {};

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

  var es_array_indexOf = {};

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

  var iterators;
  var hasRequiredIterators;

  function requireIterators () {
  	if (hasRequiredIterators) return iterators;
  	hasRequiredIterators = 1;
  	iterators = {};
  	return iterators;
  }

  var iteratorsCore;
  var hasRequiredIteratorsCore;

  function requireIteratorsCore () {
  	if (hasRequiredIteratorsCore) return iteratorsCore;
  	hasRequiredIteratorsCore = 1;
  	var fails = requireFails();
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();
  	var create = requireObjectCreate();
  	var getPrototypeOf = requireObjectGetPrototypeOf();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var IS_PURE = requireIsPure();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var BUGGY_SAFARI_ITERATORS = false;

  	// `%IteratorPrototype%` object
  	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

  	/* eslint-disable es/no-array-prototype-keys -- safe */
  	if ([].keys) {
  	  arrayIterator = [].keys();
  	  // Safari 8 has buggy iterators w/o `next`
  	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  	  else {
  	    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
  	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  	  }
  	}

  	var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  	  var test = {};
  	  // FF44- legacy iterators case
  	  return IteratorPrototype[ITERATOR].call(test) !== test;
  	});

  	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
  	else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

  	// `%IteratorPrototype%[@@iterator]()` method
  	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  	if (!isCallable(IteratorPrototype[ITERATOR])) {
  	  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
  	    return this;
  	  });
  	}

  	iteratorsCore = {
  	  IteratorPrototype: IteratorPrototype,
  	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  	};
  	return iteratorsCore;
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

  var iteratorCreateConstructor;
  var hasRequiredIteratorCreateConstructor;

  function requireIteratorCreateConstructor () {
  	if (hasRequiredIteratorCreateConstructor) return iteratorCreateConstructor;
  	hasRequiredIteratorCreateConstructor = 1;
  	var IteratorPrototype = requireIteratorsCore().IteratorPrototype;
  	var create = requireObjectCreate();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	var setToStringTag = requireSetToStringTag();
  	var Iterators = requireIterators();

  	var returnThis = function () { return this; };

  	iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  	  var TO_STRING_TAG = NAME + ' Iterator';
  	  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  	  Iterators[TO_STRING_TAG] = returnThis;
  	  return IteratorConstructor;
  	};
  	return iteratorCreateConstructor;
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

  var iteratorDefine;
  var hasRequiredIteratorDefine;

  function requireIteratorDefine () {
  	if (hasRequiredIteratorDefine) return iteratorDefine;
  	hasRequiredIteratorDefine = 1;
  	var $ = require_export();
  	var call = requireFunctionCall();
  	var IS_PURE = requireIsPure();
  	var FunctionName = requireFunctionName();
  	var isCallable = requireIsCallable();
  	var createIteratorConstructor = requireIteratorCreateConstructor();
  	var getPrototypeOf = requireObjectGetPrototypeOf();
  	var setPrototypeOf = requireObjectSetPrototypeOf();
  	var setToStringTag = requireSetToStringTag();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var Iterators = requireIterators();
  	var IteratorsCore = requireIteratorsCore();

  	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  	var IteratorPrototype = IteratorsCore.IteratorPrototype;
  	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  	var ITERATOR = wellKnownSymbol('iterator');
  	var KEYS = 'keys';
  	var VALUES = 'values';
  	var ENTRIES = 'entries';

  	var returnThis = function () { return this; };

  	iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  	  createIteratorConstructor(IteratorConstructor, NAME, next);

  	  var getIterationMethod = function (KIND) {
  	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
  	    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

  	    switch (KIND) {
  	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
  	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
  	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
  	    }

  	    return function () { return new IteratorConstructor(this); };
  	  };

  	  var TO_STRING_TAG = NAME + ' Iterator';
  	  var INCORRECT_VALUES_NAME = false;
  	  var IterablePrototype = Iterable.prototype;
  	  var nativeIterator = IterablePrototype[ITERATOR]
  	    || IterablePrototype['@@iterator']
  	    || DEFAULT && IterablePrototype[DEFAULT];
  	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  	  var CurrentIteratorPrototype, methods, KEY;

  	  // fix native
  	  if (anyNativeIterator) {
  	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
  	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
  	      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
  	        if (setPrototypeOf) {
  	          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
  	        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
  	          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
  	        }
  	      }
  	      // Set @@toStringTag to native iterators
  	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
  	      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
  	    }
  	  }

  	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  	  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
  	    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
  	      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
  	    } else {
  	      INCORRECT_VALUES_NAME = true;
  	      defaultIterator = function values() { return call(nativeIterator, this); };
  	    }
  	  }

  	  // export additional methods
  	  if (DEFAULT) {
  	    methods = {
  	      values: getIterationMethod(VALUES),
  	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
  	      entries: getIterationMethod(ENTRIES)
  	    };
  	    if (FORCED) for (KEY in methods) {
  	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
  	        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
  	      }
  	    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  	  }

  	  // define iterator
  	  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
  	    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  	  }
  	  Iterators[NAME] = defaultIterator;

  	  return methods;
  	};
  	return iteratorDefine;
  }

  var createIterResultObject;
  var hasRequiredCreateIterResultObject;

  function requireCreateIterResultObject () {
  	if (hasRequiredCreateIterResultObject) return createIterResultObject;
  	hasRequiredCreateIterResultObject = 1;
  	// `CreateIterResultObject` abstract operation
  	// https://tc39.es/ecma262/#sec-createiterresultobject
  	createIterResultObject = function (value, done) {
  	  return { value: value, done: done };
  	};
  	return createIterResultObject;
  }

  var es_array_iterator;
  var hasRequiredEs_array_iterator;

  function requireEs_array_iterator () {
  	if (hasRequiredEs_array_iterator) return es_array_iterator;
  	hasRequiredEs_array_iterator = 1;
  	var toIndexedObject = requireToIndexedObject();
  	var addToUnscopables = requireAddToUnscopables();
  	var Iterators = requireIterators();
  	var InternalStateModule = requireInternalState();
  	var defineProperty = requireObjectDefineProperty().f;
  	var defineIterator = requireIteratorDefine();
  	var createIterResultObject = requireCreateIterResultObject();
  	var IS_PURE = requireIsPure();
  	var DESCRIPTORS = requireDescriptors();

  	var ARRAY_ITERATOR = 'Array Iterator';
  	var setInternalState = InternalStateModule.set;
  	var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

  	// `Array.prototype.entries` method
  	// https://tc39.es/ecma262/#sec-array.prototype.entries
  	// `Array.prototype.keys` method
  	// https://tc39.es/ecma262/#sec-array.prototype.keys
  	// `Array.prototype.values` method
  	// https://tc39.es/ecma262/#sec-array.prototype.values
  	// `Array.prototype[@@iterator]` method
  	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  	// `CreateArrayIterator` internal method
  	// https://tc39.es/ecma262/#sec-createarrayiterator
  	es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  	  setInternalState(this, {
  	    type: ARRAY_ITERATOR,
  	    target: toIndexedObject(iterated), // target
  	    index: 0,                          // next index
  	    kind: kind                         // kind
  	  });
  	// `%ArrayIteratorPrototype%.next` method
  	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  	}, function () {
  	  var state = getInternalState(this);
  	  var target = state.target;
  	  var index = state.index++;
  	  if (!target || index >= target.length) {
  	    state.target = null;
  	    return createIterResultObject(undefined, true);
  	  }
  	  switch (state.kind) {
  	    case 'keys': return createIterResultObject(index, false);
  	    case 'values': return createIterResultObject(target[index], false);
  	  } return createIterResultObject([index, target[index]], false);
  	}, 'values');

  	// argumentsList[@@iterator] is %ArrayProto_values%
  	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
  	var values = Iterators.Arguments = Iterators.Array;

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables('keys');
  	addToUnscopables('values');
  	addToUnscopables('entries');

  	// V8 ~ Chrome 45- bug
  	if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  	  defineProperty(values, 'name', { value: 'values' });
  	} catch (error) { /* empty */ }
  	return es_array_iterator;
  }

  requireEs_array_iterator();

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

  var es_object_getPrototypeOf = {};

  var hasRequiredEs_object_getPrototypeOf;

  function requireEs_object_getPrototypeOf () {
  	if (hasRequiredEs_object_getPrototypeOf) return es_object_getPrototypeOf;
  	hasRequiredEs_object_getPrototypeOf = 1;
  	var $ = require_export();
  	var fails = requireFails();
  	var toObject = requireToObject();
  	var nativeGetPrototypeOf = requireObjectGetPrototypeOf();
  	var CORRECT_PROTOTYPE_GETTER = requireCorrectPrototypeGetter();

  	var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

  	// `Object.getPrototypeOf` method
  	// https://tc39.es/ecma262/#sec-object.getprototypeof
  	$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  	  getPrototypeOf: function getPrototypeOf(it) {
  	    return nativeGetPrototypeOf(toObject(it));
  	  }
  	});
  	return es_object_getPrototypeOf;
  }

  requireEs_object_getPrototypeOf();

  var es_regexp_constructor = {};

  var inheritIfRequired;
  var hasRequiredInheritIfRequired;

  function requireInheritIfRequired () {
  	if (hasRequiredInheritIfRequired) return inheritIfRequired;
  	hasRequiredInheritIfRequired = 1;
  	var isCallable = requireIsCallable();
  	var isObject = requireIsObject();
  	var setPrototypeOf = requireObjectSetPrototypeOf();

  	// makes subclassing work correct for wrapped built-ins
  	inheritIfRequired = function ($this, dummy, Wrapper) {
  	  var NewTarget, NewTargetPrototype;
  	  if (
  	    // it can work only with native `setPrototypeOf`
  	    setPrototypeOf &&
  	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  	    isCallable(NewTarget = dummy.constructor) &&
  	    NewTarget !== Wrapper &&
  	    isObject(NewTargetPrototype = NewTarget.prototype) &&
  	    NewTargetPrototype !== Wrapper.prototype
  	  ) setPrototypeOf($this, NewTargetPrototype);
  	  return $this;
  	};
  	return inheritIfRequired;
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

  var proxyAccessor;
  var hasRequiredProxyAccessor;

  function requireProxyAccessor () {
  	if (hasRequiredProxyAccessor) return proxyAccessor;
  	hasRequiredProxyAccessor = 1;
  	var defineProperty = requireObjectDefineProperty().f;

  	proxyAccessor = function (Target, Source, key) {
  	  key in Target || defineProperty(Target, key, {
  	    configurable: true,
  	    get: function () { return Source[key]; },
  	    set: function (it) { Source[key] = it; }
  	  });
  	};
  	return proxyAccessor;
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

  var hasRequiredEs_regexp_constructor;

  function requireEs_regexp_constructor () {
  	if (hasRequiredEs_regexp_constructor) return es_regexp_constructor;
  	hasRequiredEs_regexp_constructor = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var globalThis = requireGlobalThis();
  	var uncurryThis = requireFunctionUncurryThis();
  	var isForced = requireIsForced();
  	var inheritIfRequired = requireInheritIfRequired();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var create = requireObjectCreate();
  	var getOwnPropertyNames = requireObjectGetOwnPropertyNames().f;
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var isRegExp = requireIsRegexp();
  	var toString = requireToString();
  	var getRegExpFlags = requireRegexpGetFlags();
  	var stickyHelpers = requireRegexpStickyHelpers();
  	var proxyAccessor = requireProxyAccessor();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var fails = requireFails();
  	var hasOwn = requireHasOwnProperty();
  	var enforceInternalState = requireInternalState().enforce;
  	var setSpecies = requireSetSpecies();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var UNSUPPORTED_DOT_ALL = requireRegexpUnsupportedDotAll();
  	var UNSUPPORTED_NCG = requireRegexpUnsupportedNcg();

  	var MATCH = wellKnownSymbol('match');
  	var NativeRegExp = globalThis.RegExp;
  	var RegExpPrototype = NativeRegExp.prototype;
  	var SyntaxError = globalThis.SyntaxError;
  	var exec = uncurryThis(RegExpPrototype.exec);
  	var charAt = uncurryThis(''.charAt);
  	var replace = uncurryThis(''.replace);
  	var stringIndexOf = uncurryThis(''.indexOf);
  	var stringSlice = uncurryThis(''.slice);
  	// TODO: Use only proper RegExpIdentifierName
  	var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  	var re1 = /a/g;
  	var re2 = /a/g;

  	// "new" should create a new object, old webkit bug
  	var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  	var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
  	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

  	var BASE_FORCED = DESCRIPTORS &&
  	  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
  	    re2[MATCH] = false;
  	    // RegExp constructor can alter flags and IsRegExp works correct with @@match
  	    // eslint-disable-next-line sonarjs/inconsistent-function-call -- required for testing
  	    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  	  }));

  	var handleDotAll = function (string) {
  	  var length = string.length;
  	  var index = 0;
  	  var result = '';
  	  var brackets = false;
  	  var chr;
  	  for (; index <= length; index++) {
  	    chr = charAt(string, index);
  	    if (chr === '\\') {
  	      result += chr + charAt(string, ++index);
  	      continue;
  	    }
  	    if (!brackets && chr === '.') {
  	      result += '[\\s\\S]';
  	    } else {
  	      if (chr === '[') {
  	        brackets = true;
  	      } else if (chr === ']') {
  	        brackets = false;
  	      } result += chr;
  	    }
  	  } return result;
  	};

  	var handleNCG = function (string) {
  	  var length = string.length;
  	  var index = 0;
  	  var result = '';
  	  var named = [];
  	  var names = create(null);
  	  var brackets = false;
  	  var ncg = false;
  	  var groupid = 0;
  	  var groupname = '';
  	  var chr;
  	  for (; index <= length; index++) {
  	    chr = charAt(string, index);
  	    if (chr === '\\') {
  	      chr += charAt(string, ++index);
  	    } else if (chr === ']') {
  	      brackets = false;
  	    } else if (!brackets) switch (true) {
  	      case chr === '[':
  	        brackets = true;
  	        break;
  	      case chr === '(':
  	        result += chr;
  	        // ignore non-capturing groups
  	        if (stringSlice(string, index + 1, index + 3) === '?:') {
  	          continue;
  	        }
  	        if (exec(IS_NCG, stringSlice(string, index + 1))) {
  	          index += 2;
  	          ncg = true;
  	        }
  	        groupid++;
  	        continue;
  	      case chr === '>' && ncg:
  	        if (groupname === '' || hasOwn(names, groupname)) {
  	          throw new SyntaxError('Invalid capture group name');
  	        }
  	        names[groupname] = true;
  	        named[named.length] = [groupname, groupid];
  	        ncg = false;
  	        groupname = '';
  	        continue;
  	    }
  	    if (ncg) groupname += chr;
  	    else result += chr;
  	  } return [result, named];
  	};

  	// `RegExp` constructor
  	// https://tc39.es/ecma262/#sec-regexp-constructor
  	if (isForced('RegExp', BASE_FORCED)) {
  	  var RegExpWrapper = function RegExp(pattern, flags) {
  	    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
  	    var patternIsRegExp = isRegExp(pattern);
  	    var flagsAreUndefined = flags === undefined;
  	    var groups = [];
  	    var rawPattern = pattern;
  	    var rawFlags, dotAll, sticky, handled, result, state;

  	    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
  	      return pattern;
  	    }

  	    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
  	      pattern = pattern.source;
  	      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
  	    }

  	    pattern = pattern === undefined ? '' : toString(pattern);
  	    flags = flags === undefined ? '' : toString(flags);
  	    rawPattern = pattern;

  	    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
  	      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
  	      if (dotAll) flags = replace(flags, /s/g, '');
  	    }

  	    rawFlags = flags;

  	    if (MISSED_STICKY && 'sticky' in re1) {
  	      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
  	      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
  	    }

  	    if (UNSUPPORTED_NCG) {
  	      handled = handleNCG(pattern);
  	      pattern = handled[0];
  	      groups = handled[1];
  	    }

  	    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

  	    if (dotAll || sticky || groups.length) {
  	      state = enforceInternalState(result);
  	      if (dotAll) {
  	        state.dotAll = true;
  	        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
  	      }
  	      if (sticky) state.sticky = true;
  	      if (groups.length) state.groups = groups;
  	    }

  	    if (pattern !== rawPattern) try {
  	      // fails in old engines, but we have no alternatives for unsupported regex syntax
  	      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
  	    } catch (error) { /* empty */ }

  	    return result;
  	  };

  	  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
  	    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  	  }

  	  RegExpPrototype.constructor = RegExpWrapper;
  	  RegExpWrapper.prototype = RegExpPrototype;
  	  defineBuiltIn(globalThis, 'RegExp', RegExpWrapper, { constructor: true });
  	}

  	// https://tc39.es/ecma262/#sec-get-regexp-@@species
  	setSpecies('RegExp');
  	return es_regexp_constructor;
  }

  requireEs_regexp_constructor();

  var es_regexp_toString = {};

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

  var es_string_endsWith = {};

  var hasRequiredEs_string_endsWith;

  function requireEs_string_endsWith () {
  	if (hasRequiredEs_string_endsWith) return es_string_endsWith;
  	hasRequiredEs_string_endsWith = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThisClause();
  	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var notARegExp = requireNotARegexp();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
  	var IS_PURE = requireIsPure();

  	var slice = uncurryThis(''.slice);
  	var min = Math.min;

  	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
  	// https://github.com/zloirock/core-js/pull/702
  	var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  	  return descriptor && !descriptor.writable;
  	}();

  	// `String.prototype.endsWith` method
  	// https://tc39.es/ecma262/#sec-string.prototype.endswith
  	$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
  	    var that = toString(requireObjectCoercible(this));
  	    notARegExp(searchString);
  	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
  	    var len = that.length;
  	    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
  	    var search = toString(searchString);
  	    return slice(that, end - search.length, end) === search;
  	  }
  	});
  	return es_string_endsWith;
  }

  requireEs_string_endsWith();

  var es_string_iterator = {};

  var hasRequiredEs_string_iterator;

  function requireEs_string_iterator () {
  	if (hasRequiredEs_string_iterator) return es_string_iterator;
  	hasRequiredEs_string_iterator = 1;
  	var charAt = requireStringMultibyte().charAt;
  	var toString = requireToString();
  	var InternalStateModule = requireInternalState();
  	var defineIterator = requireIteratorDefine();
  	var createIterResultObject = requireCreateIterResultObject();

  	var STRING_ITERATOR = 'String Iterator';
  	var setInternalState = InternalStateModule.set;
  	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

  	// `String.prototype[@@iterator]` method
  	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  	defineIterator(String, 'String', function (iterated) {
  	  setInternalState(this, {
  	    type: STRING_ITERATOR,
  	    string: toString(iterated),
  	    index: 0
  	  });
  	// `%StringIteratorPrototype%.next` method
  	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  	}, function next() {
  	  var state = getInternalState(this);
  	  var string = state.string;
  	  var index = state.index;
  	  var point;
  	  if (index >= string.length) return createIterResultObject(undefined, true);
  	  point = charAt(string, index);
  	  state.index += point.length;
  	  return createIterResultObject(point, false);
  	});
  	return es_string_iterator;
  }

  requireEs_string_iterator();

  var es_string_match = {};

  var hasRequiredEs_string_match;

  function requireEs_string_match () {
  	if (hasRequiredEs_string_match) return es_string_match;
  	hasRequiredEs_string_match = 1;
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  	var anObject = requireAnObject();
  	var isObject = requireIsObject();
  	var toLength = requireToLength();
  	var toString = requireToString();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var getMethod = requireGetMethod();
  	var advanceStringIndex = requireAdvanceStringIndex();
  	var getRegExpFlags = requireRegexpGetFlags();
  	var regExpExec = requireRegexpExecAbstract();

  	var stringIndexOf = uncurryThis(''.indexOf);

  	// @@match logic
  	fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  	  return [
  	    // `String.prototype.match` method
  	    // https://tc39.es/ecma262/#sec-string.prototype.match
  	    function match(regexp) {
  	      var O = requireObjectCoercible(this);
  	      var matcher = isObject(regexp) ? getMethod(regexp, MATCH) : undefined;
  	      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
  	    },
  	    // `RegExp.prototype[@@match]` method
  	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
  	    function (string) {
  	      var rx = anObject(this);
  	      var S = toString(string);
  	      var res = maybeCallNative(nativeMatch, rx, S);

  	      if (res.done) return res.value;

  	      var flags = toString(getRegExpFlags(rx));

  	      if (stringIndexOf(flags, 'g') === -1) return regExpExec(rx, S);

  	      var fullUnicode = stringIndexOf(flags, 'u') !== -1;
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

  var es_string_search = {};

  var sameValue;
  var hasRequiredSameValue;

  function requireSameValue () {
  	if (hasRequiredSameValue) return sameValue;
  	hasRequiredSameValue = 1;
  	// `SameValue` abstract operation
  	// https://tc39.es/ecma262/#sec-samevalue
  	// eslint-disable-next-line es/no-object-is -- safe
  	sameValue = Object.is || function is(x, y) {
  	  // eslint-disable-next-line no-self-compare -- NaN check
  	  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
  	};
  	return sameValue;
  }

  var hasRequiredEs_string_search;

  function requireEs_string_search () {
  	if (hasRequiredEs_string_search) return es_string_search;
  	hasRequiredEs_string_search = 1;
  	var call = requireFunctionCall();
  	var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  	var anObject = requireAnObject();
  	var isObject = requireIsObject();
  	var requireObjectCoercible = requireRequireObjectCoercible();
  	var sameValue = requireSameValue();
  	var toString = requireToString();
  	var getMethod = requireGetMethod();
  	var regExpExec = requireRegexpExecAbstract();

  	// @@search logic
  	fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  	  return [
  	    // `String.prototype.search` method
  	    // https://tc39.es/ecma262/#sec-string.prototype.search
  	    function search(regexp) {
  	      var O = requireObjectCoercible(this);
  	      var searcher = isObject(regexp) ? getMethod(regexp, SEARCH) : undefined;
  	      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
  	    },
  	    // `RegExp.prototype[@@search]` method
  	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
  	    function (string) {
  	      var rx = anObject(this);
  	      var S = toString(string);
  	      var res = maybeCallNative(nativeSearch, rx, S);

  	      if (res.done) return res.value;

  	      var previousLastIndex = rx.lastIndex;
  	      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
  	      var result = regExpExec(rx, S);
  	      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
  	      return result === null ? -1 : result.index;
  	    }
  	  ];
  	});
  	return es_string_search;
  }

  requireEs_string_search();

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

  var web_domCollections_iterator = {};

  var hasRequiredWeb_domCollections_iterator;

  function requireWeb_domCollections_iterator () {
  	if (hasRequiredWeb_domCollections_iterator) return web_domCollections_iterator;
  	hasRequiredWeb_domCollections_iterator = 1;
  	var globalThis = requireGlobalThis();
  	var DOMIterables = requireDomIterables();
  	var DOMTokenListPrototype = requireDomTokenListPrototype();
  	var ArrayIteratorMethods = requireEs_array_iterator();
  	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  	var setToStringTag = requireSetToStringTag();
  	var wellKnownSymbol = requireWellKnownSymbol();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var ArrayValues = ArrayIteratorMethods.values;

  	var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  	  if (CollectionPrototype) {
  	    // some Chrome versions have non-configurable methods on DOMTokenList
  	    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
  	      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
  	    } catch (error) {
  	      CollectionPrototype[ITERATOR] = ArrayValues;
  	    }
  	    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
  	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
  	      // some Chrome versions have non-configurable methods on DOMTokenList
  	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
  	        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
  	      } catch (error) {
  	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
  	      }
  	    }
  	  }
  	};

  	for (var COLLECTION_NAME in DOMIterables) {
  	  handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME);
  	}

  	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');
  	return web_domCollections_iterator;
  }

  requireWeb_domCollections_iterator();

  var web_urlSearchParams = {};

  var es_string_fromCodePoint = {};

  var hasRequiredEs_string_fromCodePoint;

  function requireEs_string_fromCodePoint () {
  	if (hasRequiredEs_string_fromCodePoint) return es_string_fromCodePoint;
  	hasRequiredEs_string_fromCodePoint = 1;
  	var $ = require_export();
  	var uncurryThis = requireFunctionUncurryThis();
  	var toAbsoluteIndex = requireToAbsoluteIndex();

  	var $RangeError = RangeError;
  	var fromCharCode = String.fromCharCode;
  	// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
  	var $fromCodePoint = String.fromCodePoint;
  	var join = uncurryThis([].join);

  	// length should be 1, old FF problem
  	var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

  	// `String.fromCodePoint` method
  	// https://tc39.es/ecma262/#sec-string.fromcodepoint
  	$({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  	  // eslint-disable-next-line no-unused-vars -- required for `.length`
  	  fromCodePoint: function fromCodePoint(x) {
  	    var elements = [];
  	    var length = arguments.length;
  	    var i = 0;
  	    var code;
  	    while (length > i) {
  	      code = +arguments[i++];
  	      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw new $RangeError(code + ' is not a valid code point');
  	      elements[i] = code < 0x10000
  	        ? fromCharCode(code)
  	        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
  	    } return join(elements, '');
  	  }
  	});
  	return es_string_fromCodePoint;
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

  var urlConstructorDetection;
  var hasRequiredUrlConstructorDetection;

  function requireUrlConstructorDetection () {
  	if (hasRequiredUrlConstructorDetection) return urlConstructorDetection;
  	hasRequiredUrlConstructorDetection = 1;
  	var fails = requireFails();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var DESCRIPTORS = requireDescriptors();
  	var IS_PURE = requireIsPure();

  	var ITERATOR = wellKnownSymbol('iterator');

  	urlConstructorDetection = !fails(function () {
  	  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  	  var url = new URL('b?a=1&b=2&c=3', 'https://a');
  	  var params = url.searchParams;
  	  var params2 = new URLSearchParams('a=1&a=2&b=3');
  	  var result = '';
  	  url.pathname = 'c%20d';
  	  params.forEach(function (value, key) {
  	    params['delete']('b');
  	    result += key + value;
  	  });
  	  params2['delete']('a', 2);
  	  // `undefined` case is a Chromium 117 bug
  	  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  	  params2['delete']('b', undefined);
  	  return (IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')))
  	    || (!params.size && (IS_PURE || !DESCRIPTORS))
  	    || !params.sort
  	    || url.href !== 'https://a/c%20d?a=1&c=3'
  	    || params.get('c') !== '3'
  	    || String(new URLSearchParams('?a=1')) !== 'a=1'
  	    || !params[ITERATOR]
  	    // throws in Edge
  	    || new URL('https://a@b').username !== 'a'
  	    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
  	    // not punycoded in Edge
  	    || new URL('https://тест').host !== 'xn--e1aybc'
  	    // not escaped in Chrome 62-
  	    || new URL('https://a#б').hash !== '#%D0%B1'
  	    // fails in Chrome 66-
  	    || result !== 'a1c3'
  	    // throws in Safari
  	    || new URL('https://x', undefined).host !== 'x';
  	});
  	return urlConstructorDetection;
  }

  var defineBuiltIns;
  var hasRequiredDefineBuiltIns;

  function requireDefineBuiltIns () {
  	if (hasRequiredDefineBuiltIns) return defineBuiltIns;
  	hasRequiredDefineBuiltIns = 1;
  	var defineBuiltIn = requireDefineBuiltIn();

  	defineBuiltIns = function (target, src, options) {
  	  for (var key in src) defineBuiltIn(target, key, src[key], options);
  	  return target;
  	};
  	return defineBuiltIns;
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

  var web_urlSearchParams_constructor;
  var hasRequiredWeb_urlSearchParams_constructor;

  function requireWeb_urlSearchParams_constructor () {
  	if (hasRequiredWeb_urlSearchParams_constructor) return web_urlSearchParams_constructor;
  	hasRequiredWeb_urlSearchParams_constructor = 1;
  	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
  	requireEs_array_iterator();
  	requireEs_string_fromCodePoint();
  	var $ = require_export();
  	var globalThis = requireGlobalThis();
  	var safeGetBuiltIn = requireSafeGetBuiltIn();
  	var getBuiltIn = requireGetBuiltIn();
  	var call = requireFunctionCall();
  	var uncurryThis = requireFunctionUncurryThis();
  	var DESCRIPTORS = requireDescriptors();
  	var USE_NATIVE_URL = requireUrlConstructorDetection();
  	var defineBuiltIn = requireDefineBuiltIn();
  	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
  	var defineBuiltIns = requireDefineBuiltIns();
  	var setToStringTag = requireSetToStringTag();
  	var createIteratorConstructor = requireIteratorCreateConstructor();
  	var InternalStateModule = requireInternalState();
  	var anInstance = requireAnInstance();
  	var isCallable = requireIsCallable();
  	var hasOwn = requireHasOwnProperty();
  	var bind = requireFunctionBindContext();
  	var classof = requireClassof();
  	var anObject = requireAnObject();
  	var isObject = requireIsObject();
  	var $toString = requireToString();
  	var create = requireObjectCreate();
  	var createPropertyDescriptor = requireCreatePropertyDescriptor();
  	var getIterator = requireGetIterator();
  	var getIteratorMethod = requireGetIteratorMethod();
  	var createIterResultObject = requireCreateIterResultObject();
  	var validateArgumentsLength = requireValidateArgumentsLength();
  	var wellKnownSymbol = requireWellKnownSymbol();
  	var arraySort = requireArraySort();

  	var ITERATOR = wellKnownSymbol('iterator');
  	var URL_SEARCH_PARAMS = 'URLSearchParams';
  	var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  	var setInternalState = InternalStateModule.set;
  	var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
  	var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

  	var nativeFetch = safeGetBuiltIn('fetch');
  	var NativeRequest = safeGetBuiltIn('Request');
  	var Headers = safeGetBuiltIn('Headers');
  	var RequestPrototype = NativeRequest && NativeRequest.prototype;
  	var HeadersPrototype = Headers && Headers.prototype;
  	var TypeError = globalThis.TypeError;
  	var encodeURIComponent = globalThis.encodeURIComponent;
  	var fromCharCode = String.fromCharCode;
  	var fromCodePoint = getBuiltIn('String', 'fromCodePoint');
  	var $parseInt = parseInt;
  	var charAt = uncurryThis(''.charAt);
  	var join = uncurryThis([].join);
  	var push = uncurryThis([].push);
  	var replace = uncurryThis(''.replace);
  	var shift = uncurryThis([].shift);
  	var splice = uncurryThis([].splice);
  	var split = uncurryThis(''.split);
  	var stringSlice = uncurryThis(''.slice);
  	var exec = uncurryThis(/./.exec);

  	var plus = /\+/g;
  	var FALLBACK_REPLACER = '\uFFFD';
  	var VALID_HEX = /^[0-9a-f]+$/i;

  	var parseHexOctet = function (string, start) {
  	  var substr = stringSlice(string, start, start + 2);
  	  if (!exec(VALID_HEX, substr)) return NaN;

  	  return $parseInt(substr, 16);
  	};

  	var getLeadingOnes = function (octet) {
  	  var count = 0;
  	  for (var mask = 0x80; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
  	    count++;
  	  }
  	  return count;
  	};

  	var utf8Decode = function (octets) {
  	  var codePoint = null;

  	  switch (octets.length) {
  	    case 1:
  	      codePoint = octets[0];
  	      break;
  	    case 2:
  	      codePoint = (octets[0] & 0x1F) << 6 | (octets[1] & 0x3F);
  	      break;
  	    case 3:
  	      codePoint = (octets[0] & 0x0F) << 12 | (octets[1] & 0x3F) << 6 | (octets[2] & 0x3F);
  	      break;
  	    case 4:
  	      codePoint = (octets[0] & 0x07) << 18 | (octets[1] & 0x3F) << 12 | (octets[2] & 0x3F) << 6 | (octets[3] & 0x3F);
  	      break;
  	  }

  	  return codePoint > 0x10FFFF ? null : codePoint;
  	};

  	var decode = function (input) {
  	  input = replace(input, plus, ' ');
  	  var length = input.length;
  	  var result = '';
  	  var i = 0;

  	  while (i < length) {
  	    var decodedChar = charAt(input, i);

  	    if (decodedChar === '%') {
  	      if (charAt(input, i + 1) === '%' || i + 3 > length) {
  	        result += '%';
  	        i++;
  	        continue;
  	      }

  	      var octet = parseHexOctet(input, i + 1);

  	      // eslint-disable-next-line no-self-compare -- NaN check
  	      if (octet !== octet) {
  	        result += decodedChar;
  	        i++;
  	        continue;
  	      }

  	      i += 2;
  	      var byteSequenceLength = getLeadingOnes(octet);

  	      if (byteSequenceLength === 0) {
  	        decodedChar = fromCharCode(octet);
  	      } else {
  	        if (byteSequenceLength === 1 || byteSequenceLength > 4) {
  	          result += FALLBACK_REPLACER;
  	          i++;
  	          continue;
  	        }

  	        var octets = [octet];
  	        var sequenceIndex = 1;

  	        while (sequenceIndex < byteSequenceLength) {
  	          i++;
  	          if (i + 3 > length || charAt(input, i) !== '%') break;

  	          var nextByte = parseHexOctet(input, i + 1);

  	          // eslint-disable-next-line no-self-compare -- NaN check
  	          if (nextByte !== nextByte) {
  	            i += 3;
  	            break;
  	          }
  	          if (nextByte > 191 || nextByte < 128) break;

  	          push(octets, nextByte);
  	          i += 2;
  	          sequenceIndex++;
  	        }

  	        if (octets.length !== byteSequenceLength) {
  	          result += FALLBACK_REPLACER;
  	          continue;
  	        }

  	        var codePoint = utf8Decode(octets);
  	        if (codePoint === null) {
  	          result += FALLBACK_REPLACER;
  	        } else {
  	          decodedChar = fromCodePoint(codePoint);
  	        }
  	      }
  	    }

  	    result += decodedChar;
  	    i++;
  	  }

  	  return result;
  	};

  	var find = /[!'()~]|%20/g;

  	var replacements = {
  	  '!': '%21',
  	  "'": '%27',
  	  '(': '%28',
  	  ')': '%29',
  	  '~': '%7E',
  	  '%20': '+'
  	};

  	var replacer = function (match) {
  	  return replacements[match];
  	};

  	var serialize = function (it) {
  	  return replace(encodeURIComponent(it), find, replacer);
  	};

  	var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  	  setInternalState(this, {
  	    type: URL_SEARCH_PARAMS_ITERATOR,
  	    target: getInternalParamsState(params).entries,
  	    index: 0,
  	    kind: kind
  	  });
  	}, URL_SEARCH_PARAMS, function next() {
  	  var state = getInternalIteratorState(this);
  	  var target = state.target;
  	  var index = state.index++;
  	  if (!target || index >= target.length) {
  	    state.target = null;
  	    return createIterResultObject(undefined, true);
  	  }
  	  var entry = target[index];
  	  switch (state.kind) {
  	    case 'keys': return createIterResultObject(entry.key, false);
  	    case 'values': return createIterResultObject(entry.value, false);
  	  } return createIterResultObject([entry.key, entry.value], false);
  	}, true);

  	var URLSearchParamsState = function (init) {
  	  this.entries = [];
  	  this.url = null;

  	  if (init !== undefined) {
  	    if (isObject(init)) this.parseObject(init);
  	    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
  	  }
  	};

  	URLSearchParamsState.prototype = {
  	  type: URL_SEARCH_PARAMS,
  	  bindURL: function (url) {
  	    this.url = url;
  	    this.update();
  	  },
  	  parseObject: function (object) {
  	    var entries = this.entries;
  	    var iteratorMethod = getIteratorMethod(object);
  	    var iterator, next, step, entryIterator, entryNext, first, second;

  	    if (iteratorMethod) {
  	      iterator = getIterator(object, iteratorMethod);
  	      next = iterator.next;
  	      while (!(step = call(next, iterator)).done) {
  	        entryIterator = getIterator(anObject(step.value));
  	        entryNext = entryIterator.next;
  	        if (
  	          (first = call(entryNext, entryIterator)).done ||
  	          (second = call(entryNext, entryIterator)).done ||
  	          !call(entryNext, entryIterator).done
  	        ) throw new TypeError('Expected sequence with length 2');
  	        push(entries, { key: $toString(first.value), value: $toString(second.value) });
  	      }
  	    } else for (var key in object) if (hasOwn(object, key)) {
  	      push(entries, { key: key, value: $toString(object[key]) });
  	    }
  	  },
  	  parseQuery: function (query) {
  	    if (query) {
  	      var entries = this.entries;
  	      var attributes = split(query, '&');
  	      var index = 0;
  	      var attribute, entry;
  	      while (index < attributes.length) {
  	        attribute = attributes[index++];
  	        if (attribute.length) {
  	          entry = split(attribute, '=');
  	          push(entries, {
  	            key: decode(shift(entry)),
  	            value: decode(join(entry, '='))
  	          });
  	        }
  	      }
  	    }
  	  },
  	  serialize: function () {
  	    var entries = this.entries;
  	    var result = [];
  	    var index = 0;
  	    var entry;
  	    while (index < entries.length) {
  	      entry = entries[index++];
  	      push(result, serialize(entry.key) + '=' + serialize(entry.value));
  	    } return join(result, '&');
  	  },
  	  update: function () {
  	    this.entries.length = 0;
  	    this.parseQuery(this.url.query);
  	  },
  	  updateURL: function () {
  	    if (this.url) this.url.update();
  	  }
  	};

  	// `URLSearchParams` constructor
  	// https://url.spec.whatwg.org/#interface-urlsearchparams
  	var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  	  anInstance(this, URLSearchParamsPrototype);
  	  var init = arguments.length > 0 ? arguments[0] : undefined;
  	  var state = setInternalState(this, new URLSearchParamsState(init));
  	  if (!DESCRIPTORS) this.size = state.entries.length;
  	};

  	var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

  	defineBuiltIns(URLSearchParamsPrototype, {
  	  // `URLSearchParams.prototype.append` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  	  append: function append(name, value) {
  	    var state = getInternalParamsState(this);
  	    validateArgumentsLength(arguments.length, 2);
  	    push(state.entries, { key: $toString(name), value: $toString(value) });
  	    if (!DESCRIPTORS) this.length++;
  	    state.updateURL();
  	  },
  	  // `URLSearchParams.prototype.delete` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  	  'delete': function (name /* , value */) {
  	    var state = getInternalParamsState(this);
  	    var length = validateArgumentsLength(arguments.length, 1);
  	    var entries = state.entries;
  	    var key = $toString(name);
  	    var $value = length < 2 ? undefined : arguments[1];
  	    var value = $value === undefined ? $value : $toString($value);
  	    var index = 0;
  	    while (index < entries.length) {
  	      var entry = entries[index];
  	      if (entry.key === key && (value === undefined || entry.value === value)) {
  	        splice(entries, index, 1);
  	        if (value !== undefined) break;
  	      } else index++;
  	    }
  	    if (!DESCRIPTORS) this.size = entries.length;
  	    state.updateURL();
  	  },
  	  // `URLSearchParams.prototype.get` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  	  get: function get(name) {
  	    var entries = getInternalParamsState(this).entries;
  	    validateArgumentsLength(arguments.length, 1);
  	    var key = $toString(name);
  	    var index = 0;
  	    for (; index < entries.length; index++) {
  	      if (entries[index].key === key) return entries[index].value;
  	    }
  	    return null;
  	  },
  	  // `URLSearchParams.prototype.getAll` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  	  getAll: function getAll(name) {
  	    var entries = getInternalParamsState(this).entries;
  	    validateArgumentsLength(arguments.length, 1);
  	    var key = $toString(name);
  	    var result = [];
  	    var index = 0;
  	    for (; index < entries.length; index++) {
  	      if (entries[index].key === key) push(result, entries[index].value);
  	    }
  	    return result;
  	  },
  	  // `URLSearchParams.prototype.has` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  	  has: function has(name /* , value */) {
  	    var entries = getInternalParamsState(this).entries;
  	    var length = validateArgumentsLength(arguments.length, 1);
  	    var key = $toString(name);
  	    var $value = length < 2 ? undefined : arguments[1];
  	    var value = $value === undefined ? $value : $toString($value);
  	    var index = 0;
  	    while (index < entries.length) {
  	      var entry = entries[index++];
  	      if (entry.key === key && (value === undefined || entry.value === value)) return true;
  	    }
  	    return false;
  	  },
  	  // `URLSearchParams.prototype.set` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  	  set: function set(name, value) {
  	    var state = getInternalParamsState(this);
  	    validateArgumentsLength(arguments.length, 1);
  	    var entries = state.entries;
  	    var found = false;
  	    var key = $toString(name);
  	    var val = $toString(value);
  	    var index = 0;
  	    var entry;
  	    for (; index < entries.length; index++) {
  	      entry = entries[index];
  	      if (entry.key === key) {
  	        if (found) splice(entries, index--, 1);
  	        else {
  	          found = true;
  	          entry.value = val;
  	        }
  	      }
  	    }
  	    if (!found) push(entries, { key: key, value: val });
  	    if (!DESCRIPTORS) this.size = entries.length;
  	    state.updateURL();
  	  },
  	  // `URLSearchParams.prototype.sort` method
  	  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  	  sort: function sort() {
  	    var state = getInternalParamsState(this);
  	    arraySort(state.entries, function (a, b) {
  	      return a.key > b.key ? 1 : -1;
  	    });
  	    state.updateURL();
  	  },
  	  // `URLSearchParams.prototype.forEach` method
  	  forEach: function forEach(callback /* , thisArg */) {
  	    var entries = getInternalParamsState(this).entries;
  	    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
  	    var index = 0;
  	    var entry;
  	    while (index < entries.length) {
  	      entry = entries[index++];
  	      boundFunction(entry.value, entry.key, this);
  	    }
  	  },
  	  // `URLSearchParams.prototype.keys` method
  	  keys: function keys() {
  	    return new URLSearchParamsIterator(this, 'keys');
  	  },
  	  // `URLSearchParams.prototype.values` method
  	  values: function values() {
  	    return new URLSearchParamsIterator(this, 'values');
  	  },
  	  // `URLSearchParams.prototype.entries` method
  	  entries: function entries() {
  	    return new URLSearchParamsIterator(this, 'entries');
  	  }
  	}, { enumerable: true });

  	// `URLSearchParams.prototype[@@iterator]` method
  	defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

  	// `URLSearchParams.prototype.toString` method
  	// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  	defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
  	  return getInternalParamsState(this).serialize();
  	}, { enumerable: true });

  	// `URLSearchParams.prototype.size` getter
  	// https://github.com/whatwg/url/pull/734
  	if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
  	  get: function size() {
  	    return getInternalParamsState(this).entries.length;
  	  },
  	  configurable: true,
  	  enumerable: true
  	});

  	setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

  	$({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  	  URLSearchParams: URLSearchParamsConstructor
  	});

  	// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
  	if (!USE_NATIVE_URL && isCallable(Headers)) {
  	  var headersHas = uncurryThis(HeadersPrototype.has);
  	  var headersSet = uncurryThis(HeadersPrototype.set);

  	  var wrapRequestOptions = function (init) {
  	    if (isObject(init)) {
  	      var body = init.body;
  	      var headers;
  	      if (classof(body) === URL_SEARCH_PARAMS) {
  	        headers = init.headers ? new Headers(init.headers) : new Headers();
  	        if (!headersHas(headers, 'content-type')) {
  	          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  	        }
  	        return create(init, {
  	          body: createPropertyDescriptor(0, $toString(body)),
  	          headers: createPropertyDescriptor(0, headers)
  	        });
  	      }
  	    } return init;
  	  };

  	  if (isCallable(nativeFetch)) {
  	    $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
  	      fetch: function fetch(input /* , init */) {
  	        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
  	      }
  	    });
  	  }

  	  if (isCallable(NativeRequest)) {
  	    var RequestConstructor = function Request(input /* , init */) {
  	      anInstance(this, RequestPrototype);
  	      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
  	    };

  	    RequestPrototype.constructor = RequestConstructor;
  	    RequestConstructor.prototype = RequestPrototype;

  	    $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
  	      Request: RequestConstructor
  	    });
  	  }
  	}

  	web_urlSearchParams_constructor = {
  	  URLSearchParams: URLSearchParamsConstructor,
  	  getState: getInternalParamsState
  	};
  	return web_urlSearchParams_constructor;
  }

  var hasRequiredWeb_urlSearchParams;

  function requireWeb_urlSearchParams () {
  	if (hasRequiredWeb_urlSearchParams) return web_urlSearchParams;
  	hasRequiredWeb_urlSearchParams = 1;
  	// TODO: Remove this module from `core-js@4` since it's replaced to module below
  	requireWeb_urlSearchParams_constructor();
  	return web_urlSearchParams;
  }

  requireWeb_urlSearchParams();

  var ACCENT_MAP = {
    // Nordic
    Æ: 'AE',
    æ: 'ae',
    Ø: 'O',
    ø: 'o',
    Å: 'A',
    å: 'a',
    // German
    Ä: 'A',
    ä: 'a',
    Ö: 'O',
    ö: 'o',
    Ü: 'U',
    ü: 'u',
    ẞ: 'SS',
    ß: 'ss',
    // French & others
    Œ: 'OE',
    œ: 'oe',
    // Slavic/Central European
    Č: 'C',
    č: 'c',
    Ć: 'C',
    ć: 'c',
    Š: 'S',
    š: 's',
    Ž: 'Z',
    ž: 'z',
    Ł: 'L',
    ł: 'l',
    Đ: 'Dj',
    đ: 'dj',
    Ń: 'N',
    ń: 'n',
    Ę: 'E',
    ę: 'e',
    Ą: 'A',
    ą: 'a',
    Ŕ: 'R',
    ŕ: 'r',
    // Turkish
    Ğ: 'G',
    ğ: 'g',
    İ: 'I',
    ı: 'i',
    Ş: 'S',
    ş: 's',
    // Romanian
    Ă: 'A',
    ă: 'a',
    Â: 'A',
    â: 'a',
    Î: 'I',
    î: 'i',
    Ș: 'S',
    ș: 's',
    Ț: 'T',
    ț: 't',
    // Greek
    Α: 'A',
    Ά: 'A',
    α: 'a',
    ά: 'a',
    Β: 'V',
    β: 'v',
    Γ: 'G',
    γ: 'g',
    Δ: 'D',
    δ: 'd',
    Ε: 'E',
    Έ: 'E',
    ε: 'e',
    έ: 'e',
    Ζ: 'Z',
    ζ: 'z',
    Η: 'I',
    Ή: 'I',
    η: 'i',
    ή: 'i',
    Ι: 'I',
    Ί: 'I',
    ι: 'i',
    ί: 'i',
    Κ: 'K',
    κ: 'k',
    Λ: 'L',
    λ: 'l',
    Μ: 'M',
    μ: 'm',
    Ν: 'N',
    ν: 'n',
    Ξ: 'X',
    ξ: 'x',
    Ο: 'O',
    Ό: 'O',
    ο: 'o',
    ό: 'o',
    Π: 'P',
    π: 'p',
    Ρ: 'R',
    ρ: 'r',
    Σ: 'S',
    σ: 's',
    ς: 's',
    Τ: 'T',
    τ: 't',
    Υ: 'Y',
    Ύ: 'Y',
    υ: 'y',
    ύ: 'y',
    Φ: 'F',
    φ: 'f',
    Χ: 'CH',
    χ: 'ch',
    Ψ: 'PS',
    ψ: 'ps',
    Ω: 'O',
    Ώ: 'O',
    ω: 'o',
    ώ: 'o'
  };
  var Utils = {
    getBootstrapVersion: function getBootstrapVersion() {
      var _window$bootstrap, _$$fn;
      var bootstrapVersion = 5;
      if (typeof window !== 'undefined' && (_window$bootstrap = window.bootstrap) !== null && _window$bootstrap !== void 0 && (_window$bootstrap = _window$bootstrap.Tooltip) !== null && _window$bootstrap !== void 0 && _window$bootstrap.VERSION) {
        var rawVersion = window.bootstrap.Tooltip.VERSION;
        if (rawVersion !== undefined) {
          bootstrapVersion = parseInt(rawVersion, 10);
        }
      } else if (typeof $ !== 'undefined' && (_$$fn = $.fn) !== null && _$$fn !== void 0 && (_$$fn = _$$fn.dropdown) !== null && _$$fn !== void 0 && (_$$fn = _$$fn.Constructor) !== null && _$$fn !== void 0 && _$$fn.VERSION) {
        var _rawVersion = $.fn.dropdown.Constructor.VERSION;

        // Only try to parse VERSION if it is defined.
        // It is undefined in older versions of Bootstrap (tested with 3.1.1).
        if (_rawVersion !== undefined) {
          bootstrapVersion = parseInt(_rawVersion, 10);
        }
      }
      return bootstrapVersion;
    },
    /**
     * Returns the prefix for the icons based on the theme.
     *
     * @param {string} theme - The theme name (bootstrap3, bootstrap4, bootstrap5, bootstrap-table, bulma, foundation, materialize, semantic).
     * @returns {string} The icons prefix.
     */
    getIconsPrefix: function getIconsPrefix(theme) {
      return {
        bootstrap3: 'glyphicon',
        bootstrap4: 'fa',
        bootstrap5: 'bi',
        'bootstrap-table': 'icon',
        bulma: 'fa',
        foundation: 'fa',
        materialize: 'material-icons',
        semantic: 'fa'
      }[theme] || 'fa';
    },
    /**
     * Gets the icons for a given prefix.
     *
     * @param {Object.<string, Object>} icons - The icons object.
     * @param {string} prefix - The prefix. For example, 'fa', 'bi', etc.
     * @return {Object} The icons object for the given prefix.
     */
    getIcons: function getIcons(icons, prefix) {
      return icons[prefix] || {};
    },
    /**
     * Assigns new icons to icons object.
     *
     * @param {Object.<string, Object>} icons - The icons object.
     * @param {string} icon - The icon name. For example, 'search', 'refresh', etc.
     * @param {Object.<string, string>} values - The values object.
     */
    assignIcons: function assignIcons(icons, icon, values) {
      for (var _i = 0, _Object$keys = Object.keys(icons); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        icons[key][icon] = values[key];
      }
    },
    getSearchInput: function getSearchInput(that) {
      if (typeof that.options.searchSelector === 'string') {
        return $(that.options.searchSelector);
      }
      return that.$toolbar.find('.search input');
    },
    // $.extend: https://github.com/jquery/jquery/blob/3.6.2/src/core.js#L132
    extend: function extend() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var target = args[0] || {};
      var i = 1;
      var deep = false;
      var clone;

      // Handle a deep copy situation
      if (typeof target === 'boolean') {
        deep = target;

        // Skip the boolean and the target
        target = args[i] || {};
        i++;
      }

      // Handle case when target is a string or something (possible in deep copy)
      if (_typeof(target) !== 'object' && typeof target !== 'function') {
        target = {};
      }
      for (; i < args.length; i++) {
        var options = args[i];

        // Ignore undefined/null values
        if (typeof options === 'undefined' || options === null) {
          continue;
        }

        // Extend the base object
        // eslint-disable-next-line guard-for-in
        for (var name in options) {
          var copy = options[name];

          // Prevent Object.prototype pollution
          // Prevent never-ending loop
          if (name === '__proto__' || target === copy) {
            continue;
          }
          var copyIsArray = Array.isArray(copy);

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (this.isObject(copy) || copyIsArray)) {
            var src = target[name];
            if (copyIsArray && Array.isArray(src)) {
              if (src.every(function (it) {
                return !_this.isObject(it) && !Array.isArray(it);
              })) {
                target[name] = copy;
                continue;
              }
            }
            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !this.isObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            // Never move original objects, clone them
            target[name] = this.extend(deep, clone, copy);

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
      return target;
    },
    // it only does '%s', and return '' when arguments are undefined
    sprintf: function sprintf(_str) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      var flag = true;
      var i = 0;
      var str = _str.replace(/%s/g, function () {
        var arg = args[i++];
        if (typeof arg === 'undefined') {
          flag = false;
          return '';
        }
        return arg;
      });
      return flag ? str : '';
    },
    isObject: function isObject(obj) {
      if (_typeof(obj) !== 'object' || obj === null) {
        return false;
      }
      var proto = obj;
      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }
      return Object.getPrototypeOf(obj) === proto;
    },
    isEmptyObject: function isEmptyObject() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.entries(obj).length === 0 && obj.constructor === Object;
    },
    isNumeric: function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    getFieldTitle: function getFieldTitle(list, value) {
      var _iterator = _createForOfIteratorHelper(list),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (item.field === value) {
            return item.title;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return '';
    },
    setFieldIndex: function setFieldIndex(columns) {
      var totalCol = 0;
      var flag = [];
      var _iterator2 = _createForOfIteratorHelper(columns[0]),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var column = _step2.value;
          totalCol += +column.colspan || 1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      for (var i = 0; i < columns.length; i++) {
        flag[i] = [];
        for (var j = 0; j < totalCol; j++) {
          flag[i][j] = false;
        }
      }
      for (var _i2 = 0; _i2 < columns.length; _i2++) {
        var _iterator3 = _createForOfIteratorHelper(columns[_i2]),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var r = _step3.value;
            var rowspan = +r.rowspan || 1;
            var colspan = +r.colspan || 1;
            var index = flag[_i2].indexOf(false);
            r.colspanIndex = index;
            if (colspan === 1) {
              r.fieldIndex = index;
              // when field is undefined, use index instead
              if (typeof r.field === 'undefined') {
                r.field = index;
              }
            } else {
              r.colspanGroup = +r.colspan;
            }
            for (var _j = 0; _j < rowspan; _j++) {
              for (var k = 0; k < colspan; k++) {
                flag[_i2 + _j][index + k] = true;
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    },
    normalizeAccent: function normalizeAccent(value) {
      if (typeof value !== 'string') {
        return value;
      }
      var pattern = new RegExp("[".concat(Object.keys(ACCENT_MAP).join(''), "]"), 'g');
      return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(pattern, function (char) {
        return ACCENT_MAP[char];
      }).toLowerCase().trim();
    },
    updateFieldGroup: function updateFieldGroup(columns, fieldColumns) {
      var _ref;
      var allColumns = (_ref = []).concat.apply(_ref, _toConsumableArray(columns));
      var _iterator4 = _createForOfIteratorHelper(columns),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var c = _step4.value;
          var _iterator6 = _createForOfIteratorHelper(c),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var r = _step6.value;
              if (r.colspanGroup > 1) {
                var colspan = 0;
                var _loop = function _loop(i) {
                  var underColumns = allColumns.filter(function (col) {
                    return col.fieldIndex === i;
                  });
                  var column = underColumns[underColumns.length - 1];
                  if (underColumns.length > 1) {
                    for (var j = 0; j < underColumns.length - 1; j++) {
                      underColumns[j].visible = column.visible;
                    }
                  }
                  if (column.visible) {
                    colspan++;
                  }
                };
                for (var i = r.colspanIndex; i < r.colspanIndex + r.colspanGroup; i++) {
                  _loop(i);
                }
                r.colspan = colspan;
                r.visible = colspan > 0;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      if (columns.length < 2) {
        return;
      }
      var _iterator5 = _createForOfIteratorHelper(fieldColumns),
        _step5;
      try {
        var _loop2 = function _loop2() {
          var column = _step5.value;
          var sameColumns = allColumns.filter(function (col) {
            return col.fieldIndex === column.fieldIndex;
          });
          if (sameColumns.length > 1) {
            var _iterator7 = _createForOfIteratorHelper(sameColumns),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _c = _step7.value;
                _c.visible = column.visible;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },
    getScrollBarWidth: function getScrollBarWidth() {
      if (this.cachedWidth === undefined) {
        var $inner = $('<div/>').addClass('fixed-table-scroll-inner');
        var $outer = $('<div/>').addClass('fixed-table-scroll-outer');
        $outer.append($inner);
        $('body').append($outer);
        var w1 = $inner[0].offsetWidth;
        $outer.css('overflow', 'scroll');
        var w2 = $inner[0].offsetWidth;
        if (w1 === w2) {
          w2 = $outer[0].clientWidth;
        }
        $outer.remove();
        this.cachedWidth = w1 - w2;
      }
      return this.cachedWidth;
    },
    calculateObjectValue: function calculateObjectValue(self, name, args, defaultValue) {
      var func = name;
      if (typeof name === 'string') {
        // support obj.func1.func2
        var names = name.split('.');
        if (names.length > 1) {
          func = window;
          var _iterator8 = _createForOfIteratorHelper(names),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var f = _step8.value;
              func = func[f];
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        } else {
          func = window[name];
        }
      }
      if (func !== null && _typeof(func) === 'object') {
        return func;
      }
      if (typeof func === 'function') {
        return func.apply(self, args || []);
      }
      if (!func && typeof name === 'string' && args && this.sprintf.apply(this, [name].concat(_toConsumableArray(args)))) {
        return this.sprintf.apply(this, [name].concat(_toConsumableArray(args)));
      }
      return defaultValue;
    },
    compareObjects: function compareObjects(objectA, objectB, compareLength) {
      var aKeys = Object.keys(objectA);
      var bKeys = Object.keys(objectB);
      if (compareLength && aKeys.length !== bKeys.length) {
        return false;
      }
      for (var _i3 = 0, _aKeys = aKeys; _i3 < _aKeys.length; _i3++) {
        var key = _aKeys[_i3];
        if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
          return false;
        }
      }
      return true;
    },
    regexCompare: function regexCompare(value, search) {
      try {
        var regexpParts = search.match(/^\/(.*?)\/([gim]*)$/);
        if (value.toString().search(regexpParts ? new RegExp(regexpParts[1], regexpParts[2]) : new RegExp(search, 'gim')) !== -1) {
          return true;
        }
      } catch (e) {
        console.error(e);
        return false;
      }
      return false;
    },
    escapeApostrophe: function escapeApostrophe(value) {
      return value.toString().replace(/'/g, '&#39;');
    },
    escapeHTML: function escapeHTML(text) {
      if (!text) {
        return text;
      }
      return text.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    },
    unescapeHTML: function unescapeHTML(text) {
      if (typeof text !== 'string' || !text) {
        return text;
      }
      return text.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&amp;/g, '&');
    },
    removeHTML: function removeHTML(text) {
      if (!text) {
        return text;
      }
      return text.toString().replace(/(<([^>]+)>)/ig, '').replace(/&[#A-Za-z0-9]+;/gi, '').trim();
    },
    getRealDataAttr: function getRealDataAttr(dataAttr) {
      for (var _i4 = 0, _Object$entries = Object.entries(dataAttr); _i4 < _Object$entries.length; _i4++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
          attr = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        var auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase();
        if (auxAttr !== attr) {
          dataAttr[auxAttr] = value;
          delete dataAttr[attr];
        }
      }
      return dataAttr;
    },
    getItemField: function getItemField(item, field, escape) {
      var columnEscape = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var value = item;

      // use column escape if it is defined
      if (typeof columnEscape !== 'undefined') {
        escape = columnEscape;
      }
      if (typeof field !== 'string' || item.hasOwnProperty(field)) {
        return escape ? this.escapeHTML(item[field]) : item[field];
      }
      var props = field.split('.');
      var _iterator9 = _createForOfIteratorHelper(props),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var p = _step9.value;
          value = value && value[p];
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return escape ? this.escapeHTML(value) : value;
    },
    isIEBrowser: function isIEBrowser() {
      return navigator.userAgent.includes('MSIE ') || /Trident.*rv:11\./.test(navigator.userAgent);
    },
    findIndex: function findIndex(items, item) {
      var _iterator0 = _createForOfIteratorHelper(items),
        _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          var it = _step0.value;
          if (JSON.stringify(it) === JSON.stringify(item)) {
            return items.indexOf(it);
          }
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      return -1;
    },
    trToData: function trToData(columns, $els) {
      var _this2 = this;
      var data = [];
      var m = [];
      $els.each(function (y, el) {
        var $el = $(el);
        var row = {};

        // save tr's id, class and data-* attributes
        row._id = $el.attr('id');
        row._class = $el.attr('class');
        row._data = _this2.getRealDataAttr($el.data());
        row._style = $el.attr('style');
        $el.find('>td,>th').each(function (_x, el) {
          var $el = $(el);
          var colspan = +$el.attr('colspan') || 1;
          var rowspan = +$el.attr('rowspan') || 1;
          var x = _x;

          // skip already occupied cells in current row
          for (; m[y] && m[y][x]; x++) {
            // ignore
          }

          // mark matrix elements occupied by current cell with true
          for (var tx = x; tx < x + colspan; tx++) {
            for (var ty = y; ty < y + rowspan; ty++) {
              if (!m[ty]) {
                // fill missing rows
                m[ty] = [];
              }
              m[ty][tx] = true;
            }
          }
          var field = columns[x].field;
          row[field] = _this2.escapeApostrophe($el.html().trim());
          // save td's id, class and data-* attributes
          row["_".concat(field, "_id")] = $el.attr('id');
          row["_".concat(field, "_class")] = $el.attr('class');
          row["_".concat(field, "_rowspan")] = $el.attr('rowspan');
          row["_".concat(field, "_colspan")] = $el.attr('colspan');
          row["_".concat(field, "_title")] = $el.attr('title');
          row["_".concat(field, "_data")] = _this2.getRealDataAttr($el.data());
          row["_".concat(field, "_style")] = $el.attr('style');
        });
        data.push(row);
      });
      return data;
    },
    sort: function sort(a, b, order, options, aPosition, bPosition) {
      if (a === undefined || a === null) {
        a = '';
      }
      if (b === undefined || b === null) {
        b = '';
      }
      if (options.sortStable && a === b) {
        a = aPosition;
        b = bPosition;
      }

      // If both values are numeric, do a numeric comparison
      if (this.isNumeric(a) && this.isNumeric(b)) {
        // Convert numerical values form string to float.
        a = parseFloat(a);
        b = parseFloat(b);
        if (a < b) {
          return order * -1;
        }
        if (a > b) {
          return order;
        }
        return 0;
      }
      if (options.sortEmptyLast) {
        if (a === '') {
          return 1;
        }
        if (b === '') {
          return -1;
        }
      }
      if (a === b) {
        return 0;
      }

      // If value is not a string, convert to string
      if (typeof a !== 'string') {
        a = a.toString();
      }
      if (a.localeCompare(b) === -1) {
        return order * -1;
      }
      return order;
    },
    getEventName: function getEventName(eventPrefix) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      id = id || "".concat(+new Date()).concat(~~(Math.random() * 1000000));
      return "".concat(eventPrefix, "-").concat(id);
    },
    hasDetailViewIcon: function hasDetailViewIcon(options) {
      return options.detailView && options.detailViewIcon && !options.cardView;
    },
    getDetailViewIndexOffset: function getDetailViewIndexOffset(options) {
      return this.hasDetailViewIcon(options) && options.detailViewAlign !== 'right' ? 1 : 0;
    },
    checkAutoMergeCells: function checkAutoMergeCells(data) {
      var _iterator1 = _createForOfIteratorHelper(data),
        _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
          var row = _step1.value;
          for (var _i5 = 0, _Object$keys2 = Object.keys(row); _i5 < _Object$keys2.length; _i5++) {
            var key = _Object$keys2[_i5];
            if (key.startsWith('_') && (key.endsWith('_rowspan') || key.endsWith('_colspan'))) {
              return true;
            }
          }
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
      return false;
    },
    deepCopy: function deepCopy(arg) {
      if (arg === undefined) {
        return arg;
      }
      return this.extend(true, Array.isArray(arg) ? [] : {}, arg);
    },
    debounce: function debounce(func, wait, immediate) {
      var timeout;
      return function executedFunction() {
        var context = this;
        var args = arguments;
        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    replaceSearchMark: function replaceSearchMark(html, searchText) {
      var isDom = html instanceof Element;
      var node = isDom ? html : document.createElement('div');
      var regExp = new RegExp(searchText, 'gim');
      var replaceTextWithDom = function replaceTextWithDom(text, regExp) {
        var result = [];
        var match;
        var lastIndex = 0;
        while ((match = regExp.exec(text)) !== null) {
          if (lastIndex !== match.index) {
            result.push(document.createTextNode(text.substring(lastIndex, match.index)));
          }
          var mark = document.createElement('mark');
          mark.innerText = match[0];
          result.push(mark);
          lastIndex = match.index + match[0].length;
        }
        if (!result.length) {
          // no match
          return;
        }
        if (lastIndex !== text.length) {
          result.push(document.createTextNode(text.substring(lastIndex)));
        }
        return result;
      };
      var _replaceMark = function replaceMark(node) {
        for (var i = 0; i < node.childNodes.length; i++) {
          var child = node.childNodes[i];
          if (child.nodeType === document.TEXT_NODE) {
            var elements = replaceTextWithDom(child.data, regExp);
            if (elements) {
              var _iterator10 = _createForOfIteratorHelper(elements),
                _step10;
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var el = _step10.value;
                  node.insertBefore(el, child);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
              node.removeChild(child);
              i += elements.length - 1;
            }
          }
          if (child.nodeType === document.ELEMENT_NODE) {
            _replaceMark(child);
          }
        }
      };
      if (!isDom) {
        node.innerHTML = html;
      }
      _replaceMark(node);
      return isDom ? node : node.innerHTML;
    },
    classToString: function classToString(class_) {
      var _this3 = this;
      if (typeof class_ === 'string') {
        return class_;
      }
      if (Array.isArray(class_)) {
        return class_.map(function (x) {
          return _this3.classToString(x);
        }).filter(function (x) {
          return x;
        }).join(' ');
      }
      if (class_ && _typeof(class_) === 'object') {
        return Object.entries(class_).map(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
            k = _ref3[0],
            v = _ref3[1];
          return v ? k : '';
        }).filter(function (x) {
          return x;
        }).join(' ');
      }
      return '';
    },
    parseStyle: function parseStyle(dom, style) {
      if (!style) {
        return dom;
      }

      // Helper function to handle !important priority
      var IMPORTANT_PRIORITY_REGEX = /\s*!important\s*$/i;
      var parsePriority = function parsePriority(value) {
        if (typeof value === 'string' && IMPORTANT_PRIORITY_REGEX.test(value)) {
          return {
            value: value.replace(IMPORTANT_PRIORITY_REGEX, ''),
            priority: 'important'
          };
        }
        return {
          value: value,
          priority: ''
        };
      };
      if (typeof style === 'string') {
        style.split(';').forEach(function (i) {
          var index = i.indexOf(':');
          if (index > 0) {
            var k = i.substring(0, index).trim();
            var v = i.substring(index + 1).trim();
            var _parsePriority = parsePriority(v),
              value = _parsePriority.value,
              priority = _parsePriority.priority;
            dom.style.setProperty(k, value, priority);
          }
        });
      } else if (Array.isArray(style)) {
        var _iterator11 = _createForOfIteratorHelper(style),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var item = _step11.value;
            this.parseStyle(dom, item);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      } else if (_typeof(style) === 'object') {
        for (var _i6 = 0, _Object$entries2 = Object.entries(style); _i6 < _Object$entries2.length; _i6++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i6], 2),
            k = _Object$entries2$_i[0],
            v = _Object$entries2$_i[1];
          var _parsePriority2 = parsePriority(v),
            value = _parsePriority2.value,
            priority = _parsePriority2.priority;
          dom.style.setProperty(k, value, priority);
        }
      }
      return dom;
    },
    h: function h(element, attrs, children) {
      var el = element instanceof HTMLElement ? element : document.createElement(element);
      var _attrs = attrs || {};
      var _children = children || [];

      // default attributes
      if (el.tagName === 'A') {
        el.href = 'javascript:';
      }
      for (var _i7 = 0, _Object$entries3 = Object.entries(_attrs); _i7 < _Object$entries3.length; _i7++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i7], 2),
          k = _Object$entries3$_i[0],
          v = _Object$entries3$_i[1];
        if (v === undefined) {
          continue;
        }
        if (['text', 'innerText'].includes(k)) {
          el.innerText = v;
        } else if (['html', 'innerHTML'].includes(k)) {
          el.innerHTML = v;
        } else if (k === 'children') {
          _children.push.apply(_children, _toConsumableArray(v));
        } else if (k === 'class') {
          el.setAttribute('class', this.classToString(v));
        } else if (k === 'style') {
          if (typeof v === 'string') {
            el.setAttribute('style', v);
          } else {
            this.parseStyle(el, v);
          }
        } else if (k.startsWith('@') || k.startsWith('on')) {
          // event handlers
          var event = k.startsWith('@') ? k.substring(1) : k.substring(2).toLowerCase();
          var args = Array.isArray(v) ? v : [v];
          el.addEventListener.apply(el, [event].concat(_toConsumableArray(args)));
        } else if (k.startsWith('.')) {
          // set property
          el[k.substring(1)] = v;
        } else {
          el.setAttribute(k, v);
        }
      }
      if (_children.length) {
        el.append.apply(el, _toConsumableArray(_children));
      }
      return el;
    },
    htmlToNodes: function htmlToNodes(html) {
      if (html instanceof $) {
        return html.get();
      }
      if (html instanceof Node) {
        return [html];
      }
      if (typeof html !== 'string') {
        html = new String(html).toString();
      }
      var d = document.createElement('div');
      d.innerHTML = html;
      return d.childNodes;
    },
    addQueryToUrl: function addQueryToUrl(url, query) {
      var hashArray = url.split('#');
      var _hashArray$0$split = hashArray[0].split('?'),
        _hashArray$0$split2 = _slicedToArray(_hashArray$0$split, 2),
        baseUrl = _hashArray$0$split2[0],
        search = _hashArray$0$split2[1];
      var urlParams = new URLSearchParams(search);
      for (var _i8 = 0, _Object$entries4 = Object.entries(query); _i8 < _Object$entries4.length; _i8++) {
        var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i8], 2),
          key = _Object$entries4$_i[0],
          value = _Object$entries4$_i[1];
        urlParams.set(key, value);
      }
      return "".concat(baseUrl, "?").concat(urlParams.toString(), "#").concat(hashArray.slice(1).join('#'));
    }
  };

  var VERSION = '1.26.0';
  var bootstrapVersion = Utils.getBootstrapVersion();
  var CONSTANTS = {
    3: {
      classes: {
        buttonActive: 'active',
        buttons: 'default',
        buttonsDropdown: 'btn-group',
        buttonsGroup: 'btn-group',
        buttonsPrefix: 'btn',
        dropdownActive: 'active',
        dropup: 'dropup',
        input: 'form-control',
        inputGroup: 'input-group',
        inputPrefix: 'input-',
        paginationActive: 'active',
        paginationDropdown: 'btn-group dropdown',
        pull: 'pull',
        select: 'form-control'
      },
      html: {
        dropdownCaret: '<span class="caret"></span>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
        pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        toolbarDropdownItem: '<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',
        toolbarDropdownSeparator: '<li class="divider"></li>'
      }
    },
    4: {
      classes: {
        buttonActive: 'active',
        buttons: 'secondary',
        buttonsDropdown: 'btn-group',
        buttonsGroup: 'btn-group',
        buttonsPrefix: 'btn',
        dropdownActive: 'active',
        dropup: 'dropup',
        input: 'form-control',
        inputGroup: 'btn-group',
        inputPrefix: 'form-control-',
        paginationActive: 'active',
        paginationDropdown: 'btn-group dropdown',
        pull: 'float',
        select: 'form-control'
      },
      html: {
        dropdownCaret: '<span class="caret"></span>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
        pageDropdown: ['<div class="dropdown-menu">', '</div>'],
        pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
        toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
        toolbarDropdownSeparator: '<div class="dropdown-divider"></div>'
      }
    },
    5: {
      classes: {
        buttonActive: 'active',
        buttons: 'secondary',
        buttonsDropdown: 'btn-group',
        buttonsGroup: 'btn-group',
        buttonsPrefix: 'btn',
        dropdownActive: 'active',
        dropup: 'dropup',
        input: 'form-control',
        inputGroup: 'btn-group',
        inputPrefix: 'form-control-',
        paginationActive: 'active',
        paginationDropdown: 'btn-group dropdown',
        pull: 'float',
        select: 'form-select'
      },
      html: {
        dataToggle: 'data-bs-toggle',
        dropdownCaret: '<span class="caret"></span>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s%s</div>',
        pageDropdown: ['<div class="dropdown-menu">', '</div>'],
        pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-end">', '</div>'],
        toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
        toolbarDropdownSeparator: '<div class="dropdown-divider"></div>'
      }
    }
  }[bootstrapVersion];
  var ICONS = {
    glyphicon: {
      clearSearch: 'glyphicon-trash',
      columns: 'glyphicon-th icon-th',
      detailClose: 'glyphicon-minus icon-minus',
      detailOpen: 'glyphicon-plus icon-plus',
      fullscreen: 'glyphicon-fullscreen',
      paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
      paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
      refresh: 'glyphicon-refresh icon-refresh',
      search: 'glyphicon-search',
      toggleOff: 'glyphicon-list-alt icon-list-alt',
      toggleOn: 'glyphicon-list-alt icon-list-alt'
    },
    fa: {
      clearSearch: 'fa-trash',
      columns: 'fa-th-list',
      detailClose: 'fa-minus',
      detailOpen: 'fa-plus',
      fullscreen: 'fa-arrows-alt',
      paginationSwitchDown: 'fa-caret-square-down',
      paginationSwitchUp: 'fa-caret-square-up',
      refresh: 'fa-sync',
      search: 'fa-search',
      toggleOff: 'fa-toggle-off',
      toggleOn: 'fa-toggle-on'
    },
    bi: {
      clearSearch: 'bi-trash',
      columns: 'bi-list-ul',
      detailClose: 'bi-dash',
      detailOpen: 'bi-plus',
      fullscreen: 'bi-arrows-move',
      paginationSwitchDown: 'bi-caret-down-square',
      paginationSwitchUp: 'bi-caret-up-square',
      refresh: 'bi-arrow-clockwise',
      search: 'bi-search',
      toggleOff: 'bi-toggle-off',
      toggleOn: 'bi-toggle-on'
    },
    icon: {
      clearSearch: 'icon-trash-2',
      columns: 'icon-list',
      detailClose: 'icon-minus',
      detailOpen: 'icon-plus',
      fullscreen: 'icon-maximize',
      paginationSwitchDown: 'icon-arrow-up-circle',
      paginationSwitchUp: 'icon-arrow-down-circle',
      refresh: 'icon-refresh-cw',
      search: 'icon-search',
      toggleOff: 'icon-toggle-right',
      toggleOn: 'icon-toggle-right'
    },
    'material-icons': {
      clearSearch: 'delete',
      columns: 'view_list',
      detailClose: 'remove',
      detailOpen: 'add',
      fullscreen: 'fullscreen',
      paginationSwitchDown: 'grid_on',
      paginationSwitchUp: 'grid_off',
      refresh: 'refresh',
      search: 'search',
      sort: 'sort',
      toggleOff: 'tablet',
      toggleOn: 'tablet_android'
    }
  };
  var DEFAULTS = {
    ajax: undefined,
    ajaxOptions: {},
    buttons: {},
    buttonsAlign: 'right',
    buttonsAttributeTitle: 'title',
    buttonsClass: CONSTANTS.classes.buttons,
    buttonsOrder: ['paginationSwitch', 'refresh', 'toggle', 'fullscreen', 'columns'],
    buttonsPrefix: CONSTANTS.classes.buttonsPrefix,
    buttonsToolbar: undefined,
    cache: true,
    cardView: false,
    checkboxHeader: true,
    classes: 'table table-bordered table-hover',
    clickToSelect: false,
    columns: [[]],
    contentType: 'application/json',
    customSearch: undefined,
    customSort: undefined,
    data: [],
    dataField: 'rows',
    dataType: 'json',
    detailFilter: function detailFilter(index, row) {
      return true;
    },
    detailFormatter: function detailFormatter(index, row) {
      return '';
    },
    detailView: false,
    detailViewAlign: 'left',
    detailViewByClick: false,
    detailViewIcon: true,
    escape: false,
    escapeTitle: true,
    filterOptions: {
      filterAlgorithm: 'and'
    },
    fixedScroll: false,
    footerField: 'footer',
    footerStyle: function footerStyle(column) {
      return {};
    },
    headerStyle: function headerStyle(column) {
      return {};
    },
    height: undefined,
    icons: {},
    // init in initConstants
    iconSize: undefined,
    iconsPrefix: undefined,
    // init in initConstants
    idField: undefined,
    ignoreClickToSelectOn: function ignoreClickToSelectOn(_ref) {
      var tagName = _ref.tagName;
      return ['A', 'BUTTON'].includes(tagName);
    },
    loadingFontSize: 'auto',
    loadingTemplate: function loadingTemplate(loadingMessage) {
      return "<span class=\"loading-wrap\">\n    <span class=\"loading-text\">".concat(loadingMessage, "</span>\n    <span class=\"animation-wrap\"><span class=\"animation-dot\"></span></span>\n    </span>\n  ");
    },
    locale: undefined,
    maintainMetaData: false,
    method: 'get',
    minimumCountColumns: 1,
    multipleSelectRow: false,
    pageList: [10, 25, 50, 100],
    pageNumber: 1,
    pageSize: 10,
    pagination: false,
    paginationDetailHAlign: 'left',
    // right, left
    paginationHAlign: 'right',
    // right, left
    paginationLoadMore: false,
    paginationLoop: true,
    paginationNextText: '&rsaquo;',
    paginationPagesBySide: 1,
    // Number of pages on each side (right, left) of the current page.
    paginationParts: ['pageInfo', 'pageSize', 'pageList'],
    paginationPreText: '&lsaquo;',
    paginationSuccessivelySize: 5,
    // Maximum successively number of pages in a row
    paginationUseIntermediate: false,
    // Calculate intermediate pages for quick access
    paginationVAlign: 'bottom',
    // bottom, top, both
    queryParams: function queryParams(params) {
      return params;
    },
    queryParamsType: 'limit',
    // 'limit', undefined
    regexSearch: false,
    rememberOrder: false,
    responseHandler: function responseHandler(res) {
      return res;
    },
    rowAttributes: function rowAttributes(row, index) {
      return {};
    },
    rowStyle: function rowStyle(row, index) {
      return {};
    },
    search: false,
    searchable: false,
    searchAccentNeutralise: false,
    searchAlign: 'right',
    searchHighlight: false,
    searchOnEnterKey: false,
    searchSelector: false,
    searchText: '',
    searchTimeOut: 500,
    selectItemName: 'btSelectItem',
    serverSort: true,
    showButtonIcons: true,
    showButtonText: false,
    showColumns: false,
    showColumnsSearch: false,
    showColumnsToggleAll: false,
    showExtendedPagination: false,
    showFooter: false,
    showFullscreen: false,
    showHeader: true,
    showPaginationSwitch: false,
    showRefresh: false,
    showSearchButton: false,
    showSearchClearButton: false,
    showToggle: false,
    sidePagination: 'client',
    // client or server
    silentSort: true,
    singleSelect: false,
    smartDisplay: true,
    sortable: true,
    sortClass: undefined,
    sortEmptyLast: false,
    sortName: undefined,
    sortOrder: undefined,
    sortReset: false,
    sortResetPage: false,
    sortStable: false,
    strictSearch: false,
    theadClasses: '',
    toolbar: undefined,
    toolbarAlign: 'left',
    totalField: 'total',
    totalNotFiltered: 0,
    totalNotFilteredField: 'totalNotFiltered',
    totalRows: 0,
    trimOnSearch: true,
    undefinedText: '-',
    uniqueId: undefined,
    url: undefined,
    virtualScroll: false,
    virtualScrollItemHeight: undefined,
    visibleSearch: false,
    onAll: function onAll(name, args) {
      return false;
    },
    onCheck: function onCheck(row) {
      return false;
    },
    onCheckAll: function onCheckAll(rows) {
      return false;
    },
    onCheckSome: function onCheckSome(rows) {
      return false;
    },
    onClickCell: function onClickCell(field, value, row, $element) {
      return false;
    },
    onClickRow: function onClickRow(item, $element) {
      return false;
    },
    onCollapseRow: function onCollapseRow(index, row) {
      return false;
    },
    onColumnSwitch: function onColumnSwitch(field, checked) {
      return false;
    },
    onColumnSwitchAll: function onColumnSwitchAll(checked) {
      return false;
    },
    onDblClickCell: function onDblClickCell(field, value, row, $element) {
      return false;
    },
    onDblClickRow: function onDblClickRow(item, $element) {
      return false;
    },
    onExpandRow: function onExpandRow(index, row, $detail) {
      return false;
    },
    onLoadError: function onLoadError(status) {
      return false;
    },
    onLoadSuccess: function onLoadSuccess(data) {
      return false;
    },
    onPageChange: function onPageChange(number, size) {
      return false;
    },
    onPostBody: function onPostBody() {
      return false;
    },
    onPostFooter: function onPostFooter() {
      return false;
    },
    onPostHeader: function onPostHeader() {
      return false;
    },
    onPreBody: function onPreBody(data) {
      return false;
    },
    onRefresh: function onRefresh(params) {
      return false;
    },
    onRefreshOptions: function onRefreshOptions(options) {
      return false;
    },
    onResetView: function onResetView() {
      return false;
    },
    onScrollBody: function onScrollBody() {
      return false;
    },
    onSearch: function onSearch(text) {
      return false;
    },
    onSort: function onSort(name, order) {
      return false;
    },
    onToggle: function onToggle(cardView) {
      return false;
    },
    onTogglePagination: function onTogglePagination(newState) {
      return false;
    },
    onUncheck: function onUncheck(row) {
      return false;
    },
    onUncheckAll: function onUncheckAll(rows) {
      return false;
    },
    onUncheckSome: function onUncheckSome(rows) {
      return false;
    },
    onVirtualScroll: function onVirtualScroll(startIndex, endIndex) {
      return false;
    }
  };
  var EN = {
    formatAllRows: function formatAllRows() {
      return 'All';
    },
    formatClearSearch: function formatClearSearch() {
      return 'Clear Search';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Showing ".concat(totalRows, " rows");
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Loading, please wait';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No matching records found';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " rows per page");
    },
    formatRefresh: function formatRefresh() {
      return 'Refresh';
    },
    formatSearch: function formatSearch() {
      return 'Search';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows (filtered from ").concat(totalNotFiltered, " total rows)");
      }
      return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows");
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'next page';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "to page ".concat(page);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'previous page';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    }
  };
  var COLUMN_DEFAULTS = {
    align: undefined,
    // string: left, right, center
    cardVisible: true,
    cellStyle: undefined,
    // function
    checkbox: false,
    checkboxEnabled: true,
    class: undefined,
    // string
    clickToSelect: true,
    colspan: undefined,
    // number
    detailFormatter: undefined,
    // function
    escape: undefined,
    // boolean
    events: undefined,
    falign: undefined,
    // string: left, right, center
    field: undefined,
    // string
    footerFormatter: undefined,
    // function
    footerStyle: undefined,
    // function
    formatter: undefined,
    // function
    halign: undefined,
    // left, right, center
    order: 'asc',
    // asc, desc
    radio: false,
    rowspan: undefined,
    // number
    searchable: true,
    searchFormatter: true,
    searchHighlightFormatter: false,
    showSelectTitle: false,
    sortable: false,
    sorter: undefined,
    // function
    sortName: undefined,
    // string
    switchable: true,
    switchableLabel: undefined,
    // string
    title: undefined,
    // string
    titleTooltip: undefined,
    // string
    valign: undefined,
    // top, middle, bottom
    visible: true,
    width: undefined,
    // number
    widthUnit: 'px'
  };
  var METHODS = ['getOptions', 'refreshOptions', 'getData', 'getFooterData', 'getSelections', 'load', 'append', 'prepend', 'remove', 'removeAll', 'insertRow', 'updateRow', 'getRowByUniqueId', 'updateByUniqueId', 'removeByUniqueId', 'updateCell', 'updateCellByUniqueId', 'showRow', 'hideRow', 'getHiddenRows', 'showColumn', 'hideColumn', 'getVisibleColumns', 'getHiddenColumns', 'showAllColumns', 'hideAllColumns', 'mergeCells', 'checkAll', 'uncheckAll', 'checkInvert', 'check', 'uncheck', 'checkBy', 'uncheckBy', 'refresh', 'destroy', 'resetView', 'showLoading', 'hideLoading', 'togglePagination', 'toggleFullscreen', 'toggleView', 'resetSearch', 'filterBy', 'sortBy', 'sortReset', 'scrollTo', 'getScrollPosition', 'selectPage', 'prevPage', 'nextPage', 'toggleDetailView', 'expandRow', 'collapseRow', 'expandRowByUniqueId', 'collapseRowByUniqueId', 'expandAllRows', 'collapseAllRows', 'updateColumnTitle', 'updateFormatText'];
  var EVENTS = {
    'all.bs.table': 'onAll',
    'check-all.bs.table': 'onCheckAll',
    'check-some.bs.table': 'onCheckSome',
    'check.bs.table': 'onCheck',
    'click-cell.bs.table': 'onClickCell',
    'click-row.bs.table': 'onClickRow',
    'collapse-row.bs.table': 'onCollapseRow',
    'column-switch-all.bs.table': 'onColumnSwitchAll',
    'column-switch.bs.table': 'onColumnSwitch',
    'dbl-click-cell.bs.table': 'onDblClickCell',
    'dbl-click-row.bs.table': 'onDblClickRow',
    'expand-row.bs.table': 'onExpandRow',
    'load-error.bs.table': 'onLoadError',
    'load-success.bs.table': 'onLoadSuccess',
    'page-change.bs.table': 'onPageChange',
    'post-body.bs.table': 'onPostBody',
    'post-footer.bs.table': 'onPostFooter',
    'post-header.bs.table': 'onPostHeader',
    'pre-body.bs.table': 'onPreBody',
    'refresh-options.bs.table': 'onRefreshOptions',
    'refresh.bs.table': 'onRefresh',
    'reset-view.bs.table': 'onResetView',
    'scroll-body.bs.table': 'onScrollBody',
    'search.bs.table': 'onSearch',
    'sort.bs.table': 'onSort',
    'toggle-pagination.bs.table': 'onTogglePagination',
    'toggle.bs.table': 'onToggle',
    'uncheck-all.bs.table': 'onUncheckAll',
    'uncheck-some.bs.table': 'onUncheckSome',
    'uncheck.bs.table': 'onUncheck',
    'virtual-scroll.bs.table': 'onVirtualScroll'
  };
  Object.assign(DEFAULTS, EN);
  var Constants = {
    COLUMN_DEFAULTS: COLUMN_DEFAULTS,
    CONSTANTS: CONSTANTS,
    DEFAULTS: DEFAULTS,
    EVENTS: EVENTS,
    ICONS: ICONS,
    LOCALES: {
      en: EN,
      'en-US': EN
    },
    METHODS: METHODS,
    THEME: "bootstrap".concat(bootstrapVersion),
    VERSION: VERSION
  };

  var InitializationModule = {
    initConstants: function initConstants() {
      var opts = this.options;
      this.constants = Constants.CONSTANTS;
      this.constants.theme = $.fn.bootstrapTable.theme;
      this.constants.dataToggle = this.constants.html.dataToggle || 'data-toggle';

      // init iconsPrefix and icons
      var iconsPrefix = Utils.getIconsPrefix($.fn.bootstrapTable.theme);
      if (typeof opts.icons === 'string') {
        opts.icons = Utils.calculateObjectValue(null, opts.icons);
      }
      opts.iconsPrefix = opts.iconsPrefix || $.fn.bootstrapTable.defaults.iconsPrefix || iconsPrefix;
      opts.icons = Object.assign(Utils.getIcons(Constants.ICONS, opts.iconsPrefix), $.fn.bootstrapTable.defaults.icons, opts.icons);

      // init buttons class
      var buttonsPrefix = opts.buttonsPrefix ? "".concat(opts.buttonsPrefix, "-") : '';
      this.constants.buttonsClass = [opts.buttonsPrefix, buttonsPrefix + opts.buttonsClass, Utils.sprintf("".concat(buttonsPrefix, "%s"), opts.iconSize)].join(' ').trim();
      this.buttons = Utils.calculateObjectValue(this, opts.buttons, [], {});
      if (_typeof(this.buttons) !== 'object') {
        this.buttons = {};
      }
    },
    initLocale: function initLocale() {
      if (this.options.locale) {
        var locales = $.fn.bootstrapTable.locales;
        var parts = this.options.locale.split(/-|_/);
        parts[0] = parts[0].toLowerCase();
        if (parts[1]) {
          parts[1] = parts[1].toUpperCase();
        }
        var localesToExtend = {};
        if (locales[this.options.locale]) {
          localesToExtend = locales[this.options.locale];
        } else if (locales[parts.join('-')]) {
          localesToExtend = locales[parts.join('-')];
        } else if (locales[parts[0]]) {
          localesToExtend = locales[parts[0]];
        }
        this._defaultLocales = this._defaultLocales || {};
        for (var _i = 0, _Object$entries = Object.entries(localesToExtend); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            formatName = _Object$entries$_i[0],
            func = _Object$entries$_i[1];
          var defaultLocale = this._defaultLocales.hasOwnProperty(formatName) ? this._defaultLocales[formatName] : Constants.DEFAULTS[formatName];
          if (this.options[formatName] !== defaultLocale) {
            continue;
          }
          this.options[formatName] = func;
          this._defaultLocales[formatName] = func;
        }
      }
    },
    initContainer: function initContainer() {
      var topPagination = ['top', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination clearfix"></div>' : '';
      var bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination"></div>' : '';
      var loadingTemplate = Utils.calculateObjectValue(this.options, this.options.loadingTemplate, [this.options.formatLoadingMessage()]);
      this.$container = $("\n      <div class=\"bootstrap-table ".concat(this.constants.theme, "\">\n      <div class=\"fixed-table-toolbar\"></div>\n      ").concat(topPagination, "\n      <div class=\"fixed-table-container\">\n      <div class=\"fixed-table-header\"><table></table></div>\n      <div class=\"fixed-table-body\">\n      <div class=\"fixed-table-loading\">\n      ").concat(loadingTemplate, "\n      </div>\n      </div>\n      <div class=\"fixed-table-footer\"></div>\n      </div>\n      ").concat(bottomPagination, "\n      </div>\n    "));
      this.$container.insertAfter(this.$el);
      this.$tableContainer = this.$container.find('.fixed-table-container');
      this.$tableHeader = this.$container.find('.fixed-table-header');
      this.$tableBody = this.$container.find('.fixed-table-body');
      this.$tableLoading = this.$container.find('.fixed-table-loading');
      this.$tableFooter = this.$el.find('tfoot');
      // checking if custom table-toolbar exists or not
      if (this.options.buttonsToolbar) {
        this.$toolbar = $('body').find(this.options.buttonsToolbar);
      } else {
        this.$toolbar = this.$container.find('.fixed-table-toolbar');
      }
      this.$pagination = this.$container.find('.fixed-table-pagination');
      this.$tableBody.append(this.$el);
      this.$container.after('<div class="clearfix"></div>');
      this.$el.addClass(this.options.classes);
      this.$tableLoading.addClass(this.options.classes);
      if (this.options.height) {
        this.$tableContainer.addClass('fixed-height');
        if (this.options.showFooter) {
          this.$tableContainer.addClass('has-footer');
        }
        if (this.options.classes.split(' ').includes('table-bordered')) {
          this.$tableBody.append('<div class="fixed-table-border"></div>');
          this.$tableBorder = this.$tableBody.find('.fixed-table-border');
          this.$tableLoading.addClass('fixed-table-border');
        }
        this.$tableFooter = this.$container.find('.fixed-table-footer');
      }
    },
    initTable: function initTable() {
      var _this = this;
      var columns = [];
      this.$header = this.$el.find('>thead');
      if (!this.$header.length) {
        this.$header = $("<thead class=\"".concat(this.options.theadClasses, "\"></thead>")).appendTo(this.$el);
      } else if (this.options.theadClasses) {
        this.$header.addClass(this.options.theadClasses);
      }
      this._headerTrClasses = [];
      this._headerTrStyles = [];
      this.$header.find('tr').each(function (i, el) {
        var $tr = $(el);
        var column = [];
        $tr.find('th').each(function (i, el) {
          var $th = $(el);

          // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
          if (typeof $th.data('field') !== 'undefined') {
            $th.data('field', "".concat($th.data('field')));
          }
          var _data = Object.assign({}, $th.data());
          for (var key in _data) {
            if ($.fn.bootstrapTable.columnDefaults.hasOwnProperty(key)) {
              delete _data[key];
            }
          }
          column.push(Utils.extend({}, {
            _data: Utils.getRealDataAttr(_data),
            title: $th.html(),
            class: $th.attr('class'),
            titleTooltip: $th.attr('title'),
            rowspan: $th.attr('rowspan') ? +$th.attr('rowspan') : undefined,
            colspan: $th.attr('colspan') ? +$th.attr('colspan') : undefined,
            scope: $th.attr('scope') ? $th.attr('scope') : undefined
          }, $th.data()));
        });
        columns.push(column);
        if ($tr.attr('class')) {
          _this._headerTrClasses.push($tr.attr('class'));
        }
        if ($tr.attr('style')) {
          _this._headerTrStyles.push($tr.attr('style'));
        }
      });
      if (!Array.isArray(this.options.columns[0])) {
        this.options.columns = [this.options.columns];
      }
      this.options.columns = Utils.extend(true, [], columns, this.options.columns);
      this.columns = [];
      this.fieldsColumnsIndex = [];
      if (this.optionsColumnsChanged !== false) {
        Utils.setFieldIndex(this.options.columns);
      }
      this.options.columns.forEach(function (columns, i) {
        columns.forEach(function (_column, j) {
          var column = Utils.extend({}, Constants.COLUMN_DEFAULTS, _column, {
            passed: _column
          });
          if (typeof column.fieldIndex !== 'undefined') {
            _this.columns[column.fieldIndex] = column;
            _this.fieldsColumnsIndex[column.field] = column.fieldIndex;
          }
          _this.options.columns[i][j] = column;
        });
      });

      // if options.data is setting, do not process tbody and tfoot data
      if (!this.options.data.length) {
        var htmlData = Utils.trToData(this.columns, this.$el.find('>tbody>tr'));
        if (htmlData.length) {
          this.options.data = htmlData;
          this.fromHtml = true;
        }
      }
      if (!(this.options.pagination && this.options.sidePagination !== 'server')) {
        this.footerData = Utils.trToData(this.columns, this.$el.find('>tfoot>tr'));
      }
      if (this.footerData) {
        this.$el.find('tfoot').html('<tr></tr>');
      }
      if (!this.options.showFooter || this.options.cardView) {
        this.$tableFooter.hide();
      } else {
        this.$tableFooter.show();
      }
    }
  };

  var es_array_findIndex = {};

  var hasRequiredEs_array_findIndex;

  function requireEs_array_findIndex () {
  	if (hasRequiredEs_array_findIndex) return es_array_findIndex;
  	hasRequiredEs_array_findIndex = 1;
  	var $ = require_export();
  	var $findIndex = requireArrayIteration().findIndex;
  	var addToUnscopables = requireAddToUnscopables();

  	var FIND_INDEX = 'findIndex';
  	var SKIPS_HOLES = true;

  	// Shouldn't skip holes
  	// eslint-disable-next-line es/no-array-prototype-findindex -- testing
  	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

  	// `Array.prototype.findIndex` method
  	// https://tc39.es/ecma262/#sec-array.prototype.findindex
  	$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
  	    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  	  }
  	});

  	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  	addToUnscopables(FIND_INDEX);
  	return es_array_findIndex;
  }

  requireEs_array_findIndex();

  var es_array_splice = {};

  var arraySetLength;
  var hasRequiredArraySetLength;

  function requireArraySetLength () {
  	if (hasRequiredArraySetLength) return arraySetLength;
  	hasRequiredArraySetLength = 1;
  	var DESCRIPTORS = requireDescriptors();
  	var isArray = requireIsArray();

  	var $TypeError = TypeError;
  	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  	// Safari < 13 does not throw an error in this case
  	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  	  // makes no sense without proper strict mode support
  	  if (this !== undefined) return true;
  	  try {
  	    // eslint-disable-next-line es/no-object-defineproperty -- safe
  	    Object.defineProperty([], 'length', { writable: false }).length = 1;
  	  } catch (error) {
  	    return error instanceof TypeError;
  	  }
  	}();

  	arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  	  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
  	    throw new $TypeError('Cannot set read only .length');
  	  } return O.length = length;
  	} : function (O, length) {
  	  return O.length = length;
  	};
  	return arraySetLength;
  }

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

  var hasRequiredEs_array_splice;

  function requireEs_array_splice () {
  	if (hasRequiredEs_array_splice) return es_array_splice;
  	hasRequiredEs_array_splice = 1;
  	var $ = require_export();
  	var toObject = requireToObject();
  	var toAbsoluteIndex = requireToAbsoluteIndex();
  	var toIntegerOrInfinity = requireToIntegerOrInfinity();
  	var lengthOfArrayLike = requireLengthOfArrayLike();
  	var setArrayLength = requireArraySetLength();
  	var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();
  	var arraySpeciesCreate = requireArraySpeciesCreate();
  	var createProperty = requireCreateProperty();
  	var deletePropertyOrThrow = requireDeletePropertyOrThrow();
  	var arrayMethodHasSpeciesSupport = requireArrayMethodHasSpeciesSupport();

  	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

  	var max = Math.max;
  	var min = Math.min;

  	// `Array.prototype.splice` method
  	// https://tc39.es/ecma262/#sec-array.prototype.splice
  	// with adding support of @@species
  	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  	  splice: function splice(start, deleteCount /* , ...items */) {
  	    var O = toObject(this);
  	    var len = lengthOfArrayLike(O);
  	    var actualStart = toAbsoluteIndex(start, len);
  	    var argumentsLength = arguments.length;
  	    var insertCount, actualDeleteCount, A, k, from, to;
  	    if (argumentsLength === 0) {
  	      insertCount = actualDeleteCount = 0;
  	    } else if (argumentsLength === 1) {
  	      insertCount = 0;
  	      actualDeleteCount = len - actualStart;
  	    } else {
  	      insertCount = argumentsLength - 2;
  	      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
  	    }
  	    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
  	    A = arraySpeciesCreate(O, actualDeleteCount);
  	    for (k = 0; k < actualDeleteCount; k++) {
  	      from = actualStart + k;
  	      if (from in O) createProperty(A, k, O[from]);
  	    }
  	    A.length = actualDeleteCount;
  	    if (insertCount < actualDeleteCount) {
  	      for (k = actualStart; k < len - actualDeleteCount; k++) {
  	        from = k + actualDeleteCount;
  	        to = k + insertCount;
  	        if (from in O) O[to] = O[from];
  	        else deletePropertyOrThrow(O, to);
  	      }
  	      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
  	    } else if (insertCount > actualDeleteCount) {
  	      for (k = len - actualDeleteCount; k > actualStart; k--) {
  	        from = k + actualDeleteCount - 1;
  	        to = k + insertCount - 1;
  	        if (from in O) O[to] = O[from];
  	        else deletePropertyOrThrow(O, to);
  	      }
  	    }
  	    for (k = 0; k < insertCount; k++) {
  	      O[k + actualStart] = arguments[k + 2];
  	    }
  	    setArrayLength(O, len - actualDeleteCount + insertCount);
  	    return A;
  	  }
  	});
  	return es_array_splice;
  }

  requireEs_array_splice();

  var BLOCK_ROWS = 50;
  var CLUSTER_BLOCKS = 4;
  var VirtualScroll = /*#__PURE__*/function () {
    function VirtualScroll(options) {
      var _this = this;
      _classCallCheck(this, VirtualScroll);
      this.rows = options.rows;
      this.scrollEl = options.scrollEl;
      this.contentEl = options.contentEl;
      this.callback = options.callback;
      this.itemHeight = options.itemHeight;
      this.cache = {};
      this.scrollTop = this.scrollEl.scrollTop;
      this.initDOM(this.rows, options.fixedScroll);
      this.scrollEl.scrollTop = this.scrollTop;
      this.lastCluster = 0;
      var onScroll = function onScroll() {
        if (_this.lastCluster !== (_this.lastCluster = _this.getNum())) {
          _this.initDOM(_this.rows);
          _this.callback(_this.startIndex, _this.endIndex);
        }
      };
      this.scrollEl.addEventListener('scroll', onScroll, false);
      this.destroy = function () {
        _this.contentEl.innerHtml = '';
        _this.scrollEl.removeEventListener('scroll', onScroll, false);
      };
    }
    return _createClass(VirtualScroll, [{
      key: "initDOM",
      value: function initDOM(rows, fixedScroll) {
        if (typeof this.clusterHeight === 'undefined') {
          this.cache.scrollTop = this.scrollEl.scrollTop;
          this.cache.data = this.contentEl.innerHTML = rows[0] + rows[0] + rows[0];
          this.getRowsHeight(rows);
        } else if (this.blockHeight === 0) {
          this.getRowsHeight(rows);
        }
        var data = this.initData(rows, this.getNum(fixedScroll));
        var thisRows = data.rows.join('');
        var dataChanged = this.checkChanges('data', thisRows);
        var topOffsetChanged = this.checkChanges('top', data.topOffset);
        var bottomOffsetChanged = this.checkChanges('bottom', data.bottomOffset);
        var html = [];
        if (dataChanged && topOffsetChanged) {
          if (data.topOffset) {
            html.push(this.getExtra('top', data.topOffset));
          }
          html.push(thisRows);
          if (data.bottomOffset) {
            html.push(this.getExtra('bottom', data.bottomOffset));
          }
          this.startIndex = data.start;
          this.endIndex = data.end;
          this.contentEl.innerHTML = html.join('');
          if (fixedScroll) {
            this.contentEl.scrollTop = this.cache.scrollTop;
          }
        } else if (bottomOffsetChanged) {
          this.contentEl.lastChild.style.height = "".concat(data.bottomOffset, "px");
        }
      }
    }, {
      key: "getRowsHeight",
      value: function getRowsHeight() {
        if (typeof this.itemHeight === 'undefined' || this.itemHeight === 0) {
          var nodes = this.contentEl.children;
          var node = nodes[Math.floor(nodes.length / 2)];
          this.itemHeight = node.offsetHeight;
        }
        this.blockHeight = this.itemHeight * BLOCK_ROWS;
        this.clusterRows = BLOCK_ROWS * CLUSTER_BLOCKS;
        this.clusterHeight = this.blockHeight * CLUSTER_BLOCKS;
      }
    }, {
      key: "getNum",
      value: function getNum(fixedScroll) {
        this.scrollTop = fixedScroll ? this.cache.scrollTop : this.scrollEl.scrollTop;
        return Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0;
      }
    }, {
      key: "initData",
      value: function initData(rows, num) {
        if (rows.length < BLOCK_ROWS) {
          return {
            topOffset: 0,
            bottomOffset: 0,
            rowsAbove: 0,
            rows: rows
          };
        }
        var start = Math.max((this.clusterRows - BLOCK_ROWS) * num, 0);
        var end = start + this.clusterRows;
        var topOffset = Math.max(start * this.itemHeight, 0);
        var bottomOffset = Math.max((rows.length - end) * this.itemHeight, 0);
        var thisRows = [];
        var rowsAbove = start;
        if (topOffset < 1) {
          rowsAbove++;
        }
        for (var i = start; i < end; i++) {
          rows[i] && thisRows.push(rows[i]);
        }
        return {
          start: start,
          end: end,
          topOffset: topOffset,
          bottomOffset: bottomOffset,
          rowsAbove: rowsAbove,
          rows: thisRows
        };
      }
    }, {
      key: "checkChanges",
      value: function checkChanges(type, value) {
        var changed = value !== this.cache[type];
        this.cache[type] = value;
        return changed;
      }
    }, {
      key: "getExtra",
      value: function getExtra(className, height) {
        var tag = document.createElement('tr');
        tag.className = "virtual-scroll-".concat(className);
        if (height) {
          tag.style.height = "".concat(height, "px");
        }
        return tag.outerHTML;
      }
    }]);
  }();

  var BodyModule = {
    initBodyEvent: function initBodyEvent() {
      var _this = this;
      // click to select by column
      this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', function (e) {
        var $td = $(e.currentTarget);
        if ($td.find('.detail-icon').length || $td.index() - Utils.getDetailViewIndexOffset(_this.options) < 0) {
          return;
        }
        var $tr = $td.parent();
        var $cardViewArr = $(e.target).parents('.card-views').children();
        var $cardViewTarget = $(e.target).parents('.card-view');
        var rowIndex = $tr.data('index');
        var item = _this.data[rowIndex];
        var index = _this.options.cardView ? $cardViewArr.index($cardViewTarget) : $td[0].cellIndex;
        var fields = _this.getVisibleFields();
        var field = fields[index - Utils.getDetailViewIndexOffset(_this.options)];
        var column = _this.columns[_this.fieldsColumnsIndex[field]];
        var value = Utils.getItemField(item, field, _this.options.escape, column.escape);
        _this.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td);
        _this.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field);

        // if click to select - then trigger the checkbox/radio click
        if (e.type === 'click' && _this.options.clickToSelect && column.clickToSelect && !Utils.calculateObjectValue(_this.options, _this.options.ignoreClickToSelectOn, [e.target])) {
          var $selectItem = $tr.find(Utils.sprintf('[name="%s"]', _this.options.selectItemName));
          if ($selectItem.length) {
            $selectItem[0].click();
          }
        }
        if (e.type === 'click' && _this.options.detailViewByClick) {
          _this.toggleDetailView(rowIndex, _this.header.detailFormatters[_this.fieldsColumnsIndex[field]]);
        }
      }).off('mousedown').on('mousedown', function (e) {
        // https://github.com/jquery/jquery/issues/1741
        _this.multipleSelectRowCtrlKey = e.ctrlKey || e.metaKey;
        _this.multipleSelectRowShiftKey = e.shiftKey;
      });
      this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click', function (e) {
        e.preventDefault();
        _this.toggleDetailView($(e.currentTarget).parent().parent().data('index'));
        return false;
      });
      this.$selectItem = this.$body.find(Utils.sprintf('[name="%s"]', this.options.selectItemName));
      this.$selectItem.off('click').on('click', function (e) {
        e.stopImmediatePropagation();
        var $this = $(e.currentTarget);
        _this._toggleCheck($this.prop('checked'), $this.data('index'));
      });
      this.header.events.forEach(function (_events, i) {
        var events = _events;
        if (!events) {
          return;
        }
        // fix bug, if events is defined with namespace
        if (typeof events === 'string') {
          events = Utils.calculateObjectValue(null, events);
        }
        if (!events) {
          throw new Error("Unknown event in the scope: ".concat(_events));
        }
        var field = _this.header.fields[i];
        var fieldIndex = _this.getVisibleFields().indexOf(field);
        if (fieldIndex === -1) {
          return;
        }
        fieldIndex += Utils.getDetailViewIndexOffset(_this.options);
        var _loop = function _loop(key) {
          if (!events.hasOwnProperty(key)) {
            return 1; // continue
          }
          var event = events[key];
          _this.$body.find('>tr:not(.no-records-found)').each(function (i, tr) {
            var $tr = $(tr);
            var $td = $tr.find(_this.options.cardView ? '.card-views>.card-view' : '>td').eq(fieldIndex);
            var index = key.indexOf(' ');
            var name = key.substring(0, index);
            var el = key.substring(index + 1);
            $td.find(el).off(name).on(name, function (e) {
              var index = $tr.data('index');
              var row = _this.data[index];
              var value = row[field];
              event.apply(_this, [e, value, row, index]);
            });
          });
        };
        for (var key in events) {
          if (_loop(key)) continue;
        }
      });
    },
    initHiddenRows: function initHiddenRows() {
      this.hiddenRows = [];
    },
    // eslint-disable-next-line no-unused-vars
    initRow: function initRow(item, i, data, trFragments) {
      var _this2 = this;
      if (Utils.findIndex(this.hiddenRows, item) > -1) {
        return;
      }
      var style = Utils.calculateObjectValue(this.options, this.options.rowStyle, [item, i], {});
      var attributes = Utils.calculateObjectValue(this.options, this.options.rowAttributes, [item, i], {});
      var data_ = {};
      if (item._data && !Utils.isEmptyObject(item._data)) {
        for (var _i = 0, _Object$entries = Object.entries(item._data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            k = _Object$entries$_i[0],
            v = _Object$entries$_i[1];
          // ignore data-index
          if (k === 'index') {
            return;
          }
          data_["data-".concat(k)] = _typeof(v) === 'object' ? JSON.stringify(v) : v;
        }
      }
      var tr = Utils.h('tr', _objectSpread2(_objectSpread2({
        id: Array.isArray(item) ? undefined : item._id,
        class: style && style.classes || (Array.isArray(item) ? undefined : item._class),
        style: style && style.css || (Array.isArray(item) ? undefined : item._style),
        'data-index': i,
        'data-uniqueid': Utils.getItemField(item, this.options.uniqueId, false),
        'data-has-detail-view': this.options.detailView && Utils.calculateObjectValue(null, this.options.detailFilter, [i, item]) ? 'true' : undefined
      }, attributes), data_));
      var trChildren = [];
      var detailViewTemplate = '';
      if (Utils.hasDetailViewIcon(this.options)) {
        detailViewTemplate = Utils.h('td');
        if (Utils.calculateObjectValue(null, this.options.detailFilter, [i, item])) {
          detailViewTemplate.append(Utils.h('a', {
            class: 'detail-icon',
            href: '#',
            html: Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen)
          }));
        }
      }
      if (detailViewTemplate && this.options.detailViewAlign !== 'right') {
        trChildren.push(detailViewTemplate);
      }
      var tds = this.header.fields.map(function (field, j) {
        var column = _this2.columns[j];
        var value_ = Utils.getItemField(item, field, _this2.options.escape, column.escape);
        var value = '';
        var attrs = {
          class: _this2.header.classes[j] ? [_this2.header.classes[j]] : [],
          style: _this2.header.styles[j] ? [_this2.header.styles[j]] : []
        };
        var cardViewClass = "card-view card-view-field-".concat(field);
        if ((_this2.fromHtml || _this2.autoMergeCells) && typeof value_ === 'undefined') {
          if (!column.checkbox && !column.radio) {
            return;
          }
        }
        if (!column.visible) {
          return;
        }
        if (_this2.options.cardView && !column.cardVisible) {
          return;
        }

        // handle class, style, id, rowspan, colspan and title of td
        for (var _i2 = 0, _arr = ['class', 'style', 'id', 'rowspan', 'colspan', 'title']; _i2 < _arr.length; _i2++) {
          var attr = _arr[_i2];
          var _value = item["_".concat(field, "_").concat(attr)];
          if (!_value) {
            continue;
          }
          if (attrs[attr]) {
            attrs[attr].push(_value);
          } else {
            attrs[attr] = _value;
          }
        }
        var cellStyle = Utils.calculateObjectValue(_this2.header, _this2.header.cellStyles[j], [value_, item, i, field], {});
        if (cellStyle.classes) {
          attrs.class.push(cellStyle.classes);
        }
        if (cellStyle.css) {
          attrs.style.push(cellStyle.css);
        }
        value = Utils.calculateObjectValue(column, _this2.header.formatters[j], [value_, item, i, field], value_);
        if (!(column.checkbox || column.radio)) {
          value = typeof value === 'undefined' || value === null ? _this2.options.undefinedText : value;
        }
        if (column.searchable && _this2.searchText && _this2.options.searchHighlight && !(column.checkbox || column.radio)) {
          var searchText = _this2.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          if (_this2.options.searchAccentNeutralise && typeof value === 'string') {
            var indexRegex = new RegExp("".concat(Utils.normalizeAccent(searchText)), 'gmi');
            var match = indexRegex.exec(Utils.normalizeAccent(value));
            if (match) {
              searchText = value.substring(match.index, match.index + searchText.length);
            }
          }
          var defValue = Utils.replaceSearchMark(value, searchText);
          value = Utils.calculateObjectValue(column, column.searchHighlightFormatter, [value, _this2.searchText], defValue);
        }
        if (item["_".concat(field, "_data")] && !Utils.isEmptyObject(item["_".concat(field, "_data")])) {
          for (var _i3 = 0, _Object$entries2 = Object.entries(item["_".concat(field, "_data")]); _i3 < _Object$entries2.length; _i3++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
              _k = _Object$entries2$_i[0],
              _v = _Object$entries2$_i[1];
            // ignore data-index
            if (_k === 'index') {
              return;
            }
            attrs["data-".concat(_k)] = _v;
          }
        }
        if (column.checkbox || column.radio) {
          var type = column.checkbox ? 'checkbox' : 'radio';
          var isChecked = Utils.isObject(value) && value.hasOwnProperty('checked') ? value.checked : (value === true || value_) && value !== false;
          var isDisabled = !column.checkboxEnabled || value && value.disabled;
          var valueNodes = _this2.header.formatters[j] && (typeof value === 'string' || value instanceof Node || value instanceof $) ? Utils.htmlToNodes(value) : [];
          item[_this2.header.stateField] = value === true || !!value_ || value && value.checked;
          return Utils.h(_this2.options.cardView ? 'div' : 'td', {
            class: [_this2.options.cardView ? cardViewClass : 'bs-checkbox', column.class],
            style: _this2.options.cardView ? undefined : attrs.style
          }, [Utils.h('label', {}, [Utils.h('input', {
            'data-index': i,
            name: _this2.options.selectItemName,
            type: type,
            value: item[_this2.options.idField],
            checked: isChecked ? 'checked' : undefined,
            disabled: isDisabled ? 'disabled' : undefined
          }), Utils.h('span')])].concat(_toConsumableArray(valueNodes)));
        }
        if (_this2.options.cardView) {
          if (_this2.options.smartDisplay && value === '') {
            return Utils.h('div', {
              class: cardViewClass
            });
          }
          var cardTitle = _this2.options.showHeader ? Utils.h('span', {
            class: ['card-view-title', cellStyle.classes],
            style: attrs.style,
            html: Utils.getFieldTitle(_this2.columns, field)
          }) : '';
          return Utils.h('div', {
            class: cardViewClass
          }, [cardTitle, Utils.h('span', {
            class: ['card-view-value', cellStyle.classes],
            style: attrs.style
          }, _toConsumableArray(Utils.htmlToNodes(value)))]);
        }
        return Utils.h('td', attrs, _toConsumableArray(Utils.htmlToNodes(value)));
      }).filter(function (x) {
        return x;
      });
      trChildren.push.apply(trChildren, _toConsumableArray(tds));
      if (detailViewTemplate && this.options.detailViewAlign === 'right') {
        trChildren.push(detailViewTemplate);
      }
      if (this.options.cardView) {
        tr.append(Utils.h('td', {
          colspan: this.header.fields.length
        }, [Utils.h('div', {
          class: 'card-views'
        }, trChildren)]));
      } else {
        tr.append.apply(tr, trChildren);
      }
      return tr;
    },
    initBody: function initBody(fixedScroll, updatedUid) {
      var _this3 = this;
      var data = this.getData();
      this.trigger('pre-body', data);
      this.$body = this.$el.find('>tbody');
      if (!this.$body.length) {
        this.$body = $('<tbody></tbody>').appendTo(this.$el);
      }

      // Fix #389 Bootstrap-table-flatJSON is not working
      if (!this.options.pagination || this.options.sidePagination === 'server') {
        this.pageFrom = 1;
        this.pageTo = data.length;
      }
      var rows = [];
      var trFragments = $(document.createDocumentFragment());
      var hasTr = false;
      var toExpand = [];
      this.autoMergeCells = Utils.checkAutoMergeCells(data.slice(this.pageFrom - 1, this.pageTo));
      for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
        var item = data[i];
        var tr = this.initRow(item, i, data, trFragments);
        hasTr = hasTr || !!tr;
        if (tr && tr instanceof Node) {
          var uniqueId = this.options.uniqueId;
          var toAppend = [tr];
          if (uniqueId && item.hasOwnProperty(uniqueId)) {
            var itemUniqueId = item[uniqueId];
            var oldTr = this.$body.find(Utils.sprintf('> tr[data-uniqueid="%s"][data-has-detail-view]', itemUniqueId));
            var oldTrNext = oldTr.next();
            if (oldTrNext.is('tr.detail-view')) {
              toExpand.push(i);
              if (!updatedUid || itemUniqueId !== updatedUid) {
                toAppend.push(oldTrNext[0]);
              }
            }
          }
          if (!this.options.virtualScroll) {
            trFragments.append(toAppend);
          } else {
            rows.push($('<div>').html(toAppend).html());
          }
        }
      }
      this.$el.removeAttr('role');

      // show no records
      if (!hasTr) {
        this.$body.html("<tr class=\"no-records-found\">".concat(Utils.sprintf('<td colspan="%s">%s</td>', this.getVisibleFields().length + Utils.getDetailViewIndexOffset(this.options), this.options.formatNoMatches()), "</tr>"));
        this.$el.attr('role', 'presentation');
      } else if (!this.options.virtualScroll) {
        this.$body.html(trFragments);
      } else {
        if (this.virtualScroll) {
          this.virtualScroll.destroy();
        }
        this.virtualScroll = new VirtualScroll({
          rows: rows,
          fixedScroll: fixedScroll,
          scrollEl: this.$tableBody[0],
          contentEl: this.$body[0],
          itemHeight: this.options.virtualScrollItemHeight,
          callback: function callback(startIndex, endIndex) {
            _this3.fitHeader();
            _this3.initBodyEvent();
            _this3.trigger('virtual-scroll', startIndex, endIndex);
          }
        });
      }
      toExpand.forEach(function (index) {
        _this3.expandRow(index);
      });
      if (!fixedScroll) {
        this.scrollTo(0);
      }
      this.initBodyEvent();
      this.initFooter();
      this.resetView();
      this.updateSelected();
      if (this.options.sidePagination !== 'server') {
        this.options.totalRows = data.length;
      }
      this.trigger('post-body', data);
    },
    resetView: function resetView(params) {
      var padding = 0;
      if (params && params.height) {
        this.options.height = params.height;
      }
      this.$tableContainer.toggleClass('has-card-view', this.options.cardView);
      if (this.options.height) {
        var fixedBody = this.$tableBody.get(0);
        this.hasScrollBar = fixedBody.scrollWidth > fixedBody.clientWidth;
      }
      if (!this.options.cardView && this.options.showHeader && this.options.height) {
        this.$tableHeader.show();
        this.resetHeader();
        padding += this.$header.outerHeight(true) + 1;
      } else {
        this.$tableHeader.hide();
        this.trigger('post-header');
      }
      if (!this.options.cardView && this.options.showFooter) {
        this.$tableFooter.show();
        this.fitFooter();
        if (this.options.height) {
          padding += this.$tableFooter.outerHeight(true);
        }
      }
      if (this.$container.hasClass('fullscreen')) {
        this.$tableContainer.css('height', '');
        this.$tableContainer.css('width', '');
      } else if (this.options.height) {
        if (this.$tableBorder) {
          this.$tableBorder.css('width', '');
          this.$tableBorder.css('height', '');
        }
        var toolbarHeight = this.$toolbar.outerHeight(true);
        var paginationHeight = this.$pagination.outerHeight(true);
        var height = this.options.height - toolbarHeight - paginationHeight;
        var $bodyTable = this.$tableBody.find('>table');
        var tableHeight = $bodyTable.outerHeight();
        this.$tableContainer.css('height', "".concat(height, "px"));
        if (this.$tableBorder && $bodyTable.is(':visible')) {
          var tableBorderHeight = height - tableHeight - 2;
          if (this.hasScrollBar) {
            tableBorderHeight -= Utils.getScrollBarWidth();
          }
          this.$tableBorder.css('width', "".concat($bodyTable.outerWidth(), "px"));
          this.$tableBorder.css('height', "".concat(tableBorderHeight, "px"));
        }
      }
      if (this.options.cardView) {
        // remove the element css
        this.$el.css('margin-top', '0');
        this.$tableContainer.css('padding-bottom', '0');
        this.$tableFooter.hide();
      } else {
        // Assign the correct sortable arrow
        this.resetCaret();
        this.$tableContainer.css('padding-bottom', "".concat(padding, "px"));
      }
      this.trigger('reset-view');
    },
    showLoading: function showLoading() {
      this.$tableLoading.toggleClass('open', true);
      var fontSize = this.options.loadingFontSize;
      if (this.options.loadingFontSize === 'auto') {
        fontSize = this.$tableLoading.width() * 0.04;
        fontSize = Math.max(12, fontSize);
        fontSize = Math.min(32, fontSize);
        fontSize = "".concat(fontSize, "px");
      }
      this.$tableLoading.find('.loading-text').css('font-size', fontSize);
    },
    hideLoading: function hideLoading() {
      this.$tableLoading.toggleClass('open', false);
    },
    scrollTo: function scrollTo(params) {
      var options = {
        unit: 'px',
        value: 0
      };
      if (_typeof(params) === 'object') {
        options = Object.assign(options, params);
      } else if (typeof params === 'string' && params === 'bottom') {
        options.value = this.$tableBody[0].scrollHeight;
      } else if (typeof params === 'string' || typeof params === 'number') {
        options.value = params;
      }
      var scrollTo = options.value;
      if (options.unit === 'rows') {
        scrollTo = 0;
        this.$body.find("> tr:lt(".concat(options.value, ")")).each(function (i, el) {
          scrollTo += $(el).outerHeight(true);
        });
      }
      this.$tableBody.scrollTop(scrollTo);
    },
    getScrollPosition: function getScrollPosition() {
      return this.$tableBody.scrollTop();
    },
    showRow: function showRow(params) {
      this._toggleRow(params, true);
    },
    hideRow: function hideRow(params) {
      this._toggleRow(params, false);
    },
    _toggleRow: function _toggleRow(params, visible) {
      var row;
      if (params.hasOwnProperty('index')) {
        row = this.getData()[params.index];
      } else if (params.hasOwnProperty('uniqueId')) {
        row = this.getRowByUniqueId(params.uniqueId);
      }
      if (!row) {
        return;
      }
      var index = Utils.findIndex(this.hiddenRows, row);
      if (!visible && index === -1) {
        this.hiddenRows.push(row);
      } else if (visible && index > -1) {
        this.hiddenRows.splice(index, 1);
      }
      this.initBody(true);
      this.initPagination();
    },
    getHiddenRows: function getHiddenRows(show) {
      if (show) {
        this.initHiddenRows();
        this.initBody(true);
        this.initPagination();
        return;
      }
      var data = this.getData();
      var rows = [];
      var _iterator = _createForOfIteratorHelper(data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          if (this.hiddenRows.includes(row)) {
            rows.push(row);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.hiddenRows = rows;
      return rows;
    },
    showColumn: function showColumn(field) {
      var _this4 = this;
      var fields = Array.isArray(field) ? field : [field];
      fields.forEach(function (field) {
        _this4._toggleColumn(_this4.fieldsColumnsIndex[field], true, true);
      });
    },
    hideColumn: function hideColumn(field) {
      var _this5 = this;
      var fields = Array.isArray(field) ? field : [field];
      fields.forEach(function (field) {
        _this5._toggleColumn(_this5.fieldsColumnsIndex[field], false, true);
      });
    },
    _toggleColumn: function _toggleColumn(index, checked, needUpdate) {
      if (index === undefined || this.columns[index].visible === checked) {
        return;
      }
      this.columns[index].visible = checked;
      this.initHeader();
      this.initSearch();
      this.initPagination();
      this.initBody();
      if (this.options.showColumns) {
        var $items = this.$toolbar.find('.keep-open input:not(".toggle-all")').prop('disabled', false);
        if (needUpdate) {
          $items.filter(Utils.sprintf('[value="%s"]', index)).prop('checked', checked);
        }
        if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
          $items.filter(':checked').prop('disabled', true);
        }
      }
    },
    showAllColumns: function showAllColumns() {
      this._toggleAllColumns(true);
    },
    hideAllColumns: function hideAllColumns() {
      this._toggleAllColumns(false);
    },
    _toggleAllColumns: function _toggleAllColumns(visible) {
      var _this6 = this;
      var _iterator2 = _createForOfIteratorHelper(this.columns.slice().reverse()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var column = _step2.value;
          if (column.switchable) {
            if (!visible && this.options.showColumns && this.getVisibleColumns().filter(function (it) {
              return it.switchable;
            }).length === this.options.minimumCountColumns) {
              continue;
            }
            column.visible = visible;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.initHeader();
      this.initSearch();
      this.initPagination();
      this.initBody();
      if (this.options.showColumns) {
        var $items = this.$toolbar.find('.keep-open input[type="checkbox"]:not(".toggle-all")').prop('disabled', false);
        if (visible) {
          $items.prop('checked', visible);
        } else {
          $items.get().reverse().forEach(function (item) {
            if ($items.filter(':checked').length > _this6.options.minimumCountColumns) {
              $(item).prop('checked', visible);
            }
          });
        }
        if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
          $items.filter(':checked').prop('disabled', true);
        }
      }
    },
    mergeCells: function mergeCells(options) {
      var row = options.index;
      var col = this.getVisibleFields().indexOf(options.field);
      var rowspan = +options.rowspan || 1;
      var colspan = +options.colspan || 1;
      var i;
      var j;
      var $tr = this.$body.find('>tr[data-index]');
      col += Utils.getDetailViewIndexOffset(this.options);
      var $td = $tr.eq(row).find('>td').eq(col);
      if (row < 0 || col < 0 || row >= this.data.length) {
        return;
      }
      for (i = row; i < row + rowspan; i++) {
        for (j = col; j < col + colspan; j++) {
          $tr.eq(i).find('>td').eq(j).hide();
        }
      }
      $td.attr('rowspan', rowspan).attr('colspan', colspan).show();
    },
    getVisibleColumns: function getVisibleColumns() {
      var _this7 = this;
      return this.columns.filter(function (column) {
        return column.visible && !_this7.isSelectionColumn(column);
      });
    },
    getHiddenColumns: function getHiddenColumns() {
      return this.columns.filter(function (_ref) {
        var visible = _ref.visible;
        return !visible;
      });
    }
  };

  var CheckModule = {
    updateSelected: function updateSelected() {
      var checkAll = this.$selectItem.filter(':enabled').length && this.$selectItem.filter(':enabled').length === this.$selectItem.filter(':enabled').filter(':checked').length;
      this.$selectAll.add(this.$selectAll_).prop('checked', checkAll);
      this.$selectItem.each(function (i, el) {
        $(el).closest('tr')[$(el).prop('checked') ? 'addClass' : 'removeClass']('selected');
      });
    },
    isSelectionColumn: function isSelectionColumn(column) {
      return column.radio || column.checkbox;
    },
    getSelections: function getSelections() {
      var _this = this;
      return (this.options.maintainMetaData ? this.options.data : this.data).filter(function (row) {
        return row[_this.header.stateField] === true;
      });
    },
    updateRows: function updateRows() {
      var _this2 = this;
      this.$selectItem.each(function (i, el) {
        _this2.data[$(el).data('index')][_this2.header.stateField] = $(el).prop('checked');
      });
    },
    resetRows: function resetRows() {
      if (this.data.length) {
        this.$selectAll.prop('checked', false);
        this.$selectItem.prop('checked', false);
      }
      if (this.header.stateField) {
        var _iterator = _createForOfIteratorHelper(this.data),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var row = _step.value;
            row[this.header.stateField] = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      this.initHiddenRows();
    },
    checkAll: function checkAll() {
      this._toggleCheckAll(true);
    },
    uncheckAll: function uncheckAll() {
      this._toggleCheckAll(false);
    },
    _toggleCheckAll: function _toggleCheckAll(checked) {
      var rowsBefore = this.getSelections();
      this.$selectAll.add(this.$selectAll_).prop('checked', checked);
      this.$selectItem.filter(':enabled').prop('checked', checked);
      this.updateRows();
      this.updateSelected();
      var rowsAfter = this.getSelections();
      if (checked) {
        this.trigger('check-all', rowsAfter, rowsBefore);
        return;
      }
      this.trigger('uncheck-all', rowsAfter, rowsBefore);
    },
    checkInvert: function checkInvert() {
      var $items = this.$selectItem.filter(':enabled');
      var checked = $items.filter(':checked');
      $items.each(function (i, el) {
        $(el).prop('checked', !$(el).prop('checked'));
      });
      this.updateRows();
      this.updateSelected();
      this.trigger('uncheck-some', checked);
      checked = this.getSelections();
      this.trigger('check-some', checked);
    },
    check: function check(index) {
      this._toggleCheck(true, index);
    },
    uncheck: function uncheck(index) {
      this._toggleCheck(false, index);
    },
    _toggleCheck: function _toggleCheck(checked, index) {
      var $el = this.$selectItem.filter("[data-index=\"".concat(index, "\"]"));
      var row = this.data[index];
      if ($el.is(':radio') || this.options.singleSelect || this.options.multipleSelectRow && !this.multipleSelectRowCtrlKey && !this.multipleSelectRowShiftKey) {
        var _iterator2 = _createForOfIteratorHelper(this.options.data),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var r = _step2.value;
            r[this.header.stateField] = false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.$selectItem.filter(':checked').not($el).prop('checked', false);
      }
      row[this.header.stateField] = checked;
      if (this.options.multipleSelectRow) {
        if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0) {
          var _ref = this.multipleSelectRowLastSelectedIndex < index ? [this.multipleSelectRowLastSelectedIndex, index] : [index, this.multipleSelectRowLastSelectedIndex],
            _ref2 = _slicedToArray(_ref, 2),
            fromIndex = _ref2[0],
            toIndex = _ref2[1];
          for (var i = fromIndex + 1; i < toIndex; i++) {
            this.data[i][this.header.stateField] = true;
            this.$selectItem.filter("[data-index=\"".concat(i, "\"]")).prop('checked', true);
          }
        }
        this.multipleSelectRowCtrlKey = false;
        this.multipleSelectRowShiftKey = false;
        this.multipleSelectRowLastSelectedIndex = checked ? index : -1;
      }
      $el.prop('checked', checked);
      this.updateSelected();
      this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el);
    },
    checkBy: function checkBy(obj) {
      this._toggleCheckBy(true, obj);
    },
    uncheckBy: function uncheckBy(obj) {
      this._toggleCheckBy(false, obj);
    },
    _toggleCheckBy: function _toggleCheckBy(checked, obj) {
      var _this3 = this;
      if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
        return;
      }
      var rows = [];
      this.data.forEach(function (row, i) {
        if (!row.hasOwnProperty(obj.field)) {
          return false;
        }
        if (obj.values.includes(row[obj.field])) {
          var $el = _this3.$selectItem.filter(':enabled').filter(Utils.sprintf('[data-index="%s"]', i));
          var onlyCurrentPage = obj.hasOwnProperty('onlyCurrentPage') ? obj.onlyCurrentPage : false;
          $el = checked ? $el.not(':checked') : $el.filter(':checked');
          if (!$el.length && onlyCurrentPage) {
            return;
          }
          $el.prop('checked', checked);
          row[_this3.header.stateField] = checked;
          rows.push(row);
          _this3.trigger(checked ? 'check' : 'uncheck', row, $el);
        }
      });
      this.updateSelected();
      this.trigger(checked ? 'check-some' : 'uncheck-some', rows);
    }
  };

  var es_array_sort = {};

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

  var es_number_constructor = {};

  var path;
  var hasRequiredPath;

  function requirePath () {
  	if (hasRequiredPath) return path;
  	hasRequiredPath = 1;
  	var globalThis = requireGlobalThis();

  	path = globalThis;
  	return path;
  }

  var thisNumberValue;
  var hasRequiredThisNumberValue;

  function requireThisNumberValue () {
  	if (hasRequiredThisNumberValue) return thisNumberValue;
  	hasRequiredThisNumberValue = 1;
  	var uncurryThis = requireFunctionUncurryThis();

  	// `thisNumberValue` abstract operation
  	// https://tc39.es/ecma262/#sec-thisnumbervalue
  	thisNumberValue = uncurryThis(1.1.valueOf);
  	return thisNumberValue;
  }

  var hasRequiredEs_number_constructor;

  function requireEs_number_constructor () {
  	if (hasRequiredEs_number_constructor) return es_number_constructor;
  	hasRequiredEs_number_constructor = 1;
  	var $ = require_export();
  	var IS_PURE = requireIsPure();
  	var DESCRIPTORS = requireDescriptors();
  	var globalThis = requireGlobalThis();
  	var path = requirePath();
  	var uncurryThis = requireFunctionUncurryThis();
  	var isForced = requireIsForced();
  	var hasOwn = requireHasOwnProperty();
  	var inheritIfRequired = requireInheritIfRequired();
  	var isPrototypeOf = requireObjectIsPrototypeOf();
  	var isSymbol = requireIsSymbol();
  	var toPrimitive = requireToPrimitive();
  	var fails = requireFails();
  	var getOwnPropertyNames = requireObjectGetOwnPropertyNames().f;
  	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  	var defineProperty = requireObjectDefineProperty().f;
  	var thisNumberValue = requireThisNumberValue();
  	var trim = requireStringTrim().trim;

  	var NUMBER = 'Number';
  	var NativeNumber = globalThis[NUMBER];
  	var PureNumberNamespace = path[NUMBER];
  	var NumberPrototype = NativeNumber.prototype;
  	var TypeError = globalThis.TypeError;
  	var stringSlice = uncurryThis(''.slice);
  	var charCodeAt = uncurryThis(''.charCodeAt);

  	// `ToNumeric` abstract operation
  	// https://tc39.es/ecma262/#sec-tonumeric
  	var toNumeric = function (value) {
  	  var primValue = toPrimitive(value, 'number');
  	  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
  	};

  	// `ToNumber` abstract operation
  	// https://tc39.es/ecma262/#sec-tonumber
  	var toNumber = function (argument) {
  	  var it = toPrimitive(argument, 'number');
  	  var first, third, radix, maxCode, digits, length, index, code;
  	  if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number');
  	  if (typeof it == 'string' && it.length > 2) {
  	    it = trim(it);
  	    first = charCodeAt(it, 0);
  	    if (first === 43 || first === 45) {
  	      third = charCodeAt(it, 2);
  	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
  	    } else if (first === 48) {
  	      switch (charCodeAt(it, 1)) {
  	        // fast equal of /^0b[01]+$/i
  	        case 66:
  	        case 98:
  	          radix = 2;
  	          maxCode = 49;
  	          break;
  	        // fast equal of /^0o[0-7]+$/i
  	        case 79:
  	        case 111:
  	          radix = 8;
  	          maxCode = 55;
  	          break;
  	        default:
  	          return +it;
  	      }
  	      digits = stringSlice(it, 2);
  	      length = digits.length;
  	      for (index = 0; index < length; index++) {
  	        code = charCodeAt(digits, index);
  	        // parseInt parses a string to a first unavailable symbol
  	        // but ToNumber should return NaN if a string contains unavailable symbols
  	        if (code < 48 || code > maxCode) return NaN;
  	      } return parseInt(digits, radix);
  	    }
  	  } return +it;
  	};

  	var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

  	var calledWithNew = function (dummy) {
  	  // includes check on 1..constructor(foo) case
  	  return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); });
  	};

  	// `Number` constructor
  	// https://tc39.es/ecma262/#sec-number-constructor
  	var NumberWrapper = function Number(value) {
  	  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  	  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
  	};

  	NumberWrapper.prototype = NumberPrototype;
  	if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

  	$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  	  Number: NumberWrapper
  	});

  	// Use `internal/copy-constructor-properties` helper in `core-js@4`
  	var copyConstructorProperties = function (target, source) {
  	  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
  	    // ES3:
  	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
  	    // ES2015 (in case, if modules with ES2015 Number statics required before):
  	    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
  	    // ESNext
  	    'fromString,range'
  	  ).split(','), j = 0, key; keys.length > j; j++) {
  	    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
  	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  	    }
  	  }
  	};

  	if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
  	if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);
  	return es_number_constructor;
  }

  requireEs_number_constructor();

  var DataModule = {
    initServer: function initServer(silent, query) {
      var _this = this;
      var data = {};
      var index = this.header.fields.indexOf(this.options.sortName);
      var params = {
        searchText: this.searchText,
        sortName: this.options.sortName,
        sortOrder: this.options.sortOrder
      };
      if (this.header.sortNames[index]) {
        params.sortName = this.header.sortNames[index];
      }
      if (this.options.pagination && this.options.sidePagination === 'server') {
        params.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize;
        params.pageNumber = this.options.pageNumber;
      }
      if (!this.options.url && !this.options.ajax) {
        return;
      }
      if (this.options.queryParamsType === 'limit') {
        params = {
          search: params.searchText,
          sort: params.sortName,
          order: params.sortOrder
        };
        if (this.options.pagination && this.options.sidePagination === 'server') {
          params.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1);
          params.limit = this.options.pageSize;
          if (params.limit === 0 || this.options.pageSize === this.options.formatAllRows()) {
            delete params.limit;
          }
        }
      }
      if (this.options.search && this.options.sidePagination === 'server' && this.options.searchable && this.columns.filter(function (column) {
        return column.searchable;
      }).length) {
        params.searchable = [];
        var _iterator = _createForOfIteratorHelper(this.columns),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var column = _step.value;
            if (!column.checkbox && column.searchable && (this.options.visibleSearch && column.visible || !this.options.visibleSearch)) {
              params.searchable.push(column.field);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (!Utils.isEmptyObject(this.filterColumnsPartial)) {
        params.filter = JSON.stringify(this.filterColumnsPartial, null);
      }
      Utils.extend(params, query || {});
      data = Utils.calculateObjectValue(this.options, this.options.queryParams, [params], data);

      // false to stop request
      if (data === false) {
        return;
      }
      if (!silent) {
        this.showLoading();
      }
      var request = Utils.extend({}, Utils.calculateObjectValue(null, this.options.ajaxOptions), {
        type: this.options.method,
        url: this.options.url,
        data: this.options.contentType === 'application/json' && this.options.method === 'post' ? JSON.stringify(data) : data,
        cache: this.options.cache,
        contentType: this.options.contentType,
        dataType: this.options.dataType,
        success: function success(_res, textStatus, jqXHR) {
          var res = Utils.calculateObjectValue(_this.options, _this.options.responseHandler, [_res, jqXHR], _res);
          if (_this.options.sidePagination === 'client' && _this.options.paginationLoadMore) {
            _this._paginationLoaded = _this.data.length === res.length;
          }
          _this.load(res);
          _this.trigger('load-success', res, jqXHR && jqXHR.status, jqXHR);
          if (!silent) {
            _this.hideLoading();
          }
          if (_this.options.sidePagination === 'server' && _this.options.pageNumber > 1 && res[_this.options.totalField] > 0 && !res[_this.options.dataField].length) {
            _this.updatePagination();
          }
        },
        error: function error(jqXHR) {
          // abort ajax by multiple request
          if (jqXHR && jqXHR.status === 0 && _this._xhrAbort) {
            _this._xhrAbort = false;
            return;
          }
          var data = [];
          if (_this.options.sidePagination === 'server') {
            data = {};
            data[_this.options.totalField] = 0;
            data[_this.options.dataField] = [];
          }
          _this.load(data);
          _this.trigger('load-error', jqXHR && jqXHR.status, jqXHR);
          if (!silent) {
            _this.hideLoading();
          }
        }
      });
      if (this.options.ajax) {
        Utils.calculateObjectValue(this, this.options.ajax, [request], null);
      } else {
        if (this._xhr && this._xhr.readyState !== 4) {
          this._xhrAbort = true;
          this._xhr.abort();
        }
        this._xhr = $.ajax(request);
      }
      return data;
    },
    initData: function initData(data, type) {
      if (type === 'append') {
        this.options.data = this.options.data.concat(data);
      } else if (type === 'prepend') {
        this.options.data = [].concat(data).concat(this.options.data);
      } else {
        data = data || Utils.deepCopy(this.options.data);
        this.options.data = Array.isArray(data) ? data : data[this.options.dataField];
      }
      this.data = _toConsumableArray(this.options.data);
      if (this.options.sortReset) {
        this.unsortedData = _toConsumableArray(this.data);
      }
      if (this.options.sidePagination === 'server') {
        return;
      }
      this.initSort();
    },
    initSort: function initSort() {
      var _this2 = this;
      var name = this.options.sortName;
      var order = this.options.sortOrder === 'desc' ? -1 : 1;
      var index = this.header.fields.indexOf(this.options.sortName);
      if (index !== -1) {
        if (this.options.sortStable) {
          this.data.forEach(function (row, i) {
            if (!row.hasOwnProperty('_position')) {
              row._position = i;
            }
          });
        }
        if (this.options.customSort) {
          Utils.calculateObjectValue(this.options, this.options.customSort, [this.options.sortName, this.options.sortOrder, this.data]);
        } else {
          this.data.sort(function (a, b) {
            if (_this2.header.sortNames[index]) {
              name = _this2.header.sortNames[index];
            }
            var aa = Utils.getItemField(a, name, _this2.options.escape);
            var bb = Utils.getItemField(b, name, _this2.options.escape);
            var value = Utils.calculateObjectValue(_this2.header, _this2.header.sorters[index], [aa, bb, a, b]);
            if (value !== undefined) {
              if (_this2.options.sortStable && value === 0) {
                return order * (a._position - b._position);
              }
              return order * value;
            }
            return Utils.sort(aa, bb, order, _this2.options, a._position, b._position);
          });
        }
        if (this.options.sortClass !== undefined) {
          setTimeout(function () {
            _this2.$el.removeClass(_this2.options.sortClass);
            var index = _this2.$header.find("[data-field=\"".concat(_this2.options.sortName, "\"]")).index();
            _this2.$el.find("tr td:nth-child(".concat(index + 1, ")")).addClass(_this2.options.sortClass);
          }, 250);
        }
      } else if (this.options.sortReset) {
        this.data = _toConsumableArray(this.unsortedData);
      }
    },
    onSort: function onSort(_ref) {
      var type = _ref.type,
        currentTarget = _ref.currentTarget;
      var $this = type === 'keypress' ? $(currentTarget) : $(currentTarget).parent();
      var $this_ = this.$header.find('th').eq($this.index());
      this.$header.add(this.$header_).find('span.order').remove();
      if (this.options.sortName === $this.data('field')) {
        var currentSortOrder = this.options.sortOrder;
        var initialSortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].sortOrder || this.columns[this.fieldsColumnsIndex[$this.data('field')]].order;
        if (currentSortOrder === undefined) {
          this.options.sortOrder = 'asc';
        } else if (currentSortOrder === 'asc') {
          this.options.sortOrder = this.options.sortReset ? initialSortOrder === 'asc' ? 'desc' : undefined : 'desc';
        } else if (this.options.sortOrder === 'desc') {
          this.options.sortOrder = this.options.sortReset ? initialSortOrder === 'desc' ? 'asc' : undefined : 'asc';
        }
        if (this.options.sortOrder === undefined) {
          this.options.sortName = undefined;
        }
      } else {
        this.options.sortName = $this.data('field');
        if (this.options.rememberOrder) {
          this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc';
        } else {
          this.options.sortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].sortOrder || this.columns[this.fieldsColumnsIndex[$this.data('field')]].order;
        }
      }
      $this.add($this_).data('order', this.options.sortOrder);

      // Assign the correct sortable arrow
      this.resetCaret();
      this._sort();
    },
    _sort: function _sort() {
      if (this.options.sidePagination === 'server' && this.options.serverSort) {
        this.options.pageNumber = 1;
        this.trigger('sort', this.options.sortName, this.options.sortOrder);
        this.initServer(this.options.silentSort);
        return;
      }
      if (this.options.pagination && this.options.sortResetPage) {
        this.options.pageNumber = 1;
        this.initPagination();
      }
      this.trigger('sort', this.options.sortName, this.options.sortOrder);
      this.initSort();
      this.initBody();
    },
    sortReset: function sortReset() {
      this.options.sortName = undefined;
      this.options.sortOrder = undefined;
      this._sort();
    },
    sortBy: function sortBy(params) {
      this.options.sortName = params.field;
      this.options.sortOrder = params.hasOwnProperty('sortOrder') ? params.sortOrder : 'asc';
      this._sort();
    },
    getData: function getData(params) {
      var _this3 = this;
      var data = this.options.data;
      if ((this.searchText || this.options.customSearch || this.options.sortName !== undefined || this.enableCustomSort ||
      // Fix #4616: this.enableCustomSort is for extensions
      !Utils.isEmptyObject(this.filterColumns) || typeof this.options.filterOptions.filterAlgorithm === 'function' || !Utils.isEmptyObject(this.filterColumnsPartial)) && (!params || !params.unfiltered)) {
        data = this.data;
      }
      if (params && !params.includeHiddenRows) {
        var hiddenRows = this.getHiddenRows();
        data = data.filter(function (row) {
          return Utils.findIndex(hiddenRows, row) === -1;
        });
      }
      if (params && params.useCurrentPage) {
        data = data.slice(this.pageFrom - 1, this.pageTo);
      }
      if (params && params.formatted) {
        return data.map(function (row) {
          var formattedColumns = {};
          for (var _i = 0, _Object$entries = Object.entries(row); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            var column = _this3.columns[_this3.fieldsColumnsIndex[key]];
            if (!column) {
              continue;
            }
            formattedColumns[key] = Utils.calculateObjectValue(column, _this3.header.formatters[column.fieldIndex], [value, row, row.index, column.field], value);
          }
          return formattedColumns;
        });
      }
      return data;
    },
    getFooterData: function getFooterData() {
      var _this$footerData;
      return (_this$footerData = this.footerData) !== null && _this$footerData !== void 0 ? _this$footerData : [];
    },
    load: function load(_data) {
      var fixedScroll = false;
      var data = _data;

      // #431: support pagination
      if (this.options.pagination && this.options.sidePagination === 'server') {
        this.options.totalRows = data[this.options.totalField];
        this.options.totalNotFiltered = data[this.options.totalNotFilteredField];
        this.footerData = data[this.options.footerField] ? [data[this.options.footerField]] : undefined;
      }
      fixedScroll = this.options.fixedScroll || data.fixedScroll;
      data = Array.isArray(data) ? data : data[this.options.dataField];
      this.initData(data);
      this.initSearch();
      this.initPagination();
      this.initBody(fixedScroll);
    },
    append: function append(data) {
      this.initData(data, 'append');
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    prepend: function prepend(data) {
      this.initData(data, 'prepend');
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    remove: function remove(params) {
      var removed = 0;
      for (var i = this.options.data.length - 1; i >= 0; i--) {
        var row = this.options.data[i];
        var value = Utils.getItemField(row, params.field, this.options.escape, row.escape);
        if (value === undefined && params.field !== '$index') {
          continue;
        }
        if (!row.hasOwnProperty(params.field) && params.field === '$index' && params.values.includes(i) || params.values.includes(value)) {
          removed++;
          this.options.data.splice(i, 1);
        }
      }
      if (!removed) {
        return;
      }
      if (this.options.sidePagination === 'server') {
        this.options.totalRows -= removed;
        this.data = _toConsumableArray(this.options.data);
      }
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    removeAll: function removeAll() {
      if (this.options.data.length > 0) {
        this.data.splice(0, this.data.length);
        this.options.data.splice(0, this.options.data.length);
        this.initSearch();
        this.initPagination();
        this.initBody(true);
      }
    },
    insertRow: function insertRow(params) {
      if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
        return;
      }
      var row = this.data[params.index];
      var originalIndex = this.options.data.indexOf(row);
      if (originalIndex === -1) {
        this.append([params.row]);
        return;
      }
      this.data.splice(params.index, 0, params.row);
      this.options.data.splice(originalIndex, 0, params.row);
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    updateRow: function updateRow(params) {
      var allParams = Array.isArray(params) ? params : [params];
      var _iterator2 = _createForOfIteratorHelper(allParams),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _params = _step2.value;
          if (!_params.hasOwnProperty('index') || !_params.hasOwnProperty('row')) {
            continue;
          }
          var row = this.data[_params.index];
          var originalIndex = this.options.data.indexOf(row);
          if (_params.hasOwnProperty('replace') && _params.replace) {
            this.data[_params.index] = _params.row;
            this.options.data[originalIndex] = _params.row;
          } else {
            Utils.extend(this.data[_params.index], _params.row);
            Utils.extend(this.options.data[originalIndex], _params.row);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true);
    },
    getRowByUniqueId: function getRowByUniqueId(_id) {
      var uniqueId = this.options.uniqueId;
      var len = this.options.data.length;
      var id = _id;
      var dataRow = null;
      var i;
      var row;
      for (i = len - 1; i >= 0; i--) {
        row = this.options.data[i];
        var rowUniqueId = Utils.getItemField(row, uniqueId, this.options.escape, row.escape);
        if (rowUniqueId === undefined) {
          continue;
        }
        if (typeof rowUniqueId === 'string') {
          id = _id.toString();
        } else if (typeof rowUniqueId === 'number') {
          if (Number(rowUniqueId) === rowUniqueId && rowUniqueId % 1 === 0) {
            id = parseInt(_id, 10);
          } else if (rowUniqueId === Number(rowUniqueId) && rowUniqueId !== 0) {
            id = parseFloat(_id);
          }
        }
        if (rowUniqueId === id) {
          dataRow = row;
          break;
        }
      }
      return dataRow;
    },
    updateByUniqueId: function updateByUniqueId(params) {
      var allParams = Array.isArray(params) ? params : [params];
      var updatedUid = null;
      var _iterator3 = _createForOfIteratorHelper(allParams),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _params2 = _step3.value;
          if (!_params2.hasOwnProperty('id') || !_params2.hasOwnProperty('row')) {
            continue;
          }
          var rowId = this.options.data.indexOf(this.getRowByUniqueId(_params2.id));
          if (rowId === -1) {
            continue;
          }
          if (_params2.hasOwnProperty('replace') && _params2.replace) {
            this.options.data[rowId] = _params2.row;
          } else {
            Utils.extend(this.options.data[rowId], _params2.row);
          }
          updatedUid = _params2.id;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.initSearch();
      this.initPagination();
      this.initSort();
      this.initBody(true, updatedUid);
    },
    removeByUniqueId: function removeByUniqueId(id) {
      var len = this.options.data.length;
      var row = this.getRowByUniqueId(id);
      if (row) {
        this.options.data.splice(this.options.data.indexOf(row), 1);
      }
      if (len === this.options.data.length) {
        return;
      }
      if (this.options.sidePagination === 'server') {
        this.options.totalRows -= 1;
        this.data = _toConsumableArray(this.options.data);
      }
      this.initSearch();
      this.initPagination();
      this.initBody(true);
    },
    _updateCellOnly: function _updateCellOnly(field, index) {
      if (index === -1) {
        return;
      }
      var rowHtml = this.initRow(this.data[index], index);
      var fieldIndex = this.getVisibleFields().indexOf(field);
      if (fieldIndex === -1) {
        return;
      }
      fieldIndex += Utils.getDetailViewIndexOffset(this.options);
      this.$body.find(">tr[data-index=".concat(index, "]")).find(">td:eq(".concat(fieldIndex, ")")).replaceWith($(rowHtml).find(">td:eq(".concat(fieldIndex, ")")));
      this.initBodyEvent();
      this.initFooter();
      this.resetView();
      this.updateSelected();
    },
    updateCell: function updateCell(params) {
      if (!params.hasOwnProperty('index') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
        return;
      }
      var row = this.data[params.index];
      var originalIndex = this.options.data.indexOf(row);
      this.data[params.index][params.field] = params.value;
      this.options.data[originalIndex][params.field] = params.value;
      if (params.reinit === false) {
        this._updateCellOnly(params.field, params.index);
        return;
      }
      this.initSort();
      this.initBody(true);
    },
    updateCellByUniqueId: function updateCellByUniqueId(params) {
      var _this4 = this;
      var allParams = Array.isArray(params) ? params : [params];
      allParams.forEach(function (_ref2) {
        var id = _ref2.id,
          field = _ref2.field,
          value = _ref2.value;
        var row = _this4.getRowByUniqueId(id);
        var index = _this4.data.indexOf(row);
        var originalIndex = _this4.options.data.indexOf(row);
        if (!row || index === -1) {
          return;
        }
        _this4.data[index][field] = value;
        _this4.options.data[originalIndex][field] = value;
      });
      if (params.reinit === false) {
        this._updateCellOnly(params.field, this.data.indexOf(this.getRowByUniqueId(params.id)));
        return;
      }
      this.initSort();
      this.initBody(true);
    }
  };

  var DetailModule = {
    toggleDetailView: function toggleDetailView(index, _columnDetailFormatter) {
      var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"]', index));
      if ($tr.next().is('tr.detail-view')) {
        this.collapseRow(index);
      } else {
        this.expandRow(index, _columnDetailFormatter);
      }
      this.resetView();
    },
    expandRow: function expandRow(index, _columnDetailFormatter) {
      var row = this.data[index];
      var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"][data-has-detail-view]', index));
      if (this.options.detailViewIcon) {
        $tr.find('a.detail-icon').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose));
      }
      if ($tr.next().is('tr.detail-view')) {
        return;
      }
      $tr.after(Utils.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.children('td').length));
      var $element = $tr.next().find('td');
      var detailFormatter = _columnDetailFormatter || this.options.detailFormatter;
      var content = Utils.calculateObjectValue(this.options, detailFormatter, [index, row, $element], '');
      if ($element.length === 1) {
        $element.append(content);
      }
      this.trigger('expand-row', index, row, $element);
    },
    expandRowByUniqueId: function expandRowByUniqueId(uniqueId) {
      var row = this.getRowByUniqueId(uniqueId);
      if (!row) {
        return;
      }
      this.expandRow(this.data.indexOf(row));
    },
    collapseRow: function collapseRow(index) {
      var row = this.data[index];
      var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"][data-has-detail-view]', index));
      if (!$tr.next().is('tr.detail-view')) {
        return;
      }
      if (this.options.detailViewIcon) {
        $tr.find('a.detail-icon').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen));
      }
      this.trigger('collapse-row', index, row, $tr.next());
      $tr.next().remove();
    },
    collapseRowByUniqueId: function collapseRowByUniqueId(uniqueId) {
      var row = this.getRowByUniqueId(uniqueId);
      if (!row) {
        return;
      }
      this.collapseRow(this.data.indexOf(row));
    },
    expandAllRows: function expandAllRows() {
      var trs = this.$body.find('> tr[data-index][data-has-detail-view]');
      for (var i = 0; i < trs.length; i++) {
        this.expandRow($(trs[i]).data('index'));
      }
    },
    collapseAllRows: function collapseAllRows() {
      var trs = this.$body.find('> tr[data-index][data-has-detail-view]');
      for (var i = 0; i < trs.length; i++) {
        this.collapseRow($(trs[i]).data('index'));
      }
    }
  };

  var HeaderModule = {
    initHeader: function initHeader() {
      var _this = this;
      var visibleColumns = {};
      var headerHtml = [];
      this.header = {
        fields: [],
        styles: [],
        classes: [],
        formatters: [],
        detailFormatters: [],
        events: [],
        sorters: [],
        sortNames: [],
        cellStyles: [],
        searchables: []
      };
      Utils.updateFieldGroup(this.options.columns, this.columns);
      this.options.columns.forEach(function (columns, i) {
        var html = [];
        html.push("<tr".concat(Utils.sprintf(' class="%s"', _this._headerTrClasses[i]), " ").concat(Utils.sprintf(' style="%s"', _this._headerTrStyles[i]), ">"));
        var detailViewTemplate = '';
        if (i === 0 && Utils.hasDetailViewIcon(_this.options)) {
          var rowspan = _this.options.columns.length > 1 ? " rowspan=\"".concat(_this.options.columns.length, "\"") : '';
          detailViewTemplate = "<th class=\"detail\"".concat(rowspan, ">\n          <div class=\"fht-cell\"></div>\n          </th>");
        }
        if (detailViewTemplate && _this.options.detailViewAlign !== 'right') {
          html.push(detailViewTemplate);
        }
        columns.forEach(function (column, j) {
          var class_ = Utils.sprintf(' class="%s"', column.class);
          var unitWidth = column.widthUnit;
          var width = parseFloat(column.width);
          var columnHalign = column.halign ? column.halign : column.align;
          var halign = Utils.sprintf('text-align: %s; ', columnHalign);
          var align = Utils.sprintf('text-align: %s; ', column.align);
          var style = Utils.sprintf('vertical-align: %s; ', column.valign);
          style += Utils.sprintf('width: %s; ', (column.checkbox || column.radio) && !width ? !column.showSelectTitle ? '36px' : undefined : width ? width + unitWidth : undefined);
          if (typeof column.fieldIndex === 'undefined' && !column.visible) {
            return;
          }
          var headerStyle = Utils.calculateObjectValue(null, _this.options.headerStyle, [column]);
          var csses = [];
          var data_ = [];
          var classes = '';
          if (headerStyle && headerStyle.css) {
            for (var _i = 0, _Object$entries = Object.entries(headerStyle.css); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              csses.push("".concat(key, ": ").concat(value));
            }
          }
          if (headerStyle && headerStyle.classes) {
            classes = Utils.sprintf(' class="%s"', column['class'] ? [column['class'], headerStyle.classes].join(' ') : headerStyle.classes);
          }
          if (typeof column.fieldIndex !== 'undefined') {
            _this.header.fields[column.fieldIndex] = column.field;
            _this.header.styles[column.fieldIndex] = align + style;
            _this.header.classes[column.fieldIndex] = column.class;
            _this.header.formatters[column.fieldIndex] = column.formatter;
            _this.header.detailFormatters[column.fieldIndex] = column.detailFormatter;
            _this.header.events[column.fieldIndex] = column.events;
            _this.header.sorters[column.fieldIndex] = column.sorter;
            _this.header.sortNames[column.fieldIndex] = column.sortName;
            _this.header.cellStyles[column.fieldIndex] = column.cellStyle;
            _this.header.searchables[column.fieldIndex] = column.searchable;
            if (!column.visible) {
              return;
            }
            if (_this.options.cardView && !column.cardVisible) {
              return;
            }
            visibleColumns[column.field] = column;
          }
          if (Object.keys(column._data || {}).length > 0) {
            for (var _i2 = 0, _Object$entries2 = Object.entries(column._data); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                k = _Object$entries2$_i[0],
                v = _Object$entries2$_i[1];
              data_.push("data-".concat(k, "='").concat(_typeof(v) === 'object' ? JSON.stringify(v) : v, "'"));
            }
          }
          html.push("<th".concat(Utils.sprintf(' title="%s"', column.titleTooltip)), column.checkbox || column.radio ? Utils.sprintf(' class="bs-checkbox %s"', column['class'] || '') : classes || class_, Utils.sprintf(' style="%s"', halign + style + csses.join('; ') || undefined), Utils.sprintf(' rowspan="%s"', column.rowspan), Utils.sprintf(' colspan="%s"', column.colspan), Utils.sprintf(' scope="%s"', column.scope), Utils.sprintf(' data-field="%s"', column.field),
          // If `column` is not the first element of `this.options.columns[0]`, then className 'data-not-first-th' should be added.
          j === 0 && i > 0 ? ' data-not-first-th' : '', data_.length > 0 ? data_.join(' ') : '', '>');
          html.push(Utils.sprintf('<div class="th-inner %s">', _this.options.sortable && column.sortable ? "sortable".concat(columnHalign === 'center' ? ' sortable-center' : '', " both") : ''));
          var text = _this.options.escape && _this.options.escapeTitle ? Utils.escapeHTML(column.title) : column.title;
          var title = text;
          if (column.checkbox) {
            text = '';
            if (!_this.options.singleSelect && _this.options.checkboxHeader) {
              text = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>';
            }
            _this.header.stateField = column.field;
          }
          if (column.radio) {
            text = '';
            _this.header.stateField = column.field;
          }
          if (!text && column.showSelectTitle) {
            text += title;
          }
          html.push(text);
          html.push('</div>');
          html.push('<div class="fht-cell"></div>');
          html.push('</div>');
          html.push('</th>');
        });
        if (detailViewTemplate && _this.options.detailViewAlign === 'right') {
          html.push(detailViewTemplate);
        }
        html.push('</tr>');
        if (html.length > 3) {
          headerHtml.push(html.join(''));
        }
      });
      this.$header.html(headerHtml.join(''));
      this.$header.find('th[data-field]').each(function (i, el) {
        $(el).data(visibleColumns[$(el).data('field')]);
      });
      this.$container.off('click', '.th-inner').on('click', '.th-inner', function (e) {
        var $this = $(e.currentTarget);
        if (_this.options.detailView && !$this.parent().hasClass('bs-checkbox')) {
          if ($this.closest('.bootstrap-table')[0] !== _this.$container[0]) {
            return false;
          }
        }
        if (_this.options.sortable && $this.parent().data().sortable) {
          _this.onSort(e);
        }
      });
      var resizeEvent = Utils.getEventName('resize.bootstrap-table', this.$el.attr('id'));
      $(window).off(resizeEvent);
      if (!this.options.showHeader || this.options.cardView) {
        this.$header.hide();
        this.$tableHeader.hide();
        this.$tableLoading.css('top', 0);
      } else {
        this.$header.show();
        this.$tableHeader.show();
        this.$tableLoading.css('top', this.$header.outerHeight() + 1);
        // Assign the correct sortable arrow
        this.resetCaret();
        $(window).on(resizeEvent, function () {
          return _this.resetView();
        });
      }
      this.$selectAll = this.$header.find('[name="btSelectAll"]');
      this.$selectAll.off('click').on('click', function (e) {
        e.stopPropagation();
        var checked = $(e.currentTarget).prop('checked');
        _this[checked ? 'checkAll' : 'uncheckAll']();
        _this.updateSelected();
      });
    },
    getVisibleFields: function getVisibleFields() {
      var visibleFields = [];
      var _iterator = _createForOfIteratorHelper(this.header.fields),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          var column = this.columns[this.fieldsColumnsIndex[field]];
          if (!column || !column.visible || this.options.cardView && !column.cardVisible) {
            continue;
          }
          visibleFields.push(field);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return visibleFields;
    },
    resetHeader: function resetHeader() {
      var _this2 = this;
      // Fix #61: the hidden table reset header bug.
      // Fix bug: get $el.css('width') error sometime (height = 500)
      this._setDelayTimeout('header', function () {
        return _this2.fitHeader();
      }, this.$el.is(':hidden') ? 100 : 0);
    },
    fitHeader: function fitHeader() {
      var _this3 = this;
      if (this.$el.is(':hidden')) {
        this._setDelayTimeout('header', function () {
          return _this3.fitHeader();
        }, 100);
        return;
      }
      var fixedBody = this.$tableBody.get(0);
      var scrollWidth = this.hasScrollBar && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? Utils.getScrollBarWidth() : 0;
      this.$el.css('margin-top', -this.$header.outerHeight());
      var focused = this.$tableHeader.find(':focus');
      if (focused.length > 0) {
        var $th = focused.parents('th');
        if ($th.length > 0) {
          var dataField = $th.attr('data-field');
          if (dataField !== undefined) {
            var $headerTh = this.$header.find("[data-field='".concat(dataField, "']"));
            if ($headerTh.length > 0) {
              $headerTh.find(':input').addClass('focus-temp');
            }
          }
        }
      }
      this.$header_ = this.$header.clone(true, true);
      this.$selectAll_ = this.$header_.find('[name="btSelectAll"]');
      var $caption = this.$el.find('caption');
      var $fixedHeaderTable = this.$tableHeader.css('margin-right', scrollWidth).find('table').css('width', this.$el.outerWidth()).html('').attr('class', this.$el.attr('class'));
      if ($caption.length > 0) {
        $fixedHeaderTable.append($caption.clone(true, true));
      }
      $fixedHeaderTable.append(this.$header_);
      this.$tableLoading.css('width', this.$el.outerWidth());
      var focusedTemp = $('.focus-temp:visible:eq(0)');
      if (focusedTemp.length > 0) {
        focusedTemp.focus();
        this.$header.find('.focus-temp').removeClass('focus-temp');
      }

      // fix bug: $.data() is not working as expected after $.append()
      this.$header.find('th[data-field]').each(function (i, el) {
        _this3.$header_.find(Utils.sprintf('th[data-field="%s"]', $(el).data('field'))).data($(el).data());
      });
      var visibleFields = this.getVisibleFields();
      var $ths = this.$header_.find('th');
      var $tr = this.$body.find('>tr:not(.no-records-found,.virtual-scroll-top)').eq(0);
      while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
        $tr = $tr.next();
      }
      var trLength = $tr.find('> *').length;
      $tr.find('> *').each(function (i, el) {
        var $this = $(el);
        if (Utils.hasDetailViewIcon(_this3.options)) {
          if (i === 0 && _this3.options.detailViewAlign !== 'right' || i === trLength - 1 && _this3.options.detailViewAlign === 'right') {
            var $thDetail = $ths.filter('.detail');
            var _zoomWidth = $thDetail.innerWidth() - $thDetail.find('.fht-cell').width();
            $thDetail.find('.fht-cell').width($this.innerWidth() - _zoomWidth);
            return;
          }
        }
        var index = i - Utils.getDetailViewIndexOffset(_this3.options);
        var $th = _this3.$header_.find(Utils.sprintf('th[data-field="%s"]', visibleFields[index]));
        if ($th.length > 1) {
          $th = $($ths[$this[0].cellIndex]);
        }
        var zoomWidth = $th.innerWidth() - $th.find('.fht-cell').width();
        $th.find('.fht-cell').width($this.innerWidth() - zoomWidth);
      });
      this.horizontalScroll();
      this.trigger('post-header');
    },
    resetCaret: function resetCaret() {
      var _this$options = this.options,
        sortName = _this$options.sortName,
        sortOrder = _this$options.sortOrder;
      var ariaSort = sortOrder === 'asc' ? 'ascending' : 'descending';
      this.$header.find('th').each(function (i, th) {
        var isActive = $(th).data('field') === sortName;
        $(th).attr('aria-sort', isActive ? ariaSort : null).find('.sortable').removeClass('desc asc').addClass(isActive ? sortOrder : 'both');
      });
    },
    initFooter: function initFooter() {
      if (!this.options.showFooter || this.options.cardView) {
        // do nothing
        return;
      }
      var data = this.getData();
      var html = [];
      var detailTemplate = '';
      if (Utils.hasDetailViewIcon(this.options)) {
        detailTemplate = Utils.h('th', {
          class: 'detail'
        }, [Utils.h('div', {
          class: 'th-inner'
        }), Utils.h('div', {
          class: 'fht-cell'
        })]);
      }
      if (detailTemplate && this.options.detailViewAlign !== 'right') {
        html.push(detailTemplate);
      }
      var _iterator2 = _createForOfIteratorHelper(this.columns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var column = _step2.value;
          var hasData = this.footerData && this.footerData.length > 0;
          if (!column.visible || hasData && !(column.field in this.footerData[0])) {
            continue;
          }
          if (this.options.cardView && !column.cardVisible) {
            return;
          }
          var style = Utils.calculateObjectValue(null, column.footerStyle || this.options.footerStyle, [column]);
          var csses = style && style.css || {};
          var colspan = hasData && this.footerData[0]["_".concat(column.field, "_colspan")] || 0;
          var value = hasData && this.footerData[0][column.field] || '';
          value = Utils.calculateObjectValue(column, column.footerFormatter, [data, value], value);
          html.push(Utils.h('th', {
            class: [column['class'], style && style.classes],
            style: _objectSpread2({
              'text-align': column.falign ? column.falign : column.align,
              'vertical-align': column.valign
            }, csses),
            colspan: colspan || undefined
          }, [Utils.h('div', {
            class: 'th-inner'
          }, _toConsumableArray(Utils.htmlToNodes(value))), Utils.h('div', {
            class: 'fht-cell'
          })]));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (detailTemplate && this.options.detailViewAlign === 'right') {
        html.push(detailTemplate);
      }
      if (!this.options.height && !this.$tableFooter.length) {
        this.$el.append('<tfoot><tr></tr></tfoot>');
        this.$tableFooter = this.$el.find('tfoot');
      }
      if (!this.$tableFooter.find('tr').length) {
        this.$tableFooter.html('<table><thead><tr></tr></thead></table>');
      }
      this.$tableFooter.find('tr').html(html);
      this.trigger('post-footer', this.$tableFooter);
    },
    fitFooter: function fitFooter() {
      var _this4 = this;
      if (this.$el.is(':hidden')) {
        this._setDelayTimeout('footer', function () {
          return _this4.fitFooter();
        }, 100);
        return;
      }
      var fixedBody = this.$tableBody.get(0);
      var scrollWidth = this.hasScrollBar && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? Utils.getScrollBarWidth() : 0;
      this.$tableFooter.css('margin-right', scrollWidth).find('table').css('width', this.$el.outerWidth()).attr('class', this.$el.attr('class'));
      var $ths = this.$tableFooter.find('th');
      var $tr = this.$body.find('>tr:first-child:not(.no-records-found)');
      $ths.find('.fht-cell').width('auto');
      while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
        $tr = $tr.next();
      }
      var trLength = $tr.find('> *').length;
      $tr.find('> *').each(function (i, el) {
        var $this = $(el);
        if (Utils.hasDetailViewIcon(_this4.options)) {
          if (i === 0 && _this4.options.detailViewAlign === 'left' || i === trLength - 1 && _this4.options.detailViewAlign === 'right') {
            var $thDetail = $ths.filter('.detail');
            var _zoomWidth2 = $thDetail.innerWidth() - $thDetail.find('.fht-cell').width();
            $thDetail.find('.fht-cell').width($this.innerWidth() - _zoomWidth2);
            return;
          }
        }
        var $th = $ths.eq(i);
        var zoomWidth = $th.innerWidth() - $th.find('.fht-cell').width();
        $th.find('.fht-cell').width($this.innerWidth() - zoomWidth);
      });
      this.horizontalScroll();
    },
    horizontalScroll: function horizontalScroll() {
      var _this5 = this;
      // horizontal scroll event
      // TODO: it's probably better improving the layout than binding to scroll event
      this.$tableBody.off('scroll').on('scroll', function () {
        var scrollLeft = _this5.$tableBody.scrollLeft();
        if (_this5.options.showHeader && _this5.options.height) {
          _this5.$tableHeader.scrollLeft(scrollLeft);
        }
        if (_this5.options.showFooter && !_this5.options.cardView) {
          _this5.$tableFooter.scrollLeft(scrollLeft);
        }
        _this5.trigger('scroll-body', _this5.$tableBody);
      });
    },
    updateColumnTitle: function updateColumnTitle(params) {
      if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
        return;
      }
      this.columns[this.fieldsColumnsIndex[params.field]].title = this.options.escape && this.options.escapeTitle ? Utils.escapeHTML(params.title) : params.title;
      if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
        this.$header.find('th[data-field]').each(function (i, el) {
          if ($(el).data('field') === params.field) {
            $($(el).find('.th-inner')[0]).html(params.title);
            return false;
          }
        });
        this.resetView();
      }
    }
  };

  var PaginationModule = {
    initPagination: function initPagination() {
      var _this = this;
      var opts = this.options;
      if (!opts.pagination) {
        this.$pagination.hide();
        return;
      }
      this.$pagination.show();
      var html = [];
      var allSelected = false;
      var i;
      var from;
      var to;
      var $pageList;
      var $pre;
      var $next;
      var $number;
      var data = this.getData({
        includeHiddenRows: false
      });
      var pageList = opts.pageList;
      if (typeof pageList === 'string') {
        pageList = pageList.replace(/\[|\]| /g, '').toLowerCase().split(',');
      }
      pageList = pageList.map(function (value) {
        if (typeof value === 'string') {
          return value.toLowerCase() === opts.formatAllRows().toLowerCase() || ['all', 'unlimited'].includes(value.toLowerCase()) ? opts.formatAllRows() : +value;
        }
        return value;
      });
      this.paginationParts = opts.paginationParts;
      if (typeof this.paginationParts === 'string') {
        this.paginationParts = this.paginationParts.replace(/\[|\]| |'/g, '').split(',');
      }
      if (opts.sidePagination !== 'server') {
        opts.totalRows = data.length;
      }
      this.totalPages = 0;
      if (opts.totalRows) {
        if (opts.pageSize === opts.formatAllRows()) {
          opts.pageSize = opts.totalRows;
          allSelected = true;
        }
        this.totalPages = ~~((opts.totalRows - 1) / opts.pageSize) + 1;
        opts.totalPages = this.totalPages;
      }
      if (this.totalPages > 0 && opts.pageNumber > this.totalPages) {
        opts.pageNumber = this.totalPages;
      }
      this.pageFrom = (opts.pageNumber - 1) * opts.pageSize + 1;
      this.pageTo = opts.pageNumber * opts.pageSize;
      if (this.pageTo > opts.totalRows) {
        this.pageTo = opts.totalRows;
      }
      if (this.options.pagination && this.options.sidePagination !== 'server') {
        this.options.totalNotFiltered = this.options.data.length;
      }
      if (!this.options.showExtendedPagination) {
        this.options.totalNotFiltered = undefined;
      }
      if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
        html.push("<div class=\"".concat(this.constants.classes.pull, "-").concat(opts.paginationDetailHAlign, " pagination-detail\">"));
      }
      if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort')) {
        var totalRows = this.options.totalRows;
        if (this.options.sidePagination === 'client' && this.options.paginationLoadMore && !this._paginationLoaded && this.totalPages > 1) {
          totalRows += ' +';
        }
        var paginationInfo = this.paginationParts.includes('pageInfoShort') ? opts.formatDetailPagination(totalRows) : opts.formatShowingRows(this.pageFrom, this.pageTo, totalRows, opts.totalNotFiltered);
        html.push("<span class=\"pagination-info\">\n      ".concat(paginationInfo, "\n      </span>"));
      }
      if (this.paginationParts.includes('pageSize')) {
        html.push('<div class="page-list">');
        var pageNumber = ["<div class=\"".concat(this.constants.classes.paginationDropdown, "\">\n        <button class=\"").concat(this.constants.buttonsClass, " dropdown-toggle\" type=\"button\" ").concat(this.constants.dataToggle, "=\"dropdown\">\n        <span class=\"page-size\">\n        ").concat(allSelected ? opts.formatAllRows() : opts.pageSize, "\n        </span>\n        ").concat(this.constants.html.dropdownCaret, "\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];
        pageList.forEach(function (page, i) {
          if (!opts.smartDisplay || i === 0 || pageList[i - 1] < opts.totalRows || page === opts.formatAllRows()) {
            var active;
            if (allSelected) {
              active = page === opts.formatAllRows() ? _this.constants.classes.dropdownActive : '';
            } else {
              active = page === opts.pageSize ? _this.constants.classes.dropdownActive : '';
            }
            pageNumber.push(Utils.sprintf(_this.constants.html.pageDropdownItem, active, page));
          }
        });
        pageNumber.push("".concat(this.constants.html.pageDropdown[1], "</div>"));
        html.push(opts.formatRecordsPerPage(pageNumber.join('')));
      }
      if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
        html.push('</div></div>');
      }
      if (this.paginationParts.includes('pageList')) {
        html.push("<div class=\"".concat(this.constants.classes.pull, "-").concat(opts.paginationHAlign, " pagination\">"), Utils.sprintf(this.constants.html.pagination[0], Utils.sprintf(' pagination-%s', opts.iconSize)), Utils.sprintf(this.constants.html.paginationItem, ' page-pre', opts.formatSRPaginationPreText(), opts.paginationPreText));
        if (this.totalPages < opts.paginationSuccessivelySize) {
          from = 1;
          to = this.totalPages;
        } else {
          from = opts.pageNumber - opts.paginationPagesBySide;
          to = from + opts.paginationPagesBySide * 2;
        }
        if (opts.pageNumber < opts.paginationSuccessivelySize - 1) {
          to = opts.paginationSuccessivelySize;
        }
        if (opts.paginationSuccessivelySize > this.totalPages - from) {
          from = from - (opts.paginationSuccessivelySize - (this.totalPages - from)) + 1;
        }
        if (from < 1) {
          from = 1;
        }
        if (to > this.totalPages) {
          to = this.totalPages;
        }
        var middleSize = Math.round(opts.paginationPagesBySide / 2);
        var pageItem = function pageItem(i) {
          var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          return Utils.sprintf(_this.constants.html.paginationItem, classes + (i === opts.pageNumber ? " ".concat(_this.constants.classes.paginationActive) : ''), opts.formatSRPaginationPageText(i), i);
        };
        if (from > 1) {
          var max = opts.paginationPagesBySide;
          if (max >= from) max = from - 1;
          for (i = 1; i <= max; i++) {
            html.push(pageItem(i));
          }
          if (from - 1 === max + 1) {
            i = from - 1;
            html.push(pageItem(i));
          } else if (from - 1 > max) {
            if (from - opts.paginationPagesBySide * 2 > opts.paginationPagesBySide && opts.paginationUseIntermediate) {
              i = Math.round((from - middleSize) / 2 + middleSize);
              html.push(pageItem(i, ' page-intermediate'));
            } else {
              html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-first-separator disabled', '', '...'));
            }
          }
        }
        for (i = from; i <= to; i++) {
          html.push(pageItem(i));
        }
        if (this.totalPages > to) {
          var min = this.totalPages - (opts.paginationPagesBySide - 1);
          if (to >= min) min = to + 1;
          if (to + 1 === min - 1) {
            i = to + 1;
            html.push(pageItem(i));
          } else if (min > to + 1) {
            if (this.totalPages - to > opts.paginationPagesBySide * 2 && opts.paginationUseIntermediate) {
              i = Math.round((this.totalPages - middleSize - to) / 2 + to);
              html.push(pageItem(i, ' page-intermediate'));
            } else {
              html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-last-separator disabled', '', '...'));
            }
          }
          for (i = min; i <= this.totalPages; i++) {
            html.push(pageItem(i));
          }
        }
        html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-next', opts.formatSRPaginationNextText(), opts.paginationNextText));
        html.push(this.constants.html.pagination[1], '</div>');
      }
      this.$pagination.html(html.join(''));
      var dropupClass = ['bottom', 'both'].includes(opts.paginationVAlign) ? " ".concat(this.constants.classes.dropup) : '';
      this.$pagination.last().find('.page-list > div').addClass(dropupClass);
      if (!opts.onlyInfoPagination) {
        $pageList = this.$pagination.find('.page-list a');
        $pre = this.$pagination.find('.page-pre');
        $next = this.$pagination.find('.page-next');
        $number = this.$pagination.find('.page-item').not('.page-next, .page-pre, .page-last-separator, .page-first-separator');
        if (this.totalPages <= 1) {
          this.$pagination.find('div.pagination').hide();
        }
        if (opts.smartDisplay) {
          if (pageList.length < 2 || opts.totalRows <= pageList[0]) {
            this.$pagination.find('div.page-list').hide();
          }
        }

        // when data is empty, hide the pagination
        this.$pagination[this.getData().length ? 'show' : 'hide']();
        if (!opts.paginationLoop) {
          if (opts.pageNumber === 1) {
            $pre.addClass('disabled');
          }
          if (opts.pageNumber === this.totalPages) {
            $next.addClass('disabled');
          }
        }
        if (allSelected) {
          opts.pageSize = opts.formatAllRows();
        }
        $pageList.off('click').on('click', function (e) {
          return _this.onPageListChange(e);
        });
        $pre.off('click').on('click', function (e) {
          return _this.onPagePre(e);
        });
        $next.off('click').on('click', function (e) {
          return _this.onPageNext(e);
        });
        $number.off('click').on('click', function (e) {
          return _this.onPageNumber(e);
        });
      }
    },
    updatePagination: function updatePagination(event) {
      // Fix #171: IE disabled button can be clicked bug.
      if (event && $(event.currentTarget).hasClass('disabled')) {
        return;
      }
      if (!this.options.maintainMetaData) {
        this.resetRows();
      }
      this.initPagination();
      this.trigger('page-change', this.options.pageNumber, this.options.pageSize);
      if (this.options.sidePagination === 'server' || this.options.sidePagination === 'client' && this.options.paginationLoadMore && !this._paginationLoaded && this.options.pageNumber === this.totalPages) {
        this.initServer();
      } else {
        this.initBody();
      }
    },
    onPageListChange: function onPageListChange(event) {
      event.preventDefault();
      var $this = $(event.currentTarget);
      $this.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive);
      this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +$this.text();
      this.$toolbar.find('.page-size').text(this.options.pageSize);
      this.updatePagination(event);
      return false;
    },
    onPagePre: function onPagePre(event) {
      if ($(event.target).hasClass('disabled')) {
        return;
      }
      event.preventDefault();
      if (this.options.pageNumber - 1 === 0) {
        this.options.pageNumber = this.options.totalPages;
      } else {
        this.options.pageNumber--;
      }
      this.updatePagination(event);
      return false;
    },
    onPageNext: function onPageNext(event) {
      if ($(event.target).hasClass('disabled')) {
        return;
      }
      event.preventDefault();
      if (this.options.pageNumber + 1 > this.options.totalPages) {
        this.options.pageNumber = 1;
      } else {
        this.options.pageNumber++;
      }
      this.updatePagination(event);
      return false;
    },
    onPageNumber: function onPageNumber(event) {
      event.preventDefault();
      if (this.options.pageNumber === +$(event.currentTarget).text()) {
        return;
      }
      this.options.pageNumber = +$(event.currentTarget).text();
      this.updatePagination(event);
      return false;
    },
    selectPage: function selectPage(page) {
      if (page > 0 && page <= this.options.totalPages) {
        this.options.pageNumber = page;
        this.updatePagination();
      }
    },
    prevPage: function prevPage() {
      if (this.options.pageNumber > 1) {
        this.options.pageNumber--;
        this.updatePagination();
      }
    },
    nextPage: function nextPage() {
      if (this.options.pageNumber < this.options.totalPages) {
        this.options.pageNumber++;
        this.updatePagination();
      }
    },
    togglePagination: function togglePagination() {
      this.options.pagination = !this.options.pagination;
      var icon = this.options.showButtonIcons ? this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp : '';
      var text = this.options.showButtonText ? this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown() : '';
      this.$toolbar.find('button[name="paginationSwitch"]').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(text));
      this.updatePagination();
      this.trigger('toggle-pagination', this.options.pagination);
    }
  };

  var SearchModule = {
    initSearchText: function initSearchText() {
      if (this.options.search) {
        this.searchText = '';
        if (this.options.searchText !== '') {
          var $search = Utils.getSearchInput(this);
          $search.val(this.options.searchText);
          this.onSearch({
            currentTarget: $search,
            firedByInitSearchText: true
          });
        }
      }
    },
    initSearch: function initSearch() {
      var _this = this;
      this.filterOptions = this.filterOptions || this.options.filterOptions;
      if (this.options.sidePagination !== 'server') {
        if (this.options.customSearch) {
          this.data = Utils.calculateObjectValue(this.options, this.options.customSearch, [this.options.data, this.searchText, this.filterColumns]);
          if (this.options.sortReset) {
            this.unsortedData = _toConsumableArray(this.data);
          }
          this.initSort();
          return;
        }
        var rawSearchText = this.searchText && (this.fromHtml ? Utils.escapeHTML(this.searchText) : this.searchText);
        var searchText = rawSearchText ? rawSearchText.toLowerCase() : '';
        var f = Utils.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
        if (this.options.searchAccentNeutralise) {
          searchText = Utils.normalizeAccent(searchText);
        }

        // Check filter
        if (typeof this.filterOptions.filterAlgorithm === 'function') {
          this.data = this.options.data.filter(function (item) {
            return _this.filterOptions.filterAlgorithm.apply(null, [item, f]);
          });
        } else if (typeof this.filterOptions.filterAlgorithm === 'string') {
          this.data = f ? this.options.data.filter(function (item) {
            var filterAlgorithm = _this.filterOptions.filterAlgorithm;
            if (filterAlgorithm === 'and') {
              for (var key in f) {
                if (Array.isArray(f[key]) && !f[key].includes(item[key]) || !Array.isArray(f[key]) && item[key] !== f[key]) {
                  return false;
                }
              }
            } else if (filterAlgorithm === 'or') {
              var match = false;
              for (var _key in f) {
                if (Array.isArray(f[_key]) && f[_key].includes(item[_key]) || !Array.isArray(f[_key]) && item[_key] === f[_key]) {
                  match = true;
                }
              }
              return match;
            }
            return true;
          }) : _toConsumableArray(this.options.data);
        }
        var visibleFields = this.getVisibleFields();
        this.data = searchText ? this.data.filter(function (item, i) {
          for (var j = 0; j < _this.header.fields.length; j++) {
            if (!_this.header.searchables[j] || _this.options.visibleSearch && visibleFields.indexOf(_this.header.fields[j]) === -1) {
              continue;
            }
            var key = Utils.isNumeric(_this.header.fields[j]) ? parseInt(_this.header.fields[j], 10) : _this.header.fields[j];
            var column = _this.columns[_this.fieldsColumnsIndex[key]];
            var value = void 0;
            if (typeof key === 'string' && !item.hasOwnProperty(key)) {
              value = item;
              var props = key.split('.');
              for (var _i = 0; _i < props.length; _i++) {
                if (value[props[_i]] === null || value[props[_i]] === undefined) {
                  value = null;
                  break;
                } else {
                  value = value[props[_i]];
                }
              }
            } else {
              value = item[key];
            }
            if (_this.options.searchAccentNeutralise) {
              value = Utils.normalizeAccent(value);
            }

            // Fix #142: respect searchFormatter boolean
            if (column && column.searchFormatter) {
              value = Utils.calculateObjectValue(column, _this.header.formatters[j], [value, item, i, column.field], value);
              if (_this.header.formatters[j] && typeof value !== 'number') {
                // search innerText
                value = $('<div>').html(value).text();
              }
            }
            if (typeof value === 'string' || typeof value === 'number') {
              if (_this.options.strictSearch) {
                if ("".concat(value).toLowerCase() === searchText) {
                  return true;
                }
              } else if (_this.options.regexSearch) {
                if (Utils.regexCompare(value, rawSearchText)) {
                  return true;
                }
              } else {
                var largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(-?\d+)?|(-?\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm;
                var matches = largerSmallerEqualsRegex.exec(_this.searchText);
                var comparisonCheck = false;
                if (matches) {
                  var operator = matches[1] || "".concat(matches[5], "l");
                  var comparisonValue = matches[2] || matches[3];
                  var int = parseInt(value, 10);
                  var comparisonInt = parseInt(comparisonValue, 10);
                  switch (operator) {
                    case '>':
                    case '<l':
                      comparisonCheck = int > comparisonInt;
                      break;
                    case '<':
                    case '>l':
                      comparisonCheck = int < comparisonInt;
                      break;
                    case '<=':
                    case '=<':
                    case '>=l':
                    case '=>l':
                      comparisonCheck = int <= comparisonInt;
                      break;
                    case '>=':
                    case '=>':
                    case '<=l':
                    case '=<l':
                      comparisonCheck = int >= comparisonInt;
                      break;
                  }
                }
                if (comparisonCheck || "".concat(value).toLowerCase().includes(searchText)) {
                  return true;
                }
              }
            }
          }
          return false;
        }) : this.data;
        if (this.options.sortReset) {
          this.unsortedData = _toConsumableArray(this.data);
        }
        this.initSort();
      }
    },
    onSearch: function onSearch() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        currentTarget = _ref.currentTarget,
        firedByInitSearchText = _ref.firedByInitSearchText;
      var overwriteSearchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (currentTarget !== undefined && $(currentTarget).length && overwriteSearchText) {
        var text = $(currentTarget).val().trim();
        if (this.options.trimOnSearch && $(currentTarget).val() !== text) {
          $(currentTarget).val(text);
        }
        if (this.searchText === text) {
          return;
        }
        var $searchInput = Utils.getSearchInput(this);
        var $currentTarget = currentTarget instanceof jQuery ? currentTarget : $(currentTarget);
        if ($currentTarget.is($searchInput) || $currentTarget.hasClass('search-input')) {
          this.searchText = text;
          this.options.searchText = text;
        }
      }
      if (!firedByInitSearchText) {
        this.options.pageNumber = 1;
      }
      this.initSearch();
      if (firedByInitSearchText) {
        if (this.options.sidePagination === 'client') {
          this.updatePagination();
        }
      } else {
        this.updatePagination();
      }
      this.trigger('search', this.searchText);
    },
    resetSearch: function resetSearch(text) {
      var $search = Utils.getSearchInput(this);
      var textToUse = text || '';
      $search.val(textToUse);
      this.searchText = textToUse;
      this.options.searchText = textToUse;
      this.onSearch({
        currentTarget: $search
      }, false);
    },
    filterBy: function filterBy(columns, options) {
      this.filterOptions = Utils.isEmptyObject(options) ? this.options.filterOptions : Utils.extend({}, this.options.filterOptions, options);
      this.filterColumns = Utils.isEmptyObject(columns) ? {} : columns;
      this.options.pageNumber = 1;
      this.initSearch();
      this.updatePagination();
    }
  };

  var ToolbarModule = {
    initToolbar: function initToolbar() {
      var _this = this;
      var opts = this.options;
      var html = [];
      var timeoutId = 0;
      var $keepOpen;
      var switchableCount = 0;
      if (this.$toolbar.find('.bs-bars').children().length) {
        $('body').append($(opts.toolbar));
      }
      this.$toolbar.html('');
      if (typeof opts.toolbar === 'string' || _typeof(opts.toolbar) === 'object') {
        $(Utils.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, opts.toolbarAlign)).appendTo(this.$toolbar).append($(opts.toolbar));
      }

      // showColumns, showToggle, showRefresh
      html = ["<div class=\"".concat(['columns', "columns-".concat(opts.buttonsAlign), this.constants.classes.buttonsGroup, "".concat(this.constants.classes.pull, "-").concat(opts.buttonsAlign)].join(' '), "\">")];
      if (typeof opts.buttonsOrder === 'string') {
        opts.buttonsOrder = opts.buttonsOrder.replace(/\[|\]| |'/g, '').split(',');
      }
      this.buttons = Object.assign(this.buttons, {
        paginationSwitch: {
          text: opts.pagination ? opts.formatPaginationSwitchUp() : opts.formatPaginationSwitchDown(),
          icon: opts.pagination ? opts.icons.paginationSwitchDown : opts.icons.paginationSwitchUp,
          render: false,
          event: this.togglePagination,
          attributes: {
            'aria-label': opts.formatPaginationSwitch(),
            title: opts.formatPaginationSwitch()
          }
        },
        refresh: {
          text: opts.formatRefresh(),
          icon: opts.icons.refresh,
          render: false,
          event: this.refresh,
          attributes: {
            'aria-label': opts.formatRefresh(),
            title: opts.formatRefresh()
          }
        },
        toggle: {
          text: opts.formatToggleOn(),
          icon: opts.icons.toggleOff,
          render: false,
          event: this.toggleView,
          attributes: {
            'aria-label': opts.formatToggleOn(),
            title: opts.formatToggleOn()
          }
        },
        fullscreen: {
          text: opts.formatFullscreen(),
          icon: opts.icons.fullscreen,
          render: false,
          event: this.toggleFullscreen,
          attributes: {
            'aria-label': opts.formatFullscreen(),
            title: opts.formatFullscreen()
          }
        },
        columns: {
          render: false,
          html: function html() {
            var html = [];
            html.push("<div class=\"keep-open ".concat(_this.constants.classes.buttonsDropdown, "\">\n            <button class=\"").concat(_this.constants.buttonsClass, " dropdown-toggle\" type=\"button\" ").concat(_this.constants.dataToggle, "=\"dropdown\"\n            aria-label=\"").concat(opts.formatColumns(), "\" ").concat(opts.buttonsAttributeTitle, "=\"").concat(opts.formatColumns(), "\">\n            ").concat(opts.showButtonIcons ? Utils.sprintf(_this.constants.html.icon, opts.iconsPrefix, opts.icons.columns) : '', "\n            ").concat(opts.showButtonText ? opts.formatColumns() : '', "\n            ").concat(_this.constants.html.dropdownCaret, "\n            </button>\n            ").concat(_this.constants.html.toolbarDropdown[0]));
            if (opts.showColumnsSearch) {
              html.push(Utils.sprintf(_this.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">', _this.constants.classes.input, opts.formatSearch())));
              html.push(_this.constants.html.toolbarDropdownSeparator);
            }
            if (opts.showColumnsToggleAll) {
              var allFieldsVisible = _this.getVisibleColumns().length === _this.columns.filter(function (column) {
                return !_this.isSelectionColumn(column);
              }).length;
              html.push(Utils.sprintf(_this.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>', allFieldsVisible ? 'checked="checked"' : '', opts.formatColumnsToggleAll())));
              html.push(_this.constants.html.toolbarDropdownSeparator);
            }
            var visibleColumns = 0;
            _this.columns.forEach(function (column) {
              if (column.visible) {
                visibleColumns++;
              }
            });
            _this.columns.forEach(function (column, i) {
              if (_this.isSelectionColumn(column)) {
                return;
              }
              if (opts.cardView && !column.cardVisible) {
                return;
              }
              var checked = column.visible ? ' checked="checked"' : '';
              var disabled = visibleColumns <= opts.minimumCountColumns && checked ? ' disabled="disabled"' : '';
              if (column.switchable) {
                html.push(Utils.sprintf(_this.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>', column.field, i, checked, disabled, column.switchableLabel || column.title)));
                switchableCount++;
              }
            });
            html.push(_this.constants.html.toolbarDropdown[1], '</div>');
            return html.join('');
          }
        }
      });
      var buttonsHtml = {};
      for (var _i = 0, _Object$entries = Object.entries(this.buttons); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          buttonName = _Object$entries$_i[0],
          buttonConfig = _Object$entries$_i[1];
        var buttonHtml = void 0;
        if (buttonConfig.hasOwnProperty('html')) {
          if (typeof buttonConfig.html === 'function') {
            buttonHtml = buttonConfig.html();
          } else if (typeof buttonConfig.html === 'string') {
            buttonHtml = buttonConfig.html;
          }
        } else {
          var buttonClass = this.constants.buttonsClass;
          if (buttonConfig.hasOwnProperty('attributes') && buttonConfig.attributes.class) {
            buttonClass += " ".concat(buttonConfig.attributes.class);
          }
          buttonHtml = "<button class=\"".concat(buttonClass, "\" type=\"button\" name=\"").concat(buttonName, "\"");
          if (buttonConfig.hasOwnProperty('attributes')) {
            for (var _i2 = 0, _Object$entries2 = Object.entries(buttonConfig.attributes); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                attributeName = _Object$entries2$_i[0],
                value = _Object$entries2$_i[1];
              if (attributeName === 'class') {
                continue;
              }
              var attribute = attributeName === 'title' ? this.options.buttonsAttributeTitle : attributeName;
              buttonHtml += " ".concat(attribute, "=\"").concat(value, "\"");
            }
          }
          buttonHtml += '>';
          if (opts.showButtonIcons && buttonConfig.hasOwnProperty('icon')) {
            buttonHtml += "".concat(Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, buttonConfig.icon), " ");
          }
          if (opts.showButtonText && buttonConfig.hasOwnProperty('text')) {
            buttonHtml += buttonConfig.text;
          }
          buttonHtml += '</button>';
        }
        buttonsHtml[buttonName] = buttonHtml;
        var optionName = "show".concat(buttonName.charAt(0).toUpperCase()).concat(buttonName.substring(1));
        var showOption = opts[optionName];
        if ((!buttonConfig.hasOwnProperty('render') || buttonConfig.hasOwnProperty('render') && buttonConfig.render) && (showOption === undefined || showOption === true)) {
          opts[optionName] = true;
        }
        if (!opts.buttonsOrder.includes(buttonName)) {
          opts.buttonsOrder.push(buttonName);
        }
      }

      // Adding the button html to the final toolbar html when the showOption is true
      var _iterator = _createForOfIteratorHelper(opts.buttonsOrder),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var button = _step.value;
          var _showOption = opts["show".concat(button.charAt(0).toUpperCase()).concat(button.substring(1))];
          if (_showOption) {
            html.push(buttonsHtml[button]);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      html.push('</div>');

      // Fix #188: this.showToolbar is for extensions
      if (this.showToolbar || html.length > 2) {
        this.$toolbar.append(html.join(''));
      }
      var _loop = function _loop() {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          buttonName = _Object$entries3$_i[0],
          buttonConfig = _Object$entries3$_i[1];
        if (buttonConfig.hasOwnProperty('event')) {
          if (typeof buttonConfig.event === 'function' || typeof buttonConfig.event === 'string') {
            var event = typeof buttonConfig.event === 'string' ? window[buttonConfig.event] : buttonConfig.event;
            _this.$toolbar.find("button[name=\"".concat(buttonName, "\"]")).off('click').on('click', function () {
              return event.call(_this);
            });
            return 1; // continue
          }
          var _loop2 = function _loop2() {
            var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
              eventType = _Object$entries4$_i[0],
              eventFunction = _Object$entries4$_i[1];
            var event = typeof eventFunction === 'string' ? window[eventFunction] : eventFunction;
            _this.$toolbar.find("button[name=\"".concat(buttonName, "\"]")).off(eventType).on(eventType, function () {
              return event.call(_this);
            });
          };
          for (var _i4 = 0, _Object$entries4 = Object.entries(buttonConfig.event); _i4 < _Object$entries4.length; _i4++) {
            _loop2();
          }
        }
      };
      for (var _i3 = 0, _Object$entries3 = Object.entries(this.buttons); _i3 < _Object$entries3.length; _i3++) {
        if (_loop()) continue;
      }
      if (opts.showColumns) {
        $keepOpen = this.$toolbar.find('.keep-open');
        var $checkboxes = $keepOpen.find('input[type="checkbox"]:not(".toggle-all")');
        var $toggleAll = $keepOpen.find('input[type="checkbox"].toggle-all');
        if (switchableCount <= opts.minimumCountColumns) {
          $keepOpen.find('input').prop('disabled', true);
        }
        $keepOpen.find('li, label').off('click').on('click', function (e) {
          e.stopImmediatePropagation();
        });
        $checkboxes.off('click').on('click', function (_ref) {
          var currentTarget = _ref.currentTarget;
          var $this = $(currentTarget);
          _this._toggleColumn($this.val(), $this.prop('checked'), false);
          _this.trigger('column-switch', $this.data('field'), $this.prop('checked'));
          $toggleAll.prop('checked', $checkboxes.filter(':checked').length === _this.columns.filter(function (column) {
            return !_this.isSelectionColumn(column);
          }).length);
        });
        $toggleAll.off('click').on('click', function (_ref2) {
          var currentTarget = _ref2.currentTarget;
          _this._toggleAllColumns($(currentTarget).prop('checked'));
          _this.trigger('column-switch-all', $(currentTarget).prop('checked'));
        });
        if (opts.showColumnsSearch) {
          var $columnsSearch = $keepOpen.find('[name="columnsSearch"]');
          var $listItems = $keepOpen.find('.dropdown-item-marker');
          $columnsSearch.on('keyup paste change', function (_ref3) {
            var currentTarget = _ref3.currentTarget;
            var $this = $(currentTarget);
            var searchValue = $this.val().toLowerCase();
            $listItems.show();
            $checkboxes.each(function (i, el) {
              var $checkbox = $(el);
              var $listItem = $checkbox.parents('.dropdown-item-marker');
              var text = $listItem.text().toLowerCase();
              if (!text.includes(searchValue)) {
                $listItem.hide();
              }
            });
          });
        }
      }
      var handleInputEvent = function handleInputEvent($searchInput) {
        var eventTriggers = $searchInput.is('select') ? 'change' : 'keyup drop blur mouseup';
        $searchInput.off(eventTriggers).on(eventTriggers, function (event) {
          if (opts.searchOnEnterKey && event.keyCode !== 13) {
            return;
          }
          if ([37, 38, 39, 40].includes(event.keyCode)) {
            return;
          }
          clearTimeout(timeoutId); // doesn't matter if it's 0
          timeoutId = setTimeout(function () {
            _this.onSearch({
              currentTarget: event.currentTarget
            });
          }, opts.searchTimeOut);
        });
      };

      // Fix #4516: this.showSearchClearButton is for extensions
      if ((opts.search || this.showSearchClearButton) && typeof opts.searchSelector !== 'string') {
        html = [];
        var showSearchButton = Utils.sprintf(this.constants.html.searchButton, this.constants.buttonsClass, opts.formatSearch(), opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.search) : '', opts.showButtonText ? opts.formatSearch() : '');
        var showSearchClearButton = Utils.sprintf(this.constants.html.searchClearButton, this.constants.buttonsClass, opts.formatClearSearch(), opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.clearSearch) : '', opts.showButtonText ? opts.formatClearSearch() : '');
        var searchInputHtml = "<input class=\"".concat(this.constants.classes.input, "\n        ").concat(Utils.sprintf(' %s%s', this.constants.classes.inputPrefix, opts.iconSize), "\n        search-input\" type=\"search\" aria-label=\"").concat(opts.formatSearch(), "\" placeholder=\"").concat(opts.formatSearch(), "\" autocomplete=\"off\">");
        var searchInputFinalHtml = searchInputHtml;
        if (opts.showSearchButton || opts.showSearchClearButton) {
          var _buttonsHtml = (opts.showSearchButton ? showSearchButton : '') + (opts.showSearchClearButton ? showSearchClearButton : '');
          searchInputFinalHtml = opts.search ? Utils.sprintf(this.constants.html.inputGroup, searchInputHtml, _buttonsHtml) : _buttonsHtml;
        }
        html.push(Utils.sprintf("\n        <div class=\"".concat(this.constants.classes.pull, "-").concat(opts.searchAlign, " search ").concat(this.constants.classes.inputGroup, "\">\n          %s\n        </div>\n      "), searchInputFinalHtml));
        this.$toolbar.append(html.join(''));
        var $searchInput = Utils.getSearchInput(this);
        if (opts.showSearchButton) {
          this.$toolbar.find('.search button[name=search]').off('click').on('click', function () {
            clearTimeout(timeoutId); // doesn't matter if it's 0
            timeoutId = setTimeout(function () {
              _this.onSearch({
                currentTarget: $searchInput
              });
            }, opts.searchTimeOut);
          });
          if (opts.searchOnEnterKey) {
            handleInputEvent($searchInput);
          }
        } else {
          handleInputEvent($searchInput);
        }
        if (opts.showSearchClearButton) {
          this.$toolbar.find('.search button[name=clearSearch]').click(function () {
            _this.resetSearch();
          });
        }
      } else if (typeof opts.searchSelector === 'string') {
        handleInputEvent(Utils.getSearchInput(this));
      }
    },
    refresh: function refresh(params) {
      if (params && params.url) {
        this.options.url = params.url;
      }
      if (params && params.pageNumber) {
        this.options.pageNumber = params.pageNumber;
      }
      if (params && params.pageSize) {
        this.options.pageSize = params.pageSize;
      }
      if (params && params.query) {
        this.options.url = Utils.addQueryToUrl(this.options.url, params.query);
      }
      this.trigger('refresh', this.initServer(params && params.silent));
    },
    toggleView: function toggleView() {
      this.options.cardView = !this.options.cardView;
      this.initHeader();
      var icon = this.options.showButtonIcons ? this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff : '';
      var text = this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn();
      this.$toolbar.find('button[name="toggle"]').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(this.options.showButtonText ? text : '')).attr('aria-label', text).attr(this.options.buttonsAttributeTitle, text);
      this.initBody();
      this.trigger('toggle', this.options.cardView);
    },
    toggleFullscreen: function toggleFullscreen() {
      this.$el.closest('.bootstrap-table').toggleClass('fullscreen');
      this.resetView();
    }
  };

  var BootstrapTable = /*#__PURE__*/function () {
    function BootstrapTable(el, options) {
      _classCallCheck(this, BootstrapTable);
      this.options = options;
      this.$el = $(el);
      this.$el_ = this.$el.clone();
      this._timeoutId = {
        header: 0,
        footer: 0
      };
    }
    return _createClass(BootstrapTable, [{
      key: "init",
      value: function init() {
        this.initConstants();
        this.initLocale();
        this.initContainer();
        this.initTable();
        this.initHeader();
        this.initData();
        this.initHiddenRows();
        this.initToolbar();
        this.initPagination();
        this.initBody();
        this.initSearchText();
        this.initServer();
      }
    }, {
      key: "trigger",
      value: function trigger(_name) {
        var _this$options, _this$options2;
        var name = "".concat(_name, ".bs.table");
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_this$options = this.options)[BootstrapTable.EVENTS[name]].apply(_this$options, [].concat(args, [this]));
        this.$el.trigger($.Event(name, {
          sender: this
        }), args);
        (_this$options2 = this.options).onAll.apply(_this$options2, [name].concat([].concat(args, [this])));
        this.$el.trigger($.Event('all.bs.table', {
          sender: this
        }), [name, args]);
      }
    }, {
      key: "getOptions",
      value: function getOptions() {
        // deep copy and remove data
        var options = Utils.extend({}, this.options);
        delete options.data;
        return Utils.extend(true, {}, options);
      }
    }, {
      key: "refreshOptions",
      value: function refreshOptions(options) {
        // If the objects are equivalent then avoid the call of destroy / init methods
        if (Utils.compareObjects(this.options, options, true)) {
          return;
        }
        this.optionsColumnsChanged = !!options.columns;
        this.options = Utils.extend(this.options, options);
        this.trigger('refresh-options', this.options);
        this.destroy();
        this.init();
      }
    }, {
      key: "_setDelayTimeout",
      value: function _setDelayTimeout(type, callback, delay) {
        clearTimeout(this._timeoutId[type]);
        this._timeoutId[type] = setTimeout(callback, delay);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        for (var _i = 0, _Object$keys = Object.keys(this._timeoutId); _i < _Object$keys.length; _i++) {
          var type = _Object$keys[_i];
          clearTimeout(this._timeoutId[type]);
        }
        this.$el.insertBefore(this.$container);
        $(this.options.toolbar).insertBefore(this.$el);
        this.$container.next().remove();
        this.$container.remove();
        this.$el.html(this.$el_.html()).css('margin-top', '0').attr('class', this.$el_.attr('class') || ''); // reset the class

        var resizeEvent = Utils.getEventName('resize.bootstrap-table', this.$el.attr('id'));
        $(window).off(resizeEvent);
      }
    }, {
      key: "updateFormatText",
      value: function updateFormatText(formatName, text) {
        if (!/^format/.test(formatName) || !this.options[formatName]) {
          return;
        }
        if (typeof text === 'string') {
          this.options[formatName] = function () {
            return text;
          };
        } else if (typeof text === 'function') {
          this.options[formatName] = text;
        }
        this.initToolbar();
        this.initPagination();
        this.initBody();
      }
    }]);
  }();
  Object.assign(BootstrapTable.prototype, InitializationModule);
  Object.assign(BootstrapTable.prototype, HeaderModule);
  Object.assign(BootstrapTable.prototype, DataModule);
  Object.assign(BootstrapTable.prototype, ToolbarModule);
  Object.assign(BootstrapTable.prototype, SearchModule);
  Object.assign(BootstrapTable.prototype, PaginationModule);
  Object.assign(BootstrapTable.prototype, BodyModule);
  Object.assign(BootstrapTable.prototype, CheckModule);
  Object.assign(BootstrapTable.prototype, DetailModule);
  BootstrapTable.VERSION = Constants.VERSION;
  BootstrapTable.DEFAULTS = Constants.DEFAULTS;
  BootstrapTable.LOCALES = Constants.LOCALES;
  BootstrapTable.COLUMN_DEFAULTS = Constants.COLUMN_DEFAULTS;
  BootstrapTable.METHODS = Constants.METHODS;
  BootstrapTable.EVENTS = Constants.EVENTS;

  // BOOTSTRAP TABLE PLUGIN DEFINITION
  // =======================

  $.BootstrapTable = BootstrapTable;
  $.fn.bootstrapTable = function (option) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var value;
    this.each(function (i, el) {
      var data = $(el).data('bootstrap.table');
      if (typeof option === 'string') {
        var _data;
        if (!Constants.METHODS.includes(option)) {
          throw new Error("Unknown method: ".concat(option));
        }
        if (!data) {
          return;
        }
        value = (_data = data)[option].apply(_data, args);
        if (option === 'destroy') {
          $(el).removeData('bootstrap.table');
        }
        return;
      }
      if (data) {
        console.warn('You cannot initialize the table more than once!');
        return;
      }
      var options = Utils.extend(true, {}, BootstrapTable.DEFAULTS, $(el).data(), _typeof(option) === 'object' && option);
      data = new $.BootstrapTable(el, options);
      $(el).data('bootstrap.table', data);
      data.init();
    });
    return typeof value === 'undefined' ? this : value;
  };
  $.fn.bootstrapTable.Constructor = BootstrapTable;
  $.fn.bootstrapTable.theme = Constants.THEME;
  $.fn.bootstrapTable.VERSION = Constants.VERSION;
  $.fn.bootstrapTable.icons = Constants.ICONS;
  $.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS;
  $.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS;
  $.fn.bootstrapTable.events = BootstrapTable.EVENTS;
  $.fn.bootstrapTable.locales = BootstrapTable.LOCALES;
  $.fn.bootstrapTable.methods = BootstrapTable.METHODS;
  $.fn.bootstrapTable.utils = Utils;

  // BOOTSTRAP TABLE INIT
  // =======================

  $(function () {
    $('[data-toggle="table"]').bootstrapTable();
  });

  return BootstrapTable;

}));
