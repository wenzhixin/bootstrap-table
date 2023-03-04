(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
})(this, (function ($$k) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
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
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
  var global$k =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$q = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$p = fails$q;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$p(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var fails$o = fails$q;

  var functionBindNative = !fails$o(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var call$j = Function.prototype.call;

  var functionCall = NATIVE_BIND$3 ? call$j.bind(call$j) : function () {
    return call$j.apply(call$j, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
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

  var NATIVE_BIND$2 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$i = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$i, call$i);

  var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$i.apply(fn, arguments);
    };
  };

  var uncurryThis$s = functionUncurryThis;

  var toString$c = uncurryThis$s({}.toString);
  var stringSlice$6 = uncurryThis$s(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$6(toString$c(it), 8, -1);
  };

  var uncurryThis$r = functionUncurryThis;
  var fails$n = fails$q;
  var classof$9 = classofRaw$2;

  var $Object$3 = Object;
  var split = uncurryThis$r(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$n(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$3('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$9(it) == 'String' ? split(it, '') : $Object$3(it);
  } : $Object$3;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$7 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$6 = isNullOrUndefined$7;

  var $TypeError$g = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$8 = function (it) {
    if (isNullOrUndefined$6(it)) throw $TypeError$g("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$3 = indexedObject;
  var requireObjectCoercible$7 = requireObjectCoercible$8;

  var toIndexedObject$6 = function (it) {
    return IndexedObject$3(requireObjectCoercible$7(it));
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
  var isCallable$j = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$i = isCallable$j;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$a = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$i(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$i(it);
  };

  var global$j = global$k;
  var isCallable$h = isCallable$j;

  var aFunction = function (argument) {
    return isCallable$h(argument) ? argument : undefined;
  };

  var getBuiltIn$7 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$j[namespace]) : global$j[namespace] && global$j[namespace][method];
  };

  var uncurryThis$q = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$q({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$i = global$k;
  var userAgent$5 = engineUserAgent;

  var process$4 = global$i.process;
  var Deno$1 = global$i.Deno;
  var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
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
  if (!version && userAgent$5) {
    match = userAgent$5.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$5.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION$3 = engineV8Version;
  var fails$m = fails$q;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$m(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$6 = getBuiltIn$7;
  var isCallable$g = isCallable$j;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$2 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$6('Symbol');
    return isCallable$g($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$2(it));
  };

  var $String$4 = String;

  var tryToString$5 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$f = isCallable$j;
  var tryToString$4 = tryToString$5;

  var $TypeError$f = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$9 = function (argument) {
    if (isCallable$f(argument)) return argument;
    throw $TypeError$f(tryToString$4(argument) + ' is not a function');
  };

  var aCallable$8 = aCallable$9;
  var isNullOrUndefined$5 = isNullOrUndefined$7;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$6 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$5(func) ? undefined : aCallable$8(func);
  };

  var call$h = functionCall;
  var isCallable$e = isCallable$j;
  var isObject$9 = isObject$a;

  var $TypeError$e = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$9(val = call$h(fn, input))) return val;
    if (isCallable$e(fn = input.valueOf) && !isObject$9(val = call$h(fn, input))) return val;
    if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$9(val = call$h(fn, input))) return val;
    throw $TypeError$e("Can't convert object to primitive value");
  };

  var sharedExports = {};
  var shared$4 = {
    get exports(){ return sharedExports; },
    set exports(v){ sharedExports = v; },
  };

  var global$h = global$k;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$5 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$5(global$h, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$h[key] = value;
    } return value;
  };

  var global$g = global$k;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$g[SHARED] || defineGlobalProperty$2(SHARED, {});

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

  var requireObjectCoercible$6 = requireObjectCoercible$8;

  var $Object$1 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$7 = function (argument) {
    return $Object$1(requireObjectCoercible$6(argument));
  };

  var uncurryThis$p = functionUncurryThis;
  var toObject$6 = toObject$7;

  var hasOwnProperty = uncurryThis$p({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$6(it), key);
  };

  var uncurryThis$o = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$b = uncurryThis$o(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$b(++id + postfix, 36);
  };

  var global$f = global$k;
  var shared$3 = sharedExports;
  var hasOwn$9 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$2 = global$f.Symbol;
  var WellKnownSymbolsStore = shared$3('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

  var wellKnownSymbol$i = function (name) {
    if (!hasOwn$9(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$9(Symbol$2, name)
        ? Symbol$2[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var call$g = functionCall;
  var isObject$8 = isObject$a;
  var isSymbol$1 = isSymbol$2;
  var getMethod$5 = getMethod$6;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$h = wellKnownSymbol$i;

  var $TypeError$d = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$h('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$8(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$5(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$g(exoticToPrim, input, pref);
      if (!isObject$8(result) || isSymbol$1(result)) return result;
      throw $TypeError$d("Can't convert object to primitive value");
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

  var global$e = global$k;
  var isObject$7 = isObject$a;

  var document$3 = global$e.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$7(document$3) && isObject$7(document$3.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$a = descriptors;
  var fails$l = fails$q;
  var createElement$1 = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$a && !fails$l(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$9 = descriptors;
  var call$f = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;
  var toIndexedObject$5 = toIndexedObject$6;
  var toPropertyKey$2 = toPropertyKey$3;
  var hasOwn$8 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$5(O);
    P = toPropertyKey$2(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$8(O, P)) return createPropertyDescriptor$2(!call$f(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$8 = descriptors;
  var fails$k = fails$q;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$k(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$6 = isObject$a;

  var $String$3 = String;
  var $TypeError$c = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$g = function (argument) {
    if (isObject$6(argument)) return argument;
    throw $TypeError$c($String$3(argument) + ' is not an object');
  };

  var DESCRIPTORS$7 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$f = anObject$g;
  var toPropertyKey$1 = toPropertyKey$3;

  var $TypeError$b = TypeError;
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
    anObject$f(O);
    P = toPropertyKey$1(P);
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
    P = toPropertyKey$1(P);
    anObject$f(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$b('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$6 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;

  var createNonEnumerableProperty$4 = DESCRIPTORS$6 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltInExports = {};
  var makeBuiltIn$3 = {
    get exports(){ return makeBuiltInExports; },
    set exports(v){ makeBuiltInExports = v; },
  };

  var DESCRIPTORS$5 = descriptors;
  var hasOwn$7 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$n = functionUncurryThis;
  var isCallable$d = isCallable$j;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$n(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$d(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$3 = store$1.inspectSource;

  var global$d = global$k;
  var isCallable$c = isCallable$j;

  var WeakMap$1 = global$d.WeakMap;

  var weakMapBasicDetection = isCallable$c(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var shared$2 = sharedExports;
  var uid = uid$2;

  var keys = shared$2('keys');

  var sharedKey$2 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$c = global$k;
  var isObject$5 = isObject$a;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
  var hasOwn$6 = hasOwnProperty_1;
  var shared$1 = sharedStore;
  var sharedKey$1 = sharedKey$2;
  var hiddenKeys$3 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$2 = global$c.TypeError;
  var WeakMap = global$c.WeakMap;
  var set$1, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set$1(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
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
    set$1 = function (it, metadata) {
      if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
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
    set$1 = function (it, metadata) {
      if (hasOwn$6(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$3(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$6(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$6(it, STATE);
    };
  }

  var internalState = {
    set: set$1,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis$m = functionUncurryThis;
  var fails$j = fails$q;
  var isCallable$b = isCallable$j;
  var hasOwn$5 = hasOwnProperty_1;
  var DESCRIPTORS$4 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var inspectSource$2 = inspectSource$3;
  var InternalStateModule$1 = internalState;

  var enforceInternalState = InternalStateModule$1.enforce;
  var getInternalState$1 = InternalStateModule$1.get;
  var $String$2 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$4 = Object.defineProperty;
  var stringSlice$5 = uncurryThis$m(''.slice);
  var replace$3 = uncurryThis$m(''.replace);
  var join = uncurryThis$m([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$j(function () {
    return defineProperty$4(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$5($String$2(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$3($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$5(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (DESCRIPTORS$4) defineProperty$4(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, 'arity') && value.length !== options.arity) {
      defineProperty$4(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$5(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$4) defineProperty$4(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn$5(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$b(this) && getInternalState$1(this).source || inspectSource$2(this);
  }, 'toString');

  var isCallable$a = isCallable$j;
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$6 = function (O, key, value, options) {
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
  var floor$2 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$2 : ceil)(n);
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

  var max$2 = Math.max;
  var min$3 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$2 = function (index, length) {
    var integer = toIntegerOrInfinity$3(index);
    return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

  var min$2 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$4 = function (argument) {
    return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$3 = toLength$4;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$6 = function (obj) {
    return toLength$3(obj.length);
  };

  var toIndexedObject$4 = toIndexedObject$6;
  var toAbsoluteIndex$1 = toAbsoluteIndex$2;
  var lengthOfArrayLike$5 = lengthOfArrayLike$6;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$4 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$4($this);
      var length = lengthOfArrayLike$5(O);
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
    includes: createMethod$4(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$4(false)
  };

  var uncurryThis$l = functionUncurryThis;
  var hasOwn$4 = hasOwnProperty_1;
  var toIndexedObject$3 = toIndexedObject$6;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$5 = uncurryThis$l([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$3(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$4(hiddenKeys$2, key) && hasOwn$4(O, key) && push$5(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$4(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$5(result, key);
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

  var getBuiltIn$5 = getBuiltIn$7;
  var uncurryThis$k = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$e = anObject$g;

  var concat$2 = uncurryThis$k([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$e(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$3 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$3(target, key) && !(exceptions && hasOwn$3(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$i = fails$q;
  var isCallable$9 = isCallable$j;

  var replacement = /#|\.prototype\./;

  var isForced$2 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$9(detection) ? fails$i(detection)
      : !!detection;
  };

  var normalize = isForced$2.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$2.data = {};
  var NATIVE = isForced$2.NATIVE = 'N';
  var POLYFILL = isForced$2.POLYFILL = 'P';

  var isForced_1 = isForced$2;

  var global$b = global$k;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
  var defineBuiltIn$5 = defineBuiltIn$6;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced$1 = isForced_1;

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
      target = global$b;
    } else if (STATIC) {
      target = global$b[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$b[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$2(sourceProperty, 'sham', true);
      }
      defineBuiltIn$5(target, key, sourceProperty, options);
    }
  };

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$3 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$3 = descriptors;
  var uncurryThis$j = functionUncurryThis;
  var call$e = functionCall;
  var fails$h = fails$q;
  var objectKeys$2 = objectKeys$3;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$5 = toObject$7;
  var IndexedObject$2 = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$3 = Object.defineProperty;
  var concat$1 = uncurryThis$j([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$h(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$3 && $assign({ b: 1 }, $assign(defineProperty$3({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$3(this, 'b', {
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
    return $assign({}, A)[symbol] != 7 || objectKeys$2($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$5(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject$2(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat$1(objectKeys$2(S), getOwnPropertySymbols(S)) : objectKeys$2(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$3 || call$e(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$j = _export;
  var assign = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$j({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
    assign: assign
  });

  var classofRaw$1 = classofRaw$2;
  var uncurryThis$i = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw$1(fn) === 'Function') return uncurryThis$i(fn);
  };

  var uncurryThis$h = functionUncurryThisClause;
  var aCallable$7 = aCallable$9;
  var NATIVE_BIND$1 = functionBindNative;

  var bind$5 = uncurryThis$h(uncurryThis$h.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$7(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$5(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var classof$8 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$2 = Array.isArray || function isArray(argument) {
    return classof$8(argument) == 'Array';
  };

  var wellKnownSymbol$g = wellKnownSymbol$i;

  var TO_STRING_TAG$2 = wellKnownSymbol$g('toStringTag');
  var test$1 = {};

  test$1[TO_STRING_TAG$2] = 'z';

  var toStringTagSupport = String(test$1) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$8 = isCallable$j;
  var classofRaw = classofRaw$2;
  var wellKnownSymbol$f = wellKnownSymbol$i;

  var TO_STRING_TAG$1 = wellKnownSymbol$f('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
  };

  var uncurryThis$g = functionUncurryThis;
  var fails$g = fails$q;
  var isCallable$7 = isCallable$j;
  var classof$6 = classof$7;
  var getBuiltIn$4 = getBuiltIn$7;
  var inspectSource$1 = inspectSource$3;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct = getBuiltIn$4('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$3 = uncurryThis$g(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$7(argument)) return false;
    try {
      construct(noop, empty, argument);
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
      return INCORRECT_TO_STRING || !!exec$3(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$2 = !construct || fails$g(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$1 = isArray$2;
  var isConstructor$1 = isConstructor$2;
  var isObject$4 = isObject$a;
  var wellKnownSymbol$e = wellKnownSymbol$i;

  var SPECIES$5 = wellKnownSymbol$e('species');
  var $Array$1 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$1(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$1(C) && (C === $Array$1 || isArray$1(C.prototype))) C = undefined;
      else if (isObject$4(C)) {
        C = C[SPECIES$5];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$1 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$2 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var bind$4 = functionBindContext;
  var uncurryThis$f = functionUncurryThis;
  var IndexedObject$1 = indexedObject;
  var toObject$4 = toObject$7;
  var lengthOfArrayLike$4 = lengthOfArrayLike$6;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;

  var push$4 = uncurryThis$f([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$3 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$4($this);
      var self = IndexedObject$1(O);
      var boundFunction = bind$4(callbackfn, that);
      var length = lengthOfArrayLike$4(self);
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
            case 2: push$4(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$4(target, value);      // filterReject
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

  var fails$f = fails$q;
  var wellKnownSymbol$d = wellKnownSymbol$i;
  var V8_VERSION$2 = engineV8Version;

  var SPECIES$4 = wellKnownSymbol$d('species');

  var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$f(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$4] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$i = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$i({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$5 = classof$7;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$5(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$4 = defineBuiltIn$6;
  var toString$a = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$4(Object.prototype, 'toString', toString$a, { unsafe: true });
  }

  var $$h = _export;
  var toObject$3 = toObject$7;
  var nativeKeys = objectKeys$3;
  var fails$e = fails$q;

  var FAILS_ON_PRIMITIVES = fails$e(function () { nativeKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$h({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
    keys: function keys(it) {
      return nativeKeys(toObject$3(it));
    }
  });

  var $TypeError$a = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$a('Maximum allowed index exceeded');
    return it;
  };

  var toPropertyKey = toPropertyKey$3;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$3;

  var createProperty$2 = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var $$g = _export;
  var fails$d = fails$q;
  var isArray = isArray$2;
  var isObject$3 = isObject$a;
  var toObject$2 = toObject$7;
  var lengthOfArrayLike$3 = lengthOfArrayLike$6;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var createProperty$1 = createProperty$2;
  var arraySpeciesCreate = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;
  var wellKnownSymbol$c = wellKnownSymbol$i;
  var V8_VERSION$1 = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$c('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$d(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$3(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$4 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$g({ target: 'Array', proto: true, arity: 1, forced: FORCED$4 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$2(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$3(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
          createProperty$1(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var objectDefineProperties = {};

  var DESCRIPTORS$2 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule = objectDefineProperty;
  var anObject$d = anObject$g;
  var toIndexedObject$2 = toIndexedObject$6;
  var objectKeys$1 = objectKeys$3;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$d(O);
    var props = toIndexedObject$2(Properties);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$3 = getBuiltIn$7;

  var html$2 = getBuiltIn$3('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */

  var anObject$c = anObject$g;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html$1 = html$2;
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
    html$1.appendChild(iframe);
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
      EmptyConstructor[PROTOTYPE] = anObject$c(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var wellKnownSymbol$b = wellKnownSymbol$i;
  var create$1 = objectCreate;
  var defineProperty$2 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$b('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    defineProperty$2(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$1(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$2 = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var $$f = _export;
  var $includes = arrayIncludes.includes;
  var fails$c = fails$q;
  var addToUnscopables$1 = addToUnscopables$2;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$c(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$f({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('includes');

  var isObject$2 = isObject$a;
  var classof$4 = classofRaw$2;
  var wellKnownSymbol$a = wellKnownSymbol$i;

  var MATCH$1 = wellKnownSymbol$a('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$2(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) == 'RegExp');
  };

  var isRegExp$1 = isRegexp;

  var $TypeError$9 = TypeError;

  var notARegexp = function (it) {
    if (isRegExp$1(it)) {
      throw $TypeError$9("The method doesn't accept regular expressions");
    } return it;
  };

  var classof$3 = classof$7;

  var $String$1 = String;

  var toString$9 = function (argument) {
    if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  var wellKnownSymbol$9 = wellKnownSymbol$i;

  var MATCH = wellKnownSymbol$9('match');

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

  var $$e = _export;
  var uncurryThis$e = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible$5 = requireObjectCoercible$8;
  var toString$8 = toString$9;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringIndexOf$1 = uncurryThis$e(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$e({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf$1(
        toString$8(requireObjectCoercible$5(this)),
        toString$8(notARegExp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
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
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

  var fails$b = fails$q;

  var arrayMethodIsStrict$4 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$b(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;

  var STRICT_METHOD$1 = arrayMethodIsStrict$3('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$a = global$k;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty$1(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    if (DOMIterables[COLLECTION_NAME]) {
      handlePrototype(global$a[COLLECTION_NAME] && global$a[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(DOMTokenListPrototype);

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

  var fails$a = fails$q;
  var global$9 = global$k;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$9.RegExp;

  var UNSUPPORTED_Y$2 = fails$a(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$a(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$a(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y$2
  };

  var fails$9 = fails$q;
  var global$8 = global$k;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$8.RegExp;

  var regexpUnsupportedDotAll = fails$9(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$8 = fails$q;
  var global$7 = global$k;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$7.RegExp;

  var regexpUnsupportedNcg = fails$8(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$d = functionCall;
  var uncurryThis$d = functionUncurryThis;
  var toString$7 = toString$9;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$1 = regexpStickyHelpers;
  var shared = sharedExports;
  var create = objectCreate;
  var getInternalState = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$3 = uncurryThis$d(''.charAt);
  var indexOf = uncurryThis$d(''.indexOf);
  var replace$2 = uncurryThis$d(''.replace);
  var stringSlice$4 = uncurryThis$d(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$d(nativeExec, re1, 'a');
    call$d(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString$7(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$d(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = call$d(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$2(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$4(str, re.lastIndex);
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

      match = call$d(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$4(match.input, charsAdded);
          match[0] = stringSlice$4(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$d(nativeReplace, match[0], reCopy, function () {
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

  var regexpExec$3 = patchedExec;

  var $$d = _export;
  var exec$2 = regexpExec$3;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$d({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
    exec: exec$2
  });

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$3 = FunctionPrototype.apply;
  var call$c = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$c.bind(apply$3) : function () {
    return call$c.apply(apply$3, arguments);
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var uncurryThis$c = functionUncurryThisClause;
  var defineBuiltIn$3 = defineBuiltIn$6;
  var regexpExec$2 = regexpExec$3;
  var fails$7 = fails$q;
  var wellKnownSymbol$8 = wellKnownSymbol$i;
  var createNonEnumerableProperty = createNonEnumerableProperty$4;

  var SPECIES$3 = wellKnownSymbol$8('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$8(KEY);

    var DELEGATES_TO_SYMBOL = !fails$7(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$7(function () {
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
        re.constructor[SPECIES$3] = function () { return re; };
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
      var uncurriedNativeRegExpMethod = uncurryThis$c(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$c(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$2 || $exec === RegExpPrototype$2.exec) {
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

      defineBuiltIn$3(String.prototype, KEY, methods[0]);
      defineBuiltIn$3(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var isConstructor = isConstructor$2;
  var tryToString$3 = tryToString$5;

  var $TypeError$8 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor(argument)) return argument;
    throw $TypeError$8(tryToString$3(argument) + ' is not a constructor');
  };

  var anObject$a = anObject$g;
  var aConstructor = aConstructor$1;
  var isNullOrUndefined$4 = isNullOrUndefined$7;
  var wellKnownSymbol$7 = wellKnownSymbol$i;

  var SPECIES$2 = wellKnownSymbol$7('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$2 = function (O, defaultConstructor) {
    var C = anObject$a(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined$4(S = anObject$a(C)[SPECIES$2]) ? defaultConstructor : aConstructor(S);
  };

  var uncurryThis$b = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$6 = toString$9;
  var requireObjectCoercible$4 = requireObjectCoercible$8;

  var charAt$2 = uncurryThis$b(''.charAt);
  var charCodeAt = uncurryThis$b(''.charCodeAt);
  var stringSlice$3 = uncurryThis$b(''.slice);

  var createMethod$2 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$6(requireObjectCoercible$4($this));
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
            ? stringSlice$3(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$2(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$2(true)
  };

  var charAt$1 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$3 = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  var toAbsoluteIndex = toAbsoluteIndex$2;
  var lengthOfArrayLike$2 = lengthOfArrayLike$6;
  var createProperty = createProperty$2;

  var $Array = Array;
  var max$1 = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$2(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = $Array(max$1(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  };

  var call$b = functionCall;
  var anObject$9 = anObject$g;
  var isCallable$6 = isCallable$j;
  var classof$2 = classofRaw$2;
  var regexpExec$1 = regexpExec$3;

  var $TypeError$7 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$6(exec)) {
      var result = call$b(exec, R, S);
      if (result !== null) anObject$9(result);
      return result;
    }
    if (classof$2(R) === 'RegExp') return call$b(regexpExec$1, R, S);
    throw $TypeError$7('RegExp#exec called on incompatible receiver');
  };

  var apply$2 = functionApply;
  var call$a = functionCall;
  var uncurryThis$a = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
  var anObject$8 = anObject$g;
  var isNullOrUndefined$3 = isNullOrUndefined$7;
  var isRegExp = isRegexp;
  var requireObjectCoercible$3 = requireObjectCoercible$8;
  var speciesConstructor$1 = speciesConstructor$2;
  var advanceStringIndex$2 = advanceStringIndex$3;
  var toLength$2 = toLength$4;
  var toString$5 = toString$9;
  var getMethod$4 = getMethod$6;
  var arraySlice$3 = arraySliceSimple;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$3;
  var stickyHelpers = regexpStickyHelpers;
  var fails$6 = fails$q;

  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$1 = Math.min;
  var $push = [].push;
  var exec$1 = uncurryThis$a(/./.exec);
  var push$3 = uncurryThis$a($push);
  var stringSlice$2 = uncurryThis$a(''.slice);

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$6(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  // @@split logic
  fixRegExpWellKnownSymbolLogic$2('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = toString$5(requireObjectCoercible$3(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) {
          return call$a(nativeSplit, string, separator, lim);
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
        while (match = call$a(regexpExec, separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            push$3(output, stringSlice$2(string, lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) apply$2($push, output, arraySlice$3(match, 1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !exec$1(separatorCopy, '')) push$3(output, '');
        } else push$3(output, stringSlice$2(string, lastLastIndex));
        return output.length > lim ? arraySlice$3(output, 0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : call$a(nativeSplit, this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible$3(this);
        var splitter = isNullOrUndefined$3(separator) ? undefined : getMethod$4(separator, SPLIT);
        return splitter
          ? call$a(splitter, separator, O, limit)
          : call$a(internalSplit, toString$5(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (string, limit) {
        var rx = anObject$8(this);
        var S = toString$5(string);
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

        if (res.done) return res.value;

        var C = speciesConstructor$1(rx, RegExp);

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
        if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
          var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$2(S, q) : S);
          var e;
          if (
            z === null ||
            (e = min$1(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
          ) {
            q = advanceStringIndex$2(S, q, unicodeMatching);
          } else {
            push$3(A, stringSlice$2(S, p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              push$3(A, z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        push$3(A, stringSlice$2(S, p));
        return A;
      }
    ];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

  // a string of all valid unicode whitespaces
  var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
    '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$9 = functionUncurryThis;
  var requireObjectCoercible$2 = requireObjectCoercible$8;
  var toString$4 = toString$9;
  var whitespaces$2 = whitespaces$3;

  var replace$1 = uncurryThis$9(''.replace);
  var ltrim = RegExp('^[' + whitespaces$2 + ']+');
  var rtrim = RegExp('(^|[^' + whitespaces$2 + '])[' + whitespaces$2 + ']+$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$1 = function (TYPE) {
    return function ($this) {
      var string = toString$4(requireObjectCoercible$2($this));
      if (TYPE & 1) string = replace$1(string, ltrim, '');
      if (TYPE & 2) string = replace$1(string, rtrim, '$1');
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

  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var fails$5 = fails$q;
  var whitespaces$1 = whitespaces$3;

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$5(function () {
      return !!whitespaces$1[METHOD_NAME]()
        || non[METHOD_NAME]() !== non
        || (PROPER_FUNCTION_NAME$1 && whitespaces$1[METHOD_NAME].name !== METHOD_NAME);
    });
  };

  var $$c = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$c({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var DESCRIPTORS$1 = descriptors;
  var uncurryThis$8 = functionUncurryThis;
  var objectKeys = objectKeys$3;
  var toIndexedObject$1 = toIndexedObject$6;
  var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

  var propertyIsEnumerable = uncurryThis$8($propertyIsEnumerable);
  var push$2 = uncurryThis$8([].push);

  // `Object.{ entries, values }` methods implementation
  var createMethod = function (TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject$1(it);
      var keys = objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) {
        key = keys[i++];
        if (!DESCRIPTORS$1 || propertyIsEnumerable(O, key)) {
          push$2(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }
      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod(false)
  };

  var $$b = _export;
  var $values = objectToArray.values;

  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  $$b({ target: 'Object', stat: true }, {
    values: function values(O) {
      return $values(O);
    }
  });

  var call$9 = functionCall;
  var hasOwn$2 = hasOwnProperty_1;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;

  var RegExpPrototype$1 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn$2(R, 'flags') && isPrototypeOf$2(RegExpPrototype$1, R)
      ? call$9(regExpFlags, R) : flags;
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var defineBuiltIn$2 = defineBuiltIn$6;
  var anObject$7 = anObject$g;
  var $toString = toString$9;
  var fails$4 = fails$q;
  var getRegExpFlags = regexpGetFlags;

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails$4(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn$2(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$7(this);
      var pattern = $toString(R.source);
      var flags = $toString(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, { unsafe: true });
  }

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */
  var $$a = _export;
  var uncurryThis$7 = functionUncurryThisClause;
  var $indexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$4;

  var nativeIndexOf = uncurryThis$7([].indexOf);

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED$3 = NEGATIVE_ZERO || !arrayMethodIsStrict$2('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$a({ target: 'Array', proto: true, forced: FORCED$3 }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf(this, searchElement, fromIndex) || 0
        : $indexOf(this, searchElement, fromIndex);
    }
  });

  var global$6 = global$k;
  var fails$3 = fails$q;
  var uncurryThis$6 = functionUncurryThis;
  var toString$3 = toString$9;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$3;

  var $parseInt$1 = global$6.parseInt;
  var Symbol$1 = global$6.Symbol;
  var ITERATOR$3 = Symbol$1 && Symbol$1.iterator;
  var hex = /^[+-]?0x/i;
  var exec = uncurryThis$6(hex.exec);
  var FORCED$2 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
    // MS Edge 18- broken with boxed symbols
    || (ITERATOR$3 && !fails$3(function () { $parseInt$1(Object(ITERATOR$3)); }));

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
    var S = trim(toString$3(string));
    return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
  } : $parseInt$1;

  var $$9 = _export;
  var $parseInt = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$9({ global: true, forced: parseInt != $parseInt }, {
    parseInt: $parseInt
  });

  var $$8 = _export;
  var $find = arrayIteration.find;
  var addToUnscopables = addToUnscopables$2;

  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$8({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var classof$1 = classofRaw$2;

  var engineIsNode = typeof process != 'undefined' && classof$1(process) == 'process';

  var uncurryThis$5 = functionUncurryThis;
  var aCallable$6 = aCallable$9;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$5(aCallable$6(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isCallable$5 = isCallable$j;

  var $String = String;
  var $TypeError$6 = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$5(argument)) return argument;
    throw $TypeError$6("Can't set " + $String(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThisAccessor = functionUncurryThisAccessor;
  var anObject$6 = anObject$g;
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
      anObject$6(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var defineProperty$1 = objectDefineProperty.f;
  var hasOwn$1 = hasOwnProperty_1;
  var wellKnownSymbol$6 = wellKnownSymbol$i;

  var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');

  var setToStringTag$1 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$1(target, TO_STRING_TAG)) {
      defineProperty$1(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
  };

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty = objectDefineProperty;

  var defineBuiltInAccessor$1 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty.f(target, name, descriptor);
  };

  var getBuiltIn$2 = getBuiltIn$7;
  var defineBuiltInAccessor = defineBuiltInAccessor$1;
  var wellKnownSymbol$5 = wellKnownSymbol$i;
  var DESCRIPTORS = descriptors;

  var SPECIES$1 = wellKnownSymbol$5('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$2(CONSTRUCTOR_NAME);

    if (DESCRIPTORS && Constructor && !Constructor[SPECIES$1]) {
      defineBuiltInAccessor(Constructor, SPECIES$1, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var isPrototypeOf$1 = objectIsPrototypeOf;

  var $TypeError$5 = TypeError;

  var anInstance$1 = function (it, Prototype) {
    if (isPrototypeOf$1(Prototype, it)) return it;
    throw $TypeError$5('Incorrect invocation');
  };

  var uncurryThis$4 = functionUncurryThis;

  var arraySlice$2 = uncurryThis$4([].slice);

  var $TypeError$4 = TypeError;

  var validateArgumentsLength$1 = function (passed, required) {
    if (passed < required) throw $TypeError$4('Not enough arguments');
    return passed;
  };

  var userAgent$4 = engineUserAgent;

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

  var global$5 = global$k;
  var apply$1 = functionApply;
  var bind$3 = functionBindContext;
  var isCallable$4 = isCallable$j;
  var hasOwn = hasOwnProperty_1;
  var fails$2 = fails$q;
  var html = html$2;
  var arraySlice$1 = arraySlice$2;
  var createElement = documentCreateElement$2;
  var validateArgumentsLength = validateArgumentsLength$1;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$3 = engineIsNode;

  var set = global$5.setImmediate;
  var clear = global$5.clearImmediate;
  var process$3 = global$5.process;
  var Dispatch = global$5.Dispatch;
  var Function$1 = global$5.Function;
  var MessageChannel = global$5.MessageChannel;
  var String$1 = global$5.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;

  fails$2(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global$5.location;
  });

  var run = function (id) {
    if (hasOwn(queue$2, id)) {
      var fn = queue$2[id];
      delete queue$2[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run(id);
    };
  };

  var eventListener = function (event) {
    run(event.data);
  };

  var globalPostMessageDefer = function (id) {
    // old engines have not location.origin
    global$5.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(handler) {
      validateArgumentsLength(arguments.length, 1);
      var fn = isCallable$4(handler) ? handler : Function$1(handler);
      var args = arraySlice$1(arguments, 1);
      queue$2[++counter] = function () {
        apply$1(fn, undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue$2[id];
    };
    // Node.js 0.8-
    if (IS_NODE$3) {
      defer = function (id) {
        process$3.nextTick(runner(id));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = eventListener;
      defer = bind$3(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      global$5.addEventListener &&
      isCallable$4(global$5.postMessage) &&
      !global$5.importScripts &&
      $location && $location.protocol !== 'file:' &&
      !fails$2(globalPostMessageDefer)
    ) {
      defer = globalPostMessageDefer;
      global$5.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function (id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set,
    clear: clear
  };

  var Queue$2 = function () {
    this.head = null;
    this.tail = null;
  };

  Queue$2.prototype = {
    add: function (item) {
      var entry = { item: item, next: null };
      var tail = this.tail;
      if (tail) tail.next = entry;
      else this.head = entry;
      this.tail = entry;
    },
    get: function () {
      var entry = this.head;
      if (entry) {
        var next = this.head = entry.next;
        if (next === null) this.tail = null;
        return entry.item;
      }
    }
  };

  var queue$1 = Queue$2;

  var userAgent$3 = engineUserAgent;

  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != 'undefined';

  var userAgent$2 = engineUserAgent;

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

  var global$4 = global$k;
  var bind$2 = functionBindContext;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var Queue$1 = queue$1;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$2 = engineIsNode;

  var MutationObserver = global$4.MutationObserver || global$4.WebKitMutationObserver;
  var document$2 = global$4.document;
  var process$2 = global$4.process;
  var Promise$1 = global$4.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$4, 'queueMicrotask');
  var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var notify$1, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!microtask$1) {
    var queue = new Queue$1();

    var flush = function () {
      var parent, fn;
      if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();
      while (fn = queue.get()) try {
        fn();
      } catch (error) {
        if (queue.head) notify$1();
        throw error;
      }
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, { characterData: true });
      notify$1 = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1;
      then = bind$2(promise.then, promise);
      notify$1 = function () {
        then(flush);
      };
    // Node.js without promises
    } else if (IS_NODE$2) {
      notify$1 = function () {
        process$2.nextTick(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout
    } else {
      // `webpack` dev server bug on IE global methods - use bind(fn, global)
      macrotask = bind$2(macrotask, global$4);
      notify$1 = function () {
        macrotask(flush);
      };
    }

    microtask$1 = function (fn) {
      if (!queue.head) notify$1();
      queue.add(fn);
    };
  }

  var microtask_1 = microtask$1;

  var hostReportErrors$1 = function (a, b) {
    try {
      // eslint-disable-next-line no-console -- safe
      arguments.length == 1 ? console.error(a) : console.error(a, b);
    } catch (error) { /* empty */ }
  };

  var perform$3 = function (exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };

  var global$3 = global$k;

  var promiseNativeConstructor = global$3.Promise;

  /* global Deno -- Deno case */

  var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

  var IS_DENO$1 = engineIsDeno;
  var IS_NODE$1 = engineIsNode;

  var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
    && typeof window == 'object'
    && typeof document == 'object';

  var global$2 = global$k;
  var NativePromiseConstructor$3 = promiseNativeConstructor;
  var isCallable$3 = isCallable$j;
  var isForced = isForced_1;
  var inspectSource = inspectSource$3;
  var wellKnownSymbol$4 = wellKnownSymbol$i;
  var IS_BROWSER = engineIsBrowser;
  var IS_DENO = engineIsDeno;
  var V8_VERSION = engineV8Version;

  NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
  var SPECIES = wellKnownSymbol$4('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$3(global$2.PromiseRejectionEvent);

  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
      // Detect correctness of subclassing with @@species support
      var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
      var FakePromise = function (exec) {
        exec(function () { /* empty */ }, function () { /* empty */ });
      };
      var constructor = promise.constructor = {};
      constructor[SPECIES] = FakePromise;
      SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
      if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
  });

  var promiseConstructorDetection = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
    SUBCLASSING: SUBCLASSING
  };

  var newPromiseCapability$2 = {};

  var aCallable$5 = aCallable$9;

  var $TypeError$3 = TypeError;

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw $TypeError$3('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$5(resolve);
    this.reject = aCallable$5(reject);
  };

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var $$7 = _export;
  var IS_NODE = engineIsNode;
  var global$1 = global$k;
  var call$8 = functionCall;
  var defineBuiltIn$1 = defineBuiltIn$6;
  var setPrototypeOf = objectSetPrototypeOf;
  var setToStringTag = setToStringTag$1;
  var setSpecies = setSpecies$1;
  var aCallable$4 = aCallable$9;
  var isCallable$2 = isCallable$j;
  var isObject$1 = isObject$a;
  var anInstance = anInstance$1;
  var speciesConstructor = speciesConstructor$2;
  var task = task$1.set;
  var microtask = microtask_1;
  var hostReportErrors = hostReportErrors$1;
  var perform$2 = perform$3;
  var Queue = queue$1;
  var InternalStateModule = internalState;
  var NativePromiseConstructor$2 = promiseNativeConstructor;
  var PromiseConstructorDetection = promiseConstructorDetection;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;

  var PROMISE = 'Promise';
  var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
  var setInternalState = InternalStateModule.set;
  var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
  var PromiseConstructor = NativePromiseConstructor$2;
  var PromisePrototype = NativePromisePrototype$1;
  var TypeError$1 = global$1.TypeError;
  var document$1 = global$1.document;
  var process$1 = global$1.process;
  var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
  var newGenericPromiseCapability = newPromiseCapability$1;

  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$1.dispatchEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;

  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject$1(it) && isCallable$2(then = it.then) ? then : false;
  };

  var callReaction = function (reaction, state) {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }
        if (handler === true) result = value;
        else {
          if (domain) domain.enter();
          result = handler(value); // can throw
          if (domain) {
            domain.exit();
            exited = true;
          }
        }
        if (result === reaction.promise) {
          reject(TypeError$1('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          call$8(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };

  var notify = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function () {
      var reactions = state.reactions;
      var reaction;
      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$1.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$1['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    call$8(task, global$1, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform$2(function () {
          if (IS_NODE) {
            process$1.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function (state) {
    call$8(task, global$1, function () {
      var promise = state.facade;
      if (IS_NODE) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind$1 = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = { done: false };
          try {
            call$8(then, value,
              bind$1(internalResolve, wrapper, state),
              bind$1(internalReject, wrapper, state)
            );
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({ done: false }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED_PROMISE_CONSTRUCTOR$4) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromisePrototype);
      aCallable$4(executor);
      call$8(Internal, this);
      var state = getInternalPromiseState(this);
      try {
        executor(bind$1(internalResolve, state), bind$1(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromisePrototype = PromiseConstructor.prototype;

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn$1(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$2(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$2(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process$1.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    });

    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalPromiseState(promise);
      this.promise = promise;
      this.resolve = bind$1(internalResolve, state);
      this.reject = bind$1(internalReject, state);
    };

    newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };

    if (isCallable$2(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
      nativeThen = NativePromisePrototype$1.then;

      if (!NATIVE_PROMISE_SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn$1(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            call$8(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, { unsafe: true });
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype$1.constructor;
      } catch (error) { /* empty */ }

      // make `instanceof Promise` work for native promise-based APIs
      if (setPrototypeOf) {
        setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
      }
    }
  }

  $$7({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
    Promise: PromiseConstructor
  });

  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);

  var iterators = {};

  var wellKnownSymbol$3 = wellKnownSymbol$i;
  var Iterators$1 = iterators;

  var ITERATOR$2 = wellKnownSymbol$3('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$1 = function (it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
  };

  var classof = classof$7;
  var getMethod$3 = getMethod$6;
  var isNullOrUndefined$2 = isNullOrUndefined$7;
  var Iterators = iterators;
  var wellKnownSymbol$2 = wellKnownSymbol$i;

  var ITERATOR$1 = wellKnownSymbol$2('iterator');

  var getIteratorMethod$2 = function (it) {
    if (!isNullOrUndefined$2(it)) return getMethod$3(it, ITERATOR$1)
      || getMethod$3(it, '@@iterator')
      || Iterators[classof(it)];
  };

  var call$7 = functionCall;
  var aCallable$3 = aCallable$9;
  var anObject$5 = anObject$g;
  var tryToString$2 = tryToString$5;
  var getIteratorMethod$1 = getIteratorMethod$2;

  var $TypeError$2 = TypeError;

  var getIterator$1 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
    if (aCallable$3(iteratorMethod)) return anObject$5(call$7(iteratorMethod, argument));
    throw $TypeError$2(tryToString$2(argument) + ' is not iterable');
  };

  var call$6 = functionCall;
  var anObject$4 = anObject$g;
  var getMethod$2 = getMethod$6;

  var iteratorClose$1 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$4(iterator);
    try {
      innerResult = getMethod$2(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$6(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$4(innerResult);
    return value;
  };

  var bind = functionBindContext;
  var call$5 = functionCall;
  var anObject$3 = anObject$g;
  var tryToString$1 = tryToString$5;
  var isArrayIteratorMethod = isArrayIteratorMethod$1;
  var lengthOfArrayLike$1 = lengthOfArrayLike$6;
  var isPrototypeOf = objectIsPrototypeOf;
  var getIterator = getIterator$1;
  var getIteratorMethod = getIteratorMethod$2;
  var iteratorClose = iteratorClose$1;

  var $TypeError$1 = TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$2 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$3(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw $TypeError$1(tryToString$1(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }

    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$5(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var wellKnownSymbol$1 = wellKnownSymbol$i;

  var ITERATOR = wellKnownSymbol$1('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var NativePromiseConstructor$1 = promiseNativeConstructor;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
  var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

  var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
    NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
  });

  var $$6 = _export;
  var call$4 = functionCall;
  var aCallable$2 = aCallable$9;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$1 = perform$3;
  var iterate$1 = iterate$2;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$6({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$2.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var $promiseResolve = aCallable$2(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$4($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$5 = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor = promiseNativeConstructor;
  var getBuiltIn$1 = getBuiltIn$7;
  var isCallable$1 = isCallable$j;
  var defineBuiltIn = defineBuiltIn$6;

  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$5({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  if (isCallable$1(NativePromiseConstructor)) {
    var method = getBuiltIn$1('Promise').prototype['catch'];
    if (NativePromisePrototype['catch'] !== method) {
      defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
    }
  }

  var $$4 = _export;
  var call$3 = functionCall;
  var aCallable$1 = aCallable$9;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform = perform$3;
  var iterate = iterate$2;
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$4({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$1.f(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable$1(C.resolve);
        iterate(iterable, function (promise) {
          call$3($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$3 = _export;
  var call$2 = functionCall;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$3({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
    reject: function reject(r) {
      var capability = newPromiseCapabilityModule.f(this);
      call$2(capability.reject, undefined, r);
      return capability.promise;
    }
  });

  var anObject$2 = anObject$g;
  var isObject = isObject$a;
  var newPromiseCapability = newPromiseCapability$2;

  var promiseResolve$1 = function (C, x) {
    anObject$2(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var $$2 = _export;
  var getBuiltIn = getBuiltIn$7;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve = promiseResolve$1;

  getBuiltIn('Promise');

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $$2({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });

  var tryToString = tryToString$5;

  var $TypeError = TypeError;

  var deletePropertyOrThrow$1 = function (O, P) {
    if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var arraySlice = arraySliceSimple;

  var floor$1 = Math.floor;

  var mergeSort = function (array, comparefn) {
    var length = array.length;
    var middle = floor$1(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(
      array,
      mergeSort(arraySlice(array, 0, middle), comparefn),
      mergeSort(arraySlice(array, middle), comparefn),
      comparefn
    );
  };

  var insertionSort = function (array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    } return array;
  };

  var merge = function (array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    } return array;
  };

  var arraySort = mergeSort;

  var userAgent$1 = engineUserAgent;

  var firefox = userAgent$1.match(/firefox\/(\d+)/i);

  var engineFfVersion = !!firefox && +firefox[1];

  var UA = engineUserAgent;

  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent = engineUserAgent;

  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

  var engineWebkitVersion = !!webkit && +webkit[1];

  var $$1 = _export;
  var uncurryThis$3 = functionUncurryThis;
  var aCallable = aCallable$9;
  var toObject$1 = toObject$7;
  var lengthOfArrayLike = lengthOfArrayLike$6;
  var deletePropertyOrThrow = deletePropertyOrThrow$1;
  var toString$2 = toString$9;
  var fails$1 = fails$q;
  var internalSort = arraySort;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$4;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;

  var test = [];
  var nativeSort = uncurryThis$3(test.sort);
  var push$1 = uncurryThis$3(test.push);

  // IE8-
  var FAILS_ON_UNDEFINED = fails$1(function () {
    test.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails$1(function () {
    test.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict$1('sort');

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

  var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$2(x) > toString$2(y) ? 1 : -1;
    };
  };

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$1({ target: 'Array', proto: true, forced: FORCED$1 }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable(comparefn);

      var array = toObject$1(this);

      if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

      var items = [];
      var arrayLength = lengthOfArrayLike(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$1(items, array[index]);
      }

      internalSort(items, getSortCompare(comparefn));

      itemsLength = lengthOfArrayLike(items);
      index = 0;

      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) deletePropertyOrThrow(array, index++);

      return array;
    }
  });

  var uncurryThis$2 = functionUncurryThis;
  var toObject = toObject$7;

  var floor = Math.floor;
  var charAt = uncurryThis$2(''.charAt);
  var replace = uncurryThis$2(''.replace);
  var stringSlice$1 = uncurryThis$2(''.slice);
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
      namedCaptures = toObject(namedCaptures);
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

  var apply = functionApply;
  var call$1 = functionCall;
  var uncurryThis$1 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var fails = fails$q;
  var anObject$1 = anObject$g;
  var isCallable = isCallable$j;
  var isNullOrUndefined$1 = isNullOrUndefined$7;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var toLength$1 = toLength$4;
  var toString$1 = toString$9;
  var requireObjectCoercible$1 = requireObjectCoercible$8;
  var advanceStringIndex$1 = advanceStringIndex$3;
  var getMethod$1 = getMethod$6;
  var getSubstitution = getSubstitution$1;
  var regExpExec$1 = regexpExecAbstract;
  var wellKnownSymbol = wellKnownSymbol$i;

  var REPLACE = wellKnownSymbol('replace');
  var max = Math.max;
  var min = Math.min;
  var concat = uncurryThis$1([].concat);
  var push = uncurryThis$1([].push);
  var stringIndexOf = uncurryThis$1(''.indexOf);
  var stringSlice = uncurryThis$1(''.slice);

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

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
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
          ? call$1(replacer, searchValue, O, replaceValue)
          : call$1(nativeReplace, toString$1(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject$1(this);
        var S = toString$1(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString$1(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec$1(rx, S);
          if (result === null) break;

          push(results, result);
          if (!global) break;

          var matchStr = toString$1(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString$1(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            var replacement = toString$1(apply(replaceValue, undefined, replacerArgs));
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

  var call = functionCall;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var anObject = anObject$g;
  var isNullOrUndefined = isNullOrUndefined$7;
  var toLength = toLength$4;
  var toString = toString$9;
  var requireObjectCoercible = requireObjectCoercible$8;
  var getMethod = getMethod$6;
  var advanceStringIndex = advanceStringIndex$3;
  var regExpExec = regexpExecAbstract;

  // @@match logic
  fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible(this);
        var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
        return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var rx = anObject(this);
        var S = toString(string);
        var res = maybeCallNative(nativeMatch, rx, S);

        if (res.done) return res.value;

        if (!rx.global) return regExpExec(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regExpExec(rx, S)) !== null) {
          var matchStr = toString(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  var $ = _export;
  var uncurryThis = functionUncurryThis;
  var IndexedObject = indexedObject;
  var toIndexedObject = toIndexedObject$6;
  var arrayMethodIsStrict = arrayMethodIsStrict$4;

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

  /* eslint-disable no-use-before-define */
  var Utils$1 = $$k.fn.bootstrapTable.utils;
  var searchControls = 'select, input:not([type="checkbox"]):not([type="radio"])';
  function getInputClass(that) {
    var isSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formControlClass = isSelect ? that.constants.classes.select : that.constants.classes.input;
    return that.options.iconSize ? Utils$1.sprintf('%s %s-%s', formControlClass, formControlClass, that.options.iconSize) : formControlClass;
  }
  function getOptionsFromSelectControl(selectControl) {
    return selectControl[0].options;
  }
  function getControlContainer(that) {
    if (that.options.filterControlContainer) {
      return $$k("".concat(that.options.filterControlContainer));
    }
    if (that.options.height && that._initialized) {
      return that.$tableContainer.find('.fixed-table-header table thead');
    }
    return that.$header;
  }
  function isKeyAllowed(keyCode) {
    return $$k.inArray(keyCode, [37, 38, 39, 40]) > -1;
  }
  function getSearchControls(that) {
    return getControlContainer(that).find(searchControls);
  }
  function existOptionInSelectControl(selectControl, value) {
    var options = getOptionsFromSelectControl(selectControl);
    for (var i = 0; i < options.length; i++) {
      if (options[i].value === Utils$1.unescapeHTML(value)) {
        // The value is not valid to add
        return true;
      }
    }

    // If we get here, the value is valid to add
    return false;
  }
  function addOptionToSelectControl(selectControl, _value, text, selected, shouldCompareText) {
    var value = _value === undefined || _value === null ? '' : _value.toString().trim();
    value = Utils$1.removeHTML(Utils$1.unescapeHTML(value));
    text = Utils$1.removeHTML(Utils$1.unescapeHTML(text));
    if (existOptionInSelectControl(selectControl, value)) {
      return;
    }
    var isSelected = shouldCompareText ? value === selected || text === selected : value === selected;
    var option = new Option(text, value, false, isSelected);
    selectControl.get(0).add(option);
  }
  function sortSelectControl(selectControl, orderBy, options) {
    var $selectControl = selectControl.get(0);
    if (orderBy === 'server') {
      return;
    }
    var tmpAry = new Array();
    for (var i = 0; i < $selectControl.options.length; i++) {
      tmpAry[i] = new Array();
      tmpAry[i][0] = $selectControl.options[i].text;
      tmpAry[i][1] = $selectControl.options[i].value;
      tmpAry[i][2] = $selectControl.options[i].selected;
    }
    tmpAry.sort(function (a, b) {
      return Utils$1.sort(a[0], b[0], orderBy === 'desc' ? -1 : 1, options);
    });
    while ($selectControl.options.length > 0) {
      $selectControl.options[0] = null;
    }
    for (var _i = 0; _i < tmpAry.length; _i++) {
      var op = new Option(tmpAry[_i][0], tmpAry[_i][1], false, tmpAry[_i][2]);
      $selectControl.add(op);
    }
  }
  function fixHeaderCSS(_ref) {
    var $tableHeader = _ref.$tableHeader;
    $tableHeader.css('height', $tableHeader.find('table').outerHeight(true));
  }
  function getElementClass($element) {
    return $element.attr('class').replace('form-control', '').replace('form-select', '').replace('focus-temp', '').replace('search-input', '').trim();
  }
  function getCursorPosition(el) {
    if ($$k(el).is('input[type=search]')) {
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
  function cacheValues(that) {
    var searchControls = getSearchControls(that);
    that._valuesFilterControl = [];
    searchControls.each(function () {
      var $field = $$k(this);
      var fieldClass = getElementClass($field);
      if (that.options.height && !that.options.filterControlContainer) {
        $field = that.$el.find(".fixed-table-header .".concat(fieldClass));
      } else if (that.options.filterControlContainer) {
        $field = $$k("".concat(that.options.filterControlContainer, " .").concat(fieldClass));
      } else {
        $field = that.$el.find(".".concat(fieldClass));
      }
      that._valuesFilterControl.push({
        field: $field.closest('[data-field]').data('field'),
        value: $field.val(),
        position: getCursorPosition($field.get(0)),
        hasFocus: $field.is(':focus')
      });
    });
  }
  function setCaretPosition(elem, caretPos) {
    try {
      if (elem) {
        if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
        } else {
          elem.setSelectionRange(caretPos, caretPos);
        }
      }
    } catch (ex) {
      // ignored
    }
  }
  function setValues(that) {
    var field = null;
    var result = [];
    var searchControls = getSearchControls(that);
    if (that._valuesFilterControl.length > 0) {
      //  Callback to apply after settings fields values
      var callbacks = [];
      searchControls.each(function (i, el) {
        var $this = $$k(el);
        field = $this.closest('[data-field]').data('field');
        result = that._valuesFilterControl.filter(function (valueObj) {
          return valueObj.field === field;
        });
        if (result.length > 0) {
          if (result[0].hasFocus || result[0].value) {
            var fieldToFocusCallback = function (element, cacheElementInfo) {
              // Closure here to capture the field information
              var closedCallback = function closedCallback() {
                if (cacheElementInfo.hasFocus) {
                  element.focus();
                }
                if (Array.isArray(cacheElementInfo.value)) {
                  var $element = $$k(element);
                  $$k.each(cacheElementInfo.value, function (i, e) {
                    $element.find(Utils$1.sprintf('option[value=\'%s\']', e)).prop('selected', true);
                  });
                } else {
                  element.value = cacheElementInfo.value;
                }
                setCaretPosition(element, cacheElementInfo.position);
              };
              return closedCallback;
            }($this.get(0), result[0]);
            callbacks.push(fieldToFocusCallback);
          }
        }
      });

      // Callback call.
      if (callbacks.length > 0) {
        callbacks.forEach(function (callback) {
          return callback();
        });
      }
    }
  }
  function collectBootstrapTableFilterCookies() {
    var cookies = [];
    var foundCookies = document.cookie.match(/bs\.table\.(filterControl|searchText)/g);
    var foundLocalStorage = localStorage;
    if (foundCookies) {
      $$k.each(foundCookies, function (i, _cookie) {
        var cookie = _cookie;
        if (/./.test(cookie)) {
          cookie = cookie.split('.').pop();
        }
        if ($$k.inArray(cookie, cookies) === -1) {
          cookies.push(cookie);
        }
      });
    }
    if (foundLocalStorage) {
      for (var i = 0; i < foundLocalStorage.length; i++) {
        var cookie = foundLocalStorage.key(i);
        if (/./.test(cookie)) {
          cookie = cookie.split('.').pop();
        }
        if (!cookies.includes(cookie)) {
          cookies.push(cookie);
        }
      }
    }
    return cookies;
  }
  function escapeID(id) {
    // eslint-disable-next-line no-useless-escape
    return String(id).replace(/([:.\[\],])/g, '\\$1');
  }
  function isColumnSearchableViaSelect(_ref2) {
    var filterControl = _ref2.filterControl,
      searchable = _ref2.searchable;
    return filterControl && filterControl.toLowerCase() === 'select' && searchable;
  }
  function isFilterDataNotGiven(_ref3) {
    var filterData = _ref3.filterData;
    return filterData === undefined || filterData.toLowerCase() === 'column';
  }
  function hasSelectControlElement(selectControl) {
    return selectControl && selectControl.length > 0;
  }
  function initFilterSelectControls(that) {
    var data = that.options.data;
    $$k.each(that.header.fields, function (j, field) {
      var column = that.columns[that.fieldsColumnsIndex[field]];
      var selectControl = getControlContainer(that).find("select.bootstrap-table-filter-control-".concat(escapeID(column.field)));
      if (isColumnSearchableViaSelect(column) && isFilterDataNotGiven(column) && hasSelectControlElement(selectControl)) {
        if (!selectControl[0].multiple && selectControl.get(selectControl.length - 1).options.length === 0) {
          // Added the default option, must use a non-breaking space(&nbsp;) to pass the W3C validator
          addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder || ' ', column.filterDefault);
        }
        var uniqueValues = {};
        for (var i = 0; i < data.length; i++) {
          // Added a new value
          var fieldValue = Utils$1.getItemField(data[i], field, false);
          var formatter = that.options.editable && column.editable ? column._formatter : that.header.formatters[j];
          var formattedValue = Utils$1.calculateObjectValue(that.header, formatter, [fieldValue, data[i], i], fieldValue);
          if (fieldValue === undefined || fieldValue === null) {
            fieldValue = formattedValue;
            column._forceFormatter = true;
          }
          if (column.filterDataCollector) {
            formattedValue = Utils$1.calculateObjectValue(that.header, column.filterDataCollector, [fieldValue, data[i], formattedValue], formattedValue);
          }
          if (column.searchFormatter) {
            fieldValue = formattedValue;
          }
          uniqueValues[formattedValue] = fieldValue;
          if (_typeof(formattedValue) === 'object' && formattedValue !== null) {
            formattedValue.forEach(function (value) {
              addOptionToSelectControl(selectControl, value, value, column.filterDefault);
            });
            continue;
          }
        }

        // eslint-disable-next-line guard-for-in
        for (var key in uniqueValues) {
          addOptionToSelectControl(selectControl, uniqueValues[key], key, column.filterDefault);
        }
        if (that.options.sortSelectOptions) {
          sortSelectControl(selectControl, 'asc', that.options);
        }
      }
    });
  }
  function getFilterDataMethod(objFilterDataMethod, searchTerm) {
    var keys = Object.keys(objFilterDataMethod);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === searchTerm) {
        return objFilterDataMethod[searchTerm];
      }
    }
    return null;
  }
  function createControls(that, header) {
    var addedFilterControl = false;
    var html;
    $$k.each(that.columns, function (_, column) {
      html = [];
      if (!column.visible && !(that.options.filterControlContainer && $$k(".bootstrap-table-filter-control-".concat(column.field)).length >= 1)) {
        return;
      }
      if (!column.filterControl && !that.options.filterControlContainer) {
        html.push('<div class="no-filter-control"></div>');
      } else if (that.options.filterControlContainer) {
        // Use a filter control container instead of th
        var $filterControls = $$k(".bootstrap-table-filter-control-".concat(column.field));
        $$k.each($filterControls, function (_, filterControl) {
          var $filterControl = $$k(filterControl);
          if (!$filterControl.is('[type=radio]')) {
            var placeholder = column.filterControlPlaceholder || '';
            $filterControl.attr('placeholder', placeholder).val(column.filterDefault);
          }
          $filterControl.attr('data-field', column.field);
        });
        addedFilterControl = true;
      } else {
        // Create the control based on the html defined in the filterTemplate array.
        var nameControl = column.filterControl.toLowerCase();
        html.push('<div class="filter-control">');
        addedFilterControl = true;
        if (column.searchable && that.options.filterTemplate[nameControl]) {
          html.push(that.options.filterTemplate[nameControl](that, column, column.filterControlPlaceholder ? column.filterControlPlaceholder : '', column.filterDefault));
        }
      }

      // Filtering by default when it is set.
      if (column.filterControl && '' !== column.filterDefault && 'undefined' !== typeof column.filterDefault) {
        if ($$k.isEmptyObject(that.filterColumnsPartial)) {
          that.filterColumnsPartial = {};
        }
        if (!(column.field in that.filterColumnsPartial)) {
          that.filterColumnsPartial[column.field] = column.filterDefault;
        }
      }
      $$k.each(header.find('th'), function (_, th) {
        var $th = $$k(th);
        if ($th.data('field') === column.field) {
          $th.find('.filter-control').remove();
          $th.find('.fht-cell').html(html.join(''));
          return false;
        }
      });
      if (column.filterData && column.filterData.toLowerCase() !== 'column') {
        var filterDataType = getFilterDataMethod(filterDataMethods, column.filterData.substring(0, column.filterData.indexOf(':')));
        var filterDataSource;
        var selectControl;
        if (filterDataType) {
          filterDataSource = column.filterData.substring(column.filterData.indexOf(':') + 1, column.filterData.length);
          selectControl = header.find(".bootstrap-table-filter-control-".concat(escapeID(column.field)));
          addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault, true);
          filterDataType(that, filterDataSource, selectControl, that.options.filterOrderBy, column.filterDefault);
        } else {
          throw new SyntaxError('Error. You should use any of these allowed filter data methods: var, obj, json, url, func.' + ' Use like this: var: {key: "value"}');
        }
      }
    });
    if (addedFilterControl) {
      header.off('keyup', 'input').on('keyup', 'input', function (_ref4, obj) {
        var currentTarget = _ref4.currentTarget,
          keyCode = _ref4.keyCode;
        keyCode = obj ? obj.keyCode : keyCode;
        if (that.options.searchOnEnterKey && keyCode !== 13) {
          return;
        }
        if (isKeyAllowed(keyCode)) {
          return;
        }
        var $currentTarget = $$k(currentTarget);
        if ($currentTarget.is(':checkbox') || $currentTarget.is(':radio')) {
          return;
        }
        clearTimeout(currentTarget.timeoutId || 0);
        currentTarget.timeoutId = setTimeout(function () {
          that.onColumnSearch({
            currentTarget: currentTarget,
            keyCode: keyCode
          });
        }, that.options.searchTimeOut);
      });
      header.off('change', 'select', '.fc-multipleselect').on('change', 'select', '.fc-multipleselect', function (_ref5) {
        var currentTarget = _ref5.currentTarget,
          keyCode = _ref5.keyCode;
        var $selectControl = $$k(currentTarget);
        var value = $selectControl.val();
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            if (value[i] && value[i].length > 0 && value[i].trim()) {
              $selectControl.find("option[value=\"".concat(value[i], "\"]")).attr('selected', true);
            }
          }
        } else if (value && value.length > 0 && value.trim()) {
          $selectControl.find('option[selected]').removeAttr('selected');
          $selectControl.find("option[value=\"".concat(value, "\"]")).attr('selected', true);
        } else {
          $selectControl.find('option[selected]').removeAttr('selected');
        }
        clearTimeout(currentTarget.timeoutId || 0);
        currentTarget.timeoutId = setTimeout(function () {
          that.onColumnSearch({
            currentTarget: currentTarget,
            keyCode: keyCode
          });
        }, that.options.searchTimeOut);
      });
      header.off('mouseup', 'input:not([type=radio])').on('mouseup', 'input:not([type=radio])', function (_ref6) {
        var currentTarget = _ref6.currentTarget,
          keyCode = _ref6.keyCode;
        var $input = $$k(currentTarget);
        var oldValue = $input.val();
        if (oldValue === '') {
          return;
        }
        setTimeout(function () {
          var newValue = $input.val();
          if (newValue === '') {
            clearTimeout(currentTarget.timeoutId || 0);
            currentTarget.timeoutId = setTimeout(function () {
              that.onColumnSearch({
                currentTarget: currentTarget,
                keyCode: keyCode
              });
            }, that.options.searchTimeOut);
          }
        }, 1);
      });
      header.off('change', 'input[type=radio]').on('change', 'input[type=radio]', function (_ref7) {
        var currentTarget = _ref7.currentTarget,
          keyCode = _ref7.keyCode;
        clearTimeout(currentTarget.timeoutId || 0);
        currentTarget.timeoutId = setTimeout(function () {
          that.onColumnSearch({
            currentTarget: currentTarget,
            keyCode: keyCode
          });
        }, that.options.searchTimeOut);
      });

      // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
      if (header.find('.date-filter-control').length > 0) {
        $$k.each(that.columns, function (i, _ref8) {
          var filterDefault = _ref8.filterDefault,
            filterControl = _ref8.filterControl,
            field = _ref8.field,
            filterDatepickerOptions = _ref8.filterDatepickerOptions;
          if (filterControl !== undefined && filterControl.toLowerCase() === 'datepicker') {
            var $datepicker = header.find(".date-filter-control.bootstrap-table-filter-control-".concat(field));
            if (filterDefault) {
              $datepicker.value(filterDefault);
            }
            if (filterDatepickerOptions.min) {
              $datepicker.attr('min', filterDatepickerOptions.min);
            }
            if (filterDatepickerOptions.max) {
              $datepicker.attr('max', filterDatepickerOptions.max);
            }
            if (filterDatepickerOptions.step) {
              $datepicker.attr('step', filterDatepickerOptions.step);
            }
            if (filterDatepickerOptions.pattern) {
              $datepicker.attr('pattern', filterDatepickerOptions.pattern);
            }
            $datepicker.on('change', function (_ref9) {
              var currentTarget = _ref9.currentTarget;
              clearTimeout(currentTarget.timeoutId || 0);
              currentTarget.timeoutId = setTimeout(function () {
                that.onColumnSearch({
                  currentTarget: currentTarget
                });
              }, that.options.searchTimeOut);
            });
          }
        });
      }
      if (that.options.sidePagination !== 'server') {
        that.triggerSearch();
      }
      if (!that.options.filterControlVisible) {
        header.find('.filter-control, .no-filter-control').hide();
      }
    } else {
      header.find('.filter-control, .no-filter-control').hide();
    }
    that.trigger('created-controls');
  }
  function getDirectionOfSelectOptions(_alignment) {
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
  function syncHeaders(that) {
    if (!that.options.height) {
      return;
    }
    var fixedHeader = that.$tableContainer.find('.fixed-table-header table thead');
    if (fixedHeader.length === 0) {
      return;
    }
    that.$header.children().find('th[data-field]').each(function (_, element) {
      if (element.classList[0] !== 'bs-checkbox') {
        var $element = $$k(element);
        var $field = $element.data('field');
        var $fixedField = that.$tableContainer.find("th[data-field='".concat($field, "']")).not($element);
        var input = $element.find('input');
        var fixedInput = $fixedField.find('input');
        if (input.length > 0 && fixedInput.length > 0) {
          if (input.val() !== fixedInput.val()) {
            input.val(fixedInput.val());
          }
        }
      }
    });
  }
  var filterDataMethods = {
    func: function func(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var variableValues = window[filterDataSource].apply();

      // eslint-disable-next-line guard-for-in
      for (var key in variableValues) {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected);
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    },
    obj: function obj(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var objectKeys = filterDataSource.split('.');
      var variableName = objectKeys.shift();
      var variableValues = window[variableName];
      if (objectKeys.length > 0) {
        objectKeys.forEach(function (key) {
          variableValues = variableValues[key];
        });
      }

      // eslint-disable-next-line guard-for-in
      for (var key in variableValues) {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected);
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    },
    var: function _var(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var variableValues = window[filterDataSource];
      var isArray = Array.isArray(variableValues);
      for (var key in variableValues) {
        if (isArray) {
          addOptionToSelectControl(selectControl, variableValues[key], variableValues[key], selected, true);
        } else {
          addOptionToSelectControl(selectControl, key, variableValues[key], selected, true);
        }
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    },
    url: function url(that, filterDataSource, selectControl, filterOrderBy, selected) {
      $$k.ajax({
        url: filterDataSource,
        dataType: 'json',
        success: function success(data) {
          // eslint-disable-next-line guard-for-in
          for (var key in data) {
            addOptionToSelectControl(selectControl, key, data[key], selected);
          }
          if (that.options.sortSelectOptions) {
            sortSelectControl(selectControl, filterOrderBy, that.options);
          }
          setValues(that);
        }
      });
    },
    json: function json(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var variableValues = JSON.parse(filterDataSource);

      // eslint-disable-next-line guard-for-in
      for (var key in variableValues) {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected);
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    }
  };

  var Utils = $$k.fn.bootstrapTable.utils;
  Object.assign($$k.fn.bootstrapTable.defaults, {
    filterControl: false,
    filterControlVisible: true,
    filterControlMultipleSearch: false,
    filterControlMultipleSearchDelimiter: ',',
    // eslint-disable-next-line no-unused-vars
    onColumnSearch: function onColumnSearch(field, text) {
      return false;
    },
    onCreatedControls: function onCreatedControls() {
      return false;
    },
    alignmentSelectControlOptions: undefined,
    filterTemplate: {
      input: function input(that, column, placeholder, value) {
        return Utils.sprintf('<input type="search" class="%s bootstrap-table-filter-control-%s search-input" style="width: 100%;" placeholder="%s" value="%s">', getInputClass(that), column.field, 'undefined' === typeof placeholder ? '' : placeholder, 'undefined' === typeof value ? '' : value);
      },
      select: function select(that, column) {
        return Utils.sprintf('<select class="%s bootstrap-table-filter-control-%s %s" %s style="width: 100%;" dir="%s"></select>', getInputClass(that, true), column.field, '', '', getDirectionOfSelectOptions(that.options.alignmentSelectControlOptions));
      },
      datepicker: function datepicker(that, column, value) {
        return Utils.sprintf('<input type="date" class="%s date-filter-control bootstrap-table-filter-control-%s" style="width: 100%;" value="%s">', getInputClass(that), column.field, 'undefined' === typeof value ? '' : value);
      }
    },
    searchOnEnterKey: false,
    showFilterControlSwitch: false,
    sortSelectOptions: false,
    // internal variables
    _valuesFilterControl: [],
    _initialized: false,
    _isRendering: false,
    _usingMultipleSelect: false
  });
  Object.assign($$k.fn.bootstrapTable.columnDefaults, {
    filterControl: undefined,
    // input, select, datepicker
    filterControlMultipleSelect: false,
    filterControlMultipleSelectOptions: {},
    filterDataCollector: undefined,
    filterData: undefined,
    filterDatepickerOptions: {},
    filterStrictSearch: false,
    filterStartsWithSearch: false,
    filterControlPlaceholder: '',
    filterDefault: '',
    filterOrderBy: 'asc',
    // asc || desc
    filterCustomSearch: undefined
  });
  Object.assign($$k.fn.bootstrapTable.events, {
    'column-search.bs.table': 'onColumnSearch',
    'created-controls.bs.table': 'onCreatedControls'
  });
  Object.assign($$k.fn.bootstrapTable.defaults.icons, {
    filterControlSwitchHide: {
      bootstrap3: 'glyphicon-zoom-out icon-zoom-out',
      bootstrap5: 'bi-zoom-out',
      materialize: 'zoom_out'
    }[$$k.fn.bootstrapTable.theme] || 'fa-search-minus',
    filterControlSwitchShow: {
      bootstrap3: 'glyphicon-zoom-in icon-zoom-in',
      bootstrap5: 'bi-zoom-in',
      materialize: 'zoom_in'
    }[$$k.fn.bootstrapTable.theme] || 'fa-search-plus'
  });
  Object.assign($$k.fn.bootstrapTable.locales, {
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Hide/Show controls';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Hide controls';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Show controls';
    },
    formatClearSearch: function formatClearSearch() {
      return 'Clear filters';
    }
  });
  Object.assign($$k.fn.bootstrapTable.defaults, $$k.fn.bootstrapTable.locales);
  $$k.fn.bootstrapTable.methods.push('triggerSearch');
  $$k.fn.bootstrapTable.methods.push('clearFilterControl');
  $$k.fn.bootstrapTable.methods.push('toggleFilterControl');
  $$k.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    _inherits(_class, _$$BootstrapTable);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "init",
      value: function init() {
        var _this = this;
        // Make sure that the filterControl option is set
        if (this.options.filterControl) {
          // Make sure that the internal variables are set correctly
          this._valuesFilterControl = [];
          this._initialized = false;
          this._usingMultipleSelect = false;
          this._isRendering = false;
          this.$el.on('reset-view.bs.table', Utils.debounce(function () {
            initFilterSelectControls(_this);
            setValues(_this);
          }, 3)).on('toggle.bs.table', Utils.debounce(function (_, cardView) {
            _this._initialized = false;
            if (!cardView) {
              initFilterSelectControls(_this);
              setValues(_this);
              _this._initialized = true;
            }
          }, 1)).on('post-header.bs.table', Utils.debounce(function () {
            initFilterSelectControls(_this);
            setValues(_this);
          }, 3)).on('column-switch.bs.table', Utils.debounce(function () {
            setValues(_this);
            if (_this.options.height) {
              _this.fitHeader();
            }
          }, 1)).on('post-body.bs.table', Utils.debounce(function () {
            if (_this.options.height && !_this.options.filterControlContainer && _this.options.filterControlVisible) {
              fixHeaderCSS(_this);
            }
            _this.$tableLoading.css('top', _this.$header.outerHeight() + 1);
          }, 1)).on('all.bs.table', function () {
            syncHeaders(_this);
          });
        }
        _get(_getPrototypeOf(_class.prototype), "init", this).call(this);
      }
    }, {
      key: "initBody",
      value: function initBody() {
        var _this2 = this;
        _get(_getPrototypeOf(_class.prototype), "initBody", this).call(this);
        if (!this.options.filterControl) {
          return;
        }
        setTimeout(function () {
          initFilterSelectControls(_this2);
          setValues(_this2);
        }, 3);
      }
    }, {
      key: "load",
      value: function load(data) {
        _get(_getPrototypeOf(_class.prototype), "load", this).call(this, data);
        if (!this.options.filterControl) {
          return;
        }
        createControls(this, getControlContainer(this));
        setValues(this);
      }
    }, {
      key: "initHeader",
      value: function initHeader() {
        _get(_getPrototypeOf(_class.prototype), "initHeader", this).call(this);
        if (!this.options.filterControl) {
          return;
        }
        createControls(this, getControlContainer(this));
        this._initialized = true;
      }
    }, {
      key: "initSearch",
      value: function initSearch() {
        var _this3 = this;
        var that = this;
        var filterPartial = $$k.isEmptyObject(that.filterColumnsPartial) ? null : that.filterColumnsPartial;
        _get(_getPrototypeOf(_class.prototype), "initSearch", this).call(this);
        if (this.options.sidePagination === 'server' || filterPartial === null) {
          return;
        }

        // Check partial column filter
        that.data = filterPartial ? that.data.filter(function (item, i) {
          var itemIsExpected = [];
          var keys1 = Object.keys(item);
          var keys2 = Object.keys(filterPartial);
          var keys = keys1.concat(keys2.filter(function (item) {
            return !keys1.includes(item);
          }));
          keys.forEach(function (key) {
            var thisColumn = that.columns[that.fieldsColumnsIndex[key]];
            var rawFilterValue = filterPartial[key] || '';
            var filterValue = rawFilterValue.toLowerCase();
            var value = Utils.unescapeHTML(Utils.getItemField(item, key, false));
            var tmpItemIsExpected;
            if (_this3.options.searchAccentNeutralise) {
              filterValue = Utils.normalizeAccent(filterValue);
            }
            var filterValues = [filterValue];
            if (_this3.options.filterControlMultipleSearch) {
              filterValues = filterValue.split(_this3.options.filterControlMultipleSearchDelimiter);
            }
            filterValues.forEach(function (filterValue) {
              if (tmpItemIsExpected === true) {
                return;
              }
              filterValue = filterValue.trim();
              if (filterValue === '') {
                tmpItemIsExpected = true;
              } else {
                // Fix #142: search use formatted data
                if (thisColumn) {
                  if (thisColumn.searchFormatter || thisColumn._forceFormatter) {
                    value = $$k.fn.bootstrapTable.utils.calculateObjectValue(thisColumn, that.header.formatters[$$k.inArray(key, that.header.fields)], [value, item, i], value);
                  }
                }
                if ($$k.inArray(key, that.header.fields) !== -1) {
                  if (value === undefined || value === null) {
                    tmpItemIsExpected = false;
                  } else if (_typeof(value) === 'object' && thisColumn.filterCustomSearch) {
                    itemIsExpected.push(that.isValueExpected(rawFilterValue, value, thisColumn, key));
                  } else if (_typeof(value) === 'object' && Array.isArray(value)) {
                    value.forEach(function (objectValue) {
                      if (tmpItemIsExpected) {
                        return;
                      }
                      tmpItemIsExpected = that.isValueExpected(filterValue, objectValue, thisColumn, key);
                    });
                  } else if (_typeof(value) === 'object' && !Array.isArray(value)) {
                    Object.values(value).forEach(function (objectValue) {
                      if (tmpItemIsExpected) {
                        return;
                      }
                      tmpItemIsExpected = that.isValueExpected(filterValue, objectValue, thisColumn, key);
                    });
                  } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                    tmpItemIsExpected = that.isValueExpected(filterValue, value, thisColumn, key);
                  }
                }
              }
            });
            itemIsExpected.push(tmpItemIsExpected);
          });
          return !itemIsExpected.includes(false);
        }) : that.data;
        that.unsortedData = _toConsumableArray(that.data);
      }
    }, {
      key: "isValueExpected",
      value: function isValueExpected(searchValue, value, column, key) {
        var tmpItemIsExpected;
        if (column.filterControl === 'select') {
          value = Utils.removeHTML(value.toString().toLowerCase());
        }
        if (column.filterStrictSearch || column.filterControl === 'select' && column.passed.filterStrictSearch !== false) {
          tmpItemIsExpected = value.toString().toLowerCase() === searchValue.toString().toLowerCase();
        } else if (column.filterStartsWithSearch) {
          tmpItemIsExpected = "".concat(value).toLowerCase().indexOf(searchValue) === 0;
        } else if (column.filterControl === 'datepicker') {
          tmpItemIsExpected = new Date(value).getTime() === new Date(searchValue).getTime();
        } else if (this.options.regexSearch) {
          tmpItemIsExpected = Utils.regexCompare(value, searchValue);
        } else {
          tmpItemIsExpected = "".concat(value).toLowerCase().includes(searchValue);
        }
        var largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm;
        var matches = largerSmallerEqualsRegex.exec(searchValue);
        if (matches) {
          var operator = matches[1] || "".concat(matches[5], "l");
          var comparisonValue = matches[2] || matches[3];
          var int = parseInt(value, 10);
          var comparisonInt = parseInt(comparisonValue, 10);
          switch (operator) {
            case '>':
            case '<l':
              tmpItemIsExpected = int > comparisonInt;
              break;
            case '<':
            case '>l':
              tmpItemIsExpected = int < comparisonInt;
              break;
            case '<=':
            case '=<':
            case '>=l':
            case '=>l':
              tmpItemIsExpected = int <= comparisonInt;
              break;
            case '>=':
            case '=>':
            case '<=l':
            case '=<l':
              tmpItemIsExpected = int >= comparisonInt;
              break;
          }
        }
        if (column.filterCustomSearch) {
          var customSearchResult = Utils.calculateObjectValue(column, column.filterCustomSearch, [searchValue, value, key, this.options.data], true);
          if (customSearchResult !== null) {
            tmpItemIsExpected = customSearchResult;
          }
        }
        return tmpItemIsExpected;
      }
    }, {
      key: "initColumnSearch",
      value: function initColumnSearch(filterColumnsDefaults) {
        cacheValues(this);
        if (filterColumnsDefaults) {
          this.filterColumnsPartial = filterColumnsDefaults;
          this.updatePagination();

          // eslint-disable-next-line guard-for-in
          for (var filter in filterColumnsDefaults) {
            this.trigger('column-search', filter, filterColumnsDefaults[filter]);
          }
        }
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        this.showToolbar = this.showToolbar || this.options.showFilterControlSwitch;
        this.showSearchClearButton = this.options.filterControl && this.options.showSearchClearButton;
        if (this.options.showFilterControlSwitch) {
          this.buttons = Object.assign(this.buttons, {
            filterControlSwitch: {
              text: this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow(),
              icon: this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow,
              event: this.toggleFilterControl,
              attributes: {
                'aria-label': this.options.formatFilterControlSwitch(),
                title: this.options.formatFilterControlSwitch()
              }
            }
          });
        }
        _get(_getPrototypeOf(_class.prototype), "initToolbar", this).call(this);
      }
    }, {
      key: "resetSearch",
      value: function resetSearch(text) {
        if (this.options.filterControl && this.options.showSearchClearButton) {
          this.clearFilterControl();
        }
        _get(_getPrototypeOf(_class.prototype), "resetSearch", this).call(this, text);
      }
    }, {
      key: "clearFilterControl",
      value: function clearFilterControl() {
        if (!this.options.filterControl) {
          return;
        }
        var that = this;
        var table = this.$el.closest('table');
        var cookies = collectBootstrapTableFilterCookies();
        var controls = getSearchControls(that);
        // const search = Utils.getSearchInput(this)
        var hasValues = false;
        var timeoutId = 0;

        // Clear cache values
        $$k.each(that._valuesFilterControl, function (i, item) {
          hasValues = hasValues ? true : item.value !== '';
          item.value = '';
        });

        // Clear controls in UI
        $$k.each(controls, function (i, item) {
          item.value = '';
        });

        // Cache controls again
        setValues(that);

        // clear cookies once the filters are clean
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
          if (cookies && cookies.length > 0) {
            $$k.each(cookies, function (i, item) {
              if (that.deleteCookie !== undefined) {
                that.deleteCookie(item);
              }
            });
          }
        }, that.options.searchTimeOut);

        // If there is not any value in the controls exit this method
        if (!hasValues) {
          return;
        }

        // Clear each type of filter if it exists.
        // Requires the body to reload each time a type of filter is found because we never know
        // which ones are going to be present.
        if (controls.length > 0) {
          this.filterColumnsPartial = {};
          controls.eq(0).trigger(this.tagName === 'INPUT' ? 'keyup' : 'change', {
            keyCode: 13
          });
          /* controls.each(function () {
            $(this).trigger(this.tagName === 'INPUT' ? 'keyup' : 'change', { keyCode: 13 })
          })*/
        } else {
          return;
        }

        /* if (search.length > 0) {
          that.resetSearch('fc')
        }*/

        // use the default sort order if it exists. do nothing if it does not
        if (that.options.sortName !== table.data('sortName') || that.options.sortOrder !== table.data('sortOrder')) {
          var sorter = this.$header.find(Utils.sprintf('[data-field="%s"]', $$k(controls[0]).closest('table').data('sortName')));
          if (sorter.length > 0) {
            that.onSort({
              type: 'keypress',
              currentTarget: sorter
            });
            $$k(sorter).find('.sortable').trigger('click');
          }
        }
      }

      // EVENTS
    }, {
      key: "onColumnSearch",
      value: function onColumnSearch(_ref) {
        var _this4 = this;
        var currentTarget = _ref.currentTarget,
          keyCode = _ref.keyCode;
        if (isKeyAllowed(keyCode)) {
          return;
        }
        cacheValues(this);

        // Cookie extension support
        if (!this.options.cookie) {
          this.options.pageNumber = 1;
        } else {
          // Force call the initServer method in Cookie extension
          this._filterControlValuesLoaded = true;
        }
        if ($$k.isEmptyObject(this.filterColumnsPartial)) {
          this.filterColumnsPartial = {};
        }

        // If searchOnEnterKey is set to true, then we need to iterate over all controls and grab their values.
        var controls = this.options.searchOnEnterKey ? getSearchControls(this).toArray() : [currentTarget];
        controls.forEach(function (element) {
          var $element = $$k(element);
          var elementValue = $element.val();
          var text = elementValue ? elementValue.trim() : '';
          var $field = $element.closest('[data-field]').data('field');
          _this4.trigger('column-search', $field, text);
          if (text) {
            _this4.filterColumnsPartial[$field] = text;
          } else {
            delete _this4.filterColumnsPartial[$field];
          }
        });
        this.onSearch({
          currentTarget: currentTarget
        }, false);
      }
    }, {
      key: "toggleFilterControl",
      value: function toggleFilterControl() {
        this.options.filterControlVisible = !this.options.filterControlVisible;
        // Controls in original header or container.
        var $filterControls = getControlContainer(this).find('.filter-control, .no-filter-control');
        if (this.options.filterControlVisible) {
          $filterControls.show();
        } else {
          $filterControls.hide();
          this.clearFilterControl();
        }

        // Controls in fixed header
        if (this.options.height) {
          var $fixedControls = this.$tableContainer.find('.fixed-table-header table thead').find('.filter-control, .no-filter-control');
          $fixedControls.toggle(this.options.filterControlVisible);
          fixHeaderCSS(this);
        }
        var icon = this.options.showButtonIcons ? this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow : '';
        var text = this.options.showButtonText ? this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow() : '';
        this.$toolbar.find('>.columns').find('.filter-control-switch').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(text));
      }
    }, {
      key: "triggerSearch",
      value: function triggerSearch() {
        var searchControls = getSearchControls(this);
        searchControls.each(function () {
          var $element = $$k(this);
          if ($element.is('select')) {
            $element.trigger('change');
          } else {
            $element.trigger('keyup');
          }
        });
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn(index, checked, needUpdate) {
        this._initialized = false;
        _get(_getPrototypeOf(_class.prototype), "_toggleColumn", this).call(this, index, checked, needUpdate);
        syncHeaders(this);
      }
    }]);
    return _class;
  }($$k.BootstrapTable);

}));
