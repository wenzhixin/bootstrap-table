/**
* Bootstrap Table German translation
* Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
*/
(function ($) {
  'use strict';

  $.fn.bootstrapTable.locales['de-DE'] = {
    formatLoadingMessage: function () {
      return 'Lade, bitte warten...';
    },
    formatRecordsPerPage: function (pageNumber) {
      return pageNumber + ' Zeilen pro Seite.';
    },
    formatShowingRows: function (pageFrom, pageTo, totalRows) {
      return 'Zeige Zeile ' + pageFrom + ' bis ' + pageTo + ' von ' + totalRows + ' Zeilen' + ((totalRows > 1) ? "n" : "")+".";
    },
    formatDetailPagination: function (totalRows) {
      return 'Zeige ' + totalRows + ' Zeile' + ((totalRows > 1) ? "n" : "")+".";
    },
    formatSearch: function () {
      return 'Suchen';
    },
    formatNoMatches: function () {
      return 'Keine passenden Ergebnisse gefunden';
    },
    formatPaginationSwitch: function () {
      return 'Verstecke/Zeige Nummerierung';
    },
    formatRefresh: function () {
      return 'Neu laden';
    },
    formatToggle: function () {
      return 'Umschalten';
    },
    formatColumns: function () {
      return 'Spalten';
    },
    formatAllRows: function () {
      return 'Alle';
    },
    formatExport: function () {
      return 'Datenexport';
    },
    formatClearFilters: function () {
      return 'Lösche Filter';
     }
  };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE']);

})(jQuery);
