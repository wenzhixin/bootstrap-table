/**
 * Bootstrap Table Afrikaans translation
 * Author: Phillip Kruger <phillip.kruger@gmail.com>
 */

$.fn.bootstrapTable.locales['af-ZA'] = {
  formatLoadingMessage () {
    return 'Besig om te laai, wag asseblief'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rekords per bladsy`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Resultate ${pageFrom} tot ${pageTo} van ${totalRows} rye (filtered from ${totalNotFiltered} total rows)`
    }

    return `Resultate ${pageFrom} tot ${pageTo} van ${totalRows} rye`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Soek'
  },
  formatNoMatches () {
    return 'Geen rekords gevind nie'
  },
  formatPaginationSwitch () {
    return 'Wys/verberg bladsy nummering'
  },
  formatRefresh () {
    return 'Herlaai'
  },
  formatToggle () {
    return 'Wissel'
  },
  formatColumns () {
    return 'Kolomme'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA'])
