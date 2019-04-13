/**
 * Bootstrap Table French (France) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 * Modification: Tidalf (https://github.com/TidalfFR)
 */
($ => {
  $.fn.bootstrapTable.locales['fr-FR'] = {
    formatLoadingMessage () {
      return 'Chargement en cours, patientez, s´il vous plaît'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} lignes par page`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Affichage des lignes ${pageFrom} à ${pageTo} sur ${totalRows} lignes au total`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
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
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Tous'
    },
    formatAutoRefresh () {
      return 'Auto Refresh'
    },
    formatExport () {
      return 'Exporter les données'
    },
    formatClearFilters () {
      return 'Vider les filtres'
    },
    formatJumpto () {
      return 'GO'
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
