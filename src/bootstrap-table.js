/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.0.4
 * https://github.com/wenzhixin/bootstrap-table/
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

    var getPropertyFromOther = function(list, from, to, value) {
        var result = '';
        $.each(list, function(i, item) {
            if (item[from] === value) {
                result = item[to];
                return false;
            }
            return true;
        });
        return result;
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
        queryParams: function(pageSize, pageNumber) {return {};},
        pagination: false,
        sidePagination: 'client', // client or server
        totalRows: 0, // server side need to set
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 25, 50, 100],
        search: false,
        selectItemName: 'btSelectItem',
        showHeader: true,
        showColumns: false,
        idField: undefined,
        cardView: false,
        clickToSelect: false,

        formatLoadingMessage: function() {
            return 'Loading, please wait…';
        },
        formatRecordsPerPage: function(pageNumber) {
            return sprintf('%s records per page', pageNumber);
        },
        formatShowingRows: function(pageFrom, pageTo, totalRows) {
            return sprintf('Showing %s to %s of %s rows', pageFrom, pageTo, totalRows);
        },
        formatSearch: function() {
            return 'Search';
        },
        formatNoMatches: function() {
            return 'No matching records found';
        },

        onClickRow: function(item) {return false;},
        onSort: function(name, order) {return false;},
        onCheck: function(row) {return false;},
        onUncheck: function(row) {return false;},
        onCheckAll: function() {return false;},
        onUncheckAll: function() {return false;},
        onLoadSuccess: function(data) {return false;},
        onLoadError: function(status) {return false;}
    };

    BootstrapTable.COLUMN_DEFAULTS = {
        radio: false,
        checkbox: false,
        field: undefined,
        title: undefined,
        align: undefined, // left, right, center
        valign: undefined, // top, middle, bottom
        width: undefined,
        sortable: false,
        order: 'asc', // asc, desc
        visible: true,
        formatter: undefined,
        sorter: undefined
    };

    BootstrapTable.prototype.init = function() {
        this.initContainer();
        this.initHeader();
        this.initData();
        this.initToolbar();
        this.initPagination();
        this.initBody();
        this.initServer();
    };

    BootstrapTable.prototype.initContainer = function() {
        this.$container = $([
            '<div class="bootstrap-table">',
                '<div class="fixed-table-toolbar"></div>',
                '<div class="fixed-table-container">',
                    '<div class="fixed-table-header"></div>',
                    '<div class="fixed-table-body">',
                        '<div class="fixed-table-loading">',
                            this.options.formatLoadingMessage(),
                        '</div>',
                    '</div>',
                    '<div class="fixed-table-pagination"></div>',
                '</div>',
            '</div>'].join(''));

        this.$container.insertAfter(this.$el);
        this.$container.find('.fixed-table-body').append(this.$el);
        this.$container.after('<div class="clearfix"></div>');
        this.$loading = this.$container.find('.fixed-table-loading');

        this.$el.addClass(this.options.classes);
        if (this.options.striped) {
            this.$el.addClass('table-striped');
        }
    };

    BootstrapTable.prototype.initHeader = function() {
        var that = this,
            columns = [],
            visibleColumns = [],
            html = [];

        this.$header = this.$el.find('thead');
        if (!this.$header.length) {
            this.$header = $('<thead></thead>').appendTo(this.$el);
        }
        if (!this.$header.find('tr').length) {
            this.$header.append('<tr></tr>');
        }
        this.$header.find('th').each(function() {
            var column = $.extend({},
                BootstrapTable.COLUMN_DEFAULTS, {
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
                style = sprintf('text-align: %s; ', column.align) +
                        sprintf('vertical-align: %s; ', column.valign),
                order = that.options.sortOrder || column.order;

            if (!column.visible) {
                return;
            }

            visibleColumns.push(column);
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
            $(this).data(visibleColumns[i]);

            if (visibleColumns[i].sortable) {
                $(this).off('click').on('click', $.proxy(that.onSort, that));
            }
        });

        if (!this.options.showHeader || this.options.cardView) {
            this.$header.hide();
            this.$container.find('.fixed-table-header').css('border-bottom', 'none');
            this.$container.find('.fixed-table-container').css('padding-top', 0);
            this.$loading.css('top', 0);
        }

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

    BootstrapTable.prototype.initToolbar = function() {
        var that = this,
            html = [],
            $pageList,
            $keepOpen,
            $search;

        this.$toolbar = this.$container.find('.fixed-table-toolbar');

        if (this.options.pagination) {
            html = [];
            html.push('<div class="page-list">');

            var pageNumber = [
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">',
                    '<span class="page-size">',
                    this.options.pageSize,
                    '</span>',
                    ' <span class="caret"></span>',
                '</button>',
                '<ul class="dropdown-menu" role="menu">'];

            $.each(this.options.pageList, function(i, page) {
                var active = page === that.options.pageSize ? ' class="active"' : '';
                pageNumber.push(sprintf('<li%s><a href="javascript:void(0)">%s</a></li>', active, page));
            });
            pageNumber.push('</ul>');

            html.push(this.options.formatRecordsPerPage(pageNumber.join('')));
            html.push('</div>');

            this.$toolbar.append(html.join(''));
            $pageList = this.$toolbar.find('.page-list a');
            $pageList.off('click').on('click', $.proxy(this.onPageListChange, this));
        }

        if (this.options.showColumns) {
            html = [];
            html.push('<div class="columns pull-right keep-open">',
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">',
                '<i class="glyphicon glyphicon-th icon-th"></i>',
                ' <span class="caret"></span>',
                '</button>',
                '<ul class="dropdown-menu" role="menu">');

            $.each(this.options.columns, function(i, column) {
                if (column.radio || column.checkbox) {
                    return;
                }
                var checked = column.visible ? ' checked="checked"' : '';

                html.push(sprintf('<li>' +
                    '<label><input type="checkbox" value="%s"%s> %s</label>' +
                    '</li>', i, checked, column.title));
            });
            html.push('</ul>',
                '</div>');

            this.$toolbar.append(html.join(''));

            $keepOpen = this.$toolbar.find('.keep-open label');
            $keepOpen.off('click').on('click', function(event) {
                event.stopPropagation();
                var $this = $(this).find('input');

                that.options.columns[$this.val()].visible = $this.prop('checked');
                that.initHeader();
                that.initBody();
            });
        }

        if (this.options.search) {
            html = [];
            html.push(
                '<div class="pull-right search">',
                    sprintf('<input class="form-control" type="text" placeholder="%s">',
                        this.options.formatSearch()),
                '</div>');

            this.$toolbar.append(html.join(''));
            $search = this.$toolbar.find('.search input');
            $search.off('keyup').on('keyup', $.proxy(this.onSearch, this));
        }
    };

    BootstrapTable.prototype.onSearch = function(event) {
        var that = this;

        this.searchText = $(event.currentTarget).val();
        this.searchData = $.grep(this.data, function(item) {
            for (var key in item) {
                if (typeof item[key] === 'string' && item[key].indexOf(that.searchText) !== -1) {
                    return true;
                }
            }
            return false;
        });
        this.resetRows();
        this.initPagination();
        this.initBody();
    };

    BootstrapTable.prototype.initPagination = function() {
        this.$pagination = this.$container.find('.fixed-table-pagination');

        if (!this.options.pagination) {
            return;
        }
        var that = this,
            html = [],
            i, from, to,
            $first, $pre,
            $next, $last,
            $number,
            data = this.searchText ? this.searchData : this.data;

        if (this.options.sidePagination !== 'server') {
            this.options.totalRows = data.length;
        }

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
                    this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows),
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

        this.$pagination.html(html.join(''));

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
        $first.off('click').on('click', $.proxy(this.onPageFirst, this));
        $pre.off('click').on('click', $.proxy(this.onPagePre, this));
        $next.off('click').on('click', $.proxy(this.onPageNext, this));
        $last.off('click').on('click', $.proxy(this.onPageLast, this));
        $number.off('click').on('click', $.proxy(this.onPageNumber, this));
    };

    BootstrapTable.prototype.updatePagination = function() {
        this.resetRows();
        this.initPagination();
        if (this.options.sidePagination === 'server') {
            this.initServer();
        } else {
            this.initBody();
        }
    };

    BootstrapTable.prototype.onPageListChange = function(event) {
        var $this = $(event.currentTarget);

        $this.parent().addClass('active').siblings().removeClass('active');
        this.options.pageSize = +$this.text();
        this.$toolbar.find('.page-size').text(this.options.pageSize);
        this.updatePagination();
    };

    BootstrapTable.prototype.onPageFirst = function() {
        this.options.pageNumber = 1;
        this.updatePagination();
    };

    BootstrapTable.prototype.onPagePre = function() {
        this.options.pageNumber--;
        this.updatePagination();
    };

    BootstrapTable.prototype.onPageNext = function() {
        this.options.pageNumber++;
        this.updatePagination();
    };

    BootstrapTable.prototype.onPageLast = function() {
        this.options.pageNumber = this.totalPages;
        this.updatePagination();
    };

    BootstrapTable.prototype.onPageNumber = function(event) {
        if (this.options.pageNumber === +$(event.currentTarget).text()) {
            return;
        }
        this.options.pageNumber = +$(event.currentTarget).text();
        this.updatePagination();
    };

    BootstrapTable.prototype.initBody = function() {
        var that = this,
            html = [],
            data = this.searchText ? this.searchData : this.data;

        this.$body = this.$el.find('tbody');
        if (!this.$body.length) {
            this.$body = $('<tbody></tbody>').appendTo(this.$el);
        }

        if (!this.options.pagination || this.options.sidePagination === 'server') {
            this.pageFrom = 1;
            this.pageTo = data.length;
        }

        for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
            var item = data[i];

            html.push('<tr' + ' data-index="' + i + '">');

            if (this.options.cardView) {
                html.push(sprintf('<td colspan="%s">', this.header.fields.length));
            }

            $.each(this.header.fields, function(j, field) {
                var text = '',
                    value = item[field],
                    type = '',
                    style = sprintf('style="%s"', that.header.styles[j]);

                if (typeof that.header.formatters[j] === 'function') {
                    value = that.header.formatters[j](value, item, i);
                } else if (typeof that.header.formatters[j] === 'string') {
                    value = eval(that.header.formatters[j] + '(value, item, i)'); // eval ?
                }

                if (that.options.columns[j].checkbox || that.options.columns[j].radio) {
                    type = that.options.columns[j].checkbox ? 'checkbox' : type;
                    type = that.options.columns[j].radio ? 'radio' : type;

                    text = ['<td>',
                        '<input class="checkbox"' +
                            sprintf(' data-index="%s"', i) +
                            sprintf(' name="%s"', that.options.selectItemName) +
                            sprintf(' type="%s"', type) +
                            sprintf(' value="%s"', item[that.options.idField]) +
                            sprintf(' checked="%s"', value ? 'checked' : undefined) + ' />',
                        '</td>'].join('');
                } else {
                    value = typeof value === 'undefined' ? that.options.undefinedText : value;

                    text = that.options.cardView ?
                        ['<div class="card-view">',
                            sprintf('<span class="title" %s>%s</span>', style,
                                getPropertyFromOther(that.options.columns, 'field', 'title', field)),
                            sprintf('<span class="value">%s</span>', value),
                            '</div>'].join('') :
                        [sprintf('<td %s>', style),
                            value,
                            '</td>'].join('');
                }

                html.push(text);
            });

            if (this.options.cardView) {
                html.push('</td>');
            }

            html.push('</tr>');
        }

        // show no records
        if (!html.length) {
            html.push('<tr class="no-records-found">',
                sprintf('<td colspan="%s">%s</td>', this.header.fields.length, this.options.formatNoMatches()),
                '</tr>');
        }

        this.$body.html(html.join(''));

        this.$body.find('tr').off('click').on('click', function() {
            that.options.onClickRow(that.data[$(this).data('index')]);
            if (that.options.clickToSelect) {
                $(this).find(sprintf('[name="%s"]', that.options.selectItemName)).trigger('click');
            }
        });

        this.$selectItem = this.$body.find(sprintf('[name="%s"]', this.options.selectItemName));
        this.$selectItem.off('click').on('click', function(event) {
            event.stopImmediatePropagation();
            var checkAll = that.$selectItem.length === that.$selectItem.filter(':checked').length,
                checked = $(this).prop('checked'),
                row = that.data[$(this).data('index')];

            that.$selectAll.prop('checked', checkAll);
            row[that.header.stateField] = checked;
            that.options[checked ? 'onCheck' : 'onUncheck'](row);
        });
        this.resetView();
    };

    BootstrapTable.prototype.initServer = function() {
        var that = this,
            data = {};

        if (!this.options.url) {
            return;
        }
        this.$loading.show();

        if (typeof this.options.queryParams === 'function') {
            data = this.options.queryParams(this.options.pageSize, this.options.pageNumber);
        } else if (typeof this.options.queryParams === 'string') {
            data = eval(this.options.queryParams + '(this.options.pageSize, this.options.pageNumber)');
        }

        $.ajax({
            type: this.options.method,
            url: this.options.url,
            data: data,
            contentType: 'application/json',
            dataType: 'json',
            success: function(res) {
                var data = res;

                if (that.options.sidePagination === 'server') {
                    that.options.totalRows = res.total;
                    data = res.rows;
                }
                that.load(data);
                that.options.onLoadSuccess(data);
            },
            error: function(res) {
                that.options.onLoadError(res.status);
            },
            complete: function() {
                that.$loading.hide();
            }
        });
    };

    BootstrapTable.prototype.getCaretHtml = function() {
        return ['<span class="order' + (this.options.sortOrder === 'desc' ? '' : ' dropup') + '">',
                '<span class="caret" style="margin: 10px 5px;"></span>',
            '</span>'].join('');
    };

    BootstrapTable.prototype.updateRows = function(checked) {
        var that = this;

        this.$selectItem.each(function() {
            that.data[$(this).data('index')][that.header.stateField] = checked;
        });
    };

    BootstrapTable.prototype.resetRows = function() {
        var that = this;

        $.each(this.data, function(i, row) {
            that.$selectAll.prop('checked', false);
            that.$selectItem.prop('checked', false);
            row[that.header.stateField] = false;
        });
    };

    // PUBLIC FUNCTION DEFINITION
    // =======================

    BootstrapTable.prototype.resetView = function() {
        var that = this,
            header = this.header;

        this.$selectAll.prop('checked', this.$selectItem.length > 0 &&
            this.$selectItem.length === this.$selectItem.filter(':checked').length);

        if (this.options.height) {
            var toolbarHeight = +this.$toolbar.children().outerHeight(true),
                paginationHeight = +this.$pagination.children().outerHeight(true),
                height = this.options.height - toolbarHeight - paginationHeight;

            this.$container.find('.fixed-table-container').css('height', height + 'px');
        }

        this.$header.find('.th-inner').each(function(i) {
            var width = $(this).parent().width();

            $(this).attr('style', header.styles[i])
                .css('position', 'absolute')
                .css('width', width + 'px'); // padding: 8px
            that.$body.find('tr:eq(0) td').eq(i).css('width', width + 'px'); // fix th width display error
        });
    };

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
        this.options.onCheckAll();
    };

    BootstrapTable.prototype.uncheckAll = function() {
        this.$selectAll.prop('checked', false);
        this.$selectItem.prop('checked', false);
        this.updateRows(false);
        this.options.onUncheckAll();
    };

    BootstrapTable.prototype.destroy = function() {
        this.$container.next().remove();
        this.$container.replaceWith(this.$el_);
        return this.$el_;
    };

    BootstrapTable.prototype.showLoading = function() {
        this.$loading.show();
    };

    BootstrapTable.prototype.hideLoading = function() {
        this.$loading.hide();
    };

    BootstrapTable.prototype.refresh = function() {
        this.initServer();
    };


    // BOOTSTRAP TABLE PLUGIN DEFINITION
    // =======================

    $.fn.bootstrapTable = function(option, _relatedTarget) {
        var allowedMethods = [
                'getSelections',
                'load', 'append', 'mergeCells',
                'checkAll', 'uncheckAll',
                'destroy', 'resetView',
                'showLoading', 'hideLoading',
                'refresh'
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
    $.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS;
    $.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS;

    // BOOTSTRAP TABLE INIT
    // =======================

    $(function() {
        $('[data-toggle="table"]').bootstrapTable();
    });

}(jQuery);
