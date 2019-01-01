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
        return 'Permintaan sedang dimuatkan. Sila tunggu sebentar...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekod setiap muka surat';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Sedang memaparkan rekod ' + pageFrom + ' hingga ' + pageTo + ' daripada jumlah ' + totalRows + ' rekod';
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
      formatAllRows: function formatAllRows() {
        return 'Semua';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ms-MY']);
  })(jQuery);
});