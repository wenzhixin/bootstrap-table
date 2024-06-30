(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.array.reverse.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.parse-int.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.array.reverse.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.parse-int.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_find_js, es_array_indexOf_js, es_array_reverse_js, es_object_assign_js, es_object_toString_js, es_parseInt_js, $) { 'use strict';

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
   */

  var Utils = $.fn.bootstrapTable.utils;

  // Reasonable defaults
  var PIXEL_STEP = 10;
  var LINE_HEIGHT = 40;
  var PAGE_HEIGHT = 800;
  function normalizeWheel(event) {
    var sX = 0; // spinX
    var sY = 0; // spinY
    var pX = 0; // pixelX
    var pY = 0; // pixelY

    // Legacy
    if ('detail' in event) {
      sY = event.detail;
    }
    if ('wheelDelta' in event) {
      sY = -event.wheelDelta / 120;
    }
    if ('wheelDeltaY' in event) {
      sY = -event.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in event) {
      sX = -event.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in event) {
      pY = event.deltaY;
    }
    if ('deltaX' in event) {
      pX = event.deltaX;
    }
    if ((pX || pY) && event.deltaMode) {
      if (event.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  Object.assign($.fn.bootstrapTable.defaults, {
    fixedColumns: false,
    fixedNumber: 0,
    fixedRightNumber: 0
  });
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "fixedColumnsSupported",
      value: function fixedColumnsSupported() {
        return this.options.fixedColumns && !this.options.detailView && !this.options.cardView;
      }
    }, {
      key: "initContainer",
      value: function initContainer() {
        _get(_getPrototypeOf(_class.prototype), "initContainer", this).call(this);
        if (!this.fixedColumnsSupported()) {
          return;
        }
        if (this.options.fixedNumber) {
          this.$tableContainer.append('<div class="fixed-columns"></div>');
          this.$fixedColumns = this.$tableContainer.find('.fixed-columns');
        }
        if (this.options.fixedRightNumber) {
          this.$tableContainer.append('<div class="fixed-columns-right"></div>');
          this.$fixedColumnsRight = this.$tableContainer.find('.fixed-columns-right');
        }
      }
    }, {
      key: "initBody",
      value: function initBody() {
        var _get2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "initBody", this)).call.apply(_get2, [this].concat(args));
        if (this.$fixedColumns && this.$fixedColumns.length) {
          this.$fixedColumns.toggle(this.fixedColumnsSupported());
        }
        if (this.$fixedColumnsRight && this.$fixedColumnsRight.length) {
          this.$fixedColumnsRight.toggle(this.fixedColumnsSupported());
        }
        if (!this.fixedColumnsSupported()) {
          return;
        }
        if (this.options.showHeader && this.options.height) {
          return;
        }
        this.initFixedColumnsBody();
        this.initFixedColumnsEvents();
      }
    }, {
      key: "trigger",
      value: function trigger() {
        var _get3;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "trigger", this)).call.apply(_get3, [this].concat(args));
        if (!this.fixedColumnsSupported()) {
          return;
        }
        if (args[0] === 'post-header') {
          this.initFixedColumnsHeader();
        } else if (args[0] === 'scroll-body') {
          if (this.needFixedColumns && this.options.fixedNumber) {
            this.$fixedBody.scrollTop(this.$tableBody.scrollTop());
          }
          if (this.needFixedColumns && this.options.fixedRightNumber) {
            this.$fixedBodyRight.scrollTop(this.$tableBody.scrollTop());
          }
        }
      }
    }, {
      key: "updateSelected",
      value: function updateSelected() {
        var _this = this;
        _get(_getPrototypeOf(_class.prototype), "updateSelected", this).call(this);
        if (!this.fixedColumnsSupported()) {
          return;
        }
        this.$tableBody.find('tr').each(function (i, el) {
          var $el = $(el);
          var index = $el.data('index');
          var classes = $el.attr('class');
          var inputSelector = "[name=\"".concat(_this.options.selectItemName, "\"]");
          var $input = $el.find(inputSelector);
          if (typeof index === 'undefined') {
            return;
          }
          var updateFixedBody = function updateFixedBody($fixedHeader, $fixedBody) {
            var $tr = $fixedBody.find("tr[data-index=\"".concat(index, "\"]"));
            $tr.attr('class', classes);
            if ($input.length) {
              $tr.find(inputSelector).prop('checked', $input.prop('checked'));
            }
            if (_this.$selectAll.length) {
              $fixedHeader.add($fixedBody).find('[name="btSelectAll"]').prop('checked', _this.$selectAll.prop('checked'));
            }
          };
          if (_this.$fixedBody && _this.options.fixedNumber) {
            updateFixedBody(_this.$fixedHeader, _this.$fixedBody);
          }
          if (_this.$fixedBodyRight && _this.options.fixedRightNumber) {
            updateFixedBody(_this.$fixedHeaderRight, _this.$fixedBodyRight);
          }
        });
      }
    }, {
      key: "hideLoading",
      value: function hideLoading() {
        _get(_getPrototypeOf(_class.prototype), "hideLoading", this).call(this);
        if (this.needFixedColumns && this.options.fixedNumber) {
          this.$fixedColumns.find('.fixed-table-loading').hide();
        }
        if (this.needFixedColumns && this.options.fixedRightNumber) {
          this.$fixedColumnsRight.find('.fixed-table-loading').hide();
        }
      }
    }, {
      key: "initFixedColumnsHeader",
      value: function initFixedColumnsHeader() {
        var _this2 = this;
        if (this.options.height) {
          this.needFixedColumns = this.$tableHeader.outerWidth(true) < this.$tableHeader.find('table').outerWidth(true);
        } else {
          this.needFixedColumns = this.$tableBody.outerWidth(true) < this.$tableBody.find('table').outerWidth(true);
        }
        var initFixedHeader = function initFixedHeader($fixedColumns, isRight) {
          $fixedColumns.find('.fixed-table-header').remove();
          $fixedColumns.append(_this2.$tableHeader.clone(true));
          $fixedColumns.css({
            width: _this2.getFixedColumnsWidth(isRight)
          });
          return $fixedColumns.find('.fixed-table-header');
        };
        if (this.needFixedColumns && this.options.fixedNumber) {
          this.$fixedHeader = initFixedHeader(this.$fixedColumns);
          this.$fixedHeader.css('margin-right', '');
        } else if (this.$fixedColumns) {
          this.$fixedColumns.html('').css('width', '');
        }
        if (this.needFixedColumns && this.options.fixedRightNumber) {
          this.$fixedHeaderRight = initFixedHeader(this.$fixedColumnsRight, true);
          this.$fixedHeaderRight.scrollLeft(this.$fixedHeaderRight.find('table').width());
        } else if (this.$fixedColumnsRight) {
          this.$fixedColumnsRight.html('').css('width', '');
        }
        this.initFixedColumnsBody();
        this.initFixedColumnsEvents();
      }
    }, {
      key: "initFixedColumnsBody",
      value: function initFixedColumnsBody() {
        var _this3 = this;
        var initFixedBody = function initFixedBody($fixedColumns, $fixedHeader) {
          $fixedColumns.find('.fixed-table-body').remove();
          $fixedColumns.append(_this3.$tableBody.clone(true));
          $fixedColumns.find('.fixed-table-body table').removeAttr('id');
          var $fixedBody = $fixedColumns.find('.fixed-table-body');
          var tableBody = _this3.$tableBody.get(0);
          var scrollHeight = tableBody.scrollWidth > tableBody.clientWidth ? Utils.getScrollBarWidth() : 0;
          var height = _this3.$tableContainer.outerHeight(true) - scrollHeight - 1;
          $fixedColumns.css({
            height: height
          });
          $fixedBody.css({
            height: height - $fixedHeader.height()
          });
          return $fixedBody;
        };
        if (this.needFixedColumns && this.options.fixedNumber) {
          this.$fixedBody = initFixedBody(this.$fixedColumns, this.$fixedHeader);
        }
        if (this.needFixedColumns && this.options.fixedRightNumber) {
          this.$fixedBodyRight = initFixedBody(this.$fixedColumnsRight, this.$fixedHeaderRight);
          this.$fixedBodyRight.scrollLeft(this.$fixedBodyRight.find('table').width());
          this.$fixedBodyRight.css('overflow-y', this.options.height ? 'auto' : 'hidden');
        }
      }
    }, {
      key: "getFixedColumnsWidth",
      value: function getFixedColumnsWidth(isRight) {
        var visibleFields = this.getVisibleFields();
        var width = 0;
        var fixedNumber = this.options.fixedNumber;
        var marginRight = 0;
        if (isRight) {
          visibleFields = visibleFields.reverse();
          fixedNumber = this.options.fixedRightNumber;
          marginRight = parseInt(this.$tableHeader.css('margin-right'), 10);
        }
        for (var i = 0; i < fixedNumber; i++) {
          width += this.$header.find("th[data-field=\"".concat(visibleFields[i], "\"]")).outerWidth(true);
        }
        return width + marginRight + 1;
      }
    }, {
      key: "initFixedColumnsEvents",
      value: function initFixedColumnsEvents() {
        var _this4 = this;
        var toggleHover = function toggleHover(e, toggle) {
          var tr = "tr[data-index=\"".concat($(e.currentTarget).data('index'), "\"]");
          var $trs = _this4.$tableBody.find(tr);
          if (_this4.$fixedBody) {
            $trs = $trs.add(_this4.$fixedBody.find(tr));
          }
          if (_this4.$fixedBodyRight) {
            $trs = $trs.add(_this4.$fixedBodyRight.find(tr));
          }
          $trs.css('background-color', toggle ? $(e.currentTarget).css('background-color') : '');
        };
        this.$tableBody.find('tr').hover(function (e) {
          toggleHover(e, true);
        }, function (e) {
          toggleHover(e, false);
        });
        var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        var mousewheel = isFirefox ? 'DOMMouseScroll' : 'mousewheel';
        var updateScroll = function updateScroll(e, fixedBody) {
          var normalized = normalizeWheel(e);
          var deltaY = Math.ceil(normalized.pixelY);
          var top = _this4.$tableBody.scrollTop() + deltaY;
          if (deltaY < 0 && top > 0 || deltaY > 0 && top < fixedBody.scrollHeight - fixedBody.clientHeight) {
            e.preventDefault();
          }
          _this4.$tableBody.scrollTop(top);
          if (_this4.$fixedBody) {
            _this4.$fixedBody.scrollTop(top);
          }
          if (_this4.$fixedBodyRight) {
            _this4.$fixedBodyRight.scrollTop(top);
          }
        };
        if (this.needFixedColumns && this.options.fixedNumber) {
          this.$fixedBody.find('tr').hover(function (e) {
            toggleHover(e, true);
          }, function (e) {
            toggleHover(e, false);
          });
          this.$fixedBody[0].addEventListener(mousewheel, function (e) {
            updateScroll(e, _this4.$fixedBody[0]);
          });
        }
        if (this.needFixedColumns && this.options.fixedRightNumber) {
          this.$fixedBodyRight.find('tr').hover(function (e) {
            toggleHover(e, true);
          }, function (e) {
            toggleHover(e, false);
          });
          this.$fixedBodyRight.off('scroll').on('scroll', function () {
            var top = _this4.$fixedBodyRight.scrollTop();
            _this4.$tableBody.scrollTop(top);
            if (_this4.$fixedBody) {
              _this4.$fixedBody.scrollTop(top);
            }
          });
        }
        if (this.options.filterControl) {
          $(this.$fixedColumns).off('keyup change').on('keyup change', function (e) {
            var $target = $(e.target);
            var value = $target.val();
            var field = $target.parents('th').data('field');
            var $coreTh = _this4.$header.find("th[data-field=\"".concat(field, "\"]"));
            if ($target.is('input')) {
              $coreTh.find('input').val(value);
            } else if ($target.is('select')) {
              var $select = $coreTh.find('select');
              $select.find('option[selected]').removeAttr('selected');
              $select.find("option[value=\"".concat(value, "\"]")).attr('selected', true);
            }
            _this4.triggerSearch();
          });
        }
      }
    }, {
      key: "renderStickyHeader",
      value: function renderStickyHeader() {
        if (!this.options.stickyHeader) {
          return;
        }
        this.$stickyContainer = this.$container.find('.sticky-header-container');
        _get(_getPrototypeOf(_class.prototype), "renderStickyHeader", this).call(this);
        if (this.needFixedColumns && this.options.fixedNumber) {
          this.$fixedColumns.css('z-index', 101).find('.sticky-header-container').css('right', '').width(this.$fixedColumns.outerWidth());
        }
        if (this.needFixedColumns && this.options.fixedRightNumber) {
          var $stickyHeaderContainerRight = this.$fixedColumnsRight.find('.sticky-header-container');
          this.$fixedColumnsRight.css('z-index', 101);
          $stickyHeaderContainerRight.css('left', '').scrollLeft($stickyHeaderContainerRight.find('.table').outerWidth()).width(this.$fixedColumnsRight.outerWidth());
        }
      }
    }, {
      key: "matchPositionX",
      value: function matchPositionX() {
        if (!this.options.stickyHeader) {
          return;
        }
        this.$stickyContainer.eq(0).scrollLeft(this.$tableBody.scrollLeft());
      }
    }]);
  }($.BootstrapTable);

}));
