(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Serbian Cyrilic RS translation
   * Author: Vladimir Kanazir (vladimir@kanazir.com)
   */

  $.fn.bootstrapTable.locales['sr-Cyrl-RS'] = $.fn.bootstrapTable.locales['sr'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Copy Rows';
    },
    formatPrint: function formatPrint() {
      return 'Print';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Молим сачекај';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " \u0440\u0435\u0434\u043E\u0432\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E ".concat(pageFrom, ". - ").concat(pageTo, ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 ").concat(totalRows, " (\u0444\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u043D\u043E \u043E\u0434 ").concat(totalNotFiltered, ")");
      }
      return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E ".concat(pageFrom, ". - ").concat(pageTo, ". \u043E\u0434 \u0443\u043A\u0443\u043F\u043D\u043E\u0433 \u0431\u0440\u043E\u0458\u0430 \u0440\u0435\u0434\u043E\u0432\u0430 ").concat(totalRows);
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'претходна страна';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0443 ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'следећа страна';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E ".concat(totalRows, " \u0440\u0435\u0434\u043E\u0432\u0430");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Обриши претрагу';
    },
    formatSearch: function formatSearch() {
      return 'Пронађи';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Није пронађен ни један податак';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Прикажи/сакриј пагинацију';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Прикажи пагинацију';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Сакриј пагинацију';
    },
    formatRefresh: function formatRefresh() {
      return 'Освежи';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Прикажи картице';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Сакриј картице';
    },
    formatColumns: function formatColumns() {
      return 'Колоне';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Прикажи/сакриј све';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Цео екран';
    },
    formatAllRows: function formatAllRows() {
      return 'Све';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Аутоматско освежавање';
    },
    formatExport: function formatExport() {
      return 'Извези податке';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Иди';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Напредна претрага';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Затвори';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Hide/Show controls';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Hide controls';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Show controls';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Cyrl-RS']);

}));
