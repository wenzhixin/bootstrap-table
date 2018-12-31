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
    global.bootstrapTableCaES = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['ca-ES'] = {
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
  }; /**
      * Bootstrap Table Catalan translation
      * Authors: Marc Pina<iwalkalone69@gmail.com>
      *          Claudi Martinez<claudix.kernel@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['ca-ES']);
});