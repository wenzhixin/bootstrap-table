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
    global.bootstrapTablePtBR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Brazilian Portuguese Translation
   * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
   * Update: João Mello<jmello@hotmail.com.br>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['pt-BR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Carregando, aguarde...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registros por p\xE1gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Exibindo ' + pageFrom + ' at\xE9 ' + pageTo + ' de ' + totalRows + ' linhas';
      },
      formatSearch: function formatSearch() {
        return 'Pesquisar';
      },
      formatRefresh: function formatRefresh() {
        return 'Recarregar';
      },
      formatToggle: function formatToggle() {
        return 'Alternar';
      },
      formatColumns: function formatColumns() {
        return 'Colunas';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Ocultar/Exibir paginação';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nenhum registro encontrado';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);
  })(jQuery);
});