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
    global.bootstrapTableDaDK = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['da-DK'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Indlæser, vent venligst...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' poster pr side';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Viser ' + pageFrom + ' til ' + pageTo + ' af ' + totalRows + ' r\xE6kke' + (totalRows > 1 ? 'r' : '');
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return 'Viser ' + totalRows + ' r\xE6kke' + (totalRows > 1 ? 'r' : '');
    },
    formatSearch: function formatSearch() {
      return 'Søg';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ingen poster fundet';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skjul/vis nummerering';
    },
    formatRefresh: function formatRefresh() {
      return 'Opdater';
    },
    formatToggle: function formatToggle() {
      return 'Skift';
    },
    formatColumns: function formatColumns() {
      return 'Kolonner';
    },
    formatAllRows: function formatAllRows() {
      return 'Alle';
    },
    formatExport: function formatExport() {
      return 'Eksporter';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Ryd filtre';
    }
  }; /**
      * Bootstrap Table danish translation
      * Author: Your Name Jan Borup Coyle, github@coyle.dk
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['da-DK']);
});