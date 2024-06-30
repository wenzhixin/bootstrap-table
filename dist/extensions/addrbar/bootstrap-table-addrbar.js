(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.iterator.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.entries.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.string.iterator.js'), require('core-js/modules/es.string.search.js'), require('core-js/modules/web.dom-collections.iterator.js'), require('core-js/modules/web.url-search-params.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.iterator.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.entries.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.string.iterator.js', 'core-js/modules/es.string.search.js', 'core-js/modules/web.dom-collections.iterator.js', 'core-js/modules/web.url-search-params.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_iterator_js, es_object_assign_js, es_object_entries_js, es_object_toString_js, es_regexp_exec_js, es_regexp_toString_js, es_string_iterator_js, es_string_search_js, web_domCollections_iterator_js, web_urlSearchParams_js, $) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = _superPropBase(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
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
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
    return t;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r );
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  /**
   * @author: general
   * @website: note.generals.space
   * @email: generals.space@gmail.com
   * @github: https://github.com/generals-space/bootstrap-table-addrbar
   * @update: zhixin wen <wenzhixin2010@gmail.com>
   */

  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults, {
    addrbar: false,
    addrPrefix: '',
    addrCustomParams: {}
  });
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "init",
      value: function init() {
        var _get2;
        if (this.options.pagination && this.options.addrbar) {
          this.initAddrbar();
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get2, [this].concat(args));
      }

      /*
       * Priority order:
       * The value specified by the user has the highest priority.
       * If it is not specified, it will be obtained from the address bar.
       * If it is not obtained, the default value will be used.
       */
    }, {
      key: "getDefaultOptionValue",
      value: function getDefaultOptionValue(optionName, prefixName) {
        if (this.options[optionName] !== $.BootstrapTable.DEFAULTS[optionName]) {
          return this.options[optionName];
        }
        return this.searchParams.get("".concat(this.options.addrPrefix || '').concat(prefixName)) || $.BootstrapTable.DEFAULTS[optionName];
      }
    }, {
      key: "initAddrbar",
      value: function initAddrbar() {
        var _this = this;
        // 标志位, 初始加载后关闭
        this.addrbarInit = true;
        this.searchParams = new URLSearchParams(window.location.search.substring(1));
        this.options.pageNumber = +this.getDefaultOptionValue('pageNumber', 'page');
        this.options.pageSize = +this.getDefaultOptionValue('pageSize', 'size');
        this.options.sortOrder = this.getDefaultOptionValue('sortOrder', 'order');
        this.options.sortName = this.getDefaultOptionValue('sortName', 'sort');
        this.options.searchText = this.getDefaultOptionValue('searchText', 'search');
        var prefix = this.options.addrPrefix || '';
        var onLoadSuccess = this.options.onLoadSuccess;
        var onPageChange = this.options.onPageChange;
        this.options.onLoadSuccess = function (data) {
          if (_this.addrbarInit) {
            _this.addrbarInit = false;
          } else {
            _this.updateHistoryState(prefix);
          }
          if (onLoadSuccess) {
            onLoadSuccess.call(_this, data);
          }
        };
        this.options.onPageChange = function (number, size) {
          _this.updateHistoryState(prefix);
          if (onPageChange) {
            onPageChange.call(_this, number, size);
          }
        };
      }
    }, {
      key: "updateHistoryState",
      value: function updateHistoryState(prefix) {
        var params = {};
        params["".concat(prefix, "page")] = this.options.pageNumber;
        params["".concat(prefix, "size")] = this.options.pageSize;
        params["".concat(prefix, "order")] = this.options.sortOrder;
        params["".concat(prefix, "sort")] = this.options.sortName;
        params["".concat(prefix, "search")] = this.options.searchText;
        for (var _i = 0, _Object$entries = Object.entries(params); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (value === undefined) {
            this.searchParams.delete(key);
          } else {
            this.searchParams.set(key, value);
          }
        }
        var customParams = Utils.calculateObjectValue(this.options, this.options.addrCustomParams, [], {});
        for (var _i2 = 0, _Object$entries2 = Object.entries(customParams); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key2 = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];
          this.searchParams.set(_key2, _value);
        }
        var url = "?".concat(this.searchParams.toString());
        if (location.hash) {
          url += location.hash;
        }
        window.history.pushState({}, '', url);
      }
    }, {
      key: "resetSearch",
      value: function resetSearch(text) {
        _get(_getPrototypeOf(_class.prototype), "resetSearch", this).call(this, text);
        this.options.searchText = text || '';
      }
    }]);
  }($.BootstrapTable);

}));
