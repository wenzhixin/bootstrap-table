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
        global.bootstrapTableZhCN = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Chinese translation
     * Author: Zhixin Wen<wenzhixin2010@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['zh-CN'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return '正在努力地加载数据中，请稍候……';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return '每页显示 ' + pageNumber + ' 条记录';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return '显示第 ' + pageFrom + ' 到第 ' + pageTo + ' 条记录，总共 ' + totalRows + ' 条记录';
            },
            formatSearch: function formatSearch() {
                return '搜索';
            },
            formatNoMatches: function formatNoMatches() {
                return '没有找到匹配的记录';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return '隐藏/显示分页';
            },
            formatRefresh: function formatRefresh() {
                return '刷新';
            },
            formatToggle: function formatToggle() {
                return '切换';
            },
            formatColumns: function formatColumns() {
                return '列';
            },
            formatExport: function formatExport() {
                return '导出数据';
            },
            formatClearFilters: function formatClearFilters() {
                return '清空过滤';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
    })(jQuery);
});