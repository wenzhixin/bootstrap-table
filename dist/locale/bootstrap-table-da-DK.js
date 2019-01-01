(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableDaDK = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table danish translation
   * Author: Your Name Jan Borup Coyle, github@coyle.dk
   */
  (function ($) {
    $.fn.bootstrapTable.locales['da-DK'] = {
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
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK']);
  })(jQuery);
});