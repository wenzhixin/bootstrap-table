(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Indonesian translation
   * Author: Andre Gardiner<andre@sirdre.com>
   */

  $.fn.bootstrapTable.locales['id-ID'] = $.fn.bootstrapTable.locales['id'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Salin baris';
    },
    formatPrint: function formatPrint() {
      return 'Mencetak';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Pemuatan sedang berlangsung';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " baris per halaman");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Menampilkan dari ".concat(pageFrom, " hingga ").concat(pageTo, " pada ").concat(totalRows, " baris (difilter dari ").concat(totalNotFiltered, " baris)");
      }
      return "Menampilkan dari ".concat(pageFrom, " hingga ").concat(pageTo, " pada ").concat(totalRows, " baris");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'halaman sebelumnya';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "ke halaman ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'halaman berikutnya';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Tampilan ".concat(totalRows, " baris");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Menghapus pencarian';
    },
    formatSearch: function formatSearch() {
      return 'Pencarian';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Tidak ada hasil';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Sembunyikan/Tampilkan penomoran halaman';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Tampilkan penomoran halaman';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Sembunyikan penomoran halaman';
    },
    formatRefresh: function formatRefresh() {
      return 'Segarkan';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Menampilkan tampilan peta';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Menyembunyikan tampilan peta';
    },
    formatColumns: function formatColumns() {
      return 'Kolom';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Tampilkan semua';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Layar penuh';
    },
    formatAllRows: function formatAllRows() {
      return 'Semua';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Penyegaran otomatis';
    },
    formatExport: function formatExport() {
      return 'Mengekspor data';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Pergi ke';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Pencarian lanjutan';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Tutup';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Menyembunyikan/Menampilkan kontrol';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Menyembunyikan kontrol';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Menampilkan kontrol';
    },
    formatToggleCustomViewOn: function formatToggleCustomViewOn() {
      return 'Menampilkan tampilan khusus';
    },
    formatToggleCustomViewOff: function formatToggleCustomViewOff() {
      return 'Menyembunyikan tampilan khusus';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Menghapus filter';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Menambahkan level';
    },
    formatCancel: function formatCancel() {
      return 'Batal';
    },
    formatColumn: function formatColumn() {
      return 'Kolom';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Menghapus level';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return 'Entri duplikat telah ditemukan!';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Harap hapus atau ubah entri duplikat';
    },
    formatMultipleSort: function formatMultipleSort() {
      return 'Penyortiran ganda';
    },
    formatOrder: function formatOrder() {
      return 'Urutan';
    },
    formatSort: function formatSort() {
      return 'Penyortiran';
    },
    formatSortBy: function formatSortBy() {
      return 'Urutkan berdasarkan';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Menaik',
        desc: 'Menurun'
      };
    },
    formatThenBy: function formatThenBy() {
      return 'Kemudian oleh';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID']);

}));
