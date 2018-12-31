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
    global.bootstrapTableEsCL = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['es-CL'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, espere por favor...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' filas por p\xE1gina';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron registros';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ocultar/Mostrar paginaci\xF3n';
    },
    formatRefresh: function formatRefresh() {
      return 'Refrescar';
    },
    formatToggle: function formatToggle() {
      return 'Cambiar';
    },
    formatColumns: function formatColumns() {
      return 'Columnas';
    },
    formatAllRows: function formatAllRows() {
      return 'Todo';
    }
  }; /**
      * Traducción de librería Bootstrap Table a Español (Chile)
      * @author Brian Álvarez Azócar
      * email brianalvarezazocar@gmail.com
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['es-CL']);
});