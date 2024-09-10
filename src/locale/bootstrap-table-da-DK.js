/**
 * Bootstrap Table danish translation
 * Author: Your Name Jan Borup Coyle, github@coyle.dk
 */

$.fn.bootstrapTable.locales['da-DK'] = $.fn.bootstrapTable.locales['da'] = {
  formatAdvancedCloseButton () {
    return 'Close'
  },

  formatAdvancedSearch () {
    return 'Advanced search'
  },

  formatAllRows () {
    return 'Alle'
  },

  formatAutoRefresh () {
    return 'Auto Refresh'
  },

  formatClearSearch () {
    return 'Ryd filtre'
  },

  formatColumns () {
    return 'Kolonner'
  },

  formatColumnsToggleAll () {
    return 'Toggle all'
  },

  formatCopyRows () {
    return 'Copy Rows'
  },

  formatDetailPagination (totalRows) {
    return `Viser ${totalRows} række${totalRows > 1 ? 'r' : ''}`
  },

  formatExport () {
    return 'Eksporter'
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
    return 'Indlæser, vent venligst'
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

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} poster pr side`
  },

  formatRefresh () {
    return 'Opdater'
  },

  formatSearch () {
    return 'Søg'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Viser ${pageFrom} til ${pageTo} af ${totalRows} række${totalRows > 1 ? 'r' : ''} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Viser ${pageFrom} til ${pageTo} af ${totalRows} række${totalRows > 1 ? 'r' : ''}`
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK'])
