(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
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

	var es_object_assign = {};

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

	/**
	 * Bootstrap Table Afrikaans translation
	 * Author: Phillip Kruger <phillip.kruger@gmail.com>
	 */

	$.fn.bootstrapTable.locales['af-ZA'] = $.fn.bootstrapTable.locales['af'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Voeg \'n vlak by';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Maak';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Gevorderde soektog';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alles';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Verfris outomaties';
	  },
	  formatCancel: function formatCancel() {
	    return 'Kanselleer';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Duidelike soektog';
	  },
	  formatColumn: function formatColumn() {
	    return 'Kolom';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolomme';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Wys alles';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Kopieer lyne';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Vee \'n vlak uit';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "".concat(totalRows, "-re\xEBl vertoon");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Verwyder of wysig asseblief duplikaatinskrywings';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplikaatinskrywings is gevind!';
	  },
	  formatExport: function formatExport() {
	    return 'Voer data uit';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Versteek/Wys kontroles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Versteek kontroles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Wys kontroles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Volskerm';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Gaan na';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Laai tans';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multi-sorteer';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Geen resultate nie';
	  },
	  formatOrder: function formatOrder() {
	    return 'Bestelling';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Versteek/Wys paginasie';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Wys paginasie';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Versteek paginasie';
	  },
	  formatPrint: function formatPrint() {
	    return 'Druk uit';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " re\xEBls per bladsy");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Verfris';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'volgende bladsy';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na bladsy ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'vorige bladsy';
	  },
	  formatSearch: function formatSearch() {
	    return 'Navorsing';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Wys ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " lyne (gefiltreer vanaf ").concat(totalNotFiltered, " lyne)");
	    }
	    return "Wys ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " lyne");
	  },
	  formatSort: function formatSort() {
	    return 'Rangskik';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sorteer volgens';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Stygende',
	      desc: 'Dalende'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Dan deur';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Versteek pasgemaakte aansig';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Wys pasgemaakte aansig';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Versteek kaartaansig';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Wys kaartaansig';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA']);

	/**
	 * Bootstrap Table Arabic translation
	 * Author: Othman Ali Modaes<othman2004_ye@yahoo.com>
	 */

	$.fn.bootstrapTable.locales['ar-SA'] = $.fn.bootstrapTable.locales['ar'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'إغلاق';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'بحث متقدم';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'الكل';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'تحديث تلقائي';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'مسح مربع البحث';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'أعمدة';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'تبديل الكل';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'نسخ الصفوف';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0639\u0631\u0636 ".concat(totalRows, " \u0623\u0639\u0645\u062F\u0629");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'تصدير البيانات';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'عرض/إخفاء عناصر التصفية';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'إخفاء عناصر التصفية';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'عرض عناصر التصفية';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'الشاشة كاملة';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'قفز';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'جارٍ التحميل، يرجى الانتظار...';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'لا توجد نتائج مطابقة للبحث';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'إخفاء/إظهار ترقيم الصفحات';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'إظهار ترقيم الصفحات';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'إخفاء ترقيم الصفحات';
	  },
	  formatPrint: function formatPrint() {
	    return 'طباعة';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0635\u0641 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'تحديث';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'الصفحة التالية';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSearch: function formatSearch() {
	    return 'بحث';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0627\u0644\u0638\u0627\u0647\u0631 ".concat(pageFrom, " \u0625\u0644\u0649 ").concat(pageTo, " \u0645\u0646 ").concat(totalRows, " \u0633\u062C\u0644 ").concat(totalNotFiltered, " \u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0635\u0641\u0648\u0641)");
	    }
	    return "\u0627\u0644\u0638\u0627\u0647\u0631 ".concat(pageFrom, " \u0625\u0644\u0649 ").concat(pageTo, " \u0645\u0646 ").concat(totalRows, " \u0633\u062C\u0644");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'إلغاء البطاقات';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'إظهار كبطاقات';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA']);

	/**
	 * Bootstrap Table Bulgarian translation
	 * Author: Mikhail Kalatchev <kalatchev[at]gmail.com>
	 */

	$.fn.bootstrapTable.locales['bg-BG'] = $.fn.bootstrapTable.locales['bg'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Затваряне';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Разширено търсене';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Всички';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Автоматично обновяване';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Изчистване на търсенето';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Колони';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Превключване на всички';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Копиране на редове';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438 ".concat(totalRows, " \u0440\u0435\u0434\u0430");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Експорт на данни';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Скрива/показва контроли';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Скрива контроли';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Показва контроли';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Цял екран';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'ОТИДИ';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Зареждане, моля изчакайте';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Не са намерени съвпадащи записи';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Скриване/Показване на странициране';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Показване на странициране';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Скриване на странициране';
	  },
	  formatPrint: function formatPrint() {
	    return 'Печат';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0440\u0435\u0434\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Обновяване';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'следваща страница';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0434\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'предишна страница';
	  },
	  formatSearch: function formatSearch() {
	    return 'Търсене';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438 \u0440\u0435\u0434\u043E\u0432\u0435 \u043E\u0442 ".concat(pageFrom, " \u0434\u043E ").concat(pageTo, " \u043E\u0442 ").concat(totalRows, " (\u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u0438 \u043E\u0442 \u043E\u0431\u0449\u043E ").concat(totalNotFiltered, ")");
	    }
	    return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438 \u0440\u0435\u0434\u043E\u0432\u0435 \u043E\u0442 ".concat(pageFrom, " \u0434\u043E ").concat(pageTo, " \u043E\u0442 \u043E\u0431\u0449\u043E ").concat(totalRows);
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Скриване на изглед карта';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Показване на изглед карта';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['bg-BG']);

	/**
	 * Bootstrap Table Catalan translation
	 * Authors: Marc Pina<iwalkalone69@gmail.com>
	 *          Claudi Martinez<claudix.kernel@gmail.com>
	 *          Joan Puigcerver<joapuiib@gmail.com>
	 */

	$.fn.bootstrapTable.locales['ca-ES'] = $.fn.bootstrapTable.locales['ca'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Tanca';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Cerca avançada';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tots';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresca';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Neteja cerca';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alterna totes';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copia resultats';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrant ".concat(totalRows, " resultats");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Exporta dades';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Mostra/Amaga controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Mostra controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Amaga controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Espereu, si us plau';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No s\'han trobat resultats';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Amaga/Mostra paginació';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Mostra paginació';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Amaga paginació';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimeix';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " resultats per p\xE0gina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Refresca';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'Pàgina següent';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "A la p\xE0gina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'Pàgina anterior';
	  },
	  formatSearch: function formatSearch() {
	    return 'Cerca';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrant resultats ".concat(pageFrom, " fins ").concat(pageTo, " - ").concat(totalRows, " resultats (filtrats d'un total de ").concat(totalNotFiltered, " resultats)");
	    }
	    return "Mostrant resultats ".concat(pageFrom, " fins ").concat(pageTo, " - ").concat(totalRows, " resultats en total");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Amaga vista de tarjeta';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostra vista de tarjeta';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES']);

	/**
	 * Bootstrap Table Czech translation
	 * Author: Lukas Kral (monarcha@seznam.cz)
	 * Author: Jakub Svestka <svestka1999@gmail.com>
	 */

	$.fn.bootstrapTable.locales['cs-CZ'] = $.fn.bootstrapTable.locales['cs'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zavřít';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pokročilé hledání';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Vše';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatické obnovení';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Smazat hledání';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Sloupce';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Zobrazit/Skrýt vše';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Kopírovat řádky';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Zobrazuji ".concat(totalRows, " \u0159\xE1dek");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export dat';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Skrýt/Zobrazit ovladače';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Skrýt ovladače';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Zobrazit ovladače';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Zapnout/Vypnout fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Čekejte, prosím';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nenalezena žádná vyhovující položka';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Skrýt/Zobrazit stránkování';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Zobrazit stránkování';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Skrýt stránkování';
	  },
	  formatPrint: function formatPrint() {
	    return 'Tisk';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " polo\u017Eek na str\xE1nku");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Aktualizovat';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'další strana';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na stranu ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'předchozí strana';
	  },
	  formatSearch: function formatSearch() {
	    return 'Vyhledávání';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Zobrazena ".concat(pageFrom, ". - ").concat(pageTo, " . polo\u017Eka z celkov\xFDch ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Zobrazena ".concat(pageFrom, ". - ").concat(pageTo, " . polo\u017Eka z celkov\xFDch ").concat(totalRows);
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Zobrazit tabulku';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Zobrazit karty';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ']);

	/**
	 * Bootstrap Table danish translation
	 * Author: Your Name Jan Borup Coyle, github@coyle.dk
	 */

	$.fn.bootstrapTable.locales['da-DK'] = $.fn.bootstrapTable.locales['da'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alle';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Ryd filtre';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolonner';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Viser ".concat(totalRows, " r\xE6kke").concat(totalRows > 1 ? 'r' : '');
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Eksporter';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Indlæser, vent venligst';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ingen poster fundet';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Skjul/vis nummerering';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " poster pr side");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Opdater';
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
	  formatSearch: function formatSearch() {
	    return 'Søg';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Viser ".concat(pageFrom, " til ").concat(pageTo, " af ").concat(totalRows, " r\xE6kke").concat(totalRows > 1 ? 'r' : '', " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Viser ".concat(pageFrom, " til ").concat(pageTo, " af ").concat(totalRows, " r\xE6kke").concat(totalRows > 1 ? 'r' : '');
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK']);

	/**
	* Bootstrap Table German translation
	* Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
	*/

	$.fn.bootstrapTable.locales['de-DE'] = $.fn.bootstrapTable.locales['de'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Ebene hinzufügen';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Schließen';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Erweiterte Suche';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alle';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatisches Neuladen';
	  },
	  formatCancel: function formatCancel() {
	    return 'Abbrechen';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Lösche Filter';
	  },
	  formatColumn: function formatColumn() {
	    return 'Spalte';
	  },
	  formatColumns: function formatColumns() {
	    return 'Spalten';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alle umschalten';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Zeilen kopieren';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Ebene entfernen';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Zeige ".concat(totalRows, " Zeile").concat(totalRows > 1 ? 'n' : '', ".");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Bitte doppelte Spalten entfenen oder ändern';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Doppelte Einträge gefunden!';
	  },
	  formatExport: function formatExport() {
	    return 'Datenexport';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Verstecke/Zeige Filter';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Verstecke Filter';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Zeige Filter';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Vollbild';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Springen';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Lade, bitte warten';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Mehrfachsortierung';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Keine passenden Ergebnisse gefunden';
	  },
	  formatOrder: function formatOrder() {
	    return 'Reihenfolge';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Verstecke/Zeige Nummerierung';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Zeige Nummerierung';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Verstecke Nummerierung';
	  },
	  formatPrint: function formatPrint() {
	    return 'Drucken';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " Zeilen pro Seite.");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Neu laden';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'Nächste Seite';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "Zu Seite ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'Vorherige Seite';
	  },
	  formatSearch: function formatSearch() {
	    return 'Suchen';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Zeige Zeile ".concat(pageFrom, " bis ").concat(pageTo, " von ").concat(totalRows, " Zeile").concat(totalRows > 1 ? 'n' : '', " (Gefiltert von ").concat(totalNotFiltered, " Zeile").concat(totalNotFiltered > 1 ? 'n' : '', ")");
	    }
	    return "Zeige Zeile ".concat(pageFrom, " bis ").concat(pageTo, " von ").concat(totalRows, " Zeile").concat(totalRows > 1 ? 'n' : '', ".");
	  },
	  formatSort: function formatSort() {
	    return 'Sortieren';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sortieren nach';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Aufsteigend',
	      desc: 'Absteigend'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'anschließend';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Kartenansicht';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Normale Ansicht';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE']);

	/**
	 * Bootstrap Table Greek translation
	 * Author: giannisdallas
	 */

	$.fn.bootstrapTable.locales['el-GR'] = $.fn.bootstrapTable.locales['el'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columns';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Φορτώνει, παρακαλώ περιμένετε';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Δεν βρέθηκαν αποτελέσματα';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
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
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03B1\u03BD\u03AC \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Refresh';
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
	  formatSearch: function formatSearch() {
	    return 'Αναζητήστε';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD ".concat(pageFrom, " \u03C9\u03C2 \u03C4\u03B7\u03BD ").concat(pageTo, " \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF ").concat(totalRows, " \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD ".concat(pageFrom, " \u03C9\u03C2 \u03C4\u03B7\u03BD ").concat(pageTo, " \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF ").concat(totalRows, " \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR']);

	/**
	 * Bootstrap Table English translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$.fn.bootstrapTable.locales['en-US'] = $.fn.bootstrapTable.locales['en'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columns';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Loading, please wait';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No matching records found';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
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
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rows per page");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Refresh';
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
	  formatSearch: function formatSearch() {
	    return 'Search';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en-US']);

	/**
	 * Bootstrap Table Spanish (Argentina) translation
	 * Author: Felix Vera (felix.vera@gmail.com)
	 * Edited by: DarkThinking (https://github.com/DarkThinking)
	 */

	$.fn.bootstrapTable.locales['es-AR'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Recargar';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Cambiar todo';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar Filas';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " columnas");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar datos';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Ir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, espere por favor';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron registros';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Ocultar/Mostrar paginación';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Mostrar paginación';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Ocultar paginación';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registros por p\xE1gina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Recargar';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'siguiente página';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando desde ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas (filtrado de ").concat(totalNotFiltered, " columnas totales)");
	    }
	    return "Mostrando desde ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista de carta';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista de carta';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-AR']);

	/**
	 * Traducción de librería Bootstrap Table a Español (Chile)
	 * @author Brian Álvarez Azócar
	 * email brianalvarezazocar@gmail.com
	 */

	$.fn.bootstrapTable.locales['es-CL'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Recargar';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Cambiar todo';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar Filas';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " filas");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar datos';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'IR';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, espere por favor';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron registros';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Ocultar/Mostrar paginación';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Mostrar paginación';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Ocultar paginación';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " filas por p\xE1gina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Refrescar';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'siguiente página';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas (filtrado de ").concat(totalNotFiltered, " filas totales)");
	    }
	    return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista de carta';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista de carta';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CL']);

	/**
	 * Bootstrap Table Spanish (Costa Rica) translation
	 * Author: Dennis Hernández
	 * Review: Jei (@jeijei4) (20/Oct/2022)
	 */

	$.fn.bootstrapTable.locales['es-CR'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todas las filas';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualización automática';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alternar todo';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar filas';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " filas");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Mostrar/ocultar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Ver';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, por favor espere';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron resultados';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Mostrar/ocultar paginación';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Mostrar paginación';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Ocultar paginación';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " filas por p\xE1gina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Actualizar';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'página siguiente';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ir a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas (filtrado de un total de ").concat(totalNotFiltered, " filas)");
	    }
	    return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista en tarjetas';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista en tarjetas';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR']);

	/**
	 * Bootstrap Table Spanish Spain translation
	 * Author: Marc Pina<iwalkalone69@gmail.com>
	 * Update: @misteregis <misteregis@gmail.com>
	 */

	$.fn.bootstrapTable.locales['es-ES'] = $.fn.bootstrapTable.locales['es'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Agregar nivel';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todos';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Recargar';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancelar';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatColumn: function formatColumn() {
	    return 'Columna';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Cambiar todo';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar filas';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Eliminar nivel';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " fila").concat(totalRows > 1 ? 's' : '');
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Por favor, elimine o modifique las columnas duplicadas';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return '¡Se encontraron entradas duplicadas!';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar los datos';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Exibir controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'IR';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, por favor espere';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Ordenación múltiple';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron resultados coincidentes';
	  },
	  formatOrder: function formatOrder() {
	    return 'Orden';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Ocultar/Mostrar paginación';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Mostrar paginación';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Ocultar paginación';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " resultados por p\xE1gina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Recargar';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'siguiente página';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    var plural = totalRows > 1 ? 's' : '';
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando desde ".concat(pageFrom, " hasta ").concat(pageTo, " - En total ").concat(totalRows, " resultado").concat(plural, " (filtrado de un total de ").concat(totalNotFiltered, " fila").concat(plural, ")");
	    }
	    return "Mostrando desde ".concat(pageFrom, " hasta ").concat(pageTo, " - En total ").concat(totalRows, " resultado").concat(plural);
	  },
	  formatSort: function formatSort() {
	    return 'Ordenar';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Ordenar por';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascendente',
	      desc: 'Descendente'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'a continuación';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista de carta';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista de carta';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES']);

	/**
	 * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
	 * Author: Felix Vera (felix.vera@gmail.com)
	 * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
	 * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
	 * Revisión: Ricardo González (rickygzz85@gmail.com) (20/Oct/2021)
	 */

	$.fn.bootstrapTable.locales['es-MX'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto actualizar';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alternar todo';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar Filas';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " filas");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar datos';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'IR';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, espere por favor';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron registros que coincidan';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Mostrar/ocultar paginación';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Mostrar paginación';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Ocultar paginación';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " resultados por p\xE1gina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Actualizar';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'página siguiente';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ir a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas (filtrado de ").concat(totalNotFiltered, " filas totales)");
	    }
	    return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX']);

	/**
	 * Bootstrap Table Spanish (Nicaragua) translation
	 * Author: Dennis Hernández
	 */

	$.fn.bootstrapTable.locales['es-NI'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, por favor espere';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron registros';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
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
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registros por p\xE1gina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Refrescar';
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
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando de ".concat(pageFrom, " a ").concat(pageTo, " registros de ").concat(totalRows, " registros en total (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Mostrando de ".concat(pageFrom, " a ").concat(pageTo, " registros de ").concat(totalRows, " registros en total");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-NI']);

	/**
	 * Bootstrap Table Spanish (España) translation
	 * Author: Antonio Pérez <anpegar@gmail.com>
	 */

	$.fn.bootstrapTable.locales['es-SP'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, por favor espera';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se han encontrado registros.';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
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
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registros por p&#225;gina.");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Actualizar';
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
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "".concat(pageFrom, " - ").concat(pageTo, " de ").concat(totalRows, " registros (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "".concat(pageFrom, " - ").concat(pageTo, " de ").concat(totalRows, " registros.");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-SP']);

	/**
	 * Bootstrap Table Estonian translation
	 * Author: kristjan@logist.it>
	 */

	$.fn.bootstrapTable.locales['et-EE'] = $.fn.bootstrapTable.locales['et'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Kõik';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Veerud';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Päring käib, palun oota';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Päringu tingimustele ei vastanud ühtegi tulemust';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Näita/Peida lehtedeks jagamine';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rida lehe kohta");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Värskenda';
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
	  formatSearch: function formatSearch() {
	    return 'Otsi';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "N\xE4itan tulemusi ".concat(pageFrom, " kuni ").concat(pageTo, " - kokku ").concat(totalRows, " tulemust (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "N\xE4itan tulemusi ".concat(pageFrom, " kuni ").concat(pageTo, " - kokku ").concat(totalRows, " tulemust");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['et-EE']);

	/**
	 * Bootstrap Table Basque (Basque Country) translation
	 * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
	 */

	$.fn.bootstrapTable.locales['eu-EU'] = $.fn.bootstrapTable.locales['eu'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Guztiak';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Zutabeak';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Itxaron mesedez';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ez da emaitzarik aurkitu';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Ezkutatu/Erakutsi orrikatzea';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " emaitza orriko.");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Eguneratu';
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
	  formatSearch: function formatSearch() {
	    return 'Bilatu';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "".concat(totalRows, " erregistroetatik ").concat(pageFrom, "etik ").concat(pageTo, "erakoak erakusten (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "".concat(totalRows, " erregistroetatik ").concat(pageFrom, "etik ").concat(pageTo, "erakoak erakusten.");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['eu-EU']);

	/**
	 * Bootstrap Table Persian translation
	 * Author: MJ Vakili <mjv.1989@Gmail.com>
	 */

	$.fn.bootstrapTable.locales['fa-IR'] = $.fn.bootstrapTable.locales['fa'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'بستن';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'جستجوی پیشرفته';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'همه';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'رفرش اتوماتیک';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'پاک کردن جستجو';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'سطر ها';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'تغییر وضعیت همه';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'کپی ردیف ها';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0646\u0645\u0627\u06CC\u0634 ".concat(totalRows, " \u0633\u0637\u0631\u0647\u0627");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'خروجی دیتا';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'پنهان/نمایش دادن کنترل ها';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'پنهان کردن کنترل ها';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'نمایش کنترل ها';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'تمام صفحه';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'برو';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'در حال بارگذاری, لطفا صبر کنید';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'رکوردی یافت نشد.';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'نمایش/مخفی صفحه بندی';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'نمایش صفحه بندی';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'پنهان کردن صفحه بندی';
	  },
	  formatPrint: function formatPrint() {
	    return 'پرینت';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0631\u06A9\u0648\u0631\u062F \u062F\u0631 \u0635\u0641\u062D\u0647");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'به روز رسانی';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'صفحه بعدی';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0628\u0647 \u0635\u0641\u062D\u0647 ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'صفحه قبلی';
	  },
	  formatSearch: function formatSearch() {
	    return 'جستجو';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0646\u0645\u0627\u06CC\u0634 ".concat(pageFrom, " \u062A\u0627 ").concat(pageTo, " \u0627\u0632 ").concat(totalRows, " \u0631\u062F\u06CC\u0641 (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u0646\u0645\u0627\u06CC\u0634 ".concat(pageFrom, " \u062A\u0627 ").concat(pageTo, " \u0627\u0632 ").concat(totalRows, " \u0631\u062F\u06CC\u0641");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR']);

	/**
	 * Bootstrap Table Finnish translations
	 * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
	 */

	$.fn.bootstrapTable.locales['fi-FI'] = $.fn.bootstrapTable.locales['fi'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Kaikki';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Poista suodattimet';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Sarakkeet';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Vie tiedot';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Ladataan, ole hyvä ja odota';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Hakuehtoja vastaavia tuloksia ei löytynyt';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Näytä/Piilota sivutus';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rivi\xE4 sivulla");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Päivitä';
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
	  formatSearch: function formatSearch() {
	    return 'Hae';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "N\xE4ytet\xE4\xE4n rivit ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "N\xE4ytet\xE4\xE4n rivit ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows);
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI']);

	/**
	 * Bootstrap Table French (Belgium) translation
	 * Author: Julien Bisconti (julien.bisconti@gmail.com)
	 *         Nevets82 <Nevets82@gmail.com>
	 */

	$.fn.bootstrapTable.locales['fr-BE'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Ajouter un niveau';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fermer';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Recherche avancée';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualiser automatiquement';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuler';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatColumn: function formatColumn() {
	    return 'Colonne';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout afficher';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copier les lignes';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Supprimer un niveau';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Affichage de ".concat(totalRows, " lignes");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Veuillez supprimer ou modifier les entrées en double';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Des entrées en double ont été trouvées !';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Masquer/Afficher les contrôles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Masquer les contrôles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Afficher les contrôles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Aller à';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Tri multiple';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Aucun résultat';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordre';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Masquer/Afficher la pagination';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Afficher la pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Masquer la pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimer';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Actualiser';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'page suivante';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "vers la page ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'page précédente';
	  },
	  formatSearch: function formatSearch() {
	    return 'Rechercher';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9es \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }
	    return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
	  },
	  formatSort: function formatSort() {
	    return 'Trier';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Trier par';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascendant',
	      desc: 'Descendant'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Puis par';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Cacher la vue personnalisée';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Afficher la vue personnalisée';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher la vue en cartes';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher la vue en cartes';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-BE']);

	/**
	 * Bootstrap Table French (Suisse) translation
	 * Author: Nevets82 <Nevets82@gmail.com>
	*/

	$.fn.bootstrapTable.locales['fr-CH'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Ajouter un niveau';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fermer';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Recherche avancée';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualiser automatiquement';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuler';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatColumn: function formatColumn() {
	    return 'Colonne';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout afficher';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copier les lignes';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Supprimer un niveau';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Affichage de ".concat(totalRows, " lignes");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Veuillez supprimer ou modifier les entrées en double';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Des entrées en double ont été trouvées !';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Masquer/Afficher les contrôles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Masquer les contrôles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Afficher les contrôles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Aller à';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Tri multiple';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Aucun résultat';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordre';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Masquer/Afficher la pagination';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Afficher la pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Masquer la pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimer';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Actualiser';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'page suivante';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "vers la page ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'page précédente';
	  },
	  formatSearch: function formatSearch() {
	    return 'Rechercher';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9es \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }
	    return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
	  },
	  formatSort: function formatSort() {
	    return 'Trier';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Trier par';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascendant',
	      desc: 'Descendant'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Puis par';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Cacher la vue personnalisée';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Afficher la vue personnalisée';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher la vue en cartes';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher la vue en cartes';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-CH']);

	/**
	 * Bootstrap Table French (France) translation
	 * Author: Dennis Hernández
	 *         Tidalf (https://github.com/TidalfFR)
	 *         Nevets82 <Nevets82@gmail.com>
	 */

	$.fn.bootstrapTable.locales['fr-FR'] = $.fn.bootstrapTable.locales['fr'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Ajouter un niveau';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fermer';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Recherche avancée';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualiser automatiquement';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuler';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatColumn: function formatColumn() {
	    return 'Colonne';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout afficher';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copier les lignes';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Supprimer un niveau';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Affichage de ".concat(totalRows, " lignes");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Veuillez supprimer ou modifier les entrées en double';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Des entrées en double ont été trouvées !';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Masquer/Afficher les contrôles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Masquer les contrôles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Afficher les contrôles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Aller à';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Tri multiple';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Aucun résultat';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordre';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Masquer/Afficher la pagination';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Afficher la pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Masquer la pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimer';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Actualiser';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'page suivante';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "vers la page ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'page précédente';
	  },
	  formatSearch: function formatSearch() {
	    return 'Rechercher';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9es \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }
	    return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
	  },
	  formatSort: function formatSort() {
	    return 'Trier';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Trier par';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascendant',
	      desc: 'Descendant'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Puis par';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Cacher la vue personnalisée';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Afficher la vue personnalisée';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher la vue en cartes';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher la vue en cartes';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR']);

	/**
	 * Bootstrap Table French (Luxembourg) translation
	 * Author: Nevets82 <Nevets82@gmail.com>
	 * Editor: David Morais Ferreira (https://github.com/DavidMoraisFerreira/)
	 */

	$.fn.bootstrapTable.locales['fr-LU'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Ajouter un niveau';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fermer';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Recherche avancée';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualiser automatiquement';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuler';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatColumn: function formatColumn() {
	    return 'Colonne';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout afficher';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copier les lignes';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Supprimer un niveau';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Affichage de ".concat(totalRows, " lignes");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Veuillez supprimer ou modifier les entrées en double';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Des entrées en double ont été trouvées !';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Masquer/Afficher les contrôles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Masquer les contrôles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Afficher les contrôles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Aller à';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Tri multiple';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Aucun résultat';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordre';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Masquer/Afficher la pagination';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Afficher la pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Masquer la pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimer';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Actualiser';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'page suivante';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "vers la page ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'page précédente';
	  },
	  formatSearch: function formatSearch() {
	    return 'Rechercher';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9es \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }
	    return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
	  },
	  formatSort: function formatSort() {
	    return 'Trier';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Trier par';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascendant',
	      desc: 'Descendant'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Puis par';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Cacher la vue personnalisée';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Afficher la vue personnalisée';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher la vue en cartes';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher la vue en cartes';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-LU']);

	/**
	 * Bootstrap Table Hebrew translation
	 * Author: legshooter
	 */

	$.fn.bootstrapTable.locales['he-IL'] = $.fn.bootstrapTable.locales['he'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'הכל';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'עמודות';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'טוען, נא להמתין';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'לא נמצאו רשומות תואמות';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'הסתר/הצג מספור דפים';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'רענן';
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
	  formatSearch: function formatSearch() {
	    return 'חיפוש';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u05DE\u05E6\u05D9\u05D2 ".concat(pageFrom, " \u05E2\u05D3 ").concat(pageTo, " \u05DE-").concat(totalRows, "\u05E9\u05D5\u05E8\u05D5\u05EA").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u05DE\u05E6\u05D9\u05D2 ".concat(pageFrom, " \u05E2\u05D3 ").concat(pageTo, " \u05DE-").concat(totalRows, " \u05E9\u05D5\u05E8\u05D5\u05EA");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL']);

	/**
	 * Bootstrap Table Hindi translation
	 * Author: Saurabh Sharma <saurabhsharma2u@gmail.com>
	 */

	$.fn.bootstrapTable.locales['hi-IN'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'बंद करे';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'एडवांस सर्च';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'सब';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'ऑटो रिफ्रेश';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'सर्च क्लिअर करें';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'कॉलम';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'टॉगल आल';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'पंक्तियों की कॉपी करें';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "".concat(totalRows, " \u092A\u0902\u0915\u094D\u0924\u093F\u092F\u093E\u0902");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'एक्सपोर्ट डाटा';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'छुपाओ/दिखाओ कंट्रोल्स';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'छुपाओ कंट्रोल्स';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'दिखाओ कंट्रोल्स';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'पूर्ण स्क्रीन';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'जाओ';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'लोड हो रहा है कृपया प्रतीक्षा करें';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'मेल खाते रिकॉर्ड नही मिले';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'छुपाओ/दिखाओ पृष्ठ संख्या';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'दिखाओ पृष्ठ संख्या';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'छुपाओ पृष्ठ संख्या';
	  },
	  formatPrint: function formatPrint() {
	    return 'प्रिंट';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u092A\u094D\u0930\u0924\u093F \u092A\u0943\u0937\u094D\u0920 \u092A\u0902\u0915\u094D\u0924\u093F\u092F\u093E\u0901");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'रिफ्रेश';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'अगला पृष्ठ';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "".concat(page, " \u092A\u0943\u0937\u094D\u0920 \u092A\u0930");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'पिछला पृष्ठ';
	  },
	  formatSearch: function formatSearch() {
	    return 'सर्च';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "".concat(pageFrom, " - ").concat(pageTo, " \u092A\u0915\u094D\u0924\u093F\u092F\u093E ").concat(totalRows, " \u092E\u0947\u0902 \u0938\u0947 ( ").concat(totalNotFiltered, " \u092A\u0915\u094D\u0924\u093F\u092F\u093E)");
	    }
	    return "".concat(pageFrom, " - ").concat(pageTo, " \u092A\u0915\u094D\u0924\u093F\u092F\u093E ").concat(totalRows, " \u092E\u0947\u0902 \u0938\u0947");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'कार्ड दृश्य छुपाएं';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'कार्ड दृश्य दिखाएं';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hi-IN']);

	/**
	 * Bootstrap Table Croatian translation
	 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
	 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
	 */

	$.fn.bootstrapTable.locales['hr-HR'] = $.fn.bootstrapTable.locales['hr'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Sve';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolone';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Molimo pričekajte';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nije pronađen niti jedan zapis';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Prikaži/sakrij stranice';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " broj zapisa po stranici");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Osvježi';
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
	  formatSearch: function formatSearch() {
	    return 'Pretraži';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Prikazujem ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja zapisa ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Prikazujem ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja zapisa ").concat(totalRows);
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR']);

	/**
	 * Bootstrap Table Hungarian translation
	 * Author: Nagy Gergely <info@nagygergely.eu>
	 */

	$.fn.bootstrapTable.locales['hu-HU'] = $.fn.bootstrapTable.locales['hu'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Összes';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Oszlopok';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Betöltés, kérem várjon';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nincs találat';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Lapozó elrejtése/megjelenítése';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rekord per oldal");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Frissítés';
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
	  formatSearch: function formatSearch() {
	    return 'Keresés';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Megjelen\xEDtve ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows, " \xF6sszesen (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Megjelen\xEDtve ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows, " \xF6sszesen");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hu-HU']);

	/**
	 * Bootstrap Table Indonesian translation
	 * Author: Andre Gardiner<andre@sirdre.com>
	 */

	$.fn.bootstrapTable.locales['id-ID'] = $.fn.bootstrapTable.locales['id'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Menambahkan level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Tutup';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pencarian lanjutan';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Semua';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Penyegaran otomatis';
	  },
	  formatCancel: function formatCancel() {
	    return 'Batal';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Menghapus pencarian';
	  },
	  formatColumn: function formatColumn() {
	    return 'Kolom';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolom';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tampilkan semua';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Salin baris';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Menghapus level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Tampilan ".concat(totalRows, " baris");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Harap hapus atau ubah entri duplikat';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Entri duplikat telah ditemukan!';
	  },
	  formatExport: function formatExport() {
	    return 'Mengekspor data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Menyembunyikan/Menampilkan kontrol';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Menyembunyikan kontrol';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Menampilkan kontrol';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Layar penuh';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Pergi ke';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Pemuatan sedang berlangsung';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Penyortiran ganda';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Tidak ada hasil';
	  },
	  formatOrder: function formatOrder() {
	    return 'Urutan';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Sembunyikan/Tampilkan penomoran halaman';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Tampilkan penomoran halaman';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Sembunyikan penomoran halaman';
	  },
	  formatPrint: function formatPrint() {
	    return 'Mencetak';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " baris per halaman");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Segarkan';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'halaman berikutnya';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ke halaman ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'halaman sebelumnya';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pencarian';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Menampilkan dari ".concat(pageFrom, " hingga ").concat(pageTo, " pada ").concat(totalRows, " baris (difilter dari ").concat(totalNotFiltered, " baris)");
	    }
	    return "Menampilkan dari ".concat(pageFrom, " hingga ").concat(pageTo, " pada ").concat(totalRows, " baris");
	  },
	  formatSort: function formatSort() {
	    return 'Penyortiran';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Urutkan berdasarkan';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Menaik',
	      desc: 'Menurun'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Kemudian oleh';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Menyembunyikan tampilan khusus';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Menampilkan tampilan khusus';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Menyembunyikan tampilan peta';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Menampilkan tampilan peta';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID']);

	/**
	 * Bootstrap Table Italian translation
	 * Author: Davide Renzi<davide.renzi@gmail.com>
	 * Author: Davide Borsatto <davide.borsatto@gmail.com>
	 * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
	 */

	$.fn.bootstrapTable.locales['it-IT'] = $.fn.bootstrapTable.locales['it'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Chiudi';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Filtri avanzati';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tutto';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Aggiornamento';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Pulisci filtri';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonne';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Mostra tutte';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " elementi");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Esporta dati';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Schermo intero';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'VAI';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Caricamento in corso';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nessun elemento trovato';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Nascondi/Mostra paginazione';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Mostra paginazione';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Nascondi paginazione';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " elementi per pagina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Aggiorna';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'pagina successiva';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "alla pagina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'pagina precedente';
	  },
	  formatSearch: function formatSearch() {
	    return 'Cerca';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Visualizzazione da ".concat(pageFrom, " a ").concat(pageTo, " di ").concat(totalRows, " elementi (filtrati da ").concat(totalNotFiltered, " elementi totali)");
	    }
	    return "Visualizzazione da ".concat(pageFrom, " a ").concat(pageTo, " di ").concat(totalRows, " elementi");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Nascondi visuale a scheda';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostra visuale a scheda';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT']);

	/**
	 * Bootstrap Table Japanese translation
	 * Author: Azamshul Azizy <azamshul@gmail.com>
	 */

	$.fn.bootstrapTable.locales['ja-JP'] = $.fn.bootstrapTable.locales['ja'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'すべて';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return '列';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return '読み込み中です。少々お待ちください。';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return '該当するレコードが見つかりません';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'ページ数を表示・非表示';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "\u30DA\u30FC\u30B8\u5F53\u305F\u308A\u6700\u5927".concat(pageNumber, "\u4EF6");
	  },
	  formatRefresh: function formatRefresh() {
	    return '更新';
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
	  formatSearch: function formatSearch() {
	    return '検索';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u5168".concat(totalRows, "\u4EF6\u304B\u3089\u3001").concat(pageFrom, "\u304B\u3089").concat(pageTo, "\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059 (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u5168".concat(totalRows, "\u4EF6\u304B\u3089\u3001").concat(pageFrom, "\u304B\u3089").concat(pageTo, "\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ja-JP']);

	/**
	 * Bootstrap Table Georgian translation
	 * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
	 */

	$.fn.bootstrapTable.locales['ka-GE'] = $.fn.bootstrapTable.locales['ka'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'სვეტები';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'იტვირთება, გთხოვთ მოიცადოთ';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'მონაცემები არ არის';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'გვერდების გადამრთველის დამალვა/გამოჩენა';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10D7\u10D8\u10D7\u10DD \u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'განახლება';
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
	  formatSearch: function formatSearch() {
	    return 'ძებნა';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u10DC\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D8\u10D0 ".concat(pageFrom, "-\u10D3\u10D0\u10DC ").concat(pageTo, "-\u10DB\u10D3\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10EF\u10D0\u10DB\u10E3\u10E0\u10D8 ").concat(totalRows, "-\u10D3\u10D0\u10DC (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u10DC\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D8\u10D0 ".concat(pageFrom, "-\u10D3\u10D0\u10DC ").concat(pageTo, "-\u10DB\u10D3\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10EF\u10D0\u10DB\u10E3\u10E0\u10D8 ").concat(totalRows, "-\u10D3\u10D0\u10DC");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE']);

	/**
	 * Bootstrap Table Korean translation
	 * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
	 * Revision: Abel Yeom (abel.yeom@gmail.com)
	 */

	$.fn.bootstrapTable.locales['ko-KR'] = $.fn.bootstrapTable.locales['ko'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return '닫기';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return '심화 검색';
	  },
	  formatAllRows: function formatAllRows() {
	    return '전체';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return '자동 갱신';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return '검색 초기화';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return '컬럼 필터링';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return '전체 토글';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return '행 복사';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "".concat(totalRows, " \uD589\uB4E4 \uD45C\uC2DC \uC911");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return '데이터 추출';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return '컨트롤 보기/숨기기';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return '컨트롤 숨기기';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return '컨트롤 보기';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return '전체 화면';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return '이동';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return '데이터를 불러오는 중입니다';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return '조회된 데이터가 없습니다.';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return '페이지 넘버 보기/숨기기';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return '페이지 넘버 보기';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return '페이지 넘버 숨기기';
	  },
	  formatPrint: function formatPrint() {
	    return '프린트';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "\uD398\uC774\uC9C0 \uB2F9 ".concat(pageNumber, "\uAC1C \uB370\uC774\uD130 \uCD9C\uB825");
	  },
	  formatRefresh: function formatRefresh() {
	    return '새로 고침';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return '다음 페이지';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "".concat(page, " \uD398\uC774\uC9C0\uB85C \uC774\uB3D9");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return '이전 페이지';
	  },
	  formatSearch: function formatSearch() {
	    return '검색';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\uC804\uCCB4 ".concat(totalRows, "\uAC1C \uC911 ").concat(pageFrom, "~").concat(pageTo, "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825, (\uC804\uCCB4 ").concat(totalNotFiltered, " \uD589\uC5D0\uC11C \uD544\uD130\uB428)");
	    }
	    return "\uC804\uCCB4 ".concat(totalRows, "\uAC1C \uC911 ").concat(pageFrom, "~").concat(pageTo, "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825,");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return '카드뷰 숨기기';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return '카드뷰 보기';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR']);

	/**
	 * Bootstrap Table Luxembourgish translation
	 * Author: David Morais Ferreira (https://github.com/DavidMoraisFerreira)
	 */

	$.fn.bootstrapTable.locales['lb-LU'] = $.fn.bootstrapTable.locales['lb'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zoumaachen';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Erweidert Sich';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatescht neilueden';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Sich réckgängeg maachen';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolonnen';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'All ëmschalten';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Zeilen kopéieren';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Weist ".concat(totalRows, " Zeilen");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Daten exportéieren';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Schaltelementer uweisen/verstoppen';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Schaltelementer verstoppen';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Schaltelementer uweisen';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Vollbild';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Sprangen';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Gëtt gelueden, gedellëgt Iech wannechgelift ee Moment';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Keng passend Anträg fonnt';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Paginatioun uweisen/verstoppen';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Paginatioun uweisen';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Paginatioun verstoppen';
	  },
	  formatPrint: function formatPrint() {
	    return 'Drécken';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " Zeilen per S\xE4it");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Nei lueden';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'nächst Säit';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "op S\xE4it ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'viregt Säit';
	  },
	  formatSearch: function formatSearch() {
	    return 'Sich';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Weist Zeil ".concat(pageFrom, " bis ").concat(pageTo, " vun ").concat(totalRows, " Zeil").concat(totalRows > 1 ? 'en' : '', " (gefiltert vun insgesamt ").concat(totalNotFiltered, " Zeil").concat(totalRows > 1 ? 'en' : '', ")");
	    }
	    return "Weist Zeil ".concat(pageFrom, " bis ").concat(pageTo, " vun ").concat(totalRows, " Zeil").concat(totalRows > 1 ? 'en' : '');
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Kaartenusiicht verstoppen';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Kaartenusiicht uweisen';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['lb-LU']);

	/**
	 * Bootstrap Table Lithuanian translation
	 * Author: swift2512 <slamstapastis@gmail.com>
	 */

	$.fn.bootstrapTable.locales['lt-LT'] = $.fn.bootstrapTable.locales['lt'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Uždaryti';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Išplėstinė paieška';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Viskas';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatinis atnaujinimas';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Išvalyti paiešką';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Stulpeliai';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Perjungti viską';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Kopijuoti eilutes';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Rodomos ".concat(totalRows, " eilut\u0117s (-\u010Di\u0173)");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Eksportuoti duomenis';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Slėpti/rodyti valdiklius';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Slėpti valdiklius';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Rodyti valdiklius';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Visame ekrane';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Eiti';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Įkeliama, palaukite';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Atitinkančių įrašų nerasta';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Slėpti/rodyti puslapių rūšiavimą';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Rodyti puslapių rūšiavimą';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Slėpti puslapių rūšiavimą';
	  },
	  formatPrint: function formatPrint() {
	    return 'Spausdinti';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " eilu\u010Di\u0173 puslapyje");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Atnaujinti';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'sekantis puslapis';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u012F puslap\u012F ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'ankstesnis puslapis';
	  },
	  formatSearch: function formatSearch() {
	    return 'Ieškoti';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Rodomos eilut\u0117s nuo ".concat(pageFrom, " iki ").concat(pageTo, " i\u0161 ").concat(totalRows, " eilu\u010Di\u0173 (atrinktos i\u0161 vis\u0173 ").concat(totalNotFiltered, " eilu\u010Di\u0173)");
	    }
	    return "Rodomos eilut\u0117s nuo ".concat(pageFrom, " iki ").concat(pageTo, " i\u0161 ").concat(totalRows, " eilu\u010Di\u0173");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Slėpti kortelių rodinį';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Rodyti kortelių rodinį';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['lt-LT']);

	/**
	 * Bootstrap Table Malay translation
	 * Author: Azamshul Azizy <azamshul@gmail.com>
	 */

	$.fn.bootstrapTable.locales['ms-MY'] = $.fn.bootstrapTable.locales['ms'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Semua';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Lajur';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Permintaan sedang dimuatkan. Sila tunggu sebentar';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Tiada rekod yang menyamai permintaan';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Tunjuk/sembunyi muka surat';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rekod setiap muka surat");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Muatsemula';
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
	  formatSearch: function formatSearch() {
	    return 'Cari';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Sedang memaparkan rekod ".concat(pageFrom, " hingga ").concat(pageTo, " daripada jumlah ").concat(totalRows, " rekod (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Sedang memaparkan rekod ".concat(pageFrom, " hingga ").concat(pageTo, " daripada jumlah ").concat(totalRows, " rekod");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ms-MY']);

	/**
	 * Bootstrap Table norwegian translation
	 * Author: Jim Nordbø, jim@nordb.no
	 */

	$.fn.bootstrapTable.locales['nb-NO'] = $.fn.bootstrapTable.locales['nb'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolonner';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Oppdaterer, vennligst vent';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ingen poster funnet';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
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
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " poster pr side");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Oppdater';
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
	  formatSearch: function formatSearch() {
	    return 'Søk';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Viser ".concat(pageFrom, " til ").concat(pageTo, " av ").concat(totalRows, " rekker (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Viser ".concat(pageFrom, " til ").concat(pageTo, " av ").concat(totalRows, " rekker");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nb-NO']);

	/**
	 * Bootstrap Table Dutch (België) translation
	 * Author: Nevets82 <Nevets82@gmail.com>
	 */

	$.fn.bootstrapTable.locales['nl-BE'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Niveau toevoegen';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Sluiten';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Geavanceerd zoeken';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alle';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatisch vernieuwen';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuleren';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Verwijder filters';
	  },
	  formatColumn: function formatColumn() {
	    return 'Kolom';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolommen';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Allen omschakelen';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Niveau verwijderen';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Toon ".concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Gelieve dubbele kolommen te verwijderen of wijzigen';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicaten gevonden!';
	  },
	  formatExport: function formatExport() {
	    return 'Exporteer gegevens';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Verberg/Toon controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Verberg controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Toon controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Volledig scherm';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GA';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Laden, even geduld';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Meervoudige sortering';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Geen resultaten gevonden';
	  },
	  formatOrder: function formatOrder() {
	    return 'Volgorde';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Verberg/Toon paginering';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Toon paginering';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Verberg paginering';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " records per pagina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Vernieuwen';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'volgende pagina';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "tot pagina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'vorige pagina';
	  },
	  formatSearch: function formatSearch() {
	    return 'Zoeken';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '', " (gefilterd van ").concat(totalNotFiltered, " records in totaal)");
	    }
	    return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
	  },
	  formatSort: function formatSort() {
	    return 'Sorteren';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sorteren op';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Oplopend',
	      desc: 'Aflopend'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'vervolgens';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Verberg kaartweergave';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Toon kaartweergave';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-BE']);

	/**
	 * Bootstrap Table Dutch (Nederland) translation
	 * Author: Your Name <info@a2hankes.nl>
	 *         Nevets82 <Nevets82@gmail.com>
	 */

	$.fn.bootstrapTable.locales['nl-NL'] = $.fn.bootstrapTable.locales['nl'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Niveau toevoegen';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Sluiten';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Geavanceerd zoeken';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alle';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatisch vernieuwen';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuleren';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Verwijder filters';
	  },
	  formatColumn: function formatColumn() {
	    return 'Kolom';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolommen';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Allen omschakelen';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Niveau verwijderen';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Toon ".concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Gelieve dubbele kolommen te verwijderen of wijzigen';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicaten gevonden!';
	  },
	  formatExport: function formatExport() {
	    return 'Exporteer gegevens';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Verberg/Toon controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Verberg controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Toon controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Volledig scherm';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GA';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Laden, even geduld';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Meervoudige sortering';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Geen resultaten gevonden';
	  },
	  formatOrder: function formatOrder() {
	    return 'Volgorde';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Verberg/Toon paginering';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Toon paginering';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Verberg paginering';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " records per pagina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Vernieuwen';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'volgende pagina';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "tot pagina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'vorige pagina';
	  },
	  formatSearch: function formatSearch() {
	    return 'Zoeken';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '', " (gefilterd van ").concat(totalNotFiltered, " records in totaal)");
	    }
	    return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
	  },
	  formatSort: function formatSort() {
	    return 'Sorteren';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sorteren op';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Oplopend',
	      desc: 'Aflopend'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'vervolgens';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Verberg kaartweergave';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Toon kaartweergave';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL']);

	/**
	 * Bootstrap Table Polish translation
	 * Author: zergu <michal.zagdan @ gmail com>
	 * Update: kerogos <kerog @ wp pl>
	 */

	$.fn.bootstrapTable.locales['pl-PL'] = $.fn.bootstrapTable.locales['pl'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zamknij';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Wyszukiwanie zaawansowane';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Wszystkie';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto odświeżanie';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Wyczyść wyszukiwanie';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolumny';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Zaznacz wszystko';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Kopiuj wiersze';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Wy\u015Bwietla ".concat(totalRows, " wierszy");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Eksport danych';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Pokaż/Ukryj';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Pokaż';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Ukryj';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Przejdź';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Ładowanie, proszę czekać';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Niestety, nic nie znaleziono';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Pokaż/ukryj stronicowanie';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Pokaż stronicowanie';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Ukryj stronicowanie';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rekord\xF3w na stron\u0119");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Odśwież';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'następna strona';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "z ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'poprzednia strona';
	  },
	  formatSearch: function formatSearch() {
	    return 'Szukaj';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Wy\u015Bwietlanie rekord\xF3w od ".concat(pageFrom, " do ").concat(pageTo, " z ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Wy\u015Bwietlanie rekord\xF3w od ".concat(pageFrom, " do ").concat(pageTo, " z ").concat(totalRows);
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ukryj układ karty';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Pokaż układ karty';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL']);

	/**
	 * Bootstrap Table Brazilian Portuguese Translation
	 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
	 * Update: João Mello<jmello@hotmail.com.br>
	 * Update: Leandro Felizari<lfelizari@gmail.com>
	 * Update: Fernando Marcos Souza Silva<fernandomarcosss@gmail.com>
	 * Update: @misteregis <misteregis@gmail.com>
	 */

	$.fn.bootstrapTable.locales['pt-BR'] = $.fn.bootstrapTable.locales['br'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Adicionar nível';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fechar';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pesquisa Avançada';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tudo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Atualização Automática';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancelar';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpar Pesquisa';
	  },
	  formatColumn: function formatColumn() {
	    return 'Coluna';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colunas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alternar tudo';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar linhas';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Remover nível';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " linha").concat(totalRows > 1 ? 's' : '');
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Por favor, remova ou altere as colunas duplicadas';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Encontradas entradas duplicadas!';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar dados';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Exibir controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Exibir controles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Tela cheia';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Ir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Carregando, aguarde';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Ordenação múltipla';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nenhum registro encontrado';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordem';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Ocultar/Exibir paginação';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Mostrar Paginação';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Esconder Paginação';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registros por p\xE1gina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Recarregar';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'próxima página';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ir para a p\xE1gina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pesquisar';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    var plural = totalRows > 1 ? 's' : '';
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Exibindo ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural, " (filtrado de um total de ").concat(totalNotFiltered, " linha").concat(plural, ")");
	    }
	    return "Exibindo ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural);
	  },
	  formatSort: function formatSort() {
	    return 'Ordenar';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Ordenar por';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Crescente',
	      desc: 'Decrescente'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'em seguida';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar visualização de cartão';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);

	/**
	 * Bootstrap Table Portuguese Portugal Translation
	 * Author: Burnspirit<burnspirit@gmail.com>
	 * Update: @misteregis <misteregis@gmail.com>
	 */

	$.fn.bootstrapTable.locales['pt-PT'] = $.fn.bootstrapTable.locales['pt'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Adicionar nível';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fechar';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pesquisa avançada';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tudo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualização autmática';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancelar';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpar Pesquisa';
	  },
	  formatColumn: function formatColumn() {
	    return 'Coluna';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colunas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Activar tudo';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar Linhas';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Remover nível';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " linha").concat(totalRows > 1 ? 's' : '');
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Por favor, remova ou altere as colunas duplicadas';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Foram encontradas entradas duplicadas!';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar dados';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Exibir controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Esconder controlos';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Exibir controlos';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Ecrã completo';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Avançar';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'A carregar, por favor aguarde';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Ordenação múltipla';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nenhum registo encontrado';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordem';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Esconder/Mostrar paginação';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Mostrar página';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Esconder página';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registos por p\xE1gina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Actualizar';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'próxima página';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ir para p\xE1gina ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pesquisa';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    var plural = totalRows > 1 ? 's' : '';
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "A mostrar ".concat(pageFrom, " at&eacute; ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural, " (filtrado de um total de ").concat(totalNotFiltered, " linha").concat(plural, ")");
	    }
	    return "A mostrar ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural);
	  },
	  formatSort: function formatSort() {
	    return 'Ordenar';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Ordenar por';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascendente',
	      desc: 'Descendente'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'em seguida';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Esconder vista em forma de cartão';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista em forma de cartão';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT']);

	/**
	 * Bootstrap Table Romanian translation
	 * Author: cristake <cristianiosif@me.com>
	 */

	$.fn.bootstrapTable.locales['ro-RO'] = $.fn.bootstrapTable.locales['ro'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Toate';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Coloane';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Se incarca, va rugam asteptati';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nu au fost gasite inregistrari';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Ascunde/Arata paginatia';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " inregistrari pe pagina");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Reincarca';
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
	  formatSearch: function formatSearch() {
	    return 'Cauta';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Arata de la ".concat(pageFrom, " pana la ").concat(pageTo, " din ").concat(totalRows, " randuri (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Arata de la ".concat(pageFrom, " pana la ").concat(pageTo, " din ").concat(totalRows, " randuri");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ro-RO']);

	/**
	 * Bootstrap Table Russian translation
	 * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
	 */

	$.fn.bootstrapTable.locales['ru-RU'] = $.fn.bootstrapTable.locales['ru'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Закрыть';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Расширенный поиск';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Все';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Автоматическое обновление';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Очистить фильтры';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Колонки';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Выбрать все';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Скопировать строки';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E ".concat(totalRows, " \u0441\u0442\u0440\u043E\u043A");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Экспортировать данные';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Скрыть/Показать панель инструментов';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Скрыть панель инструментов';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Показать панель инструментов';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Полноэкранный режим';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Стр.';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Пожалуйста, подождите, идёт загрузка';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ничего не найдено';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Скрыть/Показать постраничную навигацию';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Показать постраничную навигацию';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Скрыть постраничную навигацию';
	  },
	  formatPrint: function formatPrint() {
	    return 'Печать';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Обновить';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'следующая страница';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'предыдущая страница';
	  },
	  formatSearch: function formatSearch() {
	    return 'Поиск';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0438\u0437 ").concat(totalRows, " (\u043E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043E, \u0432\u0441\u0435\u0433\u043E \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ").concat(totalNotFiltered, " \u0437\u0430\u043F\u0438\u0441\u0435\u0439)");
	    }
	    return "\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0438\u0437 ").concat(totalRows);
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Табличный режим просмотра';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Показать записи в виде карточек';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU']);

	/**
	 * Bootstrap Table Slovak translation
	 * Author: Jozef Dúc<jozef.d13@gmail.com>
	 */

	$.fn.bootstrapTable.locales['sk-SK'] = $.fn.bootstrapTable.locales['sk'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zatvoriť';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pokročilé vyhľadávanie';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Všetky';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatické obnovenie';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Odstráň filtre';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Stĺpce';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Prepnúť všetky';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Skopírovať riadky';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Zobrazuje sa ".concat(totalRows, " riadkov");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Exportuj dáta';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Zobraziť/Skryť tlačidlá';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Skryť tlačidlá';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Zobraziť tlačidlá';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Celá obrazovka';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Ísť';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Prosím čakajte';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nenájdená žiadna vyhovujúca položka';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Skry/Zobraz stránkovanie';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Zobraziť stránkovanie';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Skryť stránkovanie';
	  },
	  formatPrint: function formatPrint() {
	    return 'Vytlačiť';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " z\xE1znamov na stranu");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Obnoviť';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'Nasledujúca strana';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na stranu ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'Predchádzajúca strana';
	  },
	  formatSearch: function formatSearch() {
	    return 'Vyhľadávanie';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Zobrazen\xE1 ".concat(pageFrom, ". - ").concat(pageTo, ". polo\u017Eka z celkov\xFDch ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Zobrazen\xE1 ".concat(pageFrom, ". - ").concat(pageTo, ". polo\u017Eka z celkov\xFDch ").concat(totalRows);
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'skryť kartové zobrazenie';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Zobraziť kartové zobrazenie';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK']);

	/**
	 * Bootstrap Table Slovenian translation
	 * Author: Ales Hotko <ales.hotko@gmail.com>
	 */

	$.fn.bootstrapTable.locales['sl-SI'] = $.fn.bootstrapTable.locales['sl'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zapri';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Napredno iskanje';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Vse';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Samodejna osvežitev';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Počisti';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Stolpci';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Preklopi vse';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Kopiraj vrstice';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Prikaz ".concat(totalRows, " vrstic");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Izvoz podatkov';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Skrij/Pokaži kontrole';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Skrij kontrole';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Pokaži kontrole';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Celozaslonski prikaz';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Prosim počakajte...';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ni najdenih rezultatov';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Skrij/Pokaži oštevilčevanje strani';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Pokaži oštevilčevanje strani';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Skrij oštevilčevanje strani';
	  },
	  formatPrint: function formatPrint() {
	    return 'Natisni';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " vrstic na stran");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Osveži';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'na slednja stran';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na stran ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'prejšnja stran';
	  },
	  formatSearch: function formatSearch() {
	    return 'Iskanje';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Prikaz ".concat(pageFrom, " do ").concat(pageTo, " od ").concat(totalRows, " vrstic (filtrirano od skupno ").concat(totalNotFiltered, " vrstic)");
	    }
	    return "Prikaz ".concat(pageFrom, " do ").concat(pageTo, " od ").concat(totalRows, " vrstic");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Skrij kartični pogled';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Prikaži kartični pogled';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sl-SI']);

	/**
	 * Bootstrap Table Serbian Cyrilic RS translation
	 * Author: Vladimir Kanazir (vladimir@kanazir.com)
	 */

	$.fn.bootstrapTable.locales['sr-Cyrl-RS'] = $.fn.bootstrapTable.locales['sr'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Затвори';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Напредна претрага';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Све';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Аутоматско освежавање';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Обриши претрагу';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Колоне';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Прикажи/сакриј све';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E ".concat(totalRows, " \u0440\u0435\u0434\u043E\u0432\u0430");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Извези податке';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Цео екран';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Иди';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Молим сачекај';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Није пронађен ни један податак';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Прикажи/сакриј пагинацију';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Прикажи пагинацију';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Сакриј пагинацију';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0440\u0435\u0434\u043E\u0432\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Освежи';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'следећа страна';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0443 ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'претходна страна';
	  },
	  formatSearch: function formatSearch() {
	    return 'Пронађи';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E ".concat(pageFrom, ". - ").concat(pageTo, ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 ").concat(totalRows, " (\u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u043E \u043E\u0434 ").concat(totalNotFiltered, ")");
	    }
	    return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E ".concat(pageFrom, ". - ").concat(pageTo, ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 ").concat(totalRows);
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Сакриј картице';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Прикажи картице';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Cyrl-RS']);

	/**
	 * Bootstrap Table Serbian Latin RS translation
	 * Author: Vladimir Kanazir (vladimir@kanazir.com)
	 */

	$.fn.bootstrapTable.locales['sr-Latn-RS'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zatvori';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Napredna pretraga';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Sve';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatsko osvežavanje';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Obriši pretragu';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolone';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Prikaži/sakrij sve';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Prikazano ".concat(totalRows, " redova");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Izvezi podatke';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Ceo ekran';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Idi';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Molim sačekaj';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nije pronađen ni jedan podatak';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Prikaži/sakrij paginaciju';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Prikaži paginaciju';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Sakrij paginaciju';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " redova po strani");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Osveži';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'sledeća strana';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na stranu ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'prethodna strana';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pronađi';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Prikazano ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja redova ").concat(totalRows, " (filtrirano od ").concat(totalNotFiltered, ")");
	    }
	    return "Prikazano ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja redova ").concat(totalRows);
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Sakrij kartice';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Prikaži kartice';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Latn-RS']);

	/**
	 * Bootstrap Table Swedish translation
	 * Author: C Bratt <bratt@inix.se>
	 */

	$.fn.bootstrapTable.locales['sv-SE'] = $.fn.bootstrapTable.locales['sv'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'kolumn';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Laddar, vänligen vänta';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Inga matchande resultat funna.';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
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
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rader per sida");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Uppdatera';
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
	  formatSearch: function formatSearch() {
	    return 'Sök';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Visa ".concat(pageFrom, " till ").concat(pageTo, " av ").concat(totalRows, " rader (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Visa ".concat(pageFrom, " till ").concat(pageTo, " av ").concat(totalRows, " rader");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sv-SE']);

	/**
	 * Bootstrap Table Thai translation
	 * Author: Monchai S.<monchais@gmail.com>
	 */

	$.fn.bootstrapTable.locales['th-TH'] = $.fn.bootstrapTable.locales['th'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'คอลัมน์';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'กำลังโหลดข้อมูล, กรุณารอสักครู่';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'ไม่พบรายการที่ค้นหา !';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
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
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'รีเฟรส';
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
	  formatSearch: function formatSearch() {
	    return 'ค้นหา';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ".concat(pageFrom, " \u0E16\u0E36\u0E07 ").concat(pageTo, " \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ").concat(totalRows, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ".concat(pageFrom, " \u0E16\u0E36\u0E07 ").concat(pageTo, " \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ").concat(totalRows, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH']);

	/**
	 * Bootstrap Table Turkish translation
	 * Author: Emin Şen
	 * Author: Sercan Cakir <srcnckr@gmail.com>
	 * Update From: Sait KURT <bilgi@ientegre.com> <https://github.com/xDeSwa>
	 */

	$.fn.bootstrapTable.locales['tr-TR'] = $.fn.bootstrapTable.locales['tr'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Kapat';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Gelişmiş Arama';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tüm Satırlar';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Otomatik Yenileme';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Aramayı Temizle';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Sütunlar';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tümünü Kapat';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Satırları Kopyala';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "".concat(totalRows, " sat\u0131r g\xF6steriliyor");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Verileri Dışa Aktar';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Kontrolleri Gizle/Göster';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Kontrolleri Gizle';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Kontrolleri Göster';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Tam Ekran';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Git';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Yükleniyor, lütfen bekleyin';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Eşleşen kayıt bulunamadı.';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Sayfalamayı Gizle/Göster';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Sayfalamayı Göster';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Sayfalamayı Gizle';
	  },
	  formatPrint: function formatPrint() {
	    return 'Yazdır';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "Sayfa ba\u015F\u0131na ".concat(pageNumber, " kay\u0131t.");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Yenile';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'sonraki sayfa';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "sayfa ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'önceki sayfa';
	  },
	  formatSearch: function formatSearch() {
	    return 'Ara';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "".concat(totalRows, " kay\u0131ttan ").concat(pageFrom, "-").concat(pageTo, " aras\u0131 g\xF6steriliyor (").concat(totalNotFiltered, " toplam sat\u0131r filtrelendi).");
	    }
	    return "".concat(totalRows, " kay\u0131ttan ").concat(pageFrom, "-").concat(pageTo, " aras\u0131 g\xF6steriliyor.");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Kart Görünümünü Gizle';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Kart Görünümünü Göster';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR']);

	/**
	 * Bootstrap Table Ukrainian translation
	 * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
	 */

	$.fn.bootstrapTable.locales['uk-UA'] = $.fn.bootstrapTable.locales['uk'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Закрити';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Розширений пошук';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Усі';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Автооновлення';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Скинути фільтри';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Стовпці';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Переключити усі';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Скопіювати рядки';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E ".concat(totalRows, " \u0440\u044F\u0434\u043A\u0456\u0432");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Експортувати дані';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Сховати/Відобразити елементи керування';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Сховати елементи керування';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Відобразити елементи керування';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Повноекранний режим';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Швидкий перехід до';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Завантаження, будь ласка, зачекайте';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Не знайдено жодного запису';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Сховати/Відобразити пагінацію';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Відобразити пагінацію';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Сховати пагінацію';
	  },
	  formatPrint: function formatPrint() {
	    return 'Друк';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0440\u044F\u0434\u043A\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Оновити';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'наступна сторінка';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0434\u043E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'попередня сторінка';
	  },
	  formatSearch: function formatSearch() {
	    return 'Пошук';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E \u0440\u044F\u0434\u043A\u0438 \u0437 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0437 ").concat(totalRows, " \u0437\u0430\u0433\u0430\u043B\u043E\u043C (\u0432\u0456\u0434\u0444\u0456\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043E \u0437 ").concat(totalNotFiltered, " \u0440\u044F\u0434\u043A\u0456\u0432)");
	    }
	    return "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E \u0440\u044F\u0434\u043A\u0438 \u0437 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0437 ").concat(totalRows, " \u0437\u0430\u0433\u0430\u043B\u043E\u043C");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Вимкнути формат карток';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Відобразити у форматі карток';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA']);

	/**
	 * Bootstrap Table Urdu translation
	 * Author: Malik <me@malikrizwan.com>
	 */

	$.fn.bootstrapTable.locales['ur-PK'] = $.fn.bootstrapTable.locales['ur'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'کالم';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'براۓ مہربانی انتظار کیجئے';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'کوئی ریکارڈ نہیں ملا';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
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
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 \u0641\u06CC \u0635\u0641\u06C1 ");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'تازہ کریں';
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
	  formatSearch: function formatSearch() {
	    return 'تلاش';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u062F\u06CC\u06A9\u06BE\u06CC\u06BA ".concat(pageFrom, " \u0633\u06D2 ").concat(pageTo, " \u06A9\u06D2 ").concat(totalRows, "\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u062F\u06CC\u06A9\u06BE\u06CC\u06BA ".concat(pageFrom, " \u0633\u06D2 ").concat(pageTo, " \u06A9\u06D2 ").concat(totalRows, "\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK']);

	/**
	 * Bootstrap Table Uzbek translation
	 * Author: Nabijon Masharipov <mnabijonz@gmail.com>
	 */

	$.fn.bootstrapTable.locales['uz-Latn-UZ'] = $.fn.bootstrapTable.locales['uz'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Hammasi';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Filtrlarni tozalash';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Ustunlar';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Eksport';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Yuklanyapti, iltimos kuting';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Hech narsa topilmadi';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Sahifalashni yashirish/ko\'rsatish';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " qator har sahifada");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Yangilash';
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
	  formatSearch: function formatSearch() {
	    return 'Qidirish';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Ko'rsatypati ".concat(pageFrom, " dan ").concat(pageTo, " gacha ").concat(totalRows, " qatorlarni (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Ko'rsatypati ".concat(pageFrom, " dan ").concat(pageTo, " gacha ").concat(totalRows, " qatorlarni");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uz-Latn-UZ']);

	/**
	 * Bootstrap Table Vietnamese translation
	 * Author: Duc N. PHAM <pngduc@gmail.com>
	 * Revision: Le Ngo Duc Manh <myt@nnsvn.me> (07/Mar/2024)
	 */

	$.fn.bootstrapTable.locales['vi-VN'] = $.fn.bootstrapTable.locales['vi'] = {
	  formatAddLevel: function formatAddLevel() {
	    return 'Add Level';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Đóng';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Tìm kiếm nâng cao';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tất cả';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Tự động làm mới';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancel';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Xoá tìm kiếm';
	  },
	  formatColumn: function formatColumn() {
	    return 'Column';
	  },
	  formatColumns: function formatColumns() {
	    return 'Cột';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Hiện tất cả';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return 'Sao chép hàng';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Delete Level';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0110ang hi\u1EC7n ".concat(totalRows, " h\xE0ng");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Please remove or change any duplicate column.';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicate(s) detected!';
	  },
	  formatExport: function formatExport() {
	    return 'Xuất dữ liệu';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ẩn/Hiện điều khiển';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ẩn điều khiển';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Hiện điều khiển';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Toàn màn hình';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Đến';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Đang tải';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multiple Sort';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Không có dữ liệu';
	  },
	  formatOrder: function formatOrder() {
	    return 'Order';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Ẩn/Hiện phân trang';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Hiện phân trang';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Ẩn phân trang';
	  },
	  formatPrint: function formatPrint() {
	    return 'In';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " b\u1EA3n ghi m\u1ED7i trang");
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Làm mới';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'trang sau';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0111\u1EBFn trang ".concat(page);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'trang trước';
	  },
	  formatSearch: function formatSearch() {
	    return 'Tìm kiếm';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Hi\u1EC3n th\u1ECB t\u1EEB trang ".concat(pageFrom, " \u0111\u1EBFn ").concat(pageTo, " c\u1EE7a ").concat(totalRows, " b\u1EA3n ghi (\u0111\u01B0\u1EE3c l\u1ECDc t\u1EEB t\u1ED5ng ").concat(totalNotFiltered, " h\xE0ng)");
	    }
	    return "Hi\u1EC3n th\u1ECB t\u1EEB trang ".concat(pageFrom, " \u0111\u1EBFn ").concat(pageTo, " c\u1EE7a ").concat(totalRows, " b\u1EA3n ghi");
	  },
	  formatSort: function formatSort() {
	    return 'Sort';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sort by';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascending',
	      desc: 'Descending'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return 'Then by';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Hide custom view';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Show custom view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ẩn các thẻ';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Hiển thị các thẻ';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN']);

	/**
	 * Bootstrap Table Chinese translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$.fn.bootstrapTable.locales['zh-CN'] = $.fn.bootstrapTable.locales['zh'] = {
	  formatAddLevel: function formatAddLevel() {
	    return '增加层级';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return '关闭';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return '高级搜索';
	  },
	  formatAllRows: function formatAllRows() {
	    return '所有';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return '自动刷新';
	  },
	  formatCancel: function formatCancel() {
	    return '取消';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return '清空过滤';
	  },
	  formatColumn: function formatColumn() {
	    return '列';
	  },
	  formatColumns: function formatColumns() {
	    return '列';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return '切换所有';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return '复制行';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return '删除层级';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u603B\u5171 ".concat(totalRows, " \u6761\u8BB0\u5F55");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return '请删除或修改重复的列。';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return '检测到重复项！';
	  },
	  formatExport: function formatExport() {
	    return '导出数据';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return '隐藏/显示过滤控制';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return '隐藏过滤控制';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return '显示过滤控制';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return '全屏';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return '跳转';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return '正在努力地加载数据中，请稍候';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return '多重排序';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return '没有找到匹配的记录';
	  },
	  formatOrder: function formatOrder() {
	    return '排序';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return '隐藏/显示分页';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return '显示分页';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return '隐藏分页';
	  },
	  formatPrint: function formatPrint() {
	    return '打印';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "\u6BCF\u9875\u663E\u793A ".concat(pageNumber, " \u6761\u8BB0\u5F55");
	  },
	  formatRefresh: function formatRefresh() {
	    return '刷新';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return '下一页';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u7B2C".concat(page, "\u9875");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return '上一页';
	  },
	  formatSearch: function formatSearch() {
	    return '搜索';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u663E\u793A\u7B2C ".concat(pageFrom, " \u5230\u7B2C ").concat(pageTo, " \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 ").concat(totalRows, " \u6761\u8BB0\u5F55\uFF08\u4ECE ").concat(totalNotFiltered, " \u603B\u8BB0\u5F55\u4E2D\u8FC7\u6EE4\uFF09");
	    }
	    return "\u663E\u793A\u7B2C ".concat(pageFrom, " \u5230\u7B2C ").concat(pageTo, " \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 ").concat(totalRows, " \u6761\u8BB0\u5F55");
	  },
	  formatSort: function formatSort() {
	    return '排序';
	  },
	  formatSortBy: function formatSortBy() {
	    return '排序依据';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: '升序',
	      desc: '降序'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return '然后按';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return '隐藏自定义视图';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return '显示自定义视图';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return '隐藏卡片视图';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return '显示卡片视图';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

	/**
	 * Bootstrap Table Chinese translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$.fn.bootstrapTable.locales['zh-TW'] = {
	  formatAddLevel: function formatAddLevel() {
	    return '增加層級';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return '關閉';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return '高級搜尋';
	  },
	  formatAllRows: function formatAllRows() {
	    return '所有';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return '自動刷新';
	  },
	  formatCancel: function formatCancel() {
	    return '取消';
	  },
	  formatClearSearch: function formatClearSearch() {
	    return '清空過濾';
	  },
	  formatColumn: function formatColumn() {
	    return '列';
	  },
	  formatColumns: function formatColumns() {
	    return '列';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return '切換所有';
	  },
	  formatCopyRows: function formatCopyRows() {
	    return '複製行';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return '刪除層級';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u7E3D\u5171 ".concat(totalRows, " \u9805\u8A18\u9304");
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return '請刪除或修改重複的列。';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return '檢測到重複項！';
	  },
	  formatExport: function formatExport() {
	    return '導出數據';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return '隱藏/顯示過濾控制';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return '隱藏過濾控制';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return '顯示過濾控制';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return '全屏';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return '跳轉';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return '正在努力地載入資料，請稍候';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return '多重排序';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return '沒有找到符合的結果';
	  },
	  formatOrder: function formatOrder() {
	    return '排序';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return '隱藏/顯示分頁';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return '顯示分頁';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return '隱藏分頁';
	  },
	  formatPrint: function formatPrint() {
	    return '列印';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "\u6BCF\u9801\u986F\u793A ".concat(pageNumber, " \u9805\u8A18\u9304");
	  },
	  formatRefresh: function formatRefresh() {
	    return '重新整理';
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return '下一頁';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u7B2C".concat(page, "\u9801");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return '上一頁';
	  },
	  formatSearch: function formatSearch() {
	    return '搜尋';
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u986F\u793A\u7B2C ".concat(pageFrom, " \u5230\u7B2C ").concat(pageTo, " \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 ").concat(totalRows, " \u9805\u8A18\u9304\uFF08\u5F9E ").concat(totalNotFiltered, " \u7E3D\u8A18\u9304\u4E2D\u904E\u6FFE\uFF09");
	    }
	    return "\u986F\u793A\u7B2C ".concat(pageFrom, " \u5230\u7B2C ").concat(pageTo, " \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 ").concat(totalRows, " \u9805\u8A18\u9304");
	  },
	  formatSort: function formatSort() {
	    return '排序';
	  },
	  formatSortBy: function formatSortBy() {
	    return '排序依據';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: '升序',
	      desc: '降序'
	    };
	  },
	  formatThenBy: function formatThenBy() {
	    return '然後按';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return '隱藏自定義視圖';
	  },
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return '顯示自定義視圖';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return '隱藏卡片視圖';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return '顯示卡片視圖';
	  }
	};
	Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW']);

}));
