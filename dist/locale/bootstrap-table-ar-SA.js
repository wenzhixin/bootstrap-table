(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Arabic translation
   * Author: Othman Ali Modaes<othman2004_ye@yahoo.com>
   */

  $.fn.bootstrapTable.locales['ar-SA'] = $.fn.bootstrapTable.locales['ar'] = {
    formatCopyRows: function formatCopyRows() {
      return 'نسخ الصفوف';
    },
    formatPrint: function formatPrint() {
      return 'طباعة';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'جارٍ التحميل، يرجى الانتظار...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " \u0635\u0641 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "\u0627\u0644\u0638\u0627\u0647\u0631 ".concat(pageFrom, " \u0625\u0644\u0649 ").concat(pageTo, " \u0645\u0646 ").concat(totalRows, " \u0633\u062C\u0644 ").concat(totalNotFiltered, " \u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0635\u0641\u0648\u0641)");
      }
      return "\u0627\u0644\u0638\u0627\u0647\u0631 ".concat(pageFrom, " \u0625\u0644\u0649 ").concat(pageTo, " \u0645\u0646 ").concat(totalRows, " \u0633\u062C\u0644");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'الصفحة السابقة';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'الصفحة التالية';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u0639\u0631\u0636 ".concat(totalRows, " \u0623\u0639\u0645\u062F\u0629");
    },
    formatClearSearch: function formatClearSearch() {
      return 'مسح مربع البحث';
    },
    formatSearch: function formatSearch() {
      return 'بحث';
    },
    formatNoMatches: function formatNoMatches() {
      return 'لا توجد نتائج مطابقة للبحث';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      /* eslint-disable no-useless-escape */
      return 'إخفاء/إظهار ترقيم الصفحات';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'إظهار ترقيم الصفحات';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'إخفاء ترقيم الصفحات';
    },
    formatRefresh: function formatRefresh() {
      return 'تحديث';
    },
    formatToggleOn: function formatToggleOn() {
      return 'إظهار كبطاقات';
    },
    formatToggleOff: function formatToggleOff() {
      return 'إلغاء البطاقات';
    },
    formatColumns: function formatColumns() {
      return 'أعمدة';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'تبديل الكل';
    },
    formatFullscreen: function formatFullscreen() {
      return 'الشاشة كاملة';
    },
    formatAllRows: function formatAllRows() {
      return 'الكل';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'تحديث تلقائي';
    },
    formatExport: function formatExport() {
      return 'تصدير البيانات';
    },
    formatJumpTo: function formatJumpTo() {
      return 'قفز';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'بحث متقدم';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'إغلاق';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'عرض/إخفاء عناصر التصفية';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'إخفاء عناصر التصفية';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'عرض عناصر التصفية';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA']);

}));
