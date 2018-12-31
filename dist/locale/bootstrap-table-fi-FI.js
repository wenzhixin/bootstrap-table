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
    global.bootstrapTableFiFI = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['fi-FI'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Ladataan, ole hyvä ja odota...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' rivi\xE4 sivulla';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'N\xE4ytet\xE4\xE4n rivit ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows;
    },
    formatSearch: function formatSearch() {
      return 'Hae';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Hakuehtoja vastaavia tuloksia ei löytynyt';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Näytä/Piilota sivutus';
    },
    formatRefresh: function formatRefresh() {
      return 'Päivitä';
    },
    formatToggle: function formatToggle() {
      return 'Valitse';
    },
    formatColumns: function formatColumns() {
      return 'Sarakkeet';
    },
    formatAllRows: function formatAllRows() {
      return 'Kaikki';
    },
    formatExport: function formatExport() {
      return 'Vie tiedot';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Poista suodattimet';
    }
  }; /**
      * Bootstrap Table Finnish translations
      * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['fi-FI']);
});