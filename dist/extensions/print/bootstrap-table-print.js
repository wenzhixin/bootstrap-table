(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$b) { 'use strict';

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
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

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

  var toString$4 = uncurryThis$h({}.toString);
  var stringSlice$1 = uncurryThis$h(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$1(toString$4(it), 8, -1);
  };

  var uncurryThis$g = functionUncurryThis;
  var fails$c = fails$f;
  var classof$5 = classofRaw$2;

  var $Object$3 = Object;
  var split = uncurryThis$g(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$c(function () {
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

  var $TypeError$7 = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$2 = function (it) {
    if (isNullOrUndefined$1(it)) throw new $TypeError$7("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$3 = indexedObject;
  var requireObjectCoercible$1 = requireObjectCoercible$2;

  var toIndexedObject$6 = function (it) {
    return IndexedObject$3(requireObjectCoercible$1(it));
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

  var global$9 = global$a;
  var isCallable$a = isCallable$c;

  var aFunction = function (argument) {
    return isCallable$a(argument) ? argument : undefined;
  };

  var getBuiltIn$4 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$9[namespace]) : global$9[namespace] && global$9[namespace][method];
  };

  var uncurryThis$f = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$f({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$8 = global$a;
  var userAgent$2 = engineUserAgent;

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
  var fails$b = fails$f;
  var global$7 = global$a;

  var $String$4 = global$7.String;

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
  var isCallable$9 = isCallable$c;
  var isPrototypeOf = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$2 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$9($Symbol) && isPrototypeOf($Symbol.prototype, $Object$2(it));
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

  var $TypeError$6 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$3 = function (argument) {
    if (isCallable$8(argument)) return argument;
    throw new $TypeError$6(tryToString$1(argument) + ' is not a function');
  };

  var aCallable$2 = aCallable$3;
  var isNullOrUndefined = isNullOrUndefined$2;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$1 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable$2(func);
  };

  var call$3 = functionCall;
  var isCallable$7 = isCallable$c;
  var isObject$7 = isObject$8;

  var $TypeError$5 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$3(fn, input))) return val;
    if (isCallable$7(fn = input.valueOf) && !isObject$7(val = call$3(fn, input))) return val;
    if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$3(fn, input))) return val;
    throw new $TypeError$5("Can't convert object to primitive value");
  };

  var sharedStore = {exports: {}};

  var global$6 = global$a;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$3 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$3(global$6, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$6[key] = value;
    } return value;
  };

  var globalThis$1 = global$a;
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

  var requireObjectCoercible = requireObjectCoercible$2;

  var $Object$1 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$6 = function (argument) {
    return $Object$1(requireObjectCoercible(argument));
  };

  var uncurryThis$e = functionUncurryThis;
  var toObject$5 = toObject$6;

  var hasOwnProperty = uncurryThis$e({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$5(it), key);
  };

  var uncurryThis$d = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$3 = uncurryThis$d(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36);
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

  var wellKnownSymbol$8 = function (name) {
    if (!hasOwn$6(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var call$2 = functionCall;
  var isObject$6 = isObject$8;
  var isSymbol$1 = isSymbol$2;
  var getMethod = getMethod$1;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$7 = wellKnownSymbol$8;

  var $TypeError$4 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$6(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$2(exoticToPrim, input, pref);
      if (!isObject$6(result) || isSymbol$1(result)) return result;
      throw new $TypeError$4("Can't convert object to primitive value");
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
  var isObject$5 = isObject$8;

  var document$1 = global$4.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$9 = descriptors;
  var fails$a = fails$f;
  var createElement = documentCreateElement$1;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$9 && !fails$a(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a !== 7;
  });

  var DESCRIPTORS$8 = descriptors;
  var call$1 = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;
  var toIndexedObject$5 = toIndexedObject$6;
  var toPropertyKey$1 = toPropertyKey$2;
  var hasOwn$5 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$5(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$1(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$7 = descriptors;
  var fails$9 = fails$f;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$9(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });

  var isObject$4 = isObject$8;

  var $String$2 = String;
  var $TypeError$3 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$4 = function (argument) {
    if (isObject$4(argument)) return argument;
    throw new $TypeError$3($String$2(argument) + ' is not an object');
  };

  var DESCRIPTORS$6 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$3 = anObject$4;
  var toPropertyKey = toPropertyKey$2;

  var $TypeError$2 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
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
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$2('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$5 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;

  var createNonEnumerableProperty$2 = DESCRIPTORS$5 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltIn$2 = {exports: {}};

  var DESCRIPTORS$4 = descriptors;
  var hasOwn$4 = hasOwnProperty_1;

  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$4(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$c = functionUncurryThis;
  var isCallable$6 = isCallable$c;
  var store$1 = sharedStoreExports;

  var functionToString = uncurryThis$c(Function.toString);

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

  var sharedKey$2 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$2 = global$a;
  var isObject$3 = isObject$8;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
  var hasOwn$3 = hasOwnProperty_1;
  var shared = sharedStoreExports;
  var sharedKey$1 = sharedKey$2;
  var hiddenKeys$3 = hiddenKeys$4;

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

  var uncurryThis$b = functionUncurryThis;
  var fails$8 = fails$f;
  var isCallable$4 = isCallable$c;
  var hasOwn$2 = hasOwnProperty_1;
  var DESCRIPTORS$3 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var inspectSource$1 = inspectSource$2;
  var InternalStateModule = internalState;

  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String$1 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = Object.defineProperty;
  var stringSlice = uncurryThis$b(''.slice);
  var replace = uncurryThis$b(''.replace);
  var join = uncurryThis$b([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$3 && !fails$8(function () {
    return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
    if (stringSlice($String$1(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String$1(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$2(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (DESCRIPTORS$3) defineProperty$2(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
      defineProperty$2(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$2(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$3) defineProperty$2(value, 'prototype', { writable: false });
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
  var definePropertyModule$3 = objectDefineProperty;
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

  var max$1 = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$2 = function (index, length) {
    var integer = toIntegerOrInfinity$2(index);
    return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
  };

  var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$1 = function (argument) {
    var len = toIntegerOrInfinity$1(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength = toLength$1;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$7 = function (obj) {
    return toLength(obj.length);
  };

  var toIndexedObject$4 = toIndexedObject$6;
  var toAbsoluteIndex$1 = toAbsoluteIndex$2;
  var lengthOfArrayLike$6 = lengthOfArrayLike$7;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$1 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$4($this);
      var length = lengthOfArrayLike$6(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex$1(fromIndex, length);
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
    includes: createMethod$1(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$1(false)
  };

  var uncurryThis$a = functionUncurryThis;
  var hasOwn$1 = hasOwnProperty_1;
  var toIndexedObject$3 = toIndexedObject$6;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$2 = uncurryThis$a([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$3(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$2(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
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
  var uncurryThis$9 = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$2 = anObject$4;

  var concat$1 = uncurryThis$9([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$2(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$7 = fails$f;
  var isCallable$2 = isCallable$c;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true
      : value === NATIVE ? false
      : isCallable$2(detection) ? fails$7(detection)
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
      defineBuiltIn$1(target, key, sourceProperty, options);
    }
  };

  var classof$4 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$4 = Array.isArray || function isArray(argument) {
    return classof$4(argument) === 'Array';
  };

  var $TypeError$1 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$2 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$1('Maximum allowed index exceeded');
    return it;
  };

  var DESCRIPTORS$2 = descriptors;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$3;

  var createProperty$2 = function (object, key, value) {
    if (DESCRIPTORS$2) definePropertyModule$1.f(object, key, createPropertyDescriptor(0, value));
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

  var uncurryThis$8 = functionUncurryThis;
  var fails$6 = fails$f;
  var isCallable = isCallable$c;
  var classof$2 = classof$3;
  var getBuiltIn$1 = getBuiltIn$4;
  var inspectSource = inspectSource$2;

  var noop = function () { /* empty */ };
  var construct = getBuiltIn$1('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec = uncurryThis$8(constructorRegExp.exec);
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
  var isConstructor$2 = !construct || fails$6(function () {
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

  var fails$5 = fails$f;
  var wellKnownSymbol$3 = wellKnownSymbol$8;
  var V8_VERSION$1 = engineV8Version;

  var SPECIES$1 = wellKnownSymbol$3('species');

  var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$5(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$1] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$a = _export;
  var fails$4 = fails$f;
  var isArray$2 = isArray$4;
  var isObject$1 = isObject$8;
  var toObject$4 = toObject$6;
  var lengthOfArrayLike$5 = lengthOfArrayLike$7;
  var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
  var createProperty$1 = createProperty$2;
  var arraySpeciesCreate$2 = arraySpeciesCreate$3;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
  var wellKnownSymbol$2 = wellKnownSymbol$8;
  var V8_VERSION = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$2('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$4(function () {
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
  $$a({ target: 'Array', proto: true, arity: 1, forced: FORCED$3 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$4(this);
      var A = arraySpeciesCreate$2(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$5(E);
          doesNotExceedSafeInteger$1(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger$1(n + 1);
          createProperty$1(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$7 = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$7(fn);
  };

  var uncurryThis$6 = functionUncurryThisClause;
  var aCallable$1 = aCallable$3;
  var NATIVE_BIND = functionBindNative;

  var bind$2 = uncurryThis$6(uncurryThis$6.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$1(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind$2(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var bind$1 = functionBindContext;
  var uncurryThis$5 = functionUncurryThis;
  var IndexedObject$2 = indexedObject;
  var toObject$3 = toObject$6;
  var lengthOfArrayLike$4 = lengthOfArrayLike$7;
  var arraySpeciesCreate$1 = arraySpeciesCreate$3;

  var push$1 = uncurryThis$5([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod = function (TYPE) {
    var IS_MAP = TYPE === 1;
    var IS_FILTER = TYPE === 2;
    var IS_SOME = TYPE === 3;
    var IS_EVERY = TYPE === 4;
    var IS_FIND_INDEX = TYPE === 6;
    var IS_FILTER_REJECT = TYPE === 7;
    var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$3($this);
      var self = IndexedObject$2(O);
      var length = lengthOfArrayLike$4(self);
      var boundFunction = bind$1(callbackfn, that);
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

  var $$9 = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$9({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
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
  var objectKeys$2 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$1 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule = objectDefineProperty;
  var anObject$1 = anObject$4;
  var toIndexedObject$2 = toIndexedObject$6;
  var objectKeys$1 = objectKeys$2;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$1(O);
    var props = toIndexedObject$2(Properties);
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
  var anObject = anObject$4;
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
      EmptyConstructor[PROTOTYPE] = anObject(O);
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
  var addToUnscopables$3 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $$8 = _export;
  var $find = arrayIteration.find;
  var addToUnscopables$2 = addToUnscopables$3;

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
  addToUnscopables$2(FIND);

  var isArray$1 = isArray$4;
  var lengthOfArrayLike$3 = lengthOfArrayLike$7;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
  var bind = functionBindContext;

  // `FlattenIntoArray` abstract operation
  // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
  var flattenIntoArray$1 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? bind(mapper, thisArg) : false;
    var element, elementLen;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

        if (depth > 0 && isArray$1(element)) {
          elementLen = lengthOfArrayLike$3(element);
          targetIndex = flattenIntoArray$1(target, original, element, elementLen, targetIndex, depth - 1) - 1;
        } else {
          doesNotExceedSafeInteger(targetIndex + 1);
          target[targetIndex] = element;
        }

        targetIndex++;
      }
      sourceIndex++;
    }
    return targetIndex;
  };

  var flattenIntoArray_1 = flattenIntoArray$1;

  var $$7 = _export;
  var flattenIntoArray = flattenIntoArray_1;
  var toObject$2 = toObject$6;
  var lengthOfArrayLike$2 = lengthOfArrayLike$7;
  var toIntegerOrInfinity = toIntegerOrInfinity$3;
  var arraySpeciesCreate = arraySpeciesCreate$3;

  // `Array.prototype.flat` method
  // https://tc39.es/ecma262/#sec-array.prototype.flat
  $$7({ target: 'Array', proto: true }, {
    flat: function flat(/* depthArg = 1 */) {
      var depthArg = arguments.length ? arguments[0] : undefined;
      var O = toObject$2(this);
      var sourceLen = lengthOfArrayLike$2(O);
      var A = arraySpeciesCreate(O, 0);
      A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
      return A;
    }
  });

  var $$6 = _export;
  var $includes = arrayIncludes.includes;
  var fails$3 = fails$f;
  var addToUnscopables$1 = addToUnscopables$3;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$3(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$6({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('includes');

  var fails$2 = fails$f;

  var arrayMethodIsStrict$3 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$2(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */
  var $$5 = _export;
  var uncurryThis$4 = functionUncurryThisClause;
  var $indexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;

  var nativeIndexOf = uncurryThis$4([].indexOf);

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$2 = NEGATIVE_ZERO || !arrayMethodIsStrict$2('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$5({ target: 'Array', proto: true, forced: FORCED$2 }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf(this, searchElement, fromIndex) || 0
        : $indexOf(this, searchElement, fromIndex);
    }
  });

  var $$4 = _export;
  var uncurryThis$3 = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toIndexedObject$1 = toIndexedObject$6;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$3;

  var nativeJoin = uncurryThis$3([].join);

  var ES3_STRINGS = IndexedObject$1 !== Object;
  var FORCED$1 = ES3_STRINGS || !arrayMethodIsStrict$1('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$4({ target: 'Array', proto: true, forced: FORCED$1 }, {
    join: function join(separator) {
      return nativeJoin(toIndexedObject$1(this), separator === undefined ? ',' : separator);
    }
  });

  var $$3 = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$3({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var uncurryThis$2 = functionUncurryThis;

  var arraySlice$1 = uncurryThis$2([].slice);

  var $$2 = _export;
  var isArray = isArray$4;
  var isConstructor = isConstructor$2;
  var isObject = isObject$8;
  var toAbsoluteIndex = toAbsoluteIndex$2;
  var lengthOfArrayLike$1 = lengthOfArrayLike$7;
  var toIndexedObject = toIndexedObject$6;
  var createProperty = createProperty$2;
  var wellKnownSymbol = wellKnownSymbol$8;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;
  var nativeSlice = arraySlice$1;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

  var SPECIES = wellKnownSymbol('species');
  var $Array = Array;
  var max = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$2({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike$1(O);
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
      result.length = n;
      return result;
    }
  });

  var tryToString = tryToString$2;

  var $TypeError = TypeError;

  var deletePropertyOrThrow$1 = function (O, P) {
    if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var classof$1 = classof$3;

  var $String = String;

  var toString$2 = function (argument) {
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

  var $$1 = _export;
  var uncurryThis$1 = functionUncurryThis;
  var aCallable = aCallable$3;
  var toObject$1 = toObject$6;
  var lengthOfArrayLike = lengthOfArrayLike$7;
  var deletePropertyOrThrow = deletePropertyOrThrow$1;
  var toString$1 = toString$2;
  var fails$1 = fails$f;
  var internalSort = arraySort;
  var arrayMethodIsStrict = arrayMethodIsStrict$3;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;

  var test = [];
  var nativeSort = uncurryThis$1(test.sort);
  var push = uncurryThis$1(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$1(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$1(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict('sort');

  var STABLE_SORT = !fails$1(function () {
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

  var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$1(x) > toString$1(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$1({ target: 'Array', proto: true, forced: FORCED }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable(comparefn);

      var array = toObject$1(this);

      if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

      var items = [];
      var arrayLength = lengthOfArrayLike(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push(items, array[index]);
      }

      internalSort(items, getSortCompare(comparefn));

      itemsLength = lengthOfArrayLike(items);
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow(array, index++);

      return array;
    }
  });

  // this method was added to unscopables after implementation
  // in popular engines, so it's moved to a separate module
  var addToUnscopables = addToUnscopables$3;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('flat');

  var DESCRIPTORS = descriptors;
  var uncurryThis = functionUncurryThis;
  var call = functionCall;
  var fails = fails$f;
  var objectKeys = objectKeys$2;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject = toObject$6;
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
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  var Utils = $$b.fn.bootstrapTable.utils;
  function printPageBuilderDefault(table) {
    return "\n    <html>\n    <head>\n    <style type=\"text/css\" media=\"print\">\n    @page {\n      size: auto;\n      margin: 25px 0 25px 0;\n    }\n    </style>\n    <style type=\"text/css\" media=\"all\">\n    table {\n      border-collapse: collapse;\n      font-size: 12px;\n    }\n    table, th, td {\n      border: 1px solid grey;\n    }\n    th, td {\n      text-align: center;\n      vertical-align: middle;\n    }\n    p {\n      font-weight: bold;\n      margin-left:20px;\n    }\n    table {\n      width: 94%;\n      margin-left: 3%;\n      margin-right: 3%;\n    }\n    div.bs-table-print {\n      text-align:center;\n    }\n    </style>\n    </head>\n    <title>Print Table</title>\n    <body>\n    <p>Printed on: ".concat(new Date(), " </p>\n    <div class=\"bs-table-print\">").concat(table, "</div>\n    </body>\n    </html>\n  ");
  }
  Object.assign($$b.fn.bootstrapTable.locales, {
    formatPrint: function formatPrint() {
      return 'Print';
    }
  });
  Object.assign($$b.fn.bootstrapTable.defaults, $$b.fn.bootstrapTable.locales);
  Object.assign($$b.fn.bootstrapTable.defaults, {
    showPrint: false,
    printAsFilteredAndSortedOnUI: true,
    printSortColumn: undefined,
    printSortOrder: 'asc',
    printPageBuilder: function printPageBuilder(table) {
      return printPageBuilderDefault(table);
    }
  });
  Object.assign($$b.fn.bootstrapTable.columnDefaults, {
    printFilter: undefined,
    printIgnore: false,
    printFormatter: undefined
  });
  Object.assign($$b.fn.bootstrapTable.defaults.icons, {
    print: {
      bootstrap3: 'glyphicon-print icon-share',
      bootstrap5: 'bi-printer',
      'bootstrap-table': 'icon-printer'
    }[$$b.fn.bootstrapTable.theme] || 'fa-print'
  });
  $$b.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    _inherits(_class, _$$BootstrapTable);
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _createClass(_class, [{
      key: "init",
      value: function init() {
        var _get2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get2, [this].concat(args));
        if (!this.options.showPrint) {
          return;
        }
        this.mergedCells = [];
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        var _this = this,
          _get3;
        this.showToolbar = this.showToolbar || this.options.showPrint;
        if (this.options.showPrint) {
          this.buttons = Object.assign(this.buttons, {
            print: {
              text: this.options.formatPrint(),
              icon: this.options.icons.print,
              event: function event() {
                _this.doPrint(_this.options.printAsFilteredAndSortedOnUI ? _this.getData() : _this.options.data.slice(0));
              },
              attributes: {
                'aria-label': this.options.formatPrint(),
                title: this.options.formatPrint()
              }
            }
          });
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "initToolbar", this)).call.apply(_get3, [this].concat(args));
      }
    }, {
      key: "mergeCells",
      value: function mergeCells(options) {
        _get(_getPrototypeOf(_class.prototype), "mergeCells", this).call(this, options);
        if (!this.options.showPrint) {
          return;
        }
        var col = this.getVisibleFields().indexOf(options.field);
        if (Utils.hasDetailViewIcon(this.options)) {
          col += 1;
        }
        this.mergedCells.push({
          row: options.index,
          col: col,
          rowspan: options.rowspan || 1,
          colspan: options.colspan || 1
        });
      }
    }, {
      key: "doPrint",
      value: function doPrint(data) {
        var _this2 = this;
        var canPrint = function canPrint(column) {
          return !column.printIgnore && column.visible;
        };
        var formatValue = function formatValue(row, i, column) {
          var value_ = Utils.getItemField(row, column.field, _this2.options.escape, column.escape);
          var value = Utils.calculateObjectValue(column, column.printFormatter || column.formatter, [value_, row, i], value_);
          return typeof value === 'undefined' || value === null ? _this2.options.undefinedText : value;
        };
        var buildTable = function buildTable(data, columnsArray) {
          var dir = _this2.$el.attr('dir') || 'ltr';
          var html = ["<table dir=\"".concat(dir, "\"><thead>")];
          var _iterator = _createForOfIteratorHelper(columnsArray),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _columns2 = _step.value;
              html.push('<tr>');
              for (var _h = 0; _h < _columns2.length; _h++) {
                if (canPrint(_columns2[_h])) {
                  html.push("<th\n              ".concat(Utils.sprintf(' rowspan="%s"', _columns2[_h].rowspan), "\n              ").concat(Utils.sprintf(' colspan="%s"', _columns2[_h].colspan), "\n              >").concat(_columns2[_h].title, "</th>"));
                }
              }
              html.push('</tr>');
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          html.push('</thead><tbody>');
          var notRender = [];
          if (_this2.mergedCells) {
            for (var mc = 0; mc < _this2.mergedCells.length; mc++) {
              var currentMergedCell = _this2.mergedCells[mc];
              for (var rs = 0; rs < currentMergedCell.rowspan; rs++) {
                var row = currentMergedCell.row + rs;
                for (var cs = 0; cs < currentMergedCell.colspan; cs++) {
                  var col = currentMergedCell.col + cs;
                  notRender.push("".concat(row, ",").concat(col));
                }
              }
            }
          }
          for (var i = 0; i < data.length; i++) {
            html.push('<tr>');
            var columns = columnsArray.flat(1);
            columns.sort(function (c1, c2) {
              return c1.colspanIndex - c2.colspanIndex;
            });
            for (var j = 0; j < columns.length; j++) {
              if (columns[j].colspanGroup > 0) continue;
              var rowspan = 0;
              var colspan = 0;
              if (_this2.mergedCells) {
                for (var _mc = 0; _mc < _this2.mergedCells.length; _mc++) {
                  var _currentMergedCell = _this2.mergedCells[_mc];
                  if (_currentMergedCell.col === j && _currentMergedCell.row === i) {
                    rowspan = _currentMergedCell.rowspan;
                    colspan = _currentMergedCell.colspan;
                  }
                }
              }
              if (canPrint(columns[j]) && (!notRender.includes("".concat(i, ",").concat(j)) || rowspan > 0 && colspan > 0)) {
                if (rowspan > 0 && colspan > 0) {
                  html.push("<td ".concat(Utils.sprintf(' rowspan="%s"', rowspan), " ").concat(Utils.sprintf(' colspan="%s"', colspan), ">"), formatValue(data[i], i, columns[j]), '</td>');
                } else {
                  html.push('<td>', formatValue(data[i], i, columns[j]), '</td>');
                }
              }
            }
            html.push('</tr>');
          }
          html.push('</tbody>');
          if (_this2.options.showFooter) {
            html.push('<footer><tr>');
            var _iterator2 = _createForOfIteratorHelper(columnsArray),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _columns = _step2.value;
                for (var h = 0; h < _columns.length; h++) {
                  if (canPrint(_columns)) {
                    var footerData = Utils.trToData(_columns, _this2.$el.find('>tfoot>tr'));
                    var footerValue = Utils.calculateObjectValue(_columns[h], _columns[h].footerFormatter, [data], footerData[0] && footerData[0][_columns[h].field] || '');
                    html.push("<th>".concat(footerValue, "</th>"));
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            html.push('</tr></footer>');
          }
          html.push('</table>');
          return html.join('');
        };
        var sortRows = function sortRows(data, colName, sortOrder) {
          if (!colName) {
            return data;
          }
          var reverse = sortOrder !== 'asc';
          reverse = -(+reverse || -1);
          return data.sort(function (a, b) {
            return reverse * a[colName].localeCompare(b[colName]);
          });
        };
        var filterRow = function filterRow(row, filters) {
          for (var index = 0; index < filters.length; ++index) {
            if (row[filters[index].colName] !== filters[index].value) {
              return false;
            }
          }
          return true;
        };
        var filterRows = function filterRows(data, filters) {
          return data.filter(function (row) {
            return filterRow(row, filters);
          });
        };
        var getColumnFilters = function getColumnFilters(columns) {
          return !columns || !columns[0] ? [] : columns[0].filter(function (col) {
            return col.printFilter;
          }).map(function (col) {
            return {
              colName: col.field,
              value: col.printFilter
            };
          });
        };
        data = filterRows(data, getColumnFilters(this.options.columns));
        data = sortRows(data, this.options.printSortColumn, this.options.printSortOrder);
        var table = buildTable(data, this.options.columns);
        var newWin = window.open('');
        var calculatedPrintPage = Utils.calculateObjectValue(this, this.options.printPageBuilder, [table], printPageBuilderDefault(table));
        newWin.document.write(calculatedPrintPage);
        newWin.document.close();
        newWin.focus();
        newWin.print();
        newWin.close();
      }
    }]);
    return _class;
  }($$b.BootstrapTable);

}));
