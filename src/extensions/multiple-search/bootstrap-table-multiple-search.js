/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

!function ($) {

    'use strict';

    var sprintf = function (str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function () {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    };

    var getFieldIndex = function (columns, field) {
        var index = -1;

        $.each(columns, function (i, column) {
            if (column.field === field) {
                index = i;
                return false;
            }
            return true;
        });
        return index;
    };

    var calculateObjectValue = function (self, name, args, defaultValue) {
        var func = name;

        if (typeof name === 'string') {
            // support obj.func1.func2
            var names = name.split('.');

            if (names.length > 1) {
                func = window;
                $.each(names, function (i, f) {
                    func = func[f];
                });
            } else {
                func = window[name];
            }
        }
        if (typeof func === 'object') {
            return func;
        }
        if (typeof func === 'function') {
            return func.apply(self, args);
        }
        if (!func && typeof name === 'string' && sprintf.apply(this, [name].concat(args))) {
            return sprintf.apply(this, [name].concat(args));
        }
        return defaultValue;
    };

    $.extend($.fn.bootstrapTable.defaults, {
        multipleSearch: false
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initSearch = BootstrapTable.prototype.initSearch;

    BootstrapTable.prototype.initSearch = function () {
        if (this.options.multipleSearch) {
            var strArray = this.searchText.split(" "),
                that = this,
                f = $.isEmptyObject(this.filterColumns) ? null : this.filterColumns,
                dataFiltered = [];

            if (strArray.length === 1) {
                _initSearch.apply(this, Array.prototype.slice.apply(arguments));
            } else {
                for (var i = 0; i < strArray.length; i++) {
                    var str = strArray[i].trim();
                    dataFiltered = str ? $.grep(dataFiltered.length === 0 ? this.options.data : dataFiltered, function (item, i) {
                        for (var key in item) {
                            key = $.isNumeric(key) ? parseInt(key, 10) : key;
                            var value = item[key],
                                column = that.columns[getFieldIndex(that.columns, key)],
                                j = $.inArray(key, that.header.fields);

                            // Fix #142: search use formated data
                            if (column && column.searchFormatter) {
                                value = calculateObjectValue(column,
                                    that.header.formatters[j], [value, item, i], value);
                            }

                            var index = $.inArray(key, that.header.fields);
                            if (index !== -1 && that.header.searchables[index] && (typeof value === 'string' || typeof value === 'number')) {
                                if (that.options.strictSearch) {
                                    if ((value + '').toLowerCase() === str) {
                                        return true;
                                    }
                                } else {
                                    if ((value + '').toLowerCase().indexOf(str) !== -1) {
                                        return true;
                                    }
                                }
                            }
                        }
                        return false;
                    }) : this.data;
                }

                this.data = dataFiltered;
            }
        } else {
            _initSearch.apply(this, Array.prototype.slice.apply(arguments));
        }
    };

}(jQuery);
