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
    global.bootstrapTableMsMY = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Malay translation
   * Author: Azamshul Azizy <azamshul@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ms-MY'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Permintaan sedang dimuatkan. Sila tunggu sebentar';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekod setiap muka surat';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Sedang memaparkan rekod ' + pageFrom + ' hingga ' + pageTo + ' daripada jumlah ' + totalRows + ' rekod';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Cari';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Tiada rekod yang menyamai permintaan';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Tunjuk/sembunyi muka surat';
      },
      formatRefresh: function formatRefresh() {
        return 'Muatsemula';
      },
      formatToggle: function formatToggle() {
        return 'Tukar';
      },
      formatColumns: function formatColumns() {
        return 'Lajur';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Semua';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ms-MY']);
  })(jQuery);
});