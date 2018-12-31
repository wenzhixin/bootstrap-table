(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery);
    global.bootstrapTableArSA = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['ar-SA'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'جاري التحميل, يرجى الإنتظار...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' \u0633\u062C\u0644 \u0644\u0643\u0644 \u0635\u0641\u062D\u0629';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return '\u0627\u0644\u0638\u0627\u0647\u0631 ' + pageFrom + ' \u0625\u0644\u0649 ' + pageTo + ' \u0645\u0646 ' + totalRows + ' \u0633\u062C\u0644';
    },
    formatSearch: function formatSearch() {
      return 'بحث';
    },
    formatNoMatches: function formatNoMatches() {
      return 'لا توجد نتائج مطابقة للبحث';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      /* eslint-disable no-useless-escape */
      return 'إخفاء\إظهار ترقيم الصفحات';
    },
    formatRefresh: function formatRefresh() {
      return 'تحديث';
    },
    formatToggle: function formatToggle() {
      return 'تغيير';
    },
    formatColumns: function formatColumns() {
      return 'أعمدة';
    }
  }; /**
      * Bootstrap Table English translation
      * Author: Zhixin Wen<wenzhixin2010@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['ar-SA']);
});