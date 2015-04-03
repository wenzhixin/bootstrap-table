/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

!function ($) {

    'use strict';

    var toggled = false;

    var resetView = function (el) {
        if (el.options.height || el.options.showFooter) {
            setTimeout(el.resetView(), 1);
        }
    }

    var changeView = function (el, width, height) {
        if(width <= el.options.minWidth && height <= el.options.minHeight ){
            if (!toggled) {
                el.toggleView();
                toggled = true;
            }
        } else if (width > el.options.minWidth && height > el.options.minHeight) {
            if (toggled) {
                el.toggleView()
                toggled = false;
            }
        }

        resetView(el);
    }

    $.extend($.fn.bootstrapTable.defaults, {
        mobileResponsive: false,
        minWidth: 562,
        minHeight: 562,
        checkOnInit: false
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.mobileResponsive) {
            return;
        }

        var that = this;
        $(window).resize(function () {
            changeView(that, $(this).width(), $(this).height())
        });

        if (this.options.checkOnInit) {
            changeView(this, $(window).width(), $(window).height());
        }
    };
}(jQuery);