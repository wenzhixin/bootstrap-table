(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BootstrapTable = factory(global.jQuery));
})(this, (function ($) { 'use strict';

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

	var isObject$1;
	var hasRequiredIsObject;

	function requireIsObject () {
		if (hasRequiredIsObject) return isObject$1;
		hasRequiredIsObject = 1;
		var isCallable = requireIsCallable();

		isObject$1 = function (it) {
		  return typeof it == 'object' ? it !== null : isCallable(it);
		};
		return isObject$1;
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
		  version: '3.48.0',
		  mode: IS_PURE ? 'pure' : 'global',
		  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
		  license: 'https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE',
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

	var ownKeys$1;
	var hasRequiredOwnKeys;

	function requireOwnKeys () {
		if (hasRequiredOwnKeys) return ownKeys$1;
		hasRequiredOwnKeys = 1;
		var getBuiltIn = requireGetBuiltIn();
		var uncurryThis = requireFunctionUncurryThis();
		var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
		var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
		var anObject = requireAnObject();

		var concat = uncurryThis([].concat);

		// all object keys, includes non-enumerable and symbols
		ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
		  var keys = getOwnPropertyNamesModule.f(anObject(it));
		  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
		  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
		};
		return ownKeys$1;
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

	var toStringTagSupport;
	var hasRequiredToStringTagSupport;

	function requireToStringTagSupport () {
		if (hasRequiredToStringTagSupport) return toStringTagSupport;
		hasRequiredToStringTagSupport = 1;
		var wellKnownSymbol = requireWellKnownSymbol();

		var TO_STRING_TAG = wellKnownSymbol('toStringTag');
		var test = {};
		// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
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
		var setArrayLength = requireArraySetLength();
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
		    setArrayLength(A, n);
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
	  return t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
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
	function ownKeys(e, r) {
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
	    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
	      _defineProperty(e, r, t[r]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
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
		var IndexedObject = requireIndexedObject();
		var toObject = requireToObject();
		var lengthOfArrayLike = requireLengthOfArrayLike();
		var arraySpeciesCreate = requireArraySpeciesCreate();
		var createProperty = requireCreateProperty();

		// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
		var createMethod = function (TYPE) {
		  var IS_MAP = TYPE === 1;
		  var IS_FILTER = TYPE === 2;
		  var IS_SOME = TYPE === 3;
		  var IS_EVERY = TYPE === 4;
		  var IS_FIND_INDEX = TYPE === 6;
		  var IS_FILTER_REJECT = TYPE === 7;
		  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
		  return function ($this, callbackfn, that) {
		    var O = toObject($this);
		    var self = IndexedObject(O);
		    var length = lengthOfArrayLike(self);
		    var boundFunction = bind(callbackfn, that);
		    var index = 0;
		    var resIndex = 0;
		    var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : undefined;
		    var value, result;
		    for (;length > index; index++) if (NO_HOLES || index in self) {
		      value = self[index];
		      result = boundFunction(value, index, O);
		      if (TYPE) {
		        if (IS_MAP) createProperty(target, index, result);    // map
		        else if (result) switch (TYPE) {
		          case 3: return true;                                // some
		          case 5: return value;                               // find
		          case 6: return index;                               // findIndex
		          case 2: createProperty(target, resIndex++, value);  // filter
		        } else switch (TYPE) {
		          case 4: return false;                               // every
		          case 7: createProperty(target, resIndex++, value);  // filterReject
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

	var es_string_startsWith = {};

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

	var es_array_from = {};

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

	var callWithSafeIterationClosing;
	var hasRequiredCallWithSafeIterationClosing;

	function requireCallWithSafeIterationClosing () {
		if (hasRequiredCallWithSafeIterationClosing) return callWithSafeIterationClosing;
		hasRequiredCallWithSafeIterationClosing = 1;
		var anObject = requireAnObject();
		var iteratorClose = requireIteratorClose();

		// call something on iterator step with safe closing on error
		callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
		  try {
		    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
		  } catch (error) {
		    iteratorClose(iterator, 'throw', error);
		  }
		};
		return callWithSafeIterationClosing;
	}

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

	var arrayFrom;
	var hasRequiredArrayFrom;

	function requireArrayFrom () {
		if (hasRequiredArrayFrom) return arrayFrom;
		hasRequiredArrayFrom = 1;
		var bind = requireFunctionBindContext();
		var call = requireFunctionCall();
		var toObject = requireToObject();
		var callWithSafeIterationClosing = requireCallWithSafeIterationClosing();
		var isArrayIteratorMethod = requireIsArrayIteratorMethod();
		var isConstructor = requireIsConstructor();
		var lengthOfArrayLike = requireLengthOfArrayLike();
		var createProperty = requireCreateProperty();
		var setArrayLength = requireArraySetLength();
		var getIterator = requireGetIterator();
		var getIteratorMethod = requireGetIteratorMethod();

		var $Array = Array;

		// `Array.from` method implementation
		// https://tc39.es/ecma262/#sec-array.from
		arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
		  var O = toObject(arrayLike);
		  var IS_CONSTRUCTOR = isConstructor(this);
		  var argumentsLength = arguments.length;
		  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
		  var mapping = mapfn !== undefined;
		  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
		  var iteratorMethod = getIteratorMethod(O);
		  var index = 0;
		  var length, result, step, iterator, next, value;
		  // if the target is not iterable or it's an array with the default iterator - use a simple case
		  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
		    result = IS_CONSTRUCTOR ? new this() : [];
		    iterator = getIterator(O, iteratorMethod);
		    next = iterator.next;
		    for (;!(step = call(next, iterator)).done; index++) {
		      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
		      createProperty(result, index, value);
		    }
		  } else {
		    length = lengthOfArrayLike(O);
		    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
		    for (;length > index; index++) {
		      value = mapping ? mapfn(O[index], index) : O[index];
		      createProperty(result, index, value);
		    }
		  }
		  setArrayLength(result, index);
		  return result;
		};
		return arrayFrom;
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
		  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
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
		    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
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

	var hasRequiredEs_array_from;

	function requireEs_array_from () {
		if (hasRequiredEs_array_from) return es_array_from;
		hasRequiredEs_array_from = 1;
		var $ = require_export();
		var from = requireArrayFrom();
		var checkCorrectnessOfIteration = requireCheckCorrectnessOfIteration();

		var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
		  // eslint-disable-next-line es/no-array-from -- required for testing
		  Array.from(iterable);
		});

		// `Array.from` method
		// https://tc39.es/ecma262/#sec-array.from
		$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
		  from: from
		});
		return es_array_from;
	}

	requireEs_array_from();

	var es_string_iterator = {};

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

	/**
	 * Bootstrap Table DOM Manipulation Utility Library
	 * Provides jQuery-style DOM manipulation APIs using native JavaScript
	 *
	 * Security Notice:
	 * - The `create()` method uses innerHTML to parse HTML strings. Always sanitize user input
	 *   before passing it to create() to prevent XSS attacks.
	 * - The `html()` method sets innerHTML directly. Use the `text()` method for user-provided content.
	 * - The `attr()` method allows setting arbitrary attributes including event handlers.
	 *   Avoid setting event handler attributes (onclick, onerror, etc.) with user-controlled data.
	 */
	var DOMHelper = /*#__PURE__*/function () {
	  function DOMHelper() {
	    _classCallCheck(this, DOMHelper);
	  }
	  return _createClass(DOMHelper, null, [{
	    key: "$",
	    value:
	    /**
	     * Element selector
	     * @param {string|Element} selector - CSS selector or DOM element
	     * @param {Element} context - Search context, defaults to document
	     * @returns {Element|null} First matched element
	     */
	    function $(selector) {
	      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	      if (typeof selector === 'string') {
	        return context.querySelector(selector);
	      }
	      if (selector instanceof Element) {
	        return selector;
	      }
	      return null;
	    }

	    /**
	     * Element selector (multiple)
	     * @param {string|Element|NodeList} selector - CSS selector, DOM element, or NodeList
	     * @param {Element} context - Search context, defaults to document
	     * @returns {Element[]} Array of all matched elements. Note: if selector is an Element, returns [Element]
	     */
	  }, {
	    key: "$$",
	    value: function $$(selector) {
	      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	      if (typeof selector === 'string') {
	        return Array.from(context.querySelectorAll(selector));
	      }
	      if (selector instanceof NodeList) {
	        return Array.from(selector);
	      }
	      if (selector instanceof Element) {
	        return [selector];
	      }
	      return [];
	    }

	    /**
	     * Create DOM element
	     * @param {string} html - HTML string. Note: This method uses innerHTML and can execute scripts.
	     *                        Always sanitize user input before passing it to this method.
	     * @returns {Element|null} Created DOM element. Returns null if html is empty, not a string,
	     *                         or contains only whitespace.
	     */
	  }, {
	    key: "create",
	    value: function create(html) {
	      if (typeof html !== 'string') return null;
	      var trimmed = html.trim();
	      if (!trimmed) return null;
	      var template = document.createElement('template');
	      template.innerHTML = trimmed;
	      return template.content.firstChild;
	    }

	    /**
	     * Add CSS class
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} className - Class name to add (space-separated for multiple classes)
	     * @returns {Element|null} The element itself
	     */
	  }, {
	    key: "addClass",
	    value: function addClass(element, className) {
	      var _element$classList;
	      if (typeof element === 'string') element = this.$(element);
	      if (!element || !element.classList) return element;
	      if (!className) return element;
	      var classes = className.split(' ').filter(function (c) {
	        return c;
	      });
	      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes));
	      return element;
	    }

	    /**
	     * Remove CSS class
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} className - Class name to remove (space-separated for multiple classes)
	     * @returns {Element|null} The element itself
	     */
	  }, {
	    key: "removeClass",
	    value: function removeClass(element, className) {
	      var _element$classList2;
	      if (typeof element === 'string') element = this.$(element);
	      if (!element || !element.classList) return element;
	      if (!className) return element;
	      var classes = className.split(' ').filter(function (c) {
	        return c;
	      });
	      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(classes));
	      return element;
	    }

	    /**
	     * Toggle CSS class
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} className - Class name to toggle (space-separated for multiple classes)
	     * @returns {Element|null} The element itself
	     */
	  }, {
	    key: "toggleClass",
	    value: function toggleClass(element, className) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element || !element.classList) return element;
	      if (!className) return element;
	      var classes = className.split(' ').filter(function (c) {
	        return c;
	      });
	      classes.forEach(function (cls) {
	        return element.classList.toggle(cls);
	      });
	      return element;
	    }

	    /**
	     * Check if element has CSS class
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} className - Class name to check
	     * @returns {boolean} Whether the class exists
	     */
	  }, {
	    key: "hasClass",
	    value: function hasClass(element, className) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element || !element.classList) return false;
	      if (!className) return false;
	      return element.classList.contains(className);
	    }

	    /**
	     * Get or set attribute
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} name - Attribute name. Warning: Avoid setting event handler attributes
	     *                        (onclick, onerror, etc.) with user-controlled data to prevent XSS.
	     * @param {string} [value] - Attribute value (omit to get)
	     * @returns {Element|null} Element when setting, or string|null when getting attribute
	     */
	  }, {
	    key: "attr",
	    value: function attr(element, name, value) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return value === undefined ? null : element;
	      if (value === undefined) {
	        return element.getAttribute(name);
	      }
	      element.setAttribute(name, value);
	      return element;
	    }

	    /**
	     * Remove attribute
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} name - Attribute name
	     * @returns {Element|null} The element itself
	     */
	  }, {
	    key: "removeAttr",
	    value: function removeAttr(element, name) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return element;
	      element.removeAttribute(name);
	      return element;
	    }

	    /**
	     * Get or set data attribute
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} key - Data key name
	     * @param {string} [value] - Data value (omit to get)
	     * @returns {(string|undefined) when getting (value omitted); (Element|null|undefined) when setting (value provided)}
	     * Returns the data attribute value (string or undefined) when getting, or the element (or null/undefined if not found) when setting.
	     */
	  }, {
	    key: "data",
	    value: function data(element, key, value) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return value === undefined ? undefined : element;
	      if (value === undefined) {
	        return element.dataset[key];
	      }
	      element.dataset[key] = value;
	      return element;
	    }

	    /**
	     * Append child element
	     * @param {Element|string} parent - Parent element or selector
	     * @param {Element|string} child - Child element or HTML string
	     * @returns {Element|null} Parent element
	     */
	  }, {
	    key: "append",
	    value: function append(parent, child) {
	      if (typeof parent === 'string') parent = this.$(parent);
	      if (typeof child === 'string') child = this.create(child);
	      if (parent && child) {
	        parent.appendChild(child);
	      }
	      return parent;
	    }

	    /**
	     * Prepend child element
	     * @param {Element|string} parent - Parent element or selector
	     * @param {Element|string} child - Child element or HTML string
	     * @returns {Element|null} Parent element
	     */
	  }, {
	    key: "prepend",
	    value: function prepend(parent, child) {
	      if (typeof parent === 'string') parent = this.$(parent);
	      if (typeof child === 'string') child = this.create(child);
	      if (parent && child) {
	        parent.insertBefore(child, parent.firstChild);
	      }
	      return parent;
	    }

	    /**
	     * Insert element after target
	     * @param {Element|string} newElement - Element to insert
	     * @param {Element|string} targetElement - Target element
	     * @returns {Element|null} Inserted element
	     */
	  }, {
	    key: "insertAfter",
	    value: function insertAfter(newElement, targetElement) {
	      if (typeof targetElement === 'string') targetElement = this.$(targetElement);
	      if (typeof newElement === 'string') newElement = this.create(newElement);
	      if (targetElement && newElement && targetElement.parentNode) {
	        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
	      }
	      return newElement;
	    }

	    /**
	     * Insert element before target
	     * @param {Element|string} newElement - Element to insert
	     * @param {Element|string} targetElement - Target element
	     * @returns {Element|null} Inserted element
	     */
	  }, {
	    key: "insertBefore",
	    value: function insertBefore(newElement, targetElement) {
	      if (typeof targetElement === 'string') targetElement = this.$(targetElement);
	      if (typeof newElement === 'string') newElement = this.create(newElement);
	      if (targetElement && newElement && targetElement.parentNode) {
	        targetElement.parentNode.insertBefore(newElement, targetElement);
	      }
	      return newElement;
	    }

	    /**
	     * Find child elements
	     * @param {Element|string} element - Parent element or selector
	     * @param {string} selector - CSS selector
	     * @returns {Element[]} Array of matched child elements
	     */
	  }, {
	    key: "find",
	    value: function find(element, selector) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return [];
	      return Array.from(element.querySelectorAll(selector));
	    }

	    /**
	     * Find first matching child element
	     * @param {Element|string} element - Parent element or selector
	     * @param {string} selector - CSS selector
	     * @returns {Element|null} First matched child element
	     */
	  }, {
	    key: "findFirst",
	    value: function findFirst(element, selector) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return null;
	      return element.querySelector(selector);
	    }

	    /**
	     * Get or set style
	     * @param {Element|string} element - DOM element or selector
	     * @param {string|Object} property - Property name or property object
	     * @param {string} [value] - Style value (when property is string)
	     * @returns {Element|string|null} Element when setting, style value when getting
	     */
	  }, {
	    key: "css",
	    value: function css(element, property, value) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) {
	        return null;
	      }
	      if (_typeof(property) === 'object') {
	        // Batch set styles
	        Object.assign(element.style, property);
	        return element;
	      }
	      if (value === undefined) {
	        // Get style
	        return getComputedStyle(element)[property];
	      }
	      // Set style
	      element.style[property] = value;
	      return element;
	    }

	    /**
	     * Get element width
	     * @param {Element|string} element - DOM element or selector
	     * @returns {number} Element width
	     */
	  }, {
	    key: "width",
	    value: function width(element) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return 0;
	      return element.offsetWidth;
	    }

	    /**
	     * Get element height
	     * @param {Element|string} element - DOM element or selector
	     * @returns {number} Element height
	     */
	  }, {
	    key: "height",
	    value: function height(element) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return 0;
	      return element.offsetHeight;
	    }

	    /**
	     * Get element outer width (including border, optionally including margin)
	     * @param {Element|string} element - DOM element or selector
	     * @param {boolean} [includeMargin=false] - Whether to include margin
	     * @returns {number} Element outer width
	     */
	  }, {
	    key: "outerWidth",
	    value: function outerWidth(element) {
	      var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return 0;
	      var width = element.offsetWidth;
	      if (includeMargin) {
	        var style = getComputedStyle(element);
	        var marginLeft = parseInt(style.marginLeft, 10) || 0;
	        var marginRight = parseInt(style.marginRight, 10) || 0;
	        width += marginLeft + marginRight;
	      }
	      return width;
	    }

	    /**
	     * Get element outer height (including border, optionally including margin)
	     * @param {Element|string} element - DOM element or selector
	     * @param {boolean} [includeMargin=false] - Whether to include margin
	     * @returns {number} Element outer height
	     */
	  }, {
	    key: "outerHeight",
	    value: function outerHeight(element) {
	      var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return 0;
	      var height = element.offsetHeight;
	      if (includeMargin) {
	        var style = getComputedStyle(element);
	        var marginTop = parseInt(style.marginTop, 10) || 0;
	        var marginBottom = parseInt(style.marginBottom, 10) || 0;
	        height += marginTop + marginBottom;
	      }
	      return height;
	    }

	    /**
	     * Get or set element value
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} [value] - Value (omit to get)
	     * @returns {Element|string|null} Element when setting, current value when getting
	     */
	  }, {
	    key: "val",
	    value: function val(element, value) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return value === undefined ? null : element;
	      if (value === undefined) {
	        return element.value;
	      }
	      element.value = value;
	      return element;
	    }

	    /**
	     * Get or set HTML content
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} [content] - HTML content (omit to get). Warning: This method uses innerHTML
	     *                             and can execute scripts. Use text() for user-provided content.
	     * @returns {Element|string|null} Element when setting, HTML content when getting
	     */
	  }, {
	    key: "html",
	    value: function html(element, content) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return content === undefined ? null : element;
	      if (content === undefined) {
	        return element.innerHTML;
	      }
	      element.innerHTML = content;
	      return element;
	    }

	    /**
	     * Get or set text content
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} [content] - Text content (omit to get)
	     * @returns {Element|string|null} Element when setting, text content when getting
	     */
	  }, {
	    key: "text",
	    value: function text(element, content) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return content === undefined ? null : element;
	      if (content === undefined) {
	        return element.textContent;
	      }
	      element.textContent = content;
	      return element;
	    }

	    /**
	     * Remove element
	     * @param {Element|string} element - DOM element or selector
	     * @returns {Element|null} Removed element
	     */
	  }, {
	    key: "remove",
	    value: function remove(element) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element || !element.parentNode) return element;
	      element.parentNode.removeChild(element);
	      return element;
	    }

	    /**
	     * Empty element content
	     * @param {Element|string} element - DOM element or selector
	     * @returns {Element|null} Emptied element
	     */
	  }, {
	    key: "empty",
	    value: function empty(element) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return element;
	      element.innerHTML = '';
	      return element;
	    }

	    /**
	     * Iterate over element collection
	     * @param {Element[]|NodeList|string} elements - Element collection or selector
	     * @param {Function} callback - Callback function with params (index, element)
	     * @returns {Element[]} Element collection
	     */
	  }, {
	    key: "each",
	    value: function each(elements, callback) {
	      if (typeof elements === 'string') {
	        elements = this.$$(elements);
	      } else if (elements instanceof NodeList) {
	        elements = Array.from(elements);
	      } else if (!Array.isArray(elements)) {
	        elements = [elements];
	      }
	      elements.forEach(function (element, index) {
	        callback.call(element, index, element);
	      });
	      return elements;
	    }

	    /**
	     * Get parent element
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} [selector] - Parent element selector (optional)
	     * @returns {Element|null} Parent element
	     */
	  }, {
	    key: "parent",
	    value: function parent(element, selector) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return null;
	      var parent = element.parentElement;
	      if (selector) {
	        while (parent && !parent.matches(selector)) {
	          parent = parent.parentElement;
	        }
	      }
	      return parent;
	    }

	    /**
	     * Get child elements
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} [selector] - Child element selector (optional)
	     * @returns {Element[]} Array of child elements
	     */
	  }, {
	    key: "children",
	    value: function children(element, selector) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return [];
	      var children = Array.from(element.children);
	      if (selector) {
	        children = children.filter(function (child) {
	          return child.matches(selector);
	        });
	      }
	      return children;
	    }

	    /**
	     * Get next sibling element
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} [selector] - Sibling element selector (optional)
	     * @returns {Element|null} Next sibling element
	     */
	  }, {
	    key: "next",
	    value: function next(element, selector) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return null;
	      var next = element.nextElementSibling;
	      if (selector) {
	        while (next && !next.matches(selector)) {
	          next = next.nextElementSibling;
	        }
	      }
	      return next;
	    }

	    /**
	     * Get previous sibling element
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} [selector] - Sibling element selector (optional)
	     * @returns {Element|null} Previous sibling element
	     */
	  }, {
	    key: "prev",
	    value: function prev(element, selector) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return null;
	      var prev = element.previousElementSibling;
	      if (selector) {
	        while (prev && !prev.matches(selector)) {
	          prev = prev.previousElementSibling;
	        }
	      }
	      return prev;
	    }

	    /**
	     * Get element position relative to document
	     * @param {Element|string} element - DOM element or selector
	     * @returns {Object} Position info {top, left, width, height}
	     */
	  }, {
	    key: "offset",
	    value: function offset(element) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return {
	        top: 0,
	        left: 0,
	        width: 0,
	        height: 0
	      };
	      var rect = element.getBoundingClientRect();
	      return {
	        top: rect.top + window.scrollY,
	        left: rect.left + window.scrollX,
	        width: rect.width,
	        height: rect.height
	      };
	    }

	    /**
	     * Get element position relative to parent
	     * @param {Element|string} element - DOM element or selector
	     * @returns {Object} Position info {top, left}
	     */
	  }, {
	    key: "position",
	    value: function position(element) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return {
	        top: 0,
	        left: 0
	      };
	      return {
	        top: element.offsetTop,
	        left: element.offsetLeft
	      };
	    }

	    /**
	     * Check if element matches selector
	     * @param {Element|string} element - DOM element or selector
	     * @param {string} selector - CSS selector
	     * @returns {boolean} Whether it matches
	     */
	  }, {
	    key: "is",
	    value: function is(element, selector) {
	      if (typeof element === 'string') element = this.$(element);
	      if (!element) return false;
	      return element.matches(selector);
	    }
	  }]);
	}(); // Export DOMHelper class

	/**
	 * Framework detection and icon utilities.
	 *
	 * This module provides utility functions for detecting the Bootstrap framework version
	 * and managing icon prefixes and mappings for different CSS frameworks.
	 *
	 * @module utils/framework
	 */

	/**
	 * Returns the prefix for the icons based on the theme.
	 *
	 * @param {string} theme - The theme name (bootstrap3, bootstrap4, bootstrap5, bootstrap-table, bulma, foundation, materialize, semantic).
	 * @returns {string} The icons prefix.
	 */
	function getIconsPrefix(theme) {
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
	}

	/**
	 * Gets the icons for a given prefix.
	 *
	 * @param {Object.<string, Object>} icons - The icons object.
	 * @param {string} prefix - The prefix. For example, 'fa', 'bi', etc.
	 * @return {Object} The icons object for the given prefix.
	 */
	function getIcons(icons, prefix) {
	  return icons[prefix] || {};
	}

	/**
	 * Assigns new icons to icons object.
	 *
	 * @param {Object.<string, Object>} icons - The icons object.
	 * @param {string} icon - The icon name. For example, 'search', 'refresh', etc.
	 * @param {Object.<string, string>} values - The values object.
	 */
	function assignIcons(icons, icon, values) {
	  for (var _i = 0, _Object$keys = Object.keys(icons); _i < _Object$keys.length; _i++) {
	    var key = _Object$keys[_i];
	    icons[key][icon] = values[key];
	  }
	}

	/**
	 * Gets the Bootstrap version.
	 *
	 * @returns {number|undefined} The Bootstrap version number (3, 4, or 5), or undefined for non-Bootstrap themes.
	 */
	function getBootstrapVersion() {
	  var _$$fn, _window$bootstrap, _$$fn2;
	  // Check if using a non-Bootstrap theme
	  if (typeof $ !== 'undefined' && (_$$fn = $.fn) !== null && _$$fn !== void 0 && (_$$fn = _$$fn.bootstrapTable) !== null && _$$fn !== void 0 && _$$fn.theme) {
	    var theme = $.fn.bootstrapTable.theme;
	    if (!theme.startsWith('bootstrap')) {
	      return;
	    }
	  }
	  var bootstrapVersion = 5;
	  if (typeof window !== 'undefined' && (_window$bootstrap = window.bootstrap) !== null && _window$bootstrap !== void 0 && (_window$bootstrap = _window$bootstrap.Tooltip) !== null && _window$bootstrap !== void 0 && _window$bootstrap.VERSION) {
	    bootstrapVersion = parseInt(window.bootstrap.Tooltip.VERSION, 10);
	  } else if (typeof $ !== 'undefined' && (_$$fn2 = $.fn) !== null && _$$fn2 !== void 0 && (_$$fn2 = _$$fn2.dropdown) !== null && _$$fn2 !== void 0 && (_$$fn2 = _$$fn2.Constructor) !== null && _$$fn2 !== void 0 && _$$fn2.VERSION) {
	    bootstrapVersion = parseInt($.fn.dropdown.Constructor.VERSION, 10);
	  }
	  return bootstrapVersion;
	}

	/**
	 * Gets the search input element.
	 *
	 * @param {Object} that - The Bootstrap Table instance.
	 * @returns {HTMLElement|null} The search input element, or null if not found.
	 */
	function getSearchInput(that) {
	  if (typeof that.options.searchSelector === 'string') {
	    return DOMHelper.$(that.options.searchSelector);
	  }
	  var toolbar = that.$toolbar ? that.$toolbar[0] : null;
	  if (!toolbar) {
	    return null;
	  }
	  var result = DOMHelper.find(toolbar, '.search input');
	  return result.length > 0 ? result[0] : null;
	}

	var framework = /*#__PURE__*/Object.freeze({
		__proto__: null,
		assignIcons: assignIcons,
		getBootstrapVersion: getBootstrapVersion,
		getIcons: getIcons,
		getIconsPrefix: getIconsPrefix,
		getSearchInput: getSearchInput
	});

	var es_object_entries = {};

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

	var es_string_includes = {};

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

	/**
	 * Object manipulation utilities.
	 *
	 * This module provides utility functions for working with plain JavaScript objects,
	 * including deep copying, merging, comparing, and checking object properties.
	 *
	 * @module utils/object
	 */

	/**
	 * Checks if a value is a plain object.
	 *
	 * @param {*} obj - The value to check.
	 * @returns {boolean} True if the value is a plain object, false otherwise.
	 */
	function isObject(obj) {
	  if (_typeof(obj) !== 'object' || obj === null) {
	    return false;
	  }
	  var proto = obj;
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }
	  return Object.getPrototypeOf(obj) === proto;
	}

	// $.extend: https://github.com/jquery/jquery/blob/3.6.2/src/core.js#L132
	/**
	 * Merges the contents of two or more objects together into the first object.
	 * This is a re-implementation of jQuery's extend function.
	 *
	 * @param {boolean} [deep=false] - If true, the merge becomes recursive (deep copy).
	 * @param {Object} target - The object to extend.
	 * @param {...Object} objects - The objects to merge into the target.
	 * @returns {Object} The extended target object.
	 */
	function extend() {
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
	      if (deep && copy && (isObject(copy) || copyIsArray)) {
	        var src = target[name];
	        if (copyIsArray && Array.isArray(src)) {
	          if (src.every(function (it) {
	            return !isObject(it) && !Array.isArray(it);
	          })) {
	            target[name] = copy;
	            continue;
	          }
	        }
	        if (copyIsArray && !Array.isArray(src)) {
	          clone = [];
	        } else if (!copyIsArray && !isObject(src)) {
	          clone = {};
	        } else {
	          clone = src;
	        }

	        // Never move original objects, clone them
	        target[name] = extend(deep, clone, copy);

	        // Don't bring in undefined values
	      } else if (copy !== undefined) {
	        target[name] = copy;
	      }
	    }
	  }
	  return target;
	}

	/**
	 * Creates a deep copy of a value.
	 *
	 * @param {*} arg - The value to deep copy.
	 * @returns {*} A deep copy of the input value.
	 */
	function deepCopy(arg) {
	  if (arg === undefined) {
	    return arg;
	  }
	  return extend(true, Array.isArray(arg) ? [] : {}, arg);
	}

	/**
	 * Compares two objects for equality.
	 *
	 * @param {Object} objectA - The first object to compare.
	 * @param {Object} objectB - The second object to compare.
	 * @param {boolean} [compareLength=false] - If true, also compare the number of keys.
	 * @returns {boolean} True if the objects are equal, false otherwise.
	 */
	function compareObjects(objectA, objectB, compareLength) {
	  var aKeys = Object.keys(objectA);
	  var bKeys = Object.keys(objectB);
	  if (compareLength && aKeys.length !== bKeys.length) {
	    return false;
	  }
	  for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
	    var key = _aKeys[_i];
	    if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Checks if an object is empty (has no own properties).
	 *
	 * @param {Object} [obj={}] - The object to check.
	 * @returns {boolean} True if the object is empty, false otherwise.
	 */
	function isEmptyObject() {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return Object.entries(obj).length === 0 && obj.constructor === Object;
	}

	var object = /*#__PURE__*/Object.freeze({
		__proto__: null,
		compareObjects: compareObjects,
		deepCopy: deepCopy,
		extend: extend,
		isEmptyObject: isEmptyObject,
		isObject: isObject
	});

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
		  for (; index < length; index++) {
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
		  for (; index < length; index++) {
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

	var es_regexp_exec = {};

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
		    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
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
		      // RegExp[@@split] doesn't call the regex's exec method, but first creates
		      // a new one. We need to return the patched regex when creating the new one.
		      var constructor = {};
		      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
		      constructor[SPECIES] = function () { return re; };
		      re = { constructor: constructor, flags: '' };
		      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
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

	/**
	 * String manipulation utilities.
	 *
	 * This module provides utility functions for string processing, including:
	 * - String formatting (sprintf)
	 * - HTML escaping and unescaping
	 * - Accent character normalization for search
	 * - HTML tag removal
	 * - CSS style string normalization
	 *
	 * @module utils/string
	 */

	/**
	 * Mapping of accented characters to their non-accented equivalents.
	 * Used by normalizeAccent function to convert accented characters.
	 *
	 * @constant {Object.<string, string>}
	 */
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

	/**
	 * Simple string formatter that replaces %s placeholders with provided arguments.
	 * Only supports %s placeholder. Returns empty string if any argument is undefined.
	 *
	 * @param {string} _str - The format string containing %s placeholders.
	 * @param {...*} args - The values to replace the placeholders with.
	 * @returns {string} The formatted string, or empty string if any argument is undefined.
	 */
	function sprintf(_str) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
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
	}

	/**
	 * Escapes apostrophes in a string by replacing them with HTML entity.
	 *
	 * @param {*} value - The value to escape.
	 * @returns {string} The string with apostrophes escaped.
	 */
	function escapeApostrophe(value) {
	  return value.toString().replace(/'/g, '&#39;');
	}

	/**
	 * Escapes HTML special characters in a string.
	 *
	 * @param {*} text - The text to escape.
	 * @returns {*} The escaped text, or the original value if falsy.
	 */
	function escapeHTML(text) {
	  if (!text) {
	    return text;
	  }
	  return text.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
	}

	/**
	 * Escapes HTML attribute value to prevent XSS attacks.
	 * The order of replacements is important for attributes: & must be first,
	 * then " and ' to prevent breaking out of the attribute.
	 *
	 * @param {*} text - The attribute value to escape.
	 * @returns {*} The escaped text, or the original value if falsy.
	 */
	function escapeAttr(text) {
	  if (!text) {
	    return text;
	  }
	  return text.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	/**
	 * Unescapes HTML entities in a string.
	 *
	 * @param {*} text - The text to unescape.
	 * @returns {*} The unescaped text, or the original value if not a string or falsy.
	 */
	function unescapeHTML(text) {
	  if (typeof text !== 'string' || !text) {
	    return text;
	  }
	  return text.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&amp;/g, '&');
	}

	/**
	 * Removes HTML tags and HTML entities from a string.
	 *
	 * @param {*} text - The text to remove HTML from.
	 * @returns {*} The text with HTML removed, or the original value if falsy.
	 */
	function removeHTML(text) {
	  if (!text) {
	    return text;
	  }
	  return text.toString().replace(/(<([^>]+)>)/ig, '').replace(/&[#A-Za-z0-9]+;/gi, '').trim();
	}

	/**
	 * Normalizes accented characters in a string to their non-accented equivalents.
	 * Converts to lowercase and removes diacritical marks.
	 *
	 * @param {*} value - The value to normalize.
	 * @returns {*} The normalized string, or the original value if not a string.
	 */
	function normalizeAccent(value) {
	  if (typeof value !== 'string') {
	    return value;
	  }
	  var pattern = new RegExp("[".concat(Object.keys(ACCENT_MAP).join(''), "]"), 'g');
	  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(pattern, function (char) {
	    return ACCENT_MAP[char];
	  }).toLowerCase().trim();
	}

	/**
	 * Normalizes a CSS style string by ensuring it ends with '; ' for proper concatenation.
	 * Returns undefined if the input is empty or contains only whitespace.
	 *
	 * @param {string|undefined} style - The style string to normalize.
	 * @returns {string|undefined} The normalized style string ending with '; ', or undefined.
	 * @example
	 * normalizeStyle('color: red')  // returns 'color: red; '
	 * normalizeStyle('color: red;') // returns 'color: red; '
	 * normalizeStyle('')            // returns undefined
	 * normalizeStyle(undefined)     // returns undefined
	 */
	function normalizeStyle(style) {
	  if (!style) {
	    return undefined;
	  }
	  var trimmed = style.trim();
	  if (!trimmed) {
	    return undefined;
	  }
	  return trimmed.replace(/;?\s*$/, '; ');
	}

	var string = /*#__PURE__*/Object.freeze({
		__proto__: null,
		escapeApostrophe: escapeApostrophe,
		escapeAttr: escapeAttr,
		escapeHTML: escapeHTML,
		normalizeAccent: normalizeAccent,
		normalizeStyle: normalizeStyle,
		removeHTML: removeHTML,
		sprintf: sprintf,
		unescapeHTML: unescapeHTML
	});

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

	/**
	 * DOM manipulation utility functions.
	 *
	 * This module provides helper functions for DOM manipulation using native JavaScript,
	 * including scrollbar width calculation, class name conversion, style parsing,
	 * h() function for element creation, and HTML-to-DOM conversion.
	 *
	 * Note: For a full jQuery-like DOM manipulation library, see src/helpers/dom.js
	 *
	 * @module utils/dom
	 */

	var cachedWidth;

	/**
	 * Gets the width of the browser scrollbar.
	 * The result is cached after the first call for performance.
	 *
	 * @returns {number} The width of the scrollbar in pixels.
	 */
	function getScrollBarWidth() {
	  if (cachedWidth === undefined) {
	    var inner = DOMHelper.create('<div class="fixed-table-scroll-inner"></div>');
	    var outer = DOMHelper.create('<div class="fixed-table-scroll-outer"></div>');
	    DOMHelper.append(outer, inner);
	    DOMHelper.append(document.body, outer);
	    var w1 = inner.offsetWidth;
	    DOMHelper.css(outer, 'overflow', 'scroll');
	    var w2 = inner.offsetWidth;
	    if (w1 === w2) {
	      w2 = outer.clientWidth;
	    }
	    DOMHelper.remove(outer);
	    cachedWidth = w1 - w2;
	  }
	  return cachedWidth;
	}

	/**
	 * Converts a class specification to a string.
	 * Handles string, array, and object formats.
	 *
	 * @param {string|Array|Object.<string, boolean>} class_ - The class specification.
	 * @returns {string} The class names as a space-separated string.
	 */
	function classToString(class_) {
	  if (typeof class_ === 'string') {
	    return class_;
	  }
	  if (Array.isArray(class_)) {
	    return class_.map(function (x) {
	      return classToString(x);
	    }).filter(function (x) {
	      return x;
	    }).join(' ');
	  }
	  if (class_ && _typeof(class_) === 'object') {
	    return Object.entries(class_).map(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	        k = _ref2[0],
	        v = _ref2[1];
	      return v ? k : '';
	    }).filter(function (x) {
	      return x;
	    }).join(' ');
	  }
	  return '';
	}

	/**
	 * Parses and applies CSS styles to a DOM element.
	 * Supports string, array, and object formats. Handles !important priority.
	 *
	 * @param {HTMLElement} dom - The DOM element to apply styles to.
	 * @param {string|Array|Object.<string, string>} style - The style(s) to apply.
	 * @returns {HTMLElement} The DOM element with styles applied.
	 */
	function parseStyle(dom, style) {
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
	    var _iterator = _createForOfIteratorHelper(style),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var item = _step.value;
	        parseStyle(dom, item);
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  } else if (_typeof(style) === 'object') {
	    for (var _i = 0, _Object$entries = Object.entries(style); _i < _Object$entries.length; _i++) {
	      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
	        k = _Object$entries$_i[0],
	        v = _Object$entries$_i[1];
	      var _parsePriority2 = parsePriority(v),
	        value = _parsePriority2.value,
	        priority = _parsePriority2.priority;
	      dom.style.setProperty(k, value, priority);
	    }
	  }
	  return dom;
	}

	/**
	 * Creates a DOM element with attributes and children.
	 * This function provides a shorthand syntax for creating DOM elements.
	 *
	 * @param {string|HTMLElement} element - The tag name or existing element.
	 * @param {Object.<string, *>} [attrs={}] - The attributes to set on the element.
	 * @param {Array.<HTMLElement|string>} [children=[]] - The children to append.
	 * @returns {HTMLElement} The created or modified element.
	 */
	function h(element, attrs, children) {
	  var el = element instanceof HTMLElement ? element : document.createElement(element);
	  var _attrs = attrs || {};
	  var _children = children || [];

	  // default attributes
	  if (el.tagName === 'A') {
	    el.href = 'javascript:';
	  }
	  for (var _i2 = 0, _Object$entries2 = Object.entries(_attrs); _i2 < _Object$entries2.length; _i2++) {
	    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
	      k = _Object$entries2$_i[0],
	      v = _Object$entries2$_i[1];
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
	      el.setAttribute('class', classToString(v));
	    } else if (k === 'style') {
	      if (typeof v === 'string') {
	        el.setAttribute('style', v);
	      } else {
	        parseStyle(el, v);
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
	}

	/**
	 * Converts HTML to DOM nodes.
	 * Uses duck typing to detect jQuery objects without direct dependency.
	 *
	 * @param {string|Node|Object} html - The HTML to convert. Can be a string, Node, or jQuery-like object.
	 * @returns {NodeList|Array<Node>} The DOM nodes.
	 */
	function htmlToNodes(html) {
	  // Duck typing check for jQuery objects (check for 'jquery' property)
	  if (html && _typeof(html) === 'object' && 'jquery' in html) {
	    return Array.from(html);
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
	}

	var dom = /*#__PURE__*/Object.freeze({
		__proto__: null,
		classToString: classToString,
		getScrollBarWidth: getScrollBarWidth,
		h: h,
		htmlToNodes: htmlToNodes,
		parseStyle: parseStyle
	});

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

	var es_string_split = {};

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

	/**
	 * Table column and data processing utilities.
	 *
	 * This module provides utility functions for working with Bootstrap Table columns and data,
	 * including field indexing, data attribute parsing, and conversion between DOM and data formats.
	 *
	 * @module utils/table-data
	 */

	/**
	 * Gets the title of a field from a list of column definitions.
	 *
	 * @param {Array.<Object.<string, *>>} list - The list of column definitions.
	 * @param {string} value - The field name to look for.
	 * @returns {string} The title of the field, or empty string if not found.
	 */
	function getFieldTitle(list, value) {
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
	}

	/**
	 * Sets field indices for columns with colspan/rowspan support.
	 * Modifies the column definitions in place to add fieldIndex and colspanIndex properties.
	 *
	 * @param {Array.<Array.<Object.<string, *>>>} columns - The column definitions array.
	 */
	function setFieldIndex(columns) {
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
	  for (var _i = 0; _i < columns.length; _i++) {
	    var _iterator3 = _createForOfIteratorHelper(columns[_i]),
	      _step3;
	    try {
	      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	        var r = _step3.value;
	        var rowspan = +r.rowspan || 1;
	        var colspan = +r.colspan || 1;
	        var index = flag[_i].indexOf(false);
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
	            flag[_i + _j][index + k] = true;
	          }
	        }
	      }
	    } catch (err) {
	      _iterator3.e(err);
	    } finally {
	      _iterator3.f();
	    }
	  }
	}

	/**
	 * Updates field groups based on column visibility.
	 * Modifies the column definitions in place to update colspan and visible properties.
	 *
	 * @param {Array.<Array.<Object.<string, *>>>} columns - The column definitions array.
	 * @param {Array.<Object.<string, *>>} fieldColumns - The field columns to update.
	 */
	function updateFieldGroup(columns, fieldColumns) {
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
	}

	/**
	 * Converts camelCase data attribute names to kebab-case.
	 *
	 * @param {Object.<string, *>} dataAttr - The data attributes object.
	 * @returns {Object.<string, *>} The data attributes with kebab-case keys.
	 */
	function getRealDataAttr(dataAttr) {
	  for (var _i2 = 0, _Object$entries = Object.entries(dataAttr); _i2 < _Object$entries.length; _i2++) {
	    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
	      attr = _Object$entries$_i[0],
	      value = _Object$entries$_i[1];
	    var auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase();
	    if (auxAttr !== attr) {
	      dataAttr[auxAttr] = value;
	      delete dataAttr[attr];
	    }
	  }
	  return dataAttr;
	}

	/**
	 * Gets a field value from an item, supporting nested properties.
	 *
	 * @param {Object.<string, *>} item - The item to get the field from.
	 * @param {string} field - The field name (supports dot notation for nested properties).
	 * @param {boolean} escape - Whether to escape HTML in the returned value.
	 * @param {boolean} [columnEscape=undefined] - Override for the escape parameter.
	 * @returns {*} The field value, escaped if requested.
	 */
	function getItemField(item, field, escape) {
	  var columnEscape = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
	  // use column escape if it is defined
	  if (typeof columnEscape !== 'undefined') {
	    escape = columnEscape;
	  }
	  if (typeof field !== 'string' || item.hasOwnProperty(field) || !field.includes('.')) {
	    return escape ? escapeHTML(item[field]) : item[field];
	  }
	  var props = field.split('.');
	  var value = item;
	  var _iterator8 = _createForOfIteratorHelper(props),
	    _step8;
	  try {
	    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
	      var p = _step8.value;
	      if (value === null || value === undefined) {
	        return; // undefined
	      }
	      value = value[p];
	    }
	  } catch (err) {
	    _iterator8.e(err);
	  } finally {
	    _iterator8.f();
	  }
	  return escape ? escapeHTML(value) : value;
	}

	/**
	 * Finds the index of an item in an array using deep equality.
	 *
	 * @param {Array.<*>} items - The array to search in.
	 * @param {*} item - The item to find.
	 * @returns {number} The index of the item, or -1 if not found.
	 */
	function findIndex(items, item) {
	  var _iterator9 = _createForOfIteratorHelper(items),
	    _step9;
	  try {
	    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
	      var it = _step9.value;
	      if (JSON.stringify(it) === JSON.stringify(item)) {
	        return items.indexOf(it);
	      }
	    }
	  } catch (err) {
	    _iterator9.e(err);
	  } finally {
	    _iterator9.f();
	  }
	  return -1;
	}

	/**
	 * Converts table rows (tr elements) to data array.
	 * Preserves row and cell attributes including id, class, style, and data-* attributes.
	 *
	 * @param {Array.<Object.<string, *>>} columns - The column definitions.
	 * @param {HTMLCollection|NodeList|Array<Element>} els - The tr elements.
	 * @returns {Array.<Object.<string, *>>} The array of row data objects.
	 */
	function trToData(columns, els) {
	  var data = [];
	  var m = [];
	  var elsArray = Array.from(els);
	  for (var y = 0; y < elsArray.length; y++) {
	    var el = elsArray[y];
	    var row = {};

	    // save tr's id, class and data-* attributes
	    row._id = DOMHelper.attr(el, 'id');
	    row._class = DOMHelper.attr(el, 'class');
	    row._data = getRealDataAttr(el.dataset || {});
	    row._style = DOMHelper.attr(el, 'style');
	    var cells = DOMHelper.children(el, 'td,th');
	    for (var x = 0; x < cells.length; x++) {
	      var cell = cells[x];
	      var colspan = parseInt(DOMHelper.attr(cell, 'colspan'), 10) || 1;
	      var rowspan = parseInt(DOMHelper.attr(cell, 'rowspan'), 10) || 1;
	      var currentX = x;

	      // skip already occupied cells in current row
	      for (; m[y] && m[y][currentX]; currentX++) {
	        // ignore
	      }

	      // mark matrix elements occupied by current cell with true
	      for (var tx = currentX; tx < currentX + colspan; tx++) {
	        for (var ty = y; ty < y + rowspan; ty++) {
	          if (!m[ty]) {
	            // fill missing rows
	            m[ty] = [];
	          }
	          m[ty][tx] = true;
	        }
	      }
	      var field = columns[currentX].field;
	      row[field] = escapeApostrophe(DOMHelper.html(cell).trim());
	      // save td's id, class and data-* attributes
	      row["_".concat(field, "_id")] = DOMHelper.attr(cell, 'id');
	      row["_".concat(field, "_class")] = DOMHelper.attr(cell, 'class');
	      row["_".concat(field, "_rowspan")] = DOMHelper.attr(cell, 'rowspan');
	      row["_".concat(field, "_colspan")] = DOMHelper.attr(cell, 'colspan');
	      row["_".concat(field, "_title")] = DOMHelper.attr(cell, 'title');
	      row["_".concat(field, "_data")] = getRealDataAttr(cell.dataset || {});
	      row["_".concat(field, "_style")] = DOMHelper.attr(cell, 'style');
	    }
	    data.push(row);
	  }
	  return data;
	}

	/**
	 * Checks if any row in the data has auto-merge cells (rowspan/colspan).
	 *
	 * @param {Array.<Object.<string, *>>} data - The data array to check.
	 * @returns {boolean} True if any row has auto-merge cells, false otherwise.
	 */
	function checkAutoMergeCells(data) {
	  var _iterator0 = _createForOfIteratorHelper(data),
	    _step0;
	  try {
	    for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
	      var row = _step0.value;
	      for (var _i3 = 0, _Object$keys = Object.keys(row); _i3 < _Object$keys.length; _i3++) {
	        var key = _Object$keys[_i3];
	        if (key.startsWith('_') && (key.endsWith('_rowspan') || key.endsWith('_colspan'))) {
	          return true;
	        }
	      }
	    }
	  } catch (err) {
	    _iterator0.e(err);
	  } finally {
	    _iterator0.f();
	  }
	  return false;
	}

	var tableData = /*#__PURE__*/Object.freeze({
		__proto__: null,
		checkAutoMergeCells: checkAutoMergeCells,
		findIndex: findIndex,
		getFieldTitle: getFieldTitle,
		getItemField: getItemField,
		getRealDataAttr: getRealDataAttr,
		setFieldIndex: setFieldIndex,
		trToData: trToData,
		updateFieldGroup: updateFieldGroup
	});

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
		var setArrayLength = requireArraySetLength();
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
		    setArrayLength(result, n);
		    return result;
		  }
		});
		return es_array_slice;
	}

	requireEs_array_slice();

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
		    if (!DESCRIPTORS) this.size++;
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

	/**
	 * General helper utilities.
	 *
	 * This module provides miscellaneous helper functions used throughout Bootstrap Table,
	 * including debouncing, event handling, URL manipulation, and browser detection.
	 *
	 * @module utils/helper
	 */

	/**
	 * Calculates the value of an object property, supporting function calls and nested properties.
	 *
	 * @param {Object.<string, *>} self - The context to use when calling functions.
	 * @param {string|Function|*} name - The property name, function, or value to calculate.
	 * @param {Array.<*>} args - The arguments to pass to the function.
	 * @param {*} defaultValue - The default value to return if calculation fails.
	 * @returns {*} The calculated value or default value.
	 */
	function calculateObjectValue(self, name, args, defaultValue) {
	  var func = name;
	  if (typeof name === 'string') {
	    // support obj.func1.func2
	    var names = name.split('.');
	    if (names.length > 1) {
	      func = window;
	      var _iterator = _createForOfIteratorHelper(names),
	        _step;
	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var f = _step.value;
	          func = func[f];
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
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
	  if (!func && typeof name === 'string' && args && sprintf.apply(void 0, [name].concat(_toConsumableArray(args)))) {
	    return sprintf.apply(void 0, [name].concat(_toConsumableArray(args)));
	  }
	  return defaultValue;
	}

	/**
	 * Creates a debounced function that delays invoking func until after wait milliseconds.
	 *
	 * @param {Function} func - The function to debounce.
	 * @param {number} wait - The number of milliseconds to delay.
	 * @param {boolean} [immediate=false] - If true, trigger the function on the leading edge.
	 * @returns {Function} The debounced function.
	 */
	function debounce(func, wait, immediate) {
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
	}

	/**
	 * Generates a unique event name with a prefix and optional ID.
	 *
	 * @param {string} eventPrefix - The prefix for the event name.
	 * @param {string} [id=''] - The optional ID to append. If not provided, generates a random ID.
	 * @returns {string} The generated event name.
	 */
	function getEventName(eventPrefix) {
	  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  id = id || "".concat(+new Date()).concat(~~(Math.random() * 1000000));
	  return "".concat(eventPrefix, "-").concat(id);
	}

	/**
	 * Checks if the table has a detail view icon.
	 *
	 * @param {Object.<string, *>} options - The table options.
	 * @returns {boolean} True if the table has a detail view icon, false otherwise.
	 */
	function hasDetailViewIcon(options) {
	  return options.detailView && options.detailViewIcon && !options.cardView;
	}

	/**
	 * Gets the index offset for the detail view column.
	 *
	 * @param {Object.<string, *>} options - The table options.
	 * @returns {number} The index offset (1 if detail view is on the left, 0 otherwise).
	 */
	function getDetailViewIndexOffset(options) {
	  return hasDetailViewIcon(options) && options.detailViewAlign !== 'right' ? 1 : 0;
	}

	/**
	 * Adds query parameters to a URL while preserving the hash fragment.
	 *
	 * @param {string} url - The base URL.
	 * @param {Object.<string, string>} query - The query parameters to add.
	 * @returns {string} The URL with query parameters added.
	 */
	function addQueryToUrl(url, query) {
	  var hashArray = url.split('#');
	  var _hashArray$0$split = hashArray[0].split('?'),
	    _hashArray$0$split2 = _slicedToArray(_hashArray$0$split, 2),
	    baseUrl = _hashArray$0$split2[0],
	    search = _hashArray$0$split2[1];
	  var urlParams = new URLSearchParams(search);
	  for (var _i = 0, _Object$entries = Object.entries(query); _i < _Object$entries.length; _i++) {
	    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
	      key = _Object$entries$_i[0],
	      value = _Object$entries$_i[1];
	    urlParams.set(key, value);
	  }
	  return "".concat(baseUrl, "?").concat(urlParams.toString(), "#").concat(hashArray.slice(1).join('#'));
	}

	/**
	 * Checks if a value is numeric.
	 *
	 * @param {*} n - The value to check.
	 * @returns {boolean} True if the value is numeric, false otherwise.
	 */
	function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	/**
	 * Checks if the current browser is Internet Explorer.
	 *
	 * @returns {boolean} True if the browser is IE, false otherwise.
	 */
	function isIEBrowser() {
	  return navigator.userAgent.includes('MSIE ') || /Trident.*rv:11\./.test(navigator.userAgent);
	}

	var helper = /*#__PURE__*/Object.freeze({
		__proto__: null,
		addQueryToUrl: addQueryToUrl,
		calculateObjectValue: calculateObjectValue,
		debounce: debounce,
		getDetailViewIndexOffset: getDetailViewIndexOffset,
		getEventName: getEventName,
		hasDetailViewIcon: hasDetailViewIcon,
		isIEBrowser: isIEBrowser,
		isNumeric: isNumeric
	});

	/**
	 * Search and sorting utilities.
	 *
	 * This module provides utility functions for searching and sorting table data,
	 * including regex comparison, custom sorting logic, and search result highlighting.
	 *
	 * @module utils/search-sort
	 */

	/**
	 * Compares a value against a search pattern using regex.
	 * Supports both plain text search and regex patterns (e.g., /pattern/flags).
	 *
	 * @param {*} value - The value to search in.
	 * @param {string} search - The search pattern or regex.
	 * @returns {boolean} True if the value matches the search pattern, false otherwise.
	 */
	function regexCompare(value, search) {
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
	}

	/**
	 * Sorts two values with support for numeric, string, and empty value handling.
	 *
	 * @param {*} a - The first value to compare.
	 * @param {*} b - The second value to compare.
	 * @param {number} order - The sort order (1 for ascending, -1 for descending).
	 * @param {Object.<string, *>} options - Sort options.
	 * @param {boolean} [options.sortStable=false] - If true, use position for equal values.
	 * @param {boolean} [options.sortEmptyLast=false] - If true, sort empty values last.
	 * @param {number} aPosition - The position of the first value.
	 * @param {number} bPosition - The position of the second value.
	 * @returns {number} Negative if a < b, positive if a > b, 0 if equal.
	 */
	function sort(a, b, order, options, aPosition, bPosition) {
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
	  if (isNumeric(a) && isNumeric(b)) {
	    // Convert numerical values from string to float.
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
	}

	/**
	 * Highlights search text matches in HTML by wrapping them in <mark> tags.
	 * Recursively processes all text nodes in the HTML.
	 *
	 * @param {string|Element} html - The HTML string or DOM element to process.
	 * @param {string} searchText - The text to search for and highlight.
	 * @returns {string|Element} The HTML with matches highlighted, or the processed element.
	 */
	function replaceSearchMark(html, searchText) {
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
	          var _iterator = _createForOfIteratorHelper(elements),
	            _step;
	          try {
	            for (_iterator.s(); !(_step = _iterator.n()).done;) {
	              var el = _step.value;
	              node.insertBefore(el, child);
	            }
	          } catch (err) {
	            _iterator.e(err);
	          } finally {
	            _iterator.f();
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
	}

	var searchSort = /*#__PURE__*/Object.freeze({
		__proto__: null,
		regexCompare: regexCompare,
		replaceSearchMark: replaceSearchMark,
		sort: sort
	});

	/**
	 * Bootstrap Table Checkbox Utilities
	 * Generate Bootstrap 5 or Bootstrap 3/4 compatible checkbox HTML and virtual DOM config
	 *
	 * @module utils/checkbox
	 */

	/**
	 * Generate Bootstrap 5 or Bootstrap 3/4 compatible checkbox HTML
	 * @param {Object} options - Configuration options
	 * @param {string} options.name - checkbox name attribute
	 * @param {string} [options.value] - checkbox value attribute
	 * @param {boolean} [options.checked] - whether checked
	 * @param {boolean} [options.disabled] - whether disabled
	 * @param {string} [options.label] - display text
	 * @param {string} [options.extraClass] - extra CSS classes (must contain only safe CSS characters: letters, digits, hyphens, underscores)
	 * @param {boolean} [options.centered=true] - whether centered (for table checkbox)
	 * @param {boolean} [options.withLabel=false] - whether include label (for dropdown menu)
	 * @returns {string} HTML string
	 */
	function getCheckboxHtml(options) {
	  var name = options.name,
	    _options$value = options.value,
	    value = _options$value === void 0 ? '' : _options$value,
	    _options$checked = options.checked,
	    checked = _options$checked === void 0 ? false : _options$checked,
	    _options$disabled = options.disabled,
	    disabled = _options$disabled === void 0 ? false : _options$disabled,
	    _options$label = options.label,
	    label = _options$label === void 0 ? '' : _options$label,
	    _options$extraClass = options.extraClass,
	    extraClass = _options$extraClass === void 0 ? '' : _options$extraClass,
	    _options$centered = options.centered,
	    centered = _options$centered === void 0 ? true : _options$centered,
	    _options$withLabel = options.withLabel,
	    withLabel = _options$withLabel === void 0 ? false : _options$withLabel;
	  var checkedAttr = checked ? ' checked="checked"' : '';
	  var disabledAttr = disabled ? ' disabled="disabled"' : '';
	  var valueAttr = value !== undefined && value !== '' ? " value=\"".concat(escapeAttr(value), "\"") : '';
	  var classAttr = extraClass ? " ".concat(extraClass) : '';
	  var escapedName = escapeAttr(name);
	  var escapedLabel = escapeHTML(label);
	  if (getBootstrapVersion() === 5) {
	    if (withLabel) {
	      return "<label class=\"dropdown-item dropdown-item-marker d-flex align-items-center gap-2\">\n        <input class=\"form-check-input m-0".concat(classAttr, "\" type=\"checkbox\" name=\"").concat(escapedName, "\"").concat(valueAttr).concat(checkedAttr).concat(disabledAttr, " />\n        <span>").concat(escapedLabel, "</span>\n      </label>");
	    }
	    var centerClass = centered ? ' d-flex justify-content-center' : '';
	    return "<div class=\"form-check".concat(centerClass, "\">\n      <input class=\"form-check-input").concat(classAttr, "\" type=\"checkbox\" name=\"").concat(escapedName, "\"").concat(valueAttr).concat(checkedAttr).concat(disabledAttr, " />\n    </div>");
	  }
	  if (withLabel) {
	    return "<label><input type=\"checkbox\" name=\"".concat(escapedName, "\"").concat(valueAttr).concat(checkedAttr).concat(disabledAttr).concat(classAttr, "> <span>").concat(escapedLabel, "</span></label>");
	  }
	  return "<label><input type=\"checkbox\" name=\"".concat(escapedName, "\"").concat(valueAttr).concat(checkedAttr).concat(disabledAttr).concat(classAttr, " /><span></span></label>");
	}

	/**
	 * Generate form-check wrapped checkbox HTML (for table cells)
	 * @param {string} inputHtml - input element HTML (must be trusted or pre-escaped, as it is inserted without additional escaping)
	 * @param {boolean} [centered=true] - whether centered
	 * @returns {string} HTML string
	 */
	function wrapCheckbox(inputHtml) {
	  var centered = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  if (getBootstrapVersion() === 5) {
	    var centerClass = centered ? ' d-flex justify-content-center' : '';
	    return "<div class=\"form-check".concat(centerClass, "\">").concat(inputHtml, "</div>");
	  }
	  return "<label>".concat(inputHtml, "<span></span></label>");
	}

	/**
	 * Get checkbox virtual DOM config (for virtual DOM rendering in body.js)
	 * @param {Object} options - Configuration options
	 * @param {Object} options.inputAttrs - input element attributes object
	 * @param {string} options.formCheckClass - form-check CSS class name
	 * @param {string} options.formCheckInputClass - form-check-input CSS class name
	 * @param {boolean} [options.centered=true] - whether centered
	 * @returns {Object} Virtual DOM config object with inputAttrs, wrapperAttrs, wrapperTag and hasSpan
	 */
	function getCheckboxVdomConfig(options) {
	  var inputAttrs = options.inputAttrs,
	    formCheckClass = options.formCheckClass,
	    formCheckInputClass = options.formCheckInputClass,
	    _options$centered2 = options.centered,
	    centered = _options$centered2 === void 0 ? true : _options$centered2;
	  if (getBootstrapVersion() === 5) {
	    var centerClass = centered ? ' d-flex justify-content-center' : '';
	    return {
	      inputAttrs: _objectSpread2(_objectSpread2({}, inputAttrs), {}, {
	        class: formCheckInputClass
	      }),
	      wrapperAttrs: {
	        class: "".concat(formCheckClass).concat(centerClass)
	      },
	      wrapperTag: 'div',
	      hasSpan: false
	    };
	  }
	  return {
	    inputAttrs: inputAttrs,
	    wrapperAttrs: {},
	    wrapperTag: 'label',
	    hasSpan: true
	  };
	}

	/**
	 * Generate showColumns dropdown menu column selection checkbox HTML
	 * Differs from getCheckboxHtml by using data-field instead of name attribute
	 * @param {Object} options - Configuration options
	 * @param {string} options.dataField - column field name (for data-field attribute)
	 * @param {string} options.value - checkbox value attribute
	 * @param {boolean} options.checked - whether checked
	 * @param {boolean} options.disabled - whether disabled
	 * @param {string} options.label - display text
	 * @returns {string} HTML string
	 */
	function getDropdownColumnCheckboxHtml(options) {
	  var dataField = options.dataField,
	    value = options.value,
	    checked = options.checked,
	    disabled = options.disabled,
	    label = options.label;
	  var checkedAttr = checked ? ' checked="checked"' : '';
	  var disabledAttr = disabled ? ' disabled="disabled"' : '';
	  var escapedLabel = escapeHTML(label);
	  if (getBootstrapVersion() === 5) {
	    return "<label class=\"dropdown-item dropdown-item-marker d-flex align-items-center gap-2\">\n      <input class=\"form-check-input m-0\" type=\"checkbox\" data-field=\"".concat(escapeAttr(dataField), "\" value=\"").concat(escapeAttr(value), "\"").concat(checkedAttr).concat(disabledAttr, " />\n      <span>").concat(escapedLabel, "</span>\n    </label>");
	  }
	  return "<input type=\"checkbox\" data-field=\"".concat(escapeAttr(dataField), "\" value=\"").concat(escapeAttr(value), "\"").concat(checkedAttr).concat(disabledAttr, "> <span>").concat(escapedLabel, "</span>");
	}

	var checkbox = /*#__PURE__*/Object.freeze({
		__proto__: null,
		getCheckboxHtml: getCheckboxHtml,
		getCheckboxVdomConfig: getCheckboxVdomConfig,
		getDropdownColumnCheckboxHtml: getDropdownColumnCheckboxHtml,
		wrapCheckbox: wrapCheckbox
	});

	var Utils = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, framework), object), string), dom), tableData), searchSort), helper), checkbox);

	var VERSION = '1.27.0';
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
	      formCheck: 'form-check',
	      formCheckInput: 'form-check-input',
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
	}[bootstrapVersion || 5];
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

	/**
	 * Bootstrap Table Global Configuration Storage
	 * Replaces $.fn.bootstrapTable for jQuery-free operation
	 */


	// Global configuration object
	var BootstrapTableConfig = {
	  theme: Constants.THEME,
	  VERSION: Constants.VERSION,
	  icons: Constants.ICONS,
	  defaults: Constants.DEFAULTS,
	  columnDefaults: Constants.COLUMN_DEFAULTS,
	  events: Constants.EVENTS,
	  locales: Constants.LOCALES,
	  methods: Constants.METHODS,
	  utils: Utils
	};

	return BootstrapTableConfig;

}));
