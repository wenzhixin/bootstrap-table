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
    global.bootstrapTableHrHR = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
  * Bootstrap Table Croatian translation
  * Author: Petra Štrbenac (petra.strbenac@gmail.com)
  * Author: Petra Štrbenac (petra.strbenac@gmail.com)
  */
  (function ($) {
    $.fn.bootstrapTable.locales['hr-HR'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Molimo pričekajte';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' broj zapisa po stranici';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Prikazujem ' + pageFrom + '. - ' + pageTo + '. od ukupnog broja zapisa ' + totalRows;
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Showing ' + totalRows + ' rows';
      },
      formatSearch: function formatSearch() {
        return 'Pretraži';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Nije pronađen niti jedan zapis';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Prikaži/sakrij stranice';
      },
      formatRefresh: function formatRefresh() {
        return 'Osvježi';
      },
      formatToggle: function formatToggle() {
        return 'Promijeni prikaz';
      },
      formatColumns: function formatColumns() {
        return 'Kolone';
      },
      formatFullscreen: function formatFullscreen() {
        return 'Fullscreen';
      },
      formatAllRows: function formatAllRows() {
        return 'Sve';
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

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR']);
  })(jQuery);
});