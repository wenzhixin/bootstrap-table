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
    global.bootstrapTableUrPK = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Urdu translation
   * Author: Malik <me@malikrizwan.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ur-PK'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'براۓ مہربانی انتظار کیجئے';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 \u0641\u06CC \u0635\u0641\u06C1 ';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u062F\u06CC\u06A9\u06BE\u06CC\u06BA ' + pageFrom + ' \u0633\u06D2 ' + pageTo + ' \u06A9\u06D2 ' + totalRows + '\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'تلاش';
      },
      formatNoMatches: function formatNoMatches() {
        return 'کوئی ریکارڈ نہیں ملا';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'تازہ کریں';
      },
      formatToggle: function formatToggle() {
        return 'تبدیل کریں';
      },
      formatColumns: function formatColumns() {
        return 'کالم';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK']);
  })(jQuery);
});