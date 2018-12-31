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
    global.bootstrapTableEuEU = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['eu-EU'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Itxaron mesedez...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' emaitza orriko.';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return totalRows + ' erregistroetatik ' + pageFrom + 'etik ' + pageTo + 'erakoak erakusten.';
    },
    formatSearch: function formatSearch() {
      return 'Bilatu';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ez da emaitzarik aurkitu';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ezkutatu/Erakutsi orrikatzea';
    },
    formatRefresh: function formatRefresh() {
      return 'Eguneratu';
    },
    formatToggle: function formatToggle() {
      return 'Ezkutatu/Erakutsi';
    },
    formatColumns: function formatColumns() {
      return 'Zutabeak';
    },
    formatAllRows: function formatAllRows() {
      return 'Guztiak';
    }
  }; /**
      * Bootstrap Table Basque (Basque Country) translation
      * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['eu-EU']);
});