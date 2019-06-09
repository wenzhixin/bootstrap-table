/**
 * Bootstrap Table Dutch translation
 * Author: Your Name <info@a2hankes.nl>
 */

$.fn.bootstrapTable.locales['nl-NL'] = {
  formatLoadingMessage () {
    return 'Laden, even geduld'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} records per pagina`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Toon ${pageFrom} tot ${pageTo} van ${totalRows} record${(totalRows > 1) ? 's' : ''} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Toon ${pageFrom} tot ${pageTo} van ${totalRows} record${(totalRows > 1) ? 's' : ''}`
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
    return `Toon ${totalRows} record${(totalRows > 1) ? 's' : ''}`
  },
  formatClearSearch () {
    return 'Verwijder filters'
  },
  formatSearch () {
    return 'Zoeken'
  },
  formatNoMatches () {
    return 'Geen resultaten gevonden'
  },
  formatPaginationSwitch () {
    return 'Verberg/Toon paginatie'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Vernieuwen'
  },
  formatToggle () {
    return 'Omschakelen'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Kolommen'
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
    return 'Exporteer data'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL'])
