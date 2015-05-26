/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.1.0
 */


(function ($) {
    'use strict';

    var flatJSON = function (el, data) {
        if (el.options.flat) {
            el.options.data = sd.flatHelper(data);
        }
        if (el.options.sidePagination === 'server') {
            el.data = el.options.data;
        }
    };

    $.extend($.fn.bootstrapTable.defaults, {
        flat: false
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initData = BootstrapTable.prototype.initData,
        _init = BootstrapTable.prototype.init,
        _initTable = BootstrapTable.prototype.initTable;

    BootstrapTable.prototype.initData = function (data) {
        _initData.apply(this, Array.prototype.slice.apply(arguments));
        flatJSON(this, data === undefined ? this.options.data : data);
    };

    BootstrapTable.prototype.init = function () {
        flatJSON(this, this.options.data);
        _init.apply(this, Array.prototype.slice.apply(arguments));
    };

    BootstrapTable.prototype.initTable = function () {
        flatJSON(this, this.options.data);
        _initTable.apply(this, Array.prototype.slice.apply(arguments));
    };

    //Main functions
    var sd = {
        flat: function (element) {
            var result = {};

            function recurse(cur, prop) {
                if (Object(cur) !== cur) {
                    result[prop] = cur;
                } else if ($.isArray(cur)) {
                    for (var i = 0, l = cur.length; i < l; i++) {
                        recurse(cur[i], prop ? prop + "." + i : "" + i);
                        if (l == 0) {
                            result[prop] = [];
                        }
                    }
                } else {
                    var isEmpty = true;
                    for (var p in cur) {
                        isEmpty = false;
                        recurse(cur[p], prop ? prop + "." + p : p);
                    }
                    if (isEmpty) {
                        result[prop] = {};
                    }
                }
            }

            recurse(element, "");
            return result;
        },

        flatHelper: function (data) {
            var flatArray = [],
                arrayHelper = [];
            if (!$.isArray(data)) {
                arrayHelper.push(data);
                data = arrayHelper;
            }
            $.each(data, function (i, element) {
                flatArray.push(sd.flat(element));
            });
            return flatArray;
        }
    };
})(jQuery);
