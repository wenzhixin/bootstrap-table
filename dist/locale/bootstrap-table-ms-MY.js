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
    global.bootstrapTableMsMY = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['ms-MY'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Permintaan sedang dimuatkan. Sila tunggu sebentar...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' rekod setiap muka surat';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Sedang memaparkan rekod ' + pageFrom + ' hingga ' + pageTo + ' daripada jumlah ' + totalRows + ' rekod';
    },
    formatSearch: function formatSearch() {
      return 'Cari';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Tiada rekod yang menyamai permintaan';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Tunjuk/sembunyi muka surat';
    },
    formatRefresh: function formatRefresh() {
      return 'Muatsemula';
    },
    formatToggle: function formatToggle() {
      return 'Tukar';
    },
    formatColumns: function formatColumns() {
      return 'Lajur';
    },
    formatAllRows: function formatAllRows() {
      return 'Semua';
    }
  }; /**
      * Bootstrap Table Malay translation
      * Author: Azamshul Azizy <azamshul@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['ms-MY']);
});