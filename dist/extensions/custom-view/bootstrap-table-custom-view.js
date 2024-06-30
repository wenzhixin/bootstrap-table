(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.to-string.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.to-string.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_find_js, es_array_slice_js, es_object_assign_js, es_object_toString_js, $) { 'use strict';

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
   * @author: Dustin Utecht
   * @github: https://github.com/UtechtDustin
   */

  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults, {
    customView: false,
    showCustomView: false,
    customViewDefaultView: false
  });
  Object.assign($.fn.bootstrapTable.defaults.icons, {
    customViewOn: {
      bootstrap3: 'glyphicon glyphicon-list',
      bootstrap5: 'bi-list',
      bootstrap4: 'fa fa-list',
      semantic: 'fa fa-list',
      foundation: 'fa fa-list',
      bulma: 'fa fa-list',
      materialize: 'list'
    }[$.fn.bootstrapTable.theme] || 'fa-list',
    customViewOff: {
      bootstrap3: 'glyphicon glyphicon-thumbnails',
      bootstrap5: 'bi-grid',
      bootstrap4: 'fa fa-th',
      semantic: 'fa fa-th',
      foundation: 'fa fa-th',
      bulma: 'fa fa-th',
      materialize: 'grid_on'
    }[$.fn.bootstrapTable.theme] || 'fa-th'
  });
  Object.assign($.fn.bootstrapTable.defaults, {
    onCustomViewPostBody: function onCustomViewPostBody() {
      return false;
    },
    onCustomViewPreBody: function onCustomViewPreBody() {
      return false;
    },
    onToggleCustomView: function onToggleCustomView() {
      return false;
    }
  });
  Object.assign($.fn.bootstrapTable.locales, {
    formatToggleCustomViewOn: function formatToggleCustomViewOn() {
      return 'Show custom view';
    },
    formatToggleCustomViewOff: function formatToggleCustomViewOff() {
      return 'Hide custom view';
    }
  });
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
  $.fn.bootstrapTable.methods.push('toggleCustomView');
  Object.assign($.fn.bootstrapTable.events, {
    'custom-view-post-body.bs.table': 'onCustomViewPostBody',
    'custom-view-pre-body.bs.table': 'onCustomViewPreBody',
    'toggle-custom-view.bs.table': 'onToggleCustomView'
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
        this.customViewDefaultView = this.options.customViewDefaultView;
        _get(_getPrototypeOf(_class.prototype), "init", this).call(this);
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        var _get2;
        if (this.options.customView && this.options.showCustomView) {
          this.buttons = Object.assign(this.buttons, {
            customView: {
              text: this.options.customViewDefaultView ? this.options.formatToggleCustomViewOff() : this.options.formatToggleCustomViewOn(),
              icon: this.options.customViewDefaultView ? this.options.icons.customViewOn : this.options.icons.customViewOff,
              event: this.toggleCustomView,
              attributes: {
                'aria-label': this.options.customViewDefaultView ? this.options.formatToggleCustomViewOff() : this.options.formatToggleCustomViewOn(),
                title: this.options.customViewDefaultView ? this.options.formatToggleCustomViewOff() : this.options.formatToggleCustomViewOn()
              }
            }
          });
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "initToolbar", this)).call.apply(_get2, [this].concat(args));
      }
    }, {
      key: "initBody",
      value: function initBody() {
        _get(_getPrototypeOf(_class.prototype), "initBody", this).call(this);
        if (!this.options.customView) {
          return;
        }
        var $table = this.$el;
        var $customViewContainer = this.$container.find('.fixed-table-custom-view');
        $table.hide();
        $customViewContainer.hide();
        if (!this.options.customView || !this.customViewDefaultView) {
          $table.show();
          return;
        }
        var data = this.getData().slice(this.pageFrom - 1, this.pageTo);
        var value = Utils.calculateObjectValue(this, this.options.customView, [data], '');
        this.trigger('custom-view-pre-body', data, value);
        if ($customViewContainer.length === 1) {
          $customViewContainer.show().html(value);
        } else {
          this.$tableBody.after("<div class=\"fixed-table-custom-view\">".concat(value, "</div>"));
        }
        this.trigger('custom-view-post-body', data, value);
      }
    }, {
      key: "toggleCustomView",
      value: function toggleCustomView() {
        this.customViewDefaultView = !this.customViewDefaultView;
        var icon = this.options.showButtonIcons ? this.customViewDefaultView ? this.options.icons.customViewOn : this.options.icons.customViewOff : '';
        var text = this.options.showButtonText ? this.customViewDefaultView ? this.options.formatToggleCustomViewOff() : this.options.formatToggleCustomViewOn() : '';
        this.$toolbar.find('button[name="customView"]').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(text)).attr('aria-label', text).attr('title', text);
        this.initBody();
        this.trigger('toggle-custom-view', this.customViewDefaultView);
      }
    }]);
  }($.BootstrapTable);

}));
