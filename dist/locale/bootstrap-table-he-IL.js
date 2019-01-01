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
    global.bootstrapTableHeIL = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Hebrew translation
   * Author: legshooter
   */
  (function ($) {
    $.fn.bootstrapTable.locales['he-IL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'טוען, נא להמתין...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u05DE\u05E6\u05D9\u05D2 ' + pageFrom + ' \u05E2\u05D3 ' + pageTo + ' \u05DE-' + totalRows + ' \u05E9\u05D5\u05E8\u05D5\u05EA';
      },
      formatSearch: function formatSearch() {
        return 'חיפוש';
      },
      formatNoMatches: function formatNoMatches() {
        return 'לא נמצאו רשומות תואמות';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'הסתר/הצג מספור דפים';
      },
      formatRefresh: function formatRefresh() {
        return 'רענן';
      },
      formatToggle: function formatToggle() {
        return 'החלף תצוגה';
      },
      formatColumns: function formatColumns() {
        return 'עמודות';
      },
      formatAllRows: function formatAllRows() {
        return 'הכל';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL']);
  })(jQuery);
});