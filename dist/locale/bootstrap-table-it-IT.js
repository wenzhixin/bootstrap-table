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
    global.bootstrapTableItIT = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Italian translation
   * Author: Davide Renzi<davide.renzi@gmail.com>
   * Author: Davide Borsatto <davide.borsatto@gmail.com>
   * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['it-IT'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Caricamento in corso...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' elementi per pagina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Visualizzazione da ' + pageFrom + ' a ' + pageTo + ' di ' + totalRows + ' elementi';
      },
      formatSearch: function formatSearch() {
        return 'Cerca';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nessun elemento trovato';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Nascondi/Mostra paginazione';
      },
      formatRefresh: function formatRefresh() {
        return 'Aggiorna';
      },
      formatToggle: function formatToggle() {
        return 'Attiva/Disattiva';
      },
      formatColumns: function formatColumns() {
        return 'Colonne';
      },
      formatAllRows: function formatAllRows() {
        return 'Tutto';
      },
      formatExport: function formatExport() {
        return 'Esporta dati';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Pulisci filtri';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT']);
  })(jQuery);
});