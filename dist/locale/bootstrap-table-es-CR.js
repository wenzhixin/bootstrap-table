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
    global.bootstrapTableEsCR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish (Costa Rica) translation
   * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-CR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, por favor espere';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' registros de ' + totalRows + ' registros en total';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron registros';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Refrescar';
      },
      formatToggle: function formatToggle() {
        return 'Alternar';
      },
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todo';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR']);
  })(jQuery);
});