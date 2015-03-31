/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        resizable: false,
        liveDrag: false,
        fixed: true,
        headerOnly: false,
        minWidth: 15,
        hoverCursor: 'e-resize',
        dragCursor: 'e-resize',
        onResizableResize: function (e) {
            return false;
        },
        onResizableDrag: function (e) {
            return false;
        }
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init;

    BootstrapTable.prototype.init = function () {
        var that = this;
        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.resizable) {
            $(this.$el).colResizable({
                liveDrag: that.options.liveDrag,
                fixed: that.options.fixed,
                headerOnly: that.options.headerOnly,
                minWidth: that.options.minWidth,
                hoverCursor: that.options.hoverCursor,
                dragCursor: that.options.dragCursor,
                onResize: that.options.onResizableResize,
                onDrag: that.options.onResizableDrag
            });
        }
    };
})(jQuery);
