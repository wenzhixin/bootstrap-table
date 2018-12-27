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
        global.bootstrapTableFaIR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Persian translation
     * Author: MJ Vakili <mjv.1989@Gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['fa-IR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'در حال بارگذاری, لطفا صبر کنید...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' رکورد در صفحه';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'نمایش ' + pageFrom + ' تا ' + pageTo + ' از ' + totalRows + ' ردیف';
            },
            formatSearch: function formatSearch() {
                return 'جستجو';
            },
            formatNoMatches: function formatNoMatches() {
                return 'رکوردی یافت نشد.';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'نمایش/مخفی صفحه بندی';
            },
            formatRefresh: function formatRefresh() {
                return 'به روز رسانی';
            },
            formatToggle: function formatToggle() {
                return 'تغییر نمایش';
            },
            formatColumns: function formatColumns() {
                return 'سطر ها';
            },
            formatAllRows: function formatAllRows() {
                return 'همه';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR']);
    })(jQuery);
});