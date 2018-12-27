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
        global.bootstrapTableArSA = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table English translation
     * Author: Zhixin Wen<wenzhixin2010@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ar-SA'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'جاري التحميل, يرجى الإنتظار...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' سجل لكل صفحة';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'الظاهر ' + pageFrom + ' إلى ' + pageTo + ' من ' + totalRows + ' سجل';
            },
            formatSearch: function formatSearch() {
                return 'بحث';
            },
            formatNoMatches: function formatNoMatches() {
                return 'لا توجد نتائج مطابقة للبحث';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'إخفاء\إظهار ترقيم الصفحات';
            },
            formatRefresh: function formatRefresh() {
                return 'تحديث';
            },
            formatToggle: function formatToggle() {
                return 'تغيير';
            },
            formatColumns: function formatColumns() {
                return 'أعمدة';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA']);
    })(jQuery);
});