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
    global.bootstrapTableEsNI = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Spanish (Nicaragua) translation
   * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['es-NI'] = {
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
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-NI']);
  })(jQuery);
});