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
    global.bootstrapTableRoRO = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['ro-RO'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Se incarca, va rugam asteptati...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' inregistrari pe pagina';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Arata de la ' + pageFrom + ' pana la ' + pageTo + ' din ' + totalRows + ' randuri';
    },
    formatSearch: function formatSearch() {
      return 'Cauta';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nu au fost gasite inregistrari';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ascunde/Arata paginatia';
    },
    formatRefresh: function formatRefresh() {
      return 'Reincarca';
    },
    formatToggle: function formatToggle() {
      return 'Comuta';
    },
    formatColumns: function formatColumns() {
      return 'Coloane';
    },
    formatAllRows: function formatAllRows() {
      return 'Toate';
    }
  }; /**
      * Bootstrap Table Romanian translation
      * Author: cristake <cristianiosif@me.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['ro-RO']);
});