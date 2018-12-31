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
    global.bootstrapTableSvSE = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['sv-SE'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Laddar, vänligen vänta...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' rader per sida';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Visa ' + pageFrom + ' till ' + pageTo + ' av ' + totalRows + ' rader';
    },
    formatSearch: function formatSearch() {
      return 'Sök';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Inga matchande resultat funna.';
    },
    formatRefresh: function formatRefresh() {
      return 'Uppdatera';
    },
    formatToggle: function formatToggle() {
      return 'Skifta';
    },
    formatColumns: function formatColumns() {
      return 'kolumn';
    }
  }; /**
      * Bootstrap Table Swedish translation
      * Author: C Bratt <bratt@inix.se>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['sv-SE']);
});