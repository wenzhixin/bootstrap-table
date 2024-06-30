(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Luxembourgish translation
   * Author: David Morais Ferreira (https://github.com/DavidMoraisFerreira)
   */

  $.fn.bootstrapTable.locales['lb-LU'] = $.fn.bootstrapTable.locales['lb'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Zeilen kopéieren';
    },
    formatPrint: function formatPrint() {
      return 'Drécken';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Gëtt gelueden, gedellëgt Iech wannechgelift ee Moment';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " Zeilen per S\xE4it");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Weist Zeil ".concat(pageFrom, " bis ").concat(pageTo, " vun ").concat(totalRows, " Zeil").concat(totalRows > 1 ? 'en' : '', " (gefiltert vun insgesamt ").concat(totalNotFiltered, " Zeil").concat(totalRows > 1 ? 'en' : '', ")");
      }
      return "Weist Zeil ".concat(pageFrom, " bis ").concat(pageTo, " vun ").concat(totalRows, " Zeil").concat(totalRows > 1 ? 'en' : '');
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'viregt Säit';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "op S\xE4it ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'nächst Säit';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Weist ".concat(totalRows, " Zeilen");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Sich réckgängeg maachen';
    },
    formatSearch: function formatSearch() {
      return 'Sich';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Keng passend Anträg fonnt';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Paginatioun uweisen/verstoppen';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Paginatioun uweisen';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Paginatioun verstoppen';
    },
    formatRefresh: function formatRefresh() {
      return 'Nei lueden';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Kaartenusiicht uweisen';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Kaartenusiicht verstoppen';
    },
    formatColumns: function formatColumns() {
      return 'Kolonnen';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'All ëmschalten';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Vollbild';
    },
    formatAllRows: function formatAllRows() {
      return 'All';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatescht neilueden';
    },
    formatExport: function formatExport() {
      return 'Daten exportéieren';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Sprangen';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Erweidert Sich';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Zoumaachen';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Schaltelementer uweisen/verstoppen';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Schaltelementer verstoppen';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Schaltelementer uweisen';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['lb-LU']);

}));
