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
    global.bootstrapTableNbNO = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table norwegian translation
   * Author: Jim Nordbø, jim@nordb.no
   */
  (function ($) {
    $.fn.bootstrapTable.locales['nb-NO'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Oppdaterer, vennligst vent...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' poster pr side';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Viser ' + pageFrom + ' til ' + pageTo + ' av ' + totalRows + ' rekker';
      },
      formatSearch: function formatSearch() {
        return 'Søk';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Ingen poster funnet';
      },
      formatRefresh: function formatRefresh() {
        return 'Oppdater';
      },
      formatToggle: function formatToggle() {
        return 'Endre';
      },
      formatColumns: function formatColumns() {
        return 'Kolonner';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nb-NO']);
  })(jQuery);
});