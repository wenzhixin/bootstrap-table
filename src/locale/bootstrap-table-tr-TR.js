/**
 * Bootstrap Table Turkish translation
 * Author: Emin Şen
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        formatLoadingMessage: function () {
            return 'Yükleniyor, lütfen bekleyin…';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' kayıt sayfa başına';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return totalRows + ' kayıttan ' + pageFrom + ' ile ' + pageTo + ' arası gösteriliyor';
        },
        formatSearch: function () {
            return 'Ara';
        },
        formatNoMatches: function () {
            return 'Eşleşen kayıt bulunamadı';
        }
    });
})(jQuery);
