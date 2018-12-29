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
        global.bootstrapTableSkSK = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Slovak translation
     * Author: Jozef Dúc<jozef.d13@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['sk-SK'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Prosím čakajte ...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' záznamov na stranu';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Zobrazená ' + pageFrom + '. - ' + pageTo + '. položka z celkových ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Vyhľadávanie';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Nenájdená žiadna vyhovujúca položka';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Skry/Zobraz stránkovanie';
            },
            formatRefresh: function formatRefresh() {
                return 'Obnoviť';
            },
            formatToggle: function formatToggle() {
                return 'Prepni';
            },
            formatColumns: function formatColumns() {
                return 'Stĺpce';
            },
            formatAllRows: function formatAllRows() {
                return 'Všetky';
            },
            formatExport: function formatExport() {
                return 'Exportuj dáta';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Odstráň filtre';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK']);
    })(jQuery);
});