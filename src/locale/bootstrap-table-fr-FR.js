/**
 * Bootstrap Table French (France) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 * Modification: Tidalf (https://github.com/TidalfFR)
 */

$.fn.bootstrapTable.locales['fr-FR'] = {
  formatLoadingMessage () {
    return 'Chargement en cours, patientez, s´il vous plaît'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} lignes par page`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Affichage des lignes ${pageFrom} à ${pageTo} sur ${totalRows} lignes au total (filtered from ${totalNotFiltered} total rows)`
    }

    return `Affichage des lignes ${pageFrom} à ${pageTo} sur ${totalRows} lignes au total`
  },
  formatSRPaginationPreText () {
    return 'previous page'
  },
  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },
  formatSRPaginationNextText () {
    return 'next page'
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatClearSearch () {
    return 'Vider les filtres'
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
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Rafraîchir'
  },
  formatToggle () {
    return 'Alterner'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Colonnes'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
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
  formatJumpTo () {
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
