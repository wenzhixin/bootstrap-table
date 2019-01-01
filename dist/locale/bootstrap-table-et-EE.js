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
    global.bootstrapTableEtEE = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Estonian translation
   * Author: kristjan@logist.it>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['et-EE'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Päring käib, palun oota...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rida lehe kohta';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'N\xE4itan tulemusi ' + pageFrom + ' kuni ' + pageTo + ' - kokku ' + totalRows + ' tulemust';
      },
      formatSearch: function formatSearch() {
        return 'Otsi';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Päringu tingimustele ei vastanud ühtegi tulemust';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Näita/Peida lehtedeks jagamine';
      },
      formatRefresh: function formatRefresh() {
        return 'Värskenda';
      },
      formatToggle: function formatToggle() {
        return 'Lülita';
      },
      formatColumns: function formatColumns() {
        return 'Veerud';
      },
      formatAllRows: function formatAllRows() {
        return 'Kõik';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['et-EE']);
  })(jQuery);
});