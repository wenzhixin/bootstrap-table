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
    global.bootstrapTableHuHU = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Hungarian translation
   * Author: Nagy Gergely <info@nagygergely.eu>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['hu-HU'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Betöltés, kérem várjon';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekord per oldal';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Megjelen\xEDtve ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows + ' \xF6sszesen';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
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
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Összes';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hu-HU']);
  })(jQuery);
});