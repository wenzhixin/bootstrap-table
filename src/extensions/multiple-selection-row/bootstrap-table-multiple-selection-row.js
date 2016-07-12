/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

!function ($) {

    'use strict';

    // disable text selection
    document.onselectstart = function() {
        return false;
    };

    var toggleRow = function (row, that, clearAll, useShift) {
        if (clearAll) {
            row = $(row);
            that.options.multipleSelectRowLastSelectedRow = undefined;
            row.removeClass(that.options.multipleSelectRowCssClass);
            that.uncheck(row.data("index"));    
        } else {
            that.options.multipleSelectRowLastSelectedRow = row;
            row = $(row);
            if (useShift) {
                    row.addClass(that.options.multipleSelectRowCssClass);
                    that.check(row.data("index"));
            } else {
                if(row.hasClass(that.options.multipleSelectRowCssClass)) {
                    row.removeClass(that.options.multipleSelectRowCssClass)
                    that.uncheck(row.data("index"));
                } else {
                    row.addClass(that.options.multipleSelectRowCssClass);
                    that.check(row.data("index"));
                }
            }
        }
    };

    var selectRowsBetweenIndexes = function (indexes, that) {
        indexes.sort(function(a, b) {
            return a - b;
        });

        for (var i = indexes[0]; i <= indexes[1]; i++) {
            toggleRow(that.options.multipleSelectRowRows[i-1], that, false, true);
        }
    };

    var clearAll = function (that) {
        for (var i = 0; i < that.options.multipleSelectRowRows.length; i++) {
            toggleRow(that.options.multipleSelectRowRows[i], that, true, false);
        }
    };
    
    $.extend($.fn.bootstrapTable.defaults, {
        multipleSelectRow: false,
        multipleSelectRowCssClass: 'multiple-select-row-selected',
        //internal variables used by the extension
        multipleSelectRowLastSelectedRow: undefined,
        multipleSelectRowRows: []
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init,
        _initBody = BootstrapTable.prototype.initBody;

    BootstrapTable.prototype.init = function () {
        if (this.options.multipleSelectRow) {
            var that = this;

            //Make sure that the internal variables have the correct value
            this.options.multipleSelectRowLastSelectedRow = undefined;
            this.options.multipleSelectRowRows = [];

            var onPostBody = this.options.onPostBody;
            this.options.onPostBody = function () {
                setTimeout(function () {
                    that.options.multipleSelectRowRows = that.$body.children();
                    that.options.multipleSelectRowRows.mousedown(function (e) {
                        if (window.event.ctrlKey) {
                            toggleRow(e.currentTarget, that, false, false);
                        }

                        if (window.event.button === 0) {
                            if (!window.event.ctrlKey && !window.event.shiftKey) {
                                clearAll(that);
                                toggleRow(e.currentTarget, that, false, false);
                            }

                            if (window.event.shiftKey) {
                                selectRowsBetweenIndexes([that.options.multipleSelectRowLastSelectedRow.rowIndex, e.currentTarget.rowIndex], that)
                            }
                        }
                    });
                    onPostBody.apply();
                }, 1);
            };
        }

        _init.apply(this, Array.prototype.slice.apply(arguments));
    };

    BootstrapTable.prototype.clearAllMultipleSelectionRow = function () {
        clearAll(this);
    };

    $.fn.bootstrapTable.methods.push('clearAllMultipleSelectionRow');
}(jQuery);
