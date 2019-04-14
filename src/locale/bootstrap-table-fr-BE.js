/**
 * Bootstrap Table French (Belgium) translation
 * Author: Julien Bisconti (julien.bisconti@gmail.com)
 */

$.fn.bootstrapTable.locales['fr-BE'] = {
  formatLoadingMessage () {
    return 'Chargement en cours'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} entrées par page`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Affiche de${pageFrom} à ${pageTo} sur ${totalRows} lignes (filtered from ${totalNotFiltered} total rows)`
    }

    return `Affiche de${pageFrom} à ${pageTo} sur ${totalRows} lignes`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Recherche'
  },
  formatNoMatches () {
    return 'Pas de fichiers trouvés'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatRefresh () {
    return 'Refresh'
  },
  formatToggle () {
    return 'Toggle'
  },
  formatColumns () {
    return 'Columns'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'All'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Export data'
  },
  formatClearFilters () {
    return 'Clear filters'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-BE'])
