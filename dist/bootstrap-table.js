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
    global.bootstrapTable = mod.exports;
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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /**
   * @author zhixin wen <wenzhixin2010@gmail.com>
   * version: 1.13.4
   * https://github.com/wenzhixin/bootstrap-table/
   */

  (function ($) {
    // TOOLS DEFINITION
    // ======================

    var bootstrapVersion = 3;
    try {
      var rawVersion = $.fn.dropdown.Constructor.VERSION;

      // Only try to parse VERSION if is is defined.
      // It is undefined in older versions of Bootstrap (tested with 3.1.1).
      if (rawVersion !== undefined) {
        bootstrapVersion = parseInt(rawVersion, 10);
      }
    } catch (e) {
      // ignore
    }

    var bootstrap = {
      3: {
        iconsPrefix: 'glyphicon',
        icons: {
          paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
          paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
          refresh: 'glyphicon-refresh icon-refresh',
          toggleOff: 'glyphicon-list-alt icon-list-alt',
          toggleOn: 'glyphicon-list-alt icon-list-alt',
          columns: 'glyphicon-th icon-th',
          detailOpen: 'glyphicon-plus icon-plus',
          detailClose: 'glyphicon-minus icon-minus',
          fullscreen: 'glyphicon-fullscreen'
        },
        classes: {
          buttons: 'default',
          pull: 'pull'
        },
        html: {
          toobarDropdow: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
          toobarDropdowItem: '<li role="menuitem"><label>%s</label></li>',
          pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
          pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>'
        }
      },
      4: {
        iconsPrefix: 'fa',
        icons: {
          paginationSwitchDown: 'fa-caret-square-down',
          paginationSwitchUp: 'fa-caret-square-up',
          refresh: 'fa-sync',
          toggleOff: 'fa-toggle-off',
          toggleOn: 'fa-toggle-on',
          columns: 'fa-th-list',
          detailOpen: 'fa-plus',
          detailClose: 'fa-minus',
          fullscreen: 'fa-arrows-alt'
        },
        classes: {
          buttons: 'secondary',
          pull: 'float'
        },
        html: {
          toobarDropdow: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
          toobarDropdowItem: '<label class="dropdown-item">%s</label>',
          pageDropdown: ['<div class="dropdown-menu">', '</div>'],
          pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>'
        }
      }
    }[bootstrapVersion];

    var Utils = {
      bootstrapVersion: bootstrapVersion,

      sprintf: function sprintf(_str) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
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
      getFieldTitle: function getFieldTitle(list, value) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.field === value) {
              return item.title;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return '';
      },
      setFieldIndex: function setFieldIndex(columns) {
        var totalCol = 0;
        var flag = [];

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = columns[0][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var column = _step2.value;

            totalCol += column.colspan || 1;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        for (var i = 0; i < columns.length; i++) {
          flag[i] = [];
          for (var j = 0; j < totalCol; j++) {
            flag[i][j] = false;
          }
        }

        for (var _i = 0; _i < columns.length; _i++) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = columns[_i][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var r = _step3.value;

              var rowspan = r.rowspan || 1;
              var colspan = r.colspan || 1;
              var index = flag[_i].indexOf(false);

              if (colspan === 1) {
                r.fieldIndex = index;
                // when field is undefined, use index instead
                if (typeof r.field === 'undefined') {
                  r.field = index;
                }
              }

              for (var k = 0; k < rowspan; k++) {
                flag[_i + k][index] = true;
              }
              for (var _k = 0; _k < colspan; _k++) {
                flag[_i][index + _k] = true;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
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
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = names[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var f = _step4.value;

                func = func[f];
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          } else {
            func = window[name];
          }
        }

        if (func !== null && (typeof func === 'undefined' ? 'undefined' : _typeof(func)) === 'object') {
          return func;
        }

        if (typeof func === 'function') {
          return func.apply(self, args || []);
        }

        if (!func && typeof name === 'string' && this.sprintf.apply(this, [name].concat(_toConsumableArray(args)))) {
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

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = aKeys[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var key = _step5.value;

            if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
              return false;
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        return true;
      },
      escapeHTML: function escapeHTML(text) {
        if (typeof text === 'string') {
          return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/`/g, '&#x60;');
        }
        return text;
      },
      getRealDataAttr: function getRealDataAttr(dataAttr) {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = Object.entries(dataAttr)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _ref = _step6.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var attr = _ref2[0];
            var value = _ref2[1];

            var auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase();
            if (auxAttr !== attr) {
              dataAttr[auxAttr] = value;
              delete dataAttr[attr];
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        return dataAttr;
      },
      getItemField: function getItemField(item, field, escape) {
        var value = item;

        if (typeof field !== 'string' || item.hasOwnProperty(field)) {
          return escape ? this.escapeHTML(item[field]) : item[field];
        }

        var props = field.split('.');
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = props[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var p = _step7.value;

            value = value && value[p];
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        return escape ? this.escapeHTML(value) : value;
      },
      isIEBrowser: function isIEBrowser() {
        return navigator.userAgent.includes('MSIE ') || /Trident.*rv:11\./.test(navigator.userAgent);
      },
      findIndex: function findIndex(items, item) {
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = items.entries()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _ref3 = _step8.value;

            var _ref4 = _slicedToArray(_ref3, 2);

            var i = _ref4[0];
            var it = _ref4[1];

            if (JSON.stringify(it) === JSON.stringify(item)) {
              return i;
            }
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        return -1;
      }
    };

    // BOOTSTRAP TABLE CLASS DEFINITION
    // ======================

    var DEFAULTS = {
      height: undefined,
      classes: 'table table-bordered table-hover',
      theadClasses: '',
      rowStyle: function rowStyle(row, index) {
        return {};
      },
      rowAttributes: function rowAttributes(row, index) {
        return {};
      },

      undefinedText: '-',
      locale: undefined,
      sortable: true,
      sortClass: undefined,
      silentSort: true,
      sortName: undefined,
      sortOrder: 'asc',
      sortStable: false,
      rememberOrder: false,
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

      queryParamsType: 'limit', responseHandler: function responseHandler(res) {
        return res;
      },

      totalField: 'total',
      dataField: 'rows',
      pagination: false,
      onlyInfoPagination: false,
      paginationLoop: true,
      sidePagination: 'client', // client or server
      totalRows: 0,
      pageNumber: 1,
      pageSize: 10,
      pageList: [10, 25, 50, 100],
      paginationHAlign: 'right', // right, left
      paginationVAlign: 'bottom', // bottom, top, both
      paginationDetailHAlign: 'left', // right, left
      paginationPreText: '&lsaquo;',
      paginationNextText: '&rsaquo;',
      paginationSuccessivelySize: 5, // Maximum successively number of pages in a row
      paginationPagesBySide: 1, // Number of pages on each side (right, left) of the current page.
      paginationUseIntermediate: false, // Calculate intermediate pages for quick access
      search: false,
      searchOnEnterKey: false,
      strictSearch: false,
      trimOnSearch: true,
      searchAlign: 'right',
      searchTimeOut: 500,
      searchText: '',
      customSearch: undefined,
      showHeader: true,
      showFooter: false,
      footerStyle: function footerStyle(row, index) {
        return {};
      },

      showColumns: false,
      minimumCountColumns: 1,
      showPaginationSwitch: false,
      showRefresh: false,
      showToggle: false,
      showFullscreen: false,
      smartDisplay: true,
      escape: false,
      idField: undefined,
      uniqueId: undefined,
      cardView: false,
      detailView: false,
      detailFormatter: function detailFormatter(index, row) {
        return '';
      },
      detailFilter: function detailFilter(index, row) {
        return true;
      },

      selectItemName: 'btSelectItem',
      clickToSelect: false,
      ignoreClickToSelectOn: function ignoreClickToSelectOn(_ref5) {
        var tagName = _ref5.tagName;

        return ['A', 'BUTTON'].includes(tagName);
      },

      singleSelect: false,
      checkboxHeader: true,
      maintainSelected: false,
      toolbar: undefined,
      toolbarAlign: 'left',
      buttonsToolbar: undefined,
      buttonsAlign: 'right',
      buttonsClass: bootstrap.classes.buttons,
      icons: bootstrap.icons,
      iconSize: undefined,
      iconsPrefix: bootstrap.iconsPrefix, onAll: function onAll(name, args) {
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
      }
    };

    var LOCALES = {};
    LOCALES['en-US'] = LOCALES.en = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Loading, please wait...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return Utils.sprintf('%s rows per page', pageNumber);
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return Utils.sprintf('Showing %s to %s of %s rows', pageFrom, pageTo, totalRows);
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return Utils.sprintf('Showing %s rows', totalRows);
      },
      formatSearch: function formatSearch() {
        return 'Search';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No matching records found';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Refresh';
      },
      formatToggle: function formatToggle() {
        return 'Toggle';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatColumns: function formatColumns() {
        return 'Columns';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      }
    };

    $.extend(DEFAULTS, LOCALES['en-US']);

    var COLUMN_DEFAULTS = {
      radio: false,
      checkbox: false,
      checkboxEnabled: true,
      field: undefined,
      title: undefined,
      titleTooltip: undefined,
      'class': undefined,
      align: undefined, // left, right, center
      halign: undefined, // left, right, center
      falign: undefined, // left, right, center
      valign: undefined, // top, middle, bottom
      width: undefined,
      sortable: false,
      order: 'asc', // asc, desc
      visible: true,
      switchable: true,
      clickToSelect: true,
      formatter: undefined,
      footerFormatter: undefined,
      events: undefined,
      sorter: undefined,
      sortName: undefined,
      cellStyle: undefined,
      searchable: true,
      searchFormatter: true,
      cardVisible: true,
      escape: false,
      showSelectTitle: false
    };

    var EVENTS = {
      'all.bs.table': 'onAll',
      'click-cell.bs.table': 'onClickCell',
      'dbl-click-cell.bs.table': 'onDblClickCell',
      'click-row.bs.table': 'onClickRow',
      'dbl-click-row.bs.table': 'onDblClickRow',
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
      'page-change.bs.table': 'onPageChange',
      'search.bs.table': 'onSearch',
      'toggle.bs.table': 'onToggle',
      'pre-body.bs.table': 'onPreBody',
      'post-body.bs.table': 'onPostBody',
      'post-header.bs.table': 'onPostHeader',
      'expand-row.bs.table': 'onExpandRow',
      'collapse-row.bs.table': 'onCollapseRow',
      'refresh-options.bs.table': 'onRefreshOptions',
      'reset-view.bs.table': 'onResetView',
      'refresh.bs.table': 'onRefresh',
      'scroll-body.bs.table': 'onScrollBody'
    };

    var BootstrapTable = function () {
      function BootstrapTable(el, options) {
        _classCallCheck(this, BootstrapTable);

        this.options = options;
        this.$el = $(el);
        this.$el_ = this.$el.clone();
        this.timeoutId_ = 0;
        this.timeoutFooter_ = 0;

        this.init();
      }

      _createClass(BootstrapTable, [{
        key: 'init',
        value: function init() {
          this.initLocale();
          this.initContainer();
          this.initTable();
          this.initHeader();
          this.initData();
          this.initHiddenRows();
          this.initFooter();
          this.initToolbar();
          this.initPagination();
          this.initBody();
          this.initSearchText();
          this.initServer();
        }
      }, {
        key: 'initLocale',
        value: function initLocale() {
          if (this.options.locale) {
            var locales = $.fn.bootstrapTable.locales;
            var parts = this.options.locale.split(/-|_/);

            parts[0] = parts[0].toLowerCase();
            if (parts[1]) {
              parts[1] = parts[1].toUpperCase();
            }

            if (locales[this.options.locale]) {
              $.extend(this.options, locales[this.options.locale]);
            } else if (locales[parts.join('-')]) {
              $.extend(this.options, locales[parts.join('-')]);
            } else if (locales[parts[0]]) {
              $.extend(this.options, locales[parts[0]]);
            }
          }
        }
      }, {
        key: 'initContainer',
        value: function initContainer() {
          var topPagination = ['top', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination clearfix"></div>' : '';
          var bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination"></div>' : '';

          this.$container = $('\n        <div class="bootstrap-table">\n        <div class="fixed-table-toolbar"></div>\n        ' + topPagination + '\n        <div class="fixed-table-container">\n        <div class="fixed-table-header"><table></table></div>\n        <div class="fixed-table-body">\n        <div class="fixed-table-loading">\n        ' + this.options.formatLoadingMessage() + '\n        </div>\n        </div>\n        <div class="fixed-table-footer"><table><tr></tr></table></div>\n        </div>\n        ' + bottomPagination + '\n        </div>\n      ');

          this.$container.insertAfter(this.$el);
          this.$tableContainer = this.$container.find('.fixed-table-container');
          this.$tableHeader = this.$container.find('.fixed-table-header');
          this.$tableBody = this.$container.find('.fixed-table-body');
          this.$tableLoading = this.$container.find('.fixed-table-loading');
          this.$tableFooter = this.$container.find('.fixed-table-footer');
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

          if (this.options.height) {
            this.$tableContainer.addClass('fixed-height');

            if (this.options.classes.split(' ').includes('table-bordered')) {
              this.$tableBody.append('<div class="fixed-table-border"></div>');
              this.$tableBorder = this.$tableBody.find('.fixed-table-border');
              this.$tableLoading.addClass('fixed-table-border');
            }
          }
        }
      }, {
        key: 'initTable',
        value: function initTable() {
          var _this = this;

          var columns = [];
          var data = [];

          this.$header = this.$el.find('>thead');
          if (!this.$header.length) {
            this.$header = $('<thead class="' + this.options.theadClasses + '"></thead>').appendTo(this.$el);
          } else if (this.options.theadClasses) {
            this.$header.addClass(this.options.theadClasses);
          }
          this.$header.find('tr').each(function (i, el) {
            var column = [];

            $(el).find('th').each(function (i, el) {
              // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
              if (typeof $(el).data('field') !== 'undefined') {
                $(el).data('field', '' + $(el).data('field'));
              }
              column.push($.extend({}, {
                title: $(el).html(),
                'class': $(el).attr('class'),
                titleTooltip: $(el).attr('title'),
                rowspan: $(el).attr('rowspan') ? +$(el).attr('rowspan') : undefined,
                colspan: $(el).attr('colspan') ? +$(el).attr('colspan') : undefined
              }, $(el).data()));
            });
            columns.push(column);
          });

          if (!Array.isArray(this.options.columns[0])) {
            this.options.columns = [this.options.columns];
          }

          this.options.columns = $.extend(true, [], columns, this.options.columns);
          this.columns = [];
          this.fieldsColumnsIndex = [];

          Utils.setFieldIndex(this.options.columns);

          this.options.columns.forEach(function (columns, i) {
            columns.forEach(function (_column, j) {
              var column = $.extend({}, BootstrapTable.COLUMN_DEFAULTS, _column);

              if (typeof column.fieldIndex !== 'undefined') {
                _this.columns[column.fieldIndex] = column;
                _this.fieldsColumnsIndex[column.field] = column.fieldIndex;
              }

              _this.options.columns[i][j] = column;
            });
          });

          // if options.data is setting, do not process tbody data
          if (this.options.data.length) {
            return;
          }

          var m = [];
          this.$el.find('>tbody>tr').each(function (y, el) {
            var row = {};

            // save tr's id, class and data-* attributes
            row._id = $(el).attr('id');
            row._class = $(el).attr('class');
            row._data = Utils.getRealDataAttr($(el).data());

            $(el).find('>td').each(function (_x, el) {
              var cspan = +$(el).attr('colspan') || 1;
              var rspan = +$(el).attr('rowspan') || 1;
              var x = _x;

              // skip already occupied cells in current row
              for (; m[y] && m[y][x]; x++) {}
              // ignore


              // mark matrix elements occupied by current cell with true
              for (var tx = x; tx < x + cspan; tx++) {
                for (var ty = y; ty < y + rspan; ty++) {
                  if (!m[ty]) {
                    // fill missing rows
                    m[ty] = [];
                  }
                  m[ty][tx] = true;
                }
              }

              var field = _this.columns[x].field;

              row[field] = $(el).html();
              // save td's id, class and data-* attributes
              row['_' + field + '_id'] = $(el).attr('id');
              row['_' + field + '_class'] = $(el).attr('class');
              row['_' + field + '_rowspan'] = $(el).attr('rowspan');
              row['_' + field + '_colspan'] = $(el).attr('colspan');
              row['_' + field + '_title'] = $(el).attr('title');
              row['_' + field + '_data'] = Utils.getRealDataAttr($(el).data());
            });
            data.push(row);
          });
          this.options.data = data;
          if (data.length) {
            this.fromHtml = true;
          }
        }
      }, {
        key: 'initHeader',
        value: function initHeader() {
          var _this2 = this;

          var visibleColumns = {};
          var html = [];

          this.header = {
            fields: [],
            styles: [],
            classes: [],
            formatters: [],
            events: [],
            sorters: [],
            sortNames: [],
            cellStyles: [],
            searchables: []
          };

          this.options.columns.forEach(function (columns, i) {
            html.push('<tr>');

            if (i === 0 && !_this2.options.cardView && _this2.options.detailView) {
              html.push('<th class="detail" rowspan="' + _this2.options.columns.length + '">\n            <div class="fht-cell"></div>\n            </th>\n          ');
            }

            columns.forEach(function (column, j) {
              var text = '';

              var halign = ''; // header align style

              var align = ''; // body align style

              var style = '';
              var class_ = Utils.sprintf(' class="%s"', column['class']);
              var unitWidth = 'px';
              var width = column.width;

              if (column.width !== undefined && !_this2.options.cardView) {
                if (typeof column.width === 'string') {
                  if (column.width.includes('%')) {
                    unitWidth = '%';
                  }
                }
              }
              if (column.width && typeof column.width === 'string') {
                width = column.width.replace('%', '').replace('px', '');
              }

              halign = Utils.sprintf('text-align: %s; ', column.halign ? column.halign : column.align);
              align = Utils.sprintf('text-align: %s; ', column.align);
              style = Utils.sprintf('vertical-align: %s; ', column.valign);
              style += Utils.sprintf('width: %s; ', (column.checkbox || column.radio) && !width ? !column.showSelectTitle ? '36px' : undefined : width ? width + unitWidth : undefined);

              if (typeof column.fieldIndex !== 'undefined') {
                _this2.header.fields[column.fieldIndex] = column.field;
                _this2.header.styles[column.fieldIndex] = align + style;
                _this2.header.classes[column.fieldIndex] = class_;
                _this2.header.formatters[column.fieldIndex] = column.formatter;
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

              html.push('<th' + Utils.sprintf(' title="%s"', column.titleTooltip), column.checkbox || column.radio ? Utils.sprintf(' class="bs-checkbox %s"', column['class'] || '') : class_, Utils.sprintf(' style="%s"', halign + style), Utils.sprintf(' rowspan="%s"', column.rowspan), Utils.sprintf(' colspan="%s"', column.colspan), Utils.sprintf(' data-field="%s"', column.field),
              // If `column` is not the first element of `this.options.columns[0]`, then className 'data-not-first-th' should be added.
              j === 0 && i > 0 ? ' data-not-first-th' : '', '>');

              html.push(Utils.sprintf('<div class="th-inner %s">', _this2.options.sortable && column.sortable ? 'sortable both' : ''));

              text = _this2.options.escape ? Utils.escapeHTML(column.title) : column.title;

              var title = text;
              if (column.checkbox) {
                text = '';
                if (!_this2.options.singleSelect && _this2.options.checkboxHeader) {
                  text = '<input name="btSelectAll" type="checkbox" />';
                }
                _this2.header.stateField = column.field;
              }
              if (column.radio) {
                text = '';
                _this2.header.stateField = column.field;
                _this2.options.singleSelect = true;
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
            html.push('</tr>');
          });

          this.$header.html(html.join(''));
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

          this.$header.children().children().off('keypress').on('keypress', function (e) {
            if (_this2.options.sortable && $(e.currentTarget).data().sortable) {
              var code = e.keyCode || e.which;
              if (code === 13) {
                // Enter keycode
                _this2.onSort(e);
              }
            }
          });

          $(window).off('resize.bootstrap-table');
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
            $(window).on('resize.bootstrap-table', $.proxy(this.resetWidth, this));
          }

          this.$selectAll = this.$header.find('[name="btSelectAll"]');
          this.$selectAll.off('click').on('click', function (_ref6) {
            var currentTarget = _ref6.currentTarget;

            var checked = $(currentTarget).prop('checked');
            _this2[checked ? 'checkAll' : 'uncheckAll']();
            _this2.updateSelected();
          });
        }
      }, {
        key: 'initFooter',
        value: function initFooter() {
          if (!this.options.showFooter || this.options.cardView) {
            this.$tableFooter.hide();
          } else {
            this.$tableFooter.show();
          }
        }
      }, {
        key: 'initData',
        value: function initData(data, type) {
          if (type === 'append') {
            this.options.data = this.options.data.concat(data);
          } else if (type === 'prepend') {
            this.options.data = [].concat(data).concat(this.options.data);
          } else {
            this.options.data = data || this.options.data;
          }

          this.data = this.options.data;

          if (this.options.sidePagination === 'server') {
            return;
          }
          this.initSort();
        }
      }, {
        key: 'initSort',
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

                // Fix #161: undefined or null string sort bug.
                if (aa === undefined || aa === null) {
                  aa = '';
                }
                if (bb === undefined || bb === null) {
                  bb = '';
                }

                if (_this3.options.sortStable && aa === bb) {
                  aa = a._position;
                  bb = b._position;
                }

                // IF both values are numeric, do a numeric comparison
                if ($.isNumeric(aa) && $.isNumeric(bb)) {
                  // Convert numerical values form string to float.
                  aa = parseFloat(aa);
                  bb = parseFloat(bb);
                  if (aa < bb) {
                    return order * -1;
                  }
                  if (aa > bb) {
                    return order;
                  }
                  return 0;
                }

                if (aa === bb) {
                  return 0;
                }

                // If value is not a string, convert to string
                if (typeof aa !== 'string') {
                  aa = aa.toString();
                }

                if (aa.localeCompare(bb) === -1) {
                  return order * -1;
                }

                return order;
              });
            }

            if (this.options.sortClass !== undefined) {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(function () {
                _this3.$el.removeClass(_this3.options.sortClass);
                var index = _this3.$header.find('[data-field="' + _this3.options.sortName + '"]').index();
                _this3.$el.find('tr td:nth-child(' + (index + 1) + ')').addClass(_this3.options.sortClass);
              }, 250);
            }
          }
        }
      }, {
        key: 'onSort',
        value: function onSort(_ref7) {
          var type = _ref7.type,
              currentTarget = _ref7.currentTarget;

          var $this = type === 'keypress' ? $(currentTarget) : $(currentTarget).parent();
          var $this_ = this.$header.find('th').eq($this.index());

          this.$header.add(this.$header_).find('span.order').remove();

          if (this.options.sortName === $this.data('field')) {
            this.options.sortOrder = this.options.sortOrder === 'asc' ? 'desc' : 'asc';
          } else {
            this.options.sortName = $this.data('field');
            if (this.options.rememberOrder) {
              this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc';
            } else {
              this.options.sortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].order;
            }
          }
          this.trigger('sort', this.options.sortName, this.options.sortOrder);

          $this.add($this_).data('order', this.options.sortOrder);

          // Assign the correct sortable arrow
          this.getCaret();

          if (this.options.sidePagination === 'server') {
            this.initServer(this.options.silentSort);
            return;
          }

          this.initSort();
          this.initBody();
        }
      }, {
        key: 'initToolbar',
        value: function initToolbar() {
          var _this4 = this;

          var html = [];
          var timeoutId = 0;
          var $keepOpen = void 0;
          var $search = void 0;
          var switchableCount = 0;

          if (this.$toolbar.find('.bs-bars').children().length) {
            $('body').append($(this.options.toolbar));
          }
          this.$toolbar.html('');

          if (typeof this.options.toolbar === 'string' || _typeof(this.options.toolbar) === 'object') {
            $(Utils.sprintf('<div class="bs-bars %s-%s"></div>', bootstrap.classes.pull, this.options.toolbarAlign)).appendTo(this.$toolbar).append($(this.options.toolbar));
          }

          // showColumns, showToggle, showRefresh
          html = [Utils.sprintf('<div class="columns columns-%s btn-group %s-%s">', this.options.buttonsAlign, bootstrap.classes.pull, this.options.buttonsAlign)];

          if (typeof this.options.icons === 'string') {
            this.options.icons = Utils.calculateObjectValue(null, this.options.icons);
          }

          if (this.options.showPaginationSwitch) {
            html.push(Utils.sprintf('<button class="btn' + Utils.sprintf(' btn-%s', this.options.buttonsClass) + Utils.sprintf(' btn-%s', this.options.iconSize) + '" type="button" name="paginationSwitch" aria-label="pagination Switch" title="%s">', this.options.formatPaginationSwitch()), Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown), '</button>');
          }

          if (this.options.showFullscreen) {
            this.$toolbar.find('button[name="fullscreen"]').off('click').on('click', $.proxy(this.toggleFullscreen, this));
          }

          if (this.options.showRefresh) {
            html.push(Utils.sprintf('<button class="btn' + Utils.sprintf(' btn-%s', this.options.buttonsClass) + Utils.sprintf(' btn-%s', this.options.iconSize) + '" type="button" name="refresh" aria-label="refresh" title="%s">', this.options.formatRefresh()), Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.refresh), '</button>');
          }

          if (this.options.showToggle) {
            html.push(Utils.sprintf('<button class="btn' + Utils.sprintf(' btn-%s', this.options.buttonsClass) + Utils.sprintf(' btn-%s', this.options.iconSize) + '" type="button" name="toggle" aria-label="toggle" title="%s">', this.options.formatToggle()), Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggleOff), '</button>');
          }

          if (this.options.showFullscreen) {
            html.push(Utils.sprintf('<button class="btn' + Utils.sprintf(' btn-%s', this.options.buttonsClass) + Utils.sprintf(' btn-%s', this.options.iconSize) + '" type="button" name="fullscreen" aria-label="fullscreen" title="%s">', this.options.formatFullscreen()), Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.fullscreen), '</button>');
          }

          if (this.options.showColumns) {
            html.push(Utils.sprintf('<div class="keep-open btn-group" title="%s">', this.options.formatColumns()), '<button type="button" aria-label="columns" class="btn' + Utils.sprintf(' btn-%s', this.options.buttonsClass) + Utils.sprintf(' btn-%s', this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns), ' <span class="caret"></span>', '</button>', bootstrap.html.toobarDropdow[0]);

            this.columns.forEach(function (column, i) {
              if (column.radio || column.checkbox) {
                return;
              }

              if (_this4.options.cardView && !column.cardVisible) {
                return;
              }

              var checked = column.visible ? ' checked="checked"' : '';

              if (column.switchable) {
                html.push(Utils.sprintf(bootstrap.html.toobarDropdowItem, Utils.sprintf('<input type="checkbox" data-field="%s" value="%s"%s> %s', column.field, i, checked, column.title)));
                switchableCount++;
              }
            });
            html.push(bootstrap.html.toobarDropdow[1], '</div>');
          }

          html.push('</div>');

          // Fix #188: this.showToolbar is for extensions
          if (this.showToolbar || html.length > 2) {
            this.$toolbar.append(html.join(''));
          }

          if (this.options.showPaginationSwitch) {
            this.$toolbar.find('button[name="paginationSwitch"]').off('click').on('click', $.proxy(this.togglePagination, this));
          }

          if (this.options.showRefresh) {
            this.$toolbar.find('button[name="refresh"]').off('click').on('click', $.proxy(this.refresh, this));
          }

          if (this.options.showToggle) {
            this.$toolbar.find('button[name="toggle"]').off('click').on('click', function () {
              _this4.toggleView();
            });
          }

          if (this.options.showColumns) {
            $keepOpen = this.$toolbar.find('.keep-open');

            if (switchableCount <= this.options.minimumCountColumns) {
              $keepOpen.find('input').prop('disabled', true);
            }

            $keepOpen.find('li').off('click').on('click', function (e) {
              e.stopImmediatePropagation();
            });
            $keepOpen.find('input').off('click').on('click', function (_ref8) {
              var currentTarget = _ref8.currentTarget;

              var $this = $(currentTarget);

              _this4.toggleColumn($this.val(), $this.prop('checked'), false);
              _this4.trigger('column-switch', $this.data('field'), $this.prop('checked'));
            });
          }

          if (this.options.search) {
            html = [];
            html.push(Utils.sprintf('<div class="%s-%s search">', bootstrap.classes.pull, this.options.searchAlign), Utils.sprintf('<input class="form-control' + Utils.sprintf(' input-%s', this.options.iconSize) + '" type="text" placeholder="%s">', this.options.formatSearch()), '</div>');

            this.$toolbar.append(html.join(''));
            $search = this.$toolbar.find('.search input');
            $search.off('keyup drop blur').on('keyup drop blur', function (event) {
              if (_this4.options.searchOnEnterKey && event.keyCode !== 13) {
                return;
              }

              if ([37, 38, 39, 40].includes(event.keyCode)) {
                return;
              }

              clearTimeout(timeoutId); // doesn't matter if it's 0
              timeoutId = setTimeout(function () {
                _this4.onSearch(event);
              }, _this4.options.searchTimeOut);
            });

            if (Utils.isIEBrowser()) {
              $search.off('mouseup').on('mouseup', function (event) {
                clearTimeout(timeoutId); // doesn't matter if it's 0
                timeoutId = setTimeout(function () {
                  _this4.onSearch(event);
                }, _this4.options.searchTimeOut);
              });
            }
          }
        }
      }, {
        key: 'onSearch',
        value: function onSearch(_ref9) {
          var currentTarget = _ref9.currentTarget,
              firedByInitSearchText = _ref9.firedByInitSearchText;

          var text = $.trim($(currentTarget).val());

          // trim search input
          if (this.options.trimOnSearch && $(currentTarget).val() !== text) {
            $(currentTarget).val(text);
          }

          if (text === this.searchText) {
            return;
          }
          this.searchText = text;
          this.options.searchText = text;

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
          this.trigger('search', text);
        }
      }, {
        key: 'initSearch',
        value: function initSearch() {
          var _this5 = this;

          if (this.options.sidePagination !== 'server') {
            if (this.options.customSearch) {
              Utils.calculateObjectValue(this.options, this.options.customSearch, [this.searchText]);
              return;
            }

            var s = this.searchText && (this.options.escape ? Utils.escapeHTML(this.searchText) : this.searchText).toLowerCase();
            var f = $.isEmptyObject(this.filterColumns) ? null : this.filterColumns;

            // Check filter
            this.data = f ? this.options.data.filter(function (item, i) {
              for (var key in f) {
                if (Array.isArray(f[key]) && !f[key].includes(item[key]) || !Array.isArray(f[key]) && item[key] !== f[key]) {
                  return false;
                }
              }
              return true;
            }) : this.options.data;

            this.data = s ? this.data.filter(function (item, i) {
              for (var j = 0; j < _this5.header.fields.length; j++) {
                if (!_this5.header.searchables[j]) {
                  continue;
                }

                var key = $.isNumeric(_this5.header.fields[j]) ? parseInt(_this5.header.fields[j], 10) : _this5.header.fields[j];
                var column = _this5.columns[_this5.fieldsColumnsIndex[key]];
                var value = void 0;

                if (typeof key === 'string') {
                  value = item;
                  var props = key.split('.');
                  for (var _i2 = 0; _i2 < props.length; _i2++) {
                    if (value[props[_i2]] !== null) {
                      value = value[props[_i2]];
                    }
                  }
                } else {
                  value = item[key];
                }

                // Fix #142: respect searchForamtter boolean
                if (column && column.searchFormatter) {
                  value = Utils.calculateObjectValue(column, _this5.header.formatters[j], [value, item, i], value);
                }

                if (typeof value === 'string' || typeof value === 'number') {
                  if (_this5.options.strictSearch) {
                    if (('' + value).toLowerCase() === s) {
                      return true;
                    }
                  } else {
                    if (('' + value).toLowerCase().includes(s)) {
                      return true;
                    }
                  }
                }
              }
              return false;
            }) : this.data;
          }
        }
      }, {
        key: 'initPagination',
        value: function initPagination() {
          var _this6 = this;

          if (!this.options.pagination) {
            this.$pagination.hide();
            return;
          }
          this.$pagination.show();

          var html = [];
          var $allSelected = false;
          var i = void 0;
          var from = void 0;
          var to = void 0;
          var $pageList = void 0;
          var $pre = void 0;
          var $next = void 0;
          var $number = void 0;
          var data = this.getData();
          var pageList = this.options.pageList;

          if (this.options.sidePagination !== 'server') {
            this.options.totalRows = data.length;
          }

          this.totalPages = 0;
          if (this.options.totalRows) {
            if (this.options.pageSize === this.options.formatAllRows()) {
              this.options.pageSize = this.options.totalRows;
              $allSelected = true;
            } else if (this.options.pageSize === this.options.totalRows) {
              // Fix #667 Table with pagination,
              // multiple pages and a search this matches to one page throws exception
              var pageLst = typeof this.options.pageList === 'string' ? this.options.pageList.replace('[', '').replace(']', '').replace(/ /g, '').toLowerCase().split(',') : this.options.pageList;
              if (pageLst.includes(this.options.formatAllRows().toLowerCase())) {
                $allSelected = true;
              }
            }

            this.totalPages = ~~((this.options.totalRows - 1) / this.options.pageSize) + 1;

            this.options.totalPages = this.totalPages;
          }
          if (this.totalPages > 0 && this.options.pageNumber > this.totalPages) {
            this.options.pageNumber = this.totalPages;
          }

          this.pageFrom = (this.options.pageNumber - 1) * this.options.pageSize + 1;
          this.pageTo = this.options.pageNumber * this.options.pageSize;
          if (this.pageTo > this.options.totalRows) {
            this.pageTo = this.options.totalRows;
          }

          html.push(Utils.sprintf('<div class="%s-%s pagination-detail">', bootstrap.classes.pull, this.options.paginationDetailHAlign), '<span class="pagination-info">', this.options.onlyInfoPagination ? this.options.formatDetailPagination(this.options.totalRows) : this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows), '</span>');

          if (!this.options.onlyInfoPagination) {
            html.push('<span class="page-list">');

            var pageNumber = [Utils.sprintf('<span class="btn-group %s">', this.options.paginationVAlign === 'top' || this.options.paginationVAlign === 'both' ? 'dropdown' : 'dropup'), '<button type="button" class="btn' + Utils.sprintf(' btn-%s', this.options.buttonsClass) + Utils.sprintf(' btn-%s', this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">', '<span class="page-size">', $allSelected ? this.options.formatAllRows() : this.options.pageSize, '</span>', ' <span class="caret"></span>', '</button>', bootstrap.html.pageDropdown[0]];

            if (typeof this.options.pageList === 'string') {
              var list = this.options.pageList.replace('[', '').replace(']', '').replace(/ /g, '').split(',');

              pageList = [];
              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = list[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var value = _step9.value;

                  pageList.push(value.toUpperCase() === this.options.formatAllRows().toUpperCase() || value.toUpperCase() === 'UNLIMITED' ? this.options.formatAllRows() : +value);
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9.return) {
                    _iterator9.return();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }
            }

            pageList.forEach(function (page, i) {
              if (!_this6.options.smartDisplay || i === 0 || pageList[i - 1] < _this6.options.totalRows) {
                var active = void 0;
                if ($allSelected) {
                  active = page === _this6.options.formatAllRows() ? 'active' : '';
                } else {
                  active = page === _this6.options.pageSize ? 'active' : '';
                }
                pageNumber.push(Utils.sprintf(bootstrap.html.pageDropdownItem, active, page));
              }
            });
            pageNumber.push(bootstrap.html.pageDropdown[1] + '</span>');

            html.push(this.options.formatRecordsPerPage(pageNumber.join('')));
            html.push('</span>');

            html.push('</div>', Utils.sprintf('<div class="%s-%s pagination">', bootstrap.classes.pull, this.options.paginationHAlign), '<ul class="pagination' + Utils.sprintf(' pagination-%s', this.options.iconSize) + '">', Utils.sprintf('<li class="page-item page-pre"><a class="page-link" href="#">%s</a></li>', this.options.paginationPreText));

            if (this.totalPages < this.options.paginationSuccessivelySize) {
              from = 1;
              to = this.totalPages;
            } else {
              from = this.options.pageNumber - this.options.paginationPagesBySide;
              to = from + this.options.paginationPagesBySide * 2;
            }

            if (this.options.pageNumber < this.options.paginationSuccessivelySize - 1) {
              to = this.options.paginationSuccessivelySize;
            }

            if (to > this.totalPages) {
              to = this.totalPages;
            }

            if (this.options.paginationSuccessivelySize > this.totalPages - from) {
              from = from - (this.options.paginationSuccessivelySize - (this.totalPages - from)) + 1;
            }

            if (from < 1) {
              from = 1;
            }

            if (to > this.totalPages) {
              to = this.totalPages;
            }

            var middleSize = Math.round(this.options.paginationPagesBySide / 2);
            var pageItem = function pageItem(i) {
              var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
              return '\n          <li class="page-item' + classes + (i === _this6.options.pageNumber ? ' active' : '') + '">\n            <a class="page-link" href="#">' + i + '</a>\n          </li>\n        ';
            };

            if (from > 1) {
              var max = this.options.paginationPagesBySide;
              if (max >= from) max = from - 1;
              for (i = 1; i <= max; i++) {
                html.push(pageItem(i));
              }
              if (from - 1 === max + 1) {
                i = from - 1;
                html.push(pageItem(i));
              } else {
                if (from - 1 > max) {
                  if (from - this.options.paginationPagesBySide * 2 > this.options.paginationPagesBySide && this.options.paginationUseIntermediate) {
                    i = Math.round((from - middleSize) / 2 + middleSize);
                    html.push(pageItem(i, ' page-intermediate'));
                  } else {
                    html.push('\n                  <li class="page-item page-first-separator disabled">\n                    <a class="page-link" href="#">...</a>\n                  </li>');
                  }
                }
              }
            }

            for (i = from; i <= to; i++) {
              html.push(pageItem(i));
            }

            if (this.totalPages > to) {
              var min = this.totalPages - (this.options.paginationPagesBySide - 1);
              if (to >= min) min = to + 1;
              if (to + 1 === min - 1) {
                i = to + 1;
                html.push(pageItem(i));
              } else {
                if (min > to + 1) {
                  if (this.totalPages - to > this.options.paginationPagesBySide * 2 && this.options.paginationUseIntermediate) {
                    i = Math.round((this.totalPages - middleSize - to) / 2 + to);
                    html.push(pageItem(i, ' page-intermediate'));
                  } else {
                    html.push('\n                  <li class="page-item page-last-separator disabled">\n                    <a class="page-link" href="#">...</a>\n                  </li>');
                  }
                }
              }

              for (i = min; i <= this.totalPages; i++) {
                html.push(pageItem(i));
              }
            }

            html.push('\n          <li class="page-item page-next">\n          <a class="page-link" href="#">' + this.options.paginationNextText + '</a>\n          </li>\n          </ul>\n          </div>\n        ');
          }
          this.$pagination.html(html.join(''));

          if (!this.options.onlyInfoPagination) {
            $pageList = this.$pagination.find('.page-list a');
            $pre = this.$pagination.find('.page-pre');
            $next = this.$pagination.find('.page-next');
            $number = this.$pagination.find('.page-item').not('.page-next, .page-pre');

            if (this.options.smartDisplay) {
              if (this.totalPages <= 1) {
                this.$pagination.find('div.pagination').hide();
              }
              if (pageList.length < 2 || this.options.totalRows <= pageList[0]) {
                this.$pagination.find('span.page-list').hide();
              }

              // when data is empty, hide the pagination
              this.$pagination[this.getData().length ? 'show' : 'hide']();
            }

            if (!this.options.paginationLoop) {
              if (this.options.pageNumber === 1) {
                $pre.addClass('disabled');
              }
              if (this.options.pageNumber === this.totalPages) {
                $next.addClass('disabled');
              }
            }

            if ($allSelected) {
              this.options.pageSize = this.options.formatAllRows();
            }
            // removed the events for last and first, onPageNumber executeds the same logic
            $pageList.off('click').on('click', $.proxy(this.onPageListChange, this));
            $pre.off('click').on('click', $.proxy(this.onPagePre, this));
            $next.off('click').on('click', $.proxy(this.onPageNext, this));
            $number.off('click').on('click', $.proxy(this.onPageNumber, this));
          }
        }
      }, {
        key: 'updatePagination',
        value: function updatePagination(event) {
          // Fix #171: IE disabled button can be clicked bug.
          if (event && $(event.currentTarget).hasClass('disabled')) {
            return;
          }

          if (!this.options.maintainSelected) {
            this.resetRows();
          }

          this.initPagination();
          if (this.options.sidePagination === 'server') {
            this.initServer();
          } else {
            this.initBody();
          }

          this.trigger('page-change', this.options.pageNumber, this.options.pageSize);
        }
      }, {
        key: 'onPageListChange',
        value: function onPageListChange(event) {
          event.preventDefault();
          var $this = $(event.currentTarget);

          $this.parent().addClass('active').siblings().removeClass('active');
          this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +$this.text();
          this.$toolbar.find('.page-size').text(this.options.pageSize);

          this.updatePagination(event);
          return false;
        }
      }, {
        key: 'onPagePre',
        value: function onPagePre(event) {
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
        key: 'onPageNext',
        value: function onPageNext(event) {
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
        key: 'onPageNumber',
        value: function onPageNumber(event) {
          event.preventDefault();
          if (this.options.pageNumber === +$(event.currentTarget).text()) {
            return;
          }
          this.options.pageNumber = +$(event.currentTarget).text();
          this.updatePagination(event);
          return false;
        }
      }, {
        key: 'initRow',
        value: function initRow(item, i, data, parentDom) {
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
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
              for (var _iterator10 = Object.entries(style.css)[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var _ref10 = _step10.value;

                var _ref11 = _slicedToArray(_ref10, 2);

                var key = _ref11[0];
                var value = _ref11[1];

                csses.push(key + ': ' + value);
              }
            } catch (err) {
              _didIteratorError10 = true;
              _iteratorError10 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                  _iterator10.return();
                }
              } finally {
                if (_didIteratorError10) {
                  throw _iteratorError10;
                }
              }
            }
          }

          attributes = Utils.calculateObjectValue(this.options, this.options.rowAttributes, [item, i], attributes);

          if (attributes) {
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
              for (var _iterator11 = Object.entries(attributes)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var _ref12 = _step11.value;

                var _ref13 = _slicedToArray(_ref12, 2);

                var _key2 = _ref13[0];
                var _value2 = _ref13[1];

                htmlAttributes.push(_key2 + '="' + Utils.escapeHTML(_value2) + '"');
              }
            } catch (err) {
              _didIteratorError11 = true;
              _iteratorError11 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion11 && _iterator11.return) {
                  _iterator11.return();
                }
              } finally {
                if (_didIteratorError11) {
                  throw _iteratorError11;
                }
              }
            }
          }

          if (item._data && !$.isEmptyObject(item._data)) {
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
              for (var _iterator12 = Object.entries(item._data)[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var _ref14 = _step12.value;

                var _ref15 = _slicedToArray(_ref14, 2);

                var k = _ref15[0];
                var v = _ref15[1];

                // ignore data-index
                if (k === 'index') {
                  return;
                }
                data_ += ' data-' + k + '="' + v + '"';
              }
            } catch (err) {
              _didIteratorError12 = true;
              _iteratorError12 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                  _iterator12.return();
                }
              } finally {
                if (_didIteratorError12) {
                  throw _iteratorError12;
                }
              }
            }
          }

          html.push('<tr', Utils.sprintf(' %s', htmlAttributes.length ? htmlAttributes.join(' ') : undefined), Utils.sprintf(' id="%s"', Array.isArray(item) ? undefined : item._id), Utils.sprintf(' class="%s"', style.classes || (Array.isArray(item) ? undefined : item._class)), ' data-index="' + i + '"', Utils.sprintf(' data-uniqueid="%s"', item[this.options.uniqueId]), Utils.sprintf('%s', data_), '>');

          if (this.options.cardView) {
            html.push('<td colspan="' + this.header.fields.length + '"><div class="card-views">');
          }

          if (!this.options.cardView && this.options.detailView) {
            html.push('<td>');

            if (Utils.calculateObjectValue(null, this.options.detailFilter, [i, item])) {
              html.push('\n            <a class="detail-icon" href="#">\n            <i class="' + this.options.iconsPrefix + ' ' + this.options.icons.detailOpen + '"></i>\n            </a>\n          ');
            }

            html.push('</td>');
          }

          this.header.fields.forEach(function (field, j) {
            var text = '';
            var value_ = Utils.getItemField(item, field, _this7.options.escape);
            var value = '';
            var type = '';
            var cellStyle = {};
            var id_ = '';
            var class_ = _this7.header.classes[j];
            var style_ = '';
            var data_ = '';
            var rowspan_ = '';
            var colspan_ = '';
            var title_ = '';
            var column = _this7.columns[j];

            if (_this7.fromHtml && typeof value_ === 'undefined') {
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

            if (column.escape) {
              value_ = Utils.escapeHTML(value_);
            }

            if (csses.concat([_this7.header.styles[j]]).length) {
              style_ = ' style="' + csses.concat([_this7.header.styles[j]]).join('; ') + '"';
            }
            // handle td's id and class
            if (item['_' + field + '_id']) {
              id_ = Utils.sprintf(' id="%s"', item['_' + field + '_id']);
            }
            if (item['_' + field + '_class']) {
              class_ = Utils.sprintf(' class="%s"', item['_' + field + '_class']);
            }
            if (item['_' + field + '_rowspan']) {
              rowspan_ = Utils.sprintf(' rowspan="%s"', item['_' + field + '_rowspan']);
            }
            if (item['_' + field + '_colspan']) {
              colspan_ = Utils.sprintf(' colspan="%s"', item['_' + field + '_colspan']);
            }
            if (item['_' + field + '_title']) {
              title_ = Utils.sprintf(' title="%s"', item['_' + field + '_title']);
            }
            cellStyle = Utils.calculateObjectValue(_this7.header, _this7.header.cellStyles[j], [value_, item, i, field], cellStyle);
            if (cellStyle.classes) {
              class_ = ' class="' + cellStyle.classes + '"';
            }
            if (cellStyle.css) {
              var csses_ = [];
              var _iteratorNormalCompletion13 = true;
              var _didIteratorError13 = false;
              var _iteratorError13 = undefined;

              try {
                for (var _iterator13 = Object.entries(cellStyle.css)[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                  var _ref16 = _step13.value;

                  var _ref17 = _slicedToArray(_ref16, 2);

                  var _key3 = _ref17[0];
                  var _value3 = _ref17[1];

                  csses_.push(_key3 + ': ' + _value3);
                }
              } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion13 && _iterator13.return) {
                    _iterator13.return();
                  }
                } finally {
                  if (_didIteratorError13) {
                    throw _iteratorError13;
                  }
                }
              }

              style_ = ' style="' + csses_.concat(_this7.header.styles[j]).join('; ') + '"';
            }

            value = Utils.calculateObjectValue(column, _this7.header.formatters[j], [value_, item, i, field], value_);

            if (item['_' + field + '_data'] && !$.isEmptyObject(item['_' + field + '_data'])) {
              var _iteratorNormalCompletion14 = true;
              var _didIteratorError14 = false;
              var _iteratorError14 = undefined;

              try {
                for (var _iterator14 = Object.entries(item['_' + field + '_data'])[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                  var _ref18 = _step14.value;

                  var _ref19 = _slicedToArray(_ref18, 2);

                  var _k2 = _ref19[0];
                  var _v = _ref19[1];

                  // ignore data-index
                  if (_k2 === 'index') {
                    return;
                  }
                  data_ += ' data-' + _k2 + '="' + _v + '"';
                }
              } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion14 && _iterator14.return) {
                    _iterator14.return();
                  }
                } finally {
                  if (_didIteratorError14) {
                    throw _iteratorError14;
                  }
                }
              }
            }

            if (column.checkbox || column.radio) {
              type = column.checkbox ? 'checkbox' : type;
              type = column.radio ? 'radio' : type;

              var c = column['class'] || '';
              var isChecked = value === true || value_ || value && value.checked;
              var isDisabled = !column.checkboxEnabled || value && value.disabled;

              text = [_this7.options.cardView ? '<div class="card-view ' + c + '">' : '<td class="bs-checkbox ' + c + '">', '<input\n              data-index="' + i + '"\n              name="' + _this7.options.selectItemName + '"\n              type="' + type + '"\n              ' + Utils.sprintf('value="%s"', item[_this7.options.idField]) + '\n              ' + Utils.sprintf('checked="%s"', isChecked ? 'checked' : undefined) + '\n              ' + Utils.sprintf('disabled="%s"', isDisabled ? 'disabled' : undefined) + ' />', _this7.header.formatters[j] && typeof value === 'string' ? value : '', _this7.options.cardView ? '</div>' : '</td>'].join('');

              item[_this7.header.stateField] = value === true || !!value_ || value && value.checked;
            } else {
              value = typeof value === 'undefined' || value === null ? _this7.options.undefinedText : value;

              if (_this7.options.cardView) {
                var cardTitle = _this7.options.showHeader ? '<span class="title"' + style + '>' + Utils.getFieldTitle(_this7.columns, field) + '</span>' : '';

                text = '<div class="card-view">' + cardTitle + '<span class="value">' + value + '</span></div>';

                if (_this7.options.smartDisplay && value === '') {
                  text = '<div class="card-view"></div>';
                }
              } else {
                text = '<td' + id_ + class_ + style_ + data_ + rowspan_ + colspan_ + title_ + '>' + value + '</td>';
              }
            }

            html.push(text);
          });

          if (this.options.cardView) {
            html.push('</div></td>');
          }
          html.push('</tr>');

          return html.join('');
        }
      }, {
        key: 'initBody',
        value: function initBody(fixedScroll) {
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

          var trFragments = $(document.createDocumentFragment());
          var hasTr = false;

          for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
            var item = data[i];
            var tr = this.initRow(item, i, data, trFragments);
            hasTr = hasTr || !!tr;
            if (tr && typeof tr === 'string') {
              trFragments.append(tr);
            }
          }

          // show no records
          if (!hasTr) {
            this.$body.html('<tr class="no-records-found">' + Utils.sprintf('<td colspan="%s">%s</td>', this.$header.find('th').length, this.options.formatNoMatches()) + '</tr>');
          } else {
            this.$body.html(trFragments);
          }

          if (!fixedScroll) {
            this.scrollTo(0);
          }

          // click to select by column
          this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', function (_ref20) {
            var currentTarget = _ref20.currentTarget,
                type = _ref20.type,
                target = _ref20.target;

            var $td = $(currentTarget);
            var $tr = $td.parent();
            var item = _this8.data[$tr.data('index')];
            var index = $td[0].cellIndex;
            var fields = _this8.getVisibleFields();
            var field = fields[_this8.options.detailView && !_this8.options.cardView ? index - 1 : index];
            var column = _this8.columns[_this8.fieldsColumnsIndex[field]];
            var value = Utils.getItemField(item, field, _this8.options.escape);

            if ($td.find('.detail-icon').length) {
              return;
            }

            _this8.trigger(type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td);
            _this8.trigger(type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field);

            // if click to select - then trigger the checkbox/radio click
            if (type === 'click' && _this8.options.clickToSelect && column.clickToSelect && !_this8.options.ignoreClickToSelectOn(target)) {
              var $selectItem = $tr.find(Utils.sprintf('[name="%s"]', _this8.options.selectItemName));
              if ($selectItem.length) {
                $selectItem[0].click(); // #144: .trigger('click') bug
              }
            }
          });

          this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click', function (e) {
            e.preventDefault();

            var $this = $(e.currentTarget); // Fix #980 Detail view, when searching, returns wrong row
            var $tr = $this.parent().parent();
            var index = $tr.data('index');
            var row = data[index];

            // remove and update
            if ($tr.next().is('tr.detail-view')) {
              $this.find('i').attr('class', Utils.sprintf('%s %s', _this8.options.iconsPrefix, _this8.options.icons.detailOpen));
              _this8.trigger('collapse-row', index, row, $tr.next());
              $tr.next().remove();
            } else {
              $this.find('i').attr('class', Utils.sprintf('%s %s', _this8.options.iconsPrefix, _this8.options.icons.detailClose));
              $tr.after(Utils.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.find('td').length));
              var $element = $tr.next().find('td');
              var content = Utils.calculateObjectValue(_this8.options, _this8.options.detailFormatter, [index, row, $element], '');
              if ($element.length === 1) {
                $element.append(content);
              }
              _this8.trigger('expand-row', index, row, $element);
            }
            _this8.resetView();
            return false;
          });

          this.$selectItem = this.$body.find(Utils.sprintf('[name="%s"]', this.options.selectItemName));
          this.$selectItem.off('click').on('click', function (e) {
            e.stopImmediatePropagation();

            var $this = $(e.currentTarget);
            _this8.check_($this.prop('checked'), $this.data('index'));
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

            var field = _this8.header.fields[i];
            var fieldIndex = _this8.getVisibleFields().indexOf(field);

            if (fieldIndex === -1) {
              return;
            }

            if (_this8.options.detailView && !_this8.options.cardView) {
              fieldIndex += 1;
            }

            var _loop = function _loop(key, event) {
              _this8.$body.find('>tr:not(.no-records-found)').each(function (i, tr) {
                var $tr = $(tr);
                var $td = $tr.find(_this8.options.cardView ? '.card-view' : 'td').eq(fieldIndex);
                var index = key.indexOf(' ');
                var name = key.substring(0, index);
                var el = key.substring(index + 1);

                $td.find(el).off(name).on(name, function (e) {
                  var index = $tr.data('index');
                  var row = _this8.data[index];
                  var value = row[field];

                  event.apply(_this8, [e, value, row, index]);
                });
              });
            };

            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = Object.entries(events)[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var _ref21 = _step15.value;

                var _ref22 = _slicedToArray(_ref21, 2);

                var key = _ref22[0];
                var event = _ref22[1];

                _loop(key, event);
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15.return) {
                  _iterator15.return();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }
          });

          this.updateSelected();
          this.resetView();

          this.trigger('post-body', data);
        }
      }, {
        key: 'initServer',
        value: function initServer(silent, query, url) {
          var _this9 = this;

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
              params.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize;
              if (params.limit === 0) {
                delete params.limit;
              }
            }
          }

          if (!$.isEmptyObject(this.filterColumnsPartial)) {
            params.filter = JSON.stringify(this.filterColumnsPartial, null);
          }

          data = Utils.calculateObjectValue(this.options, this.options.queryParams, [params], data);

          $.extend(data, query || {});

          // false to stop request
          if (data === false) {
            return;
          }

          if (!silent) {
            this.$tableLoading.show();
          }
          var request = $.extend({}, Utils.calculateObjectValue(null, this.options.ajaxOptions), {
            type: this.options.method,
            url: url || this.options.url,
            data: this.options.contentType === 'application/json' && this.options.method === 'post' ? JSON.stringify(data) : data,
            cache: this.options.cache,
            contentType: this.options.contentType,
            dataType: this.options.dataType,
            success: function success(_res) {
              var res = Utils.calculateObjectValue(_this9.options, _this9.options.responseHandler, [_res], _res);

              _this9.load(res);
              _this9.trigger('load-success', res);
              if (!silent) {
                _this9.$tableLoading.hide();
              }
            },
            error: function error(jqXHR) {
              var data = [];
              if (_this9.options.sidePagination === 'server') {
                data = {};
                data[_this9.options.totalField] = 0;
                data[_this9.options.dataField] = [];
              }
              _this9.load(data);
              _this9.trigger('load-error', jqXHR.status, jqXHR);
              if (!silent) _this9.$tableLoading.hide();
            }
          });

          if (this.options.ajax) {
            Utils.calculateObjectValue(this, this.options.ajax, [request], null);
          } else {
            if (this._xhr && this._xhr.readyState !== 4) {
              this._xhr.abort();
            }
            this._xhr = $.ajax(request);
          }
        }
      }, {
        key: 'initSearchText',
        value: function initSearchText() {
          if (this.options.search) {
            this.searchText = '';
            if (this.options.searchText !== '') {
              var $search = this.$toolbar.find('.search input');
              $search.val(this.options.searchText);
              this.onSearch({ currentTarget: $search, firedByInitSearchText: true });
            }
          }
        }
      }, {
        key: 'getCaret',
        value: function getCaret() {
          var _this10 = this;

          this.$header.find('th').each(function (i, th) {
            $(th).find('.sortable').removeClass('desc asc').addClass($(th).data('field') === _this10.options.sortName ? _this10.options.sortOrder : 'both');
          });
        }
      }, {
        key: 'updateSelected',
        value: function updateSelected() {
          var checkAll = this.$selectItem.filter(':enabled').length && this.$selectItem.filter(':enabled').length === this.$selectItem.filter(':enabled').filter(':checked').length;

          this.$selectAll.add(this.$selectAll_).prop('checked', checkAll);

          this.$selectItem.each(function (i, el) {
            $(el).closest('tr')[$(el).prop('checked') ? 'addClass' : 'removeClass']('selected');
          });
        }
      }, {
        key: 'updateRows',
        value: function updateRows() {
          var _this11 = this;

          this.$selectItem.each(function (i, el) {
            _this11.data[$(el).data('index')][_this11.header.stateField] = $(el).prop('checked');
          });
        }
      }, {
        key: 'resetRows',
        value: function resetRows() {
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = this.data[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var row = _step16.value;

              this.$selectAll.prop('checked', false);
              this.$selectItem.prop('checked', false);
              if (this.header.stateField) {
                row[this.header.stateField] = false;
              }
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16.return) {
                _iterator16.return();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }

          this.initHiddenRows();
        }
      }, {
        key: 'trigger',
        value: function trigger(_name) {
          var _options;

          var name = _name + '.bs.table';

          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key4 = 1; _key4 < _len2; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }

          (_options = this.options)[BootstrapTable.EVENTS[name]].apply(_options, args);
          this.$el.trigger($.Event(name), args);

          this.options.onAll(name, args);
          this.$el.trigger($.Event('all.bs.table'), [name, args]);
        }
      }, {
        key: 'resetHeader',
        value: function resetHeader() {
          // fix #61: the hidden table reset header bug.
          // fix bug: get $el.css('width') error sometime (height = 500)
          clearTimeout(this.timeoutId_);
          this.timeoutId_ = setTimeout($.proxy(this.fitHeader, this), this.$el.is(':hidden') ? 100 : 0);
        }
      }, {
        key: 'fitHeader',
        value: function fitHeader() {
          var _this12 = this;

          if (this.$el.is(':hidden')) {
            this.timeoutId_ = setTimeout($.proxy(this.fitHeader, this), 100);
            return;
          }
          var fixedBody = this.$tableBody.get(0);

          var scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? Utils.getScrollBarWidth() : 0;

          this.$el.css('margin-top', -this.$header.outerHeight());

          var focused = $(':focus');
          if (focused.length > 0) {
            var $th = focused.parents('th');
            if ($th.length > 0) {
              var dataField = $th.attr('data-field');
              if (dataField !== undefined) {
                var $headerTh = this.$header.find('[data-field=\'' + dataField + '\']');
                if ($headerTh.length > 0) {
                  $headerTh.find(':input').addClass('focus-temp');
                }
              }
            }
          }

          this.$header_ = this.$header.clone(true, true);
          this.$selectAll_ = this.$header_.find('[name="btSelectAll"]');
          this.$tableHeader.css({
            'margin-right': scrollWidth
          }).find('table').css('width', this.$el.outerWidth()).html('').attr('class', this.$el.attr('class')).append(this.$header_);

          var focusedTemp = $('.focus-temp:visible:eq(0)');
          if (focusedTemp.length > 0) {
            focusedTemp.focus();
            this.$header.find('.focus-temp').removeClass('focus-temp');
          }

          // fix bug: $.data() is not working as expected after $.append()
          this.$header.find('th[data-field]').each(function (i, el) {
            _this12.$header_.find(Utils.sprintf('th[data-field="%s"]', $(el).data('field'))).data($(el).data());
          });

          var visibleFields = this.getVisibleFields();
          var $ths = this.$header_.find('th');
          var $tr = this.$body.find('>tr:first-child:not(.no-records-found)');

          while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
            $tr = $tr.next();
          }

          $tr.find('> *').each(function (i, el) {
            var $this = $(el);
            var index = i;

            if (_this12.options.detailView && !_this12.options.cardView) {
              if (i === 0) {
                var $thDetail = $ths.filter('.detail');
                var _zoomWidth = $thDetail.width() - $thDetail.find('.fht-cell').width();
                $thDetail.find('.fht-cell').width($this.innerWidth() - _zoomWidth);
              }
              index = i - 1;
            }

            if (index === -1) {
              return;
            }

            var $th = _this12.$header_.find(Utils.sprintf('th[data-field="%s"]', visibleFields[index]));
            if ($th.length > 1) {
              $th = $($ths[$this[0].cellIndex]);
            }

            var zoomWidth = $th.width() - $th.find('.fht-cell').width();
            $th.find('.fht-cell').width($this.innerWidth() - zoomWidth);
          });

          this.horizontalScroll();
          this.trigger('post-header');
        }
      }, {
        key: 'resetFooter',
        value: function resetFooter() {
          var data = this.getData();
          var html = [];

          if (!this.options.showFooter || this.options.cardView) {
            // do nothing
            return;
          }

          if (!this.options.cardView && this.options.detailView) {
            html.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>');
          }

          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = this.columns[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var column = _step17.value;

              var falign = '';

              var valign = '';
              var csses = [];
              var style = {};
              var class_ = Utils.sprintf(' class="%s"', column['class']);

              if (!column.visible) {
                return;
              }

              if (this.options.cardView && !column.cardVisible) {
                return;
              }

              falign = Utils.sprintf('text-align: %s; ', column.falign ? column.falign : column.align);
              valign = Utils.sprintf('vertical-align: %s; ', column.valign);

              style = Utils.calculateObjectValue(null, this.options.footerStyle);

              if (style && style.css) {
                var _iteratorNormalCompletion18 = true;
                var _didIteratorError18 = false;
                var _iteratorError18 = undefined;

                try {
                  for (var _iterator18 = Object.keys(style.css)[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                    var _ref23 = _step18.value;

                    var _ref24 = _slicedToArray(_ref23, 2);

                    var key = _ref24[0];
                    var value = _ref24[1];

                    csses.push(key + ': ' + value);
                  }
                } catch (err) {
                  _didIteratorError18 = true;
                  _iteratorError18 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion18 && _iterator18.return) {
                      _iterator18.return();
                    }
                  } finally {
                    if (_didIteratorError18) {
                      throw _iteratorError18;
                    }
                  }
                }
              }

              html.push('<td', class_, Utils.sprintf(' style="%s"', falign + valign + csses.concat().join('; ')), '>');
              html.push('<div class="th-inner">');

              html.push(Utils.calculateObjectValue(column, column.footerFormatter, [data], '&nbsp;') || '&nbsp;');

              html.push('</div>');
              html.push('<div class="fht-cell"></div>');
              html.push('</div>');
              html.push('</td>');
            }
          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17.return) {
                _iterator17.return();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }

          this.$tableFooter.find('tr').html(html.join(''));
          this.$tableFooter.show();
          clearTimeout(this.timeoutFooter_);
          this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this), this.$el.is(':hidden') ? 100 : 0);
        }
      }, {
        key: 'fitFooter',
        value: function fitFooter() {
          clearTimeout(this.timeoutFooter_);
          if (this.$el.is(':hidden')) {
            this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this), 100);
            return;
          }

          var elWidth = this.$el.css('width');
          var scrollWidth = elWidth > this.$tableBody.width() ? Utils.getScrollBarWidth() : 0;

          this.$tableFooter.css({
            'margin-right': scrollWidth
          }).find('table').css('width', elWidth).attr('class', this.$el.attr('class'));

          var $footerTd = this.$tableFooter.find('td');

          this.$body.find('>tr:first-child:not(.no-records-found) > *').each(function (i, el) {
            var $this = $(el);

            $footerTd.eq(i).find('.fht-cell').width($this.innerWidth());
          });

          this.horizontalScroll();
        }
      }, {
        key: 'horizontalScroll',
        value: function horizontalScroll() {
          var _this13 = this;

          // horizontal scroll event
          // TODO: it's probably better improving the layout than binding to scroll event

          this.trigger('scroll-body');
          this.$tableBody.off('scroll').on('scroll', function (_ref25) {
            var currentTarget = _ref25.currentTarget;

            if (_this13.options.showHeader && _this13.options.height) {
              _this13.$tableHeader.scrollLeft($(currentTarget).scrollLeft());
            }

            if (_this13.options.showFooter && !_this13.options.cardView) {
              _this13.$tableFooter.scrollLeft($(currentTarget).scrollLeft());
            }
          });
        }
      }, {
        key: 'toggleColumn',
        value: function toggleColumn(index, checked, needUpdate) {
          if (index === -1) {
            return;
          }
          this.columns[index].visible = checked;
          this.initHeader();
          this.initSearch();
          this.initPagination();
          this.initBody();

          if (this.options.showColumns) {
            var $items = this.$toolbar.find('.keep-open input').prop('disabled', false);

            if (needUpdate) {
              $items.filter(Utils.sprintf('[value="%s"]', index)).prop('checked', checked);
            }

            if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
              $items.filter(':checked').prop('disabled', true);
            }
          }
        }
      }, {
        key: 'getVisibleFields',
        value: function getVisibleFields() {
          var visibleFields = [];

          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = this.header.fields[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var field = _step19.value;

              var column = this.columns[this.fieldsColumnsIndex[field]];

              if (!column.visible) {
                continue;
              }
              visibleFields.push(field);
            }
          } catch (err) {
            _didIteratorError19 = true;
            _iteratorError19 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion19 && _iterator19.return) {
                _iterator19.return();
              }
            } finally {
              if (_didIteratorError19) {
                throw _iteratorError19;
              }
            }
          }

          return visibleFields;
        }
      }, {
        key: 'resetView',
        value: function resetView(params) {
          var padding = 0;

          if (params && params.height) {
            this.options.height = params.height;
          }

          this.$selectAll.prop('checked', this.$selectItem.length > 0 && this.$selectItem.length === this.$selectItem.filter(':checked').length);

          if (this.options.cardView) {
            // remove the element css
            this.$el.css('margin-top', '0');
            this.$tableContainer.css('padding-bottom', '0');
            this.$tableFooter.hide();
            return;
          }

          if (this.options.showHeader && this.options.height) {
            this.$tableHeader.show();
            this.resetHeader();
            padding += this.$header.outerHeight();
          } else {
            this.$tableHeader.hide();
            this.trigger('post-header');
          }

          if (this.options.showFooter) {
            this.resetFooter();
            if (this.options.height) {
              padding += this.$tableFooter.outerHeight() + 1;
            }
          }

          if (this.options.height) {
            var toolbarHeight = this.$toolbar.outerHeight(true);
            var paginationHeight = this.$pagination.outerHeight(true);
            var height = this.options.height - toolbarHeight - paginationHeight;
            var tableHeight = this.$tableBody.find('table').outerHeight(true);
            this.$tableContainer.css('height', height + 'px');
            this.$tableBorder && this.$tableBorder.css('height', height - tableHeight - padding - 1 + 'px');
          }

          // Assign the correct sortable arrow
          this.getCaret();
          this.$tableContainer.css('padding-bottom', padding + 'px');
          this.trigger('reset-view');
        }
      }, {
        key: 'getData',
        value: function getData(useCurrentPage) {
          var data = this.options.data;
          if (this.searchText || this.options.sortName || !$.isEmptyObject(this.filterColumns) || !$.isEmptyObject(this.filterColumnsPartial)) {
            data = this.data;
          }

          if (useCurrentPage) {
            return data.slice(this.pageFrom - 1, this.pageTo);
          }

          return data;
        }
      }, {
        key: 'load',
        value: function load(_data) {
          var fixedScroll = false;
          var data = _data;

          // #431: support pagination
          if (this.options.pagination && this.options.sidePagination === 'server') {
            this.options.totalRows = data[this.options.totalField];
          }

          fixedScroll = data.fixedScroll;
          data = Array.isArray(data) ? data : data[this.options.dataField];

          this.initData(data);
          this.initSearch();
          this.initPagination();
          this.initBody(fixedScroll);
        }
      }, {
        key: 'append',
        value: function append(data) {
          this.initData(data, 'append');
          this.initSearch();
          this.initPagination();
          this.initSort();
          this.initBody(true);
        }
      }, {
        key: 'prepend',
        value: function prepend(data) {
          this.initData(data, 'prepend');
          this.initSearch();
          this.initPagination();
          this.initSort();
          this.initBody(true);
        }
      }, {
        key: 'remove',
        value: function remove(params) {
          var len = this.options.data.length;
          var i = void 0;
          var row = void 0;

          if (!params.hasOwnProperty('field') || !params.hasOwnProperty('values')) {
            return;
          }

          for (i = len - 1; i >= 0; i--) {
            row = this.options.data[i];

            if (!row.hasOwnProperty(params.field)) {
              continue;
            }
            if (params.values.includes(row[params.field])) {
              this.options.data.splice(i, 1);
              if (this.options.sidePagination === 'server') {
                this.options.totalRows -= 1;
              }
            }
          }

          if (len === this.options.data.length) {
            return;
          }

          this.initSearch();
          this.initPagination();
          this.initSort();
          this.initBody(true);
        }
      }, {
        key: 'removeAll',
        value: function removeAll() {
          if (this.options.data.length > 0) {
            this.options.data.splice(0, this.options.data.length);
            this.initSearch();
            this.initPagination();
            this.initBody(true);
          }
        }
      }, {
        key: 'getRowByUniqueId',
        value: function getRowByUniqueId(_id) {
          var uniqueId = this.options.uniqueId;
          var len = this.options.data.length;
          var id = _id;
          var dataRow = null;
          var i = void 0;
          var row = void 0;
          var rowUniqueId = void 0;

          for (i = len - 1; i >= 0; i--) {
            row = this.options.data[i];

            if (row.hasOwnProperty(uniqueId)) {
              // uniqueId is a column
              rowUniqueId = row[uniqueId];
            } else if (row._data && row._data.hasOwnProperty(uniqueId)) {
              // uniqueId is a row data property
              rowUniqueId = row._data[uniqueId];
            } else {
              continue;
            }

            if (typeof rowUniqueId === 'string') {
              id = id.toString();
            } else if (typeof rowUniqueId === 'number') {
              if (Number(rowUniqueId) === rowUniqueId && rowUniqueId % 1 === 0) {
                id = parseInt(id);
              } else if (rowUniqueId === Number(rowUniqueId) && rowUniqueId !== 0) {
                id = parseFloat(id);
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
        key: 'removeByUniqueId',
        value: function removeByUniqueId(id) {
          var len = this.options.data.length;
          var row = this.getRowByUniqueId(id);

          if (row) {
            this.options.data.splice(this.options.data.indexOf(row), 1);
          }

          if (len === this.options.data.length) {
            return;
          }

          this.initSearch();
          this.initPagination();
          this.initBody(true);
        }
      }, {
        key: 'updateByUniqueId',
        value: function updateByUniqueId(params) {
          var allParams = Array.isArray(params) ? params : [params];

          var _iteratorNormalCompletion20 = true;
          var _didIteratorError20 = false;
          var _iteratorError20 = undefined;

          try {
            for (var _iterator20 = allParams[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
              var _params = _step20.value;

              if (!_params.hasOwnProperty('id') || !_params.hasOwnProperty('row')) {
                continue;
              }

              var rowId = this.options.data.indexOf(this.getRowByUniqueId(_params.id));

              if (rowId === -1) {
                continue;
              }
              $.extend(this.options.data[rowId], _params.row);
            }
          } catch (err) {
            _didIteratorError20 = true;
            _iteratorError20 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion20 && _iterator20.return) {
                _iterator20.return();
              }
            } finally {
              if (_didIteratorError20) {
                throw _iteratorError20;
              }
            }
          }

          this.initSearch();
          this.initPagination();
          this.initSort();
          this.initBody(true);
        }
      }, {
        key: 'refreshColumnTitle',
        value: function refreshColumnTitle(params) {
          if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
            return;
          }

          this.columns[this.fieldsColumnsIndex[params.field]].title = this.options.escape ? Utils.escapeHTML(params.title) : params.title;

          if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
            var header = this.options.height !== undefined ? this.$tableHeader : this.$header;
            header.find('th[data-field]').each(function (i, el) {
              if ($(el).data('field') === params.field) {
                $($(el).find('.th-inner')[0]).text(params.title);
                return false;
              }
            });
          }
        }
      }, {
        key: 'insertRow',
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
        key: 'updateRow',
        value: function updateRow(params) {
          var allParams = Array.isArray(params) ? params : [params];

          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = allParams[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var _params2 = _step21.value;

              if (!_params2.hasOwnProperty('index') || !_params2.hasOwnProperty('row')) {
                continue;
              }
              $.extend(this.options.data[_params2.index], _params2.row);
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21.return) {
                _iterator21.return();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }

          this.initSearch();
          this.initPagination();
          this.initSort();
          this.initBody(true);
        }
      }, {
        key: 'initHiddenRows',
        value: function initHiddenRows() {
          this.hiddenRows = [];
        }
      }, {
        key: 'showRow',
        value: function showRow(params) {
          this.toggleRow(params, true);
        }
      }, {
        key: 'hideRow',
        value: function hideRow(params) {
          this.toggleRow(params, false);
        }
      }, {
        key: 'toggleRow',
        value: function toggleRow(params, visible) {
          var row = void 0;

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
        }
      }, {
        key: 'getHiddenRows',
        value: function getHiddenRows(show) {
          if (show) {
            this.initHiddenRows();
            this.initBody(true);
            return;
          }
          var data = this.getData();
          var rows = [];

          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = data[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var row = _step22.value;

              if (this.hiddenRows.includes(row)) {
                rows.push(row);
              }
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22.return) {
                _iterator22.return();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }

          this.hiddenRows = rows;
          return rows;
        }
      }, {
        key: 'mergeCells',
        value: function mergeCells(options) {
          var row = options.index;
          var col = this.getVisibleFields().indexOf(options.field);
          var rowspan = options.rowspan || 1;
          var colspan = options.colspan || 1;
          var i = void 0;
          var j = void 0;
          var $tr = this.$body.find('>tr');

          if (this.options.detailView && !this.options.cardView) {
            col += 1;
          }

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
        key: 'updateCell',
        value: function updateCell(params) {
          if (!params.hasOwnProperty('index') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
            return;
          }
          this.data[params.index][params.field] = params.value;

          if (params.reinit === false) {
            return;
          }
          this.initSort();
          this.initBody(true);
        }
      }, {
        key: 'updateCellById',
        value: function updateCellById(params) {
          var _this14 = this;

          if (!params.hasOwnProperty('id') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
            return;
          }
          var allParams = Array.isArray(params) ? params : [params];

          allParams.forEach(function (_ref26) {
            var id = _ref26.id,
                field = _ref26.field,
                value = _ref26.value;

            var rowId = _this14.options.data.indexOf(_this14.getRowByUniqueId(id));

            if (rowId === -1) {
              return;
            }
            _this14.data[rowId][field] = value;
          });

          if (params.reinit === false) {
            return;
          }
          this.initSort();
          this.initBody(true);
        }
      }, {
        key: 'getOptions',
        value: function getOptions() {
          // Deep copy: remove data
          var options = $.extend({}, this.options);
          delete options.data;
          return $.extend(true, {}, options);
        }
      }, {
        key: 'getSelections',
        value: function getSelections() {
          var _this15 = this;

          // fix #2424: from html with checkbox
          return this.options.data.filter(function (row) {
            return row[_this15.header.stateField] === true;
          });
        }
      }, {
        key: 'getAllSelections',
        value: function getAllSelections() {
          var _this16 = this;

          return this.options.data.filter(function (row) {
            return row[_this16.header.stateField];
          });
        }
      }, {
        key: 'checkAll',
        value: function checkAll() {
          this.checkAll_(true);
        }
      }, {
        key: 'uncheckAll',
        value: function uncheckAll() {
          this.checkAll_(false);
        }
      }, {
        key: 'checkInvert',
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
        key: 'checkAll_',
        value: function checkAll_(checked) {
          var rows = void 0;
          if (!checked) {
            rows = this.getSelections();
          }
          this.$selectAll.add(this.$selectAll_).prop('checked', checked);
          this.$selectItem.filter(':enabled').prop('checked', checked);
          this.updateRows();
          if (checked) {
            rows = this.getSelections();
          }
          this.trigger(checked ? 'check-all' : 'uncheck-all', rows);
        }
      }, {
        key: 'check',
        value: function check(index) {
          this.check_(true, index);
        }
      }, {
        key: 'uncheck',
        value: function uncheck(index) {
          this.check_(false, index);
        }
      }, {
        key: 'check_',
        value: function check_(checked, index) {
          var $el = this.$selectItem.filter('[data-index="' + index + '"]');
          var row = this.data[index];

          if ($el.is(':radio') || this.options.singleSelect) {
            var _iteratorNormalCompletion23 = true;
            var _didIteratorError23 = false;
            var _iteratorError23 = undefined;

            try {
              for (var _iterator23 = this.options.data[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                var r = _step23.value;

                r[this.header.stateField] = false;
              }
            } catch (err) {
              _didIteratorError23 = true;
              _iteratorError23 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion23 && _iterator23.return) {
                  _iterator23.return();
                }
              } finally {
                if (_didIteratorError23) {
                  throw _iteratorError23;
                }
              }
            }

            this.$selectItem.filter(':checked').not($el).prop('checked', false);
          }

          row[this.header.stateField] = checked;
          $el.prop('checked', checked);
          this.updateSelected();
          this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el);
        }
      }, {
        key: 'checkBy',
        value: function checkBy(obj) {
          this.checkBy_(true, obj);
        }
      }, {
        key: 'uncheckBy',
        value: function uncheckBy(obj) {
          this.checkBy_(false, obj);
        }
      }, {
        key: 'checkBy_',
        value: function checkBy_(checked, obj) {
          var _this17 = this;

          if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
            return;
          }

          var rows = [];
          this.options.data.forEach(function (row, i) {
            if (!row.hasOwnProperty(obj.field)) {
              return false;
            }
            if (obj.values.includes(row[obj.field])) {
              var $el = _this17.$selectItem.filter(':enabled').filter(Utils.sprintf('[data-index="%s"]', i)).prop('checked', checked);
              row[_this17.header.stateField] = checked;
              rows.push(row);
              _this17.trigger(checked ? 'check' : 'uncheck', row, $el);
            }
          });
          this.updateSelected();
          this.trigger(checked ? 'check-some' : 'uncheck-some', rows);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.$el.insertBefore(this.$container);
          $(this.options.toolbar).insertBefore(this.$el);
          this.$container.next().remove();
          this.$container.remove();
          this.$el.html(this.$el_.html()).css('margin-top', '0').attr('class', this.$el_.attr('class') || ''); // reset the class
        }
      }, {
        key: 'showLoading',
        value: function showLoading() {
          this.$tableLoading.show();
        }
      }, {
        key: 'hideLoading',
        value: function hideLoading() {
          this.$tableLoading.hide();
        }
      }, {
        key: 'togglePagination',
        value: function togglePagination() {
          this.options.pagination = !this.options.pagination;
          var button = this.$toolbar.find('button[name="paginationSwitch"] i');
          if (this.options.pagination) {
            button.attr('class', this.options.iconsPrefix + ' ' + this.options.icons.paginationSwitchDown);
          } else {
            button.attr('class', this.options.iconsPrefix + ' ' + this.options.icons.paginationSwitchUp);
          }
          this.updatePagination();
        }
      }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen() {
          this.$el.closest('.bootstrap-table').toggleClass('fullscreen');
        }
      }, {
        key: 'refresh',
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
          this.initServer(params && params.silent, params && params.query, params && params.url);
          this.trigger('refresh', params);
        }
      }, {
        key: 'resetWidth',
        value: function resetWidth() {
          if (this.options.showHeader && this.options.height) {
            this.fitHeader();
          }
          if (this.options.showFooter && !this.options.cardView) {
            this.fitFooter();
          }
        }
      }, {
        key: 'showColumn',
        value: function showColumn(field) {
          this.toggleColumn(this.fieldsColumnsIndex[field], true, true);
        }
      }, {
        key: 'hideColumn',
        value: function hideColumn(field) {
          this.toggleColumn(this.fieldsColumnsIndex[field], false, true);
        }
      }, {
        key: 'getHiddenColumns',
        value: function getHiddenColumns() {
          return this.columns.filter(function (_ref27) {
            var visible = _ref27.visible;
            return !visible;
          });
        }
      }, {
        key: 'getVisibleColumns',
        value: function getVisibleColumns() {
          return this.columns.filter(function (_ref28) {
            var visible = _ref28.visible;
            return visible;
          });
        }
      }, {
        key: 'toggleAllColumns',
        value: function toggleAllColumns(visible) {
          var _iteratorNormalCompletion24 = true;
          var _didIteratorError24 = false;
          var _iteratorError24 = undefined;

          try {
            for (var _iterator24 = this.columns[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
              var column = _step24.value;

              column.visible = visible;
            }
          } catch (err) {
            _didIteratorError24 = true;
            _iteratorError24 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion24 && _iterator24.return) {
                _iterator24.return();
              }
            } finally {
              if (_didIteratorError24) {
                throw _iteratorError24;
              }
            }
          }

          this.initHeader();
          this.initSearch();
          this.initPagination();
          this.initBody();
          if (this.options.showColumns) {
            var $items = this.$toolbar.find('.keep-open input').prop('disabled', false);

            if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
              $items.filter(':checked').prop('disabled', true);
            }
          }
        }
      }, {
        key: 'showAllColumns',
        value: function showAllColumns() {
          this.toggleAllColumns(true);
        }
      }, {
        key: 'hideAllColumns',
        value: function hideAllColumns() {
          this.toggleAllColumns(false);
        }
      }, {
        key: 'filterBy',
        value: function filterBy(columns) {
          this.filterColumns = $.isEmptyObject(columns) ? {} : columns;
          this.options.pageNumber = 1;
          this.initSearch();
          this.updatePagination();
        }
      }, {
        key: 'scrollTo',
        value: function scrollTo(_value) {
          if (typeof _value === 'undefined') {
            return this.$tableBody.scrollTop();
          }

          var value = _value;
          if (typeof _value === 'string' && _value === 'bottom') {
            value = this.$tableBody[0].scrollHeight;
          }
          this.$tableBody.scrollTop(value);
        }
      }, {
        key: 'getScrollPosition',
        value: function getScrollPosition() {
          return this.scrollTo();
        }
      }, {
        key: 'selectPage',
        value: function selectPage(page) {
          if (page > 0 && page <= this.options.totalPages) {
            this.options.pageNumber = page;
            this.updatePagination();
          }
        }
      }, {
        key: 'prevPage',
        value: function prevPage() {
          if (this.options.pageNumber > 1) {
            this.options.pageNumber--;
            this.updatePagination();
          }
        }
      }, {
        key: 'nextPage',
        value: function nextPage() {
          if (this.options.pageNumber < this.options.totalPages) {
            this.options.pageNumber++;
            this.updatePagination();
          }
        }
      }, {
        key: 'toggleView',
        value: function toggleView() {
          this.options.cardView = !this.options.cardView;
          this.initHeader();
          // Fixed remove toolbar when click cardView button.
          // this.initToolbar();
          var $icon = this.$toolbar.find('button[name="toggle"] i');
          if (this.options.cardView) {
            $icon.removeClass(this.options.icons.toggleOff);
            $icon.addClass(this.options.icons.toggleOn);
          } else {
            $icon.removeClass(this.options.icons.toggleOn);
            $icon.addClass(this.options.icons.toggleOff);
          }
          this.initBody();
          this.trigger('toggle', this.options.cardView);
        }
      }, {
        key: 'refreshOptions',
        value: function refreshOptions(options) {
          // If the objects are equivalent then avoid the call of destroy / init methods
          if (Utils.compareObjects(this.options, options, true)) {
            return;
          }
          this.options = $.extend(this.options, options);
          this.trigger('refresh-options', this.options);
          this.destroy();
          this.init();
        }
      }, {
        key: 'resetSearch',
        value: function resetSearch(text) {
          var $search = this.$toolbar.find('.search input');
          $search.val(text || '');
          this.onSearch({ currentTarget: $search });
        }
      }, {
        key: 'expandRow_',
        value: function expandRow_(expand, index) {
          var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"]', index));
          if ($tr.next().is('tr.detail-view') === !expand) {
            $tr.find('> td > .detail-icon').click();
          }
        }
      }, {
        key: 'expandRow',
        value: function expandRow(index) {
          this.expandRow_(true, index);
        }
      }, {
        key: 'collapseRow',
        value: function collapseRow(index) {
          this.expandRow_(false, index);
        }
      }, {
        key: 'expandAllRows',
        value: function expandAllRows(isSubTable) {
          var _this18 = this;

          if (isSubTable) {
            var $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"]', 0));
            var detailIcon = null;
            var executeInterval = false;
            var idInterval = -1;

            if (!$tr.next().is('tr.detail-view')) {
              $tr.find('> td > .detail-icon').click();
              executeInterval = true;
            } else if (!$tr.next().next().is('tr.detail-view')) {
              $tr.next().find('.detail-icon').click();
              executeInterval = true;
            }

            if (executeInterval) {
              try {
                idInterval = setInterval(function () {
                  detailIcon = _this18.$body.find('tr.detail-view').last().find('.detail-icon');
                  if (detailIcon.length > 0) {
                    detailIcon.click();
                  } else {
                    clearInterval(idInterval);
                  }
                }, 1);
              } catch (ex) {
                clearInterval(idInterval);
              }
            }
          } else {
            var trs = this.$body.children();
            for (var i = 0; i < trs.length; i++) {
              this.expandRow_(true, $(trs[i]).data('index'));
            }
          }
        }
      }, {
        key: 'collapseAllRows',
        value: function collapseAllRows(isSubTable) {
          if (isSubTable) {
            this.expandRow_(false, 0);
          } else {
            var trs = this.$body.children();
            for (var i = 0; i < trs.length; i++) {
              this.expandRow_(false, $(trs[i]).data('index'));
            }
          }
        }
      }, {
        key: 'updateFormatText',
        value: function updateFormatText(name, text) {
          if (this.options[Utils.sprintf('format%s', name)]) {
            if (typeof text === 'string') {
              this.options[Utils.sprintf('format%s', name)] = function () {
                return text;
              };
            } else if (typeof text === 'function') {
              this.options[Utils.sprintf('format%s', name)] = text;
            }
          }
          this.initToolbar();
          this.initPagination();
          this.initBody();
        }
      }]);

      return BootstrapTable;
    }();

    BootstrapTable.DEFAULTS = DEFAULTS;
    BootstrapTable.LOCALES = LOCALES;
    BootstrapTable.COLUMN_DEFAULTS = COLUMN_DEFAULTS;
    BootstrapTable.EVENTS = EVENTS;

    // BOOTSTRAP TABLE PLUGIN DEFINITION
    // =======================

    var allowedMethods = ['getOptions', 'getSelections', 'getAllSelections', 'getData', 'load', 'append', 'prepend', 'remove', 'removeAll', 'insertRow', 'updateRow', 'updateCell', 'updateByUniqueId', 'removeByUniqueId', 'getRowByUniqueId', 'showRow', 'hideRow', 'getHiddenRows', 'mergeCells', 'refreshColumnTitle', 'checkAll', 'uncheckAll', 'checkInvert', 'check', 'uncheck', 'checkBy', 'uncheckBy', 'refresh', 'resetView', 'resetWidth', 'destroy', 'showLoading', 'hideLoading', 'showColumn', 'hideColumn', 'getHiddenColumns', 'getVisibleColumns', 'showAllColumns', 'hideAllColumns', 'filterBy', 'scrollTo', 'getScrollPosition', 'selectPage', 'prevPage', 'nextPage', 'togglePagination', 'toggleView', 'refreshOptions', 'resetSearch', 'expandRow', 'collapseRow', 'expandAllRows', 'collapseAllRows', 'updateFormatText', 'updateCellById'];

    $.BootstrapTable = BootstrapTable;
    $.fn.bootstrapTable = function (option) {
      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key5 = 1; _key5 < _len3; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      var value = void 0;

      this.each(function (i, el) {
        var data = $(el).data('bootstrap.table');
        var options = $.extend({}, BootstrapTable.DEFAULTS, $(el).data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option);

        if (typeof option === 'string') {
          var _data2;

          if (!allowedMethods.includes(option)) {
            throw new Error('Unknown method: ' + option);
          }

          if (!data) {
            return;
          }

          value = (_data2 = data)[option].apply(_data2, args);

          if (option === 'destroy') {
            $(el).removeData('bootstrap.table');
          }
        }

        if (!data) {
          $(el).data('bootstrap.table', data = new $.BootstrapTable(el, options));
        }
      });

      return typeof value === 'undefined' ? this : value;
    };

    $.fn.bootstrapTable.Constructor = BootstrapTable;
    $.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS;
    $.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS;
    $.fn.bootstrapTable.locales = BootstrapTable.LOCALES;
    $.fn.bootstrapTable.methods = allowedMethods;
    $.fn.bootstrapTable.utils = Utils;

    // BOOTSTRAP TABLE INIT
    // =======================

    $(function () {
      $('[data-toggle="table"]').bootstrapTable();
    });
  })(jQuery);
});