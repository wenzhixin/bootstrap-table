/**
 * Bootstrap Table French (Luxembourg) translation
 * Author: Nevets82 <Nevets82@gmail.com>
 * Editor: David Morais Ferreira (https://github.com/DavidMoraisFerreira/)
 */

$.fn.bootstrapTable.locales['fr-LU'] = {
  // General.
  formatAllRows () {
    return 'Tout'
  },
  formatClearSearch () {
    return 'Effacer la recherche'
  },
  formatColumns () {
    return 'Colonnes'
  },
  formatColumnsToggleAll () {
    return 'Tout afficher'
  },
  formatDetailPagination (totalRows) {
    return `Affichage de ${totalRows} lignes`
  },
  formatFullscreen () {
    return 'Plein écran'
  },
  formatLoadingMessage () {
    return 'Chargement en cours'
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
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} lignes par page`
  },
  formatRefresh () {
    return 'Actualiser'
  },
  formatSearch () {
    return 'Rechercher'
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Affichage de ${pageFrom} à ${pageTo} sur ${totalRows} lignes (filtrées à partir de ${totalNotFiltered} lignes)`
    }
    return `Affichage de ${pageFrom} à ${pageTo} sur ${totalRows} lignes`
  },
  formatSRPaginationNextText () {
    return 'page suivante'
  },
  formatSRPaginationPageText (page) {
    return `vers la page ${page}`
  },
  formatSRPaginationPreText () {
    return 'page précédente'
  },
  formatToggleOn () {
    return 'Afficher la vue en cartes'
  },
  formatToggleOff () {
    return 'Cacher la vue en cartes'
  },

  // Extension: Auto Refresh.
  formatAutoRefresh () {
    return 'Actualiser automatiquement'
  },

  // Extension: Copy Rows.
  formatCopyRows () {
    return 'Copier les lignes'
  },

  // Extension: Custom View.
  formatToggleCustomViewOn () {
    return 'Afficher la vue personnalisée'
  },
  formatToggleCustomViewOff() {
    return 'Cacher la vue personnalisée'
  },

  // Extension: Export.
  formatExport () {
    return 'Exporter les données'
  },

  // Extension: Filter Control.
  formatClearFilters () {
    return 'Retirer les filtres'
  },
  formatFilterControlSwitch() {
    return 'Masquer/Afficher les contrôles'
  },
  formatFilterControlSwitchHide () {
    return 'Masquer les contrôles'
  },
  formatFilterControlSwitchShow () {
    return 'Afficher les contrôles'
  },

  // Extension: Multiple Sort.
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
  },

  // Extension: Page Jump To.
  formatJumpTo () {
    return 'Aller à'
  },

  // Extension: Print.
  formatPrint () {
    return 'Imprimer'
  },

  // Extension: Toolbar.
  formatAdvancedCloseButton () {
    return 'Fermer'
  },
  formatAdvancedSearch () {
    return 'Recherche avancée'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-LU'])
