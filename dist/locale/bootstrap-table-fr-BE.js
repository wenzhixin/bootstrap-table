(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table French (Belgium) translation
   * Author: Julien Bisconti (julien.bisconti@gmail.com)
   *         Nevets82 <Nevets82@gmail.com>
   */

  $.fn.bootstrapTable.locales['fr-BE'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copy Rows';
    },
    formatPrint: function formatPrint() {
      return 'Print';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Chargement en cours';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " lignes par page");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9s \xE0 partir de ").concat(totalNotFiltered, " lignes)");
      }
      return "Affiche de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'page précédente';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "vers la page ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'page suivante';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "Affiche ".concat(totalRows, " lignes");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Effacer la recherche';
    },
    formatSearch: function formatSearch() {
      return 'Recherche';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Pas de lignes trouvés';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Cacher/Afficher pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Afficher pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Cacher pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Rafraichir';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Afficher vue carte';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Cacher vue carte';
    },
    formatColumns: function formatColumns() {
      return 'Colonnes';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Tout basculer';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Plein écran';
    },
    formatAllRows: function formatAllRows() {
      return 'Tout';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Rafraîchissement automatique';
    },
    formatExport: function formatExport() {
      return 'Exporter les données';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Aller à';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Recherche avancée';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Fermer';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Cacher/Afficher controls';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Cacher controls';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Afficher controls';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-BE']);

}));
