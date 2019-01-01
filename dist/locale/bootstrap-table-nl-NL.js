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
    global.bootstrapTableNlNL = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Dutch translation
   * Author: Your Name <info@a2hankes.nl>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['nl-NL'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Laden, even geduld...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' records per pagina';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Toon ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' record' + (totalRows > 1 ? 's' : '');
      },
      formatDetailPagination: function formatDetailPagination(totalRows) {
        return 'Toon ' + totalRows + ' record' + (totalRows > 1 ? 's' : '');
      },
      formatSearch: function formatSearch() {
        return 'Zoeken';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Geen resultaten gevonden';
      },
      formatRefresh: function formatRefresh() {
        return 'Vernieuwen';
      },
      formatToggle: function formatToggle() {
        return 'Omschakelen';
      },
      formatColumns: function formatColumns() {
        return 'Kolommen';
      },
      formatAllRows: function formatAllRows() {
        return 'Alle';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Verberg/Toon paginatie';
      },
      formatExport: function formatExport() {
        return 'Exporteer data';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Verwijder filters';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL']);
  })(jQuery);
});