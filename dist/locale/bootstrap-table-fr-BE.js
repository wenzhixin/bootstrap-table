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
    global.bootstrapTableFrBE = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['fr-BE'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Chargement en cours...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' entr\xE9es par page';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Affiche de' + pageFrom + ' \xE0 ' + pageTo + ' sur ' + totalRows + ' lignes';
    },
    formatSearch: function formatSearch() {
      return 'Recherche';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Pas de fichiers trouvés';
    }
  }; /**
      * Bootstrap Table French (Belgium) translation
      * Author: Julien Bisconti (julien.bisconti@gmail.com)
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['fr-BE']);
});