(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Dutch (Nederland) translation
   * Author: Your Name <info@a2hankes.nl>
   *         Nevets82 <Nevets82@gmail.com>
   */

  $.fn.bootstrapTable.locales['nl-NL'] = $.fn.bootstrapTable.locales['nl'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copy Rows';
    },
    formatPrint: function formatPrint() {
      return 'Print';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Laden, even geduld';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " records per pagina");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '', " (gefilterd van ").concat(totalNotFiltered, " records in totaal)");
      }
      return "Toon ".concat(pageFrom, " tot ").concat(pageTo, " van ").concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'vorige pagina';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "tot pagina ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'volgende pagina';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Toon ".concat(totalRows, " record").concat(totalRows > 1 ? 's' : '');
    },
    formatClearSearch: function formatClearSearch() {
      return 'Verwijder filters';
    },
    formatSearch: function formatSearch() {
      return 'Zoeken';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Geen resultaten gevonden';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Verberg/Toon paginering';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Toon paginering';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Verberg paginering';
    },
    formatRefresh: function formatRefresh() {
      return 'Vernieuwen';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Toon kaartweergave';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Verberg kaartweergave';
    },
    formatColumns: function formatColumns() {
      return 'Kolommen';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Allen omschakelen';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Volledig scherm';
    },
    formatAllRows: function formatAllRows() {
      return 'Alle';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatisch vernieuwen';
    },
    formatExport: function formatExport() {
      return 'Exporteer gegevens';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GA';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Geavanceerd zoeken';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Sluiten';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Verberg/Toon controls';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Verberg controls';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Toon controls';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Niveau toevoegen';
    },
    formatCancel: function formatCancel() {
      return 'Annuleren';
    },
    formatColumn: function formatColumn() {
      return 'Kolom';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Niveau verwijderen';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return 'Duplicaten gevonden!';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Gelieve dubbele kolommen te verwijderen of wijzigen';
    },
    formatMultipleSort: function formatMultipleSort() {
      return 'Meervoudige sortering';
    },
    formatOrder: function formatOrder() {
      return 'Volgorde';
    },
    formatSort: function formatSort() {
      return 'Sorteren';
    },
    formatSortBy: function formatSortBy() {
      return 'Sorteren op';
    },
    formatThenBy: function formatThenBy() {
      return 'vervolgens';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Oplopend',
        desc: 'Aflopend'
      };
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL']);

}));
