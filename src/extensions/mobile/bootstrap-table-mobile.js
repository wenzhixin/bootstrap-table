/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.1.0
 */

!function ($) {

    'use strict';

    var resetView = function (that) {
        if (that.options.height || that.options.showFooter) {
            setTimeout(that.resetView, 1);
        }
    };

    var changeView = function (that, width, height) {
        if (that.options.minHeight) {
            if (checkValuesLessEqual(width, that.options.minWidth) && checkValuesLessEqual(height, that.options.minHeight)) {
                conditionCardView(that);
            } else if (checkValuesGreater(width, that.options.minWidth) && checkValuesGreater(height, that.options.minHeight)) {
                conditionFullView(that);
            }
        } else {
            if (checkValuesLessEqual(width, that.options.minWidth)) {
                conditionCardView(that);
            } else if (checkValuesGreater(width, that.options.minWidth)) {
                conditionFullView(that);
            }
        }

        resetView(that);
    };

    var checkValuesLessEqual = function (currentValue, targetValue) {
        return currentValue <= targetValue;
    };

    var checkValuesGreater = function (currentValue, targetValue) {
        return currentValue > targetValue;
    };

    var conditionCardView = function (that) {
        changeTableView(that, false);
    };

    var conditionFullView = function (that) {
        changeTableView(that, true);
    };

    var changeTableView = function (that, cardViewState) {
        that.options.cardView = cardViewState;
        that.toggleView();
    };

    var debounce = function(func,wait) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                func.apply(context,args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later,wait);
        };
    };

    $.extend($.fn.bootstrapTable.defaults, {
        mobileResponsive: false,
        minWidth: 562,
        minHeight: undefined,
        heightThreshold: 100, // just slightly larger than mobile chrome's auto-hiding toolbar
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

        var that = this, old = { w: $(window).width(), h: $(window).height() };

        $(window).on('resize orientationchange',debounce(function (evt) {
            // reset view if height has only changed by at least the threshold.
            var h = $(this).height(), w = $(this).width();
            if (Math.abs(old.h - h) > that.options.heightThreshold || old.w != w) {
                changeView(that, w, h);
                old = { w: w, h: h };
            }
        },200));

        if (this.options.checkOnInit) {
            var h = $(window).height(), w = $(window).width();
            changeView(this, w, h);
            old = { w: w, h: h };
        }
    };
}(jQuery);
