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
        return 'Por favor espere...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' resultados por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Mostrando desde ' + pageFrom + ' hasta ' + pageTo + ' - En total ' + totalRows + ' resultados';
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
      formatAllRows: function formatAllRows() {
        return 'Todos';
      },

      formatExport: function formatExport() {
        return 'Exportar los datos';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Borrar los filtros';
      },
      formatMultipleSort: function formatMultipleSort() {
        return 'Orden avanzado';
      },
      formatAddLevel: function formatAddLevel() {
        return 'Añadir un nivel';
      },
      formatDeleteLevel: function formatDeleteLevel() {
        return 'Eliminar un nivel';
      },
      formatColumn: function formatColumn() {
        return 'Columna';
      },
      formatOrder: function formatOrder() {
        return 'Orden';
      },
      formatSortBy: function formatSortBy() {
        return 'Ordenar por';
      },
      formatThenBy: function formatThenBy() {
        return 'Y por';
      },
      formatSort: function formatSort() {
        return 'Ordenar';
      },
      formatCancel: function formatCancel() {
        return 'Cancelar';
      },
      formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
        return 'Duplicado(s) detectado(s)!';
      },
      formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
        return 'Eliminar o cambiar columnas duplicadas.';
      },
      formatSortOrders: function formatSortOrders() {
        return {
          asc: 'Ascendente',
          desc: 'Descendente'
        };
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