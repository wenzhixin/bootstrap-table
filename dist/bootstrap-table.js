(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.find-index.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.array.iterator.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.array.reverse.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.array.sort.js'), require('core-js/modules/es.array.splice.js'), require('core-js/modules/es.date.to-json.js'), require('core-js/modules/es.number.constructor.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.entries.js'), require('core-js/modules/es.object.keys.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.parse-float.js'), require('core-js/modules/es.parse-int.js'), require('core-js/modules/es.regexp.constructor.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.string.includes.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.string.search.js'), require('core-js/modules/es.string.split.js'), require('core-js/modules/es.string.trim.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('core-js/modules/web.dom-collections.iterator.js'), require('jquery'), require('core-js/modules/es.object.get-prototype-of.js'), require('core-js/modules/es.string.ends-with.js'), require('core-js/modules/es.string.match.js'), require('core-js/modules/es.string.starts-with.js')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.find-index.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.array.iterator.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.array.reverse.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.array.sort.js', 'core-js/modules/es.array.splice.js', 'core-js/modules/es.date.to-json.js', 'core-js/modules/es.number.constructor.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.entries.js', 'core-js/modules/es.object.keys.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.parse-float.js', 'core-js/modules/es.parse-int.js', 'core-js/modules/es.regexp.constructor.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.string.includes.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.string.search.js', 'core-js/modules/es.string.split.js', 'core-js/modules/es.string.trim.js', 'core-js/modules/web.dom-collections.for-each.js', 'core-js/modules/web.dom-collections.iterator.js', 'jquery', 'core-js/modules/es.object.get-prototype-of.js', 'core-js/modules/es.string.ends-with.js', 'core-js/modules/es.string.match.js', 'core-js/modules/es.string.starts-with.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BootstrapTable = factory(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_filter_js, es_array_find_js, es_array_findIndex_js, es_array_includes_js, es_array_indexOf_js, es_array_iterator_js, es_array_join_js, es_array_map_js, es_array_reverse_js, es_array_slice_js, es_array_sort_js, es_array_splice_js, es_date_toJson_js, es_number_constructor_js, es_object_assign_js, es_object_entries_js, es_object_keys_js, es_object_toString_js, es_parseFloat_js, es_parseInt_js, es_regexp_constructor_js, es_regexp_exec_js, es_regexp_toString_js, es_string_includes_js, es_string_replace_js, es_string_search_js, es_string_split_js, es_string_trim_js, web_domCollections_forEach_js, web_domCollections_iterator_js, $) { 'use strict';

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
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
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
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var Utils = {
    getBootstrapVersion: function getBootstrapVersion() {
      var bootstrapVersion = 5;
      try {
        var rawVersion = $.fn.dropdown.Constructor.VERSION;

        // Only try to parse VERSION if it is defined.
        // It is undefined in older versions of Bootstrap (tested with 3.1.1).
        if (rawVersion !== undefined) {
          bootstrapVersion = parseInt(rawVersion, 10);
        }
      } catch (e) {
        // ignore
      }
      try {
        // eslint-disable-next-line no-undef
        var _rawVersion = bootstrap.Tooltip.VERSION;
        if (_rawVersion !== undefined) {
          bootstrapVersion = parseInt(_rawVersion, 10);
        }
      } catch (e) {
        // ignore
      }
      return bootstrapVersion;
    },
    getIconsPrefix: function getIconsPrefix(theme) {
      return {
        bootstrap3: 'glyphicon',
        bootstrap4: 'fa',
        bootstrap5: 'bi',
        'bootstrap-table': 'icon',
        bulma: 'fa',
        foundation: 'fa',
        materialize: 'material-icons',
        semantic: 'fa'
      }[theme] || 'fa';
    },
    getIcons: function getIcons(prefix) {
      return {
        glyphicon: {
          paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
          paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
          refresh: 'glyphicon-refresh icon-refresh',
          toggleOff: 'glyphicon-list-alt icon-list-alt',
          toggleOn: 'glyphicon-list-alt icon-list-alt',
          columns: 'glyphicon-th icon-th',
          detailOpen: 'glyphicon-plus icon-plus',
          detailClose: 'glyphicon-minus icon-minus',
          fullscreen: 'glyphicon-fullscreen',
          search: 'glyphicon-search',
          clearSearch: 'glyphicon-trash'
        },
        fa: {
          paginationSwitchDown: 'fa-caret-square-down',
          paginationSwitchUp: 'fa-caret-square-up',
          refresh: 'fa-sync',
          toggleOff: 'fa-toggle-off',
          toggleOn: 'fa-toggle-on',
          columns: 'fa-th-list',
          detailOpen: 'fa-plus',
          detailClose: 'fa-minus',
          fullscreen: 'fa-arrows-alt',
          search: 'fa-search',
          clearSearch: 'fa-trash'
        },
        bi: {
          paginationSwitchDown: 'bi-caret-down-square',
          paginationSwitchUp: 'bi-caret-up-square',
          refresh: 'bi-arrow-clockwise',
          toggleOff: 'bi-toggle-off',
          toggleOn: 'bi-toggle-on',
          columns: 'bi-list-ul',
          detailOpen: 'bi-plus',
          detailClose: 'bi-dash',
          fullscreen: 'bi-arrows-move',
          search: 'bi-search',
          clearSearch: 'bi-trash'
        },
        icon: {
          paginationSwitchDown: 'icon-arrow-up-circle',
          paginationSwitchUp: 'icon-arrow-down-circle',
          refresh: 'icon-refresh-cw',
          toggleOff: 'icon-toggle-right',
          toggleOn: 'icon-toggle-right',
          columns: 'icon-list',
          detailOpen: 'icon-plus',
          detailClose: 'icon-minus',
          fullscreen: 'icon-maximize',
          search: 'icon-search',
          clearSearch: 'icon-trash-2'
        },
        'material-icons': {
          paginationSwitchDown: 'grid_on',
          paginationSwitchUp: 'grid_off',
          refresh: 'refresh',
          toggleOff: 'tablet',
          toggleOn: 'tablet_android',
          columns: 'view_list',
          detailOpen: 'add',
          detailClose: 'remove',
          fullscreen: 'fullscreen',
          sort: 'sort',
          search: 'search',
          clearSearch: 'delete'
        }
      }[prefix] || {};
    },
    getSearchInput: function getSearchInput(that) {
      if (typeof that.options.searchSelector === 'string') {
        return $(that.options.searchSelector);
      }
      return that.$toolbar.find('.search input');
    },
    // $.extend: https://github.com/jquery/jquery/blob/3.6.2/src/core.js#L132
    extend: function extend() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var target = args[0] || {};
      var i = 1;
      var deep = false;
      var clone;

      // Handle a deep copy situation
      if (typeof target === 'boolean') {
        deep = target;

        // Skip the boolean and the target
        target = args[i] || {};
        i++;
      }

      // Handle case when target is a string or something (possible in deep copy)
      if (_typeof(target) !== 'object' && typeof target !== 'function') {
        target = {};
      }
      for (; i < args.length; i++) {
        var options = args[i];

        // Ignore undefined/null values
        if (typeof options === 'undefined' || options === null) {
          continue;
        }

        // Extend the base object
        // eslint-disable-next-line guard-for-in
        for (var name in options) {
          var copy = options[name];

          // Prevent Object.prototype pollution
          // Prevent never-ending loop
          if (name === '__proto__' || target === copy) {
            continue;
          }
          var copyIsArray = Array.isArray(copy);

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (this.isObject(copy) || copyIsArray)) {
            var src = target[name];
            if (copyIsArray && Array.isArray(src)) {
              if (src.every(function (it) {
                return !_this.isObject(it) && !Array.isArray(it);
              })) {
                target[name] = copy;
                continue;
              }
            }
            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !this.isObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            // Never move original objects, clone them
            target[name] = this.extend(deep, clone, copy);

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
      return target;
    },
    // it only does '%s', and return '' when arguments are undefined
    sprintf: function sprintf(_str) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      var flag = true;
      var i = 0;
      var str = _str.replace(/%s/g, function () {
        var arg = args[i++];
        if (typeof arg === 'undefined') {
          flag = false;
          return '';
        }
        return arg;
      });
      return flag ? str : '';
    },
    isObject: function isObject(obj) {
      if (_typeof(obj) !== 'object' || obj === null) {
        return false;
      }
      var proto = obj;
      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }
      return Object.getPrototypeOf(obj) === proto;
    },
    isEmptyObject: function isEmptyObject() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.entries(obj).length === 0 && obj.constructor === Object;
    },
    isNumeric: function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    getFieldTitle: function getFieldTitle(list, value) {
      var _iterator = _createForOfIteratorHelper(list),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (item.field === value) {
            return item.title;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return '';
    },
    setFieldIndex: function setFieldIndex(columns) {
      var totalCol = 0;
      var flag = [];
      var _iterator2 = _createForOfIteratorHelper(columns[0]),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var column = _step2.value;
          totalCol += column.colspan || 1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      for (var i = 0; i < columns.length; i++) {
        flag[i] = [];
        for (var j = 0; j < totalCol; j++) {
          flag[i][j] = false;
        }
      }
      for (var _i = 0; _i < columns.length; _i++) {
        var _iterator3 = _createForOfIteratorHelper(columns[_i]),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var r = _step3.value;
            var rowspan = r.rowspan || 1;
            var colspan = r.colspan || 1;
            var index = flag[_i].indexOf(false);
            r.colspanIndex = index;
            if (colspan === 1) {
              r.fieldIndex = index;
              // when field is undefined, use index instead
              if (typeof r.field === 'undefined') {
                r.field = index;
              }
            } else {
              r.colspanGroup = r.colspan;
            }
            for (var _j = 0; _j < rowspan; _j++) {
              for (var k = 0; k < colspan; k++) {
                flag[_i + _j][index + k] = true;
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    },
    normalizeAccent: function normalizeAccent(value) {
      if (typeof value !== 'string') {
        return value;
      }
      return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    },
    updateFieldGroup: function updateFieldGroup(columns, fieldColumns) {
      var _ref;
      var allColumns = (_ref = []).concat.apply(_ref, _toConsumableArray(columns));
      var _iterator4 = _createForOfIteratorHelper(columns),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var c = _step4.value;
          var _iterator6 = _createForOfIteratorHelper(c),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var r = _step6.value;
              if (r.colspanGroup > 1) {
                var colspan = 0;
                var _loop = function _loop(i) {
                  var underColumns = allColumns.filter(function (col) {
                    return col.fieldIndex === i;
                  });
                  var column = underColumns[underColumns.length - 1];
                  if (underColumns.length > 1) {
                    for (var j = 0; j < underColumns.length - 1; j++) {
                      underColumns[j].visible = column.visible;
                    }
                  }
                  if (column.visible) {
                    colspan++;
                  }
                };
                for (var i = r.colspanIndex; i < r.colspanIndex + r.colspanGroup; i++) {
                  _loop(i);
                }
                r.colspan = colspan;
                r.visible = colspan > 0;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      if (columns.length < 2) {
        return;
      }
      var _iterator5 = _createForOfIteratorHelper(fieldColumns),
        _step5;
      try {
        var _loop2 = function _loop2() {
          var column = _step5.value;
          var sameColumns = allColumns.filter(function (col) {
            return col.fieldIndex === column.fieldIndex;
          });
          if (sameColumns.length > 1) {
            var _iterator7 = _createForOfIteratorHelper(sameColumns),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _c = _step7.value;
                _c.visible = column.visible;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },
    getScrollBarWidth: function getScrollBarWidth() {
      if (this.cachedWidth === undefined) {
        var $inner = $('<div/>').addClass('fixed-table-scroll-inner');
        var $outer = $('<div/>').addClass('fixed-table-scroll-outer');
        $outer.append($inner);
        $('body').append($outer);
        var w1 = $inner[0].offsetWidth;
        $outer.css('overflow', 'scroll');
        var w2 = $inner[0].offsetWidth;
        if (w1 === w2) {
          w2 = $outer[0].clientWidth;
        }
        $outer.remove();
        this.cachedWidth = w1 - w2;
      }
      return this.cachedWidth;
    },
    calculateObjectValue: function calculateObjectValue(self, name, args, defaultValue) {
      var func = name;
      if (typeof name === 'string') {
        // support obj.func1.func2
        var names = name.split('.');
        if (names.length > 1) {
          func = window;
          var _iterator8 = _createForOfIteratorHelper(names),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var f = _step8.value;
              func = func[f];
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        } else {
          func = window[name];
        }
      }
      if (func !== null && _typeof(func) === 'object') {
        return func;
      }
      if (typeof func === 'function') {
        return func.apply(self, args || []);
      }
      if (!func && typeof name === 'string' && args && this.sprintf.apply(this, [name].concat(_toConsumableArray(args)))) {
        return this.sprintf.apply(this, [name].concat(_toConsumableArray(args)));
      }
      return defaultValue;
    },
    compareObjects: function compareObjects(objectA, objectB, compareLength) {
      var aKeys = Object.keys(objectA);
      var bKeys = Object.keys(objectB);
      if (compareLength && aKeys.length !== bKeys.length) {
        return false;
      }
      for (var _i2 = 0, _aKeys = aKeys; _i2 < _aKeys.length; _i2++) {
        var key = _aKeys[_i2];
        if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
          return false;
        }
      }
      return true;
    },
    regexCompare: function regexCompare(value, search) {
      try {
        var regexpParts = search.match(/^\/(.*?)\/([gim]*)$/);
        if (value.toString().search(regexpParts ? new RegExp(regexpParts[1], regexpParts[2]) : new RegExp(search, 'gim')) !== -1) {
          return true;
        }
      } catch (e) {
        return false;
      }
      return false;
    },
    escapeApostrophe: function escapeApostrophe(value) {
      return value.toString().replace(/'/g, '&#39;');
    },
    escapeHTML: function escapeHTML(text) {
      if (!text) {
        return text;
      }
      return text.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    },
    unescapeHTML: function unescapeHTML(text) {
      if (typeof text !== 'string' || !text) {
        return text;
      }
      return text.toString().replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'');
    },
    removeHTML: function removeHTML(text) {
      if (!text) {
        return text;
      }
      return text.toString().replace(/(<([^>]+)>)/ig, '').replace(/&[#A-Za-z0-9]+;/gi, '').trim();
    },
    getRealDataAttr: function getRealDataAttr(dataAttr) {
      for (var _i3 = 0, _Object$entries = Object.entries(dataAttr); _i3 < _Object$entries.length; _i3++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
          attr = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        var auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase();
        if (auxAttr !== attr) {
          dataAttr[auxAttr] = value;
          delete dataAttr[attr];
        }
      }
      return dataAttr;
    },
    getItemField: function getItemField(item, field, escape) {
      var columnEscape = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var value = item;

      // use column escape if it is defined
      if (typeof columnEscape !== 'undefined') {
        escape = columnEscape;
      }
      if (typeof field !== 'string' || item.hasOwnProperty(field)) {
        return escape ? this.escapeHTML(item[field]) : item[field];
      }
      var props = field.split('.');
      var _iterator9 = _createForOfIteratorHelper(props),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var p = _step9.value;
          value = value && value[p];
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return escape ? this.escapeHTML(value) : value;
    },
    isIEBrowser: function isIEBrowser() {
      return navigator.userAgent.includes('MSIE ') || /Trident.*rv:11\./.test(navigator.userAgent);
    },
    findIndex: function findIndex(items, item) {
      var _iterator10 = _createForOfIteratorHelper(items),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var it = _step10.value;
          if (JSON.stringify(it) === JSON.stringify(item)) {
            return items.indexOf(it);
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return -1;
    },
    trToData: function trToData(columns, $els) {
      var _this2 = this;
      var data = [];
      var m = [];
      $els.each(function (y, el) {
        var $el = $(el);
        var row = {};

        // save tr's id, class and data-* attributes
        row._id = $el.attr('id');
        row._class = $el.attr('class');
        row._data = _this2.getRealDataAttr($el.data());
        row._style = $el.attr('style');
        $el.find('>td,>th').each(function (_x, el) {
          var $el = $(el);
          var colspan = +$el.attr('colspan') || 1;
          var rowspan = +$el.attr('rowspan') || 1;
          var x = _x;

          // skip already occupied cells in current row
          for (; m[y] && m[y][x]; x++) {
            // ignore
          }

          // mark matrix elements occupied by current cell with true
          for (var tx = x; tx < x + colspan; tx++) {
            for (var ty = y; ty < y + rowspan; ty++) {
              if (!m[ty]) {
                // fill missing rows
                m[ty] = [];
              }
              m[ty][tx] = true;
            }
          }
          var field = columns[x].field;
          row[field] = _this2.escapeApostrophe($el.html().trim());
          // save td's id, class and data-* attributes
          row["_".concat(field, "_id")] = $el.attr('id');
          row["_".concat(field, "_class")] = $el.attr('class');
          row["_".concat(field, "_rowspan")] = $el.attr('rowspan');
          row["_".concat(field, "_colspan")] = $el.attr('colspan');
          row["_".concat(field, "_title")] = $el.attr('title');
          row["_".concat(field, "_data")] = _this2.getRealDataAttr($el.data());
          row["_".concat(field, "_style")] = $el.attr('style');
        });
        data.push(row);
      });
      return data;
    },
    sort: function sort(a, b, order, options, aPosition, bPosition) {
      if (a === undefined || a === null) {
        a = '';
      }
      if (b === undefined || b === null) {
        b = '';
      }
      if (options.sortStable && a === b) {
        a = aPosition;
        b = bPosition;
      }

      // If both values are numeric, do a numeric comparison
      if (this.isNumeric(a) && this.isNumeric(b)) {
        // Convert numerical values form string to float.
        a = parseFloat(a);
        b = parseFloat(b);
        if (a < b) {
          return order * -1;
        }
        if (a > b) {
          return order;
        }
        return 0;
      }
      if (options.sortEmptyLast) {
        if (a === '') {
          return 1;
        }
        if (b === '') {
          return -1;
        }
      }
      if (a === b) {
        return 0;
      }

      // If value is not a string, convert to string
      if (typeof a !== 'string') {
        a = a.toString();
      }
      if (a.localeCompare(b) === -1) {
        return order * -1;
      }
      return order;
    },
    getEventName: function getEventName(eventPrefix) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      id = id || "".concat(+new Date()).concat(~~(Math.random() * 1000000));
      return "".concat(eventPrefix, "-").concat(id);
    },
    hasDetailViewIcon: function hasDetailViewIcon(options) {
      return options.detailView && options.detailViewIcon && !options.cardView;
    },
    getDetailViewIndexOffset: function getDetailViewIndexOffset(options) {
      return this.hasDetailViewIcon(options) && options.detailViewAlign !== 'right' ? 1 : 0;
    },
    checkAutoMergeCells: function checkAutoMergeCells(data) {
      var _iterator11 = _createForOfIteratorHelper(data),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var row = _step11.value;
          for (var _i4 = 0, _Object$keys = Object.keys(row); _i4 < _Object$keys.length; _i4++) {
            var key = _Object$keys[_i4];
            if (key.startsWith('_') && (key.endsWith('_rowspan') || key.endsWith('_colspan'))) {
              return true;
            }
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      return false;
    },
    deepCopy: function deepCopy(arg) {
      if (arg === undefined) {
        return arg;
      }
      return this.extend(true, Array.isArray(arg) ? [] : {}, arg);
    },
    debounce: function debounce(func, wait, immediate) {
      var timeout;
      return function executedFunction() {
        var context = this;
        var args = arguments;
        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
  };

  var VERSION = '1.23.1';
  var bootstrapVersion = Utils.getBootstrapVersion();
  var CONSTANTS = {
    3: {
      classes: {
        buttonsPrefix: 'btn',
        buttons: 'default',
        buttonsGroup: 'btn-group',
        buttonsDropdown: 'btn-group',
        pull: 'pull',
        inputGroup: 'input-group',
        inputPrefix: 'input-',
        input: 'form-control',
        select: 'form-control',
        paginationDropdown: 'btn-group dropdown',
        dropup: 'dropup',
        dropdownActive: 'active',
        paginationActive: 'active',
        buttonActive: 'active'
      },
      html: {
        toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        toolbarDropdownItem: '<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',
        toolbarDropdownSeparator: '<li class="divider"></li>',
        pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
        dropdownCaret: '<span class="caret"></span>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
      }
    },
    4: {
      classes: {
        buttonsPrefix: 'btn',
        buttons: 'secondary',
        buttonsGroup: 'btn-group',
        buttonsDropdown: 'btn-group',
        pull: 'float',
        inputGroup: 'btn-group',
        inputPrefix: 'form-control-',
        input: 'form-control',
        select: 'form-control',
        paginationDropdown: 'btn-group dropdown',
        dropup: 'dropup',
        dropdownActive: 'active',
        paginationActive: 'active',
        buttonActive: 'active'
      },
      html: {
        toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
        toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
        pageDropdown: ['<div class="dropdown-menu">', '</div>'],
        pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
        toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
        dropdownCaret: '<span class="caret"></span>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
      }
    },
    5: {
      classes: {
        buttonsPrefix: 'btn',
        buttons: 'secondary',
        buttonsGroup: 'btn-group',
        buttonsDropdown: 'btn-group',
        pull: 'float',
        inputGroup: 'btn-group',
        inputPrefix: 'form-control-',
        input: 'form-control',
        select: 'form-select',
        paginationDropdown: 'btn-group dropdown',
        dropup: 'dropup',
        dropdownActive: 'active',
        paginationActive: 'active',
        buttonActive: 'active'
      },
      html: {
        dataToggle: 'data-bs-toggle',
        toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-end">', '</div>'],
        toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
        pageDropdown: ['<div class="dropdown-menu">', '</div>'],
        pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
        toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
        dropdownCaret: '<span class="caret"></span>',
        pagination: ['<ul class="pagination%s">', '</ul>'],
        paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
        icon: '<i class="%s %s"></i>',
        inputGroup: '<div class="input-group">%s%s</div>',
        searchInput: '<input class="%s%s" type="text" placeholder="%s">',
        searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
        searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
      }
    }
  }[bootstrapVersion];
  var DEFAULTS = {
    height: undefined,
    classes: 'table table-bordered table-hover',
    buttons: {},
    theadClasses: '',
    headerStyle: function headerStyle(column) {
      return {};
    },
    rowStyle: function rowStyle(row, index) {
      return {};
    },
    rowAttributes: function rowAttributes(row, index) {
      return {};
    },
    undefinedText: '-',
    locale: undefined,
    virtualScroll: false,
    virtualScrollItemHeight: undefined,
    sortable: true,
    sortClass: undefined,
    silentSort: true,
    sortEmptyLast: false,
    sortName: undefined,
    sortOrder: undefined,
    sortReset: false,
    sortStable: false,
    sortResetPage: false,
    rememberOrder: false,
    serverSort: true,
    customSort: undefined,
    columns: [[]],
    data: [],
    url: undefined,
    method: 'get',
    cache: true,
    contentType: 'application/json',
    dataType: 'json',
    ajax: undefined,
    ajaxOptions: {},
    queryParams: function queryParams(params) {
      return params;
    },
    queryParamsType: 'limit',
    // 'limit', undefined
    responseHandler: function responseHandler(res) {
      return res;
    },
    totalField: 'total',
    totalNotFilteredField: 'totalNotFiltered',
    dataField: 'rows',
    footerField: 'footer',
    pagination: false,
    paginationParts: ['pageInfo', 'pageSize', 'pageList'],
    showExtendedPagination: false,
    paginationLoop: true,
    sidePagination: 'client',
    // client or server
    totalRows: 0,
    totalNotFiltered: 0,
    pageNumber: 1,
    pageSize: 10,
    pageList: [10, 25, 50, 100],
    paginationHAlign: 'right',
    // right, left
    paginationVAlign: 'bottom',
    // bottom, top, both
    paginationDetailHAlign: 'left',
    // right, left
    paginationPreText: '&lsaquo;',
    paginationNextText: '&rsaquo;',
    paginationSuccessivelySize: 5,
    // Maximum successively number of pages in a row
    paginationPagesBySide: 1,
    // Number of pages on each side (right, left) of the current page.
    paginationUseIntermediate: false,
    // Calculate intermediate pages for quick access
    paginationLoadMore: false,
    search: false,
    searchable: false,
    searchHighlight: false,
    searchOnEnterKey: false,
    strictSearch: false,
    regexSearch: false,
    searchSelector: false,
    visibleSearch: false,
    showButtonIcons: true,
    showButtonText: false,
    showSearchButton: false,
    showSearchClearButton: false,
    trimOnSearch: true,
    searchAlign: 'right',
    searchTimeOut: 500,
    searchText: '',
    customSearch: undefined,
    showHeader: true,
    showFooter: false,
    footerStyle: function footerStyle(column) {
      return {};
    },
    searchAccentNeutralise: false,
    showColumns: false,
    showColumnsToggleAll: false,
    showColumnsSearch: false,
    minimumCountColumns: 1,
    showPaginationSwitch: false,
    showRefresh: false,
    showToggle: false,
    showFullscreen: false,
    smartDisplay: true,
    escape: false,
    escapeTitle: true,
    filterOptions: {
      filterAlgorithm: 'and'
    },
    idField: undefined,
    selectItemName: 'btSelectItem',
    clickToSelect: false,
    ignoreClickToSelectOn: function ignoreClickToSelectOn(_ref) {
      var tagName = _ref.tagName;
      return ['A', 'BUTTON'].includes(tagName);
    },
    singleSelect: false,
    checkboxHeader: true,
    maintainMetaData: false,
    multipleSelectRow: false,
    uniqueId: undefined,
    cardView: false,
    detailView: false,
    detailViewIcon: true,
    detailViewByClick: false,
    detailViewAlign: 'left',
    detailFormatter: function detailFormatter(index, row) {
      return '';
    },
    detailFilter: function detailFilter(index, row) {
      return true;
    },
    toolbar: undefined,
    toolbarAlign: 'left',
    buttonsToolbar: undefined,
    buttonsAlign: 'right',
    buttonsOrder: ['paginationSwitch', 'refresh', 'toggle', 'fullscreen', 'columns'],
    buttonsPrefix: CONSTANTS.classes.buttonsPrefix,
    buttonsClass: CONSTANTS.classes.buttons,
    iconsPrefix: undefined,
    // init in initConstants
    icons: {},
    // init in initConstants
    iconSize: undefined,
    fixedScroll: false,
    loadingFontSize: 'auto',
    loadingTemplate: function loadingTemplate(loadingMessage) {
      return "<span class=\"loading-wrap\">\n      <span class=\"loading-text\">".concat(loadingMessage, "</span>\n      <span class=\"animation-wrap\"><span class=\"animation-dot\"></span></span>\n      </span>\n    ");
    },
    onAll: function onAll(name, args) {
      return false;
    },
    onClickCell: function onClickCell(field, value, row, $element) {
      return false;
    },
    onDblClickCell: function onDblClickCell(field, value, row, $element) {
      return false;
    },
    onClickRow: function onClickRow(item, $element) {
      return false;
    },
    onDblClickRow: function onDblClickRow(item, $element) {
      return false;
    },
    onSort: function onSort(name, order) {
      return false;
    },
    onCheck: function onCheck(row) {
      return false;
    },
    onUncheck: function onUncheck(row) {
      return false;
    },
    onCheckAll: function onCheckAll(rows) {
      return false;
    },
    onUncheckAll: function onUncheckAll(rows) {
      return false;
    },
    onCheckSome: function onCheckSome(rows) {
      return false;
    },
    onUncheckSome: function onUncheckSome(rows) {
      return false;
    },
    onLoadSuccess: function onLoadSuccess(data) {
      return false;
    },
    onLoadError: function onLoadError(status) {
      return false;
    },
    onColumnSwitch: function onColumnSwitch(field, checked) {
      return false;
    },
    onColumnSwitchAll: function onColumnSwitchAll(checked) {
      return false;
    },
    onPageChange: function onPageChange(number, size) {
      return false;
    },
    onSearch: function onSearch(text) {
      return false;
    },
    onToggle: function onToggle(cardView) {
      return false;
    },
    onPreBody: function onPreBody(data) {
      return false;
    },
    onPostBody: function onPostBody() {
      return false;
    },
    onPostHeader: function onPostHeader() {
      return false;
    },
    onPostFooter: function onPostFooter() {
      return false;
    },
    onExpandRow: function onExpandRow(index, row, $detail) {
      return false;
    },
    onCollapseRow: function onCollapseRow(index, row) {
      return false;
    },
    onRefreshOptions: function onRefreshOptions(options) {
      return false;
    },
    onRefresh: function onRefresh(params) {
      return false;
    },
    onResetView: function onResetView() {
      return false;
    },
    onScrollBody: function onScrollBody() {
      return false;
    },
    onTogglePagination: function onTogglePagination(newState) {
      return false;
    },
    onVirtualScroll: function onVirtualScroll(startIndex, endIndex) {
      return false;
    }
  };
  var EN = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Loading, please wait';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " rows per page");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows (filtered from ").concat(totalNotFiltered, " total rows)");
      }
      return "Showing ".concat(pageFrom, " to ").concat(pageTo, " of ").concat(totalRows, " rows");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'previous page';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "to page ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'next page';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Showing ".concat(totalRows, " rows");
    },
    formatSearch: function formatSearch() {
      return 'Search';
    },
    formatClearSearch: function formatClearSearch() {
      return 'Clear Search';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No matching records found';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refresh';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'All';
    }
  };
  var COLUMN_DEFAULTS = {
    field: undefined,
    title: undefined,
    titleTooltip: undefined,
    class: undefined,
    width: undefined,
    widthUnit: 'px',
    rowspan: undefined,
    colspan: undefined,
    align: undefined,
    // left, right, center
    halign: undefined,
    // left, right, center
    falign: undefined,
    // left, right, center
    valign: undefined,
    // top, middle, bottom
    cellStyle: undefined,
    radio: false,
    checkbox: false,
    checkboxEnabled: true,
    clickToSelect: true,
    showSelectTitle: false,
    sortable: false,
    sortName: undefined,
    order: 'asc',
    // asc, desc
    sorter: undefined,
    visible: true,
    switchable: true,
    switchableLabel: undefined,
    cardVisible: true,
    searchable: true,
    formatter: undefined,
    footerFormatter: undefined,
    footerStyle: undefined,
    detailFormatter: undefined,
    searchFormatter: true,
    searchHighlightFormatter: false,
    escape: undefined,
    events: undefined
  };
  var METHODS = ['getOptions', 'refreshOptions', 'getData', 'getSelections', 'load', 'append', 'prepend', 'remove', 'removeAll', 'insertRow', 'updateRow', 'getRowByUniqueId', 'updateByUniqueId', 'removeByUniqueId', 'updateCell', 'updateCellByUniqueId', 'showRow', 'hideRow', 'getHiddenRows', 'showColumn', 'hideColumn', 'getVisibleColumns', 'getHiddenColumns', 'showAllColumns', 'hideAllColumns', 'mergeCells', 'checkAll', 'uncheckAll', 'checkInvert', 'check', 'uncheck', 'checkBy', 'uncheckBy', 'refresh', 'destroy', 'resetView', 'showLoading', 'hideLoading', 'togglePagination', 'toggleFullscreen', 'toggleView', 'resetSearch', 'filterBy', 'sortBy', 'scrollTo', 'getScrollPosition', 'selectPage', 'prevPage', 'nextPage', 'toggleDetailView', 'expandRow', 'collapseRow', 'expandRowByUniqueId', 'collapseRowByUniqueId', 'expandAllRows', 'collapseAllRows', 'updateColumnTitle', 'updateFormatText'];
  var EVENTS = {
    'all.bs.table': 'onAll',
    'click-row.bs.table': 'onClickRow',
    'dbl-click-row.bs.table': 'onDblClickRow',
    'click-cell.bs.table': 'onClickCell',
    'dbl-click-cell.bs.table': 'onDblClickCell',
    'sort.bs.table': 'onSort',
    'check.bs.table': 'onCheck',
    'uncheck.bs.table': 'onUncheck',
    'check-all.bs.table': 'onCheckAll',
    'uncheck-all.bs.table': 'onUncheckAll',
    'check-some.bs.table': 'onCheckSome',
    'uncheck-some.bs.table': 'onUncheckSome',
    'load-success.bs.table': 'onLoadSuccess',
    'load-error.bs.table': 'onLoadError',
    'column-switch.bs.table': 'onColumnSwitch',
    'column-switch-all.bs.table': 'onColumnSwitchAll',
    'page-change.bs.table': 'onPageChange',
    'search.bs.table': 'onSearch',
    'toggle.bs.table': 'onToggle',
    'pre-body.bs.table': 'onPreBody',
    'post-body.bs.table': 'onPostBody',
    'post-header.bs.table': 'onPostHeader',
    'post-footer.bs.table': 'onPostFooter',
    'expand-row.bs.table': 'onExpandRow',
    'collapse-row.bs.table': 'onCollapseRow',
    'refresh-options.bs.table': 'onRefreshOptions',
    'reset-view.bs.table': 'onResetView',
    'refresh.bs.table': 'onRefresh',
    'scroll-body.bs.table': 'onScrollBody',
    'toggle-pagination.bs.table': 'onTogglePagination',
    'virtual-scroll.bs.table': 'onVirtualScroll'
  };
  Object.assign(DEFAULTS, EN);
  var Constants = {
    VERSION: VERSION,
    THEME: "bootstrap".concat(bootstrapVersion),
    CONSTANTS: CONSTANTS,
    DEFAULTS: DEFAULTS,
    COLUMN_DEFAULTS: COLUMN_DEFAULTS,
    METHODS: METHODS,
    EVENTS: EVENTS,
    LOCALES: {
      en: EN,
      'en-US': EN
    }
  };

  var BLOCK_ROWS = 50;
  var CLUSTER_BLOCKS = 4;
  var VirtualScroll = /*#__PURE__*/function () {
    function VirtualScroll(options) {
      var _this = this;
      _classCallCheck(this, VirtualScroll);
      this.rows = options.rows;
      this.scrollEl = options.scrollEl;
      this.contentEl = options.contentEl;
      this.callback = options.callback;
      this.itemHeight = options.itemHeight;
      this.cache = {};
      this.scrollTop = this.scrollEl.scrollTop;
      this.initDOM(this.rows, options.fixedScroll);
      this.scrollEl.scrollTop = this.scrollTop;
      this.lastCluster = 0;
      var onScroll = function onScroll() {
        if (_this.lastCluster !== (_this.lastCluster = _this.getNum())) {
          _this.initDOM(_this.rows);
          _this.callback(_this.startIndex, _this.endIndex);
        }
      };
      this.scrollEl.addEventListener('scroll', onScroll, false);
      this.destroy = function () {
        _this.contentEl.innerHtml = '';
        _this.scrollEl.removeEventListener('scroll', onScroll, false);
      };
    }
    return _createClass(VirtualScroll, [{
      key: "initDOM",
      value: function initDOM(rows, fixedScroll) {
        if (typeof this.clusterHeight === 'undefined') {
          this.cache.scrollTop = this.scrollEl.scrollTop;
          this.cache.data = this.contentEl.innerHTML = rows[0] + rows[0] + rows[0];
          this.getRowsHeight(rows);
        } else if (this.blockHeight === 0) {
          this.getRowsHeight(rows);
        }
        var data = this.initData(rows, this.getNum(fixedScroll));
        var thisRows = data.rows.join('');
        var dataChanged = this.checkChanges('data', thisRows);
        var topOffsetChanged = this.checkChanges('top', data.topOffset);
        var bottomOffsetChanged = this.checkChanges('bottom', data.bottomOffset);
        var html = [];
        if (dataChanged && topOffsetChanged) {
          if (data.topOffset) {
            html.push(this.getExtra('top', data.topOffset));
          }
          html.push(thisRows);
          if (data.bottomOffset) {
            html.push(this.getExtra('bottom', data.bottomOffset));
          }
          this.startIndex = data.start;
          this.endIndex = data.end;
          this.contentEl.innerHTML = html.join('');
          if (fixedScroll) {
            this.contentEl.scrollTop = this.cache.scrollTop;
          }
        } else if (bottomOffsetChanged) {
          this.contentEl.lastChild.style.height = "".concat(data.bottomOffset, "px");
        }
      }
    }, {
      key: "getRowsHeight",
      value: function getRowsHeight() {
        if (typeof this.itemHeight === 'undefined' || this.itemHeight === 0) {
          var nodes = this.contentEl.children;
          var node = nodes[Math.floor(nodes.length / 2)];
          this.itemHeight = node.offsetHeight;
        }
        this.blockHeight = this.itemHeight * BLOCK_ROWS;
        this.clusterRows = BLOCK_ROWS * CLUSTER_BLOCKS;
        this.clusterHeight = this.blockHeight * CLUSTER_BLOCKS;
      }
    }, {
      key: "getNum",
      value: function getNum(fixedScroll) {
        this.scrollTop = fixedScroll ? this.cache.scrollTop : this.scrollEl.scrollTop;
        return Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0;
      }
    }, {
      key: "initData",
      value: function initData(rows, num) {
        if (rows.length < BLOCK_ROWS) {
          return {
            topOffset: 0,
            bottomOffset: 0,
            rowsAbove: 0,
            rows: rows
          };
        }
        var start = Math.max((this.clusterRows - BLOCK_ROWS) * num, 0);
        var end = start + this.clusterRows;
        var topOffset = Math.max(start * this.itemHeight, 0);
        var bottomOffset = Math.max((rows.length - end) * this.itemHeight, 0);
        var thisRows = [];
        var rowsAbove = start;
        if (topOffset < 1) {
          rowsAbove++;
        }
        for (var i = start; i < end; i++) {
          rows[i] && thisRows.push(rows[i]);
        }
        return {
          start: start,
          end: end,
          topOffset: topOffset,
          bottomOffset: bottomOffset,
          rowsAbove: rowsAbove,
          rows: thisRows
        };
      }
    }, {
      key: "checkChanges",
      value: function checkChanges(type, value) {
        var changed = value !== this.cache[type];
        this.cache[type] = value;
        return changed;
      }
    }, {
      key: "getExtra",
      value: function getExtra(className, height) {
        var tag = document.createElement('tr');
        tag.className = "virtual-scroll-".concat(className);
        if (height) {
          tag.style.height = "".concat(height, "px");
        }
        return tag.outerHTML;
      }
    }]);
  }();

  var BootstrapTable = /*#__PURE__*/function () {
    function BootstrapTable(el, options) {
      _classCallCheck(this, BootstrapTable);
      this.options = options;
      this.$el = $(el);
      this.$el_ = this.$el.clone();
      this.timeoutId_ = 0;
      this.timeoutFooter_ = 0;
    }
    return _createClass(BootstrapTable, [{
      key: "init",
      value: function init() {
        this.initConstants();
        this.initLocale();
        this.initContainer();
        this.initTable();
        this.initHeader();
        this.initData();
        this.initHiddenRows();
        this.initToolbar();
        this.initPagination();
        this.initBody();
        this.initSearchText();
        this.initServer();
      }
    }, {
      key: "initConstants",
      value: function initConstants() {
        var opts = this.options;
        this.constants = Constants.CONSTANTS;
        this.constants.theme = $.fn.bootstrapTable.theme;
        this.constants.dataToggle = this.constants.html.dataToggle || 'data-toggle';

        // init iconsPrefix and icons
        var iconsPrefix = Utils.getIconsPrefix($.fn.bootstrapTable.theme);
        if (typeof opts.icons === 'string') {
          opts.icons = Utils.calculateObjectValue(null, opts.icons);
        }
        opts.iconsPrefix = opts.iconsPrefix || $.fn.bootstrapTable.defaults.iconsPrefix || iconsPrefix;
        opts.icons = Object.assign(Utils.getIcons(opts.iconsPrefix), $.fn.bootstrapTable.defaults.icons, opts.icons);

        // init buttons class
        var buttonsPrefix = opts.buttonsPrefix ? "".concat(opts.buttonsPrefix, "-") : '';
        this.constants.buttonsClass = [opts.buttonsPrefix, buttonsPrefix + opts.buttonsClass, Utils.sprintf("".concat(buttonsPrefix, "%s"), opts.iconSize)].join(' ').trim();
        this.buttons = Utils.calculateObjectValue(this, opts.buttons, [], {});
        if (_typeof(this.buttons) !== 'object') {
          this.buttons = {};
        }
      }
    }, {
      key: "initLocale",
      value: function initLocale() {
        if (this.options.locale) {
          var locales = $.fn.bootstrapTable.locales;
          var parts = this.options.locale.split(/-|_/);
          parts[0] = parts[0].toLowerCase();
          if (parts[1]) {
            parts[1] = parts[1].toUpperCase();
          }
          var localesToExtend = {};
          if (locales[this.options.locale]) {
            localesToExtend = locales[this.options.locale];
          } else if (locales[parts.join('-')]) {
            localesToExtend = locales[parts.join('-')];
          } else if (locales[parts[0]]) {
            localesToExtend = locales[parts[0]];
          }
          this._defaultLocales = this._defaultLocales || {};
          for (var _i = 0, _Object$entries = Object.entries(localesToExtend); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              formatName = _Object$entries$_i[0],
              func = _Object$entries$_i[1];
            var defaultLocale = this._defaultLocales.hasOwnProperty(formatName) ? this._defaultLocales[formatName] : BootstrapTable.DEFAULTS[formatName];
            if (this.options[formatName] !== defaultLocale) {
              continue;
            }
            this.options[formatName] = func;
            this._defaultLocales[formatName] = func;
          }
        }
      }
    }, {
      key: "initContainer",
      value: function initContainer() {
        var topPagination = ['top', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination clearfix"></div>' : '';
        var bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination"></div>' : '';
        var loadingTemplate = Utils.calculateObjectValue(this.options, this.options.loadingTemplate, [this.options.formatLoadingMessage()]);
        this.$container = $("\n      <div class=\"bootstrap-table ".concat(this.constants.theme, "\">\n      <div class=\"fixed-table-toolbar\"></div>\n      ").concat(topPagination, "\n      <div class=\"fixed-table-container\">\n      <div class=\"fixed-table-header\"><table></table></div>\n      <div class=\"fixed-table-body\">\n      <div class=\"fixed-table-loading\">\n      ").concat(loadingTemplate, "\n      </div>\n      </div>\n      <div class=\"fixed-table-footer\"></div>\n      </div>\n      ").concat(bottomPagination, "\n      </div>\n    "));
        this.$container.insertAfter(this.$el);
        this.$tableContainer = this.$container.find('.fixed-table-container');
        this.$tableHeader = this.$container.find('.fixed-table-header');
        this.$tableBody = this.$container.find('.fixed-table-body');
        this.$tableLoading = this.$container.find('.fixed-table-loading');
        this.$tableFooter = this.$el.find('tfoot');
        // checking if custom table-toolbar exists or not
        if (this.options.buttonsToolbar) {
          this.$toolbar = $('body').find(this.options.buttonsToolbar);
        } else {
          this.$toolbar = this.$container.find('.fixed-table-toolbar');
        }
        this.$pagination = this.$container.find('.fixed-table-pagination');
        this.$tableBody.append(this.$el);
        this.$container.after('<div class="clearfix"></div>');
        this.$el.addClass(this.options.classes);
        this.$tableLoading.addClass(this.options.classes);
        if (this.options.height) {
          this.$tableContainer.addClass('fixed-height');
          if (this.options.showFooter) {
            this.$tableContainer.addClass('has-footer');
          }
          if (this.options.classes.split(' ').includes('table-bordered')) {
            this.$tableBody.append('<div class="fixed-table-border"></div>');
            this.$tableBorder = this.$tableBody.find('.fixed-table-border');
            this.$tableLoading.addClass('fixed-table-border');
          }
          this.$tableFooter = this.$container.find('.fixed-table-footer');
        }
      }
    }, {
      key: "initTable",
      value: function initTable() {
        var _this = this;
        var columns = [];
        this.$header = this.$el.find('>thead');
        if (!this.$header.length) {
          this.$header = $("<thead class=\"".concat(this.options.theadClasses, "\"></thead>")).appendTo(this.$el);
        } else if (this.options.theadClasses) {
          this.$header.addClass(this.options.theadClasses);
        }
        this._headerTrClasses = [];
        this._headerTrStyles = [];
        this.$header.find('tr').each(function (i, el) {
          var $tr = $(el);
          var column = [];
          $tr.find('th').each(function (i, el) {
            var $th = $(el);

            // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
            if (typeof $th.data('field') !== 'undefined') {
              $th.data('field', "".concat($th.data('field')));
            }
            var _data = Object.assign({}, $th.data());
            for (var key in _data) {
              if ($.fn.bootstrapTable.columnDefaults.hasOwnProperty(key)) {
                delete _data[key];
              }
            }
            column.push(Utils.extend({}, {
              _data: Utils.getRealDataAttr(_data),
              title: $th.html(),
              class: $th.attr('class'),
              titleTooltip: $th.attr('title'),
              rowspan: $th.attr('rowspan') ? +$th.attr('rowspan') : undefined,
              colspan: $th.attr('colspan') ? +$th.attr('colspan') : undefined
            }, $th.data()));
          });
          columns.push(column);
          if ($tr.attr('class')) {
            _this._headerTrClasses.push($tr.attr('class'));
          }
          if ($tr.attr('style')) {
            _this._headerTrStyles.push($tr.attr('style'));
          }
        });
        if (!Array.isArray(this.options.columns[0])) {
          this.options.columns = [this.options.columns];
        }
        this.options.columns = Utils.extend(true, [], columns, this.options.columns);
        this.columns = [];
        this.fieldsColumnsIndex = [];
        Utils.setFieldIndex(this.options.columns);
        this.options.columns.forEach(function (columns, i) {
          columns.forEach(function (_column, j) {
            var column = Utils.extend({}, BootstrapTable.COLUMN_DEFAULTS, _column, {
              passed: _column
            });
            if (typeof column.fieldIndex !== 'undefined') {
              _this.columns[column.fieldIndex] = column;
              _this.fieldsColumnsIndex[column.field] = column.fieldIndex;
            }
            _this.options.columns[i][j] = column;
          });
        });

        // if options.data is setting, do not process tbody and tfoot data
        if (!this.options.data.length) {
          var htmlData = Utils.trToData(this.columns, this.$el.find('>tbody>tr'));
          if (htmlData.length) {
            this.options.data = htmlData;
            this.fromHtml = true;
          }
        }
        if (!(this.options.pagination && this.options.sidePagination !== 'server')) {
          this.footerData = Utils.trToData(this.columns, this.$el.find('>tfoot>tr'));
        }
        if (this.footerData) {
          this.$el.find('tfoot').html('<tr></tr>');
        }
        if (!this.options.showFooter || this.options.cardView) {
          this.$tableFooter.hide();
        } else {
          this.$tableFooter.show();
        }
      }
    }, {
      key: "initHeader",
      value: function initHeader() {
        var _this2 = this;
        var visibleColumns = {};
        var headerHtml = [];
        this.header = {
          fields: [],
          styles: [],
          classes: [],
          formatters: [],
          detailFormatters: [],
          events: [],
          sorters: [],
          sortNames: [],
          cellStyles: [],
          searchables: []
        };
        Utils.updateFieldGroup(this.options.columns, this.columns);
        this.options.columns.forEach(function (columns, i) {
          var html = [];
          html.push("<tr".concat(Utils.sprintf(' class="%s"', _this2._headerTrClasses[i]), " ").concat(Utils.sprintf(' style="%s"', _this2._headerTrStyles[i]), ">"));
          var detailViewTemplate = '';
          if (i === 0 && Utils.hasDetailViewIcon(_this2.options)) {
            var rowspan = _this2.options.columns.length > 1 ? " rowspan=\"".concat(_this2.options.columns.length, "\"") : '';
            detailViewTemplate = "<th class=\"detail\"".concat(rowspan, ">\n          <div class=\"fht-cell\"></div>\n          </th>");
          }
          if (detailViewTemplate && _this2.options.detailViewAlign !== 'right') {
            html.push(detailViewTemplate);
          }
          columns.forEach(function (column, j) {
            var class_ = Utils.sprintf(' class="%s"', column['class']);
            var unitWidth = column.widthUnit;
            var width = parseFloat(column.width);
            var columnHalign = column.halign ? column.halign : column.align;
            var halign = Utils.sprintf('text-align: %s; ', columnHalign);
            var align = Utils.sprintf('text-align: %s; ', column.align);
            var style = Utils.sprintf('vertical-align: %s; ', column.valign);
            style += Utils.sprintf('width: %s; ', (column.checkbox || column.radio) && !width ? !column.showSelectTitle ? '36px' : undefined : width ? width + unitWidth : undefined);
            if (typeof column.fieldIndex === 'undefined' && !column.visible) {
              return;
            }
            var headerStyle = Utils.calculateObjectValue(null, _this2.options.headerStyle, [column]);
            var csses = [];
            var data_ = [];
            var classes = '';
            if (headerStyle && headerStyle.css) {
              for (var _i2 = 0, _Object$entries2 = Object.entries(headerStyle.css); _i2 < _Object$entries2.length; _i2++) {
                var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                  key = _Object$entries2$_i[0],
                  value = _Object$entries2$_i[1];
                csses.push("".concat(key, ": ").concat(value));
              }
            }
            if (headerStyle && headerStyle.classes) {
              classes = Utils.sprintf(' class="%s"', column['class'] ? [column['class'], headerStyle.classes].join(' ') : headerStyle.classes);
            }
            if (typeof column.fieldIndex !== 'undefined') {
              _this2.header.fields[column.fieldIndex] = column.field;
              _this2.header.styles[column.fieldIndex] = align + style;
              _this2.header.classes[column.fieldIndex] = class_;
              _this2.header.formatters[column.fieldIndex] = column.formatter;
              _this2.header.detailFormatters[column.fieldIndex] = column.detailFormatter;
              _this2.header.events[column.fieldIndex] = column.events;
              _this2.header.sorters[column.fieldIndex] = column.sorter;
              _this2.header.sortNames[column.fieldIndex] = column.sortName;
              _this2.header.cellStyles[column.fieldIndex] = column.cellStyle;
              _this2.header.searchables[column.fieldIndex] = column.searchable;
              if (!column.visible) {
                return;
              }
              if (_this2.options.cardView && !column.cardVisible) {
                return;
              }
              visibleColumns[column.field] = column;
            }
            if (Object.keys(column._data || {}).length > 0) {
              for (var _i3 = 0, _Object$entries3 = Object.entries(column._data); _i3 < _Object$entries3.length; _i3++) {
                var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
                  k = _Object$entries3$_i[0],
                  v = _Object$entries3$_i[1];
                data_.push("data-".concat(k, "='").concat(_typeof(v) === 'object' ? JSON.stringify(v) : v, "'"));
              }
            }
            html.push("<th".concat(Utils.sprintf(' title="%s"', column.titleTooltip)), column.checkbox || column.radio ? Utils.sprintf(' class="bs-checkbox %s"', column['class'] || '') : classes || class_, Utils.sprintf(' style="%s"', halign + style + csses.join('; ') || undefined), Utils.sprintf(' rowspan="%s"', column.rowspan), Utils.sprintf(' colspan="%s"', column.colspan), Utils.sprintf(' data-field="%s"', column.field),
            // If `column` is not the first element of `this.options.columns[0]`, then className 'data-not-first-th' should be added.
            j === 0 && i > 0 ? ' data-not-first-th' : '', data_.length > 0 ? data_.join(' ') : '', '>');
            html.push(Utils.sprintf('<div class="th-inner %s">', _this2.options.sortable && column.sortable ? "sortable".concat(columnHalign === 'center' ? ' sortable-center' : '', " both") : ''));
            var text = _this2.options.escape && _this2.options.escapeTitle ? Utils.escapeHTML(column.title) : column.title;
            var title = text;
            if (column.checkbox) {
              text = '';
              if (!_this2.options.singleSelect && _this2.options.checkboxHeader) {
                text = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>';
              }
              _this2.header.stateField = column.field;
            }
            if (column.radio) {
              text = '';
              _this2.header.stateField = column.field;
            }
            if (!text && column.showSelectTitle) {
              text += title;
            }
            html.push(text);
            html.push('</div>');
            html.push('<div class="fht-cell"></div>');
            html.push('</div>');
            html.push('</th>');
          });
          if (detailViewTemplate && _this2.options.detailViewAlign === 'right') {
            html.push(detailViewTemplate);
          }
          html.push('</tr>');
          if (html.length > 3) {
            headerHtml.push(html.join(''));
          }
        });
        this.$header.html(headerHtml.join(''));
        this.$header.find('th[data-field]').each(function (i, el) {
          $(el).data(visibleColumns[$(el).data('field')]);
        });
        this.$container.off('click', '.th-inner').on('click', '.th-inner', function (e) {
          var $this = $(e.currentTarget);
          if (_this2.options.detailView && !$this.parent().hasClass('bs-checkbox')) {
            if ($this.closest('.bootstrap-table')[0] !== _this2.$container[0]) {
              return false;
            }
          }
          if (_this2.options.sortable && $this.parent().data().sortable) {
            _this2.onSort(e);
          }
        });
        var resizeEvent = Utils.getEventName('resize.bootstrap-table', this.$el.attr('id'));
        $(window).off(resizeEvent);
        if (!this.options.showHeader || this.options.cardView) {
          this.$header.hide();
          this.$tableHeader.hide();
          this.$tableLoading.css('top', 0);
        } else {
          this.$header.show();
          this.$tableHeader.show();
          this.$tableLoading.css('top', this.$header.outerHeight() + 1);
          // Assign the correct sortable arrow
          this.getCaret();
          $(window).on(resizeEvent, function () {
            return _this2.resetView();
          });
        }
        this.$selectAll = this.$header.find('[name="btSelectAll"]');
        this.$selectAll.off('click').on('click', function (e) {
          e.stopPropagation();
          var checked = $(e.currentTarget).prop('checked');
          _this2[checked ? 'checkAll' : 'uncheckAll']();
          _this2.updateSelected();
        });
      }
    }, {
      key: "initData",
      value: function initData(data, type) {
        if (type === 'append') {
          this.options.data = this.options.data.concat(data);
        } else if (type === 'prepend') {
          this.options.data = [].concat(data).concat(this.options.data);
        } else {
          data = data || Utils.deepCopy(this.options.data);
          this.options.data = Array.isArray(data) ? data : data[this.options.dataField];
        }
        this.data = _toConsumableArray(this.options.data);
        if (this.options.sortReset) {
          this.unsortedData = _toConsumableArray(this.data);
        }
        if (this.options.sidePagination === 'server') {
          return;
        }
        this.initSort();
      }
    }, {
      key: "initSort",
      value: function initSort() {
        var _this3 = this;
        var name = this.options.sortName;
        var order = this.options.sortOrder === 'desc' ? -1 : 1;
        var index = this.header.fields.indexOf(this.options.sortName);
        var timeoutId = 0;
        if (index !== -1) {
          if (this.options.sortStable) {
            this.data.forEach(function (row, i) {
              if (!row.hasOwnProperty('_position')) {
                row._position = i;
              }
            });
          }
          if (this.options.customSort) {
            Utils.calculateObjectValue(this.options, this.options.customSort, [this.options.sortName, this.options.sortOrder, this.data]);
          } else {
            this.data.sort(function (a, b) {
              if (_this3.header.sortNames[index]) {
                name = _this3.header.sortNames[index];
              }
              var aa = Utils.getItemField(a, name, _this3.options.escape);
              var bb = Utils.getItemField(b, name, _this3.options.escape);
              var value = Utils.calculateObjectValue(_this3.header, _this3.header.sorters[index], [aa, bb, a, b]);
              if (value !== undefined) {
                if (_this3.options.sortStable && value === 0) {
                  return order * (a._position - b._position);
                }
                return order * value;
              }
              return Utils.sort(aa, bb, order, _this3.options, a._position, b._position);
            });
          }
          if (this.options.sortClass !== undefined) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
              _this3.$el.removeClass(_this3.options.sortClass);
              var index = _this3.$header.find("[data-field=\"".concat(_this3.options.sortName, "\"]")).index();
              _this3.$el.find("tr td:nth-child(".concat(index + 1, ")")).addClass(_this3.options.sortClass);
            }, 250);
          }
        } else if (this.options.sortReset) {
          this.data = _toConsumableArray(this.unsortedData);
        }
      }
    }, {
      key: "sortBy",
      value: function sortBy(params) {
        this.options.sortName = params.field;
        this.options.sortOrder = params.hasOwnProperty('sortOrder') ? params.sortOrder : 'asc';
        this._sort();
      }
    }, {
      key: "onSort",
      value: function onSort(_ref) {
        var type = _ref.type,
          currentTarget = _ref.currentTarget;
        var $this = type === 'keypress' ? $(currentTarget) : $(currentTarget).parent();
        var $this_ = this.$header.find('th').eq($this.index());
        this.$header.add(this.$header_).find('span.order').remove();
        if (this.options.sortName === $this.data('field')) {
          var currentSortOrder = this.options.sortOrder;
          var initialSortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].sortOrder || this.columns[this.fieldsColumnsIndex[$this.data('field')]].order;
          if (currentSortOrder === undefined) {
            this.options.sortOrder = 'asc';
          } else if (currentSortOrder === 'asc') {
            this.options.sortOrder = this.options.sortReset ? initialSortOrder === 'asc' ? 'desc' : undefined : 'desc';
          } else if (this.options.sortOrder === 'desc') {
            this.options.sortOrder = this.options.sortReset ? initialSortOrder === 'desc' ? 'asc' : undefined : 'asc';
          }
          if (this.options.sortOrder === undefined) {
            this.options.sortName = undefined;
          }
        } else {
          this.options.sortName = $this.data('field');
          if (this.options.rememberOrder) {
            this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc';
          } else {
            this.options.sortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].sortOrder || this.columns[this.fieldsColumnsIndex[$this.data('field')]].order;
          }
        }
        $this.add($this_).data('order', this.options.sortOrder);

        // Assign the correct sortable arrow
        this.getCaret();
        this._sort();
      }
    }, {
      key: "_sort",
      value: function _sort() {
        if (this.options.sidePagination === 'server' && this.options.serverSort) {
          this.options.pageNumber = 1;
          this.trigger('sort', this.options.sortName, this.options.sortOrder);
          this.initServer(this.options.silentSort);
          return;
        }
        if (this.options.pagination && this.options.sortResetPage) {
          this.options.pageNumber = 1;
          this.initPagination();
        }
        this.trigger('sort', this.options.sortName, this.options.sortOrder);
        this.initSort();
        this.initBody();
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        var _this4 = this;
        var opts = this.options;
        var html = [];
        var timeoutId = 0;
        var $keepOpen;
        var switchableCount = 0;
        if (this.$toolbar.find('.bs-bars').children().length) {
          $('body').append($(opts.toolbar));
        }
        this.$toolbar.html('');
        if (typeof opts.toolbar === 'string' || _typeof(opts.toolbar) === 'object') {
          $(Utils.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, opts.toolbarAlign)).appendTo(this.$toolbar).append($(opts.toolbar));
        }

        // showColumns, showToggle, showRefresh
        html = ["<div class=\"".concat(['columns', "columns-".concat(opts.buttonsAlign), this.constants.classes.buttonsGroup, "".concat(this.constants.classes.pull, "-").concat(opts.buttonsAlign)].join(' '), "\">")];
        if (typeof opts.buttonsOrder === 'string') {
          opts.buttonsOrder = opts.buttonsOrder.replace(/\[|\]| |'/g, '').split(',');
        }
        this.buttons = Object.assign(this.buttons, {
          paginationSwitch: {
            text: opts.pagination ? opts.formatPaginationSwitchUp() : opts.formatPaginationSwitchDown(),
            icon: opts.pagination ? opts.icons.paginationSwitchDown : opts.icons.paginationSwitchUp,
            render: false,
            event: this.togglePagination,
            attributes: {
              'aria-label': opts.formatPaginationSwitch(),
              title: opts.formatPaginationSwitch()
            }
          },
          refresh: {
            text: opts.formatRefresh(),
            icon: opts.icons.refresh,
            render: false,
            event: this.refresh,
            attributes: {
              'aria-label': opts.formatRefresh(),
              title: opts.formatRefresh()
            }
          },
          toggle: {
            text: opts.formatToggleOn(),
            icon: opts.icons.toggleOff,
            render: false,
            event: this.toggleView,
            attributes: {
              'aria-label': opts.formatToggleOn(),
              title: opts.formatToggleOn()
            }
          },
          fullscreen: {
            text: opts.formatFullscreen(),
            icon: opts.icons.fullscreen,
            render: false,
            event: this.toggleFullscreen,
            attributes: {
              'aria-label': opts.formatFullscreen(),
              title: opts.formatFullscreen()
            }
          },
          columns: {
            render: false,
            html: function html() {
              var html = [];
              html.push("<div class=\"keep-open ".concat(_this4.constants.classes.buttonsDropdown, "\">\n            <button class=\"").concat(_this4.constants.buttonsClass, " dropdown-toggle\" type=\"button\" ").concat(_this4.constants.dataToggle, "=\"dropdown\"\n            aria-label=\"").concat(opts.formatColumns(), "\" title=\"").concat(opts.formatColumns(), "\">\n            ").concat(opts.showButtonIcons ? Utils.sprintf(_this4.constants.html.icon, opts.iconsPrefix, opts.icons.columns) : '', "\n            ").concat(opts.showButtonText ? opts.formatColumns() : '', "\n            ").concat(_this4.constants.html.dropdownCaret, "\n            </button>\n            ").concat(_this4.constants.html.toolbarDropdown[0]));
              if (opts.showColumnsSearch) {
                html.push(Utils.sprintf(_this4.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">', _this4.constants.classes.input, opts.formatSearch())));
                html.push(_this4.constants.html.toolbarDropdownSeparator);
              }
              if (opts.showColumnsToggleAll) {
                var allFieldsVisible = _this4.getVisibleColumns().length === _this4.columns.filter(function (column) {
                  return !_this4.isSelectionColumn(column);
                }).length;
                html.push(Utils.sprintf(_this4.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>', allFieldsVisible ? 'checked="checked"' : '', opts.formatColumnsToggleAll())));
                html.push(_this4.constants.html.toolbarDropdownSeparator);
              }
              var visibleColumns = 0;
              _this4.columns.forEach(function (column) {
                if (column.visible) {
                  visibleColumns++;
                }
              });
              _this4.columns.forEach(function (column, i) {
                if (_this4.isSelectionColumn(column)) {
                  return;
                }
                if (opts.cardView && !column.cardVisible) {
                  return;
                }
                var checked = column.visible ? ' checked="checked"' : '';
                var disabled = visibleColumns <= opts.minimumCountColumns && checked ? ' disabled="disabled"' : '';
                if (column.switchable) {
                  html.push(Utils.sprintf(_this4.constants.html.toolbarDropdownItem, Utils.sprintf('<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>', column.field, i, checked, disabled, column.switchableLabel || column.title)));
                  switchableCount++;
                }
              });
              html.push(_this4.constants.html.toolbarDropdown[1], '</div>');
              return html.join('');
            }
          }
        });
        var buttonsHtml = {};
        for (var _i4 = 0, _Object$entries4 = Object.entries(this.buttons); _i4 < _Object$entries4.length; _i4++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
            buttonName = _Object$entries4$_i[0],
            buttonConfig = _Object$entries4$_i[1];
          var buttonHtml = void 0;
          if (buttonConfig.hasOwnProperty('html')) {
            if (typeof buttonConfig.html === 'function') {
              buttonHtml = buttonConfig.html();
            } else if (typeof buttonConfig.html === 'string') {
              buttonHtml = buttonConfig.html;
            }
          } else {
            var buttonClass = this.constants.buttonsClass;
            if (buttonConfig.hasOwnProperty('attributes') && buttonConfig.attributes.class) {
              buttonClass += " ".concat(buttonConfig.attributes.class);
            }
            buttonHtml = "<button class=\"".concat(buttonClass, "\" type=\"button\" name=\"").concat(buttonName, "\"");
            if (buttonConfig.hasOwnProperty('attributes')) {
              for (var _i5 = 0, _Object$entries5 = Object.entries(buttonConfig.attributes); _i5 < _Object$entries5.length; _i5++) {
                var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i5], 2),
                  attributeName = _Object$entries5$_i[0],
                  value = _Object$entries5$_i[1];
                if (attributeName === 'class') {
                  continue;
                }
                buttonHtml += " ".concat(attributeName, "=\"").concat(value, "\"");
              }
            }
            buttonHtml += '>';
            if (opts.showButtonIcons && buttonConfig.hasOwnProperty('icon')) {
              buttonHtml += "".concat(Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, buttonConfig.icon), " ");
            }
            if (opts.showButtonText && buttonConfig.hasOwnProperty('text')) {
              buttonHtml += buttonConfig.text;
            }
            buttonHtml += '</button>';
          }
          buttonsHtml[buttonName] = buttonHtml;
          var optionName = "show".concat(buttonName.charAt(0).toUpperCase()).concat(buttonName.substring(1));
          var showOption = opts[optionName];
          if ((!buttonConfig.hasOwnProperty('render') || buttonConfig.hasOwnProperty('render') && buttonConfig.render) && (showOption === undefined || showOption === true)) {
            opts[optionName] = true;
          }
          if (!opts.buttonsOrder.includes(buttonName)) {
            opts.buttonsOrder.push(buttonName);
          }
        }

        // Adding the button html to the final toolbar html when the showOption is true
        var _iterator = _createForOfIteratorHelper(opts.buttonsOrder),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var button = _step.value;
            var _showOption = opts["show".concat(button.charAt(0).toUpperCase()).concat(button.substring(1))];
            if (_showOption) {
              html.push(buttonsHtml[button]);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        html.push('</div>');

        // Fix #188: this.showToolbar is for extensions
        if (this.showToolbar || html.length > 2) {
          this.$toolbar.append(html.join(''));
        }
        var _loop = function _loop() {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i6], 2),
            buttonName = _Object$entries6$_i[0],
            buttonConfig = _Object$entries6$_i[1];
          if (buttonConfig.hasOwnProperty('event')) {
            if (typeof buttonConfig.event === 'function' || typeof buttonConfig.event === 'string') {
              var event = typeof buttonConfig.event === 'string' ? window[buttonConfig.event] : buttonConfig.event;
              _this4.$toolbar.find("button[name=\"".concat(buttonName, "\"]")).off('click').on('click', function () {
                return event.call(_this4);
              });
              return 1; // continue
            }
            var _loop2 = function _loop2() {
              var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i7], 2),
                eventType = _Object$entries7$_i[0],
                eventFunction = _Object$entries7$_i[1];
              var event = typeof eventFunction === 'string' ? window[eventFunction] : eventFunction;
              _this4.$toolbar.find("button[name=\"".concat(buttonName, "\"]")).off(eventType).on(eventType, function () {
                return event.call(_this4);
              });
            };
            for (var _i7 = 0, _Object$entries7 = Object.entries(buttonConfig.event); _i7 < _Object$entries7.length; _i7++) {
              _loop2();
            }
          }
        };
        for (var _i6 = 0, _Object$entries6 = Object.entries(this.buttons); _i6 < _Object$entries6.length; _i6++) {
          if (_loop()) continue;
        }
        if (opts.showColumns) {
          $keepOpen = this.$toolbar.find('.keep-open');
          var $checkboxes = $keepOpen.find('input[type="checkbox"]:not(".toggle-all")');
          var $toggleAll = $keepOpen.find('input[type="checkbox"].toggle-all');
          if (switchableCount <= opts.minimumCountColumns) {
            $keepOpen.find('input').prop('disabled', true);
          }
          $keepOpen.find('li, label').off('click').on('click', function (e) {
            e.stopImmediatePropagation();
          });
          $checkboxes.off('click').on('click', function (_ref2) {
            var currentTarget = _ref2.currentTarget;
            var $this = $(currentTarget);
            _this4._toggleColumn($this.val(), $this.prop('checked'), false);
            _this4.trigger('column-switch', $this.data('field'), $this.prop('checked'));
            $toggleAll.prop('checked', $checkboxes.filter(':checked').length === _this4.columns.filter(function (column) {
              return !_this4.isSelectionColumn(column);
            }).length);
          });
          $toggleAll.off('click').on('click', function (_ref3) {
            var currentTarget = _ref3.currentTarget;
            _this4._toggleAllColumns($(currentTarget).prop('checked'));
            _this4.trigger('column-switch-all', $(currentTarget).prop('checked'));
          });
          if (opts.showColumnsSearch) {
            var $columnsSearch = $keepOpen.find('[name="columnsSearch"]');
            var $listItems = $keepOpen.find('.dropdown-item-marker');
            $columnsSearch.on('keyup paste change', function (_ref4) {
              var currentTarget = _ref4.currentTarget;
              var $this = $(currentTarget);
              var searchValue = $this.val().toLowerCase();
              $listItems.show();
              $checkboxes.each(function (i, el) {
                var $checkbox = $(el);
                var $listItem = $checkbox.parents('.dropdown-item-marker');
                var text = $listItem.text().toLowerCase();
                if (!text.includes(searchValue)) {
                  $listItem.hide();
                }
              });
            });
          }
        }
        var handleInputEvent = function handleInputEvent($searchInput) {
          var eventTriggers = $searchInput.is('select') ? 'change' : 'keyup drop blur mouseup';
          $searchInput.off(eventTriggers).on(eventTriggers, function (event) {
            if (opts.searchOnEnterKey && event.keyCode !== 13) {
              return;
            }
            if ([37, 38, 39, 40].includes(event.keyCode)) {
              return;
            }
            clearTimeout(timeoutId); // doesn't matter if it's 0
            timeoutId = setTimeout(function () {
              _this4.onSearch({
                currentTarget: event.currentTarget
              });
            }, opts.searchTimeOut);
          });
        };

        // Fix #4516: this.showSearchClearButton is for extensions
        if ((opts.search || this.showSearchClearButton) && typeof opts.searchSelector !== 'string') {
          html = [];
          var showSearchButton = Utils.sprintf(this.constants.html.searchButton, this.constants.buttonsClass, opts.formatSearch(), opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.search) : '', opts.showButtonText ? opts.formatSearch() : '');
          var showSearchClearButton = Utils.sprintf(this.constants.html.searchClearButton, this.constants.buttonsClass, opts.formatClearSearch(), opts.showButtonIcons ? Utils.sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.clearSearch) : '', opts.showButtonText ? opts.formatClearSearch() : '');
          var searchInputHtml = "<input class=\"".concat(this.constants.classes.input, "\n        ").concat(Utils.sprintf(' %s%s', this.constants.classes.inputPrefix, opts.iconSize), "\n        search-input\" type=\"search\" aria-label=\"").concat(opts.formatSearch(), "\" placeholder=\"").concat(opts.formatSearch(), "\" autocomplete=\"off\">");
          var searchInputFinalHtml = searchInputHtml;
          if (opts.showSearchButton || opts.showSearchClearButton) {
            var _buttonsHtml = (opts.showSearchButton ? showSearchButton : '') + (opts.showSearchClearButton ? showSearchClearButton : '');
            searchInputFinalHtml = opts.search ? Utils.sprintf(this.constants.html.inputGroup, searchInputHtml, _buttonsHtml) : _buttonsHtml;
          }
          html.push(Utils.sprintf("\n        <div class=\"".concat(this.constants.classes.pull, "-").concat(opts.searchAlign, " search ").concat(this.constants.classes.inputGroup, "\">\n          %s\n        </div>\n      "), searchInputFinalHtml));
          this.$toolbar.append(html.join(''));
          var $searchInput = Utils.getSearchInput(this);
          if (opts.showSearchButton) {
            this.$toolbar.find('.search button[name=search]').off('click').on('click', function () {
              clearTimeout(timeoutId); // doesn't matter if it's 0
              timeoutId = setTimeout(function () {
                _this4.onSearch({
                  currentTarget: $searchInput
                });
              }, opts.searchTimeOut);
            });
            if (opts.searchOnEnterKey) {
              handleInputEvent($searchInput);
            }
          } else {
            handleInputEvent($searchInput);
          }
          if (opts.showSearchClearButton) {
            this.$toolbar.find('.search button[name=clearSearch]').click(function () {
              _this4.resetSearch();
            });
          }
        } else if (typeof opts.searchSelector === 'string') {
          handleInputEvent(Utils.getSearchInput(this));
        }
      }
    }, {
      key: "onSearch",
      value: function onSearch() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          currentTarget = _ref5.currentTarget,
          firedByInitSearchText = _ref5.firedByInitSearchText;
        var overwriteSearchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        if (currentTarget !== undefined && $(currentTarget).length && overwriteSearchText) {
          var text = $(currentTarget).val().trim();
          if (this.options.trimOnSearch && $(currentTarget).val() !== text) {
            $(currentTarget).val(text);
          }
          if (this.searchText === text) {
            return;
          }
          var $searchInput = Utils.getSearchInput(this);
          var $currentTarget = currentTarget instanceof jQuery ? currentTarget : $(currentTarget);
          if ($currentTarget.is($searchInput) || $currentTarget.hasClass('search-input')) {
            this.searchText = text;
            this.options.searchText = text;
          }
        }
        if (!firedByInitSearchText) {
          this.options.pageNumber = 1;
        }
        this.initSearch();
        if (firedByInitSearchText) {
          if (this.options.sidePagination === 'client') {
            this.updatePagination();
          }
        } else {
          this.updatePagination();
        }
        this.trigger('search', this.searchText);
      }
    }, {
      key: "initSearch",
      value: function initSearch() {
        var _this5 = this;
        this.filterOptions = this.filterOptions || this.options.filterOptions;
        if (this.options.sidePagination !== 'server') {
          if (this.options.customSearch) {
            this.data = Utils.calculateObjectValue(this.options, this.options.customSearch, [this.options.data, this.searchText, this.filterColumns]);
            if (this.options.sortReset) {
              this.unsortedData = _toConsumableArray(this.data);
            }
            this.initSort();
            return;
          }
          var rawSearchText = this.searchText && (this.fromHtml ? Utils.escapeHTML(this.searchText) : this.searchText);
          var searchText = rawSearchText ? rawSearchText.toLowerCase() : '';
          var f = Utils.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
          if (this.options.searchAccentNeutralise) {
            searchText = Utils.normalizeAccent(searchText);
          }

          // Check filter
          if (typeof this.filterOptions.filterAlgorithm === 'function') {
            this.data = this.options.data.filter(function (item) {
              return _this5.filterOptions.filterAlgorithm.apply(null, [item, f]);
            });
          } else if (typeof this.filterOptions.filterAlgorithm === 'string') {
            this.data = f ? this.options.data.filter(function (item) {
              var filterAlgorithm = _this5.filterOptions.filterAlgorithm;
              if (filterAlgorithm === 'and') {
                for (var key in f) {
                  if (Array.isArray(f[key]) && !f[key].includes(item[key]) || !Array.isArray(f[key]) && item[key] !== f[key]) {
                    return false;
                  }
                }
              } else if (filterAlgorithm === 'or') {
                var match = false;
                for (var _key in f) {
                  if (Array.isArray(f[_key]) && f[_key].includes(item[_key]) || !Array.isArray(f[_key]) && item[_key] === f[_key]) {
                    match = true;
                  }
                }
                return match;
              }
              return true;
            }) : _toConsumableArray(this.options.data);
          }
          var visibleFields = this.getVisibleFields();
          this.data = searchText ? this.data.filter(function (item, i) {
            for (var j = 0; j < _this5.header.fields.length; j++) {
              if (!_this5.header.searchables[j] || _this5.options.visibleSearch && visibleFields.indexOf(_this5.header.fields[j]) === -1) {
                continue;
              }
              var key = Utils.isNumeric(_this5.header.fields[j]) ? parseInt(_this5.header.fields[j], 10) : _this5.header.fields[j];
              var column = _this5.columns[_this5.fieldsColumnsIndex[key]];
              var value = void 0;
              if (typeof key === 'string' && !item.hasOwnProperty(key)) {
                value = item;
                var props = key.split('.');
                for (var _i8 = 0; _i8 < props.length; _i8++) {
                  if (value[props[_i8]] !== null) {
                    value = value[props[_i8]];
                  } else {
                    value = null;
                    break;
                  }
                }
              } else {
                value = item[key];
              }
              if (_this5.options.searchAccentNeutralise) {
                value = Utils.normalizeAccent(value);
              }

              // Fix #142: respect searchFormatter boolean
              if (column && column.searchFormatter) {
                value = Utils.calculateObjectValue(column, _this5.header.formatters[j], [value, item, i, column.field], value);
              }
              if (typeof value === 'string' || typeof value === 'number') {
                if (_this5.options.strictSearch && "".concat(value).toLowerCase() === searchText || _this5.options.regexSearch && Utils.regexCompare(value, rawSearchText)) {
                  return true;
                }
                var largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(-?\d+)?|(-?\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm;
                var matches = largerSmallerEqualsRegex.exec(_this5.searchText);
                var comparisonCheck = false;
                if (matches) {
                  var operator = matches[1] || "".concat(matches[5], "l");
                  var comparisonValue = matches[2] || matches[3];
                  var int = parseInt(value, 10);
                  var comparisonInt = parseInt(comparisonValue, 10);
                  switch (operator) {
                    case '>':
                    case '<l':
                      comparisonCheck = int > comparisonInt;
                      break;
                    case '<':
                    case '>l':
                      comparisonCheck = int < comparisonInt;
                      break;
                    case '<=':
                    case '=<':
                    case '>=l':
                    case '=>l':
                      comparisonCheck = int <= comparisonInt;
                      break;
                    case '>=':
                    case '=>':
                    case '<=l':
                    case '=<l':
                      comparisonCheck = int >= comparisonInt;
                      break;
                  }
                }
                if (comparisonCheck || "".concat(value).toLowerCase().includes(searchText)) {
                  return true;
                }
              }
            }
            return false;
          }) : this.data;
          if (this.options.sortReset) {
            this.unsortedData = _toConsumableArray(this.data);
          }
          this.initSort();
        }
      }
    }, {
      key: "initPagination",
      value: function initPagination() {
        var _this6 = this;
        var opts = this.options;
        if (!opts.pagination) {
          this.$pagination.hide();
          return;
        }
        this.$pagination.show();
        var html = [];
        var allSelected = false;
        var i;
        var from;
        var to;
        var $pageList;
        var $pre;
        var $next;
        var $number;
        var data = this.getData({
          includeHiddenRows: false
        });
        var pageList = opts.pageList;
        if (typeof pageList === 'string') {
          pageList = pageList.replace(/\[|\]| /g, '').toLowerCase().split(',');
        }
        pageList = pageList.map(function (value) {
          if (typeof value === 'string') {
            return value.toLowerCase() === opts.formatAllRows().toLowerCase() || ['all', 'unlimited'].includes(value.toLowerCase()) ? opts.formatAllRows() : +value;
          }
          return value;
        });
        this.paginationParts = opts.paginationParts;
        if (typeof this.paginationParts === 'string') {
          this.paginationParts = this.paginationParts.replace(/\[|\]| |'/g, '').split(',');
        }
        if (opts.sidePagination !== 'server') {
          opts.totalRows = data.length;
        }
        this.totalPages = 0;
        if (opts.totalRows) {
          if (opts.pageSize === opts.formatAllRows()) {
            opts.pageSize = opts.totalRows;
            allSelected = true;
          }
          this.totalPages = ~~((opts.totalRows - 1) / opts.pageSize) + 1;
          opts.totalPages = this.totalPages;
        }
        if (this.totalPages > 0 && opts.pageNumber > this.totalPages) {
          opts.pageNumber = this.totalPages;
        }
        this.pageFrom = (opts.pageNumber - 1) * opts.pageSize + 1;
        this.pageTo = opts.pageNumber * opts.pageSize;
        if (this.pageTo > opts.totalRows) {
          this.pageTo = opts.totalRows;
        }
        if (this.options.pagination && this.options.sidePagination !== 'server') {
          this.options.totalNotFiltered = this.options.data.length;
        }
        if (!this.options.showExtendedPagination) {
          this.options.totalNotFiltered = undefined;
        }
        if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
          html.push("<div class=\"".concat(this.constants.classes.pull, "-").concat(opts.paginationDetailHAlign, " pagination-detail\">"));
        }
        if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort')) {
          var totalRows = this.options.totalRows + (this.options.sidePagination === 'client' && this.options.paginationLoadMore && !this._paginationLoaded ? ' +' : '');
          var paginationInfo = this.paginationParts.includes('pageInfoShort') ? opts.formatDetailPagination(totalRows) : opts.formatShowingRows(this.pageFrom, this.pageTo, totalRows, opts.totalNotFiltered);
          html.push("<span class=\"pagination-info\">\n      ".concat(paginationInfo, "\n      </span>"));
        }
        if (this.paginationParts.includes('pageSize')) {
          html.push('<div class="page-list">');
          var pageNumber = ["<div class=\"".concat(this.constants.classes.paginationDropdown, "\">\n        <button class=\"").concat(this.constants.buttonsClass, " dropdown-toggle\" type=\"button\" ").concat(this.constants.dataToggle, "=\"dropdown\">\n        <span class=\"page-size\">\n        ").concat(allSelected ? opts.formatAllRows() : opts.pageSize, "\n        </span>\n        ").concat(this.constants.html.dropdownCaret, "\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];
          pageList.forEach(function (page, i) {
            if (!opts.smartDisplay || i === 0 || pageList[i - 1] < opts.totalRows || page === opts.formatAllRows()) {
              var active;
              if (allSelected) {
                active = page === opts.formatAllRows() ? _this6.constants.classes.dropdownActive : '';
              } else {
                active = page === opts.pageSize ? _this6.constants.classes.dropdownActive : '';
              }
              pageNumber.push(Utils.sprintf(_this6.constants.html.pageDropdownItem, active, page));
            }
          });
          pageNumber.push("".concat(this.constants.html.pageDropdown[1], "</div>"));
          html.push(opts.formatRecordsPerPage(pageNumber.join('')));
        }
        if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
          html.push('</div></div>');
        }
        if (this.paginationParts.includes('pageList')) {
          html.push("<div class=\"".concat(this.constants.classes.pull, "-").concat(opts.paginationHAlign, " pagination\">"), Utils.sprintf(this.constants.html.pagination[0], Utils.sprintf(' pagination-%s', opts.iconSize)), Utils.sprintf(this.constants.html.paginationItem, ' page-pre', opts.formatSRPaginationPreText(), opts.paginationPreText));
          if (this.totalPages < opts.paginationSuccessivelySize) {
            from = 1;
            to = this.totalPages;
          } else {
            from = opts.pageNumber - opts.paginationPagesBySide;
            to = from + opts.paginationPagesBySide * 2;
          }
          if (opts.pageNumber < opts.paginationSuccessivelySize - 1) {
            to = opts.paginationSuccessivelySize;
          }
          if (opts.paginationSuccessivelySize > this.totalPages - from) {
            from = from - (opts.paginationSuccessivelySize - (this.totalPages - from)) + 1;
          }
          if (from < 1) {
            from = 1;
          }
          if (to > this.totalPages) {
            to = this.totalPages;
          }
          var middleSize = Math.round(opts.paginationPagesBySide / 2);
          var pageItem = function pageItem(i) {
            var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return Utils.sprintf(_this6.constants.html.paginationItem, classes + (i === opts.pageNumber ? " ".concat(_this6.constants.classes.paginationActive) : ''), opts.formatSRPaginationPageText(i), i);
          };
          if (from > 1) {
            var max = opts.paginationPagesBySide;
            if (max >= from) max = from - 1;
            for (i = 1; i <= max; i++) {
              html.push(pageItem(i));
            }
            if (from - 1 === max + 1) {
              i = from - 1;
              html.push(pageItem(i));
            } else if (from - 1 > max) {
              if (from - opts.paginationPagesBySide * 2 > opts.paginationPagesBySide && opts.paginationUseIntermediate) {
                i = Math.round((from - middleSize) / 2 + middleSize);
                html.push(pageItem(i, ' page-intermediate'));
              } else {
                html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-first-separator disabled', '', '...'));
              }
            }
          }
          for (i = from; i <= to; i++) {
            html.push(pageItem(i));
          }
          if (this.totalPages > to) {
            var min = this.totalPages - (opts.paginationPagesBySide - 1);
            if (to >= min) min = to + 1;
            if (to + 1 === min - 1) {
              i = to + 1;
              html.push(pageItem(i));
            } else if (min > to + 1) {
              if (this.totalPages - to > opts.paginationPagesBySide * 2 && opts.paginationUseIntermediate) {
                i = Math.round((this.totalPages - middleSize - to) / 2 + to);
                html.push(pageItem(i, ' page-intermediate'));
              } else {
                html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-last-separator disabled', '', '...'));
              }
            }
            for (i = min; i <= this.totalPages; i++) {
              html.push(pageItem(i));
            }
          }
          html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-next', opts.formatSRPaginationNextText(), opts.paginationNextText));
          html.push(this.constants.html.pagination[1], '</div>');
        }
        this.$pagination.html(html.join(''));
        var dropupClass = ['bottom', 'both'].includes(opts.paginationVAlign) ? " ".concat(this.constants.classes.dropup) : '';
        this.$pagination.last().find('.page-list > div').addClass(dropupClass);
        if (!opts.onlyInfoPagination) {
          $pageList = this.$pagination.find('.page-list a');
          $pre = this.$pagination.find('.page-pre');
          $next = this.$pagination.find('.page-next');
          $number = this.$pagination.find('.page-item').not('.page-next, .page-pre, .page-last-separator, .page-first-separator');
          if (this.totalPages <= 1) {
            this.$pagination.find('div.pagination').hide();
          }
          if (opts.smartDisplay) {
            if (pageList.length < 2 || opts.totalRows <= pageList[0]) {
              this.$pagination.find('div.page-list').hide();
            }
          }

          // when data is empty, hide the pagination
          this.$pagination[this.getData().length ? 'show' : 'hide']();
          if (!opts.paginationLoop) {
            if (opts.pageNumber === 1) {
              $pre.addClass('disabled');
            }
            if (opts.pageNumber === this.totalPages) {
              $next.addClass('disabled');
            }
          }
          if (allSelected) {
            opts.pageSize = opts.formatAllRows();
          }
          $pageList.off('click').on('click', function (e) {
            return _this6.onPageListChange(e);
          });
          $pre.off('click').on('click', function (e) {
            return _this6.onPagePre(e);
          });
          $next.off('click').on('click', function (e) {
            return _this6.onPageNext(e);
          });
          $number.off('click').on('click', function (e) {
            return _this6.onPageNumber(e);
          });
        }
      }
    }, {
      key: "updatePagination",
      value: function updatePagination(event) {
        // Fix #171: IE disabled button can be clicked bug.
        if (event && $(event.currentTarget).hasClass('disabled')) {
          return;
        }
        if (!this.options.maintainMetaData) {
          this.resetRows();
        }
        this.initPagination();
        this.trigger('page-change', this.options.pageNumber, this.options.pageSize);
        if (this.options.sidePagination === 'server' || this.options.sidePagination === 'client' && this.options.paginationLoadMore && !this._paginationLoaded && this.options.pageNumber === this.totalPages) {
          this.initServer();
        } else {
          this.initBody();
        }
      }
    }, {
      key: "onPageListChange",
      value: function onPageListChange(event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        $this.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive);
        this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +$this.text();
        this.$toolbar.find('.page-size').text(this.options.pageSize);
        this.updatePagination(event);
        return false;
      }
    }, {
      key: "onPagePre",
      value: function onPagePre(event) {
        if ($(event.target).hasClass('disabled')) {
          return;
        }
        event.preventDefault();
        if (this.options.pageNumber - 1 === 0) {
          this.options.pageNumber = this.options.totalPages;
        } else {
          this.options.pageNumber--;
        }
        this.updatePagination(event);
        return false;
      }
    }, {
      key: "onPageNext",
      value: function onPageNext(event) {
        if ($(event.target).hasClass('disabled')) {
          return;
        }
        event.preventDefault();
        if (this.options.pageNumber + 1 > this.options.totalPages) {
          this.options.pageNumber = 1;
        } else {
          this.options.pageNumber++;
        }
        this.updatePagination(event);
        return false;
      }
    }, {
      key: "onPageNumber",
      value: function onPageNumber(event) {
        event.preventDefault();
        if (this.options.pageNumber === +$(event.currentTarget).text()) {
          return;
        }
        this.options.pageNumber = +$(event.currentTarget).text();
        this.updatePagination(event);
        return false;
      }

      // eslint-disable-next-line no-unused-vars
    }, {
      key: "initRow",
      value: function initRow(item, i, data, trFragments) {
        var _this7 = this;
        var html = [];
        var style = {};
        var csses = [];
        var data_ = '';
        var attributes = {};
        var htmlAttributes = [];
        if (Utils.findIndex(this.hiddenRows, item) > -1) {
          return;
        }
        style = Utils.calculateObjectValue(this.options, this.options.rowStyle, [item, i], style);
        if (style && style.css) {
          for (var _i9 = 0, _Object$entries8 = Object.entries(style.css); _i9 < _Object$entries8.length; _i9++) {
            var _Object$entries8$_i = _slicedToArray(_Object$entries8[_i9], 2),
              key = _Object$entries8$_i[0],
              value = _Object$entries8$_i[1];
            csses.push("".concat(key, ": ").concat(value));
          }
        }
        attributes = Utils.calculateObjectValue(this.options, this.options.rowAttributes, [item, i], attributes);
        if (attributes) {
          for (var _i10 = 0, _Object$entries9 = Object.entries(attributes); _i10 < _Object$entries9.length; _i10++) {
            var _Object$entries9$_i = _slicedToArray(_Object$entries9[_i10], 2),
              _key2 = _Object$entries9$_i[0],
              _value = _Object$entries9$_i[1];
            htmlAttributes.push("".concat(_key2, "=\"").concat(Utils.escapeHTML(_value), "\""));
          }
        }
        if (item._data && !Utils.isEmptyObject(item._data)) {
          for (var _i11 = 0, _Object$entries10 = Object.entries(item._data); _i11 < _Object$entries10.length; _i11++) {
            var _Object$entries10$_i = _slicedToArray(_Object$entries10[_i11], 2),
              k = _Object$entries10$_i[0],
              v = _Object$entries10$_i[1];
            // ignore data-index
            if (k === 'index') {
              return;
            }
            data_ += " data-".concat(k, "='").concat(_typeof(v) === 'object' ? JSON.stringify(v) : v, "'");
          }
        }
        html.push('<tr', Utils.sprintf(' %s', htmlAttributes.length ? htmlAttributes.join(' ') : undefined), Utils.sprintf(' id="%s"', Array.isArray(item) ? undefined : item._id), Utils.sprintf(' class="%s"', style.classes || (Array.isArray(item) ? undefined : item._class)), Utils.sprintf(' style="%s"', Array.isArray(item) ? undefined : item._style), " data-index=\"".concat(i, "\""), Utils.sprintf(' data-uniqueid="%s"', Utils.getItemField(item, this.options.uniqueId, false)), Utils.sprintf(' data-has-detail-view="%s"', this.options.detailView && Utils.calculateObjectValue(null, this.options.detailFilter, [i, item]) ? 'true' : undefined), Utils.sprintf('%s', data_), '>');
        if (this.options.cardView) {
          html.push("<td colspan=\"".concat(this.header.fields.length, "\"><div class=\"card-views\">"));
        }
        var detailViewTemplate = '';
        if (Utils.hasDetailViewIcon(this.options)) {
          detailViewTemplate = '<td>';
          if (Utils.calculateObjectValue(null, this.options.detailFilter, [i, item])) {
            detailViewTemplate += "\n          <a class=\"detail-icon\" href=\"#\">\n          ".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen), "\n          </a>\n        ");
          }
          detailViewTemplate += '</td>';
        }
        if (detailViewTemplate && this.options.detailViewAlign !== 'right') {
          html.push(detailViewTemplate);
        }
        this.header.fields.forEach(function (field, j) {
          var column = _this7.columns[j];
          var text = '';
          var value_ = Utils.getItemField(item, field, _this7.options.escape, column.escape);
          var value = '';
          var type = '';
          var cellStyle = {};
          var id_ = '';
          var class_ = _this7.header.classes[j];
          var style_ = '';
          var styleToAdd_ = '';
          var data_ = '';
          var rowspan_ = '';
          var colspan_ = '';
          var title_ = '';
          if ((_this7.fromHtml || _this7.autoMergeCells) && typeof value_ === 'undefined') {
            if (!column.checkbox && !column.radio) {
              return;
            }
          }
          if (!column.visible) {
            return;
          }
          if (_this7.options.cardView && !column.cardVisible) {
            return;
          }

          // Style concat
          if (csses.concat([_this7.header.styles[j]]).length) {
            styleToAdd_ += "".concat(csses.concat([_this7.header.styles[j]]).join('; '));
          }
          if (item["_".concat(field, "_style")]) {
            styleToAdd_ += "".concat(item["_".concat(field, "_style")]);
          }
          if (styleToAdd_) {
            style_ = " style=\"".concat(styleToAdd_, "\"");
          }
          // Style concat

          // handle id and class of td
          if (item["_".concat(field, "_id")]) {
            id_ = Utils.sprintf(' id="%s"', item["_".concat(field, "_id")]);
          }
          if (item["_".concat(field, "_class")]) {
            class_ = Utils.sprintf(' class="%s"', item["_".concat(field, "_class")]);
          }
          if (item["_".concat(field, "_rowspan")]) {
            rowspan_ = Utils.sprintf(' rowspan="%s"', item["_".concat(field, "_rowspan")]);
          }
          if (item["_".concat(field, "_colspan")]) {
            colspan_ = Utils.sprintf(' colspan="%s"', item["_".concat(field, "_colspan")]);
          }
          if (item["_".concat(field, "_title")]) {
            title_ = Utils.sprintf(' title="%s"', item["_".concat(field, "_title")]);
          }
          cellStyle = Utils.calculateObjectValue(_this7.header, _this7.header.cellStyles[j], [value_, item, i, field], cellStyle);
          if (cellStyle.classes) {
            class_ = " class=\"".concat(cellStyle.classes, "\"");
          }
          if (cellStyle.css) {
            var csses_ = [];
            for (var _i12 = 0, _Object$entries11 = Object.entries(cellStyle.css); _i12 < _Object$entries11.length; _i12++) {
              var _Object$entries11$_i = _slicedToArray(_Object$entries11[_i12], 2),
                _key3 = _Object$entries11$_i[0],
                _value2 = _Object$entries11$_i[1];
              csses_.push("".concat(_key3, ": ").concat(_value2));
            }
            style_ = " style=\"".concat(csses_.concat(_this7.header.styles[j]).join('; '), "\"");
          }
          value = Utils.calculateObjectValue(column, _this7.header.formatters[j], [value_, item, i, field], value_);
          if (!(column.checkbox || column.radio)) {
            value = typeof value === 'undefined' || value === null ? _this7.options.undefinedText : value;
          }
          if (column.searchable && _this7.searchText && _this7.options.searchHighlight && !(column.checkbox || column.radio)) {
            var defValue = '';
            var searchText = _this7.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            if (_this7.options.searchAccentNeutralise) {
              var indexRegex = new RegExp("".concat(Utils.normalizeAccent(searchText)), 'gmi');
              var match = indexRegex.exec(Utils.normalizeAccent(value));
              if (match) {
                searchText = value.substring(match.index, match.index + searchText.length);
              }
            }
            var regExp = new RegExp("(".concat(searchText, ")"), 'gim');
            var marker = '<mark>$1</mark>';
            var isHTML = value && /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(value);
            if (isHTML) {
              // value can contains a HTML tags
              var textContent = new DOMParser().parseFromString(value.toString(), 'text/html').documentElement.textContent;
              var textReplaced = textContent.replace(regExp, marker);
              textContent = textContent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              defValue = value.replace(new RegExp("(>\\s*)(".concat(textContent, ")(\\s*)"), 'gm'), "$1".concat(textReplaced, "$3"));
            } else {
              // but usually not
              defValue = value.toString().replace(regExp, marker);
            }
            value = Utils.calculateObjectValue(column, column.searchHighlightFormatter, [value, _this7.searchText], defValue);
          }
          if (item["_".concat(field, "_data")] && !Utils.isEmptyObject(item["_".concat(field, "_data")])) {
            for (var _i13 = 0, _Object$entries12 = Object.entries(item["_".concat(field, "_data")]); _i13 < _Object$entries12.length; _i13++) {
              var _Object$entries12$_i = _slicedToArray(_Object$entries12[_i13], 2),
                _k = _Object$entries12$_i[0],
                _v = _Object$entries12$_i[1];
              // ignore data-index
              if (_k === 'index') {
                return;
              }
              data_ += " data-".concat(_k, "=\"").concat(_v, "\"");
            }
          }
          if (column.checkbox || column.radio) {
            type = column.checkbox ? 'checkbox' : type;
            type = column.radio ? 'radio' : type;
            var c = column['class'] || '';
            var isChecked = Utils.isObject(value) && value.hasOwnProperty('checked') ? value.checked : (value === true || value_) && value !== false;
            var isDisabled = !column.checkboxEnabled || value && value.disabled;
            text = [_this7.options.cardView ? "<div class=\"card-view ".concat(c, "\">") : "<td class=\"bs-checkbox ".concat(c, "\"").concat(class_).concat(style_, ">"), "<label>\n            <input\n            data-index=\"".concat(i, "\"\n            name=\"").concat(_this7.options.selectItemName, "\"\n            type=\"").concat(type, "\"\n            ").concat(Utils.sprintf('value="%s"', item[_this7.options.idField]), "\n            ").concat(Utils.sprintf('checked="%s"', isChecked ? 'checked' : undefined), "\n            ").concat(Utils.sprintf('disabled="%s"', isDisabled ? 'disabled' : undefined), " />\n            <span></span>\n            </label>"), _this7.header.formatters[j] && typeof value === 'string' ? value : '', _this7.options.cardView ? '</div>' : '</td>'].join('');
            item[_this7.header.stateField] = value === true || !!value_ || value && value.checked;
          } else if (_this7.options.cardView) {
            var cardTitle = _this7.options.showHeader ? "<span class=\"card-view-title ".concat(cellStyle.classes || '', "\"").concat(style_, ">").concat(Utils.getFieldTitle(_this7.columns, field), "</span>") : '';
            text = "<div class=\"card-view\">".concat(cardTitle, "<span class=\"card-view-value ").concat(cellStyle.classes || '', "\"").concat(style_, ">").concat(value, "</span></div>");
            if (_this7.options.smartDisplay && value === '') {
              text = '<div class="card-view"></div>';
            }
          } else {
            text = "<td".concat(id_).concat(class_).concat(style_).concat(data_).concat(rowspan_).concat(colspan_).concat(title_, ">").concat(value, "</td>");
          }
          html.push(text);
        });
        if (detailViewTemplate && this.options.detailViewAlign === 'right') {
          html.push(detailViewTemplate);
        }
        if (this.options.cardView) {
          html.push('</div></td>');
        }
        html.push('</tr>');
        return html.join('');
      }
    }, {
      key: "initBody",
      value: function initBody(fixedScroll, updatedUid) {
        var _this8 = this;
        var data = this.getData();
        this.trigger('pre-body', data);
        this.$body = this.$el.find('>tbody');
        if (!this.$body.length) {
          this.$body = $('<tbody></tbody>').appendTo(this.$el);
        }

        // Fix #389 Bootstrap-table-flatJSON is not working
        if (!this.options.pagination || this.options.sidePagination === 'server') {
          this.pageFrom = 1;
          this.pageTo = data.length;
        }
        var rows = [];
        var trFragments = $(document.createDocumentFragment());
        var hasTr = false;
        var toExpand = [];
        this.autoMergeCells = Utils.checkAutoMergeCells(data.slice(this.pageFrom - 1, this.pageTo));
        for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
          var item = data[i];
          var tr = this.initRow(item, i, data, trFragments);
          hasTr = hasTr || !!tr;
          if (tr && typeof tr === 'string') {
            var uniqueId = this.options.uniqueId;
            if (uniqueId && item.hasOwnProperty(uniqueId)) {
              var itemUniqueId = item[uniqueId];
              var oldTr = this.$body.find(Utils.sprintf('> tr[data-uniqueid="%s"][data-has-detail-view]', itemUniqueId));
              var oldTrNext = oldTr.next();
              if (oldTrNext.is('tr.detail-view')) {
                toExpand.push(i);
                if (!updatedUid || itemUniqueId !== updatedUid) {
                  tr += oldTrNext[0].outerHTML;
                }
              }
            }
            if (!this.options.virtualScroll) {
              trFragments.append(tr);
            } else {
              rows.push(tr);
            }
          }
        }

        // show no records
        if (!hasTr) {
          this.$body.html("<tr class=\"no-records-found\">".concat(Utils.sprintf('<td colspan="%s">%s</td>', this.getVisibleFields().length + Utils.getDetailViewIndexOffset(this.options), this.options.formatNoMatches()), "</tr>"));
        } else if (!this.options.virtualScroll) {
          this.$body.html(trFragments);
        } else {
          if (this.virtualScroll) {
            this.virtualScroll.destroy();
          }
          this.virtualScroll = new VirtualScroll({
            rows: rows,
            fixedScroll: fixedScroll,
            scrollEl: this.$tableBody[0],
            contentEl: this.$body[0],
            itemHeight: this.options.virtualScrollItemHeight,
            callback: function callback(startIndex, endIndex) {
              _this8.fitHeader();
              _this8.initBodyEvent();
              _this8.trigger('virtual-scroll', startIndex, endIndex);
            }
          });
        }
        toExpand.forEach(function (index) {
          _this8.expandRow(index);
        });
        if (!fixedScroll) {
          this.scrollTo(0);
        }
        this.initBodyEvent();
        this.initFooter();
        this.resetView();
        this.updateSelected();
        if (this.options.sidePagination !== 'server') {
          this.options.totalRows = data.length;
        }
        this.trigger('post-body', data);
      }
    }, {
      key: "initBodyEvent",
      value: function initBodyEvent() {
        var _this9 = this;
        // click to select by column
        this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', function (e) {
          var $td = $(e.currentTarget);
          if ($td.find('.detail-icon').length || $td.index() - Utils.getDetailViewIndexOffset(_this9.options) < 0) {
            return;
          }
          var $tr = $td.parent();
          var $cardViewArr = $(e.target).parents('.card-views').children();
          var $cardViewTarget = $(e.target).parents('.card-view');
          var rowIndex = $tr.data('index');
          var item = _this9.data[rowIndex];
          var index = _this9.options.cardView ? $cardViewArr.index($cardViewTarget) : $td[0].cellIndex;
          var fields = _this9.getVisibleFields();
          var field = fields[index - Utils.getDetailViewIndexOffset(_this9.options)];
          var column = _this9.columns[_this9.fieldsColumnsIndex[field]];
          var value = Utils.getItemField(item, field, _this9.options.escape, column.escape);
          _this9.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td);
          _this9.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field);

          // if click to select - then trigger the checkbox/radio click
          if (e.type === 'click' && _this9.options.clickToSelect && column.clickToSelect && !Utils.calculateObjectValue(_this9.options, _this9.options.ignoreClickToSelectOn, [e.target])) {
            var $selectItem = $tr.find(Utils.sprintf('[name="%s"]', _this9.options.selectItemName));
            if ($selectItem.length) {
              $selectItem[0].click();
            }
          }
          if (e.type === 'click' && _this9.options.detailViewByClick) {
            _this9.toggleDetailView(rowIndex, _this9.header.detailFormatters[_this9.fieldsColumnsIndex[field]]);
          }
        }).off('mousedown').on('mousedown', function (e) {
          // https://github.com/jquery/jquery/issues/1741
          _this9.multipleSelectRowCtrlKey = e.ctrlKey || e.metaKey;
          _this9.multipleSelectRowShiftKey = e.shiftKey;
        });
        this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click', function (e) {
          e.preventDefault();
          _this9.toggleDetailView($(e.currentTarget).parent().parent().data('index'));
          return false;
        });
        this.$selectItem = this.$body.find(Utils.sprintf('[name="%s"]', this.options.selectItemName));
        this.$selectItem.off('click').on('click', function (e) {
          e.stopImmediatePropagation();
          var $this = $(e.currentTarget);
          _this9._toggleCheck($this.prop('checked'), $this.data('index'));
        });
        this.header.events.forEach(function (_events, i) {
          var events = _events;
          if (!events) {
            return;
          }
          // fix bug, if events is defined with namespace
          if (typeof events === 'string') {
            events = Utils.calculateObjectValue(null, events);
          }
          if (!events) {
            throw new Error("Unknown event in the scope: ".concat(_events));
          }
          var field = _this9.header.fields[i];
          var fieldIndex = _this9.getVisibleFields().indexOf(field);
          if (fieldIndex === -1) {
            return;
          }
          fieldIndex += Utils.getDetailViewIndexOffset(_this9.options);
          var _loop3 = function _loop3(key) {
            if (!events.hasOwnProperty(key)) {
              return 1; // continue
            }
            var event = events[key];
            _this9.$body.find('>tr:not(.no-records-found)').each(function (i, tr) {
              var $tr = $(tr);
              var $td = $tr.find(_this9.options.cardView ? '.card-views>.card-view' : '>td').eq(fieldIndex);
              var index = key.indexOf(' ');
              var name = key.substring(0, index);
              var el = key.substring(index + 1);
              $td.find(el).off(name).on(name, function (e) {
                var index = $tr.data('index');
                var row = _this9.data[index];
                var value = row[field];
                event.apply(_this9, [e, value, row, index]);
              });
            });
          };
          for (var key in events) {
            if (_loop3(key)) continue;
          }
        });
      }
    }, {
      key: "initServer",
      value: function initServer(silent, query, url) {
        var _this10 = this;
        var data = {};
        var index = this.header.fields.indexOf(this.options.sortName);
        var params = {
          searchText: this.searchText,
          sortName: this.options.sortName,
          sortOrder: this.options.sortOrder
        };
        if (this.header.sortNames[index]) {
          params.sortName = this.header.sortNames[index];
        }
        if (this.options.pagination && this.options.sidePagination === 'server') {
          params.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize;
          params.pageNumber = this.options.pageNumber;
        }
        if (!(url || this.options.url) && !this.options.ajax) {
          return;
        }
        if (this.options.queryParamsType === 'limit') {
          params = {
            search: params.searchText,
            sort: params.sortName,
            order: params.sortOrder
          };
          if (this.options.pagination && this.options.sidePagination === 'server') {
            params.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1);
            params.limit = this.options.pageSize;
            if (params.limit === 0 || this.options.pageSize === this.options.formatAllRows()) {
              delete params.limit;
            }
          }
        }
        if (this.options.search && this.options.sidePagination === 'server' && this.options.searchable && this.columns.filter(function (column) {
          return column.searchable;
        }).length) {
          params.searchable = [];
          var _iterator2 = _createForOfIteratorHelper(this.columns),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var column = _step2.value;
              if (!column.checkbox && column.searchable && (this.options.visibleSearch && column.visible || !this.options.visibleSearch)) {
                params.searchable.push(column.field);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (!Utils.isEmptyObject(this.filterColumnsPartial)) {
          params.filter = JSON.stringify(this.filterColumnsPartial, null);
        }
        Utils.extend(params, query || {});
        data = Utils.calculateObjectValue(this.options, this.options.queryParams, [params], data);

        // false to stop request
        if (data === false) {
          return;
        }
        if (!silent) {
          this.showLoading();
        }
        var request = Utils.extend({}, Utils.calculateObjectValue(null, this.options.ajaxOptions), {
          type: this.options.method,
          url: url || this.options.url,
          data: this.options.contentType === 'application/json' && this.options.method === 'post' ? JSON.stringify(data) : data,
          cache: this.options.cache,
          contentType: this.options.contentType,
          dataType: this.options.dataType,
          success: function success(_res, textStatus, jqXHR) {
            var res = Utils.calculateObjectValue(_this10.options, _this10.options.responseHandler, [_res, jqXHR], _res);
            if (_this10.options.sidePagination === 'client' && _this10.options.paginationLoadMore) {
              _this10._paginationLoaded = _this10.data.length === res.length;
            }
            _this10.load(res);
            _this10.trigger('load-success', res, jqXHR && jqXHR.status, jqXHR);
            if (!silent) {
              _this10.hideLoading();
            }
            if (_this10.options.sidePagination === 'server' && _this10.options.pageNumber > 1 && res[_this10.options.totalField] > 0 && !res[_this10.options.dataField].length) {
              _this10.updatePagination();
            }
          },
          error: function error(jqXHR) {
            // abort ajax by multiple request
            if (jqXHR && jqXHR.status === 0 && _this10._xhrAbort) {
              _this10._xhrAbort = false;
              return;
            }
            var data = [];
            if (_this10.options.sidePagination === 'server') {
              data = {};
              data[_this10.options.totalField] = 0;
              data[_this10.options.dataField] = [];
            }
            _this10.load(data);
            _this10.trigger('load-error', jqXHR && jqXHR.status, jqXHR);
            if (!silent) {
              _this10.hideLoading();
            }
          }
        });
        if (this.options.ajax) {
          Utils.calculateObjectValue(this, this.options.ajax, [request], null);
        } else {
          if (this._xhr && this._xhr.readyState !== 4) {
            this._xhrAbort = true;
            this._xhr.abort();
          }
          this._xhr = $.ajax(request);
        }
        return data;
      }
    }, {
      key: "initSearchText",
      value: function initSearchText() {
        if (this.options.search) {
          this.searchText = '';
          if (this.options.searchText !== '') {
            var $search = Utils.getSearchInput(this);
            $search.val(this.options.searchText);
            this.onSearch({
              currentTarget: $search,
              firedByInitSearchText: true
            });
          }
        }
      }
    }, {
      key: "getCaret",
      value: function getCaret() {
        var _this11 = this;
        this.$header.find('th').each(function (i, th) {
          $(th).find('.sortable').removeClass('desc asc').addClass($(th).data('field') === _this11.options.sortName ? _this11.options.sortOrder : 'both');
        });
      }
    }, {
      key: "updateSelected",
      value: function updateSelected() {
        var checkAll = this.$selectItem.filter(':enabled').length && this.$selectItem.filter(':enabled').length === this.$selectItem.filter(':enabled').filter(':checked').length;
        this.$selectAll.add(this.$selectAll_).prop('checked', checkAll);
        this.$selectItem.each(function (i, el) {
          $(el).closest('tr')[$(el).prop('checked') ? 'addClass' : 'removeClass']('selected');
        });
      }
    }, {
      key: "updateRows",
      value: function updateRows() {
        var _this12 = this;
        this.$selectItem.each(function (i, el) {
          _this12.data[$(el).data('index')][_this12.header.stateField] = $(el).prop('checked');
        });
      }
    }, {
      key: "resetRows",
      value: function resetRows() {
        var _iterator3 = _createForOfIteratorHelper(this.data),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var row = _step3.value;
            this.$selectAll.prop('checked', false);
            this.$selectItem.prop('checked', false);
            if (this.header.stateField) {
              row[this.header.stateField] = false;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.initHiddenRows();
      }
    }, {
      key: "trigger",
      value: function trigger(_name) {
        var _this$options, _this$options2;
        var name = "".concat(_name, ".bs.table");
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key4 = 1; _key4 < _len; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        (_this$options = this.options)[BootstrapTable.EVENTS[name]].apply(_this$options, [].concat(args, [this]));
        this.$el.trigger($.Event(name, {
          sender: this
        }), args);
        (_this$options2 = this.options).onAll.apply(_this$options2, [name].concat([].concat(args, [this])));
        this.$el.trigger($.Event('all.bs.table', {
          sender: this
        }), [name, args]);
      }
    }, {
      key: "resetHeader",
      value: function resetHeader() {
        var _this13 = this;
        // fix #61: the hidden table reset header bug.
        // fix bug: get $el.css('width') error sometime (height = 500)
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(function () {
          return _this13.fitHeader();
        }, this.$el.is(':hidden') ? 100 : 0);
      }
    }, {
      key: "fitHeader",
      value: function fitHeader() {
        var _this14 = this;
        if (this.$el.is(':hidden')) {
          this.timeoutId_ = setTimeout(function () {
            return _this14.fitHeader();
          }, 100);
          return;
        }
        var fixedBody = this.$tableBody.get(0);
        var scrollWidth = this.hasScrollBar && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? Utils.getScrollBarWidth() : 0;
        this.$el.css('margin-top', -this.$header.outerHeight());
        var focused = this.$tableHeader.find(':focus');
        if (focused.length > 0) {
          var $th = focused.parents('th');
          if ($th.length > 0) {
            var dataField = $th.attr('data-field');
            if (dataField !== undefined) {
              var $headerTh = this.$header.find("[data-field='".concat(dataField, "']"));
              if ($headerTh.length > 0) {
                $headerTh.find(':input').addClass('focus-temp');
              }
            }
          }
        }
        this.$header_ = this.$header.clone(true, true);
        this.$selectAll_ = this.$header_.find('[name="btSelectAll"]');
        this.$tableHeader.css('margin-right', scrollWidth).find('table').css('width', this.$el.outerWidth()).html('').attr('class', this.$el.attr('class')).append(this.$header_);
        this.$tableLoading.css('width', this.$el.outerWidth());
        var focusedTemp = $('.focus-temp:visible:eq(0)');
        if (focusedTemp.length > 0) {
          focusedTemp.focus();
          this.$header.find('.focus-temp').removeClass('focus-temp');
        }

        // fix bug: $.data() is not working as expected after $.append()
        this.$header.find('th[data-field]').each(function (i, el) {
          _this14.$header_.find(Utils.sprintf('th[data-field="%s"]', $(el).data('field'))).data($(el).data());
        });
        var visibleFields = this.getVisibleFields();
        var $ths = this.$header_.find('th');
        var $tr = this.$body.find('>tr:not(.no-records-found,.virtual-scroll-top)').eq(0);
        while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
          $tr = $tr.next();
        }
        var trLength = $tr.find('> *').length;
        $tr.find('> *').each(function (i, el) {
          var $this = $(el);
          if (Utils.hasDetailViewIcon(_this14.options)) {
            if (i === 0 && _this14.options.detailViewAlign !== 'right' || i === trLength - 1 && _this14.options.detailViewAlign === 'right') {
              var $thDetail = $ths.filter('.detail');
              var _zoomWidth = $thDetail.innerWidth() - $thDetail.find('.fht-cell').width();
              $thDetail.find('.fht-cell').width($this.innerWidth() - _zoomWidth);
              return;
            }
          }
          var index = i - Utils.getDetailViewIndexOffset(_this14.options);
          var $th = _this14.$header_.find(Utils.sprintf('th[data-field="%s"]', visibleFields[index]));
          if ($th.length > 1) {
            $th = $($ths[$this[0].cellIndex]);
          }
          var zoomWidth = $th.innerWidth() - $th.find('.fht-cell').width();
          $th.find('.fht-cell').width($this.innerWidth() - zoomWidth);
        });
        this.horizontalScroll();
        this.trigger('post-header');
      }
    }, {
      key: "initFooter",
      value: function initFooter() {
        if (!this.options.showFooter || this.options.cardView) {
          // do nothing
          return;
        }
        var data = this.getData();
        var html = [];
        var detailTemplate = '';
        if (Utils.hasDetailViewIcon(this.options)) {
          detailTemplate = '<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>';
        }
        if (detailTemplate && this.options.detailViewAlign !== 'right') {
          html.push(detailTemplate);
        }
        var _iterator4 = _createForOfIteratorHelper(this.columns),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var column = _step4.value;
            var falign = '';
            var valign = '';
            var csses = [];
            var style = {};
            var class_ = Utils.sprintf(' class="%s"', column['class']);
            if (!column.visible || this.footerData && this.footerData.length > 0 && !(column.field in this.footerData[0])) {
              continue;
            }
            if (this.options.cardView && !column.cardVisible) {
              return;
            }
            falign = Utils.sprintf('text-align: %s; ', column.falign ? column.falign : column.align);
            valign = Utils.sprintf('vertical-align: %s; ', column.valign);
            style = Utils.calculateObjectValue(null, column.footerStyle || this.options.footerStyle, [column]);
            if (style && style.css) {
              for (var _i14 = 0, _Object$entries13 = Object.entries(style.css); _i14 < _Object$entries13.length; _i14++) {
                var _Object$entries13$_i = _slicedToArray(_Object$entries13[_i14], 2),
                  key = _Object$entries13$_i[0],
                  _value3 = _Object$entries13$_i[1];
                csses.push("".concat(key, ": ").concat(_value3));
              }
            }
            if (style && style.classes) {
              class_ = Utils.sprintf(' class="%s"', column['class'] ? [column['class'], style.classes].join(' ') : style.classes);
            }
            html.push('<th', class_, Utils.sprintf(' style="%s"', falign + valign + csses.concat().join('; ') || undefined));
            var colspan = 0;
            if (this.footerData && this.footerData.length > 0) {
              colspan = this.footerData[0]["_".concat(column.field, "_colspan")] || 0;
            }
            if (colspan) {
              html.push(" colspan=\"".concat(colspan, "\" "));
            }
            html.push('>');
            html.push('<div class="th-inner">');
            var value = '';
            if (this.footerData && this.footerData.length > 0) {
              value = this.footerData[0][column.field] || '';
            }
            html.push(Utils.calculateObjectValue(column, column.footerFormatter, [data, value], value));
            html.push('</div>');
            html.push('<div class="fht-cell"></div>');
            html.push('</div>');
            html.push('</th>');
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        if (detailTemplate && this.options.detailViewAlign === 'right') {
          html.push(detailTemplate);
        }
        if (!this.options.height && !this.$tableFooter.length) {
          this.$el.append('<tfoot><tr></tr></tfoot>');
          this.$tableFooter = this.$el.find('tfoot');
        }
        if (!this.$tableFooter.find('tr').length) {
          this.$tableFooter.html('<table><thead><tr></tr></thead></table>');
        }
        this.$tableFooter.find('tr').html(html.join(''));
        this.trigger('post-footer', this.$tableFooter);
      }
    }, {
      key: "fitFooter",
      value: function fitFooter() {
        var _this15 = this;
        if (this.$el.is(':hidden')) {
          setTimeout(function () {
            return _this15.fitFooter();
          }, 100);
          return;
        }
        var fixedBody = this.$tableBody.get(0);
        var scrollWidth = this.hasScrollBar && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? Utils.getScrollBarWidth() : 0;
        this.$tableFooter.css('margin-right', scrollWidth).find('table').css('width', this.$el.outerWidth()).attr('class', this.$el.attr('class'));
        var $ths = this.$tableFooter.find('th');
        var $tr = this.$body.find('>tr:first-child:not(.no-records-found)');
        $ths.find('.fht-cell').width('auto');
        while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
          $tr = $tr.next();
        }
        var trLength = $tr.find('> *').length;
        $tr.find('> *').each(function (i, el) {
          var $this = $(el);
          if (Utils.hasDetailViewIcon(_this15.options)) {
            if (i === 0 && _this15.options.detailViewAlign === 'left' || i === trLength - 1 && _this15.options.detailViewAlign === 'right') {
              var $thDetail = $ths.filter('.detail');
              var _zoomWidth2 = $thDetail.innerWidth() - $thDetail.find('.fht-cell').width();
              $thDetail.find('.fht-cell').width($this.innerWidth() - _zoomWidth2);
              return;
            }
          }
          var $th = $ths.eq(i);
          var zoomWidth = $th.innerWidth() - $th.find('.fht-cell').width();
          $th.find('.fht-cell').width($this.innerWidth() - zoomWidth);
        });
        this.horizontalScroll();
      }
    }, {
      key: "horizontalScroll",
      value: function horizontalScroll() {
        var _this16 = this;
        // horizontal scroll event
        // TODO: it's probably better improving the layout than binding to scroll event
        this.$tableBody.off('scroll').on('scroll', function () {
          var scrollLeft = _this16.$tableBody.scrollLeft();
          if (_this16.options.showHeader && _this16.options.height) {
            _this16.$tableHeader.scrollLeft(scrollLeft);
          }
          if (_this16.options.showFooter && !_this16.options.cardView) {
            _this16.$tableFooter.scrollLeft(scrollLeft);
          }
          _this16.trigger('scroll-body', _this16.$tableBody);
        });
      }
    }, {
      key: "getVisibleFields",
      value: function getVisibleFields() {
        var visibleFields = [];
        var _iterator5 = _createForOfIteratorHelper(this.header.fields),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var field = _step5.value;
            var column = this.columns[this.fieldsColumnsIndex[field]];
            if (!column || !column.visible || this.options.cardView && !column.cardVisible) {
              continue;
            }
            visibleFields.push(field);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return visibleFields;
      }
    }, {
      key: "initHiddenRows",
      value: function initHiddenRows() {
        this.hiddenRows = [];
      }

      // PUBLIC FUNCTION DEFINITION
      // =======================
    }, {
      key: "getOptions",
      value: function getOptions() {
        // deep copy and remove data
        var options = Utils.extend({}, this.options);
        delete options.data;
        return Utils.extend(true, {}, options);
      }
    }, {
      key: "refreshOptions",
      value: function refreshOptions(options) {
        // If the objects are equivalent then avoid the call of destroy / init methods
        if (Utils.compareObjects(this.options, options, true)) {
          return;
        }
        this.options = Utils.extend(this.options, options);
        this.trigger('refresh-options', this.options);
        this.destroy();
        this.init();
      }
    }, {
      key: "getData",
      value: function getData(params) {
        var _this17 = this;
        var data = this.options.data;
        if ((this.searchText || this.options.customSearch || this.options.sortName !== undefined || this.enableCustomSort ||
        // Fix #4616: this.enableCustomSort is for extensions
        !Utils.isEmptyObject(this.filterColumns) || typeof this.options.filterOptions.filterAlgorithm === 'function' || !Utils.isEmptyObject(this.filterColumnsPartial)) && (!params || !params.unfiltered)) {
          data = this.data;
        }
        if (params && !params.includeHiddenRows) {
          var hiddenRows = this.getHiddenRows();
          data = data.filter(function (row) {
            return Utils.findIndex(hiddenRows, row) === -1;
          });
        }
        if (params && params.useCurrentPage) {
          data = data.slice(this.pageFrom - 1, this.pageTo);
        }
        if (params && params.formatted) {
          return data.map(function (row) {
            for (var _i15 = 0, _Object$entries14 = Object.entries(row); _i15 < _Object$entries14.length; _i15++) {
              var _Object$entries14$_i = _slicedToArray(_Object$entries14[_i15], 2),
                key = _Object$entries14$_i[0],
                value = _Object$entries14$_i[1];
              var column = _this17.columns[_this17.fieldsColumnsIndex[key]];
              if (!column) {
                continue;
              }
              return Utils.calculateObjectValue(column, _this17.header.formatters[column.fieldIndex], [value, row, row.index, column.field], value);
            }
          });
        }
        return data;
      }
    }, {
      key: "getSelections",
      value: function getSelections() {
        var _this18 = this;
        return (this.options.maintainMetaData ? this.options.data : this.data).filter(function (row) {
          return row[_this18.header.stateField] === true;
        });
      }
    }, {
      key: "load",
      value: function load(_data) {
        var fixedScroll = false;
        var data = _data;

        // #431: support pagination
        if (this.options.pagination && this.options.sidePagination === 'server') {
          this.options.totalRows = data[this.options.totalField];
          this.options.totalNotFiltered = data[this.options.totalNotFilteredField];
          this.footerData = data[this.options.footerField] ? [data[this.options.footerField]] : undefined;
        }
        fixedScroll = this.options.fixedScroll || data.fixedScroll;
        data = Array.isArray(data) ? data : data[this.options.dataField];
        this.initData(data);
        this.initSearch();
        this.initPagination();
        this.initBody(fixedScroll);
      }
    }, {
      key: "append",
      value: function append(data) {
        this.initData(data, 'append');
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "prepend",
      value: function prepend(data) {
        this.initData(data, 'prepend');
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "remove",
      value: function remove(params) {
        var removed = 0;
        for (var i = this.options.data.length - 1; i >= 0; i--) {
          var row = this.options.data[i];
          var value = Utils.getItemField(row, params.field, this.options.escape, row.escape);
          if (value === undefined && params.field !== '$index') {
            continue;
          }
          if (!row.hasOwnProperty(params.field) && params.field === '$index' && params.values.includes(i) || params.values.includes(value)) {
            removed++;
            this.options.data.splice(i, 1);
          }
        }
        if (!removed) {
          return;
        }
        if (this.options.sidePagination === 'server') {
          this.options.totalRows -= removed;
          this.data = _toConsumableArray(this.options.data);
        }
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        if (this.options.data.length > 0) {
          this.options.data.splice(0, this.options.data.length);
          this.initSearch();
          this.initPagination();
          this.initBody(true);
        }
      }
    }, {
      key: "insertRow",
      value: function insertRow(params) {
        if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
          return;
        }
        this.options.data.splice(params.index, 0, params.row);
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "updateRow",
      value: function updateRow(params) {
        var allParams = Array.isArray(params) ? params : [params];
        var _iterator6 = _createForOfIteratorHelper(allParams),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _params = _step6.value;
            if (!_params.hasOwnProperty('index') || !_params.hasOwnProperty('row')) {
              continue;
            }
            if (_params.hasOwnProperty('replace') && _params.replace) {
              this.options.data[_params.index] = _params.row;
            } else {
              Utils.extend(this.options.data[_params.index], _params.row);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "getRowByUniqueId",
      value: function getRowByUniqueId(_id) {
        var uniqueId = this.options.uniqueId;
        var len = this.options.data.length;
        var id = _id;
        var dataRow = null;
        var i;
        var row;
        for (i = len - 1; i >= 0; i--) {
          row = this.options.data[i];
          var rowUniqueId = Utils.getItemField(row, uniqueId, this.options.escape, row.escape);
          if (rowUniqueId === undefined) {
            continue;
          }
          if (typeof rowUniqueId === 'string') {
            id = _id.toString();
          } else if (typeof rowUniqueId === 'number') {
            if (Number(rowUniqueId) === rowUniqueId && rowUniqueId % 1 === 0) {
              id = parseInt(_id, 10);
            } else if (rowUniqueId === Number(rowUniqueId) && rowUniqueId !== 0) {
              id = parseFloat(_id);
            }
          }
          if (rowUniqueId === id) {
            dataRow = row;
            break;
          }
        }
        return dataRow;
      }
    }, {
      key: "updateByUniqueId",
      value: function updateByUniqueId(params) {
        var allParams = Array.isArray(params) ? params : [params];
        var updatedUid = null;
        var _iterator7 = _createForOfIteratorHelper(allParams),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _params2 = _step7.value;
            if (!_params2.hasOwnProperty('id') || !_params2.hasOwnProperty('row')) {
              continue;
            }
            var rowId = this.options.data.indexOf(this.getRowByUniqueId(_params2.id));
            if (rowId === -1) {
              continue;
            }
            if (_params2.hasOwnProperty('replace') && _params2.replace) {
              this.options.data[rowId] = _params2.row;
            } else {
              Utils.extend(this.options.data[rowId], _params2.row);
            }
            updatedUid = _params2.id;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true, updatedUid);
      }
    }, {
      key: "removeByUniqueId",
      value: function removeByUniqueId(id) {
        var len = this.options.data.length;
        var row = this.getRowByUniqueId(id);
        if (row) {
          this.options.data.splice(this.options.data.indexOf(row), 1);
        }
        if (len === this.options.data.length) {
          return;
        }
        if (this.options.sidePagination === 'server') {
          this.options.totalRows -= 1;
          this.data = _toConsumableArray(this.options.data);
        }
        this.initSearch();
        this.initPagination();
        this.initBody(true);
      }
    }, {
      key: "_updateCellOnly",
      value: function _updateCellOnly(field, index) {
        var rowHtml = this.initRow(this.options.data[index], index);
        var fieldIndex = this.getVisibleFields().indexOf(field);
        if (fieldIndex === -1) {
          return;
        }
        fieldIndex += Utils.getDetailViewIndexOffset(this.options);
        this.$body.find(">tr[data-index=".concat(index, "]")).find(">td:eq(".concat(fieldIndex, ")")).replaceWith($(rowHtml).find(">td:eq(".concat(fieldIndex, ")")));
        this.initBodyEvent();
        this.initFooter();
        this.resetView();
        this.updateSelected();
      }
    }, {
      key: "updateCell",
      value: function updateCell(params) {
        if (!params.hasOwnProperty('index') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
          return;
        }
        this.options.data[params.index][params.field] = params.value;
        if (params.reinit === false) {
          this._updateCellOnly(params.field, params.index);
          return;
        }
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "updateCellByUniqueId",
      value: function updateCellByUniqueId(params) {
        var _this19 = this;
        var allParams = Array.isArray(params) ? params : [params];
        allParams.forEach(function (_ref6) {
          var id = _ref6.id,
            field = _ref6.field,
            value = _ref6.value;
          var index = _this19.options.data.indexOf(_this19.getRowByUniqueId(id));
          if (index === -1) {
            return;
          }
          _this19.options.data[index][field] = value;
        });
        if (params.reinit === false) {
          this._updateCellOnly(params.field, this.options.data.indexOf(this.getRowByUniqueId(params.id)));
          return;
        }
        this.initSort();
        this.initBody(true);
      }
    }, {
      key: "showRow",
      value: function showRow(params) {
        this._toggleRow(params, true);
      }
    }, {
      key: "hideRow",
      value: function hideRow(params) {
        this._toggleRow(params, false);
      }
    }, {
      key: "_toggleRow",
      value: function _toggleRow(params, visible) {
        var row;
        if (params.hasOwnProperty('index')) {
          row = this.getData()[params.index];
        } else if (params.hasOwnProperty('uniqueId')) {
          row = this.getRowByUniqueId(params.uniqueId);
        }
        if (!row) {
          return;
        }
        var index = Utils.findIndex(this.hiddenRows, row);
        if (!visible && index === -1) {
          this.hiddenRows.push(row);
        } else if (visible && index > -1) {
          this.hiddenRows.splice(index, 1);
        }
        this.initBody(true);
        this.initPagination();
      }
    }, {
      key: "getHiddenRows",
      value: function getHiddenRows(show) {
        if (show) {
          this.initHiddenRows();
          this.initBody(true);
          this.initPagination();
          return;
        }
        var data = this.getData();
        var rows = [];
        var _iterator8 = _createForOfIteratorHelper(data),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var row = _step8.value;
            if (this.hiddenRows.includes(row)) {
              rows.push(row);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        this.hiddenRows = rows;
        return rows;
      }
    }, {
      key: "showColumn",
      value: function showColumn(field) {
        var _this20 = this;
        var fields = Array.isArray(field) ? field : [field];
        fields.forEach(function (field) {
          _this20._toggleColumn(_this20.fieldsColumnsIndex[field], true, true);
        });
      }
    }, {
      key: "hideColumn",
      value: function hideColumn(field) {
        var _this21 = this;
        var fields = Array.isArray(field) ? field : [field];
        fields.forEach(function (field) {
          _this21._toggleColumn(_this21.fieldsColumnsIndex[field], false, true);
        });
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn(index, checked, needUpdate) {
        if (index === undefined || this.columns[index].visible === checked) {
          return;
        }
        this.columns[index].visible = checked;
        this.initHeader();
        this.initSearch();
        this.initPagination();
        this.initBody();
        if (this.options.showColumns) {
          var $items = this.$toolbar.find('.keep-open input:not(".toggle-all")').prop('disabled', false);
          if (needUpdate) {
            $items.filter(Utils.sprintf('[value="%s"]', index)).prop('checked', checked);
          }
          if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
            $items.filter(':checked').prop('disabled', true);
          }
        }
      }
    }, {
      key: "getVisibleColumns",
      value: function getVisibleColumns() {
        var _this22 = this;
        return this.columns.filter(function (column) {
          return column.visible && !_this22.isSelectionColumn(column);
        });
      }
    }, {
      key: "getHiddenColumns",
      value: function getHiddenColumns() {
        return this.columns.filter(function (_ref7) {
          var visible = _ref7.visible;
          return !visible;
        });
      }
    }, {
      key: "isSelectionColumn",
      value: function isSelectionColumn(column) {
        return column.radio || column.checkbox;
      }
    }, {
      key: "showAllColumns",
      value: function showAllColumns() {
        this._toggleAllColumns(true);
      }
    }, {
      key: "hideAllColumns",
      value: function hideAllColumns() {
        this._toggleAllColumns(false);
      }
    }, {
      key: "_toggleAllColumns",
      value: function _toggleAllColumns(visible) {
        var _this23 = this;
        var _iterator9 = _createForOfIteratorHelper(this.columns.slice().reverse()),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var column = _step9.value;
            if (column.switchable) {
              if (!visible && this.options.showColumns && this.getVisibleColumns().filter(function (it) {
                return it.switchable;
              }).length === this.options.minimumCountColumns) {
                continue;
              }
              column.visible = visible;
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        this.initHeader();
        this.initSearch();
        this.initPagination();
        this.initBody();
        if (this.options.showColumns) {
          var $items = this.$toolbar.find('.keep-open input[type="checkbox"]:not(".toggle-all")').prop('disabled', false);
          if (visible) {
            $items.prop('checked', visible);
          } else {
            $items.get().reverse().forEach(function (item) {
              if ($items.filter(':checked').length > _this23.options.minimumCountColumns) {
                $(item).prop('checked', visible);
              }
            });
          }
          if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
            $items.filter(':checked').prop('disabled', true);
          }
        }
      }
    }, {
      key: "mergeCells",
      value: function mergeCells(options) {
        var row = options.index;
        var col = this.getVisibleFields().indexOf(options.field);
        var rowspan = options.rowspan || 1;
        var colspan = options.colspan || 1;
        var i;
        var j;
        var $tr = this.$body.find('>tr[data-index]');
        col += Utils.getDetailViewIndexOffset(this.options);
        var $td = $tr.eq(row).find('>td').eq(col);
        if (row < 0 || col < 0 || row >= this.data.length) {
          return;
        }
        for (i = row; i < row + rowspan; i++) {
          for (j = col; j < col + colspan; j++) {
            $tr.eq(i).find('>td').eq(j).hide();
          }
        }
        $td.attr('rowspan', rowspan).attr('colspan', colspan).show();
      }
    }, {
      key: "checkAll",
      value: function checkAll() {
        this._toggleCheckAll(true);
      }
    }, {
      key: "uncheckAll",
      value: function uncheckAll() {
        this._toggleCheckAll(false);
      }
    }, {
      key: "_toggleCheckAll",
      value: function _toggleCheckAll(checked) {
        var rowsBefore = this.getSelections();
        this.$selectAll.add(this.$selectAll_).prop('checked', checked);
        this.$selectItem.filter(':enabled').prop('checked', checked);
        this.updateRows();
        this.updateSelected();
        var rowsAfter = this.getSelections();
        if (checked) {
          this.trigger('check-all', rowsAfter, rowsBefore);
          return;
        }
        this.trigger('uncheck-all', rowsAfter, rowsBefore);
      }
    }, {
      key: "checkInvert",
      value: function checkInvert() {
        var $items = this.$selectItem.filter(':enabled');
        var checked = $items.filter(':checked');
        $items.each(function (i, el) {
          $(el).prop('checked', !$(el).prop('checked'));
        });
        this.updateRows();
        this.updateSelected();
        this.trigger('uncheck-some', checked);
        checked = this.getSelections();
        this.trigger('check-some', checked);
      }
    }, {
      key: "check",
      value: function check(index) {
        this._toggleCheck(true, index);
      }
    }, {
      key: "uncheck",
      value: function uncheck(index) {
        this._toggleCheck(false, index);
      }
    }, {
      key: "_toggleCheck",
      value: function _toggleCheck(checked, index) {
        var $el = this.$selectItem.filter("[data-index=\"".concat(index, "\"]"));
        var row = this.data[index];
        if ($el.is(':radio') || this.options.singleSelect || this.options.multipleSelectRow && !this.multipleSelectRowCtrlKey && !this.multipleSelectRowShiftKey) {
          var _iterator10 = _createForOfIteratorHelper(this.options.data),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var r = _step10.value;
              r[this.header.stateField] = false;
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          this.$selectItem.filter(':checked').not($el).prop('checked', false);
        }
        row[this.header.stateField] = checked;
        if (this.options.multipleSelectRow) {
          if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0) {
            var _ref8 = this.multipleSelectRowLastSelectedIndex < index ? [this.multipleSelectRowLastSelectedIndex, index] : [index, this.multipleSelectRowLastSelectedIndex],
              _ref9 = _slicedToArray(_ref8, 2),
              fromIndex = _ref9[0],
              toIndex = _ref9[1];
            for (var i = fromIndex + 1; i < toIndex; i++) {
              this.data[i][this.header.stateField] = true;
              this.$selectItem.filter("[data-index=\"".concat(i, "\"]")).prop('checked', true);
            }
          }
          this.multipleSelectRowCtrlKey = false;
          this.multipleSelectRowShiftKey = false;
          this.multipleSelectRowLastSelectedIndex = checked ? index : -1;
        }
        $el.prop('checked', checked);
        this.updateSelected();
        this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el);
      }
    }, {
      key: "checkBy",
      value: function checkBy(obj) {
        this._toggleCheckBy(true, obj);
      }
    }, {
      key: "uncheckBy",
      value: function uncheckBy(obj) {
        this._toggleCheckBy(false, obj);
      }
    }, {
      key: "_toggleCheckBy",
      value: function _toggleCheckBy(checked, obj) {
        var _this24 = this;
        if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
          return;
        }
        var rows = [];
        this.data.forEach(function (row, i) {
          if (!row.hasOwnProperty(obj.field)) {
            return false;
          }
          if (obj.values.includes(row[obj.field])) {
            var $el = _this24.$selectItem.filter(':enabled').filter(Utils.sprintf('[data-index="%s"]', i));
            var onlyCurrentPage = obj.hasOwnProperty('onlyCurrentPage') ? obj.onlyCurrentPage : false;
            $el = checked ? $el.not(':checked') : $el.filter(':checked');
            if (!$el.length && onlyCurrentPage) {
              return;
            }
            $el.prop('checked', checked);
            row[_this24.header.stateField] = checked;
            rows.push(row);
            _this24.trigger(checked ? 'check' : 'uncheck', row, $el);
          }
        });
        this.updateSelected();
        this.trigger(checked ? 'check-some' : 'uncheck-some', rows);
      }
    }, {
      key: "refresh",
      value: function refresh(params) {
        if (params && params.url) {
          this.options.url = params.url;
        }
        if (params && params.pageNumber) {
          this.options.pageNumber = params.pageNumber;
        }
        if (params && params.pageSize) {
          this.options.pageSize = params.pageSize;
        }
        this.trigger('refresh', this.initServer(params && params.silent, params && params.query, params && params.url));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$el.insertBefore(this.$container);
        $(this.options.toolbar).insertBefore(this.$el);
        this.$container.next().remove();
        this.$container.remove();
        this.$el.html(this.$el_.html()).css('margin-top', '0').attr('class', this.$el_.attr('class') || ''); // reset the class

        var resizeEvent = Utils.getEventName('resize.bootstrap-table', this.$el.attr('id'));
        $(window).off(resizeEvent);
      }
    }, {
      key: "resetView",
      value: function resetView(params) {
        var padding = 0;
        if (params && params.height) {
          this.options.height = params.height;
        }
        this.$tableContainer.toggleClass('has-card-view', this.options.cardView);
        if (this.options.height) {
          var fixedBody = this.$tableBody.get(0);
          this.hasScrollBar = fixedBody.scrollWidth > fixedBody.clientWidth;
        }
        if (!this.options.cardView && this.options.showHeader && this.options.height) {
          this.$tableHeader.show();
          this.resetHeader();
          padding += this.$header.outerHeight(true) + 1;
        } else {
          this.$tableHeader.hide();
          this.trigger('post-header');
        }
        if (!this.options.cardView && this.options.showFooter) {
          this.$tableFooter.show();
          this.fitFooter();
          if (this.options.height) {
            padding += this.$tableFooter.outerHeight(true);
          }
        }
        if (this.$container.hasClass('fullscreen')) {
          this.$tableContainer.css('height', '');
          this.$tableContainer.css('width', '');
        } else if (this.options.height) {
          if (this.$tableBorder) {
            this.$tableBorder.css('width', '');
            this.$tableBorder.css('height', '');
          }
          var toolbarHeight = this.$toolbar.outerHeight(true);
          var paginationHeight = this.$pagination.outerHeight(true);
          var height = this.options.height - toolbarHeight - paginationHeight;
          var $bodyTable = this.$tableBody.find('>table');
          var tableHeight = $bodyTable.outerHeight();
          this.$tableContainer.css('height', "".concat(height, "px"));
          if (this.$tableBorder && $bodyTable.is(':visible')) {
            var tableBorderHeight = height - tableHeight - 2;
            if (this.hasScrollBar) {
              tableBorderHeight -= Utils.getScrollBarWidth();
            }
            this.$tableBorder.css('width', "".concat($bodyTable.outerWidth(), "px"));
            this.$tableBorder.css('height', "".concat(tableBorderHeight, "px"));
          }
        }
        if (this.options.cardView) {
          // remove the element css
          this.$el.css('margin-top', '0');
          this.$tableContainer.css('padding-bottom', '0');
          this.$tableFooter.hide();
        } else {
          // Assign the correct sortable arrow
          this.getCaret();
          this.$tableContainer.css('padding-bottom', "".concat(padding, "px"));
        }
        this.trigger('reset-view');
      }
    }, {
      key: "showLoading",
      value: function showLoading() {
        this.$tableLoading.toggleClass('open', true);
        var fontSize = this.options.loadingFontSize;
        if (this.options.loadingFontSize === 'auto') {
          fontSize = this.$tableLoading.width() * 0.04;
          fontSize = Math.max(12, fontSize);
          fontSize = Math.min(32, fontSize);
          fontSize = "".concat(fontSize, "px");
        }
        this.$tableLoading.find('.loading-text').css('font-size', fontSize);
      }
    }, {
      key: "hideLoading",
      value: function hideLoading() {
        this.$tableLoading.toggleClass('open', false);
      }
    }, {
      key: "togglePagination",
      value: function togglePagination() {
        this.options.pagination = !this.options.pagination;
        var icon = this.options.showButtonIcons ? this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp : '';
        var text = this.options.showButtonText ? this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown() : '';
        this.$toolbar.find('button[name="paginationSwitch"]').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(text));
        this.updatePagination();
        this.trigger('toggle-pagination', this.options.pagination);
      }
    }, {
      key: "toggleFullscreen",
      value: function toggleFullscreen() {
        this.$el.closest('.bootstrap-table').toggleClass('fullscreen');
        this.resetView();
      }
    }, {
      key: "toggleView",
      value: function toggleView() {
        this.options.cardView = !this.options.cardView;
        this.initHeader();
        var icon = this.options.showButtonIcons ? this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff : '';
        var text = this.options.showButtonText ? this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn() : '';
        this.$toolbar.find('button[name="toggle"]').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(text)).attr('aria-label', text).attr('title', text);
        this.initBody();
        this.trigger('toggle', this.options.cardView);
      }
    }, {
      key: "resetSearch",
      value: function resetSearch(text) {
        var $search = Utils.getSearchInput(this);
        var textToUse = text || '';
        $search.val(textToUse);
        this.searchText = textToUse;
        this.onSearch({
          currentTarget: $search
        }, false);
      }
    }, {
      key: "filterBy",
      value: function filterBy(columns, options) {
        this.filterOptions = Utils.isEmptyObject(options) ? this.options.filterOptions : Utils.extend(this.options.filterOptions, options);
        this.filterColumns = Utils.isEmptyObject(columns) ? {} : columns;
        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(params) {
        var options = {
          unit: 'px',
          value: 0
        };
        if (_typeof(params) === 'object') {
          options = Object.assign(options, params);
        } else if (typeof params === 'string' && params === 'bottom') {
          options.value = this.$tableBody[0].scrollHeight;
        } else if (typeof params === 'string' || typeof params === 'number') {
          options.value = params;
        }
        var scrollTo = options.value;
        if (options.unit === 'rows') {
          scrollTo = 0;
          this.$body.find("> tr:lt(".concat(options.value, ")")).each(function (i, el) {
            scrollTo += $(el).outerHeight(true);
          });
        }
        this.$tableBody.scrollTop(scrollTo);
      }
    }, {
      key: "getScrollPosition",
      value: function getScrollPosition() {
        return this.$tableBody.scrollTop();
      }
    }, {
      key: "selectPage",
      value: function selectPage(page) {
        if (page > 0 && page <= this.options.totalPages) {
          this.options.pageNumber = page;
          this.updatePagination();
        }
      }
    }, {
      key: "prevPage",
      value: function prevPage() {
        if (this.options.pageNumber > 1) {
          this.options.pageNumber--;
          this.updatePagination();
        }
      }
    }, {
      key: "nextPage",
      value: function nextPage() {
        if (this.options.pageNumber < this.options.totalPages) {
          this.options.pageNumber++;
          this.updatePagination();
        }
      }
    }, {
      key: "toggleDetailView",
      value: function toggleDetailView(index, _columnDetailFormatter) {
        var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"]', index));
        if ($tr.next().is('tr.detail-view')) {
          this.collapseRow(index);
        } else {
          this.expandRow(index, _columnDetailFormatter);
        }
        this.resetView();
      }
    }, {
      key: "expandRow",
      value: function expandRow(index, _columnDetailFormatter) {
        var row = this.data[index];
        var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"][data-has-detail-view]', index));
        if (this.options.detailViewIcon) {
          $tr.find('a.detail-icon').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose));
        }
        if ($tr.next().is('tr.detail-view')) {
          return;
        }
        $tr.after(Utils.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.children('td').length));
        var $element = $tr.next().find('td');
        var detailFormatter = _columnDetailFormatter || this.options.detailFormatter;
        var content = Utils.calculateObjectValue(this.options, detailFormatter, [index, row, $element], '');
        if ($element.length === 1) {
          $element.append(content);
        }
        this.trigger('expand-row', index, row, $element);
      }
    }, {
      key: "expandRowByUniqueId",
      value: function expandRowByUniqueId(uniqueId) {
        var row = this.getRowByUniqueId(uniqueId);
        if (!row) {
          return;
        }
        this.expandRow(this.data.indexOf(row));
      }
    }, {
      key: "collapseRow",
      value: function collapseRow(index) {
        var row = this.data[index];
        var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"][data-has-detail-view]', index));
        if (!$tr.next().is('tr.detail-view')) {
          return;
        }
        if (this.options.detailViewIcon) {
          $tr.find('a.detail-icon').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen));
        }
        this.trigger('collapse-row', index, row, $tr.next());
        $tr.next().remove();
      }
    }, {
      key: "collapseRowByUniqueId",
      value: function collapseRowByUniqueId(uniqueId) {
        var row = this.getRowByUniqueId(uniqueId);
        if (!row) {
          return;
        }
        this.collapseRow(this.data.indexOf(row));
      }
    }, {
      key: "expandAllRows",
      value: function expandAllRows() {
        var trs = this.$body.find('> tr[data-index][data-has-detail-view]');
        for (var i = 0; i < trs.length; i++) {
          this.expandRow($(trs[i]).data('index'));
        }
      }
    }, {
      key: "collapseAllRows",
      value: function collapseAllRows() {
        var trs = this.$body.find('> tr[data-index][data-has-detail-view]');
        for (var i = 0; i < trs.length; i++) {
          this.collapseRow($(trs[i]).data('index'));
        }
      }
    }, {
      key: "updateColumnTitle",
      value: function updateColumnTitle(params) {
        if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
          return;
        }
        this.columns[this.fieldsColumnsIndex[params.field]].title = this.options.escape && this.options.escapeTitle ? Utils.escapeHTML(params.title) : params.title;
        if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
          this.$header.find('th[data-field]').each(function (i, el) {
            if ($(el).data('field') === params.field) {
              $($(el).find('.th-inner')[0]).html(params.title);
              return false;
            }
          });
          this.resetView();
        }
      }
    }, {
      key: "updateFormatText",
      value: function updateFormatText(formatName, text) {
        if (!/^format/.test(formatName) || !this.options[formatName]) {
          return;
        }
        if (typeof text === 'string') {
          this.options[formatName] = function () {
            return text;
          };
        } else if (typeof text === 'function') {
          this.options[formatName] = text;
        }
        this.initToolbar();
        this.initPagination();
        this.initBody();
      }
    }]);
  }();
  BootstrapTable.VERSION = Constants.VERSION;
  BootstrapTable.DEFAULTS = Constants.DEFAULTS;
  BootstrapTable.LOCALES = Constants.LOCALES;
  BootstrapTable.COLUMN_DEFAULTS = Constants.COLUMN_DEFAULTS;
  BootstrapTable.METHODS = Constants.METHODS;
  BootstrapTable.EVENTS = Constants.EVENTS;

  // BOOTSTRAP TABLE PLUGIN DEFINITION
  // =======================

  $.BootstrapTable = BootstrapTable;
  $.fn.bootstrapTable = function (option) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key5 = 1; _key5 < _len2; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    var value;
    this.each(function (i, el) {
      var data = $(el).data('bootstrap.table');
      if (typeof option === 'string') {
        var _data2;
        if (!Constants.METHODS.includes(option)) {
          throw new Error("Unknown method: ".concat(option));
        }
        if (!data) {
          return;
        }
        value = (_data2 = data)[option].apply(_data2, args);
        if (option === 'destroy') {
          $(el).removeData('bootstrap.table');
        }
        return;
      }
      if (data) {
        console.warn('You cannot initialize the table more than once!');
        return;
      }
      var options = Utils.extend(true, {}, BootstrapTable.DEFAULTS, $(el).data(), _typeof(option) === 'object' && option);
      data = new $.BootstrapTable(el, options);
      $(el).data('bootstrap.table', data);
      data.init();
    });
    return typeof value === 'undefined' ? this : value;
  };
  $.fn.bootstrapTable.Constructor = BootstrapTable;
  $.fn.bootstrapTable.theme = Constants.THEME;
  $.fn.bootstrapTable.VERSION = Constants.VERSION;
  $.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS;
  $.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS;
  $.fn.bootstrapTable.events = BootstrapTable.EVENTS;
  $.fn.bootstrapTable.locales = BootstrapTable.LOCALES;
  $.fn.bootstrapTable.methods = BootstrapTable.METHODS;
  $.fn.bootstrapTable.utils = Utils;

  // BOOTSTRAP TABLE INIT
  // =======================

  $(function () {
    $('[data-toggle="table"]').bootstrapTable();
  });

  return BootstrapTable;

}));
