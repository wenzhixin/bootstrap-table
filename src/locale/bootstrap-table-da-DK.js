/**
 * Bootstrap Table danish translation
 * Author: Your Name Jan Borup Coyle, github@coyle.dk
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['da-DK'] = {
        formatLoadingMessage: function () {
            return 'Indlæser, vent venligst...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' poster pr side';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Viser ' + pageFrom + ' til ' + pageTo + ' af ' + totalRows + ' række' + ((totalRows > 1) ? 'r' : '');
        },
        formatDetailPagination: function (totalRows) {
            return 'Viser ' + totalRows + ' række' + ((totalRows > 1) ? 'r' : '');
        },
        formatSearch: function () {
            return 'Søg';
        },
        formatNoMatches: function () {
            return 'Ingen poster fundet';
        },
        formatPaginationSwitch: function () {
            return 'Skjul/vis nummerering';
        },
        formatRefresh: function () {
            return 'Opdater';
        },
        formatToggle: function () {
            return 'Skift';
        },
        formatColumns: function () {
            return 'Kolonner';
        },
        formatAllRows: function () {
          return 'Alle';
        },
        formatExport: function () {
          return 'Eksporter';
        },
        formatClearFilters: function () {
          return 'Ryd filtre';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['da-DK']);

})(jQuery);
