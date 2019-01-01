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
    global.bootstrapTableDeDE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
  * Bootstrap Table German translation
  * Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
  */
  (function ($) {
    $.fn.bootstrapTable.locales['de-DE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Lade, bitte warten...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' Zeilen pro Seite.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Zeige Zeile ' + pageFrom + ' bis ' + pageTo + ' von ' + totalRows + ' Zeile' + (totalRows > 1 ? 'n' : '') + '.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Zeige ' + totalRows + ' Zeile' + (totalRows > 1 ? 'n' : '') + '.';
      },
      formatSearch: function formatSearch() {
        return 'Suchen';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Keine passenden Ergebnisse gefunden';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Verstecke/Zeige Nummerierung';
      },
      formatRefresh: function formatRefresh() {
        return 'Neu laden';
      },
      formatToggle: function formatToggle() {
        return 'Umschalten';
      },
      formatColumns: function formatColumns() {
        return 'Spalten';
      },
      formatAllRows: function formatAllRows() {
        return 'Alle';
      },
      formatExport: function formatExport() {
        return 'Datenexport';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Lösche Filter';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE']);
  })(jQuery);
});