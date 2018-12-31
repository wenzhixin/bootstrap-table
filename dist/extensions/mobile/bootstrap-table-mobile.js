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
        global.bootstrapTableMobile = mod.exports;
    }
})(this, function (_jquery) {
    'use strict';

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var showHideColumns = function showHideColumns(that, checked) {
        if (that.options.columnsHidden.length > 0) {
            _jquery2.default.each(that.columns, function (i, column) {
                if (that.options.columnsHidden.indexOf(column.field) !== -1) {
                    if (column.visible !== checked) {
                        that.toggleColumn(that.fieldsColumnsIndex[column.field], checked, true);
                    }
                }
            });
        }
    }; /**
        * @author: Dennis Hernández
        * @webSite: http://djhvscf.github.io/Blog
        * @version: v1.1.0
        */


    var resetView = function resetView(that) {
        if (that.options.height || that.options.showFooter) {
            setTimeout(function () {
                that.resetView.call(that);
            }, 1);
        }
    };

    var changeView = function changeView(that, width, height) {
        if (that.options.minHeight) {
            if (width <= that.options.minWidth && height <= that.options.minHeight) {
                conditionCardView(that);
            } else if (width > that.options.minWidth && height > that.options.minHeight) {
                conditionFullView(that);
            }
        } else {
            if (width <= that.options.minWidth) {
                conditionCardView(that);
            } else if (width > that.options.minWidth) {
                conditionFullView(that);
            }
        }

        resetView(that);
    };

    var conditionCardView = function conditionCardView(that) {
        changeTableView(that, false);
        showHideColumns(that, false);
    };

    var conditionFullView = function conditionFullView(that) {
        changeTableView(that, true);
        showHideColumns(that, true);
    };

    var changeTableView = function changeTableView(that, cardViewState) {
        that.options.cardView = cardViewState;
        that.toggleView();
    };

    var debounce = function debounce(func, wait) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, {
        mobileResponsive: false,
        minWidth: 562,
        minHeight: undefined,
        heightThreshold: 100, // just slightly larger than mobile chrome's auto-hiding toolbar
        checkOnInit: true,
        columnsHidden: []
    });

    var BootstrapTable = _jquery2.default.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.mobileResponsive) {
            return;
        }

        if (!this.options.minWidth) {
            return;
        }

        if (this.options.minWidth < 100 && this.options.resizable) {
            console.log("The minWidth when the resizable extension is active should be greater or equal than 100");
            this.options.minWidth = 100;
        }

        var that = this,
            old = {
            width: (0, _jquery2.default)(window).width(),
            height: (0, _jquery2.default)(window).height()
        };

        (0, _jquery2.default)(window).on('resize orientationchange', debounce(function (evt) {
            // reset view if height has only changed by at least the threshold.
            var height = (0, _jquery2.default)(this).height(),
                width = (0, _jquery2.default)(this).width();

            if (Math.abs(old.height - height) > that.options.heightThreshold || old.width != width) {
                changeView(that, width, height);
                old = {
                    width: width,
                    height: height
                };
            }
        }, 200));

        if (this.options.checkOnInit) {
            var height = (0, _jquery2.default)(window).height(),
                width = (0, _jquery2.default)(window).width();
            changeView(this, width, height);
            old = {
                width: width,
                height: height
            };
        }
    };
});