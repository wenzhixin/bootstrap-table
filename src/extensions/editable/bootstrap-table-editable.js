/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/vitalets/x-editable
 */

!function($) {

    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        editable: true,
        onEditableInit: function () {return false;}
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'editable-init.bs.table': 'onEditableInit'
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initTable = BootstrapTable.prototype.initTable,
        _initBody = BootstrapTable.prototype.initBody;

    BootstrapTable.prototype.initTable = function () {
        var that = this;
        _initTable.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.editable) {
            return;
        }

        $.each(this.options.columns, function (i, column) {
            if (!column.editable) {
                return;
            }

            var _formatter = column.formatter;
            column.formatter = function (value, row, index) {
                var result = _formatter ? _formatter(value, row, index) : value;

                return ['<a href="javascript:void(0)"',
                    ' data-name="' + column.field + '"',
                    ' data-pk="' + row[that.options.idField] + '"',
                    '>' + result + '</a>'
                ].join('');
            };
        });
    };

    BootstrapTable.prototype.initBody = function () {
        var that = this;
        _initBody.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.editable) {
            return;
        }

        $.each(this.options.columns, function (i, column) {
            if (!column.editable) {
                return;
            }

            that.$body.find('a[data-name="' + column.field + '"]').editable(column.editable)
                .off('save').on('save', function (e, params) {
                    var data = that.getData(),
                        row = data[$(this).parents('tr[data-index]').data('index')];

                    row[column.field] = params.submitValue;
                });
        });
        this.trigger('editable-init');
    };

}(jQuery);
