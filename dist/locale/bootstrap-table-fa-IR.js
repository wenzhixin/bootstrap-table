(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery);
    global.bootstrapTableFaIR = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['fa-IR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'در حال بارگذاری, لطفا صبر کنید...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' \u0631\u06A9\u0648\u0631\u062F \u062F\u0631 \u0635\u0641\u062D\u0647';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return '\u0646\u0645\u0627\u06CC\u0634 ' + pageFrom + ' \u062A\u0627 ' + pageTo + ' \u0627\u0632 ' + totalRows + ' \u0631\u062F\u06CC\u0641';
    },
    formatSearch: function formatSearch() {
      return 'جستجو';
    },
    formatNoMatches: function formatNoMatches() {
      return 'رکوردی یافت نشد.';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'نمایش/مخفی صفحه بندی';
    },
    formatRefresh: function formatRefresh() {
      return 'به روز رسانی';
    },
    formatToggle: function formatToggle() {
      return 'تغییر نمایش';
    },
    formatColumns: function formatColumns() {
      return 'سطر ها';
    },
    formatAllRows: function formatAllRows() {
      return 'همه';
    }
  }; /**
      * Bootstrap Table Persian translation
      * Author: MJ Vakili <mjv.1989@Gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['fa-IR']);
});