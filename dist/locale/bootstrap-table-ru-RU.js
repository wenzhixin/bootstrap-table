(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Russian translation
   * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
   */

  $.fn.bootstrapTable.locales['ru-RU'] = $.fn.bootstrapTable.locales['ru'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Скопировать строки';
    },
    formatPrint: function formatPrint() {
      return 'Печать';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Пожалуйста, подождите, идёт загрузка';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0438\u0437 ").concat(totalRows, " (\u043E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043E, \u0432\u0441\u0435\u0433\u043E \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ").concat(totalNotFiltered, " \u0437\u0430\u043F\u0438\u0441\u0435\u0439)");
      }
      return "\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0438\u0437 ").concat(totalRows);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'предыдущая страница';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'следующая страница';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E ".concat(totalRows, " \u0441\u0442\u0440\u043E\u043A");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Очистить фильтры';
    },
    formatSearch: function formatSearch() {
      return 'Поиск';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ничего не найдено';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Скрыть/Показать постраничную навигацию';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Показать постраничную навигацию';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Скрыть постраничную навигацию';
    },
    formatRefresh: function formatRefresh() {
      return 'Обновить';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Показать записи в виде карточек';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Табличный режим просмотра';
    },
    formatColumns: function formatColumns() {
      return 'Колонки';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Выбрать все';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Полноэкранный режим';
    },
    formatAllRows: function formatAllRows() {
      return 'Все';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Автоматическое обновление';
    },
    formatExport: function formatExport() {
      return 'Экспортировать данные';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Стр.';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Расширенный поиск';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Закрыть';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Скрыть/Показать панель инструментов';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Скрыть панель инструментов';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Показать панель инструментов';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU']);

}));
