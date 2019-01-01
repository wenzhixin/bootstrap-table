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
    global.bootstrapTablePtPT = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Portuguese Portugal Translation
   * Author: Burnspirit<burnspirit@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['pt-PT'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'A carregar, por favor aguarde...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' registos por p&aacute;gina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'A mostrar ' + pageFrom + ' at&eacute; ' + pageTo + ' de ' + totalRows + ' linhas';
      },
      formatSearch: function formatSearch() {
        return 'Pesquisa';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nenhum registo encontrado';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Esconder/Mostrar pagina&ccedil&atilde;o';
      },
      formatRefresh: function formatRefresh() {
        return 'Atualizar';
      },
      formatToggle: function formatToggle() {
        return 'Alternar';
      },
      formatColumns: function formatColumns() {
        return 'Colunas';
      },
      formatAllRows: function formatAllRows() {
        return 'Tudo';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT']);
  })(jQuery);
});