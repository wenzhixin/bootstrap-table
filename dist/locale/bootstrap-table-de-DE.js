(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
  * Bootstrap Table German translation
  * Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
  */

  $.fn.bootstrapTable.locales['de-DE'] = $.fn.bootstrapTable.locales['de'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Zeilen kopieren';
    },
    formatPrint: function formatPrint() {
      return 'Drucken';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Lade, bitte warten';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " Zeilen pro Seite.");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Zeige Zeile ".concat(pageFrom, " bis ").concat(pageTo, " von ").concat(totalRows, " Zeile").concat(totalRows > 1 ? 'n' : '', " (Gefiltert von ").concat(totalNotFiltered, " Zeile").concat(totalNotFiltered > 1 ? 'n' : '', ")");
      }
      return "Zeige Zeile ".concat(pageFrom, " bis ").concat(pageTo, " von ").concat(totalRows, " Zeile").concat(totalRows > 1 ? 'n' : '', ".");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'Vorherige Seite';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "Zu Seite ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'Nächste Seite';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Zeige ".concat(totalRows, " Zeile").concat(totalRows > 1 ? 'n' : '', ".");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Lösche Filter';
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
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Zeige Nummerierung';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Verstecke Nummerierung';
    },
    formatRefresh: function formatRefresh() {
      return 'Neu laden';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Normale Ansicht';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Kartenansicht';
    },
    formatColumns: function formatColumns() {
      return 'Spalten';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Alle umschalten';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Vollbild';
    },
    formatAllRows: function formatAllRows() {
      return 'Alle';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatisches Neuladen';
    },
    formatExport: function formatExport() {
      return 'Datenexport';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Springen';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Erweiterte Suche';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Schließen';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Verstecke/Zeige Filter';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Verstecke Filter';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Zeige Filter';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Ebene hinzufügen';
    },
    formatCancel: function formatCancel() {
      return 'Abbrechen';
    },
    formatColumn: function formatColumn() {
      return 'Spalte';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Ebene entfernen';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return 'Doppelte Einträge gefunden!';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Bitte doppelte Spalten entfenen oder ändern';
    },
    formatMultipleSort: function formatMultipleSort() {
      return 'Mehrfachsortierung';
    },
    formatOrder: function formatOrder() {
      return 'Reihenfolge';
    },
    formatSort: function formatSort() {
      return 'Sortieren';
    },
    formatSortBy: function formatSortBy() {
      return 'Sortieren nach';
    },
    formatThenBy: function formatThenBy() {
      return 'anschließend';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Aufsteigend',
        desc: 'Absteigend'
      };
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE']);

}));
