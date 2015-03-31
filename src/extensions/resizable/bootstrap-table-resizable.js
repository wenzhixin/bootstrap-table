/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

(function ($) {
    'use strict';

    var initResizable = function (el) {
        var that = el;

        //Deletes the plugin to re-create it
        $(el.$el).colResizable({disable: true});

        //Creates the plugin
        $(el.$el).colResizable({
            liveDrag: that.options.liveDrag,
            fixed: that.options.fixed,
            headerOnly: that.options.headerOnly,
            minWidth: that.options.minWidth,
            hoverCursor: that.options.hoverCursor,
            dragCursor: that.options.dragCursor,
            onResize: that.options.onResizableResize,
            onDrag: that.options.onResizableDrag
        });
    };

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
        _init = BootstrapTable.prototype.init,
        _toggleColumn = BootstrapTable.prototype.toggleColumn,
        _toggleView = BootstrapTable.prototype.toggleView;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.resizable) {
            initResizable(this);
        }
    };

    BootstrapTable.prototype.toggleColumn = function () {
        _toggleColumn.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.resizable) {
            initResizable(this);
        }
    };

    BootstrapTable.prototype.toggleView = function () {
        _toggleView.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.resizable) {
            if (this.options.cardView) {
                //Deletes the plugin
                $(this.$el).colResizable({disable: true});
                return;
            }
            initResizable(this);
        }
    };
})(jQuery);
