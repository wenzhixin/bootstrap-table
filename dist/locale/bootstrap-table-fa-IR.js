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
    global.bootstrapTableFaIR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Persian translation
   * Author: MJ Vakili <mjv.1989@Gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['fa-IR'] = {
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
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR']);
  })(jQuery);
});