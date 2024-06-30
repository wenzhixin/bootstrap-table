(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Italian translation
   * Author: Davide Renzi<davide.renzi@gmail.com>
   * Author: Davide Borsatto <davide.borsatto@gmail.com>
   * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
   */

  $.fn.bootstrapTable.locales['it-IT'] = $.fn.bootstrapTable.locales['it'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copy Rows';
    },
    formatPrint: function formatPrint() {
      return 'Print';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Caricamento in corso';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " elementi per pagina");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Visualizzazione da ".concat(pageFrom, " a ").concat(pageTo, " di ").concat(totalRows, " elementi (filtrati da ").concat(totalNotFiltered, " elementi totali)");
      }
      return "Visualizzazione da ".concat(pageFrom, " a ").concat(pageTo, " di ").concat(totalRows, " elementi");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'pagina precedente';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "alla pagina ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'pagina successiva';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Mostrando ".concat(totalRows, " elementi");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Pulisci filtri';
    },
    formatSearch: function formatSearch() {
      return 'Cerca';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nessun elemento trovato';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Nascondi/Mostra paginazione';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Mostra paginazione';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Nascondi paginazione';
    },
    formatRefresh: function formatRefresh() {
      return 'Aggiorna';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Mostra visuale a scheda';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Nascondi visuale a scheda';
    },
    formatColumns: function formatColumns() {
      return 'Colonne';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Mostra tutte';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Schermo intero';
    },
    formatAllRows: function formatAllRows() {
      return 'Tutto';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Aggiornamento';
    },
    formatExport: function formatExport() {
      return 'Esporta dati';
    },
    formatJumpTo: function formatJumpTo() {
      return 'VAI';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Filtri avanzati';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Chiudi';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Hide/Show controls';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Hide controls';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Show controls';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT']);

}));
