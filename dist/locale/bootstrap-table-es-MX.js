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
    global.bootstrapTableEsMX = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['es-MX'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, espere por favor...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' registros por p\xE1gina';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return 'Mostrando ' + totalRows + ' filas';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron registros que coincidan';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Mostrar/ocultar paginación';
    },
    formatRefresh: function formatRefresh() {
      return 'Actualizar';
    },
    formatToggle: function formatToggle() {
      return 'Cambiar vista';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Pantalla completa';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
    }
  }; /**
      * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
      * Author: Felix Vera (felix.vera@gmail.com)
      * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
      * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['es-MX']);
});