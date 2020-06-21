/**
 * Bootstrap Table Georgian translation
 * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
 */

$.fn.bootstrapTable.locales['ka-GE'] = {
  formatLoadingMessage () {
    return 'იტვირთება, გთხოვთ მოიცადოთ'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} ჩანაწერი თითო გვერდზე`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `ნაჩვენებია ${pageFrom}-დან ${pageTo}-მდე ჩანაწერი ჯამური ${totalRows}-დან (filtered from ${totalNotFiltered} total rows)`
    }

    return `ნაჩვენებია ${pageFrom}-დან ${pageTo}-მდე ჩანაწერი ჯამური ${totalRows}-დან`
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
    return 'ძებნა'
  },
  formatNoMatches () {
    return 'მონაცემები არ არის'
  },
  formatPaginationSwitch () {
    return 'გვერდების გადამრთველის დამალვა/გამოჩენა'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'განახლება'
  },
  formatToggle () {
    return 'ჩართვა/გამორთვა'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'სვეტები'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE'])
