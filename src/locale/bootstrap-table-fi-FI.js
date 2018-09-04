/**
 * Bootstrap Table Finnish translations
 * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['fi-FI'] = {
        formatLoadingMessage: function () {
            return 'Ladataan, ole hyvä ja odota...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' riviä sivulla';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Näytetään rivit ' + pageFrom + ' - ' + pageTo + ' / ' + totalRows;
        },
        formatSearch: function () {
            return 'Hae';
        },
        formatNoMatches: function () {
            return 'Hakuehtoja vastaavia tuloksia ei löytynyt';
        },
        formatPaginationSwitch: function () {
            return 'Näytä/Piilota sivutus';
        },
        formatRefresh: function () {
            return 'Päivitä';
        },
        formatToggle: function () {
            return 'Valitse';
        },
        formatColumns: function () {
            return 'Sarakkeet';
        },
        formatAllRows: function () {
            return 'Kaikki';
        },
        formatExport: function () {
            return 'Vie tiedot';
        },
        formatClearFilters: function () {
            return 'Poista suodattimet';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI']);

})(jQuery);
