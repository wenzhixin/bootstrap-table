(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.array.splice.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.array.splice.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_indexOf_js, es_array_splice_js, es_object_assign_js, $) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
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
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  var rowAttr = function rowAttr(row, index) {
    return {
      id: "customId_".concat(index)
    };
  };
  Object.assign($.fn.bootstrapTable.defaults, {
    reorderableRows: false,
    onDragStyle: null,
    onDropStyle: null,
    onDragClass: 'reorder-rows-on-drag-class',
    dragHandle: '>tbody>tr>td:not(.bs-checkbox)',
    useRowAttrFunc: false,
    // eslint-disable-next-line no-unused-vars
    onReorderRowsDrag: function onReorderRowsDrag(row) {
      return false;
    },
    // eslint-disable-next-line no-unused-vars
    onReorderRowsDrop: function onReorderRowsDrop(row) {
      return false;
    },
    // eslint-disable-next-line no-unused-vars
    onReorderRow: function onReorderRow(newData) {
      return false;
    },
    onDragStop: function onDragStop() {},
    onAllowDrop: function onAllowDrop() {
      return true;
    }
  });
  Object.assign($.fn.bootstrapTable.events, {
    'reorder-row.bs.table': 'onReorderRow'
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
        var _this = this,
          _get3;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (!this.options.reorderableRows) {
          var _get2;
          (_get2 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get2, [this].concat(args));
          return;
        }
        if (this.options.useRowAttrFunc) {
          this.options.rowAttributes = rowAttr;
        }
        var onPostBody = this.options.onPostBody;
        this.options.onPostBody = function () {
          setTimeout(function () {
            _this.makeRowsReorderable();
            onPostBody.call(_this.options, _this.options.data);
          }, 1);
        };
        (_get3 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get3, [this].concat(args));
      }
    }, {
      key: "makeRowsReorderable",
      value: function makeRowsReorderable() {
        var _this2 = this;
        this.$el.tableDnD({
          onDragStyle: this.options.onDragStyle,
          onDropStyle: this.options.onDropStyle,
          onDragClass: this.options.onDragClass,
          onAllowDrop: function onAllowDrop(hoveredRow, draggedRow) {
            return _this2.onAllowDrop(hoveredRow, draggedRow);
          },
          onDragStop: function onDragStop(table, draggedRow) {
            return _this2.onDragStop(table, draggedRow);
          },
          onDragStart: function onDragStart(table, droppedRow) {
            return _this2.onDropStart(table, droppedRow);
          },
          onDrop: function onDrop(table, droppedRow) {
            return _this2.onDrop(table, droppedRow);
          },
          dragHandle: this.options.dragHandle
        });
      }
    }, {
      key: "onDropStart",
      value: function onDropStart(table, draggingTd) {
        this.$draggingTd = $(draggingTd).css('cursor', 'move');
        this.draggingIndex = $(this.$draggingTd.parent()).data('index');
        // Call the user defined function
        this.options.onReorderRowsDrag(this.data[this.draggingIndex]);
      }
    }, {
      key: "onDragStop",
      value: function onDragStop(table, draggedRow) {
        var rowIndexDraggedRow = $(draggedRow).data('index');
        var draggedRowItem = this.data[rowIndexDraggedRow];
        this.options.onDragStop(table, draggedRowItem, draggedRow);
      }
    }, {
      key: "onAllowDrop",
      value: function onAllowDrop(hoveredRow, draggedRow) {
        var rowIndexDraggedRow = $(draggedRow).data('index');
        var rowIndexHoveredRow = $(hoveredRow).data('index');
        var draggedRowItem = this.data[rowIndexDraggedRow];
        var hoveredRowItem = this.data[rowIndexHoveredRow];
        return this.options.onAllowDrop(hoveredRowItem, draggedRowItem, hoveredRow, draggedRow);
      }
    }, {
      key: "onDrop",
      value: function onDrop(table) {
        this.$draggingTd.css('cursor', '');
        var pageNum = this.options.pageNumber;
        var pageSize = this.options.pageSize;
        var newData = [];
        for (var i = 0; i < table.tBodies[0].rows.length; i++) {
          var $tr = $(table.tBodies[0].rows[i]);
          newData.push(this.data[$tr.data('index')]);
          $tr.data('index', i);
        }
        var draggingRow = this.data[this.draggingIndex];
        var droppedIndex = newData.indexOf(this.data[this.draggingIndex]);
        var droppedRow = this.data[droppedIndex];
        var index = (pageNum - 1) * pageSize + this.options.data.indexOf(this.data[droppedIndex]);
        this.options.data.splice(this.options.data.indexOf(draggingRow), 1);
        this.options.data.splice(index, 0, draggingRow);
        this.initSearch();
        if (this.options.sidePagination === 'server') {
          this.data = _toConsumableArray(this.options.data);
        }

        // Call the user defined function
        this.options.onReorderRowsDrop(droppedRow);

        // Call the event reorder-row
        this.trigger('reorder-row', newData, draggingRow, droppedRow);
      }
    }, {
      key: "initSearch",
      value: function initSearch() {
        this.ignoreInitSort = true;
        _get(_getPrototypeOf(_class.prototype), "initSearch", this).call(this);
      }
    }, {
      key: "initSort",
      value: function initSort() {
        if (this.ignoreInitSort) {
          this.ignoreInitSort = false;
          return;
        }
        _get(_getPrototypeOf(_class.prototype), "initSort", this).call(this);
      }
    }]);
  }($.BootstrapTable);

}));
