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
    global.bootstrapTablePtBR = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['pt-BR'] = {
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
  }; /**
      * Bootstrap Table Brazilian Portuguese Translation
      * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
      * Update: João Mello<jmello@hotmail.com.br>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['pt-BR']);
});