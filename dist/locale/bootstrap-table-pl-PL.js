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
    global.bootstrapTablePlPL = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['pl-PL'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Ładowanie, proszę czekać...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' rekord\xF3w na stron\u0119';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Wy\u015Bwietlanie rekord\xF3w od ' + pageFrom + ' do ' + pageTo + ' z ' + totalRows;
    },
    formatSearch: function formatSearch() {
      return 'Szukaj';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Niestety, nic nie znaleziono';
    },
    formatRefresh: function formatRefresh() {
      return 'Odśwież';
    },
    formatToggle: function formatToggle() {
      return 'Przełącz';
    },
    formatColumns: function formatColumns() {
      return 'Kolumny';
    }
  }; /**
      * Bootstrap Table Polish translation
      * Author: zergu <michal.zagdan @ gmail com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['pl-PL']);
});