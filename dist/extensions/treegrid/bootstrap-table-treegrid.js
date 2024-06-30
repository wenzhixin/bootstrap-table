(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.to-string.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.to-string.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_filter_js, es_array_join_js, es_object_assign_js, es_object_toString_js, $) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
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
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e  ) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
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
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  /**
   * @author: YL
   * @update: zhixin wen <wenzhixin2010@gmail.com>
   */

  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults, {
    treeEnable: false,
    treeShowField: null,
    idField: 'id',
    parentIdField: 'pid',
    rootParentId: null
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
        this._rowStyle = this.options.rowStyle;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get2, [this].concat(args));
      }
    }, {
      key: "initHeader",
      value: function initHeader() {
        var _get3;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "initHeader", this)).call.apply(_get3, [this].concat(args));
        var treeShowField = this.options.treeShowField;
        if (treeShowField) {
          var _iterator = _createForOfIteratorHelper(this.header.fields),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var field = _step.value;
              if (treeShowField === field) {
                this.treeEnable = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }, {
      key: "initBody",
      value: function initBody() {
        var _get4;
        if (this.treeEnable) {
          this.options.virtualScroll = false;
        }
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        (_get4 = _get(_getPrototypeOf(_class.prototype), "initBody", this)).call.apply(_get4, [this].concat(args));
      }
    }, {
      key: "initTr",
      value: function initTr(item, idx, data, parentDom) {
        var _this = this;
        var nodes = data.filter(function (it) {
          return item[_this.options.idField] === it[_this.options.parentIdField];
        });
        parentDom.append(_get(_getPrototypeOf(_class.prototype), "initRow", this).call(this, item, idx, data, parentDom));

        // init sub node
        var len = nodes.length - 1;
        for (var i = 0; i <= len; i++) {
          var node = nodes[i];
          var defaultItem = Utils.extend(true, {}, item);
          node._level = defaultItem._level + 1;
          node._parent = defaultItem;
          if (i === len) {
            node._last = 1;
          }
          // jquery.treegrid.js
          this.options.rowStyle = function (item, idx) {
            var res = _this._rowStyle(item, idx);
            var id = item[_this.options.idField] ? item[_this.options.idField] : 0;
            var pid = item[_this.options.parentIdField] ? item[_this.options.parentIdField] : 0;
            res.classes = [res.classes || '', "treegrid-".concat(id), "treegrid-parent-".concat(pid)].join(' ');
            return res;
          };
          this.initTr(node, $.inArray(node, data), data, parentDom);
        }
      }
    }, {
      key: "initRow",
      value: function initRow(item, idx, data, parentDom) {
        var _this2 = this;
        if (this.treeEnable) {
          if (this.options.rootParentId === item[this.options.parentIdField] || !item[this.options.parentIdField]) {
            if (item._level === undefined) {
              item._level = 0;
            }
            // jquery.treegrid.js
            this.options.rowStyle = function (item, idx) {
              var res = _this2._rowStyle(item, idx);
              var x = item[_this2.options.idField] ? item[_this2.options.idField] : 0;
              res.classes = [res.classes || '', "treegrid-".concat(x)].join(' ');
              return res;
            };
            this.initTr(item, idx, data, parentDom);
            return true;
          }
          return false;
        }
        return _get(_getPrototypeOf(_class.prototype), "initRow", this).call(this, item, idx, data, parentDom);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _get5;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        (_get5 = _get(_getPrototypeOf(_class.prototype), "destroy", this)).call.apply(_get5, [this].concat(args));
        this.options.rowStyle = this._rowStyle;
      }
    }]);
  }($.BootstrapTable);

}));
