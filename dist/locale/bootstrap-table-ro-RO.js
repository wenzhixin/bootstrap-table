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
    global.bootstrapTableRoRO = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Romanian translation
   * Author: cristake <cristianiosif@me.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ro-RO'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Se incarca, va rugam asteptati';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' inregistrari pe pagina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Arata de la ' + pageFrom + ' pana la ' + pageTo + ' din ' + totalRows + ' randuri';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Cauta';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nu au fost gasite inregistrari';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ascunde/Arata paginatia';
      },
      formatRefresh: function formatRefresh() {
        return 'Reincarca';
      },
      formatToggle: function formatToggle() {
        return 'Comuta';
      },
      formatColumns: function formatColumns() {
        return 'Coloane';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Toate';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ro-RO']);
  })(jQuery);
});