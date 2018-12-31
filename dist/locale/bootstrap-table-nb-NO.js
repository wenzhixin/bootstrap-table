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
    global.bootstrapTableNbNO = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['nb-NO'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Oppdaterer, vennligst vent...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' poster pr side';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Viser ' + pageFrom + ' til ' + pageTo + ' av ' + totalRows + ' rekker';
    },
    formatSearch: function formatSearch() {
      return 'Søk';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Ingen poster funnet';
    },
    formatRefresh: function formatRefresh() {
      return 'Oppdater';
    },
    formatToggle: function formatToggle() {
      return 'Endre';
    },
    formatColumns: function formatColumns() {
      return 'Kolonner';
    }
  }; /**
      * Bootstrap Table norwegian translation
      * Author: Jim Nordbø, jim@nordb.no
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['nb-NO']);
});