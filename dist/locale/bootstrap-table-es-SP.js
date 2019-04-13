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
    global.bootstrapTableEsSP = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish (España) translation
   * Author: Antonio Pérez <anpegar@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-SP'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Cargando, por favor espera';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p&#225;gina.';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return pageFrom + ' - ' + pageTo + ' de ' + totalRows + ' registros.';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se han encontrado registros.';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Hide/Show pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Actualizar';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-SP']);
  })(jQuery);
});