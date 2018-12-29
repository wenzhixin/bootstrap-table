(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableResizable = mod.exports;
  }
})(this, function () {
  "use strict";

  /**
   * @author: Dennis Hernández
   * @webSite: http://djhvscf.github.io/Blog
   * @version: v2.0.0
   */

  (function ($) {
    "use strict";

    var initResizable = function initResizable(that) {
      if (that.options.resizable && !that.options.cardView && !isInit(that)) {
        that.$el.resizableColumns();
      }
    };

    var reInitResizable = function reInitResizable(that) {
      destroy(that);
      initResizable(that);
    };

    var destroy = function destroy(that) {
      if (isInit(that)) {
        that.$el.data("resizableColumns").destroy();
      }
    };

    var isInit = function isInit(that) {
      return that.$el.data("resizableColumns") !== undefined;
    };

    $.extend($.fn.bootstrapTable.defaults, {
      resizable: false
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initBody = BootstrapTable.prototype.initBody,
        _toggleView = BootstrapTable.prototype.toggleView,
        _resetView = BootstrapTable.prototype.resetView;

    BootstrapTable.prototype.initBody = function () {
      var that = this;
      _initBody.apply(this, Array.prototype.slice.apply(arguments));

      that.$el.off("column-switch.bs.table, page-change.bs.table").on("column-switch.bs.table, page-change.bs.table", function () {
        reInitResizable(that);
      });
    };

    BootstrapTable.prototype.toggleView = function () {
      _toggleView.apply(this, Array.prototype.slice.apply(arguments));

      if (this.options.resizable && this.options.cardView) {
        //Destroy the plugin
        destroy(this);
      }
    };

    BootstrapTable.prototype.resetView = function () {
      var that = this;

      _resetView.apply(this, Array.prototype.slice.apply(arguments));

      if (this.options.resizable) {
        // because in fitHeader function, we use setTimeout(func, 100);
        setTimeout(function () {
          initResizable(that);
        }, 100);
      }
    };
  })(jQuery);
});