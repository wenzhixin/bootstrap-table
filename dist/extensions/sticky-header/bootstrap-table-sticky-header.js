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
   * @author vincent loh <vincent.ml@gmail.com>
   * @update J Manuel Corona <jmcg92@gmail.com>
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults, {
    stickyHeader: false,
    stickyHeaderOffsetY: 0,
    stickyHeaderOffsetLeft: 0,
    stickyHeaderOffsetRight: 0
  });
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "initHeader",
      value: function initHeader() {
        var _get2,
          _this = this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "initHeader", this)).call.apply(_get2, [this].concat(args));
        if (!this.options.stickyHeader) {
          return;
        }
        this.$tableBody.find('.sticky-header-container,.sticky_anchor_begin,.sticky_anchor_end').remove();
        this.$el.before('<div class="sticky-header-container"></div>');
        this.$el.before('<div class="sticky_anchor_begin"></div>');
        this.$el.after('<div class="sticky_anchor_end"></div>');
        this.$header.addClass('sticky-header');

        // clone header just once, to be used as sticky header
        // deep clone header, using source header affects tbody>td width
        this.$stickyContainer = this.$tableBody.find('.sticky-header-container');
        this.$stickyBegin = this.$tableBody.find('.sticky_anchor_begin');
        this.$stickyEnd = this.$tableBody.find('.sticky_anchor_end');
        this.$stickyHeader = this.$header.clone(true, true);

        // render sticky on window scroll or resize
        var resizeEvent = Utils.getEventName('resize.sticky-header-table', this.$el.attr('id'));
        var scrollEvent = Utils.getEventName('scroll.sticky-header-table', this.$el.attr('id'));
        $(window).off(resizeEvent).on(resizeEvent, function () {
          return _this.renderStickyHeader();
        });
        $(window).off(scrollEvent).on(scrollEvent, function () {
          return _this.renderStickyHeader();
        });
        this.$tableBody.off('scroll').on('scroll', function () {
          return _this.matchPositionX();
        });
      }
    }, {
      key: "onColumnSearch",
      value: function onColumnSearch(_ref) {
        var currentTarget = _ref.currentTarget,
          keyCode = _ref.keyCode;
        _get(_getPrototypeOf(_class.prototype), "onColumnSearch", this).call(this, {
          currentTarget: currentTarget,
          keyCode: keyCode
        });
        if (!this.options.stickyHeader) {
          return;
        }
        this.renderStickyHeader();
      }
    }, {
      key: "resetView",
      value: function resetView() {
        var _get3,
          _this2 = this;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "resetView", this)).call.apply(_get3, [this].concat(args));
        if (!this.options.stickyHeader) {
          return;
        }
        $('.bootstrap-table.fullscreen').off('scroll').on('scroll', function () {
          return _this2.renderStickyHeader();
        });
      }
    }, {
      key: "getCaret",
      value: function getCaret() {
        var _get4;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        (_get4 = _get(_getPrototypeOf(_class.prototype), "getCaret", this)).call.apply(_get4, [this].concat(args));
        if (!this.options.stickyHeader) {
          return;
        }
        if (this.$stickyHeader) {
          var $ths = this.$stickyHeader.find('th');
          this.$header.find('th').each(function (i, th) {
            $ths.eq(i).find('.sortable').attr('class', $(th).find('.sortable').attr('class'));
          });
        }
      }
    }, {
      key: "horizontalScroll",
      value: function horizontalScroll() {
        var _this3 = this;
        _get(_getPrototypeOf(_class.prototype), "horizontalScroll", this).call(this);
        if (!this.options.stickyHeader) {
          return;
        }
        this.$tableBody.on('scroll', function () {
          return _this3.matchPositionX();
        });
      }
    }, {
      key: "renderStickyHeader",
      value: function renderStickyHeader() {
        var _this4 = this;
        var that = this;
        this.$stickyHeader = this.$header.clone(true, true);
        if (this.options.filterControl) {
          $(this.$stickyHeader).off('keyup change mouseup').on('keyup change mouse', function (e) {
            var $target = $(e.target);
            var value = $target.val();
            var field = $target.parents('th').data('field');
            var $coreTh = that.$header.find("th[data-field=\"".concat(field, "\"]"));
            if ($target.is('input')) {
              $coreTh.find('input').val(value);
            } else if ($target.is('select')) {
              var $select = $coreTh.find('select');
              $select.find('option[selected]').removeAttr('selected');
              $select.find("option[value=\"".concat(value, "\"]")).attr('selected', true);
            }
            that.triggerSearch();
          });
        }
        var top = $(window).scrollTop();
        // top anchor scroll position, minus header height
        var start = this.$stickyBegin.offset().top - this.options.stickyHeaderOffsetY;
        // bottom anchor scroll position, minus header height, minus sticky height
        var end = this.$stickyEnd.offset().top - this.options.stickyHeaderOffsetY - this.$header.height();

        // show sticky when top anchor touches header, and when bottom anchor not exceeded
        if (top > start && top <= end) {
          // ensure clone and source column widths are the same
          this.$stickyHeader.find('tr').each(function (indexRows, rows) {
            $(rows).find('th').each(function (index, el) {
              $(el).css('min-width', _this4.$header.find("tr:eq(".concat(indexRows, ")")).find("th:eq(".concat(index, ")")).css('width'));
            });
          });
          // match bootstrap table style
          this.$stickyContainer.show().addClass('fix-sticky fixed-table-container');
          // stick it in position
          var coords = this.$tableBody[0].getBoundingClientRect();
          var width = '100%';
          var stickyHeaderOffsetLeft = this.options.stickyHeaderOffsetLeft;
          var stickyHeaderOffsetRight = this.options.stickyHeaderOffsetRight;
          if (!stickyHeaderOffsetLeft) {
            stickyHeaderOffsetLeft = coords.left;
          }
          if (!stickyHeaderOffsetRight) {
            width = "".concat(coords.width, "px");
          }
          if (this.$el.closest('.bootstrap-table').hasClass('fullscreen')) {
            stickyHeaderOffsetLeft = 0;
            stickyHeaderOffsetRight = 0;
            width = '100%';
          }
          this.$stickyContainer.css('top', "".concat(this.options.stickyHeaderOffsetY, "px"));
          this.$stickyContainer.css('left', "".concat(stickyHeaderOffsetLeft, "px"));
          this.$stickyContainer.css('right', "".concat(stickyHeaderOffsetRight, "px"));
          this.$stickyContainer.css('width', "".concat(width));
          // create scrollable container for header
          this.$stickyTable = $('<table/>');
          this.$stickyTable.addClass(this.options.classes);
          // append cloned header to dom
          this.$stickyContainer.html(this.$stickyTable.append(this.$stickyHeader));
          // match clone and source header positions when left-right scroll
          this.matchPositionX();
        } else {
          this.$stickyContainer.removeClass('fix-sticky').hide();
        }
      }
    }, {
      key: "matchPositionX",
      value: function matchPositionX() {
        this.$stickyContainer.scrollLeft(this.$tableBody.scrollLeft());
      }
    }]);
  }($.BootstrapTable);

}));
