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
    global.bootstrapTableEtEE = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['et-EE'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Päring käib, palun oota...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' rida lehe kohta';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'N\xE4itan tulemusi ' + pageFrom + ' kuni ' + pageTo + ' - kokku ' + totalRows + ' tulemust';
    },
    formatSearch: function formatSearch() {
      return 'Otsi';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Päringu tingimustele ei vastanud ühtegi tulemust';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Näita/Peida lehtedeks jagamine';
    },
    formatRefresh: function formatRefresh() {
      return 'Värskenda';
    },
    formatToggle: function formatToggle() {
      return 'Lülita';
    },
    formatColumns: function formatColumns() {
      return 'Veerud';
    },
    formatAllRows: function formatAllRows() {
      return 'Kõik';
    }
  }; /**
      * Bootstrap Table Estonian translation
      * Author: kristjan@logist.it>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['et-EE']);
});