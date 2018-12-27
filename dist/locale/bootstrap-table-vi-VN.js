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
        global.bootstrapTableViVN = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Vietnamese translation
     * Author: Duc N. PHAM <pngduc@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['vi-VN'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Đang tải...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' bản ghi mỗi trang';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Hiển thị từ trang ' + pageFrom + ' đến ' + pageTo + ' của ' + totalRows + ' bảng ghi';
            },
            formatSearch: function formatSearch() {
                return 'Tìm kiếm';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Không có dữ liệu';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN']);
    })(jQuery);
});