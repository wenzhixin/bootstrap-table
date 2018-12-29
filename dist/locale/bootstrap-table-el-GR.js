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
        global.bootstrapTableElGR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Greek translation
     * Author: giannisdallas
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['el-GR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Φορτώνει, παρακαλώ περιμένετε...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' αποτελέσματα ανά σελίδα';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Εμφανίζονται από την ' + pageFrom + ' ως την ' + pageTo + ' από σύνολο ' + totalRows + ' σειρών';
            },
            formatSearch: function formatSearch() {
                return 'Αναζητήστε';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Δεν βρέθηκαν αποτελέσματα';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR']);
    })(jQuery);
});