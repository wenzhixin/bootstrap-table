(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$2) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math === Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$a =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$c = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$b = fails$c;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$b(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
	});

	var fails$a = fails$c;

	var functionBindNative = !fails$a(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$1 = functionBindNative;

	var call$5 = Function.prototype.call;

	var functionCall = NATIVE_BIND$1 ? call$5.bind(call$5) : function () {
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

	var NATIVE_BIND = functionBindNative;

	var FunctionPrototype$1 = Function.prototype;
	var call$4 = FunctionPrototype$1.call;
	var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype$1.bind.bind(call$4, call$4);

	var functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$4.apply(fn, arguments);
	  };
	};

	var uncurryThis$a = functionUncurryThis;

	var toString$1 = uncurryThis$a({}.toString);
	var stringSlice$1 = uncurryThis$a(''.slice);

	var classofRaw$1 = function (it) {
	  return stringSlice$1(toString$1(it), 8, -1);
	};

	var uncurryThis$9 = functionUncurryThis;
	var fails$9 = fails$c;
	var classof$3 = classofRaw$1;

	var $Object$3 = Object;
	var split = uncurryThis$9(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$9(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$3('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$3(it) === 'String' ? split(it, '') : $Object$3(it);
	} : $Object$3;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$2 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$1 = isNullOrUndefined$2;

	var $TypeError$6 = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$2 = function (it) {
	  if (isNullOrUndefined$1(it)) throw new $TypeError$6("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$1 = indexedObject;
	var requireObjectCoercible$1 = requireObjectCoercible$2;

	var toIndexedObject$3 = function (it) {
	  return IndexedObject$1(requireObjectCoercible$1(it));
	};

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	var documentAll = typeof document == 'object' && document.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	var isCallable$c = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$b = isCallable$c;

	var isObject$7 = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$b(it);
	};

	var global$9 = global$a;
	var isCallable$a = isCallable$c;

	var aFunction = function (argument) {
	  return isCallable$a(argument) ? argument : undefined;
	};

	var getBuiltIn$3 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$9[namespace]) : global$9[namespace] && global$9[namespace][method];
	};

	var uncurryThis$8 = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$8({}.isPrototypeOf);

	var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

	var global$8 = global$a;
	var userAgent = engineUserAgent;

	var process = global$8.process;
	var Deno = global$8.Deno;
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
	var V8_VERSION$2 = engineV8Version;
	var fails$8 = fails$c;
	var global$7 = global$a;

	var $String$3 = global$7.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$8(function () {
	  var symbol = Symbol('symbol detection');
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
	  // of course, fail.
	  return !$String$3(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
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

	var $String$2 = String;

	var tryToString$1 = function (argument) {
	  try {
	    return $String$2(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$8 = isCallable$c;
	var tryToString = tryToString$1;

	var $TypeError$5 = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$1 = function (argument) {
	  if (isCallable$8(argument)) return argument;
	  throw new $TypeError$5(tryToString(argument) + ' is not a function');
	};

	var aCallable = aCallable$1;
	var isNullOrUndefined = isNullOrUndefined$2;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$1 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined(func) ? undefined : aCallable(func);
	};

	var call$3 = functionCall;
	var isCallable$7 = isCallable$c;
	var isObject$6 = isObject$7;

	var $TypeError$4 = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$6(val = call$3(fn, input))) return val;
	  if (isCallable$7(fn = input.valueOf) && !isObject$6(val = call$3(fn, input))) return val;
	  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$6(val = call$3(fn, input))) return val;
	  throw new $TypeError$4("Can't convert object to primitive value");
	};

	var sharedStore = {exports: {}};

	var global$6 = global$a;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$2 = Object.defineProperty;

	var defineGlobalProperty$3 = function (key, value) {
	  try {
	    defineProperty$2(global$6, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$6[key] = value;
	  } return value;
	};

	var globalThis$1 = global$a;
	var defineGlobalProperty$2 = defineGlobalProperty$3;

	var SHARED = '__core-js_shared__';
	var store$3 = sharedStore.exports = globalThis$1[SHARED] || defineGlobalProperty$2(SHARED, {});

	(store$3.versions || (store$3.versions = [])).push({
	  version: '3.37.1',
	  mode: 'global',
	  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var sharedStoreExports = sharedStore.exports;

	var store$2 = sharedStoreExports;

	var shared$3 = function (key, value) {
	  return store$2[key] || (store$2[key] = value || {});
	};

	var requireObjectCoercible = requireObjectCoercible$2;

	var $Object$1 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$3 = function (argument) {
	  return $Object$1(requireObjectCoercible(argument));
	};

	var uncurryThis$7 = functionUncurryThis;
	var toObject$2 = toObject$3;

	var hasOwnProperty = uncurryThis$7({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$2(it), key);
	};

	var uncurryThis$6 = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString = uncurryThis$6(1.0.toString);

	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
	};

	var global$5 = global$a;
	var shared$2 = shared$3;
	var hasOwn$6 = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var Symbol$1 = global$5.Symbol;
	var WellKnownSymbolsStore = shared$2('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

	var wellKnownSymbol$6 = function (name) {
	  if (!hasOwn$6(WellKnownSymbolsStore, name)) {
	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)
	      ? Symbol$1[name]
	      : createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var call$2 = functionCall;
	var isObject$5 = isObject$7;
	var isSymbol$1 = isSymbol$2;
	var getMethod = getMethod$1;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$5 = wellKnownSymbol$6;

	var $TypeError$3 = TypeError;
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
	    throw new $TypeError$3("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol = isSymbol$2;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$2 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var global$4 = global$a;
	var isObject$4 = isObject$7;

	var document$1 = global$4.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$8 = descriptors;
	var fails$7 = fails$c;
	var createElement = documentCreateElement;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$8 && !fails$7(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a !== 7;
	});

	var DESCRIPTORS$7 = descriptors;
	var call$1 = functionCall;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$2 = createPropertyDescriptor$3;
	var toIndexedObject$2 = toIndexedObject$3;
	var toPropertyKey$1 = toPropertyKey$2;
	var hasOwn$5 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$2(O);
	  P = toPropertyKey$1(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$1(propertyIsEnumerableModule$1.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$6 = descriptors;
	var fails$6 = fails$c;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$6(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype !== 42;
	});

	var isObject$3 = isObject$7;

	var $String$1 = String;
	var $TypeError$2 = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$2 = function (argument) {
	  if (isObject$3(argument)) return argument;
	  throw new $TypeError$2($String$1(argument) + ' is not an object');
	};

	var DESCRIPTORS$5 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var anObject$1 = anObject$2;
	var toPropertyKey = toPropertyKey$2;

	var $TypeError$1 = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPropertyKey(P);
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
	  P = toPropertyKey(P);
	  anObject$1(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$1('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$4 = descriptors;
	var definePropertyModule$3 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$3;

	var createNonEnumerableProperty$2 = DESCRIPTORS$4 ? function (object, key, value) {
	  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var makeBuiltIn$2 = {exports: {}};

	var DESCRIPTORS$3 = descriptors;
	var hasOwn$4 = hasOwnProperty_1;

	var FunctionPrototype = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$4(FunctionPrototype, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var uncurryThis$5 = functionUncurryThis;
	var isCallable$6 = isCallable$c;
	var store$1 = sharedStoreExports;

	var functionToString = uncurryThis$5(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$6(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$2 = store$1.inspectSource;

	var global$3 = global$a;
	var isCallable$5 = isCallable$c;

	var WeakMap$1 = global$3.WeakMap;

	var weakMapBasicDetection = isCallable$5(WeakMap$1) && /native code/.test(String(WeakMap$1));

	var shared$1 = shared$3;
	var uid = uid$2;

	var keys = shared$1('keys');

	var sharedKey$1 = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys$3 = {};

	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var global$2 = global$a;
	var isObject$2 = isObject$7;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
	var hasOwn$3 = hasOwnProperty_1;
	var shared = sharedStoreExports;
	var sharedKey = sharedKey$1;
	var hiddenKeys$2 = hiddenKeys$3;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$1 = global$2.TypeError;
	var WeakMap = global$2.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
	      throw new TypeError$1('Incompatible receiver, ' + TYPE + ' required');
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
	    if (store.has(it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
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
	    if (hasOwn$3(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
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

	var uncurryThis$4 = functionUncurryThis;
	var fails$5 = fails$c;
	var isCallable$4 = isCallable$c;
	var hasOwn$2 = hasOwnProperty_1;
	var DESCRIPTORS$2 = descriptors;
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
	var inspectSource$1 = inspectSource$2;
	var InternalStateModule = internalState;

	var enforceInternalState = InternalStateModule.enforce;
	var getInternalState = InternalStateModule.get;
	var $String = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$1 = Object.defineProperty;
	var stringSlice = uncurryThis$4(''.slice);
	var replace = uncurryThis$4(''.replace);
	var join = uncurryThis$4([].join);

	var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$5(function () {
	  return defineProperty$1(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
	  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
	    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$2(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	    if (DESCRIPTORS$2) defineProperty$1(value, 'name', { value: name, configurable: true });
	    else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
	    defineProperty$1(value, 'length', { value: options.arity });
	  }
	  try {
	    if (options && hasOwn$2(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$2) defineProperty$1(value, 'prototype', { writable: false });
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

	var makeBuiltInExports = makeBuiltIn$2.exports;

	var isCallable$3 = isCallable$c;
	var definePropertyModule$2 = objectDefineProperty;
	var makeBuiltIn = makeBuiltInExports;
	var defineGlobalProperty$1 = defineGlobalProperty$3;

	var defineBuiltIn$1 = function (O, key, value, options) {
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

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$1 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	var toIntegerOrInfinity = toIntegerOrInfinity$2;

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  var len = toIntegerOrInfinity(argument);
	  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$2 = function (obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$1 = toIndexedObject$3;
	var toAbsoluteIndex = toAbsoluteIndex$1;
	var lengthOfArrayLike$1 = lengthOfArrayLike$2;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$1($this);
	    var length = lengthOfArrayLike$1(O);
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

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var uncurryThis$3 = functionUncurryThis;
	var hasOwn$1 = hasOwnProperty_1;
	var toIndexedObject = toIndexedObject$3;
	var indexOf = arrayIncludes.indexOf;
	var hiddenKeys$1 = hiddenKeys$3;

	var push = uncurryThis$3([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
	    ~indexOf(result, key) || push(result, key);
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
	var uncurryThis$2 = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var anObject = anObject$2;

	var concat$1 = uncurryThis$2([].concat);

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

	var fails$4 = fails$c;
	var isCallable$2 = isCallable$c;

	var replacement = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value === POLYFILL ? true
	    : value === NATIVE ? false
	    : isCallable$2(detection) ? fails$4(detection)
	    : !!detection;
	};

	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';

	var isForced_1 = isForced$1;

	var global$1 = global$a;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty = createNonEnumerableProperty$2;
	var defineBuiltIn = defineBuiltIn$1;
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
	    target = global$1;
	  } else if (STATIC) {
	    target = global$1[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = global$1[TARGET] && global$1[TARGET].prototype;
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

	var classof$2 = classofRaw$1;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$2 = Array.isArray || function isArray(argument) {
	  return classof$2(argument) === 'Array';
	};

	var $TypeError = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$1 = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
	  return it;
	};

	var DESCRIPTORS$1 = descriptors;
	var definePropertyModule = objectDefineProperty;
	var createPropertyDescriptor = createPropertyDescriptor$3;

	var createProperty$1 = function (object, key, value) {
	  if (DESCRIPTORS$1) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
	  else object[key] = value;
	};

	var wellKnownSymbol$4 = wellKnownSymbol$6;

	var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
	var test = {};

	test[TO_STRING_TAG$1] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var isCallable$1 = isCallable$c;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$3 = wellKnownSymbol$6;

	var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
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
	var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) === 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
	};

	var uncurryThis$1 = functionUncurryThis;
	var fails$3 = fails$c;
	var isCallable = isCallable$c;
	var classof = classof$1;
	var getBuiltIn = getBuiltIn$3;
	var inspectSource = inspectSource$2;

	var noop = function () { /* empty */ };
	var construct = getBuiltIn('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis$1(constructorRegExp.exec);
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
	var isConstructor$1 = !construct || fails$3(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isArray$1 = isArray$2;
	var isConstructor = isConstructor$1;
	var isObject$1 = isObject$7;
	var wellKnownSymbol$2 = wellKnownSymbol$6;

	var SPECIES$1 = wellKnownSymbol$2('species');
	var $Array = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$1(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor(C) && (C === $Array || isArray$1(C.prototype))) C = undefined;
	    else if (isObject$1(C)) {
	      C = C[SPECIES$1];
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

	var fails$2 = fails$c;
	var wellKnownSymbol$1 = wellKnownSymbol$6;
	var V8_VERSION$1 = engineV8Version;

	var SPECIES = wellKnownSymbol$1('species');

	var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$1 >= 51 || !fails$2(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$1 = _export;
	var fails$1 = fails$c;
	var isArray = isArray$2;
	var isObject = isObject$7;
	var toObject$1 = toObject$3;
	var lengthOfArrayLike = lengthOfArrayLike$2;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
	var createProperty = createProperty$1;
	var arraySpeciesCreate = arraySpeciesCreate$1;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
	var wellKnownSymbol = wellKnownSymbol$6;
	var V8_VERSION = engineV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$1(function () {
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
	$$1({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$1(this);
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

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$2;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$1 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys);
	};

	var DESCRIPTORS = descriptors;
	var uncurryThis = functionUncurryThis;
	var call = functionCall;
	var fails = fails$c;
	var objectKeys = objectKeys$1;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject = toObject$3;
	var IndexedObject = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty = Object.defineProperty;
	var concat = uncurryThis([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails(function () {
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

	var $ = _export;
	var assign = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
	  assign: assign
	});

	/**
	 * Bootstrap Table Catalan translation
	 * Authors: Marc Pina<iwalkalone69@gmail.com>
	 *          Claudi Martinez<claudix.kernel@gmail.com>
	 *          Joan Puigcerver<joapuiib@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['ca-ES'] = $$2.fn.bootstrapTable.locales['ca'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copia resultats';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimeix';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Espereu, si us plau';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " resultats per p\xE0gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrant resultats ".concat(pageFrom, " fins ").concat(pageTo, " - ").concat(totalRows, " resultats (filtrats d'un total de ").concat(totalNotFiltered, " resultats)");
	    }
	    return "Mostrant resultats ".concat(pageFrom, " fins ").concat(pageTo, " - ").concat(totalRows, " resultats en total");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'Pàgina anterior';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "A la p\xE0gina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'Pàgina següent';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrant ".concat(totalRows, " resultats");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Neteja cerca';
	  },
	  formatSearch: function formatSearch() {
	    return 'Cerca';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No s\'han trobat resultats';
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
	  formatRefresh: function formatRefresh() {
	    return 'Refresca';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostra vista de tarjeta';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Amaga vista de tarjeta';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alterna totes';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tots';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresca';
	  },
	  formatExport: function formatExport() {
	    return 'Exporta dades';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Cerca avançada';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Tanca';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Mostra/Amaga controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Mostra controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Amaga controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['ca-ES']);

	/**
	 * Bootstrap Table Czech translation
	 * Author: Lukas Kral (monarcha@seznam.cz)
	 * Author: Jakub Svestka <svestka1999@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['cs-CZ'] = $$2.fn.bootstrapTable.locales['cs'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Kopírovat řádky';
	  },
	  formatPrint: function formatPrint() {
	    return 'Tisk';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Čekejte, prosím';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " polo\u017Eek na str\xE1nku");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Zobrazena ".concat(pageFrom, ". - ").concat(pageTo, " . polo\u017Eka z celkov\xFDch ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Zobrazena ".concat(pageFrom, ". - ").concat(pageTo, " . polo\u017Eka z celkov\xFDch ").concat(totalRows);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'předchozí strana';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na stranu ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'další strana';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Zobrazuji ".concat(totalRows, " \u0159\xE1dek");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Smazat hledání';
	  },
	  formatSearch: function formatSearch() {
	    return 'Vyhledávání';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nenalezena žádná vyhovující položka';
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
	  formatRefresh: function formatRefresh() {
	    return 'Aktualizovat';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Zobrazit karty';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Zobrazit tabulku';
	  },
	  formatColumns: function formatColumns() {
	    return 'Sloupce';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Zobrazit/Skrýt vše';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Zapnout/Vypnout fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Vše';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatické obnovení';
	  },
	  formatExport: function formatExport() {
	    return 'Export dat';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pokročilé hledání';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zavřít';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Skrýt/Zobrazit ovladače';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Skrýt ovladače';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Zobrazit ovladače';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['cs-CZ']);

	/**
	* Bootstrap Table German translation
	* Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
	*/

	$$2.fn.bootstrapTable.locales['de-DE'] = $$2.fn.bootstrapTable.locales['de'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Zeilen kopieren';
	  },
	  formatPrint: function formatPrint() {
	    return 'Drucken';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Lade, bitte warten';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " Zeilen pro Seite.");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Zeige Zeile ".concat(pageFrom, " bis ").concat(pageTo, " von ").concat(totalRows, " Zeile").concat(totalRows > 1 ? 'n' : '', " (Gefiltert von ").concat(totalNotFiltered, " Zeile").concat(totalNotFiltered > 1 ? 'n' : '', ")");
	    }
	    return "Zeige Zeile ".concat(pageFrom, " bis ").concat(pageTo, " von ").concat(totalRows, " Zeile").concat(totalRows > 1 ? 'n' : '', ".");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'Vorherige Seite';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "Zu Seite ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'Nächste Seite';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Zeige ".concat(totalRows, " Zeile").concat(totalRows > 1 ? 'n' : '', ".");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Lösche Filter';
	  },
	  formatSearch: function formatSearch() {
	    return 'Suchen';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Keine passenden Ergebnisse gefunden';
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
	  formatRefresh: function formatRefresh() {
	    return 'Neu laden';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Normale Ansicht';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Kartenansicht';
	  },
	  formatColumns: function formatColumns() {
	    return 'Spalten';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alle umschalten';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Vollbild';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alle';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatisches Neuladen';
	  },
	  formatExport: function formatExport() {
	    return 'Datenexport';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Springen';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Erweiterte Suche';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Schließen';
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
	  formatAddLevel: function formatAddLevel() {
	    return 'Ebene hinzufügen';
	  },
	  formatCancel: function formatCancel() {
	    return 'Abbrechen';
	  },
	  formatColumn: function formatColumn() {
	    return 'Spalte';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Ebene entfernen';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Doppelte Einträge gefunden!';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Bitte doppelte Spalten entfenen oder ändern';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Mehrfachsortierung';
	  },
	  formatOrder: function formatOrder() {
	    return 'Reihenfolge';
	  },
	  formatSort: function formatSort() {
	    return 'Sortieren';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sortieren nach';
	  },
	  formatThenBy: function formatThenBy() {
	    return 'anschließend';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Aufsteigend',
	      desc: 'Absteigend'
	    };
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['de-DE']);

	/**
	 * Bootstrap Table Greek translation
	 * Author: giannisdallas
	 */

	$$2.fn.bootstrapTable.locales['el-GR'] = $$2.fn.bootstrapTable.locales['el'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Φορτώνει, παρακαλώ περιμένετε';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03B1\u03BD\u03AC \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD ".concat(pageFrom, " \u03C9\u03C2 \u03C4\u03B7\u03BD ").concat(pageTo, " \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF ").concat(totalRows, " \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD ".concat(pageFrom, " \u03C9\u03C2 \u03C4\u03B7\u03BD ").concat(pageTo, " \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF ").concat(totalRows, " \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Αναζητήστε';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Δεν βρέθηκαν αποτελέσματα';
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
	  formatRefresh: function formatRefresh() {
	    return 'Refresh';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columns';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['el-GR']);

	/**
	 * Bootstrap Table Bulgarian translation
	 * Author: Mikhail Kalatchev <kalatchev[at]gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['bg-BG'] = $$2.fn.bootstrapTable.locales['bg'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Копиране на редове';
	  },
	  formatPrint: function formatPrint() {
	    return 'Печат';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Зареждане, моля изчакайте';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0440\u0435\u0434\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438 \u0440\u0435\u0434\u043E\u0432\u0435 \u043E\u0442 ".concat(pageFrom, " \u0434\u043E ").concat(pageTo, " \u043E\u0442 ").concat(totalRows, " (\u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u0438 \u043E\u0442 \u043E\u0431\u0449\u043E ").concat(totalNotFiltered, ")");
	    }
	    return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438 \u0440\u0435\u0434\u043E\u0432\u0435 \u043E\u0442 ".concat(pageFrom, " \u0434\u043E ").concat(pageTo, " \u043E\u0442 \u043E\u0431\u0449\u043E ").concat(totalRows);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'предишна страница';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0434\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'следваща страница';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438 ".concat(totalRows, " \u0440\u0435\u0434\u0430");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Изчистване на търсенето';
	  },
	  formatSearch: function formatSearch() {
	    return 'Търсене';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Не са намерени съвпадащи записи';
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
	  formatRefresh: function formatRefresh() {
	    return 'Обновяване';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Показване на изглед карта';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Скриване на изглед карта';
	  },
	  formatColumns: function formatColumns() {
	    return 'Колони';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Превключване на всички';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Цял екран';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Всички';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Автоматично обновяване';
	  },
	  formatExport: function formatExport() {
	    return 'Експорт на данни';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'ОТИДИ';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Разширено търсене';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Затваряне';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Скрива/показва контроли';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Скрива контроли';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Показва контроли';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['bg-BG']);

	/**
	 * Bootstrap Table English translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['en-US'] = $$2.fn.bootstrapTable.locales['en'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Loading, please wait';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rows per page");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Search';
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
	  formatRefresh: function formatRefresh() {
	    return 'Refresh';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columns';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['en-US']);

	/**
	 * Traducción de librería Bootstrap Table a Español (Chile)
	 * @author Brian Álvarez Azócar
	 * email brianalvarezazocar@gmail.com
	 */

	$$2.fn.bootstrapTable.locales['es-CL'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar Filas';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, espere por favor';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " filas por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas (filtrado de ").concat(totalNotFiltered, " filas totales)");
	    }
	    return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'siguiente página';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " filas");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron registros';
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
	  formatRefresh: function formatRefresh() {
	    return 'Refrescar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista de carta';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista de carta';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Cambiar todo';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Recargar';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar datos';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'IR';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['es-CL']);

	/**
	 * Bootstrap Table Spanish (Argentina) translation
	 * Author: Felix Vera (felix.vera@gmail.com)
	 * Edited by: DarkThinking (https://github.com/DarkThinking)
	 */

	$$2.fn.bootstrapTable.locales['es-AR'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar Filas';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, espere por favor';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registros por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando desde ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas (filtrado de ").concat(totalNotFiltered, " columnas totales)");
	    }
	    return "Mostrando desde ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'siguiente página';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " columnas");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron registros';
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
	  formatRefresh: function formatRefresh() {
	    return 'Recargar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista de carta';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista de carta';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Cambiar todo';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Recargar';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar datos';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Ir';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['es-AR']);

	/**
	 * Bootstrap Table Spanish (Costa Rica) translation
	 * Author: Dennis Hernández
	 * Review: Jei (@jeijei4) (20/Oct/2022)
	 */

	$$2.fn.bootstrapTable.locales['es-CR'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar filas';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, por favor espere';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " filas por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas (filtrado de un total de ").concat(totalNotFiltered, " filas)");
	    }
	    return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ir a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'página siguiente';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " filas");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron resultados';
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
	  formatRefresh: function formatRefresh() {
	    return 'Actualizar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista en tarjetas';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista en tarjetas';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alternar todo';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todas las filas';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualización automática';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Ver';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Mostrar/ocultar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['es-CR']);

	/**
	 * Bootstrap Table Spanish Spain translation
	 * Author: Marc Pina<iwalkalone69@gmail.com>
	 * Update: @misteregis <misteregis@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['es-ES'] = $$2.fn.bootstrapTable.locales['es'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar filas';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, por favor espere';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " resultados por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    var plural = totalRows > 1 ? 's' : '';
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando desde ".concat(pageFrom, " hasta ").concat(pageTo, " - En total ").concat(totalRows, " resultado").concat(plural, " (filtrado de un total de ").concat(totalNotFiltered, " fila").concat(plural, ")");
	    }
	    return "Mostrando desde ".concat(pageFrom, " hasta ").concat(pageTo, " - En total ").concat(totalRows, " resultado").concat(plural);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'siguiente página';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " fila").concat(totalRows > 1 ? 's' : '');
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron resultados coincidentes';
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
	  formatRefresh: function formatRefresh() {
	    return 'Recargar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista de carta';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista de carta';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Cambiar todo';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todos';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Recargar';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar los datos';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'IR';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
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
	  formatAddLevel: function formatAddLevel() {
	    return 'Agregar nivel';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancelar';
	  },
	  formatColumn: function formatColumn() {
	    return 'Columna';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Eliminar nivel';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return '¡Se encontraron entradas duplicadas!';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Por favor, elimine o modifique las columnas duplicadas';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Ordenación múltiple';
	  },
	  formatOrder: function formatOrder() {
	    return 'Orden';
	  },
	  formatSort: function formatSort() {
	    return 'Ordenar';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Ordenar por';
	  },
	  formatThenBy: function formatThenBy() {
	    return 'a continuación';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascendente',
	      desc: 'Descendente'
	    };
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['es-ES']);

	/**
	 * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
	 * Author: Felix Vera (felix.vera@gmail.com)
	 * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
	 * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
	 * Revisión: Ricardo González (rickygzz85@gmail.com) (20/Oct/2021)
	 */

	$$2.fn.bootstrapTable.locales['es-MX'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar Filas';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, espere por favor';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " resultados por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas (filtrado de ").concat(totalNotFiltered, " filas totales)");
	    }
	    return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ir a la p\xE1gina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'página siguiente';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " filas");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron registros que coincidan';
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
	  formatRefresh: function formatRefresh() {
	    return 'Actualizar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ocultar vista';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alternar todo';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Pantalla completa';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto actualizar';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar datos';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'IR';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Búsqueda avanzada';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Cerrar';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['es-MX']);

	/**
	 * Bootstrap Table Spanish (Nicaragua) translation
	 * Author: Dennis Hernández
	 */

	$$2.fn.bootstrapTable.locales['es-NI'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, por favor espere';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registros por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando de ".concat(pageFrom, " a ").concat(pageTo, " registros de ").concat(totalRows, " registros en total (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Mostrando de ".concat(pageFrom, " a ").concat(pageTo, " registros de ").concat(totalRows, " registros en total");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se encontraron registros';
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
	  formatRefresh: function formatRefresh() {
	    return 'Refrescar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['es-NI']);

	/**
	 * Bootstrap Table Basque (Basque Country) translation
	 * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['eu-EU'] = $$2.fn.bootstrapTable.locales['eu'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Itxaron mesedez';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " emaitza orriko.");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "".concat(totalRows, " erregistroetatik ").concat(pageFrom, "etik ").concat(pageTo, "erakoak erakusten (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "".concat(totalRows, " erregistroetatik ").concat(pageFrom, "etik ").concat(pageTo, "erakoak erakusten.");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Bilatu';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ez da emaitzarik aurkitu';
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
	  formatRefresh: function formatRefresh() {
	    return 'Eguneratu';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Zutabeak';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Guztiak';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['eu-EU']);

	/**
	 * Bootstrap Table Estonian translation
	 * Author: kristjan@logist.it>
	 */

	$$2.fn.bootstrapTable.locales['et-EE'] = $$2.fn.bootstrapTable.locales['et'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Päring käib, palun oota';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rida lehe kohta");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "N\xE4itan tulemusi ".concat(pageFrom, " kuni ").concat(pageTo, " - kokku ").concat(totalRows, " tulemust (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "N\xE4itan tulemusi ".concat(pageFrom, " kuni ").concat(pageTo, " - kokku ").concat(totalRows, " tulemust");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Otsi';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Päringu tingimustele ei vastanud ühtegi tulemust';
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
	  formatRefresh: function formatRefresh() {
	    return 'Värskenda';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Veerud';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Kõik';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['et-EE']);

	/**
	 * Bootstrap Table Persian translation
	 * Author: MJ Vakili <mjv.1989@Gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['fa-IR'] = $$2.fn.bootstrapTable.locales['fa'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'کپی ردیف ها';
	  },
	  formatPrint: function formatPrint() {
	    return 'پرینت';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'در حال بارگذاری, لطفا صبر کنید';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0631\u06A9\u0648\u0631\u062F \u062F\u0631 \u0635\u0641\u062D\u0647");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0646\u0645\u0627\u06CC\u0634 ".concat(pageFrom, " \u062A\u0627 ").concat(pageTo, " \u0627\u0632 ").concat(totalRows, " \u0631\u062F\u06CC\u0641 (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u0646\u0645\u0627\u06CC\u0634 ".concat(pageFrom, " \u062A\u0627 ").concat(pageTo, " \u0627\u0632 ").concat(totalRows, " \u0631\u062F\u06CC\u0641");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'صفحه قبلی';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0628\u0647 \u0635\u0641\u062D\u0647 ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'صفحه بعدی';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0646\u0645\u0627\u06CC\u0634 ".concat(totalRows, " \u0633\u0637\u0631\u0647\u0627");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'پاک کردن جستجو';
	  },
	  formatSearch: function formatSearch() {
	    return 'جستجو';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'رکوردی یافت نشد.';
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
	  formatRefresh: function formatRefresh() {
	    return 'به روز رسانی';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'سطر ها';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'تغییر وضعیت همه';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'تمام صفحه';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'همه';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'رفرش اتوماتیک';
	  },
	  formatExport: function formatExport() {
	    return 'خروجی دیتا';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'برو';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'جستجوی پیشرفته';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'بستن';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'پنهان/نمایش دادن کنترل ها';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'پنهان کردن کنترل ها';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'نمایش کنترل ها';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['fa-IR']);

	/**
	 * Bootstrap Table Finnish translations
	 * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['fi-FI'] = $$2.fn.bootstrapTable.locales['fi'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Ladataan, ole hyvä ja odota';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rivi\xE4 sivulla");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "N\xE4ytet\xE4\xE4n rivit ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "N\xE4ytet\xE4\xE4n rivit ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Poista suodattimet';
	  },
	  formatSearch: function formatSearch() {
	    return 'Hae';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Hakuehtoja vastaavia tuloksia ei löytynyt';
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
	  formatRefresh: function formatRefresh() {
	    return 'Päivitä';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Sarakkeet';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Kaikki';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Vie tiedot';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['fi-FI']);

	/**
	 * Bootstrap Table French (Belgium) translation
	 * Author: Julien Bisconti (julien.bisconti@gmail.com)
	 *         Nevets82 <Nevets82@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['fr-BE'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copier les lignes';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimer';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9es \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }
	    return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'page précédente';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "vers la page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'page suivante';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Affichage de ".concat(totalRows, " lignes");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatSearch: function formatSearch() {
	    return 'Rechercher';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Aucun résultat';
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
	  formatRefresh: function formatRefresh() {
	    return 'Actualiser';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher la vue en cartes';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher la vue en cartes';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout afficher';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualiser automatiquement';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Aller à';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Recherche avancée';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fermer';
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
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Afficher la vue personnalisée';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Cacher la vue personnalisée';
	  },
	  formatClearFilters: function formatClearFilters() {
	    return 'Retirer les filtres';
	  },
	  formatAddLevel: function formatAddLevel() {
	    return 'Ajouter un niveau';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuler';
	  },
	  formatColumn: function formatColumn() {
	    return 'Colonne';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Supprimer un niveau';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Des entrées en double ont été trouvées !';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Veuillez supprimer ou modifier les entrées en double';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Tri multiple';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordre';
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
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['fr-BE']);

	/**
	 * Bootstrap Table French (Suisse) translation
	 * Author: Nevets82 <Nevets82@gmail.com>
	*/

	$$2.fn.bootstrapTable.locales['fr-CH'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copier les lignes';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimer';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9es \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }
	    return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'page précédente';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "vers la page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'page suivante';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Affichage de ".concat(totalRows, " lignes");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatSearch: function formatSearch() {
	    return 'Rechercher';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Aucun résultat';
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
	  formatRefresh: function formatRefresh() {
	    return 'Actualiser';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher la vue en cartes';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher la vue en cartes';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout afficher';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualiser automatiquement';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Aller à';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Recherche avancée';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fermer';
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
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Afficher la vue personnalisée';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Cacher la vue personnalisée';
	  },
	  formatClearFilters: function formatClearFilters() {
	    return 'Retirer les filtres';
	  },
	  formatAddLevel: function formatAddLevel() {
	    return 'Ajouter un niveau';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuler';
	  },
	  formatColumn: function formatColumn() {
	    return 'Colonne';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Supprimer un niveau';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Des entrées en double ont été trouvées !';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Veuillez supprimer ou modifier les entrées en double';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Tri multiple';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordre';
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
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['fr-CH']);

	/**
	 * Bootstrap Table French (France) translation
	 * Author: Dennis Hernández
	 *         Tidalf (https://github.com/TidalfFR)
	 *         Nevets82 <Nevets82@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['fr-FR'] = $$2.fn.bootstrapTable.locales['fr'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copier les lignes';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimer';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9es \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }
	    return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'page précédente';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "vers la page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'page suivante';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Affichage de ".concat(totalRows, " lignes");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatSearch: function formatSearch() {
	    return 'Rechercher';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Aucun résultat';
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
	  formatRefresh: function formatRefresh() {
	    return 'Actualiser';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher la vue en cartes';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher la vue en cartes';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout afficher';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualiser automatiquement';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Aller à';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Recherche avancée';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fermer';
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
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Afficher la vue personnalisée';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Cacher la vue personnalisée';
	  },
	  formatClearFilters: function formatClearFilters() {
	    return 'Retirer les filtres';
	  },
	  formatAddLevel: function formatAddLevel() {
	    return 'Ajouter un niveau';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuler';
	  },
	  formatColumn: function formatColumn() {
	    return 'Colonne';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Supprimer un niveau';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Des entrées en double ont été trouvées !';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Veuillez supprimer ou modifier les entrées en double';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Tri multiple';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordre';
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
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['fr-FR']);

	/**
	 * Bootstrap Table Hebrew translation
	 * Author: legshooter
	 */

	$$2.fn.bootstrapTable.locales['he-IL'] = $$2.fn.bootstrapTable.locales['he'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'טוען, נא להמתין';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u05DE\u05E6\u05D9\u05D2 ".concat(pageFrom, " \u05E2\u05D3 ").concat(pageTo, " \u05DE-").concat(totalRows, "\u05E9\u05D5\u05E8\u05D5\u05EA").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u05DE\u05E6\u05D9\u05D2 ".concat(pageFrom, " \u05E2\u05D3 ").concat(pageTo, " \u05DE-").concat(totalRows, " \u05E9\u05D5\u05E8\u05D5\u05EA");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'חיפוש';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'לא נמצאו רשומות תואמות';
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
	  formatRefresh: function formatRefresh() {
	    return 'רענן';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'עמודות';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'הכל';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['he-IL']);

	/**
	 * Bootstrap Table French (Luxembourg) translation
	 * Author: Nevets82 <Nevets82@gmail.com>
	 * Editor: David Morais Ferreira (https://github.com/DavidMoraisFerreira/)
	 */

	$$2.fn.bootstrapTable.locales['fr-LU'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copier les lignes';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimer';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9es \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }
	    return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'page précédente';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "vers la page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'page suivante';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Affichage de ".concat(totalRows, " lignes");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatSearch: function formatSearch() {
	    return 'Rechercher';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Aucun résultat';
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
	  formatRefresh: function formatRefresh() {
	    return 'Actualiser';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher la vue en cartes';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher la vue en cartes';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout afficher';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualiser automatiquement';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Aller à';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Recherche avancée';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fermer';
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
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Afficher la vue personnalisée';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Cacher la vue personnalisée';
	  },
	  formatClearFilters: function formatClearFilters() {
	    return 'Retirer les filtres';
	  },
	  formatAddLevel: function formatAddLevel() {
	    return 'Ajouter un niveau';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuler';
	  },
	  formatColumn: function formatColumn() {
	    return 'Colonne';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Supprimer un niveau';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Des entrées en double ont été trouvées !';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Veuillez supprimer ou modifier les entrées en double';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Tri multiple';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordre';
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
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['fr-LU']);

	/**
	 * Bootstrap Table Spanish (España) translation
	 * Author: Antonio Pérez <anpegar@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['es-SP'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Cargando, por favor espera';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registros por p&#225;gina.");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "".concat(pageFrom, " - ").concat(pageTo, " de ").concat(totalRows, " registros (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "".concat(pageFrom, " - ").concat(pageTo, " de ").concat(totalRows, " registros.");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpiar búsqueda';
	  },
	  formatSearch: function formatSearch() {
	    return 'Buscar';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No se han encontrado registros.';
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
	  formatRefresh: function formatRefresh() {
	    return 'Actualizar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Todo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['es-SP']);

	/**
	 * Bootstrap Table Croatian translation
	 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
	 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
	 */

	$$2.fn.bootstrapTable.locales['hr-HR'] = $$2.fn.bootstrapTable.locales['hr'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Molimo pričekajte';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " broj zapisa po stranici");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Prikazujem ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja zapisa ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Prikazujem ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja zapisa ").concat(totalRows);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pretraži';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nije pronađen niti jedan zapis';
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
	  formatRefresh: function formatRefresh() {
	    return 'Osvježi';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolone';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Sve';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['hr-HR']);

	/**
	 * Bootstrap Table Hindi translation
	 * Author: Saurabh Sharma <saurabhsharma2u@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['hi-IN'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'पंक्तियों की कॉपी करें';
	  },
	  formatPrint: function formatPrint() {
	    return 'प्रिंट';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'लोड हो रहा है कृपया प्रतीक्षा करें';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u092A\u094D\u0930\u0924\u093F \u092A\u0943\u0937\u094D\u0920 \u092A\u0902\u0915\u094D\u0924\u093F\u092F\u093E\u0901");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "".concat(pageFrom, " - ").concat(pageTo, " \u092A\u0915\u094D\u0924\u093F\u092F\u093E ").concat(totalRows, " \u092E\u0947\u0902 \u0938\u0947 ( ").concat(totalNotFiltered, " \u092A\u0915\u094D\u0924\u093F\u092F\u093E)");
	    }
	    return "".concat(pageFrom, " - ").concat(pageTo, " \u092A\u0915\u094D\u0924\u093F\u092F\u093E ").concat(totalRows, " \u092E\u0947\u0902 \u0938\u0947");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'पिछला पृष्ठ';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "".concat(page, " \u092A\u0943\u0937\u094D\u0920 \u092A\u0930");
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'अगला पृष्ठ';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "".concat(totalRows, " \u092A\u0902\u0915\u094D\u0924\u093F\u092F\u093E\u0902");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'सर्च क्लिअर करें';
	  },
	  formatSearch: function formatSearch() {
	    return 'सर्च';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'मेल खाते रिकॉर्ड नही मिले';
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
	  formatRefresh: function formatRefresh() {
	    return 'रिफ्रेश';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'कार्ड दृश्य दिखाएं';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'कार्ड दृश्य छुपाएं';
	  },
	  formatColumns: function formatColumns() {
	    return 'कॉलम';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'टॉगल आल';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'पूर्ण स्क्रीन';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'सब';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'ऑटो रिफ्रेश';
	  },
	  formatExport: function formatExport() {
	    return 'एक्सपोर्ट डाटा';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'जाओ';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'एडवांस सर्च';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'बंद करे';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'छुपाओ/दिखाओ कंट्रोल्स';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'छुपाओ कंट्रोल्स';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'दिखाओ कंट्रोल्स';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['hi-IN']);

	/**
	 * Bootstrap Table Hungarian translation
	 * Author: Nagy Gergely <info@nagygergely.eu>
	 */

	$$2.fn.bootstrapTable.locales['hu-HU'] = $$2.fn.bootstrapTable.locales['hu'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Betöltés, kérem várjon';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rekord per oldal");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Megjelen\xEDtve ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows, " \xF6sszesen (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Megjelen\xEDtve ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows, " \xF6sszesen");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Keresés';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nincs találat';
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
	  formatRefresh: function formatRefresh() {
	    return 'Frissítés';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Oszlopok';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Összes';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['hu-HU']);

	/**
	 * Bootstrap Table Indonesian translation
	 * Author: Andre Gardiner<andre@sirdre.com>
	 */

	$$2.fn.bootstrapTable.locales['id-ID'] = $$2.fn.bootstrapTable.locales['id'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Salin baris';
	  },
	  formatPrint: function formatPrint() {
	    return 'Mencetak';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Pemuatan sedang berlangsung';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " baris per halaman");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Menampilkan dari ".concat(pageFrom, " hingga ").concat(pageTo, " pada ").concat(totalRows, " baris (difilter dari ").concat(totalNotFiltered, " baris)");
	    }
	    return "Menampilkan dari ".concat(pageFrom, " hingga ").concat(pageTo, " pada ").concat(totalRows, " baris");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'halaman sebelumnya';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ke halaman ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'halaman berikutnya';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Tampilan ".concat(totalRows, " baris");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Menghapus pencarian';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pencarian';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Tidak ada hasil';
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
	  formatRefresh: function formatRefresh() {
	    return 'Segarkan';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Menampilkan tampilan peta';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Menyembunyikan tampilan peta';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolom';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tampilkan semua';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Layar penuh';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Semua';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Penyegaran otomatis';
	  },
	  formatExport: function formatExport() {
	    return 'Mengekspor data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Pergi ke';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pencarian lanjutan';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Tutup';
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
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Menampilkan tampilan khusus';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Menyembunyikan tampilan khusus';
	  },
	  formatClearFilters: function formatClearFilters() {
	    return 'Menghapus filter';
	  },
	  formatAddLevel: function formatAddLevel() {
	    return 'Menambahkan level';
	  },
	  formatCancel: function formatCancel() {
	    return 'Batal';
	  },
	  formatColumn: function formatColumn() {
	    return 'Kolom';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Menghapus level';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Entri duplikat telah ditemukan!';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Harap hapus atau ubah entri duplikat';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Penyortiran ganda';
	  },
	  formatOrder: function formatOrder() {
	    return 'Urutan';
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
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['id-ID']);

	/**
	 * Bootstrap Table Italian translation
	 * Author: Davide Renzi<davide.renzi@gmail.com>
	 * Author: Davide Borsatto <davide.borsatto@gmail.com>
	 * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['it-IT'] = $$2.fn.bootstrapTable.locales['it'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Caricamento in corso';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " elementi per pagina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Visualizzazione da ".concat(pageFrom, " a ").concat(pageTo, " di ").concat(totalRows, " elementi (filtrati da ").concat(totalNotFiltered, " elementi totali)");
	    }
	    return "Visualizzazione da ".concat(pageFrom, " a ").concat(pageTo, " di ").concat(totalRows, " elementi");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'pagina precedente';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "alla pagina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'pagina successiva';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " elementi");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Pulisci filtri';
	  },
	  formatSearch: function formatSearch() {
	    return 'Cerca';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nessun elemento trovato';
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
	  formatRefresh: function formatRefresh() {
	    return 'Aggiorna';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostra visuale a scheda';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Nascondi visuale a scheda';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonne';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Mostra tutte';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Schermo intero';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tutto';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Aggiornamento';
	  },
	  formatExport: function formatExport() {
	    return 'Esporta dati';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'VAI';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Filtri avanzati';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Chiudi';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['it-IT']);

	/**
	 * Bootstrap Table Japanese translation
	 * Author: Azamshul Azizy <azamshul@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['ja-JP'] = $$2.fn.bootstrapTable.locales['ja'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return '読み込み中です。少々お待ちください。';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "\u30DA\u30FC\u30B8\u5F53\u305F\u308A\u6700\u5927".concat(pageNumber, "\u4EF6");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u5168".concat(totalRows, "\u4EF6\u304B\u3089\u3001").concat(pageFrom, "\u304B\u3089").concat(pageTo, "\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059 (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u5168".concat(totalRows, "\u4EF6\u304B\u3089\u3001").concat(pageFrom, "\u304B\u3089").concat(pageTo, "\u4EF6\u76EE\u307E\u3067\u8868\u793A\u3057\u3066\u3044\u307E\u3059");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return '検索';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return '該当するレコードが見つかりません';
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
	  formatRefresh: function formatRefresh() {
	    return '更新';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return '列';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'すべて';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['ja-JP']);

	/**
	 * Bootstrap Table Georgian translation
	 * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['ka-GE'] = $$2.fn.bootstrapTable.locales['ka'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'იტვირთება, გთხოვთ მოიცადოთ';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10D7\u10D8\u10D7\u10DD \u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u10DC\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D8\u10D0 ".concat(pageFrom, "-\u10D3\u10D0\u10DC ").concat(pageTo, "-\u10DB\u10D3\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10EF\u10D0\u10DB\u10E3\u10E0\u10D8 ").concat(totalRows, "-\u10D3\u10D0\u10DC (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u10DC\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D8\u10D0 ".concat(pageFrom, "-\u10D3\u10D0\u10DC ").concat(pageTo, "-\u10DB\u10D3\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10EF\u10D0\u10DB\u10E3\u10E0\u10D8 ").concat(totalRows, "-\u10D3\u10D0\u10DC");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'ძებნა';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'მონაცემები არ არის';
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
	  formatRefresh: function formatRefresh() {
	    return 'განახლება';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'სვეტები';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['ka-GE']);

	/**
	 * Bootstrap Table Malay translation
	 * Author: Azamshul Azizy <azamshul@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['ms-MY'] = $$2.fn.bootstrapTable.locales['ms'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Permintaan sedang dimuatkan. Sila tunggu sebentar';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rekod setiap muka surat");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Sedang memaparkan rekod ".concat(pageFrom, " hingga ").concat(pageTo, " daripada jumlah ").concat(totalRows, " rekod (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Sedang memaparkan rekod ".concat(pageFrom, " hingga ").concat(pageTo, " daripada jumlah ").concat(totalRows, " rekod");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Cari';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Tiada rekod yang menyamai permintaan';
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
	  formatRefresh: function formatRefresh() {
	    return 'Muatsemula';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Lajur';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Semua';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['ms-MY']);

	/**
	 * Bootstrap Table Korean translation
	 * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
	 * Revision: Abel Yeom (abel.yeom@gmail.com)
	 */

	$$2.fn.bootstrapTable.locales['ko-KR'] = $$2.fn.bootstrapTable.locales['ko'] = {
	  formatCopyRows: function formatCopyRows() {
	    return '행 복사';
	  },
	  formatPrint: function formatPrint() {
	    return '프린트';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return '데이터를 불러오는 중입니다';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "\uD398\uC774\uC9C0 \uB2F9 ".concat(pageNumber, "\uAC1C \uB370\uC774\uD130 \uCD9C\uB825");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\uC804\uCCB4 ".concat(totalRows, "\uAC1C \uC911 ").concat(pageFrom, "~").concat(pageTo, "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825, (\uC804\uCCB4 ").concat(totalNotFiltered, " \uD589\uC5D0\uC11C \uD544\uD130\uB428)");
	    }
	    return "\uC804\uCCB4 ".concat(totalRows, "\uAC1C \uC911 ").concat(pageFrom, "~").concat(pageTo, "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825,");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return '이전 페이지';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "".concat(page, " \uD398\uC774\uC9C0\uB85C \uC774\uB3D9");
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return '다음 페이지';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "".concat(totalRows, " \uD589\uB4E4 \uD45C\uC2DC \uC911");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return '검색 초기화';
	  },
	  formatSearch: function formatSearch() {
	    return '검색';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return '조회된 데이터가 없습니다.';
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
	  formatRefresh: function formatRefresh() {
	    return '새로 고침';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return '카드뷰 보기';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return '카드뷰 숨기기';
	  },
	  formatColumns: function formatColumns() {
	    return '컬럼 필터링';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return '전체 토글';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return '전체 화면';
	  },
	  formatAllRows: function formatAllRows() {
	    return '전체';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return '자동 갱신';
	  },
	  formatExport: function formatExport() {
	    return '데이터 추출';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return '이동';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return '심화 검색';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return '닫기';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return '컨트롤 보기/숨기기';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return '컨트롤 숨기기';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return '컨트롤 보기';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['ko-KR']);

	/**
	 * Bootstrap Table Luxembourgish translation
	 * Author: David Morais Ferreira (https://github.com/DavidMoraisFerreira)
	 */

	$$2.fn.bootstrapTable.locales['lb-LU'] = $$2.fn.bootstrapTable.locales['lb'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Zeilen kopéieren';
	  },
	  formatPrint: function formatPrint() {
	    return 'Drécken';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Gëtt gelueden, gedellëgt Iech wannechgelift ee Moment';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " Zeilen per S\xE4it");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Weist Zeil ".concat(pageFrom, " bis ").concat(pageTo, " vun ").concat(totalRows, " Zeil").concat(totalRows > 1 ? 'en' : '', " (gefiltert vun insgesamt ").concat(totalNotFiltered, " Zeil").concat(totalRows > 1 ? 'en' : '', ")");
	    }
	    return "Weist Zeil ".concat(pageFrom, " bis ").concat(pageTo, " vun ").concat(totalRows, " Zeil").concat(totalRows > 1 ? 'en' : '');
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'viregt Säit';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "op S\xE4it ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'nächst Säit';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Weist ".concat(totalRows, " Zeilen");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Sich réckgängeg maachen';
	  },
	  formatSearch: function formatSearch() {
	    return 'Sich';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Keng passend Anträg fonnt';
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
	  formatRefresh: function formatRefresh() {
	    return 'Nei lueden';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Kaartenusiicht uweisen';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Kaartenusiicht verstoppen';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolonnen';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'All ëmschalten';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Vollbild';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatescht neilueden';
	  },
	  formatExport: function formatExport() {
	    return 'Daten exportéieren';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Sprangen';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Erweidert Sich';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zoumaachen';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Schaltelementer uweisen/verstoppen';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Schaltelementer verstoppen';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Schaltelementer uweisen';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['lb-LU']);

	/**
	 * Bootstrap Table Dutch (België) translation
	 * Author: Nevets82 <Nevets82@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['nl-BE'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Laden, even geduld';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " records per pagina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '', " (gefilterd van ").concat(totalNotFiltered, " records in totaal)");
	    }
	    return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'vorige pagina';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "tot pagina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'volgende pagina';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Toon ".concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Verwijder filters';
	  },
	  formatSearch: function formatSearch() {
	    return 'Zoeken';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Geen resultaten gevonden';
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
	  formatRefresh: function formatRefresh() {
	    return 'Vernieuwen';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Toon kaartweergave';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Verberg kaartweergave';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolommen';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Allen omschakelen';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Volledig scherm';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alle';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatisch vernieuwen';
	  },
	  formatExport: function formatExport() {
	    return 'Exporteer gegevens';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GA';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Geavanceerd zoeken';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Sluiten';
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
	  formatAddLevel: function formatAddLevel() {
	    return 'Niveau toevoegen';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuleren';
	  },
	  formatColumn: function formatColumn() {
	    return 'Kolom';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Niveau verwijderen';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicaten gevonden!';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Gelieve dubbele kolommen te verwijderen of wijzigen';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Meervoudige sortering';
	  },
	  formatOrder: function formatOrder() {
	    return 'Volgorde';
	  },
	  formatSort: function formatSort() {
	    return 'Sorteren';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sorteren op';
	  },
	  formatThenBy: function formatThenBy() {
	    return 'vervolgens';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Oplopend',
	      desc: 'Aflopend'
	    };
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['nl-BE']);

	/**
	 * Bootstrap Table norwegian translation
	 * Author: Jim Nordbø, jim@nordb.no
	 */

	$$2.fn.bootstrapTable.locales['nb-NO'] = $$2.fn.bootstrapTable.locales['nb'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Oppdaterer, vennligst vent';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " poster pr side");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Viser ".concat(pageFrom, " til ").concat(pageTo, " av ").concat(totalRows, " rekker (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Viser ".concat(pageFrom, " til ").concat(pageTo, " av ").concat(totalRows, " rekker");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Søk';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ingen poster funnet';
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
	  formatRefresh: function formatRefresh() {
	    return 'Oppdater';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolonner';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['nb-NO']);

	/**
	 * Bootstrap Table Polish translation
	 * Author: zergu <michal.zagdan @ gmail com>
	 * Update: kerogos <kerog @ wp pl>
	 */

	$$2.fn.bootstrapTable.locales['pl-PL'] = $$2.fn.bootstrapTable.locales['pl'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Kopiuj wiersze';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Ładowanie, proszę czekać';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rekord\xF3w na stron\u0119");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Wy\u015Bwietlanie rekord\xF3w od ".concat(pageFrom, " do ").concat(pageTo, " z ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Wy\u015Bwietlanie rekord\xF3w od ".concat(pageFrom, " do ").concat(pageTo, " z ").concat(totalRows);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'poprzednia strona';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "z ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'następna strona';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Wy\u015Bwietla ".concat(totalRows, " wierszy");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Wyczyść wyszukiwanie';
	  },
	  formatSearch: function formatSearch() {
	    return 'Szukaj';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Niestety, nic nie znaleziono';
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
	  formatRefresh: function formatRefresh() {
	    return 'Odśwież';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Pokaż układ karty';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ukryj układ karty';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolumny';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Zaznacz wszystko';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Wszystkie';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto odświeżanie';
	  },
	  formatExport: function formatExport() {
	    return 'Eksport danych';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Przejdź';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Wyszukiwanie zaawansowane';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zamknij';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Pokaż/Ukryj';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Pokaż';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Ukryj';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['pl-PL']);

	/**
	 * Bootstrap Table Brazilian Portuguese Translation
	 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
	 * Update: João Mello<jmello@hotmail.com.br>
	 * Update: Leandro Felizari<lfelizari@gmail.com>
	 * Update: Fernando Marcos Souza Silva<fernandomarcosss@gmail.com>
	 * Update: @misteregis <misteregis@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['pt-BR'] = $$2.fn.bootstrapTable.locales['br'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar linhas';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Carregando, aguarde';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registros por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    var plural = totalRows > 1 ? 's' : '';
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Exibindo ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural, " (filtrado de um total de ").concat(totalNotFiltered, " linha").concat(plural, ")");
	    }
	    return "Exibindo ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ir para a p\xE1gina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'próxima página';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " linha").concat(totalRows > 1 ? 's' : '');
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpar Pesquisa';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pesquisar';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nenhum registro encontrado';
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
	  formatRefresh: function formatRefresh() {
	    return 'Recarregar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar visualização de cartão';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colunas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Alternar tudo';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Tela cheia';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tudo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Atualização Automática';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar dados';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Ir';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pesquisa Avançada';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fechar';
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
	  formatAddLevel: function formatAddLevel() {
	    return 'Adicionar nível';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancelar';
	  },
	  formatColumn: function formatColumn() {
	    return 'Coluna';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Remover nível';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Encontradas entradas duplicadas!';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Por favor, remova ou altere as colunas duplicadas';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Ordenação múltipla';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordem';
	  },
	  formatSort: function formatSort() {
	    return 'Ordenar';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Ordenar por';
	  },
	  formatThenBy: function formatThenBy() {
	    return 'em seguida';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Crescente',
	      desc: 'Decrescente'
	    };
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['pt-BR']);

	/**
	 * Bootstrap Table Dutch (Nederland) translation
	 * Author: Your Name <info@a2hankes.nl>
	 *         Nevets82 <Nevets82@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['nl-NL'] = $$2.fn.bootstrapTable.locales['nl'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Laden, even geduld';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " records per pagina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '', " (gefilterd van ").concat(totalNotFiltered, " records in totaal)");
	    }
	    return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'vorige pagina';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "tot pagina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'volgende pagina';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Toon ".concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Verwijder filters';
	  },
	  formatSearch: function formatSearch() {
	    return 'Zoeken';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Geen resultaten gevonden';
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
	  formatRefresh: function formatRefresh() {
	    return 'Vernieuwen';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Toon kaartweergave';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Verberg kaartweergave';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolommen';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Allen omschakelen';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Volledig scherm';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alle';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatisch vernieuwen';
	  },
	  formatExport: function formatExport() {
	    return 'Exporteer gegevens';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GA';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Geavanceerd zoeken';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Sluiten';
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
	  formatAddLevel: function formatAddLevel() {
	    return 'Niveau toevoegen';
	  },
	  formatCancel: function formatCancel() {
	    return 'Annuleren';
	  },
	  formatColumn: function formatColumn() {
	    return 'Kolom';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Niveau verwijderen';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplicaten gevonden!';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Gelieve dubbele kolommen te verwijderen of wijzigen';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Meervoudige sortering';
	  },
	  formatOrder: function formatOrder() {
	    return 'Volgorde';
	  },
	  formatSort: function formatSort() {
	    return 'Sorteren';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Sorteren op';
	  },
	  formatThenBy: function formatThenBy() {
	    return 'vervolgens';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Oplopend',
	      desc: 'Aflopend'
	    };
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['nl-NL']);

	/**
	 * Bootstrap Table Portuguese Portugal Translation
	 * Author: Burnspirit<burnspirit@gmail.com>
	 * Update: @misteregis <misteregis@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['pt-PT'] = $$2.fn.bootstrapTable.locales['pt'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar Linhas';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'A carregar, por favor aguarde';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registos por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    var plural = totalRows > 1 ? 's' : '';
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "A mostrar ".concat(pageFrom, " at&eacute; ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural, " (filtrado de um total de ").concat(totalNotFiltered, " linha").concat(plural, ")");
	    }
	    return "A mostrar ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "ir para p\xE1gina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'próxima página';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " linha").concat(totalRows > 1 ? 's' : '');
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Limpar Pesquisa';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pesquisa';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nenhum registo encontrado';
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
	  formatRefresh: function formatRefresh() {
	    return 'Actualizar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Mostrar vista em forma de cartão';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Esconder vista em forma de cartão';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colunas';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Activar tudo';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Ecrã completo';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tudo';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualização autmática';
	  },
	  formatExport: function formatExport() {
	    return 'Exportar dados';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Avançar';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pesquisa avançada';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Fechar';
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
	  formatAddLevel: function formatAddLevel() {
	    return 'Adicionar nível';
	  },
	  formatCancel: function formatCancel() {
	    return 'Cancelar';
	  },
	  formatColumn: function formatColumn() {
	    return 'Coluna';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Remover nível';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Foram encontradas entradas duplicadas!';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Por favor, remova ou altere as colunas duplicadas';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Ordenação múltipla';
	  },
	  formatOrder: function formatOrder() {
	    return 'Ordem';
	  },
	  formatSort: function formatSort() {
	    return 'Ordenar';
	  },
	  formatSortBy: function formatSortBy() {
	    return 'Ordenar por';
	  },
	  formatThenBy: function formatThenBy() {
	    return 'em seguida';
	  },
	  formatSortOrders: function formatSortOrders() {
	    return {
	      asc: 'Ascendente',
	      desc: 'Descendente'
	    };
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['pt-PT']);

	/**
	 * Bootstrap Table Romanian translation
	 * Author: cristake <cristianiosif@me.com>
	 */

	$$2.fn.bootstrapTable.locales['ro-RO'] = $$2.fn.bootstrapTable.locales['ro'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Se incarca, va rugam asteptati';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " inregistrari pe pagina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Arata de la ".concat(pageFrom, " pana la ").concat(pageTo, " din ").concat(totalRows, " randuri (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Arata de la ".concat(pageFrom, " pana la ").concat(pageTo, " din ").concat(totalRows, " randuri");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Cauta';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nu au fost gasite inregistrari';
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
	  formatRefresh: function formatRefresh() {
	    return 'Reincarca';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Coloane';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Toate';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['ro-RO']);

	/**
	 * Bootstrap Table danish translation
	 * Author: Your Name Jan Borup Coyle, github@coyle.dk
	 */

	$$2.fn.bootstrapTable.locales['da-DK'] = $$2.fn.bootstrapTable.locales['da'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Indlæser, vent venligst';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " poster pr side");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Viser ".concat(pageFrom, " til ").concat(pageTo, " af ").concat(totalRows, " r\xE6kke").concat(totalRows > 1 ? 'r' : '', " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Viser ".concat(pageFrom, " til ").concat(pageTo, " af ").concat(totalRows, " r\xE6kke").concat(totalRows > 1 ? 'r' : '');
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Viser ".concat(totalRows, " r\xE6kke").concat(totalRows > 1 ? 'r' : '');
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Ryd filtre';
	  },
	  formatSearch: function formatSearch() {
	    return 'Søg';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ingen poster fundet';
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
	  formatRefresh: function formatRefresh() {
	    return 'Opdater';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolonner';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alle';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Eksporter';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['da-DK']);

	/**
	 * Bootstrap Table Slovak translation
	 * Author: Jozef Dúc<jozef.d13@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['sk-SK'] = $$2.fn.bootstrapTable.locales['sk'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Skopírovať riadky';
	  },
	  formatPrint: function formatPrint() {
	    return 'Vytlačiť';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Prosím čakajte';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " z\xE1znamov na stranu");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Zobrazen\xE1 ".concat(pageFrom, ". - ").concat(pageTo, ". polo\u017Eka z celkov\xFDch ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Zobrazen\xE1 ".concat(pageFrom, ". - ").concat(pageTo, ". polo\u017Eka z celkov\xFDch ").concat(totalRows);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'Predchádzajúca strana';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na stranu ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'Nasledujúca strana';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Zobrazuje sa ".concat(totalRows, " riadkov");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Odstráň filtre';
	  },
	  formatSearch: function formatSearch() {
	    return 'Vyhľadávanie';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nenájdená žiadna vyhovujúca položka';
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
	  formatRefresh: function formatRefresh() {
	    return 'Obnoviť';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Zobraziť kartové zobrazenie';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'skryť kartové zobrazenie';
	  },
	  formatColumns: function formatColumns() {
	    return 'Stĺpce';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Prepnúť všetky';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Celá obrazovka';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Všetky';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatické obnovenie';
	  },
	  formatExport: function formatExport() {
	    return 'Exportuj dáta';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Ísť';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Pokročilé vyhľadávanie';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zatvoriť';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Zobraziť/Skryť tlačidlá';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Skryť tlačidlá';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Zobraziť tlačidlá';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['sk-SK']);

	/**
	 * Bootstrap Table Russian translation
	 * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
	 */

	$$2.fn.bootstrapTable.locales['ru-RU'] = $$2.fn.bootstrapTable.locales['ru'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Скопировать строки';
	  },
	  formatPrint: function formatPrint() {
	    return 'Печать';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Пожалуйста, подождите, идёт загрузка';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0438\u0437 ").concat(totalRows, " (\u043E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043E, \u0432\u0441\u0435\u0433\u043E \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ").concat(totalNotFiltered, " \u0437\u0430\u043F\u0438\u0441\u0435\u0439)");
	    }
	    return "\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0438\u0437 ").concat(totalRows);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'предыдущая страница';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'следующая страница';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E ".concat(totalRows, " \u0441\u0442\u0440\u043E\u043A");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Очистить фильтры';
	  },
	  formatSearch: function formatSearch() {
	    return 'Поиск';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ничего не найдено';
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
	  formatRefresh: function formatRefresh() {
	    return 'Обновить';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Показать записи в виде карточек';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Табличный режим просмотра';
	  },
	  formatColumns: function formatColumns() {
	    return 'Колонки';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Выбрать все';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Полноэкранный режим';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Все';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Автоматическое обновление';
	  },
	  formatExport: function formatExport() {
	    return 'Экспортировать данные';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Стр.';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Расширенный поиск';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Закрыть';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Скрыть/Показать панель инструментов';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Скрыть панель инструментов';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Показать панель инструментов';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['ru-RU']);

	/**
	 * Bootstrap Table Serbian Latin RS translation
	 * Author: Vladimir Kanazir (vladimir@kanazir.com)
	 */

	$$2.fn.bootstrapTable.locales['sr-Latn-RS'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Molim sačekaj';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " redova po strani");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Prikazano ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja redova ").concat(totalRows, " (filtrirano od ").concat(totalNotFiltered, ")");
	    }
	    return "Prikazano ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja redova ").concat(totalRows);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'prethodna strana';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na stranu ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'sledeća strana';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Prikazano ".concat(totalRows, " redova");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Obriši pretragu';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pronađi';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Nije pronađen ni jedan podatak';
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
	  formatRefresh: function formatRefresh() {
	    return 'Osveži';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Prikaži kartice';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Sakrij kartice';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolone';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Prikaži/sakrij sve';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Ceo ekran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Sve';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Automatsko osvežavanje';
	  },
	  formatExport: function formatExport() {
	    return 'Izvezi podatke';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Idi';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Napredna pretraga';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zatvori';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['sr-Latn-RS']);

	/**
	 * Bootstrap Table Swedish translation
	 * Author: C Bratt <bratt@inix.se>
	 */

	$$2.fn.bootstrapTable.locales['sv-SE'] = $$2.fn.bootstrapTable.locales['sv'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Laddar, vänligen vänta';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rader per sida");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Visa ".concat(pageFrom, " till ").concat(pageTo, " av ").concat(totalRows, " rader (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Visa ".concat(pageFrom, " till ").concat(pageTo, " av ").concat(totalRows, " rader");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'Sök';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Inga matchande resultat funna.';
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
	  formatRefresh: function formatRefresh() {
	    return 'Uppdatera';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'kolumn';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['sv-SE']);

	/**
	 * Bootstrap Table Slovenian translation
	 * Author: Ales Hotko <ales.hotko@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['sl-SI'] = $$2.fn.bootstrapTable.locales['sl'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Kopiraj vrstice';
	  },
	  formatPrint: function formatPrint() {
	    return 'Natisni';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Prosim počakajte...';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " vrstic na stran");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Prikaz ".concat(pageFrom, " do ").concat(pageTo, " od ").concat(totalRows, " vrstic (filtrirano od skupno ").concat(totalNotFiltered, " vrstic)");
	    }
	    return "Prikaz ".concat(pageFrom, " do ").concat(pageTo, " od ").concat(totalRows, " vrstic");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'prejšnja stran';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na stran ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'na slednja stran';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Prikaz ".concat(totalRows, " vrstic");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Počisti';
	  },
	  formatSearch: function formatSearch() {
	    return 'Iskanje';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Ni najdenih rezultatov';
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
	  formatRefresh: function formatRefresh() {
	    return 'Osveži';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Prikaži kartični pogled';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Skrij kartični pogled';
	  },
	  formatColumns: function formatColumns() {
	    return 'Stolpci';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Preklopi vse';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Celozaslonski prikaz';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Vse';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Samodejna osvežitev';
	  },
	  formatExport: function formatExport() {
	    return 'Izvoz podatkov';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Napredno iskanje';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Zapri';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Skrij/Pokaži kontrole';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Skrij kontrole';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Pokaži kontrole';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['sl-SI']);

	/**
	 * Bootstrap Table Turkish translation
	 * Author: Emin Şen
	 * Author: Sercan Cakir <srcnckr@gmail.com>
	 * Update From: Sait KURT <bilgi@ientegre.com> <https://github.com/xDeSwa>
	 */

	$$2.fn.bootstrapTable.locales['tr-TR'] = $$2.fn.bootstrapTable.locales['tr'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Satırları Kopyala';
	  },
	  formatPrint: function formatPrint() {
	    return 'Yazdır';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Yükleniyor, lütfen bekleyin';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "Sayfa ba\u015F\u0131na ".concat(pageNumber, " kay\u0131t.");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "".concat(totalRows, " kay\u0131ttan ").concat(pageFrom, "-").concat(pageTo, " aras\u0131 g\xF6steriliyor (").concat(totalNotFiltered, " toplam sat\u0131r filtrelendi).");
	    }
	    return "".concat(totalRows, " kay\u0131ttan ").concat(pageFrom, "-").concat(pageTo, " aras\u0131 g\xF6steriliyor.");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'önceki sayfa';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "sayfa ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'sonraki sayfa';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "".concat(totalRows, " sat\u0131r g\xF6steriliyor");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Aramayı Temizle';
	  },
	  formatSearch: function formatSearch() {
	    return 'Ara';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Eşleşen kayıt bulunamadı.';
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
	  formatRefresh: function formatRefresh() {
	    return 'Yenile';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Kart Görünümünü Göster';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Kart Görünümünü Gizle';
	  },
	  formatColumns: function formatColumns() {
	    return 'Sütunlar';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tümünü Kapat';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Tam Ekran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tüm Satırlar';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Otomatik Yenileme';
	  },
	  formatExport: function formatExport() {
	    return 'Verileri Dışa Aktar';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Git';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Gelişmiş Arama';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Kapat';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Kontrolleri Gizle/Göster';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Kontrolleri Gizle';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Kontrolleri Göster';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['tr-TR']);

	/**
	 * Bootstrap Table Serbian Cyrilic RS translation
	 * Author: Vladimir Kanazir (vladimir@kanazir.com)
	 */

	$$2.fn.bootstrapTable.locales['sr-Cyrl-RS'] = $$2.fn.bootstrapTable.locales['sr'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Молим сачекај';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0440\u0435\u0434\u043E\u0432\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E ".concat(pageFrom, ". - ").concat(pageTo, ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 ").concat(totalRows, " (\u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u043E \u043E\u0434 ").concat(totalNotFiltered, ")");
	    }
	    return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E ".concat(pageFrom, ". - ").concat(pageTo, ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 ").concat(totalRows);
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'претходна страна';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0443 ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'следећа страна';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E ".concat(totalRows, " \u0440\u0435\u0434\u043E\u0432\u0430");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Обриши претрагу';
	  },
	  formatSearch: function formatSearch() {
	    return 'Пронађи';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Није пронађен ни један податак';
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
	  formatRefresh: function formatRefresh() {
	    return 'Освежи';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Прикажи картице';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Сакриј картице';
	  },
	  formatColumns: function formatColumns() {
	    return 'Колоне';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Прикажи/сакриј све';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Цео екран';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Све';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Аутоматско освежавање';
	  },
	  formatExport: function formatExport() {
	    return 'Извези податке';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Иди';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Напредна претрага';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Затвори';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['sr-Cyrl-RS']);

	/**
	 * Bootstrap Table Uzbek translation
	 * Author: Nabijon Masharipov <mnabijonz@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['uz-Latn-UZ'] = $$2.fn.bootstrapTable.locales['uz'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Yuklanyapti, iltimos kuting';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " qator har sahifada");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Ko'rsatypati ".concat(pageFrom, " dan ").concat(pageTo, " gacha ").concat(totalRows, " qatorlarni (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "Ko'rsatypati ".concat(pageFrom, " dan ").concat(pageTo, " gacha ").concat(totalRows, " qatorlarni");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Filtrlarni tozalash';
	  },
	  formatSearch: function formatSearch() {
	    return 'Qidirish';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Hech narsa topilmadi';
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
	  formatRefresh: function formatRefresh() {
	    return 'Yangilash';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Ustunlar';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Hammasi';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Eksport';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['uz-Latn-UZ']);

	/**
	 * Bootstrap Table Urdu translation
	 * Author: Malik <me@malikrizwan.com>
	 */

	$$2.fn.bootstrapTable.locales['ur-PK'] = $$2.fn.bootstrapTable.locales['ur'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'براۓ مہربانی انتظار کیجئے';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 \u0641\u06CC \u0635\u0641\u06C1 ");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u062F\u06CC\u06A9\u06BE\u06CC\u06BA ".concat(pageFrom, " \u0633\u06D2 ").concat(pageTo, " \u06A9\u06D2 ").concat(totalRows, "\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u062F\u06CC\u06A9\u06BE\u06CC\u06BA ".concat(pageFrom, " \u0633\u06D2 ").concat(pageTo, " \u06A9\u06D2 ").concat(totalRows, "\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'تلاش';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'کوئی ریکارڈ نہیں ملا';
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
	  formatRefresh: function formatRefresh() {
	    return 'تازہ کریں';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'کالم';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['ur-PK']);

	/**
	 * Bootstrap Table Thai translation
	 * Author: Monchai S.<monchais@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['th-TH'] = $$2.fn.bootstrapTable.locales['th'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'กำลังโหลดข้อมูล, กรุณารอสักครู่';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ".concat(pageFrom, " \u0E16\u0E36\u0E07 ").concat(pageTo, " \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ").concat(totalRows, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 (filtered from ").concat(totalNotFiltered, " total rows)");
	    }
	    return "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ".concat(pageFrom, " \u0E16\u0E36\u0E07 ").concat(pageTo, " \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ").concat(totalRows, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'previous page';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "to page ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'next page';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Showing ".concat(totalRows, " rows");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear Search';
	  },
	  formatSearch: function formatSearch() {
	    return 'ค้นหา';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'ไม่พบรายการที่ค้นหา !';
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
	  formatRefresh: function formatRefresh() {
	    return 'รีเฟรส';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'คอลัมน์';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'All';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Auto Refresh';
	  },
	  formatExport: function formatExport() {
	    return 'Export data';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'GO';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Advanced search';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Close';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Hide/Show controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Hide controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Show controls';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['th-TH']);

	/**
	 * Bootstrap Table Ukrainian translation
	 * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['uk-UA'] = $$2.fn.bootstrapTable.locales['uk'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Скопіювати рядки';
	  },
	  formatPrint: function formatPrint() {
	    return 'Друк';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Завантаження, будь ласка, зачекайте';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0440\u044F\u0434\u043A\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E \u0440\u044F\u0434\u043A\u0438 \u0437 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0437 ").concat(totalRows, " \u0437\u0430\u0433\u0430\u043B\u043E\u043C (\u0432\u0456\u0434\u0444\u0456\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043E \u0437 ").concat(totalNotFiltered, " \u0440\u044F\u0434\u043A\u0456\u0432)");
	    }
	    return "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E \u0440\u044F\u0434\u043A\u0438 \u0437 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0437 ").concat(totalRows, " \u0437\u0430\u0433\u0430\u043B\u043E\u043C");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'попередня сторінка';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0434\u043E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'наступна сторінка';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E ".concat(totalRows, " \u0440\u044F\u0434\u043A\u0456\u0432");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Скинути фільтри';
	  },
	  formatSearch: function formatSearch() {
	    return 'Пошук';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Не знайдено жодного запису';
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
	  formatRefresh: function formatRefresh() {
	    return 'Оновити';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Відобразити у форматі карток';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Вимкнути формат карток';
	  },
	  formatColumns: function formatColumns() {
	    return 'Стовпці';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Переключити усі';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Повноекранний режим';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Усі';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Автооновлення';
	  },
	  formatExport: function formatExport() {
	    return 'Експортувати дані';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Швидкий перехід до';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Розширений пошук';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Закрити';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Сховати/Відобразити елементи керування';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Сховати елементи керування';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Відобразити елементи керування';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['uk-UA']);

	/**
	 * Bootstrap Table Chinese translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['zh-TW'] = {
	  formatCopyRows: function formatCopyRows() {
	    return '複製行';
	  },
	  formatPrint: function formatPrint() {
	    return '列印';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return '正在努力地載入資料，請稍候';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "\u6BCF\u9801\u986F\u793A ".concat(pageNumber, " \u9805\u8A18\u9304");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u986F\u793A\u7B2C ".concat(pageFrom, " \u5230\u7B2C ").concat(pageTo, " \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 ").concat(totalRows, " \u9805\u8A18\u9304\uFF08\u5F9E ").concat(totalNotFiltered, " \u7E3D\u8A18\u9304\u4E2D\u904E\u6FFE\uFF09");
	    }
	    return "\u986F\u793A\u7B2C ".concat(pageFrom, " \u5230\u7B2C ").concat(pageTo, " \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 ").concat(totalRows, " \u9805\u8A18\u9304");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return '上一頁';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u7B2C".concat(page, "\u9801");
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return '下一頁';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u7E3D\u5171 ".concat(totalRows, " \u9805\u8A18\u9304");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return '清空過濾';
	  },
	  formatSearch: function formatSearch() {
	    return '搜尋';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return '沒有找到符合的結果';
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
	  formatRefresh: function formatRefresh() {
	    return '重新整理';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return '顯示卡片視圖';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return '隱藏卡片視圖';
	  },
	  formatColumns: function formatColumns() {
	    return '列';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return '切換所有';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return '全屏';
	  },
	  formatAllRows: function formatAllRows() {
	    return '所有';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return '自動刷新';
	  },
	  formatExport: function formatExport() {
	    return '導出數據';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return '跳轉';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return '高級搜尋';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return '關閉';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return '隱藏/顯示過濾控制';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return '隱藏過濾控制';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return '顯示過濾控制';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['zh-TW']);

	/**
	 * Bootstrap Table Vietnamese translation
	 * Author: Duc N. PHAM <pngduc@gmail.com>
	 * Revision: Le Ngo Duc Manh <myt@nnsvn.me> (07/Mar/2024)
	 */

	$$2.fn.bootstrapTable.locales['vi-VN'] = $$2.fn.bootstrapTable.locales['vi'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Sao chép hàng';
	  },
	  formatPrint: function formatPrint() {
	    return 'In';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Đang tải';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " b\u1EA3n ghi m\u1ED7i trang");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Hi\u1EC3n th\u1ECB t\u1EEB trang ".concat(pageFrom, " \u0111\u1EBFn ").concat(pageTo, " c\u1EE7a ").concat(totalRows, " b\u1EA3n ghi (\u0111\u01B0\u1EE3c l\u1ECDc t\u1EEB t\u1ED5ng ").concat(totalNotFiltered, " h\xE0ng)");
	    }
	    return "Hi\u1EC3n th\u1ECB t\u1EEB trang ".concat(pageFrom, " \u0111\u1EBFn ").concat(pageTo, " c\u1EE7a ").concat(totalRows, " b\u1EA3n ghi");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'trang trước';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0111\u1EBFn trang ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'trang sau';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0110ang hi\u1EC7n ".concat(totalRows, " h\xE0ng");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Xoá tìm kiếm';
	  },
	  formatSearch: function formatSearch() {
	    return 'Tìm kiếm';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Không có dữ liệu';
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
	  formatRefresh: function formatRefresh() {
	    return 'Làm mới';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Hiển thị các thẻ';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Ẩn các thẻ';
	  },
	  formatColumns: function formatColumns() {
	    return 'Cột';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Hiện tất cả';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Toàn màn hình';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tất cả';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Tự động làm mới';
	  },
	  formatExport: function formatExport() {
	    return 'Xuất dữ liệu';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Đến';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Tìm kiếm nâng cao';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Đóng';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'Ẩn/Hiện điều khiển';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ẩn điều khiển';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Hiện điều khiển';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['vi-VN']);

	/**
	 * Bootstrap Table Afrikaans translation
	 * Author: Phillip Kruger <phillip.kruger@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['af-ZA'] = $$2.fn.bootstrapTable.locales['af'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Kopieer lyne';
	  },
	  formatPrint: function formatPrint() {
	    return 'Druk uit';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Laai tans';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " re\xEBls per bladsy");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Wys ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " lyne (gefiltreer vanaf ").concat(totalNotFiltered, " lyne)");
	    }
	    return "Wys ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " lyne");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'vorige bladsy';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "na bladsy ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'volgende bladsy';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "".concat(totalRows, "-re\xEBl vertoon");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Duidelike soektog';
	  },
	  formatSearch: function formatSearch() {
	    return 'Navorsing';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Geen resultate nie';
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
	  formatRefresh: function formatRefresh() {
	    return 'Verfris';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Wys kaartaansig';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Versteek kaartaansig';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolomme';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Wys alles';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Volskerm';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Alles';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Verfris outomaties';
	  },
	  formatExport: function formatExport() {
	    return 'Voer data uit';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'Gaan na';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'Gevorderde soektog';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'Maak';
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
	  formatToggleCustomViewOn: function formatToggleCustomViewOn() {
	    return 'Wys pasgemaakte aansig';
	  },
	  formatToggleCustomViewOff: function formatToggleCustomViewOff() {
	    return 'Versteek pasgemaakte aansig';
	  },
	  formatClearFilters: function formatClearFilters() {
	    return 'Verwyder filters';
	  },
	  formatAddLevel: function formatAddLevel() {
	    return 'Voeg \'n vlak by';
	  },
	  formatCancel: function formatCancel() {
	    return 'Kanselleer';
	  },
	  formatColumn: function formatColumn() {
	    return 'Kolom';
	  },
	  formatDeleteLevel: function formatDeleteLevel() {
	    return 'Vee \'n vlak uit';
	  },
	  formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
	    return 'Duplikaatinskrywings is gevind!';
	  },
	  formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
	    return 'Verwyder of wysig asseblief duplikaatinskrywings';
	  },
	  formatMultipleSort: function formatMultipleSort() {
	    return 'Multi-sorteer';
	  },
	  formatOrder: function formatOrder() {
	    return 'Bestelling';
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
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['af-ZA']);

	/**
	 * Bootstrap Table Chinese translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$$2.fn.bootstrapTable.locales['zh-CN'] = $$2.fn.bootstrapTable.locales['zh'] = {
	  formatCopyRows: function formatCopyRows() {
	    return '复制行';
	  },
	  formatPrint: function formatPrint() {
	    return '打印';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return '正在努力地加载数据中，请稍候';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "\u6BCF\u9875\u663E\u793A ".concat(pageNumber, " \u6761\u8BB0\u5F55");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u663E\u793A\u7B2C ".concat(pageFrom, " \u5230\u7B2C ").concat(pageTo, " \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 ").concat(totalRows, " \u6761\u8BB0\u5F55\uFF08\u4ECE ").concat(totalNotFiltered, " \u603B\u8BB0\u5F55\u4E2D\u8FC7\u6EE4\uFF09");
	    }
	    return "\u663E\u793A\u7B2C ".concat(pageFrom, " \u5230\u7B2C ").concat(pageTo, " \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 ").concat(totalRows, " \u6761\u8BB0\u5F55");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return '上一页';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u7B2C".concat(page, "\u9875");
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return '下一页';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u603B\u5171 ".concat(totalRows, " \u6761\u8BB0\u5F55");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return '清空过滤';
	  },
	  formatSearch: function formatSearch() {
	    return '搜索';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return '没有找到匹配的记录';
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
	  formatRefresh: function formatRefresh() {
	    return '刷新';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return '显示卡片视图';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return '隐藏卡片视图';
	  },
	  formatColumns: function formatColumns() {
	    return '列';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return '切换所有';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return '全屏';
	  },
	  formatAllRows: function formatAllRows() {
	    return '所有';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return '自动刷新';
	  },
	  formatExport: function formatExport() {
	    return '导出数据';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return '跳转';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return '高级搜索';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return '关闭';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return '隐藏/显示过滤控制';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return '隐藏过滤控制';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return '显示过滤控制';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['zh-CN']);

	/**
	 * Bootstrap Table Arabic translation
	 * Author: Othman Ali Modaes<othman2004_ye@yahoo.com>
	 */

	$$2.fn.bootstrapTable.locales['ar-SA'] = $$2.fn.bootstrapTable.locales['ar'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'نسخ الصفوف';
	  },
	  formatPrint: function formatPrint() {
	    return 'طباعة';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'جارٍ التحميل، يرجى الانتظار...';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0635\u0641 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0627\u0644\u0638\u0627\u0647\u0631 ".concat(pageFrom, " \u0625\u0644\u0649 ").concat(pageTo, " \u0645\u0646 ").concat(totalRows, " \u0633\u062C\u0644 ").concat(totalNotFiltered, " \u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0635\u0641\u0648\u0641)");
	    }
	    return "\u0627\u0644\u0638\u0627\u0647\u0631 ".concat(pageFrom, " \u0625\u0644\u0649 ").concat(pageTo, " \u0645\u0646 ").concat(totalRows, " \u0633\u062C\u0644");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'الصفحة السابقة';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "\u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'الصفحة التالية';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "\u0639\u0631\u0636 ".concat(totalRows, " \u0623\u0639\u0645\u062F\u0629");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'مسح مربع البحث';
	  },
	  formatSearch: function formatSearch() {
	    return 'بحث';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'لا توجد نتائج مطابقة للبحث';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    /* eslint-disable no-useless-escape */
	    return 'إخفاء/إظهار ترقيم الصفحات';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'إظهار ترقيم الصفحات';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'إخفاء ترقيم الصفحات';
	  },
	  formatRefresh: function formatRefresh() {
	    return 'تحديث';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'إظهار كبطاقات';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'إلغاء البطاقات';
	  },
	  formatColumns: function formatColumns() {
	    return 'أعمدة';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'تبديل الكل';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'الشاشة كاملة';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'الكل';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'تحديث تلقائي';
	  },
	  formatExport: function formatExport() {
	    return 'تصدير البيانات';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'قفز';
	  },
	  formatAdvancedSearch: function formatAdvancedSearch() {
	    return 'بحث متقدم';
	  },
	  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
	    return 'إغلاق';
	  },
	  formatFilterControlSwitch: function formatFilterControlSwitch() {
	    return 'عرض/إخفاء عناصر التصفية';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'إخفاء عناصر التصفية';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'عرض عناصر التصفية';
	  }
	};
	Object.assign($$2.fn.bootstrapTable.defaults, $$2.fn.bootstrapTable.locales['ar-SA']);

}));
