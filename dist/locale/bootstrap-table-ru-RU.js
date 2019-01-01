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
    $.fn.bootstrapTable.locales['ru-RU'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Пожалуйста, подождите, идёт загрузка...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ' + pageFrom + ' \u043F\u043E ' + pageTo + ' \u0438\u0437 ' + totalRows;
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