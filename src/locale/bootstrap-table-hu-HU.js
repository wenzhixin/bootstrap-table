/**
 * Bootstrap Table Hungarian translation
 * Author: Nagy Gergely <info@nagygergely.eu>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['hu-HU'] = {
        formatLoadingMessage: function () {
            return 'Betöltés, kérem várjon…';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' rekord per oldal';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Megjelenítve ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows + ' összesen';
        },
        formatSearch: function () {
            return 'Keresés';
        },
        formatNoMatches: function () {
            return 'Nincs találat';
        },
        formatRefresh: function () {
            return 'Frissítés';
        },
        formatToggle: function () {
            return 'Váltás';
        },
        formatColumns: function () {
            return 'Oszlopok';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hu-HU']);

})(jQuery);
