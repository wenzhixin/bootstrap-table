/**
 * Bootstrap Table French (Luxembourg) translation
 * Author: Nevets82 <Nevets82@gmail.com>
 * Editor: David Morais Ferreira (https://github.com/DavidMoraisFerreira/)
 */

$.fn.bootstrapTable.locales['fr-LU'] = {
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
      return `Affichage de ${pageFrom} à ${pageTo} sur ${totalRows} lignes (filtrées à partir de ${totalNotFiltered} lignes)`
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
    return 'Rechercher'
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
    return 'Afficher la vue en cartes'
  },
  formatToggleOff () {
    return 'Cacher la vue en cartes'
  },
  formatColumns () {
    return 'Colonnes'
  },
  formatColumnsToggleAll () {
    return 'Tout afficher'
  },
  formatFullscreen () {
    return 'Plein écran'
  },
  formatAllRows () {
    return 'Tout'
  },
  formatAutoRefresh () {
    return 'Actualiser automatiquement'
  },
  formatExport () {
    return 'Exporter'
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
    return 'Masquer/Afficher les contrôles'
  },
  formatFilterControlSwitchHide () {
    return 'Masquer les contrôles'
  },
  formatFilterControlSwitchShow () {
    return 'Afficher les contrôles'
  },
  formatToggleCustomViewOn () {
    return 'Afficher la vue personnalisée'
  },
  formatToggleCustomViewOff () {
    return 'Cacher la vue personnalisée'
  },
  formatClearFilters () {
    return 'Retirer les filtres'
  },
  formatAddLevel () {
    return 'Ajouter un niveau'
  },
  formatCancel () {
    return 'Annuler'
  },
  formatColumn () {
    return 'Colonne'
  },
  formatDeleteLevel () {
    return 'Supprimer un niveau'
  },
  formatDuplicateAlertTitle () {
    return 'Des entrées en double ont été trouvées !'
  },
  formatDuplicateAlertDescription () {
    return 'Veuillez supprimer ou modifier les entrées en double'
  },
  formatMultipleSort () {
    return 'Tri multiple'
  },
  formatOrder () {
    return 'Ordre'
  },
  formatSort () {
    return 'Trier'
  },
  formatSortBy () {
    return 'Trier par'
  },
  formatSortOrders () {
    return {
      asc: 'Ascendant',
      desc: 'Descendant'
    }
  },
  formatThenBy () {
    return 'Puis par'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-LU'])
