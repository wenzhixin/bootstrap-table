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
    global.bootstrapTableViVN = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Vietnamese translation
   * Author: Duc N. PHAM <pngduc@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['vi-VN'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Đang tải';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' b\u1EA3n ghi m\u1ED7i trang';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Hi\u1EC3n th\u1ECB t\u1EEB trang ' + pageFrom + ' \u0111\u1EBFn ' + pageTo + ' c\u1EE7a ' + totalRows + ' b\u1EA3ng ghi';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Tìm kiếm';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Không có dữ liệu';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN']);
  })(jQuery);
});