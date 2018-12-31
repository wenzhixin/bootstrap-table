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
    global.bootstrapTableCsCZ = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['cs-CZ'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Čekejte, prosím...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' polo\u017Eek na str\xE1nku';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Zobrazena ' + pageFrom + '. - ' + pageTo + '. polo\u017Eka z celkov\xFDch ' + totalRows;
    },
    formatSearch: function formatSearch() {
      return 'Vyhledávání';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenalezena žádná vyhovující položka';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skrýt/Zobrazit stránkování';
    },
    formatRefresh: function formatRefresh() {
      return 'Aktualizovat';
    },
    formatToggle: function formatToggle() {
      return 'Přepni';
    },
    formatColumns: function formatColumns() {
      return 'Sloupce';
    },
    formatAllRows: function formatAllRows() {
      return 'Vše';
    }
  }; /**
      * Bootstrap Table Czech translation
      * Author: Lukas Kral (monarcha@seznam.cz)
      * Author: Jakub Svestka <svestka1999@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['cs-CZ']);
});