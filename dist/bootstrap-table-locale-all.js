(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var $__default = /*#__PURE__*/_interopDefaultLegacy($);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var functionBindNative = !fails(function () {
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var call$1 = Function.prototype.call;

	var functionCall = functionBindNative ? call$1.bind(call$1) : function () {
	  return call$1.apply(call$1, arguments);
	};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	var f$4 = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f$4
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var FunctionPrototype$1 = Function.prototype;
	var bind = FunctionPrototype$1.bind;
	var call = FunctionPrototype$1.call;
	var uncurryThis = functionBindNative && bind.bind(call, call);

	var functionUncurryThis = functionBindNative ? function (fn) {
	  return fn && uncurryThis(fn);
	} : function (fn) {
	  return fn && function () {
	    return call.apply(fn, arguments);
	  };
	};

	var toString$1 = functionUncurryThis({}.toString);
	var stringSlice = functionUncurryThis(''.slice);

	var classofRaw = function (it) {
	  return stringSlice(toString$1(it), 8, -1);
	};

	var Object$4 = global_1.Object;
	var split = functionUncurryThis(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object$4('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split(it, '') : Object$4(it);
	} : Object$4;

	var TypeError$7 = global_1.TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError$7("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable = function (argument) {
	  return typeof argument == 'function';
	};

	var isObject = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable(it);
	};

	var aFunction = function (argument) {
	  return isCallable(argument) ? argument : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
	};

	var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global_1.process;
	var Deno = global_1.Deno;
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
	if (!version && engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es/no-symbol -- required for testing */



	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && engineV8Version && engineV8Version < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */


	var useSymbolAsUid = nativeSymbol
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var Object$3 = global_1.Object;

	var isSymbol = useSymbolAsUid ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn('Symbol');
	  return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, Object$3(it));
	};

	var String$2 = global_1.String;

	var tryToString = function (argument) {
	  try {
	    return String$2(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var TypeError$6 = global_1.TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable = function (argument) {
	  if (isCallable(argument)) return argument;
	  throw TypeError$6(tryToString(argument) + ' is not a function');
	};

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable(func);
	};

	var TypeError$5 = global_1.TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
	  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  throw TypeError$5("Can't convert object to primitive value");
	};

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty = Object.defineProperty;

	var setGlobal = function (key, value) {
	  try {
	    defineProperty(global_1, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store$1;

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.21.1',
	  mode: 'global',
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});
	});

	var Object$2 = global_1.Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object$2(requireObjectCoercible(argument));
	};

	var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject(it), key);
	};

	var id = 0;
	var postfix = Math.random();
	var toString = functionUncurryThis(1.0.toString);

	var uid = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
	};

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global_1.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (nativeSymbol && hasOwnProperty_1(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else if (useSymbolAsUid && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var TypeError$4 = global_1.TypeError;
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive = function (input, pref) {
	  if (!isObject(input) || isSymbol(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = functionCall(exoticToPrim, input, pref);
	    if (!isObject(result) || isSymbol(result)) return result;
	    throw TypeError$4("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var document = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject(document) && isObject(document.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document.createElement(it) : {};
	};

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	var f$3 = descriptors ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPropertyKey(P);
	  if (ie8DomDefine) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$3
	};

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = descriptors && fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var String$1 = global_1.String;
	var TypeError$3 = global_1.TypeError;

	// `Assert: Type(argument) is Object`
	var anObject = function (argument) {
	  if (isObject(argument)) return argument;
	  throw TypeError$3(String$1(argument) + ' is not an object');
	};

	var TypeError$2 = global_1.TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	var f$2 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
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
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$2('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var functionToString = functionUncurryThis(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable(sharedStore.inspectSource)) {
	  sharedStore.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap$1 = global_1.WeakMap;

	var nativeWeakMap = isCallable(WeakMap$1) && /native code/.test(inspectSource(WeakMap$1));

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys$1 = {};

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$1 = global_1.TypeError;
	var WeakMap = global_1.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap || sharedStore.state) {
	  var store = sharedStore.state || (sharedStore.state = new WeakMap());
	  var wmget = functionUncurryThis(store.get);
	  var wmhas = functionUncurryThis(store.has);
	  var wmset = functionUncurryThis(store.set);
	  set = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$1[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwnProperty_1(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwnProperty_1(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var FunctionPrototype = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwnProperty_1(FunctionPrototype, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var redefine = createCommonjsModule(function (module) {
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;

	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(String).split('String');

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var name = options && options.name !== undefined ? options.name : key;
	  var state;
	  if (isCallable(value)) {
	    if (String(name).slice(0, 7) === 'Symbol(') {
	      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
	    }
	    if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	      createNonEnumerableProperty(value, 'name', name);
	    }
	    state = enforceInternalState(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
	    }
	  }
	  if (O === global_1) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return isCallable(this) && getInternalState(this).source || inspectSource(this);
	});
	});

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- safe
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toIntegerOrInfinity(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike = function (obj) {
	  return toLength(obj.length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = lengthOfArrayLike(O);
	    var index = toAbsoluteIndex(fromIndex, length);
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
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var push = functionUncurryThis([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
	    ~indexOf(result, key) || push(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys);
	};

	var objectGetOwnPropertyNames = {
		f: f$1
	};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	var f = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f
	};

	var concat = functionUncurryThis([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable(detection) ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	  options.name        - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global_1;
	  } else if (STATIC) {
	    target = global_1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global_1[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray = Array.isArray || function isArray(argument) {
	  return classofRaw(argument) == 'Array';
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG$1] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var Object$1 = global_1.Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
	};

	var noop = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = functionUncurryThis(constructorRegExp.exec);
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
	var isConstructor = !construct || fails(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var SPECIES$1 = wellKnownSymbol('species');
	var Array$1 = global_1.Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor = function (originalArray) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor(C) && (C === Array$1 || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES$1];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array$1 : C;
	};

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var SPECIES = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
	var TypeError = global_1.TypeError;

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export({ target: 'Array', proto: true, forced: FORCED }, {
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
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	/**
	 * Bootstrap Table Afrikaans translation
	 * Author: Phillip Kruger <phillip.kruger@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['af-ZA'] = $__default["default"].fn.bootstrapTable.locales['af'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Besig om te laai, wag asseblief';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " rekords per bladsy");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Resultate ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " rye (filtered from ").concat(totalNotFiltered, " total rows)");
	    }

	    return "Resultate ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " rye");
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
	    return 'Soek';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Geen rekords gevind nie';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Wys/verberg bladsy nummering';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Herlaai';
	  },
	  formatToggle: function formatToggle() {
	    return 'Wissel';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Kolomme';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['af-ZA']);

	/**
	 * Bootstrap Table English translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['ar-SA'] = $__default["default"].fn.bootstrapTable.locales['ar'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'جاري التحميل, يرجى الإنتظار';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0633\u062C\u0644 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u0627\u0644\u0638\u0627\u0647\u0631 ".concat(pageFrom, " \u0625\u0644\u0649 ").concat(pageTo, " \u0645\u0646 ").concat(totalRows, " \u0633\u062C\u0644 ").concat(totalNotFiltered, " total rows)");
	    }

	    return "\u0627\u0644\u0638\u0627\u0647\u0631 ".concat(pageFrom, " \u0625\u0644\u0649 ").concat(pageTo, " \u0645\u0646 ").concat(totalRows, " \u0633\u062C\u0644");
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
	    return 'بحث';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'لا توجد نتائج مطابقة للبحث';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    /* eslint-disable no-useless-escape */
	    return 'إخفاء\إظهار ترقيم الصفحات';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatRefresh: function formatRefresh() {
	    return 'تحديث';
	  },
	  formatToggle: function formatToggle() {
	    return 'تغيير';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'أعمدة';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['ar-SA']);

	/**
	 * Bootstrap Table Bulgarian translation
	 * Author: Mikhail Kalatchev <kalatchev[at]gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['bg-BG'] = $__default["default"].fn.bootstrapTable.locales['bg'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Превключване';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['bg-BG']);

	/**
	 * Bootstrap Table Catalan translation
	 * Authors: Marc Pina<iwalkalone69@gmail.com>
	 *          Claudi Martinez<claudix.kernel@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['ca-ES'] = $__default["default"].fn.bootstrapTable.locales['ca'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Espereu, si us plau';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " resultats per p\xE0gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrant de ".concat(pageFrom, " fins ").concat(pageTo, " - total ").concat(totalRows, " resultats (filtered from ").concat(totalNotFiltered, " total rows)");
	    }

	    return "Mostrant de ".concat(pageFrom, " fins ").concat(pageTo, " - total ").concat(totalRows, " resultats");
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
	    return 'Cerca';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'No s\'han trobat resultats';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Amaga/Mostra paginació';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Refresca';
	  },
	  formatToggle: function formatToggle() {
	    return 'Alterna formatació';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Columnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tots';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['ca-ES']);

	/**
	 * Bootstrap Table Czech translation
	 * Author: Lukas Kral (monarcha@seznam.cz)
	 * Author: Jakub Svestka <svestka1999@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['cs-CZ'] = $__default["default"].fn.bootstrapTable.locales['cs'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Přepni';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['cs-CZ']);

	/**
	 * Bootstrap Table danish translation
	 * Author: Your Name Jan Borup Coyle, github@coyle.dk
	 */

	$__default["default"].fn.bootstrapTable.locales['da-DK'] = $__default["default"].fn.bootstrapTable.locales['da'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Skift';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['da-DK']);

	/**
	* Bootstrap Table German translation
	* Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
	*/

	$__default["default"].fn.bootstrapTable.locales['de-DE'] = $__default["default"].fn.bootstrapTable.locales['de'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Umschalten';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['de-DE']);

	/**
	 * Bootstrap Table Greek translation
	 * Author: giannisdallas
	 */

	$__default["default"].fn.bootstrapTable.locales['el-GR'] = $__default["default"].fn.bootstrapTable.locales['el'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Toggle';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['el-GR']);

	/**
	 * Bootstrap Table English translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['en-US'] = $__default["default"].fn.bootstrapTable.locales['en'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Toggle';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['en-US']);

	/**
	 * Bootstrap Table Spanish (Argentina) translation
	 * Author: Felix Vera (felix.vera@gmail.com)
	 * Edited by: DarkThinking (https://github.com/DarkThinking)
	 */

	$__default["default"].fn.bootstrapTable.locales['es-AR'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Cambiar';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['es-AR']);

	/**
	 * Traducción de librería Bootstrap Table a Español (Chile)
	 * @author Brian Álvarez Azócar
	 * email brianalvarezazocar@gmail.com
	 */

	$__default["default"].fn.bootstrapTable.locales['es-CL'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Cambiar';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['es-CL']);

	/**
	 * Bootstrap Table Spanish (Costa Rica) translation
	 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
	 */

	$__default["default"].fn.bootstrapTable.locales['es-CR'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Alternar';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['es-CR']);

	/**
	 * Bootstrap Table Spanish Spain translation
	 * Author: Marc Pina<iwalkalone69@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['es-ES'] = $__default["default"].fn.bootstrapTable.locales['es'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copiar filas';
	  },
	  formatPrint: function formatPrint() {
	    return 'Imprimir';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Por favor espere';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " resultados por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Mostrando desde ".concat(pageFrom, " hasta ").concat(pageTo, " - En total ").concat(totalRows, " resultados (filtrado de ").concat(totalNotFiltered, " filas totales)");
	    }

	    return "Mostrando desde ".concat(pageFrom, " hasta ").concat(pageTo, " - En total ").concat(totalRows, " resultados");
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
	    return 'No se encontraron resultados';
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
	  formatToggle: function formatToggle() {
	    return 'Ocultar/Mostrar';
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
	    return 'Ocultar/Mostrar controles';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Ocultar controles';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Mostrar controles';
	  }
	};
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['es-ES']);

	/**
	 * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
	 * Author: Felix Vera (felix.vera@gmail.com)
	 * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
	 * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
	 * Revisión: Ricardo González (rickygzz85@gmail.com) (20/Oct/2021)
	 */

	$__default["default"].fn.bootstrapTable.locales['es-MX'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Cambiar vista';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['es-MX']);

	/**
	 * Bootstrap Table Spanish (Nicaragua) translation
	 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
	 */

	$__default["default"].fn.bootstrapTable.locales['es-NI'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Alternar';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['es-NI']);

	/**
	 * Bootstrap Table Spanish (España) translation
	 * Author: Antonio Pérez <anpegar@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['es-SP'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Alternar';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['es-SP']);

	/**
	 * Bootstrap Table Estonian translation
	 * Author: kristjan@logist.it>
	 */

	$__default["default"].fn.bootstrapTable.locales['et-EE'] = $__default["default"].fn.bootstrapTable.locales['et'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Lülita';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['et-EE']);

	/**
	 * Bootstrap Table Basque (Basque Country) translation
	 * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['eu-EU'] = $__default["default"].fn.bootstrapTable.locales['eu'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Ezkutatu/Erakutsi';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['eu-EU']);

	/**
	 * Bootstrap Table Persian translation
	 * Author: MJ Vakili <mjv.1989@Gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['fa-IR'] = $__default["default"].fn.bootstrapTable.locales['fa'] = {
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
	  formatToggle: function formatToggle() {
	    return 'تغییر نمایش';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['fa-IR']);

	/**
	 * Bootstrap Table Finnish translations
	 * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['fi-FI'] = $__default["default"].fn.bootstrapTable.locales['fi'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Valitse';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['fi-FI']);

	/**
	 * Bootstrap Table French (Belgium) translation
	 * Author: Julien Bisconti (julien.bisconti@gmail.com)
	 *         Nevets82 <Nevets82@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['fr-BE'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9s \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }

	    return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
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
	    return "Affiche ".concat(totalRows, " lignes");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatSearch: function formatSearch() {
	    return 'Recherche';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Pas de lignes trouvés';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Cacher/Afficher pagination';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Afficher pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Cacher pagination';
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Rafraichir';
	  },
	  formatToggle: function formatToggle() {
	    return 'Basculer';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher vue carte';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher vue carte';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout basculer';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Rafraîchissement automatique';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter les données';
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
	    return 'Cacher/Afficher controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Cacher controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Afficher controls';
	  }
	};
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['fr-BE']);

	/**
	 * Bootstrap Table French (Suisse) translation
	 * Author: Nevets82 <Nevets82@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['fr-CH'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Chargement en cours';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " lignes par page");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9s \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }

	    return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
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
	    return "Affiche ".concat(totalRows, " lignes");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatSearch: function formatSearch() {
	    return 'Recherche';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Pas de lignes trouvés';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Cacher/Afficher pagination';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Afficher pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Cacher pagination';
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Rafraichir';
	  },
	  formatToggle: function formatToggle() {
	    return 'Basculer';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher vue carte';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher vue carte';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout basculer';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Rafraîchissement automatique';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter les données';
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
	    return 'Cacher/Afficher controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Cacher controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Afficher controls';
	  }
	};
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['fr-CH']);

	/**
	 * Bootstrap Table French (France) translation
	 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
	 *         Tidalf (https://github.com/TidalfFR)
	 *         Nevets82 <Nevets82@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['fr-FR'] = $__default["default"].fn.bootstrapTable.locales['fr'] = {
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
	      return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9s \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }

	    return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
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
	    return "Affiche ".concat(totalRows, " lignes");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatSearch: function formatSearch() {
	    return 'Recherche';
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
	  formatToggle: function formatToggle() {
	    return 'Basculer';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher la vue carte';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Masquer la vue carte';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout basculer';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Actualisation automatique';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter les données';
	  },
	  formatJumpTo: function formatJumpTo() {
	    return 'ALLER';
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
	  }
	};
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['fr-FR']);

	/**
	 * Bootstrap Table French (Luxembourg) translation
	 * Author: Nevets82 <Nevets82@gmail.com>
	 * Editor: David Morais Ferreira (https://github.com/DavidMoraisFerreira/)
	 */

	$__default["default"].fn.bootstrapTable.locales['fr-LU'] = {
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
	      return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9s \xE0 partir de ").concat(totalNotFiltered, " lignes)");
	    }

	    return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
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
	    return "Affiche ".concat(totalRows, " lignes");
	  },
	  formatClearSearch: function formatClearSearch() {
	    return 'Effacer la recherche';
	  },
	  formatSearch: function formatSearch() {
	    return 'Recherche';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Pas de lignes trouvés';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Cacher/Afficher pagination';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Afficher pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Cacher pagination';
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Rafraichir';
	  },
	  formatToggle: function formatToggle() {
	    return 'Basculer';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Afficher vue carte';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Cacher vue carte';
	  },
	  formatColumns: function formatColumns() {
	    return 'Colonnes';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Tout basculer';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Plein écran';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tout';
	  },
	  formatAutoRefresh: function formatAutoRefresh() {
	    return 'Rafraîchissement automatique';
	  },
	  formatExport: function formatExport() {
	    return 'Exporter les données';
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
	    return 'Cacher/Afficher controls';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Cacher controls';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Afficher controls';
	  }
	};
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['fr-LU']);

	/**
	 * Bootstrap Table Hebrew translation
	 * Author: legshooter
	 */

	$__default["default"].fn.bootstrapTable.locales['he-IL'] = $__default["default"].fn.bootstrapTable.locales['he'] = {
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
	  formatToggle: function formatToggle() {
	    return 'החלף תצוגה';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['he-IL']);

	/**
	 * Bootstrap Table Hindi translation
	 * Author: Saurabh Sharma <saurabhsharma2u@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['hi-IN'] = {
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
	  formatToggle: function formatToggle() {
	    return 'टॉगल';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['hi-IN']);

	/**
	* Bootstrap Table Croatian translation
	* Author: Petra Štrbenac (petra.strbenac@gmail.com)
	* Author: Petra Štrbenac (petra.strbenac@gmail.com)
	*/

	$__default["default"].fn.bootstrapTable.locales['hr-HR'] = $__default["default"].fn.bootstrapTable.locales['hr'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Promijeni prikaz';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['hr-HR']);

	/**
	 * Bootstrap Table Hungarian translation
	 * Author: Nagy Gergely <info@nagygergely.eu>
	 */

	$__default["default"].fn.bootstrapTable.locales['hu-HU'] = $__default["default"].fn.bootstrapTable.locales['hu'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Összecsuk/Kinyit';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['hu-HU']);

	/**
	 * Bootstrap Table Indonesian translation
	 * Author: Andre Gardiner<andre@sirdre.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['id-ID'] = $__default["default"].fn.bootstrapTable.locales['id'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Memuat, mohon tunggu';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " baris per halaman");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Menampilkan ".concat(pageFrom, " sampai ").concat(pageTo, " dari ").concat(totalRows, " baris (filtered from ").concat(totalNotFiltered, " total rows)");
	    }

	    return "Menampilkan ".concat(pageFrom, " sampai ").concat(pageTo, " dari ").concat(totalRows, " baris");
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
	    return 'Bersihkan filter';
	  },
	  formatSearch: function formatSearch() {
	    return 'Pencarian';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Tidak ditemukan data yang cocok';
	  },
	  formatPaginationSwitch: function formatPaginationSwitch() {
	    return 'Sembunyikan/Tampilkan halaman';
	  },
	  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
	    return 'Show pagination';
	  },
	  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
	    return 'Hide pagination';
	  },
	  formatRefresh: function formatRefresh() {
	    return 'Muat ulang';
	  },
	  formatToggle: function formatToggle() {
	    return 'Beralih';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'kolom';
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
	    return 'Ekspor data';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['id-ID']);

	/**
	 * Bootstrap Table Italian translation
	 * Author: Davide Renzi<davide.renzi@gmail.com>
	 * Author: Davide Borsatto <davide.borsatto@gmail.com>
	 * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['it-IT'] = $__default["default"].fn.bootstrapTable.locales['it'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Attiva/Disattiva';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['it-IT']);

	/**
	 * Bootstrap Table Japanese translation
	 * Author: Azamshul Azizy <azamshul@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['ja-JP'] = $__default["default"].fn.bootstrapTable.locales['ja'] = {
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
	  formatToggle: function formatToggle() {
	    return 'トグル';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['ja-JP']);

	/**
	 * Bootstrap Table Georgian translation
	 * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['ka-GE'] = $__default["default"].fn.bootstrapTable.locales['ka'] = {
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
	  formatToggle: function formatToggle() {
	    return 'ჩართვა/გამორთვა';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['ka-GE']);

	/**
	 * Bootstrap Table Korean translation
	 * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
	 * Revision: Abel Yeom (abel.yeom@gmail.com)
	 */

	$__default["default"].fn.bootstrapTable.locales['ko-KR'] = $__default["default"].fn.bootstrapTable.locales['ko'] = {
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
	  formatToggle: function formatToggle() {
	    return '전환';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['ko-KR']);

	/**
	 * Bootstrap Table Luxembourgish translation
	 * Author: David Morais Ferreira (https://github.com/DavidMoraisFerreira)
	 */

	$__default["default"].fn.bootstrapTable.locales['lb-LU'] = $__default["default"].fn.bootstrapTable.locales['lb'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Ëmschalten';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['lb-LU']);

	/**
	 * Bootstrap Table Malay translation
	 * Author: Azamshul Azizy <azamshul@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['ms-MY'] = $__default["default"].fn.bootstrapTable.locales['ms'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Tukar';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['ms-MY']);

	/**
	 * Bootstrap Table norwegian translation
	 * Author: Jim Nordbø, jim@nordb.no
	 */

	$__default["default"].fn.bootstrapTable.locales['nb-NO'] = $__default["default"].fn.bootstrapTable.locales['nb'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Endre';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['nb-NO']);

	/**
	 * Bootstrap Table Dutch (België) translation
	 * Author: Nevets82 <Nevets82@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['nl-BE'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Omschakelen';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['nl-BE']);

	/**
	 * Bootstrap Table Dutch (Nederland) translation
	 * Author: Your Name <info@a2hankes.nl>
	 *         Nevets82 <Nevets82@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['nl-NL'] = $__default["default"].fn.bootstrapTable.locales['nl'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Omschakelen';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['nl-NL']);

	/**
	 * Bootstrap Table Polish translation
	 * Author: zergu <michal.zagdan @ gmail com>
	 * Update: kerogos <kerog @ wp pl>
	 */

	$__default["default"].fn.bootstrapTable.locales['pl-PL'] = $__default["default"].fn.bootstrapTable.locales['pl'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Przełącz';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['pl-PL']);

	/**
	 * Bootstrap Table Brazilian Portuguese Translation
	 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
	 * Update: João Mello<jmello@hotmail.com.br>
	 * Update: Leandro Felizari<lfelizari@gmail.com>
	 * Update: Fernando Marcos Souza Silva<fernandomarcosss@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['pt-BR'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Carregando, aguarde';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " registros por p\xE1gina");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Exibindo ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linhas (filtradas de um total de ").concat(totalNotFiltered, " linhas)");
	    }

	    return "Exibindo ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linhas");
	  },
	  formatSRPaginationPreText: function formatSRPaginationPreText() {
	    return 'página anterior';
	  },
	  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
	    return "Para a p\xE1gina ".concat(page);
	  },
	  formatSRPaginationNextText: function formatSRPaginationNextText() {
	    return 'próxima página';
	  },
	  formatDetailPagination: function formatDetailPagination(totalRows) {
	    return "Mostrando ".concat(totalRows, " linhas");
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
	  formatToggle: function formatToggle() {
	    return 'Alternar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
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
	    return 'IR';
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
	  }
	};
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['pt-BR']);

	/**
	 * Bootstrap Table Portuguese Portugal Translation
	 * Author: Burnspirit<burnspirit@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['pt-PT'] = $__default["default"].fn.bootstrapTable.locales['pt'] = {
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
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "A mostrar ".concat(pageFrom, " at&eacute; ").concat(pageTo, " de ").concat(totalRows, " linhas (filtered from ").concat(totalNotFiltered, " total rows)");
	    }

	    return "A mostrar ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linhas");
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
	    return "Mostrando ".concat(totalRows, " linhas");
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
	  formatToggle: function formatToggle() {
	    return 'Alternar';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
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
	    return 'Esconder/Exibir controlos';
	  },
	  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
	    return 'Esconder controlos';
	  },
	  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
	    return 'Exibir controlos';
	  }
	};
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['pt-PT']);

	/**
	 * Bootstrap Table Romanian translation
	 * Author: cristake <cristianiosif@me.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['ro-RO'] = $__default["default"].fn.bootstrapTable.locales['ro'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Comuta';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['ro-RO']);

	/**
	 * Bootstrap Table Russian translation
	 * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
	 */

	$__default["default"].fn.bootstrapTable.locales['ru-RU'] = $__default["default"].fn.bootstrapTable.locales['ru'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Переключить';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['ru-RU']);

	/**
	 * Bootstrap Table Slovak translation
	 * Author: Jozef Dúc<jozef.d13@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['sk-SK'] = $__default["default"].fn.bootstrapTable.locales['sk'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Prepni';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['sk-SK']);

	/**
	* Bootstrap Table Serbian Cyrilic RS translation
	* Author: Vladimir Kanazir (vladimir@kanazir.com)
	*/

	$__default["default"].fn.bootstrapTable.locales['sr-Cyrl-RS'] = $__default["default"].fn.bootstrapTable.locales['sr'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Промени приказ';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['sr-Cyrl-RS']);

	/**
	* Bootstrap Table Serbian Latin RS translation
	* Author: Vladimir Kanazir (vladimir@kanazir.com)
	*/

	$__default["default"].fn.bootstrapTable.locales['sr-Latn-RS'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Promeni prikaz';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['sr-Latn-RS']);

	/**
	 * Bootstrap Table Swedish translation
	 * Author: C Bratt <bratt@inix.se>
	 */

	$__default["default"].fn.bootstrapTable.locales['sv-SE'] = $__default["default"].fn.bootstrapTable.locales['sv'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Skifta';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['sv-SE']);

	/**
	 * Bootstrap Table Thai translation
	 * Author: Monchai S.<monchais@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['th-TH'] = $__default["default"].fn.bootstrapTable.locales['th'] = {
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
	  formatToggle: function formatToggle() {
	    return 'สลับมุมมอง';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['th-TH']);

	/**
	 * Bootstrap Table Turkish translation
	 * Author: Emin Şen
	 * Author: Sercan Cakir <srcnckr@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['tr-TR'] = $__default["default"].fn.bootstrapTable.locales['tr'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Yükleniyor, lütfen bekleyin';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "Sayfa ba\u015F\u0131na ".concat(pageNumber, " kay\u0131t.");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "".concat(totalRows, " kay\u0131ttan ").concat(pageFrom, "-").concat(pageTo, " aras\u0131 g\xF6steriliyor (filtered from ").concat(totalNotFiltered, " total rows).");
	    }

	    return "".concat(totalRows, " kay\u0131ttan ").concat(pageFrom, "-").concat(pageTo, " aras\u0131 g\xF6steriliyor.");
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
	    return 'Ara';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Eşleşen kayıt bulunamadı.';
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
	    return 'Yenile';
	  },
	  formatToggle: function formatToggle() {
	    return 'Değiştir';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Sütunlar';
	  },
	  formatColumnsToggleAll: function formatColumnsToggleAll() {
	    return 'Toggle all';
	  },
	  formatFullscreen: function formatFullscreen() {
	    return 'Fullscreen';
	  },
	  formatAllRows: function formatAllRows() {
	    return 'Tüm Satırlar';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['tr-TR']);

	/**
	 * Bootstrap Table Ukrainian translation
	 * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['uk-UA'] = $__default["default"].fn.bootstrapTable.locales['uk'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Завантаження, будь ласка, зачекайте';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " \u0437\u0430\u043F\u0438\u0441\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, ". \u0412\u0441\u044C\u043E\u0433\u043E: ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
	    }

	    return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, ". \u0412\u0441\u044C\u043E\u0433\u043E: ").concat(totalRows);
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
	    return 'Очистити фільтри';
	  },
	  formatSearch: function formatSearch() {
	    return 'Пошук';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Не знайдено жодного запису';
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
	    return 'Оновити';
	  },
	  formatToggle: function formatToggle() {
	    return 'Змінити';
	  },
	  formatToggleOn: function formatToggleOn() {
	    return 'Show card view';
	  },
	  formatToggleOff: function formatToggleOff() {
	    return 'Hide card view';
	  },
	  formatColumns: function formatColumns() {
	    return 'Стовпці';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['uk-UA']);

	/**
	 * Bootstrap Table Urdu translation
	 * Author: Malik <me@malikrizwan.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['ur-PK'] = $__default["default"].fn.bootstrapTable.locales['ur'] = {
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
	  formatToggle: function formatToggle() {
	    return 'تبدیل کریں';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['ur-PK']);

	/**
	 * Bootstrap Table Uzbek translation
	 * Author: Nabijon Masharipov <mnabijonz@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['uz-Latn-UZ'] = $__default["default"].fn.bootstrapTable.locales['uz'] = {
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
	  formatToggle: function formatToggle() {
	    return 'Ko\'rinish';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['uz-Latn-UZ']);

	/**
	 * Bootstrap Table Vietnamese translation
	 * Author: Duc N. PHAM <pngduc@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['vi-VN'] = $__default["default"].fn.bootstrapTable.locales['vi'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
	  },
	  formatLoadingMessage: function formatLoadingMessage() {
	    return 'Đang tải';
	  },
	  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
	    return "".concat(pageNumber, " b\u1EA3n ghi m\u1ED7i trang");
	  },
	  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
	    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
	      return "Hi\u1EC3n th\u1ECB t\u1EEB trang ".concat(pageFrom, " \u0111\u1EBFn ").concat(pageTo, " c\u1EE7a ").concat(totalRows, " b\u1EA3ng ghi (filtered from ").concat(totalNotFiltered, " total rows)");
	    }

	    return "Hi\u1EC3n th\u1ECB t\u1EEB trang ".concat(pageFrom, " \u0111\u1EBFn ").concat(pageTo, " c\u1EE7a ").concat(totalRows, " b\u1EA3ng ghi");
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
	    return 'Tìm kiếm';
	  },
	  formatNoMatches: function formatNoMatches() {
	    return 'Không có dữ liệu';
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
	  formatToggle: function formatToggle() {
	    return 'Toggle';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['vi-VN']);

	/**
	 * Bootstrap Table Chinese translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['zh-CN'] = $__default["default"].fn.bootstrapTable.locales['zh'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
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
	  formatToggle: function formatToggle() {
	    return '切换';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['zh-CN']);

	/**
	 * Bootstrap Table Chinese translation
	 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
	 */

	$__default["default"].fn.bootstrapTable.locales['zh-TW'] = {
	  formatCopyRows: function formatCopyRows() {
	    return 'Copy Rows';
	  },
	  formatPrint: function formatPrint() {
	    return 'Print';
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
	  formatToggle: function formatToggle() {
	    return '切換';
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
	$__default["default"].extend($__default["default"].fn.bootstrapTable.defaults, $__default["default"].fn.bootstrapTable.locales['zh-TW']);

}));
