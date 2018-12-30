/**
 * Bootstrap Table French (France) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 * Modification: Tidalf (https://github.com/TidalfFR)
 */
($ => {
  $.fn.bootstrapTable.locales['fr-FR'] = {
    formatLoadingMessage () {
      return 'Chargement en cours, patientez, s´il vous plaît ...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} lignes par page`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Affichage des lignes ${pageFrom} à ${pageTo} sur ${totalRows} lignes au total`
    },
    formatSearch () {
      return 'Rechercher'
    },
    formatNoMatches () {
      return 'Aucun résultat trouvé'
    },
    formatPaginationSwitch () {
      return 'Montrer/Masquer pagination'
    },
    formatRefresh () {
      return 'Rafraîchir'
    },
    formatToggle () {
      return 'Alterner'
    },
    formatColumns () {
      return 'Colonnes'
    },
    formatAllRows () {
      return 'Tous'
    },
    formatExport () {
      return 'Exporter les données'
    },
    formatClearFilters () {
      return 'Vider les filtres'
    },
    formatMultipleSort () {
      return 'Tri avancé'
    },
    formatAddLevel () {
      return 'Ajouter un niveau'
    },
    formatDeleteLevel () {
      return 'Supprimer un niveau'
    },
    formatColumn () {
      return 'Colonne'
    },
    formatOrder () {
      return 'Ordre'
    },
    formatSortBy () {
      return 'Trier par'
    },
    formatThenBy () {
      return 'Puis par'
    },
    formatSort () {
      return 'Trier'
    },
    formatCancel () {
      return 'Annuler'
    },
    formatDuplicateAlertTitle () {
      return 'Doublon(s) détecté(s)!'
    },
    formatDuplicateAlertDescription () {
      return 'Supprimez ou changez les colonnes dupliquées.'
    },
    formatSortOrders () {
      return {
        asc: 'Croissant',
        desc: 'Décroissant'
      }
    },
    formatAdvancedSearch () {
      return 'Recherche avancée'
    },
    formatAdvancedCloseButton () {
      return 'Fermer'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR'])
})(jQuery)
