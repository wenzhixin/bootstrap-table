(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Portuguese Portugal Translation
   * Author: Burnspirit<burnspirit@gmail.com>
   * Update: @misteregis <misteregis@gmail.com>
   */

  $.fn.bootstrapTable.locales['pt-PT'] = $.fn.bootstrapTable.locales['pt'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copiar Linhas';
    },
    formatPrint: function formatPrint() {
      return 'Imprimir';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'A carregar, por favor aguarde';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " registos por p\xE1gina");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      var plural = totalRows > 1 ? 's' : '';
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "A mostrar ".concat(pageFrom, " at&eacute; ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural, " (filtrado de um total de ").concat(totalNotFiltered, " linha").concat(plural, ")");
      }
      return "A mostrar ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'página anterior';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "ir para p\xE1gina ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'próxima página';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Mostrando ".concat(totalRows, " linha").concat(totalRows > 1 ? 's' : '');
    },
    formatClearSearch: function formatClearSearch() {
      return 'Limpar Pesquisa';
    },
    formatSearch: function formatSearch() {
      return 'Pesquisa';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenhum registo encontrado';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Esconder/Mostrar paginação';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Mostrar página';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Esconder página';
    },
    formatRefresh: function formatRefresh() {
      return 'Actualizar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Mostrar vista em forma de cartão';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Esconder vista em forma de cartão';
    },
    formatColumns: function formatColumns() {
      return 'Colunas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Activar tudo';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Ecrã completo';
    },
    formatAllRows: function formatAllRows() {
      return 'Tudo';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Actualização autmática';
    },
    formatExport: function formatExport() {
      return 'Exportar dados';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Avançar';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Pesquisa avançada';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Fechar';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Ocultar/Exibir controles';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Esconder controlos';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Exibir controlos';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Adicionar nível';
    },
    formatCancel: function formatCancel() {
      return 'Cancelar';
    },
    formatColumn: function formatColumn() {
      return 'Coluna';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Remover nível';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return 'Foram encontradas entradas duplicadas!';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Por favor, remova ou altere as colunas duplicadas';
    },
    formatMultipleSort: function formatMultipleSort() {
      return 'Ordenação múltipla';
    },
    formatOrder: function formatOrder() {
      return 'Ordem';
    },
    formatSort: function formatSort() {
      return 'Ordenar';
    },
    formatSortBy: function formatSortBy() {
      return 'Ordenar por';
    },
    formatThenBy: function formatThenBy() {
      return 'em seguida';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Ascendente',
        desc: 'Descendente'
      };
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT']);

}));
