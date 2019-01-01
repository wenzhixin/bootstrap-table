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
    global.bootstrapTableElGR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Greek translation
   * Author: giannisdallas
   */
  (function ($) {
    $.fn.bootstrapTable.locales['el-GR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Φορτώνει, παρακαλώ περιμένετε...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03B1\u03BD\u03AC \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0395\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD ' + pageFrom + ' \u03C9\u03C2 \u03C4\u03B7\u03BD ' + pageTo + ' \u03B1\u03C0\u03CC \u03C3\u03CD\u03BD\u03BF\u03BB\u03BF ' + totalRows + ' \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD';
      },
      formatSearch: function formatSearch() {
        return 'Αναζητήστε';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Δεν βρέθηκαν αποτελέσματα';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR']);
  })(jQuery);
});