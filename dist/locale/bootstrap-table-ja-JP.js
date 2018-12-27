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
        global.bootstrapTableJaJP = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Japanese translation
     * Author: Azamshul Azizy <azamshul@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ja-JP'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return '読み込み中です。少々お待ちください。';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return 'ページ当たり最大' + pageNumber + '件';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return '全' + totalRows + '件から、' + pageFrom + 'から' + pageTo + '件目まで表示しています';
            },
            formatSearch: function formatSearch() {
                return '検索';
            },
            formatNoMatches: function formatNoMatches() {
                return '該当するレコードが見つかりません';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'ページ数を表示・非表示';
            },
            formatRefresh: function formatRefresh() {
                return '更新';
            },
            formatToggle: function formatToggle() {
                return 'トグル';
            },
            formatColumns: function formatColumns() {
                return '列';
            },
            formatAllRows: function formatAllRows() {
                return 'すべて';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ja-JP']);
    })(jQuery);
});