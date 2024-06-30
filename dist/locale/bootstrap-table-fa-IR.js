(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Persian translation
   * Author: MJ Vakili <mjv.1989@Gmail.com>
   */

  $.fn.bootstrapTable.locales['fa-IR'] = $.fn.bootstrapTable.locales['fa'] = {
    formatCopyRows: function formatCopyRows() {
      return 'کپی ردیف ها';
    },
    formatPrint: function formatPrint() {
      return 'پرینت';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'در حال بارگذاری, لطفا صبر کنید';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " \u0631\u06A9\u0648\u0631\u062F \u062F\u0631 \u0635\u0641\u062D\u0647");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0646\u0645\u0627\u06CC\u0634 ".concat(pageFrom, " \u062A\u0627 ").concat(pageTo, " \u0627\u0632 ").concat(totalRows, " \u0631\u062F\u06CC\u0641 (filtered from ").concat(totalNotFiltered, " total rows)");
      }
      return "\u0646\u0645\u0627\u06CC\u0634 ".concat(pageFrom, " \u062A\u0627 ").concat(pageTo, " \u0627\u0632 ").concat(totalRows, " \u0631\u062F\u06CC\u0641");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'صفحه قبلی';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u0628\u0647 \u0635\u0641\u062D\u0647 ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'صفحه بعدی';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u0646\u0645\u0627\u06CC\u0634 ".concat(totalRows, " \u0633\u0637\u0631\u0647\u0627");
    },
    formatClearSearch: function formatClearSearch() {
      return 'پاک کردن جستجو';
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
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'نمایش صفحه بندی';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'پنهان کردن صفحه بندی';
    },
    formatRefresh: function formatRefresh() {
      return 'به روز رسانی';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'سطر ها';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'تغییر وضعیت همه';
    },
    formatFullscreen: function formatFullscreen() {
      return 'تمام صفحه';
    },
    formatAllRows: function formatAllRows() {
      return 'همه';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'رفرش اتوماتیک';
    },
    formatExport: function formatExport() {
      return 'خروجی دیتا';
    },
    formatJumpTo: function formatJumpTo() {
      return 'برو';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'جستجوی پیشرفته';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'بستن';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'پنهان/نمایش دادن کنترل ها';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'پنهان کردن کنترل ها';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'نمایش کنترل ها';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR']);

}));
