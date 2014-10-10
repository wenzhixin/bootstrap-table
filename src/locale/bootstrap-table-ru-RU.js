/**
 * Bootstrap Table Russian translation
 * Author: gnhaku <hello@gnhaku.me>
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        formatLoadingMessage: function () {
            return 'Пожалуйста подождите, идет загрузка…';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' записей на странице';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Показаны записи с ' + pageFrom + ' по ' + pageTo + ' из ' + totalRows;
        },
        formatSearch: function () {
            return 'Поиск';
        },
        formatNoMatches: function () {
            return 'Записи не найдены';
        }
    });
})(jQuery);
