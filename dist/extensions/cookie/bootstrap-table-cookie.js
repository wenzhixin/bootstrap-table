(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.date.to-json.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.entries.js'), require('core-js/modules/es.object.keys.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.string.includes.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.string.search.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.date.to-json.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.entries.js', 'core-js/modules/es.object.keys.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.string.includes.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.string.search.js', 'core-js/modules/web.dom-collections.for-each.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_filter_js, es_array_find_js, es_array_includes_js, es_array_join_js, es_array_map_js, es_date_toJson_js, es_object_assign_js, es_object_entries_js, es_object_keys_js, es_object_toString_js, es_regexp_exec_js, es_regexp_toString_js, es_string_includes_js, es_string_replace_js, es_string_search_js, web_domCollections_forEach_js, $) { 'use strict';

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

  /**
   * @author: Dennis Hernández
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */
  var Utils = $.fn.bootstrapTable.utils;
  var UtilsCookie = {
    cookieIds: {
      sortOrder: 'bs.table.sortOrder',
      sortName: 'bs.table.sortName',
      sortPriority: 'bs.table.sortPriority',
      pageNumber: 'bs.table.pageNumber',
      pageList: 'bs.table.pageList',
      hiddenColumns: 'bs.table.hiddenColumns',
      cardView: 'bs.table.cardView',
      customView: 'bs.table.customView',
      searchText: 'bs.table.searchText',
      reorderColumns: 'bs.table.reorderColumns',
      filterControl: 'bs.table.filterControl',
      filterBy: 'bs.table.filterBy'
    },
    getCurrentHeader: function getCurrentHeader(that) {
      return that.options.height ? that.$tableHeader : that.$header;
    },
    getCurrentSearchControls: function getCurrentSearchControls(that) {
      return that.options.height ? 'table select, table input' : 'select, input';
    },
    isCookieSupportedByBrowser: function isCookieSupportedByBrowser() {
      return navigator.cookieEnabled;
    },
    isCookieEnabled: function isCookieEnabled(that, cookieName) {
      return that.options.cookiesEnabled.includes(cookieName);
    },
    setCookie: function setCookie(that, cookieName, cookieValue) {
      if (!that.options.cookie || !UtilsCookie.isCookieEnabled(that, cookieName)) {
        return;
      }
      return that._storage.setItem("".concat(that.options.cookieIdTable, ".").concat(cookieName), cookieValue);
    },
    getCookie: function getCookie(that, cookieName) {
      if (!cookieName || !UtilsCookie.isCookieEnabled(that, cookieName)) {
        return null;
      }
      return that._storage.getItem("".concat(that.options.cookieIdTable, ".").concat(cookieName));
    },
    deleteCookie: function deleteCookie(that, cookieName) {
      return that._storage.removeItem("".concat(that.options.cookieIdTable, ".").concat(cookieName));
    },
    calculateExpiration: function calculateExpiration(cookieExpire) {
      var time = cookieExpire.replace(/[0-9]*/, ''); // s,mi,h,d,m,y

      cookieExpire = cookieExpire.replace(/[A-Za-z]{1,2}/, ''); // number

      switch (time.toLowerCase()) {
        case 's':
          cookieExpire = +cookieExpire;
          break;
        case 'mi':
          cookieExpire *= 60;
          break;
        case 'h':
          cookieExpire = cookieExpire * 60 * 60;
          break;
        case 'd':
          cookieExpire = cookieExpire * 24 * 60 * 60;
          break;
        case 'm':
          cookieExpire = cookieExpire * 30 * 24 * 60 * 60;
          break;
        case 'y':
          cookieExpire = cookieExpire * 365 * 24 * 60 * 60;
          break;
        default:
          cookieExpire = undefined;
          break;
      }
      if (!cookieExpire) {
        return '';
      }
      var d = new Date();
      d.setTime(d.getTime() + cookieExpire * 1000);
      return d.toGMTString();
    },
    initCookieFilters: function initCookieFilters(that) {
      setTimeout(function () {
        var parsedCookieFilters = JSON.parse(UtilsCookie.getCookie(that, UtilsCookie.cookieIds.filterControl));
        if (!that._filterControlValuesLoaded && parsedCookieFilters) {
          var cachedFilters = {};
          var header = UtilsCookie.getCurrentHeader(that);
          var searchControls = UtilsCookie.getCurrentSearchControls(that);
          var applyCookieFilters = function applyCookieFilters(element, filteredCookies) {
            filteredCookies.forEach(function (cookie) {
              var value = element.value.toString();
              var text = cookie.text;
              if (text === '' || element.type === 'radio' && value !== text) {
                return;
              }
              if (element.tagName === 'INPUT' && element.type === 'radio' && value === text) {
                element.checked = true;
                cachedFilters[cookie.field] = text;
              } else if (element.tagName === 'INPUT') {
                element.value = text;
                cachedFilters[cookie.field] = text;
              } else if (element.tagName === 'SELECT' && that.options.filterControlContainer) {
                element.value = text;
                cachedFilters[cookie.field] = text;
              } else if (text !== '' && element.tagName === 'SELECT') {
                cachedFilters[cookie.field] = text;
                var _iterator = _createForOfIteratorHelper(element),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var currentElement = _step.value;
                    if (currentElement.value === text) {
                      currentElement.selected = true;
                      return;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                var option = document.createElement('option');
                option.value = text;
                option.text = text;
                element.add(option, element[1]);
                element.selectedIndex = 1;
              }
            });
          };
          var filterContainer = header;
          if (that.options.filterControlContainer) {
            filterContainer = $("".concat(that.options.filterControlContainer));
          }
          filterContainer.find(searchControls).each(function () {
            var field = $(this).closest('[data-field]').data('field');
            var filteredCookies = parsedCookieFilters.filter(function (cookie) {
              return cookie.field === field;
            });
            applyCookieFilters(this, filteredCookies);
          });
          that.initColumnSearch(cachedFilters);
          that._filterControlValuesLoaded = true;
          that.initServer();
        }
      }, 250);
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, {
    cookie: false,
    cookieExpire: '2h',
    cookiePath: null,
    cookieDomain: null,
    cookieSecure: null,
    cookieSameSite: 'Lax',
    cookieIdTable: '',
    cookiesEnabled: ['bs.table.sortOrder', 'bs.table.sortName', 'bs.table.sortPriority', 'bs.table.pageNumber', 'bs.table.pageList', 'bs.table.hiddenColumns', 'bs.table.searchText', 'bs.table.filterControl', 'bs.table.filterBy', 'bs.table.reorderColumns', 'bs.table.cardView', 'bs.table.customView'],
    cookieStorage: 'cookieStorage',
    // localStorage, sessionStorage, customStorage
    cookieCustomStorageGet: null,
    cookieCustomStorageSet: null,
    cookieCustomStorageDelete: null,
    // internal variable
    _filterControls: [],
    _filterControlValuesLoaded: false,
    _storage: {
      setItem: undefined,
      getItem: undefined,
      removeItem: undefined
    }
  });
  $.fn.bootstrapTable.methods.push('getCookies');
  $.fn.bootstrapTable.methods.push('deleteCookie');
  Object.assign($.fn.bootstrapTable.utils, {
    setCookie: UtilsCookie.setCookie,
    getCookie: UtilsCookie.getCookie
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
        if (this.options.cookie) {
          if (this.options.cookieStorage === 'cookieStorage' && !UtilsCookie.isCookieSupportedByBrowser()) {
            throw new Error('Cookies are not enabled in this browser.');
          }
          this.configureStorage();

          // FilterBy logic
          var filterByCookieValue = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.filterBy);
          if (typeof filterByCookieValue === 'boolean' && !filterByCookieValue) {
            throw new Error('The cookie value of filterBy must be a json!');
          }
          var filterByCookie = {};
          try {
            filterByCookie = JSON.parse(filterByCookieValue);
          } catch (e) {
            throw new Error('Could not parse the json of the filterBy cookie!');
          }
          this.filterColumns = filterByCookie ? filterByCookie : {};

          // FilterControl logic
          this._filterControls = [];
          this._filterControlValuesLoaded = false;
          this.options.cookiesEnabled = typeof this.options.cookiesEnabled === 'string' ? this.options.cookiesEnabled.replace('[', '').replace(']', '').replace(/'/g, '').replace(/ /g, '').split(',') : this.options.cookiesEnabled;
          if (this.options.filterControl) {
            var that = this;
            this.$el.on('column-search.bs.table', function (e, field, text) {
              var isNewField = true;
              for (var i = 0; i < that._filterControls.length; i++) {
                if (that._filterControls[i].field === field) {
                  that._filterControls[i].text = text;
                  isNewField = false;
                  break;
                }
              }
              if (isNewField) {
                that._filterControls.push({
                  field: field,
                  text: text
                });
              }
              UtilsCookie.setCookie(that, UtilsCookie.cookieIds.filterControl, JSON.stringify(that._filterControls));
            }).on('created-controls.bs.table', UtilsCookie.initCookieFilters(that));
          }
        }
        _get(_getPrototypeOf(_class.prototype), "init", this).call(this);
      }
    }, {
      key: "initServer",
      value: function initServer() {
        var _get2;
        if (this.options.cookie && this.options.filterControl && !this._filterControlValuesLoaded) {
          var cookie = JSON.parse(UtilsCookie.getCookie(this, UtilsCookie.cookieIds.filterControl));
          if (cookie) {
            return;
          }
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "initServer", this)).call.apply(_get2, [this].concat(args));
      }
    }, {
      key: "initTable",
      value: function initTable() {
        var _get3;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "initTable", this)).call.apply(_get3, [this].concat(args));
        this.initCookie();
      }
    }, {
      key: "onSort",
      value: function onSort() {
        var _get4;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        (_get4 = _get(_getPrototypeOf(_class.prototype), "onSort", this)).call.apply(_get4, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        if (this.options.sortName === undefined || this.options.sortOrder === undefined) {
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortName);
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortOrder);
        } else {
          this.options.sortPriority = null;
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortPriority);
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortOrder, this.options.sortOrder);
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortName, this.options.sortName);
        }
      }
    }, {
      key: "onMultipleSort",
      value: function onMultipleSort() {
        var _get5;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        (_get5 = _get(_getPrototypeOf(_class.prototype), "onMultipleSort", this)).call.apply(_get5, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        if (this.options.sortPriority === undefined) {
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortPriority);
        } else {
          this.options.sortName = undefined;
          this.options.sortOrder = undefined;
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortName);
          UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds.sortOrder);
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortPriority, JSON.stringify(this.options.sortPriority));
        }
      }
    }, {
      key: "onPageNumber",
      value: function onPageNumber() {
        var _get6;
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }
        (_get6 = _get(_getPrototypeOf(_class.prototype), "onPageNumber", this)).call.apply(_get6, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "onPageListChange",
      value: function onPageListChange() {
        var _get7;
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        (_get7 = _get(_getPrototypeOf(_class.prototype), "onPageListChange", this)).call.apply(_get7, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageList, this.options.pageSize === this.options.formatAllRows() ? 'all' : this.options.pageSize);
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "onPagePre",
      value: function onPagePre() {
        var _get8;
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }
        (_get8 = _get(_getPrototypeOf(_class.prototype), "onPagePre", this)).call.apply(_get8, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "onPageNext",
      value: function onPageNext() {
        var _get9;
        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        (_get9 = _get(_getPrototypeOf(_class.prototype), "onPageNext", this)).call.apply(_get9, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn() {
        var _get10;
        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          args[_key9] = arguments[_key9];
        }
        (_get10 = _get(_getPrototypeOf(_class.prototype), "_toggleColumn", this)).call.apply(_get10, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.hiddenColumns, JSON.stringify(this.getHiddenColumns().map(function (column) {
          return column.field;
        })));
      }
    }, {
      key: "_toggleAllColumns",
      value: function _toggleAllColumns() {
        var _get11;
        for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          args[_key10] = arguments[_key10];
        }
        (_get11 = _get(_getPrototypeOf(_class.prototype), "_toggleAllColumns", this)).call.apply(_get11, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.hiddenColumns, JSON.stringify(this.getHiddenColumns().map(function (column) {
          return column.field;
        })));
      }
    }, {
      key: "toggleView",
      value: function toggleView() {
        _get(_getPrototypeOf(_class.prototype), "toggleView", this).call(this);
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.cardView, this.options.cardView);
      }
    }, {
      key: "toggleCustomView",
      value: function toggleCustomView() {
        _get(_getPrototypeOf(_class.prototype), "toggleCustomView", this).call(this);
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.customView, this.customViewDefaultView);
      }
    }, {
      key: "selectPage",
      value: function selectPage(page) {
        _get(_getPrototypeOf(_class.prototype), "selectPage", this).call(this, page);
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, page);
      }
    }, {
      key: "onSearch",
      value: function onSearch(event) {
        _get(_getPrototypeOf(_class.prototype), "onSearch", this).call(this, event, arguments.length > 1 ? arguments[1] : true);
        if (!this.options.cookie) {
          return;
        }
        if (this.options.search) {
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.searchText, this.searchText);
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
      }
    }, {
      key: "initHeader",
      value: function initHeader() {
        var _get12;
        if (this.options.reorderableColumns && this.options.cookie) {
          this.columnsSortOrder = JSON.parse(UtilsCookie.getCookie(this, UtilsCookie.cookieIds.reorderColumns));
        }
        for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          args[_key11] = arguments[_key11];
        }
        (_get12 = _get(_getPrototypeOf(_class.prototype), "initHeader", this)).call.apply(_get12, [this].concat(args));
      }
    }, {
      key: "persistReorderColumnsState",
      value: function persistReorderColumnsState(that) {
        UtilsCookie.setCookie(that, UtilsCookie.cookieIds.reorderColumns, JSON.stringify(that.columnsSortOrder));
      }
    }, {
      key: "filterBy",
      value: function filterBy() {
        var _get13;
        for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          args[_key12] = arguments[_key12];
        }
        (_get13 = _get(_getPrototypeOf(_class.prototype), "filterBy", this)).call.apply(_get13, [this].concat(args));
        if (!this.options.cookie) {
          return;
        }
        UtilsCookie.setCookie(this, UtilsCookie.cookieIds.filterBy, JSON.stringify(this.filterColumns));
      }
    }, {
      key: "initCookie",
      value: function initCookie() {
        if (!this.options.cookie) {
          return;
        }
        if (this.options.cookieIdTable === '' || this.options.cookieExpire === '') {
          console.error('Configuration error. Please review the cookieIdTable and the cookieExpire property. If the properties are correct, then this browser does not support cookies.');
          this.options.cookie = false; // Make sure that the cookie extension is disabled
          return;
        }
        var sortOrderCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.sortOrder);
        var sortOrderNameCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.sortName);
        var sortPriorityCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.sortPriority);
        var pageNumberCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.pageNumber);
        var pageListCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.pageList);
        var searchTextCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.searchText);
        var cardViewCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.cardView);
        var customViewCookie = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.customView);
        var hiddenColumnsCookieValue = UtilsCookie.getCookie(this, UtilsCookie.cookieIds.hiddenColumns);
        var hiddenColumnsCookie = {};
        try {
          hiddenColumnsCookie = JSON.parse(hiddenColumnsCookieValue);
        } catch (e) {
          throw new Error('Could not parse the json of the hidden columns cookie!', hiddenColumnsCookieValue);
        }
        try {
          sortPriorityCookie = JSON.parse(sortPriorityCookie);
        } catch (e) {
          throw new Error('Could not parse the json of the sortPriority cookie!', sortPriorityCookie);
        }
        if (!sortPriorityCookie) {
          // sortOrder
          this.options.sortOrder = sortOrderCookie ? sortOrderCookie : this.options.sortOrder;
          // sortName
          this.options.sortName = sortOrderNameCookie ? sortOrderNameCookie : this.options.sortName;
        } else {
          this.options.sortOrder = undefined;
          this.options.sortName = undefined;
        }

        // sortPriority
        this.options.sortPriority = sortPriorityCookie ? sortPriorityCookie : this.options.sortPriority;
        if (this.options.sortOrder || this.options.sortName) {
          // sortPriority
          this.options.sortPriority = null;
        }

        // pageNumber
        this.options.pageNumber = pageNumberCookie ? +pageNumberCookie : this.options.pageNumber;
        // pageSize
        this.options.pageSize = pageListCookie ? pageListCookie === 'all' ? this.options.formatAllRows() : +pageListCookie : this.options.pageSize;
        // searchText
        if (UtilsCookie.isCookieEnabled(this, UtilsCookie.cookieIds.searchText) && this.options.searchText === '') {
          this.options.searchText = searchTextCookie ? searchTextCookie : '';
        }
        // cardView
        if (cardViewCookie !== null) {
          this.options.cardView = cardViewCookie === 'true' ? cardViewCookie : false;
        }
        this.customViewDefaultView = customViewCookie === 'true';
        if (hiddenColumnsCookie) {
          var _iterator2 = _createForOfIteratorHelper(this.columns),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var column = _step2.value;
              if (!column.switchable) {
                continue;
              }
              column.visible = this.isSelectionColumn(column) || !hiddenColumnsCookie.includes(column.field);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    }, {
      key: "getCookies",
      value: function getCookies() {
        var bootstrapTable = this;
        var cookies = {};
        for (var _i = 0, _Object$entries = Object.entries(UtilsCookie.cookieIds); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          cookies[key] = UtilsCookie.getCookie(bootstrapTable, value);
          if (key === 'columns' || key === 'hiddenColumns' || key === 'sortPriority') {
            cookies[key] = JSON.parse(cookies[key]);
          }
        }
        return cookies;
      }
    }, {
      key: "deleteCookie",
      value: function deleteCookie(cookieName) {
        if (!cookieName || !this.options.cookie) {
          return;
        }
        UtilsCookie.deleteCookie(this, UtilsCookie.cookieIds[cookieName]);
      }
    }, {
      key: "configureStorage",
      value: function configureStorage() {
        var that = this;
        this._storage = {};
        switch (this.options.cookieStorage) {
          case 'cookieStorage':
            this._storage.setItem = function (cookieName, cookieValue) {
              document.cookie = [cookieName, '=', encodeURIComponent(cookieValue), "; expires=".concat(UtilsCookie.calculateExpiration(that.options.cookieExpire)), that.options.cookiePath ? "; path=".concat(that.options.cookiePath) : '', that.options.cookieDomain ? "; domain=".concat(that.options.cookieDomain) : '', that.options.cookieSecure ? '; secure' : '', ";SameSite=".concat(that.options.cookieSameSite)].join('');
            };
            this._storage.getItem = function (cookieName) {
              var value = "; ".concat(document.cookie);
              var parts = value.split("; ".concat(cookieName, "="));
              return parts.length === 2 ? decodeURIComponent(parts.pop().split(';').shift()) : null;
            };
            this._storage.removeItem = function (cookieName) {
              document.cookie = [encodeURIComponent(cookieName), '=', '; expires=Thu, 01 Jan 1970 00:00:00 GMT', that.options.cookiePath ? "; path=".concat(that.options.cookiePath) : '', that.options.cookieDomain ? "; domain=".concat(that.options.cookieDomain) : '', ";SameSite=".concat(that.options.cookieSameSite)].join('');
            };
            break;
          case 'localStorage':
            this._storage.setItem = function (cookieName, cookieValue) {
              localStorage.setItem(cookieName, cookieValue);
            };
            this._storage.getItem = function (cookieName) {
              return localStorage.getItem(cookieName);
            };
            this._storage.removeItem = function (cookieName) {
              localStorage.removeItem(cookieName);
            };
            break;
          case 'sessionStorage':
            this._storage.setItem = function (cookieName, cookieValue) {
              sessionStorage.setItem(cookieName, cookieValue);
            };
            this._storage.getItem = function (cookieName) {
              return sessionStorage.getItem(cookieName);
            };
            this._storage.removeItem = function (cookieName) {
              sessionStorage.removeItem(cookieName);
            };
            break;
          case 'customStorage':
            if (!this.options.cookieCustomStorageSet || !this.options.cookieCustomStorageGet || !this.options.cookieCustomStorageDelete) {
              throw new Error('The following options must be set while using the customStorage: cookieCustomStorageSet, cookieCustomStorageGet and cookieCustomStorageDelete');
            }
            this._storage.setItem = function (cookieName, cookieValue) {
              Utils.calculateObjectValue(that.options, that.options.cookieCustomStorageSet, [cookieName, cookieValue], '');
            };
            this._storage.getItem = function (cookieName) {
              return Utils.calculateObjectValue(that.options, that.options.cookieCustomStorageGet, [cookieName], '');
            };
            this._storage.removeItem = function (cookieName) {
              Utils.calculateObjectValue(that.options, that.options.cookieCustomStorageDelete, [cookieName], '');
            };
            break;
          default:
            throw new Error('Storage method not supported.');
        }
      }
    }]);
  }($.BootstrapTable);

}));
