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
        global.bootstrapTableZhTW = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Chinese translation
     * Author: Zhixin Wen<wenzhixin2010@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['zh-TW'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return '正在努力地載入資料，請稍候……';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return '每頁顯示 ' + pageNumber + ' 項記錄';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return '顯示第 ' + pageFrom + ' 到第 ' + pageTo + ' 項記錄，總共 ' + totalRows + ' 項記錄';
            },
            formatSearch: function formatSearch() {
                return '搜尋';
            },
            formatNoMatches: function formatNoMatches() {
                return '沒有找到符合的結果';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return '隱藏/顯示分頁';
            },
            formatRefresh: function formatRefresh() {
                return '重新整理';
            },
            formatToggle: function formatToggle() {
                return '切換';
            },
            formatColumns: function formatColumns() {
                return '列';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW']);
    })(jQuery);
});