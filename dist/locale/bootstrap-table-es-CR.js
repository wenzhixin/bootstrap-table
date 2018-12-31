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
    global.bootstrapTableEsCR = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['es-CR'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Cargando, por favor espere...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' registros por p\xE1gina';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' registros de ' + totalRows + ' registros en total';
    },
    formatSearch: function formatSearch() {
      return 'Buscar';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No se encontraron registros';
    },
    formatRefresh: function formatRefresh() {
      return 'Refrescar';
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
      * Bootstrap Table Spanish (Costa Rica) translation
      * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['es-CR']);
});