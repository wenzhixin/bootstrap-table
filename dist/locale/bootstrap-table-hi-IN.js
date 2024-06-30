(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Hindi translation
   * Author: Saurabh Sharma <saurabhsharma2u@gmail.com>
   */

  $.fn.bootstrapTable.locales['hi-IN'] = {
    formatCopyRows: function formatCopyRows() {
      return 'पंक्तियों की कॉपी करें';
    },
    formatPrint: function formatPrint() {
      return 'प्रिंट';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'लोड हो रहा है कृपया प्रतीक्षा करें';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " \u092A\u094D\u0930\u0924\u093F \u092A\u0943\u0937\u094D\u0920 \u092A\u0902\u0915\u094D\u0924\u093F\u092F\u093E\u0901");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "".concat(pageFrom, " - ").concat(pageTo, " \u092A\u0915\u094D\u0924\u093F\u092F\u093E ").concat(totalRows, " \u092E\u0947\u0902 \u0938\u0947 ( ").concat(totalNotFiltered, " \u092A\u0915\u094D\u0924\u093F\u092F\u093E)");
      }
      return "".concat(pageFrom, " - ").concat(pageTo, " \u092A\u0915\u094D\u0924\u093F\u092F\u093E ").concat(totalRows, " \u092E\u0947\u0902 \u0938\u0947");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'पिछला पृष्ठ';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "".concat(page, " \u092A\u0943\u0937\u094D\u0920 \u092A\u0930");
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'अगला पृष्ठ';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "".concat(totalRows, " \u092A\u0902\u0915\u094D\u0924\u093F\u092F\u093E\u0902");
    },
    formatClearSearch: function formatClearSearch() {
      return 'सर्च क्लिअर करें';
    },
    formatSearch: function formatSearch() {
      return 'सर्च';
    },
    formatNoMatches: function formatNoMatches() {
      return 'मेल खाते रिकॉर्ड नही मिले';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'छुपाओ/दिखाओ पृष्ठ संख्या';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'दिखाओ पृष्ठ संख्या';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'छुपाओ पृष्ठ संख्या';
    },
    formatRefresh: function formatRefresh() {
      return 'रिफ्रेश';
    },
    formatToggleOn: function formatToggleOn() {
      return 'कार्ड दृश्य दिखाएं';
    },
    formatToggleOff: function formatToggleOff() {
      return 'कार्ड दृश्य छुपाएं';
    },
    formatColumns: function formatColumns() {
      return 'कॉलम';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'टॉगल आल';
    },
    formatFullscreen: function formatFullscreen() {
      return 'पूर्ण स्क्रीन';
    },
    formatAllRows: function formatAllRows() {
      return 'सब';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'ऑटो रिफ्रेश';
    },
    formatExport: function formatExport() {
      return 'एक्सपोर्ट डाटा';
    },
    formatJumpTo: function formatJumpTo() {
      return 'जाओ';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'एडवांस सर्च';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'बंद करे';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'छुपाओ/दिखाओ कंट्रोल्स';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'छुपाओ कंट्रोल्स';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'दिखाओ कंट्रोल्स';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hi-IN']);

}));
