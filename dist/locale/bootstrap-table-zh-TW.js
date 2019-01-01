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
    global.bootstrapTableZhTW = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Chinese translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['zh-TW'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '正在努力地載入資料，請稍候……';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\u6BCF\u9801\u986F\u793A ' + pageNumber + ' \u9805\u8A18\u9304';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u986F\u793A\u7B2C ' + pageFrom + ' \u5230\u7B2C ' + pageTo + ' \u9805\u8A18\u9304\uFF0C\u7E3D\u5171 ' + totalRows + ' \u9805\u8A18\u9304';
      },
      formatSearch: function formatSearch() {
        return '搜尋';
      },
      formatNoMatches: function formatNoMatches() {
        return '沒有找到符合的結果';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return '隱藏/顯示分頁';
      },
      formatRefresh: function formatRefresh() {
        return '重新整理';
      },
      formatToggle: function formatToggle() {
        return '切換';
      },
      formatColumns: function formatColumns() {
        return '列';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW']);
  })(jQuery);
});