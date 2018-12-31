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
    global.bootstrapTableHuHU = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['hu-HU'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Betöltés, kérem várjon...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' rekord per oldal';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Megjelen\xEDtve ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows + ' \xF6sszesen';
    },
    formatSearch: function formatSearch() {
      return 'Keresés';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nincs találat';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Lapozó elrejtése/megjelenítése';
    },
    formatRefresh: function formatRefresh() {
      return 'Frissítés';
    },
    formatToggle: function formatToggle() {
      return 'Összecsuk/Kinyit';
    },
    formatColumns: function formatColumns() {
      return 'Oszlopok';
    },
    formatAllRows: function formatAllRows() {
      return 'Összes';
    }
  }; /**
      * Bootstrap Table Hungarian translation
      * Author: Nagy Gergely <info@nagygergely.eu>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['hu-HU']);
});