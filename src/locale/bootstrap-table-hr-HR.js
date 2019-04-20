/**
 * Bootstrap Table Croatian translation
 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
 */

$.fn.bootstrapTable.locales['hr-HR'] = {
  formatLoadingMessage () {
    return 'Molimo pričekajte'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} broj zapisa po stranici`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Prikazujem ${pageFrom}. - ${pageTo}. od ukupnog broja zapisa ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Prikazujem ${pageFrom}. - ${pageTo}. od ukupnog broja zapisa ${totalRows}`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Pretraži'
  },
  formatNoMatches () {
    return 'Nije pronađen niti jedan zapis'
  },
  formatPaginationSwitch () {
    return 'Prikaži/sakrij stranice'
  },
  formatRefresh () {
    return 'Osvježi'
  },
  formatToggle () {
    return 'Promijeni prikaz'
  },
  formatColumns () {
    return 'Kolone'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Sve'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR'])
