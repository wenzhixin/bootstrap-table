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
        global.bootstrapTableCopyRows = mod.exports;
    }
})(this, function (_jquery) {
    'use strict';

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var calculateObjectValue = _jquery2.default.fn.bootstrapTable.utils.calculateObjectValue,
        sprintf = _jquery2.default.fn.bootstrapTable.utils.sprintf; /**
                                                                     * @author Homer Glascock <HopGlascock@gmail.com>
                                                                     * @version: v1.0.0
                                                                     */

    var copytext = function copytext(text) {
        var textField = document.createElement('textarea');
        (0, _jquery2.default)(textField).html(text);
        document.body.appendChild(textField);
        textField.select();

        try {
            document.execCommand('copy');
        } catch (e) {
            console.log("Oops, unable to copy");
        }
        (0, _jquery2.default)(textField).remove();
    };

    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, {
        copyBtn: false,
        copyWHiddenBtn: false,
        copyDelemeter: ", "
    });

    _jquery2.default.fn.bootstrapTable.methods.push('copyColumnsToClipboard', 'copyColumnsToClipboardWithHidden');

    var BootstrapTable = _jquery2.default.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initToolbar = function () {

        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        var that = this,
            $btnGroup = this.$toolbar.find('>.btn-group');

        if (this.options.clickToSelect || this.options.singleSelect) {

            if (this.options.copyBtn) {
                var copybtn = "<button class='btn btn-default' id='copyBtn'><span class='glyphicon glyphicon-copy icon-pencil'></span></button>";
                $btnGroup.append(copybtn);
                $btnGroup.find('#copyBtn').click(function () {
                    that.copyColumnsToClipboard();
                });
            }

            if (this.options.copyWHiddenBtn) {
                var copyhiddenbtn = "<button class='btn btn-default' id='copyWHiddenBtn'><span class='badge'><span class='glyphicon glyphicon-copy icon-pencil'></span></span></button>";
                $btnGroup.append(copyhiddenbtn);
                $btnGroup.find('#copyWHiddenBtn').click(function () {
                    that.copyColumnsToClipboardWithHidden();
                });
            }
        }
    };

    BootstrapTable.prototype.copyColumnsToClipboard = function () {
        var that = this,
            ret = "",
            delimet = this.options.copyDelemeter;

        _jquery2.default.each(that.getSelections(), function (index, row) {
            _jquery2.default.each(that.options.columns[0], function (indy, column) {
                if (column.field !== "state" && column.field !== "RowNumber" && column.visible) {
                    if (row[column.field] !== null) {
                        ret += calculateObjectValue(column, that.header.formatters[indy], [row[column.field], row, index], row[column.field]);
                    }
                    ret += delimet;
                }
            });

            ret += "\r\n";
        });

        copytext(ret);
    };

    BootstrapTable.prototype.copyColumnsToClipboardWithHidden = function () {
        var that = this,
            ret = "",
            delimet = this.options.copyDelemeter;

        _jquery2.default.each(that.getSelections(), function (index, row) {
            _jquery2.default.each(that.options.columns[0], function (indy, column) {
                if (column.field != "state" && column.field !== "RowNumber") {
                    if (row[column.field] !== null) {
                        ret += calculateObjectValue(column, that.header.formatters[indy], [row[column.field], row, index], row[column.field]);
                    }
                    ret += delimet;
                }
            });

            ret += "\r\n";
        });

        copytext(ret);
    };
});