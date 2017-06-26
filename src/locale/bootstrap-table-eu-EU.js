/**
 * Bootstrap Table Basque (Basque Country) translation
 * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['eu-EU'] = {
        formatLoadingMessage: function () {
            return 'Itxaron mesedez...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' emaitza orriko.';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return totalRows + ' erregistroetatik ' + pageFrom + 'etik ' + pageTo +'erakoak erakusten.';
        },
        formatSearch: function () {
            return 'Bilatu';
        },
        formatNoMatches: function () {
            return 'Ez da emaitzarik aurkitu';
        },
        formatPaginationSwitch: function () {
            return 'Ezkutatu/Erakutsi orrikatzea';
        },
        formatRefresh: function () {
            return 'Eguneratu';
        },
        formatToggle: function () {
            return 'Ezkutatu/Erakutsi';
        },
        formatColumns: function () {
            return 'Zutabeak';
        },
        formatAllRows: function () {
            return 'Guztiak';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['eu-EU']);

})(jQuery);
