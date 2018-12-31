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
    global.bootstrapTableI18nEnhance = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var BootstrapTable = _jquery2.default.fn.bootstrapTable.Constructor; /**
                                                                        * @author: Jewway
                                                                        * @version: v1.0.0
                                                                        */


  BootstrapTable.prototype.changeTitle = function (locale) {
    _jquery2.default.each(this.options.columns, function (idx, columnList) {
      _jquery2.default.each(columnList, function (idx, column) {
        if (column.field) {
          column.title = locale[column.field];
        }
      });
    });
    this.initHeader();
    this.initBody();
    this.initToolbar();
  };

  BootstrapTable.prototype.changeLocale = function (localeId) {
    this.options.locale = localeId;
    this.initLocale();
    this.initPagination();
    this.initBody();
    this.initToolbar();
  };

  _jquery2.default.fn.bootstrapTable.methods.push('changeTitle');
  _jquery2.default.fn.bootstrapTable.methods.push('changeLocale');
});