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
        global.bootstrapTableRuRU = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Russian translation
     * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['ru-RU'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Пожалуйста, подождите, идёт загрузка...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' записей на страницу';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Записи с ' + pageFrom + ' по ' + pageTo + ' из ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Поиск';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Ничего не найдено';
            },
            formatRefresh: function formatRefresh() {
                return 'Обновить';
            },
            formatToggle: function formatToggle() {
                return 'Переключить';
            },
            formatColumns: function formatColumns() {
                return 'Колонки';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Очистить фильтры';
            },
            formatMultipleSort: function formatMultipleSort() {
                return 'Множественная сортировка';
            },
            formatAddLevel: function formatAddLevel() {
                return 'Добавить уровень';
            },
            formatDeleteLevel: function formatDeleteLevel() {
                return 'Удалить уровень';
            },
            formatColumn: function formatColumn() {
                return 'Колонка';
            },
            formatOrder: function formatOrder() {
                return 'Порядок';
            },
            formatSortBy: function formatSortBy() {
                return 'Сортировать по';
            },
            formatThenBy: function formatThenBy() {
                return 'затем по';
            },
            formatSort: function formatSort() {
                return 'Сортировать';
            },
            formatCancel: function formatCancel() {
                return 'Отмена';
            },
            formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
                return 'Дублирование колонок!';
            },
            formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
                return 'Удалите, пожалуйста, дублирующую колонку, или замените ее на другую.';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU']);
    })(jQuery);
});