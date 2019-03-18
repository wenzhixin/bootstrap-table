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
    global.bootstrapTableThTH = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Thai translation
   * Author: Monchai S.<monchais@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['th-TH'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'กำลังโหลดข้อมูล, กรุณารอสักครู่';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ' + pageFrom + ' \u0E16\u0E36\u0E07 ' + pageTo + ' \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ' + totalRows + ' \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'ค้นหา';
      },
      formatNoMatches: function formatNoMatches() {
        return 'ไม่พบรายการที่ค้นหา !';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'รีเฟรส';
      },
      formatToggle: function formatToggle() {
        return 'สลับมุมมอง';
      },
      formatColumns: function formatColumns() {
        return 'คอลัมน์';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH']);
  })(jQuery);
});