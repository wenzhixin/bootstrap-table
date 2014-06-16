/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.0.1
 */

!function ($) {

    'use strict';

    // TOOLS DEFINITION
    // ======================

    // it only does '%s', and return '' when arguments are undefined
    var sprintf = function(str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function() {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        if (flag) {
            return str;
        }
        return '';
    };

    // BOOTSTRAP TABLE CLASS DEFINITION
    // ======================

    var BootstrapTable = function(el, options) {
        this.options = options;
        this.$el = $(el);
        this.$el_ = this.$el.clone();

        this.init();
    };

    BootstrapTable.DEFAULTS = {
        classes: 'table table-hover',
        height: undefined,
        undefinedText: '-',
        sortName: undefined,
        sortOrder: 'asc',
        striped: false,
        columns: [],
        data: [],
        method: 'get',
        url: undefined,
        queryParams: {},
        pagination: false,
        sidePagination: 'client', // client or server
        totalRows: 0, // server side need to set
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 20, 30, 40, 50],

        onClickRow: function(item) {return false;},
        onSort: function(name, order) {return false;},
        onCheck: function(row) {return false;},
        onUncheck: function(row) {return false;},
        onCheckAll: function(rows) {return false;},
        onUncheckAll: function(rows) {return false;}
    };

    BootstrapTable.prototype.init = function() {
        this.initContainer();
        this.initHeader();
        this.initData();
        this.initPagination();
        this.initBody();
        this.initServer();
    };

    BootstrapTable.prototype.initContainer = function() {
        this.$container = $([
            '<div class="fixed-table-container">',
                '<div class="fixed-table-header"></div>',
                '<div class="fixed-table-body"></div>',
                '<div class="fixed-table-pagination"></div>',
            '</div>'].join(''));
        this.$container.insertAfter(this.$el);
        this.$container.find('.fixed-table-body').append(this.$el);
        this.$container.after('<div class="clearfix"></div>');

        if (this.options.height) {
            this.$container.css('height', this.options.height + 'px');
        }
        this.$el.addClass(this.options.classes);
        if (this.options.striped) {
            this.$el.addClass('table-striped');
        }
    };

    BootstrapTable.prototype.initHeader = function() {
        var that = this,
            columns = [],
            html = [];

        this.$header = this.$el.find('thead');
        if (!this.$header.length) {
            this.$header = $('<thead></thead>').appendTo(this.$el);
        }
        if (!this.$header.find('tr').length) {
            this.$header.append('<tr></tr>');
        }
        this.$header.find('th').each(function() {
            var column = $.extend({}, {
                title: $(this).text()
            }, $(this).data());

            columns.push(column);
        });
        this.options.columns = $.extend(columns, this.options.columns);

        this.header = {
            fields: [],
            styles: [],
            formatters: [],
            sorters: []
        };
        $.each(this.options.columns, function(i, column) {
            var text = '',
                style = sprintf('text-align: %s; ', column.align) + sprintf('vertical-align: %s; ', column.valign),
                order = that.options.sortOrder || column.order || 'asc';

            that.header.fields.push(column.field);
            that.header.styles.push(style);
            that.header.formatters.push(column.formatter);
            that.header.sorters.push(column.sorter);

            style = sprintf('width: %spx; ', column.checkbox || column.radio ? 36 : column.width);
            style += column.sortable ? 'cursor: pointer; ' : '';

            html.push('<th' + sprintf(' style="%s"', style) + '>');
            html.push('<div class="th-inner">');

            text = column.title;
            if (that.options.sortName === column.field && column.sortable) {
                text += that.getCaretHtml();
            }

            if (column.checkbox) {
                text = '<input name="btSelectAll" type="checkbox" class="checkbox" />';
                that.header.stateField = column.field;
            }
            if (column.radio) {
                text = '';
                that.header.stateField = column.field;
            }

            html.push(text);
            html.push('</div>');
            html.push('</th>');
        });

        this.$header.find('tr').html(html.join(''));
        this.$header.find('th').each(function(i) {
            $(this).data(columns[i]);

            if (columns[i].sortable) {
                $(this).click($.proxy(that.onSort, that));
            }
        });
        this.$selectAll = this.$header.find('[name="btSelectAll"]');
        this.$selectAll.off('click').on('click', function() {
            var checked = $(this).prop('checked');
            that[checked ? 'checkAll' : 'uncheckAll']();
        });
    };

    BootstrapTable.prototype.initData = function(data, append) {
        if (append) {
            this.data = this.data.concat(data);
        } else {
            this.data = data || this.options.data;
        }

        this.initSort();
    };

    BootstrapTable.prototype.initSort = function() {
        var name = this.options.sortName,
            order = this.options.sortOrder === 'desc' ? -1 : 1,
            index = $.inArray(this.options.sortName, this.header.fields);

        if (index !== -1) {
            var sorter = this.header.sorters[index];
            this.data.sort(function(a, b) {
                if (typeof sorter === 'function') {
                    return order * sorter(a[name], b[name]);
                }
                if (typeof sorter === 'string') {
                    return order * eval(sorter + '(a[name], b[name])'); // eval ?
                }
                if (a[name] === b[name]) {
                    return 0;
                }
                if (a[name] < b[name]) {
                    return order * -1;
                }
                return order;
            });
        }
    };

    BootstrapTable.prototype.onSort = function(event) {
        var $this = $(event.currentTarget);

        this.$header.find('span.order').remove();
        this.options.sortName = $this.data('field');
        this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc';
        this.options.onSort(this.options.sortName, this.options.sortOrder);

        $this.data('order', this.options.sortOrder);
        $this.find('.th-inner').append(this.getCaretHtml());

        this.initSort();
        this.initBody();
    };

    BootstrapTable.prototype.initPagination = function() {
        if (!this.options.pagination) {
            return;
        }

        this.$pagination = this.$container.find('.fixed-table-pagination');

        if (this.options.sidePagination === 'client') {
            this.options.totalRows = this.data.length;
        }
        this.updatePagination();
    };

    BootstrapTable.prototype.updatePagination = function() {
        var that = this,
            html = [],
            i, from, to,
            $pageList,
            $first, $pre,
            $next, $last,
            $number;

        this.totalPages = 0;
        if (this.options.totalRows) {
            this.totalPages = ~~((this.options.totalRows - 1) / this.options.pageSize) + 1;
        }
        if (this.totalPages > 0 && this.options.pageNumber > this.totalPages) {
            this.options.pageNumber = this.totalPages;
        }
        this.pageFrom = (this.options.pageNumber - 1) * this.options.pageSize + 1;
        this.pageTo = this.options.pageNumber * this.options.pageSize;
        if (this.pageTo > this.options.totalRows) {
            this.pageTo = this.options.totalRows;
        }
        html.push(
            '<div class="pull-left pagination">',
                '<div class="pagination-info">',
                    sprintf('Showing %s to %s of %s rows', this.pageFrom, this.pageTo, this.options.totalRows),
                '</div>',
            '</div>',
            '<div class="pull-right">',
                '<ul class="pagination">',
                    '<li class="page-first"><a href="javascript:void(0)">&lt;&lt;</a></li>',
                    '<li class="page-pre"><a href="javascript:void(0)">&lt;</a></li>');

        if (this.totalPages < 5) {
            from = 1;
            to = this.totalPages;
        } else {
            from = this.options.pageNumber - 2;
            to = from + 4;
            if (from < 1) {
                from = 1;
                to = 5;
            }
            if (to > this.totalPages) {
                to = this.totalPages;
                from = to - 4;
            }
        }
        for (i = from; i <= to; i++) {
            html.push('<li class="page-number' + (i === this.options.pageNumber ? ' active' : '') + '">',
                '<a href="javascript:void(0)">', i ,'</a>',
                '</li>');
        }

        html.push(
                    '<li class="page-next"><a href="javascript:void(0)">&gt;</a></li>',
                    '<li class="page-last"><a href="javascript:void(0)">&gt;&gt;</a></li>',
                '</ul>',
            '</div>');

        html.push(
            '<div class="pagination btn-group dropup page-list">',
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">',
                    this.options.pageSize,
                    ' <span class="caret"></span>',
                '</button>',
                '<ul class="dropdown-menu" role="menu">');
        $.each(this.options.pageList, function(i, page) {
            var active = page === that.options.pageSize ? ' class="active"' : '';
            html.push(sprintf('<li%s><a href="javascript:void(0)">%s</a></li>', active, page));
        });
        html.push(
                '</ul>',
            '</div>');

        this.$pagination.html(html.join(''));

        $pageList = this.$pagination.find('.page-list a');
        $first = this.$pagination.find('.page-first');
        $pre = this.$pagination.find('.page-pre');
        $next = this.$pagination.find('.page-next');
        $last = this.$pagination.find('.page-last');
        $number = this.$pagination.find('.page-number');

        if (this.options.pageNumber <= 1) {
            $first.addClass('disabled');
            $pre.addClass('disabled');
        }
        if (this.options.pageNumber >= this.totalPages) {
            $next.addClass('disabled');
            $last.addClass('disabled');
        }
        $pageList.off('click').on('click', $.proxy(this.onPageListChange, this));
        $first.off('click').on('click', $.proxy(this.onPageFirst, this));
        $pre.off('click').on('click', $.proxy(this.onPagePre, this));
        $next.off('click').on('click', $.proxy(this.onPageNext, this));
        $last.off('click').on('click', $.proxy(this.onPageLast, this));
        $number.off('click').on('click', $.proxy(this.onPageNumber, this));
    };

    BootstrapTable.prototype.onPageListChange = function(event) {
        this.options.pageSize = +$(event.currentTarget).text();
        this.updatePagination();
        this.initBody();
    };

    BootstrapTable.prototype.onPageFirst = function() {
        this.options.pageNumber = 1;
        this.updatePagination();
        this.initBody();
    };

    BootstrapTable.prototype.onPagePre = function() {
        this.options.pageNumber--;
        this.updatePagination();
        this.initBody();
    };

    BootstrapTable.prototype.onPageNext = function() {
        this.options.pageNumber++;
        this.updatePagination();
        this.initBody();
    };

    BootstrapTable.prototype.onPageLast = function() {
        this.options.pageNumber = this.totalPages;
        this.updatePagination();
        this.initBody();
    };

    BootstrapTable.prototype.onPageNumber = function(event) {
        this.options.pageNumber = +$(event.currentTarget).text();
        this.updatePagination();
        this.initBody();
    };

    BootstrapTable.prototype.initBody = function() {
        var that = this,
            html = [];

        this.$body = this.$el.find('tbody');
        if (!this.$body.length) {
            this.$body = $('<tbody></tbody>').appendTo(this.$el);
        }

        if (!this.options.pagination) {
            this.pageFrom = 1;
            this.pageTo = this.data.length;
        }

        for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
            var item = this.data[i];

            html.push('<tr' + ' data-index="' + i + '">');

            $.each(that.header.fields, function(j, field) {
                var text = '',
                    value = item[field],
                    type = '';

                if (typeof that.header.formatters[j] === 'function') {
                    value = that.header.formatters[j](value, item);
                }

                text = ['<td' + sprintf(' style="%s"', that.header.styles[j]) + '>',
                    typeof value === 'undefined' ? that.options.undefinedText : value,
                    '</td>'].join('');

                if (that.options.columns[j].checkbox || that.options.columns[j].radio) {
                    type = that.options.columns[j].checkbox ? 'checkbox' : type;
                    type = that.options.columns[j].radio ? 'radio' : type;

                    text = ['<td>',
                        '<input name="btSelectItem" class="checkbox" data-index="' + i + '"' +
                            sprintf(' type="%s"', type) +
                            sprintf(' checked="%s"', value ? 'checked' : undefined) + ' />',
                        '</td>'].join('');
                }
                html.push(text);
            });

            html.push('</tr>');
        }

        this.$body.html(html.join(''));

        this.$body.find('tr').off('click').on('click', function() {
            that.options.onClickRow(that.data[$(this).data('index')]);
        });

        this.$selectItem = this.$body.find('[name="btSelectItem"]');
        this.$selectItem.off('click').on('click', function() {
            var checkAll = that.data.length === that.$selectItem.filter(':checked').length;
            that.$selectAll.prop('checked', checkAll);
            that.data[$(this).data('index')][that.header.stateField] = $(this).prop('checked');
        });
        this.resetView();
    };

    BootstrapTable.prototype.initServer = function() {
        var that = this;

        if (!this.options.url) {
            return;
        }
        $.ajax({
            type: this.options.method,
            url: this.options.url,
            data: this.options.queryParams,
            contentType: 'application/json',
            dataType: 'json',
            success: function(data) {
                that.load(data);
            }
        });
    };

    BootstrapTable.prototype.getCaretHtml = function() {
        return ['<span class="order' + (this.options.sortOrder === 'desc' ? '' : ' dropup') + '">',
                '<span class="caret" style="margin: 10px 5px;"></span>',
            '</span>'].join('');
    };

    BootstrapTable.prototype.resetView = function() {
        var header = this.header;

        this.$header.find('.th-inner').each(function(i) {
            $(this).attr('style', header.styles[i])
                .css('width', ($(this).parent().width()) + 'px'); // padding: 8px
        });
    };

    BootstrapTable.prototype.updateRows = function(checked) {
        var that = this;

        $.each(this.data, function(i, row) {
            row[that.header.stateField] = checked;
        });
    };

    // PUBLIC FUNCTION DEFINITION
    // =======================

    BootstrapTable.prototype.load = function(data) {
        this.initData(data);
        this.initPagination();
        this.initBody();
    };

    BootstrapTable.prototype.append = function(data) {
        this.initData(data, true);
        this.initBody();
    };

    BootstrapTable.prototype.mergeCells = function(options) {
        var row = options.index,
            col = $.inArray(options.field, this.header.fields),
            rowspan = options.rowspan || 1,
            colspan = options.colspan || 1,
            i, j,
            $tr = this.$body.find('tr'),
            $td = $tr.eq(row).find('td').eq(col);

        if (row < 0 || col < 0 || row >= this.data.length) {
            return;
        }

        for (i = row; i < row + rowspan; i++) {
            for (j = col; j < col + colspan; j++) {
                $tr.eq(i).find('td').eq(j).hide();
            }
        }

        $td.attr('rowspan', rowspan).attr('colspan', colspan).show();
    };

    BootstrapTable.prototype.getSelections = function() {
        var that = this;

        return $.grep(this.data, function(row) {
            return row[that.header.stateField];
        });
    };

    BootstrapTable.prototype.checkAll = function() {
        this.$selectAll.prop('checked', true);
        this.$selectItem.prop('checked', true);
        this.updateRows(true);
    };

    BootstrapTable.prototype.uncheckAll = function() {
        this.$selectAll.prop('checked', false);
        this.$selectItem.prop('checked', false);
        this.updateRows(false);
    };

    BootstrapTable.prototype.destroy = function() {
        this.$container.replaceWith(this.$el_);
        return this.$el_;
    };


    // BOOTSTRAP TABLE PLUGIN DEFINITION
    // =======================

    $.fn.bootstrapTable = function(option, _relatedTarget) {
        var allowedMethods = [
                'getSelections',
                'load', 'append', 'mergeCells',
                'checkAll', 'uncheckAll',
                'destroy'
            ],
            value;

        this.each(function() {
            var $this = $(this),
                data = $this.data('bootstrap.table'),
                options = $.extend({}, BootstrapTable.DEFAULTS, $this.data(), typeof option === 'object' && option);

            if (!data) {
                $this.data('bootstrap.table', (data = new BootstrapTable(this, options)));
            }

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw "Unknown method: " + option;
                }
                value = data[option](_relatedTarget);
            }
        });

        return value ? value : this;
    };

    $.fn.bootstrapTable.Constructor = BootstrapTable;

    // BOOTSTRAP TABLE INIT
    // =======================

    $(function() {
        $('[data-toggle="table"]').bootstrapTable();
    });

}(jQuery);
