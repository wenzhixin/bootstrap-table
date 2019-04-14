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
  formatDetailPagination (totalRows) {
    return `Toon ${totalRows} record${(totalRows > 1) ? 's' : ''}`
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
  formatRefresh () {
    return 'Vernieuwen'
  },
  formatToggle () {
    return 'Omschakelen'
  },
  formatColumns () {
    return 'Kolommen'
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
  formatClearFilters () {
    return 'Verwijder filters'
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
