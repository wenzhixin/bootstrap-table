/**
 * Bootstrap Table dabush translation
 * Author: Your Name Jan Borup Coyle, github@coyle.dk
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        formatLoadingMessage: function () {
            return 'Indlæser, vent venligst…';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' poster pr side';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Viser ' + pageFrom + ' til ' + pageTo + ' af ' + totalRows + ' rækker';
        },
        formatSearch: function () {
            return 'Søg'
        },
        formatNoMatches: function () {
            return 'Ingen poster fundet';
        }
    });
})(jQuery);