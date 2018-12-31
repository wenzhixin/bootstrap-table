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
    global.bootstrapTableIdID = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['id-ID'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Memuat, mohon tunggu...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' baris per halaman';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Menampilkan ' + pageFrom + ' sampai ' + pageTo + ' dari ' + totalRows + ' baris';
    },
    formatSearch: function formatSearch() {
      return 'Pencarian';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Tidak ditemukan data yang cocok';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Sembunyikan/Tampilkan halaman';
    },
    formatRefresh: function formatRefresh() {
      return 'Muat ulang';
    },
    formatToggle: function formatToggle() {
      return 'Beralih';
    },
    formatColumns: function formatColumns() {
      return 'kolom';
    },
    formatAllRows: function formatAllRows() {
      return 'Semua';
    },
    formatExport: function formatExport() {
      return 'Ekspor data';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Bersihkan filter';
    }
  }; /**
      * Bootstrap Table Indonesian translation
      * Author: Andre Gardiner<andre@sirdre.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['id-ID']);
});