(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Spanish (Costa Rica) translation
   * Author: Dennis Hernández
   * Review: Jei (@jeijei4) (20/Oct/2022)
   */

  $.fn.bootstrapTable.locales['es-CR'] = {
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
      return "".concat(pageNumber, " filas por p\xE1gina");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas (filtrado de un total de ").concat(totalNotFiltered, " filas)");
      }
      return "Mostrando ".concat(pageFrom, " a ").concat(pageTo, " de ").concat(totalRows, " filas");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'página anterior';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "ir a la p\xE1gina ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'página siguiente';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Mostrando ".concat(totalRows, " filas");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Limpiar búsqueda';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron resultados';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Mostrar/ocultar paginación';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Mostrar paginación';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Ocultar paginación';
    },
    formatRefresh: function formatRefresh() {
      return 'Actualizar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Mostrar vista en tarjetas';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Ocultar vista en tarjetas';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Alternar todo';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Pantalla completa';
    },
    formatAllRows: function formatAllRows() {
      return 'Todas las filas';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Actualización automática';
    },
    formatExport: function formatExport() {
      return 'Exportar';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Ver';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Búsqueda avanzada';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Cerrar';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Mostrar/ocultar controles';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Ocultar controles';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Mostrar controles';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR']);

}));
