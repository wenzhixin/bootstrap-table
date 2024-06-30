(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Finnish translations
   * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
   */

  $.fn.bootstrapTable.locales['fi-FI'] = $.fn.bootstrapTable.locales['fi'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copy Rows';
    },
    formatPrint: function formatPrint() {
      return 'Print';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Ladataan, ole hyvä ja odota';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " rivi\xE4 sivulla");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "N\xE4ytet\xE4\xE4n rivit ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
      }
      return "N\xE4ytet\xE4\xE4n rivit ".concat(pageFrom, " - ").concat(pageTo, " / ").concat(totalRows);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'previous page';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "to page ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'next page';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Showing ".concat(totalRows, " rows");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Poista suodattimet';
    },
    formatSearch: function formatSearch() {
      return 'Hae';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Hakuehtoja vastaavia tuloksia ei löytynyt';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Näytä/Piilota sivutus';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Show pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Hide pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Päivitä';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Show card view';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Hide card view';
    },
    formatColumns: function formatColumns() {
      return 'Sarakkeet';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Toggle all';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Kaikki';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Auto Refresh';
    },
    formatExport: function formatExport() {
      return 'Vie tiedot';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GO';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Advanced search';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Close';
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
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI']);

}));
