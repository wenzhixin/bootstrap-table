(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Spanish Spain translation
   * Author: Marc Pina<iwalkalone69@gmail.com>
   * Update: @misteregis <misteregis@gmail.com>
   */

  $.fn.bootstrapTable.locales['es-ES'] = $.fn.bootstrapTable.locales['es'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copiar filas';
    },
    formatPrint: function formatPrint() {
      return 'Imprimir';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, por favor espere';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " resultados por p\xE1gina");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      var plural = totalRows > 1 ? 's' : '';
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrando desde ".concat(pageFrom, " hasta ").concat(pageTo, " - En total ").concat(totalRows, " resultado").concat(plural, " (filtrado de un total de ").concat(totalNotFiltered, " fila").concat(plural, ")");
      }
      return "Mostrando desde ".concat(pageFrom, " hasta ").concat(pageTo, " - En total ").concat(totalRows, " resultado").concat(plural);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'página anterior';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "a la p\xE1gina ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'siguiente página';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Mostrando ".concat(totalRows, " fila").concat(totalRows > 1 ? 's' : '');
    },
    formatClearSearch: function formatClearSearch() {
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron resultados coincidentes';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ocultar/Mostrar paginación';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Mostrar paginación';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Ocultar paginación';
    },
    formatRefresh: function formatRefresh() {
      return 'Recargar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Mostrar vista de carta';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Ocultar vista de carta';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Cambiar todo';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Pantalla completa';
    },
    formatAllRows: function formatAllRows() {
      return 'Todos';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Recargar';
    },
    formatExport: function formatExport() {
      return 'Exportar los datos';
    },
    formatJumpTo: function formatJumpTo() {
      return 'IR';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Búsqueda avanzada';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Cerrar';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Ocultar/Exibir controles';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Ocultar controles';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Mostrar controles';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Agregar nivel';
    },
    formatCancel: function formatCancel() {
      return 'Cancelar';
    },
    formatColumn: function formatColumn() {
      return 'Columna';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Eliminar nivel';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return '¡Se encontraron entradas duplicadas!';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Por favor, elimine o modifique las columnas duplicadas';
    },
    formatMultipleSort: function formatMultipleSort() {
      return 'Ordenación múltiple';
    },
    formatOrder: function formatOrder() {
      return 'Orden';
    },
    formatSort: function formatSort() {
      return 'Ordenar';
    },
    formatSortBy: function formatSortBy() {
      return 'Ordenar por';
    },
    formatThenBy: function formatThenBy() {
      return 'a continuación';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Ascendente',
        desc: 'Descendente'
      };
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES']);

}));
