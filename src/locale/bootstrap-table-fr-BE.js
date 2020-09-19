/**
 * Bootstrap Table French (Belgium) translation
 * Author: Julien Bisconti (julien.bisconti@gmail.com)
 *         Nevets82 <Nevets82@gmail.com>
 */

$.fn.bootstrapTable.locales['fr-BE'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'Chargement en cours'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} lignes par page`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Affiche de ${pageFrom} à ${pageTo} sur ${totalRows} lignes (filtrés à partir de ${totalNotFiltered} lignes)`
    }

    return `Affiche de ${pageFrom} à ${pageTo} sur ${totalRows} lignes`
  },
  formatSRPaginationPreText () {
    return 'page précédente'
  },
  formatSRPaginationPageText (page) {
    return `vers la page ${page}`
  },
  formatSRPaginationNextText () {
    return 'page suivante'
  },
  formatDetailPagination (totalRows) {
    return `Affiche ${totalRows} lignes`
  },
  formatClearSearch () {
    return 'Effacer la recherche'
  },
  formatSearch () {
    return 'Recherche'
  },
  formatNoMatches () {
    return 'Pas de lignes trouvés'
  },
  formatPaginationSwitch () {
    return 'Cacher/Afficher pagination'
  },
  formatPaginationSwitchDown () {
    return 'Afficher pagination'
  },
  formatPaginationSwitchUp () {
    return 'Cacher pagination'
  },
  formatRefresh () {
    return 'Rafraichir'
  },
  formatToggle () {
    return 'Basculer'
  },
  formatToggleOn () {
    return 'Afficher vue carte'
  },
  formatToggleOff () {
    return 'Cacher vue carte'
  },
  formatColumns () {
    return 'Colonnes'
  },
  formatColumnsToggleAll () {
    return 'Tout basculer'
  },
  formatFullscreen () {
    return 'Plein écran'
  },
  formatAllRows () {
    return 'Tout'
  },
  formatAutoRefresh () {
    return 'Rafraîchissement automatique'
  },
  formatExport () {
    return 'Exporter les données'
  },
  formatJumpTo () {
    return 'Aller à'
  },
  formatAdvancedSearch () {
    return 'Recherche avancée'
  },
  formatAdvancedCloseButton () {
    return 'Fermer'
  },
  formatFilterControlSwitch () {
    return 'Cacher/Afficher controls'
  },
  formatFilterControlSwitchHide () {
    return 'Cacher controls'
  },
  formatFilterControlSwitchShow () {
    return 'Afficher controls'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-BE'])
