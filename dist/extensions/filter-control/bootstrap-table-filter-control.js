(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

	$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var O = 'object';
	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == O && globalThis) ||
	  check(typeof window == O && window) ||
	  check(typeof self == O && self) ||
	  check(typeof commonjsGlobal == O && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func
	  Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var hide = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var setGlobal = function (key, value) {
	  try {
	    hide(global_1, key, value);
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = global_1[SHARED] || setGlobal(SHARED, {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.1.3',
	  mode:  'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var functionToString = shared('native-function-to-string', Function.toString);

	var WeakMap = global_1.WeakMap;

	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys = {};

	var WeakMap$1 = global_1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap) {
	  var store = new WeakMap$1();
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;
	  set = function (it, metadata) {
	    wmset.call(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    hide(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var redefine = createCommonjsModule(function (module) {
	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(functionToString).split('toString');

	shared('inspectSource', function (it) {
	  return functionToString.call(it);
	});

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
	    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
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
	  else hide(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
	});
	});

	var path = global_1;

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
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

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






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
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      hide(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};

	var aFunction$1 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	// optional / simple context binding
	var bindContext = function (fn, that, length) {
	  aFunction$1(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var Symbol$1 = global_1.Symbol;
	var store$1 = shared('wks');

	var wellKnownSymbol = function (name) {
	  return store$1[name] || (store$1[name] = nativeSymbol && Symbol$1[name]
	    || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
	};

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = bindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
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
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6)
	};

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  return !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $filter = arrayIteration.filter;


	// `Array.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var html = getBuiltIn('document', 'documentElement');

	var IE_PROTO = sharedKey('IE_PROTO');

	var PROTOTYPE = 'prototype';
	var Empty = function () { /* empty */ };

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var length = enumBugKeys.length;
	  var lt = '<';
	  var script = 'script';
	  var gt = '>';
	  var js = 'java' + script + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = String(js);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
	  return createDict();
	};

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	hiddenKeys[IE_PROTO] = true;

	var UNSCOPABLES = wellKnownSymbol('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  hide(ArrayPrototype, UNSCOPABLES, objectCreate(null));
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};

	var $find = arrayIteration.find;


	var FIND = 'find';
	var SKIPS_HOLES = true;

	// Shouldn't skip holes
	if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

	// `Array.prototype.find` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.find
	_export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables(FIND);

	var $includes = arrayIncludes.includes;


	// `Array.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.includes
	_export({ target: 'Array', proto: true }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('includes');

	var sloppyArrayMethod = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !method || !fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $indexOf = arrayIncludes.indexOf;


	var nativeIndexOf = [].indexOf;

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var nativeJoin = [].join;

	var ES3_STRINGS = indexedObject != Object;
	var SLOPPY_METHOD$1 = sloppyArrayMethod('join', ',');

	// `Array.prototype.join` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.join
	_export({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD$1 }, {
	  join: function join(separator) {
	    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
	  }
	});

	var nativeSort = [].sort;
	var test = [1, 2, 3];

	// IE8-
	var FAILS_ON_UNDEFINED = fails(function () {
	  test.sort(undefined);
	});
	// V8 bug
	var FAILS_ON_NULL = fails(function () {
	  test.sort(null);
	});
	// Old WebKit
	var SLOPPY_METHOD$2 = sloppyArrayMethod('sort');

	var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD$2;

	// `Array.prototype.sort` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.sort
	_export({ target: 'Array', proto: true, forced: FORCED }, {
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? nativeSort.call(toObject(this))
	      : nativeSort.call(toObject(this), aFunction$1(comparefn));
	  }
	});

	var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return objectKeys(toObject(it));
	  }
	});

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	var test$1 = {};

	test$1[TO_STRING_TAG$1] = 'z';

	// `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	var objectToString = String(test$1) !== '[object z]' ? function toString() {
	  return '[object ' + classof(this) + ']';
	} : test$1.toString;

	var ObjectPrototype = Object.prototype;

	// `Object.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	if (objectToString !== ObjectPrototype.toString) {
	  redefine(ObjectPrototype, 'toString', objectToString, { unsafe: true });
	}

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var TO_STRING = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING];

	var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = nativeToString.name != TO_STRING;

	// `RegExp.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  redefine(RegExp.prototype, TO_STRING, function toString() {
	    var R = anObject(this);
	    var p = String(R.source);
	    var rf = R.flags;
	    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
	    return '/' + p + '/' + f;
	  }, { unsafe: true });
	}

	var MATCH = wellKnownSymbol('match');

	// `IsRegExp` abstract operation
	// https://tc39.github.io/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
	};

	var notARegexp = function (it) {
	  if (isRegexp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  } return it;
	};

	var MATCH$1 = wellKnownSymbol('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (e) {
	    try {
	      regexp[MATCH$1] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (f) { /* empty */ }
	  } return false;
	};

	// `String.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.includes
	_export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~String(requireObjectCoercible(this))
	      .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(re, str);

	    if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var regexpExec = patchedExec;

	var SPECIES$2 = wellKnownSymbol('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;
	    re.exec = function () { execCalled = true; return null; };

	    if (KEY === 'split') {
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$2] = function () { return re; };
	    }

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === regexpExec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];

	    redefine(String.prototype, KEY, stringMethod);
	    redefine(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return regexMethod.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return regexMethod.call(string, this); }
	    );
	    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
	  }
	};

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$2 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$2(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$2(true)
	};

	var charAt = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	var advanceStringIndex = function (S, index, unicode) {
	  return index + (unicode ? charAt(S, index).length : 1);
	};

	// `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classofRaw(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec.call(R, S);
	};

	// @@match logic
	fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = requireObjectCoercible(this);
	      var matcher = regexp == undefined ? undefined : regexp[MATCH];
	      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative(nativeMatch, regexp, this);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);

	      if (!rx.global) return regexpExecAbstract(rx, S);

	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regexpExecAbstract(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});

	var max$1 = Math.max;
	var min$2 = Math.min;
	var floor$1 = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible(this);
	      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return replacer !== undefined
	        ? replacer.call(searchValue, O, replaceValue)
	        : nativeReplace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);

	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regexpExecAbstract(rx, S);
	        if (result === null) break;

	        results.push(result);
	        if (!global) break;

	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = String(result[0]);
	        var position = max$1(min$2(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];

	  // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return nativeReplace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return match;
	          if (n > m) {
	            var f = floor$1(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});

	var SPECIES$3 = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.github.io/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aFunction$1(S);
	};

	var arrayPush = [].push;
	var min$3 = Math.min;
	var MAX_UINT32 = 0xFFFFFFFF;

	// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
	var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

	// @@split logic
	fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'.split(/(b)*/)[1] == 'c' ||
	    'test'.split(/(?:)/, -1).length != 4 ||
	    'ab'.split(/(?:ab)*/).length != 2 ||
	    '.'.split(/(.?)(.?)/).length != 4 ||
	    '.'.split(/()()/).length > 1 ||
	    ''.split(/.?/).length
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(requireObjectCoercible(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string];
	      // If `separator` is not a regex, use native split
	      if (!isRegexp(separator)) {
	        return nativeSplit.call(string, separator, lim);
	      }
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }
	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string.length) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output.length > lim ? output.slice(0, lim) : output;
	    };
	  // Chakra, V8
	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);
	      var C = speciesConstructor(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (SUPPORTS_Y ? 'y' : 'g');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = SUPPORTS_Y ? q : 0;
	        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
	        var e;
	        if (
	          z === null ||
	          (e = min$3(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	}, !SUPPORTS_Y);

	// a string of all valid unicode whitespaces
	// eslint-disable-next-line max-len
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$3 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$3(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
	  end: createMethod$3(2),
	  // `String.prototype.trim` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
	  trim: createMethod$3(3)
	};

	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var forcedStringTrimMethod = function (METHOD_NAME) {
	  return fails(function () {
	    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
	  });
	};

	var $trim = stringTrim.trim;


	// `String.prototype.trim` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.trim
	_export({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
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

	var $forEach = arrayIteration.forEach;


	// `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
	    hide(CollectionPrototype, 'forEach', arrayForEach);
	  } catch (error) {
	    CollectionPrototype.forEach = arrayForEach;
	  }
	}

	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get(target, property, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);

	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get(target, property, receiver || target);
	}

	/**
	 * @author: Dennis Hernández
	 * @webSite: http://djhvscf.github.io/Blog
	 * @version: v2.2.0
	 */

	var Utils = $.fn.bootstrapTable.utils;
	var UtilsFilterControl = {
	  getOptionsFromSelectControl: function getOptionsFromSelectControl(selectControl) {
	    return selectControl.get(selectControl.length - 1).options;
	  },
	  hideUnusedSelectOptions: function hideUnusedSelectOptions(selectControl, uniqueValues) {
	    var options = UtilsFilterControl.getOptionsFromSelectControl(selectControl);

	    for (var i = 0; i < options.length; i++) {
	      if (options[i].value !== '') {
	        if (!uniqueValues.hasOwnProperty(options[i].value)) {
	          selectControl.find(Utils.sprintf('option[value=\'%s\']', options[i].value)).hide();
	        } else {
	          selectControl.find(Utils.sprintf('option[value=\'%s\']', options[i].value)).show();
	        }
	      }
	    }
	  },
	  addOptionToSelectControl: function addOptionToSelectControl(selectControl, _value, text, selected) {
	    var value = $.trim(_value);
	    var $selectControl = $(selectControl.get(selectControl.length - 1));

	    if (!UtilsFilterControl.existOptionInSelectControl(selectControl, value)) {
	      var option = $($('<option></option>').attr('value', value).text($('<div />').html(text).text()));

	      if (value === selected) {
	        option.attr('selected', true);
	      }

	      $selectControl.append(option);
	    }
	  },
	  sortSelectControl: function sortSelectControl(selectControl, orderBy) {
	    var $selectControl = $(selectControl.get(selectControl.length - 1));
	    var $opts = $selectControl.find('option:gt(0)');
	    $opts.sort(function (a, b) {
	      return Utils.sort(a.textContent, b.textContent, orderBy === 'desc' ? -1 : 1);
	    });
	    $selectControl.find('option:gt(0)').remove();
	    $selectControl.append($opts);
	  },
	  existOptionInSelectControl: function existOptionInSelectControl(selectControl, value) {
	    var options = UtilsFilterControl.getOptionsFromSelectControl(selectControl);

	    for (var i = 0; i < options.length; i++) {
	      if (options[i].value === value.toString()) {
	        // The value is not valid to add
	        return true;
	      }
	    } // If we get here, the value is valid to add


	    return false;
	  },
	  fixHeaderCSS: function fixHeaderCSS(_ref) {
	    var $tableHeader = _ref.$tableHeader;
	    $tableHeader.css('height', '77px');
	  },
	  getCurrentHeader: function getCurrentHeader(_ref2) {
	    var $header = _ref2.$header,
	        options = _ref2.options,
	        $tableHeader = _ref2.$tableHeader;
	    var header = $header;

	    if (options.height) {
	      header = $tableHeader;
	    }

	    return header;
	  },
	  getCurrentSearchControls: function getCurrentSearchControls(_ref3) {
	    var options = _ref3.options;
	    var searchControls = 'select, input';

	    if (options.height) {
	      searchControls = 'table select, table input';
	    }

	    return searchControls;
	  },
	  getCursorPosition: function getCursorPosition(el) {
	    if (Utils.isIEBrowser()) {
	      if ($(el).is('input[type=text]')) {
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

	    return -1;
	  },
	  setCursorPosition: function setCursorPosition(el) {
	    $(el).val(el.value);
	  },
	  copyValues: function copyValues(that) {
	    var header = UtilsFilterControl.getCurrentHeader(that);
	    var searchControls = UtilsFilterControl.getCurrentSearchControls(that);
	    that.options.valuesFilterControl = [];
	    header.find(searchControls).each(function () {
	      that.options.valuesFilterControl.push({
	        field: $(this).closest('[data-field]').data('field'),
	        value: $(this).val(),
	        position: UtilsFilterControl.getCursorPosition($(this).get(0)),
	        hasFocus: $(this).is(':focus')
	      });
	    });
	  },
	  setValues: function setValues(that) {
	    var field = null;
	    var result = [];
	    var header = UtilsFilterControl.getCurrentHeader(that);
	    var searchControls = UtilsFilterControl.getCurrentSearchControls(that);

	    if (that.options.valuesFilterControl.length > 0) {
	      //  Callback to apply after settings fields values
	      var fieldToFocusCallback = null;
	      header.find(searchControls).each(function (index, ele) {
	        field = $(this).closest('[data-field]').data('field');
	        result = that.options.valuesFilterControl.filter(function (valueObj) {
	          return valueObj.field === field;
	        });

	        if (result.length > 0) {
	          $(this).val(result[0].value);

	          if (result[0].hasFocus) {
	            // set callback if the field had the focus.
	            fieldToFocusCallback = function (fieldToFocus, carretPosition) {
	              // Closure here to capture the field and cursor position
	              var closedCallback = function closedCallback() {
	                fieldToFocus.focus();
	                UtilsFilterControl.setCursorPosition(fieldToFocus, carretPosition);
	              };

	              return closedCallback;
	            }($(this).get(0), result[0].position);
	          }
	        }
	      }); // Callback call.

	      if (fieldToFocusCallback !== null) {
	        fieldToFocusCallback();
	      }
	    }
	  },
	  collectBootstrapCookies: function collectBootstrapCookies() {
	    var cookies = [];
	    var foundCookies = document.cookie.match(/(?:bs.table.)(\w*)/g);

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
	      return cookies;
	    }
	  },
	  escapeID: function escapeID(id) {
	    return String(id).replace(/(:|\.|\[|\]|,)/g, '\\$1');
	  },
	  isColumnSearchableViaSelect: function isColumnSearchableViaSelect(_ref4) {
	    var filterControl = _ref4.filterControl,
	        searchable = _ref4.searchable;
	    return filterControl && filterControl.toLowerCase() === 'select' && searchable;
	  },
	  isFilterDataNotGiven: function isFilterDataNotGiven(_ref5) {
	    var filterData = _ref5.filterData;
	    return filterData === undefined || filterData.toLowerCase() === 'column';
	  },
	  hasSelectControlElement: function hasSelectControlElement(selectControl) {
	    return selectControl && selectControl.length > 0;
	  },
	  initFilterSelectControls: function initFilterSelectControls(that) {
	    var data = that.data;
	    var itemsPerPage = that.pageTo < that.options.data.length ? that.options.data.length : that.pageTo;
	    var z = that.options.pagination ? that.options.sidePagination === 'server' ? that.pageTo : that.options.totalRows : that.pageTo;
	    $.each(that.header.fields, function (j, field) {
	      var column = that.columns[that.fieldsColumnsIndex[field]];
	      var selectControl = that.$tableBody.find(".bootstrap-table-filter-control-".concat(UtilsFilterControl.escapeID(column.field)));

	      if (UtilsFilterControl.isColumnSearchableViaSelect(column) && UtilsFilterControl.isFilterDataNotGiven(column) && UtilsFilterControl.hasSelectControlElement(selectControl)) {
	        if (selectControl.get(selectControl.length - 1).options.length === 0) {
	          // Added the default option
	          UtilsFilterControl.addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault);
	        }

	        var uniqueValues = {};

	        for (var i = 0; i < z; i++) {
	          // Added a new value
	          var fieldValue = data[i][field];
	          var formattedValue = Utils.calculateObjectValue(that.header, that.header.formatters[j], [fieldValue, data[i], i], fieldValue);

	          if (column.filterDataCollector) {
	            formattedValue = Utils.calculateObjectValue(that.header, column.filterDataCollector, [fieldValue, data[i], formattedValue], formattedValue);
	          }

	          if (_typeof(formattedValue) === 'object' && formattedValue !== null) {
	            formattedValue.forEach(function (value) {
	              UtilsFilterControl.addOptionToSelectControl(selectControl, value, value, column.filterDefault);
	            });
	            continue;
	          }

	          UtilsFilterControl.addOptionToSelectControl(selectControl, formattedValue, formattedValue, column.filterDefault);
	        }

	        UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy);

	        if (that.options.hideUnusedSelectOptions) {
	          UtilsFilterControl.hideUnusedSelectOptions(selectControl, uniqueValues);
	        }
	      }
	    });
	    that.trigger('created-controls');
	  },
	  getFilterDataMethod: function getFilterDataMethod(objFilterDataMethod, searchTerm) {
	    var keys = Object.keys(objFilterDataMethod);

	    for (var i = 0; i < keys.length; i++) {
	      if (keys[i] === searchTerm) {
	        return objFilterDataMethod[searchTerm];
	      }
	    }

	    return null;
	  },
	  createControls: function createControls(that, header) {
	    var addedFilterControl = false;
	    var isVisible;
	    var html;
	    $.each(that.columns, function (i, column) {
	      isVisible = 'hidden';
	      html = [];

	      if (!column.visible) {
	        return;
	      }

	      if (!column.filterControl) {
	        html.push('<div class="no-filter-control"></div>');
	      } else {
	        html.push('<div class="filter-control">');
	        var nameControl = column.filterControl.toLowerCase();

	        if (column.searchable && that.options.filterTemplate[nameControl]) {
	          addedFilterControl = true;
	          isVisible = 'visible';
	          html.push(that.options.filterTemplate[nameControl](that, column.field, isVisible, column.filterControlPlaceholder ? column.filterControlPlaceholder : '', column.filterDefault));

	          if ('' !== column.filterDefault && 'undefined' !== typeof column.filterDefault) {
	            if ($.isEmptyObject(that.filterColumnsPartial)) {
	              that.filterColumnsPartial = {};
	            }

	            that.filterColumnsPartial[column.field] = column.filterDefault;
	          }
	        }
	      }

	      $.each(header.children().children(), function (i, tr) {
	        var $tr = $(tr);

	        if ($tr.data('field') === column.field) {
	          $tr.find('.fht-cell').append(html.join(''));
	          return false;
	        }
	      });

	      if (column.filterData !== undefined && column.filterData.toLowerCase() !== 'column') {
	        var filterDataType = UtilsFilterControl.getFilterDataMethod(
	        /* eslint-disable no-use-before-define */
	        filterDataMethods, column.filterData.substring(0, column.filterData.indexOf(':')));
	        var filterDataSource;
	        var selectControl;

	        if (filterDataType !== null) {
	          filterDataSource = column.filterData.substring(column.filterData.indexOf(':') + 1, column.filterData.length);
	          selectControl = that.$tableBody.find(".bootstrap-table-filter-control-".concat(UtilsFilterControl.escapeID(column.field)));
	          UtilsFilterControl.addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault);
	          filterDataType(filterDataSource, selectControl, column.filterDefault);
	        } else {
	          throw new SyntaxError('Error. You should use any of these allowed filter data methods: var, json, url.' + ' Use like this: var: {key: "value"}');
	        }

	        var variableValues;
	        var key; // eslint-disable-next-line default-case

	        switch (filterDataType) {
	          case 'url':
	            $.ajax({
	              url: filterDataSource,
	              dataType: 'json',
	              success: function success(data) {
	                // eslint-disable-next-line guard-for-in
	                for (var _key in data) {
	                  UtilsFilterControl.addOptionToSelectControl(selectControl, _key, data[_key], column.filterDefault);
	                }

	                UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy);
	              }
	            });
	            break;

	          case 'var':
	            variableValues = window[filterDataSource]; // eslint-disable-next-line guard-for-in

	            for (key in variableValues) {
	              UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], column.filterDefault);
	            }

	            UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy);
	            break;

	          case 'jso':
	            variableValues = JSON.parse(filterDataSource); // eslint-disable-next-line guard-for-in

	            for (key in variableValues) {
	              UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], column.filterDefault);
	            }

	            UtilsFilterControl.sortSelectControl(selectControl, column.filterOrderBy);
	            break;
	        }
	      }
	    });

	    if (addedFilterControl) {
	      header.off('keyup', 'input').on('keyup', 'input', function (event, obj) {
	        // Simulate enter key action from clear button
	        event.keyCode = obj ? obj.keyCode : event.keyCode;

	        if (that.options.searchOnEnterKey && event.keyCode !== 13) {
	          return;
	        }

	        if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
	          return;
	        }

	        var $currentTarget = $(event.currentTarget);

	        if ($currentTarget.is(':checkbox') || $currentTarget.is(':radio')) {
	          return;
	        }

	        clearTimeout(event.currentTarget.timeoutId || 0);
	        event.currentTarget.timeoutId = setTimeout(function () {
	          that.onColumnSearch(event);
	        }, that.options.searchTimeOut);
	      });
	      header.off('change', 'select').on('change', 'select', function (event) {
	        if (that.options.searchOnEnterKey && event.keyCode !== 13) {
	          return;
	        }

	        if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
	          return;
	        }

	        clearTimeout(event.currentTarget.timeoutId || 0);
	        event.currentTarget.timeoutId = setTimeout(function () {
	          that.onColumnSearch(event);
	        }, that.options.searchTimeOut);
	      });
	      header.off('mouseup', 'input').on('mouseup', 'input', function (event) {
	        var $input = $(this);
	        var oldValue = $input.val();

	        if (oldValue === '') {
	          return;
	        }

	        setTimeout(function () {
	          var newValue = $input.val();

	          if (newValue === '') {
	            clearTimeout(event.currentTarget.timeoutId || 0);
	            event.currentTarget.timeoutId = setTimeout(function () {
	              that.onColumnSearch(event);
	            }, that.options.searchTimeOut);
	          }
	        }, 1);
	      });

	      if (header.find('.date-filter-control').length > 0) {
	        $.each(that.columns, function (i, _ref6) {
	          var filterControl = _ref6.filterControl,
	              field = _ref6.field,
	              filterDatepickerOptions = _ref6.filterDatepickerOptions;

	          if (filterControl !== undefined && filterControl.toLowerCase() === 'datepicker') {
	            header.find(".date-filter-control.bootstrap-table-filter-control-".concat(field)).datepicker(filterDatepickerOptions).on('changeDate', function (event) {
	              clearTimeout(event.currentTarget.timeoutId || 0);
	              event.currentTarget.timeoutId = setTimeout(function () {
	                that.onColumnSearch(event);
	              }, that.options.searchTimeOut);
	            });
	          }
	        });
	      }

	      if (that.options.sidePagination !== 'server') {
	        header.find('[class*=\'bootstrap-table-filter-control\']').each(function (k, input) {
	          $(input).trigger('change');
	        });
	      }
	    } else {
	      header.find('.filterControl').hide();
	    }
	  },
	  getDirectionOfSelectOptions: function getDirectionOfSelectOptions(_alignment) {
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
	};
	var filterDataMethods = {
	  var: function _var(filterDataSource, selectControl, filterOrderBy, selected) {
	    var variableValues = window[filterDataSource]; // eslint-disable-next-line guard-for-in

	    for (var key in variableValues) {
	      UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], selected);
	    }

	    UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy);
	  },
	  url: function url(filterDataSource, selectControl, filterOrderBy, selected) {
	    $.ajax({
	      url: filterDataSource,
	      dataType: 'json',
	      success: function success(data) {
	        // eslint-disable-next-line guard-for-in
	        for (var key in data) {
	          UtilsFilterControl.addOptionToSelectControl(selectControl, key, data[key], selected);
	        }

	        UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy);
	      }
	    });
	  },
	  json: function json(filterDataSource, selectControl, filterOrderBy, selected) {
	    var variableValues = JSON.parse(filterDataSource); // eslint-disable-next-line guard-for-in

	    for (var key in variableValues) {
	      UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key], selected);
	    }

	    UtilsFilterControl.sortSelectControl(selectControl, filterOrderBy);
	  }
	};
	$.extend($.fn.bootstrapTable.defaults, {
	  filterControl: false,
	  onColumnSearch: function onColumnSearch(field, text) {
	    return false;
	  },
	  onCreatedControls: function onCreatedControls() {
	    return true;
	  },
	  alignmentSelectControlOptions: undefined,
	  filterTemplate: {
	    input: function input(that, field, isVisible, placeholder, value) {
	      return Utils.sprintf('<input type="text" class="form-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s" placeholder="%s" value="%s">', field, isVisible, 'undefined' === typeof placeholder ? '' : placeholder, 'undefined' === typeof value ? '' : value);
	    },
	    select: function select(_ref7, field, isVisible) {
	      var options = _ref7.options;
	      return Utils.sprintf('<select class="form-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s" dir="%s"></select>', field, isVisible, UtilsFilterControl.getDirectionOfSelectOptions(options.alignmentSelectControlOptions));
	    },
	    datepicker: function datepicker(that, field, isVisible, value) {
	      return Utils.sprintf('<input type="text" class="form-control date-filter-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s" value="%s">', field, isVisible, 'undefined' === typeof value ? '' : value);
	    }
	  },
	  disableControlWhenSearch: false,
	  searchOnEnterKey: false,
	  // internal variables
	  valuesFilterControl: []
	});
	$.extend($.fn.bootstrapTable.columnDefaults, {
	  filterControl: undefined,
	  filterDataCollector: undefined,
	  filterData: undefined,
	  filterDatepickerOptions: undefined,
	  filterStrictSearch: false,
	  filterStartsWithSearch: false,
	  filterControlPlaceholder: '',
	  filterDefault: '',
	  filterOrderBy: 'asc' // asc || desc

	});
	$.extend($.fn.bootstrapTable.Constructor.EVENTS, {
	  'column-search.bs.table': 'onColumnSearch',
	  'created-controls.bs.table': 'onCreatedControls'
	});
	$.extend($.fn.bootstrapTable.defaults.icons, {
	  clear: {
	    bootstrap3: 'glyphicon-trash icon-clear'
	  }[$.fn.bootstrapTable.theme] || 'fa-trash'
	});
	$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
	$.extend($.fn.bootstrapTable.defaults, {
	  formatClearSearch: function formatClearSearch() {
	    return 'Clear filters';
	  }
	});
	$.fn.bootstrapTable.methods.push('triggerSearch');
	$.fn.bootstrapTable.methods.push('clearFilterControl');

	$.BootstrapTable =
	/*#__PURE__*/
	function (_$$BootstrapTable) {
	  _inherits(_class, _$$BootstrapTable);

	  function _class() {
	    _classCallCheck(this, _class);

	    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
	  }

	  _createClass(_class, [{
	    key: "init",
	    value: function init() {
	      var _this = this;

	      // Make sure that the filterControl option is set
	      if (this.options.filterControl) {
	        var that = this; // Make sure that the internal variables are set correctly

	        this.options.valuesFilterControl = [];
	        this.$el.on('reset-view.bs.table', function () {
	          // Create controls on $tableHeader if the height is set
	          if (!that.options.height) {
	            return;
	          } // Avoid recreate the controls


	          if (that.$tableHeader.find('select').length > 0 || that.$tableHeader.find('input').length > 0) {
	            return;
	          }

	          UtilsFilterControl.createControls(that, that.$tableHeader);
	        }).on('post-header.bs.table', function () {
	          UtilsFilterControl.setValues(that);
	        }).on('post-body.bs.table', function () {
	          if (that.options.height) {
	            UtilsFilterControl.fixHeaderCSS(that);
	          }

	          _this.$tableLoading.css('top', _this.$header.outerHeight() + 1);
	        }).on('column-switch.bs.table', function () {
	          UtilsFilterControl.setValues(that);
	        }).on('load-success.bs.table', function () {
	          that.EnableControls(true);
	        }).on('load-error.bs.table', function () {
	          that.EnableControls(true);
	        });
	      }

	      _get(_getPrototypeOf(_class.prototype), "init", this).call(this);
	    }
	  }, {
	    key: "initHeader",
	    value: function initHeader() {
	      _get(_getPrototypeOf(_class.prototype), "initHeader", this).call(this);

	      if (!this.options.filterControl) {
	        return;
	      }

	      UtilsFilterControl.createControls(this, this.$header);
	    }
	  }, {
	    key: "initBody",
	    value: function initBody() {
	      _get(_getPrototypeOf(_class.prototype), "initBody", this).call(this);

	      UtilsFilterControl.initFilterSelectControls(this);
	    }
	  }, {
	    key: "initSearch",
	    value: function initSearch() {
	      var that = this;
	      var fp = $.isEmptyObject(that.filterColumnsPartial) ? null : that.filterColumnsPartial;

	      if (fp === null || Object.keys(fp).length <= 1) {
	        _get(_getPrototypeOf(_class.prototype), "initSearch", this).call(this);
	      }

	      if (this.options.sidePagination === 'server') {
	        return;
	      }

	      if (fp === null) {
	        return;
	      } // Check partial column filter


	      that.data = fp ? that.options.data.filter(function (item, i) {
	        var itemIsExpected = [];
	        Object.keys(item).forEach(function (x, index) {
	          var key = that.header.fields[index];
	          var thisColumn = that.columns[that.fieldsColumnsIndex[key]];
	          var fval = (fp[key] || '').toLowerCase();
	          var value = Utils.getItemField(item, key, false);

	          if (fval === '') {
	            itemIsExpected.push(true);
	          } else {
	            // Fix #142: search use formated data
	            if (thisColumn && thisColumn.searchFormatter) {
	              value = $.fn.bootstrapTable.utils.calculateObjectValue(that.header, that.header.formatters[$.inArray(key, that.header.fields)], [value, item, i], value);
	            }

	            if ($.inArray(key, that.header.fields) !== -1) {
	              if (value === undefined || value === null) {
	                itemIsExpected.push(false);
	              } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	                if (thisColumn.filterStrictSearch) {
	                  itemIsExpected.push(value.toString().toLowerCase() === fval.toString().toLowerCase());
	                } else if (thisColumn.filterStartsWithSearch) {
	                  itemIsExpected.push("".concat(value).toLowerCase().indexOf(fval) === 0);
	                } else {
	                  itemIsExpected.push("".concat(value).toLowerCase().includes(fval));
	                }
	              }
	            }
	          }
	        });
	        return !itemIsExpected.includes(false);
	      }) : that.data;
	    }
	  }, {
	    key: "initColumnSearch",
	    value: function initColumnSearch(filterColumnsDefaults) {
	      UtilsFilterControl.copyValues(this);

	      if (filterColumnsDefaults) {
	        this.filterColumnsPartial = filterColumnsDefaults;
	        this.updatePagination(); // eslint-disable-next-line guard-for-in

	        for (var filter in filterColumnsDefaults) {
	          this.trigger('column-search', filter, filterColumnsDefaults[filter]);
	        }
	      }
	    }
	  }, {
	    key: "onColumnSearch",
	    value: function onColumnSearch(event) {
	      if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
	        return;
	      }

	      UtilsFilterControl.copyValues(this);
	      var text = $.trim($(event.currentTarget).val());
	      var $field = $(event.currentTarget).closest('[data-field]').data('field');

	      if ($.isEmptyObject(this.filterColumnsPartial)) {
	        this.filterColumnsPartial = {};
	      }

	      if (text) {
	        this.filterColumnsPartial[$field] = text;
	      } else {
	        delete this.filterColumnsPartial[$field];
	      }

	      this.options.pageNumber = 1;
	      this.EnableControls(false);
	      this.onSearch(event, false);
	      this.trigger('column-search', $field, text);
	    }
	  }, {
	    key: "initToolbar",
	    value: function initToolbar() {
	      this.showSearchClearButton = this.options.filterControl && this.options.showSearchClearButton;

	      _get(_getPrototypeOf(_class.prototype), "initToolbar", this).call(this);
	    }
	  }, {
	    key: "resetSearch",
	    value: function resetSearch() {
	      if (this.options.filterControl && this.options.showSearchClearButton) {
	        this.clearFilterControl();
	      }

	      _get(_getPrototypeOf(_class.prototype), "resetSearch", this).call(this);
	    }
	  }, {
	    key: "clearFilterControl",
	    value: function clearFilterControl() {
	      if (this.options.filterControl) {
	        var that = this;
	        var cookies = UtilsFilterControl.collectBootstrapCookies();
	        var header = UtilsFilterControl.getCurrentHeader(that);
	        var table = header.closest('table');
	        var controls = header.find(UtilsFilterControl.getCurrentSearchControls(that));
	        var search = that.$toolbar.find('.search input');
	        var hasValues = false;
	        var timeoutId = 0;
	        $.each(that.options.valuesFilterControl, function (i, item) {
	          hasValues = hasValues ? true : item.value !== '';
	          item.value = '';
	        });
	        $.each(that.options.filterControls, function (i, item) {
	          item.text = '';
	        });
	        UtilsFilterControl.setValues(that); // clear cookies once the filters are clean

	        clearTimeout(timeoutId);
	        timeoutId = setTimeout(function () {
	          if (cookies && cookies.length > 0) {
	            $.each(cookies, function (i, item) {
	              if (that.deleteCookie !== undefined) {
	                that.deleteCookie(item);
	              }
	            });
	          }
	        }, that.options.searchTimeOut); // If there is not any value in the controls exit this method

	        if (!hasValues) {
	          return;
	        } // Clear each type of filter if it exists.
	        // Requires the body to reload each time a type of filter is found because we never know
	        // which ones are going to be present.


	        if (controls.length > 0) {
	          this.filterColumnsPartial = {};
	          $(controls[0]).trigger(controls[0].tagName === 'INPUT' ? 'keyup' : 'change', {
	            keyCode: 13
	          });
	        } else {
	          return;
	        }

	        if (search.length > 0) {
	          that.resetSearch();
	        } // use the default sort order if it exists. do nothing if it does not


	        if (that.options.sortName !== table.data('sortName') || that.options.sortOrder !== table.data('sortOrder')) {
	          var sorter = header.find(Utils.sprintf('[data-field="%s"]', $(controls[0]).closest('table').data('sortName')));

	          if (sorter.length > 0) {
	            that.onSort({
	              type: 'keypress',
	              currentTarget: sorter
	            });
	            $(sorter).find('.sortable').trigger('click');
	          }
	        }
	      }
	    }
	  }, {
	    key: "triggerSearch",
	    value: function triggerSearch() {
	      var header = UtilsFilterControl.getCurrentHeader(this);
	      var searchControls = UtilsFilterControl.getCurrentSearchControls(this);
	      header.find(searchControls).each(function () {
	        var el = $(this);

	        if (el.is('select')) {
	          el.change();
	        } else {
	          el.keyup();
	        }
	      });
	    }
	  }, {
	    key: "EnableControls",
	    value: function EnableControls(enable) {
	      if (this.options.disableControlWhenSearch && this.options.sidePagination === 'server') {
	        var header = UtilsFilterControl.getCurrentHeader(this);
	        var searchControls = UtilsFilterControl.getCurrentSearchControls(this);

	        if (!enable) {
	          header.find(searchControls).prop('disabled', 'disabled');
	        } else {
	          header.find(searchControls).removeProp('disabled');
	        }
	      }
	    }
	  }]);

	  return _class;
	}($.BootstrapTable);

}));
