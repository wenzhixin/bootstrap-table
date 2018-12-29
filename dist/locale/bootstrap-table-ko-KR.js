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
        global.bootstrapTableKoKR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Korean translation
     * Author: Yi Tae-Hyeong (jsonobject@gmail.com)
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ko-KR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return '데이터를 불러오는 중입니다...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return '페이지 당 ' + pageNumber + '개 데이터 출력';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return '전체 ' + totalRows + '개 중 ' + pageFrom + '~' + pageTo + '번째 데이터 출력,';
            },
            formatSearch: function formatSearch() {
                return '검색';
            },
            formatNoMatches: function formatNoMatches() {
                return '조회된 데이터가 없습니다.';
            },
            formatRefresh: function formatRefresh() {
                return '새로 고침';
            },
            formatToggle: function formatToggle() {
                return '전환';
            },
            formatColumns: function formatColumns() {
                return '컬럼 필터링';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ko-KR']);
    })(jQuery);
});