/**
 * Bootstrap Table Croatian translation
 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
 */

$.fn.bootstrapTable.locales['hr-HR'] = $.fn.bootstrapTable.locales['hr'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
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
    return 'Pretraži'
  },
  formatNoMatches () {
    return 'Nije pronađen niti jedan zapis'
  },
  formatPaginationSwitch () {
    return 'Prikaži/sakrij stranice'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Osvježi'
  },
  formatToggle () {
    return 'Promijeni prikaz'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Kolone'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR'])
