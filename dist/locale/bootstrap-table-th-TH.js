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
        global.bootstrapTableThTH = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Thai translation
     * Author: Monchai S.<monchais@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['th-TH'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'กำลังโหลดข้อมูล, กรุณารอสักครู่...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' รายการต่อหน้า';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'รายการที่ ' + pageFrom + ' ถึง ' + pageTo + ' จากทั้งหมด ' + totalRows + ' รายการ';
            },
            formatSearch: function formatSearch() {
                return 'ค้นหา';
            },
            formatNoMatches: function formatNoMatches() {
                return 'ไม่พบรายการที่ค้นหา !';
            },
            formatRefresh: function formatRefresh() {
                return 'รีเฟรส';
            },
            formatToggle: function formatToggle() {
                return 'สลับมุมมอง';
            },
            formatColumns: function formatColumns() {
                return 'คอลัมน์';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH']);
    })(jQuery);
});