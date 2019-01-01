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
    global.bootstrapTableZhCN = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Chinese translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['zh-CN'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return '正在努力地加载数据中，请稍候……';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return '\u6BCF\u9875\u663E\u793A ' + pageNumber + ' \u6761\u8BB0\u5F55';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u663E\u793A\u7B2C ' + pageFrom + ' \u5230\u7B2C ' + pageTo + ' \u6761\u8BB0\u5F55\uFF0C\u603B\u5171 ' + totalRows + ' \u6761\u8BB0\u5F55';
      },
      formatSearch: function formatSearch() {
        return '搜索';
      },
      formatNoMatches: function formatNoMatches() {
        return '没有找到匹配的记录';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return '隐藏/显示分页';
      },
      formatRefresh: function formatRefresh() {
        return '刷新';
      },
      formatToggle: function formatToggle() {
        return '切换';
      },
      formatColumns: function formatColumns() {
        return '列';
      },
      formatExport: function formatExport() {
        return '导出数据';
      },
      formatClearFilters: function formatClearFilters() {
        return '清空过滤';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
  })(jQuery);
});