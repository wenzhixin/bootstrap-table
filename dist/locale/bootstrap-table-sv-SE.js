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
    global.bootstrapTableSvSE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Swedish translation
   * Author: C Bratt <bratt@inix.se>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['sv-SE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Laddar, vänligen vänta...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rader per sida';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Visa ' + pageFrom + ' till ' + pageTo + ' av ' + totalRows + ' rader';
      },
      formatSearch: function formatSearch() {
        return 'Sök';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Inga matchande resultat funna.';
      },
      formatRefresh: function formatRefresh() {
        return 'Uppdatera';
      },
      formatToggle: function formatToggle() {
        return 'Skifta';
      },
      formatColumns: function formatColumns() {
        return 'kolumn';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sv-SE']);
  })(jQuery);
});