/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/kayalshri/tableExport.jquery.plugin
 */

(function ($) {
    'use strict';
    var sprintf = $.fn.bootstrapTable.utils.sprintf;

    var TYPE_NAME = {
        json: 'JSON',
        xml: 'XML',
        png: 'PNG',
        csv: 'CSV',
        txt: 'TXT',
        sql: 'SQL',
        doc: 'MS-Word',
        excel: 'MS-Excel',
        xlsx: 'MS-Excel (OpenXML)',
        powerpoint: 'MS-Powerpoint',
        pdf: 'PDF'
    };

    $.extend($.fn.bootstrapTable.defaults, {
        showExport: false,
        exportDataType: 'basic', // basic, all, selected
        // 'json', 'xml', 'png', 'csv', 'txt', 'sql', 'doc', 'excel', 'powerpoint', 'pdf'
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
        exportOptions: {}
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
        export: 'glyphicon-export icon-share'
    });

    $.extend($.fn.bootstrapTable.locales, {
        formatExport: function () {
            return 'Export data';
        }
    });
    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initToolbar = function () {
        this.showToolbar = this.showToolbar || this.options.showExport;

        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.showExport) {
            var that = this,
                $btnGroup = this.$toolbar.find('>.btn-group'),
                $export = $btnGroup.find('div.export');

            if (!$export.length) {
                $export = $([
                    '<div class="export btn-group">',
                        '<button class="btn' +
                            sprintf(' btn-%s', this.options.buttonsClass) +
                            sprintf(' btn-%s', this.options.iconSize) +
                            ' dropdown-toggle" aria-label="export type" ' +
                            'title="' + this.options.formatExport() + '" ' +
                            'data-toggle="dropdown" type="button">',
                            sprintf('<i class="%s %s"></i> ', this.options.iconsPrefix, this.options.icons.export),
                            '<span class="caret"></span>',
                        '</button>',
                        '<ul class="dropdown-menu" role="menu">',
                        '</ul>',
                    '</div>'].join('')).appendTo($btnGroup);

                var $menu = $export.find('.dropdown-menu'),
                    exportTypes = this.options.exportTypes;

                if (typeof this.options.exportTypes === 'string') {
                    var types = this.options.exportTypes.slice(1, -1).replace(/ /g, '').split(',');

                    exportTypes = [];
                    $.each(types, function (i, value) {
                        exportTypes.push(value.slice(1, -1));
                    });
                }
                $.each(exportTypes, function (i, type) {
                    if (TYPE_NAME.hasOwnProperty(type)) {
                        $menu.append(['<li role="menuitem" data-type="' + type + '">',
                                '<a href="javascript:void(0)">',
                                    TYPE_NAME[type],
                                '</a>',
                            '</li>'].join(''));
                    }
                });

                $menu.find('li').click(function () {
                    var type = $(this).data('type'),
                        doExport = function () {

                            if (!!that.options.exportFooter) {
                                var data = that.getData();
                                var $footerRow = that.$tableFooter.find("tr").first();

                                var footerData = { };
                                var footerHtml = [];

                                $.each($footerRow.children(), function (index, footerCell) {

                                    var footerCellHtml = $(footerCell).children(".th-inner").first().html();
                                    footerData[that.columns[index].field] = footerCellHtml == '&nbsp;' ? null : footerCellHtml;

                                    // grab footer cell text into cell index-based array
                                    footerHtml.push(footerCellHtml);
                                });

                                that.append(footerData);

                                var $lastTableRow = that.$body.children().last();

                                $.each($lastTableRow.children(), function (index, lastTableRowCell) {

                                    $(lastTableRowCell).html(footerHtml[index]);
                                });
                            }

                            that.$el.tableExport($.extend({}, that.options.exportOptions, {
                                type: type,
                                escape: false
                            }));

                            if (!!that.options.exportFooter) {
                                that.load(data);
                            }
                        };

                    var stateField = that.header.stateField;

                    if (that.options.exportDataType === 'all' && that.options.pagination) {
                        that.$el.one(that.options.sidePagination === 'server' ? 'post-body.bs.table' : 'page-change.bs.table', function () {
                            if (stateField) {
                                that.hideColumn(stateField);
                            }
                            doExport();
                            that.togglePagination();
                        });
                        that.togglePagination();
                    } else if (that.options.exportDataType === 'selected') {
                        var data = that.getData(),
                            selectedData = that.getSelections();
                        if (!selectedData.length) {
                            return;
                        }

                        if (that.options.sidePagination === 'server') {
                            var dataServer = {total: that.options.totalRows};
                            dataServer[that.options.dataField] = data;
                            data = dataServer;
                            var selectedDataServer = {total: selectedData.length};
                            selectedDataServer[that.options.dataField] = selectedData;
                            selectedData = selectedDataServer;
                        }

                        that.load(selectedData);
                        if (stateField) {
                            that.hideColumn(stateField);
                        }
                        doExport();
                        that.load(data);
                    } else {
                        if (stateField) {
                            that.hideColumn(stateField);
                        }
                        doExport();
                    }
                    if (stateField) {
                        that.showColumn(stateField);
                    }
                });
            }
        }
    };
})(jQuery);
