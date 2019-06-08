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
        global.bootstrapTablePageJumpTo = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * @author Jay <jwang@dizsoft.com>
     */

    (function ($) {
        'use strict';

        var sprintf = $.fn.bootstrapTable.utils.sprintf;

        $.extend($.fn.bootstrapTable.defaults, {
            showJumpto: false,
            exportOptions: {}
        });

        $.extend($.fn.bootstrapTable.locales, {
            formatJumpto: function formatJumpto() {
                return 'GO';
            }
        });
        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

        var BootstrapTable = $.fn.bootstrapTable.Constructor,
            _initPagination = BootstrapTable.prototype.initPagination;

        BootstrapTable.prototype.initPagination = function () {
            _initPagination.apply(this, Array.prototype.slice.apply(arguments));

            if (this.options.showJumpto) {
                var that = this,
                    $pageGroup = this.$pagination.find('ul.pagination'),
                    $jumpto = $pageGroup.find('li.jumpto');

                if (!$jumpto.length) {
                    $jumpto = $(['<li class="jumpto">', '<input type="text" class="form-control">', '<button class="btn' + sprintf(' btn-%s', this.options.buttonsClass) + sprintf(' btn-%s', this.options.iconSize) + '" title="' + this.options.formatJumpto() + '" ' + ' type="button">' + this.options.formatJumpto(), '</button>', '</li>'].join('')).appendTo($pageGroup);

                    $jumpto.find('button').click(function () {
                        that.selectPage(parseInt($jumpto.find('input').val()));
                    });
                }
            }
        };
    })(jQuery);
});