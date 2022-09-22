/**
 * Bootstrap Table French (France) translation
 * Author: Dennis Hernández
 *         Tidalf (https://github.com/TidalfFR)
 *         Nevets82 <Nevets82@gmail.com>
 */

$.fn.bootstrapTable.locales['fr-FR'] = $.fn.bootstrapTable.locales['fr'] = {
  formatCopyRows () {
    return 'Copier les lignes'
  },
  formatPrint () {
    return 'Imprimer'
  },
  formatLoadingMessage () {
    return 'Chargement en cours'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} lignes par page`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Affichage de ${pageFrom} à ${pageTo} sur ${totalRows} lignes (filtrés à partir de ${totalNotFiltered} lignes)`
    }

    return `Affichage de ${pageFrom} à ${pageTo} sur ${totalRows} lignes`
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
    return `Affichage de ${totalRows} lignes`
  },
  formatClearSearch () {
    return 'Effacer la recherche'
  },
  formatSearch () {
    return 'Recherche'
  },
  formatNoMatches () {
    return 'Aucun résultat'
  },
  formatPaginationSwitch () {
    return 'Masquer/Afficher la pagination'
  },
  formatPaginationSwitchDown () {
    return 'Afficher la pagination'
  },
  formatPaginationSwitchUp () {
    return 'Masquer la pagination'
  },
  formatRefresh () {
    return 'Actualiser'
  },
  formatToggleOn () {
    return 'Afficher la vue carte'
  },
  formatToggleOff () {
    return 'Masquer la vue carte'
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
    return 'Actualisation automatique'
  },
  formatExport () {
    return 'Exporter les données'
  },
  formatJumpTo () {
    return 'ALLER'
  },
  formatAdvancedSearch () {
    return 'Recherche avancée'
  },
  formatAdvancedCloseButton () {
    return 'Fermer'
  },
  formatFilterControlSwitch () {
    return 'Masquer/Afficher les contrôles'
  },
  formatFilterControlSwitchHide () {
    return 'Masquer les contrôles'
  },
  formatFilterControlSwitchShow () {
    return 'Afficher les contrôles'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR'])
