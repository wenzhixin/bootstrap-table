(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.parse-int.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.parse-int.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_slice_js, es_object_assign_js, es_parseInt_js, $) { 'use strict';

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
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
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

  /**
   * @author doug-the-guy
   * @update zhixin wen <wenzhixin2010@gmail.com>
   *
   * Bootstrap Table Pipeline
   * -----------------------
   *
   * This plugin enables client side data caching for server side requests which will
   * eliminate the need to issue a new request every page change. This will allow
   * for a performance balance for a large data set between returning all data at once
   * (client side paging) and a new server side request (server side paging).
   *
   * There are two new options:
   *  - usePipeline: enables this feature
   *  - pipelineSize: the size of each cache window
   *
   * The size of the pipeline must be evenly divisible by the current page size. This is
   * assured by rounding up to the nearest evenly divisible value. For example, if
   * the pipeline size is 4990 and the current page size is 25, then pipeline size will
   * be dynamically set to 5000.
   *
   * The cache windows are computed based on the pipeline size and the total number of rows
   * returned by the server side query. For example, with pipeline size 500 and total rows
   * 1300, the cache windows will be:
   *
   *  [{'lower': 0, 'upper': 499}, {'lower': 500, 'upper': 999}, {'lower': 1000, 'upper': 1499}]
   *
   * Using the limit (i.e. the pipelineSize) and offset parameters, the server side request
   * **MUST** return only the data in the requested cache window **AND** the total number of rows.
   * To wit, the server side code must use the offset and limit parameters to prepare the response
   * data.
   *
   * On a page change, the new offset is checked if it is within the current cache window. If so,
   * the requested page data is returned from the cached data set. Otherwise, a new server side
   * request will be issued for the new cache window.
   *
   * The current cached data is only invalidated on these events:
   *  * sorting
   *  * searching
   *  * page size change
   *  * page change moves into a new cache window
   *
   * There are two new events:
   *  - cached-data-hit.bs.table: issued when cached data is used on a page change
   *  - cached-data-reset.bs.table: issued when the cached data is invalidated and a
   *      new server side request is issued
   *
   **/

  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults, {
    usePipeline: false,
    pipelineSize: 1000,
    // eslint-disable-next-line no-unused-vars
    onCachedDataHit: function onCachedDataHit(data) {
      return false;
    },
    // eslint-disable-next-line no-unused-vars
    onCachedDataReset: function onCachedDataReset(data) {
      return false;
    }
  });
  Object.assign($.fn.bootstrapTable.events, {
    'cached-data-hit.bs.table': 'onCachedDataHit',
    'cached-data-reset.bs.table': 'onCachedDataReset'
  });
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "init",
      value:
      // needs to be called before initServer
      function init() {
        var _get2;
        if (this.options.usePipeline) {
          this.initPipeline();
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_get2 = _get(_getPrototypeOf(_class.prototype), "init", this)).call.apply(_get2, [this].concat(args));
      }
    }, {
      key: "initPipeline",
      value: function initPipeline() {
        this.cacheRequestJSON = {};
        this.cacheWindows = [];
        this.currWindow = 0;
        this.resetCache = true;
      }

      // force a cache reset on search
    }, {
      key: "onSearch",
      value: function onSearch() {
        var _get3;
        if (this.options.usePipeline) {
          this.resetCache = true;
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_get3 = _get(_getPrototypeOf(_class.prototype), "onSearch", this)).call.apply(_get3, [this].concat(args));
      }

      // force a cache reset on sort
    }, {
      key: "onSort",
      value: function onSort() {
        var _get4;
        if (this.options.usePipeline) {
          this.resetCache = true;
        }
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        (_get4 = _get(_getPrototypeOf(_class.prototype), "onSort", this)).call.apply(_get4, [this].concat(args));
      }

      // rebuild cache window on page size change
    }, {
      key: "onPageListChange",
      value: function onPageListChange(event) {
        var target = $(event.currentTarget);
        var newPageSize = parseInt(target.text(), 10);
        this.options.pipelineSize = this.calculatePipelineSize(this.options.pipelineSize, newPageSize);
        this.resetCache = true;
        _get(_getPrototypeOf(_class.prototype), "onPageListChange", this).call(this, event);
      }

      // calculate pipeline size by rounding up to
      // the nearest value evenly divisible by the pageSize
    }, {
      key: "calculatePipelineSize",
      value: function calculatePipelineSize(pipelineSize, pageSize) {
        if (pageSize === 0) {
          return 0;
        }
        return Math.ceil(pipelineSize / pageSize) * pageSize;
      }

      // set cache windows based on the total number of rows returned
      // by server side request and the pipelineSize
    }, {
      key: "setCacheWindows",
      value: function setCacheWindows() {
        this.cacheWindows = [];
        for (var i = 0; i <= this.options.totalRows / this.options.pipelineSize; i++) {
          var lower = i * this.options.pipelineSize;
          this.cacheWindows[i] = {
            lower: lower,
            upper: lower + this.options.pipelineSize - 1
          };
        }
      }

      // set the current cache window index, based on where the current offset falls
    }, {
      key: "setCurrWindow",
      value: function setCurrWindow(offset) {
        this.currWindow = 0;
        for (var i = 0; i < this.cacheWindows.length; i++) {
          if (this.cacheWindows[i].lower <= offset && offset <= this.cacheWindows[i].upper) {
            this.currWindow = i;
            break;
          }
        }
      }

      // draw rows from the cache using offset and limit
    }, {
      key: "drawFromCache",
      value: function drawFromCache(offset, limit) {
        var res = Utils.extend(true, {}, this.cacheRequestJSON);
        var drawStart = offset - this.cacheWindows[this.currWindow].lower;
        var drawEnd = drawStart + limit;
        res.rows = res.rows.slice(drawStart, drawEnd);
        return res;
      }

      /*
       * determine if requested data is in cache (on paging) or if
       * a new ajax request needs to be issued (sorting, searching, paging
       * moving outside of cached data, page size change)
       * initial version of this extension will entirely override base initServer
       */
    }, {
      key: "initServer",
      value: function initServer(silent, query, url) {
        var _this = this;
        if (!this.options.usePipeline) {
          return _get(_getPrototypeOf(_class.prototype), "initServer", this).call(this, silent, query, url);
        }
        var useAjax = true;
        var params = {};
        if (this.options.queryParamsType === 'limit' && this.options.pagination && this.options.sidePagination === 'server') {
          // same as parent initServer: params.offset
          params.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1);
          params.limit = this.options.pageSize;

          // if cacheWindows is empty, this is the initial request
          if (!this.cacheWindows.length) {
            useAjax = true;
            params.drawOffset = params.offset;
            // cache exists: determine if the page request is entirely within the current cached window
          } else {
            var w = this.cacheWindows[this.currWindow];

            // case 1: reset cache but stay within current window (e.g. column sort)
            // case 2: move outside of the current window (e.g. search or paging)
            //  since each cache window is aligned with the current page size
            //  checking if params.offset is outside the current window is sufficient.
            //  need to re-query for preceding or succeeding cache window
            //  also handle case
            if (this.resetCache || params.offset < w.lower || params.offset > w.upper) {
              useAjax = true;
              this.setCurrWindow(params.offset);
              // store the relative offset for drawing the page data afterwards
              params.drawOffset = params.offset;
              // now set params.offset to the lower bound of the new cache window
              // the server will return that whole cache window
              params.offset = this.cacheWindows[this.currWindow].lower;
              // within current cache window
            } else {
              useAjax = false;
            }
          }
        }

        // force an ajax call - this is on search, sort or page size change
        if (this.resetCache) {
          useAjax = true;
          this.resetCache = false;
        }
        if (useAjax) {
          // in this scenario limit is used on the server to get the cache window
          // and drawLimit is used to get the page data afterwards
          params.drawLimit = params.limit;
          params.limit = this.options.pipelineSize;
        }

        // cached results can be used
        if (!useAjax) {
          var res = this.drawFromCache(params.offset, params.limit);
          this.load(res);
          this.trigger('load-success', res);
          this.trigger('cached-data-hit', res);
          return;
        }
        if (!this.pipelineResponseHandler) {
          this.pipelineResponseHandler = this.options.responseHandler;
          this.options.responseHandler = function (_res, jqXHR) {
            var res = Utils.calculateObjectValue(_this.options, _this.pipelineResponseHandler, [_res, jqXHR], _res);

            // store entire request in cache
            _this.cacheRequestJSON = Utils.extend(true, {}, res);
            // this gets set in load() also but needs to be set before
            // setting cacheWindows
            _this.options.totalRows = res[_this.options.totalField];
            // if this is a search, potentially less results will be returned
            // so cache windows need to be rebuilt. Otherwise it
            // will come out the same
            _this.setCacheWindows();
            // just load data for the page
            res = _this.drawFromCache(params.drawOffset, params.drawLimit);
            _this.trigger('cached-data-reset', res);
            return res;
          };
        }
        return _get(_getPrototypeOf(_class.prototype), "initServer", this).call(this, silent, _objectSpread2(_objectSpread2({}, query), params), url);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _get5;
        this.options.responseHandler = this.pipelineResponseHandler;
        this.pipelineResponseHandler = null;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        (_get5 = _get(_getPrototypeOf(_class.prototype), "destroy", this)).call.apply(_get5, [this].concat(args));
      }
    }]);
  }($.BootstrapTable);

}));
