(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, global.BootstrapTable = factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = typeof window == 'object' && window && window.Math == Math ? window
    : typeof self == 'object' && self && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var descriptors = !fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = nativeGetOwnPropertyDescriptor(this, V);
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

  // fallback for non-array-like ES3 and non-enumerable old V8 strings


  var split = ''.split;

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

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var document$1 = global.document;
  // typeof document.createElement is 'object' in old IE
  var exist = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return exist ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var nativeGetOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  var f$1 = descriptors ? nativeGetOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor$1(O, P);
    } catch (e) { /* empty */ }
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

  var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (e) { /* empty */ }
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

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var setGlobal = function (key, value) {
    try {
      hide(global, key, value);
    } catch (e) {
      global[key] = value;
    } return value;
  };

  var shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = global[SHARED] || setGlobal(SHARED, {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.0.0',
    mode: 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var functionToString = shared('native-function-to-string', Function.toString);

  var WeakMap = global.WeakMap;

  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
  };

  var shared$1 = shared('keys');


  var sharedKey = function (key) {
    return shared$1[key] || (shared$1[key] = uid(key));
  };

  var hiddenKeys = {};

  var WeakMap$1 = global.WeakMap;
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
    if (O === global) {
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
    return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
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
  // false -> Array#indexOf
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  // true  -> Array#includes
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  var arrayIncludes = function (IS_INCLUDES) {
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
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIndexOf = arrayIncludes(false);


  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
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

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

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

  var Reflect = global.Reflect;

  // all object keys, includes non-enumerable and symbols
  var ownKeys = Reflect && Reflect.ownKeys || function ownKeys(it) {
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
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global;
    } else if (STATIC) {
      target = global[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global[TARGET] || {}).prototype;
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

  // Chrome 38 Symbol has incorrect toString conversion
  var nativeSymbol = !fails(function () {
  });

  var store$1 = shared('wks');

  var Symbol$1 = global.Symbol;


  var wellKnownSymbol = function (name) {
    return store$1[name] || (store$1[name] = nativeSymbol && Symbol$1[name]
      || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
  };

  var defineProperty = objectDefineProperty.f;

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
      defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
    }
  };

  var f$5 = wellKnownSymbol;

  var wrappedWellKnownSymbol = {
  	f: f$5
  };

  var path = global;

  var defineProperty$1 = objectDefineProperty.f;

  var defineWellKnownSymbol = function (NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!has(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
      value: wrappedWellKnownSymbol.f(NAME)
    });
  };

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // all enumerable object keys, includes symbols
  var enumKeys = function (it) {
    var result = objectKeys(it);
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    if (getOwnPropertySymbols) {
      var symbols = getOwnPropertySymbols(it);
      var propertyIsEnumerable = objectPropertyIsEnumerable.f;
      var i = 0;
      var key;
      while (symbols.length > i) if (propertyIsEnumerable.call(it, key = symbols[i++])) result.push(key);
    } return result;
  };

  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var key;
    while (length > i) objectDefineProperty.f(O, key = keys[i++], Properties[key]);
    return O;
  };

  var document$2 = global.document;

  var html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])





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

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

  var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;
  var toString$1 = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return nativeGetOwnPropertyNames(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$6 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]'
      ? getWindowNames(it)
      : nativeGetOwnPropertyNames(toIndexedObject(it));
  };

  var objectGetOwnPropertyNamesExternal = {
  	f: f$6
  };

  // ECMAScript 6 symbols shim




























  var HIDDEN = sharedKey('hidden');

  var SYMBOL = 'Symbol';
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(SYMBOL);
  var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var nativeDefineProperty$1 = objectDefineProperty.f;
  var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
  var $Symbol = global.Symbol;
  var JSON$1 = global.JSON;
  var nativeJSONStringify = JSON$1 && JSON$1.stringify;
  var PROTOTYPE$1 = 'prototype';
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
  var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
  var SymbolRegistry = shared('symbol-registry');
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var WellKnownSymbolsStore = shared('wks');
  var ObjectPrototype = Object[PROTOTYPE$1];
  var QObject = global.QObject;

  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = descriptors && fails(function () {
    return objectCreate(nativeDefineProperty$1({}, 'a', {
      get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (it, key, D) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype, key);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[key];
    nativeDefineProperty$1(it, key, D);
    if (ObjectPrototypeDescriptor && it !== ObjectPrototype) {
      nativeDefineProperty$1(ObjectPrototype, key, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty$1;

  var wrap = function (tag, description) {
    var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
    setInternalState(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!descriptors) symbol.description = description;
    return symbol;
  };

  var isSymbol = nativeSymbol && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return Object(it) instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN)) nativeDefineProperty$1(it, HIDDEN, createPropertyDescriptor(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = objectCreate(D, { enumerable: createPropertyDescriptor(0, false) });
      } return setSymbolDescriptor(it, key, D);
    } return nativeDefineProperty$1(it, key, D);
  };

  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIndexedObject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };

  var $create = function create(it, P) {
    return P === undefined ? objectCreate(it) : $defineProperties(objectCreate(it), P);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = nativePropertyIsEnumerable$1.call(this, key = toPrimitive(key, true));
    if (this === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIndexedObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
    var D = nativeGetOwnPropertyDescriptor$2(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = nativeGetOwnPropertyNames$1(toIndexedObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!has(AllSymbols, key = names[i++]) && !has(hiddenKeys, key)) result.push(key);
    } return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectPrototype;
    var names = nativeGetOwnPropertyNames$1(IS_OP ? ObjectPrototypeSymbols : toIndexedObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectPrototype, key) : true)) result.push(AllSymbols[key]);
    } return result;
  };

  // `Symbol` constructor
  // https://tc39.github.io/ecma262/#sec-symbol-constructor
  if (!nativeSymbol) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
      var description = arguments[0] === undefined ? undefined : String(arguments[0]);
      var tag = uid(description);
      var setter = function (value) {
        if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };
      if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
      return wrap(tag, description);
    };
    redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
      return getInternalState(this).tag;
    });

    objectPropertyIsEnumerable.f = $propertyIsEnumerable;
    objectDefineProperty.f = $defineProperty;
    objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
    objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

    if (descriptors) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        }
      });
      {
        redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
      }
    }

    wrappedWellKnownSymbol.f = function (name) {
      return wrap(wellKnownSymbol(name), name);
    };
  }

  _export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, { Symbol: $Symbol });

  for (var wellKnownSymbols = objectKeys(WellKnownSymbolsStore), k = 0; wellKnownSymbols.length > k;) {
    defineWellKnownSymbol(wellKnownSymbols[k++]);
  }

  _export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
    // `Symbol.for` method
    // https://tc39.github.io/ecma262/#sec-symbol.for
    'for': function (key) {
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // `Symbol.keyFor` method
    // https://tc39.github.io/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  _export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
    // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });

  _export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // `JSON.stringify` method behavior with symbols
  // https://tc39.github.io/ecma262/#sec-json.stringify
  JSON$1 && _export({ target: 'JSON', stat: true, forced: !nativeSymbol || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return nativeJSONStringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || nativeJSONStringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || nativeJSONStringify(Object(symbol)) != '{}';
  }) }, {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return nativeJSONStringify.apply(JSON$1, args);
    }
  });

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
  if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag($Symbol, SYMBOL);

  hiddenKeys[HIDDEN] = true;

  var defineProperty$2 = objectDefineProperty.f;

  var NativeSymbol = global.Symbol;

  if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined
  )) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
      var result = this instanceof SymbolWrapper
        ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;

    var symbolToString = symbolPrototype.toString;
    var native = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty$2(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (has(EmptyStringDescriptionStore, symbol)) return '';
        var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });

    _export({ global: true, forced: true }, { Symbol: SymbolWrapper });
  }

  // `Symbol.iterator` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol('iterator');

  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
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

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1fffffffffffff;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

  var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
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
  // https://tc39.github.io/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export({ target: 'Array', proto: true, forced: FORCED }, {
    concat: function concat(arg) { // eslint-disable-line no-unused-vars
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
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

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  // optional / simple context binding
  var bindContext = function (fn, that, length) {
    aFunction(fn);
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

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
  // 0 -> Array#forEach
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  // 1 -> Array#map
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  // 2 -> Array#filter
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  // 3 -> Array#some
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  // 4 -> Array#every
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  // 5 -> Array#find
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  // 6 -> Array#findIndex
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  var arrayMethods = function (TYPE, specificCreate) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = specificCreate || arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = bindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
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
            case 2: target.push(value);       // filter
          } else if (IS_EVERY) return false;  // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var internalFilter = arrayMethods(2);

  var SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !SPECIES_SUPPORT$1 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return internalFilter(this, callbackfn, arguments[1]);
    }
  });

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

  var internalFind = arrayMethods(5);
  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return internalFind(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var internalFindIndex = arrayMethods(6);
  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES$1 = true;

  // Shouldn't skip holes
  if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES$1 = false; });

  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findindex
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES$1 }, {
    findIndex: function findIndex(callbackfn /* , that = undefined */) {
      return internalFindIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND_INDEX);

  var internalIncludes = arrayIncludes(true);

  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  _export({ target: 'Array', proto: true }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return internalIncludes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var sloppyArrayMethod = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !method || !fails(function () {
      // eslint-disable-next-line no-useless-call
      method.call(null, argument || function () { throw Error(); }, 1);
    });
  };

  var internalIndexOf = arrayIncludes(false);
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
        : internalIndexOf(this, searchElement, arguments[1]);
    }
  });

  var correctPrototypeGetter = !fails(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$1 = sharedKey('IE_PROTO');

  var ObjectPrototype$1 = Object.prototype;

  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectPrototype$1 : null;
  };

  var ITERATOR = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS = false;

  var returnThis = function () { return this; };

  // `%IteratorPrototype%` object
  // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }

  if (IteratorPrototype == undefined) IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  if (!has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    return IteratorConstructor;
  };

  var validateSetPrototypeOfArguments = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) {
      throw TypeError("Can't set " + String(proto) + ' as a prototype');
    }
  };

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */


  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () { // eslint-disable-line
    var correctSetter = false;
    var test = {};
    var setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      correctSetter = test instanceof Array;
    } catch (e) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      validateSetPrototypeOfArguments(O, proto);
      if (correctSetter) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var ITERATOR$1 = wellKnownSymbol('iterator');


  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis$1 = function () { return this; };

  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$1]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
            hide(CurrentIteratorPrototype, ITERATOR$1, returnThis$1);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }

    // define iterator
    if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
      hide(IterablePrototype, ITERATOR$1, defaultIterator);
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
    }

    return methods;
  };

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$1 = internalState.set;
  var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.github.io/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$1(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return { value: undefined, done: true };
    }
    if (kind == 'keys') return { value: index, done: false };
    if (kind == 'values') return { value: target[index], done: false };
    return { value: [index, target[index]], done: false };
  }, 'values');

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

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

  var SPECIES$2 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$1 = Math.max;

  var SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');

  // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export({ target: 'Array', proto: true, forced: !SPECIES_SUPPORT$2 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$2];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
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

  var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD$2;

  // `Array.prototype.sort` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.sort
  _export({ target: 'Array', proto: true, forced: FORCED$1 }, {
    sort: function sort(comparefn) {
      return comparefn === undefined
        ? nativeSort.call(toObject(this))
        : nativeSort.call(toObject(this), aFunction(comparefn));
    }
  });

  var max$2 = Math.max;
  var min$2 = Math.min;
  var MAX_SAFE_INTEGER$1 = 0x1fffffffffffff;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

  var SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('splice');

  // `Array.prototype.splice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !SPECIES_SUPPORT$3 }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject(this);
      var len = toLength(O.length);
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
        actualDeleteCount = min$2(max$2(toInteger(deleteCount), 0), len - actualStart);
      }
      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
        throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }
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
          else delete O[to];
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];
          else delete O[to];
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });

  var inheritIfRequired = function (that, target, C) {
    var S = target.constructor;
    var P;
    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && objectSetPrototypeOf) {
      objectSetPrototypeOf(that, P);
    } return that;
  };

  // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len
  var whitespaces = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // 1 -> String#trimStart
  // 2 -> String#trimEnd
  // 3 -> String#trim
  var stringTrim = function (string, TYPE) {
    string = String(requireObjectCoercible(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var defineProperty$3 = objectDefineProperty.f;

  var NUMBER = 'Number';
  var NativeNumber = global[NUMBER];
  var NumberPrototype = NativeNumber.prototype;

  // Opera ~12 has broken Object#toString
  var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;
  var NATIVE_TRIM = 'trim' in String.prototype;

  // `ToNumber` abstract operation
  // https://tc39.github.io/ecma262/#sec-tonumber
  var toNumber = function (argument) {
    var it = toPrimitive(argument, false);
    var first, third, radix, maxCode, digits, length, i, code;
    if (typeof it == 'string' && it.length > 2) {
      it = NATIVE_TRIM ? it.trim() : stringTrim(it, 3);
      first = it.charCodeAt(0);
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
          case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
          default: return +it;
        }
        digits = it.slice(2);
        length = digits.length;
        for (i = 0; i < length; i++) {
          code = digits.charCodeAt(i);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        } return parseInt(digits, radix);
      }
    } return +it;
  };

  // `Number` constructor
  // https://tc39.github.io/ecma262/#sec-number-constructor
  if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var that = this;
      return that instanceof NumberWrapper
        // check on 1..constructor(foo) case
        && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(that); }) : classofRaw(that) != NUMBER)
          ? inheritIfRequired(new NativeNumber(toNumber(it)), that, NumberWrapper) : toNumber(it);
    };
    for (var keys = descriptors ? getOwnPropertyNames(NativeNumber) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES2015 (in case, if modules with ES2015 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
    ).split(','), j = 0, key; keys.length > j; j++) {
      if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
        defineProperty$3(NumberWrapper, key, getOwnPropertyDescriptor$1(NativeNumber, key));
      }
    }
    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine(global, NUMBER, NumberWrapper);
  }

  var nativeParseFloat = global.parseFloat;


  var FORCED$2 = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

  var _parseFloat = FORCED$2 ? function parseFloat(str) {
    var string = stringTrim(String(str), 3);
    var result = nativeParseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
  } : nativeParseFloat;

  // `Number.parseFloat` method
  // https://tc39.github.io/ecma262/#sec-number.parseFloat
  _export({ target: 'Number', stat: true, forced: Number.parseFloat != _parseFloat }, {
    parseFloat: _parseFloat
  });

  // 19.1.2.1 Object.assign(target, source, ...)





  var nativeAssign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var objectAssign = !nativeAssign || fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f;
    while (argumentsLength > index) {
      var S = indexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) if (propertyIsEnumerable.call(S, key = keys[j++])) T[key] = S[key];
    } return T;
  } : nativeAssign;

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  _export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, { assign: objectAssign });

  var propertyIsEnumerable = objectPropertyIsEnumerable.f;

  // TO_ENTRIES: true  -> Object.entries
  // TO_ENTRIES: false -> Object.values
  var objectToArray = function (it, TO_ENTRIES) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (propertyIsEnumerable.call(O, key = keys[i++])) {
      result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
    } return result;
  };

  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  _export({ target: 'Object', stat: true }, {
    entries: function entries(O) {
      return objectToArray(O, true);
    }
  });

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$2] = 'z';

  // `Object.prototype.toString` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  var objectToString = String(test$1) !== '[object z]' ? function toString() {
    return '[object ' + classof(this) + ']';
  } : test$1.toString;

  var ObjectPrototype$2 = Object.prototype;

  // `Object.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  if (objectToString !== ObjectPrototype$2.toString) {
    redefine(ObjectPrototype$2, 'toString', objectToString, { unsafe: true });
  }

  // `parseFloat` method
  // https://tc39.github.io/ecma262/#sec-parsefloat-string
  _export({ global: true, forced: parseFloat != _parseFloat }, {
    parseFloat: _parseFloat
  });

  var nativeParseInt = global.parseInt;


  var hex = /^[-+]?0[xX]/;
  var FORCED$3 = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

  var _parseInt = FORCED$3 ? function parseInt(str, radix) {
    var string = stringTrim(String(str), 3);
    return nativeParseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
  } : nativeParseInt;

  // `parseInt` method
  // https://tc39.github.io/ecma262/#sec-parseint-string-radix
  _export({ global: true, forced: parseInt != _parseInt }, {
    parseInt: _parseInt
  });

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var TO_STRING = 'toString';
  var nativeToString = /./[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !descriptors && R instanceof RegExp ? regexpFlags.call(R) : undefined);
    }, { unsafe: true });
  }

  var MATCH = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.github.io/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  // helper for String#{startsWith, endsWith, includes}



  var validateStringMethodArguments = function (that, searchString, NAME) {
    if (isRegexp(searchString)) {
      throw TypeError('String.prototype.' + NAME + " doesn't accept regex");
    } return String(requireObjectCoercible(that));
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

  var INCLUDES = 'includes';

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic(INCLUDES);

  // `String.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.includes
  _export({ target: 'String', proto: true, forced: !CORRECT_IS_REGEXP_LOGIC }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~validateStringMethodArguments(this, searchString, INCLUDES)
        .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // CONVERT_TO_STRING: true  -> String#at
  // CONVERT_TO_STRING: false -> String#codePointAt
  var stringAt = function (that, pos, CONVERT_TO_STRING) {
    var S = String(requireObjectCoercible(that));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xd800 || first > 0xdbff || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xdc00 || second > 0xdfff
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xd800 << 10) + (second - 0xdc00) + 0x10000;
  };

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = internalState.set;
  var getInternalState$2 = internalState.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$2(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = stringAt(string, index, true);
    state.index += point.length;
    return { value: point, done: false };
  });

  // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? stringAt(S, index, true).length : 1);
  };

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

  var SPECIES$3 = wellKnownSymbol('species');

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
        re.constructor[SPECIES$3] = function () { return re; };
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

  var max$3 = Math.max;
  var min$3 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegexpWellKnownSymbolLogic(
    'replace',
    2,
    function (REPLACE, nativeReplace, maybeCallNative) {
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
            var position = max$3(min$3(toInteger(result.index), S.length), 0);
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
    }
  );

  // `SameValue` abstract operation
  // https://tc39.github.io/ecma262/#sec-samevalue
  var sameValue = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  // @@search logic
  fixRegexpWellKnownSymbolLogic(
    'search',
    1,
    function (SEARCH, nativeSearch, maybeCallNative) {
      return [
        // `String.prototype.search` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.search
        function search(regexp) {
          var O = requireObjectCoercible(this);
          var searcher = regexp == undefined ? undefined : regexp[SEARCH];
          return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
        function (regexp) {
          var res = maybeCallNative(nativeSearch, regexp, this);
          if (res.done) return res.value;

          var rx = anObject(regexp);
          var S = String(this);

          var previousLastIndex = rx.lastIndex;
          if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
          var result = regexpExecAbstract(rx, S);
          if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
          return result === null ? -1 : result.index;
        }
      ];
    }
  );

  var SPECIES$4 = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.github.io/ecma262/#sec-speciesconstructor
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aFunction(S);
  };

  var arrayPush = [].push;
  var min$4 = Math.min;
  var MAX_UINT32 = 0xffffffff;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

  // @@split logic
  fixRegexpWellKnownSymbolLogic(
    'split',
    2,
    function (SPLIT, nativeSplit, maybeCallNative) {
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
              (e = min$4(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
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
    },
    !SUPPORTS_Y
  );

  var non = '\u200b\u0085\u180e';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var forcedStringTrimMethod = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var FORCED$4 = forcedStringTrimMethod('trim');

  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  _export({ target: 'String', proto: true, forced: FORCED$4 }, {
    trim: function trim() {
      return stringTrim(this, 3);
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

  var nativeForEach = [].forEach;
  var internalForEach = arrayMethods(0);

  var SLOPPY_METHOD$3 = sloppyArrayMethod('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  var arrayForEach = SLOPPY_METHOD$3 ? function forEach(callbackfn /* , thisArg */) {
    return internalForEach(this, callbackfn, arguments[1]);
  } : nativeForEach;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      hide(CollectionPrototype, 'forEach', arrayForEach);
    } catch (e) {
      CollectionPrototype.forEach = arrayForEach;
    }
  }

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;

  for (var COLLECTION_NAME$1 in domIterables) {
    var Collection$1 = global[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
    if (CollectionPrototype$1) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$1[ITERATOR$2] !== ArrayValues) try {
        hide(CollectionPrototype$1, ITERATOR$2, ArrayValues);
      } catch (e) {
        CollectionPrototype$1[ITERATOR$2] = ArrayValues;
      }
      if (!CollectionPrototype$1[TO_STRING_TAG$3]) hide(CollectionPrototype$1, TO_STRING_TAG$3, COLLECTION_NAME$1);
      if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          hide(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (e) {
          CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var VERSION = '1.15.0';
  var bootstrapVersion = 4;

  try {
    var rawVersion = $.fn.dropdown.Constructor.VERSION; // Only try to parse VERSION if it is defined.
    // It is undefined in older versions of Bootstrap (tested with 3.1.1).

    if (rawVersion !== undefined) {
      bootstrapVersion = parseInt(rawVersion, 10);
    }
  } catch (e) {// ignore
  }

  var CONSTANTS = {
    3: {
      iconsPrefix: 'glyphicon',
      icons: {
        paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
        paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
        refresh: 'glyphicon-refresh icon-refresh',
        toggleOff: 'glyphicon-list-alt icon-list-alt',
        toggleOn: 'glyphicon-list-alt icon-list-alt',
        columns: 'glyphicon-th icon-th',
        detailOpen: 'glyphicon-plus icon-plus',
        detailClose: 'glyphicon-minus icon-minus',
        fullscreen: 'glyphicon-fullscreen',
        search: 'glyphicon-search',
        clearSearch: 'glyphicon-trash'
      },
      classes: {
        buttonsPrefix: 'btn',
        buttons: 'default',
        buttonsGroup: 'btn-group',
        buttonsDropdown: 'btn-group',
        pull: 'pull',
        inputGroup: 'input-group',
        input: 'form-control',
        paginationDropdown: 'btn-group dropdown',
        dropup: 'dropup',
        dropdownActive: 'active',
        paginationActive: 'active',
        buttonActive: 'active'
      },
      html: {
        toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        toolbarDropdownItem: '<li role="menuitem"><label>%s</label></li>',
        toolbarDropdownSeperator: '<li class="divider"></li>',
        pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
        dropdownCaret: '<span class="caret"></span>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        searchButton: '<button class="btn btn-default" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="btn btn-default" type="button" name="clearSearch" title="%s">%s %s</button>'
      }
    },
    4: {
      iconsPrefix: 'fa',
      icons: {
        paginationSwitchDown: 'fa-caret-square-down',
        paginationSwitchUp: 'fa-caret-square-up',
        refresh: 'fa-sync',
        toggleOff: 'fa-toggle-off',
        toggleOn: 'fa-toggle-on',
        columns: 'fa-th-list',
        detailOpen: 'fa-plus',
        detailClose: 'fa-minus',
        fullscreen: 'fa-arrows-alt',
        search: 'fa-search',
        clearSearch: 'fa-trash'
      },
      classes: {
        buttonsPrefix: 'btn',
        buttons: 'secondary',
        buttonsGroup: 'btn-group',
        buttonsDropdown: 'btn-group',
        pull: 'float',
        inputGroup: 'btn-group',
        input: 'form-control',
        paginationDropdown: 'btn-group dropdown',
        dropup: 'dropup',
        dropdownActive: 'active',
        paginationActive: 'active',
        buttonActive: 'active'
      },
      html: {
        toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
        toolbarDropdownItem: '<label class="dropdown-item">%s</label>',
        pageDropdown: ['<div class="dropdown-menu">', '</div>'],
        pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
        toolbarDropdownSeperator: '<div class="dropdown-divider"></div>',
        dropdownCaret: '<span class="caret"></span>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        searchButton: '<button class="btn btn-secondary" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="btn btn-secondary" type="button" name="clearSearch" title="%s">%s %s</button>'
      }
    }
  }[bootstrapVersion];
  var DEFAULTS = {
    height: undefined,
    classes: 'table table-bordered table-hover',
    theadClasses: '',
    rowStyle: function rowStyle(row, index) {
      return {};
    },
    rowAttributes: function rowAttributes(row, index) {
      return {};
    },
    undefinedText: '-',
    locale: undefined,
    sortable: true,
    sortClass: undefined,
    silentSort: true,
    sortName: undefined,
    sortOrder: 'asc',
    sortStable: false,
    rememberOrder: false,
    customSort: undefined,
    columns: [[]],
    data: [],
    url: undefined,
    method: 'get',
    cache: true,
    contentType: 'application/json',
    dataType: 'json',
    ajax: undefined,
    ajaxOptions: {},
    queryParams: function queryParams(params) {
      return params;
    },
    queryParamsType: 'limit',
    // 'limit', undefined
    responseHandler: function responseHandler(res) {
      return res;
    },
    totalField: 'total',
    totalNotFilteredField: 'totalNotFiltered',
    dataField: 'rows',
    pagination: false,
    onlyInfoPagination: false,
    showExtendedPagination: false,
    paginationLoop: true,
    sidePagination: 'client',
    // client or server
    totalRows: 0,
    totalNotFiltered: 0,
    pageNumber: 1,
    pageSize: 10,
    pageList: [10, 25, 50, 100],
    paginationHAlign: 'right',
    // right, left
    paginationVAlign: 'bottom',
    // bottom, top, both
    paginationDetailHAlign: 'left',
    // right, left
    paginationPreText: '&lsaquo;',
    paginationNextText: '&rsaquo;',
    paginationSuccessivelySize: 5,
    // Maximum successively number of pages in a row
    paginationPagesBySide: 1,
    // Number of pages on each side (right, left) of the current page.
    paginationUseIntermediate: false,
    // Calculate intermediate pages for quick access
    search: false,
    searchOnEnterKey: false,
    strictSearch: false,
    visibleSearch: false,
    showButtonIcons: true,
    showButtonText: false,
    showSearchButton: false,
    showSearchClearButton: false,
    trimOnSearch: true,
    searchAlign: 'right',
    searchTimeOut: 500,
    searchText: '',
    customSearch: undefined,
    showHeader: true,
    showFooter: false,
    footerStyle: function footerStyle(row, index) {
      return {};
    },
    showColumns: false,
    showColumnsToggleAll: false,
    minimumCountColumns: 1,
    showPaginationSwitch: false,
    showRefresh: false,
    showToggle: false,
    showFullscreen: false,
    smartDisplay: true,
    escape: false,
    filterOptions: {
      filterAlgorithm: 'and'
    },
    idField: undefined,
    selectItemName: 'btSelectItem',
    clickToSelect: false,
    ignoreClickToSelectOn: function ignoreClickToSelectOn(_ref) {
      var tagName = _ref.tagName;
      return ['A', 'BUTTON'].includes(tagName);
    },
    singleSelect: false,
    checkboxHeader: true,
    maintainMetaData: false,
    multipleSelectRow: false,
    uniqueId: undefined,
    cardView: false,
    detailView: false,
    detailViewIcon: true,
    detailViewByClick: false,
    detailFormatter: function detailFormatter(index, row) {
      return '';
    },
    detailFilter: function detailFilter(index, row) {
      return true;
    },
    toolbar: undefined,
    toolbarAlign: 'left',
    buttonsToolbar: undefined,
    buttonsAlign: 'right',
    buttonsPrefix: CONSTANTS.classes.buttonsPrefix,
    buttonsClass: CONSTANTS.classes.buttons,
    icons: CONSTANTS.icons,
    html: CONSTANTS.html,
    iconSize: undefined,
    iconsPrefix: CONSTANTS.iconsPrefix,
    // glyphicon or fa(font-awesome)
    onAll: function onAll(name, args) {
      return false;
    },
    onClickCell: function onClickCell(field, value, row, $element) {
      return false;
    },
    onDblClickCell: function onDblClickCell(field, value, row, $element) {
      return false;
    },
    onClickRow: function onClickRow(item, $element) {
      return false;
    },
    onDblClickRow: function onDblClickRow(item, $element) {
      return false;
    },
    onSort: function onSort(name, order) {
      return false;
    },
    onCheck: function onCheck(row) {
      return false;
    },
    onUncheck: function onUncheck(row) {
      return false;
    },
    onCheckAll: function onCheckAll(rows) {
      return false;
    },
    onUncheckAll: function onUncheckAll(rows) {
      return false;
    },
    onCheckSome: function onCheckSome(rows) {
      return false;
    },
    onUncheckSome: function onUncheckSome(rows) {
      return false;
    },
    onLoadSuccess: function onLoadSuccess(data) {
      return false;
    },
    onLoadError: function onLoadError(status) {
      return false;
    },
    onColumnSwitch: function onColumnSwitch(field, checked) {
      return false;
    },
    onPageChange: function onPageChange(number, size) {
      return false;
    },
    onSearch: function onSearch(text) {
      return false;
    },
    onToggle: function onToggle(cardView) {
      return false;
    },
    onPreBody: function onPreBody(data) {
      return false;
    },
    onPostBody: function onPostBody() {
      return false;
    },
    onPostHeader: function onPostHeader() {
      return false;
    },
    onPostFooter: function onPostFooter() {
      return false;
    },
    onExpandRow: function onExpandRow(index, row, $detail) {
      return false;
    },
    onCollapseRow: function onCollapseRow(index, row) {
      return false;
    },
    onRefreshOptions: function onRefreshOptions(options) {
      return false;
    },
    onRefresh: function onRefresh(params) {
      return false;
    },
    onResetView: function onResetView() {
      return false;
    },
    onScrollBody: function onScrollBody() {
      return false;
    }
  };
  var EN = {
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
    formatSearch: function formatSearch() {
      return 'Search';
    },
    formatClearSearch: function formatClearSearch() {
      return 'Clear Search';
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
    }
  };
  var COLUMN_DEFAULTS = {
    field: undefined,
    title: undefined,
    titleTooltip: undefined,
    'class': undefined,
    width: undefined,
    widthUnit: 'px',
    rowspan: undefined,
    colspan: undefined,
    align: undefined,
    // left, right, center
    halign: undefined,
    // left, right, center
    falign: undefined,
    // left, right, center
    valign: undefined,
    // top, middle, bottom
    cellStyle: undefined,
    radio: false,
    checkbox: false,
    checkboxEnabled: true,
    clickToSelect: true,
    showSelectTitle: false,
    sortable: false,
    sortName: undefined,
    order: 'asc',
    // asc, desc
    sorter: undefined,
    visible: true,
    switchable: true,
    cardVisible: true,
    searchable: true,
    formatter: undefined,
    footerFormatter: undefined,
    detailFormatter: undefined,
    searchFormatter: true,
    escape: false,
    events: undefined
  };
  var METHODS = ['getOptions', 'refreshOptions', 'getData', 'getSelections', 'getAllSelections', 'load', 'append', 'prepend', 'remove', 'removeAll', 'insertRow', 'updateRow', 'getRowByUniqueId', 'updateByUniqueId', 'removeByUniqueId', 'updateCell', 'updateCellByUniqueId', 'showRow', 'hideRow', 'getHiddenRows', 'showColumn', 'hideColumn', 'getVisibleColumns', 'getHiddenColumns', 'showAllColumns', 'hideAllColumns', 'mergeCells', 'checkAll', 'uncheckAll', 'checkInvert', 'check', 'uncheck', 'checkBy', 'uncheckBy', 'refresh', 'destroy', 'resetView', 'resetWidth', 'showLoading', 'hideLoading', 'togglePagination', 'toggleFullscreen', 'toggleView', 'resetSearch', 'filterBy', 'scrollTo', 'getScrollPosition', 'selectPage', 'prevPage', 'nextPage', 'toggleDetailView', 'expandRow', 'collapseRow', 'expandAllRows', 'collapseAllRows', 'updateColumnTitle', 'updateFormatText'];
  var EVENTS = {
    'all.bs.table': 'onAll',
    'click-row.bs.table': 'onClickRow',
    'dbl-click-row.bs.table': 'onDblClickRow',
    'click-cell.bs.table': 'onClickCell',
    'dbl-click-cell.bs.table': 'onDblClickCell',
    'sort.bs.table': 'onSort',
    'check.bs.table': 'onCheck',
    'uncheck.bs.table': 'onUncheck',
    'check-all.bs.table': 'onCheckAll',
    'uncheck-all.bs.table': 'onUncheckAll',
    'check-some.bs.table': 'onCheckSome',
    'uncheck-some.bs.table': 'onUncheckSome',
    'load-success.bs.table': 'onLoadSuccess',
    'load-error.bs.table': 'onLoadError',
    'column-switch.bs.table': 'onColumnSwitch',
    'page-change.bs.table': 'onPageChange',
    'search.bs.table': 'onSearch',
    'toggle.bs.table': 'onToggle',
    'pre-body.bs.table': 'onPreBody',
    'post-body.bs.table': 'onPostBody',
    'post-header.bs.table': 'onPostHeader',
    'post-footer.bs.table': 'onPostFooter',
    'expand-row.bs.table': 'onExpandRow',
    'collapse-row.bs.table': 'onCollapseRow',
    'refresh-options.bs.table': 'onRefreshOptions',
    'reset-view.bs.table': 'onResetView',
    'refresh.bs.table': 'onRefresh',
    'scroll-body.bs.table': 'onScrollBody'
  };
  Object.assign(DEFAULTS, EN);
  var Constants = {
    VERSION: VERSION,
    THEME: "bootstrap".concat(bootstrapVersion),
    CONSTANTS: CONSTANTS,
    DEFAULTS: DEFAULTS,
    COLUMN_DEFAULTS: COLUMN_DEFAULTS,
    METHODS: METHODS,
    EVENTS: EVENTS,
    LOCALES: {
      en: EN,
      'en-US': EN
    }
  };

  var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  _export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return objectKeys(toObject(it));
    }
  });

  var Utils = {
    // it only does '%s', and return '' when arguments are undefined
    sprintf: function sprintf(_str) {
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
    },
    isEmptyObject: function isEmptyObject() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.entries(obj).length === 0 && obj.constructor === Object;
    },
    isNumeric: function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    getFieldTitle: function getFieldTitle(list, value) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.field === value) {
            return item.title;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return '';
    },
    setFieldIndex: function setFieldIndex(columns) {
      var totalCol = 0;
      var flag = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = columns[0][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var column = _step2.value;
          totalCol += column.colspan || 1;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      for (var i = 0; i < columns.length; i++) {
        flag[i] = [];

        for (var j = 0; j < totalCol; j++) {
          flag[i][j] = false;
        }
      }

      for (var _i = 0; _i < columns.length; _i++) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = columns[_i][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var r = _step3.value;
            var rowspan = r.rowspan || 1;
            var colspan = r.colspan || 1;

            var index = flag[_i].indexOf(false);

            if (colspan === 1) {
              r.fieldIndex = index; // when field is undefined, use index instead

              if (typeof r.field === 'undefined') {
                r.field = index;
              }
            }

            for (var k = 0; k < rowspan; k++) {
              flag[_i + k][index] = true;
            }

            for (var _k = 0; _k < colspan; _k++) {
              flag[_i][index + _k] = true;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
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
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = names[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var f = _step4.value;
              func = func[f];
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
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

      if (!func && typeof name === 'string' && this.sprintf.apply(this, [name].concat(_toConsumableArray(args)))) {
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

      for (var _i2 = 0, _aKeys = aKeys; _i2 < _aKeys.length; _i2++) {
        var key = _aKeys[_i2];

        if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
          return false;
        }
      }

      return true;
    },
    escapeHTML: function escapeHTML(text) {
      if (typeof text === 'string') {
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/`/g, '&#x60;');
      }

      return text;
    },
    getRealDataAttr: function getRealDataAttr(dataAttr) {
      for (var _i3 = 0, _Object$entries = Object.entries(dataAttr); _i3 < _Object$entries.length; _i3++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
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
      var value = item;

      if (typeof field !== 'string' || item.hasOwnProperty(field)) {
        return escape ? this.escapeHTML(item[field]) : item[field];
      }

      var props = field.split('.');
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = props[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var p = _step5.value;
          value = value && value[p];
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return escape ? this.escapeHTML(value) : value;
    },
    isIEBrowser: function isIEBrowser() {
      return navigator.userAgent.includes('MSIE ') || /Trident.*rv:11\./.test(navigator.userAgent);
    },
    findIndex: function findIndex(items, item) {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = items[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var it = _step6.value;

          if (JSON.stringify(it) === JSON.stringify(item)) {
            return items.indexOf(it);
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return -1;
    },
    trToData: function trToData(columns, $els) {
      var _this = this;

      var data = [];
      var m = [];
      $els.each(function (y, el) {
        var row = {}; // save tr's id, class and data-* attributes

        row._id = $(el).attr('id');
        row._class = $(el).attr('class');
        row._data = _this.getRealDataAttr($(el).data());
        $(el).find('>td,>th').each(function (_x, el) {
          var cspan = +$(el).attr('colspan') || 1;
          var rspan = +$(el).attr('rowspan') || 1;
          var x = _x; // skip already occupied cells in current row

          for (; m[y] && m[y][x]; x++) {} // ignore
          // mark matrix elements occupied by current cell with true


          for (var tx = x; tx < x + cspan; tx++) {
            for (var ty = y; ty < y + rspan; ty++) {
              if (!m[ty]) {
                // fill missing rows
                m[ty] = [];
              }

              m[ty][tx] = true;
            }
          }

          var field = columns[x].field;
          row[field] = $(el).html().trim(); // save td's id, class and data-* attributes

          row["_".concat(field, "_id")] = $(el).attr('id');
          row["_".concat(field, "_class")] = $(el).attr('class');
          row["_".concat(field, "_rowspan")] = $(el).attr('rowspan');
          row["_".concat(field, "_colspan")] = $(el).attr('colspan');
          row["_".concat(field, "_title")] = $(el).attr('title');
          row["_".concat(field, "_data")] = _this.getRealDataAttr($(el).data());
        });
        data.push(row);
      });
      return data;
    },
    sort: function sort(a, b, order, sortStable) {
      if (a === undefined || a === null) {
        a = '';
      }

      if (b === undefined || b === null) {
        b = '';
      }

      if (sortStable && a === b) {
        a = a._position;
        b = b._position;
      } // If both values are numeric, do a numeric comparison


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

      if (a === b) {
        return 0;
      } // If value is not a string, convert to string


      if (typeof a !== 'string') {
        a = a.toString();
      }

      if (a.localeCompare(b) === -1) {
        return order * -1;
      }

      return order;
    }
  };

  var BLOCK_ROWS = 50;
  var CLUSTER_BLOCKS = 4;

  var VirtualScroll =
  /*#__PURE__*/
  function () {
    function VirtualScroll(options) {
      var _this = this;

      _classCallCheck(this, VirtualScroll);

      this.rows = options.rows;
      this.scrollEl = options.scrollEl;
      this.contentEl = options.contentEl;
      this.callback = options.callback;
      this.cache = {};
      this.scrollTop = this.scrollEl.scrollTop;
      this.initDOM(this.rows);
      this.scrollEl.scrollTop = this.scrollTop;
      this.lastCluster = 0;

      var onScroll = function onScroll() {
        if (_this.lastCluster !== (_this.lastCluster = _this.getNum())) {
          _this.initDOM(_this.rows);

          _this.callback();
        }
      };

      this.scrollEl.addEventListener('scroll', onScroll, false);

      this.destroy = function () {
        _this.contentEl.innerHtml = '';

        _this.scrollEl.removeEventListener('scroll', onScroll, false);
      };
    }

    _createClass(VirtualScroll, [{
      key: "initDOM",
      value: function initDOM(rows) {
        if (typeof this.clusterHeight === 'undefined') {
          this.cache.data = this.contentEl.innerHTML = rows[0] + rows[0] + rows[0];
          this.getRowsHeight(rows);
        }

        var data = this.initData(rows, this.getNum());
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

          this.contentEl.innerHTML = html.join('');
        } else if (bottomOffsetChanged) {
          this.contentEl.lastChild.style.height = "".concat(data.bottomOffset, "px");
        }
      }
    }, {
      key: "getRowsHeight",
      value: function getRowsHeight() {
        var nodes = this.contentEl.children;
        var node = nodes[Math.floor(nodes.length / 2)];
        this.itemHeight = node.offsetHeight;
        this.blockHeight = this.itemHeight * BLOCK_ROWS;
        this.clusterRows = BLOCK_ROWS * CLUSTER_BLOCKS;
        this.clusterHeight = this.blockHeight * CLUSTER_BLOCKS;
      }
    }, {
      key: "getNum",
      value: function getNum() {
        this.scrollTop = this.scrollEl.scrollTop;
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

    return VirtualScroll;
  }();

  var BootstrapTable =
  /*#__PURE__*/
  function () {
    function BootstrapTable(el, options) {
      _classCallCheck(this, BootstrapTable);

      this.options = options;
      this.$el = $(el);
      this.$el_ = this.$el.clone();
      this.timeoutId_ = 0;
      this.timeoutFooter_ = 0;
      this.init();
    }

    _createClass(BootstrapTable, [{
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
      key: "initConstants",
      value: function initConstants() {
        var o = this.options;
        this.constants = Constants.CONSTANTS;
        this.constants.theme = $.fn.bootstrapTable.theme;
        var buttonsPrefix = o.buttonsPrefix ? "".concat(o.buttonsPrefix, "-") : '';
        this.constants.buttonsClass = [o.buttonsPrefix, buttonsPrefix + o.buttonsClass, Utils.sprintf("".concat(buttonsPrefix, "%s"), o.iconSize)].join(' ').trim();
      }
    }, {
      key: "initLocale",
      value: function initLocale() {
        if (this.options.locale) {
          var locales = $.fn.bootstrapTable.locales;
          var parts = this.options.locale.split(/-|_/);
          parts[0] = parts[0].toLowerCase();

          if (parts[1]) {
            parts[1] = parts[1].toUpperCase();
          }

          if (locales[this.options.locale]) {
            $.extend(this.options, locales[this.options.locale]);
          } else if (locales[parts.join('-')]) {
            $.extend(this.options, locales[parts.join('-')]);
          } else if (locales[parts[0]]) {
            $.extend(this.options, locales[parts[0]]);
          }
        }
      }
    }, {
      key: "initContainer",
      value: function initContainer() {
        var topPagination = ['top', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination clearfix"></div>' : '';
        var bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination"></div>' : '';
        this.$container = $("\n      <div class=\"bootstrap-table ".concat(this.constants.theme, "\">\n      <div class=\"fixed-table-toolbar\"></div>\n      ").concat(topPagination, "\n      <div class=\"fixed-table-container\">\n      <div class=\"fixed-table-header\"><table></table></div>\n      <div class=\"fixed-table-body\">\n      <div class=\"fixed-table-loading\">\n      <span class=\"loading-wrap\">\n      <span class=\"loading-text\">").concat(this.options.formatLoadingMessage(), "</span>\n      <span class=\"animation-wrap\"><span class=\"animation-dot\"></span></span>\n      </span>\n      </div>\n      </div>\n      <div class=\"fixed-table-footer\"><table><thead><tr></tr></thead></table></div>\n      </div>\n      ").concat(bottomPagination, "\n      </div>\n    "));
        this.$container.insertAfter(this.$el);
        this.$tableContainer = this.$container.find('.fixed-table-container');
        this.$tableHeader = this.$container.find('.fixed-table-header');
        this.$tableBody = this.$container.find('.fixed-table-body');
        this.$tableLoading = this.$container.find('.fixed-table-loading');
        this.$tableFooter = this.$el.find('tfoot'); // checking if custom table-toolbar exists or not

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
      }
    }, {
      key: "initTable",
      value: function initTable() {
        var _this = this;

        var columns = [];
        var data = [];
        this.$header = this.$el.find('>thead');

        if (!this.$header.length) {
          this.$header = $("<thead class=\"".concat(this.options.theadClasses, "\"></thead>")).appendTo(this.$el);
        } else if (this.options.theadClasses) {
          this.$header.addClass(this.options.theadClasses);
        }

        this.$header.find('tr').each(function (i, el) {
          var column = [];
          $(el).find('th').each(function (i, el) {
            // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
            if (typeof $(el).data('field') !== 'undefined') {
              $(el).data('field', "".concat($(el).data('field')));
            }

            column.push($.extend({}, {
              title: $(el).html(),
              'class': $(el).attr('class'),
              titleTooltip: $(el).attr('title'),
              rowspan: $(el).attr('rowspan') ? +$(el).attr('rowspan') : undefined,
              colspan: $(el).attr('colspan') ? +$(el).attr('colspan') : undefined
            }, $(el).data()));
          });
          columns.push(column);
        });

        if (!Array.isArray(this.options.columns[0])) {
          this.options.columns = [this.options.columns];
        }

        this.options.columns = $.extend(true, [], columns, this.options.columns);
        this.columns = [];
        this.fieldsColumnsIndex = [];
        Utils.setFieldIndex(this.options.columns);
        this.options.columns.forEach(function (columns, i) {
          columns.forEach(function (_column, j) {
            var column = $.extend({}, BootstrapTable.COLUMN_DEFAULTS, _column);

            if (typeof column.fieldIndex !== 'undefined') {
              _this.columns[column.fieldIndex] = column;
              _this.fieldsColumnsIndex[column.field] = column.fieldIndex;
            }

            _this.options.columns[i][j] = column;
          });
        }); // if options.data is setting, do not process tbody and tfoot data

        if (!this.options.data.length) {
          this.options.data = Utils.trToData(this.columns, this.$el.find('>tbody>tr'));

          if (data.length) {
            this.fromHtml = true;
          }
        }

        this.footerData = Utils.trToData(this.columns, this.$el.find('>tfoot>tr'));

        if (this.footerData) {
          this.$el.find('tfoot').html('<tr></tr>');
        }

        if (!this.options.showFooter || this.options.cardView) {
          this.$tableFooter.hide();
        } else {
          this.$tableFooter.show();
        }
      }
    }, {
      key: "initHeader",
      value: function initHeader() {
        var _this2 = this;

        var visibleColumns = {};
        var html = [];
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
        this.options.columns.forEach(function (columns, i) {
          html.push('<tr>');

          if (i === 0 && !_this2.options.cardView && _this2.options.detailView && _this2.options.detailViewIcon) {
            html.push("<th class=\"detail\" rowspan=\"".concat(_this2.options.columns.length, "\">\n          <div class=\"fht-cell\"></div>\n          </th>\n        "));
          }

          columns.forEach(function (column, j) {
            var class_ = Utils.sprintf(' class="%s"', column['class']);
            var unitWidth = column.widthUnit;
            var width = Number.parseFloat(column.width);
            var halign = Utils.sprintf('text-align: %s; ', column.halign ? column.halign : column.align);
            var align = Utils.sprintf('text-align: %s; ', column.align);
            var style = Utils.sprintf('vertical-align: %s; ', column.valign);
            style += Utils.sprintf('width: %s; ', (column.checkbox || column.radio) && !width ? !column.showSelectTitle ? '36px' : undefined : width ? width + unitWidth : undefined);

            if (typeof column.fieldIndex !== 'undefined') {
              _this2.header.fields[column.fieldIndex] = column.field;
              _this2.header.styles[column.fieldIndex] = align + style;
              _this2.header.classes[column.fieldIndex] = class_;
              _this2.header.formatters[column.fieldIndex] = column.formatter;
              _this2.header.detailFormatters[column.fieldIndex] = column.detailFormatter;
              _this2.header.events[column.fieldIndex] = column.events;
              _this2.header.sorters[column.fieldIndex] = column.sorter;
              _this2.header.sortNames[column.fieldIndex] = column.sortName;
              _this2.header.cellStyles[column.fieldIndex] = column.cellStyle;
              _this2.header.searchables[column.fieldIndex] = column.searchable;

              if (!column.visible) {
                return;
              }

              if (_this2.options.cardView && !column.cardVisible) {
                return;
              }

              visibleColumns[column.field] = column;
            }

            html.push("<th".concat(Utils.sprintf(' title="%s"', column.titleTooltip)), column.checkbox || column.radio ? Utils.sprintf(' class="bs-checkbox %s"', column['class'] || '') : class_, Utils.sprintf(' style="%s"', halign + style), Utils.sprintf(' rowspan="%s"', column.rowspan), Utils.sprintf(' colspan="%s"', column.colspan), Utils.sprintf(' data-field="%s"', column.field), // If `column` is not the first element of `this.options.columns[0]`, then className 'data-not-first-th' should be added.
            j === 0 && i > 0 ? ' data-not-first-th' : '', '>');
            html.push(Utils.sprintf('<div class="th-inner %s">', _this2.options.sortable && column.sortable ? 'sortable both' : ''));
            var text = _this2.options.escape ? Utils.escapeHTML(column.title) : column.title;
            var title = text;

            if (column.checkbox) {
              text = '';

              if (!_this2.options.singleSelect && _this2.options.checkboxHeader) {
                text = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>';
              }

              _this2.header.stateField = column.field;
            }

            if (column.radio) {
              text = '';
              _this2.header.stateField = column.field;
              _this2.options.singleSelect = true;
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
          html.push('</tr>');
        });
        this.$header.html(html.join(''));
        this.$header.find('th[data-field]').each(function (i, el) {
          $(el).data(visibleColumns[$(el).data('field')]);
        });
        this.$container.off('click', '.th-inner').on('click', '.th-inner', function (e) {
          var $this = $(e.currentTarget);

          if (_this2.options.detailView && !$this.parent().hasClass('bs-checkbox')) {
            if ($this.closest('.bootstrap-table')[0] !== _this2.$container[0]) {
              return false;
            }
          }

          if (_this2.options.sortable && $this.parent().data().sortable) {
            _this2.onSort(e);
          }
        });
        this.$header.children().children().off('keypress').on('keypress', function (e) {
          if (_this2.options.sortable && $(e.currentTarget).data().sortable) {
            var code = e.keyCode || e.which;

            if (code === 13) {
              // Enter keycode
              _this2.onSort(e);
            }
          }
        });
        var resizeEvent = "resize.bootstrap-table".concat(this.$el.attr('id') || '');
        $(window).off(resizeEvent);

        if (!this.options.showHeader || this.options.cardView) {
          this.$header.hide();
          this.$tableHeader.hide();
          this.$tableLoading.css('top', 0);
        } else {
          this.$header.show();
          this.$tableHeader.show();
          this.$tableLoading.css('top', this.$header.outerHeight() + 1); // Assign the correct sortable arrow

          this.getCaret();
          $(window).on(resizeEvent, function (e) {
            return _this2.resetWidth(e);
          });
        }

        this.$selectAll = this.$header.find('[name="btSelectAll"]');
        this.$selectAll.off('click').on('click', function (_ref) {
          var currentTarget = _ref.currentTarget;
          var checked = $(currentTarget).prop('checked');

          _this2[checked ? 'checkAll' : 'uncheckAll']();

          _this2.updateSelected();
        });
      }
    }, {
      key: "initData",
      value: function initData(data, type) {
        if (type === 'append') {
          this.options.data = this.options.data.concat(data);
        } else if (type === 'prepend') {
          this.options.data = [].concat(data).concat(this.options.data);
        } else {
          this.options.data = data || this.options.data;
        }

        this.data = this.options.data;

        if (this.options.sidePagination === 'server') {
          return;
        }

        this.initSort();
      }
    }, {
      key: "initSort",
      value: function initSort() {
        var _this3 = this;

        var name = this.options.sortName;
        var order = this.options.sortOrder === 'desc' ? -1 : 1;
        var index = this.header.fields.indexOf(this.options.sortName);
        var timeoutId = 0;

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
              if (_this3.header.sortNames[index]) {
                name = _this3.header.sortNames[index];
              }

              var aa = Utils.getItemField(a, name, _this3.options.escape);
              var bb = Utils.getItemField(b, name, _this3.options.escape);
              var value = Utils.calculateObjectValue(_this3.header, _this3.header.sorters[index], [aa, bb, a, b]);

              if (value !== undefined) {
                if (_this3.options.sortStable && value === 0) {
                  return order * (a._position - b._position);
                }

                return order * value;
              }

              return Utils.sort(aa, bb, order, _this3.options.sortStable);
            });
          }

          if (this.options.sortClass !== undefined) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
              _this3.$el.removeClass(_this3.options.sortClass);

              var index = _this3.$header.find("[data-field=\"".concat(_this3.options.sortName, "\"]")).index();

              _this3.$el.find("tr td:nth-child(".concat(index + 1, ")")).addClass(_this3.options.sortClass);
            }, 250);
          }
        }
      }
    }, {
      key: "onSort",
      value: function onSort(_ref2) {
        var type = _ref2.type,
            currentTarget = _ref2.currentTarget;
        var $this = type === 'keypress' ? $(currentTarget) : $(currentTarget).parent();
        var $this_ = this.$header.find('th').eq($this.index());
        this.$header.add(this.$header_).find('span.order').remove();

        if (this.options.sortName === $this.data('field')) {
          this.options.sortOrder = this.options.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          this.options.sortName = $this.data('field');

          if (this.options.rememberOrder) {
            this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc';
          } else {
            this.options.sortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].sortOrder || this.columns[this.fieldsColumnsIndex[$this.data('field')]].order;
          }
        }

        this.trigger('sort', this.options.sortName, this.options.sortOrder);
        $this.add($this_).data('order', this.options.sortOrder); // Assign the correct sortable arrow

        this.getCaret();

        if (this.options.sidePagination === 'server') {
          this.options.pageNumber = 1;
          this.initServer(this.options.silentSort);
          return;
        }

        this.initSort();
        this.initBody();
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        var _this4 = this;

        var o = this.options;
        var html = [];
        var timeoutId = 0;
        var $keepOpen;
        var $search;
        var switchableCount = 0;

        if (this.$toolbar.find('.bs-bars').children().length) {
          $('body').append($(o.toolbar));
        }

        this.$toolbar.html('');

        if (typeof o.toolbar === 'string' || _typeof(o.toolbar) === 'object') {
          $(Utils.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, o.toolbarAlign)).appendTo(this.$toolbar).append($(o.toolbar));
        } // showColumns, showToggle, showRefresh


        html = ["<div class=\"".concat(['columns', "columns-".concat(o.buttonsAlign), this.constants.classes.buttonsGroup, "".concat(this.constants.classes.pull, "-").concat(o.buttonsAlign)].join(' '), "\">")];

        if (typeof o.icons === 'string') {
          o.icons = Utils.calculateObjectValue(null, o.icons);
        }

        if (o.showPaginationSwitch) {
          html.push("<button class=\"".concat(this.constants.buttonsClass, "\" type=\"button\" name=\"paginationSwitch\"\n        aria-label=\"Pagination Switch\" title=\"").concat(o.formatPaginationSwitch(), "\">\n        ").concat(o.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.paginationSwitchDown) : '', "\n        ").concat(o.showButtonText ? o.formatPaginationSwitchUp() : '', "\n        </button>"));
        }

        if (o.showRefresh) {
          html.push("<button class=\"".concat(this.constants.buttonsClass, "\" type=\"button\" name=\"refresh\"\n        aria-label=\"Refresh\" title=\"").concat(o.formatRefresh(), "\">\n        ").concat(o.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.refresh) : '', "\n        ").concat(o.showButtonText ? o.formatRefresh() : '', "\n        </button>"));
        }

        if (o.showToggle) {
          html.push("<button class=\"".concat(this.constants.buttonsClass, "\" type=\"button\" name=\"toggle\"\n        aria-label=\"Toggle\" title=\"").concat(o.formatToggle(), "\">\n        ").concat(o.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.toggleOff) : '', "\n        ").concat(o.showButtonText ? o.formatToggleOn() : '', "\n        </button>"));
        }

        if (o.showFullscreen) {
          html.push("<button class=\"".concat(this.constants.buttonsClass, "\" type=\"button\" name=\"fullscreen\"\n        aria-label=\"Fullscreen\" title=\"").concat(o.formatFullscreen(), "\">\n        ").concat(o.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.fullscreen) : '', "\n        ").concat(o.showButtonText ? o.formatFullscreen() : '', "\n        </button>"));
        }

        if (o.showColumns) {
          html.push("<div class=\"keep-open ".concat(this.constants.classes.buttonsDropdown, "\" title=\"").concat(o.formatColumns(), "\">\n        <button class=\"").concat(this.constants.buttonsClass, " dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n        aria-label=\"Columns\" title=\"").concat(o.formatColumns(), "\">\n        ").concat(o.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.columns) : '', "\n        ").concat(o.showButtonText ? o.formatColumns() : '', "\n        ").concat(this.constants.html.dropdownCaret, "\n        </button>\n        ").concat(this.constants.html.toolbarDropdown[0]));

          if (o.showColumnsToggleAll) {
            var allFieldsVisible = this.getVisibleColumns().length === this.columns.length;
            html.push(Utils.sprintf(this.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>', allFieldsVisible ? 'checked="checked"' : '', o.formatColumnsToggleAll())));
            html.push(this.constants.html.toolbarDropdownSeperator);
          }

          this.columns.forEach(function (column, i) {
            if (column.radio || column.checkbox) {
              return;
            }

            if (o.cardView && !column.cardVisible) {
              return;
            }

            var checked = column.visible ? ' checked="checked"' : '';

            if (column.switchable) {
              html.push(Utils.sprintf(_this4.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="checkbox" data-field="%s" value="%s"%s> <span>%s</span>', column.field, i, checked, column.title)));
              switchableCount++;
            }
          });
          html.push(this.constants.html.toolbarDropdown[1], '</div>');
        }

        html.push('</div>'); // Fix #188: this.showToolbar is for extensions

        if (this.showToolbar || html.length > 2) {
          this.$toolbar.append(html.join(''));
        }

        if (o.showPaginationSwitch) {
          this.$toolbar.find('button[name="paginationSwitch"]').off('click').on('click', function () {
            return _this4.togglePagination();
          });
        }

        if (o.showFullscreen) {
          this.$toolbar.find('button[name="fullscreen"]').off('click').on('click', function () {
            return _this4.toggleFullscreen();
          });
        }

        if (o.showRefresh) {
          this.$toolbar.find('button[name="refresh"]').off('click').on('click', function () {
            return _this4.refresh();
          });
        }

        if (o.showToggle) {
          this.$toolbar.find('button[name="toggle"]').off('click').on('click', function () {
            _this4.toggleView();
          });
        }

        if (o.showColumns) {
          $keepOpen = this.$toolbar.find('.keep-open');
          var $checkboxes = $keepOpen.find('input:not(".toggle-all")');
          var $toggleAll = $keepOpen.find('input.toggle-all');

          if (switchableCount <= o.minimumCountColumns) {
            $keepOpen.find('input').prop('disabled', true);
          }

          $keepOpen.find('li, label').off('click').on('click', function (e) {
            e.stopImmediatePropagation();
          });
          $checkboxes.off('click').on('click', function (_ref3) {
            var currentTarget = _ref3.currentTarget;
            var $this = $(currentTarget);

            _this4._toggleColumn($this.val(), $this.prop('checked'), false);

            _this4.trigger('column-switch', $this.data('field'), $this.prop('checked'));

            $toggleAll.prop('checked', $checkboxes.filter(':checked').length === _this4.columns.length);
          });
          $toggleAll.off('click').on('click', function (_ref4) {
            var currentTarget = _ref4.currentTarget;

            _this4._toggleAllColumns($(currentTarget).prop('checked'));
          });
        }

        if (o.search) {
          html = [];
          var showSearchButton = Utils.sprintf(this.constants.html.searchButton, o.formatSearch(), o.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.search) : '', o.showButtonText ? o.formatSearch() : '');
          var showSearchClearButton = Utils.sprintf(this.constants.html.searchClearButton, o.formatClearSearch(), o.showButtonIcons ? Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.clearSearch) : '', o.showButtonText ? o.formatClearSearch() : '');
          var searchInputHtml = "<input class=\"".concat(this.constants.classes.input).concat(Utils.sprintf(' input-%s', o.iconSize), " search-input\" type=\"text\" placeholder=\"").concat(o.formatSearch(), "\">");
          var searchInputFinalHtml = searchInputHtml;

          if (o.showSearchButton || o.showSearchClearButton) {
            searchInputFinalHtml = Utils.sprintf(this.constants.html.inputGroup, searchInputHtml, (o.showSearchButton ? showSearchButton : '') + (o.showSearchClearButton ? showSearchClearButton : ''));
          }

          html.push(Utils.sprintf("\n        <div class=\"".concat(this.constants.classes.pull, "-").concat(o.searchAlign, " search ").concat(this.constants.classes.inputGroup, "\">\n          %s\n        </div>\n      "), searchInputFinalHtml));
          this.$toolbar.append(html.join(''));
          var $searchInput = this.$toolbar.find('.search input');
          $search = o.showSearchButton ? this.$toolbar.find('.search button[name=search]') : $searchInput;
          var eventTriggers = o.showSearchButton ? 'click' : 'keyup drop blur';
          $search.off(eventTriggers).on(eventTriggers, function (event) {
            if (o.searchOnEnterKey && event.keyCode !== 13) {
              return;
            }

            if ([37, 38, 39, 40].includes(event.keyCode)) {
              return;
            }

            clearTimeout(timeoutId); // doesn't matter if it's 0

            timeoutId = setTimeout(function () {
              _this4.onSearch(o.showSearchButton ? {
                currentTarget: $searchInput
              } : event);
            }, o.searchTimeOut);
          });

          if (o.showSearchClearButton) {
            this.$toolbar.find('.search button[name=clearSearch]').click(function () {
              _this4.resetSearch();

              _this4.onSearch({
                currentTarget: _this4.$toolbar.find('.search input')
              });
            });
          }

          if (Utils.isIEBrowser()) {
            $search.off('mouseup').on('mouseup', function (event) {
              clearTimeout(timeoutId); // doesn't matter if it's 0

              timeoutId = setTimeout(function () {
                _this4.onSearch(event);
              }, o.searchTimeOut);
            });
          }
        }
      }
    }, {
      key: "onSearch",
      value: function onSearch() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            currentTarget = _ref5.currentTarget,
            firedByInitSearchText = _ref5.firedByInitSearchText;

        var overwriteSearchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (currentTarget !== undefined && overwriteSearchText) {
          var text = $(currentTarget).val().trim();

          if (this.options.trimOnSearch && $(currentTarget).val() !== text) {
            $(currentTarget).val(text);
          }

          if (this.searchText === text) {
            return;
          }

          if ($(currentTarget).hasClass('search-input')) {
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
      }
    }, {
      key: "initSearch",
      value: function initSearch() {
        var _this5 = this;

        this.filterOptions = this.filterOptions || this.options.filterOptions;

        if (this.options.sidePagination !== 'server') {
          if (this.options.customSearch) {
            this.data = Utils.calculateObjectValue(this.options, this.options.customSearch, [this.options.data, this.searchText]);
            return;
          }

          var s = this.searchText && (this.options.escape ? Utils.escapeHTML(this.searchText) : this.searchText).toLowerCase();
          var f = Utils.isEmptyObject(this.filterColumns) ? null : this.filterColumns; // Check filter

          if (typeof this.filterOptions.filterAlgorithm === 'function') {
            this.data = this.options.data.filter(function (item, i) {
              return _this5.filterOptions.filterAlgorithm.apply(null, [item, f]);
            });
          } else if (typeof this.filterOptions.filterAlgorithm === 'string') {
            this.data = f ? this.options.data.filter(function (item, i) {
              var filterAlgorithm = _this5.filterOptions.filterAlgorithm;

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
            }) : this.options.data;
          }

          var visibleFields = this.getVisibleFields();
          this.data = s ? this.data.filter(function (item, i) {
            for (var j = 0; j < _this5.header.fields.length; j++) {
              if (!_this5.header.searchables[j] || _this5.options.visibleSearch && visibleFields.indexOf(_this5.header.fields[j]) === -1) {
                continue;
              }

              var key = Utils.isNumeric(_this5.header.fields[j]) ? parseInt(_this5.header.fields[j], 10) : _this5.header.fields[j];
              var column = _this5.columns[_this5.fieldsColumnsIndex[key]];
              var value = void 0;

              if (typeof key === 'string') {
                value = item;
                var props = key.split('.');

                for (var _i = 0; _i < props.length; _i++) {
                  if (value[props[_i]] !== null) {
                    value = value[props[_i]];
                  }
                }
              } else {
                value = item[key];
              } // Fix #142: respect searchFormatter boolean


              if (column && column.searchFormatter) {
                value = Utils.calculateObjectValue(column, _this5.header.formatters[j], [value, item, i, column.field], value);
              }

              if (typeof value === 'string' || typeof value === 'number') {
                if (_this5.options.strictSearch) {
                  if ("".concat(value).toLowerCase() === s) {
                    return true;
                  }
                } else {
                  var largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm;
                  var matches = largerSmallerEqualsRegex.exec(s);
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

                      default:
                        break;
                    }
                  }

                  if (comparisonCheck || "".concat(value).toLowerCase().includes(s)) {
                    return true;
                  }
                }
              }
            }

            return false;
          }) : this.data;
        }
      }
    }, {
      key: "initPagination",
      value: function initPagination() {
        var _this6 = this;

        var o = this.options;

        if (!o.pagination) {
          this.$pagination.hide();
          return;
        }

        this.$pagination.show();
        var html = [];
        var $allSelected = false;
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
        var pageList = o.pageList;

        if (o.sidePagination !== 'server') {
          o.totalRows = data.length;
        }

        this.totalPages = 0;

        if (o.totalRows) {
          if (o.pageSize === o.formatAllRows()) {
            o.pageSize = o.totalRows;
            $allSelected = true;
          } else if (o.pageSize === o.totalRows) {
            // Fix #667 Table with pagination,
            // multiple pages and a search this matches to one page throws exception
            var pageLst = typeof o.pageList === 'string' ? o.pageList.replace('[', '').replace(']', '').replace(/ /g, '').toLowerCase().split(',') : o.pageList;

            if (pageLst.includes(o.formatAllRows().toLowerCase())) {
              $allSelected = true;
            }
          }

          this.totalPages = ~~((o.totalRows - 1) / o.pageSize) + 1;
          o.totalPages = this.totalPages;
        }

        if (this.totalPages > 0 && o.pageNumber > this.totalPages) {
          o.pageNumber = this.totalPages;
        }

        this.pageFrom = (o.pageNumber - 1) * o.pageSize + 1;
        this.pageTo = o.pageNumber * o.pageSize;

        if (this.pageTo > o.totalRows) {
          this.pageTo = o.totalRows;
        }

        if (this.options.pagination && this.options.sidePagination !== 'server') {
          this.options.totalNotFiltered = this.options.data.length;
        }

        if (!this.options.showExtendedPagination) {
          this.options.totalNotFiltered = undefined;
        }

        var paginationInfo = o.onlyInfoPagination ? o.formatDetailPagination(o.totalRows) : o.formatShowingRows(this.pageFrom, this.pageTo, o.totalRows, o.totalNotFiltered);
        html.push("<div class=\"".concat(this.constants.classes.pull, "-").concat(o.paginationDetailHAlign, " pagination-detail\">\n      <span class=\"pagination-info\">\n      ").concat(paginationInfo, "\n      </span>"));

        if (!o.onlyInfoPagination) {
          html.push('<span class="page-list">');
          var pageNumber = ["<span class=\"".concat(this.constants.classes.paginationDropdown, "\">\n        <button class=\"").concat(this.constants.buttonsClass, " dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n        <span class=\"page-size\">\n        ").concat($allSelected ? o.formatAllRows() : o.pageSize, "\n        </span>\n        ").concat(this.constants.html.dropdownCaret, "\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];

          if (typeof o.pageList === 'string') {
            var list = o.pageList.replace('[', '').replace(']', '').replace(/ /g, '').split(',');
            pageList = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;
                pageList.push(value.toLowerCase() === o.formatAllRows().toLowerCase() || ['all', 'unlimited'].includes(value.toLowerCase()) ? o.formatAllRows() : +value);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          pageList.forEach(function (page, i) {
            if (!o.smartDisplay || i === 0 || pageList[i - 1] < o.totalRows) {
              var active;

              if ($allSelected) {
                active = page === o.formatAllRows() ? _this6.constants.classes.dropdownActive : '';
              } else {
                active = page === o.pageSize ? _this6.constants.classes.dropdownActive : '';
              }

              pageNumber.push(Utils.sprintf(_this6.constants.html.pageDropdownItem, active, page));
            }
          });
          pageNumber.push("".concat(this.constants.html.pageDropdown[1], "</span>"));
          html.push(o.formatRecordsPerPage(pageNumber.join('')));
          html.push('</span></div>');
          html.push("<div class=\"".concat(this.constants.classes.pull, "-").concat(o.paginationHAlign, " pagination\">"), Utils.sprintf(this.constants.html.pagination[0], Utils.sprintf(' pagination-%s', o.iconSize)), Utils.sprintf(this.constants.html.paginationItem, ' page-pre', o.formatSRPaginationPreText(), o.paginationPreText));

          if (this.totalPages < o.paginationSuccessivelySize) {
            from = 1;
            to = this.totalPages;
          } else {
            from = o.pageNumber - o.paginationPagesBySide;
            to = from + o.paginationPagesBySide * 2;
          }

          if (o.pageNumber < o.paginationSuccessivelySize - 1) {
            to = o.paginationSuccessivelySize;
          }

          if (o.paginationSuccessivelySize > this.totalPages - from) {
            from = from - (o.paginationSuccessivelySize - (this.totalPages - from)) + 1;
          }

          if (from < 1) {
            from = 1;
          }

          if (to > this.totalPages) {
            to = this.totalPages;
          }

          var middleSize = Math.round(o.paginationPagesBySide / 2);

          var pageItem = function pageItem(i) {
            var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return Utils.sprintf(_this6.constants.html.paginationItem, classes + (i === o.pageNumber ? " ".concat(_this6.constants.classes.paginationActive) : ''), o.formatSRPaginationPageText(i), i);
          };

          if (from > 1) {
            var max = o.paginationPagesBySide;
            if (max >= from) max = from - 1;

            for (i = 1; i <= max; i++) {
              html.push(pageItem(i));
            }

            if (from - 1 === max + 1) {
              i = from - 1;
              html.push(pageItem(i));
            } else {
              if (from - 1 > max) {
                if (from - o.paginationPagesBySide * 2 > o.paginationPagesBySide && o.paginationUseIntermediate) {
                  i = Math.round((from - middleSize) / 2 + middleSize);
                  html.push(pageItem(i, ' page-intermediate'));
                } else {
                  html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-first-separator disabled', '', '...'));
                }
              }
            }
          }

          for (i = from; i <= to; i++) {
            html.push(pageItem(i));
          }

          if (this.totalPages > to) {
            var min = this.totalPages - (o.paginationPagesBySide - 1);
            if (to >= min) min = to + 1;

            if (to + 1 === min - 1) {
              i = to + 1;
              html.push(pageItem(i));
            } else {
              if (min > to + 1) {
                if (this.totalPages - to > o.paginationPagesBySide * 2 && o.paginationUseIntermediate) {
                  i = Math.round((this.totalPages - middleSize - to) / 2 + to);
                  html.push(pageItem(i, ' page-intermediate'));
                } else {
                  html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-last-separator disabled', '', '...'));
                }
              }
            }

            for (i = min; i <= this.totalPages; i++) {
              html.push(pageItem(i));
            }
          }

          html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-next', o.formatSRPaginationNextText(), o.paginationNextText));
          html.push(this.constants.html.pagination[1], '</div>');
        }

        this.$pagination.html(html.join(''));
        var dropupClass = ['bottom', 'both'].includes(o.paginationVAlign) ? " ".concat(this.constants.classes.dropup) : '';
        this.$pagination.last().find('.page-list > span').addClass(dropupClass);

        if (!o.onlyInfoPagination) {
          $pageList = this.$pagination.find('.page-list a');
          $pre = this.$pagination.find('.page-pre');
          $next = this.$pagination.find('.page-next');
          $number = this.$pagination.find('.page-item').not('.page-next, .page-pre, .page-last-separator, .page-first-separator');

          if (this.totalPages <= 1) {
            this.$pagination.find('div.pagination').hide();
          }

          if (o.smartDisplay) {
            if (pageList.length < 2 || o.totalRows <= pageList[0]) {
              this.$pagination.find('span.page-list').hide();
            }
          } // when data is empty, hide the pagination


          this.$pagination[this.getData().length ? 'show' : 'hide']();

          if (!o.paginationLoop) {
            if (o.pageNumber === 1) {
              $pre.addClass('disabled');
            }

            if (o.pageNumber === this.totalPages) {
              $next.addClass('disabled');
            }
          }

          if ($allSelected) {
            o.pageSize = o.formatAllRows();
          } // removed the events for last and first, onPageNumber executeds the same logic


          $pageList.off('click').on('click', function (e) {
            return _this6.onPageListChange(e);
          });
          $pre.off('click').on('click', function (e) {
            return _this6.onPagePre(e);
          });
          $next.off('click').on('click', function (e) {
            return _this6.onPageNext(e);
          });
          $number.off('click').on('click', function (e) {
            return _this6.onPageNumber(e);
          });
        }
      }
    }, {
      key: "updatePagination",
      value: function updatePagination(event) {
        // Fix #171: IE disabled button can be clicked bug.
        if (event && $(event.currentTarget).hasClass('disabled')) {
          return;
        }

        if (!this.options.maintainMetaData) {
          this.resetRows();
        }

        this.initPagination();

        if (this.options.sidePagination === 'server') {
          this.initServer();
        } else {
          this.initBody();
        }

        this.trigger('page-change', this.options.pageNumber, this.options.pageSize);
      }
    }, {
      key: "onPageListChange",
      value: function onPageListChange(event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        $this.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive);
        this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +$this.text();
        this.$toolbar.find('.page-size').text(this.options.pageSize);
        this.updatePagination(event);
        return false;
      }
    }, {
      key: "onPagePre",
      value: function onPagePre(event) {
        event.preventDefault();

        if (this.options.pageNumber - 1 === 0) {
          this.options.pageNumber = this.options.totalPages;
        } else {
          this.options.pageNumber--;
        }

        this.updatePagination(event);
        return false;
      }
    }, {
      key: "onPageNext",
      value: function onPageNext(event) {
        event.preventDefault();

        if (this.options.pageNumber + 1 > this.options.totalPages) {
          this.options.pageNumber = 1;
        } else {
          this.options.pageNumber++;
        }

        this.updatePagination(event);
        return false;
      }
    }, {
      key: "onPageNumber",
      value: function onPageNumber(event) {
        event.preventDefault();

        if (this.options.pageNumber === +$(event.currentTarget).text()) {
          return;
        }

        this.options.pageNumber = +$(event.currentTarget).text();
        this.updatePagination(event);
        return false;
      }
    }, {
      key: "initRow",
      value: function initRow(item, i, data, trFragments) {
        var _this7 = this;

        var html = [];
        var style = {};
        var csses = [];
        var data_ = '';
        var attributes = {};
        var htmlAttributes = [];

        if (Utils.findIndex(this.hiddenRows, item) > -1) {
          return;
        }

        style = Utils.calculateObjectValue(this.options, this.options.rowStyle, [item, i], style);

        if (style && style.css) {
          for (var _i2 = 0, _Object$entries = Object.entries(style.css); _i2 < _Object$entries.length; _i2++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            csses.push("".concat(key, ": ").concat(value));
          }
        }

        attributes = Utils.calculateObjectValue(this.options, this.options.rowAttributes, [item, i], attributes);

        if (attributes) {
          for (var _i3 = 0, _Object$entries2 = Object.entries(attributes); _i3 < _Object$entries2.length; _i3++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                key = _Object$entries2$_i[0],
                value = _Object$entries2$_i[1];

            htmlAttributes.push("".concat(key, "=\"").concat(Utils.escapeHTML(value), "\""));
          }
        }

        if (item._data && !Utils.isEmptyObject(item._data)) {
          for (var _i4 = 0, _Object$entries3 = Object.entries(item._data); _i4 < _Object$entries3.length; _i4++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i4], 2),
                k = _Object$entries3$_i[0],
                v = _Object$entries3$_i[1];

            // ignore data-index
            if (k === 'index') {
              return;
            }

            data_ += " data-".concat(k, "='").concat(_typeof(v) === 'object' ? JSON.stringify(v) : v, "'");
          }
        }

        html.push('<tr', Utils.sprintf(' %s', htmlAttributes.length ? htmlAttributes.join(' ') : undefined), Utils.sprintf(' id="%s"', Array.isArray(item) ? undefined : item._id), Utils.sprintf(' class="%s"', style.classes || (Array.isArray(item) ? undefined : item._class)), " data-index=\"".concat(i, "\""), Utils.sprintf(' data-uniqueid="%s"', Utils.getItemField(item, this.options.uniqueId, false)), Utils.sprintf(' data-has-detail-view="%s"', !this.options.cardView && this.options.detailView && Utils.calculateObjectValue(null, this.options.detailFilter, [i, item]) ? 'true' : undefined), Utils.sprintf('%s', data_), '>');

        if (this.options.cardView) {
          html.push("<td colspan=\"".concat(this.header.fields.length, "\"><div class=\"card-views\">"));
        }

        if (!this.options.cardView && this.options.detailView && this.options.detailViewIcon) {
          html.push('<td>');

          if (Utils.calculateObjectValue(null, this.options.detailFilter, [i, item])) {
            html.push("\n          <a class=\"detail-icon\" href=\"#\">\n          ".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen), "\n          </a>\n        "));
          }

          html.push('</td>');
        }

        this.header.fields.forEach(function (field, j) {
          var text = '';
          var value_ = Utils.getItemField(item, field, _this7.options.escape);
          var value = '';
          var type = '';
          var cellStyle = {};
          var id_ = '';
          var class_ = _this7.header.classes[j];
          var style_ = '';
          var data_ = '';
          var rowspan_ = '';
          var colspan_ = '';
          var title_ = '';
          var column = _this7.columns[j];

          if (_this7.fromHtml && typeof value_ === 'undefined') {
            if (!column.checkbox && !column.radio) {
              return;
            }
          }

          if (!column.visible) {
            return;
          }

          if (_this7.options.cardView && !column.cardVisible) {
            return;
          }

          if (column.escape) {
            value_ = Utils.escapeHTML(value_);
          }

          if (csses.concat([_this7.header.styles[j]]).length) {
            style_ = " style=\"".concat(csses.concat([_this7.header.styles[j]]).join('; '), "\"");
          } // handle td's id and class


          if (item["_".concat(field, "_id")]) {
            id_ = Utils.sprintf(' id="%s"', item["_".concat(field, "_id")]);
          }

          if (item["_".concat(field, "_class")]) {
            class_ = Utils.sprintf(' class="%s"', item["_".concat(field, "_class")]);
          }

          if (item["_".concat(field, "_rowspan")]) {
            rowspan_ = Utils.sprintf(' rowspan="%s"', item["_".concat(field, "_rowspan")]);
          }

          if (item["_".concat(field, "_colspan")]) {
            colspan_ = Utils.sprintf(' colspan="%s"', item["_".concat(field, "_colspan")]);
          }

          if (item["_".concat(field, "_title")]) {
            title_ = Utils.sprintf(' title="%s"', item["_".concat(field, "_title")]);
          }

          cellStyle = Utils.calculateObjectValue(_this7.header, _this7.header.cellStyles[j], [value_, item, i, field], cellStyle);

          if (cellStyle.classes) {
            class_ = " class=\"".concat(cellStyle.classes, "\"");
          }

          if (cellStyle.css) {
            var csses_ = [];

            for (var _i5 = 0, _Object$entries4 = Object.entries(cellStyle.css); _i5 < _Object$entries4.length; _i5++) {
              var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i5], 2),
                  key = _Object$entries4$_i[0],
                  _value = _Object$entries4$_i[1];

              csses_.push("".concat(key, ": ").concat(_value));
            }

            style_ = " style=\"".concat(csses_.concat(_this7.header.styles[j]).join('; '), "\"");
          }

          value = Utils.calculateObjectValue(column, _this7.header.formatters[j], [value_, item, i, field], value_);

          if (item["_".concat(field, "_data")] && !Utils.isEmptyObject(item["_".concat(field, "_data")])) {
            for (var _i6 = 0, _Object$entries5 = Object.entries(item["_".concat(field, "_data")]); _i6 < _Object$entries5.length; _i6++) {
              var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i6], 2),
                  k = _Object$entries5$_i[0],
                  v = _Object$entries5$_i[1];

              // ignore data-index
              if (k === 'index') {
                return;
              }

              data_ += " data-".concat(k, "=\"").concat(v, "\"");
            }
          }

          if (column.checkbox || column.radio) {
            type = column.checkbox ? 'checkbox' : type;
            type = column.radio ? 'radio' : type;
            var c = column['class'] || '';
            var isChecked = (value === true || value_ || value && value.checked) && value !== false;
            var isDisabled = !column.checkboxEnabled || value && value.disabled;
            text = [_this7.options.cardView ? "<div class=\"card-view ".concat(c, "\">") : "<td class=\"bs-checkbox ".concat(c, "\"").concat(class_).concat(style_, ">"), "<label>\n            <input\n            data-index=\"".concat(i, "\"\n            name=\"").concat(_this7.options.selectItemName, "\"\n            type=\"").concat(type, "\"\n            ").concat(Utils.sprintf('value="%s"', item[_this7.options.idField]), "\n            ").concat(Utils.sprintf('checked="%s"', isChecked ? 'checked' : undefined), "\n            ").concat(Utils.sprintf('disabled="%s"', isDisabled ? 'disabled' : undefined), " />\n            <span></span>\n            </label>"), _this7.header.formatters[j] && typeof value === 'string' ? value : '', _this7.options.cardView ? '</div>' : '</td>'].join('');
            item[_this7.header.stateField] = value === true || !!value_ || value && value.checked;
          } else {
            value = typeof value === 'undefined' || value === null ? _this7.options.undefinedText : value;

            if (_this7.options.cardView) {
              var cardTitle = _this7.options.showHeader ? "<span class=\"card-view-title\"".concat(style_, ">").concat(Utils.getFieldTitle(_this7.columns, field), "</span>") : '';
              text = "<div class=\"card-view\">".concat(cardTitle, "<span class=\"card-view-value\">").concat(value, "</span></div>");

              if (_this7.options.smartDisplay && value === '') {
                text = '<div class="card-view"></div>';
              }
            } else {
              text = "<td".concat(id_).concat(class_).concat(style_).concat(data_).concat(rowspan_).concat(colspan_).concat(title_, ">").concat(value, "</td>");
            }
          }

          html.push(text);
        });

        if (this.options.cardView) {
          html.push('</div></td>');
        }

        html.push('</tr>');
        return html.join('');
      }
    }, {
      key: "initBody",
      value: function initBody(fixedScroll) {
        var _this8 = this;

        var data = this.getData();
        this.trigger('pre-body', data);
        this.$body = this.$el.find('>tbody');

        if (!this.$body.length) {
          this.$body = $('<tbody></tbody>').appendTo(this.$el);
        } // Fix #389 Bootstrap-table-flatJSON is not working


        if (!this.options.pagination || this.options.sidePagination === 'server') {
          this.pageFrom = 1;
          this.pageTo = data.length;
        }

        var rows = [];
        var trFragments = $(document.createDocumentFragment());
        var hasTr = false;

        for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
          var item = data[i];
          var tr = this.initRow(item, i, data, trFragments);
          hasTr = hasTr || !!tr;

          if (tr && typeof tr === 'string') {
            if (this.virtualScrollDisabled) {
              trFragments.append(tr);
            } else {
              rows.push(tr);
            }
          }
        } // show no records


        if (!hasTr) {
          this.$body.html("<tr class=\"no-records-found\">".concat(Utils.sprintf('<td colspan="%s">%s</td>', this.$header.find('th').length, this.options.formatNoMatches()), "</tr>"));
        } else {
          if (this.virtualScrollDisabled) {
            this.$body.html(trFragments);
          } else {
            if (this.virtualScroll) {
              this.virtualScroll.destroy();
            }

            this.virtualScroll = new VirtualScroll({
              rows: rows,
              scrollEl: this.$tableBody[0],
              contentEl: this.$body[0],
              callback: function callback() {
                _this8.fitHeader();
              }
            });
          }
        }

        if (!fixedScroll) {
          this.scrollTo(0);
        } // click to select by column


        this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', function (e) {
          var $td = $(e.currentTarget);
          var $tr = $td.parent();
          var $cardViewArr = $(e.target).parents('.card-views').children();
          var $cardViewTarget = $(e.target).parents('.card-view');
          var rowIndex = $tr.data('index');
          var item = _this8.data[rowIndex];
          var index = _this8.options.cardView ? $cardViewArr.index($cardViewTarget) : $td[0].cellIndex;

          var fields = _this8.getVisibleFields();

          var field = fields[_this8.options.detailView && !_this8.options.cardView ? index - 1 : index];
          var column = _this8.columns[_this8.fieldsColumnsIndex[field]];
          var value = Utils.getItemField(item, field, _this8.options.escape);

          if ($td.find('.detail-icon').length) {
            return;
          }

          _this8.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td);

          _this8.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field); // if click to select - then trigger the checkbox/radio click


          if (e.type === 'click' && _this8.options.clickToSelect && column.clickToSelect && !Utils.calculateObjectValue(_this8.options, _this8.options.ignoreClickToSelectOn, [e.target])) {
            var $selectItem = $tr.find(Utils.sprintf('[name="%s"]', _this8.options.selectItemName));

            if ($selectItem.length) {
              $selectItem[0].click();
            }
          }

          if (e.type === 'click' && _this8.options.detailViewByClick) {
            _this8.toggleDetailView(rowIndex, _this8.header.detailFormatters[index]);
          }
        }).off('mousedown').on('mousedown', function (e) {
          // https://github.com/jquery/jquery/issues/1741
          _this8.multipleSelectRowCtrlKey = e.ctrlKey || e.metaKey;
          _this8.multipleSelectRowShiftKey = e.shiftKey;
        });
        this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click', function (e) {
          e.preventDefault();

          _this8.toggleDetailView($(e.currentTarget).parent().parent().data('index'));

          return false;
        });
        this.$selectItem = this.$body.find(Utils.sprintf('[name="%s"]', this.options.selectItemName));
        this.$selectItem.off('click').on('click', function (e) {
          e.stopImmediatePropagation();
          var $this = $(e.currentTarget);

          _this8._toggleCheck($this.prop('checked'), $this.data('index'));
        });
        this.header.events.forEach(function (_events, i) {
          var events = _events;

          if (!events) {
            return;
          } // fix bug, if events is defined with namespace


          if (typeof events === 'string') {
            events = Utils.calculateObjectValue(null, events);
          }

          var field = _this8.header.fields[i];

          var fieldIndex = _this8.getVisibleFields().indexOf(field);

          if (fieldIndex === -1) {
            return;
          }

          if (_this8.options.detailView && !_this8.options.cardView) {
            fieldIndex += 1;
          }

          var _loop = function _loop() {
            var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i7], 2),
                key = _Object$entries6$_i[0],
                event = _Object$entries6$_i[1];

            _this8.$body.find('>tr:not(.no-records-found)').each(function (i, tr) {
              var $tr = $(tr);
              var $td = $tr.find(_this8.options.cardView ? '.card-view' : 'td').eq(fieldIndex);
              var index = key.indexOf(' ');
              var name = key.substring(0, index);
              var el = key.substring(index + 1);
              $td.find(el).off(name).on(name, function (e) {
                var index = $tr.data('index');
                var row = _this8.data[index];
                var value = row[field];
                event.apply(_this8, [e, value, row, index]);
              });
            });
          };

          for (var _i7 = 0, _Object$entries6 = Object.entries(events); _i7 < _Object$entries6.length; _i7++) {
            _loop();
          }
        });
        this.updateSelected();
        this.initFooter();
        this.resetView();

        if (this.options.sidePagination !== 'server') {
          this.options.totalRows = data.length;
        }

        this.trigger('post-body', data);
      }
    }, {
      key: "initServer",
      value: function initServer(silent, query, url) {
        var _this9 = this;

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

        if (!(url || this.options.url) && !this.options.ajax) {
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
            params.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize;

            if (params.limit === 0) {
              delete params.limit;
            }
          }
        }

        if (!Utils.isEmptyObject(this.filterColumnsPartial)) {
          params.filter = JSON.stringify(this.filterColumnsPartial, null);
        }

        data = Utils.calculateObjectValue(this.options, this.options.queryParams, [params], data);
        $.extend(data, query || {}); // false to stop request

        if (data === false) {
          return;
        }

        if (!silent) {
          this.showLoading();
        }

        var request = $.extend({}, Utils.calculateObjectValue(null, this.options.ajaxOptions), {
          type: this.options.method,
          url: url || this.options.url,
          data: this.options.contentType === 'application/json' && this.options.method === 'post' ? JSON.stringify(data) : data,
          cache: this.options.cache,
          contentType: this.options.contentType,
          dataType: this.options.dataType,
          success: function success(_res) {
            var res = Utils.calculateObjectValue(_this9.options, _this9.options.responseHandler, [_res], _res);

            _this9.load(res);

            _this9.trigger('load-success', res);

            if (!silent) {
              _this9.hideLoading();
            }
          },
          error: function error(jqXHR) {
            var data = [];

            if (_this9.options.sidePagination === 'server') {
              data = {};
              data[_this9.options.totalField] = 0;
              data[_this9.options.dataField] = [];
            }

            _this9.load(data);

            _this9.trigger('load-error', jqXHR.status, jqXHR);

            if (!silent) _this9.$tableLoading.hide();
          }
        });

        if (this.options.ajax) {
          Utils.calculateObjectValue(this, this.options.ajax, [request], null);
        } else {
          if (this._xhr && this._xhr.readyState !== 4) {
            this._xhr.abort();
          }

          this._xhr = $.ajax(request);
        }

        return data;
      }
    }, {
      key: "initSearchText",
      value: function initSearchText() {
        if (this.options.search) {
          this.searchText = '';

          if (this.options.searchText !== '') {
            var $search = this.$toolbar.find('.search input');
            $search.val(this.options.searchText);
            this.onSearch({
              currentTarget: $search,
              firedByInitSearchText: true
            });
          }
        }
      }
    }, {
      key: "getCaret",
      value: function getCaret() {
        var _this10 = this;

        this.$header.find('th').each(function (i, th) {
          $(th).find('.sortable').removeClass('desc asc').addClass($(th).data('field') === _this10.options.sortName ? _this10.options.sortOrder : 'both');
        });
      }
    }, {
      key: "updateSelected",
      value: function updateSelected() {
        var checkAll = this.$selectItem.filter(':enabled').length && this.$selectItem.filter(':enabled').length === this.$selectItem.filter(':enabled').filter(':checked').length;
        this.$selectAll.add(this.$selectAll_).prop('checked', checkAll);
        this.$selectItem.each(function (i, el) {
          $(el).closest('tr')[$(el).prop('checked') ? 'addClass' : 'removeClass']('selected');
        });
      }
    }, {
      key: "updateRows",
      value: function updateRows() {
        var _this11 = this;

        this.$selectItem.each(function (i, el) {
          _this11.data[$(el).data('index')][_this11.header.stateField] = $(el).prop('checked');
        });
      }
    }, {
      key: "resetRows",
      value: function resetRows() {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var row = _step2.value;
            this.$selectAll.prop('checked', false);
            this.$selectItem.prop('checked', false);

            if (this.header.stateField) {
              row[this.header.stateField] = false;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.initHiddenRows();
      }
    }, {
      key: "trigger",
      value: function trigger(_name) {
        var _this$options;

        var name = "".concat(_name, ".bs.table");

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        (_this$options = this.options)[BootstrapTable.EVENTS[name]].apply(_this$options, args);

        this.$el.trigger($.Event(name), args);
        this.options.onAll(name, args);
        this.$el.trigger($.Event('all.bs.table'), [name, args]);
      }
    }, {
      key: "resetHeader",
      value: function resetHeader() {
        var _this12 = this;

        // fix #61: the hidden table reset header bug.
        // fix bug: get $el.css('width') error sometime (height = 500)
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(function () {
          return _this12.fitHeader();
        }, this.$el.is(':hidden') ? 100 : 0);
      }
    }, {
      key: "fitHeader",
      value: function fitHeader() {
        var _this13 = this;

        if (this.$el.is(':hidden')) {
          this.timeoutId_ = setTimeout(function () {
            return _this13.fitHeader();
          }, 100);
          return;
        }

        var fixedBody = this.$tableBody.get(0);
        var scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? Utils.getScrollBarWidth() : 0;
        this.$el.css('margin-top', -this.$header.outerHeight());
        var focused = $(':focus');

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
        this.$tableHeader.css('margin-right', scrollWidth).find('table').css('width', this.$el.outerWidth()).html('').attr('class', this.$el.attr('class')).append(this.$header_);
        this.$tableLoading.css('width', this.$el.outerWidth());
        var focusedTemp = $('.focus-temp:visible:eq(0)');

        if (focusedTemp.length > 0) {
          focusedTemp.focus();
          this.$header.find('.focus-temp').removeClass('focus-temp');
        } // fix bug: $.data() is not working as expected after $.append()


        this.$header.find('th[data-field]').each(function (i, el) {
          _this13.$header_.find(Utils.sprintf('th[data-field="%s"]', $(el).data('field'))).data($(el).data());
        });
        var visibleFields = this.getVisibleFields();
        var $ths = this.$header_.find('th');
        var $tr = this.$body.find('>tr:not(.no-records-found,.virtual-scroll-top)').eq(0);

        while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
          $tr = $tr.next();
        }

        $tr.find('> *').each(function (i, el) {
          var $this = $(el);
          var index = i;

          if (_this13.options.detailView && _this13.options.detailViewIcon && !_this13.options.cardView) {
            if (i === 0) {
              var $thDetail = $ths.filter('.detail');

              var _zoomWidth = $thDetail.width() - $thDetail.find('.fht-cell').width();

              $thDetail.find('.fht-cell').width($this.innerWidth() - _zoomWidth);
            }

            index = i - 1;
          }

          if (index === -1) {
            return;
          }

          var $th = _this13.$header_.find(Utils.sprintf('th[data-field="%s"]', visibleFields[index]));

          if ($th.length > 1) {
            $th = $($ths[$this[0].cellIndex]);
          }

          var zoomWidth = $th.width() - $th.find('.fht-cell').width();
          $th.find('.fht-cell').width($this.innerWidth() - zoomWidth);
        });
        this.horizontalScroll();
        this.trigger('post-header');
      }
    }, {
      key: "initFooter",
      value: function initFooter() {
        if (!this.options.showFooter || this.options.cardView) {
          // do nothing
          return;
        }

        var data = this.getData();
        var html = [];

        if (!this.options.cardView && this.options.detailView && this.options.detailViewIcon) {
          html.push('<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>');
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.columns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var column = _step3.value;
            var falign = '';
            var valign = '';
            var csses = [];
            var style = {};
            var class_ = Utils.sprintf(' class="%s"', column['class']);

            if (!column.visible) {
              continue;
            }

            if (this.options.cardView && !column.cardVisible) {
              return;
            }

            falign = Utils.sprintf('text-align: %s; ', column.falign ? column.falign : column.align);
            valign = Utils.sprintf('vertical-align: %s; ', column.valign);
            style = Utils.calculateObjectValue(null, this.options.footerStyle, [column]);

            if (style && style.css) {
              for (var _i8 = 0, _Object$entries7 = Object.entries(style.css); _i8 < _Object$entries7.length; _i8++) {
                var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i8], 2),
                    key = _Object$entries7$_i[0],
                    value = _Object$entries7$_i[1];

                csses.push("".concat(key, ": ").concat(value));
              }
            }

            if (style && style.classes) {
              class_ = Utils.sprintf(' class="%s"', column['class'] ? [column['class'], style.classes].join(' ') : style.classes);
            }

            html.push('<th', class_, Utils.sprintf(' style="%s"', falign + valign + csses.concat().join('; ')), '>');
            html.push('<div class="th-inner">');
            html.push(Utils.calculateObjectValue(column, column.footerFormatter, [data], this.footerData[0] && this.footerData[0][column.field] || ''));
            html.push('</div>');
            html.push('<div class="fht-cell"></div>');
            html.push('</div>');
            html.push('</th>');
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        this.$tableFooter.find('tr').html(html.join(''));
        this.trigger('post-footer', this.$tableFooter);
      }
    }, {
      key: "fitFooter",
      value: function fitFooter() {
        var _this14 = this;

        if (this.$el.is(':hidden')) {
          setTimeout(function () {
            return _this14.fitFooter();
          }, 100);
          return;
        }

        var fixedBody = this.$tableBody.get(0);
        var scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? Utils.getScrollBarWidth() : 0;
        this.$tableFooter.css('margin-right', scrollWidth).find('table').css('width', this.$el.outerWidth()).attr('class', this.$el.attr('class'));
        var visibleFields = this.getVisibleFields();
        var $ths = this.$tableFooter.find('th');
        var $tr = this.$body.find('>tr:first-child:not(.no-records-found)');

        while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
          $tr = $tr.next();
        }

        $tr.find('> *').each(function (i, el) {
          var $this = $(el);
          var index = i;

          if (_this14.options.detailView && !_this14.options.cardView) {
            if (i === 0) {
              var $thDetail = $ths.filter('.detail');

              var _zoomWidth2 = $thDetail.width() - $thDetail.find('.fht-cell').width();

              $thDetail.find('.fht-cell').width($this.innerWidth() - _zoomWidth2);
            }

            index = i - 1;
          }

          if (index === -1) {
            return;
          }

          var $th = $ths.eq(i);
          var zoomWidth = $th.width() - $th.find('.fht-cell').width();
          $th.find('.fht-cell').width($this.innerWidth() - zoomWidth);
        });
        this.horizontalScroll();
      }
    }, {
      key: "horizontalScroll",
      value: function horizontalScroll() {
        var _this15 = this;

        // horizontal scroll event
        // TODO: it's probably better improving the layout than binding to scroll event
        this.trigger('scroll-body');
        this.$tableBody.off('scroll').on('scroll', function (_ref6) {
          var currentTarget = _ref6.currentTarget;

          if (_this15.options.showHeader && _this15.options.height) {
            _this15.$tableHeader.scrollLeft($(currentTarget).scrollLeft());
          }

          if (_this15.options.showFooter && !_this15.options.cardView) {
            _this15.$tableFooter.scrollLeft($(currentTarget).scrollLeft());
          }
        });
      }
    }, {
      key: "getVisibleFields",
      value: function getVisibleFields() {
        var visibleFields = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.header.fields[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var field = _step4.value;
            var column = this.columns[this.fieldsColumnsIndex[field]];

            if (!column.visible) {
              continue;
            }

            visibleFields.push(field);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        return visibleFields;
      }
    }, {
      key: "initHiddenRows",
      value: function initHiddenRows() {
        this.hiddenRows = [];
      } // PUBLIC FUNCTION DEFINITION
      // =======================

    }, {
      key: "getOptions",
      value: function getOptions() {
        // deep copy and remove data
        var options = JSON.parse(JSON.stringify(this.options));
        delete options.data;
        return options;
      }
    }, {
      key: "refreshOptions",
      value: function refreshOptions(options) {
        // If the objects are equivalent then avoid the call of destroy / init methods
        if (Utils.compareObjects(this.options, options, true)) {
          return;
        }

        this.options = $.extend(this.options, options);
        this.trigger('refresh-options', this.options);
        this.destroy();
        this.init();
      }
    }, {
      key: "getData",
      value: function getData(params) {
        var data = this.options.data;

        if (this.searchText || this.options.sortName || !Utils.isEmptyObject(this.filterColumns) || !Utils.isEmptyObject(this.filterColumnsPartial)) {
          data = this.data;
        }

        if (params && params.useCurrentPage) {
          data = data.slice(this.pageFrom - 1, this.pageTo);
        }

        if (params && !params.includeHiddenRows) {
          var hiddenRows = this.getHiddenRows();
          data = data.filter(function (row) {
            return Utils.findIndex(hiddenRows, row) === -1;
          });
        }

        return data;
      }
    }, {
      key: "getSelections",
      value: function getSelections() {
        var _this16 = this;

        // fix #2424: from html with checkbox
        return this.data.filter(function (row) {
          return row[_this16.header.stateField] === true;
        });
      }
    }, {
      key: "getAllSelections",
      value: function getAllSelections() {
        var _this17 = this;

        return this.options.data.filter(function (row) {
          return row[_this17.header.stateField] === true;
        });
      }
    }, {
      key: "load",
      value: function load(_data) {
        var fixedScroll = false;
        var data = _data; // #431: support pagination

        if (this.options.pagination && this.options.sidePagination === 'server') {
          this.options.totalRows = data[this.options.totalField];
        }

        if (this.options.pagination && this.options.sidePagination === 'server') {
          this.options.totalNotFiltered = data[this.options.totalNotFilteredField];
        }

        fixedScroll = data.fixedScroll;
        data = Array.isArray(data) ? data : data[this.options.dataField];
        this.initData(data);
        this.initSearch();
        this.initPagination();
        this.initBody(fixedScroll);
      }
    }, {
      key: "append",
      value: function append(data) {
        this.initData(data, 'append');
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "prepend",
      value: function prepend(data) {
        this.initData(data, 'prepend');
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "remove",
      value: function remove(params) {
        var len = this.options.data.length;
        var i;
        var row;

        if (!params.hasOwnProperty('field') || !params.hasOwnProperty('values')) {
          return;
        }

        for (i = len - 1; i >= 0; i--) {
          row = this.options.data[i];

          if (!row.hasOwnProperty(params.field)) {
            continue;
          }

          if (params.values.includes(row[params.field])) {
            this.options.data.splice(i, 1);

            if (this.options.sidePagination === 'server') {
              this.options.totalRows -= 1;
            }
          }
        }

        if (len === this.options.data.length) {
          return;
        }

        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        if (this.options.data.length > 0) {
          this.options.data.splice(0, this.options.data.length);
          this.initSearch();
          this.initPagination();
          this.initBody(true);
        }
      }
    }, {
      key: "insertRow",
      value: function insertRow(params) {
        if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
          return;
        }

        this.options.data.splice(params.index, 0, params.row);
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "updateRow",
      value: function updateRow(params) {
        var allParams = Array.isArray(params) ? params : [params];
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = allParams[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _params = _step5.value;

            if (!_params.hasOwnProperty('index') || !_params.hasOwnProperty('row')) {
              continue;
            }

            $.extend(this.options.data[_params.index], _params.row);

            if (_params.hasOwnProperty('replace') && _params.replace) {
              this.options.data[_params.index] = _params.row;
            } else {
              $.extend(this.options.data[_params.index], _params.row);
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "getRowByUniqueId",
      value: function getRowByUniqueId(_id) {
        var uniqueId = this.options.uniqueId;
        var len = this.options.data.length;
        var id = _id;
        var dataRow = null;
        var i;
        var row;
        var rowUniqueId;

        for (i = len - 1; i >= 0; i--) {
          row = this.options.data[i];

          if (row.hasOwnProperty(uniqueId)) {
            // uniqueId is a column
            rowUniqueId = row[uniqueId];
          } else if (row._data && row._data.hasOwnProperty(uniqueId)) {
            // uniqueId is a row data property
            rowUniqueId = row._data[uniqueId];
          } else {
            continue;
          }

          if (typeof rowUniqueId === 'string') {
            id = id.toString();
          } else if (typeof rowUniqueId === 'number') {
            if (Number(rowUniqueId) === rowUniqueId && rowUniqueId % 1 === 0) {
              id = parseInt(id);
            } else if (rowUniqueId === Number(rowUniqueId) && rowUniqueId !== 0) {
              id = parseFloat(id);
            }
          }

          if (rowUniqueId === id) {
            dataRow = row;
            break;
          }
        }

        return dataRow;
      }
    }, {
      key: "updateByUniqueId",
      value: function updateByUniqueId(params) {
        var allParams = Array.isArray(params) ? params : [params];
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = allParams[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _params2 = _step6.value;

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
              $.extend(this.options.data[rowId], _params2.row);
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "removeByUniqueId",
      value: function removeByUniqueId(id) {
        var len = this.options.data.length;
        var row = this.getRowByUniqueId(id);

        if (row) {
          this.options.data.splice(this.options.data.indexOf(row), 1);
        }

        if (len === this.options.data.length) {
          return;
        }

        this.initSearch();
        this.initPagination();
        this.initBody(true);
      }
    }, {
      key: "updateCell",
      value: function updateCell(params) {
        if (!params.hasOwnProperty('index') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
          return;
        }

        this.data[params.index][params.field] = params.value;

        if (params.reinit === false) {
          return;
        }

        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "updateCellByUniqueId",
      value: function updateCellByUniqueId(params) {
        var _this18 = this;

        if (!params.hasOwnProperty('id') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
          return;
        }

        var allParams = Array.isArray(params) ? params : [params];
        allParams.forEach(function (_ref7) {
          var id = _ref7.id,
              field = _ref7.field,
              value = _ref7.value;

          var rowId = _this18.options.data.indexOf(_this18.getRowByUniqueId(id));

          if (rowId === -1) {
            return;
          }

          _this18.data[rowId][field] = value;
        });

        if (params.reinit === false) {
          return;
        }

        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "showRow",
      value: function showRow(params) {
        this._toggleRow(params, true);
      }
    }, {
      key: "hideRow",
      value: function hideRow(params) {
        this._toggleRow(params, false);
      }
    }, {
      key: "_toggleRow",
      value: function _toggleRow(params, visible) {
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

        if (visible) {
          this.updatePagination();
        } else {
          this.initBody(true);
          this.initPagination();
        }
      }
    }, {
      key: "getHiddenRows",
      value: function getHiddenRows(show) {
        if (show) {
          this.initHiddenRows();
          this.initBody(true);
          return;
        }

        var data = this.getData();
        var rows = [];
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = data[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var row = _step7.value;

            if (this.hiddenRows.includes(row)) {
              rows.push(row);
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        this.hiddenRows = rows;
        return rows;
      }
    }, {
      key: "showColumn",
      value: function showColumn(field) {
        var _this19 = this;

        var fields = Array.isArray(field) ? field : [field];
        fields.forEach(function (field) {
          _this19._toggleColumn(_this19.fieldsColumnsIndex[field], true, true);
        });
      }
    }, {
      key: "hideColumn",
      value: function hideColumn(field) {
        var _this20 = this;

        var fields = Array.isArray(field) ? field : [field];
        fields.forEach(function (field) {
          _this20._toggleColumn(_this20.fieldsColumnsIndex[field], false, true);
        });
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn(index, checked, needUpdate) {
        if (index === -1 || this.columns[index].visible === checked) {
          return;
        }

        this.columns[index].visible = checked;
        this.initHeader();
        this.initSearch();
        this.initPagination();
        this.initBody();

        if (this.options.showColumns) {
          var $items = this.$toolbar.find('.keep-open input').prop('disabled', false);

          if (needUpdate) {
            $items.filter(Utils.sprintf('[value="%s"]', index)).prop('checked', checked);
          }

          if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
            $items.filter(':checked').prop('disabled', true);
          }
        }
      }
    }, {
      key: "getVisibleColumns",
      value: function getVisibleColumns() {
        return this.columns.filter(function (_ref8) {
          var visible = _ref8.visible;
          return visible;
        });
      }
    }, {
      key: "getHiddenColumns",
      value: function getHiddenColumns() {
        return this.columns.filter(function (_ref9) {
          var visible = _ref9.visible;
          return !visible;
        });
      }
    }, {
      key: "showAllColumns",
      value: function showAllColumns() {
        this._toggleAllColumns(true);
      }
    }, {
      key: "hideAllColumns",
      value: function hideAllColumns() {
        this._toggleAllColumns(false);
      }
    }, {
      key: "_toggleAllColumns",
      value: function _toggleAllColumns(visible) {
        var _this21 = this;

        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = this.columns.slice().reverse()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var column = _step8.value;

            if (column.switchable) {
              if (!visible && this.options.showColumns && this.getVisibleColumns().length === this.options.minimumCountColumns) {
                continue;
              }

              column.visible = visible;
            }
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        this.initHeader();
        this.initSearch();
        this.initPagination();
        this.initBody();

        if (this.options.showColumns) {
          var $items = this.$toolbar.find('.keep-open input:not(".toggle-all")').prop('disabled', false);

          if (visible) {
            $items.prop('checked', visible);
          } else {
            $items.get().reverse().forEach(function (item) {
              if ($items.filter(':checked').length > _this21.options.minimumCountColumns) {
                $(item).prop('checked', visible);
              }
            });
          }

          if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
            $items.filter(':checked').prop('disabled', true);
          }
        }
      }
    }, {
      key: "mergeCells",
      value: function mergeCells(options) {
        var row = options.index;
        var col = this.getVisibleFields().indexOf(options.field);
        var rowspan = options.rowspan || 1;
        var colspan = options.colspan || 1;
        var i;
        var j;
        var $tr = this.$body.find('>tr');

        if (this.options.detailView && !this.options.cardView) {
          col += 1;
        }

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
      }
    }, {
      key: "checkAll",
      value: function checkAll() {
        this._toggleCheckAll(true);
      }
    }, {
      key: "uncheckAll",
      value: function uncheckAll() {
        this._toggleCheckAll(false);
      }
    }, {
      key: "_toggleCheckAll",
      value: function _toggleCheckAll(checked) {
        var rowsBefore = this.getSelections();
        this.$selectAll.add(this.$selectAll_).prop('checked', checked);
        this.$selectItem.filter(':enabled').prop('checked', checked);
        this.updateRows();
        var rowsAfter = this.getSelections();

        if (checked) {
          this.trigger('check-all', rowsAfter, rowsBefore);
          return;
        }

        this.trigger('uncheck-all', rowsAfter, rowsBefore);
      }
    }, {
      key: "checkInvert",
      value: function checkInvert() {
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
      }
    }, {
      key: "check",
      value: function check(index) {
        this._toggleCheck(true, index);
      }
    }, {
      key: "uncheck",
      value: function uncheck(index) {
        this._toggleCheck(false, index);
      }
    }, {
      key: "_toggleCheck",
      value: function _toggleCheck(checked, index) {
        var $el = this.$selectItem.filter("[data-index=\"".concat(index, "\"]"));
        var row = this.data[index];

        if ($el.is(':radio') || this.options.singleSelect || this.options.multipleSelectRow && !this.multipleSelectRowCtrlKey && !this.multipleSelectRowShiftKey) {
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = this.options.data[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var r = _step9.value;
              r[this.header.stateField] = false;
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          this.$selectItem.filter(':checked').not($el).prop('checked', false);
        }

        row[this.header.stateField] = checked;

        if (this.options.multipleSelectRow) {
          if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0) {
            var indexes = [this.multipleSelectRowLastSelectedIndex, index].sort();

            for (var i = indexes[0] + 1; i < indexes[1]; i++) {
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
      }
    }, {
      key: "checkBy",
      value: function checkBy(obj) {
        this._toggleCheckBy(true, obj);
      }
    }, {
      key: "uncheckBy",
      value: function uncheckBy(obj) {
        this._toggleCheckBy(false, obj);
      }
    }, {
      key: "_toggleCheckBy",
      value: function _toggleCheckBy(checked, obj) {
        var _this22 = this;

        if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
          return;
        }

        var rows = [];
        this.data.forEach(function (row, i) {
          if (!row.hasOwnProperty(obj.field)) {
            return false;
          }

          if (obj.values.includes(row[obj.field])) {
            var $el = _this22.$selectItem.filter(':enabled').filter(Utils.sprintf('[data-index="%s"]', i)).prop('checked', checked);

            row[_this22.header.stateField] = checked;
            rows.push(row);

            _this22.trigger(checked ? 'check' : 'uncheck', row, $el);
          }
        });
        this.updateSelected();
        this.trigger(checked ? 'check-some' : 'uncheck-some', rows);
      }
    }, {
      key: "refresh",
      value: function refresh(params) {
        if (params && params.url) {
          this.options.url = params.url;
        }

        if (params && params.pageNumber) {
          this.options.pageNumber = params.pageNumber;
        }

        if (params && params.pageSize) {
          this.options.pageSize = params.pageSize;
        }

        this.trigger('refresh', this.initServer(params && params.silent, params && params.query, params && params.url));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$el.insertBefore(this.$container);
        $(this.options.toolbar).insertBefore(this.$el);
        this.$container.next().remove();
        this.$container.remove();
        this.$el.html(this.$el_.html()).css('margin-top', '0').attr('class', this.$el_.attr('class') || ''); // reset the class
      }
    }, {
      key: "resetView",
      value: function resetView(params) {
        var padding = 0;

        if (params && params.height) {
          this.options.height = params.height;
        }

        this.$selectAll.prop('checked', this.$selectItem.length > 0 && this.$selectItem.length === this.$selectItem.filter(':checked').length);
        this.$tableContainer.toggleClass('has-card-view', this.options.cardView);

        if (!this.options.cardView && this.options.showHeader && this.options.height) {
          this.$tableHeader.show();
          this.resetHeader();
          padding += this.$header.outerHeight(true);
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

        if (this.options.height) {
          var toolbarHeight = this.$toolbar.outerHeight(true);
          var paginationHeight = this.$pagination.outerHeight(true);
          var height = this.options.height - toolbarHeight - paginationHeight;
          var tableHeight = this.$tableBody.find('table').outerHeight(true);
          this.$tableContainer.css('height', "".concat(height, "px"));
          this.$tableBorder && this.$tableBorder.css('height', "".concat(height - tableHeight - padding - 1, "px"));
        }

        if (this.options.cardView) {
          // remove the element css
          this.$el.css('margin-top', '0');
          this.$tableContainer.css('padding-bottom', '0');
          this.$tableFooter.hide();
        } else {
          // Assign the correct sortable arrow
          this.getCaret();
          this.$tableContainer.css('padding-bottom', "".concat(padding, "px"));
        }

        this.trigger('reset-view');
      }
    }, {
      key: "resetWidth",
      value: function resetWidth() {
        if (this.options.showHeader && this.options.height) {
          this.fitHeader();
        }

        if (this.options.showFooter && !this.options.cardView) {
          this.fitFooter();
        }
      }
    }, {
      key: "showLoading",
      value: function showLoading() {
        this.$tableLoading.css('display', 'flex');
      }
    }, {
      key: "hideLoading",
      value: function hideLoading() {
        this.$tableLoading.css('display', 'none');
      }
    }, {
      key: "togglePagination",
      value: function togglePagination() {
        this.options.pagination = !this.options.pagination;
        var icon = this.options.showButtonIcons ? this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp : '';
        var text = this.options.showButtonText ? this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown() : '';
        this.$toolbar.find('button[name="paginationSwitch"]').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon) + ' ' + text);
        this.updatePagination();
      }
    }, {
      key: "toggleFullscreen",
      value: function toggleFullscreen() {
        this.$el.closest('.bootstrap-table').toggleClass('fullscreen');
        this.resetView();
      }
    }, {
      key: "toggleView",
      value: function toggleView() {
        this.options.cardView = !this.options.cardView;
        this.initHeader();
        var icon = this.options.showButtonIcons ? this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff : '';
        var text = this.options.showButtonText ? this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn() : '';
        this.$toolbar.find('button[name="toggle"]').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon) + ' ' + text);
        this.initBody();
        this.trigger('toggle', this.options.cardView);
      }
    }, {
      key: "resetSearch",
      value: function resetSearch(text) {
        var $search = this.$toolbar.find('.search input');
        $search.val(text || '');
        this.onSearch({
          currentTarget: $search
        });
      }
    }, {
      key: "filterBy",
      value: function filterBy(columns, options) {
        this.filterOptions = Utils.isEmptyObject(options) ? this.options.filterOptions : $.extend(this.options.filterOptions, options);
        this.filterColumns = Utils.isEmptyObject(columns) ? {} : columns;
        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(params) {
        if (typeof params === 'undefined') {
          return this.$tableBody.scrollTop();
        }

        var options = {
          unit: 'px',
          value: 0
        };

        if (_typeof(params) === 'object') {
          options = Object.assign(options, params);
        } else if (typeof params === 'string' && params === 'bottom') {
          options.value = this.$tableBody[0].scrollHeight;
        } else if (typeof params === 'string') {
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
      }
    }, {
      key: "getScrollPosition",
      value: function getScrollPosition() {
        return this.scrollTo();
      }
    }, {
      key: "selectPage",
      value: function selectPage(page) {
        if (page > 0 && page <= this.options.totalPages) {
          this.options.pageNumber = page;
          this.updatePagination();
        }
      }
    }, {
      key: "prevPage",
      value: function prevPage() {
        if (this.options.pageNumber > 1) {
          this.options.pageNumber--;
          this.updatePagination();
        }
      }
    }, {
      key: "nextPage",
      value: function nextPage() {
        if (this.options.pageNumber < this.options.totalPages) {
          this.options.pageNumber++;
          this.updatePagination();
        }
      }
    }, {
      key: "toggleDetailView",
      value: function toggleDetailView(index, _columnDetailFormatter) {
        var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"]', index));

        if ($tr.next().is('tr.detail-view')) {
          this.collapseRow(index);
        } else {
          this.expandRow(index, _columnDetailFormatter);
        }

        this.resetView();
      }
    }, {
      key: "expandRow",
      value: function expandRow(index, _columnDetailFormatter) {
        var row = this.data[index];
        var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"][data-has-detail-view]', index));

        if ($tr.next().is('tr.detail-view')) {
          return;
        }

        if (this.options.detailViewIcon) {
          $tr.find('a.detail-icon').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose));
        }

        $tr.after(Utils.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.children('td').length));
        var $element = $tr.next().find('td');
        var detailFormatter = _columnDetailFormatter || this.options.detailFormatter;
        var content = Utils.calculateObjectValue(this.options, detailFormatter, [index, row, $element], '');

        if ($element.length === 1) {
          $element.append(content);
        }

        this.trigger('expand-row', index, row, $element);
      }
    }, {
      key: "collapseRow",
      value: function collapseRow(index) {
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
      }
    }, {
      key: "expandAllRows",
      value: function expandAllRows() {
        var trs = this.$body.find('> tr[data-index][data-has-detail-view]');

        for (var i = 0; i < trs.length; i++) {
          this.expandRow($(trs[i]).data('index'));
        }
      }
    }, {
      key: "collapseAllRows",
      value: function collapseAllRows() {
        var trs = this.$body.find('> tr[data-index][data-has-detail-view]');

        for (var i = 0; i < trs.length; i++) {
          this.collapseRow($(trs[i]).data('index'));
        }
      }
    }, {
      key: "updateColumnTitle",
      value: function updateColumnTitle(params) {
        if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
          return;
        }

        this.columns[this.fieldsColumnsIndex[params.field]].title = this.options.escape ? Utils.escapeHTML(params.title) : params.title;

        if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
          var header = this.options.height !== undefined ? this.$tableHeader : this.$header;
          header.find('th[data-field]').each(function (i, el) {
            if ($(el).data('field') === params.field) {
              $($(el).find('.th-inner')[0]).text(params.title);
              return false;
            }
          });
        }
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

    return BootstrapTable;
  }();

  BootstrapTable.VERSION = Constants.VERSION;
  BootstrapTable.DEFAULTS = Constants.DEFAULTS;
  BootstrapTable.LOCALES = Constants.LOCALES;
  BootstrapTable.COLUMN_DEFAULTS = Constants.COLUMN_DEFAULTS;
  BootstrapTable.METHODS = Constants.METHODS;
  BootstrapTable.EVENTS = Constants.EVENTS; // BOOTSTRAP TABLE PLUGIN DEFINITION
  // =======================

  $.BootstrapTable = BootstrapTable;

  $.fn.bootstrapTable = function (option) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    var value;
    this.each(function (i, el) {
      var data = $(el).data('bootstrap.table');
      var options = $.extend({}, BootstrapTable.DEFAULTS, $(el).data(), _typeof(option) === 'object' && option);

      if (typeof option === 'string') {
        var _data2;

        if (!Constants.METHODS.includes(option)) {
          throw new Error("Unknown method: ".concat(option));
        }

        if (!data) {
          return;
        }

        value = (_data2 = data)[option].apply(_data2, args);

        if (option === 'destroy') {
          $(el).removeData('bootstrap.table');
        }
      }

      if (!data) {
        $(el).data('bootstrap.table', data = new $.BootstrapTable(el, options));
      }
    });
    return typeof value === 'undefined' ? this : value;
  };

  $.fn.bootstrapTable.Constructor = BootstrapTable;
  $.fn.bootstrapTable.theme = Constants.THEME;
  $.fn.bootstrapTable.VERSION = Constants.VERSION;
  $.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS;
  $.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS;
  $.fn.bootstrapTable.events = BootstrapTable.EVENTS;
  $.fn.bootstrapTable.locales = BootstrapTable.LOCALES;
  $.fn.bootstrapTable.methods = BootstrapTable.METHODS;
  $.fn.bootstrapTable.utils = Utils; // BOOTSTRAP TABLE INIT
  // =======================

  $(function () {
    $('[data-toggle="table"]').bootstrapTable();
  });

  return BootstrapTable;

}));
