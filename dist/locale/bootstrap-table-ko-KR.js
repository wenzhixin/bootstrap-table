(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Korean translation
   * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
   * Revision: Abel Yeom (abel.yeom@gmail.com)
   */

  $.fn.bootstrapTable.locales['ko-KR'] = $.fn.bootstrapTable.locales['ko'] = {
    formatCopyRows: function formatCopyRows() {
      return '행 복사';
    },
    formatPrint: function formatPrint() {
      return '프린트';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return '데이터를 불러오는 중입니다';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "\uD398\uC774\uC9C0 \uB2F9 ".concat(pageNumber, "\uAC1C \uB370\uC774\uD130 \uCD9C\uB825");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\uC804\uCCB4 ".concat(totalRows, "\uAC1C \uC911 ").concat(pageFrom, "~").concat(pageTo, "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825, (\uC804\uCCB4 ").concat(totalNotFiltered, " \uD589\uC5D0\uC11C \uD544\uD130\uB428)");
      }
      return "\uC804\uCCB4 ".concat(totalRows, "\uAC1C \uC911 ").concat(pageFrom, "~").concat(pageTo, "\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825,");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return '이전 페이지';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "".concat(page, " \uD398\uC774\uC9C0\uB85C \uC774\uB3D9");
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return '다음 페이지';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "".concat(totalRows, " \uD589\uB4E4 \uD45C\uC2DC \uC911");
    },
    formatClearSearch: function formatClearSearch() {
      return '검색 초기화';
    },
    formatSearch: function formatSearch() {
      return '검색';
    },
    formatNoMatches: function formatNoMatches() {
      return '조회된 데이터가 없습니다.';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return '페이지 넘버 보기/숨기기';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return '페이지 넘버 보기';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return '페이지 넘버 숨기기';
    },
    formatRefresh: function formatRefresh() {
      return '새로 고침';
    },
    formatToggleOn: function formatToggleOn() {
      return '카드뷰 보기';
    },
    formatToggleOff: function formatToggleOff() {
      return '카드뷰 숨기기';
    },
    formatColumns: function formatColumns() {
      return '컬럼 필터링';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return '전체 토글';
    },
    formatFullscreen: function formatFullscreen() {
      return '전체 화면';
    },
    formatAllRows: function formatAllRows() {
      return '전체';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return '자동 갱신';
    },
    formatExport: function formatExport() {
      return '데이터 추출';
    },
    formatJumpTo: function formatJumpTo() {
      return '이동';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return '심화 검색';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return '닫기';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return '컨트롤 보기/숨기기';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return '컨트롤 숨기기';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return '컨트롤 보기';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR']);

}));
