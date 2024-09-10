/**
 * Bootstrap Table Finnish translations
 * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
 */

$.fn.bootstrapTable.locales['fi-FI'] = $.fn.bootstrapTable.locales['fi'] = {
  formatAdvancedCloseButton () {
    return 'Close'
  },

  formatAdvancedSearch () {
    return 'Advanced search'
  },

  formatAllRows () {
    return 'Kaikki'
  },

  formatAutoRefresh () {
    return 'Auto Refresh'
  },

  formatClearSearch () {
    return 'Poista suodattimet'
  },

  formatColumns () {
    return 'Sarakkeet'
  },

  formatColumnsToggleAll () {
    return 'Toggle all'
  },

  formatCopyRows () {
    return 'Copy Rows'
  },

  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },

  formatExport () {
    return 'Vie tiedot'
  },

  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },

  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },

  formatFilterControlSwitchShow () {
    return 'Show controls'
  },

  formatFullscreen () {
    return 'Fullscreen'
  },

  formatJumpTo () {
    return 'GO'
  },

  formatLoadingMessage () {
    return 'Ladataan, ole hyvä ja odota'
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

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} riviä sivulla`
  },

  formatRefresh () {
    return 'Päivitä'
  },

  formatSearch () {
    return 'Hae'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Näytetään rivit ${pageFrom} - ${pageTo} / ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Näytetään rivit ${pageFrom} - ${pageTo} / ${totalRows}`
  },

  formatSRPaginationNextText () {
    return 'next page'
  },

  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },

  formatSRPaginationPreText () {
    return 'previous page'
  },

  formatToggleOff () {
    return 'Hide card view'
  },

  formatToggleOn () {
    return 'Show card view'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI'])
