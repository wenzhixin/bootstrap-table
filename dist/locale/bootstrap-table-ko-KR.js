(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableKoKR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Korean translation
   * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ko-KR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '데이터를 불러오는 중입니다...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\uD398\uC774\uC9C0 \uB2F9 ' + pageNumber + '\uAC1C \uB370\uC774\uD130 \uCD9C\uB825';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\uC804\uCCB4 ' + totalRows + '\uAC1C \uC911 ' + pageFrom + '~' + pageTo + '\uBC88\uC9F8 \uB370\uC774\uD130 \uCD9C\uB825,';
      },
      formatSearch: function formatSearch() {
        return '검색';
      },
      formatNoMatches: function formatNoMatches() {
        return '조회된 데이터가 없습니다.';
      },
      formatRefresh: function formatRefresh() {
        return '새로 고침';
      },
      formatToggle: function formatToggle() {
        return '전환';
      },
      formatColumns: function formatColumns() {
        return '컬럼 필터링';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR']);
  })(jQuery);
});