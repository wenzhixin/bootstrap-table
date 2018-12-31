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
    global.bootstrapTableSkSK = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['sk-SK'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Prosím čakajte ...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' z\xE1znamov na stranu';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Zobrazen\xE1 ' + pageFrom + '. - ' + pageTo + '. polo\u017Eka z celkov\xFDch ' + totalRows;
    },
    formatSearch: function formatSearch() {
      return 'Vyhľadávanie';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenájdená žiadna vyhovujúca položka';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skry/Zobraz stránkovanie';
    },
    formatRefresh: function formatRefresh() {
      return 'Obnoviť';
    },
    formatToggle: function formatToggle() {
      return 'Prepni';
    },
    formatColumns: function formatColumns() {
      return 'Stĺpce';
    },
    formatAllRows: function formatAllRows() {
      return 'Všetky';
    },
    formatExport: function formatExport() {
      return 'Exportuj dáta';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Odstráň filtre';
    }
  }; /**
      * Bootstrap Table Slovak translation
      * Author: Jozef Dúc<jozef.d13@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['sk-SK']);
});