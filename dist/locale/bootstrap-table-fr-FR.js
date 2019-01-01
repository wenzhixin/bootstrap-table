(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableFrFR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table French (France) translation
   * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
   * Modification: Tidalf (https://github.com/TidalfFR)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['fr-FR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Chargement en cours, patientez, s´il vous plaît ...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' lignes par page';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Affichage des lignes ' + pageFrom + ' \xE0 ' + pageTo + ' sur ' + totalRows + ' lignes au total';
      },
      formatSearch: function formatSearch() {
        return 'Rechercher';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Aucun résultat trouvé';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Montrer/Masquer pagination';
      },
      formatRefresh: function formatRefresh() {
        return 'Rafraîchir';
      },
      formatToggle: function formatToggle() {
        return 'Alterner';
      },
      formatColumns: function formatColumns() {
        return 'Colonnes';
      },
      formatAllRows: function formatAllRows() {
        return 'Tous';
      },
      formatExport: function formatExport() {
        return 'Exporter les données';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Vider les filtres';
      },
      formatMultipleSort: function formatMultipleSort() {
        return 'Tri avancé';
      },
      formatAddLevel: function formatAddLevel() {
        return 'Ajouter un niveau';
      },
      formatDeleteLevel: function formatDeleteLevel() {
        return 'Supprimer un niveau';
      },
      formatColumn: function formatColumn() {
        return 'Colonne';
      },
      formatOrder: function formatOrder() {
        return 'Ordre';
      },
      formatSortBy: function formatSortBy() {
        return 'Trier par';
      },
      formatThenBy: function formatThenBy() {
        return 'Puis par';
      },
      formatSort: function formatSort() {
        return 'Trier';
      },
      formatCancel: function formatCancel() {
        return 'Annuler';
      },
      formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
        return 'Doublon(s) détecté(s)!';
      },
      formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
        return 'Supprimez ou changez les colonnes dupliquées.';
      },
      formatSortOrders: function formatSortOrders() {
        return {
          asc: 'Croissant',
          desc: 'Décroissant'
        };
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Recherche avancée';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Fermer';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR']);
  })(jQuery);
});