(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$6) { 'use strict';

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
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
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
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
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
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
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
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
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
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
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  var fails$f = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$e = fails$f;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$e(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  });

  var fails$d = fails$f;

  var functionBindNative = !fails$d(function () {
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

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

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

  var uncurryThis$g = functionUncurryThis;

  var toString$5 = uncurryThis$g({}.toString);
  var stringSlice$1 = uncurryThis$g(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$1(toString$5(it), 8, -1);
  };

  var uncurryThis$f = functionUncurryThis;
  var fails$c = fails$f;
  var classof$5 = classofRaw$2;

  var $Object$4 = Object;
  var split = uncurryThis$f(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$c(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$5(it) === 'String' ? split(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$2 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$1 = isNullOrUndefined$2;

  var $TypeError$6 = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$3 = function (it) {
    if (isNullOrUndefined$1(it)) throw new $TypeError$6("Can't call method on " + it);
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
  var isCallable$d = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$c = isCallable$d;

  var isObject$7 = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$c(it);
  };

  var global$a = global$b;
  var isCallable$b = isCallable$d;

  var aFunction = function (argument) {
    return isCallable$b(argument) ? argument : undefined;
  };

  var getBuiltIn$4 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
  };

  var uncurryThis$e = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

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
  var V8_VERSION$2 = engineV8Version;
  var fails$b = fails$f;
  var global$8 = global$b;

  var $String$4 = global$8.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$b(function () {
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
  var isCallable$a = isCallable$d;
  var isPrototypeOf = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$a($Symbol) && isPrototypeOf($Symbol.prototype, $Object$3(it));
  };

  var $String$3 = String;

  var tryToString$1 = function (argument) {
    try {
      return $String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$9 = isCallable$d;
  var tryToString = tryToString$1;

  var $TypeError$5 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$2 = function (argument) {
    if (isCallable$9(argument)) return argument;
    throw new $TypeError$5(tryToString(argument) + ' is not a function');
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
  var isCallable$8 = isCallable$d;
  var isObject$6 = isObject$7;

  var $TypeError$4 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$8(fn = input.toString) && !isObject$6(val = call$3(fn, input))) return val;
    if (isCallable$8(fn = input.valueOf) && !isObject$6(val = call$3(fn, input))) return val;
    if (pref !== 'string' && isCallable$8(fn = input.toString) && !isObject$6(val = call$3(fn, input))) return val;
    throw new $TypeError$4("Can't convert object to primitive value");
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

  var $Object$2 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$5 = function (argument) {
    return $Object$2(requireObjectCoercible$1(argument));
  };

  var uncurryThis$d = functionUncurryThis;
  var toObject$4 = toObject$5;

  var hasOwnProperty = uncurryThis$d({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$4(it), key);
  };

  var uncurryThis$c = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$4 = uncurryThis$c(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id + postfix, 36);
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

  var wellKnownSymbol$7 = function (name) {
    if (!hasOwn$7(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$7(Symbol$2, name)
        ? Symbol$2[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var call$2 = functionCall;
  var isObject$5 = isObject$7;
  var isSymbol$1 = isSymbol$2;
  var getMethod = getMethod$1;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$6 = wellKnownSymbol$7;

  var $TypeError$3 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$6('toPrimitive');

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

  var global$5 = global$b;
  var isObject$4 = isObject$7;

  var document$1 = global$5.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$a = descriptors;
  var fails$a = fails$f;
  var createElement = documentCreateElement$1;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$a && !fails$a(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a !== 7;
  });

  var DESCRIPTORS$9 = descriptors;
  var call$1 = functionCall;
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
    if (hasOwn$6(O, P)) return createPropertyDescriptor$2(!call$1(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$8 = descriptors;
  var fails$9 = fails$f;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$9(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var isObject$3 = isObject$7;

  var $String$2 = String;
  var $TypeError$2 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$4 = function (argument) {
    if (isObject$3(argument)) return argument;
    throw new $TypeError$2($String$2(argument) + ' is not an object');
  };

  var DESCRIPTORS$7 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$3 = anObject$4;
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
  objectDefineProperty.f = DESCRIPTORS$7 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$3(O);
    P = toPropertyKey(P);
    anObject$3(Attributes);
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
    anObject$3(O);
    P = toPropertyKey(P);
    anObject$3(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$1('Accessors not supported');
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

  var uncurryThis$b = functionUncurryThis;
  var isCallable$7 = isCallable$d;
  var store$1 = sharedStoreExports;

  var functionToString = uncurryThis$b(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$7(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var global$4 = global$b;
  var isCallable$6 = isCallable$d;

  var WeakMap$1 = global$4.WeakMap;

  var weakMapBasicDetection = isCallable$6(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var shared$1 = shared$3;
  var uid = uid$2;

  var keys = shared$1('keys');

  var sharedKey$3 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$3 = global$b;
  var isObject$2 = isObject$7;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
  var hasOwn$4 = hasOwnProperty_1;
  var shared = sharedStoreExports;
  var sharedKey$2 = sharedKey$3;
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
    var STATE = sharedKey$2('state');
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

  var uncurryThis$a = functionUncurryThis;
  var fails$8 = fails$f;
  var isCallable$5 = isCallable$d;
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
  var stringSlice = uncurryThis$a(''.slice);
  var replace$1 = uncurryThis$a(''.replace);
  var join = uncurryThis$a([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$8(function () {
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
    return isCallable$5(this) && getInternalState(this).source || inspectSource$1(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$2.exports;

  var isCallable$4 = isCallable$d;
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$2 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$4(value)) makeBuiltIn(value, name, options);
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
  var lengthOfArrayLike$3 = function (obj) {
    return toLength(obj.length);
  };

  var toIndexedObject$3 = toIndexedObject$5;
  var toAbsoluteIndex = toAbsoluteIndex$1;
  var lengthOfArrayLike$2 = lengthOfArrayLike$3;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$3($this);
      var length = lengthOfArrayLike$2(O);
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
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var uncurryThis$9 = functionUncurryThis;
  var hasOwn$2 = hasOwnProperty_1;
  var toIndexedObject$2 = toIndexedObject$5;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$2 = uncurryThis$9([].push);

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
  var uncurryThis$8 = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$2 = anObject$4;

  var concat$1 = uncurryThis$8([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$2(it));
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

  var fails$7 = fails$f;
  var isCallable$3 = isCallable$d;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true
      : value === NATIVE ? false
      : isCallable$3(detection) ? fails$7(detection)
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
      target = global$2[TARGET] && global$2[TARGET].prototype;
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

  var classof$4 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$2 = Array.isArray || function isArray(argument) {
    return classof$4(argument) === 'Array';
  };

  var $TypeError = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
    return it;
  };

  var DESCRIPTORS$3 = descriptors;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$3;

  var createProperty$1 = function (object, key, value) {
    if (DESCRIPTORS$3) definePropertyModule$1.f(object, key, createPropertyDescriptor(0, value));
    else object[key] = value;
  };

  var wellKnownSymbol$5 = wellKnownSymbol$7;

  var TO_STRING_TAG$1 = wellKnownSymbol$5('toStringTag');
  var test = {};

  test[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$2 = isCallable$d;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$4 = wellKnownSymbol$7;

  var TO_STRING_TAG = wellKnownSymbol$4('toStringTag');
  var $Object$1 = Object;

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
      : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) === 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$7 = functionUncurryThis;
  var fails$6 = fails$f;
  var isCallable$1 = isCallable$d;
  var classof$2 = classof$3;
  var getBuiltIn$1 = getBuiltIn$4;
  var inspectSource = inspectSource$2;

  var noop = function () { /* empty */ };
  var construct = getBuiltIn$1('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$7(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$1(argument)) return false;
    try {
      construct(noop, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$1(argument)) return false;
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
  var isConstructor$1 = !construct || fails$6(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$1 = isArray$2;
  var isConstructor = isConstructor$1;
  var isObject$1 = isObject$7;
  var wellKnownSymbol$3 = wellKnownSymbol$7;

  var SPECIES$1 = wellKnownSymbol$3('species');
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
  var arraySpeciesCreate$2 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var fails$5 = fails$f;
  var wellKnownSymbol$2 = wellKnownSymbol$7;
  var V8_VERSION$1 = engineV8Version;

  var SPECIES = wellKnownSymbol$2('species');

  var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$5(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$5 = _export;
  var fails$4 = fails$f;
  var isArray = isArray$2;
  var isObject = isObject$7;
  var toObject$3 = toObject$5;
  var lengthOfArrayLike$1 = lengthOfArrayLike$3;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var createProperty = createProperty$1;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;
  var wellKnownSymbol$1 = wellKnownSymbol$7;
  var V8_VERSION = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$1('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$4(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$1('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$5({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$3(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$1(E);
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

  var classofRaw = classofRaw$2;
  var uncurryThis$6 = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$6(fn);
  };

  var uncurryThis$5 = functionUncurryThisClause;
  var aCallable = aCallable$2;
  var NATIVE_BIND = functionBindNative;

  var bind$1 = uncurryThis$5(uncurryThis$5.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var bind = functionBindContext;
  var uncurryThis$4 = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$2 = toObject$5;
  var lengthOfArrayLike = lengthOfArrayLike$3;
  var arraySpeciesCreate = arraySpeciesCreate$2;

  var push$1 = uncurryThis$4([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE === 1;
    var IS_FILTER = TYPE === 2;
    var IS_SOME = TYPE === 3;
    var IS_EVERY = TYPE === 4;
    var IS_FIND_INDEX = TYPE === 6;
    var IS_FILTER_REJECT = TYPE === 7;
    var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$2($this);
      var self = IndexedObject$1(O);
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
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$2(7)
  };

  var $$4 = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$4({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$3 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$2 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule = objectDefineProperty;
  var anObject$1 = anObject$4;
  var toIndexedObject$1 = toIndexedObject$5;
  var objectKeys$2 = objectKeys$3;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$1(O);
    var props = toIndexedObject$1(Properties);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn = getBuiltIn$4;

  var html$1 = getBuiltIn('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject = anObject$4;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement = documentCreateElement$1;
  var sharedKey$1 = sharedKey$3;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$1('IE_PROTO');

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

  hiddenKeys[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol = wellKnownSymbol$7;
  var create = objectCreate;
  var defineProperty$1 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol('unscopables');
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
  var addToUnscopables$1 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $$3 = _export;
  var $find = arrayIteration.find;
  var addToUnscopables = addToUnscopables$1;

  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-find -- testing
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$3({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var DESCRIPTORS$1 = descriptors;
  var uncurryThis$3 = functionUncurryThis;
  var call = functionCall;
  var fails$3 = fails$f;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$1 = toObject$5;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty = Object.defineProperty;
  var concat = uncurryThis$3([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$3(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$1 && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
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
    return $assign({}, A)[symbol] !== 7 || objectKeys$1($assign({}, B)).join('') !== alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$1(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$1 || call(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$2 = _export;
  var assign = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$2({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
    assign: assign
  });

  var fails$2 = fails$f;

  var correctPrototypeGetter = !fails$2(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn = hasOwnProperty_1;
  var isCallable = isCallable$d;
  var toObject = toObject$5;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
    var object = toObject(O);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype : null;
  };

  var DESCRIPTORS = descriptors;
  var fails$1 = fails$f;
  var uncurryThis$2 = functionUncurryThis;
  var objectGetPrototypeOf = objectGetPrototypeOf$1;
  var objectKeys = objectKeys$3;
  var toIndexedObject = toIndexedObject$5;
  var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

  var propertyIsEnumerable = uncurryThis$2($propertyIsEnumerable);
  var push = uncurryThis$2([].push);

  // in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
  // of `null` prototype objects
  var IE_BUG = DESCRIPTORS && fails$1(function () {
    // eslint-disable-next-line es/no-object-create -- safe
    var O = Object.create(null);
    O[2] = 2;
    return !propertyIsEnumerable(O, 2);
  });

  // `Object.{ entries, values }` methods implementation
  var createMethod$1 = function (TO_ENTRIES) {
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

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$1(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$1(false)
  };

  var $$1 = _export;
  var $entries = objectToArray.entries;

  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  $$1({ target: 'Object', stat: true }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$1 = classof$3;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$1(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn = defineBuiltIn$2;
  var toString$3 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn(Object.prototype, 'toString', toString$3, { unsafe: true });
  }

  var classof = classof$3;

  var $String = String;

  var toString$2 = function (argument) {
    if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };

  // a string of all valid unicode whitespaces
  var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$1 = functionUncurryThis;
  var requireObjectCoercible = requireObjectCoercible$3;
  var toString$1 = toString$2;
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
  var fails = fails$f;
  var uncurryThis = functionUncurryThis;
  var toString = toString$2;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$2;

  var $parseInt$1 = global$1.parseInt;
  var Symbol$1 = global$1.Symbol;
  var ITERATOR = Symbol$1 && Symbol$1.iterator;
  var hex = /^[+-]?0x/i;
  var exec = uncurryThis(hex.exec);
  var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR && !fails(function () { $parseInt$1(Object(ITERATOR)); }));

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED ? function parseInt(string, radix) {
    var S = trim(toString(string));
    return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
  } : $parseInt$1;

  var $ = _export;
  var $parseInt = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $({ global: true, forced: parseInt !== $parseInt }, {
    parseInt: $parseInt
  });

  /**
   * @author: Dennis Hernández
   * @update: https://github.com/wenzhixin
   * @version: v1.2.0
   */

  $$6.akottr.dragtable.prototype._restoreState = function (persistObj) {
    var i = 0;
    for (var _i = 0, _Object$entries = Object.entries(persistObj); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        field = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      var $th = this.originalTable.el.find("th[data-field=\"".concat(field, "\"]"));
      if (!$th.length) {
        i++;
        continue;
      }
      this.originalTable.startIndex = $th.prevAll().length + 1;
      this.originalTable.endIndex = parseInt(value, 10) + 1 - i;
      this._bubbleCols();
    }
  };

  // From MDN site, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  var filterFn = function filterFn() {
    if (!Array.prototype.filter) {
      Array.prototype.filter = function (fun /* , thisArg*/) {
        if (this === undefined || this === null) {
          throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== 'function') {
          throw new TypeError();
        }
        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : undefined;
        for (var i = 0; i < len; i++) {
          if (i in t) {
            var val = t[i];

            // NOTE: Technically this should Object.defineProperty at
            //       the next index, as push can be affected by
            //       properties on Object.prototype and Array.prototype.
            //       But this method's new, and collisions should be
            //       rare, so use the more-compatible alternative.
            if (fun.call(thisArg, val, i, t)) {
              res.push(val);
            }
          }
        }
        return res;
      };
    }
  };
  Object.assign($$6.fn.bootstrapTable.defaults, {
    reorderableColumns: false,
    maxMovingRows: 10,
    // eslint-disable-next-line no-unused-vars
    onReorderColumn: function onReorderColumn(headerFields) {
      return false;
    },
    dragaccept: null
  });
  Object.assign($$6.fn.bootstrapTable.events, {
    'reorder-column.bs.table': 'onReorderColumn'
  });
  $$6.fn.bootstrapTable.methods.push('orderColumns');
  $$6.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    _inherits(_class, _$$BootstrapTable);
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _createClass(_class, [{
      key: "initHeader",
      value: function initHeader() {
        var _get2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "initHeader", this)).call.apply(_get2, [this].concat(args));
        if (!this.options.reorderableColumns) {
          return;
        }
        this.makeColumnsReorderable();
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn() {
        var _get3;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "_toggleColumn", this)).call.apply(_get3, [this].concat(args));
        if (!this.options.reorderableColumns) {
          return;
        }
        this.makeColumnsReorderable();
      }
    }, {
      key: "toggleView",
      value: function toggleView() {
        var _get4;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        (_get4 = _get(_getPrototypeOf(_class.prototype), "toggleView", this)).call.apply(_get4, [this].concat(args));
        if (!this.options.reorderableColumns) {
          return;
        }
        if (this.options.cardView) {
          return;
        }
        this.makeColumnsReorderable();
      }
    }, {
      key: "resetView",
      value: function resetView() {
        var _get5;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        (_get5 = _get(_getPrototypeOf(_class.prototype), "resetView", this)).call.apply(_get5, [this].concat(args));
        if (!this.options.reorderableColumns) {
          return;
        }
        this.makeColumnsReorderable();
      }
    }, {
      key: "makeColumnsReorderable",
      value: function makeColumnsReorderable() {
        var _this = this;
        var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        try {
          $$6(this.$el).dragtable('destroy');
        } catch (e) {
          // do nothing
        }
        $$6(this.$el).dragtable({
          maxMovingRows: this.options.maxMovingRows,
          dragaccept: this.options.dragaccept,
          clickDelay: 200,
          dragHandle: '.th-inner',
          restoreState: order ? order : this.columnsSortOrder,
          beforeStop: function beforeStop(table) {
            var sortOrder = {};
            table.el.find('th').each(function (i, el) {
              sortOrder[$$6(el).data('field')] = i;
            });
            _this.columnsSortOrder = sortOrder;
            if (_this.options.cookie) {
              _this.persistReorderColumnsState(_this);
            }
            var ths = [];
            var formatters = [];
            var columns = [];
            var columnsHidden = [];
            var columnIndex = -1;
            var optionsColumns = [];
            _this.$header.find('th:not(.detail)').each(function (i, el) {
              ths.push($$6(el).data('field'));
              formatters.push($$6(el).data('formatter'));
            });

            // Exist columns not shown
            if (ths.length < _this.columns.length) {
              columnsHidden = _this.columns.filter(function (column) {
                return !column.visible;
              });
              for (var i = 0; i < columnsHidden.length; i++) {
                ths.push(columnsHidden[i].field);
                formatters.push(columnsHidden[i].formatter);
              }
            }
            for (var _i2 = 0; _i2 < ths.length; _i2++) {
              columnIndex = _this.fieldsColumnsIndex[ths[_i2]];
              if (columnIndex !== -1) {
                _this.fieldsColumnsIndex[ths[_i2]] = _i2;
                _this.columns[columnIndex].fieldIndex = _i2;
                columns.push(_this.columns[columnIndex]);
              }
            }
            _this.columns = columns;
            filterFn(); // Support <IE9
            $$6.each(_this.columns, function (i, column) {
              var found = false;
              var field = column.field;
              _this.options.columns[0].filter(function (item) {
                if (!found && item['field'] === field) {
                  optionsColumns.push(item);
                  found = true;
                  return false;
                }
                return true;
              });
            });
            _this.options.columns[0] = optionsColumns;
            _this.header.fields = ths;
            _this.header.formatters = formatters;
            _this.initHeader();
            _this.initToolbar();
            _this.initSearchText();
            _this.initBody();
            _this.resetView();
            _this.trigger('reorder-column', ths);
          }
        });
      }
    }, {
      key: "orderColumns",
      value: function orderColumns(order) {
        this.columnsSortOrder = order;
        this.makeColumnsReorderable();
      }
    }]);
    return _class;
  }($$6.BootstrapTable);

}));
