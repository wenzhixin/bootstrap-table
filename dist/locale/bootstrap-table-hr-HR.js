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
    global.bootstrapTableHrHR = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['hr-HR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Molimo pričekajte ...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' broj zapisa po stranici';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Prikazujem ' + pageFrom + '. - ' + pageTo + '. od ukupnog broja zapisa ' + totalRows;
    },
    formatSearch: function formatSearch() {
      return 'Pretraži';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nije pronađen niti jedan zapis';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Prikaži/sakrij stranice';
    },
    formatRefresh: function formatRefresh() {
      return 'Osvježi';
    },
    formatToggle: function formatToggle() {
      return 'Promijeni prikaz';
    },
    formatColumns: function formatColumns() {
      return 'Kolone';
    },
    formatAllRows: function formatAllRows() {
      return 'Sve';
    }
  }; /**
     * Bootstrap Table Croatian translation
     * Author: Petra Štrbenac (petra.strbenac@gmail.com)
     * Author: Petra Štrbenac (petra.strbenac@gmail.com)
     */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['hr-HR']);
});