(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Turkish translation
   * Author: Emin Şen
   * Author: Sercan Cakir <srcnckr@gmail.com>
   * Update From: Sait KURT <bilgi@ientegre.com> <https://github.com/xDeSwa>
   */

  $.fn.bootstrapTable.locales['tr-TR'] = $.fn.bootstrapTable.locales['tr'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Satırları Kopyala';
    },
    formatPrint: function formatPrint() {
      return 'Yazdır';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Yükleniyor, lütfen bekleyin';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "Sayfa ba\u015F\u0131na ".concat(pageNumber, " kay\u0131t.");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "".concat(totalRows, " kay\u0131ttan ").concat(pageFrom, "-").concat(pageTo, " aras\u0131 g\xF6steriliyor (").concat(totalNotFiltered, " toplam sat\u0131r filtrelendi).");
      }
      return "".concat(totalRows, " kay\u0131ttan ").concat(pageFrom, "-").concat(pageTo, " aras\u0131 g\xF6steriliyor.");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'önceki sayfa';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "sayfa ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'sonraki sayfa';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "".concat(totalRows, " sat\u0131r g\xF6steriliyor");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Aramayı Temizle';
    },
    formatSearch: function formatSearch() {
      return 'Ara';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Eşleşen kayıt bulunamadı.';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Sayfalamayı Gizle/Göster';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Sayfalamayı Göster';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Sayfalamayı Gizle';
    },
    formatRefresh: function formatRefresh() {
      return 'Yenile';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Kart Görünümünü Göster';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Kart Görünümünü Gizle';
    },
    formatColumns: function formatColumns() {
      return 'Sütunlar';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Tümünü Kapat';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Tam Ekran';
    },
    formatAllRows: function formatAllRows() {
      return 'Tüm Satırlar';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Otomatik Yenileme';
    },
    formatExport: function formatExport() {
      return 'Verileri Dışa Aktar';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Git';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Gelişmiş Arama';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Kapat';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Kontrolleri Gizle/Göster';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Kontrolleri Gizle';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Kontrolleri Göster';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR']);

}));
