(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table French (Luxembourg) translation
   * Author: Nevets82 <Nevets82@gmail.com>
   * Editor: David Morais Ferreira (https://github.com/DavidMoraisFerreira/)
   */

  $.fn.bootstrapTable.locales['fr-LU'] = {
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
        return "Affichage de ".concat(pageFrom, " \xE0 ").concat(pageTo, " sur ").concat(totalRows, " lignes (filtr\xE9es \xE0 partir de ").concat(totalNotFiltered, " lignes)");
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
      return 'Rechercher';
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
      return 'Afficher la vue en cartes';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Cacher la vue en cartes';
    },
    formatColumns: function formatColumns() {
      return 'Colonnes';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Tout afficher';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Plein écran';
    },
    formatAllRows: function formatAllRows() {
      return 'Tout';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Actualiser automatiquement';
    },
    formatExport: function formatExport() {
      return 'Exporter';
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
      return 'Masquer/Afficher les contrôles';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Masquer les contrôles';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Afficher les contrôles';
    },
    formatToggleCustomViewOn: function formatToggleCustomViewOn() {
      return 'Afficher la vue personnalisée';
    },
    formatToggleCustomViewOff: function formatToggleCustomViewOff() {
      return 'Cacher la vue personnalisée';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Retirer les filtres';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Ajouter un niveau';
    },
    formatCancel: function formatCancel() {
      return 'Annuler';
    },
    formatColumn: function formatColumn() {
      return 'Colonne';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Supprimer un niveau';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return 'Des entrées en double ont été trouvées !';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Veuillez supprimer ou modifier les entrées en double';
    },
    formatMultipleSort: function formatMultipleSort() {
      return 'Tri multiple';
    },
    formatOrder: function formatOrder() {
      return 'Ordre';
    },
    formatSort: function formatSort() {
      return 'Trier';
    },
    formatSortBy: function formatSortBy() {
      return 'Trier par';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Ascendant',
        desc: 'Descendant'
      };
    },
    formatThenBy: function formatThenBy() {
      return 'Puis par';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-LU']);

}));
