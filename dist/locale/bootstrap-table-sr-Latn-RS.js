(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Serbian Latin RS translation
   * Author: Vladimir Kanazir (vladimir@kanazir.com)
   */

  $.fn.bootstrapTable.locales['sr-Latn-RS'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copy Rows';
    },
    formatPrint: function formatPrint() {
      return 'Print';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Molim sačekaj';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " redova po strani");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Prikazano ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja redova ").concat(totalRows, " (filtrirano od ").concat(totalNotFiltered, ")");
      }
      return "Prikazano ".concat(pageFrom, ". - ").concat(pageTo, ". od ukupnog broja redova ").concat(totalRows);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'prethodna strana';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "na stranu ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'sledeća strana';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Prikazano ".concat(totalRows, " redova");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Obriši pretragu';
    },
    formatSearch: function formatSearch() {
      return 'Pronađi';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nije pronađen ni jedan podatak';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Prikaži/sakrij paginaciju';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Prikaži paginaciju';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Sakrij paginaciju';
    },
    formatRefresh: function formatRefresh() {
      return 'Osveži';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Prikaži kartice';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Sakrij kartice';
    },
    formatColumns: function formatColumns() {
      return 'Kolone';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Prikaži/sakrij sve';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Ceo ekran';
    },
    formatAllRows: function formatAllRows() {
      return 'Sve';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatsko osvežavanje';
    },
    formatExport: function formatExport() {
      return 'Izvezi podatke';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Idi';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Napredna pretraga';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Zatvori';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Hide/Show controls';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Hide controls';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Show controls';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Latn-RS']);

}));
