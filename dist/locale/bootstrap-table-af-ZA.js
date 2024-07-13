(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Afrikaans translation
   * Author: Phillip Kruger <phillip.kruger@gmail.com>
   */

  $.fn.bootstrapTable.locales['af-ZA'] = $.fn.bootstrapTable.locales['af'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Kopieer lyne';
    },
    formatPrint: function formatPrint() {
      return 'Druk uit';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Laai tans';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " re\xEBls per bladsy");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Wys ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " lyne (gefiltreer vanaf ").concat(totalNotFiltered, " lyne)");
      }
      return "Wys ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " lyne");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'vorige bladsy';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "na bladsy ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'volgende bladsy';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "".concat(totalRows, "-re\xEBl vertoon");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Duidelike soektog';
    },
    formatSearch: function formatSearch() {
      return 'Navorsing';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Geen resultate nie';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Versteek/Wys paginasie';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Wys paginasie';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Versteek paginasie';
    },
    formatRefresh: function formatRefresh() {
      return 'Verfris';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Wys kaartaansig';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Versteek kaartaansig';
    },
    formatColumns: function formatColumns() {
      return 'Kolomme';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Wys alles';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Volskerm';
    },
    formatAllRows: function formatAllRows() {
      return 'Alles';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Verfris outomaties';
    },
    formatExport: function formatExport() {
      return 'Voer data uit';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Gaan na';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Gevorderde soektog';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Maak';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Versteek/Wys kontroles';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Versteek kontroles';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Wys kontroles';
    },
    formatToggleCustomViewOn: function formatToggleCustomViewOn() {
      return 'Wys pasgemaakte aansig';
    },
    formatToggleCustomViewOff: function formatToggleCustomViewOff() {
      return 'Versteek pasgemaakte aansig';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Verwyder filters';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Voeg \'n vlak by';
    },
    formatCancel: function formatCancel() {
      return 'Kanselleer';
    },
    formatColumn: function formatColumn() {
      return 'Kolom';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Vee \'n vlak uit';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return 'Duplikaatinskrywings is gevind!';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Verwyder of wysig asseblief duplikaatinskrywings';
    },
    formatMultipleSort: function formatMultipleSort() {
      return 'Multi-sorteer';
    },
    formatOrder: function formatOrder() {
      return 'Bestelling';
    },
    formatSort: function formatSort() {
      return 'Rangskik';
    },
    formatSortBy: function formatSortBy() {
      return 'Sorteer volgens';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Stygende',
        desc: 'Dalende'
      };
    },
    formatThenBy: function formatThenBy() {
      return 'Dan deur';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA']);

}));
