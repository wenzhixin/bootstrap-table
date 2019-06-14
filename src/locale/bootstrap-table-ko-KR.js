/**
 * Bootstrap Table Korean translation
 * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
 */

$.fn.bootstrapTable.locales['ko-KR'] = {
  formatLoadingMessage () {
    return '데이터를 불러오는 중입니다'
  },
  formatRecordsPerPage (pageNumber) {
    return `페이지 당 ${pageNumber}개 데이터 출력`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `전체 ${totalRows}개 중 ${pageFrom}~${pageTo}번째 데이터 출력, (filtered from ${totalNotFiltered} total rows)`
    }

    return `전체 ${totalRows}개 중 ${pageFrom}~${pageTo}번째 데이터 출력,`
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
    return '검색'
  },
  formatNoMatches () {
    return '조회된 데이터가 없습니다.'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return '새로 고침'
  },
  formatToggle () {
    return '전환'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return '컬럼 필터링'
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
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR'])
