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
    global.bootstrapTableKaGE = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['ka-GE'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'იტვირთება, გთხოვთ მოიცადოთ...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10D7\u10D8\u10D7\u10DD \u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return '\u10DC\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D8\u10D0 ' + pageFrom + '-\u10D3\u10D0\u10DC ' + pageTo + '-\u10DB\u10D3\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10EF\u10D0\u10DB\u10E3\u10E0\u10D8 ' + totalRows + '-\u10D3\u10D0\u10DC';
    },
    formatSearch: function formatSearch() {
      return 'ძებნა';
    },
    formatNoMatches: function formatNoMatches() {
      return 'მონაცემები არ არის';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'გვერდების გადამრთველის დამალვა/გამოჩენა';
    },
    formatRefresh: function formatRefresh() {
      return 'განახლება';
    },
    formatToggle: function formatToggle() {
      return 'ჩართვა/გამორთვა';
    },
    formatColumns: function formatColumns() {
      return 'სვეტები';
    }
  }; /**
      * Bootstrap Table Georgian translation
      * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['ka-GE']);
});