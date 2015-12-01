/**
 * Bootstrap Table Dutch translation
 * Author: Your Name <info@a2hankes.nl>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['nl-NL'] = {
        formatLoadingMessage: function () {
            return 'Laden, even geduld...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' records per pagina';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Toon ' + pageFrom + ' tot ' + pageTo + ' van ' + totalRows + ' records';
        },
        formatSearch: function () {
            return 'Zoeken';
        },
        formatNoMatches: function () {
            return 'Geen resultaten gevonden';
        },
	formatPaginationSwitch: function () {
            return 'Verberg/Toon paginatie';
        },
        formatRefresh: function () {
            return 'Verversen';
        },
        formatToggle: function () {
            return 'Wisselen';
        },
        formatColumns: function () {
            return ' Kolommen';
        },
        formatAllRows: function () {
            return 'Allemaal';
        },
        formatExport: function () {
            return 'Exporteer data';
        },
        formatClearFilters: function () {
            return 'Verwijder filters';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL']);

})(jQuery);
