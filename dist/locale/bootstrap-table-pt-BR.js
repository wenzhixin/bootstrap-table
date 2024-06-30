(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Brazilian Portuguese Translation
   * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
   * Update: João Mello<jmello@hotmail.com.br>
   * Update: Leandro Felizari<lfelizari@gmail.com>
   * Update: Fernando Marcos Souza Silva<fernandomarcosss@gmail.com>
   * Update: @misteregis <misteregis@gmail.com>
   */

  $.fn.bootstrapTable.locales['pt-BR'] = $.fn.bootstrapTable.locales['br'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copiar linhas';
    },
    formatPrint: function formatPrint() {
      return 'Imprimir';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Carregando, aguarde';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " registros por p\xE1gina");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      var plural = totalRows > 1 ? 's' : '';
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Exibindo ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural, " (filtrado de um total de ").concat(totalNotFiltered, " linha").concat(plural, ")");
      }
      return "Exibindo ".concat(pageFrom, " at\xE9 ").concat(pageTo, " de ").concat(totalRows, " linha").concat(plural);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'página anterior';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "ir para a p\xE1gina ".concat(page);
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
      return 'Pesquisar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenhum registro encontrado';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ocultar/Exibir paginação';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Mostrar Paginação';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Esconder Paginação';
    },
    formatRefresh: function formatRefresh() {
      return 'Recarregar';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Mostrar visualização de cartão';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Colunas';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Alternar tudo';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Tela cheia';
    },
    formatAllRows: function formatAllRows() {
      return 'Tudo';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Atualização Automática';
    },
    formatExport: function formatExport() {
      return 'Exportar dados';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Ir';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Pesquisa Avançada';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Fechar';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Ocultar/Exibir controles';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Ocultar controles';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Exibir controles';
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
      return 'Encontradas entradas duplicadas!';
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
        asc: 'Crescente',
        desc: 'Decrescente'
      };
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);

}));
