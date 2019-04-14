/**
 * Bootstrap Table Greek translation
 * Author: giannisdallas
 */

$.fn.bootstrapTable.locales['el-GR'] = {
  formatLoadingMessage () {
    return 'Φορτώνει, παρακαλώ περιμένετε'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} αποτελέσματα ανά σελίδα`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Εμφανίζονται από την ${pageFrom} ως την ${pageTo} από σύνολο ${totalRows} σειρών (filtered from ${totalNotFiltered} total rows)`
    }

    return `Εμφανίζονται από την ${pageFrom} ως την ${pageTo} από σύνολο ${totalRows} σειρών`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Αναζητήστε'
  },
  formatNoMatches () {
    return 'Δεν βρέθηκαν αποτελέσματα'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatRefresh () {
    return 'Refresh'
  },
  formatToggle () {
    return 'Toggle'
  },
  formatColumns () {
    return 'Columns'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR'])
