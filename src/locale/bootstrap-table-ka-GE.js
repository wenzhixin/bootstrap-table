/**
 * Bootstrap Table Georgian translation
 * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
 */

$.fn.bootstrapTable.locales['ka-GE'] = $.fn.bootstrapTable.locales['ka'] = {
  formatAdvancedCloseButton () {
    return 'Close'
  },

  formatAdvancedSearch () {
    return 'Advanced search'
  },

  formatAllRows () {
    return 'All'
  },

  formatAutoRefresh () {
    return 'Auto Refresh'
  },

  formatClearSearch () {
    return 'Clear Search'
  },

  formatColumns () {
    return 'სვეტები'
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
    return 'იტვირთება, გთხოვთ მოიცადოთ'
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

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} ჩანაწერი თითო გვერდზე`
  },

  formatRefresh () {
    return 'განახლება'
  },

  formatSearch () {
    return 'ძებნა'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `ნაჩვენებია ${pageFrom}-დან ${pageTo}-მდე ჩანაწერი ჯამური ${totalRows}-დან (filtered from ${totalNotFiltered} total rows)`
    }

    return `ნაჩვენებია ${pageFrom}-დან ${pageTo}-მდე ჩანაწერი ჯამური ${totalRows}-დან`
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE'])
