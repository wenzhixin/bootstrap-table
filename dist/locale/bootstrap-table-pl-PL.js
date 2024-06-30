(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Polish translation
   * Author: zergu <michal.zagdan @ gmail com>
   * Update: kerogos <kerog @ wp pl>
   */

  $.fn.bootstrapTable.locales['pl-PL'] = $.fn.bootstrapTable.locales['pl'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Kopiuj wiersze';
    },
    formatPrint: function formatPrint() {
      return 'Print';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Ładowanie, proszę czekać';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " rekord\xF3w na stron\u0119");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Wy\u015Bwietlanie rekord\xF3w od ".concat(pageFrom, " do ").concat(pageTo, " z ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
      }
      return "Wy\u015Bwietlanie rekord\xF3w od ".concat(pageFrom, " do ").concat(pageTo, " z ").concat(totalRows);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'poprzednia strona';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "z ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'następna strona';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Wy\u015Bwietla ".concat(totalRows, " wierszy");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Wyczyść wyszukiwanie';
    },
    formatSearch: function formatSearch() {
      return 'Szukaj';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Niestety, nic nie znaleziono';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Pokaż/ukryj stronicowanie';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Pokaż stronicowanie';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Ukryj stronicowanie';
    },
    formatRefresh: function formatRefresh() {
      return 'Odśwież';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Pokaż układ karty';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Ukryj układ karty';
    },
    formatColumns: function formatColumns() {
      return 'Kolumny';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Zaznacz wszystko';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Wszystkie';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto odświeżanie';
    },
    formatExport: function formatExport() {
      return 'Eksport danych';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Przejdź';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Wyszukiwanie zaawansowane';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Zamknij';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Pokaż/Ukryj';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Pokaż';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Ukryj';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL']);

}));
