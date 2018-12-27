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
        global.bootstrapTableHeIL = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Hebrew translation
     * Author: legshooter
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['he-IL'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'טוען, נא להמתין...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' שורות בעמוד';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'מציג ' + pageFrom + ' עד ' + pageTo + ' מ-' + totalRows + ' שורות';
            },
            formatSearch: function formatSearch() {
                return 'חיפוש';
            },
            formatNoMatches: function formatNoMatches() {
                return 'לא נמצאו רשומות תואמות';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'הסתר/הצג מספור דפים';
            },
            formatRefresh: function formatRefresh() {
                return 'רענן';
            },
            formatToggle: function formatToggle() {
                return 'החלף תצוגה';
            },
            formatColumns: function formatColumns() {
                return 'עמודות';
            },
            formatAllRows: function formatAllRows() {
                return 'הכל';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL']);
    })(jQuery);
});