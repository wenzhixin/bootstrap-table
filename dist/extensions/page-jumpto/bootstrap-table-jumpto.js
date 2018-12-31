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
        global.bootstrapTableJumpto = mod.exports;
    }
})(this, function (_jquery) {
    'use strict';

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var sprintf = _jquery2.default.fn.bootstrapTable.utils.sprintf; /**
                                                                     * @author Jay <jwang@dizsoft.com>
                                                                     */


    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, {
        showJumpto: false,
        exportOptions: {}
    });

    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.locales, {
        formatJumpto: function formatJumpto() {
            return 'GO';
        }
    });
    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales);

    var BootstrapTable = _jquery2.default.fn.bootstrapTable.Constructor,
        _initPagination = BootstrapTable.prototype.initPagination;

    BootstrapTable.prototype.initPagination = function () {
        _initPagination.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.showJumpto) {
            var that = this,
                $pageGroup = this.$pagination.find('ul.pagination'),
                $jumpto = $pageGroup.find('li.jumpto');

            if (!$jumpto.length) {
                $jumpto = (0, _jquery2.default)(['<li class="jumpto">', '<input type="text" class="form-control">', '<button class="btn' + sprintf(' btn-%s', this.options.buttonsClass) + sprintf(' btn-%s', this.options.iconSize) + '" title="' + this.options.formatJumpto() + '" ' + ' type="button">' + this.options.formatJumpto(), '</button>', '</li>'].join('')).appendTo($pageGroup);

                $jumpto.find('button').click(function () {
                    that.selectPage(parseInt($jumpto.find('input').val()));
                });
            }
        }
    };
});