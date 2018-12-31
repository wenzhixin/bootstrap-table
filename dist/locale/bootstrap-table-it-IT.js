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
    global.bootstrapTableItIT = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['it-IT'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Caricamento in corso...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' elementi per pagina';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Elementi mostrati da ' + pageFrom + ' a ' + pageTo + ' (Numero totali di elementi ' + totalRows + ')';
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
  }; /**
      * Bootstrap Table Italian translation
      * Author: Davide Renzi<davide.renzi@gmail.com>
      * Author: Davide Borsatto <davide.borsatto@gmail.com>
      * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['it-IT']);
});