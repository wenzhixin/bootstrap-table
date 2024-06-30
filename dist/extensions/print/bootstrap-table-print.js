(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.flat.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.array.sort.js'), require('core-js/modules/es.array.unscopables.flat.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.replace.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.flat.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.array.sort.js', 'core-js/modules/es.array.unscopables.flat.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.replace.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_filter_js, es_array_find_js, es_array_flat_js, es_array_includes_js, es_array_indexOf_js, es_array_join_js, es_array_map_js, es_array_slice_js, es_array_sort_js, es_array_unscopables_flat_js, es_object_assign_js, es_object_toString_js, es_regexp_exec_js, es_string_replace_js, $) { 'use strict';

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
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  var Utils = $.fn.bootstrapTable.utils;
  function printPageBuilderDefault(table, styles) {
    return "\n    <html>\n    <head>\n    ".concat(styles, "\n    <style type=\"text/css\" media=\"print\">\n    @page {\n      size: auto;\n      margin: 25px 0 25px 0;\n    }\n    </style>\n    <style type=\"text/css\" media=\"all\">\n    table {\n      border-collapse: collapse;\n      font-size: 12px;\n    }\n    table, th, td {\n      border: 1px solid grey;\n    }\n    th, td {\n      text-align: center;\n      vertical-align: middle;\n    }\n    p {\n      font-weight: bold;\n      margin-left:20px;\n    }\n    table {\n      width: 94%;\n      margin-left: 3%;\n      margin-right: 3%;\n    }\n    div.bs-table-print {\n      text-align: center;\n    }\n    </style>\n    </head>\n    <title>Print Table</title>\n    <body>\n    <p>Printed on: ").concat(new Date(), " </p>\n    <div class=\"bs-table-print\">").concat(table, "</div>\n    </body>\n    </html>\n  ");
  }
  Object.assign($.fn.bootstrapTable.locales, {
    formatPrint: function formatPrint() {
      return 'Print';
    }
  });
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
  Object.assign($.fn.bootstrapTable.defaults, {
    showPrint: false,
    printAsFilteredAndSortedOnUI: true,
    printSortColumn: undefined,
    printSortOrder: 'asc',
    printStyles: [],
    printPageBuilder: function printPageBuilder(table, styles) {
      return printPageBuilderDefault(table, styles);
    }
  });
  Object.assign($.fn.bootstrapTable.columnDefaults, {
    printFilter: undefined,
    printIgnore: false,
    printFormatter: undefined
  });
  Object.assign($.fn.bootstrapTable.defaults.icons, {
    print: {
      bootstrap3: 'glyphicon-print icon-share',
      bootstrap5: 'bi-printer',
      'bootstrap-table': 'icon-printer'
    }[$.fn.bootstrapTable.theme] || 'fa-print'
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
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get2, [this].concat(args));
        if (!this.options.showPrint) {
          return;
        }
        this.mergedCells = [];
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        var _this = this,
          _get3;
        this.showToolbar = this.showToolbar || this.options.showPrint;
        if (this.options.showPrint) {
          this.buttons = Object.assign(this.buttons, {
            print: {
              text: this.options.formatPrint(),
              icon: this.options.icons.print,
              event: function event() {
                _this.doPrint(_this.options.printAsFilteredAndSortedOnUI ? _this.getData() : _this.options.data.slice(0));
              },
              attributes: {
                'aria-label': this.options.formatPrint(),
                title: this.options.formatPrint()
              }
            }
          });
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "initToolbar", this)).call.apply(_get3, [this].concat(args));
      }
    }, {
      key: "mergeCells",
      value: function mergeCells(options) {
        _get(_getPrototypeOf(_class.prototype), "mergeCells", this).call(this, options);
        if (!this.options.showPrint) {
          return;
        }
        var col = this.getVisibleFields().indexOf(options.field);
        if (Utils.hasDetailViewIcon(this.options)) {
          col += 1;
        }
        this.mergedCells.push({
          row: options.index,
          col: col,
          rowspan: options.rowspan || 1,
          colspan: options.colspan || 1
        });
      }
    }, {
      key: "doPrint",
      value: function doPrint(data) {
        var _this2 = this;
        var canPrint = function canPrint(column) {
          return !column.printIgnore && column.visible;
        };
        var formatValue = function formatValue(row, i, column) {
          var value_ = Utils.getItemField(row, column.field, _this2.options.escape, column.escape);
          var value = Utils.calculateObjectValue(column, column.printFormatter || column.formatter, [value_, row, i], value_);
          return typeof value === 'undefined' || value === null ? _this2.options.undefinedText : value;
        };
        var buildTable = function buildTable(data, columnsArray) {
          var dir = _this2.$el.attr('dir') || 'ltr';
          var html = ["<table dir=\"".concat(dir, "\"><thead>")];
          var _iterator = _createForOfIteratorHelper(columnsArray),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _columns2 = _step.value;
              html.push('<tr>');
              for (var _h = 0; _h < _columns2.length; _h++) {
                if (canPrint(_columns2[_h])) {
                  html.push("<th\n              ".concat(Utils.sprintf(' rowspan="%s"', _columns2[_h].rowspan), "\n              ").concat(Utils.sprintf(' colspan="%s"', _columns2[_h].colspan), "\n              >").concat(_columns2[_h].title, "</th>"));
                }
              }
              html.push('</tr>');
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          html.push('</thead><tbody>');
          var notRender = [];
          if (_this2.mergedCells) {
            for (var mc = 0; mc < _this2.mergedCells.length; mc++) {
              var currentMergedCell = _this2.mergedCells[mc];
              for (var rs = 0; rs < currentMergedCell.rowspan; rs++) {
                var row = currentMergedCell.row + rs;
                for (var cs = 0; cs < currentMergedCell.colspan; cs++) {
                  var col = currentMergedCell.col + cs;
                  notRender.push("".concat(row, ",").concat(col));
                }
              }
            }
          }
          for (var i = 0; i < data.length; i++) {
            html.push('<tr>');
            var columns = columnsArray.flat(1);
            columns.sort(function (c1, c2) {
              return c1.colspanIndex - c2.colspanIndex;
            });
            for (var j = 0; j < columns.length; j++) {
              if (columns[j].colspanGroup > 0) continue;
              var rowspan = 0;
              var colspan = 0;
              if (_this2.mergedCells) {
                for (var _mc = 0; _mc < _this2.mergedCells.length; _mc++) {
                  var _currentMergedCell = _this2.mergedCells[_mc];
                  if (_currentMergedCell.col === j && _currentMergedCell.row === i) {
                    rowspan = _currentMergedCell.rowspan;
                    colspan = _currentMergedCell.colspan;
                  }
                }
              }
              if (canPrint(columns[j]) && (!notRender.includes("".concat(i, ",").concat(j)) || rowspan > 0 && colspan > 0)) {
                if (rowspan > 0 && colspan > 0) {
                  html.push("<td ".concat(Utils.sprintf(' rowspan="%s"', rowspan), " ").concat(Utils.sprintf(' colspan="%s"', colspan), ">"), formatValue(data[i], i, columns[j]), '</td>');
                } else {
                  html.push('<td>', formatValue(data[i], i, columns[j]), '</td>');
                }
              }
            }
            html.push('</tr>');
          }
          html.push('</tbody>');
          if (_this2.options.showFooter) {
            html.push('<footer><tr>');
            var _iterator2 = _createForOfIteratorHelper(columnsArray),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _columns = _step2.value;
                for (var h = 0; h < _columns.length; h++) {
                  if (canPrint(_columns)) {
                    var footerData = Utils.trToData(_columns, _this2.$el.find('>tfoot>tr'));
                    var footerValue = Utils.calculateObjectValue(_columns[h], _columns[h].footerFormatter, [data], footerData[0] && footerData[0][_columns[h].field] || '');
                    html.push("<th>".concat(footerValue, "</th>"));
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            html.push('</tr></footer>');
          }
          html.push('</table>');
          return html.join('');
        };
        var sortRows = function sortRows(data, colName, sortOrder) {
          if (!colName) {
            return data;
          }
          var reverse = sortOrder !== 'asc';
          reverse = -(+reverse || -1);
          return data.sort(function (a, b) {
            return reverse * a[colName].localeCompare(b[colName]);
          });
        };
        var filterRow = function filterRow(row, filters) {
          for (var index = 0; index < filters.length; ++index) {
            if (row[filters[index].colName] !== filters[index].value) {
              return false;
            }
          }
          return true;
        };
        var filterRows = function filterRows(data, filters) {
          return data.filter(function (row) {
            return filterRow(row, filters);
          });
        };
        var getColumnFilters = function getColumnFilters(columns) {
          return !columns || !columns[0] ? [] : columns[0].filter(function (col) {
            return col.printFilter;
          }).map(function (col) {
            return {
              colName: col.field,
              value: col.printFilter
            };
          });
        };
        data = filterRows(data, getColumnFilters(this.options.columns));
        data = sortRows(data, this.options.printSortColumn, this.options.printSortOrder);
        var table = buildTable(data, this.options.columns);
        var newWin = window.open('');
        var printStyles = typeof this.options.printStyles === 'string' ? this.options.printStyles.replace(/\[|\]| /g, '').toLowerCase().split(',') : this.options.printStyles;
        var styles = printStyles.map(function (it) {
          return "<link rel=\"stylesheet\" href=\"".concat(it, "\" />");
        }).join('');
        var calculatedPrintPage = Utils.calculateObjectValue(this, this.options.printPageBuilder, [table, styles], printPageBuilderDefault(table, styles));
        var startPrint = function startPrint() {
          newWin.focus();
          newWin.print();
          newWin.close();
        };
        newWin.document.write(calculatedPrintPage);
        newWin.document.close();
        if (printStyles.length) {
          var links = document.getElementsByTagName('link');
          var lastLink = links[links.length - 1];
          lastLink.onload = startPrint;
        } else {
          startPrint();
        }
      }
    }]);
  }($.BootstrapTable);

}));
