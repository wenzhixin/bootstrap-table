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
    global.bootstrapTableEsES = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish Spain translation
   * Author: Marc Pina<iwalkalone69@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-ES'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Por favor espere';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' resultados por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando desde ' + pageFrom + ' hasta ' + pageTo + ' - En total ' + totalRows + ' resultados';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Buscar';
      },
      formatNoMatches: function formatNoMatches() {
        return 'No se encontraron resultados';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ocultar/Mostrar paginación';
      },
      formatRefresh: function formatRefresh() {
        return 'Refrescar';
      },
      formatToggle: function formatToggle() {
        return 'Ocultar/Mostrar';
      },
      formatColumns: function formatColumns() {
        return 'Columnas';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Todos';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },

      formatExport: function formatExport() {
        return 'Exportar los datos';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Borrar los filtros';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },

      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Búsqueda avanzada';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Cerrar';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES']);
  })(jQuery);
});