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
    global.bootstrapTableTrTR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Turkish translation
   * Author: Emin Şen
   * Author: Sercan Cakir <srcnckr@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['tr-TR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Yükleniyor, lütfen bekleyin...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return 'Sayfa ba\u015F\u0131na ' + pageNumber + ' kay\u0131t.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return totalRows + ' kay\u0131ttan ' + pageFrom + '-' + pageTo + ' aras\u0131 g\xF6steriliyor.';
      },
      formatSearch: function formatSearch() {
        return 'Ara';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Eşleşen kayıt bulunamadı.';
      },
      formatRefresh: function formatRefresh() {
        return 'Yenile';
      },
      formatToggle: function formatToggle() {
        return 'Değiştir';
      },
      formatColumns: function formatColumns() {
        return 'Sütunlar';
      },
      formatAllRows: function formatAllRows() {
        return 'Tüm Satırlar';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR']);
  })(jQuery);
});