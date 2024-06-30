(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.to-string.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.to-string.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_find_js, es_object_assign_js, es_object_toString_js, $) { 'use strict';

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

  /**
   * @author: Alec Fenichel
   * @webSite: https://fenichelar.com
   * @update: zhixin wen <wenzhixin2010@gmail.com>
   */

  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults, {
    autoRefresh: false,
    showAutoRefresh: true,
    autoRefreshInterval: 60,
    autoRefreshSilent: true,
    autoRefreshStatus: true,
    autoRefreshFunction: null
  });
  Object.assign($.fn.bootstrapTable.defaults.icons, {
    autoRefresh: {
      bootstrap3: 'glyphicon-time icon-time',
      bootstrap5: 'bi-clock',
      materialize: 'access_time',
      'bootstrap-table': 'icon-clock'
    }[$.fn.bootstrapTable.theme] || 'fa-clock'
  });
  Object.assign($.fn.bootstrapTable.locales, {
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    }
  });
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
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
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get2, [this].concat(args));
        if (this.options.autoRefresh && this.options.autoRefreshStatus) {
          this.setupRefreshInterval();
        }
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        var _get3;
        if (this.options.autoRefresh) {
          this.buttons = Object.assign(this.buttons, {
            autoRefresh: {
              html: "\n            <button class=\"auto-refresh ".concat(this.constants.buttonsClass, "\n              ").concat(this.options.autoRefreshStatus ? " ".concat(this.constants.classes.buttonActive) : '', "\"\n              type=\"button\" name=\"autoRefresh\" title=\"").concat(this.options.formatAutoRefresh(), "\">\n              ").concat(this.options.showButtonIcons ? Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.autoRefresh) : '', "\n              ").concat(this.options.showButtonText ? this.options.formatAutoRefresh() : '', "\n            </button>\n          "),
              event: this.toggleAutoRefresh
            }
          });
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "initToolbar", this)).call.apply(_get3, [this].concat(args));
      }
    }, {
      key: "toggleAutoRefresh",
      value: function toggleAutoRefresh() {
        if (this.options.autoRefresh) {
          if (this.options.autoRefreshStatus) {
            clearInterval(this.options.autoRefreshFunction);
            this.$toolbar.find('>.columns .auto-refresh').removeClass(this.constants.classes.buttonActive);
          } else {
            this.setupRefreshInterval();
            this.$toolbar.find('>.columns .auto-refresh').addClass(this.constants.classes.buttonActive);
          }
          this.options.autoRefreshStatus = !this.options.autoRefreshStatus;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.options.autoRefresh && this.options.autoRefreshStatus) {
          clearInterval(this.options.autoRefreshFunction);
        }
        _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);
      }
    }, {
      key: "setupRefreshInterval",
      value: function setupRefreshInterval() {
        var _this = this;
        this.options.autoRefreshFunction = setInterval(function () {
          if (!_this.options.autoRefresh || !_this.options.autoRefreshStatus) {
            return;
          }
          _this.refresh({
            silent: _this.options.autoRefreshSilent
          });
        }, this.options.autoRefreshInterval * 1000);
      }
    }]);
  }($.BootstrapTable);

}));
