/**
 * Bootstrap Table norwegian translation
 * Author: Jim Nordbø, jim@nordb.no
 */

$.fn.bootstrapTable.locales['nb-NO'] = {
  formatLoadingMessage () {
    return 'Oppdaterer, vennligst vent'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} poster pr side`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Viser ${pageFrom} til ${pageTo} av ${totalRows} rekker (filtered from ${totalNotFiltered} total rows)`
    }

    return `Viser ${pageFrom} til ${pageTo} av ${totalRows} rekker`
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
    return 'Clear Search'
  },
  formatSearch () {
    return 'Søk'
  },
  formatNoMatches () {
    return 'Ingen poster funnet'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Oppdater'
  },
  formatToggle () {
    return 'Endre'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Kolonner'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nb-NO'])
