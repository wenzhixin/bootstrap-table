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
    $.fn.bootstrapTable.locales['uk-UA'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Завантаження, будь ласка, зачекайте...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' \u0437\u0430\u043F\u0438\u0441\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return '\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0437 ' + pageFrom + ' \u043F\u043E ' + pageTo + '. \u0412\u0441\u044C\u043E\u0433\u043E: ' + totalRows;
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