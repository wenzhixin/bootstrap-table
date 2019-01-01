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
    global.bootstrapTableEnUS = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table English translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['en-US'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Loading, please wait...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rows per page';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Showing ' + pageFrom + ' to ' + pageTo + ' of ' + totalRows + ' rows';
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
      formatColumns: function formatColumns() {
        return 'Columns';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en-US']);
  })(jQuery);
});