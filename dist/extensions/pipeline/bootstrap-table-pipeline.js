(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$5) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$b =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$d = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$c = fails$d;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$c(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var fails$b = fails$d;

	var functionBindNative = !fails$b(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$2 = functionBindNative;

	var call$5 = Function.prototype.call;

	var functionCall = NATIVE_BIND$2 ? call$5.bind(call$5) : function () {
	  return call$5.apply(call$5, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$3 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var NATIVE_BIND$1 = functionBindNative;

	var FunctionPrototype$1 = Function.prototype;
	var call$4 = FunctionPrototype$1.call;
	var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$4, call$4);

	var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$4.apply(fn, arguments);
	  };
	};

	var uncurryThis$h = functionUncurryThis;

	var toString$5 = uncurryThis$h({}.toString);
	var stringSlice$1 = uncurryThis$h(''.slice);

	var classofRaw$2 = function (it) {
	  return stringSlice$1(toString$5(it), 8, -1);
	};

	var uncurryThis$g = functionUncurryThis;
	var fails$a = fails$d;
	var classof$5 = classofRaw$2;

	var $Object$3 = Object;
	var split = uncurryThis$g(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$a(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$3('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$5(it) == 'String' ? split(it, '') : $Object$3(it);
	} : $Object$3;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$2 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$1 = isNullOrUndefined$2;

	var $TypeError$5 = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$3 = function (it) {
	  if (isNullOrUndefined$1(it)) throw $TypeError$5("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$2 = indexedObject;
	var requireObjectCoercible$2 = requireObjectCoercible$3;

	var toIndexedObject$4 = function (it) {
	  return IndexedObject$2(requireObjectCoercible$2(it));
	};

	var documentAll$2 = typeof document == 'object' && document.all;

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

	var documentAll_1 = {
	  all: documentAll$2,
	  IS_HTMLDDA: IS_HTMLDDA
	};

	var $documentAll$1 = documentAll_1;

	var documentAll$1 = $documentAll$1.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$c = $documentAll$1.IS_HTMLDDA ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll$1;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$b = isCallable$c;
	var $documentAll = documentAll_1;

	var documentAll = $documentAll.all;

	var isObject$7 = $documentAll.IS_HTMLDDA ? function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$b(it) || it === documentAll;
	} : function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$b(it);
	};

	var global$a = global$b;
	var isCallable$a = isCallable$c;

	var aFunction = function (argument) {
	  return isCallable$a(argument) ? argument : undefined;
	};

	var getBuiltIn$3 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
	};

	var uncurryThis$f = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$f({}.isPrototypeOf);

	var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

	var global$9 = global$b;
	var userAgent = engineUserAgent;

	var process = global$9.process;
	var Deno = global$9.Deno;
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

	var engineV8Version = version;

	/* eslint-disable es/no-symbol -- required for testing */

	var V8_VERSION$1 = engineV8Version;
	var fails$9 = fails$d;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$9(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */

	var NATIVE_SYMBOL$1 = symbolConstructorDetection;

	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$2 = getBuiltIn$3;
	var isCallable$9 = isCallable$c;
	var isPrototypeOf = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var $Object$2 = Object;

	var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$2('Symbol');
	  return isCallable$9($Symbol) && isPrototypeOf($Symbol.prototype, $Object$2(it));
	};

	var $String$3 = String;

	var tryToString$1 = function (argument) {
	  try {
	    return $String$3(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$8 = isCallable$c;
	var tryToString = tryToString$1;

	var $TypeError$4 = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$2 = function (argument) {
	  if (isCallable$8(argument)) return argument;
	  throw $TypeError$4(tryToString(argument) + ' is not a function');
	};

	var aCallable$1 = aCallable$2;
	var isNullOrUndefined = isNullOrUndefined$2;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$1 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined(func) ? undefined : aCallable$1(func);
	};

	var call$3 = functionCall;
	var isCallable$7 = isCallable$c;
	var isObject$6 = isObject$7;

	var $TypeError$3 = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$6(val = call$3(fn, input))) return val;
	  if (isCallable$7(fn = input.valueOf) && !isObject$6(val = call$3(fn, input))) return val;
	  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$6(val = call$3(fn, input))) return val;
	  throw $TypeError$3("Can't convert object to primitive value");
	};

	var sharedExports = {};
	var shared$3 = {
	  get exports(){ return sharedExports; },
	  set exports(v){ sharedExports = v; },
	};

	var global$8 = global$b;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$2 = Object.defineProperty;

	var defineGlobalProperty$3 = function (key, value) {
	  try {
	    defineProperty$2(global$8, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$8[key] = value;
	  } return value;
	};

	var global$7 = global$b;
	var defineGlobalProperty$2 = defineGlobalProperty$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$7[SHARED] || defineGlobalProperty$2(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$3.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.29.0',
	  mode: 'global',
	  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var requireObjectCoercible$1 = requireObjectCoercible$3;

	var $Object$1 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$3 = function (argument) {
	  return $Object$1(requireObjectCoercible$1(argument));
	};

	var uncurryThis$e = functionUncurryThis;
	var toObject$2 = toObject$3;

	var hasOwnProperty = uncurryThis$e({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$2(it), key);
	};

	var uncurryThis$d = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$4 = uncurryThis$d(1.0.toString);

	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id + postfix, 36);
	};

	var global$6 = global$b;
	var shared$2 = sharedExports;
	var hasOwn$6 = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var Symbol$2 = global$6.Symbol;
	var WellKnownSymbolsStore = shared$2('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

	var wellKnownSymbol$6 = function (name) {
	  if (!hasOwn$6(WellKnownSymbolsStore, name)) {
	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$6(Symbol$2, name)
	      ? Symbol$2[name]
	      : createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var call$2 = functionCall;
	var isObject$5 = isObject$7;
	var isSymbol$1 = isSymbol$2;
	var getMethod = getMethod$1;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$5 = wellKnownSymbol$6;

	var $TypeError$2 = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$5(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$2(exoticToPrim, input, pref);
	    if (!isObject$5(result) || isSymbol$1(result)) return result;
	    throw $TypeError$2("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol = isSymbol$2;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$3 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var global$5 = global$b;
	var isObject$4 = isObject$7;

	var document$1 = global$5.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$7 = descriptors;
	var fails$8 = fails$d;
	var createElement = documentCreateElement;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$7 && !fails$8(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$6 = descriptors;
	var call$1 = functionCall;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$2 = createPropertyDescriptor$3;
	var toIndexedObject$3 = toIndexedObject$4;
	var toPropertyKey$2 = toPropertyKey$3;
	var hasOwn$5 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$3(O);
	  P = toPropertyKey$2(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$1(propertyIsEnumerableModule$1.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$5 = descriptors;
	var fails$7 = fails$d;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$7(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var isObject$3 = isObject$7;

	var $String$2 = String;
	var $TypeError$1 = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$2 = function (argument) {
	  if (isObject$3(argument)) return argument;
	  throw $TypeError$1($String$2(argument) + ' is not an object');
	};

	var DESCRIPTORS$4 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var anObject$1 = anObject$2;
	var toPropertyKey$1 = toPropertyKey$3;

	var $TypeError = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPropertyKey$1(P);
	  anObject$1(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPropertyKey$1(P);
	  anObject$1(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$3 = descriptors;
	var definePropertyModule$3 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$3;

	var createNonEnumerableProperty$2 = DESCRIPTORS$3 ? function (object, key, value) {
	  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var makeBuiltInExports = {};
	var makeBuiltIn$2 = {
	  get exports(){ return makeBuiltInExports; },
	  set exports(v){ makeBuiltInExports = v; },
	};

	var DESCRIPTORS$2 = descriptors;
	var hasOwn$4 = hasOwnProperty_1;

	var FunctionPrototype = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$4(FunctionPrototype, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var uncurryThis$c = functionUncurryThis;
	var isCallable$6 = isCallable$c;
	var store$1 = sharedStore;

	var functionToString = uncurryThis$c(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$6(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$2 = store$1.inspectSource;

	var global$4 = global$b;
	var isCallable$5 = isCallable$c;

	var WeakMap$1 = global$4.WeakMap;

	var weakMapBasicDetection = isCallable$5(WeakMap$1) && /native code/.test(String(WeakMap$1));

	var shared$1 = sharedExports;
	var uid = uid$2;

	var keys = shared$1('keys');

	var sharedKey$1 = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys$3 = {};

	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var global$3 = global$b;
	var isObject$2 = isObject$7;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
	var hasOwn$3 = hasOwnProperty_1;
	var shared = sharedStore;
	var sharedKey = sharedKey$1;
	var hiddenKeys$2 = hiddenKeys$3;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$1 = global$3.TypeError;
	var WeakMap = global$3.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
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
	    if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
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
	  hiddenKeys$2[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwn$3(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$1(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn$3(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$3(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var uncurryThis$b = functionUncurryThis;
	var fails$6 = fails$d;
	var isCallable$4 = isCallable$c;
	var hasOwn$2 = hasOwnProperty_1;
	var DESCRIPTORS$1 = descriptors;
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
	var inspectSource$1 = inspectSource$2;
	var InternalStateModule = internalState;

	var enforceInternalState = InternalStateModule.enforce;
	var getInternalState = InternalStateModule.get;
	var $String$1 = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$1 = Object.defineProperty;
	var stringSlice = uncurryThis$b(''.slice);
	var replace$1 = uncurryThis$b(''.replace);
	var join = uncurryThis$b([].join);

	var CONFIGURABLE_LENGTH = DESCRIPTORS$1 && !fails$6(function () {
	  return defineProperty$1(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
	  if (stringSlice($String$1(name), 0, 7) === 'Symbol(') {
	    name = '[' + replace$1($String$1(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$2(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	    if (DESCRIPTORS$1) defineProperty$1(value, 'name', { value: name, configurable: true });
	    else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
	    defineProperty$1(value, 'length', { value: options.arity });
	  }
	  try {
	    if (options && hasOwn$2(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$1) defineProperty$1(value, 'prototype', { writable: false });
	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) { /* empty */ }
	  var state = enforceInternalState(value);
	  if (!hasOwn$2(state, 'source')) {
	    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
	  } return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn$1(function toString() {
	  return isCallable$4(this) && getInternalState(this).source || inspectSource$1(this);
	}, 'toString');

	var isCallable$3 = isCallable$c;
	var definePropertyModule$2 = objectDefineProperty;
	var makeBuiltIn = makeBuiltInExports;
	var defineGlobalProperty$1 = defineGlobalProperty$3;

	var defineBuiltIn$2 = function (O, key, value, options) {
	  if (!options) options = {};
	  var simple = options.enumerable;
	  var name = options.name !== undefined ? options.name : key;
	  if (isCallable$3(value)) makeBuiltIn(value, name, options);
	  if (options.global) {
	    if (simple) O[key] = value;
	    else defineGlobalProperty$1(key, value);
	  } else {
	    try {
	      if (!options.unsafe) delete O[key];
	      else if (O[key]) simple = true;
	    } catch (error) { /* empty */ }
	    if (simple) O[key] = value;
	    else definePropertyModule$2.f(O, key, {
	      value: value,
	      enumerable: false,
	      configurable: !options.nonConfigurable,
	      writable: !options.nonWritable
	    });
	  } return O;
	};

	var objectGetOwnPropertyNames = {};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor : ceil)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$2 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

	var max$1 = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$2 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
	};

	var toIntegerOrInfinity = toIntegerOrInfinity$2;

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$3 = function (obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$2 = toIndexedObject$4;
	var toAbsoluteIndex$1 = toAbsoluteIndex$2;
	var lengthOfArrayLike$2 = lengthOfArrayLike$3;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$2($this);
	    var length = lengthOfArrayLike$2(O);
	    var index = toAbsoluteIndex$1(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var uncurryThis$a = functionUncurryThis;
	var hasOwn$1 = hasOwnProperty_1;
	var toIndexedObject$1 = toIndexedObject$4;
	var indexOf = arrayIncludes.indexOf;
	var hiddenKeys$1 = hiddenKeys$3;

	var push$1 = uncurryThis$a([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$1(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push$1(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
	    ~indexOf(result, key) || push$1(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$2 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$2;

	var hiddenKeys = enumBugKeys$1.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$1 = getBuiltIn$3;
	var uncurryThis$9 = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var anObject = anObject$2;

	var concat$1 = uncurryThis$9([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn = hasOwnProperty_1;
	var ownKeys = ownKeys$1;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule$1 = objectDefineProperty;

	var copyConstructorProperties$1 = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule$1.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$5 = fails$d;
	var isCallable$2 = isCallable$c;

	var replacement = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$2(detection) ? fails$5(detection)
	    : !!detection;
	};

	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';

	var isForced_1 = isForced$1;

	var global$2 = global$b;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty = createNonEnumerableProperty$2;
	var defineBuiltIn$1 = defineBuiltIn$2;
	var defineGlobalProperty = defineGlobalProperty$3;
	var copyConstructorProperties = copyConstructorProperties$1;
	var isForced = isForced_1;

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
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$2;
	  } else if (STATIC) {
	    target = global$2[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = (global$2[TARGET] || {}).prototype;
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
	    defineBuiltIn$1(target, key, sourceProperty, options);
	  }
	};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$2;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$1 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys);
	};

	var DESCRIPTORS = descriptors;
	var uncurryThis$8 = functionUncurryThis;
	var call = functionCall;
	var fails$4 = fails$d;
	var objectKeys = objectKeys$1;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$1 = toObject$3;
	var IndexedObject$1 = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty = Object.defineProperty;
	var concat = uncurryThis$8([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$4(function () {
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
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$1(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject$1(arguments[index++]);
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

	var $$4 = _export;
	var assign = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$4({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
	  assign: assign
	});

	var classof$4 = classofRaw$2;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$2 = Array.isArray || function isArray(argument) {
	  return classof$4(argument) == 'Array';
	};

	var wellKnownSymbol$4 = wellKnownSymbol$6;

	var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
	var test = {};

	test[TO_STRING_TAG$1] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$1 = isCallable$c;
	var classofRaw$1 = classofRaw$2;
	var wellKnownSymbol$3 = wellKnownSymbol$6;

	var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
	var $Object = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$3 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw$1(O)
	    // ES3 arguments fallback
	    : (result = classofRaw$1(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
	};

	var uncurryThis$7 = functionUncurryThis;
	var fails$3 = fails$d;
	var isCallable = isCallable$c;
	var classof$2 = classof$3;
	var getBuiltIn = getBuiltIn$3;
	var inspectSource = inspectSource$2;

	var noop = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$1 = uncurryThis$7(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  switch (classof$2(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$2 = !construct || fails$3(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var toPropertyKey = toPropertyKey$3;
	var definePropertyModule = objectDefineProperty;
	var createPropertyDescriptor = createPropertyDescriptor$3;

	var createProperty$1 = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var fails$2 = fails$d;
	var wellKnownSymbol$2 = wellKnownSymbol$6;
	var V8_VERSION = engineV8Version;

	var SPECIES$2 = wellKnownSymbol$2('species');

	var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION >= 51 || !fails$2(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$2] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var uncurryThis$6 = functionUncurryThis;

	var arraySlice = uncurryThis$6([].slice);

	var $$3 = _export;
	var isArray$1 = isArray$2;
	var isConstructor$1 = isConstructor$2;
	var isObject$1 = isObject$7;
	var toAbsoluteIndex = toAbsoluteIndex$2;
	var lengthOfArrayLike$1 = lengthOfArrayLike$3;
	var toIndexedObject = toIndexedObject$4;
	var createProperty = createProperty$1;
	var wellKnownSymbol$1 = wellKnownSymbol$6;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;
	var nativeSlice = arraySlice;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');

	var SPECIES$1 = wellKnownSymbol$1('species');
	var $Array$1 = Array;
	var max = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$3({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = lengthOfArrayLike$1(O);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$1(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor$1(Constructor) && (Constructor === $Array$1 || isArray$1(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$1(Constructor)) {
	        Constructor = Constructor[SPECIES$1];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array$1 || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array$1 : Constructor)(max(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var classof$1 = classof$3;

	var $String = String;

	var toString$3 = function (argument) {
	  if (classof$1(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String(argument);
	};

	// a string of all valid unicode whitespaces
	var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$5 = functionUncurryThis;
	var requireObjectCoercible = requireObjectCoercible$3;
	var toString$2 = toString$3;
	var whitespaces$1 = whitespaces$2;

	var replace = uncurryThis$5(''.replace);
	var ltrim = RegExp('^[' + whitespaces$1 + ']+');
	var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = toString$2(requireObjectCoercible($this));
	    if (TYPE & 1) string = replace(string, ltrim, '');
	    if (TYPE & 2) string = replace(string, rtrim, '$1');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$1(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$1(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$1(3)
	};

	var global$1 = global$b;
	var fails$1 = fails$d;
	var uncurryThis$4 = functionUncurryThis;
	var toString$1 = toString$3;
	var trim = stringTrim.trim;
	var whitespaces = whitespaces$2;

	var $parseInt$1 = global$1.parseInt;
	var Symbol$1 = global$1.Symbol;
	var ITERATOR = Symbol$1 && Symbol$1.iterator;
	var hex = /^[+-]?0x/i;
	var exec = uncurryThis$4(hex.exec);
	var FORCED$1 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
	  // MS Edge 18- broken with boxed symbols
	  || (ITERATOR && !fails$1(function () { $parseInt$1(Object(ITERATOR)); }));

	// `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix
	var numberParseInt = FORCED$1 ? function parseInt(string, radix) {
	  var S = trim(toString$1(string));
	  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
	} : $parseInt$1;

	var $$2 = _export;
	var $parseInt = numberParseInt;

	// `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix
	$$2({ global: true, forced: parseInt != $parseInt }, {
	  parseInt: $parseInt
	});

	var classofRaw = classofRaw$2;
	var uncurryThis$3 = functionUncurryThis;

	var functionUncurryThisClause = function (fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw(fn) === 'Function') return uncurryThis$3(fn);
	};

	var fails = fails$d;

	var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
	var $$1 = _export;
	var uncurryThis$2 = functionUncurryThisClause;
	var $indexOf = arrayIncludes.indexOf;
	var arrayMethodIsStrict = arrayMethodIsStrict$1;

	var nativeIndexOf = uncurryThis$2([].indexOf);

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$1({ target: 'Array', proto: true, forced: FORCED }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf(this, searchElement, fromIndex) || 0
	      : $indexOf(this, searchElement, fromIndex);
	  }
	});

	var uncurryThis$1 = functionUncurryThisClause;
	var aCallable = aCallable$2;
	var NATIVE_BIND = functionBindNative;

	var bind$1 = uncurryThis$1(uncurryThis$1.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable(fn);
	  return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var isArray = isArray$2;
	var isConstructor = isConstructor$2;
	var isObject = isObject$7;
	var wellKnownSymbol = wellKnownSymbol$6;

	var SPECIES = wellKnownSymbol('species');
	var $Array = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
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

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$1 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var bind = functionBindContext;
	var uncurryThis = functionUncurryThis;
	var IndexedObject = indexedObject;
	var toObject = toObject$3;
	var lengthOfArrayLike = lengthOfArrayLike$3;
	var arraySpeciesCreate = arraySpeciesCreate$1;

	var push = uncurryThis([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind(callbackfn, that);
	    var length = lengthOfArrayLike(self);
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

	var arrayIteration = {
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

	var $ = _export;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof = classof$3;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineBuiltIn = defineBuiltIn$2;
	var toString = objectToString;

	// `Object.prototype.toString` method
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	if (!TO_STRING_TAG_SUPPORT) {
	  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
	}

	/**
	 * @author doug-the-guy
	 * @version v1.0.0
	 *
	 * Bootstrap Table Pipeline
	 * -----------------------
	 *
	 * This plugin enables client side data caching for server side requests which will
	 * eliminate the need to issue a new request every page change. This will allow
	 * for a performance balance for a large data set between returning all data at once
	 * (client side paging) and a new server side request (server side paging).
	 *
	 * There are two new options:
	 *  - usePipeline: enables this feature
	 *  - pipelineSize: the size of each cache window
	 *
	 * The size of the pipeline must be evenly divisible by the current page size. This is
	 * assured by rounding up to the nearest evenly divisible value. For example, if
	 * the pipeline size is 4990 and the current page size is 25, then pipeline size will
	 * be dynamically set to 5000.
	 *
	 * The cache windows are computed based on the pipeline size and the total number of rows
	 * returned by the server side query. For example, with pipeline size 500 and total rows
	 * 1300, the cache windows will be:
	 *
	 *  [{'lower': 0, 'upper': 499}, {'lower': 500, 'upper': 999}, {'lower': 1000, 'upper': 1499}]
	 *
	 * Using the limit (i.e. the pipelineSize) and offset parameters, the server side request
	 * **MUST** return only the data in the requested cache window **AND** the total number of rows.
	 * To wit, the server side code must use the offset and limit parameters to prepare the response
	 * data.
	 *
	 * On a page change, the new offset is checked if it is within the current cache window. If so,
	 * the requested page data is returned from the cached data set. Otherwise, a new server side
	 * request will be issued for the new cache window.
	 *
	 * The current cached data is only invalidated on these events:
	 *  * sorting
	 *  * searching
	 *  * page size change
	 *  * page change moves into a new cache window
	 *
	 * There are two new events:
	 *  - cached-data-hit.bs.table: issued when cached data is used on a page change
	 *  - cached-data-reset.bs.table: issued when the cached data is invalidated and a
	 *      new server side request is issued
	 *
	 **/

	var Utils = $$5.fn.bootstrapTable.utils;
	Object.assign($$5.fn.bootstrapTable.defaults, {
	  usePipeline: false,
	  pipelineSize: 1000,
	  // eslint-disable-next-line no-unused-vars
	  onCachedDataHit: function onCachedDataHit(data) {
	    return false;
	  },
	  // eslint-disable-next-line no-unused-vars
	  onCachedDataReset: function onCachedDataReset(data) {
	    return false;
	  }
	});
	Object.assign($$5.fn.bootstrapTable.events, {
	  'cached-data-hit.bs.table': 'onCachedDataHit',
	  'cached-data-reset.bs.table': 'onCachedDataReset'
	});
	var BootstrapTable = $$5.fn.bootstrapTable.Constructor;
	var _init = BootstrapTable.prototype.init;
	var _onSearch = BootstrapTable.prototype.onSearch;
	var _onSort = BootstrapTable.prototype.onSort;
	var _onPageListChange = BootstrapTable.prototype.onPageListChange;
	BootstrapTable.prototype.init = function () {
	  // needs to be called before initServer()
	  this.initPipeline();
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	  _init.apply(this, Array.prototype.slice.apply(args));
	};
	BootstrapTable.prototype.initPipeline = function () {
	  this.cacheRequestJSON = {};
	  this.cacheWindows = [];
	  this.currWindow = 0;
	  this.resetCache = true;
	};
	BootstrapTable.prototype.onSearch = function () {
	  /* force a cache reset on search */
	  if (this.options.usePipeline) {
	    this.resetCache = true;
	  }
	  _onSearch.apply(this, Array.prototype.slice.apply(arguments));
	};
	BootstrapTable.prototype.onSort = function () {
	  /* force a cache reset on sort */
	  if (this.options.usePipeline) {
	    this.resetCache = true;
	  }
	  _onSort.apply(this, Array.prototype.slice.apply(arguments));
	};
	BootstrapTable.prototype.onPageListChange = function (event) {
	  /* rebuild cache window on page size change */
	  var target = $$5(event.currentTarget);
	  var newPageSize = parseInt(target.text(), 10);
	  this.options.pipelineSize = this.calculatePipelineSize(this.options.pipelineSize, newPageSize);
	  this.resetCache = true;
	  _onPageListChange.apply(this, Array.prototype.slice.apply(arguments));
	};
	BootstrapTable.prototype.calculatePipelineSize = function (pipelineSize, pageSize) {
	  /* calculate pipeline size by rounding up to the nearest value evenly divisible
	        * by the pageSize */
	  if (pageSize === 0) return 0;
	  return Math.ceil(pipelineSize / pageSize) * pageSize;
	};
	BootstrapTable.prototype.setCacheWindows = function () {
	  /* set cache windows based on the total number of rows returned by server side
	        * request and the pipelineSize */
	  this.cacheWindows = [];
	  var numWindows = this.options.totalRows / this.options.pipelineSize;
	  for (var i = 0; i <= numWindows; i++) {
	    var b = i * this.options.pipelineSize;
	    this.cacheWindows[i] = {
	      lower: b,
	      upper: b + this.options.pipelineSize - 1
	    };
	  }
	};
	BootstrapTable.prototype.setCurrWindow = function (offset) {
	  /* set the current cache window index, based on where the current offset falls */
	  this.currWindow = 0;
	  for (var i = 0; i < this.cacheWindows.length; i++) {
	    if (this.cacheWindows[i].lower <= offset && offset <= this.cacheWindows[i].upper) {
	      this.currWindow = i;
	      break;
	    }
	  }
	};
	BootstrapTable.prototype.drawFromCache = function (offset, limit) {
	  /* draw rows from the cache using offset and limit */
	  var res = Utils.extend(true, {}, this.cacheRequestJSON);
	  var drawStart = offset - this.cacheWindows[this.currWindow].lower;
	  var drawEnd = drawStart + limit;
	  res.rows = res.rows.slice(drawStart, drawEnd);
	  return res;
	};
	BootstrapTable.prototype.initServer = function (silent, query, url) {
	  /* determine if requested data is in cache (on paging) or if
	        * a new ajax request needs to be issued (sorting, searching, paging
	        * moving outside of cached data, page size change)
	        * initial version of this extension will entirely override base initServer
	        **/

	  var data = {};
	  var index = this.header.fields.indexOf(this.options.sortName);
	  var params = {
	    searchText: this.searchText,
	    sortName: this.options.sortName,
	    sortOrder: this.options.sortOrder
	  };
	  var request = null;
	  if (this.header.sortNames[index]) {
	    params.sortName = this.header.sortNames[index];
	  }
	  if (this.options.pagination && this.options.sidePagination === 'server') {
	    params.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize;
	    params.pageNumber = this.options.pageNumber;
	  }
	  if (!(url || this.options.url) && !this.options.ajax) {
	    return;
	  }
	  var useAjax = true;
	  if (this.options.queryParamsType === 'limit') {
	    params = {
	      searchText: params.searchText,
	      sortName: params.sortName,
	      sortOrder: params.sortOrder
	    };
	    if (this.options.pagination && this.options.sidePagination === 'server') {
	      params.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize;
	      params.offset = (this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize) * (this.options.pageNumber - 1);
	      if (this.options.usePipeline) {
	        // if cacheWindows is empty, this is the initial request
	        if (!this.cacheWindows.length) {
	          useAjax = true;
	          params.drawOffset = params.offset;
	          // cache exists: determine if the page request is entirely within the current cached window
	        } else {
	          var w = this.cacheWindows[this.currWindow];

	          // case 1: reset cache but stay within current window (e.g. column sort)
	          // case 2: move outside of the current window (e.g. search or paging)
	          //  since each cache window is aligned with the current page size
	          //  checking if params.offset is outside the current window is sufficient.
	          //  need to requery for preceding or succeeding cache window
	          //  also handle case
	          if (this.resetCache || params.offset < w.lower || params.offset > w.upper) {
	            useAjax = true;
	            this.setCurrWindow(params.offset);
	            // store the relative offset for drawing the page data afterwards
	            params.drawOffset = params.offset;
	            // now set params.offset to the lower bound of the new cache window
	            // the server will return that whole cache window
	            params.offset = this.cacheWindows[this.currWindow].lower;
	            // within current cache window
	          } else {
	            useAjax = false;
	          }
	        }
	      } else if (params.limit === 0) {
	        delete params.limit;
	      }
	    }
	  }

	  // force an ajax call - this is on search, sort or page size change
	  if (this.resetCache) {
	    useAjax = true;
	    this.resetCache = false;
	  }
	  if (this.options.usePipeline && useAjax) {
	    /* in this scenario limit is used on the server to get the cache window
	            * and drawLimit is used to get the page data afterwards */
	    params.drawLimit = params.limit;
	    params.limit = this.options.pipelineSize;
	  }

	  // cached results can be used
	  if (!useAjax) {
	    var res = this.drawFromCache(params.offset, params.limit);
	    this.load(res);
	    this.trigger('load-success', res);
	    this.trigger('cached-data-hit', res);
	    return;
	  }
	  // cached results can't be used
	  // continue base initServer code
	  if (!$$5.isEmptyObject(this.filterColumnsPartial)) {
	    params.filter = JSON.stringify(this.filterColumnsPartial, null);
	  }
	  data = Utils.calculateObjectValue(this.options, this.options.queryParams, [params], data);
	  Utils.extend(data, query || {});

	  // false to stop request
	  if (data === false) {
	    return;
	  }
	  if (!silent) {
	    this.$tableLoading.show();
	  }
	  var self = this;
	  request = Utils.extend({}, Utils.calculateObjectValue(null, this.options.ajaxOptions), {
	    type: this.options.method,
	    url: url || this.options.url,
	    data: this.options.contentType === 'application/json' && this.options.method === 'post' ? JSON.stringify(data) : data,
	    cache: this.options.cache,
	    contentType: this.options.contentType,
	    dataType: this.options.dataType,
	    success: function success(res) {
	      res = Utils.calculateObjectValue(self.options, self.options.responseHandler, [res], res);
	      // cache results if using pipelining
	      if (self.options.usePipeline) {
	        // store entire request in cache
	        self.cacheRequestJSON = Utils.extend(true, {}, res);
	        // this gets set in load() also but needs to be set before
	        // setting cacheWindows
	        self.options.totalRows = res[self.options.totalField];
	        // if this is a search, potentially less results will be returned
	        // so cache windows need to be rebuilt. Otherwise it
	        // will come out the same
	        self.setCacheWindows();
	        self.setCurrWindow(params.drawOffset);
	        // just load data for the page
	        res = self.drawFromCache(params.drawOffset, params.drawLimit);
	        self.trigger('cached-data-reset', res);
	      }
	      self.load(res);
	      self.trigger('load-success', res);
	      if (!silent) {
	        self.hideLoading();
	      }
	    },
	    error: function error(res) {
	      var data = [];
	      if (self.options.sidePagination === 'server') {
	        data = {};
	        data[self.options.totalField] = 0;
	        data[self.options.dataField] = [];
	      }
	      self.load(data);
	      self.trigger('load-error', res.status, res);
	      if (!silent) {
	        self.hideLoading();
	      }
	    }
	  });
	  if (this.options.ajax) {
	    Utils.calculateObjectValue(this, this.options.ajax, [request], null);
	  } else {
	    if (this._xhr && this._xhr.readyState !== 4) {
	      this._xhr.abort();
	    }
	    this._xhr = $$5.ajax(request);
	  }
	};

}));
