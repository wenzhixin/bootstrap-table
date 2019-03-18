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
    global.bootstrapTableArSA = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table English translation
   * Author: Zhixin Wen<wenzhixin2010@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['ar-SA'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'جاري التحميل, يرجى الإنتظار';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0633\u062C\u0644 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0627\u0644\u0638\u0627\u0647\u0631 ' + pageFrom + ' \u0625\u0644\u0649 ' + pageTo + ' \u0645\u0646 ' + totalRows + ' \u0633\u062C\u0644';
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'بحث';
      },
      formatNoMatches: function formatNoMatches() {
        return 'لا توجد نتائج مطابقة للبحث';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        /* eslint-disable no-useless-escape */
        return 'إخفاء\إظهار ترقيم الصفحات';
      },
      formatRefresh: function formatRefresh() {
        return 'تحديث';
      },
      formatToggle: function formatToggle() {
        return 'تغيير';
      },
      formatColumns: function formatColumns() {
        return 'أعمدة';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'All';
      },
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      },
      formatExport: function formatExport() {
        return 'Export data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Clear filters';
      },
      formatJumpto: function formatJumpto() {
        return 'GO';
      },
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA']);
  })(jQuery);
});