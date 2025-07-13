/**
 * Bootstrap Table French (Luxembourg) translation
 * Author: Nevets82 <Nevets82@gmail.com>
 * Editor: David Morais Ferreira (https://github.com/DavidMoraisFerreira/)
 */

$.fn.bootstrapTable.locales['fr-LU'] = {
  formatAddLevel () {
    return 'Ajouter un niveau'
  },

  formatAdvancedCloseButton () {
    return 'Fermer'
  },

  formatAdvancedSearch () {
    return 'Recherche avancée'
  },

  formatAllRows () {
    return 'Tout'
  },

  formatAutoRefresh () {
    return 'Actualiser automatiquement'
  },

  formatCancel () {
    return 'Annuler'
  },

  formatClearSearch () {
    return 'Effacer la recherche'
  },

  formatColumn () {
    return 'Colonne'
  },

  formatColumns () {
    return 'Colonnes'
  },

  formatColumnsToggleAll () {
    return 'Tout afficher'
  },

  formatCopyRows () {
    return 'Copier les lignes'
  },

  formatDeleteLevel () {
    return 'Supprimer un niveau'
  },

  formatDetailPagination (totalRows) {
    return `Affichage de ${totalRows} lignes`
  },

  formatDuplicateAlertDescription () {
    return 'Veuillez supprimer ou modifier les entrées en double'
  },

  formatDuplicateAlertTitle () {
    return 'Des entrées en double ont été trouvées !'
  },

  formatExport () {
    return 'Exporter'
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

  formatFullscreen () {
    return 'Plein écran'
  },

  formatJumpTo () {
    return 'Aller à'
  },

  formatLoadingMessage () {
    return 'Chargement en cours'
  },

  formatMultipleSort () {
    return 'Tri multiple'
  },

  formatNoMatches () {
    return 'Aucun résultat'
  },

  formatOrder () {
    return 'Ordre'
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

  formatPrint () {
    return 'Imprimer'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} lignes par page`
  },

  formatRefresh () {
    return 'Actualiser'
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

  formatSearch () {
    return 'Rechercher'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Affichage de ${pageFrom} à ${pageTo} sur ${totalRows} lignes (filtrées à partir de ${totalNotFiltered} lignes)`
    }

    return `Affichage de ${pageFrom} à ${pageTo} sur ${totalRows} lignes`
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

  formatToggleCustomViewOff () {
    return 'Cacher la vue personnalisée'
  },

  formatToggleCustomViewOn () {
    return 'Afficher la vue personnalisée'
  },

  formatToggleOff () {
    return 'Cacher la vue en cartes'
  },

  formatToggleOn () {
    return 'Afficher la vue en cartes'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-LU'])
