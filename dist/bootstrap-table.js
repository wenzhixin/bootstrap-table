(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BootstrapTable = factory(global.jQuery));
})(this, (function ($$u) { 'use strict';

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
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
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
              done: !0
            } : {
              done: !1,
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
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
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
      enumerable: !0,
      configurable: !0,
      writable: !0
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
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
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
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys$2(e, r) {
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
      r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) {
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
    return (String )(t);
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

  var check = function (it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var globalThis_1 =
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

  var fails$y = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$x = fails$y;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$x(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
  });

  var fails$w = fails$y;

  var functionBindNative = !fails$w(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var call$k = Function.prototype.call;

  var functionCall = NATIVE_BIND$3 ? call$k.bind(call$k) : function () {
    return call$k.apply(call$k, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$6 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$6 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$6(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var createPropertyDescriptor$5 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var NATIVE_BIND$2 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$j = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$j, call$j);

  var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$j.apply(fn, arguments);
    };
  };

  var uncurryThis$C = functionUncurryThis;

  var toString$i = uncurryThis$C({}.toString);
  var stringSlice$b = uncurryThis$C(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$b(toString$i(it), 8, -1);
  };

  var uncurryThis$B = functionUncurryThis;
  var fails$v = fails$y;
  var classof$9 = classofRaw$2;

  var $Object$4 = Object;
  var split$3 = uncurryThis$B(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$v(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$9(it) === 'String' ? split$3(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$8 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$7 = isNullOrUndefined$8;

  var $TypeError$f = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$c = function (it) {
    if (isNullOrUndefined$7(it)) throw new $TypeError$f("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$3 = indexedObject;
  var requireObjectCoercible$b = requireObjectCoercible$c;

  var toIndexedObject$8 = function (it) {
    return IndexedObject$3(requireObjectCoercible$b(it));
  };

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = typeof document == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var isCallable$j = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$i = isCallable$j;

  var isObject$e = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$i(it);
  };

  var globalThis$o = globalThis_1;
  var isCallable$h = isCallable$j;

  var aFunction = function (argument) {
    return isCallable$h(argument) ? argument : undefined;
  };

  var getBuiltIn$6 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis$o[namespace]) : globalThis$o[namespace] && globalThis$o[namespace][method];
  };

  var uncurryThis$A = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$A({}.isPrototypeOf);

  var globalThis$n = globalThis_1;

  var navigator$1 = globalThis$n.navigator;
  var userAgent$3 = navigator$1 && navigator$1.userAgent;

  var environmentUserAgent = userAgent$3 ? String(userAgent$3) : '';

  var globalThis$m = globalThis_1;
  var userAgent$2 = environmentUserAgent;

  var process = globalThis$m.process;
  var Deno = globalThis$m.Deno;
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

  var environmentV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$2 = environmentV8Version;
  var fails$u = fails$y;
  var globalThis$l = globalThis_1;

  var $String$5 = globalThis$l.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$u(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$5 = getBuiltIn$6;
  var isCallable$g = isCallable$j;
  var isPrototypeOf$4 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$5('Symbol');
    return isCallable$g($Symbol) && isPrototypeOf$4($Symbol.prototype, $Object$3(it));
  };

  var $String$4 = String;

  var tryToString$4 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$f = isCallable$j;
  var tryToString$3 = tryToString$4;

  var $TypeError$e = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$5 = function (argument) {
    if (isCallable$f(argument)) return argument;
    throw new $TypeError$e(tryToString$3(argument) + ' is not a function');
  };

  var aCallable$4 = aCallable$5;
  var isNullOrUndefined$6 = isNullOrUndefined$8;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$7 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$6(func) ? undefined : aCallable$4(func);
  };

  var call$i = functionCall;
  var isCallable$e = isCallable$j;
  var isObject$d = isObject$e;

  var $TypeError$d = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$d(val = call$i(fn, input))) return val;
    if (isCallable$e(fn = input.valueOf) && !isObject$d(val = call$i(fn, input))) return val;
    if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$d(val = call$i(fn, input))) return val;
    throw new $TypeError$d("Can't convert object to primitive value");
  };

  var sharedStore = {exports: {}};

  var isPure = false;

  var globalThis$k = globalThis_1;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$8 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$8(globalThis$k, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      globalThis$k[key] = value;
    } return value;
  };

  var globalThis$j = globalThis_1;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = sharedStore.exports = globalThis$j[SHARED] || defineGlobalProperty$2(SHARED, {});

  (store$3.versions || (store$3.versions = [])).push({
    version: '3.38.1',
    mode: 'global',
    copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedStoreExports = sharedStore.exports;

  var store$2 = sharedStoreExports;

  var shared$4 = function (key, value) {
    return store$2[key] || (store$2[key] = value || {});
  };

  var requireObjectCoercible$a = requireObjectCoercible$c;

  var $Object$2 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$c = function (argument) {
    return $Object$2(requireObjectCoercible$a(argument));
  };

  var uncurryThis$z = functionUncurryThis;
  var toObject$b = toObject$c;

  var hasOwnProperty = uncurryThis$z({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$b(it), key);
  };

  var uncurryThis$y = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$h = uncurryThis$y(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$h(++id + postfix, 36);
  };

  var globalThis$i = globalThis_1;
  var shared$3 = shared$4;
  var hasOwn$d = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$3 = globalThis$i.Symbol;
  var WellKnownSymbolsStore = shared$3('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$3['for'] || Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$1;

  var wellKnownSymbol$n = function (name) {
    if (!hasOwn$d(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$d(Symbol$3, name)
        ? Symbol$3[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var call$h = functionCall;
  var isObject$c = isObject$e;
  var isSymbol$2 = isSymbol$3;
  var getMethod$6 = getMethod$7;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$m = wellKnownSymbol$n;

  var $TypeError$c = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$m('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$3 = function (input, pref) {
    if (!isObject$c(input) || isSymbol$2(input)) return input;
    var exoticToPrim = getMethod$6(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$h(exoticToPrim, input, pref);
      if (!isObject$c(result) || isSymbol$2(result)) return result;
      throw new $TypeError$c("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive$2 = toPrimitive$3;
  var isSymbol$1 = isSymbol$3;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$2 = function (argument) {
    var key = toPrimitive$2(argument, 'string');
    return isSymbol$1(key) ? key : key + '';
  };

  var globalThis$h = globalThis_1;
  var isObject$b = isObject$e;

  var document$1 = globalThis$h.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$b(document$1) && isObject$b(document$1.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$j = descriptors;
  var fails$t = fails$y;
  var createElement = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$j && !fails$t(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a !== 7;
  });

  var DESCRIPTORS$i = descriptors;
  var call$g = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$4 = createPropertyDescriptor$5;
  var toIndexedObject$7 = toIndexedObject$8;
  var toPropertyKey$1 = toPropertyKey$2;
  var hasOwn$c = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$i ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$7(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$c(O, P)) return createPropertyDescriptor$4(!call$g(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$h = descriptors;
  var fails$s = fails$y;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$h && fails$s(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var isObject$a = isObject$e;

  var $String$3 = String;
  var $TypeError$b = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$g = function (argument) {
    if (isObject$a(argument)) return argument;
    throw new $TypeError$b($String$3(argument) + ' is not an object');
  };

  var DESCRIPTORS$g = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$f = anObject$g;
  var toPropertyKey = toPropertyKey$2;

  var $TypeError$a = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$g ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$f(O);
    P = toPropertyKey(P);
    anObject$f(Attributes);
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
    anObject$f(O);
    P = toPropertyKey(P);
    anObject$f(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$a('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$f = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$5;

  var createNonEnumerableProperty$7 = DESCRIPTORS$f ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltIn$3 = {exports: {}};

  var DESCRIPTORS$e = descriptors;
  var hasOwn$b = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$e && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$b(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$e || (DESCRIPTORS$e && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$x = functionUncurryThis;
  var isCallable$d = isCallable$j;
  var store$1 = sharedStoreExports;

  var functionToString = uncurryThis$x(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$d(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var globalThis$g = globalThis_1;
  var isCallable$c = isCallable$j;

  var WeakMap$1 = globalThis$g.WeakMap;

  var weakMapBasicDetection = isCallable$c(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var shared$2 = shared$4;
  var uid = uid$2;

  var keys$1 = shared$2('keys');

  var sharedKey$3 = function (key) {
    return keys$1[key] || (keys$1[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var globalThis$f = globalThis_1;
  var isObject$9 = isObject$e;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$7;
  var hasOwn$a = hasOwnProperty_1;
  var shared$1 = sharedStoreExports;
  var sharedKey$2 = sharedKey$3;
  var hiddenKeys$3 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$4 = globalThis$f.TypeError;
  var WeakMap = globalThis$f.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$9(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError$4('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$1.state) {
    var store = shared$1.state || (shared$1.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
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
      if (hasOwn$a(it, STATE)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$6(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$a(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$a(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis$w = functionUncurryThis;
  var fails$r = fails$y;
  var isCallable$b = isCallable$j;
  var hasOwn$9 = hasOwnProperty_1;
  var DESCRIPTORS$d = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var inspectSource$1 = inspectSource$2;
  var InternalStateModule$4 = internalState;

  var enforceInternalState$1 = InternalStateModule$4.enforce;
  var getInternalState$3 = InternalStateModule$4.get;
  var $String$2 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$7 = Object.defineProperty;
  var stringSlice$a = uncurryThis$w(''.slice);
  var replace$7 = uncurryThis$w(''.replace);
  var join$4 = uncurryThis$w([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$d && !fails$r(function () {
    return defineProperty$7(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$a($String$2(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$7($String$2(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$9(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      if (DESCRIPTORS$d) defineProperty$7(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$9(options, 'arity') && value.length !== options.arity) {
      defineProperty$7(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$9(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$d) defineProperty$7(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState$1(value);
    if (!hasOwn$9(state, 'source')) {
      state.source = join$4(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$b(this) && getInternalState$3(this).source || inspectSource$1(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$3.exports;

  var isCallable$a = isCallable$j;
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$a = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$a(value)) makeBuiltIn$1(value, name, options);
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
  var floor$4 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$4 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$5 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$4 = toIntegerOrInfinity$5;

  var max$3 = Math.max;
  var min$6 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$4 = function (index, length) {
    var integer = toIntegerOrInfinity$4(index);
    return integer < 0 ? max$3(integer + length, 0) : min$6(integer, length);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$5;

  var min$5 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$6 = function (argument) {
    var len = toIntegerOrInfinity$3(argument);
    return len > 0 ? min$5(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$5 = toLength$6;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$7 = function (obj) {
    return toLength$5(obj.length);
  };

  var toIndexedObject$6 = toIndexedObject$8;
  var toAbsoluteIndex$3 = toAbsoluteIndex$4;
  var lengthOfArrayLike$6 = lengthOfArrayLike$7;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$4 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$6($this);
      var length = lengthOfArrayLike$6(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex$3(fromIndex, length);
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
    includes: createMethod$4(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$4(false)
  };

  var uncurryThis$v = functionUncurryThis;
  var hasOwn$8 = hasOwnProperty_1;
  var toIndexedObject$5 = toIndexedObject$8;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$8 = uncurryThis$v([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$5(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$8(hiddenKeys$2, key) && hasOwn$8(O, key) && push$8(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$8(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$8(result, key);
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

  var getBuiltIn$4 = getBuiltIn$6;
  var uncurryThis$u = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$e = anObject$g;

  var concat$2 = uncurryThis$u([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$e(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$7 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$2 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$7(target, key) && !(exceptions && hasOwn$7(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$q = fails$y;
  var isCallable$9 = isCallable$j;

  var replacement = /#|\.prototype\./;

  var isForced$3 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true
      : value === NATIVE ? false
      : isCallable$9(detection) ? fails$q(detection)
      : !!detection;
  };

  var normalize = isForced$3.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$3.data = {};
  var NATIVE = isForced$3.NATIVE = 'N';
  var POLYFILL = isForced$3.POLYFILL = 'P';

  var isForced_1 = isForced$3;

  var globalThis$e = globalThis_1;
  var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$7;
  var defineBuiltIn$9 = defineBuiltIn$a;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties$1 = copyConstructorProperties$2;
  var isForced$2 = isForced_1;

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
      target = globalThis$e;
    } else if (STATIC) {
      target = globalThis$e[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = globalThis$e[TARGET] && globalThis$e[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$5(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties$1(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$5(sourceProperty, 'sham', true);
      }
      defineBuiltIn$9(target, key, sourceProperty, options);
    }
  };

  var classof$8 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$5 = Array.isArray || function isArray(argument) {
    return classof$8(argument) === 'Array';
  };

  var $TypeError$9 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$2 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$9('Maximum allowed index exceeded');
    return it;
  };

  var DESCRIPTORS$c = descriptors;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$5;

  var createProperty$4 = function (object, key, value) {
    if (DESCRIPTORS$c) definePropertyModule$1.f(object, key, createPropertyDescriptor$2(0, value));
    else object[key] = value;
  };

  var wellKnownSymbol$l = wellKnownSymbol$n;

  var TO_STRING_TAG$2 = wellKnownSymbol$l('toStringTag');
  var test$2 = {};

  test$2[TO_STRING_TAG$2] = 'z';

  var toStringTagSupport = String(test$2) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$8 = isCallable$j;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$k = wellKnownSymbol$n;

  var TO_STRING_TAG$1 = wellKnownSymbol$k('toStringTag');
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
  var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) === 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$t = functionUncurryThis;
  var fails$p = fails$y;
  var isCallable$7 = isCallable$j;
  var classof$6 = classof$7;
  var getBuiltIn$3 = getBuiltIn$6;
  var inspectSource = inspectSource$2;

  var noop = function () { /* empty */ };
  var construct = getBuiltIn$3('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$6 = uncurryThis$t(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$7(argument)) return false;
    try {
      construct(noop, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$7(argument)) return false;
    switch (classof$6(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$6(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$4 = !construct || fails$p(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$4 = isArray$5;
  var isConstructor$3 = isConstructor$4;
  var isObject$8 = isObject$e;
  var wellKnownSymbol$j = wellKnownSymbol$n;

  var SPECIES$5 = wellKnownSymbol$j('species');
  var $Array$2 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$4(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$3(C) && (C === $Array$2 || isArray$4(C.prototype))) C = undefined;
      else if (isObject$8(C)) {
        C = C[SPECIES$5];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$2 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$3 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var fails$o = fails$y;
  var wellKnownSymbol$i = wellKnownSymbol$n;
  var V8_VERSION$1 = environmentV8Version;

  var SPECIES$4 = wellKnownSymbol$i('species');

  var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$o(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$4] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$t = _export;
  var fails$n = fails$y;
  var isArray$3 = isArray$5;
  var isObject$7 = isObject$e;
  var toObject$a = toObject$c;
  var lengthOfArrayLike$5 = lengthOfArrayLike$7;
  var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
  var createProperty$3 = createProperty$4;
  var arraySpeciesCreate$2 = arraySpeciesCreate$3;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$h = wellKnownSymbol$n;
  var V8_VERSION = environmentV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$h('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$n(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$7(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$3(O);
  };

  var FORCED$7 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$4('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$t({ target: 'Array', proto: true, arity: 1, forced: FORCED$7 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$a(this);
      var A = arraySpeciesCreate$2(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$5(E);
          doesNotExceedSafeInteger$1(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$3(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger$1(n + 1);
          createProperty$3(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$s = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$s(fn);
  };

  var uncurryThis$r = functionUncurryThisClause;
  var aCallable$3 = aCallable$5;
  var NATIVE_BIND$1 = functionBindNative;

  var bind$4 = uncurryThis$r(uncurryThis$r.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$3(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$4(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var bind$3 = functionBindContext;
  var uncurryThis$q = functionUncurryThis;
  var IndexedObject$2 = indexedObject;
  var toObject$9 = toObject$c;
  var lengthOfArrayLike$4 = lengthOfArrayLike$7;
  var arraySpeciesCreate$1 = arraySpeciesCreate$3;

  var push$7 = uncurryThis$q([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$3 = function (TYPE) {
    var IS_MAP = TYPE === 1;
    var IS_FILTER = TYPE === 2;
    var IS_SOME = TYPE === 3;
    var IS_EVERY = TYPE === 4;
    var IS_FIND_INDEX = TYPE === 6;
    var IS_FILTER_REJECT = TYPE === 7;
    var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$9($this);
      var self = IndexedObject$2(O);
      var length = lengthOfArrayLike$4(self);
      var boundFunction = bind$3(callbackfn, that);
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
            case 2: push$7(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$7(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$3(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$3(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$3(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$3(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$3(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$3(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$3(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$3(7)
  };

  var $$s = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$s({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
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

  var DESCRIPTORS$b = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule = objectDefineProperty;
  var anObject$d = anObject$g;
  var toIndexedObject$4 = toIndexedObject$8;
  var objectKeys$2 = objectKeys$3;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$b && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$d(O);
    var props = toIndexedObject$4(Properties);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$2 = getBuiltIn$6;

  var html$1 = getBuiltIn$2('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject$c = anObject$g;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement$1 = documentCreateElement$2;
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
    // eslint-disable-next-line no-useless-assignment -- avoid memory leak
    activeXDocument = null;
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
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
      EmptyConstructor[PROTOTYPE] = anObject$c(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol$g = wellKnownSymbol$n;
  var create$4 = objectCreate;
  var defineProperty$6 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$g('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
    defineProperty$6(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$4(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$4 = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var $$r = _export;
  var $find = arrayIteration.find;
  var addToUnscopables$3 = addToUnscopables$4;

  var FIND = 'find';
  var SKIPS_HOLES$1 = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-find -- testing
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES$1 = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$r({ target: 'Array', proto: true, forced: SKIPS_HOLES$1 }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$3(FIND);

  var $$q = _export;
  var $findIndex = arrayIteration.findIndex;
  var addToUnscopables$2 = addToUnscopables$4;

  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-findindex -- testing
  if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findindex
  $$q({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    findIndex: function findIndex(callbackfn /* , that = undefined */) {
      return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$2(FIND_INDEX);

  var $$p = _export;
  var $includes = arrayIncludes.includes;
  var fails$m = fails$y;
  var addToUnscopables$1 = addToUnscopables$4;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$m(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$p({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('includes');

  var fails$l = fails$y;

  var arrayMethodIsStrict$4 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$l(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */
  var $$o = _export;
  var uncurryThis$p = functionUncurryThisClause;
  var $indexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;

  var nativeIndexOf = uncurryThis$p([].indexOf);

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$6 = NEGATIVE_ZERO || !arrayMethodIsStrict$3('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$o({ target: 'Array', proto: true, forced: FORCED$6 }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf(this, searchElement, fromIndex) || 0
        : $indexOf(this, searchElement, fromIndex);
    }
  });

  var iterators = {};

  var fails$k = fails$y;

  var correctPrototypeGetter = !fails$k(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$6 = hasOwnProperty_1;
  var isCallable$6 = isCallable$j;
  var toObject$8 = toObject$c;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$1 ? $Object.getPrototypeOf : function (O) {
    var object = toObject$8(O);
    if (hasOwn$6(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$6(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype : null;
  };

  var fails$j = fails$y;
  var isCallable$5 = isCallable$j;
  var isObject$6 = isObject$e;
  var getPrototypeOf$1 = objectGetPrototypeOf$1;
  var defineBuiltIn$8 = defineBuiltIn$a;
  var wellKnownSymbol$f = wellKnownSymbol$n;

  var ITERATOR$8 = wellKnownSymbol$f('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject$6(IteratorPrototype$2) || fails$j(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$8].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$5(IteratorPrototype$2[ITERATOR$8])) {
    defineBuiltIn$8(IteratorPrototype$2, ITERATOR$8, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$5 = objectDefineProperty.f;
  var hasOwn$5 = hasOwnProperty_1;
  var wellKnownSymbol$e = wellKnownSymbol$n;

  var TO_STRING_TAG = wellKnownSymbol$e('toStringTag');

  var setToStringTag$5 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$5(target, TO_STRING_TAG)) {
      defineProperty$5(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$3 = objectCreate;
  var createPropertyDescriptor$1 = createPropertyDescriptor$5;
  var setToStringTag$4 = setToStringTag$5;
  var Iterators$4 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$3(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
    setToStringTag$4(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$4[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$o = functionUncurryThis;
  var aCallable$2 = aCallable$5;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$o(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isObject$5 = isObject$e;

  var isPossiblePrototype$1 = function (argument) {
    return isObject$5(argument) || argument === null;
  };

  var isPossiblePrototype = isPossiblePrototype$1;

  var $String$1 = String;
  var $TypeError$8 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError$8("Can't set " + $String$1(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */
  var uncurryThisAccessor = functionUncurryThisAccessor;
  var isObject$4 = isObject$e;
  var requireObjectCoercible$9 = requireObjectCoercible$c;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      requireObjectCoercible$9(O);
      aPossiblePrototype(proto);
      if (!isObject$4(O)) return O;
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$n = _export;
  var call$f = functionCall;
  var FunctionName = functionName;
  var isCallable$4 = isCallable$j;
  var createIteratorConstructor$1 = iteratorCreateConstructor;
  var getPrototypeOf = objectGetPrototypeOf$1;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var setToStringTag$3 = setToStringTag$5;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$7;
  var defineBuiltIn$7 = defineBuiltIn$a;
  var wellKnownSymbol$d = wellKnownSymbol$n;
  var Iterators$3 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$7 = wellKnownSymbol$d('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor$1(IteratorConstructor, NAME, next);

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
    var nativeIterator = IterablePrototype[ITERATOR$7]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$1) {
            setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$7])) {
            defineBuiltIn$7(CurrentIteratorPrototype, ITERATOR$7, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$3(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$2 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$4(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$f(nativeIterator, this); };
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
          defineBuiltIn$7(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$n({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
      defineBuiltIn$7(IterablePrototype, ITERATOR$7, defaultIterator, { name: DEFAULT });
    }
    Iterators$3[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$3 = function (value, done) {
    return { value: value, done: done };
  };

  var toIndexedObject$3 = toIndexedObject$8;
  var addToUnscopables = addToUnscopables$4;
  var Iterators$2 = iterators;
  var InternalStateModule$3 = internalState;
  var defineProperty$4 = objectDefineProperty.f;
  var defineIterator$1 = iteratorDefine;
  var createIterResultObject$2 = createIterResultObject$3;
  var DESCRIPTORS$a = descriptors;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$3 = InternalStateModule$3.set;
  var getInternalState$2 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);

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
  var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
    setInternalState$3(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$3(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$2(this);
    var target = state.target;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = null;
      return createIterResultObject$2(undefined, true);
    }
    switch (state.kind) {
      case 'keys': return createIterResultObject$2(index, false);
      case 'values': return createIterResultObject$2(target[index], false);
    } return createIterResultObject$2([index, target[index]], false);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  var values = Iterators$2.Arguments = Iterators$2.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  // V8 ~ Chrome 45- bug
  if (DESCRIPTORS$a && values.name !== 'values') try {
    defineProperty$4(values, 'name', { value: 'values' });
  } catch (error) { /* empty */ }

  var $$m = _export;
  var uncurryThis$n = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toIndexedObject$2 = toIndexedObject$8;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$4;

  var nativeJoin = uncurryThis$n([].join);

  var ES3_STRINGS = IndexedObject$1 !== Object;
  var FORCED$5 = ES3_STRINGS || !arrayMethodIsStrict$2('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$m({ target: 'Array', proto: true, forced: FORCED$5 }, {
    join: function join(separator) {
      return nativeJoin(toIndexedObject$2(this), separator === undefined ? ',' : separator);
    }
  });

  var $$l = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$l({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$k = _export;
  var uncurryThis$m = functionUncurryThis;
  var isArray$2 = isArray$5;

  var nativeReverse = uncurryThis$m([].reverse);
  var test$1 = [1, 2];

  // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794
  $$k({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray$2(this)) this.length = this.length;
      return nativeReverse(this);
    }
  });

  var uncurryThis$l = functionUncurryThis;

  var arraySlice$2 = uncurryThis$l([].slice);

  var $$j = _export;
  var isArray$1 = isArray$5;
  var isConstructor$2 = isConstructor$4;
  var isObject$3 = isObject$e;
  var toAbsoluteIndex$2 = toAbsoluteIndex$4;
  var lengthOfArrayLike$3 = lengthOfArrayLike$7;
  var toIndexedObject$1 = toIndexedObject$8;
  var createProperty$2 = createProperty$4;
  var wellKnownSymbol$c = wellKnownSymbol$n;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
  var nativeSlice = arraySlice$2;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');

  var SPECIES$3 = wellKnownSymbol$c('species');
  var $Array$1 = Array;
  var max$2 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$j({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$1(this);
      var length = lengthOfArrayLike$3(O);
      var k = toAbsoluteIndex$2(start, length);
      var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$1(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor$2(Constructor) && (Constructor === $Array$1 || isArray$1(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$3(Constructor)) {
          Constructor = Constructor[SPECIES$3];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === $Array$1 || Constructor === undefined) {
          return nativeSlice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? $Array$1 : Constructor)(max$2(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var tryToString$2 = tryToString$4;

  var $TypeError$7 = TypeError;

  var deletePropertyOrThrow$2 = function (O, P) {
    if (!delete O[P]) throw new $TypeError$7('Cannot delete property ' + tryToString$2(P) + ' of ' + tryToString$2(O));
  };

  var classof$5 = classof$7;

  var $String = String;

  var toString$g = function (argument) {
    if (classof$5(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };

  var arraySlice$1 = arraySlice$2;

  var floor$3 = Math.floor;

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
      var middle = floor$3(length / 2);
      var left = sort(arraySlice$1(array, 0, middle), comparefn);
      var right = sort(arraySlice$1(array, middle), comparefn);
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

  var arraySort$1 = sort;

  var userAgent$1 = environmentUserAgent;

  var firefox = userAgent$1.match(/firefox\/(\d+)/i);

  var environmentFfVersion = !!firefox && +firefox[1];

  var UA = environmentUserAgent;

  var environmentIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent = environmentUserAgent;

  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

  var environmentWebkitVersion = !!webkit && +webkit[1];

  var $$i = _export;
  var uncurryThis$k = functionUncurryThis;
  var aCallable$1 = aCallable$5;
  var toObject$7 = toObject$c;
  var lengthOfArrayLike$2 = lengthOfArrayLike$7;
  var deletePropertyOrThrow$1 = deletePropertyOrThrow$2;
  var toString$f = toString$g;
  var fails$i = fails$y;
  var internalSort = arraySort$1;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$4;
  var FF = environmentFfVersion;
  var IE_OR_EDGE = environmentIsIeOrEdge;
  var V8 = environmentV8Version;
  var WEBKIT = environmentWebkitVersion;

  var test = [];
  var nativeSort = uncurryThis$k(test.sort);
  var push$6 = uncurryThis$k(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$i(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$i(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD$1 = arrayMethodIsStrict$1('sort');

  var STABLE_SORT = !fails$i(function () {
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

  var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$f(x) > toString$f(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$i({ target: 'Array', proto: true, forced: FORCED$4 }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable$1(comparefn);

      var array = toObject$7(this);

      if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

      var items = [];
      var arrayLength = lengthOfArrayLike$2(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$6(items, array[index]);
      }

      internalSort(items, getSortCompare(comparefn));

      itemsLength = lengthOfArrayLike$2(items);
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow$1(array, index++);

      return array;
    }
  });

  var DESCRIPTORS$9 = descriptors;
  var isArray = isArray$5;

  var $TypeError$6 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$9 && !function () {
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
    if (isArray(O) && !getOwnPropertyDescriptor$4(O, 'length').writable) {
      throw new $TypeError$6('Cannot set read only .length');
    } return O.length = length;
  } : function (O, length) {
    return O.length = length;
  };

  var $$h = _export;
  var toObject$6 = toObject$c;
  var toAbsoluteIndex$1 = toAbsoluteIndex$4;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$5;
  var lengthOfArrayLike$1 = lengthOfArrayLike$7;
  var setArrayLength = arraySetLength;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
  var arraySpeciesCreate = arraySpeciesCreate$3;
  var createProperty$1 = createProperty$4;
  var deletePropertyOrThrow = deletePropertyOrThrow$2;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

  var max$1 = Math.max;
  var min$4 = Math.min;

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $$h({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject$6(this);
      var len = lengthOfArrayLike$1(O);
      var actualStart = toAbsoluteIndex$1(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$4(max$1(toIntegerOrInfinity$2(deleteCount), 0), len - actualStart);
      }
      doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
      A = arraySpeciesCreate(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty$1(A, k, O[from]);
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

  var $$g = _export;
  var fails$h = fails$y;
  var toObject$5 = toObject$c;
  var toPrimitive$1 = toPrimitive$3;

  var FORCED$3 = fails$h(function () {
    return new Date(NaN).toJSON() !== null
      || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
  });

  // `Date.prototype.toJSON` method
  // https://tc39.es/ecma262/#sec-date.prototype.tojson
  $$g({ target: 'Date', proto: true, arity: 1, forced: FORCED$3 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    toJSON: function toJSON(key) {
      var O = toObject$5(this);
      var pv = toPrimitive$1(O, 'number');
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

  var globalThis$d = globalThis_1;

  var path$1 = globalThis$d;

  var isCallable$3 = isCallable$j;
  var isObject$2 = isObject$e;
  var setPrototypeOf = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$2 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable$3(NewTarget = dummy.constructor) &&
      NewTarget !== Wrapper &&
      isObject$2(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var uncurryThis$j = functionUncurryThis;

  // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue
  var thisNumberValue$1 = uncurryThis$j(1.0.valueOf);

  // a string of all valid unicode whitespaces
  var whitespaces$4 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$i = functionUncurryThis;
  var requireObjectCoercible$8 = requireObjectCoercible$c;
  var toString$e = toString$g;
  var whitespaces$3 = whitespaces$4;

  var replace$6 = uncurryThis$i(''.replace);
  var ltrim = RegExp('^[' + whitespaces$3 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$3 + '])[' + whitespaces$3 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$2 = function (TYPE) {
    return function ($this) {
      var string = toString$e(requireObjectCoercible$8($this));
      if (TYPE & 1) string = replace$6(string, ltrim, '');
      if (TYPE & 2) string = replace$6(string, rtrim, '$1');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$2(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$2(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$2(3)
  };

  var $$f = _export;
  var IS_PURE$1 = isPure;
  var DESCRIPTORS$8 = descriptors;
  var globalThis$c = globalThis_1;
  var path = path$1;
  var uncurryThis$h = functionUncurryThis;
  var isForced$1 = isForced_1;
  var hasOwn$4 = hasOwnProperty_1;
  var inheritIfRequired$1 = inheritIfRequired$2;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var isSymbol = isSymbol$3;
  var toPrimitive = toPrimitive$3;
  var fails$g = fails$y;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
  var defineProperty$3 = objectDefineProperty.f;
  var thisNumberValue = thisNumberValue$1;
  var trim$2 = stringTrim.trim;

  var NUMBER = 'Number';
  var NativeNumber = globalThis$c[NUMBER];
  path[NUMBER];
  var NumberPrototype = NativeNumber.prototype;
  var TypeError$3 = globalThis$c.TypeError;
  var stringSlice$9 = uncurryThis$h(''.slice);
  var charCodeAt$2 = uncurryThis$h(''.charCodeAt);

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
    if (isSymbol(it)) throw new TypeError$3('Cannot convert a Symbol value to a number');
    if (typeof it == 'string' && it.length > 2) {
      it = trim$2(it);
      first = charCodeAt$2(it, 0);
      if (first === 43 || first === 45) {
        third = charCodeAt$2(it, 2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (charCodeAt$2(it, 1)) {
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
        digits = stringSlice$9(it, 2);
        length = digits.length;
        for (index = 0; index < length; index++) {
          code = charCodeAt$2(digits, index);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        } return parseInt(digits, radix);
      }
    } return +it;
  };

  var FORCED$2 = isForced$1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

  var calledWithNew = function (dummy) {
    // includes check on 1..constructor(foo) case
    return isPrototypeOf$3(NumberPrototype, dummy) && fails$g(function () { thisNumberValue(dummy); });
  };

  // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    return calledWithNew(this) ? inheritIfRequired$1(Object(n), this, NumberWrapper) : n;
  };

  NumberWrapper.prototype = NumberPrototype;
  if (FORCED$2 && !IS_PURE$1) NumberPrototype.constructor = NumberWrapper;

  $$f({ global: true, constructor: true, wrap: true, forced: FORCED$2 }, {
    Number: NumberWrapper
  });

  // Use `internal/copy-constructor-properties` helper in `core-js@4`
  var copyConstructorProperties = function (target, source) {
    for (var keys = DESCRIPTORS$8 ? getOwnPropertyNames$1(source) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES2015 (in case, if modules with ES2015 Number statics required before):
      'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
      // ESNext
      'fromString,range'
    ).split(','), j = 0, key; keys.length > j; j++) {
      if (hasOwn$4(source, key = keys[j]) && !hasOwn$4(target, key)) {
        defineProperty$3(target, key, getOwnPropertyDescriptor$3(source, key));
      }
    }
  };
  if (FORCED$2 || IS_PURE$1) copyConstructorProperties(path[NUMBER], NativeNumber);

  var DESCRIPTORS$7 = descriptors;
  var uncurryThis$g = functionUncurryThis;
  var call$e = functionCall;
  var fails$f = fails$y;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$4 = toObject$c;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$2 = Object.defineProperty;
  var concat$1 = uncurryThis$g([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$f(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$7 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$2(this, 'b', {
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
    var T = toObject$4(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$7 || call$e(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$e = _export;
  var assign$1 = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$e({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$1 }, {
    assign: assign$1
  });

  var DESCRIPTORS$6 = descriptors;
  var fails$e = fails$y;
  var uncurryThis$f = functionUncurryThis;
  var objectGetPrototypeOf = objectGetPrototypeOf$1;
  var objectKeys = objectKeys$3;
  var toIndexedObject = toIndexedObject$8;
  var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

  var propertyIsEnumerable = uncurryThis$f($propertyIsEnumerable);
  var push$5 = uncurryThis$f([].push);

  // in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
  // of `null` prototype objects
  var IE_BUG = DESCRIPTORS$6 && fails$e(function () {
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
        if (!DESCRIPTORS$6 || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
          push$5(result, TO_ENTRIES ? [key, O[key]] : O[key]);
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

  var $$d = _export;
  var $entries = objectToArray.entries;

  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  $$d({ target: 'Object', stat: true }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var $$c = _export;
  var toObject$3 = toObject$c;
  var nativeKeys = objectKeys$3;
  var fails$d = fails$y;

  var FAILS_ON_PRIMITIVES$1 = fails$d(function () { nativeKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$c({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
    keys: function keys(it) {
      return nativeKeys(toObject$3(it));
    }
  });

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$4 = classof$7;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$4(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$6 = defineBuiltIn$a;
  var toString$d = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$6(Object.prototype, 'toString', toString$d, { unsafe: true });
  }

  var globalThis$b = globalThis_1;
  var fails$c = fails$y;
  var uncurryThis$e = functionUncurryThis;
  var toString$c = toString$g;
  var trim$1 = stringTrim.trim;
  var whitespaces$2 = whitespaces$4;

  var charAt$8 = uncurryThis$e(''.charAt);
  var $parseFloat$1 = globalThis$b.parseFloat;
  var Symbol$2 = globalThis$b.Symbol;
  var ITERATOR$6 = Symbol$2 && Symbol$2.iterator;
  var FORCED$1 = 1 / $parseFloat$1(whitespaces$2 + '-0') !== -Infinity
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR$6 && !fails$c(function () { $parseFloat$1(Object(ITERATOR$6)); }));

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  var numberParseFloat = FORCED$1 ? function parseFloat(string) {
    var trimmedString = trim$1(toString$c(string));
    var result = $parseFloat$1(trimmedString);
    return result === 0 && charAt$8(trimmedString, 0) === '-' ? -0 : result;
  } : $parseFloat$1;

  var $$b = _export;
  var $parseFloat = numberParseFloat;

  // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  $$b({ global: true, forced: parseFloat !== $parseFloat }, {
    parseFloat: $parseFloat
  });

  var globalThis$a = globalThis_1;
  var fails$b = fails$y;
  var uncurryThis$d = functionUncurryThis;
  var toString$b = toString$g;
  var trim = stringTrim.trim;
  var whitespaces$1 = whitespaces$4;

  var $parseInt$2 = globalThis$a.parseInt;
  var Symbol$1 = globalThis$a.Symbol;
  var ITERATOR$5 = Symbol$1 && Symbol$1.iterator;
  var hex = /^[+-]?0x/i;
  var exec$5 = uncurryThis$d(hex.exec);
  var FORCED = $parseInt$2(whitespaces$1 + '08') !== 8 || $parseInt$2(whitespaces$1 + '0x16') !== 22
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR$5 && !fails$b(function () { $parseInt$2(Object(ITERATOR$5)); }));

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED ? function parseInt(string, radix) {
    var S = trim(toString$b(string));
    return $parseInt$2(S, (radix >>> 0) || (exec$5(hex, S) ? 16 : 10));
  } : $parseInt$2;

  var $$a = _export;
  var $parseInt$1 = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$a({ global: true, forced: parseInt !== $parseInt$1 }, {
    parseInt: $parseInt$1
  });

  var isObject$1 = isObject$e;
  var classof$3 = classofRaw$2;
  var wellKnownSymbol$b = wellKnownSymbol$n;

  var MATCH$2 = wellKnownSymbol$b('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$1(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$3(it) === 'RegExp');
  };

  var anObject$b = anObject$g;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$b(this);
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

  var call$d = functionCall;
  var hasOwn$3 = hasOwnProperty_1;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;

  var RegExpPrototype$3 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$3) && !hasOwn$3(R, 'flags') && isPrototypeOf$2(RegExpPrototype$3, R)
      ? call$d(regExpFlags, R) : flags;
  };

  var fails$a = fails$y;
  var globalThis$9 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = globalThis$9.RegExp;

  var UNSUPPORTED_Y$3 = fails$a(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') !== null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY$1 = UNSUPPORTED_Y$3 || fails$a(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$a(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') !== null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$1,
    UNSUPPORTED_Y: UNSUPPORTED_Y$3
  };

  var defineProperty$1 = objectDefineProperty.f;

  var proxyAccessor$1 = function (Target, Source, key) {
    key in Target || defineProperty$1(Target, key, {
      configurable: true,
      get: function () { return Source[key]; },
      set: function (it) { Source[key] = it; }
    });
  };

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty = objectDefineProperty;

  var defineBuiltInAccessor$3 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty.f(target, name, descriptor);
  };

  var getBuiltIn$1 = getBuiltIn$6;
  var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
  var wellKnownSymbol$a = wellKnownSymbol$n;
  var DESCRIPTORS$5 = descriptors;

  var SPECIES$2 = wellKnownSymbol$a('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$1(CONSTRUCTOR_NAME);

    if (DESCRIPTORS$5 && Constructor && !Constructor[SPECIES$2]) {
      defineBuiltInAccessor$2(Constructor, SPECIES$2, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var fails$9 = fails$y;
  var globalThis$8 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = globalThis$8.RegExp;

  var regexpUnsupportedDotAll = fails$9(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.test('\n') && re.flags === 's');
  });

  var fails$8 = fails$y;
  var globalThis$7 = globalThis_1;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = globalThis$7.RegExp;

  var regexpUnsupportedNcg = fails$8(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  var DESCRIPTORS$4 = descriptors;
  var globalThis$6 = globalThis_1;
  var uncurryThis$c = functionUncurryThis;
  var isForced = isForced_1;
  var inheritIfRequired = inheritIfRequired$2;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$7;
  var create$2 = objectCreate;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var isRegExp$1 = isRegexp;
  var toString$a = toString$g;
  var getRegExpFlags$1 = regexpGetFlags;
  var stickyHelpers$2 = regexpStickyHelpers;
  var proxyAccessor = proxyAccessor$1;
  var defineBuiltIn$5 = defineBuiltIn$a;
  var fails$7 = fails$y;
  var hasOwn$2 = hasOwnProperty_1;
  var enforceInternalState = internalState.enforce;
  var setSpecies = setSpecies$1;
  var wellKnownSymbol$9 = wellKnownSymbol$n;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

  var MATCH$1 = wellKnownSymbol$9('match');
  var NativeRegExp = globalThis$6.RegExp;
  var RegExpPrototype$2 = NativeRegExp.prototype;
  var SyntaxError = globalThis$6.SyntaxError;
  var exec$4 = uncurryThis$c(RegExpPrototype$2.exec);
  var charAt$7 = uncurryThis$c(''.charAt);
  var replace$5 = uncurryThis$c(''.replace);
  var stringIndexOf$2 = uncurryThis$c(''.indexOf);
  var stringSlice$8 = uncurryThis$c(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  var MISSED_STICKY = stickyHelpers$2.MISSED_STICKY;
  var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y;

  var BASE_FORCED = DESCRIPTORS$4 &&
    (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1 || fails$7(function () {
      re2[MATCH$1] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      // eslint-disable-next-line sonar/inconsistent-function-call -- required for testing
      return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
    }));

  var handleDotAll = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for (; index <= length; index++) {
      chr = charAt$7(string, index);
      if (chr === '\\') {
        result += chr + charAt$7(string, ++index);
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
    var names = create$2(null);
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for (; index <= length; index++) {
      chr = charAt$7(string, index);
      if (chr === '\\') {
        chr += charAt$7(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;
        case chr === '(':
          result += chr;
          // ignore non-capturing groups
          if (stringSlice$8(string, index + 1, index + 3) === '?:') {
            continue;
          }
          if (exec$4(IS_NCG, stringSlice$8(string, index + 1))) {
            index += 2;
            ncg = true;
          }
          groupid++;
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwn$2(names, groupname)) {
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
      var thisIsRegExp = isPrototypeOf$1(RegExpPrototype$2, this);
      var patternIsRegExp = isRegExp$1(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;

      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }

      if (patternIsRegExp || isPrototypeOf$1(RegExpPrototype$2, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
      }

      pattern = pattern === undefined ? '' : toString$a(pattern);
      flags = flags === undefined ? '' : toString$a(flags);
      rawPattern = pattern;

      if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$2(flags, 's') > -1;
        if (dotAll) flags = replace$5(flags, /s/g, '');
      }

      rawFlags = flags;

      if (MISSED_STICKY && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$2(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y$2) flags = replace$5(flags, /y/g, '');
      }

      if (UNSUPPORTED_NCG$1) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$2, RegExpWrapper);

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
        createNonEnumerableProperty$3(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) { /* empty */ }

      return result;
    };

    for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
    }

    RegExpPrototype$2.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$2;
    defineBuiltIn$5(globalThis$6, 'RegExp', RegExpWrapper, { constructor: true });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$c = functionCall;
  var uncurryThis$b = functionUncurryThis;
  var toString$9 = toString$g;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$1 = regexpStickyHelpers;
  var shared = shared$4;
  var create$1 = objectCreate;
  var getInternalState$1 = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$6 = uncurryThis$b(''.charAt);
  var indexOf = uncurryThis$b(''.indexOf);
  var replace$4 = uncurryThis$b(''.replace);
  var stringSlice$7 = uncurryThis$b(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$c(nativeExec, re1, 'a');
    call$c(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$1(re);
      var str = toString$9(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$c(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = call$c(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$4(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$7(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$6(str, re.lastIndex - 1) !== '\n')) {
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

      match = call$c(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$7(match.input, charsAdded);
          match[0] = stringSlice$7(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$c(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create$1(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var $$9 = _export;
  var exec$3 = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$9({ target: 'RegExp', proto: true, forced: /./.exec !== exec$3 }, {
    exec: exec$3
  });

  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var defineBuiltIn$4 = defineBuiltIn$a;
  var anObject$a = anObject$g;
  var $toString$2 = toString$g;
  var fails$6 = fails$y;
  var getRegExpFlags = regexpGetFlags;

  var TO_STRING = 'toString';
  var RegExpPrototype$1 = RegExp.prototype;
  var nativeToString = RegExpPrototype$1[TO_STRING];

  var NOT_GENERIC = fails$6(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name !== TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn$4(RegExpPrototype$1, TO_STRING, function toString() {
      var R = anObject$a(this);
      var pattern = $toString$2(R.source);
      var flags = $toString$2(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, { unsafe: true });
  }

  var isRegExp = isRegexp;

  var $TypeError$5 = TypeError;

  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw new $TypeError$5("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol$8 = wellKnownSymbol$n;

  var MATCH = wellKnownSymbol$8('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
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

  var $$8 = _export;
  var uncurryThis$a = functionUncurryThis;
  var notARegExp$2 = notARegexp;
  var requireObjectCoercible$7 = requireObjectCoercible$c;
  var toString$8 = toString$g;
  var correctIsRegExpLogic$2 = correctIsRegexpLogic;

  var stringIndexOf$1 = uncurryThis$a(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$8({ target: 'String', proto: true, forced: !correctIsRegExpLogic$2('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf$1(
        toString$8(requireObjectCoercible$7(this)),
        toString$8(notARegExp$2(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  var uncurryThis$9 = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$5;
  var toString$7 = toString$g;
  var requireObjectCoercible$6 = requireObjectCoercible$c;

  var charAt$5 = uncurryThis$9(''.charAt);
  var charCodeAt$1 = uncurryThis$9(''.charCodeAt);
  var stringSlice$6 = uncurryThis$9(''.slice);

  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$7(requireObjectCoercible$6($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$1(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$5(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$6(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var charAt$4 = stringMultibyte.charAt;
  var toString$6 = toString$g;
  var InternalStateModule$2 = internalState;
  var defineIterator = iteratorDefine;
  var createIterResultObject$1 = createIterResultObject$3;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState = InternalStateModule$2.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: toString$6(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject$1(undefined, true);
    point = charAt$4(string, index);
    state.index += point.length;
    return createIterResultObject$1(point, false);
  });

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$1 = FunctionPrototype.apply;
  var call$b = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$b.bind(apply$1) : function () {
    return call$b.apply(apply$1, arguments);
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var call$a = functionCall;
  var defineBuiltIn$3 = defineBuiltIn$a;
  var regexpExec$1 = regexpExec$2;
  var fails$5 = fails$y;
  var wellKnownSymbol$7 = wellKnownSymbol$n;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$7;

  var SPECIES$1 = wellKnownSymbol$7('species');
  var RegExpPrototype = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$7(KEY);

    var DELEGATES_TO_SYMBOL = !fails$5(function () {
      // String methods call symbol-named RegExp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) !== 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$5(function () {
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
        re.constructor[SPECIES$1] = function () { return re; };
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
        if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: call$a(nativeRegExpMethod, regexp, str, arg2) };
          }
          return { done: true, value: call$a(nativeMethod, str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn$3(String.prototype, KEY, methods[0]);
      defineBuiltIn$3(RegExpPrototype, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$2(RegExpPrototype[SYMBOL], 'sham', true);
  };

  var charAt$3 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$3 = function (S, index, unicode) {
    return index + (unicode ? charAt$3(S, index).length : 1);
  };

  var uncurryThis$8 = functionUncurryThis;
  var toObject$2 = toObject$c;

  var floor$2 = Math.floor;
  var charAt$2 = uncurryThis$8(''.charAt);
  var replace$3 = uncurryThis$8(''.replace);
  var stringSlice$5 = uncurryThis$8(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$2(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$3(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt$2(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$5(str, 0, position);
        case "'": return stringSlice$5(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$5(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$2(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$2(ch, 1) : captures[f - 1] + charAt$2(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var call$9 = functionCall;
  var anObject$9 = anObject$g;
  var isCallable$2 = isCallable$j;
  var classof$2 = classofRaw$2;
  var regexpExec = regexpExec$2;

  var $TypeError$4 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$2(exec)) {
      var result = call$9(exec, R, S);
      if (result !== null) anObject$9(result);
      return result;
    }
    if (classof$2(R) === 'RegExp') return call$9(regexpExec, R, S);
    throw new $TypeError$4('RegExp#exec called on incompatible receiver');
  };

  var apply = functionApply;
  var call$8 = functionCall;
  var uncurryThis$7 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
  var fails$4 = fails$y;
  var anObject$8 = anObject$g;
  var isCallable$1 = isCallable$j;
  var isNullOrUndefined$5 = isNullOrUndefined$8;
  var toIntegerOrInfinity = toIntegerOrInfinity$5;
  var toLength$4 = toLength$6;
  var toString$5 = toString$g;
  var requireObjectCoercible$5 = requireObjectCoercible$c;
  var advanceStringIndex$2 = advanceStringIndex$3;
  var getMethod$5 = getMethod$7;
  var getSubstitution = getSubstitution$1;
  var regExpExec$3 = regexpExecAbstract;
  var wellKnownSymbol$6 = wellKnownSymbol$n;

  var REPLACE = wellKnownSymbol$6('replace');
  var max = Math.max;
  var min$3 = Math.min;
  var concat = uncurryThis$7([].concat);
  var push$4 = uncurryThis$7([].push);
  var stringIndexOf = uncurryThis$7(''.indexOf);
  var stringSlice$4 = uncurryThis$7(''.slice);

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

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$4(function () {
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
  fixRegExpWellKnownSymbolLogic$3('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible$5(this);
        var replacer = isNullOrUndefined$5(searchValue) ? undefined : getMethod$5(searchValue, REPLACE);
        return replacer
          ? call$8(replacer, searchValue, O, replaceValue)
          : call$8(nativeReplace, toString$5(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject$8(this);
        var S = toString$5(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable$1(replaceValue);
        if (!functionalReplace) replaceValue = toString$5(replaceValue);

        var global = rx.global;
        var fullUnicode;
        if (global) {
          fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }

        var results = [];
        var result;
        while (true) {
          result = regExpExec$3(rx, S);
          if (result === null) break;

          push$4(results, result);
          if (!global) break;

          var matchStr = toString$5(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$4(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString$5(result[0]);
          var position = max(min$3(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          var replacement;
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push$4(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push$4(replacerArgs, namedCaptures);
            replacement = toString$5(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice$4(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }

        return accumulatedResult + stringSlice$4(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  // `SameValue` abstract operation
  // https://tc39.es/ecma262/#sec-samevalue
  // eslint-disable-next-line es/no-object-is -- safe
  var sameValue$1 = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
  };

  var call$7 = functionCall;
  var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
  var anObject$7 = anObject$g;
  var isNullOrUndefined$4 = isNullOrUndefined$8;
  var requireObjectCoercible$4 = requireObjectCoercible$c;
  var sameValue = sameValue$1;
  var toString$4 = toString$g;
  var getMethod$4 = getMethod$7;
  var regExpExec$2 = regexpExecAbstract;

  // @@search logic
  fixRegExpWellKnownSymbolLogic$2('search', function (SEARCH, nativeSearch, maybeCallNative) {
    return [
      // `String.prototype.search` method
      // https://tc39.es/ecma262/#sec-string.prototype.search
      function search(regexp) {
        var O = requireObjectCoercible$4(this);
        var searcher = isNullOrUndefined$4(regexp) ? undefined : getMethod$4(regexp, SEARCH);
        return searcher ? call$7(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$4(O));
      },
      // `RegExp.prototype[@@search]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
      function (string) {
        var rx = anObject$7(this);
        var S = toString$4(string);
        var res = maybeCallNative(nativeSearch, rx, S);

        if (res.done) return res.value;

        var previousLastIndex = rx.lastIndex;
        if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
        var result = regExpExec$2(rx, S);
        if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
        return result === null ? -1 : result.index;
      }
    ];
  });

  var isConstructor$1 = isConstructor$4;
  var tryToString$1 = tryToString$4;

  var $TypeError$3 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor$1(argument)) return argument;
    throw new $TypeError$3(tryToString$1(argument) + ' is not a constructor');
  };

  var anObject$6 = anObject$g;
  var aConstructor = aConstructor$1;
  var isNullOrUndefined$3 = isNullOrUndefined$8;
  var wellKnownSymbol$5 = wellKnownSymbol$n;

  var SPECIES = wellKnownSymbol$5('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$6(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined$3(S = anObject$6(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
  };

  var call$6 = functionCall;
  var uncurryThis$6 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$5 = anObject$g;
  var isNullOrUndefined$2 = isNullOrUndefined$8;
  var requireObjectCoercible$3 = requireObjectCoercible$c;
  var speciesConstructor = speciesConstructor$1;
  var advanceStringIndex$1 = advanceStringIndex$3;
  var toLength$3 = toLength$6;
  var toString$3 = toString$g;
  var getMethod$3 = getMethod$7;
  var regExpExec$1 = regexpExecAbstract;
  var stickyHelpers = regexpStickyHelpers;
  var fails$3 = fails$y;

  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$2 = Math.min;
  var push$3 = uncurryThis$6([].push);
  var stringSlice$3 = uncurryThis$6(''.slice);

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$3(function () {
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
  fixRegExpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call$6(nativeSplit, this, separator, limit);
    } : nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible$3(this);
        var splitter = isNullOrUndefined$2(separator) ? undefined : getMethod$3(separator, SPLIT);
        return splitter
          ? call$6(splitter, separator, O, limit)
          : call$6(internalSplit, toString$3(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (string, limit) {
        var rx = anObject$5(this);
        var S = toString$3(string);

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
        if (S.length === 0) return regExpExec$1(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
          var z = regExpExec$1(splitter, UNSUPPORTED_Y ? stringSlice$3(S, q) : S);
          var e;
          if (
            z === null ||
            (e = min$2(toLength$3(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
          ) {
            q = advanceStringIndex$1(S, q, unicodeMatching);
          } else {
            push$3(A, stringSlice$3(S, p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              push$3(A, z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        push$3(A, stringSlice$3(S, p));
        return A;
      }
    ];
  }, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$2 = fails$y;
  var whitespaces = whitespaces$4;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$2(function () {
      return !!whitespaces[METHOD_NAME]()
        || non[METHOD_NAME]() !== non
        || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
    });
  };

  var $$7 = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$7({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
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

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement = documentCreateElement$2;

  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict = arrayMethodIsStrict$4;

  var STRICT_METHOD = arrayMethodIsStrict('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var globalThis$5 = globalThis_1;
  var DOMIterables$1 = domIterables;
  var DOMTokenListPrototype$1 = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$7;

  var handlePrototype$1 = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty$1(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    if (DOMIterables$1[COLLECTION_NAME$1]) {
      handlePrototype$1(globalThis$5[COLLECTION_NAME$1] && globalThis$5[COLLECTION_NAME$1].prototype);
    }
  }

  handlePrototype$1(DOMTokenListPrototype$1);

  var globalThis$4 = globalThis_1;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty = createNonEnumerableProperty$7;
  var setToStringTag$2 = setToStringTag$5;
  var wellKnownSymbol$4 = wellKnownSymbol$n;

  var ITERATOR$4 = wellKnownSymbol$4('iterator');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$4] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR$4, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$4] = ArrayValues;
      }
      setToStringTag$2(CollectionPrototype, COLLECTION_NAME, true);
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
    handlePrototype(globalThis$4[COLLECTION_NAME] && globalThis$4[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var fails$1 = fails$y;
  var wellKnownSymbol$3 = wellKnownSymbol$n;
  var DESCRIPTORS$3 = descriptors;
  var IS_PURE = isPure;

  var ITERATOR$3 = wellKnownSymbol$3('iterator');

  var urlConstructorDetection = !fails$1(function () {
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
      || (!params.size && (IS_PURE || !DESCRIPTORS$3))
      || !params.sort
      || url.href !== 'https://a/c%20d?a=1&c=3'
      || params.get('c') !== '3'
      || String(new URLSearchParams('?a=1')) !== 'a=1'
      || !params[ITERATOR$3]
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

  var isPrototypeOf = objectIsPrototypeOf;

  var $TypeError$2 = TypeError;

  var anInstance$2 = function (it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw new $TypeError$2('Incorrect invocation');
  };

  var call$5 = functionCall;
  var anObject$4 = anObject$g;
  var getMethod$2 = getMethod$7;

  var iteratorClose$1 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$4(iterator);
    try {
      innerResult = getMethod$2(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$5(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$4(innerResult);
    return value;
  };

  var anObject$3 = anObject$g;
  var iteratorClose = iteratorClose$1;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$3(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
  };

  var wellKnownSymbol$2 = wellKnownSymbol$n;
  var Iterators$1 = iterators;

  var ITERATOR$2 = wellKnownSymbol$2('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$1 = function (it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
  };

  var classof$1 = classof$7;
  var getMethod$1 = getMethod$7;
  var isNullOrUndefined$1 = isNullOrUndefined$8;
  var Iterators = iterators;
  var wellKnownSymbol$1 = wellKnownSymbol$n;

  var ITERATOR$1 = wellKnownSymbol$1('iterator');

  var getIteratorMethod$3 = function (it) {
    if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR$1)
      || getMethod$1(it, '@@iterator')
      || Iterators[classof$1(it)];
  };

  var call$4 = functionCall;
  var aCallable = aCallable$5;
  var anObject$2 = anObject$g;
  var tryToString = tryToString$4;
  var getIteratorMethod$2 = getIteratorMethod$3;

  var $TypeError$1 = TypeError;

  var getIterator$2 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject$2(call$4(iteratorMethod, argument));
    throw new $TypeError$1(tryToString(argument) + ' is not iterable');
  };

  var bind$2 = functionBindContext;
  var call$3 = functionCall;
  var toObject$1 = toObject$c;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod = isArrayIteratorMethod$1;
  var isConstructor = isConstructor$4;
  var lengthOfArrayLike = lengthOfArrayLike$7;
  var createProperty = createProperty$4;
  var getIterator$1 = getIterator$2;
  var getIteratorMethod$1 = getIteratorMethod$3;

  var $Array = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$1(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$2(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$1(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
      result = IS_CONSTRUCTOR ? new this() : [];
      iterator = getIterator$1(O, iteratorMethod);
      next = iterator.next;
      for (;!(step = call$3(next, iterator)).done; index++) {
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
    result.length = index;
    return result;
  };

  // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
  var uncurryThis$5 = functionUncurryThis;

  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80
  var delimiter = '-'; // '\x2D'
  var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
  var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
  var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var baseMinusTMin = base - tMin;

  var $RangeError$1 = RangeError;
  var exec$2 = uncurryThis$5(regexSeparators.exec);
  var floor$1 = Math.floor;
  var fromCharCode$2 = String.fromCharCode;
  var charCodeAt = uncurryThis$5(''.charCodeAt);
  var join$3 = uncurryThis$5([].join);
  var push$2 = uncurryThis$5([].push);
  var replace$2 = uncurryThis$5(''.replace);
  var split$2 = uncurryThis$5(''.split);
  var toLowerCase$1 = uncurryThis$5(''.toLowerCase);

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */
  var ucs2decode = function (string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while (counter < length) {
      var value = charCodeAt(string, counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = charCodeAt(string, counter++);
        if ((extra & 0xFC00) === 0xDC00) { // Low surrogate.
          push$2(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          push$2(output, value);
          counter--;
        }
      } else {
        push$2(output, value);
      }
    }
    return output;
  };

  /**
   * Converts a digit/integer into a basic code point.
   */
  var digitToBasic = function (digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */
  var adapt = function (delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor$1(delta / damp) : delta >> 1;
    delta += floor$1(delta / numPoints);
    while (delta > baseMinusTMin * tMax >> 1) {
      delta = floor$1(delta / baseMinusTMin);
      k += base;
    }
    return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */
  var encode = function (input) {
    var output = [];

    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);

    // Cache the length.
    var inputLength = input.length;

    // Initialize the state.
    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue;

    // Handle the basic code points.
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < 0x80) {
        push$2(output, fromCharCode$2(currentValue));
      }
    }

    var basicLength = output.length; // number of basic code points.
    var handledCPCount = basicLength; // number of code points that have been handled;

    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) {
      push$2(output, delimiter);
    }

    // Main encoding loop:
    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = maxInt;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }

      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
      var handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
        throw new $RangeError$1(OVERFLOW_ERROR);
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue < n && ++delta > maxInt) {
          throw new $RangeError$1(OVERFLOW_ERROR);
        }
        if (currentValue === n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;
          var k = base;
          while (true) {
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = base - t;
            push$2(output, fromCharCode$2(digitToBasic(t + qMinusT % baseMinusT)));
            q = floor$1(qMinusT / baseMinusT);
            k += base;
          }

          push$2(output, fromCharCode$2(digitToBasic(q)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
          delta = 0;
          handledCPCount++;
        }
      }

      delta++;
      n++;
    }
    return join$3(output, '');
  };

  var stringPunycodeToAscii = function (input) {
    var encoded = [];
    var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
    var i, label;
    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      push$2(encoded, exec$2(regexNonASCII, label) ? 'xn--' + encode(label) : label);
    }
    return join$3(encoded, '.');
  };

  var $TypeError = TypeError;

  var validateArgumentsLength$2 = function (passed, required) {
    if (passed < required) throw new $TypeError('Not enough arguments');
    return passed;
  };

  var $$6 = _export;
  var uncurryThis$4 = functionUncurryThis;
  var toAbsoluteIndex = toAbsoluteIndex$4;

  var $RangeError = RangeError;
  var fromCharCode$1 = String.fromCharCode;
  // eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
  var $fromCodePoint = String.fromCodePoint;
  var join$2 = uncurryThis$4([].join);

  // length should be 1, old FF problem
  var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

  // `String.fromCodePoint` method
  // https://tc39.es/ecma262/#sec-string.fromcodepoint
  $$6({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
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
          ? fromCharCode$1(code)
          : fromCharCode$1(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
      } return join$2(elements, '');
    }
  });

  var globalThis$3 = globalThis_1;
  var DESCRIPTORS$2 = descriptors;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Avoid NodeJS experimental warning
  var safeGetBuiltIn$1 = function (name) {
    if (!DESCRIPTORS$2) return globalThis$3[name];
    var descriptor = getOwnPropertyDescriptor$2(globalThis$3, name);
    return descriptor && descriptor.value;
  };

  var defineBuiltIn$2 = defineBuiltIn$a;

  var defineBuiltIns$1 = function (target, src, options) {
    for (var key in src) defineBuiltIn$2(target, key, src[key], options);
    return target;
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`


  var $$5 = _export;
  var globalThis$2 = globalThis_1;
  var safeGetBuiltIn = safeGetBuiltIn$1;
  var getBuiltIn = getBuiltIn$6;
  var call$2 = functionCall;
  var uncurryThis$3 = functionUncurryThis;
  var DESCRIPTORS$1 = descriptors;
  var USE_NATIVE_URL$1 = urlConstructorDetection;
  var defineBuiltIn$1 = defineBuiltIn$a;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
  var defineBuiltIns = defineBuiltIns$1;
  var setToStringTag$1 = setToStringTag$5;
  var createIteratorConstructor = iteratorCreateConstructor;
  var InternalStateModule$1 = internalState;
  var anInstance$1 = anInstance$2;
  var isCallable = isCallable$j;
  var hasOwn$1 = hasOwnProperty_1;
  var bind$1 = functionBindContext;
  var classof = classof$7;
  var anObject$1 = anObject$g;
  var isObject = isObject$e;
  var $toString$1 = toString$g;
  var create = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$5;
  var getIterator = getIterator$2;
  var getIteratorMethod = getIteratorMethod$3;
  var createIterResultObject = createIterResultObject$3;
  var validateArgumentsLength$1 = validateArgumentsLength$2;
  var wellKnownSymbol = wellKnownSymbol$n;
  var arraySort = arraySort$1;

  var ITERATOR = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);

  var nativeFetch = safeGetBuiltIn('fetch');
  var NativeRequest = safeGetBuiltIn('Request');
  var Headers = safeGetBuiltIn('Headers');
  var RequestPrototype = NativeRequest && NativeRequest.prototype;
  var HeadersPrototype = Headers && Headers.prototype;
  var TypeError$2 = globalThis$2.TypeError;
  var encodeURIComponent$1 = globalThis$2.encodeURIComponent;
  var fromCharCode = String.fromCharCode;
  var fromCodePoint = getBuiltIn('String', 'fromCodePoint');
  var $parseInt = parseInt;
  var charAt$1 = uncurryThis$3(''.charAt);
  var join$1 = uncurryThis$3([].join);
  var push$1 = uncurryThis$3([].push);
  var replace$1 = uncurryThis$3(''.replace);
  var shift$1 = uncurryThis$3([].shift);
  var splice = uncurryThis$3([].splice);
  var split$1 = uncurryThis$3(''.split);
  var stringSlice$2 = uncurryThis$3(''.slice);
  var exec$1 = uncurryThis$3(/./.exec);

  var plus = /\+/g;
  var FALLBACK_REPLACER = '\uFFFD';
  var VALID_HEX = /^[0-9a-f]+$/i;

  var parseHexOctet = function (string, start) {
    var substr = stringSlice$2(string, start, start + 2);
    if (!exec$1(VALID_HEX, substr)) return NaN;

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
    input = replace$1(input, plus, ' ');
    var length = input.length;
    var result = '';
    var i = 0;

    while (i < length) {
      var decodedChar = charAt$1(input, i);

      if (decodedChar === '%') {
        if (charAt$1(input, i + 1) === '%' || i + 3 > length) {
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
            if (i + 3 > length || charAt$1(input, i) !== '%') break;

            var nextByte = parseHexOctet(input, i + 1);

            // eslint-disable-next-line no-self-compare -- NaN check
            if (nextByte !== nextByte) {
              i += 3;
              break;
            }
            if (nextByte > 191 || nextByte < 128) break;

            push$1(octets, nextByte);
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
    return replace$1(encodeURIComponent$1(it), find, replacer);
  };

  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState$1(this, {
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
      else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$2(init, 1) : init : $toString$1(init));
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
        while (!(step = call$2(next, iterator)).done) {
          entryIterator = getIterator(anObject$1(step.value));
          entryNext = entryIterator.next;
          if (
            (first = call$2(entryNext, entryIterator)).done ||
            (second = call$2(entryNext, entryIterator)).done ||
            !call$2(entryNext, entryIterator).done
          ) throw new TypeError$2('Expected sequence with length 2');
          push$1(entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
        }
      } else for (var key in object) if (hasOwn$1(object, key)) {
        push$1(entries, { key: key, value: $toString$1(object[key]) });
      }
    },
    parseQuery: function (query) {
      if (query) {
        var entries = this.entries;
        var attributes = split$1(query, '&');
        var index = 0;
        var attribute, entry;
        while (index < attributes.length) {
          attribute = attributes[index++];
          if (attribute.length) {
            entry = split$1(attribute, '=');
            push$1(entries, {
              key: decode(shift$1(entry)),
              value: decode(join$1(entry, '='))
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
        push$1(result, serialize(entry.key) + '=' + serialize(entry.value));
      } return join$1(result, '&');
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
    anInstance$1(this, URLSearchParamsPrototype);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    var state = setInternalState$1(this, new URLSearchParamsState(init));
    if (!DESCRIPTORS$1) this.size = state.entries.length;
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

  defineBuiltIns(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      var state = getInternalParamsState(this);
      validateArgumentsLength$1(arguments.length, 2);
      push$1(state.entries, { key: $toString$1(name), value: $toString$1(value) });
      if (!DESCRIPTORS$1) this.length++;
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function (name /* , value */) {
      var state = getInternalParamsState(this);
      var length = validateArgumentsLength$1(arguments.length, 1);
      var entries = state.entries;
      var key = $toString$1(name);
      var $value = length < 2 ? undefined : arguments[1];
      var value = $value === undefined ? $value : $toString$1($value);
      var index = 0;
      while (index < entries.length) {
        var entry = entries[index];
        if (entry.key === key && (value === undefined || entry.value === value)) {
          splice(entries, index, 1);
          if (value !== undefined) break;
        } else index++;
      }
      if (!DESCRIPTORS$1) this.size = entries.length;
      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      var entries = getInternalParamsState(this).entries;
      validateArgumentsLength$1(arguments.length, 1);
      var key = $toString$1(name);
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
      validateArgumentsLength$1(arguments.length, 1);
      var key = $toString$1(name);
      var result = [];
      var index = 0;
      for (; index < entries.length; index++) {
        if (entries[index].key === key) push$1(result, entries[index].value);
      }
      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name /* , value */) {
      var entries = getInternalParamsState(this).entries;
      var length = validateArgumentsLength$1(arguments.length, 1);
      var key = $toString$1(name);
      var $value = length < 2 ? undefined : arguments[1];
      var value = $value === undefined ? $value : $toString$1($value);
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
      validateArgumentsLength$1(arguments.length, 1);
      var entries = state.entries;
      var found = false;
      var key = $toString$1(name);
      var val = $toString$1(value);
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
      if (!found) push$1(entries, { key: key, value: val });
      if (!DESCRIPTORS$1) this.size = entries.length;
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
      var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
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
  defineBuiltIn$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

  // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  defineBuiltIn$1(URLSearchParamsPrototype, 'toString', function toString() {
    return getInternalParamsState(this).serialize();
  }, { enumerable: true });

  // `URLSearchParams.prototype.size` getter
  // https://github.com/whatwg/url/pull/734
  if (DESCRIPTORS$1) defineBuiltInAccessor$1(URLSearchParamsPrototype, 'size', {
    get: function size() {
      return getInternalParamsState(this).entries.length;
    },
    configurable: true,
    enumerable: true
  });

  setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

  $$5({ global: true, constructor: true, forced: !USE_NATIVE_URL$1 }, {
    URLSearchParams: URLSearchParamsConstructor
  });

  // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
  if (!USE_NATIVE_URL$1 && isCallable(Headers)) {
    var headersHas = uncurryThis$3(HeadersPrototype.has);
    var headersSet = uncurryThis$3(HeadersPrototype.set);

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
            body: createPropertyDescriptor(0, $toString$1(body)),
            headers: createPropertyDescriptor(0, headers)
          });
        }
      } return init;
    };

    if (isCallable(nativeFetch)) {
      $$5({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
        fetch: function fetch(input /* , init */) {
          return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }
      });
    }

    if (isCallable(NativeRequest)) {
      var RequestConstructor = function Request(input /* , init */) {
        anInstance$1(this, RequestPrototype);
        return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      };

      RequestPrototype.constructor = RequestConstructor;
      RequestConstructor.prototype = RequestPrototype;

      $$5({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
        Request: RequestConstructor
      });
    }
  }

  var web_urlSearchParams_constructor = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

  var $$4 = _export;
  var DESCRIPTORS = descriptors;
  var USE_NATIVE_URL = urlConstructorDetection;
  var globalThis$1 = globalThis_1;
  var bind = functionBindContext;
  var uncurryThis$2 = functionUncurryThis;
  var defineBuiltIn = defineBuiltIn$a;
  var defineBuiltInAccessor = defineBuiltInAccessor$3;
  var anInstance = anInstance$2;
  var hasOwn = hasOwnProperty_1;
  var assign = objectAssign;
  var arrayFrom = arrayFrom$1;
  var arraySlice = arraySlice$2;
  var codeAt = stringMultibyte.codeAt;
  var toASCII = stringPunycodeToAscii;
  var $toString = toString$g;
  var setToStringTag = setToStringTag$5;
  var validateArgumentsLength = validateArgumentsLength$2;
  var URLSearchParamsModule = web_urlSearchParams_constructor;
  var InternalStateModule = internalState;

  var setInternalState = InternalStateModule.set;
  var getInternalURLState = InternalStateModule.getterFor('URL');
  var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
  var getInternalSearchParamsState = URLSearchParamsModule.getState;

  var NativeURL = globalThis$1.URL;
  var TypeError$1 = globalThis$1.TypeError;
  var parseInt$1 = globalThis$1.parseInt;
  var floor = Math.floor;
  var pow = Math.pow;
  var charAt = uncurryThis$2(''.charAt);
  var exec = uncurryThis$2(/./.exec);
  var join = uncurryThis$2([].join);
  var numberToString = uncurryThis$2(1.0.toString);
  var pop = uncurryThis$2([].pop);
  var push = uncurryThis$2([].push);
  var replace = uncurryThis$2(''.replace);
  var shift = uncurryThis$2([].shift);
  var split = uncurryThis$2(''.split);
  var stringSlice$1 = uncurryThis$2(''.slice);
  var toLowerCase = uncurryThis$2(''.toLowerCase);
  var unshift = uncurryThis$2([].unshift);

  var INVALID_AUTHORITY = 'Invalid authority';
  var INVALID_SCHEME = 'Invalid scheme';
  var INVALID_HOST = 'Invalid host';
  var INVALID_PORT = 'Invalid port';

  var ALPHA = /[a-z]/i;
  // eslint-disable-next-line regexp/no-obscure-range -- safe
  var ALPHANUMERIC = /[\d+-.a-z]/i;
  var DIGIT = /\d/;
  var HEX_START = /^0x/i;
  var OCT = /^[0-7]+$/;
  var DEC = /^\d+$/;
  var HEX = /^[\da-f]+$/i;
  /* eslint-disable regexp/no-control-character -- safe */
  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
  var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
  var TAB_AND_NEW_LINE = /[\t\n\r]/g;
  /* eslint-enable regexp/no-control-character -- safe */
  var EOF;

  // https://url.spec.whatwg.org/#ipv4-number-parser
  var parseIPv4 = function (input) {
    var parts = split(input, '.');
    var partsLength, numbers, index, part, radix, number, ipv4;
    if (parts.length && parts[parts.length - 1] === '') {
      parts.length--;
    }
    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];
    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part === '') return input;
      radix = 10;
      if (part.length > 1 && charAt(part, 0) === '0') {
        radix = exec(HEX_START, part) ? 16 : 8;
        part = stringSlice$1(part, radix === 8 ? 1 : 2);
      }
      if (part === '') {
        number = 0;
      } else {
        if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return input;
        number = parseInt$1(part, radix);
      }
      push(numbers, number);
    }
    for (index = 0; index < partsLength; index++) {
      number = numbers[index];
      if (index === partsLength - 1) {
        if (number >= pow(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }
    ipv4 = pop(numbers);
    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow(256, 3 - index);
    }
    return ipv4;
  };

  // https://url.spec.whatwg.org/#concept-ipv6-parser
  // eslint-disable-next-line max-statements -- TODO
  var parseIPv6 = function (input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

    var chr = function () {
      return charAt(input, pointer);
    };

    if (chr() === ':') {
      if (charAt(input, 1) !== ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }
    while (chr()) {
      if (pieceIndex === 8) return;
      if (chr() === ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }
      value = length = 0;
      while (length < 4 && exec(HEX, chr())) {
        value = value * 16 + parseInt$1(chr(), 16);
        pointer++;
        length++;
      }
      if (chr() === '.') {
        if (length === 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;
        while (chr()) {
          ipv4Piece = null;
          if (numbersSeen > 0) {
            if (chr() === '.' && numbersSeen < 4) pointer++;
            else return;
          }
          if (!exec(DIGIT, chr())) return;
          while (exec(DIGIT, chr())) {
            number = parseInt$1(chr(), 10);
            if (ipv4Piece === null) ipv4Piece = number;
            else if (ipv4Piece === 0) return;
            else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }
          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
        }
        if (numbersSeen !== 4) return;
        break;
      } else if (chr() === ':') {
        pointer++;
        if (!chr()) return;
      } else if (chr()) return;
      address[pieceIndex++] = value;
    }
    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;
      while (pieceIndex !== 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex !== 8) return;
    return address;
  };

  var findLongestZeroSequence = function (ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;
    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }
        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }
    return currLength > maxLength ? currStart : maxIndex;
  };

  // https://url.spec.whatwg.org/#host-serializing
  var serializeHost = function (host) {
    var result, index, compress, ignore0;

    // ipv4
    if (typeof host == 'number') {
      result = [];
      for (index = 0; index < 4; index++) {
        unshift(result, host % 256);
        host = floor(host / 256);
      }
      return join(result, '.');
    }

    // ipv6
    if (typeof host == 'object') {
      result = '';
      compress = findLongestZeroSequence(host);
      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;
        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += numberToString(host[index], 16);
          if (index < 7) result += ':';
        }
      }
      return '[' + result + ']';
    }

    return host;
  };

  var C0ControlPercentEncodeSet = {};
  var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
    ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
  });
  var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
    '#': 1, '?': 1, '{': 1, '}': 1
  });
  var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
    '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
  });

  var percentEncode = function (chr, set) {
    var code = codeAt(chr, 0);
    return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
  };

  // https://url.spec.whatwg.org/#special-scheme
  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };

  // https://url.spec.whatwg.org/#windows-drive-letter
  var isWindowsDriveLetter = function (string, normalized) {
    var second;
    return string.length === 2 && exec(ALPHA, charAt(string, 0))
      && ((second = charAt(string, 1)) === ':' || (!normalized && second === '|'));
  };

  // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
  var startsWithWindowsDriveLetter = function (string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(stringSlice$1(string, 0, 2)) && (
      string.length === 2 ||
      ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
    );
  };

  // https://url.spec.whatwg.org/#single-dot-path-segment
  var isSingleDot = function (segment) {
    return segment === '.' || toLowerCase(segment) === '%2e';
  };

  // https://url.spec.whatwg.org/#double-dot-path-segment
  var isDoubleDot = function (segment) {
    segment = toLowerCase(segment);
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  };

  // States:
  var SCHEME_START = {};
  var SCHEME = {};
  var NO_SCHEME = {};
  var SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var PATH_OR_AUTHORITY = {};
  var RELATIVE = {};
  var RELATIVE_SLASH = {};
  var SPECIAL_AUTHORITY_SLASHES = {};
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var AUTHORITY = {};
  var HOST = {};
  var HOSTNAME = {};
  var PORT = {};
  var FILE = {};
  var FILE_SLASH = {};
  var FILE_HOST = {};
  var PATH_START = {};
  var PATH = {};
  var CANNOT_BE_A_BASE_URL_PATH = {};
  var QUERY = {};
  var FRAGMENT = {};

  var URLState = function (url, isBase, base) {
    var urlString = $toString(url);
    var baseState, failure, searchParams;
    if (isBase) {
      failure = this.parse(urlString);
      if (failure) throw new TypeError$1(failure);
      this.searchParams = null;
    } else {
      if (base !== undefined) baseState = new URLState(base, true);
      failure = this.parse(urlString, null, baseState);
      if (failure) throw new TypeError$1(failure);
      searchParams = getInternalSearchParamsState(new URLSearchParams$1());
      searchParams.bindURL(this);
      this.searchParams = searchParams;
    }
  };

  URLState.prototype = {
    type: 'URL',
    // https://url.spec.whatwg.org/#url-parsing
    // eslint-disable-next-line max-statements -- TODO
    parse: function (input, stateOverride, base) {
      var url = this;
      var state = stateOverride || SCHEME_START;
      var pointer = 0;
      var buffer = '';
      var seenAt = false;
      var seenBracket = false;
      var seenPasswordToken = false;
      var codePoints, chr, bufferCodePoints, failure;

      input = $toString(input);

      if (!stateOverride) {
        url.scheme = '';
        url.username = '';
        url.password = '';
        url.host = null;
        url.port = null;
        url.path = [];
        url.query = null;
        url.fragment = null;
        url.cannotBeABaseURL = false;
        input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');
        input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
      }

      input = replace(input, TAB_AND_NEW_LINE, '');

      codePoints = arrayFrom(input);

      while (pointer <= codePoints.length) {
        chr = codePoints[pointer];
        switch (state) {
          case SCHEME_START:
            if (chr && exec(ALPHA, chr)) {
              buffer += toLowerCase(chr);
              state = SCHEME;
            } else if (!stateOverride) {
              state = NO_SCHEME;
              continue;
            } else return INVALID_SCHEME;
            break;

          case SCHEME:
            if (chr && (exec(ALPHANUMERIC, chr) || chr === '+' || chr === '-' || chr === '.')) {
              buffer += toLowerCase(chr);
            } else if (chr === ':') {
              if (stateOverride && (
                (url.isSpecial() !== hasOwn(specialSchemes, buffer)) ||
                (buffer === 'file' && (url.includesCredentials() || url.port !== null)) ||
                (url.scheme === 'file' && !url.host)
              )) return;
              url.scheme = buffer;
              if (stateOverride) {
                if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
                return;
              }
              buffer = '';
              if (url.scheme === 'file') {
                state = FILE;
              } else if (url.isSpecial() && base && base.scheme === url.scheme) {
                state = SPECIAL_RELATIVE_OR_AUTHORITY;
              } else if (url.isSpecial()) {
                state = SPECIAL_AUTHORITY_SLASHES;
              } else if (codePoints[pointer + 1] === '/') {
                state = PATH_OR_AUTHORITY;
                pointer++;
              } else {
                url.cannotBeABaseURL = true;
                push(url.path, '');
                state = CANNOT_BE_A_BASE_URL_PATH;
              }
            } else if (!stateOverride) {
              buffer = '';
              state = NO_SCHEME;
              pointer = 0;
              continue;
            } else return INVALID_SCHEME;
            break;

          case NO_SCHEME:
            if (!base || (base.cannotBeABaseURL && chr !== '#')) return INVALID_SCHEME;
            if (base.cannotBeABaseURL && chr === '#') {
              url.scheme = base.scheme;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              url.cannotBeABaseURL = true;
              state = FRAGMENT;
              break;
            }
            state = base.scheme === 'file' ? FILE : RELATIVE;
            continue;

          case SPECIAL_RELATIVE_OR_AUTHORITY:
            if (chr === '/' && codePoints[pointer + 1] === '/') {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              pointer++;
            } else {
              state = RELATIVE;
              continue;
            } break;

          case PATH_OR_AUTHORITY:
            if (chr === '/') {
              state = AUTHORITY;
              break;
            } else {
              state = PATH;
              continue;
            }

          case RELATIVE:
            url.scheme = base.scheme;
            if (chr === EOF) {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr === '/' || (chr === '\\' && url.isSpecial())) {
              state = RELATIVE_SLASH;
            } else if (chr === '?') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr === '#') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice(base.path);
              url.path.length--;
              state = PATH;
              continue;
            } break;

          case RELATIVE_SLASH:
            if (url.isSpecial() && (chr === '/' || chr === '\\')) {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            } else if (chr === '/') {
              state = AUTHORITY;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              state = PATH;
              continue;
            } break;

          case SPECIAL_AUTHORITY_SLASHES:
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            if (chr !== '/' || charAt(buffer, pointer + 1) !== '/') continue;
            pointer++;
            break;

          case SPECIAL_AUTHORITY_IGNORE_SLASHES:
            if (chr !== '/' && chr !== '\\') {
              state = AUTHORITY;
              continue;
            } break;

          case AUTHORITY:
            if (chr === '@') {
              if (seenAt) buffer = '%40' + buffer;
              seenAt = true;
              bufferCodePoints = arrayFrom(buffer);
              for (var i = 0; i < bufferCodePoints.length; i++) {
                var codePoint = bufferCodePoints[i];
                if (codePoint === ':' && !seenPasswordToken) {
                  seenPasswordToken = true;
                  continue;
                }
                var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                if (seenPasswordToken) url.password += encodedCodePoints;
                else url.username += encodedCodePoints;
              }
              buffer = '';
            } else if (
              chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
              (chr === '\\' && url.isSpecial())
            ) {
              if (seenAt && buffer === '') return INVALID_AUTHORITY;
              pointer -= arrayFrom(buffer).length + 1;
              buffer = '';
              state = HOST;
            } else buffer += chr;
            break;

          case HOST:
          case HOSTNAME:
            if (stateOverride && url.scheme === 'file') {
              state = FILE_HOST;
              continue;
            } else if (chr === ':' && !seenBracket) {
              if (buffer === '') return INVALID_HOST;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PORT;
              if (stateOverride === HOSTNAME) return;
            } else if (
              chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
              (chr === '\\' && url.isSpecial())
            ) {
              if (url.isSpecial() && buffer === '') return INVALID_HOST;
              if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PATH_START;
              if (stateOverride) return;
              continue;
            } else {
              if (chr === '[') seenBracket = true;
              else if (chr === ']') seenBracket = false;
              buffer += chr;
            } break;

          case PORT:
            if (exec(DIGIT, chr)) {
              buffer += chr;
            } else if (
              chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
              (chr === '\\' && url.isSpecial()) ||
              stateOverride
            ) {
              if (buffer !== '') {
                var port = parseInt$1(buffer, 10);
                if (port > 0xFFFF) return INVALID_PORT;
                url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
                buffer = '';
              }
              if (stateOverride) return;
              state = PATH_START;
              continue;
            } else return INVALID_PORT;
            break;

          case FILE:
            url.scheme = 'file';
            if (chr === '/' || chr === '\\') state = FILE_SLASH;
            else if (base && base.scheme === 'file') {
              switch (chr) {
                case EOF:
                  url.host = base.host;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                  break;
                case '?':
                  url.host = base.host;
                  url.path = arraySlice(base.path);
                  url.query = '';
                  state = QUERY;
                  break;
                case '#':
                  url.host = base.host;
                  url.path = arraySlice(base.path);
                  url.query = base.query;
                  url.fragment = '';
                  state = FRAGMENT;
                  break;
                default:
                  if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                    url.host = base.host;
                    url.path = arraySlice(base.path);
                    url.shortenPath();
                  }
                  state = PATH;
                  continue;
              }
            } else {
              state = PATH;
              continue;
            } break;

          case FILE_SLASH:
            if (chr === '/' || chr === '\\') {
              state = FILE_HOST;
              break;
            }
            if (base && base.scheme === 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
              if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
              else url.host = base.host;
            }
            state = PATH;
            continue;

          case FILE_HOST:
            if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
              if (!stateOverride && isWindowsDriveLetter(buffer)) {
                state = PATH;
              } else if (buffer === '') {
                url.host = '';
                if (stateOverride) return;
                state = PATH_START;
              } else {
                failure = url.parseHost(buffer);
                if (failure) return failure;
                if (url.host === 'localhost') url.host = '';
                if (stateOverride) return;
                buffer = '';
                state = PATH_START;
              } continue;
            } else buffer += chr;
            break;

          case PATH_START:
            if (url.isSpecial()) {
              state = PATH;
              if (chr !== '/' && chr !== '\\') continue;
            } else if (!stateOverride && chr === '?') {
              url.query = '';
              state = QUERY;
            } else if (!stateOverride && chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr !== EOF) {
              state = PATH;
              if (chr !== '/') continue;
            } break;

          case PATH:
            if (
              chr === EOF || chr === '/' ||
              (chr === '\\' && url.isSpecial()) ||
              (!stateOverride && (chr === '?' || chr === '#'))
            ) {
              if (isDoubleDot(buffer)) {
                url.shortenPath();
                if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else if (isSingleDot(buffer)) {
                if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else {
                if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                  if (url.host) url.host = '';
                  buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
                }
                push(url.path, buffer);
              }
              buffer = '';
              if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
                while (url.path.length > 1 && url.path[0] === '') {
                  shift(url.path);
                }
              }
              if (chr === '?') {
                url.query = '';
                state = QUERY;
              } else if (chr === '#') {
                url.fragment = '';
                state = FRAGMENT;
              }
            } else {
              buffer += percentEncode(chr, pathPercentEncodeSet);
            } break;

          case CANNOT_BE_A_BASE_URL_PATH:
            if (chr === '?') {
              url.query = '';
              state = QUERY;
            } else if (chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr !== EOF) {
              url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
            } break;

          case QUERY:
            if (!stateOverride && chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr !== EOF) {
              if (chr === "'" && url.isSpecial()) url.query += '%27';
              else if (chr === '#') url.query += '%23';
              else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
            } break;

          case FRAGMENT:
            if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
            break;
        }

        pointer++;
      }
    },
    // https://url.spec.whatwg.org/#host-parsing
    parseHost: function (input) {
      var result, codePoints, index;
      if (charAt(input, 0) === '[') {
        if (charAt(input, input.length - 1) !== ']') return INVALID_HOST;
        result = parseIPv6(stringSlice$1(input, 1, -1));
        if (!result) return INVALID_HOST;
        this.host = result;
      // opaque host
      } else if (!this.isSpecial()) {
        if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
        result = '';
        codePoints = arrayFrom(input);
        for (index = 0; index < codePoints.length; index++) {
          result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
        }
        this.host = result;
      } else {
        input = toASCII(input);
        if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
        result = parseIPv4(input);
        if (result === null) return INVALID_HOST;
        this.host = result;
      }
    },
    // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
    cannotHaveUsernamePasswordPort: function () {
      return !this.host || this.cannotBeABaseURL || this.scheme === 'file';
    },
    // https://url.spec.whatwg.org/#include-credentials
    includesCredentials: function () {
      return this.username !== '' || this.password !== '';
    },
    // https://url.spec.whatwg.org/#is-special
    isSpecial: function () {
      return hasOwn(specialSchemes, this.scheme);
    },
    // https://url.spec.whatwg.org/#shorten-a-urls-path
    shortenPath: function () {
      var path = this.path;
      var pathSize = path.length;
      if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
        path.length--;
      }
    },
    // https://url.spec.whatwg.org/#concept-url-serializer
    serialize: function () {
      var url = this;
      var scheme = url.scheme;
      var username = url.username;
      var password = url.password;
      var host = url.host;
      var port = url.port;
      var path = url.path;
      var query = url.query;
      var fragment = url.fragment;
      var output = scheme + ':';
      if (host !== null) {
        output += '//';
        if (url.includesCredentials()) {
          output += username + (password ? ':' + password : '') + '@';
        }
        output += serializeHost(host);
        if (port !== null) output += ':' + port;
      } else if (scheme === 'file') output += '//';
      output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
      if (query !== null) output += '?' + query;
      if (fragment !== null) output += '#' + fragment;
      return output;
    },
    // https://url.spec.whatwg.org/#dom-url-href
    setHref: function (href) {
      var failure = this.parse(href);
      if (failure) throw new TypeError$1(failure);
      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-origin
    getOrigin: function () {
      var scheme = this.scheme;
      var port = this.port;
      if (scheme === 'blob') try {
        return new URLConstructor(scheme.path[0]).origin;
      } catch (error) {
        return 'null';
      }
      if (scheme === 'file' || !this.isSpecial()) return 'null';
      return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
    },
    // https://url.spec.whatwg.org/#dom-url-protocol
    getProtocol: function () {
      return this.scheme + ':';
    },
    setProtocol: function (protocol) {
      this.parse($toString(protocol) + ':', SCHEME_START);
    },
    // https://url.spec.whatwg.org/#dom-url-username
    getUsername: function () {
      return this.username;
    },
    setUsername: function (username) {
      var codePoints = arrayFrom($toString(username));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-password
    getPassword: function () {
      return this.password;
    },
    setPassword: function (password) {
      var codePoints = arrayFrom($toString(password));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-host
    getHost: function () {
      var host = this.host;
      var port = this.port;
      return host === null ? ''
        : port === null ? serializeHost(host)
        : serializeHost(host) + ':' + port;
    },
    setHost: function (host) {
      if (this.cannotBeABaseURL) return;
      this.parse(host, HOST);
    },
    // https://url.spec.whatwg.org/#dom-url-hostname
    getHostname: function () {
      var host = this.host;
      return host === null ? '' : serializeHost(host);
    },
    setHostname: function (hostname) {
      if (this.cannotBeABaseURL) return;
      this.parse(hostname, HOSTNAME);
    },
    // https://url.spec.whatwg.org/#dom-url-port
    getPort: function () {
      var port = this.port;
      return port === null ? '' : $toString(port);
    },
    setPort: function (port) {
      if (this.cannotHaveUsernamePasswordPort()) return;
      port = $toString(port);
      if (port === '') this.port = null;
      else this.parse(port, PORT);
    },
    // https://url.spec.whatwg.org/#dom-url-pathname
    getPathname: function () {
      var path = this.path;
      return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    },
    setPathname: function (pathname) {
      if (this.cannotBeABaseURL) return;
      this.path = [];
      this.parse(pathname, PATH_START);
    },
    // https://url.spec.whatwg.org/#dom-url-search
    getSearch: function () {
      var query = this.query;
      return query ? '?' + query : '';
    },
    setSearch: function (search) {
      search = $toString(search);
      if (search === '') {
        this.query = null;
      } else {
        if (charAt(search, 0) === '?') search = stringSlice$1(search, 1);
        this.query = '';
        this.parse(search, QUERY);
      }
      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-searchparams
    getSearchParams: function () {
      return this.searchParams.facade;
    },
    // https://url.spec.whatwg.org/#dom-url-hash
    getHash: function () {
      var fragment = this.fragment;
      return fragment ? '#' + fragment : '';
    },
    setHash: function (hash) {
      hash = $toString(hash);
      if (hash === '') {
        this.fragment = null;
        return;
      }
      if (charAt(hash, 0) === '#') hash = stringSlice$1(hash, 1);
      this.fragment = '';
      this.parse(hash, FRAGMENT);
    },
    update: function () {
      this.query = this.searchParams.serialize() || null;
    }
  };

  // `URL` constructor
  // https://url.spec.whatwg.org/#url-class
  var URLConstructor = function URL(url /* , base */) {
    var that = anInstance(this, URLPrototype);
    var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
    var state = setInternalState(that, new URLState(url, false, base));
    if (!DESCRIPTORS) {
      that.href = state.serialize();
      that.origin = state.getOrigin();
      that.protocol = state.getProtocol();
      that.username = state.getUsername();
      that.password = state.getPassword();
      that.host = state.getHost();
      that.hostname = state.getHostname();
      that.port = state.getPort();
      that.pathname = state.getPathname();
      that.search = state.getSearch();
      that.searchParams = state.getSearchParams();
      that.hash = state.getHash();
    }
  };

  var URLPrototype = URLConstructor.prototype;

  var accessorDescriptor = function (getter, setter) {
    return {
      get: function () {
        return getInternalURLState(this)[getter]();
      },
      set: setter && function (value) {
        return getInternalURLState(this)[setter](value);
      },
      configurable: true,
      enumerable: true
    };
  };

  if (DESCRIPTORS) {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
  }

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
    return getInternalURLState(this).serialize();
  }, { enumerable: true });

  // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior
  defineBuiltIn(URLPrototype, 'toString', function toString() {
    return getInternalURLState(this).serialize();
  }, { enumerable: true });

  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
    // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
    // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
  }

  setToStringTag(URLConstructor, 'URL');

  $$4({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
    URL: URLConstructor
  });

  var $$3 = _export;
  var call$1 = functionCall;

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  $$3({ target: 'URL', proto: true, enumerable: true }, {
    toJSON: function toJSON() {
      return call$1(URL.prototype.toString, this);
    }
  });

  var $$2 = _export;
  var fails = fails$y;
  var toObject = toObject$c;
  var nativeGetPrototypeOf = objectGetPrototypeOf$1;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  $$2({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject(it));
    }
  });

  var $$1 = _export;
  var uncurryThis$1 = functionUncurryThisClause;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var toLength$2 = toLength$6;
  var toString$2 = toString$g;
  var notARegExp$1 = notARegexp;
  var requireObjectCoercible$2 = requireObjectCoercible$c;
  var correctIsRegExpLogic$1 = correctIsRegexpLogic;

  var slice = uncurryThis$1(''.slice);
  var min$1 = Math.min;

  var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$1('endsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
    var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.endsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.endswith
  $$1({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
    endsWith: function endsWith(searchString /* , endPosition = @length */) {
      var that = toString$2(requireObjectCoercible$2(this));
      notARegExp$1(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = that.length;
      var end = endPosition === undefined ? len : min$1(toLength$2(endPosition), len);
      var search = toString$2(searchString);
      return slice(that, end - search.length, end) === search;
    }
  });

  var call = functionCall;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var anObject = anObject$g;
  var isNullOrUndefined = isNullOrUndefined$8;
  var toLength$1 = toLength$6;
  var toString$1 = toString$g;
  var requireObjectCoercible$1 = requireObjectCoercible$c;
  var getMethod = getMethod$7;
  var advanceStringIndex = advanceStringIndex$3;
  var regExpExec = regexpExecAbstract;

  // @@match logic
  fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible$1(this);
        var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
        return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$1(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var rx = anObject(this);
        var S = toString$1(string);
        var res = maybeCallNative(nativeMatch, rx, S);

        if (res.done) return res.value;

        if (!rx.global) return regExpExec(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regExpExec(rx, S)) !== null) {
          var matchStr = toString$1(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  var $ = _export;
  var uncurryThis = functionUncurryThisClause;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var toLength = toLength$6;
  var toString = toString$g;
  var notARegExp = notARegexp;
  var requireObjectCoercible = requireObjectCoercible$c;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringSlice = uncurryThis(''.slice);
  var min = Math.min;

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
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

  var Utils = {
    getBootstrapVersion: function getBootstrapVersion() {
      var bootstrapVersion = 5;
      try {
        var rawVersion = $$u.fn.dropdown.Constructor.VERSION;

        // Only try to parse VERSION if it is defined.
        // It is undefined in older versions of Bootstrap (tested with 3.1.1).
        if (rawVersion !== undefined) {
          bootstrapVersion = parseInt(rawVersion, 10);
        }
      } catch (e) {
        // ignore
      }
      try {
        // eslint-disable-next-line no-undef
        var _rawVersion = bootstrap.Tooltip.VERSION;
        if (_rawVersion !== undefined) {
          bootstrapVersion = parseInt(_rawVersion, 10);
        }
      } catch (e) {
        // ignore
      }
      return bootstrapVersion;
    },
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
    getIcons: function getIcons(prefix) {
      return {
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
      }[prefix] || {};
    },
    getSearchInput: function getSearchInput(that) {
      if (typeof that.options.searchSelector === 'string') {
        return $$u(that.options.searchSelector);
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
    },
    normalizeAccent: function normalizeAccent(value) {
      if (typeof value !== 'string') {
        return value;
      }
      return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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
        var $inner = $$u('<div/>').addClass('fixed-table-scroll-inner');
        var $outer = $$u('<div/>').addClass('fixed-table-scroll-outer');
        $outer.append($inner);
        $$u('body').append($outer);
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
      for (var _i2 = 0, _aKeys = aKeys; _i2 < _aKeys.length; _i2++) {
        var key = _aKeys[_i2];
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
      return text.toString().replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'');
    },
    removeHTML: function removeHTML(text) {
      if (!text) {
        return text;
      }
      return text.toString().replace(/(<([^>]+)>)/ig, '').replace(/&[#A-Za-z0-9]+;/gi, '').trim();
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
      var _iterator10 = _createForOfIteratorHelper(items),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var it = _step10.value;
          if (JSON.stringify(it) === JSON.stringify(item)) {
            return items.indexOf(it);
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return -1;
    },
    trToData: function trToData(columns, $els) {
      var _this2 = this;
      var data = [];
      var m = [];
      $els.each(function (y, el) {
        var $el = $$u(el);
        var row = {};

        // save tr's id, class and data-* attributes
        row._id = $el.attr('id');
        row._class = $el.attr('class');
        row._data = _this2.getRealDataAttr($el.data());
        row._style = $el.attr('style');
        $el.find('>td,>th').each(function (_x, el) {
          var $el = $$u(el);
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
      var _iterator11 = _createForOfIteratorHelper(data),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var row = _step11.value;
          for (var _i4 = 0, _Object$keys = Object.keys(row); _i4 < _Object$keys.length; _i4++) {
            var key = _Object$keys[_i4];
            if (key.startsWith('_') && (key.endsWith('_rowspan') || key.endsWith('_colspan'))) {
              return true;
            }
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
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
              var _iterator12 = _createForOfIteratorHelper(elements),
                _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var el = _step12.value;
                  node.insertBefore(el, child);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
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
      if (typeof style === 'string') {
        style.split(';').forEach(function (i) {
          var index = i.indexOf(':');
          if (index > 0) {
            var k = i.substring(0, index).trim();
            var v = i.substring(index + 1).trim();
            dom.style.setProperty(k, v);
          }
        });
      } else if (Array.isArray(style)) {
        var _iterator13 = _createForOfIteratorHelper(style),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var item = _step13.value;
            this.parseStyle(dom, item);
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      } else if (_typeof(style) === 'object') {
        for (var _i5 = 0, _Object$entries2 = Object.entries(style); _i5 < _Object$entries2.length; _i5++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
            k = _Object$entries2$_i[0],
            v = _Object$entries2$_i[1];
          dom.style.setProperty(k, v);
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
      for (var _i6 = 0, _Object$entries3 = Object.entries(_attrs); _i6 < _Object$entries3.length; _i6++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i6], 2),
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
      if (html instanceof $$u) {
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
    }
  };

  var VERSION = '1.23.4';
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
  var METHODS = ['getOptions', 'refreshOptions', 'getData', 'getSelections', 'load', 'append', 'prepend', 'remove', 'removeAll', 'insertRow', 'updateRow', 'getRowByUniqueId', 'updateByUniqueId', 'removeByUniqueId', 'updateCell', 'updateCellByUniqueId', 'showRow', 'hideRow', 'getHiddenRows', 'showColumn', 'hideColumn', 'getVisibleColumns', 'getHiddenColumns', 'showAllColumns', 'hideAllColumns', 'mergeCells', 'checkAll', 'uncheckAll', 'checkInvert', 'check', 'uncheck', 'checkBy', 'uncheckBy', 'refresh', 'destroy', 'resetView', 'showLoading', 'hideLoading', 'togglePagination', 'toggleFullscreen', 'toggleView', 'resetSearch', 'filterBy', 'sortBy', 'sortReset', 'scrollTo', 'getScrollPosition', 'selectPage', 'prevPage', 'nextPage', 'toggleDetailView', 'expandRow', 'collapseRow', 'expandRowByUniqueId', 'collapseRowByUniqueId', 'expandAllRows', 'collapseAllRows', 'updateColumnTitle', 'updateFormatText'];
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
    LOCALES: {
      en: EN,
      'en-US': EN
    },
    METHODS: METHODS,
    THEME: "bootstrap".concat(bootstrapVersion),
    VERSION: VERSION
  };

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

  var BootstrapTable = /*#__PURE__*/function () {
    function BootstrapTable(el, options) {
      _classCallCheck(this, BootstrapTable);
      this.options = options;
      this.$el = $$u(el);
      this.$el_ = this.$el.clone();
      this.timeoutId_ = 0;
      this.timeoutFooter_ = 0;
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
      key: "initConstants",
      value: function initConstants() {
        var opts = this.options;
        this.constants = Constants.CONSTANTS;
        this.constants.theme = $$u.fn.bootstrapTable.theme;
        this.constants.dataToggle = this.constants.html.dataToggle || 'data-toggle';

        // init iconsPrefix and icons
        var iconsPrefix = Utils.getIconsPrefix($$u.fn.bootstrapTable.theme);
        if (typeof opts.icons === 'string') {
          opts.icons = Utils.calculateObjectValue(null, opts.icons);
        }
        opts.iconsPrefix = opts.iconsPrefix || $$u.fn.bootstrapTable.defaults.iconsPrefix || iconsPrefix;
        opts.icons = Object.assign(Utils.getIcons(opts.iconsPrefix), $$u.fn.bootstrapTable.defaults.icons, opts.icons);

        // init buttons class
        var buttonsPrefix = opts.buttonsPrefix ? "".concat(opts.buttonsPrefix, "-") : '';
        this.constants.buttonsClass = [opts.buttonsPrefix, buttonsPrefix + opts.buttonsClass, Utils.sprintf("".concat(buttonsPrefix, "%s"), opts.iconSize)].join(' ').trim();
        this.buttons = Utils.calculateObjectValue(this, opts.buttons, [], {});
        if (_typeof(this.buttons) !== 'object') {
          this.buttons = {};
        }
      }
    }, {
      key: "initLocale",
      value: function initLocale() {
        if (this.options.locale) {
          var locales = $$u.fn.bootstrapTable.locales;
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
            var defaultLocale = this._defaultLocales.hasOwnProperty(formatName) ? this._defaultLocales[formatName] : BootstrapTable.DEFAULTS[formatName];
            if (this.options[formatName] !== defaultLocale) {
              continue;
            }
            this.options[formatName] = func;
            this._defaultLocales[formatName] = func;
          }
        }
      }
    }, {
      key: "initContainer",
      value: function initContainer() {
        var topPagination = ['top', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination clearfix"></div>' : '';
        var bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination"></div>' : '';
        var loadingTemplate = Utils.calculateObjectValue(this.options, this.options.loadingTemplate, [this.options.formatLoadingMessage()]);
        this.$container = $$u("\n      <div class=\"bootstrap-table ".concat(this.constants.theme, "\">\n      <div class=\"fixed-table-toolbar\"></div>\n      ").concat(topPagination, "\n      <div class=\"fixed-table-container\">\n      <div class=\"fixed-table-header\"><table></table></div>\n      <div class=\"fixed-table-body\">\n      <div class=\"fixed-table-loading\">\n      ").concat(loadingTemplate, "\n      </div>\n      </div>\n      <div class=\"fixed-table-footer\"></div>\n      </div>\n      ").concat(bottomPagination, "\n      </div>\n    "));
        this.$container.insertAfter(this.$el);
        this.$tableContainer = this.$container.find('.fixed-table-container');
        this.$tableHeader = this.$container.find('.fixed-table-header');
        this.$tableBody = this.$container.find('.fixed-table-body');
        this.$tableLoading = this.$container.find('.fixed-table-loading');
        this.$tableFooter = this.$el.find('tfoot');
        // checking if custom table-toolbar exists or not
        if (this.options.buttonsToolbar) {
          this.$toolbar = $$u('body').find(this.options.buttonsToolbar);
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
        this.$header = this.$el.find('>thead');
        if (!this.$header.length) {
          this.$header = $$u("<thead class=\"".concat(this.options.theadClasses, "\"></thead>")).appendTo(this.$el);
        } else if (this.options.theadClasses) {
          this.$header.addClass(this.options.theadClasses);
        }
        this._headerTrClasses = [];
        this._headerTrStyles = [];
        this.$header.find('tr').each(function (i, el) {
          var $tr = $$u(el);
          var column = [];
          $tr.find('th').each(function (i, el) {
            var $th = $$u(el);

            // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
            if (typeof $th.data('field') !== 'undefined') {
              $th.data('field', "".concat($th.data('field')));
            }
            var _data = Object.assign({}, $th.data());
            for (var key in _data) {
              if ($$u.fn.bootstrapTable.columnDefaults.hasOwnProperty(key)) {
                delete _data[key];
              }
            }
            column.push(Utils.extend({}, {
              _data: Utils.getRealDataAttr(_data),
              title: $th.html(),
              class: $th.attr('class'),
              titleTooltip: $th.attr('title'),
              rowspan: $th.attr('rowspan') ? +$th.attr('rowspan') : undefined,
              colspan: $th.attr('colspan') ? +$th.attr('colspan') : undefined
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
        Utils.setFieldIndex(this.options.columns);
        this.options.columns.forEach(function (columns, i) {
          columns.forEach(function (_column, j) {
            var column = Utils.extend({}, BootstrapTable.COLUMN_DEFAULTS, _column, {
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
    }, {
      key: "initHeader",
      value: function initHeader() {
        var _this2 = this;
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
          html.push("<tr".concat(Utils.sprintf(' class="%s"', _this2._headerTrClasses[i]), " ").concat(Utils.sprintf(' style="%s"', _this2._headerTrStyles[i]), ">"));
          var detailViewTemplate = '';
          if (i === 0 && Utils.hasDetailViewIcon(_this2.options)) {
            var rowspan = _this2.options.columns.length > 1 ? " rowspan=\"".concat(_this2.options.columns.length, "\"") : '';
            detailViewTemplate = "<th class=\"detail\"".concat(rowspan, ">\n          <div class=\"fht-cell\"></div>\n          </th>");
          }
          if (detailViewTemplate && _this2.options.detailViewAlign !== 'right') {
            html.push(detailViewTemplate);
          }
          columns.forEach(function (column, j) {
            var class_ = Utils.sprintf(' class="%s"', column['class']);
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
            var headerStyle = Utils.calculateObjectValue(null, _this2.options.headerStyle, [column]);
            var csses = [];
            var data_ = [];
            var classes = '';
            if (headerStyle && headerStyle.css) {
              for (var _i2 = 0, _Object$entries2 = Object.entries(headerStyle.css); _i2 < _Object$entries2.length; _i2++) {
                var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                  key = _Object$entries2$_i[0],
                  value = _Object$entries2$_i[1];
                csses.push("".concat(key, ": ").concat(value));
              }
            }
            if (headerStyle && headerStyle.classes) {
              classes = Utils.sprintf(' class="%s"', column['class'] ? [column['class'], headerStyle.classes].join(' ') : headerStyle.classes);
            }
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
            if (Object.keys(column._data || {}).length > 0) {
              for (var _i3 = 0, _Object$entries3 = Object.entries(column._data); _i3 < _Object$entries3.length; _i3++) {
                var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
                  k = _Object$entries3$_i[0],
                  v = _Object$entries3$_i[1];
                data_.push("data-".concat(k, "='").concat(_typeof(v) === 'object' ? JSON.stringify(v) : v, "'"));
              }
            }
            html.push("<th".concat(Utils.sprintf(' title="%s"', column.titleTooltip)), column.checkbox || column.radio ? Utils.sprintf(' class="bs-checkbox %s"', column['class'] || '') : classes || class_, Utils.sprintf(' style="%s"', halign + style + csses.join('; ') || undefined), Utils.sprintf(' rowspan="%s"', column.rowspan), Utils.sprintf(' colspan="%s"', column.colspan), Utils.sprintf(' data-field="%s"', column.field),
            // If `column` is not the first element of `this.options.columns[0]`, then className 'data-not-first-th' should be added.
            j === 0 && i > 0 ? ' data-not-first-th' : '', data_.length > 0 ? data_.join(' ') : '', '>');
            html.push(Utils.sprintf('<div class="th-inner %s">', _this2.options.sortable && column.sortable ? "sortable".concat(columnHalign === 'center' ? ' sortable-center' : '', " both") : ''));
            var text = _this2.options.escape && _this2.options.escapeTitle ? Utils.escapeHTML(column.title) : column.title;
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
          if (detailViewTemplate && _this2.options.detailViewAlign === 'right') {
            html.push(detailViewTemplate);
          }
          html.push('</tr>');
          if (html.length > 3) {
            headerHtml.push(html.join(''));
          }
        });
        this.$header.html(headerHtml.join(''));
        this.$header.find('th[data-field]').each(function (i, el) {
          $$u(el).data(visibleColumns[$$u(el).data('field')]);
        });
        this.$container.off('click', '.th-inner').on('click', '.th-inner', function (e) {
          var $this = $$u(e.currentTarget);
          if (_this2.options.detailView && !$this.parent().hasClass('bs-checkbox')) {
            if ($this.closest('.bootstrap-table')[0] !== _this2.$container[0]) {
              return false;
            }
          }
          if (_this2.options.sortable && $this.parent().data().sortable) {
            _this2.onSort(e);
          }
        });
        var resizeEvent = Utils.getEventName('resize.bootstrap-table', this.$el.attr('id'));
        $$u(window).off(resizeEvent);
        if (!this.options.showHeader || this.options.cardView) {
          this.$header.hide();
          this.$tableHeader.hide();
          this.$tableLoading.css('top', 0);
        } else {
          this.$header.show();
          this.$tableHeader.show();
          this.$tableLoading.css('top', this.$header.outerHeight() + 1);
          // Assign the correct sortable arrow
          this.getCaret();
          $$u(window).on(resizeEvent, function () {
            return _this2.resetView();
          });
        }
        this.$selectAll = this.$header.find('[name="btSelectAll"]');
        this.$selectAll.off('click').on('click', function (e) {
          e.stopPropagation();
          var checked = $$u(e.currentTarget).prop('checked');
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
              return Utils.sort(aa, bb, order, _this3.options, a._position, b._position);
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
        } else if (this.options.sortReset) {
          this.data = _toConsumableArray(this.unsortedData);
        }
      }
    }, {
      key: "sortReset",
      value: function sortReset() {
        this.options.sortName = undefined;
        this.options.sortOrder = undefined;
        this._sort();
      }
    }, {
      key: "sortBy",
      value: function sortBy(params) {
        this.options.sortName = params.field;
        this.options.sortOrder = params.hasOwnProperty('sortOrder') ? params.sortOrder : 'asc';
        this._sort();
      }
    }, {
      key: "onSort",
      value: function onSort(_ref) {
        var type = _ref.type,
          currentTarget = _ref.currentTarget;
        var $this = type === 'keypress' ? $$u(currentTarget) : $$u(currentTarget).parent();
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
        this.getCaret();
        this._sort();
      }
    }, {
      key: "_sort",
      value: function _sort() {
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
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        var _this4 = this;
        var opts = this.options;
        var html = [];
        var timeoutId = 0;
        var $keepOpen;
        var switchableCount = 0;
        if (this.$toolbar.find('.bs-bars').children().length) {
          $$u('body').append($$u(opts.toolbar));
        }
        this.$toolbar.html('');
        if (typeof opts.toolbar === 'string' || _typeof(opts.toolbar) === 'object') {
          $$u(Utils.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, opts.toolbarAlign)).appendTo(this.$toolbar).append($$u(opts.toolbar));
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
              html.push("<div class=\"keep-open ".concat(_this4.constants.classes.buttonsDropdown, "\">\n            <button class=\"").concat(_this4.constants.buttonsClass, " dropdown-toggle\" type=\"button\" ").concat(_this4.constants.dataToggle, "=\"dropdown\"\n            aria-label=\"").concat(opts.formatColumns(), "\" ").concat(opts.buttonsAttributeTitle, "=\"").concat(opts.formatColumns(), "\">\n            ").concat(opts.showButtonIcons ? Utils.sprintf(_this4.constants.html.icon, opts.iconsPrefix, opts.icons.columns) : '', "\n            ").concat(opts.showButtonText ? opts.formatColumns() : '', "\n            ").concat(_this4.constants.html.dropdownCaret, "\n            </button>\n            ").concat(_this4.constants.html.toolbarDropdown[0]));
              if (opts.showColumnsSearch) {
                html.push(Utils.sprintf(_this4.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">', _this4.constants.classes.input, opts.formatSearch())));
                html.push(_this4.constants.html.toolbarDropdownSeparator);
              }
              if (opts.showColumnsToggleAll) {
                var allFieldsVisible = _this4.getVisibleColumns().length === _this4.columns.filter(function (column) {
                  return !_this4.isSelectionColumn(column);
                }).length;
                html.push(Utils.sprintf(_this4.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>', allFieldsVisible ? 'checked="checked"' : '', opts.formatColumnsToggleAll())));
                html.push(_this4.constants.html.toolbarDropdownSeparator);
              }
              var visibleColumns = 0;
              _this4.columns.forEach(function (column) {
                if (column.visible) {
                  visibleColumns++;
                }
              });
              _this4.columns.forEach(function (column, i) {
                if (_this4.isSelectionColumn(column)) {
                  return;
                }
                if (opts.cardView && !column.cardVisible) {
                  return;
                }
                var checked = column.visible ? ' checked="checked"' : '';
                var disabled = visibleColumns <= opts.minimumCountColumns && checked ? ' disabled="disabled"' : '';
                if (column.switchable) {
                  html.push(Utils.sprintf(_this4.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>', column.field, i, checked, disabled, column.switchableLabel || column.title)));
                  switchableCount++;
                }
              });
              html.push(_this4.constants.html.toolbarDropdown[1], '</div>');
              return html.join('');
            }
          }
        });
        var buttonsHtml = {};
        for (var _i4 = 0, _Object$entries4 = Object.entries(this.buttons); _i4 < _Object$entries4.length; _i4++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
            buttonName = _Object$entries4$_i[0],
            buttonConfig = _Object$entries4$_i[1];
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
              for (var _i5 = 0, _Object$entries5 = Object.entries(buttonConfig.attributes); _i5 < _Object$entries5.length; _i5++) {
                var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i5], 2),
                  attributeName = _Object$entries5$_i[0],
                  value = _Object$entries5$_i[1];
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
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i6], 2),
            buttonName = _Object$entries6$_i[0],
            buttonConfig = _Object$entries6$_i[1];
          if (buttonConfig.hasOwnProperty('event')) {
            if (typeof buttonConfig.event === 'function' || typeof buttonConfig.event === 'string') {
              var event = typeof buttonConfig.event === 'string' ? window[buttonConfig.event] : buttonConfig.event;
              _this4.$toolbar.find("button[name=\"".concat(buttonName, "\"]")).off('click').on('click', function () {
                return event.call(_this4);
              });
              return 1; // continue
            }
            var _loop2 = function _loop2() {
              var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i7], 2),
                eventType = _Object$entries7$_i[0],
                eventFunction = _Object$entries7$_i[1];
              var event = typeof eventFunction === 'string' ? window[eventFunction] : eventFunction;
              _this4.$toolbar.find("button[name=\"".concat(buttonName, "\"]")).off(eventType).on(eventType, function () {
                return event.call(_this4);
              });
            };
            for (var _i7 = 0, _Object$entries7 = Object.entries(buttonConfig.event); _i7 < _Object$entries7.length; _i7++) {
              _loop2();
            }
          }
        };
        for (var _i6 = 0, _Object$entries6 = Object.entries(this.buttons); _i6 < _Object$entries6.length; _i6++) {
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
          $checkboxes.off('click').on('click', function (_ref2) {
            var currentTarget = _ref2.currentTarget;
            var $this = $$u(currentTarget);
            _this4._toggleColumn($this.val(), $this.prop('checked'), false);
            _this4.trigger('column-switch', $this.data('field'), $this.prop('checked'));
            $toggleAll.prop('checked', $checkboxes.filter(':checked').length === _this4.columns.filter(function (column) {
              return !_this4.isSelectionColumn(column);
            }).length);
          });
          $toggleAll.off('click').on('click', function (_ref3) {
            var currentTarget = _ref3.currentTarget;
            _this4._toggleAllColumns($$u(currentTarget).prop('checked'));
            _this4.trigger('column-switch-all', $$u(currentTarget).prop('checked'));
          });
          if (opts.showColumnsSearch) {
            var $columnsSearch = $keepOpen.find('[name="columnsSearch"]');
            var $listItems = $keepOpen.find('.dropdown-item-marker');
            $columnsSearch.on('keyup paste change', function (_ref4) {
              var currentTarget = _ref4.currentTarget;
              var $this = $$u(currentTarget);
              var searchValue = $this.val().toLowerCase();
              $listItems.show();
              $checkboxes.each(function (i, el) {
                var $checkbox = $$u(el);
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
              _this4.onSearch({
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
                _this4.onSearch({
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
              _this4.resetSearch();
            });
          }
        } else if (typeof opts.searchSelector === 'string') {
          handleInputEvent(Utils.getSearchInput(this));
        }
      }
    }, {
      key: "onSearch",
      value: function onSearch() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          currentTarget = _ref5.currentTarget,
          firedByInitSearchText = _ref5.firedByInitSearchText;
        var overwriteSearchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (currentTarget !== undefined && $$u(currentTarget).length && overwriteSearchText) {
          var text = $$u(currentTarget).val().trim();
          if (this.options.trimOnSearch && $$u(currentTarget).val() !== text) {
            $$u(currentTarget).val(text);
          }
          if (this.searchText === text) {
            return;
          }
          var $searchInput = Utils.getSearchInput(this);
          var $currentTarget = currentTarget instanceof jQuery ? currentTarget : $$u(currentTarget);
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
      }
    }, {
      key: "initSearch",
      value: function initSearch() {
        var _this5 = this;
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
              return _this5.filterOptions.filterAlgorithm.apply(null, [item, f]);
            });
          } else if (typeof this.filterOptions.filterAlgorithm === 'string') {
            this.data = f ? this.options.data.filter(function (item) {
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
            }) : _toConsumableArray(this.options.data);
          }
          var visibleFields = this.getVisibleFields();
          this.data = searchText ? this.data.filter(function (item, i) {
            for (var j = 0; j < _this5.header.fields.length; j++) {
              if (!_this5.header.searchables[j] || _this5.options.visibleSearch && visibleFields.indexOf(_this5.header.fields[j]) === -1) {
                continue;
              }
              var key = Utils.isNumeric(_this5.header.fields[j]) ? parseInt(_this5.header.fields[j], 10) : _this5.header.fields[j];
              var column = _this5.columns[_this5.fieldsColumnsIndex[key]];
              var value = void 0;
              if (typeof key === 'string' && !item.hasOwnProperty(key)) {
                value = item;
                var props = key.split('.');
                for (var _i8 = 0; _i8 < props.length; _i8++) {
                  if (value[props[_i8]] === null || value[props[_i8]] === undefined) {
                    value = null;
                    break;
                  } else {
                    value = value[props[_i8]];
                  }
                }
              } else {
                value = item[key];
              }
              if (_this5.options.searchAccentNeutralise) {
                value = Utils.normalizeAccent(value);
              }

              // Fix #142: respect searchFormatter boolean
              if (column && column.searchFormatter) {
                value = Utils.calculateObjectValue(column, _this5.header.formatters[j], [value, item, i, column.field], value);
                if (_this5.header.formatters[j] && typeof value !== 'number') {
                  // search innerText
                  value = $$u('<div>').html(value).text();
                }
              }
              if (typeof value === 'string' || typeof value === 'number') {
                if (_this5.options.strictSearch && "".concat(value).toLowerCase() === searchText || _this5.options.regexSearch && Utils.regexCompare(value, rawSearchText)) {
                  return true;
                }
                var largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(-?\d+)?|(-?\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm;
                var matches = largerSmallerEqualsRegex.exec(_this5.searchText);
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
            return false;
          }) : this.data;
          if (this.options.sortReset) {
            this.unsortedData = _toConsumableArray(this.data);
          }
          this.initSort();
        }
      }
    }, {
      key: "initPagination",
      value: function initPagination() {
        var _this6 = this;
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
          var totalRows = this.options.totalRows + (this.options.sidePagination === 'client' && this.options.paginationLoadMore && !this._paginationLoaded ? ' +' : '');
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
                active = page === opts.formatAllRows() ? _this6.constants.classes.dropdownActive : '';
              } else {
                active = page === opts.pageSize ? _this6.constants.classes.dropdownActive : '';
              }
              pageNumber.push(Utils.sprintf(_this6.constants.html.pageDropdownItem, active, page));
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
            return Utils.sprintf(_this6.constants.html.paginationItem, classes + (i === opts.pageNumber ? " ".concat(_this6.constants.classes.paginationActive) : ''), opts.formatSRPaginationPageText(i), i);
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
        if (event && $$u(event.currentTarget).hasClass('disabled')) {
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
      }
    }, {
      key: "onPageListChange",
      value: function onPageListChange(event) {
        event.preventDefault();
        var $this = $$u(event.currentTarget);
        $this.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive);
        this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +$this.text();
        this.$toolbar.find('.page-size').text(this.options.pageSize);
        this.updatePagination(event);
        return false;
      }
    }, {
      key: "onPagePre",
      value: function onPagePre(event) {
        if ($$u(event.target).hasClass('disabled')) {
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
      }
    }, {
      key: "onPageNext",
      value: function onPageNext(event) {
        if ($$u(event.target).hasClass('disabled')) {
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
      }
    }, {
      key: "onPageNumber",
      value: function onPageNumber(event) {
        event.preventDefault();
        if (this.options.pageNumber === +$$u(event.currentTarget).text()) {
          return;
        }
        this.options.pageNumber = +$$u(event.currentTarget).text();
        this.updatePagination(event);
        return false;
      }

      // eslint-disable-next-line no-unused-vars
    }, {
      key: "initRow",
      value: function initRow(item, i, data, trFragments) {
        var _this7 = this;
        if (Utils.findIndex(this.hiddenRows, item) > -1) {
          return;
        }
        var style = Utils.calculateObjectValue(this.options, this.options.rowStyle, [item, i], {});
        var attributes = Utils.calculateObjectValue(this.options, this.options.rowAttributes, [item, i], {});
        var data_ = {};
        if (item._data && !Utils.isEmptyObject(item._data)) {
          for (var _i9 = 0, _Object$entries8 = Object.entries(item._data); _i9 < _Object$entries8.length; _i9++) {
            var _Object$entries8$_i = _slicedToArray(_Object$entries8[_i9], 2),
              k = _Object$entries8$_i[0],
              v = _Object$entries8$_i[1];
            // ignore data-index
            if (k === 'index') {
              return;
            }
            data_["data-".concat(k)] = _typeof(v) === 'object' ? JSON.stringify(v) : v;
          }
        }
        var tr = Utils.h('tr', _objectSpread2(_objectSpread2({}, attributes), {}, {
          id: Array.isArray(item) ? undefined : item._id,
          class: style && style.classes || (Array.isArray(item) ? undefined : item._class),
          style: style && style.css || (Array.isArray(item) ? undefined : item._style),
          'data-index': i,
          'data-uniqueid': Utils.getItemField(item, this.options.uniqueId, false),
          'data-has-detail-view': this.options.detailView && Utils.calculateObjectValue(null, this.options.detailFilter, [i, item]) ? 'true' : undefined
        }, data_));
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
          var column = _this7.columns[j];
          var value_ = Utils.getItemField(item, field, _this7.options.escape, column.escape);
          var value = '';
          var attrs = {
            style: []
          };
          if ((_this7.fromHtml || _this7.autoMergeCells) && typeof value_ === 'undefined') {
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

          // handle id and class of td
          for (var _i10 = 0, _arr = ['id', 'class', 'rowspan', 'colspan', 'title']; _i10 < _arr.length; _i10++) {
            var _item = _arr[_i10];
            attrs[_item] = _item["_".concat(field, "_").concat(_item)] || undefined;
          }
          attrs.style.push(_this7.header.styles[j], item["_".concat(field, "_style")]);
          var cellStyle = Utils.calculateObjectValue(_this7.header, _this7.header.cellStyles[j], [value_, item, i, field], {});
          if (cellStyle.classes) {
            attrs.class = attrs.class || [];
            attrs.class.push(cellStyle.classes);
          }
          if (cellStyle.css) {
            attrs.style.push(cellStyle.css);
          }
          value = Utils.calculateObjectValue(column, _this7.header.formatters[j], [value_, item, i, field], value_);
          if (!(column.checkbox || column.radio)) {
            value = typeof value === 'undefined' || value === null ? _this7.options.undefinedText : value;
          }
          if (column.searchable && _this7.searchText && _this7.options.searchHighlight && !(column.checkbox || column.radio)) {
            var searchText = _this7.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            if (_this7.options.searchAccentNeutralise && typeof value === 'string') {
              var indexRegex = new RegExp("".concat(Utils.normalizeAccent(searchText)), 'gmi');
              var match = indexRegex.exec(Utils.normalizeAccent(value));
              if (match) {
                searchText = value.substring(match.index, match.index + searchText.length);
              }
            }
            var defValue = Utils.replaceSearchMark(value, searchText);
            value = Utils.calculateObjectValue(column, column.searchHighlightFormatter, [value, _this7.searchText], defValue);
          }
          if (item["_".concat(field, "_data")] && !Utils.isEmptyObject(item["_".concat(field, "_data")])) {
            for (var _i11 = 0, _Object$entries9 = Object.entries(item["_".concat(field, "_data")]); _i11 < _Object$entries9.length; _i11++) {
              var _Object$entries9$_i = _slicedToArray(_Object$entries9[_i11], 2),
                _k = _Object$entries9$_i[0],
                _v = _Object$entries9$_i[1];
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
            var valueNodes = _this7.header.formatters[j] && (typeof value === 'string' || value instanceof Node || value instanceof $$u) ? Utils.htmlToNodes(value) : [];
            item[_this7.header.stateField] = value === true || !!value_ || value && value.checked;
            return Utils.h(_this7.options.cardView ? 'div' : 'td', {
              class: [_this7.options.cardView ? 'card-view' : 'bs-checkbox', column.class],
              style: _this7.options.cardView ? undefined : attrs.style
            }, [Utils.h('label', {}, [Utils.h('input', {
              'data-index': i,
              name: _this7.options.selectItemName,
              type: type,
              value: item[_this7.options.idField],
              checked: isChecked ? 'checked' : undefined,
              disabled: isDisabled ? 'disabled' : undefined
            }), Utils.h('span')])].concat(_toConsumableArray(valueNodes)));
          }
          if (_this7.options.cardView) {
            if (_this7.options.smartDisplay && value === '') {
              return Utils.h('div', {
                class: 'card-view'
              });
            }
            var cardTitle = _this7.options.showHeader ? Utils.h('span', {
              class: ['card-view-title', cellStyle.classes],
              style: attrs.style,
              html: Utils.getFieldTitle(_this7.columns, field)
            }) : '';
            return Utils.h('div', {
              class: 'card-view'
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
      }
    }, {
      key: "initBody",
      value: function initBody(fixedScroll, updatedUid) {
        var _this8 = this;
        var data = this.getData();
        this.trigger('pre-body', data);
        this.$body = this.$el.find('>tbody');
        if (!this.$body.length) {
          this.$body = $$u('<tbody></tbody>').appendTo(this.$el);
        }

        // Fix #389 Bootstrap-table-flatJSON is not working
        if (!this.options.pagination || this.options.sidePagination === 'server') {
          this.pageFrom = 1;
          this.pageTo = data.length;
        }
        var rows = [];
        var trFragments = $$u(document.createDocumentFragment());
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
              rows.push($$u('<div>').html(toAppend).html());
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
              _this8.fitHeader();
              _this8.initBodyEvent();
              _this8.trigger('virtual-scroll', startIndex, endIndex);
            }
          });
        }
        toExpand.forEach(function (index) {
          _this8.expandRow(index);
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
      }
    }, {
      key: "initBodyEvent",
      value: function initBodyEvent() {
        var _this9 = this;
        // click to select by column
        this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', function (e) {
          var $td = $$u(e.currentTarget);
          if ($td.find('.detail-icon').length || $td.index() - Utils.getDetailViewIndexOffset(_this9.options) < 0) {
            return;
          }
          var $tr = $td.parent();
          var $cardViewArr = $$u(e.target).parents('.card-views').children();
          var $cardViewTarget = $$u(e.target).parents('.card-view');
          var rowIndex = $tr.data('index');
          var item = _this9.data[rowIndex];
          var index = _this9.options.cardView ? $cardViewArr.index($cardViewTarget) : $td[0].cellIndex;
          var fields = _this9.getVisibleFields();
          var field = fields[index - Utils.getDetailViewIndexOffset(_this9.options)];
          var column = _this9.columns[_this9.fieldsColumnsIndex[field]];
          var value = Utils.getItemField(item, field, _this9.options.escape, column.escape);
          _this9.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td);
          _this9.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field);

          // if click to select - then trigger the checkbox/radio click
          if (e.type === 'click' && _this9.options.clickToSelect && column.clickToSelect && !Utils.calculateObjectValue(_this9.options, _this9.options.ignoreClickToSelectOn, [e.target])) {
            var $selectItem = $tr.find(Utils.sprintf('[name="%s"]', _this9.options.selectItemName));
            if ($selectItem.length) {
              $selectItem[0].click();
            }
          }
          if (e.type === 'click' && _this9.options.detailViewByClick) {
            _this9.toggleDetailView(rowIndex, _this9.header.detailFormatters[_this9.fieldsColumnsIndex[field]]);
          }
        }).off('mousedown').on('mousedown', function (e) {
          // https://github.com/jquery/jquery/issues/1741
          _this9.multipleSelectRowCtrlKey = e.ctrlKey || e.metaKey;
          _this9.multipleSelectRowShiftKey = e.shiftKey;
        });
        this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click', function (e) {
          e.preventDefault();
          _this9.toggleDetailView($$u(e.currentTarget).parent().parent().data('index'));
          return false;
        });
        this.$selectItem = this.$body.find(Utils.sprintf('[name="%s"]', this.options.selectItemName));
        this.$selectItem.off('click').on('click', function (e) {
          e.stopImmediatePropagation();
          var $this = $$u(e.currentTarget);
          _this9._toggleCheck($this.prop('checked'), $this.data('index'));
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
          var field = _this9.header.fields[i];
          var fieldIndex = _this9.getVisibleFields().indexOf(field);
          if (fieldIndex === -1) {
            return;
          }
          fieldIndex += Utils.getDetailViewIndexOffset(_this9.options);
          var _loop3 = function _loop3(key) {
            if (!events.hasOwnProperty(key)) {
              return 1; // continue
            }
            var event = events[key];
            _this9.$body.find('>tr:not(.no-records-found)').each(function (i, tr) {
              var $tr = $$u(tr);
              var $td = $tr.find(_this9.options.cardView ? '.card-views>.card-view' : '>td').eq(fieldIndex);
              var index = key.indexOf(' ');
              var name = key.substring(0, index);
              var el = key.substring(index + 1);
              $td.find(el).off(name).on(name, function (e) {
                var index = $tr.data('index');
                var row = _this9.data[index];
                var value = row[field];
                event.apply(_this9, [e, value, row, index]);
              });
            });
          };
          for (var key in events) {
            if (_loop3(key)) continue;
          }
        });
      }
    }, {
      key: "initServer",
      value: function initServer(silent, query) {
        var _this10 = this;
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
          var _iterator2 = _createForOfIteratorHelper(this.columns),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var column = _step2.value;
              if (!column.checkbox && column.searchable && (this.options.visibleSearch && column.visible || !this.options.visibleSearch)) {
                params.searchable.push(column.field);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
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
            var res = Utils.calculateObjectValue(_this10.options, _this10.options.responseHandler, [_res, jqXHR], _res);
            if (_this10.options.sidePagination === 'client' && _this10.options.paginationLoadMore) {
              _this10._paginationLoaded = _this10.data.length === res.length;
            }
            _this10.load(res);
            _this10.trigger('load-success', res, jqXHR && jqXHR.status, jqXHR);
            if (!silent) {
              _this10.hideLoading();
            }
            if (_this10.options.sidePagination === 'server' && _this10.options.pageNumber > 1 && res[_this10.options.totalField] > 0 && !res[_this10.options.dataField].length) {
              _this10.updatePagination();
            }
          },
          error: function error(jqXHR) {
            // abort ajax by multiple request
            if (jqXHR && jqXHR.status === 0 && _this10._xhrAbort) {
              _this10._xhrAbort = false;
              return;
            }
            var data = [];
            if (_this10.options.sidePagination === 'server') {
              data = {};
              data[_this10.options.totalField] = 0;
              data[_this10.options.dataField] = [];
            }
            _this10.load(data);
            _this10.trigger('load-error', jqXHR && jqXHR.status, jqXHR);
            if (!silent) {
              _this10.hideLoading();
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
          this._xhr = $$u.ajax(request);
        }
        return data;
      }
    }, {
      key: "initSearchText",
      value: function initSearchText() {
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
      }
    }, {
      key: "getCaret",
      value: function getCaret() {
        var _this11 = this;
        this.$header.find('th').each(function (i, th) {
          $$u(th).find('.sortable').removeClass('desc asc').addClass($$u(th).data('field') === _this11.options.sortName ? _this11.options.sortOrder : 'both');
        });
      }
    }, {
      key: "updateSelected",
      value: function updateSelected() {
        var checkAll = this.$selectItem.filter(':enabled').length && this.$selectItem.filter(':enabled').length === this.$selectItem.filter(':enabled').filter(':checked').length;
        this.$selectAll.add(this.$selectAll_).prop('checked', checkAll);
        this.$selectItem.each(function (i, el) {
          $$u(el).closest('tr')[$$u(el).prop('checked') ? 'addClass' : 'removeClass']('selected');
        });
      }
    }, {
      key: "updateRows",
      value: function updateRows() {
        var _this12 = this;
        this.$selectItem.each(function (i, el) {
          _this12.data[$$u(el).data('index')][_this12.header.stateField] = $$u(el).prop('checked');
        });
      }
    }, {
      key: "resetRows",
      value: function resetRows() {
        var _iterator3 = _createForOfIteratorHelper(this.data),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var row = _step3.value;
            this.$selectAll.prop('checked', false);
            this.$selectItem.prop('checked', false);
            if (this.header.stateField) {
              row[this.header.stateField] = false;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.initHiddenRows();
      }
    }, {
      key: "trigger",
      value: function trigger(_name) {
        var _this$options, _this$options2;
        var name = "".concat(_name, ".bs.table");
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_this$options = this.options)[BootstrapTable.EVENTS[name]].apply(_this$options, [].concat(args, [this]));
        this.$el.trigger($$u.Event(name, {
          sender: this
        }), args);
        (_this$options2 = this.options).onAll.apply(_this$options2, [name].concat([].concat(args, [this])));
        this.$el.trigger($$u.Event('all.bs.table', {
          sender: this
        }), [name, args]);
      }
    }, {
      key: "resetHeader",
      value: function resetHeader() {
        var _this13 = this;
        // fix #61: the hidden table reset header bug.
        // fix bug: get $el.css('width') error sometime (height = 500)
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(function () {
          return _this13.fitHeader();
        }, this.$el.is(':hidden') ? 100 : 0);
      }
    }, {
      key: "fitHeader",
      value: function fitHeader() {
        var _this14 = this;
        if (this.$el.is(':hidden')) {
          this.timeoutId_ = setTimeout(function () {
            return _this14.fitHeader();
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
        this.$tableHeader.css('margin-right', scrollWidth).find('table').css('width', this.$el.outerWidth()).html('').attr('class', this.$el.attr('class')).append(this.$header_);
        this.$tableLoading.css('width', this.$el.outerWidth());
        var focusedTemp = $$u('.focus-temp:visible:eq(0)');
        if (focusedTemp.length > 0) {
          focusedTemp.focus();
          this.$header.find('.focus-temp').removeClass('focus-temp');
        }

        // fix bug: $.data() is not working as expected after $.append()
        this.$header.find('th[data-field]').each(function (i, el) {
          _this14.$header_.find(Utils.sprintf('th[data-field="%s"]', $$u(el).data('field'))).data($$u(el).data());
        });
        var visibleFields = this.getVisibleFields();
        var $ths = this.$header_.find('th');
        var $tr = this.$body.find('>tr:not(.no-records-found,.virtual-scroll-top)').eq(0);
        while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
          $tr = $tr.next();
        }
        var trLength = $tr.find('> *').length;
        $tr.find('> *').each(function (i, el) {
          var $this = $$u(el);
          if (Utils.hasDetailViewIcon(_this14.options)) {
            if (i === 0 && _this14.options.detailViewAlign !== 'right' || i === trLength - 1 && _this14.options.detailViewAlign === 'right') {
              var $thDetail = $ths.filter('.detail');
              var _zoomWidth = $thDetail.innerWidth() - $thDetail.find('.fht-cell').width();
              $thDetail.find('.fht-cell').width($this.innerWidth() - _zoomWidth);
              return;
            }
          }
          var index = i - Utils.getDetailViewIndexOffset(_this14.options);
          var $th = _this14.$header_.find(Utils.sprintf('th[data-field="%s"]', visibleFields[index]));
          if ($th.length > 1) {
            $th = $$u($ths[$this[0].cellIndex]);
          }
          var zoomWidth = $th.innerWidth() - $th.find('.fht-cell').width();
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
        var _iterator4 = _createForOfIteratorHelper(this.columns),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var column = _step4.value;
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
          _iterator4.e(err);
        } finally {
          _iterator4.f();
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
      }
    }, {
      key: "fitFooter",
      value: function fitFooter() {
        var _this15 = this;
        if (this.$el.is(':hidden')) {
          setTimeout(function () {
            return _this15.fitFooter();
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
          var $this = $$u(el);
          if (Utils.hasDetailViewIcon(_this15.options)) {
            if (i === 0 && _this15.options.detailViewAlign === 'left' || i === trLength - 1 && _this15.options.detailViewAlign === 'right') {
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
      }
    }, {
      key: "horizontalScroll",
      value: function horizontalScroll() {
        var _this16 = this;
        // horizontal scroll event
        // TODO: it's probably better improving the layout than binding to scroll event
        this.$tableBody.off('scroll').on('scroll', function () {
          var scrollLeft = _this16.$tableBody.scrollLeft();
          if (_this16.options.showHeader && _this16.options.height) {
            _this16.$tableHeader.scrollLeft(scrollLeft);
          }
          if (_this16.options.showFooter && !_this16.options.cardView) {
            _this16.$tableFooter.scrollLeft(scrollLeft);
          }
          _this16.trigger('scroll-body', _this16.$tableBody);
        });
      }
    }, {
      key: "getVisibleFields",
      value: function getVisibleFields() {
        var visibleFields = [];
        var _iterator5 = _createForOfIteratorHelper(this.header.fields),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var field = _step5.value;
            var column = this.columns[this.fieldsColumnsIndex[field]];
            if (!column || !column.visible || this.options.cardView && !column.cardVisible) {
              continue;
            }
            visibleFields.push(field);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return visibleFields;
      }
    }, {
      key: "initHiddenRows",
      value: function initHiddenRows() {
        this.hiddenRows = [];
      }

      // PUBLIC FUNCTION DEFINITION
      // =======================
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
        this.options = Utils.extend(this.options, options);
        this.trigger('refresh-options', this.options);
        this.destroy();
        this.init();
      }
    }, {
      key: "getData",
      value: function getData(params) {
        var _this17 = this;
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
            for (var _i12 = 0, _Object$entries10 = Object.entries(row); _i12 < _Object$entries10.length; _i12++) {
              var _Object$entries10$_i = _slicedToArray(_Object$entries10[_i12], 2),
                key = _Object$entries10$_i[0],
                value = _Object$entries10$_i[1];
              var column = _this17.columns[_this17.fieldsColumnsIndex[key]];
              if (!column) {
                continue;
              }
              return Utils.calculateObjectValue(column, _this17.header.formatters[column.fieldIndex], [value, row, row.index, column.field], value);
            }
          });
        }
        return data;
      }
    }, {
      key: "getSelections",
      value: function getSelections() {
        var _this18 = this;
        return (this.options.maintainMetaData ? this.options.data : this.data).filter(function (row) {
          return row[_this18.header.stateField] === true;
        });
      }
    }, {
      key: "load",
      value: function load(_data) {
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
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        if (this.options.data.length > 0) {
          this.data.splice(0, this.data.length);
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
        var row = this.data[params.index];
        var originalIndex = this.options.data.indexOf(row);
        this.data.splice(params.index, 0, params.row);
        this.options.data.splice(originalIndex, 0, params.row);
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "updateRow",
      value: function updateRow(params) {
        var allParams = Array.isArray(params) ? params : [params];
        var _iterator6 = _createForOfIteratorHelper(allParams),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _params = _step6.value;
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
          _iterator6.e(err);
        } finally {
          _iterator6.f();
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
      }
    }, {
      key: "updateByUniqueId",
      value: function updateByUniqueId(params) {
        var allParams = Array.isArray(params) ? params : [params];
        var updatedUid = null;
        var _iterator7 = _createForOfIteratorHelper(allParams),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _params2 = _step7.value;
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
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true, updatedUid);
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
        if (this.options.sidePagination === 'server') {
          this.options.totalRows -= 1;
          this.data = _toConsumableArray(this.options.data);
        }
        this.initSearch();
        this.initPagination();
        this.initBody(true);
      }
    }, {
      key: "_updateCellOnly",
      value: function _updateCellOnly(field, index) {
        var rowHtml = this.initRow(this.data[index], index);
        var fieldIndex = this.getVisibleFields().indexOf(field);
        if (fieldIndex === -1) {
          return;
        }
        fieldIndex += Utils.getDetailViewIndexOffset(this.options);
        this.$body.find(">tr[data-index=".concat(index, "]")).find(">td:eq(".concat(fieldIndex, ")")).replaceWith($$u(rowHtml).find(">td:eq(".concat(fieldIndex, ")")));
        this.initBodyEvent();
        this.initFooter();
        this.resetView();
        this.updateSelected();
      }
    }, {
      key: "updateCell",
      value: function updateCell(params) {
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
      }
    }, {
      key: "updateCellByUniqueId",
      value: function updateCellByUniqueId(params) {
        var _this19 = this;
        var allParams = Array.isArray(params) ? params : [params];
        allParams.forEach(function (_ref6) {
          var id = _ref6.id,
            field = _ref6.field,
            value = _ref6.value;
          var index = _this19.options.data.indexOf(_this19.getRowByUniqueId(id));
          if (index === -1) {
            return;
          }
          _this19.options.data[index][field] = value;
        });
        if (params.reinit === false) {
          this._updateCellOnly(params.field, this.options.data.indexOf(this.getRowByUniqueId(params.id)));
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
        this.initBody(true);
        this.initPagination();
      }
    }, {
      key: "getHiddenRows",
      value: function getHiddenRows(show) {
        if (show) {
          this.initHiddenRows();
          this.initBody(true);
          this.initPagination();
          return;
        }
        var data = this.getData();
        var rows = [];
        var _iterator8 = _createForOfIteratorHelper(data),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var row = _step8.value;
            if (this.hiddenRows.includes(row)) {
              rows.push(row);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        this.hiddenRows = rows;
        return rows;
      }
    }, {
      key: "showColumn",
      value: function showColumn(field) {
        var _this20 = this;
        var fields = Array.isArray(field) ? field : [field];
        fields.forEach(function (field) {
          _this20._toggleColumn(_this20.fieldsColumnsIndex[field], true, true);
        });
      }
    }, {
      key: "hideColumn",
      value: function hideColumn(field) {
        var _this21 = this;
        var fields = Array.isArray(field) ? field : [field];
        fields.forEach(function (field) {
          _this21._toggleColumn(_this21.fieldsColumnsIndex[field], false, true);
        });
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn(index, checked, needUpdate) {
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
      }
    }, {
      key: "getVisibleColumns",
      value: function getVisibleColumns() {
        var _this22 = this;
        return this.columns.filter(function (column) {
          return column.visible && !_this22.isSelectionColumn(column);
        });
      }
    }, {
      key: "getHiddenColumns",
      value: function getHiddenColumns() {
        return this.columns.filter(function (_ref7) {
          var visible = _ref7.visible;
          return !visible;
        });
      }
    }, {
      key: "isSelectionColumn",
      value: function isSelectionColumn(column) {
        return column.radio || column.checkbox;
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
        var _this23 = this;
        var _iterator9 = _createForOfIteratorHelper(this.columns.slice().reverse()),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var column = _step9.value;
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
          _iterator9.e(err);
        } finally {
          _iterator9.f();
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
              if ($items.filter(':checked').length > _this23.options.minimumCountColumns) {
                $$u(item).prop('checked', visible);
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
        this.updateSelected();
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
          $$u(el).prop('checked', !$$u(el).prop('checked'));
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
          var _iterator10 = _createForOfIteratorHelper(this.options.data),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var r = _step10.value;
              r[this.header.stateField] = false;
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          this.$selectItem.filter(':checked').not($el).prop('checked', false);
        }
        row[this.header.stateField] = checked;
        if (this.options.multipleSelectRow) {
          if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0) {
            var _ref8 = this.multipleSelectRowLastSelectedIndex < index ? [this.multipleSelectRowLastSelectedIndex, index] : [index, this.multipleSelectRowLastSelectedIndex],
              _ref9 = _slicedToArray(_ref8, 2),
              fromIndex = _ref9[0],
              toIndex = _ref9[1];
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
        var _this24 = this;
        if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
          return;
        }
        var rows = [];
        this.data.forEach(function (row, i) {
          if (!row.hasOwnProperty(obj.field)) {
            return false;
          }
          if (obj.values.includes(row[obj.field])) {
            var $el = _this24.$selectItem.filter(':enabled').filter(Utils.sprintf('[data-index="%s"]', i));
            var onlyCurrentPage = obj.hasOwnProperty('onlyCurrentPage') ? obj.onlyCurrentPage : false;
            $el = checked ? $el.not(':checked') : $el.filter(':checked');
            if (!$el.length && onlyCurrentPage) {
              return;
            }
            $el.prop('checked', checked);
            row[_this24.header.stateField] = checked;
            rows.push(row);
            _this24.trigger(checked ? 'check' : 'uncheck', row, $el);
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
        if (params && params.query) {
          var url = new URL(this.options.url);
          var urlParams = new URLSearchParams(url.search);
          for (var _i13 = 0, _Object$entries11 = Object.entries(params.query); _i13 < _Object$entries11.length; _i13++) {
            var _Object$entries11$_i = _slicedToArray(_Object$entries11[_i13], 2),
              key = _Object$entries11$_i[0],
              value = _Object$entries11$_i[1];
            urlParams.set(key, value);
          }
          url.search = urlParams.toString();
          this.options.url = url.toString();
        }
        this.trigger('refresh', this.initServer(params && params.silent));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$el.insertBefore(this.$container);
        $$u(this.options.toolbar).insertBefore(this.$el);
        this.$container.next().remove();
        this.$container.remove();
        this.$el.html(this.$el_.html()).css('margin-top', '0').attr('class', this.$el_.attr('class') || ''); // reset the class

        var resizeEvent = Utils.getEventName('resize.bootstrap-table', this.$el.attr('id'));
        $$u(window).off(resizeEvent);
      }
    }, {
      key: "resetView",
      value: function resetView(params) {
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
          this.getCaret();
          this.$tableContainer.css('padding-bottom', "".concat(padding, "px"));
        }
        this.trigger('reset-view');
      }
    }, {
      key: "showLoading",
      value: function showLoading() {
        this.$tableLoading.toggleClass('open', true);
        var fontSize = this.options.loadingFontSize;
        if (this.options.loadingFontSize === 'auto') {
          fontSize = this.$tableLoading.width() * 0.04;
          fontSize = Math.max(12, fontSize);
          fontSize = Math.min(32, fontSize);
          fontSize = "".concat(fontSize, "px");
        }
        this.$tableLoading.find('.loading-text').css('font-size', fontSize);
      }
    }, {
      key: "hideLoading",
      value: function hideLoading() {
        this.$tableLoading.toggleClass('open', false);
      }
    }, {
      key: "togglePagination",
      value: function togglePagination() {
        this.options.pagination = !this.options.pagination;
        var icon = this.options.showButtonIcons ? this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp : '';
        var text = this.options.showButtonText ? this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown() : '';
        this.$toolbar.find('button[name="paginationSwitch"]').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(text));
        this.updatePagination();
        this.trigger('toggle-pagination', this.options.pagination);
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
        var text = this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn();
        this.$toolbar.find('button[name="toggle"]').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(this.options.showButtonText ? text : '')).attr('aria-label', text).attr(this.options.buttonsAttributeTitle, text);
        this.initBody();
        this.trigger('toggle', this.options.cardView);
      }
    }, {
      key: "resetSearch",
      value: function resetSearch(text) {
        var $search = Utils.getSearchInput(this);
        var textToUse = text || '';
        $search.val(textToUse);
        this.searchText = textToUse;
        this.onSearch({
          currentTarget: $search
        }, false);
      }
    }, {
      key: "filterBy",
      value: function filterBy(columns, options) {
        this.filterOptions = Utils.isEmptyObject(options) ? this.options.filterOptions : Utils.extend(this.options.filterOptions, options);
        this.filterColumns = Utils.isEmptyObject(columns) ? {} : columns;
        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(params) {
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
            scrollTo += $$u(el).outerHeight(true);
          });
        }
        this.$tableBody.scrollTop(scrollTo);
      }
    }, {
      key: "getScrollPosition",
      value: function getScrollPosition() {
        return this.$tableBody.scrollTop();
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
      }
    }, {
      key: "expandRowByUniqueId",
      value: function expandRowByUniqueId(uniqueId) {
        var row = this.getRowByUniqueId(uniqueId);
        if (!row) {
          return;
        }
        this.expandRow(this.data.indexOf(row));
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
      key: "collapseRowByUniqueId",
      value: function collapseRowByUniqueId(uniqueId) {
        var row = this.getRowByUniqueId(uniqueId);
        if (!row) {
          return;
        }
        this.collapseRow(this.data.indexOf(row));
      }
    }, {
      key: "expandAllRows",
      value: function expandAllRows() {
        var trs = this.$body.find('> tr[data-index][data-has-detail-view]');
        for (var i = 0; i < trs.length; i++) {
          this.expandRow($$u(trs[i]).data('index'));
        }
      }
    }, {
      key: "collapseAllRows",
      value: function collapseAllRows() {
        var trs = this.$body.find('> tr[data-index][data-has-detail-view]');
        for (var i = 0; i < trs.length; i++) {
          this.collapseRow($$u(trs[i]).data('index'));
        }
      }
    }, {
      key: "updateColumnTitle",
      value: function updateColumnTitle(params) {
        if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
          return;
        }
        this.columns[this.fieldsColumnsIndex[params.field]].title = this.options.escape && this.options.escapeTitle ? Utils.escapeHTML(params.title) : params.title;
        if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
          this.$header.find('th[data-field]').each(function (i, el) {
            if ($$u(el).data('field') === params.field) {
              $$u($$u(el).find('.th-inner')[0]).html(params.title);
              return false;
            }
          });
          this.resetView();
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
  }();
  BootstrapTable.VERSION = Constants.VERSION;
  BootstrapTable.DEFAULTS = Constants.DEFAULTS;
  BootstrapTable.LOCALES = Constants.LOCALES;
  BootstrapTable.COLUMN_DEFAULTS = Constants.COLUMN_DEFAULTS;
  BootstrapTable.METHODS = Constants.METHODS;
  BootstrapTable.EVENTS = Constants.EVENTS;

  // BOOTSTRAP TABLE PLUGIN DEFINITION
  // =======================

  $$u.BootstrapTable = BootstrapTable;
  $$u.fn.bootstrapTable = function (option) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    var value;
    this.each(function (i, el) {
      var data = $$u(el).data('bootstrap.table');
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
          $$u(el).removeData('bootstrap.table');
        }
        return;
      }
      if (data) {
        console.warn('You cannot initialize the table more than once!');
        return;
      }
      var options = Utils.extend(true, {}, BootstrapTable.DEFAULTS, $$u(el).data(), _typeof(option) === 'object' && option);
      data = new $$u.BootstrapTable(el, options);
      $$u(el).data('bootstrap.table', data);
      data.init();
    });
    return typeof value === 'undefined' ? this : value;
  };
  $$u.fn.bootstrapTable.Constructor = BootstrapTable;
  $$u.fn.bootstrapTable.theme = Constants.THEME;
  $$u.fn.bootstrapTable.VERSION = Constants.VERSION;
  $$u.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS;
  $$u.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS;
  $$u.fn.bootstrapTable.events = BootstrapTable.EVENTS;
  $$u.fn.bootstrapTable.locales = BootstrapTable.LOCALES;
  $$u.fn.bootstrapTable.methods = BootstrapTable.METHODS;
  $$u.fn.bootstrapTable.utils = Utils;

  // BOOTSTRAP TABLE INIT
  // =======================

  $$u(function () {
    $$u('[data-toggle="table"]').bootstrapTable();
  });

  return BootstrapTable;

}));
