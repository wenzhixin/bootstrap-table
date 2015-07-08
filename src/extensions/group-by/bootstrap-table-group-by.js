/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

!function ($) {

    'use strict';

    var originalRowAttr,
        dataTTId = 'data-tt-id',
        dataTTParentId = 'data-tt-parent-id',
        obj = {},
        parentId = undefined;

    var sumData = function (that, data) {
        var sumRow = {};
        $.each(data, function (i, row) {
            for(var prop in row) {
                if (!row.IsParent) {
                    if (!isNaN(parseFloat(row[prop]))) {
                        if (sumRow[prop] === undefined) {
                            sumRow[prop] = 0;
                        }
                        sumRow[prop] += +row[prop];
                    }
                }
            }
        });
        return sumRow;
    };

    var rowAttr = function (row, index) {
        //Call the User Defined Function
        originalRowAttr.apply([row, index]);

        obj[dataTTId.toString()] = index;

        if (!row.IsParent) {
            obj[dataTTParentId.toString()] = parentId === undefined ? index : parentId;
        } else {
            parentId = index;
            delete obj[dataTTParentId.toString()];
        }

        return obj;
    };

    var setObjectKeys = function () {
        // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
       Object.keys = function (o) {
           if (o !== Object(o)) {
               throw new TypeError('Object.keys called on a non-object');
           }
           var k = [],
               p;
           for (p in o) {
               if (Object.prototype.hasOwnProperty.call(o, p)) {
                   k.push(p);
               }
           }
           return k;
       }
    };

    var groupBy = function (array , f) {
       var groups = {};
       array.forEach(function(o) {
           var group = JSON.stringify(f(o));
           groups[group] = groups[group] || [];
           groups[group].push(o);
       });
       return Object.keys(groups).map(function (group) {
            return groups[group];
       });
    };

    var makeGrouped = function (that, data) {
        var newRow = {},
            newData = [];

        var result = groupBy(data, function (item) {
            return [item[that.options.groupByField]];
        });

        for (var i = 0; i < result.length; i++) {
            newRow[that.options.groupByField.toString()] = result[i][0][that.options.groupByField];
            newRow.IsParent = true;
            result[i].unshift(newRow);
            if (that.options.groupBySumGroup) {
                result[i].push(sumData(that, result[i]));
            }
            newRow = {};
        }

        newData = newData.concat.apply(newData, result);

        if (!that.options.loaded && newData.length > 0) {
            that.options.loaded = true;
            that.options.originalData = that.options.data;
            that.options.data = newData;
        }

        return newData;
    };

    $.extend($.fn.bootstrapTable.defaults, {
        groupBy: false,
        groupByField: '',
        groupBySumGroup: false,
        groupByInitExpanded: false,
        //internal variables
        loaded: false,
        originalData: undefined
    });

    $.extend($.fn.bootstrapTable.methods, [
        'collapseAll',
        'expandAll'
    ]);

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init,
        _initData = BootstrapTable.prototype.initData;

    BootstrapTable.prototype.init = function () {
        //Temporal validation
        if (!this.options.sortName) {
            if ((this.options.groupBy) && (this.options.groupByField !== '')) {
                var that = this;

                // Compatibility: IE < 9 and old browsers
                if (!Object.keys) {
                    setObjectKeys();
                }

                //Make sure that the internal variables are set correctly
                this.options.loaded = false;
                this.options.originalData = undefined;

                originalRowAttr = this.options.rowAttributes;
                this.options.rowAttributes = rowAttr;
                this.$el.on('post-body.bs.table', function () {
                    that.$el.treetable({
                        expandable: true,
                        onNodeExpand: function () {
                            if (that.options.height) {
                                that.resetHeader();
                            }
                        },
                        onNodeCollapse: function () {
                            if (that.options.height) {
                                that.resetHeader();
                            }
                        }
                    }, true);

                    if (that.options.groupByInitExpanded) {
                        that.expandNode('0');
                    }
                });
            }
        }
        _init.apply(this, Array.prototype.slice.apply(arguments));
    };

    BootstrapTable.prototype.initData = function (data, type) {
        //Temporal validation
        if (!this.options.sortName) {
            if ((this.options.groupBy) && (this.options.groupByField !== '')) {
                data = makeGrouped(this, data ? data : this.options.data);
            }
        }
        _initData.apply(this, [data, type]);
    };

    BootstrapTable.prototype.expandAll = function () {
        this.$el.treetable('expandAll');
    };

    BootstrapTable.prototype.collapseAll = function () {
        this.$el.treetable('collapseAll');
    };

    BootstrapTable.prototype.expandNode = function (id) {
        this.$el.treetable('expandNode', id);
    }
}(jQuery);