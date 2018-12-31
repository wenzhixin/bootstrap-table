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
        global.bootstrapTableMultipleSearch = mod.exports;
    }
})(this, function (_jquery) {
    'use strict';

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, {
        multipleSearch: false,
        delimeter: " "
    }); /**
         * @author: Dennis Hernández
         * @webSite: http://djhvscf.github.io/Blog
         * @version: v1.0.0
         */


    var BootstrapTable = _jquery2.default.fn.bootstrapTable.Constructor,
        _initSearch = BootstrapTable.prototype.initSearch;

    BootstrapTable.prototype.initSearch = function () {
        if (this.options.multipleSearch) {
            if (this.searchText === undefined) {
                return;
            }
            var strArray = this.searchText.split(this.options.delimeter),
                that = this,
                f = _jquery2.default.isEmptyObject(this.filterColumns) ? null : this.filterColumns,
                dataFiltered = [];

            if (strArray.length === 1) {
                _initSearch.apply(this, Array.prototype.slice.apply(arguments));
            } else {
                for (var i = 0; i < strArray.length; i++) {
                    var str = strArray[i].trim();
                    dataFiltered = str ? _jquery2.default.grep(dataFiltered.length === 0 ? this.options.data : dataFiltered, function (item, i) {
                        for (var key in item) {
                            key = _jquery2.default.isNumeric(key) ? parseInt(key, 10) : key;
                            var value = item[key],
                                column = that.columns[that.fieldsColumnsIndex[key]],
                                j = _jquery2.default.inArray(key, that.header.fields);

                            // Fix #142: search use formated data
                            if (column && column.searchFormatter) {
                                value = _jquery2.default.fn.bootstrapTable.utils.calculateObjectValue(column, that.header.formatters[j], [value, item, i], value);
                            }

                            var index = _jquery2.default.inArray(key, that.header.fields);
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
});