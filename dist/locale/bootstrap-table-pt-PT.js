(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery);
    global.bootstrapTablePtPT = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['pt-PT'] = {
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
  }; /**
      * Bootstrap Table Portuguese Portugal Translation
      * Author: Burnspirit<burnspirit@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['pt-PT']);
});