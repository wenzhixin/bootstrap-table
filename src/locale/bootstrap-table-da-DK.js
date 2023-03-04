/**
 * Bootstrap Table danish translation
 * Author: Your Name Jan Borup Coyle, github@coyle.dk
 */

$.fn.bootstrapTable.locales['da-DK'] = $.fn.bootstrapTable.locales['da'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'Indlæser, vent venligst'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} poster pr side`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Viser ${pageFrom} til ${pageTo} af ${totalRows} række${totalRows > 1 ? 'r' : ''} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Viser ${pageFrom} til ${pageTo} af ${totalRows} række${totalRows > 1 ? 'r' : ''}`
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
    return `Viser ${totalRows} række${totalRows > 1 ? 'r' : ''}`
  },
  formatClearSearch () {
    return 'Ryd filtre'
  },
  formatSearch () {
    return 'Søg'
  },
  formatNoMatches () {
    return 'Ingen poster fundet'
  },
  formatPaginationSwitch () {
    return 'Skjul/vis nummerering'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Opdater'
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
    return 'Alle'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Eksporter'
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK'])
