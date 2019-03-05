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
   * version: 1.14.1
   * https://github.com/wenzhixin/bootstrap-table/
   */

  (function ($) {
    // TOOLS DEFINITION
    // ======================

    var bootstrapVersion = 4;
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

    var constants = {
      3: {
        theme: 'bootstrap3',
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
          buttonsPrefix: 'btn',
          buttons: 'default',
          buttonsGroup: 'btn-group',
          buttonsDropdown: 'btn-group',
          pull: 'pull',
          inputGroup: '',
          input: 'form-control',
          paginationDropdown: 'btn-group dropdown',
          dropup: 'dropup',
          dropdownActive: 'active',
          paginationActive: 'active'
        },
        html: {
          toobarDropdow: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
          toobarDropdowItem: '<li role="menuitem"><label>%s</label></li>',
          pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
          pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
          dropdownCaret: '<span class="caret"></span>',
          pagination: ['<ul class="pagination%s">', '</ul>'],
          paginationItem: '<li class="page-item%s"><a class="page-link" href="#">%s</a></li>',
          icon: '<i class="%s %s"></i>'
        }
      },
      4: {
        theme: 'bootstrap4',
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
          buttonsPrefix: 'btn',
          buttons: 'secondary',
          buttonsGroup: 'btn-group',
          buttonsDropdown: 'btn-group',
          pull: 'float',
          inputGroup: '',
          input: 'form-control',
          paginationDropdown: 'btn-group dropdown',
          dropup: 'dropup',
          dropdownActive: 'active',
          paginationActive: 'active'
        },
        html: {
          toobarDropdow: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
          toobarDropdowItem: '<label class="dropdown-item">%s</label>',
          pageDropdown: ['<div class="dropdown-menu">', '</div>'],
          pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
          dropdownCaret: '<span class="caret"></span>',
          pagination: ['<ul class="pagination%s">', '</ul>'],
          paginationItem: '<li class="page-item%s"><a class="page-link" href="#">%s</a></li>',
          icon: '<i class="%s %s"></i>'
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
        for (var _iterator = list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var item = _ref;

          if (item.field === value) {
            return item.title;
          }
        }
        return '';
      },
      setFieldIndex: function setFieldIndex(columns) {
        var totalCol = 0;
        var flag = [];

        for (var _iterator2 = columns[0], _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var column = _ref2;

          totalCol += column.colspan || 1;
        }

        for (var i = 0; i < columns.length; i++) {
          flag[i] = [];
          for (var j = 0; j < totalCol; j++) {
            flag[i][j] = false;
          }
        }

        for (var _i3 = 0; _i3 < columns.length; _i3++) {
          for (var _iterator3 = columns[_i3], _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
              if (_i4 >= _iterator3.length) break;
              _ref3 = _iterator3[_i4++];
            } else {
              _i4 = _iterator3.next();
              if (_i4.done) break;
              _ref3 = _i4.value;
            }

            var r = _ref3;

            var rowspan = r.rowspan || 1;
            var colspan = r.colspan || 1;
            var index = flag[_i3].indexOf(false);

            if (colspan === 1) {
              r.fieldIndex = index;
              // when field is undefined, use index instead
              if (typeof r.field === 'undefined') {
                r.field = index;
              }
            }

            for (var k = 0; k < rowspan; k++) {
              flag[_i3 + k][index] = true;
            }
            for (var _k = 0; _k < colspan; _k++) {
              flag[_i3][index + _k] = true;
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
            for (var _iterator4 = names, _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
              var _ref4;

              if (_isArray4) {
                if (_i5 >= _iterator4.length) break;
                _ref4 = _iterator4[_i5++];
              } else {
                _i5 = _iterator4.next();
                if (_i5.done) break;
                _ref4 = _i5.value;
              }

              var f = _ref4;

              func = func[f];
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

        for (var _iterator5 = aKeys, _isArray5 = Array.isArray(_iterator5), _i6 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
          var _ref5;

          if (_isArray5) {
            if (_i6 >= _iterator5.length) break;
            _ref5 = _iterator5[_i6++];
          } else {
            _i6 = _iterator5.next();
            if (_i6.done) break;
            _ref5 = _i6.value;
          }

          var key = _ref5;

          if (bKeys.indexOf(key) !== -1 && objectA[key] !== objectB[key]) {
            return false;
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
        for (var _iterator6 = function (target) {
          return Object.keys(target).map(function (key) {
            return [key, target[key]];
          });
        }(dataAttr), _isArray6 = Array.isArray(_iterator6), _i7 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
          var _ref6;

          if (_isArray6) {
            if (_i7 >= _iterator6.length) break;
            _ref6 = _iterator6[_i7++];
          } else {
            _i7 = _iterator6.next();
            if (_i7.done) break;
            _ref6 = _i7.value;
          }

          var _ref7 = _ref6,
              _ref8 = _slicedToArray(_ref7, 2),
              attr = _ref8[0],
              value = _ref8[1];

          var auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase();
          if (auxAttr !== attr) {
            dataAttr[auxAttr] = value;
            delete dataAttr[attr];
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
        for (var _iterator7 = props, _isArray7 = Array.isArray(_iterator7), _i8 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
          var _ref9;

          if (_isArray7) {
            if (_i8 >= _iterator7.length) break;
            _ref9 = _iterator7[_i8++];
          } else {
            _i8 = _iterator7.next();
            if (_i8.done) break;
            _ref9 = _i8.value;
          }

          var p = _ref9;

          value = value && value[p];
        }
        return escape ? this.escapeHTML(value) : value;
      },
      isIEBrowser: function isIEBrowser() {
        return navigator.userAgent.indexOf('MSIE ') !== -1 || /Trident.*rv:11\./.test(navigator.userAgent);
      },
      findIndex: function findIndex(items, item) {
        for (var _iterator8 = items, _isArray8 = Array.isArray(_iterator8), _i9 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
          var _ref10;

          if (_isArray8) {
            if (_i9 >= _iterator8.length) break;
            _ref10 = _iterator8[_i9++];
          } else {
            _i9 = _iterator8.next();
            if (_i9.done) break;
            _ref10 = _i9.value;
          }

          var it = _ref10;

          if (JSON.stringify(it) === JSON.stringify(item)) {
            return items.indexOf(it);
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
      selectItemName: 'btSelectItem',
      clickToSelect: false,
      ignoreClickToSelectOn: function ignoreClickToSelectOn(_ref11) {
        var tagName = _ref11.tagName;

        return ['A', 'BUTTON'].indexOf(tagName) !== -1;
      },

      singleSelect: false,
      checkboxHeader: true,
      maintainSelected: false,
      uniqueId: undefined,
      cardView: false,
      detailView: false,
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
      buttonsPrefix: constants.classes.buttonsPrefix,
      buttonsClass: constants.classes.buttons,
      icons: constants.icons,
      iconSize: undefined,
      iconsPrefix: constants.iconsPrefix, onAll: function onAll(name, args) {
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
          this.initConstants();
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
        key: 'initConstants',
        value: function initConstants() {
          var o = this.options;
          this.constants = constants;

          var buttonsPrefix = o.buttonsPrefix ? o.buttonsPrefix + '-' : '';
          this.constants.buttonsClass = [o.buttonsPrefix, buttonsPrefix + o.buttonsClass, Utils.sprintf(buttonsPrefix + '%s', o.iconSize)].join(' ').trim();
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
          var topPagination = ['top', 'both'].indexOf(this.options.paginationVAlign) !== -1 ? '<div class="fixed-table-pagination clearfix"></div>' : '';
          var bottomPagination = ['bottom', 'both'].indexOf(this.options.paginationVAlign) !== -1 ? '<div class="fixed-table-pagination"></div>' : '';

          this.$container = $('\n        <div class="bootstrap-table">\n        <div class="fixed-table-toolbar"></div>\n        ' + topPagination + '\n        <div class="fixed-table-container">\n        <div class="fixed-table-header"><table></table></div>\n        <div class="fixed-table-body">\n        <div class="fixed-table-loading">\n        ' + this.options.formatLoadingMessage() + '\n        </div>\n        </div>\n        <div class="fixed-table-footer"><table><thead><tr></tr></thead></table></div>\n        </div>\n        ' + bottomPagination + '\n        </div>\n      ');

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

            if (this.options.showFooter) {
              this.$tableContainer.addClass('has-footer');
            }

            if (this.options.classes.split(' ').indexOf('table-bordered') !== -1) {
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

              row[field] = $(el).html().trim();
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
                  if (column.width.indexOf('%') !== -1) {
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
                  text = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>';
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
          this.$selectAll.off('click').on('click', function (_ref12) {
            var currentTarget = _ref12.currentTarget;

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
        value: function onSort(_ref13) {
          var type = _ref13.type,
              currentTarget = _ref13.currentTarget;

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

          var o = this.options;
          var html = [];
          var timeoutId = 0;
          var $keepOpen = void 0;
          var $search = void 0;
          var switchableCount = 0;

          if (this.$toolbar.find('.bs-bars').children().length) {
            $('body').append($(o.toolbar));
          }
          this.$toolbar.html('');

          if (typeof o.toolbar === 'string' || _typeof(o.toolbar) === 'object') {
            $(Utils.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, o.toolbarAlign)).appendTo(this.$toolbar).append($(o.toolbar));
          }

          // showColumns, showToggle, showRefresh
          html = ['<div class="' + ['columns', 'columns-' + o.buttonsAlign, this.constants.classes.buttonsGroup, this.constants.classes.pull + '-' + o.buttonsAlign].join(' ') + '">'];

          if (typeof o.icons === 'string') {
            o.icons = Utils.calculateObjectValue(null, o.icons);
          }

          if (o.showPaginationSwitch) {
            html.push('<button class="' + this.constants.buttonsClass + '" type="button" name="paginationSwitch"\n          aria-label="Pagination Switch" title="' + o.formatPaginationSwitch() + '">\n          ' + Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.paginationSwitchDown) + '\n          </button>');
          }

          if (o.showRefresh) {
            html.push('<button class="' + this.constants.buttonsClass + '" type="button" name="refresh"\n          aria-label="Refresh" title="' + o.formatRefresh() + '">\n          ' + Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.refresh) + '\n          </button>');
          }

          if (o.showToggle) {
            html.push('<button class="' + this.constants.buttonsClass + '" type="button" name="toggle"\n          aria-label="Toggle" title="' + o.formatToggle() + '">\n          ' + Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.toggleOff) + '\n          </button>');
          }

          if (o.showFullscreen) {
            html.push('<button class="' + this.constants.buttonsClass + '" type="button" name="fullscreen"\n          aria-label="Fullscreen" title="' + o.formatFullscreen() + '">\n          ' + Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.fullscreen) + '\n          </button>');
          }

          if (o.showColumns) {
            html.push('<div class="keep-open ' + this.constants.classes.buttonsDropdown + '" title="' + o.formatColumns() + '">\n          <button class="' + this.constants.buttonsClass + ' dropdown-toggle" type="button" data-toggle="dropdown"\n          aria-label="Columns" title="' + o.formatFullscreen() + '">\n          ' + Utils.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.columns) + '\n          ' + this.constants.html.dropdownCaret + '\n          </button>\n          ' + this.constants.html.toobarDropdow[0]);

            this.columns.forEach(function (column, i) {
              if (column.radio || column.checkbox) {
                return;
              }

              if (o.cardView && !column.cardVisible) {
                return;
              }

              var checked = column.visible ? ' checked="checked"' : '';

              if (column.switchable) {
                html.push(Utils.sprintf(_this4.constants.html.toobarDropdowItem, Utils.sprintf('<input type="checkbox" data-field="%s" value="%s"%s> <span>%s</span>', column.field, i, checked, column.title)));
                switchableCount++;
              }
            });
            html.push(this.constants.html.toobarDropdow[1], '</div>');
          }

          html.push('</div>');

          // Fix #188: this.showToolbar is for extensions
          if (this.showToolbar || html.length > 2) {
            this.$toolbar.append(html.join(''));
          }

          if (o.showPaginationSwitch) {
            this.$toolbar.find('button[name="paginationSwitch"]').off('click').on('click', $.proxy(this.togglePagination, this));
          }

          if (o.showFullscreen) {
            this.$toolbar.find('button[name="fullscreen"]').off('click').on('click', $.proxy(this.toggleFullscreen, this));
          }

          if (o.showRefresh) {
            this.$toolbar.find('button[name="refresh"]').off('click').on('click', $.proxy(this.refresh, this));
          }

          if (o.showToggle) {
            this.$toolbar.find('button[name="toggle"]').off('click').on('click', function () {
              _this4.toggleView();
            });
          }

          if (o.showColumns) {
            $keepOpen = this.$toolbar.find('.keep-open');

            if (switchableCount <= o.minimumCountColumns) {
              $keepOpen.find('input').prop('disabled', true);
            }

            $keepOpen.find('li, label').off('click').on('click', function (e) {
              e.stopImmediatePropagation();
            });
            $keepOpen.find('input').off('click').on('click', function (_ref14) {
              var currentTarget = _ref14.currentTarget;

              var $this = $(currentTarget);

              _this4.toggleColumn($this.val(), $this.prop('checked'), false);
              _this4.trigger('column-switch', $this.data('field'), $this.prop('checked'));
            });
          }

          if (o.search) {
            html = [];
            html.push('<div class="' + this.constants.classes.pull + '-' + o.searchAlign + ' search ' + this.constants.classes.inputGroup + '">\n          <input class="' + this.constants.classes.input + Utils.sprintf(' input-%s', o.iconSize) + '"\n          type="text" placeholder="' + o.formatSearch() + '">\n          </div>');

            this.$toolbar.append(html.join(''));
            $search = this.$toolbar.find('.search input');
            $search.off('keyup drop blur').on('keyup drop blur', function (event) {
              if (o.searchOnEnterKey && event.keyCode !== 13) {
                return;
              }

              if ([37, 38, 39, 40].indexOf(event.keyCode) !== -1) {
                return;
              }

              clearTimeout(timeoutId); // doesn't matter if it's 0
              timeoutId = setTimeout(function () {
                _this4.onSearch(event);
              }, o.searchTimeOut);
            });

            if (Utils.isIEBrowser()) {
              $search.off('mouseup').on('mouseup', function (event) {
                clearTimeout(timeoutId); // doesn't matter if it's 0
                timeoutId = setTimeout(function () {
                  _this4.onSearch(event);
                }, o.searchTimeOut);
              });
            }
          }
        }
      }, {
        key: 'onSearch',
        value: function onSearch(_ref15) {
          var currentTarget = _ref15.currentTarget,
              firedByInitSearchText = _ref15.firedByInitSearchText;

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
              this.data = Utils.calculateObjectValue(this.options, this.options.customSearch, [this.options.data, this.searchText]);
              return;
            }

            var s = this.searchText && (this.options.escape ? Utils.escapeHTML(this.searchText) : this.searchText).toLowerCase();
            var f = $.isEmptyObject(this.filterColumns) ? null : this.filterColumns;

            // Check filter
            this.data = f ? this.options.data.filter(function (item, i) {
              for (var key in f) {
                if (Array.isArray(f[key]) && !(f[key].indexOf(item[key]) !== -1) || !Array.isArray(f[key]) && item[key] !== f[key]) {
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
                  for (var _i10 = 0; _i10 < props.length; _i10++) {
                    if (value[props[_i10]] !== null) {
                      value = value[props[_i10]];
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
                    if (('' + value).toLowerCase().indexOf(s) !== -1) {
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

          var o = this.options;
          if (!o.pagination) {
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
          var pageList = o.pageList;

          if (o.sidePagination !== 'server') {
            o.totalRows = data.length;
          }

          this.totalPages = 0;
          if (o.totalRows) {
            if (o.pageSize === o.formatAllRows()) {
              o.pageSize = o.totalRows;
              $allSelected = true;
            } else if (o.pageSize === o.totalRows) {
              // Fix #667 Table with pagination,
              // multiple pages and a search this matches to one page throws exception
              var pageLst = typeof o.pageList === 'string' ? o.pageList.replace('[', '').replace(']', '').replace(/ /g, '').toLowerCase().split(',') : o.pageList;
              if (pageLst.indexOf(o.formatAllRows().toLowerCase()) !== -1) {
                $allSelected = true;
              }
            }

            this.totalPages = ~~((o.totalRows - 1) / o.pageSize) + 1;

            o.totalPages = this.totalPages;
          }
          if (this.totalPages > 0 && o.pageNumber > this.totalPages) {
            o.pageNumber = this.totalPages;
          }

          this.pageFrom = (o.pageNumber - 1) * o.pageSize + 1;
          this.pageTo = o.pageNumber * o.pageSize;
          if (this.pageTo > o.totalRows) {
            this.pageTo = o.totalRows;
          }

          var paginationInfo = o.onlyInfoPagination ? o.formatDetailPagination(o.totalRows) : o.formatShowingRows(this.pageFrom, this.pageTo, o.totalRows);

          html.push('<div class="' + this.constants.classes.pull + '-' + o.paginationDetailHAlign + ' pagination-detail">\n        <span class="pagination-info">\n        ' + paginationInfo + '\n        </span>');

          if (!o.onlyInfoPagination) {
            html.push('<span class="page-list">');

            var pageNumber = ['<span class="' + this.constants.classes.paginationDropdown + '">\n          <button class="' + this.constants.buttonsClass + ' dropdown-toggle" type="button" data-toggle="dropdown">\n          <span class="page-size">\n          ' + ($allSelected ? o.formatAllRows() : o.pageSize) + '\n          </span>\n          ' + this.constants.html.dropdownCaret + '\n          </button>\n          ' + this.constants.html.pageDropdown[0]];

            if (typeof o.pageList === 'string') {
              var list = o.pageList.replace('[', '').replace(']', '').replace(/ /g, '').split(',');

              pageList = [];
              for (var _iterator9 = list, _isArray9 = Array.isArray(_iterator9), _i11 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
                var _ref16;

                if (_isArray9) {
                  if (_i11 >= _iterator9.length) break;
                  _ref16 = _iterator9[_i11++];
                } else {
                  _i11 = _iterator9.next();
                  if (_i11.done) break;
                  _ref16 = _i11.value;
                }

                var value = _ref16;

                pageList.push(value.toUpperCase() === o.formatAllRows().toUpperCase() || value.toUpperCase() === 'UNLIMITED' ? o.formatAllRows() : +value);
              }
            }

            pageList.forEach(function (page, i) {
              if (!o.smartDisplay || i === 0 || pageList[i - 1] < o.totalRows) {
                var active = void 0;
                if ($allSelected) {
                  active = page === o.formatAllRows() ? _this6.constants.classes.dropdownActive : '';
                } else {
                  active = page === o.pageSize ? _this6.constants.classes.dropdownActive : '';
                }
                pageNumber.push(Utils.sprintf(_this6.constants.html.pageDropdownItem, active, page));
              }
            });
            pageNumber.push(this.constants.html.pageDropdown[1] + '</span>');

            html.push(o.formatRecordsPerPage(pageNumber.join('')));
            html.push('</span></div>');

            html.push('<div class="' + this.constants.classes.pull + '-' + o.paginationHAlign + ' pagination">', Utils.sprintf(this.constants.html.pagination[0], Utils.sprintf(' pagination-%s', o.iconSize)), Utils.sprintf(this.constants.html.paginationItem, ' page-pre', o.paginationPreText));

            if (this.totalPages < o.paginationSuccessivelySize) {
              from = 1;
              to = this.totalPages;
            } else {
              from = o.pageNumber - o.paginationPagesBySide;
              to = from + o.paginationPagesBySide * 2;
            }

            if (o.pageNumber < o.paginationSuccessivelySize - 1) {
              to = o.paginationSuccessivelySize;
            }

            if (to > this.totalPages) {
              to = this.totalPages;
            }

            if (o.paginationSuccessivelySize > this.totalPages - from) {
              from = from - (o.paginationSuccessivelySize - (this.totalPages - from)) + 1;
            }

            if (from < 1) {
              from = 1;
            }

            if (to > this.totalPages) {
              to = this.totalPages;
            }

            var middleSize = Math.round(o.paginationPagesBySide / 2);
            var pageItem = function pageItem(i) {
              var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

              return Utils.sprintf(_this6.constants.html.paginationItem, classes + (i === o.pageNumber ? ' ' + _this6.constants.classes.paginationActive : ''), i);
            };

            if (from > 1) {
              var max = o.paginationPagesBySide;
              if (max >= from) max = from - 1;
              for (i = 1; i <= max; i++) {
                html.push(pageItem(i));
              }
              if (from - 1 === max + 1) {
                i = from - 1;
                html.push(pageItem(i));
              } else {
                if (from - 1 > max) {
                  if (from - o.paginationPagesBySide * 2 > o.paginationPagesBySide && o.paginationUseIntermediate) {
                    i = Math.round((from - middleSize) / 2 + middleSize);
                    html.push(pageItem(i, ' page-intermediate'));
                  } else {
                    html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-first-separator disabled', '...'));
                  }
                }
              }
            }

            for (i = from; i <= to; i++) {
              html.push(pageItem(i));
            }

            if (this.totalPages > to) {
              var min = this.totalPages - (o.paginationPagesBySide - 1);
              if (to >= min) min = to + 1;
              if (to + 1 === min - 1) {
                i = to + 1;
                html.push(pageItem(i));
              } else {
                if (min > to + 1) {
                  if (this.totalPages - to > o.paginationPagesBySide * 2 && o.paginationUseIntermediate) {
                    i = Math.round((this.totalPages - middleSize - to) / 2 + to);
                    html.push(pageItem(i, ' page-intermediate'));
                  } else {
                    html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-last-separator disabled', '...'));
                  }
                }
              }

              for (i = min; i <= this.totalPages; i++) {
                html.push(pageItem(i));
              }
            }

            html.push(Utils.sprintf(this.constants.html.paginationItem, ' page-next', o.paginationNextText));
            html.push(this.constants.html.pagination[1], '</div>');
          }
          this.$pagination.html(html.join(''));

          var dropupClass = ['bottom', 'both'].indexOf(o.paginationVAlign) !== -1 ? ' ' + this.constants.classes.dropup : '';
          this.$pagination.last().find('.page-list > span').addClass(dropupClass);

          if (!o.onlyInfoPagination) {
            $pageList = this.$pagination.find('.page-list a');
            $pre = this.$pagination.find('.page-pre');
            $next = this.$pagination.find('.page-next');
            $number = this.$pagination.find('.page-item').not('.page-next, .page-pre');

            if (o.smartDisplay) {
              if (this.totalPages <= 1) {
                this.$pagination.find('div.pagination').hide();
              }
              if (pageList.length < 2 || o.totalRows <= pageList[0]) {
                this.$pagination.find('span.page-list').hide();
              }

              // when data is empty, hide the pagination
              this.$pagination[this.getData().length ? 'show' : 'hide']();
            }

            if (!o.paginationLoop) {
              if (o.pageNumber === 1) {
                $pre.addClass('disabled');
              }
              if (o.pageNumber === this.totalPages) {
                $next.addClass('disabled');
              }
            }

            if ($allSelected) {
              o.pageSize = o.formatAllRows();
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

          $this.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive);
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
            for (var _iterator10 = function (target) {
              return Object.keys(target).map(function (key) {
                return [key, target[key]];
              });
            }(style.css), _isArray10 = Array.isArray(_iterator10), _i12 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
              var _ref17;

              if (_isArray10) {
                if (_i12 >= _iterator10.length) break;
                _ref17 = _iterator10[_i12++];
              } else {
                _i12 = _iterator10.next();
                if (_i12.done) break;
                _ref17 = _i12.value;
              }

              var _ref18 = _ref17,
                  _ref19 = _slicedToArray(_ref18, 2),
                  key = _ref19[0],
                  value = _ref19[1];

              csses.push(key + ': ' + value);
            }
          }

          attributes = Utils.calculateObjectValue(this.options, this.options.rowAttributes, [item, i], attributes);

          if (attributes) {
            for (var _iterator11 = function (target) {
              return Object.keys(target).map(function (key) {
                return [key, target[key]];
              });
            }(attributes), _isArray11 = Array.isArray(_iterator11), _i13 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
              var _ref20;

              if (_isArray11) {
                if (_i13 >= _iterator11.length) break;
                _ref20 = _iterator11[_i13++];
              } else {
                _i13 = _iterator11.next();
                if (_i13.done) break;
                _ref20 = _i13.value;
              }

              var _ref21 = _ref20,
                  _ref22 = _slicedToArray(_ref21, 2),
                  _key2 = _ref22[0],
                  _value2 = _ref22[1];

              htmlAttributes.push(_key2 + '="' + Utils.escapeHTML(_value2) + '"');
            }
          }

          if (item._data && !$.isEmptyObject(item._data)) {
            for (var _iterator12 = function (target) {
              return Object.keys(target).map(function (key) {
                return [key, target[key]];
              });
            }(item._data), _isArray12 = Array.isArray(_iterator12), _i14 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
              var _ref23;

              if (_isArray12) {
                if (_i14 >= _iterator12.length) break;
                _ref23 = _iterator12[_i14++];
              } else {
                _i14 = _iterator12.next();
                if (_i14.done) break;
                _ref23 = _i14.value;
              }

              var _ref24 = _ref23,
                  _ref25 = _slicedToArray(_ref24, 2),
                  k = _ref25[0],
                  v = _ref25[1];

              // ignore data-index
              if (k === 'index') {
                return;
              }
              data_ += ' data-' + k + '="' + v + '"';
            }
          }

          html.push('<tr', Utils.sprintf(' %s', htmlAttributes.length ? htmlAttributes.join(' ') : undefined), Utils.sprintf(' id="%s"', Array.isArray(item) ? undefined : item._id), Utils.sprintf(' class="%s"', style.classes || (Array.isArray(item) ? undefined : item._class)), ' data-index="' + i + '"', Utils.sprintf(' data-uniqueid="%s"', item[this.options.uniqueId]), Utils.sprintf('%s', data_), '>');

          if (this.options.cardView) {
            html.push('<td colspan="' + this.header.fields.length + '"><div class="card-views">');
          }

          if (!this.options.cardView && this.options.detailView) {
            html.push('<td>');

            if (Utils.calculateObjectValue(null, this.options.detailFilter, [i, item])) {
              html.push('\n            <a class="detail-icon" href="#">\n            ' + Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen) + '\n            </a>\n          ');
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
              for (var _iterator13 = function (target) {
                return Object.keys(target).map(function (key) {
                  return [key, target[key]];
                });
              }(cellStyle.css), _isArray13 = Array.isArray(_iterator13), _i15 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
                var _ref26;

                if (_isArray13) {
                  if (_i15 >= _iterator13.length) break;
                  _ref26 = _iterator13[_i15++];
                } else {
                  _i15 = _iterator13.next();
                  if (_i15.done) break;
                  _ref26 = _i15.value;
                }

                var _ref27 = _ref26,
                    _ref28 = _slicedToArray(_ref27, 2),
                    _key3 = _ref28[0],
                    _value3 = _ref28[1];

                csses_.push(_key3 + ': ' + _value3);
              }
              style_ = ' style="' + csses_.concat(_this7.header.styles[j]).join('; ') + '"';
            }

            value = Utils.calculateObjectValue(column, _this7.header.formatters[j], [value_, item, i, field], value_);

            if (item['_' + field + '_data'] && !$.isEmptyObject(item['_' + field + '_data'])) {
              for (var _iterator14 = function (target) {
                return Object.keys(target).map(function (key) {
                  return [key, target[key]];
                });
              }(item['_' + field + '_data']), _isArray14 = Array.isArray(_iterator14), _i16 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
                var _ref29;

                if (_isArray14) {
                  if (_i16 >= _iterator14.length) break;
                  _ref29 = _iterator14[_i16++];
                } else {
                  _i16 = _iterator14.next();
                  if (_i16.done) break;
                  _ref29 = _i16.value;
                }

                var _ref30 = _ref29,
                    _ref31 = _slicedToArray(_ref30, 2),
                    _k2 = _ref31[0],
                    _v = _ref31[1];

                // ignore data-index
                if (_k2 === 'index') {
                  return;
                }
                data_ += ' data-' + _k2 + '="' + _v + '"';
              }
            }

            if (column.checkbox || column.radio) {
              type = column.checkbox ? 'checkbox' : type;
              type = column.radio ? 'radio' : type;

              var c = column['class'] || '';
              var isChecked = value === true || value_ || value && value.checked;
              var isDisabled = !column.checkboxEnabled || value && value.disabled;

              text = [_this7.options.cardView ? '<div class="card-view ' + c + '">' : '<td class="bs-checkbox ' + c + '">', '<label>\n              <input\n              data-index="' + i + '"\n              name="' + _this7.options.selectItemName + '"\n              type="' + type + '"\n              ' + Utils.sprintf('value="%s"', item[_this7.options.idField]) + '\n              ' + Utils.sprintf('checked="%s"', isChecked ? 'checked' : undefined) + '\n              ' + Utils.sprintf('disabled="%s"', isDisabled ? 'disabled' : undefined) + ' />\n              <span></span>\n              </label>', _this7.header.formatters[j] && typeof value === 'string' ? value : '', _this7.options.cardView ? '</div>' : '</td>'].join('');

              item[_this7.header.stateField] = value === true || !!value_ || value && value.checked;
            } else {
              value = typeof value === 'undefined' || value === null ? _this7.options.undefinedText : value;

              if (_this7.options.cardView) {
                var cardTitle = _this7.options.showHeader ? '<span class="card-view-title"' + style_ + '>' + Utils.getFieldTitle(_this7.columns, field) + '</span>' : '';

                text = '<div class="card-view">' + cardTitle + '<span class="card-view-value">' + value + '</span></div>';

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
          this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', function (_ref32) {
            var currentTarget = _ref32.currentTarget,
                type = _ref32.type,
                target = _ref32.target;

            var $td = $(currentTarget);
            var $tr = $td.parent();
            var $cardviewArr = $(target).parents('.card-views').children();
            var $cardviewTarget = $(target).parents('.card-view');
            var item = _this8.data[$tr.data('index')];
            var index = _this8.options.cardView ? $cardviewArr.index($cardviewTarget) : $td[0].cellIndex;
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
            if (type === 'click' && _this8.options.clickToSelect && column.clickToSelect && !Utils.calculateObjectValue(_this8.options, _this8.options.ignoreClickToSelectOn, [target])) {
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
              $this.html(Utils.sprintf(_this8.constants.html.icon, _this8.options.iconsPrefix, _this8.options.icons.detailOpen));
              _this8.trigger('collapse-row', index, row, $tr.next());
              $tr.next().remove();
            } else {
              $this.html(Utils.sprintf(_this8.constants.html.icon, _this8.options.iconsPrefix, _this8.options.icons.detailClose));
              $tr.after(Utils.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.children('td').length));
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

            var _loop = function _loop() {
              if (_isArray15) {
                if (_i17 >= _iterator15.length) return 'break';
                _ref33 = _iterator15[_i17++];
              } else {
                _i17 = _iterator15.next();
                if (_i17.done) return 'break';
                _ref33 = _i17.value;
              }

              var _ref34 = _ref33,
                  _ref35 = _slicedToArray(_ref34, 2),
                  key = _ref35[0],
                  event = _ref35[1];

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

            for (var _iterator15 = function (target) {
              return Object.keys(target).map(function (key) {
                return [key, target[key]];
              });
            }(events), _isArray15 = Array.isArray(_iterator15), _i17 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();;) {
              var _ref33;

              var _ret = _loop();

              if (_ret === 'break') break;
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
          for (var _iterator16 = this.data, _isArray16 = Array.isArray(_iterator16), _i18 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
            var _ref36;

            if (_isArray16) {
              if (_i18 >= _iterator16.length) break;
              _ref36 = _iterator16[_i18++];
            } else {
              _i18 = _iterator16.next();
              if (_i18.done) break;
              _ref36 = _i18.value;
            }

            var row = _ref36;

            this.$selectAll.prop('checked', false);
            this.$selectItem.prop('checked', false);
            if (this.header.stateField) {
              row[this.header.stateField] = false;
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
          this.$tableHeader.css('margin-right', scrollWidth).find('table').css('width', this.$el.outerWidth()).html('').attr('class', this.$el.attr('class')).append(this.$header_);

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
            html.push('<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>');
          }

          for (var _iterator17 = this.columns, _isArray17 = Array.isArray(_iterator17), _i19 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
            var _ref37;

            if (_isArray17) {
              if (_i19 >= _iterator17.length) break;
              _ref37 = _iterator17[_i19++];
            } else {
              _i19 = _iterator17.next();
              if (_i19.done) break;
              _ref37 = _i19.value;
            }

            var column = _ref37;

            var falign = '';

            var valign = '';
            var csses = [];
            var style = {};
            var class_ = Utils.sprintf(' class="%s"', column['class']);

            if (!column.visible) {
              continue;
            }

            if (this.options.cardView && !column.cardVisible) {
              return;
            }

            falign = Utils.sprintf('text-align: %s; ', column.falign ? column.falign : column.align);
            valign = Utils.sprintf('vertical-align: %s; ', column.valign);

            style = Utils.calculateObjectValue(null, this.options.footerStyle, [column]);

            if (style && style.css) {
              for (var _iterator18 = function (target) {
                return Object.keys(target).map(function (key) {
                  return [key, target[key]];
                });
              }(style.css), _isArray18 = Array.isArray(_iterator18), _i20 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
                var _ref38;

                if (_isArray18) {
                  if (_i20 >= _iterator18.length) break;
                  _ref38 = _iterator18[_i20++];
                } else {
                  _i20 = _iterator18.next();
                  if (_i20.done) break;
                  _ref38 = _i20.value;
                }

                var _ref39 = _ref38,
                    _ref40 = _slicedToArray(_ref39, 2),
                    _key5 = _ref40[0],
                    value = _ref40[1];

                csses.push(_key5 + ': ' + value);
              }
            }
            if (style && style.classes) {
              class_ = Utils.sprintf(' class="%s"', column['class'] ? [column['class'], style.classes].join(' ') : style.classes);
            }

            html.push('<th', class_, Utils.sprintf(' style="%s"', falign + valign + csses.concat().join('; ')), '>');
            html.push('<div class="th-inner">');

            html.push(Utils.calculateObjectValue(column, column.footerFormatter, [data], ''));

            html.push('</div>');
            html.push('<div class="fht-cell"></div>');
            html.push('</div>');
            html.push('</th>');
          }

          this.$tableFooter.find('tr').html(html.join(''));
          this.$tableFooter.show();
          this.fitFooter();
        }
      }, {
        key: 'fitFooter',
        value: function fitFooter() {
          var _this13 = this;

          if (this.$el.is(':hidden')) {
            setTimeout($.proxy(this.fitFooter, this), 100);
            return;
          }

          var fixedBody = this.$tableBody.get(0);
          var scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth && fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ? Utils.getScrollBarWidth() : 0;

          this.$tableFooter.css('margin-right', scrollWidth).find('table').css('width', this.$el.outerWidth()).attr('class', this.$el.attr('class'));

          var visibleFields = this.getVisibleFields();
          var $ths = this.$tableFooter.find('th');
          var $tr = this.$body.find('>tr:first-child:not(.no-records-found)');

          while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
            $tr = $tr.next();
          }

          $tr.find('> *').each(function (i, el) {
            var $this = $(el);
            var index = i;

            if (_this13.options.detailView && !_this13.options.cardView) {
              if (i === 0) {
                var $thDetail = $ths.filter('.detail');
                var _zoomWidth2 = $thDetail.width() - $thDetail.find('.fht-cell').width();
                $thDetail.find('.fht-cell').width($this.innerWidth() - _zoomWidth2);
              }
              index = i - 1;
            }

            if (index === -1) {
              return;
            }

            var $th = $ths.eq(i);
            var zoomWidth = $th.width() - $th.find('.fht-cell').width();
            $th.find('.fht-cell').width($this.innerWidth() - zoomWidth);
          });

          this.horizontalScroll();
        }
      }, {
        key: 'horizontalScroll',
        value: function horizontalScroll() {
          var _this14 = this;

          // horizontal scroll event
          // TODO: it's probably better improving the layout than binding to scroll event

          this.trigger('scroll-body');
          this.$tableBody.off('scroll').on('scroll', function (_ref41) {
            var currentTarget = _ref41.currentTarget;

            if (_this14.options.showHeader && _this14.options.height) {
              _this14.$tableHeader.scrollLeft($(currentTarget).scrollLeft());
            }

            if (_this14.options.showFooter && !_this14.options.cardView) {
              _this14.$tableFooter.scrollLeft($(currentTarget).scrollLeft());
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

          for (var _iterator19 = this.header.fields, _isArray19 = Array.isArray(_iterator19), _i21 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();;) {
            var _ref42;

            if (_isArray19) {
              if (_i21 >= _iterator19.length) break;
              _ref42 = _iterator19[_i21++];
            } else {
              _i21 = _iterator19.next();
              if (_i21.done) break;
              _ref42 = _i21.value;
            }

            var field = _ref42;

            var column = this.columns[this.fieldsColumnsIndex[field]];

            if (!column.visible) {
              continue;
            }
            visibleFields.push(field);
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
            padding += this.$header.outerHeight(true);
          } else {
            this.$tableHeader.hide();
            this.trigger('post-header');
          }

          if (this.options.showFooter) {
            this.resetFooter();
            if (this.options.height) {
              padding += this.$tableFooter.outerHeight(true);
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
            if (params.values.indexOf(row[params.field]) !== -1) {
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

          for (var _iterator20 = allParams, _isArray20 = Array.isArray(_iterator20), _i22 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();;) {
            var _ref43;

            if (_isArray20) {
              if (_i22 >= _iterator20.length) break;
              _ref43 = _iterator20[_i22++];
            } else {
              _i22 = _iterator20.next();
              if (_i22.done) break;
              _ref43 = _i22.value;
            }

            var _params = _ref43;

            if (!_params.hasOwnProperty('id') || !_params.hasOwnProperty('row')) {
              continue;
            }

            var rowId = this.options.data.indexOf(this.getRowByUniqueId(_params.id));

            if (rowId === -1) {
              continue;
            }
            $.extend(this.options.data[rowId], _params.row);
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

          for (var _iterator21 = allParams, _isArray21 = Array.isArray(_iterator21), _i23 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
            var _ref44;

            if (_isArray21) {
              if (_i23 >= _iterator21.length) break;
              _ref44 = _iterator21[_i23++];
            } else {
              _i23 = _iterator21.next();
              if (_i23.done) break;
              _ref44 = _i23.value;
            }

            var _params2 = _ref44;

            if (!_params2.hasOwnProperty('index') || !_params2.hasOwnProperty('row')) {
              continue;
            }
            $.extend(this.options.data[_params2.index], _params2.row);
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

          for (var _iterator22 = data, _isArray22 = Array.isArray(_iterator22), _i24 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
            var _ref45;

            if (_isArray22) {
              if (_i24 >= _iterator22.length) break;
              _ref45 = _iterator22[_i24++];
            } else {
              _i24 = _iterator22.next();
              if (_i24.done) break;
              _ref45 = _i24.value;
            }

            var row = _ref45;

            if (this.hiddenRows.indexOf(row) !== -1) {
              rows.push(row);
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
          var _this15 = this;

          if (!params.hasOwnProperty('id') || !params.hasOwnProperty('field') || !params.hasOwnProperty('value')) {
            return;
          }
          var allParams = Array.isArray(params) ? params : [params];

          allParams.forEach(function (_ref46) {
            var id = _ref46.id,
                field = _ref46.field,
                value = _ref46.value;

            var rowId = _this15.options.data.indexOf(_this15.getRowByUniqueId(id));

            if (rowId === -1) {
              return;
            }
            _this15.data[rowId][field] = value;
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
          var _this16 = this;

          // fix #2424: from html with checkbox
          return this.options.data.filter(function (row) {
            return row[_this16.header.stateField] === true;
          });
        }
      }, {
        key: 'getAllSelections',
        value: function getAllSelections() {
          var _this17 = this;

          return this.options.data.filter(function (row) {
            return row[_this17.header.stateField];
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
            for (var _iterator23 = this.options.data, _isArray23 = Array.isArray(_iterator23), _i25 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
              var _ref47;

              if (_isArray23) {
                if (_i25 >= _iterator23.length) break;
                _ref47 = _iterator23[_i25++];
              } else {
                _i25 = _iterator23.next();
                if (_i25.done) break;
                _ref47 = _i25.value;
              }

              var r = _ref47;

              r[this.header.stateField] = false;
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
          var _this18 = this;

          if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
            return;
          }

          var rows = [];
          this.options.data.forEach(function (row, i) {
            if (!row.hasOwnProperty(obj.field)) {
              return false;
            }
            if (obj.values.indexOf(row[obj.field]) !== -1) {
              var $el = _this18.$selectItem.filter(':enabled').filter(Utils.sprintf('[data-index="%s"]', i)).prop('checked', checked);
              row[_this18.header.stateField] = checked;
              rows.push(row);
              _this18.trigger(checked ? 'check' : 'uncheck', row, $el);
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
          this.$toolbar.find('button[name="paginationSwitch"]').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp));
          this.updatePagination();
        }
      }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen() {
          this.$el.closest('.bootstrap-table').toggleClass('fullscreen');
          this.resetView();
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
          return this.columns.filter(function (_ref48) {
            var visible = _ref48.visible;
            return !visible;
          });
        }
      }, {
        key: 'getVisibleColumns',
        value: function getVisibleColumns() {
          return this.columns.filter(function (_ref49) {
            var visible = _ref49.visible;
            return visible;
          });
        }
      }, {
        key: 'toggleAllColumns',
        value: function toggleAllColumns(visible) {
          for (var _iterator24 = this.columns, _isArray24 = Array.isArray(_iterator24), _i26 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();;) {
            var _ref50;

            if (_isArray24) {
              if (_i26 >= _iterator24.length) break;
              _ref50 = _iterator24[_i26++];
            } else {
              _i26 = _iterator24.next();
              if (_i26.done) break;
              _ref50 = _i26.value;
            }

            var column = _ref50;

            column.visible = visible;
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
          this.$toolbar.find('button[name="toggle"]').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff));
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
          var _this19 = this;

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
                  detailIcon = _this19.$body.find('tr.detail-view').last().find('.detail-icon');
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
      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key6 = 1; _key6 < _len3; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }

      var value = void 0;

      this.each(function (i, el) {
        var data = $(el).data('bootstrap.table');
        var options = $.extend({}, BootstrapTable.DEFAULTS, $(el).data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option);

        if (typeof option === 'string') {
          var _data2;

          if (!(allowedMethods.indexOf(option) !== -1)) {
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