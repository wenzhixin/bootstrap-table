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
    global.bootstrapTableUrPK = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['ur-PK'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'براۓ مہربانی انتظار کیجئے';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' \u0631\u06CC\u06A9\u0627\u0631\u0688\u0632 \u0641\u06CC \u0635\u0641\u06C1 ';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return '\u062F\u06CC\u06A9\u06BE\u06CC\u06BA ' + pageFrom + ' \u0633\u06D2 ' + pageTo + ' \u06A9\u06D2 ' + totalRows + '\u0631\u06CC\u06A9\u0627\u0631\u0688\u0632';
    },
    formatSearch: function formatSearch() {
      return 'تلاش';
    },
    formatNoMatches: function formatNoMatches() {
      return 'کوئی ریکارڈ نہیں ملا';
    },
    formatRefresh: function formatRefresh() {
      return 'تازہ کریں';
    },
    formatToggle: function formatToggle() {
      return 'تبدیل کریں';
    },
    formatColumns: function formatColumns() {
      return 'کالم';
    }
  }; /**
      * Bootstrap Table Urdu translation
      * Author: Malik <me@malikrizwan.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['ur-PK']);
});