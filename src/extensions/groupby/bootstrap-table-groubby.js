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

    var calculateObjectValue = function (self, name, args, defaultValue) {
        if (typeof name === 'string') {
            // support obj.func1.func2
            var names = name.split('.');

            if (names.length > 1) {
                name = window;
                $.each(names, function (i, f) {
                    name = name[f];
                });
            } else {
                name = window[name];
            }
        }
        if (typeof name === 'object') {
            return name;
        }
        if (typeof name === 'function') {
            return name.apply(self, args);
        }
        return defaultValue;
    };

    $.extend($.fn.bootstrapTable.defaults, {
        groupBy: false,
        groupFields: []
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initToolbar = function () {
        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.groupBy) {
            return;
        }

        if ($.isEmptyObject(this.options.groupFields)){
            return;
        }

        var $keepOpen,
            html = [],
            that = this,
            data = this.getData(),
            dataClone = data.slice(0);

        html.push(sprintf('<div class="keep-by btn-group" title="%s">',
            this.options.formatColumns()),
            '<button type="button" class="btn btn-default' + (this.options.iconSize == undefined ? '' : ' btn-' + this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">',
            sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns),
            ' <span class="caret"></span>',
            '</button>',
            '<ul class="dropdown-menu" role="menu">');

        $.each(this.options.groupFields, function (i, field) {
            if (that.options.cardView) {
                return;
            }
            var checked = '';
            html.push(sprintf('<li>' +
                '<label><input type="checkbox" data-field="%s" value="%s"%s> %s</label>' +
                '</li>', field, field, checked, field));
        });
        html.push('</ul>',
            '</div>');

        this.$toolbar.find('.columns').append(html.join(''));

        $keepOpen = this.$toolbar.find('.keep-by');

        $keepOpen.find('li').off('click').on('click', function (event) {
            event.stopImmediatePropagation();
        });

        $keepOpen.find('input').off('click').on('click', function () {
            var $this = $(this),
                order = 1,
                index = $.inArray($this.val(), that.header.fields);;

            if (index !== -1 && $this.get(0).checked) {
                data.sort(function (a,b) {
                    var aa = a[$this.val()],
                        bb = b[$this.val()],
                        value = calculateObjectValue(that.header, that.header.sorters[index], [aa, bb]);

                    if (value !== undefined) {
                        return order * value;
                    }

                    if (aa === undefined || aa === null) {
                        aa = '';
                    }

                    if (bb === undefined || bb === null) {
                        bb = '';
                    }

                    if ($.isNumeric(aa) && $.isNumeric(bb)) {
                        aa = parseFloat(aa);
                        bb = parseFloat(bb);
                        if (aa < bb) {
                            return order * -1;
                        }
                        return order;
                    }

                    if (aa === bb) {
                        return 0;
                    }

                    if (typeof aa !== 'string') {
                        aa = aa.toString();
                    }

                    if (aa.localeCompare(bb) === -1) {
                        return order * -1;
                    }

                    return order;
                });

                //refresh the data
                that.load(data);
            } else {
                //refresh the data to the original order
                that.load(dataClone);
            }
        });
    };
}(jQuery);