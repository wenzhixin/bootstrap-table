(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery);
    global.bootstrapTableDeDE = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['de-DE'] = {
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
  }; /**
     * Bootstrap Table German translation
     * Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
     */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['de-DE']);
});