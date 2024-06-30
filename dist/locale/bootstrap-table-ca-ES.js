(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Catalan translation
   * Authors: Marc Pina<iwalkalone69@gmail.com>
   *          Claudi Martinez<claudix.kernel@gmail.com>
   *          Joan Puigcerver<joapuiib@gmail.com>
   */

  $.fn.bootstrapTable.locales['ca-ES'] = $.fn.bootstrapTable.locales['ca'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copia resultats';
    },
    formatPrint: function formatPrint() {
      return 'Imprimeix';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Espereu, si us plau';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " resultats per p\xE0gina");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Mostrant resultats ".concat(pageFrom, " fins ").concat(pageTo, " - ").concat(totalRows, " resultats (filtrats d'un total de ").concat(totalNotFiltered, " resultats)");
      }
      return "Mostrant resultats ".concat(pageFrom, " fins ").concat(pageTo, " - ").concat(totalRows, " resultats en total");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'Pàgina anterior';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "A la p\xE0gina ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'Pàgina següent';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Mostrant ".concat(totalRows, " resultats");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Neteja cerca';
    },
    formatSearch: function formatSearch() {
      return 'Cerca';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No s\'han trobat resultats';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Amaga/Mostra paginació';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Mostra paginació';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Amaga paginació';
    },
    formatRefresh: function formatRefresh() {
      return 'Refresca';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Mostra vista de tarjeta';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Amaga vista de tarjeta';
    },
    formatColumns: function formatColumns() {
      return 'Columnes';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Alterna totes';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Pantalla completa';
    },
    formatAllRows: function formatAllRows() {
      return 'Tots';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresca';
    },
    formatExport: function formatExport() {
      return 'Exporta dades';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GO';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Cerca avançada';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Tanca';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Mostra/Amaga controls';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Mostra controls';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Amaga controls';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES']);

}));
