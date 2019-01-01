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
    global.bootstrapTableCaES = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Catalan translation
   * Authors: Marc Pina<iwalkalone69@gmail.com>
   *          Claudi Martinez<claudix.kernel@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ca-ES'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Espereu, si us plau...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' resultats per p\xE0gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrant de ' + pageFrom + ' fins ' + pageTo + ' - total ' + totalRows + ' resultats';
      },
      formatSearch: function formatSearch() {
        return 'Cerca';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No s\'han trobat resultats';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Amaga/Mostra paginació';
      },
      formatRefresh: function formatRefresh() {
        return 'Refresca';
      },
      formatToggle: function formatToggle() {
        return 'Alterna formatació';
      },
      formatColumns: function formatColumns() {
        return 'Columnes';
      },
      formatAllRows: function formatAllRows() {
        return 'Tots';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES']);
  })(jQuery);
});