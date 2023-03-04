(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$9) { 'use strict';

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
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
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
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
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
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$e =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$k = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$j = fails$k;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$j(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var fails$i = fails$k;

  var functionBindNative = !fails$i(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var call$b = Function.prototype.call;

  var functionCall = NATIVE_BIND$3 ? call$b.bind(call$b) : function () {
    return call$b.apply(call$b, arguments);
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

  var NATIVE_BIND$2 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$a = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$a, call$a);

  var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$a.apply(fn, arguments);
    };
  };

  var uncurryThis$k = functionUncurryThis;

  var toString$8 = uncurryThis$k({}.toString);
  var stringSlice$5 = uncurryThis$k(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$5(toString$8(it), 8, -1);
  };

  var uncurryThis$j = functionUncurryThis;
  var fails$h = fails$k;
  var classof$7 = classofRaw$2;

  var $Object$3 = Object;
  var split = uncurryThis$j(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$h(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$3('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$7(it) == 'String' ? split(it, '') : $Object$3(it);
  } : $Object$3;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$4 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$3 = isNullOrUndefined$4;

  var $TypeError$8 = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$6 = function (it) {
    if (isNullOrUndefined$3(it)) throw $TypeError$8("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$3 = indexedObject;
  var requireObjectCoercible$5 = requireObjectCoercible$6;

  var toIndexedObject$5 = function (it) {
    return IndexedObject$3(requireObjectCoercible$5(it));
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
  var isCallable$e = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$d = isCallable$e;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$8 = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$d(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$d(it);
  };

  var global$d = global$e;
  var isCallable$c = isCallable$e;

  var aFunction = function (argument) {
    return isCallable$c(argument) ? argument : undefined;
  };

  var getBuiltIn$4 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$d[namespace]) : global$d[namespace] && global$d[namespace][method];
  };

  var uncurryThis$i = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$i({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$c = global$e;
  var userAgent = engineUserAgent;

  var process = global$c.process;
  var Deno = global$c.Deno;
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
  var fails$g = fails$k;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$g(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$3 = getBuiltIn$4;
  var isCallable$b = isCallable$e;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$2 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$b($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$2(it));
  };

  var $String$3 = String;

  var tryToString$1 = function (argument) {
    try {
      return $String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$a = isCallable$e;
  var tryToString = tryToString$1;

  var $TypeError$7 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$2 = function (argument) {
    if (isCallable$a(argument)) return argument;
    throw $TypeError$7(tryToString(argument) + ' is not a function');
  };

  var aCallable$1 = aCallable$2;
  var isNullOrUndefined$2 = isNullOrUndefined$4;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$3 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$2(func) ? undefined : aCallable$1(func);
  };

  var call$9 = functionCall;
  var isCallable$9 = isCallable$e;
  var isObject$7 = isObject$8;

  var $TypeError$6 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$7(val = call$9(fn, input))) return val;
    if (isCallable$9(fn = input.valueOf) && !isObject$7(val = call$9(fn, input))) return val;
    if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$7(val = call$9(fn, input))) return val;
    throw $TypeError$6("Can't convert object to primitive value");
  };

  var sharedExports = {};
  var shared$4 = {
    get exports(){ return sharedExports; },
    set exports(v){ sharedExports = v; },
  };

  var global$b = global$e;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$3 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$3(global$b, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$b[key] = value;
    } return value;
  };

  var global$a = global$e;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$a[SHARED] || defineGlobalProperty$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$4.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.29.0',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var requireObjectCoercible$4 = requireObjectCoercible$6;

  var $Object$1 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$5 = function (argument) {
    return $Object$1(requireObjectCoercible$4(argument));
  };

  var uncurryThis$h = functionUncurryThis;
  var toObject$4 = toObject$5;

  var hasOwnProperty = uncurryThis$h({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$4(it), key);
  };

  var uncurryThis$g = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$7 = uncurryThis$g(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id + postfix, 36);
  };

  var global$9 = global$e;
  var shared$3 = sharedExports;
  var hasOwn$7 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$1 = global$9.Symbol;
  var WellKnownSymbolsStore = shared$3('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$b = function (name) {
    if (!hasOwn$7(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$7(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var call$8 = functionCall;
  var isObject$6 = isObject$8;
  var isSymbol$1 = isSymbol$2;
  var getMethod$2 = getMethod$3;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$a = wellKnownSymbol$b;

  var $TypeError$5 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$a('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$6(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$8(exoticToPrim, input, pref);
      if (!isObject$6(result) || isSymbol$1(result)) return result;
      throw $TypeError$5("Can't convert object to primitive value");
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

  var global$8 = global$e;
  var isObject$5 = isObject$8;

  var document$1 = global$8.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$8 = descriptors;
  var fails$f = fails$k;
  var createElement = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$8 && !fails$f(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$7 = descriptors;
  var call$7 = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;
  var toIndexedObject$4 = toIndexedObject$5;
  var toPropertyKey$2 = toPropertyKey$3;
  var hasOwn$6 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$4(O);
    P = toPropertyKey$2(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$6(O, P)) return createPropertyDescriptor$2(!call$7(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$6 = descriptors;
  var fails$e = fails$k;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$e(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$4 = isObject$8;

  var $String$2 = String;
  var $TypeError$4 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$9 = function (argument) {
    if (isObject$4(argument)) return argument;
    throw $TypeError$4($String$2(argument) + ' is not an object');
  };

  var DESCRIPTORS$5 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$8 = anObject$9;
  var toPropertyKey$1 = toPropertyKey$3;

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
  objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$8(O);
    P = toPropertyKey$1(P);
    anObject$8(Attributes);
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
    anObject$8(O);
    P = toPropertyKey$1(P);
    anObject$8(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$3('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$4 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;

  var createNonEnumerableProperty$4 = DESCRIPTORS$4 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltInExports = {};
  var makeBuiltIn$2 = {
    get exports(){ return makeBuiltInExports; },
    set exports(v){ makeBuiltInExports = v; },
  };

  var DESCRIPTORS$3 = descriptors;
  var hasOwn$5 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$5(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$f = functionUncurryThis;
  var isCallable$8 = isCallable$e;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$f(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$8(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var global$7 = global$e;
  var isCallable$7 = isCallable$e;

  var WeakMap$1 = global$7.WeakMap;

  var weakMapBasicDetection = isCallable$7(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var shared$2 = sharedExports;
  var uid = uid$2;

  var keys = shared$2('keys');

  var sharedKey$2 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$6 = global$e;
  var isObject$3 = isObject$8;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
  var hasOwn$4 = hasOwnProperty_1;
  var shared$1 = sharedStore;
  var sharedKey$1 = sharedKey$2;
  var hiddenKeys$3 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$6.TypeError;
  var WeakMap = global$6.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
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
    var STATE = sharedKey$1('state');
    hiddenKeys$3[STATE] = true;
    set = function (it, metadata) {
      if (hasOwn$4(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$3(it, STATE, metadata);
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

  var uncurryThis$e = functionUncurryThis;
  var fails$d = fails$k;
  var isCallable$6 = isCallable$e;
  var hasOwn$3 = hasOwnProperty_1;
  var DESCRIPTORS$2 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var inspectSource$1 = inspectSource$2;
  var InternalStateModule = internalState;

  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState$1 = InternalStateModule.get;
  var $String$1 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = Object.defineProperty;
  var stringSlice$4 = uncurryThis$e(''.slice);
  var replace$2 = uncurryThis$e(''.replace);
  var join = uncurryThis$e([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$d(function () {
    return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
    if (stringSlice$4($String$1(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$2($String$1(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$3(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (DESCRIPTORS$2) defineProperty$2(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
      defineProperty$2(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$3(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$2) defineProperty$2(value, 'prototype', { writable: false });
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
    return isCallable$6(this) && getInternalState$1(this).source || inspectSource$1(this);
  }, 'toString');

  var isCallable$5 = isCallable$e;
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$4 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$5(value)) makeBuiltIn(value, name, options);
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
  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

  var max$1 = Math.max;
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$1 = function (index, length) {
    var integer = toIntegerOrInfinity$3(index);
    return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

  var min$1 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$2 = function (argument) {
    return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$1 = toLength$2;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$3 = function (obj) {
    return toLength$1(obj.length);
  };

  var toIndexedObject$3 = toIndexedObject$5;
  var toAbsoluteIndex = toAbsoluteIndex$1;
  var lengthOfArrayLike$2 = lengthOfArrayLike$3;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$2 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$3($this);
      var length = lengthOfArrayLike$2(O);
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
    includes: createMethod$2(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$2(false)
  };

  var uncurryThis$d = functionUncurryThis;
  var hasOwn$2 = hasOwnProperty_1;
  var toIndexedObject$2 = toIndexedObject$5;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$2 = uncurryThis$d([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$2(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$2(hiddenKeys$2, key) && hasOwn$2(O, key) && push$2(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$2(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$2(result, key);
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
  var uncurryThis$c = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$7 = anObject$9;

  var concat$2 = uncurryThis$c([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$7(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
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

  var fails$c = fails$k;
  var isCallable$4 = isCallable$e;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$4(detection) ? fails$c(detection)
      : !!detection;
  };

  var normalize = isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$1.data = {};
  var NATIVE = isForced$1.NATIVE = 'N';
  var POLYFILL = isForced$1.POLYFILL = 'P';

  var isForced_1 = isForced$1;

  var global$5 = global$e;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
  var defineBuiltIn$3 = defineBuiltIn$4;
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
      target = global$5;
    } else if (STATIC) {
      target = global$5[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$5[TARGET] || {}).prototype;
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
        createNonEnumerableProperty$2(sourceProperty, 'sham', true);
      }
      defineBuiltIn$3(target, key, sourceProperty, options);
    }
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

  var DESCRIPTORS$1 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$1 = objectDefineProperty;
  var anObject$6 = anObject$9;
  var toIndexedObject$1 = toIndexedObject$5;
  var objectKeys$1 = objectKeys$2;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$6(O);
    var props = toIndexedObject$1(Properties);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$1 = getBuiltIn$4;

  var html$1 = getBuiltIn$1('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */

  var anObject$5 = anObject$9;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement$1 = documentCreateElement$2;
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

  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$5(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol$9 = wellKnownSymbol$b;
  var create$1 = objectCreate;
  var defineProperty$1 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$9('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    defineProperty$1(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create$1(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $$8 = _export;
  var $includes = arrayIncludes.includes;
  var fails$b = fails$k;
  var addToUnscopables$1 = addToUnscopables$2;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$b(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$8({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('includes');

  var isObject$2 = isObject$8;
  var classof$6 = classofRaw$2;
  var wellKnownSymbol$8 = wellKnownSymbol$b;

  var MATCH$1 = wellKnownSymbol$8('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$2(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$6(it) == 'RegExp');
  };

  var isRegExp = isRegexp;

  var $TypeError$2 = TypeError;

  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw $TypeError$2("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol$7 = wellKnownSymbol$b;

  var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');
  var test = {};

  test[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$3 = isCallable$e;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$6 = wellKnownSymbol$b;

  var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');
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
  var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) == 'Object' && isCallable$3(O.callee) ? 'Arguments' : result;
  };

  var classof$4 = classof$5;

  var $String = String;

  var toString$6 = function (argument) {
    if (classof$4(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };

  var wellKnownSymbol$5 = wellKnownSymbol$b;

  var MATCH = wellKnownSymbol$5('match');

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

  var $$7 = _export;
  var uncurryThis$b = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible$3 = requireObjectCoercible$6;
  var toString$5 = toString$6;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringIndexOf$1 = uncurryThis$b(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$7({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf$1(
        toString$5(requireObjectCoercible$3(this)),
        toString$5(notARegExp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  var classof$3 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$2 = Array.isArray || function isArray(argument) {
    return classof$3(argument) == 'Array';
  };

  var $TypeError$1 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$1('Maximum allowed index exceeded');
    return it;
  };

  var toPropertyKey = toPropertyKey$3;
  var definePropertyModule = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$3;

  var createProperty$1 = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var uncurryThis$a = functionUncurryThis;
  var fails$a = fails$k;
  var isCallable$2 = isCallable$e;
  var classof$2 = classof$5;
  var getBuiltIn = getBuiltIn$4;
  var inspectSource = inspectSource$2;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$a(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$2(argument)) return false;
    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$2(argument)) return false;
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
  var isConstructor$1 = !construct || fails$a(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$1 = isArray$2;
  var isConstructor = isConstructor$1;
  var isObject$1 = isObject$8;
  var wellKnownSymbol$4 = wellKnownSymbol$b;

  var SPECIES$2 = wellKnownSymbol$4('species');
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
        C = C[SPECIES$2];
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

  var fails$9 = fails$k;
  var wellKnownSymbol$3 = wellKnownSymbol$b;
  var V8_VERSION$1 = engineV8Version;

  var SPECIES$1 = wellKnownSymbol$3('species');

  var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$9(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$1] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$6 = _export;
  var fails$8 = fails$k;
  var isArray = isArray$2;
  var isObject = isObject$8;
  var toObject$3 = toObject$5;
  var lengthOfArrayLike$1 = lengthOfArrayLike$3;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var createProperty = createProperty$1;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;
  var wellKnownSymbol$2 = wellKnownSymbol$b;
  var V8_VERSION = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$2('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$8(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$2('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$6({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
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

  var anObject$4 = anObject$9;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$4(this);
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

  var fails$7 = fails$k;
  var global$4 = global$e;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$4.RegExp;

  var UNSUPPORTED_Y$1 = fails$7(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$7(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$7(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y$1
  };

  var fails$6 = fails$k;
  var global$3 = global$e;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$3.RegExp;

  var regexpUnsupportedDotAll = fails$6(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$5 = fails$k;
  var global$2 = global$e;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$2.RegExp;

  var regexpUnsupportedNcg = fails$5(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$6 = functionCall;
  var uncurryThis$9 = functionUncurryThis;
  var toString$4 = toString$6;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var shared = sharedExports;
  var create = objectCreate;
  var getInternalState = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$3 = uncurryThis$9(''.charAt);
  var indexOf = uncurryThis$9(''.indexOf);
  var replace$1 = uncurryThis$9(''.replace);
  var stringSlice$3 = uncurryThis$9(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$6(nativeExec, re1, 'a');
    call$6(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString$4(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$6(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = call$6(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$1(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$3(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
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

      match = call$6(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$3(match.input, charsAdded);
          match[0] = stringSlice$3(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$6(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var $$5 = _export;
  var exec = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$5({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
    exec: exec
  });

  var NATIVE_BIND$1 = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$1 = FunctionPrototype.apply;
  var call$5 = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$5.bind(apply$1) : function () {
    return call$5.apply(apply$1, arguments);
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$8 = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$8(fn);
  };

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var uncurryThis$7 = functionUncurryThisClause;
  var defineBuiltIn$2 = defineBuiltIn$4;
  var regexpExec$1 = regexpExec$2;
  var fails$4 = fails$k;
  var wellKnownSymbol$1 = wellKnownSymbol$b;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;

  var SPECIES = wellKnownSymbol$1('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$1(KEY);

    var DELEGATES_TO_SYMBOL = !fails$4(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$4(function () {
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
        re.constructor[SPECIES] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var uncurriedNativeRegExpMethod = uncurryThis$7(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$7(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype$2.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
          }
          return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn$2(String.prototype, KEY, methods[0]);
      defineBuiltIn$2(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var uncurryThis$6 = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$3 = toString$6;
  var requireObjectCoercible$2 = requireObjectCoercible$6;

  var charAt$2 = uncurryThis$6(''.charAt);
  var charCodeAt = uncurryThis$6(''.charCodeAt);
  var stringSlice$2 = uncurryThis$6(''.slice);

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$3(requireObjectCoercible$2($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$2(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$2(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };

  var charAt$1 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$1 = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  var uncurryThis$5 = functionUncurryThis;
  var toObject$2 = toObject$5;

  var floor = Math.floor;
  var charAt = uncurryThis$5(''.charAt);
  var replace = uncurryThis$5(''.replace);
  var stringSlice$1 = uncurryThis$5(''.slice);
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
    return replace(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$1(str, 0, position);
        case "'": return stringSlice$1(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$1(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var call$4 = functionCall;
  var anObject$3 = anObject$9;
  var isCallable$1 = isCallable$e;
  var classof$1 = classofRaw$2;
  var regexpExec = regexpExec$2;

  var $TypeError = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$1(exec)) {
      var result = call$4(exec, R, S);
      if (result !== null) anObject$3(result);
      return result;
    }
    if (classof$1(R) === 'RegExp') return call$4(regexpExec, R, S);
    throw $TypeError('RegExp#exec called on incompatible receiver');
  };

  var apply = functionApply;
  var call$3 = functionCall;
  var uncurryThis$4 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var fails$3 = fails$k;
  var anObject$2 = anObject$9;
  var isCallable = isCallable$e;
  var isNullOrUndefined$1 = isNullOrUndefined$4;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var toLength = toLength$2;
  var toString$2 = toString$6;
  var requireObjectCoercible$1 = requireObjectCoercible$6;
  var advanceStringIndex = advanceStringIndex$1;
  var getMethod$1 = getMethod$3;
  var getSubstitution = getSubstitution$1;
  var regExpExec$1 = regexpExecAbstract;
  var wellKnownSymbol = wellKnownSymbol$b;

  var REPLACE = wellKnownSymbol('replace');
  var max = Math.max;
  var min = Math.min;
  var concat$1 = uncurryThis$4([].concat);
  var push$1 = uncurryThis$4([].push);
  var stringIndexOf = uncurryThis$4(''.indexOf);
  var stringSlice = uncurryThis$4(''.slice);

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

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$3(function () {
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
  fixRegExpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible$1(this);
        var replacer = isNullOrUndefined$1(searchValue) ? undefined : getMethod$1(searchValue, REPLACE);
        return replacer
          ? call$3(replacer, searchValue, O, replaceValue)
          : call$3(nativeReplace, toString$2(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject$2(this);
        var S = toString$2(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString$2(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec$1(rx, S);
          if (result === null) break;

          push$1(results, result);
          if (!global) break;

          var matchStr = toString$2(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString$2(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat$1([matched], captures, position, S);
            if (namedCaptures !== undefined) push$1(replacerArgs, namedCaptures);
            var replacement = toString$2(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof = classof$5;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$1 = defineBuiltIn$4;
  var toString$1 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$1(Object.prototype, 'toString', toString$1, { unsafe: true });
  }

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
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

  var uncurryThis$3 = functionUncurryThisClause;
  var aCallable = aCallable$2;
  var NATIVE_BIND = functionBindNative;

  var bind$1 = uncurryThis$3(uncurryThis$3.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var bind = functionBindContext;
  var uncurryThis$2 = functionUncurryThis;
  var IndexedObject$2 = indexedObject;
  var toObject$1 = toObject$5;
  var lengthOfArrayLike = lengthOfArrayLike$3;
  var arraySpeciesCreate = arraySpeciesCreate$2;

  var push = uncurryThis$2([].push);

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
      var O = toObject$1($this);
      var self = IndexedObject$2(O);
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

  var fails$2 = fails$k;

  var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$2(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

  var STRICT_METHOD = arrayMethodIsStrict$1('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$1 = global$e;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty = createNonEnumerableProperty$4;

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    if (DOMIterables[COLLECTION_NAME]) {
      handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(DOMTokenListPrototype);

  var call$2 = functionCall;
  var hasOwn = hasOwnProperty_1;
  var isPrototypeOf = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;

  var RegExpPrototype$1 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype$1, R)
      ? call$2(regExpFlags, R) : flags;
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var defineBuiltIn = defineBuiltIn$4;
  var anObject$1 = anObject$9;
  var $toString = toString$6;
  var fails$1 = fails$k;
  var getRegExpFlags = regexpGetFlags;

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails$1(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$1(this);
      var pattern = $toString(R.source);
      var flags = $toString(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, { unsafe: true });
  }

  var $$4 = _export;
  var $find = arrayIteration.find;
  var addToUnscopables = addToUnscopables$2;

  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$4({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var $$3 = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$3({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var DESCRIPTORS = descriptors;
  var uncurryThis$1 = functionUncurryThis;
  var call$1 = functionCall;
  var fails = fails$k;
  var objectKeys = objectKeys$2;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject = toObject$5;
  var IndexedObject$1 = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty = Object.defineProperty;
  var concat = uncurryThis$1([].concat);

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
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject(target);
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
        if (!DESCRIPTORS || call$1(propertyIsEnumerable, S, key)) T[key] = S[key];
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

  var $$1 = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$1({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // `SameValue` abstract operation
  // https://tc39.es/ecma262/#sec-samevalue
  // eslint-disable-next-line es/no-object-is -- safe
  var sameValue$1 = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  var call = functionCall;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var anObject = anObject$9;
  var isNullOrUndefined = isNullOrUndefined$4;
  var requireObjectCoercible = requireObjectCoercible$6;
  var sameValue = sameValue$1;
  var toString = toString$6;
  var getMethod = getMethod$3;
  var regExpExec = regexpExecAbstract;

  // @@search logic
  fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
    return [
      // `String.prototype.search` method
      // https://tc39.es/ecma262/#sec-string.prototype.search
      function search(regexp) {
        var O = requireObjectCoercible(this);
        var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
        return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
      },
      // `RegExp.prototype[@@search]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
      function (string) {
        var rx = anObject(this);
        var S = toString(string);
        var res = maybeCallNative(nativeSearch, rx, S);

        if (res.done) return res.value;

        var previousLastIndex = rx.lastIndex;
        if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
        var result = regExpExec(rx, S);
        if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
        return result === null ? -1 : result.index;
      }
    ];
  });

  var $ = _export;
  var uncurryThis = functionUncurryThis;
  var IndexedObject = indexedObject;
  var toIndexedObject = toIndexedObject$5;
  var arrayMethodIsStrict = arrayMethodIsStrict$2;

  var nativeJoin = uncurryThis([].join);

  var ES3_STRINGS = IndexedObject != Object;
  var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

  // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $({ target: 'Array', proto: true, forced: FORCED }, {
    join: function join(separator) {
      return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  /**
   * @author: Dennis Hernández
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */
  var Utils = $$9.fn.bootstrapTable.utils;
  var UtilsCookie = {
    cookieIds: {
      sortOrder: 'bs.table.sortOrder',
      sortName: 'bs.table.sortName',
      sortPriority: 'bs.table.sortPriority',
      pageNumber: 'bs.table.pageNumber',
      pageList: 'bs.table.pageList',
      columns: 'bs.table.columns',
      hiddenColumns: 'bs.table.hiddenColumns',
      cardView: 'bs.table.cardView',
      searchText: 'bs.table.searchText',
      reorderColumns: 'bs.table.reorderColumns',
      filterControl: 'bs.table.filterControl',
      filterBy: 'bs.table.filterBy'
    },
    getCurrentHeader: function getCurrentHeader(that) {
      return that.options.height ? that.$tableHeader : that.$header;
    },
    getCurrentSearchControls: function getCurrentSearchControls(that) {
      return that.options.height ? 'table select, table input' : 'select, input';
    },
    isCookieSupportedByBrowser: function isCookieSupportedByBrowser() {
      return navigator.cookieEnabled;
    },
    isCookieEnabled: function isCookieEnabled(that, cookieName) {
      return that.options.cookiesEnabled.includes(cookieName);
    },
    setCookie: function setCookie(that, cookieName, cookieValue) {
      if (!that.options.cookie || !UtilsCookie.isCookieEnabled(that, cookieName)) {
        return;
      }
      return that._storage.setItem("".concat(that.options.cookieIdTable, ".").concat(cookieName), cookieValue);
    },
    getCookie: function getCookie(that, cookieName) {
      if (!cookieName || !UtilsCookie.isCookieEnabled(that, cookieName)) {
        return null;
      }
      return that._storage.getItem("".concat(that.options.cookieIdTable, ".").concat(cookieName));
    },
    deleteCookie: function deleteCookie(that, cookieName) {
      return that._storage.removeItem("".concat(that.options.cookieIdTable, ".").concat(cookieName));
    },
    calculateExpiration: function calculateExpiration(cookieExpire) {
      var time = cookieExpire.replace(/[0-9]*/, ''); // s,mi,h,d,m,y

      cookieExpire = cookieExpire.replace(/[A-Za-z]{1,2}/, ''); // number

      switch (time.toLowerCase()) {
        case 's':
          cookieExpire = +cookieExpire;
          break;
        case 'mi':
          cookieExpire *= 60;
          break;
        case 'h':
          cookieExpire = cookieExpire * 60 * 60;
          break;
        case 'd':
          cookieExpire = cookieExpire * 24 * 60 * 60;
          break;
        case 'm':
          cookieExpire = cookieExpire * 30 * 24 * 60 * 60;
          break;
        case 'y':
          cookieExpire = cookieExpire * 365 * 24 * 60 * 60;
          break;
        default:
          cookieExpire = undefined;
          break;
      }
      if (!cookieExpire) {
        return '';
      }
      var d = new Date();
      d.setTime(d.getTime() + cookieExpire * 1000);
      return d.toGMTString();
    },
    initCookieFilters: function initCookieFilters(bootstrapTable) {
      setTimeout(function () {
        var parsedCookieFilters = JSON.parse(UtilsCookie.getCookie(bootstrapTable, UtilsCookie.cookieIds.filterControl));
        if (!bootstrapTable._filterControlValuesLoaded && parsedCookieFilters) {
          var cachedFilters = {};
          var header = UtilsCookie.getCurrentHeader(bootstrapTable);
          var searchControls = UtilsCookie.getCurrentSearchControls(bootstrapTable);
          var applyCookieFilters = function applyCookieFilters(element, filteredCookies) {
            filteredCookies.forEach(function (cookie) {
              var value = element.value.toString();
              var text = cookie.text;
              if (text === '' || element.type === 'radio' && value !== text) {
                return;
              }
              if (element.tagName === 'INPUT' && element.type === 'radio' && value === text) {
                element.checked = true;
                cachedFilters[cookie.field] = text;
              } else if (element.tagName === 'INPUT') {
                element.value = text;
                cachedFilters[cookie.field] = text;
              } else if (element.tagName === 'SELECT' && bootstrapTable.options.filterControlContainer) {
                element.value = text;
                cachedFilters[cookie.field] = text;
              } else if (text !== '' && element.tagName === 'SELECT') {
                cachedFilters[cookie.field] = text;
                var _iterator = _createForOfIteratorHelper(element),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var currentElement = _step.value;
                    if (currentElement.value === text) {
                      currentElement.selected = true;
                      return;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                var option = document.createElement('option');
                option.value = text;
                option.text = text;
                element.add(option, element[1]);
                element.selectedIndex = 1;
              }
            });
          };
          var filterContainer = header;
          if (bootstrapTable.options.filterControlContainer) {
            filterContainer = $$9("".concat(bootstrapTable.options.filterControlContainer));
          }
          filterContainer.find(searchControls).each(function () {
            var field = $$9(this).closest('[data-field]').data('field');
            var filteredCookies = parsedCookieFilters.filter(function (cookie) {
              return cookie.field === field;
            });
            applyCookieFilters(this, filteredCookies);
          });
          bootstrapTable.initColumnSearch(cachedFilters);
          bootstrapTable._filterControlValuesLoaded = true;
          bootstrapTable.initServer();
        }
      }, 250);
    }
  };
  Object.assign($$9.fn.bootstrapTable.defaults, {
    cookie: false,
    cookieExpire: '2h',
    cookiePath: null,
    cookieDomain: null,
    cookieSecure: null,
    cookieSameSite: 'Lax',
    cookieIdTable: '',
    cookiesEnabled: ['bs.table.sortOrder', 'bs.table.sortName', 'bs.table.sortPriority', 'bs.table.pageNumber', 'bs.table.pageList', 'bs.table.hiddenColumns', 'bs.table.columns', 'bs.table.searchText', 'bs.table.filterControl', 'bs.table.filterBy', 'bs.table.reorderColumns', 'bs.table.cardView'],
    cookieStorage: 'cookieStorage',
    // localStorage, sessionStorage, customStorage
    cookieCustomStorageGet: null,
    cookieCustomStorageSet: null,
    cookieCustomStorageDelete: null,
    // internal variable
    _filterControls: [],
    _filterControlValuesLoaded: false,
    _storage: {
      setItem: undefined,
      getItem: undefined,
      removeItem: undefined
    }
  });
  $$9.fn.bootstrapTable.methods.push('getCookies');
  $$9.fn.bootstrapTable.methods.push('deleteCookie');
  Object.assign($$9.fn.bootstrapTable.utils, {
    setCookie: UtilsCookie.setCookie,
    getCookie: UtilsCookie.getCookie
  });
  $$9.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    _inherits(_class, _$$BootstrapTable);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "init",
      value: function init() {
        if (this.options.cookie) {
          if (this.options.cookieStorage === 'cookieStorage' && !UtilsCookie.isCookieSupportedByBrowser()) {
            throw new Error('Cookies are not enabled in this browser.');
          }
          this.configureStorage();

          // FilterBy logic
          var filterByCookieValue = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.filterBy);
          if (typeof filterByCookieValue === 'boolean' && !filterByCookieValue) {
            throw new Error('The cookie value of filterBy must be a json!');
          }
          var filterByCookie = {};
          try {
            filterByCookie = JSON.parse(filterByCookieValue);
          } catch (e) {
            throw new Error('Could not parse the json of the filterBy cookie!');
          }
          this.filterColumns = filterByCookie ? filterByCookie : {};

          // FilterControl logic
          this._filterControls = [];
          this._filterControlValuesLoaded = false;
          this.options.cookiesEnabled = typeof this.options.cookiesEnabled === 'string' ? this.options.cookiesEnabled.replace('[', '').replace(']', '').replace(/'/g, '').replace(/ /g, '').split(',') : this.options.cookiesEnabled;
          if (this.options.filterControl) {
            var that = this;
            this.$el.on('column-search.bs.table', function (e, field, text) {
              var isNewField = true;
              for (var i = 0; i < that._filterControls.length; i++) {
                if (that._filterControls[i].field === field) {
                  that._filterControls[i].text = text;
                  isNewField = false;
                  break;
                }
              }
              if (isNewField) {
                that._filterControls.push({
                  field: field,
                  text: text
                });
              }
              UtilsCookie.setCookie(that, UtilsCookie.cookieIds.filterControl, JSON.stringify(that._filterControls));
            }).on('created-controls.bs.table', UtilsCookie.initCookieFilters(that));
          }
        }
        _get(_getPrototypeOf(_class.prototype), "init", this).call(this);
      }
    }, {
      key: "initServer",
      value: function initServer() {
        var _get2;
        if (this.options.cookie && this.options.filterControl && !this._filterControlValuesLoaded) {
          var cookie = JSON.parse(UtilsCookie.getCookie(this, UtilsCookie.cookieIds.filterControl));
          if (cookie) {
            return;
          }
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "initServer", this)).call.apply(_get2, [this].concat(args));
      }
    }, {
      key: "initTable",
      value: function initTable() {
        var _get3;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "initTable", this)).call.apply(_get3, [this].concat(args));
        this.initCookie();
      }
    }, {
      key: "onSort",
      value: function onSort() {
        var _get4;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        (_get4 = _get(_getPrototypeOf(_class.prototype), "onSort", this)).call.apply(_get4, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        if (this.options.sortName === undefined || this.options.sortOrder === undefined) {
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortName);
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortOrder);
        } else {
          this.options.sortPriority = null;
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortPriority);
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortOrder, this.options.sortOrder);
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortName, this.options.sortName);
        }
      }
    }, {
      key: "onMultipleSort",
      value: function onMultipleSort() {
        var _get5;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        (_get5 = _get(_getPrototypeOf(_class.prototype), "onMultipleSort", this)).call.apply(_get5, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        if (this.options.sortPriority === undefined) {
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortPriority);
        } else {
          this.options.sortName = undefined;
          this.options.sortOrder = undefined;
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortName);
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortOrder);
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortPriority, JSON.stringify(this.options.sortPriority));
        }
      }
    }, {
      key: "onPageNumber",
      value: function onPageNumber() {
        var _get6;
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }
        (_get6 = _get(_getPrototypeOf(_class.prototype), "onPageNumber", this)).call.apply(_get6, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "onPageListChange",
      value: function onPageListChange() {
        var _get7;
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        (_get7 = _get(_getPrototypeOf(_class.prototype), "onPageListChange", this)).call.apply(_get7, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageList, this.options.pageSize);
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "onPagePre",
      value: function onPagePre() {
        var _get8;
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }
        (_get8 = _get(_getPrototypeOf(_class.prototype), "onPagePre", this)).call.apply(_get8, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "onPageNext",
      value: function onPageNext() {
        var _get9;
        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        (_get9 = _get(_getPrototypeOf(_class.prototype), "onPageNext", this)).call.apply(_get9, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn() {
        var _get10;
        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          args[_key9] = arguments[_key9];
        }
        (_get10 = _get(_getPrototypeOf(_class.prototype), "_toggleColumn", this)).call.apply(_get10, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.hiddenColumns, JSON.stringify(this.getHiddenColumns().map(function (column) {
          return column.field;
        })));
      }
    }, {
      key: "_toggleAllColumns",
      value: function _toggleAllColumns() {
        var _get11;
        for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          args[_key10] = arguments[_key10];
        }
        (_get11 = _get(_getPrototypeOf(_class.prototype), "_toggleAllColumns", this)).call.apply(_get11, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.hiddenColumns, JSON.stringify(this.getHiddenColumns().map(function (column) {
          return column.field;
        })));
      }
    }, {
      key: "toggleView",
      value: function toggleView() {
        _get(_getPrototypeOf(_class.prototype), "toggleView", this).call(this);
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.cardView, this.options.cardView);
      }
    }, {
      key: "selectPage",
      value: function selectPage(page) {
        _get(_getPrototypeOf(_class.prototype), "selectPage", this).call(this, page);
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, page);
      }
    }, {
      key: "onSearch",
      value: function onSearch(event) {
        _get(_getPrototypeOf(_class.prototype), "onSearch", this).call(this, event, arguments.length > 1 ? arguments[1] : true);
        if (!this.options.cookie) {
          return;
        }
        if (this.options.search) {
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.searchText, this.searchText);
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "initHeader",
      value: function initHeader() {
        var _get12;
        if (this.options.reorderableColumns && this.options.cookie) {
          this.columnsSortOrder = JSON.parse(UtilsCookie.getCookie(this, UtilsCookie.cookieIds.reorderColumns));
        }
        for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          args[_key11] = arguments[_key11];
        }
        (_get12 = _get(_getPrototypeOf(_class.prototype), "initHeader", this)).call.apply(_get12, [this].concat(args));
      }
    }, {
      key: "persistReorderColumnsState",
      value: function persistReorderColumnsState(that) {
        UtilsCookie.setCookie(that, UtilsCookie.cookieIds.reorderColumns, JSON.stringify(that.columnsSortOrder));
      }
    }, {
      key: "filterBy",
      value: function filterBy() {
        var _get13;
        for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          args[_key12] = arguments[_key12];
        }
        (_get13 = _get(_getPrototypeOf(_class.prototype), "filterBy", this)).call.apply(_get13, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.filterBy, JSON.stringify(this.filterColumns));
      }
    }, {
      key: "initCookie",
      value: function initCookie() {
        var _this = this;
        if (!this.options.cookie) {
          return;
        }
        if (this.options.cookieIdTable === '' || this.options.cookieExpire === '') {
          console.error('Configuration error. Please review the cookieIdTable and the cookieExpire property. If the properties are correct, then this browser does not support cookies.');
          this.options.cookie = false; // Make sure that the cookie extension is disabled
          return;
        }
        var sortOrderCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.sortOrder);
        var sortOrderNameCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.sortName);
        var sortPriorityCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.sortPriority);
        var pageNumberCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.pageNumber);
        var pageListCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.pageList);
        var searchTextCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.searchText);
        var cardViewCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.cardView);
        var columnsCookieValue = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.columns);
        var hiddenColumnsCookieValue = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.hiddenColumns);
        if (typeof columnsCookieValue === 'boolean' && !columnsCookieValue) {
          throw new Error('The cookie value of filterBy must be a json!');
        }
        var columnsCookie = {};
        try {
          columnsCookie = JSON.parse(columnsCookieValue);
        } catch (e) {
          throw new Error('Could not parse the json of the columns cookie!', columnsCookieValue);
        }
        var hiddenColumnsCookie = {};
        try {
          hiddenColumnsCookie = JSON.parse(hiddenColumnsCookieValue);
        } catch (e) {
          throw new Error('Could not parse the json of the hidden columns cookie!', hiddenColumnsCookieValue);
        }
        try {
          sortPriorityCookie = JSON.parse(sortPriorityCookie);
        } catch (e) {
          throw new Error('Could not parse the json of the sortPriority cookie!', sortPriorityCookie);
        }
        if (!sortPriorityCookie) {
          // sortOrder
          this.options.sortOrder = sortOrderCookie ? sortOrderCookie : this.options.sortOrder;
          // sortName
          this.options.sortName = sortOrderNameCookie ? sortOrderNameCookie : this.options.sortName;
        } else {
          this.options.sortOrder = undefined;
          this.options.sortName = undefined;
        }

        // sortPriority
        this.options.sortPriority = sortPriorityCookie ? sortPriorityCookie : this.options.sortPriority;
        if (this.options.sortOrder || this.options.sortName) {
          // sortPriority
          this.options.sortPriority = null;
        }

        // pageNumber
        this.options.pageNumber = pageNumberCookie ? +pageNumberCookie : this.options.pageNumber;
        // pageSize
        this.options.pageSize = pageListCookie ? pageListCookie === this.options.formatAllRows() ? pageListCookie : +pageListCookie : this.options.pageSize;
        // searchText
        if (UtilsCookie.isCookieEnabled(this, UtilsCookie.cookieIds.searchText) && this.options.searchText === '') {
          this.options.searchText = searchTextCookie ? searchTextCookie : '';
        }
        // cardView
        this.options.cardView = cardViewCookie === 'true' ? cardViewCookie : false;
        if (hiddenColumnsCookie) {
          var _iterator2 = _createForOfIteratorHelper(this.columns),
            _step2;
          try {
            var _loop = function _loop() {
              var column = _step2.value;
              column.visible = !hiddenColumnsCookie.filter(function (columnField) {
                if (_this.isSelectionColumn(column)) {
                  return false;
                }
                return columnField === column.field;
              }).length > 0 || !column.switchable;
            };
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else if (columnsCookie) {
          /**
           * This is needed for the old saved cookies!
           * It can be removed in 2-3 Versions Later!!
           * TODO: Remove this part (column cookie) some versions later e.g. 1.22.0
           */
          var _iterator3 = _createForOfIteratorHelper(this.columns),
            _step3;
          try {
            var _loop2 = function _loop2() {
              var column = _step3.value;
              if (!column.switchable) {
                return "continue";
              }
              column.visible = columnsCookie.filter(function (columnField) {
                if (_this.isSelectionColumn(column)) {
                  return true;
                }
                if (columnField instanceof Object) {
                  return columnField.field === column.field;
                }
                return columnField === column.field;
              }).length > 0;
            };
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _ret = _loop2();
              if (_ret === "continue") continue;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
    }, {
      key: "getCookies",
      value: function getCookies() {
        var bootstrapTable = this;
        var cookies = {};
        $$9.each(UtilsCookie.cookieIds, function (key, value) {
          cookies[key] = UtilsCookie.getCookie(bootstrapTable, value);
          if (key === 'columns' || key === 'hiddenColumns' || key === 'sortPriority') {
            cookies[key] = JSON.parse(cookies[key]);
          }
        });
        return cookies;
      }
    }, {
      key: "deleteCookie",
      value: function deleteCookie(cookieName) {
        if (!cookieName) {
          return;
        }
        UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds[cookieName]);
      }
    }, {
      key: "configureStorage",
      value: function configureStorage() {
        var that = this;
        this._storage = {};
        switch (this.options.cookieStorage) {
          case 'cookieStorage':
            this._storage.setItem = function (cookieName, cookieValue) {
              document.cookie = [cookieName, '=', encodeURIComponent(cookieValue), "; expires=".concat(UtilsCookie.calculateExpiration(that.options.cookieExpire)), that.options.cookiePath ? "; path=".concat(that.options.cookiePath) : '', that.options.cookieDomain ? "; domain=".concat(that.options.cookieDomain) : '', that.options.cookieSecure ? '; secure' : '', ";SameSite=".concat(that.options.cookieSameSite)].join('');
            };
            this._storage.getItem = function (cookieName) {
              var value = "; ".concat(document.cookie);
              var parts = value.split("; ".concat(cookieName, "="));
              return parts.length === 2 ? decodeURIComponent(parts.pop().split(';').shift()) : null;
            };
            this._storage.removeItem = function (cookieName) {
              document.cookie = [encodeURIComponent(cookieName), '=', '; expires=Thu, 01 Jan 1970 00:00:00 GMT', that.options.cookiePath ? "; path=".concat(that.options.cookiePath) : '', that.options.cookieDomain ? "; domain=".concat(that.options.cookieDomain) : '', ";SameSite=".concat(that.options.cookieSameSite)].join('');
            };
            break;
          case 'localStorage':
            this._storage.setItem = function (cookieName, cookieValue) {
              localStorage.setItem(cookieName, cookieValue);
            };
            this._storage.getItem = function (cookieName) {
              return localStorage.getItem(cookieName);
            };
            this._storage.removeItem = function (cookieName) {
              localStorage.removeItem(cookieName);
            };
            break;
          case 'sessionStorage':
            this._storage.setItem = function (cookieName, cookieValue) {
              sessionStorage.setItem(cookieName, cookieValue);
            };
            this._storage.getItem = function (cookieName) {
              return sessionStorage.getItem(cookieName);
            };
            this._storage.removeItem = function (cookieName) {
              sessionStorage.removeItem(cookieName);
            };
            break;
          case 'customStorage':
            if (!this.options.cookieCustomStorageSet || !this.options.cookieCustomStorageGet || !this.options.cookieCustomStorageDelete) {
              throw new Error('The following options must be set while using the customStorage: cookieCustomStorageSet, cookieCustomStorageGet and cookieCustomStorageDelete');
            }
            this._storage.setItem = function (cookieName, cookieValue) {
              Utils.calculateObjectValue(that.options, that.options.cookieCustomStorageSet, [cookieName, cookieValue], '');
            };
            this._storage.getItem = function (cookieName) {
              return Utils.calculateObjectValue(that.options, that.options.cookieCustomStorageGet, [cookieName], '');
            };
            this._storage.removeItem = function (cookieName) {
              Utils.calculateObjectValue(that.options, that.options.cookieCustomStorageDelete, [cookieName], '');
            };
            break;
          default:
            throw new Error('Storage method not supported.');
        }
      }
    }]);
    return _class;
  }($$9.BootstrapTable);

}));
