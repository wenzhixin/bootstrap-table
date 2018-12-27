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
        global.bootstrapTableTrTR = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Turkish translation
     * Author: Emin Şen
     * Author: Sercan Cakir <srcnckr@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['tr-TR'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Yükleniyor, lütfen bekleyin...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return 'Sayfa başına ' + pageNumber + ' kayıt.';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return totalRows + ' kayıttan ' + pageFrom + '-' + pageTo + ' arası gösteriliyor.';
            },
            formatSearch: function formatSearch() {
                return 'Ara';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Eşleşen kayıt bulunamadı.';
            },
            formatRefresh: function formatRefresh() {
                return 'Yenile';
            },
            formatToggle: function formatToggle() {
                return 'Değiştir';
            },
            formatColumns: function formatColumns() {
                return 'Sütunlar';
            },
            formatAllRows: function formatAllRows() {
                return 'Tüm Satırlar';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR']);
    })(jQuery);
});