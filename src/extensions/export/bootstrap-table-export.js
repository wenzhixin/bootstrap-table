/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * UPDATED BY DOBOBAIE
 * PLEASE EDITE https://github.com/dobobaie/tableExport.jquery.plugin/blob/patch-1/tableExport.js
 * extensions: https://github.com/kayalshri/tableExport.jquery.plugin
 */

(function ($) {
    'use strict';
    var sprintf = $.fn.bootstrapTable.utils.sprintf;

    var TYPE_NAME = {
        //png: 'PNG',
        //txt: 'TXT',
        json: 'JSON',
        xml: 'XML',
        csv: 'CSV',
        sql: 'SQL',
        html: 'HTML',
        doc: 'MS-Word',
        excel: 'MS-Excel',
        powerpoint: 'MS-Powerpoint',
        pdf: 'PDF'
    };

    $.extend($.fn.bootstrapTable.defaults, {
        showExport: false,
        exportDataType: 'basic', // basic, all, selected
        exportTypes: ['json', 'html', 'xml', 'csv', 'txt', 'sql', 'pdf', 'excel', 'doc', 'powerpoint'],
        exportOptions: {}
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
        export: 'glyphicon-export icon-share'
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initToolbar = function () {
        this.showToolbar = this.options.showExport;

        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.showExport) {
            var that = this,
                $btnGroup = this.$toolbar.find('>.btn-group'),
                $export = $btnGroup.find('div.export');

            if (!$export.length) {
                $export = $([
                    '<div class="keep-open btn-group" title="Export">',
                        '<button class="btn btn-default' +
                            sprintf(' btn-%s', this.options.iconSize) +
                            ' dropdown-toggle" ' +
                            'data-toggle="dropdown" type="button">',
                            sprintf('<i class="%s %s"></i> ', this.options.iconsPrefix, this.options.icons.export),
                            '<span class="caret"></span>',
                        '</button>',
                        '<ul class="dropdown-menu dropdown-menu-large row" role="menu">',
                            '<li class="col-sm-8 col-ld-8">'+
                                '<ul class="listColumns">'+
                                    '<li class="dropdown-header">Columns to export</li>'+
                                '</ul>'+
                            '</li>'+
                            '<li class="col-sm-4 col-ld-4">'+
                                '<ul class="listExts">'+
                                    '<li class="dropdown-header">Export to</li>'+
                                '</ul>'+
                            '</li>'+
                        '</ul>',
                    '</div>'].join('')).appendTo($btnGroup);

                $('.keep-open').click(function(e) {
                     if ($(this).attr('class').indexOf('keep-open btn-group open') != -1)
                        e.stopPropagation();
                });

                var $menu = $export.find('.listExts'),
                    $columns = $export.find('.listColumns'),
                   exportTypes = this.options.exportTypes;

                $.each(this.columns, function (i, column) {
                        if (column.radio || column.checkbox) {
                            return;
                        }

                        if (that.options.cardView && (!column.cardVisible)) {
                            return;
                        }

                        var checked = column.visible ? ' checked="checked"' : '';

                        if (column.switchable) {
                            $columns.append(sprintf('<li><label><input class="exportId" type="checkbox" data-field="%s" data-name="%s" %s> %s</label></li>', column.field, column.title, checked, column.title));
                        }
                    });

                if (typeof this.options.exportTypes === 'string') {
                    var types = this.options.exportTypes.slice(1, -1).replace(/ /g, '').split(',');

                    exportTypes = [];
                    $.each(types, function (i, value) {
                        exportTypes.push(value.slice(1, -1));
                    });
                }
                $.each(exportTypes, function (i, type) {
                    if (TYPE_NAME.hasOwnProperty(type)) {
                        $menu.append(['<li data-type="' + type + '">',
                                '<a href="javascript:void(0)">',
                                    TYPE_NAME[type],
                                '</a>',
                            '</li>'].join(''));
                    }
                });

                $menu.find('li').click(function () {
                    var type = $(this).data('type'),
                        doExport = function () {
                            that.$el.tableExport($.extend({}, that.options.exportOptions, {
                                type: type,
                                escape: false
                            }), that.options.data);
                        };

                    if (that.options.exportDataType === 'all' && that.options.pagination) {
                        that.$el.one('load-success.bs.table page-change.bs.table', function () {
                            doExport();
                            that.togglePagination();
                        });
                        that.togglePagination();
                    } else if (that.options.exportDataType === 'selected') {
                        var data = that.getData(),
                            selectedData = that.getAllSelections();

                        that.load(selectedData);
                        doExport();
                        that.load(data);
                    } else {
                        doExport();
                    }
                });
            }
        }
    };
})(jQuery);
