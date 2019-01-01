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
    global.bootstrapTableAfZA = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Afrikaans translation
   * Author: Phillip Kruger <phillip.kruger@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['af-ZA'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Besig om te laai, wag asseblief ...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekords per bladsy';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Resultate ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' rye';
      },
      formatSearch: function formatSearch() {
        return 'Soek';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Geen rekords gevind nie';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Wys/verberg bladsy nummering';
      },
      formatRefresh: function formatRefresh() {
        return 'Herlaai';
      },
      formatToggle: function formatToggle() {
        return 'Wissel';
      },
      formatColumns: function formatColumns() {
        return 'Kolomme';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA']);
  })(jQuery);
});