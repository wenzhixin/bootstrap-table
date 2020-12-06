/**
 * Bootstrap Table Finnish translations
 * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
 */

$.fn.bootstrapTable.locales['fi-FI'] = $.fn.bootstrapTable.locales['fi'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'Ladataan, ole hyvä ja odota'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} riviä sivulla`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Näytetään rivit ${pageFrom} - ${pageTo} / ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Näytetään rivit ${pageFrom} - ${pageTo} / ${totalRows}`
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
    return 'Poista suodattimet'
  },
  formatSearch () {
    return 'Hae'
  },
  formatNoMatches () {
    return 'Hakuehtoja vastaavia tuloksia ei löytynyt'
  },
  formatPaginationSwitch () {
    return 'Näytä/Piilota sivutus'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Päivitä'
  },
  formatToggle () {
    return 'Valitse'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Sarakkeet'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Kaikki'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Vie tiedot'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  },
  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI'])
