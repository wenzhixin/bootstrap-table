(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.string.includes.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.string.includes.js', 'core-js/modules/web.dom-collections.for-each.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_includes_js, es_object_assign_js, es_object_toString_js, es_string_includes_js, web_domCollections_forEach_js, $) { 'use strict';

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
   * @author: Dennis Hernández
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  var debounce = function debounce(func, wait) {
    var timeout = 0;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var later = function later() {
        timeout = 0;
        func.apply(void 0, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  Object.assign($.fn.bootstrapTable.defaults, {
    mobileResponsive: false,
    minWidth: 562,
    minHeight: undefined,
    heightThreshold: 100,
    // just slightly larger than mobile chrome's auto-hiding toolbar
    checkOnInit: true,
    columnsHidden: []
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
        var _get2,
          _this = this;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get2, [this].concat(args));
        if (!this.options.mobileResponsive || !this.options.minWidth) {
          return;
        }
        if (this.options.minWidth < 100 && this.options.resizable) {
          console.warn('The minWidth when the resizable extension is active should be greater or equal than 100');
          this.options.minWidth = 100;
        }
        var old = {
          width: $(window).width(),
          height: $(window).height()
        };
        $(window).on('resize orientationchange', debounce(function () {
          // reset view if height has only changed by at least the threshold.
          var width = $(window).width();
          var height = $(window).height();
          var $activeElement = $(document.activeElement);
          if ($activeElement.length && ['INPUT', 'SELECT', 'TEXTAREA'].includes($activeElement.prop('nodeName'))) {
            return;
          }
          if (Math.abs(old.height - height) > _this.options.heightThreshold || old.width !== width) {
            _this.changeView(width, height);
            old = {
              width: width,
              height: height
            };
          }
        }, 200));
        if (this.options.checkOnInit) {
          var width = $(window).width();
          var height = $(window).height();
          this.changeView(width, height);
          old = {
            width: width,
            height: height
          };
        }
      }
    }, {
      key: "conditionCardView",
      value: function conditionCardView() {
        this.changeTableView(false);
        this.showHideColumns(false);
      }
    }, {
      key: "conditionFullView",
      value: function conditionFullView() {
        this.changeTableView(true);
        this.showHideColumns(true);
      }
    }, {
      key: "changeTableView",
      value: function changeTableView(cardViewState) {
        this.options.cardView = cardViewState;
        this.toggleView();
      }
    }, {
      key: "showHideColumns",
      value: function showHideColumns(checked) {
        var _this2 = this;
        if (this.options.columnsHidden.length > 0) {
          this.columns.forEach(function (column) {
            if (_this2.options.columnsHidden.includes(column.field)) {
              if (column.visible !== checked) {
                _this2._toggleColumn(_this2.fieldsColumnsIndex[column.field], checked, true);
              }
            }
          });
        }
      }
    }, {
      key: "changeView",
      value: function changeView(width, height) {
        if (this.options.minHeight) {
          if (width <= this.options.minWidth && height <= this.options.minHeight) {
            this.conditionCardView();
          } else if (width > this.options.minWidth && height > this.options.minHeight) {
            this.conditionFullView();
          }
        } else if (width <= this.options.minWidth) {
          this.conditionCardView();
        } else if (width > this.options.minWidth) {
          this.conditionFullView();
        }
        this.resetView();
      }
    }]);
  }($.BootstrapTable);

}));
