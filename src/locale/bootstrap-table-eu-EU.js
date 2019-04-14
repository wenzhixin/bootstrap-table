/**
 * Bootstrap Table Basque (Basque Country) translation
 * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
 */

$.fn.bootstrapTable.locales['eu-EU'] = {
  formatLoadingMessage () {
    return 'Itxaron mesedez'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} emaitza orriko.`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `${totalRows} erregistroetatik ${pageFrom}etik ${pageTo}erakoak erakusten (filtered from ${totalNotFiltered} total rows)`
    }

    return `${totalRows} erregistroetatik ${pageFrom}etik ${pageTo}erakoak erakusten.`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Bilatu'
  },
  formatNoMatches () {
    return 'Ez da emaitzarik aurkitu'
  },
  formatPaginationSwitch () {
    return 'Ezkutatu/Erakutsi orrikatzea'
  },
  formatRefresh () {
    return 'Eguneratu'
  },
  formatToggle () {
    return 'Ezkutatu/Erakutsi'
  },
  formatColumns () {
    return 'Zutabeak'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Guztiak'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['eu-EU'])
