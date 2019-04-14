/**
 * Bootstrap Table Polish translation
 * Author: zergu <michal.zagdan @ gmail com>
 */

$.fn.bootstrapTable.locales['pl-PL'] = {
  formatLoadingMessage () {
    return 'Ładowanie, proszę czekać'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rekordów na stronę`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Wyświetlanie rekordów od ${pageFrom} do ${pageTo} z ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Wyświetlanie rekordów od ${pageFrom} do ${pageTo} z ${totalRows}`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Szukaj'
  },
  formatNoMatches () {
    return 'Niestety, nic nie znaleziono'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatRefresh () {
    return 'Odśwież'
  },
  formatToggle () {
    return 'Przełącz'
  },
  formatColumns () {
    return 'Kolumny'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL'])
