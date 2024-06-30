(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Czech translation
   * Author: Lukas Kral (monarcha@seznam.cz)
   * Author: Jakub Svestka <svestka1999@gmail.com>
   */

  $.fn.bootstrapTable.locales['cs-CZ'] = $.fn.bootstrapTable.locales['cs'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Kopírovat řádky';
    },
    formatPrint: function formatPrint() {
      return 'Tisk';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Čekejte, prosím';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " polo\u017Eek na str\xE1nku");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Zobrazena ".concat(pageFrom, ". - ").concat(pageTo, " . polo\u017Eka z celkov\xFDch ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
      }
      return "Zobrazena ".concat(pageFrom, ". - ").concat(pageTo, " . polo\u017Eka z celkov\xFDch ").concat(totalRows);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'předchozí strana';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "na stranu ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'další strana';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Zobrazuji ".concat(totalRows, " \u0159\xE1dek");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Smazat hledání';
    },
    formatSearch: function formatSearch() {
      return 'Vyhledávání';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenalezena žádná vyhovující položka';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skrýt/Zobrazit stránkování';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Zobrazit stránkování';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Skrýt stránkování';
    },
    formatRefresh: function formatRefresh() {
      return 'Aktualizovat';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Zobrazit karty';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Zobrazit tabulku';
    },
    formatColumns: function formatColumns() {
      return 'Sloupce';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Zobrazit/Skrýt vše';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Zapnout/Vypnout fullscreen';
    },
    formatAllRows: function formatAllRows() {
      return 'Vše';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatické obnovení';
    },
    formatExport: function formatExport() {
      return 'Export dat';
    },
    formatJumpTo: function formatJumpTo() {
      return 'GO';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Pokročilé hledání';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Zavřít';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Skrýt/Zobrazit ovladače';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Skrýt ovladače';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Zobrazit ovladače';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ']);

}));
