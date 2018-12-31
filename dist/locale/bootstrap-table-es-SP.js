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
    global.bootstrapTableEsSP = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['es-SP'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, por favor espera...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' registros por p&#225;gina.';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return pageFrom + ' - ' + pageTo + ' de ' + totalRows + ' registros.';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se han encontrado registros.';
    },
    formatRefresh: function formatRefresh() {
      return 'Actualizar';
    },
    formatToggle: function formatToggle() {
      return 'Alternar';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
    }
  }; /**
      * Bootstrap Table Spanish (España) translation
      * Author: Antonio Pérez <anpegar@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['es-SP']);
});