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
    global.bootstrapTablePlPL = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Polish translation
   * Author: zergu <michal.zagdan @ gmail com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['pl-PL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Ładowanie, proszę czekać...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' rekord\xF3w na stron\u0119';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Wy\u015Bwietlanie rekord\xF3w od ' + pageFrom + ' do ' + pageTo + ' z ' + totalRows;
      },
      formatSearch: function formatSearch() {
        return 'Szukaj';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Niestety, nic nie znaleziono';
      },
      formatRefresh: function formatRefresh() {
        return 'Odśwież';
      },
      formatToggle: function formatToggle() {
        return 'Przełącz';
      },
      formatColumns: function formatColumns() {
        return 'Kolumny';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL']);
  })(jQuery);
});