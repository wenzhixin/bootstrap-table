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
    global.bootstrapTableNbNO = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table norwegian translation
   * Author: Jim Nordbø, jim@nordb.no
   */
  (function ($) {
    $.fn.bootstrapTable.locales['nb-NO'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Oppdaterer, vennligst vent';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' poster pr side';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Viser ' + pageFrom + ' til ' + pageTo + ' av ' + totalRows + ' rekker';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Søk';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Ingen poster funnet';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Oppdater';
      },
      formatToggle: function formatToggle() {
        return 'Endre';
      },
      formatColumns: function formatColumns() {
        return 'Kolonner';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nb-NO']);
  })(jQuery);
});