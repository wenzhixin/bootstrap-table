(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Slovak translation
   * Author: Jozef Dúc<jozef.d13@gmail.com>
   */

  $.fn.bootstrapTable.locales['sk-SK'] = $.fn.bootstrapTable.locales['sk'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Skopírovať riadky';
    },
    formatPrint: function formatPrint() {
      return 'Vytlačiť';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Prosím čakajte';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " z\xE1znamov na stranu");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Zobrazen\xE1 ".concat(pageFrom, ". - ").concat(pageTo, ". polo\u017Eka z celkov\xFDch ").concat(totalRows, " (filtered from ").concat(totalNotFiltered, " total rows)");
      }
      return "Zobrazen\xE1 ".concat(pageFrom, ". - ").concat(pageTo, ". polo\u017Eka z celkov\xFDch ").concat(totalRows);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'Predchádzajúca strana';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "na stranu ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'Nasledujúca strana';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Zobrazuje sa ".concat(totalRows, " riadkov");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Odstráň filtre';
    },
    formatSearch: function formatSearch() {
      return 'Vyhľadávanie';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Nenájdená žiadna vyhovujúca položka';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Skry/Zobraz stránkovanie';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Zobraziť stránkovanie';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Skryť stránkovanie';
    },
    formatRefresh: function formatRefresh() {
      return 'Obnoviť';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Zobraziť kartové zobrazenie';
    },
    formatToggleOff: function formatToggleOff() {
      return 'skryť kartové zobrazenie';
    },
    formatColumns: function formatColumns() {
      return 'Stĺpce';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Prepnúť všetky';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Celá obrazovka';
    },
    formatAllRows: function formatAllRows() {
      return 'Všetky';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Automatické obnovenie';
    },
    formatExport: function formatExport() {
      return 'Exportuj dáta';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Ísť';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Pokročilé vyhľadávanie';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Zatvoriť';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Zobraziť/Skryť tlačidlá';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Skryť tlačidlá';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Zobraziť tlačidlá';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK']);

}));
