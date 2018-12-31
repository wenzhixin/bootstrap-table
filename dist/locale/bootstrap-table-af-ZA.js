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
    global.bootstrapTableAfZA = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['af-ZA'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Besig om te laai, wag asseblief ...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' rekords per bladsy';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Resultate ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' rye';
    },
    formatSearch: function formatSearch() {
      return 'Soek';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Geen rekords gevind nie';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Wys/verberg bladsy nummering';
    },
    formatRefresh: function formatRefresh() {
      return 'Herlaai';
    },
    formatToggle: function formatToggle() {
      return 'Wissel';
    },
    formatColumns: function formatColumns() {
      return 'Kolomme';
    }
  }; /**
      * Bootstrap Table Afrikaans translation
      * Author: Phillip Kruger <phillip.kruger@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['af-ZA']);
});