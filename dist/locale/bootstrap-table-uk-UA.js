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
        global.bootstrapTableUkUA = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Ukrainian translation
     * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['uk-UA'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Завантаження, будь ласка, зачекайте...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' записів на сторінку';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Показано з ' + pageFrom + ' по ' + pageTo + '. Всього: ' + totalRows;
            },
            formatSearch: function formatSearch() {
                return 'Пошук';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Не знайдено жодного запису';
            },
            formatRefresh: function formatRefresh() {
                return 'Оновити';
            },
            formatToggle: function formatToggle() {
                return 'Змінити';
            },
            formatColumns: function formatColumns() {
                return 'Стовпці';
            },
            formatClearFilters: function formatClearFilters() {
                return 'Очистити фільтри';
            },
            formatMultipleSort: function formatMultipleSort() {
                return 'Сортування за кількома стовпцями';
            },
            formatAddLevel: function formatAddLevel() {
                return 'Додати рівень';
            },
            formatDeleteLevel: function formatDeleteLevel() {
                return 'Видалити рівень';
            },
            formatColumn: function formatColumn() {
                return 'Стовпець';
            },
            formatOrder: function formatOrder() {
                return 'Порядок';
            },
            formatSortBy: function formatSortBy() {
                return 'Сортувати за';
            },
            formatThenBy: function formatThenBy() {
                return 'потім за';
            },
            formatSort: function formatSort() {
                return 'Сортувати';
            },
            formatCancel: function formatCancel() {
                return 'Скасувати';
            },
            formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
                return 'Дублювання стовпців!';
            },
            formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
                return 'Видаліть, будь ласка, дублюючий стовпець, або замініть його на інший.';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA']);
    })(jQuery);
});