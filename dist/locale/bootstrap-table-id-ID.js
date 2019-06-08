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
    global.bootstrapTableIdID = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Indonesian translation
   * Author: Andre Gardiner<andre@sirdre.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['id-ID'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Memuat, mohon tunggu';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' baris per halaman';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Menampilkan ' + pageFrom + ' sampai ' + pageTo + ' dari ' + totalRows + ' baris';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Pencarian';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Tidak ditemukan data yang cocok';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Sembunyikan/Tampilkan halaman';
      },
      formatRefresh: function formatRefresh() {
        return 'Muat ulang';
      },
      formatToggle: function formatToggle() {
        return 'Beralih';
      },
      formatColumns: function formatColumns() {
        return 'kolom';
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
        return 'Ekspor data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Bersihkan filter';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID']);
  })(jQuery);
});