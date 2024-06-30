(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Bulgarian translation
   * Author: Mikhail Kalatchev <kalatchev[at]gmail.com>
   */

  $.fn.bootstrapTable.locales['bg-BG'] = $.fn.bootstrapTable.locales['bg'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Копиране на редове';
    },
    formatPrint: function formatPrint() {
      return 'Печат';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Зареждане, моля изчакайте';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " \u0440\u0435\u0434\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438 \u0440\u0435\u0434\u043E\u0432\u0435 \u043E\u0442 ".concat(pageFrom, " \u0434\u043E ").concat(pageTo, " \u043E\u0442 ").concat(totalRows, " (\u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u0438 \u043E\u0442 \u043E\u0431\u0449\u043E ").concat(totalNotFiltered, ")");
      }
      return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438 \u0440\u0435\u0434\u043E\u0432\u0435 \u043E\u0442 ".concat(pageFrom, " \u0434\u043E ").concat(pageTo, " \u043E\u0442 \u043E\u0431\u0449\u043E ").concat(totalRows);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'предишна страница';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u0434\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'следваща страница';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438 ".concat(totalRows, " \u0440\u0435\u0434\u0430");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Изчистване на търсенето';
    },
    formatSearch: function formatSearch() {
      return 'Търсене';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Не са намерени съвпадащи записи';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Скриване/Показване на странициране';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Показване на странициране';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Скриване на странициране';
    },
    formatRefresh: function formatRefresh() {
      return 'Обновяване';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Показване на изглед карта';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Скриване на изглед карта';
    },
    formatColumns: function formatColumns() {
      return 'Колони';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Превключване на всички';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Цял екран';
    },
    formatAllRows: function formatAllRows() {
      return 'Всички';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Автоматично обновяване';
    },
    formatExport: function formatExport() {
      return 'Експорт на данни';
    },
    formatJumpTo: function formatJumpTo() {
      return 'ОТИДИ';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Разширено търсене';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Затваряне';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Скрива/показва контроли';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Скрива контроли';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Показва контроли';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['bg-BG']);

}));
