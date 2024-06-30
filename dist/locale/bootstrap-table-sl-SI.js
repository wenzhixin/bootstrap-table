(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Slovenian translation
   * Author: Ales Hotko <ales.hotko@gmail.com>
   */

  $.fn.bootstrapTable.locales['sl-SI'] = $.fn.bootstrapTable.locales['sl'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Kopiraj vrstice';
    },
    formatPrint: function formatPrint() {
      return 'Natisni';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Prosim počakajte...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " vrstic na stran");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Prikaz ".concat(pageFrom, " do ").concat(pageTo, " od ").concat(totalRows, " vrstic (filtrirano od skupno ").concat(totalNotFiltered, " vrstic)");
      }
      return "Prikaz ".concat(pageFrom, " do ").concat(pageTo, " od ").concat(totalRows, " vrstic");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'prejšnja stran';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "na stran ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'na slednja stran';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Prikaz ".concat(totalRows, " vrstic");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Počisti';
    },
    formatSearch: function formatSearch() {
      return 'Iskanje';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ni najdenih rezultatov';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skrij/Pokaži oštevilčevanje strani';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Pokaži oštevilčevanje strani';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Skrij oštevilčevanje strani';
    },
    formatRefresh: function formatRefresh() {
      return 'Osveži';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Prikaži kartični pogled';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Skrij kartični pogled';
    },
    formatColumns: function formatColumns() {
      return 'Stolpci';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Preklopi vse';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Celozaslonski prikaz';
    },
    formatAllRows: function formatAllRows() {
      return 'Vse';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Samodejna osvežitev';
    },
    formatExport: function formatExport() {
      return 'Izvoz podatkov';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GO';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Napredno iskanje';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Zapri';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Skrij/Pokaži kontrole';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Skrij kontrole';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Pokaži kontrole';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sl-SI']);

}));
