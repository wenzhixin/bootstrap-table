(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Ukrainian translation
   * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
   */

  $.fn.bootstrapTable.locales['uk-UA'] = $.fn.bootstrapTable.locales['uk'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Скопіювати рядки';
    },
    formatPrint: function formatPrint() {
      return 'Друк';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Завантаження, будь ласка, зачекайте';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " \u0440\u044F\u0434\u043A\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E \u0440\u044F\u0434\u043A\u0438 \u0437 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0437 ").concat(totalRows, " \u0437\u0430\u0433\u0430\u043B\u043E\u043C (\u0432\u0456\u0434\u0444\u0456\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043E \u0437 ").concat(totalNotFiltered, " \u0440\u044F\u0434\u043A\u0456\u0432)");
      }
      return "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E \u0440\u044F\u0434\u043A\u0438 \u0437 ".concat(pageFrom, " \u043F\u043E ").concat(pageTo, " \u0437 ").concat(totalRows, " \u0437\u0430\u0433\u0430\u043B\u043E\u043C");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'попередня сторінка';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u0434\u043E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'наступна сторінка';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E ".concat(totalRows, " \u0440\u044F\u0434\u043A\u0456\u0432");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Скинути фільтри';
    },
    formatSearch: function formatSearch() {
      return 'Пошук';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Не знайдено жодного запису';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Сховати/Відобразити пагінацію';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Відобразити пагінацію';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Сховати пагінацію';
    },
    formatRefresh: function formatRefresh() {
      return 'Оновити';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Відобразити у форматі карток';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Вимкнути формат карток';
    },
    formatColumns: function formatColumns() {
      return 'Стовпці';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Переключити усі';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Повноекранний режим';
    },
    formatAllRows: function formatAllRows() {
      return 'Усі';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Автооновлення';
    },
    formatExport: function formatExport() {
      return 'Експортувати дані';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Швидкий перехід до';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Розширений пошук';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Закрити';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Сховати/Відобразити елементи керування';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Сховати елементи керування';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Відобразити елементи керування';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA']);

}));
