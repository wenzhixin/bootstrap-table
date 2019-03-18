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
    global.bootstrapTableSvSE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Swedish translation
   * Author: C Bratt <bratt@inix.se>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['sv-SE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Laddar, vänligen vänta';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rader per sida';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Visa ' + pageFrom + ' till ' + pageTo + ' av ' + totalRows + ' rader';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Sök';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Inga matchande resultat funna.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Uppdatera';
      },
      formatToggle: function formatToggle() {
        return 'Skifta';
      },
      formatColumns: function formatColumns() {
        return 'kolumn';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sv-SE']);
  })(jQuery);
});