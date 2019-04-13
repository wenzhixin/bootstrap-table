(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableCookie = mod.exports;
  }
})(this, function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
   * @author: Dennis Hernández
   * @webSite: http://djhvscf.github.io/Blog
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  (function ($) {
    var UtilsCookie = {
      cookieIds: {
        sortOrder: 'bs.table.sortOrder',
        sortName: 'bs.table.sortName',
        pageNumber: 'bs.table.pageNumber',
        pageList: 'bs.table.pageList',
        columns: 'bs.table.columns',
        searchText: 'bs.table.searchText',
        filterControl: 'bs.table.filterControl',
        filterBy: 'bs.table.filterBy'
      },
      getCurrentHeader: function getCurrentHeader(that) {
        var header = that.$header;
        if (that.options.height) {
          header = that.$tableHeader;
        }

        return header;
      },
      getCurrentSearchControls: function getCurrentSearchControls(that) {
        var searchControls = 'select, input';
        if (that.options.height) {
          searchControls = 'table select, table input';
        }

        return searchControls;
      },
      cookieEnabled: function cookieEnabled() {
        return !!navigator.cookieEnabled;
      },
      inArrayCookiesEnabled: function inArrayCookiesEnabled(cookieName, cookiesEnabled) {
        var index = -1;

        for (var i = 0; i < cookiesEnabled.length; i++) {
          if (cookieName.toLowerCase() === cookiesEnabled[i].toLowerCase()) {
            index = i;
            break;
          }
        }

        return index;
      },
      setCookie: function setCookie(that, cookieName, cookieValue) {
        if (!that.options.cookie || !UtilsCookie.cookieEnabled() || that.options.cookieIdTable === '') {
          return;
        }

        if (UtilsCookie.inArrayCookiesEnabled(cookieName, that.options.cookiesEnabled) === -1) {
          return;
        }

        cookieName = that.options.cookieIdTable + '.' + cookieName;

        switch (that.options.cookieStorage) {
          case 'cookieStorage':
            document.cookie = [cookieName, '=', encodeURIComponent(cookieValue), '; expires=' + UtilsCookie.calculateExpiration(that.options.cookieExpire), that.options.cookiePath ? '; path=' + that.options.cookiePath : '', that.options.cookieDomain ? '; domain=' + that.options.cookieDomain : '', that.options.cookieSecure ? '; secure' : ''].join('');
            break;
          case 'localStorage':
            localStorage.setItem(cookieName, cookieValue);
            break;
          case 'sessionStorage':
            sessionStorage.setItem(cookieName, cookieValue);
            break;
          default:
            return false;
        }

        return true;
      },
      getCookie: function getCookie(that, tableName, cookieName) {
        if (!cookieName) {
          return null;
        }

        if (UtilsCookie.inArrayCookiesEnabled(cookieName, that.options.cookiesEnabled) === -1) {
          return null;
        }

        cookieName = tableName + '.' + cookieName;

        switch (that.options.cookieStorage) {
          case 'cookieStorage':
            var value = '; ' + document.cookie;
            var parts = value.split('; ' + cookieName + '=');
            return parts.length === 2 ? decodeURIComponent(parts.pop().split(';').shift()) : null;
          case 'localStorage':
            return localStorage.getItem(cookieName);
          case 'sessionStorage':
            return sessionStorage.getItem(cookieName);
          default:
            return null;
        }
      },
      deleteCookie: function deleteCookie(that, tableName, cookieName) {
        cookieName = tableName + '.' + cookieName;

        switch (that.options.cookieStorage) {
          case 'cookieStorage':
            document.cookie = [encodeURIComponent(cookieName), '=', '; expires=Thu, 01 Jan 1970 00:00:00 GMT', that.options.cookiePath ? '; path=' + that.options.cookiePath : '', that.options.cookieDomain ? '; domain=' + that.options.cookieDomain : ''].join('');
            break;
          case 'localStorage':
            localStorage.removeItem(cookieName);
            break;
          case 'sessionStorage':
            sessionStorage.removeItem(cookieName);
            break;
          default:
            return false;
        }
        return true;
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
      initCookieFilters: function initCookieFilters(bootstrapTable) {
        setTimeout(function () {
          var parsedCookieFilters = JSON.parse(UtilsCookie.getCookie(bootstrapTable, bootstrapTable.options.cookieIdTable, UtilsCookie.cookieIds.filterControl));

          if (!bootstrapTable.options.filterControlValuesLoaded && parsedCookieFilters) {

            var cachedFilters = {};
            var header = UtilsCookie.getCurrentHeader(bootstrapTable);
            var searchControls = UtilsCookie.getCurrentSearchControls(bootstrapTable);

            var applyCookieFilters = function applyCookieFilters(element, filteredCookies) {
              $(filteredCookies).each(function (i, cookie) {
                if (cookie.text !== '') {
                  $(element).val(cookie.text);
                  cachedFilters[cookie.field] = cookie.text;
                }
              });
            };

            header.find(searchControls).each(function () {
              var field = $(this).closest('[data-field]').data('field');
              var filteredCookies = parsedCookieFilters.filter(function (cookie) {
                return cookie.field === field;
              });

              applyCookieFilters(this, filteredCookies);
            });

            bootstrapTable.initColumnSearch(cachedFilters);
            bootstrapTable.options.filterControlValuesLoaded = true;
            bootstrapTable.initServer();
          }
        }, 250);
      }
    };

    $.extend($.fn.bootstrapTable.defaults, {
      cookie: false,
      cookieExpire: '2h',
      cookiePath: null,
      cookieDomain: null,
      cookieSecure: null,
      cookieIdTable: '',
      cookiesEnabled: ['bs.table.sortOrder', 'bs.table.sortName', 'bs.table.pageNumber', 'bs.table.pageList', 'bs.table.columns', 'bs.table.searchText', 'bs.table.filterControl', 'bs.table.filterBy'],
      cookieStorage: 'cookieStorage', // localStorage, sessionStorage
      // internal variable
      filterControls: [],
      filterControlValuesLoaded: false
    });

    $.fn.bootstrapTable.methods.push('getCookies');
    $.fn.bootstrapTable.methods.push('deleteCookie');

    $.extend($.fn.bootstrapTable.utils, {
      setCookie: UtilsCookie.setCookie,
      getCookie: UtilsCookie.getCookie
    });

    $.BootstrapTable = function (_$$BootstrapTable) {
      _inherits(_class, _$$BootstrapTable);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'init',
        value: function init() {
          // FilterBy logic
          var filterByCookie = JSON.parse(UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.filterBy));
          this.filterColumns = filterByCookie ? filterByCookie : {};

          // FilterControl logic
          this.options.filterControls = [];
          this.options.filterControlValuesLoaded = false;

          this.options.cookiesEnabled = typeof this.options.cookiesEnabled === 'string' ? this.options.cookiesEnabled.replace('[', '').replace(']', '').replace(/ /g, '').toLowerCase().split(',') : this.options.cookiesEnabled;

          if (this.options.filterControl) {
            var that = this;
            this.$el.on('column-search.bs.table', function (e, field, text) {
              var isNewField = true;

              for (var i = 0; i < that.options.filterControls.length; i++) {
                if (that.options.filterControls[i].field === field) {
                  that.options.filterControls[i].text = text;
                  isNewField = false;
                  break;
                }
              }
              if (isNewField) {
                that.options.filterControls.push({
                  field: field,
                  text: text
                });
              }

              UtilsCookie.setCookie(that, UtilsCookie.cookieIds.filterControl, JSON.stringify(that.options.filterControls));
            }).on('created-controls.bs.table', UtilsCookie.initCookieFilters(that));
          }
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'init', this).call(this);
        }
      }, {
        key: 'initServer',
        value: function initServer() {
          var _get2;

          if (this.options.cookie && this.options.filterControl && !this.options.filterControlValuesLoaded) {
            var cookie = JSON.parse(UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.filterControl));
            if (cookie) {
              return;
            }
          }

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_get2 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initServer', this)).call.apply(_get2, [this].concat(args));
        }
      }, {
        key: 'initTable',
        value: function initTable() {
          var _get3;

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_get3 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initTable', this)).call.apply(_get3, [this].concat(args));
          this.initCookie();
        }
      }, {
        key: 'onSort',
        value: function onSort() {
          var _get4;

          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          (_get4 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onSort', this)).call.apply(_get4, [this].concat(args));
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortOrder, this.options.sortOrder);
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.sortName, this.options.sortName);
        }
      }, {
        key: 'onPageNumber',
        value: function onPageNumber() {
          var _get5;

          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          (_get5 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onPageNumber', this)).call.apply(_get5, [this].concat(args));
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
        }
      }, {
        key: 'onPageListChange',
        value: function onPageListChange() {
          var _get6;

          for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          (_get6 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onPageListChange', this)).call.apply(_get6, [this].concat(args));
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageList, this.options.pageSize);
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
        }
      }, {
        key: 'onPagePre',
        value: function onPagePre() {
          var _get7;

          for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          (_get7 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onPagePre', this)).call.apply(_get7, [this].concat(args));
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
        }
      }, {
        key: 'onPageNext',
        value: function onPageNext() {
          var _get8;

          for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          (_get8 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onPageNext', this)).call.apply(_get8, [this].concat(args));
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
        }
      }, {
        key: 'toggleColumn',
        value: function toggleColumn() {
          var _get9;

          for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }

          (_get9 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'toggleColumn', this)).call.apply(_get9, [this].concat(args));

          var visibleColumns = [];

          $.each(this.columns, function (i, column) {
            if (column.visible) {
              visibleColumns.push(column.field);
            }
          });

          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.columns, JSON.stringify(visibleColumns));
        }
      }, {
        key: 'selectPage',
        value: function selectPage(page) {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'selectPage', this).call(this, page);
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, page);
        }
      }, {
        key: 'onSearch',
        value: function onSearch(event) {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onSearch', this).call(this, event);

          if ($(event.currentTarget).parent().hasClass('search')) {
            UtilsCookie.setCookie(this, UtilsCookie.cookieIds.searchText, this.searchText);
          }
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.pageNumber, this.options.pageNumber);
        }
      }, {
        key: 'filterBy',
        value: function filterBy() {
          var _get10;

          for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }

          (_get10 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'filterBy', this)).call.apply(_get10, [this].concat(args));
          UtilsCookie.setCookie(this, UtilsCookie.cookieIds.filterBy, JSON.stringify(this.filterColumns));
        }
      }, {
        key: 'initCookie',
        value: function initCookie() {
          if (!this.options.cookie) {
            return;
          }

          if (this.options.cookieIdTable === '' || this.options.cookieExpire === '' || !UtilsCookie.cookieEnabled()) {
            console.error('Configuration error. Please review the cookieIdTable and the cookieExpire property. If the properties are correct, then this browser does not support cookies.');
            this.options.cookie = false; // Make sure that the cookie extension is disabled
            return;
          }

          var sortOrderCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.sortOrder);
          var sortOrderNameCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.sortName);
          var pageNumberCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.pageNumber);
          var pageListCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.pageList);
          var columnsCookie = JSON.parse(UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.columns));
          var searchTextCookie = UtilsCookie.getCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds.searchText);

          // sortOrder
          this.options.sortOrder = sortOrderCookie ? sortOrderCookie : this.options.sortOrder;
          // sortName
          this.options.sortName = sortOrderNameCookie ? sortOrderNameCookie : this.options.sortName;
          // pageNumber
          this.options.pageNumber = pageNumberCookie ? +pageNumberCookie : this.options.pageNumber;
          // pageSize
          this.options.pageSize = pageListCookie ? pageListCookie === this.options.formatAllRows() ? pageListCookie : +pageListCookie : this.options.pageSize;
          // searchText
          this.options.searchText = searchTextCookie ? searchTextCookie : '';

          if (columnsCookie) {
            $.each(this.columns, function (i, column) {
              column.visible = $.inArray(column.field, columnsCookie) !== -1;
            });
          }
        }
      }, {
        key: 'getCookies',
        value: function getCookies() {
          var bootstrapTable = this;
          var cookies = {};
          $.each(UtilsCookie.cookieIds, function (key, value) {
            cookies[key] = UtilsCookie.getCookie(bootstrapTable, bootstrapTable.options.cookieIdTable, value);
            if (key === 'columns') {
              cookies[key] = JSON.parse(cookies[key]);
            }
          });
          return cookies;
        }
      }, {
        key: 'deleteCookie',
        value: function deleteCookie(cookieName) {
          if (cookieName === '' || !UtilsCookie.cookieEnabled()) {
            return;
          }

          UtilsCookie.deleteCookie(this, this.options.cookieIdTable, UtilsCookie.cookieIds[cookieName]);
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});