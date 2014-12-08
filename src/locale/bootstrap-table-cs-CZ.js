/**
 * Bootstrap Table Czech translation
 * Author: Lukas Kral (monarcha@seznam.cz)
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['cs-CZ'] = {
        formatLoadingMessage: function () {
            return 'Čekejte, prosím…';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' položek na stránku';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Zobrazena ' + pageFrom + '. - ' + pageTo + '. položka z celkových ' + totalRows;
        },
        formatSearch: function () {
            return 'Vyhledávání';
        },
        formatNoMatches: function () {
            return 'Nenalezena žádná vyhovující položka';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ']);

})(jQuery);