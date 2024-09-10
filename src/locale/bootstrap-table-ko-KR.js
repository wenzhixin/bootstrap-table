/**
 * Bootstrap Table Korean translation
 * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
 * Revision: Abel Yeom (abel.yeom@gmail.com)
 */

$.fn.bootstrapTable.locales['ko-KR'] = $.fn.bootstrapTable.locales['ko'] = {
  formatAdvancedCloseButton () {
    return '닫기'
  },

  formatAdvancedSearch () {
    return '심화 검색'
  },

  formatAllRows () {
    return '전체'
  },

  formatAutoRefresh () {
    return '자동 갱신'
  },

  formatClearSearch () {
    return '검색 초기화'
  },

  formatColumns () {
    return '컬럼 필터링'
  },

  formatColumnsToggleAll () {
    return '전체 토글'
  },

  formatCopyRows () {
    return '행 복사'
  },

  formatDetailPagination (totalRows) {
    return `${totalRows} 행들 표시 중`
  },

  formatExport () {
    return '데이터 추출'
  },

  formatFilterControlSwitch () {
    return '컨트롤 보기/숨기기'
  },

  formatFilterControlSwitchHide () {
    return '컨트롤 숨기기'
  },

  formatFilterControlSwitchShow () {
    return '컨트롤 보기'
  },

  formatFullscreen () {
    return '전체 화면'
  },

  formatJumpTo () {
    return '이동'
  },

  formatLoadingMessage () {
    return '데이터를 불러오는 중입니다'
  },

  formatNoMatches () {
    return '조회된 데이터가 없습니다.'
  },

  formatPaginationSwitch () {
    return '페이지 넘버 보기/숨기기'
  },

  formatPaginationSwitchDown () {
    return '페이지 넘버 보기'
  },

  formatPaginationSwitchUp () {
    return '페이지 넘버 숨기기'
  },

  formatPrint () {
    return '프린트'
  },

  formatRecordsPerPage (pageNumber) {
    return `페이지 당 ${pageNumber}개 데이터 출력`
  },

  formatRefresh () {
    return '새로 고침'
  },

  formatSearch () {
    return '검색'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `전체 ${totalRows}개 중 ${pageFrom}~${pageTo}번째 데이터 출력, (전체 ${totalNotFiltered} 행에서 필터됨)`
    }

    return `전체 ${totalRows}개 중 ${pageFrom}~${pageTo}번째 데이터 출력,`
  },

  formatSRPaginationNextText () {
    return '다음 페이지'
  },

  formatSRPaginationPageText (page) {
    return `${page} 페이지로 이동`
  },

  formatSRPaginationPreText () {
    return '이전 페이지'
  },

  formatToggleOff () {
    return '카드뷰 숨기기'
  },

  formatToggleOn () {
    return '카드뷰 보기'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR'])
