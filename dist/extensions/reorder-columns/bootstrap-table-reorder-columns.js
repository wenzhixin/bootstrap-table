(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.entries.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.parse-int.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.entries.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.parse-int.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_filter_js, es_array_find_js, es_object_assign_js, es_object_entries_js, es_object_toString_js, es_parseInt_js, $) { 'use strict';

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
   * @author: Dennis Hernández
   * @update: https://github.com/wenzhixin
   * @version: v1.2.0
   */

  $.akottr.dragtable.prototype._restoreState = function (persistObj) {
    var i = 0;
    for (var _i = 0, _Object$entries = Object.entries(persistObj); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        field = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      var $th = this.originalTable.el.find("th[data-field=\"".concat(field, "\"]"));
      if (!$th.length) {
        i++;
        continue;
      }
      this.originalTable.startIndex = $th.prevAll().length + 1;
      this.originalTable.endIndex = parseInt(value, 10) + 1 - i;
      this._bubbleCols();
    }
  };

  // From MDN site, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  var filterFn = function filterFn() {
    if (!Array.prototype.filter) {
      Array.prototype.filter = function (fun /* , thisArg*/) {
        if (this === undefined || this === null) {
          throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== 'function') {
          throw new TypeError();
        }
        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : undefined;
        for (var i = 0; i < len; i++) {
          if (i in t) {
            var val = t[i];

            // NOTE: Technically this should Object.defineProperty at
            //       the next index, as push can be affected by
            //       properties on Object.prototype and Array.prototype.
            //       But this method's new, and collisions should be
            //       rare, so use the more-compatible alternative.
            if (fun.call(thisArg, val, i, t)) {
              res.push(val);
            }
          }
        }
        return res;
      };
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, {
    reorderableColumns: false,
    maxMovingRows: 10,
    // eslint-disable-next-line no-unused-vars
    onReorderColumn: function onReorderColumn(headerFields) {
      return false;
    },
    dragaccept: null
  });
  Object.assign($.fn.bootstrapTable.events, {
    'reorder-column.bs.table': 'onReorderColumn'
  });
  $.fn.bootstrapTable.methods.push('orderColumns');
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "initHeader",
      value: function initHeader() {
        var _get2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "initHeader", this)).call.apply(_get2, [this].concat(args));
        if (!this.options.reorderableColumns) {
          return;
        }
        this.makeColumnsReorderable();
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn() {
        var _get3;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "_toggleColumn", this)).call.apply(_get3, [this].concat(args));
        if (!this.options.reorderableColumns) {
          return;
        }
        this.makeColumnsReorderable();
      }
    }, {
      key: "toggleView",
      value: function toggleView() {
        var _get4;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        (_get4 = _get(_getPrototypeOf(_class.prototype), "toggleView", this)).call.apply(_get4, [this].concat(args));
        if (!this.options.reorderableColumns) {
          return;
        }
        if (this.options.cardView) {
          return;
        }
        this.makeColumnsReorderable();
      }
    }, {
      key: "resetView",
      value: function resetView() {
        var _get5;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        (_get5 = _get(_getPrototypeOf(_class.prototype), "resetView", this)).call.apply(_get5, [this].concat(args));
        if (!this.options.reorderableColumns) {
          return;
        }
        this.makeColumnsReorderable();
      }
    }, {
      key: "makeColumnsReorderable",
      value: function makeColumnsReorderable() {
        var _this = this;
        var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        try {
          $(this.$el).dragtable('destroy');
        } catch (e) {
          // do nothing
        }
        $(this.$el).dragtable({
          maxMovingRows: this.options.maxMovingRows,
          dragaccept: this.options.dragaccept,
          clickDelay: 200,
          dragHandle: '.th-inner',
          restoreState: order ? order : this.columnsSortOrder,
          beforeStop: function beforeStop(table) {
            var sortOrder = {};
            table.el.find('th').each(function (i, el) {
              sortOrder[$(el).data('field')] = i;
            });
            _this.columnsSortOrder = sortOrder;
            if (_this.options.cookie) {
              _this.persistReorderColumnsState(_this);
            }
            var ths = [];
            var formatters = [];
            var columns = [];
            var columnsHidden = [];
            var columnIndex = -1;
            var optionsColumns = [];
            _this.$header.find('th:not(.detail)').each(function (i, el) {
              ths.push($(el).data('field'));
              formatters.push($(el).data('formatter'));
            });

            // Exist columns not shown
            if (ths.length < _this.columns.length) {
              columnsHidden = _this.columns.filter(function (column) {
                return !column.visible;
              });
              for (var i = 0; i < columnsHidden.length; i++) {
                ths.push(columnsHidden[i].field);
                formatters.push(columnsHidden[i].formatter);
              }
            }
            for (var _i2 = 0; _i2 < ths.length; _i2++) {
              columnIndex = _this.fieldsColumnsIndex[ths[_i2]];
              if (columnIndex !== -1) {
                _this.fieldsColumnsIndex[ths[_i2]] = _i2;
                _this.columns[columnIndex].fieldIndex = _i2;
                columns.push(_this.columns[columnIndex]);
              }
            }
            _this.columns = columns;
            filterFn(); // Support <IE9
            $.each(_this.columns, function (i, column) {
              var found = false;
              var field = column.field;
              _this.options.columns[0].filter(function (item) {
                if (!found && item['field'] === field) {
                  optionsColumns.push(item);
                  found = true;
                  return false;
                }
                return true;
              });
            });
            _this.options.columns[0] = optionsColumns;
            _this.header.fields = ths;
            _this.header.formatters = formatters;
            _this.initHeader();
            _this.initToolbar();
            _this.initSearchText();
            _this.initBody();
            _this.resetView();
            _this.trigger('reorder-column', ths);
          }
        });
      }
    }, {
      key: "orderColumns",
      value: function orderColumns(order) {
        this.columnsSortOrder = order;
        this.makeColumnsReorderable();
      }
    }]);
  }($.BootstrapTable);

}));
