(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/web.dom-collections.for-each.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_find_js, es_array_join_js, es_array_map_js, es_array_slice_js, es_object_assign_js, es_object_toString_js, es_regexp_exec_js, es_string_replace_js, web_domCollections_forEach_js, $) { 'use strict';

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
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
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
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
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
   * @author zhixin wen <wenzhixin2010@gmail.com>
   * extensions: https://github.com/hhurz/tableExport.jquery.plugin
   */

  var Utils = $.fn.bootstrapTable.utils;
  var TYPE_NAME = {
    json: 'JSON',
    xml: 'XML',
    png: 'PNG',
    csv: 'CSV',
    txt: 'TXT',
    sql: 'SQL',
    doc: 'MS-Word',
    excel: 'MS-Excel',
    xlsx: 'MS-Excel (OpenXML)',
    powerpoint: 'MS-Powerpoint',
    pdf: 'PDF'
  };
  Object.assign($.fn.bootstrapTable.defaults, {
    showExport: false,
    exportDataType: 'basic',
    // basic, all, selected
    exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
    exportOptions: {},
    exportFooter: false
  });
  Object.assign($.fn.bootstrapTable.columnDefaults, {
    forceExport: false,
    forceHide: false
  });
  Object.assign($.fn.bootstrapTable.defaults.icons, {
    export: {
      bootstrap3: 'glyphicon-export icon-share',
      bootstrap5: 'bi-download',
      materialize: 'file_download',
      'bootstrap-table': 'icon-download'
    }[$.fn.bootstrapTable.theme] || 'fa-download'
  });
  Object.assign($.fn.bootstrapTable.locales, {
    formatExport: function formatExport() {
      return 'Export data';
    }
  });
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
  $.fn.bootstrapTable.methods.push('exportTable');
  Object.assign($.fn.bootstrapTable.defaults, {
    // eslint-disable-next-line no-unused-vars
    onExportSaved: function onExportSaved(exportedRows) {
      return false;
    },
    onExportStarted: function onExportStarted() {
      return false;
    }
  });
  Object.assign($.fn.bootstrapTable.events, {
    'export-saved.bs.table': 'onExportSaved',
    'export-started.bs.table': 'onExportStarted'
  });
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "initToolbar",
      value: function initToolbar() {
        var _this = this,
          _get2;
        var o = this.options;
        var exportTypes = o.exportTypes;
        this.showToolbar = this.showToolbar || o.showExport;
        if (this.options.showExport) {
          if (typeof exportTypes === 'string') {
            var types = exportTypes.slice(1, -1).replace(/ /g, '').split(',');
            exportTypes = types.map(function (t) {
              return t.slice(1, -1);
            });
          }
          if (typeof o.exportOptions === 'string') {
            o.exportOptions = Utils.calculateObjectValue(null, o.exportOptions);
          }
          this.$export = this.$toolbar.find('>.columns div.export');
          if (this.$export.length) {
            this.updateExportButton();
            return;
          }
          this.buttons = Object.assign(this.buttons, {
            export: {
              html: function html() {
                if (exportTypes.length === 1) {
                  return "\n                  <div class=\"export ".concat(_this.constants.classes.buttonsDropdown, "\"\n                  data-type=\"").concat(exportTypes[0], "\">\n                  <button class=\"").concat(_this.constants.buttonsClass, "\"\n                  aria-label=\"").concat(o.formatExport(), "\"\n                  type=\"button\"\n                  title=\"").concat(o.formatExport(), "\">\n                  ").concat(o.showButtonIcons ? Utils.sprintf(_this.constants.html.icon, o.iconsPrefix, o.icons.export) : '', "\n                  ").concat(o.showButtonText ? o.formatExport() : '', "\n                  </button>\n                  </div>\n                ");
                }
                var html = [];
                html.push("\n                <div class=\"export ".concat(_this.constants.classes.buttonsDropdown, "\">\n                <button class=\"").concat(_this.constants.buttonsClass, " dropdown-toggle\"\n                aria-label=\"").concat(o.formatExport(), "\"\n                ").concat(_this.constants.dataToggle, "=\"dropdown\"\n                type=\"button\"\n                title=\"").concat(o.formatExport(), "\">\n                ").concat(o.showButtonIcons ? Utils.sprintf(_this.constants.html.icon, o.iconsPrefix, o.icons.export) : '', "\n                ").concat(o.showButtonText ? o.formatExport() : '', "\n                ").concat(_this.constants.html.dropdownCaret, "\n                </button>\n                ").concat(_this.constants.html.toolbarDropdown[0], "\n              "));
                var _iterator = _createForOfIteratorHelper(exportTypes),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var type = _step.value;
                    if (TYPE_NAME.hasOwnProperty(type)) {
                      var $item = $(Utils.sprintf(_this.constants.html.pageDropdownItem, '', TYPE_NAME[type]));
                      $item.attr('data-type', type);
                      html.push($item.prop('outerHTML'));
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                html.push(_this.constants.html.toolbarDropdown[1], '</div>');
                return html.join('');
              }
            }
          });
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "initToolbar", this)).call.apply(_get2, [this].concat(args));
        this.$export = this.$toolbar.find('>.columns div.export');
        if (!this.options.showExport) {
          return;
        }
        this.updateExportButton();
        var $exportButtons = this.$export.find('[data-type]');
        if (exportTypes.length === 1) {
          $exportButtons = this.$export;
        }
        $exportButtons.click(function (e) {
          e.preventDefault();
          _this.trigger('export-started');
          _this.exportTable({
            type: $(e.currentTarget).data('type')
          });
        });
        this.handleToolbar();
      }
    }, {
      key: "handleToolbar",
      value: function handleToolbar() {
        if (!this.$export) {
          return;
        }
        if (_get(_getPrototypeOf(_class.prototype), "handleToolbar", this)) {
          _get(_getPrototypeOf(_class.prototype), "handleToolbar", this).call(this);
        }
      }
    }, {
      key: "exportTable",
      value: function exportTable(options) {
        var _this2 = this;
        var o = this.options;
        var stateField = this.header.stateField;
        var isCardView = o.cardView;
        var doExport = function doExport(callback) {
          if (stateField) {
            _this2.hideColumn(stateField);
          }
          if (isCardView) {
            _this2.toggleView();
          }
          _this2.columns.forEach(function (row) {
            if (row.forceHide) {
              _this2.hideColumn(row.field);
            }
          });
          var data = _this2.getData();
          if (o.detailView && o.detailViewIcon) {
            var detailViewIndex = o.detailViewAlign === 'left' ? 0 : _this2.getVisibleFields().length + Utils.getDetailViewIndexOffset(_this2.options);
            o.exportOptions.ignoreColumn = [detailViewIndex].concat(o.exportOptions.ignoreColumn || []);
          }
          if (o.exportFooter && o.height) {
            var $footerRow = _this2.$tableFooter.find('tr').first();
            var footerData = {};
            var footerHtml = [];
            $.each($footerRow.children(), function (index, footerCell) {
              var footerCellHtml = $(footerCell).children('.th-inner').first().html();
              footerData[_this2.columns[index].field] = footerCellHtml === '&nbsp;' ? null : footerCellHtml;

              // grab footer cell text into cell index-based array
              footerHtml.push(footerCellHtml);
            });
            _this2.$body.append(_this2.$body.children().last()[0].outerHTML);
            var $lastTableRow = _this2.$body.children().last();
            $.each($lastTableRow.children(), function (index, lastTableRowCell) {
              $(lastTableRowCell).html(footerHtml[index]);
            });
          }
          var hiddenColumns = _this2.getHiddenColumns();
          hiddenColumns.forEach(function (row) {
            if (row.forceExport) {
              _this2.showColumn(row.field);
            }
          });
          if (typeof o.exportOptions.fileName === 'function') {
            options.fileName = o.exportOptions.fileName();
          }
          _this2.$el.tableExport(Utils.extend({
            onAfterSaveToFile: function onAfterSaveToFile() {
              if (o.exportFooter) {
                _this2.load(data);
              }
              if (stateField) {
                _this2.showColumn(stateField);
              }
              if (isCardView) {
                _this2.toggleView();
              }
              hiddenColumns.forEach(function (row) {
                if (row.forceExport) {
                  _this2.hideColumn(row.field);
                }
              });
              _this2.columns.forEach(function (row) {
                if (row.forceHide) {
                  _this2.showColumn(row.field);
                }
              });
              if (callback) callback();
            }
          }, o.exportOptions, options));
        };
        if (o.exportDataType === 'all' && o.pagination) {
          var eventName = o.sidePagination === 'server' ? 'post-body.bs.table' : 'page-change.bs.table';
          var virtualScroll = this.options.virtualScroll;
          this.$el.one(eventName, function () {
            setTimeout(function () {
              var data = _this2.getData();
              doExport(function () {
                _this2.options.virtualScroll = virtualScroll;
                _this2.togglePagination();
              });
              _this2.trigger('export-saved', data);
            }, 0);
          });
          this.options.virtualScroll = false;
          this.togglePagination();
        } else if (o.exportDataType === 'selected') {
          var data = this.getData();
          var selectedData = this.getSelections();
          var pagination = o.pagination;
          if (!selectedData.length) {
            return;
          }
          if (o.sidePagination === 'server') {
            data = _defineProperty({
              total: o.totalRows
            }, this.options.dataField, data);
            selectedData = _defineProperty({
              total: selectedData.length
            }, this.options.dataField, selectedData);
          }
          this.load(selectedData);
          if (pagination) {
            this.togglePagination();
          }
          doExport(function () {
            if (pagination) {
              _this2.togglePagination();
            }
            _this2.load(data);
          });
          this.trigger('export-saved', selectedData);
        } else {
          doExport();
          this.trigger('export-saved', this.getData(true));
        }
      }
    }, {
      key: "updateSelected",
      value: function updateSelected() {
        _get(_getPrototypeOf(_class.prototype), "updateSelected", this).call(this);
        this.updateExportButton();
      }
    }, {
      key: "updateExportButton",
      value: function updateExportButton() {
        if (this.options.exportDataType === 'selected') {
          this.$export.find('> button').prop('disabled', !this.getSelections().length);
        }
      }
    }]);
  }($.BootstrapTable);

}));
