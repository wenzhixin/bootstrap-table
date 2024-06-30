(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table French (France) translation
   * Author: Dennis Hernández
   *         Tidalf (https://github.com/TidalfFR)
   *         Nevets82 <Nevets82@gmail.com>
   */

  $.fn.bootstrapTable.locales['fr-FR'] = $.fn.bootstrapTable.locales['fr'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copier les lignes';
    },
    formatPrint: function formatPrint() {
      return 'Imprimer';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Chargement en cours';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " lignes par page");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9s \xE0 partir de ").concat(totalNotFiltered, " lignes)");
      }
      return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes");
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
      return "Affichage de ".concat(totalRows, " lignes");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Effacer la recherche';
    },
    formatSearch: function formatSearch() {
      return 'Recherche';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Aucun résultat';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Masquer/Afficher la pagination';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Afficher la pagination';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Masquer la pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Actualiser';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Afficher la vue carte';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Masquer la vue carte';
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
      return 'Actualisation automatique';
    },
    formatExport: function formatExport() {
      return 'Exporter les données';
    },
    formatJumpTo: function formatJumpTo() {
      return 'ALLER';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Recherche avancée';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Fermer';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Masquer/Afficher les contrôles';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Masquer les contrôles';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Afficher les contrôles';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR']);

}));
