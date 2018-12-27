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
        global.bootstrapTableKaGE = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Georgian translation
     * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ka-GE'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'იტვირთება, გთხოვთ მოიცადოთ...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' ჩანაწერი თითო გვერდზე';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'ნაჩვენებია ' + pageFrom + '-დან ' + pageTo + '-მდე ჩანაწერი ჯამური ' + totalRows + '-დან';
            },
            formatSearch: function formatSearch() {
                return 'ძებნა';
            },
            formatNoMatches: function formatNoMatches() {
                return 'მონაცემები არ არის';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'გვერდების გადამრთველის დამალვა/გამოჩენა';
            },
            formatRefresh: function formatRefresh() {
                return 'განახლება';
            },
            formatToggle: function formatToggle() {
                return 'ჩართვა/გამორთვა';
            },
            formatColumns: function formatColumns() {
                return 'სვეტები';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE']);
    })(jQuery);
});