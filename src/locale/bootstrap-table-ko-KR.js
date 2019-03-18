/**
 * Bootstrap Table Korean translation
 * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
 */
($ => {
  $.fn.bootstrapTable.locales['ko-KR'] = {
    formatLoadingMessage () {
      return '데이터를 불러오는 중입니다'
    },
    formatRecordsPerPage (pageNumber) {
      return `페이지 당 ${pageNumber}개 데이터 출력`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `전체 ${totalRows}개 중 ${pageFrom}~${pageTo}번째 데이터 출력,`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
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
    formatRefresh () {
      return '새로 고침'
    },
    formatToggle () {
      return '전환'
    },
    formatColumns () {
      return '컬럼 필터링'
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
    formatJumpto () {
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
})(jQuery)
