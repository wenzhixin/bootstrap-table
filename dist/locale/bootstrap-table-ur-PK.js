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
        global.bootstrapTableUrPK = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Urdu translation
     * Author: Malik <me@malikrizwan.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ur-PK'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'براۓ مہربانی انتظار کیجئے';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' ریکارڈز فی صفہ ';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'دیکھیں ' + pageFrom + ' سے ' + pageTo + ' کے ' + totalRows + 'ریکارڈز';
            },
            formatSearch: function formatSearch() {
                return 'تلاش';
            },
            formatNoMatches: function formatNoMatches() {
                return 'کوئی ریکارڈ نہیں ملا';
            },
            formatRefresh: function formatRefresh() {
                return 'تازہ کریں';
            },
            formatToggle: function formatToggle() {
                return 'تبدیل کریں';
            },
            formatColumns: function formatColumns() {
                return 'کالم';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK']);
    })(jQuery);
});