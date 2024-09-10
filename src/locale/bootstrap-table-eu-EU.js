/**
 * Bootstrap Table Basque (Basque Country) translation
 * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
 */

$.fn.bootstrapTable.locales['eu-EU'] = $.fn.bootstrapTable.locales['eu'] = {
  formatAdvancedCloseButton () {
    return 'Close'
  },

  formatAdvancedSearch () {
    return 'Advanced search'
  },

  formatAllRows () {
    return 'Guztiak'
  },

  formatAutoRefresh () {
    return 'Auto Refresh'
  },

  formatClearSearch () {
    return 'Clear Search'
  },

  formatColumns () {
    return 'Zutabeak'
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
    return 'Export data'
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
    return 'Itxaron mesedez'
  },

  formatNoMatches () {
    return 'Ez da emaitzarik aurkitu'
  },

  formatPaginationSwitch () {
    return 'Ezkutatu/Erakutsi orrikatzea'
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
    return `${pageNumber} emaitza orriko.`
  },

  formatRefresh () {
    return 'Eguneratu'
  },

  formatSearch () {
    return 'Bilatu'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `${totalRows} erregistroetatik ${pageFrom}etik ${pageTo}erakoak erakusten (filtered from ${totalNotFiltered} total rows)`
    }

    return `${totalRows} erregistroetatik ${pageFrom}etik ${pageTo}erakoak erakusten.`
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['eu-EU'])
