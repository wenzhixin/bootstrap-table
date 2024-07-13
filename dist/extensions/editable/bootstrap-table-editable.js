(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.entries.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.replace.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.entries.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.replace.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_find_js, es_array_indexOf_js, es_object_assign_js, es_object_entries_js, es_object_toString_js, es_regexp_exec_js, es_string_replace_js, $) { 'use strict';

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

  /* eslint-disable no-unused-vars */
  /**
   * @author zhixin wen <wenzhixin2010@gmail.com>
   * extensions: https://github.com/vitalets/x-editable
   */

  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults, {
    editable: true,
    onEditableInit: function onEditableInit() {
      return false;
    },
    onEditableSave: function onEditableSave(field, row, rowIndex, oldValue, $el) {
      return false;
    },
    onEditableShown: function onEditableShown(field, row, $el, editable) {
      return false;
    },
    onEditableHidden: function onEditableHidden(field, row, $el, reason) {
      return false;
    }
  });
  Object.assign($.fn.bootstrapTable.columnDefaults, {
    alwaysUseFormatter: false
  });
  Object.assign($.fn.bootstrapTable.events, {
    'editable-init.bs.table': 'onEditableInit',
    'editable-save.bs.table': 'onEditableSave',
    'editable-shown.bs.table': 'onEditableShown',
    'editable-hidden.bs.table': 'onEditableHidden'
  });
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "initTable",
      value: function initTable() {
        var _this = this;
        _get(_getPrototypeOf(_class.prototype), "initTable", this).call(this);
        if (!this.options.editable) {
          return;
        }
        this.editedCells = [];
        $.each(this.columns, function (i, column) {
          if (!column.editable) {
            return;
          }
          var editableOptions = {};
          var editableDataPrefix = 'editable-';
          var processDataOptions = function processDataOptions(key, value) {
            // Replace camel case with dashes.
            var dashKey = key.replace(/([A-Z])/g, function ($1) {
              return "-".concat($1.toLowerCase());
            });
            if (dashKey.indexOf(editableDataPrefix) === 0) {
              editableOptions[dashKey.replace(editableDataPrefix, 'data-')] = value;
            }
          };
          var formatterIsSet = column.formatter ? true : false;
          $.each(_this.options, processDataOptions);
          column.formatter = column.formatter || function (value) {
            return value;
          };
          column._formatter = column._formatter ? column._formatter : column.formatter;
          column.formatter = function (value, row, index, field) {
            var result = Utils.calculateObjectValue(column, column._formatter, [value, row, index, field], value);
            result = typeof result === 'undefined' || result === null ? _this.options.undefinedText : result;
            if (_this.options.uniqueId !== undefined && !column.alwaysUseFormatter) {
              var uniqueId = Utils.getItemField(row, _this.options.uniqueId, false);
              if ($.inArray(column.field + uniqueId, _this.editedCells) !== -1) {
                result = value;
              }
            }
            $.each(column, processDataOptions);
            var editableOpts = Utils.calculateObjectValue(column, column.editable, [index, row], {});
            var noEditFormatter = editableOpts.hasOwnProperty('noEditFormatter') && editableOpts.noEditFormatter(value, row, index, field);
            if (noEditFormatter) {
              return noEditFormatter;
            }
            var editableDataMarkup = '';
            $.each(editableOptions, function (key, value) {
              editableDataMarkup += " ".concat(key, "=\"").concat(value, "\"");
            });
            return "<a href=\"javascript:void(0)\"\n          data-name=\"".concat(column.field, "\"\n          data-pk=\"").concat(row[_this.options.idField], "\"\n          data-value=\"").concat(value || '', "\"\n          ").concat(editableDataMarkup, ">").concat(formatterIsSet ? result : '', "</a>"); // expand all data-editable-XXX
          };
        });
      }
    }, {
      key: "initBody",
      value: function initBody(fixedScroll) {
        var _this2 = this;
        _get(_getPrototypeOf(_class.prototype), "initBody", this).call(this, fixedScroll);
        if (!this.options.editable) {
          return;
        }
        $.each(this.columns, function (i, column) {
          if (!column.editable) {
            return;
          }
          var data = _this2.getData({
            escape: true
          });
          var $field = _this2.$body.find("a[data-name=\"".concat(column.field, "\"]"));
          $field.each(function (i, element) {
            var $element = $(element);
            var $tr = $element.closest('tr');
            var index = $tr.data('index');
            var row = data[index];
            var editableOpts = Utils.calculateObjectValue(column, column.editable, [index, row, $element], {});
            $element.editable(editableOpts);
          });
          $field.off('save').on('save', function (_ref, _ref2) {
            var currentTarget = _ref.currentTarget;
            var submitValue = _ref2.submitValue;
            var $this = $(currentTarget);
            var data = _this2.getData();
            var rowIndex = $this.parents('tr[data-index]').data('index');
            var row = data[rowIndex];
            var oldValue = row[column.field];
            if (_this2.options.uniqueId !== undefined && !column.alwaysUseFormatter) {
              var uniqueId = Utils.getItemField(row, _this2.options.uniqueId, false);
              if ($.inArray(column.field + uniqueId, _this2.editedCells) === -1) {
                _this2.editedCells.push(column.field + uniqueId);
              }
            }
            submitValue = Utils.escapeHTML(submitValue);
            $this.data('value', submitValue);
            row[column.field] = submitValue;
            _this2.trigger('editable-save', column.field, row, rowIndex, oldValue, $this);
            _this2.initBody();
          });
          $field.off('shown').on('shown', function (_ref3, editable) {
            var currentTarget = _ref3.currentTarget;
            var $this = $(currentTarget);
            var data = _this2.getData();
            var rowIndex = $this.parents('tr[data-index]').data('index');
            var row = data[rowIndex];
            _this2.trigger('editable-shown', column.field, row, $this, editable);
          });
          $field.off('hidden').on('hidden', function (_ref4, reason) {
            var currentTarget = _ref4.currentTarget;
            var $this = $(currentTarget);
            var data = _this2.getData();
            var rowIndex = $this.parents('tr[data-index]').data('index');
            var row = data[rowIndex];
            _this2.trigger('editable-hidden', column.field, row, $this, reason);
          });
        });
        this.trigger('editable-init');
      }
    }, {
      key: "getData",
      value: function getData(params) {
        var data = _get(_getPrototypeOf(_class.prototype), "getData", this).call(this, params);
        if (params && params.escape) {
          var _iterator = _createForOfIteratorHelper(data),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var row = _step.value;
              for (var _i = 0, _Object$entries = Object.entries(row); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];
                row[key] = Utils.unescapeHTML(value);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return data;
      }
    }]);
  }($.BootstrapTable);

}));
