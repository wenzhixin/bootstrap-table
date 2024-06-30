(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.string.includes.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.find.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.string.includes.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, global.jQuery));
})(this, (function (es_array_find_js, es_array_includes_js, es_object_toString_js, es_string_includes_js, $) { 'use strict';

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
   * @author zhixin wen <wenzhixin2010@gmail.com>
   * https://github.com/wenzhixin/bootstrap-table/
   * theme: https://github.com/jgthms/bulma/
   */

  var Utils = $.fn.bootstrapTable.utils;
  Utils.extend($.fn.bootstrapTable.defaults, {
    classes: 'table is-bordered is-hoverable',
    buttonsPrefix: '',
    buttonsClass: 'button'
  });
  $.fn.bootstrapTable.theme = 'bulma';
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "initConstants",
      value: function initConstants() {
        _get(_getPrototypeOf(_class.prototype), "initConstants", this).call(this);
        this.constants.classes.buttonsGroup = 'buttons has-addons';
        this.constants.classes.buttonsDropdown = 'button dropdown is-right';
        this.constants.classes.input = 'input';
        this.constants.classes.paginationDropdown = 'ui dropdown';
        this.constants.classes.dropup = 'is-up';
        this.constants.classes.dropdownActive = 'is-active';
        this.constants.classes.paginationActive = 'is-current';
        this.constants.classes.buttonActive = 'is-active';
        this.constants.html.toolbarDropdown = ['<div class="dropdown-menu"><div class="dropdown-content">', '</div></div>'];
        this.constants.html.toolbarDropdownItem = '<label class="dropdown-item dropdown-item-marker">%s</label>';
        this.constants.html.toolbarDropdownSeparator = '<li class="dropdown-divider"></li>';
        this.constants.html.pageDropdown = ['<div class="dropdown-menu"><div class="dropdown-content">', '</div></div>'];
        this.constants.html.pageDropdownItem = '<a class="dropdown-item %s" href="#">%s</a>';
        this.constants.html.dropdownCaret = '<span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"></i></span>';
        this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>'];
        this.constants.html.paginationItem = '<li><a class="page-item pagination-link%s" aria-label="%s" href="#">%s</a></li>';
        this.constants.html.searchInput = '<p class="control"><input class="%s input-%s" type="search" placeholder="%s"></p>';
        this.constants.html.inputGroup = '<div class="field has-addons has-addons-right">%s%s</div>';
        this.constants.html.searchButton = '<p class="control"><button class="%s" type="button" name="search" title="%s">%s %s</button></p>';
        this.constants.html.searchClearButton = '<p class="control"><button class="%s" type="button" name="clearSearch" title="%s">%s %s</button></p>';
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        _get(_getPrototypeOf(_class.prototype), "initToolbar", this).call(this);
        this.handleToolbar();
      }
    }, {
      key: "handleToolbar",
      value: function handleToolbar() {
        if (this.$toolbar.find('.dropdown').length) {
          this._initDropdown();
        }
      }
    }, {
      key: "initPagination",
      value: function initPagination() {
        _get(_getPrototypeOf(_class.prototype), "initPagination", this).call(this);
        if (this.options.pagination && this.paginationParts.includes('pageSize')) {
          this._initDropdown();
        }
      }
    }, {
      key: "_initDropdown",
      value: function _initDropdown() {
        var $dropdowns = this.$container.find('.dropdown:not(.is-hoverable)');
        $dropdowns.off('click').on('click', function (e) {
          var $this = $(e.currentTarget);
          e.stopPropagation();
          $dropdowns.not($this).removeClass('is-active');
          $this.toggleClass('is-active');
        });
        $(document).off('click.bs.dropdown.bulma').on('click.bs.dropdown.bulma', function () {
          $dropdowns.removeClass('is-active');
        });
      }
    }]);
  }($.BootstrapTable);

}));
