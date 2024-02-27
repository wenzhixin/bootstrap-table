(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$a) { 'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$b =
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

  var fails$h = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$g = fails$h;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$g(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  });

  var fails$f = fails$h;

  var functionBindNative = !fails$f(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$2 = functionBindNative;

  var call$6 = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$6.bind(call$6) : function () {
    return call$6.apply(call$6, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
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
  var call$5 = FunctionPrototype$1.call;
  var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$5, call$5);

  var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$5.apply(fn, arguments);
    };
  };

  var uncurryThis$i = functionUncurryThis;

  var toString$6 = uncurryThis$i({}.toString);
  var stringSlice$1 = uncurryThis$i(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$1(toString$6(it), 8, -1);
  };

  var uncurryThis$h = functionUncurryThis;
  var fails$e = fails$h;
  var classof$5 = classofRaw$2;

  var $Object$3 = Object;
  var split = uncurryThis$h(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$e(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$3('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$5(it) === 'String' ? split(it, '') : $Object$3(it);
  } : $Object$3;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$2 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$1 = isNullOrUndefined$2;

  var $TypeError$8 = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$3 = function (it) {
    if (isNullOrUndefined$1(it)) throw new $TypeError$8("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$2 = indexedObject;
  var requireObjectCoercible$2 = requireObjectCoercible$3;

  var toIndexedObject$5 = function (it) {
    return IndexedObject$2(requireObjectCoercible$2(it));
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

  var isObject$8 = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$b(it);
  };

  var global$a = global$b;
  var isCallable$a = isCallable$c;

  var aFunction = function (argument) {
    return isCallable$a(argument) ? argument : undefined;
  };

  var getBuiltIn$4 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
  };

  var uncurryThis$g = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$g({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$9 = global$b;
  var userAgent$2 = engineUserAgent;

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
  if (!version && userAgent$2) {
    match = userAgent$2.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$2.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$2 = engineV8Version;
  var fails$d = fails$h;
  var global$8 = global$b;

  var $String$4 = global$8.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$d(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$4(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$3 = getBuiltIn$4;
  var isCallable$9 = isCallable$c;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$2 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$9($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$2(it));
  };

  var $String$3 = String;

  var tryToString$2 = function (argument) {
    try {
      return $String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$8 = isCallable$c;
  var tryToString$1 = tryToString$2;

  var $TypeError$7 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$3 = function (argument) {
    if (isCallable$8(argument)) return argument;
    throw new $TypeError$7(tryToString$1(argument) + ' is not a function');
  };

  var aCallable$2 = aCallable$3;
  var isNullOrUndefined = isNullOrUndefined$2;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$1 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable$2(func);
  };

  var call$4 = functionCall;
  var isCallable$7 = isCallable$c;
  var isObject$7 = isObject$8;

  var $TypeError$6 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$4(fn, input))) return val;
    if (isCallable$7(fn = input.valueOf) && !isObject$7(val = call$4(fn, input))) return val;
    if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$4(fn, input))) return val;
    throw new $TypeError$6("Can't convert object to primitive value");
  };

  var sharedStore = {exports: {}};

  var global$7 = global$b;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$3 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$3(global$7, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$7[key] = value;
    } return value;
  };

  var globalThis$1 = global$b;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = sharedStore.exports = globalThis$1[SHARED] || defineGlobalProperty$2(SHARED, {});

  (store$3.versions || (store$3.versions = [])).push({
    version: '3.36.0',
    mode: 'global',
    copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedStoreExports = sharedStore.exports;

  var store$2 = sharedStoreExports;

  var shared$3 = function (key, value) {
    return store$2[key] || (store$2[key] = value || {});
  };

  var requireObjectCoercible$1 = requireObjectCoercible$3;

  var $Object$1 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$6 = function (argument) {
    return $Object$1(requireObjectCoercible$1(argument));
  };

  var uncurryThis$f = functionUncurryThis;
  var toObject$5 = toObject$6;

  var hasOwnProperty = uncurryThis$f({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$5(it), key);
  };

  var uncurryThis$e = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$5 = uncurryThis$e(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
  };

  var global$6 = global$b;
  var shared$2 = shared$3;
  var hasOwn$7 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$2 = global$6.Symbol;
  var WellKnownSymbolsStore = shared$2('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

  var wellKnownSymbol$8 = function (name) {
    if (!hasOwn$7(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$7(Symbol$2, name)
        ? Symbol$2[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var call$3 = functionCall;
  var isObject$6 = isObject$8;
  var isSymbol$1 = isSymbol$2;
  var getMethod = getMethod$1;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$7 = wellKnownSymbol$8;

  var $TypeError$5 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$6(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$3(exoticToPrim, input, pref);
      if (!isObject$6(result) || isSymbol$1(result)) return result;
      throw new $TypeError$5("Can't convert object to primitive value");
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

  var global$5 = global$b;
  var isObject$5 = isObject$8;

  var document$1 = global$5.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$a = descriptors;
  var fails$c = fails$h;
  var createElement = documentCreateElement$1;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$a && !fails$c(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a !== 7;
  });

  var DESCRIPTORS$9 = descriptors;
  var call$2 = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;
  var toIndexedObject$4 = toIndexedObject$5;
  var toPropertyKey$1 = toPropertyKey$2;
  var hasOwn$6 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$4(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$6(O, P)) return createPropertyDescriptor$2(!call$2(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$8 = descriptors;
  var fails$b = fails$h;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$b(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var isObject$4 = isObject$8;

  var $String$2 = String;
  var $TypeError$4 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$6 = function (argument) {
    if (isObject$4(argument)) return argument;
    throw new $TypeError$4($String$2(argument) + ' is not an object');
  };

  var DESCRIPTORS$7 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$5 = anObject$6;
  var toPropertyKey = toPropertyKey$2;

  var $TypeError$3 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$7 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$5(O);
    P = toPropertyKey(P);
    anObject$5(Attributes);
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
    anObject$5(O);
    P = toPropertyKey(P);
    anObject$5(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$3('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$6 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;

  var createNonEnumerableProperty$2 = DESCRIPTORS$6 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltIn$2 = {exports: {}};

  var DESCRIPTORS$5 = descriptors;
  var hasOwn$5 = hasOwnProperty_1;

  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$5(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$d = functionUncurryThis;
  var isCallable$6 = isCallable$c;
  var store$1 = sharedStoreExports;

  var functionToString = uncurryThis$d(Function.toString);

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

  var shared$1 = shared$3;
  var uid = uid$2;

  var keys = shared$1('keys');

  var sharedKey$2 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$3 = global$b;
  var isObject$3 = isObject$8;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
  var hasOwn$4 = hasOwnProperty_1;
  var shared = sharedStoreExports;
  var sharedKey$1 = sharedKey$2;
  var hiddenKeys$3 = hiddenKeys$4;

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
      if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
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
    var STATE = sharedKey$1('state');
    hiddenKeys$3[STATE] = true;
    set = function (it, metadata) {
      if (hasOwn$4(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$1(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$4(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$4(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis$c = functionUncurryThis;
  var fails$a = fails$h;
  var isCallable$4 = isCallable$c;
  var hasOwn$3 = hasOwnProperty_1;
  var DESCRIPTORS$4 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var inspectSource$1 = inspectSource$2;
  var InternalStateModule = internalState;

  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String$1 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = Object.defineProperty;
  var stringSlice = uncurryThis$c(''.slice);
  var replace$1 = uncurryThis$c(''.replace);
  var join = uncurryThis$c([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$a(function () {
    return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
    if (stringSlice($String$1(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$1($String$1(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$3(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (DESCRIPTORS$4) defineProperty$2(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
      defineProperty$2(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$3(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$4) defineProperty$2(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn$3(state, 'source')) {
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
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$3 = function (O, key, value, options) {
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
      else definePropertyModule$3.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var objectGetOwnPropertyNames = {};

  var ceil = Math.ceil;
  var floor$1 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$1 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$3 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

  var max$2 = Math.max;
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$3 = function (index, length) {
    var integer = toIntegerOrInfinity$2(index);
    return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
  };

  var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

  var min$1 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$1 = function (argument) {
    var len = toIntegerOrInfinity$1(argument);
    return len > 0 ? min$1(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength = toLength$1;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$6 = function (obj) {
    return toLength(obj.length);
  };

  var toIndexedObject$3 = toIndexedObject$5;
  var toAbsoluteIndex$2 = toAbsoluteIndex$3;
  var lengthOfArrayLike$5 = lengthOfArrayLike$6;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$2 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$3($this);
      var length = lengthOfArrayLike$5(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex$2(fromIndex, length);
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
    includes: createMethod$2(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$2(false)
  };

  var uncurryThis$b = functionUncurryThis;
  var hasOwn$2 = hasOwnProperty_1;
  var toIndexedObject$2 = toIndexedObject$5;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$2 = uncurryThis$b([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$2(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$2(hiddenKeys$2, key) && hasOwn$2(O, key) && push$2(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$2(O, key = names[i++])) {
      ~indexOf(result, key) || push$2(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$1);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$2 = getBuiltIn$4;
  var uncurryThis$a = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$4 = anObject$6;

  var concat$1 = uncurryThis$a([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$4(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$1 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$1(target, key) && !(exceptions && hasOwn$1(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$9 = fails$h;
  var isCallable$2 = isCallable$c;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true
      : value === NATIVE ? false
      : isCallable$2(detection) ? fails$9(detection)
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
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty = createNonEnumerableProperty$2;
  var defineBuiltIn$2 = defineBuiltIn$3;
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
      target = global$2[TARGET] && global$2[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
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
      defineBuiltIn$2(target, key, sourceProperty, options);
    }
  };

  var classof$4 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$4 = Array.isArray || function isArray(argument) {
    return classof$4(argument) === 'Array';
  };

  var $TypeError$2 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$2 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$2('Maximum allowed index exceeded');
    return it;
  };

  var DESCRIPTORS$3 = descriptors;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$3;

  var createProperty$3 = function (object, key, value) {
    if (DESCRIPTORS$3) definePropertyModule$1.f(object, key, createPropertyDescriptor(0, value));
    else object[key] = value;
  };

  var wellKnownSymbol$6 = wellKnownSymbol$8;

  var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test$1) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$1 = isCallable$c;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$5 = wellKnownSymbol$8;

  var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

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
      : (result = classofRaw$1(O)) === 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$9 = functionUncurryThis;
  var fails$8 = fails$h;
  var isCallable = isCallable$c;
  var classof$2 = classof$3;
  var getBuiltIn$1 = getBuiltIn$4;
  var inspectSource = inspectSource$2;

  var noop = function () { /* empty */ };
  var construct = getBuiltIn$1('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec = uncurryThis$9(constructorRegExp.exec);
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
    switch (classof$2(argument)) {
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
  var isConstructor$2 = !construct || fails$8(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$3 = isArray$4;
  var isConstructor$1 = isConstructor$2;
  var isObject$2 = isObject$8;
  var wellKnownSymbol$4 = wellKnownSymbol$8;

  var SPECIES$2 = wellKnownSymbol$4('species');
  var $Array$1 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$3(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$1(C) && (C === $Array$1 || isArray$3(C.prototype))) C = undefined;
      else if (isObject$2(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$1 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$3 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var fails$7 = fails$h;
  var wellKnownSymbol$3 = wellKnownSymbol$8;
  var V8_VERSION$1 = engineV8Version;

  var SPECIES$1 = wellKnownSymbol$3('species');

  var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$7(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$1] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$9 = _export;
  var fails$6 = fails$h;
  var isArray$2 = isArray$4;
  var isObject$1 = isObject$8;
  var toObject$4 = toObject$6;
  var lengthOfArrayLike$4 = lengthOfArrayLike$6;
  var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
  var createProperty$2 = createProperty$3;
  var arraySpeciesCreate$2 = arraySpeciesCreate$3;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
  var wellKnownSymbol$2 = wellKnownSymbol$8;
  var V8_VERSION = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$2('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$6(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$1(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$2(O);
  };

  var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$9({ target: 'Array', proto: true, arity: 1, forced: FORCED$3 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$4(this);
      var A = arraySpeciesCreate$2(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$4(E);
          doesNotExceedSafeInteger$1(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$2(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger$1(n + 1);
          createProperty$2(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$8 = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$8(fn);
  };

  var uncurryThis$7 = functionUncurryThisClause;
  var aCallable$1 = aCallable$3;
  var NATIVE_BIND = functionBindNative;

  var bind$1 = uncurryThis$7(uncurryThis$7.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$1(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var bind = functionBindContext;
  var uncurryThis$6 = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$3 = toObject$6;
  var lengthOfArrayLike$3 = lengthOfArrayLike$6;
  var arraySpeciesCreate$1 = arraySpeciesCreate$3;

  var push$1 = uncurryThis$6([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE === 1;
    var IS_FILTER = TYPE === 2;
    var IS_SOME = TYPE === 3;
    var IS_EVERY = TYPE === 4;
    var IS_FIND_INDEX = TYPE === 6;
    var IS_FILTER_REJECT = TYPE === 7;
    var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$3($this);
      var self = IndexedObject$1(O);
      var length = lengthOfArrayLike$3(self);
      var boundFunction = bind(callbackfn, that);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$1;
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
            case 2: push$1(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$1(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$1(7)
  };

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$2 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$2 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule = objectDefineProperty;
  var anObject$3 = anObject$6;
  var toIndexedObject$1 = toIndexedObject$5;
  var objectKeys$1 = objectKeys$2;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$3(O);
    var props = toIndexedObject$1(Properties);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn = getBuiltIn$4;

  var html$1 = getBuiltIn('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject$2 = anObject$6;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement = documentCreateElement$1;
  var sharedKey = sharedKey$2;

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
    activeXDocument = null; // avoid memory leak
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
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$2(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol$1 = wellKnownSymbol$8;
  var create = objectCreate;
  var defineProperty$1 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$1('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] === undefined) {
    defineProperty$1(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $$8 = _export;
  var $find = arrayIteration.find;
  var addToUnscopables$1 = addToUnscopables$2;

  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-find -- testing
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$8({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1(FIND);

  var $$7 = _export;
  var $includes = arrayIncludes.includes;
  var fails$5 = fails$h;
  var addToUnscopables = addToUnscopables$2;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$5(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$7({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var fails$4 = fails$h;

  var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$4(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */
  var $$6 = _export;
  var uncurryThis$5 = functionUncurryThisClause;
  var $indexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

  var nativeIndexOf = uncurryThis$5([].indexOf);

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$2 = NEGATIVE_ZERO || !arrayMethodIsStrict$1('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$6({ target: 'Array', proto: true, forced: FORCED$2 }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf(this, searchElement, fromIndex) || 0
        : $indexOf(this, searchElement, fromIndex);
    }
  });

  var $$5 = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$5({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var uncurryThis$4 = functionUncurryThis;

  var arraySlice$1 = uncurryThis$4([].slice);

  var $$4 = _export;
  var isArray$1 = isArray$4;
  var isConstructor = isConstructor$2;
  var isObject = isObject$8;
  var toAbsoluteIndex$1 = toAbsoluteIndex$3;
  var lengthOfArrayLike$2 = lengthOfArrayLike$6;
  var toIndexedObject = toIndexedObject$5;
  var createProperty$1 = createProperty$3;
  var wellKnownSymbol = wellKnownSymbol$8;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;
  var nativeSlice = arraySlice$1;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');

  var SPECIES = wellKnownSymbol('species');
  var $Array = Array;
  var max$1 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$4({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike$2(O);
      var k = toAbsoluteIndex$1(start, length);
      var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$1(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor(Constructor) && (Constructor === $Array || isArray$1(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === $Array || Constructor === undefined) {
          return nativeSlice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? $Array : Constructor)(max$1(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var tryToString = tryToString$2;

  var $TypeError$1 = TypeError;

  var deletePropertyOrThrow$2 = function (O, P) {
    if (!delete O[P]) throw new $TypeError$1('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var classof$1 = classof$3;

  var $String = String;

  var toString$4 = function (argument) {
    if (classof$1(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };

  var arraySlice = arraySlice$1;

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

  var arraySort = sort;

  var userAgent$1 = engineUserAgent;

  var firefox = userAgent$1.match(/firefox\/(\d+)/i);

  var engineFfVersion = !!firefox && +firefox[1];

  var UA = engineUserAgent;

  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent = engineUserAgent;

  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

  var engineWebkitVersion = !!webkit && +webkit[1];

  var $$3 = _export;
  var uncurryThis$3 = functionUncurryThis;
  var aCallable = aCallable$3;
  var toObject$2 = toObject$6;
  var lengthOfArrayLike$1 = lengthOfArrayLike$6;
  var deletePropertyOrThrow$1 = deletePropertyOrThrow$2;
  var toString$3 = toString$4;
  var fails$3 = fails$h;
  var internalSort = arraySort;
  var arrayMethodIsStrict = arrayMethodIsStrict$2;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;

  var test = [];
  var nativeSort = uncurryThis$3(test.sort);
  var push = uncurryThis$3(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$3(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$3(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict('sort');

  var STABLE_SORT = !fails$3(function () {
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

  var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$3(x) > toString$3(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$3({ target: 'Array', proto: true, forced: FORCED$1 }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable(comparefn);

      var array = toObject$2(this);

      if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

      var items = [];
      var arrayLength = lengthOfArrayLike$1(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push(items, array[index]);
      }

      internalSort(items, getSortCompare(comparefn));

      itemsLength = lengthOfArrayLike$1(items);
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow$1(array, index++);

      return array;
    }
  });

  var DESCRIPTORS$1 = descriptors;
  var isArray = isArray$4;

  var $TypeError = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$1 && !function () {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', { writable: false }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  }();

  var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
    if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
      throw new $TypeError('Cannot set read only .length');
    } return O.length = length;
  } : function (O, length) {
    return O.length = length;
  };

  var $$2 = _export;
  var toObject$1 = toObject$6;
  var toAbsoluteIndex = toAbsoluteIndex$3;
  var toIntegerOrInfinity = toIntegerOrInfinity$3;
  var lengthOfArrayLike = lengthOfArrayLike$6;
  var setArrayLength = arraySetLength;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
  var arraySpeciesCreate = arraySpeciesCreate$3;
  var createProperty = createProperty$3;
  var deletePropertyOrThrow = deletePropertyOrThrow$2;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

  var max = Math.max;
  var min = Math.min;

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $$2({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject$1(this);
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

  var DESCRIPTORS = descriptors;
  var uncurryThis$2 = functionUncurryThis;
  var call$1 = functionCall;
  var fails$2 = fails$h;
  var objectKeys = objectKeys$2;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject = toObject$6;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty = Object.defineProperty;
  var concat = uncurryThis$2([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$2(function () {
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
        if (!DESCRIPTORS || call$1(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$1 = _export;
  var assign = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$1({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
    assign: assign
  });

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof = classof$3;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$1 = defineBuiltIn$3;
  var toString$2 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$1(Object.prototype, 'toString', toString$2, { unsafe: true });
  }

  // a string of all valid unicode whitespaces
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$1 = functionUncurryThis;
  var requireObjectCoercible = requireObjectCoercible$3;
  var toString$1 = toString$4;
  var whitespaces$1 = whitespaces$2;

  var replace = uncurryThis$1(''.replace);
  var ltrim = RegExp('^[' + whitespaces$1 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString$1(requireObjectCoercible($this));
      if (TYPE & 1) string = replace(string, ltrim, '');
      if (TYPE & 2) string = replace(string, rtrim, '$1');
      return string;
    };
  };

  var stringTrim = {
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

  var global$1 = global$b;
  var fails$1 = fails$h;
  var uncurryThis = functionUncurryThis;
  var toString = toString$4;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$2;

  var charAt = uncurryThis(''.charAt);
  var $parseFloat$1 = global$1.parseFloat;
  var Symbol$1 = global$1.Symbol;
  var ITERATOR = Symbol$1 && Symbol$1.iterator;
  var FORCED = 1 / $parseFloat$1(whitespaces + '-0') !== -Infinity
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR && !fails$1(function () { $parseFloat$1(Object(ITERATOR)); }));

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  var numberParseFloat = FORCED ? function parseFloat(string) {
    var trimmedString = trim(toString(string));
    var result = $parseFloat$1(trimmedString);
    return result === 0 && charAt(trimmedString, 0) === '-' ? -0 : result;
  } : $parseFloat$1;

  var $ = _export;
  var $parseFloat = numberParseFloat;

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  $({ global: true, forced: parseFloat !== $parseFloat }, {
    parseFloat: $parseFloat
  });

  var anObject$1 = anObject$6;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject$1(this);
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

  var call = functionCall;
  var hasOwn = hasOwnProperty_1;
  var isPrototypeOf = objectIsPrototypeOf;
  var regExpFlags = regexpFlags;

  var RegExpPrototype$1 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype$1, R)
      ? call(regExpFlags, R) : flags;
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var defineBuiltIn = defineBuiltIn$3;
  var anObject = anObject$6;
  var $toString = toString$4;
  var fails = fails$h;
  var getRegExpFlags = regexpGetFlags;

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

  /**
   * @author Nadim Basalamah <dimbslmh@gmail.com>
   * @version: v1.1.0
   * @update: ErwannNevou <https://github.com/ErwannNevou>
   */

  var isSingleSort = false;
  var Utils = $$a.fn.bootstrapTable.utils;
  Object.assign($$a.fn.bootstrapTable.defaults.icons, {
    plus: {
      bootstrap3: 'glyphicon-plus',
      bootstrap4: 'fa-plus',
      bootstrap5: 'bi-plus',
      semantic: 'fa-plus',
      materialize: 'plus',
      foundation: 'fa-plus',
      bulma: 'fa-plus',
      'bootstrap-table': 'icon-plus'
    }[$$a.fn.bootstrapTable.theme] || 'fa-clock',
    minus: {
      bootstrap3: 'glyphicon-minus',
      bootstrap4: 'fa-minus',
      bootstrap5: 'bi-dash',
      semantic: 'fa-minus',
      materialize: 'minus',
      foundation: 'fa-minus',
      bulma: 'fa-minus',
      'bootstrap-table': 'icon-minus'
    }[$$a.fn.bootstrapTable.theme] || 'fa-clock',
    sort: {
      bootstrap3: 'glyphicon-sort',
      bootstrap4: 'fa-sort',
      bootstrap5: 'bi-arrow-down-up',
      semantic: 'fa-sort',
      materialize: 'sort',
      foundation: 'fa-sort',
      bulma: 'fa-sort',
      'bootstrap-table': 'icon-sort-amount-asc'
    }[$$a.fn.bootstrapTable.theme] || 'fa-clock'
  });
  var theme = {
    bootstrap3: {
      html: {
        multipleSortModal: "\n        <div class=\"modal fade\" id=\"%s\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                     <h4 class=\"modal-title\" id=\"%sLabel\">%s</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"bootstrap-table\">\n                        <div class=\"fixed-table-toolbar\">\n                            <div class=\"bars\">\n                                <div id=\"toolbar\">\n                                     <button id=\"add\" type=\"button\" class=\"btn btn-default\">%s %s</button>\n                                     <button id=\"delete\" type=\"button\" class=\"btn btn-default\" disabled>%s %s</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"fixed-table-container\">\n                            <table id=\"multi-sort\" class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                         <th><div class=\"th-inner\">%s</div></th>\n                                         <th><div class=\"th-inner\">%s</div></th>\n                                    </tr>\n                                </thead>\n                                <tbody></tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">%s</button>\n                     <button type=\"button\" class=\"btn btn-primary multi-sort-order-button\">%s</button>\n                </div>\n            </div>\n        </div>\n    </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s form-control">'
      }
    },
    bootstrap4: {
      html: {
        multipleSortModal: "\n        <div class=\"modal fade\" id=\"%s\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"%sLabel\">%s</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"bootstrap-table\">\n                        <div class=\"fixed-table-toolbar\">\n                            <div class=\"bars\">\n                                <div id=\"toolbar\" class=\"pb-3\">\n                                     <button id=\"add\" type=\"button\" class=\"btn btn-secondary\">%s %s</button>\n                                     <button id=\"delete\" type=\"button\" class=\"btn btn-secondary\" disabled>%s %s</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"fixed-table-container\">\n                            <table id=\"multi-sort\" class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                         <th><div class=\"th-inner\">%s</div></th>\n                                         <th><div class=\"th-inner\">%s</div></th>\n                                    </tr>\n                                </thead>\n                                <tbody></tbody>\n                            </table>\n                        </div>\n                    </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">%s</button>\n                <button type=\"button\" class=\"btn btn-primary multi-sort-order-button\">%s</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s form-control">'
      }
    },
    bootstrap5: {
      html: {
        multipleSortModal: "\n        <div class=\"modal fade\" id=\"%s\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"%sLabel\">%s</h5>\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"bootstrap-table\">\n                        <div class=\"fixed-table-toolbar\">\n                            <div class=\"bars\">\n                                <div id=\"toolbar\" class=\"pb-3\">\n                                     <button id=\"add\" type=\"button\" class=\"btn btn-secondary\">%s %s</button>\n                                     <button id=\"delete\" type=\"button\" class=\"btn btn-secondary\" disabled>%s %s</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"fixed-table-container\">\n                            <table id=\"multi-sort\" class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                         <th><div class=\"th-inner\">%s</div></th>\n                                         <th><div class=\"th-inner\">%s</div></th>\n                                    </tr>\n                                </thead>\n                                <tbody></tbody>\n                            </table>\n                        </div>\n                    </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">%s</button>\n                <button type=\"button\" class=\"btn btn-primary multi-sort-order-button\">%s</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" type="button" data-bs-toggle="modal" data-bs-target="#%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s form-control">'
      }
    },
    semantic: {
      html: {
        multipleSortModal: "\n        <div class=\"ui modal tiny\" id=\"%s\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n        <i class=\"close icon\"></i>\n        <div class=\"header\" id=\"%sLabel\">\n          %s\n        </div>\n        <div class=\"image content\">\n          <div class=\"bootstrap-table\">\n            <div class=\"fixed-table-toolbar\">\n                <div class=\"bars\">\n                  <div id=\"toolbar\" class=\"pb-3\">\n                    <button id=\"add\" type=\"button\" class=\"ui button\">%s %s</button>\n                    <button id=\"delete\" type=\"button\" class=\"ui button\" disabled>%s %s</button>\n                  </div>\n                </div>\n            </div>\n            <div class=\"fixed-table-container\">\n                <table id=\"multi-sort\" class=\"table\">\n                    <thead>\n                        <tr>\n                            <th></th>\n                            <th><div class=\"th-inner\">%s</div></th>\n                            <th><div class=\"th-inner\">%s</div></th>\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"ui button deny\">%s</div>\n          <div class=\"ui button approve multi-sort-order-button\">%s</div>\n        </div>\n      </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s">'
      }
    },
    materialize: {
      html: {
        multipleSortModal: "\n        <div id=\"%s\" class=\"modal\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-content\" id=\"%sLabel\">\n            <h4>%s</h4>\n            <div class=\"bootstrap-table\">\n            <div class=\"fixed-table-toolbar\">\n                <div class=\"bars\">\n                  <div id=\"toolbar\" class=\"pb-3\">\n                    <button id=\"add\" type=\"button\" class=\"waves-effect waves-light btn\">%s %s</button>\n                    <button id=\"delete\" type=\"button\" class=\"waves-effect waves-light btn\" disabled>%s %s</button>\n                  </div>\n                </div>\n            </div>\n            <div class=\"fixed-table-container\">\n                <table id=\"multi-sort\" class=\"table\">\n                    <thead>\n                        <tr>\n                            <th></th>\n                            <th><div class=\"th-inner\">%s</div></th>\n                            <th><div class=\"th-inner\">%s</div></th>\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <a href=\"javascript:void(0)\" class=\"modal-close waves-effect waves-light btn\">%s</a>\n            <a href=\"javascript:void(0)\" class=\"modal-close waves-effect waves-light btn multi-sort-order-button\">%s</a>\n          </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<a class="multi-sort %s modal-trigger" href="#%s" type="button" data-toggle="modal" title="%s">%s</a>',
        multipleSortSelect: '<select class="%s %s browser-default">'
      }
    },
    foundation: {
      html: {
        multipleSortModal: "\n        <div class=\"reveal\" id=\"%s\" data-reveal aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n            <div id=\"%sLabel\">\n              <h1>%s</h1>\n              <div class=\"bootstrap-table\">\n                <div class=\"fixed-table-toolbar\">\n                    <div class=\"bars\">\n                      <div id=\"toolbar\" class=\"padding-bottom-2\">\n                        <button id=\"add\" type=\"button\" class=\"waves-effect waves-light button\">%s %s</button>\n                        <button id=\"delete\" type=\"button\" class=\"waves-effect waves-light button\" disabled>%s %s</button>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"fixed-table-container\">\n                    <table id=\"multi-sort\" class=\"table\">\n                        <thead>\n                            <tr>\n                                <th></th>\n                                <th><div class=\"th-inner\">%s</div></th>\n                                <th><div class=\"th-inner\">%s</div></th>\n                            </tr>\n                        </thead>\n                        <tbody></tbody>\n                    </table>\n                </div>\n              </div>\n\n              <button class=\"waves-effect waves-light button\" data-close aria-label=\"Close modal\" type=\"button\">\n                <span aria-hidden=\"true\">%s</span>\n              </button>\n              <button class=\"waves-effect waves-light button multi-sort-order-button\" data-close aria-label=\"Order\" type=\"button\">\n                  <span aria-hidden=\"true\">%s</span>\n              </button>\n            </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" data-open="%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s browser-default">'
      }
    },
    bulma: {
      html: {
        multipleSortModal: "\n        <div class=\"modal\" id=\"%s\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-background\"></div>\n          <div class=\"modal-content\" id=\"%sLabel\">\n            <div class=\"box\">\n            <h2>%s</h2>\n              <div class=\"bootstrap-table\">\n                  <div class=\"fixed-table-toolbar\">\n                      <div class=\"bars\">\n                        <div id=\"toolbar\" class=\"padding-bottom-2\">\n                          <button id=\"add\" type=\"button\" class=\"waves-effect waves-light button\">%s %s</button>\n                          <button id=\"delete\" type=\"button\" class=\"waves-effect waves-light button\" disabled>%s %s</button>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"fixed-table-container\">\n                      <table id=\"multi-sort\" class=\"table\">\n                          <thead>\n                              <tr>\n                                  <th></th>\n                                  <th><div class=\"th-inner\">%s</div></th>\n                                  <th><div class=\"th-inner\">%s</div></th>\n                              </tr>\n                          </thead>\n                          <tbody></tbody>\n                      </table>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"waves-effect waves-light button\" data-close>%s</button>\n                <button type=\"button\" class=\"waves-effect waves-light button multi-sort-order-button\" data-close>%s</button>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" data-target="%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s browser-default">'
      }
    },
    'bootstrap-table': {
      html: {
        multipleSortModal: "\n        <div class=\"modal\" id=\"%s\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-background\"></div>\n          <div class=\"modal-content\" id=\"%sLabel\">\n            <div class=\"box\">\n            <h2>%s</h2>\n              <div class=\"bootstrap-table\">\n                  <div class=\"fixed-table-toolbar\">\n                      <div class=\"bars\">\n                        <div id=\"toolbar\" class=\"padding-bottom-2\">\n                          <button id=\"add\" type=\"button\" class=\"btn\">%s %s</button>\n                          <button id=\"delete\" type=\"button\" class=\"btn\" disabled>%s %s</button>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"fixed-table-container\">\n                      <table id=\"multi-sort\" class=\"table\">\n                          <thead>\n                              <tr>\n                                  <th></th>\n                                  <th><div class=\"th-inner\">%s</div></th>\n                                  <th><div class=\"th-inner\">%s</div></th>\n                              </tr>\n                          </thead>\n                          <tbody></tbody>\n                      </table>\n                    </div>\n                </div>\n                <div class=\"mt-30\">\n                    <button type=\"button\" class=\"btn\" data-close>%s</button>\n                    <button type=\"button\" class=\"btn multi-sort-order-button\" data-close>%s</button>\n                </div>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" data-target="%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s browser-default">'
      }
    }
  }[$$a.fn.bootstrapTable.theme];
  var showSortModal = function showSortModal(that) {
    var _selector = that.sortModalSelector;
    var _id = "#".concat(_selector);
    var o = that.options;
    if (!$$a(_id).hasClass('modal')) {
      var sModal = Utils.sprintf(theme.html.multipleSortModal, _selector, _selector, _selector, that.options.formatMultipleSort(), Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.plus), that.options.formatAddLevel(), Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.minus), that.options.formatDeleteLevel(), that.options.formatColumn(), that.options.formatOrder(), that.options.formatCancel(), that.options.formatSort());
      $$a('body').append($$a(sModal));
      that.$sortModal = $$a(_id);
      var $rows = that.$sortModal.find('tbody > tr');
      that.$sortModal.off('click', '#add').on('click', '#add', function () {
        var total = that.$sortModal.find('.multi-sort-name:first option').length;
        var current = that.$sortModal.find('tbody tr').length;
        if (current < total) {
          current++;
          that.addLevel();
          that.setButtonStates();
        }
      });
      that.$sortModal.off('click', '#delete').on('click', '#delete', function () {
        var total = that.$sortModal.find('.multi-sort-name:first option').length;
        var current = that.$sortModal.find('tbody tr').length;
        if (current > 1 && current <= total) {
          current--;
          that.$sortModal.find('tbody tr:last').remove();
          that.setButtonStates();
        }
      });
      that.$sortModal.off('click', '.multi-sort-order-button').on('click', '.multi-sort-order-button', function () {
        var $rows = that.$sortModal.find('tbody > tr');
        var $alert = that.$sortModal.find('div.alert');
        var fields = [];
        var results = [];
        var sortPriority = $$a.map($rows, function (row) {
          var $row = $$a(row);
          var name = $row.find('.multi-sort-name').val();
          var order = $row.find('.multi-sort-order').val();
          fields.push(name);
          return {
            sortName: name,
            sortOrder: order
          };
        });
        var sorted_fields = fields.sort();
        for (var i = 0; i < fields.length - 1; i++) {
          if (sorted_fields[i + 1] === sorted_fields[i]) {
            results.push(sorted_fields[i]);
          }
        }
        if (results.length > 0) {
          if ($alert.length === 0) {
            $alert = "<div class=\"alert alert-danger\" role=\"alert\"><strong>".concat(that.options.formatDuplicateAlertTitle(), "</strong> ").concat(that.options.formatDuplicateAlertDescription(), "</div>");
            $$a($alert).insertBefore(that.$sortModal.find('.bars'));
          }
        } else {
          if ($alert.length === 1) {
            $$a($alert).remove();
          }
          if (['bootstrap3', 'bootstrap4', 'bootstrap5'].includes($$a.fn.bootstrapTable.theme)) {
            that.$sortModal.modal('hide');
          }
          that.multiSort(sortPriority);
        }
      });
      if (that.options.sortPriority === null || that.options.sortPriority.length === 0) {
        if (that.options.sortName) {
          that.options.sortPriority = [{
            sortName: that.options.sortName,
            sortOrder: that.options.sortOrder
          }];
        }
      }
      if (that.options.sortPriority !== null && that.options.sortPriority.length > 0) {
        if ($rows.length < that.options.sortPriority.length && _typeof(that.options.sortPriority) === 'object') {
          for (var i = 0; i < that.options.sortPriority.length; i++) {
            that.addLevel(i, that.options.sortPriority[i]);
          }
        }
      } else {
        that.addLevel(0);
      }
      that.setButtonStates();
    }
  };
  $$a.fn.bootstrapTable.methods.push('multipleSort');
  $$a.fn.bootstrapTable.methods.push('multiSort');
  Object.assign($$a.fn.bootstrapTable.defaults, {
    showMultiSort: false,
    showMultiSortButton: true,
    multiSortStrictSort: false,
    sortPriority: null,
    onMultipleSort: function onMultipleSort() {
      return false;
    }
  });
  Object.assign($$a.fn.bootstrapTable.events, {
    'multiple-sort.bs.table': 'onMultipleSort'
  });
  Object.assign($$a.fn.bootstrapTable.locales, {
    formatMultipleSort: function formatMultipleSort() {
      return 'Multiple Sort';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Add Level';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Delete Level';
    },
    formatColumn: function formatColumn() {
      return 'Column';
    },
    formatOrder: function formatOrder() {
      return 'Order';
    },
    formatSortBy: function formatSortBy() {
      return 'Sort by';
    },
    formatThenBy: function formatThenBy() {
      return 'Then by';
    },
    formatSort: function formatSort() {
      return 'Sort';
    },
    formatCancel: function formatCancel() {
      return 'Cancel';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return 'Duplicate(s) detected!';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Please remove or change any duplicate column.';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Ascending',
        desc: 'Descending'
      };
    }
  });
  Object.assign($$a.fn.bootstrapTable.defaults, $$a.fn.bootstrapTable.locales);
  var BootstrapTable = $$a.fn.bootstrapTable.Constructor;
  var _initToolbar = BootstrapTable.prototype.initToolbar;
  var _destroy = BootstrapTable.prototype.destroy;
  BootstrapTable.prototype.initToolbar = function () {
    var _this = this;
    this.showToolbar = this.showToolbar || this.options.showMultiSort;
    var that = this;
    var sortModalSelector = "sortModal_".concat(this.$el.attr('id'));
    var sortModalId = "#".concat(sortModalSelector);
    var $multiSortBtn = this.$toolbar.find('div.multi-sort');
    var o = this.options;
    this.$sortModal = $$a(sortModalId);
    this.sortModalSelector = sortModalSelector;
    if (that.options.sortPriority !== null) {
      that.onMultipleSort();
    }
    if (this.options.showMultiSort && this.options.showMultiSortButton) {
      this.buttons = Object.assign(this.buttons, {
        multipleSort: {
          html: Utils.sprintf(theme.html.multipleSortButton, that.constants.buttonsClass, that.sortModalSelector, this.options.formatMultipleSort(), Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.sort))
        }
      });
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _initToolbar.apply(this, Array.prototype.slice.apply(args));
    if (that.options.sidePagination === 'server' && !isSingleSort && that.options.sortPriority !== null) {
      var t = that.options.queryParams;
      that.options.queryParams = function (params) {
        params.multiSort = that.options.sortPriority;
        return t(params);
      };
    }
    if (this.options.showMultiSort) {
      if (!$multiSortBtn.length && this.options.showMultiSortButton) {
        if ($$a.fn.bootstrapTable.theme === 'semantic') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            $$a(sortModalId).modal('show');
          });
        } else if ($$a.fn.bootstrapTable.theme === 'materialize') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            $$a(sortModalId).modal();
          });
        } else if ($$a.fn.bootstrapTable.theme === 'bootstrap-table') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            $$a(sortModalId).addClass('show');
          });
        } else if ($$a.fn.bootstrapTable.theme === 'foundation') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            if (!_this.foundationModal) {
              // eslint-disable-next-line no-undef
              _this.foundationModal = new Foundation.Reveal($$a(sortModalId));
            }
            _this.foundationModal.open();
          });
        } else if ($$a.fn.bootstrapTable.theme === 'bulma') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            $$a('html').toggleClass('is-clipped');
            $$a(sortModalId).toggleClass('is-active');
            $$a('button[data-close]').one('click', function () {
              $$a('html').toggleClass('is-clipped');
              $$a(sortModalId).toggleClass('is-active');
            });
          });
        }
        showSortModal(that);
      }
      this.$el.on('sort.bs.table', function () {
        isSingleSort = true;
      });
      this.$el.on('multiple-sort.bs.table', function () {
        isSingleSort = false;
      });
      this.$el.on('load-success.bs.table', function () {
        if (!isSingleSort && that.options.sortPriority !== null && _typeof(that.options.sortPriority) === 'object' && that.options.sidePagination !== 'server') {
          that.onMultipleSort();
        }
      });
      this.$el.on('column-switch.bs.table', function (field, checked) {
        if (that.options.sortPriority !== null && that.options.sortPriority.length > 0) {
          for (var i = 0; i < that.options.sortPriority.length; i++) {
            if (that.options.sortPriority[i].sortName === checked) {
              that.options.sortPriority.splice(i, 1);
            }
          }
          that.assignSortableArrows();
        }
        that.$sortModal.remove();
        showSortModal(that);
      });
      this.$el.on('reset-view.bs.table', function () {
        if (!isSingleSort && that.options.sortPriority !== null && _typeof(that.options.sortPriority) === 'object') {
          that.assignSortableArrows();
        }
      });
    }
  };
  BootstrapTable.prototype.destroy = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _destroy.apply(this, Array.prototype.slice.apply(args));
    if (this.options.showMultiSort) {
      this.enableCustomSort = false;
      this.$sortModal.remove();
    }
  };
  BootstrapTable.prototype.multipleSort = function () {
    var that = this;
    if (!isSingleSort && that.options.sortPriority !== null && _typeof(that.options.sortPriority) === 'object' && that.options.sidePagination !== 'server') {
      that.onMultipleSort();
    }
  };
  BootstrapTable.prototype.onMultipleSort = function () {
    var that = this;
    var cmp = function cmp(x, y) {
      return x > y ? 1 : x < y ? -1 : 0;
    };
    var arrayCmp = function arrayCmp(a, b) {
      var arr1 = [];
      var arr2 = [];
      for (var i = 0; i < that.options.sortPriority.length; i++) {
        var fieldName = that.options.sortPriority[i].sortName;
        var fieldIndex = that.header.fields.indexOf(fieldName);
        var sorterName = that.header.sorters[that.header.fields.indexOf(fieldName)];
        if (that.header.sortNames[fieldIndex]) {
          fieldName = that.header.sortNames[fieldIndex];
        }
        var order = that.options.sortPriority[i].sortOrder === 'desc' ? -1 : 1;
        var aa = Utils.getItemField(a, fieldName);
        var bb = Utils.getItemField(b, fieldName);
        var value1 = $$a.fn.bootstrapTable.utils.calculateObjectValue(that.header, sorterName, [aa, bb]);
        var value2 = $$a.fn.bootstrapTable.utils.calculateObjectValue(that.header, sorterName, [bb, aa]);
        if (value1 !== undefined && value2 !== undefined) {
          arr1.push(order * value1);
          arr2.push(order * value2);
          continue;
        }
        if (aa === undefined || aa === null) aa = '';
        if (bb === undefined || bb === null) bb = '';
        if ($$a.isNumeric(aa) && $$a.isNumeric(bb)) {
          aa = parseFloat(aa);
          bb = parseFloat(bb);
        } else {
          aa = aa.toString();
          bb = bb.toString();
          if (that.options.multiSortStrictSort) {
            aa = aa.toLowerCase();
            bb = bb.toLowerCase();
          }
        }
        arr1.push(order * cmp(aa, bb));
        arr2.push(order * cmp(bb, aa));
      }
      return cmp(arr1, arr2);
    };
    this.enableCustomSort = true;
    this.data.sort(function (a, b) {
      return arrayCmp(a, b);
    });
    this.initBody();
    this.assignSortableArrows();
    this.trigger('multiple-sort');
  };
  BootstrapTable.prototype.addLevel = function (index, sortPriority) {
    var text = index === 0 ? this.options.formatSortBy() : this.options.formatThenBy();
    this.$sortModal.find('tbody').append($$a('<tr>').append($$a('<td>').text(text)).append($$a('<td>').append($$a(Utils.sprintf(theme.html.multipleSortSelect, this.constants.classes.paginationDropdown, 'multi-sort-name')))).append($$a('<td>').append($$a(Utils.sprintf(theme.html.multipleSortSelect, this.constants.classes.paginationDropdown, 'multi-sort-order')))));
    var $multiSortName = this.$sortModal.find('.multi-sort-name').last();
    var $multiSortOrder = this.$sortModal.find('.multi-sort-order').last();
    $$a.each(this.columns, function (i, column) {
      if (column.sortable === false || column.visible === false) {
        return true;
      }
      $multiSortName.append("<option value=\"".concat(column.field, "\">").concat(column.title, "</option>"));
    });
    $$a.each(this.options.formatSortOrders(), function (value, order) {
      $multiSortOrder.append("<option value=\"".concat(value, "\">").concat(order, "</option>"));
    });
    if (sortPriority !== undefined) {
      $multiSortName.find("option[value=\"".concat(sortPriority.sortName, "\"]")).attr('selected', true);
      $multiSortOrder.find("option[value=\"".concat(sortPriority.sortOrder, "\"]")).attr('selected', true);
    }
  };
  BootstrapTable.prototype.assignSortableArrows = function () {
    var that = this;
    var headers = that.$header.find('th');
    for (var i = 0; i < headers.length; i++) {
      for (var c = 0; c < that.options.sortPriority.length; c++) {
        if ($$a(headers[i]).data('field') === that.options.sortPriority[c].sortName) {
          $$a(headers[i]).find('.sortable').removeClass('desc asc').addClass(that.options.sortPriority[c].sortOrder);
        }
      }
    }
  };
  BootstrapTable.prototype.setButtonStates = function () {
    var total = this.$sortModal.find('.multi-sort-name:first option').length;
    var current = this.$sortModal.find('tbody tr').length;
    if (current === total) {
      this.$sortModal.find('#add').attr('disabled', 'disabled');
    }
    if (current > 1) {
      this.$sortModal.find('#delete').removeAttr('disabled');
    }
    if (current < total) {
      this.$sortModal.find('#add').removeAttr('disabled');
    }
    if (current === 1) {
      this.$sortModal.find('#delete').attr('disabled', 'disabled');
    }
  };
  BootstrapTable.prototype.multiSort = function (sortPriority) {
    var _this2 = this;
    this.options.sortPriority = sortPriority;
    this.options.sortName = undefined;
    if (this.options.sidePagination === 'server') {
      var queryParams = this.options.queryParams;
      this.options.queryParams = function (params) {
        params.multiSort = _this2.options.sortPriority;
        return $$a.fn.bootstrapTable.utils.calculateObjectValue(_this2.options, queryParams, [params]);
      };
      isSingleSort = false;
      this.initServer(this.options.silentSort);
      return;
    }
    this.onMultipleSort();
  };

}));
