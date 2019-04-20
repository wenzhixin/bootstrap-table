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
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
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
  formatRefresh () {
    return 'განახლება'
  },
  formatToggle () {
    return 'ჩართვა/გამორთვა'
  },
  formatColumns () {
    return 'სვეტები'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE'])
