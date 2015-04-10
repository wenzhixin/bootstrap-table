/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.1.0
 */

!function ($) {

    'use strict';

    var resetView = function (el) {
        if (el.options.height || el.options.showFooter) {
            setTimeout(el.resetView(), 1);
        }
    };

    var changeView = function (el, width, height) {
        if (el.options.minHeight) {
            if (checkValuesLessEqual(width, el.options.minWidth) && checkValuesLessEqual(height, el.options.minHeight)) {
                conditionCardView(el);
            } else if (checkValuesGreater(width, el.options.minWidth) && checkValuesGreater(height, el.options.minHeight)) {
                conditionFullView(el);
            }
        } else {
            if (checkValuesLessEqual(width, el.options.minWidth)) {
                conditionCardView(el);
            } else if (checkValuesGreater(width, el.options.minWidth)) {
                conditionFullView(el);
            }
        }

        resetView(el);
    };

    var checkValuesLessEqual = function (currentValue, targetValue) {
        return currentValue <= targetValue;
    };

    var checkValuesGreater = function (currentValue, targetValue) {
        return currentValue > targetValue;
    };

    var conditionCardView = function (el) {
        el.options.cardView = false;
        el.toggleView();
    };

    var conditionFullView = function (el) {
        el.options.cardView = true;
        el.toggleView();
    };

    $.extend($.fn.bootstrapTable.defaults, {
        mobileResponsive: false,
        minWidth: 562,
        minHeight: undefined,
        checkOnInit: true,
        toggled: false
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.mobileResponsive) {
            return;
        }

        if (!this.options.minWidth) {
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
