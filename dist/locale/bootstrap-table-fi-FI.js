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
    global.bootstrapTableFiFI = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Finnish translations
   * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['fi-FI'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Ladataan, ole hyvä ja odota';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rivi\xE4 sivulla';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'N\xE4ytet\xE4\xE4n rivit ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Hae';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Hakuehtoja vastaavia tuloksia ei löytynyt';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Näytä/Piilota sivutus';
      },
      formatRefresh: function formatRefresh() {
        return 'Päivitä';
      },
      formatToggle: function formatToggle() {
        return 'Valitse';
      },
      formatColumns: function formatColumns() {
        return 'Sarakkeet';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Kaikki';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Vie tiedot';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Poista suodattimet';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI']);
  })(jQuery);
});