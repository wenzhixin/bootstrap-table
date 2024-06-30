(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.entries.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.includes.js'), require('core-js/modules/es.string.search.js'), require('core-js/modules/es.string.trim.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.entries.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.includes.js', 'core-js/modules/es.string.search.js', 'core-js/modules/es.string.trim.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_filter_js, es_array_find_js, es_array_includes_js, es_array_indexOf_js, es_array_join_js, es_object_assign_js, es_object_entries_js, es_object_toString_js, es_regexp_exec_js, es_string_includes_js, es_string_search_js, es_string_trim_js, $) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
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
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
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
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
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
   * @author: aperez <aperez@datadec.es>
   * @version: v2.0.0
   *
   * @update Dennis Hernández
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  var Utils = $.fn.bootstrapTable.utils;
  var theme = {
    bootstrap3: {
      icons: {
        advancedSearchIcon: 'glyphicon-chevron-down'
      },
      classes: {},
      html: {
        modal: "\n        <div id=\"avdSearchModal_%s\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-xs\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button class=\"close toolbar-modal-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title toolbar-modal-title\"></h4>\n              </div>\n              <div class=\"modal-body toolbar-modal-body\"></div>\n              <div class=\"modal-footer toolbar-modal-footer\">\n                <button class=\"btn btn-%s toolbar-modal-close\"></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      "
      }
    },
    bootstrap4: {
      icons: {
        advancedSearchIcon: 'fa-chevron-down'
      },
      classes: {},
      html: {
        modal: "\n        <div id=\"avdSearchModal_%s\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-xs\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title toolbar-modal-title\"></h4>\n                <button class=\"close toolbar-modal-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body toolbar-modal-body\"></div>\n              <div class=\"modal-footer toolbar-modal-footer\">\n                <button class=\"btn btn-%s toolbar-modal-close\"></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      "
      }
    },
    bootstrap5: {
      icons: {
        advancedSearchIcon: 'bi-chevron-down'
      },
      classes: {
        formGroup: 'mb-3'
      },
      html: {
        modal: "\n        <div id=\"avdSearchModal_%s\" class=\"modal fade\" tabindex=\"-1\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-xs\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title toolbar-modal-title\"></h5>\n                <button class=\"btn-close toolbar-modal-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n              </div>\n              <div class=\"modal-body toolbar-modal-body\"></div>\n              <div class=\"modal-footer toolbar-modal-footer\">\n                <button class=\"btn btn-%s toolbar-modal-close\"></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      "
      }
    },
    bulma: {
      icons: {
        advancedSearchIcon: 'fa-chevron-down'
      },
      classes: {},
      html: {
        modal: "\n        <div class=\"modal\" id=\"avdSearchModal_%s\">\n          <div class=\"modal-background\"></div>\n          <div class=\"modal-card\">\n            <header class=\"modal-card-head\">\n              <p class=\"modal-card-title toolbar-modal-title\"></p>\n              <button class=\"delete toolbar-modal-close\"></button>\n            </header>\n            <section class=\"modal-card-body toolbar-modal-body\"></section>\n            <footer class=\"modal-card-foot toolbar-modal-footer\">\n              <button class=\"button button-%s toolbar-modal-close\"></button>\n            </footer>\n          </div>\n        </div>\n      "
      }
    },
    foundation: {
      icons: {
        advancedSearchIcon: 'fa-chevron-down'
      },
      classes: {},
      html: {
        modal: "\n        <div class=\"reveal\" id=\"avdSearchModal_%s\" data-reveal>\n          <h1 class=\"toolbar-modal-title\"></h1>\n          <div class=\"toolbar-modal-body\"></div>\n          <button class=\"close-button toolbar-modal-close\" data-close aria-label=\"Close modal\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <div class=\"toolbar-modal-footer\">\n            <button class=\"button button-%s toolbar-modal-close\"></button>\n          </div>\n        </div>\n      "
      }
    },
    materialize: {
      icons: {
        advancedSearchIcon: 'expand_more'
      },
      classes: {},
      html: {
        modal: "\n        <div id=\"avdSearchModal_%s\" class=\"modal\">\n          <div class=\"modal-content\">\n            <h4 class=\"toolbar-modal-title\"></h4>\n            <div class=\"toolbar-modal-body\"></div>\n          </div>\n          <div class=\"modal-footer toolbar-modal-footer\">\n            <a href=\"javascript:void(0)\" class=\"modal-close waves-effect waves-green btn-flat btn-%s toolbar-modal-close\"></a>\n          </div>\n        </div>\n      "
      }
    },
    semantic: {
      icons: {
        advancedSearchIcon: 'fa-chevron-down'
      },
      classes: {},
      html: {
        modal: "\n        <div class=\"ui modal\" id=\"avdSearchModal_%s\">\n          <i class=\"close icon toolbar-modal-close\"></i>\n          <div class=\"header toolbar-modal-title\"\"></div>\n          <div class=\"image content ui form toolbar-modal-body\"></div>\n          <div class=\"actions toolbar-modal-footer\">\n            <div class=\"ui black deny button button-%s toolbar-modal-close\"></div>\n          </div>\n        </div>\n      "
      }
    }
  }[$.fn.bootstrapTable.theme];
  Object.assign($.fn.bootstrapTable.defaults, {
    advancedSearch: false,
    idForm: 'advancedSearch',
    actionForm: '',
    idTable: undefined,
    // eslint-disable-next-line no-unused-vars
    onColumnAdvancedSearch: function onColumnAdvancedSearch(field, text) {
      return false;
    }
  });
  Object.assign($.fn.bootstrapTable.defaults.icons, {
    advancedSearchIcon: theme.icons.advancedSearchIcon
  });
  Object.assign($.fn.bootstrapTable.events, {
    'column-advanced-search.bs.table': 'onColumnAdvancedSearch'
  });
  Object.assign($.fn.bootstrapTable.locales, {
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Advanced search';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Close';
    }
  });
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "initToolbar",
      value: function initToolbar() {
        this.showToolbar = this.showToolbar || this.options.search && this.options.advancedSearch && this.options.idTable;
        if (this.showToolbar) {
          this.buttons = Object.assign(this.buttons, {
            advancedSearch: {
              text: this.options.formatAdvancedSearch(),
              icon: this.options.icons.advancedSearchIcon,
              event: this.showAdvancedSearch,
              attributes: {
                'aria-label': this.options.formatAdvancedSearch(),
                title: this.options.formatAdvancedSearch()
              }
            }
          });
          if (Utils.isEmptyObject(this.filterColumnsPartial)) {
            this.filterColumnsPartial = {};
          }
        }
        _get(_getPrototypeOf(_class.prototype), "initToolbar", this).call(this);
      }
    }, {
      key: "showAdvancedSearch",
      value: function showAdvancedSearch() {
        var _this = this;
        this.$toolbarModal = $("#avdSearchModal_".concat(this.options.idTable));
        if (this.$toolbarModal.length <= 0) {
          $('body').append(Utils.sprintf(theme.html.modal, this.options.idTable, this.options.buttonsClass));
          this.$toolbarModal = $("#avdSearchModal_".concat(this.options.idTable));
          this.$toolbarModal.find('.toolbar-modal-close').off('click').on('click', function () {
            return _this.hideToolbarModal();
          });
        }
        this.initToolbarModalBody();
        this.showToolbarModal();
      }
    }, {
      key: "initToolbarModalBody",
      value: function initToolbarModalBody() {
        var _this2 = this;
        this.$toolbarModal.find('.toolbar-modal-title').html(this.options.formatAdvancedSearch());
        this.$toolbarModal.find('.toolbar-modal-footer .toolbar-modal-close').html(this.options.formatAdvancedCloseButton());
        this.$toolbarModal.find('.toolbar-modal-body').html(this.createToolbarForm()).off('keyup blur', 'input').on('keyup blur', 'input', function (e) {
          _this2.onColumnAdvancedSearch(e);
        });
      }
    }, {
      key: "showToolbarModal",
      value: function showToolbarModal() {
        var theme = $.fn.bootstrapTable.theme;
        if (['bootstrap3', 'bootstrap4'].includes(theme)) {
          this.$toolbarModal.modal();
        } else if (theme === 'bootstrap5') {
          if (!this.toolbarModal) {
            this.toolbarModal = new window.bootstrap.Modal(this.$toolbarModal[0], {});
          }
          this.toolbarModal.show();
        } else if (theme === 'bulma') {
          this.$toolbarModal.toggleClass('is-active');
        } else if (theme === 'foundation') {
          if (!this.toolbarModal) {
            this.toolbarModal = new window.Foundation.Reveal(this.$toolbarModal);
          }
          this.toolbarModal.open();
        } else if (theme === 'materialize') {
          this.$toolbarModal.modal().modal('open');
        } else if (theme === 'semantic') {
          this.$toolbarModal.modal('show');
        }
      }
    }, {
      key: "hideToolbarModal",
      value: function hideToolbarModal() {
        var theme = $.fn.bootstrapTable.theme;
        if (['bootstrap3', 'bootstrap4'].includes(theme)) {
          this.$toolbarModal.modal('hide');
        } else if (theme === 'bootstrap5') {
          this.toolbarModal.hide();
        } else if (theme === 'bulma') {
          $('html').toggleClass('is-clipped');
          this.$toolbarModal.toggleClass('is-active');
        } else if (theme === 'foundation') {
          this.toolbarModal.close();
        } else if (theme === 'materialize') {
          this.$toolbarModal.modal('open');
        } else if (theme === 'semantic') {
          this.$toolbarModal.modal('close');
        }
        if (this.options.sidePagination === 'server') {
          this.options.pageNumber = 1;
          this.updatePagination();
          this.trigger('column-advanced-search', this.filterColumnsPartial);
        }
      }
    }, {
      key: "createToolbarForm",
      value: function createToolbarForm() {
        var html = ["<form class=\"form-horizontal toolbar-model-form\" action=\"".concat(this.options.actionForm, "\">")];
        var _iterator = _createForOfIteratorHelper(this.columns),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var column = _step.value;
            if (!column.checkbox && column.visible && column.searchable) {
              var title = $('<div/>').html(column.title).text().trim();
              var value = this.filterColumnsPartial[column.field] || '';
              html.push("\n          <div class=\"form-group row ".concat(theme.classes.formGroup || '', "\">\n            <label class=\"col-sm-4 control-label\">").concat(title, "</label>\n            <div class=\"col-sm-6\">\n              <input type=\"text\" class=\"form-control ").concat(this.constants.classes.input, "\"\n                name=\"").concat(column.field, "\" placeholder=\"").concat(title, "\" value=\"").concat(value, "\">\n            </div>\n          </div>\n        "));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        html.push('</form>');
        return html.join('');
      }
    }, {
      key: "initSearch",
      value: function initSearch() {
        var _this3 = this;
        _get(_getPrototypeOf(_class.prototype), "initSearch", this).call(this);
        if (!this.options.advancedSearch || this.options.sidePagination === 'server') {
          return;
        }
        var fp = Utils.isEmptyObject(this.filterColumnsPartial) ? null : this.filterColumnsPartial;
        this.data = fp ? this.data.filter(function (item, i) {
          for (var _i = 0, _Object$entries = Object.entries(fp); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              v = _Object$entries$_i[1];
            var val = v.toLowerCase();
            var value = item[key];
            var index = _this3.header.fields.indexOf(key);
            value = Utils.calculateObjectValue(_this3.header, _this3.header.formatters[index], [value, item, i], value);
            if (!(index !== -1 && (typeof value === 'string' || typeof value === 'number') && "".concat(value).toLowerCase().includes(val))) {
              return false;
            }
          }
          return true;
        }) : this.data;
        this.unsortedData = _toConsumableArray(this.data);
      }
    }, {
      key: "onColumnAdvancedSearch",
      value: function onColumnAdvancedSearch(e) {
        var text = $(e.currentTarget).val().trim();
        var field = $(e.currentTarget).attr('name');
        if (text) {
          this.filterColumnsPartial[field] = text;
        } else {
          delete this.filterColumnsPartial[field];
        }
        if (this.options.sidePagination !== 'server') {
          this.options.pageNumber = 1;
          this.initSearch();
          this.updatePagination();
          this.trigger('column-advanced-search', field, text);
        }
      }
    }]);
  }($.BootstrapTable);

}));
