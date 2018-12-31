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
    global.bootstrapTableNlNL = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['nl-NL'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Laden, even geduld...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' records per pagina';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Toon ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' record' + (totalRows > 1 ? 's' : '');
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return 'Toon ' + totalRows + ' record' + (totalRows > 1 ? 's' : '');
    },
    formatSearch: function formatSearch() {
      return 'Zoeken';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Geen resultaten gevonden';
    },
    formatRefresh: function formatRefresh() {
      return 'Vernieuwen';
    },
    formatToggle: function formatToggle() {
      return 'Omschakelen';
    },
    formatColumns: function formatColumns() {
      return 'Kolommen';
    },
    formatAllRows: function formatAllRows() {
      return 'Alle';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Verberg/Toon paginatie';
    },
    formatExport: function formatExport() {
      return 'Exporteer data';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Verwijder filters';
    }
  }; /**
      * Bootstrap Table Dutch translation
      * Author: Your Name <info@a2hankes.nl>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['nl-NL']);
});