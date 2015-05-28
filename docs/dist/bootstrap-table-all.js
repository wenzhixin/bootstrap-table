/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.8.1
 * https://github.com/wenzhixin/bootstrap-table/
 */

!function ($) {
    'use strict';

    // TOOLS DEFINITION
    // ======================

    var cellHeight = 37, // update css if changed
        cachedWidth = null,
        arrowAsc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ' +
        '0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBd' +
        'qEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVo' +
        'AADeemwtPcZI2wAAAABJRU5ErkJggg==',
        arrowBoth = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7X' +
        'QMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azio' +
        'NZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4eut' +
        's6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC',
        arrowDesc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWj' +
        'YBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJ' +
        'zcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII= ';

    // it only does '%s', and return '' when arguments are undefined
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

    var getPropertyFromOther = function (list, from, to, value) {
        var result = '';
        $.each(list, function (i, item) {
            if (item[from] === value) {
                result = item[to];
                return false;
            }
            return true;
        });
        return result;
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

    var getScrollBarWidth = function () {
        if (cachedWidth === null) {
            var inner = $('<p/>').addClass('fixed-table-scroll-inner'),
                outer = $('<div/>').addClass('fixed-table-scroll-outer'),
                w1, w2;

            outer.append(inner);
            $('body').append(outer);

            w1 = inner[0].offsetWidth;
            outer.css('overflow', 'scroll');
            w2 = inner[0].offsetWidth;

            if (w1 === w2) {
                w2 = outer[0].clientWidth;
            }

            outer.remove();
            cachedWidth = w1 - w2;
        }
        return cachedWidth;
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

    var escapeHTML = function (text) {
        if (typeof text === 'string') {
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }
        return text;
    };

    var getRealHeight = function ($el) {
        var height = 0;
        $el.children().each(function () {
            if (height < $(this).outerHeight(true)) {
                height = $(this).outerHeight(true);
            }
        });
        return height;
    };

    var getRealDataAttr = function (dataAttr) {
        for (var attr in dataAttr) {
            var auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase();
            if (auxAttr !== attr) {
                dataAttr[auxAttr] = dataAttr[attr];
                delete dataAttr[attr];
            }
        }

        return dataAttr;
    };

    // BOOTSTRAP TABLE CLASS DEFINITION
    // ======================

    var BootstrapTable = function (el, options) {
        this.options = options;
        this.$el = $(el);
        this.$el_ = this.$el.clone();
        this.timeoutId_ = 0;
        this.timeoutFooter_ = 0;

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
        ajax: undefined,
        cache: true,
        contentType: 'application/json',
        dataType: 'json',
        ajaxOptions: {},
        queryParams: function (params) {
            return params;
        },
        queryParamsType: 'limit', // undefined
        responseHandler: function (res) {
            return res;
        },
        pagination: false,
        sidePagination: 'client', // client or server
        totalRows: 0, // server side need to set
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 25, 50, 100],
        paginationHAlign: 'right', //right, left
        paginationVAlign: 'bottom', //bottom, top, both
        paginationDetailHAlign: 'left', //right, left
        paginationFirstText: '&laquo;',
        paginationPreText: '&lsaquo;',
        paginationNextText: '&rsaquo;',
        paginationLastText: '&raquo;',
        search: false,
        searchAlign: 'right',
        selectItemName: 'btSelectItem',
        showHeader: true,
        showFooter: false,
        showColumns: false,
        showPaginationSwitch: false,
        showRefresh: false,
        showToggle: false,
        buttonsAlign: 'right',
        smartDisplay: true,
        minimumCountColumns: 1,
        idField: undefined,
        uniqueId: undefined,
        cardView: false,
        detailView: false,
        detailFormatter: function (index, row) {
            return '';
        },
        trimOnSearch: true,
        clickToSelect: false,
        singleSelect: false,
        toolbar: undefined,
        toolbarAlign: 'left',
        checkboxHeader: true,
        sortable: true,
        maintainSelected: false,
        searchTimeOut: 500,
        searchText: '',
        iconSize: undefined,
        iconsPrefix: 'glyphicon', // glyphicon of fa (font awesome)
        icons: {
            paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
            paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
            refresh: 'glyphicon-refresh icon-refresh',
            toggle: 'glyphicon-list-alt icon-list-alt',
            columns: 'glyphicon-th icon-th'
        },

        rowStyle: function (row, index) {
            return {};
        },

        rowAttributes: function (row, index) {
            return {};
        },

        onAll: function (name, args) {
            return false;
        },
        onClickCell: function (field, value, row, $element) {
            return false;
        },
        onDblClickCell: function (field, value, row, $element) {
            return false;
        },
        onClickRow: function (item, $element) {
            return false;
        },
        onDblClickRow: function (item, $element) {
            return false;
        },
        onSort: function (name, order) {
            return false;
        },
        onCheck: function (row) {
            return false;
        },
        onUncheck: function (row) {
            return false;
        },
        onCheckAll: function (rows) {
            return false;
        },
        onUncheckAll: function (rows) {
            return false;
        },
        onCheckSome: function(rows){
            return false;
        },
        onUncheckSome: function(rows){
            return false;
        },
        onLoadSuccess: function (data) {
            return false;
        },
        onLoadError: function (status) {
            return false;
        },
        onColumnSwitch: function (field, checked) {
            return false;
        },
        onPageChange: function (number, size) {
            return false;
        },
        onSearch: function (text) {
            return false;
        },
        onToggle: function (cardView) {
            return false;
        },
        onPreBody: function (data) {
            return false;
        },
        onPostBody: function () {
            return false;
        },
        onPostHeader: function () {
            return false;
        },
        onExpandRow: function (index, row, $detail) {
            return false;
        },
        onCollapseRow: function (index, row) {
            return false;
        }
    };

    BootstrapTable.LOCALES = [];

    BootstrapTable.LOCALES['en-US'] = {
        formatLoadingMessage: function () {
            return 'Loading, please wait...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return sprintf('%s records per page', pageNumber);
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return sprintf('Showing %s to %s of %s rows', pageFrom, pageTo, totalRows);
        },
        formatSearch: function () {
            return 'Search';
        },
        formatNoMatches: function () {
            return 'No matching records found';
        },
        formatPaginationSwitch: function () {
            return 'Hide/Show pagination';
        },
        formatRefresh: function () {
            return 'Refresh';
        },
        formatToggle: function () {
            return 'Toggle';
        },
        formatColumns: function () {
            return 'Columns';
        },
        formatAllRows: function () {
            return 'All';
        }
    };

    $.extend(BootstrapTable.DEFAULTS, BootstrapTable.LOCALES['en-US']);

    BootstrapTable.COLUMN_DEFAULTS = {
        radio: false,
        checkbox: false,
        checkboxEnabled: true,
        field: undefined,
        title: undefined,
        'class': undefined,
        align: undefined, // left, right, center
        halign: undefined, // left, right, center
        falign: undefined, // left, right, center
        valign: undefined, // top, middle, bottom
        width: undefined,
        sortable: false,
        order: 'asc', // asc, desc
        visible: true,
        switchable: true,
        clickToSelect: true,
        formatter: undefined,
        footerFormatter: undefined,
        events: undefined,
        sorter: undefined,
        sortName: undefined,
        cellStyle: undefined,
        searchable: true,
        cardVisible: true
    };

    BootstrapTable.EVENTS = {
        'all.bs.table': 'onAll',
        'click-cell.bs.table': 'onClickCell',
        'dbl-click-cell.bs.table': 'onDblClickCell',
        'click-row.bs.table': 'onClickRow',
        'dbl-click-row.bs.table': 'onDblClickRow',
        'sort.bs.table': 'onSort',
        'check.bs.table': 'onCheck',
        'uncheck.bs.table': 'onUncheck',
        'check-all.bs.table': 'onCheckAll',
        'uncheck-all.bs.table': 'onUncheckAll',
        'check-some.bs.table': 'onCheckSome',
        'uncheck-some.bs.table': 'onUncheckSome',
        'load-success.bs.table': 'onLoadSuccess',
        'load-error.bs.table': 'onLoadError',
        'column-switch.bs.table': 'onColumnSwitch',
        'page-change.bs.table': 'onPageChange',
        'search.bs.table': 'onSearch',
        'toggle.bs.table': 'onToggle',
        'pre-body.bs.table': 'onPreBody',
        'post-body.bs.table': 'onPostBody',
        'post-header.bs.table': 'onPostHeader',
        'expand-row.bs.table': 'onExpandRow',
        'collapse-row.bs.table': 'onCollapseRow'
    };

    BootstrapTable.prototype.init = function () {
        this.initContainer();
        this.initTable();
        this.initHeader();
        this.initData();
        this.initFooter();
        this.initToolbar();
        this.initPagination();
        this.initBody();
        this.initServer();
    };

    BootstrapTable.prototype.initContainer = function () {
        this.$container = $([
            '<div class="bootstrap-table">',
            '<div class="fixed-table-toolbar"></div>',
            this.options.paginationVAlign === 'top' || this.options.paginationVAlign === 'both' ?
                '<div class="fixed-table-pagination" style="clear: both;"></div>' :
                '',
            '<div class="fixed-table-container">',
            '<div class="fixed-table-header"><table></table></div>',
            '<div class="fixed-table-body">',
            '<div class="fixed-table-loading">',
            this.options.formatLoadingMessage(),
            '</div>',
            '</div>',
            '<div class="fixed-table-footer"><table><tr></tr></table></div>',
            this.options.paginationVAlign === 'bottom' || this.options.paginationVAlign === 'both' ?
                '<div class="fixed-table-pagination"></div>' :
                '',
            '</div>',
            '</div>'].join(''));

        this.$container.insertAfter(this.$el);
        this.$tableContainer = this.$container.find('.fixed-table-container');
        this.$tableHeader = this.$container.find('.fixed-table-header');
        this.$tableBody = this.$container.find('.fixed-table-body');
        this.$tableLoading = this.$container.find('.fixed-table-loading');
        this.$tableFooter = this.$container.find('.fixed-table-footer');
        this.$toolbar = this.$container.find('.fixed-table-toolbar');
        this.$pagination = this.$container.find('.fixed-table-pagination');

        this.$tableBody.append(this.$el);
        this.$container.after('<div class="clearfix"></div>');

        this.$el.addClass(this.options.classes);
        if (this.options.striped) {
            this.$el.addClass('table-striped');
        }
        if ($.inArray('table-no-bordered', this.options.classes.split(' ')) !== -1) {
            this.$tableContainer.addClass('table-no-bordered');
        }
    };

    BootstrapTable.prototype.initTable = function () {
        var that = this,
            columns = [],
            data = [];

        this.$header = this.$el.find('thead');
        if (!this.$header.length) {
            this.$header = $('<thead></thead>').appendTo(this.$el);
        }
        if (!this.$header.find('tr').length) {
            this.$header.append('<tr></tr>');
        }
        this.$header.find('th').each(function () {
            var column = $.extend({}, {
                title: $(this).html(),
                'class': $(this).attr('class')
            }, $(this).data());

            columns.push(column);
        });
        this.options.columns = $.extend(true, [], columns, this.options.columns);
        $.each(this.options.columns, function (i, column) {
            that.options.columns[i] = $.extend({}, BootstrapTable.COLUMN_DEFAULTS,
                {field: i}, column); // when field is undefined, use index instead
        });

        // if options.data is setting, do not process tbody data
        if (this.options.data.length) {
            return;
        }

        this.$el.find('tbody tr').each(function () {
            var row = {};

            // save tr's id, class and data-* attributes
            row._id = $(this).attr('id');
            row._class = $(this).attr('class');
            row._data = getRealDataAttr($(this).data());

            $(this).find('td').each(function (i) {
                var field = that.options.columns[i].field;

                row[field] = $(this).html();
                // save td's id, class and data-* attributes
                row['_' + field + '_id'] = $(this).attr('id');
                row['_' + field + '_class'] = $(this).attr('class');
                row['_' + field + '_rowspan'] = $(this).attr('rowspan');
                row['_' + field + '_data'] = getRealDataAttr($(this).data());
            });
            data.push(row);
        });
        this.options.data = data;
    };

    BootstrapTable.prototype.initHeader = function () {
        var that = this,
            visibleColumns = [],
            html = [],
            timeoutId = 0;

        this.header = {
            fields: [],
            styles: [],
            classes: [],
            formatters: [],
            events: [],
            sorters: [],
            sortNames: [],
            cellStyles: [],
            clickToSelects: [],
            searchables: []
        };

        if (!this.options.cardView && this.options.detailView) {
            html.push('<th class="detail"><div class="fht-cell"></div></th>');
            visibleColumns.push({});
        }

        $.each(this.options.columns, function (i, column) {
            var text = '',
                halign = '', // header align style
                align = '', // body align style
                style = '',
                class_ = sprintf(' class="%s"', column['class']),
                order = that.options.sortOrder || column.order,
                unitWidth = 'px',
                width = column.width;

            if (!column.visible) {
                // Fix #229. Default Sort order is wrong
                // if data-visible="false" is set on the field referenced by data-sort-name.
                if (column.field === that.options.sortName) {
                    that.header.fields.push(column.field);
                }
                return;
            }

            if (that.options.cardView && (!column.cardVisible)) {
                return;
            }

            if (column.width !== undefined && (!that.options.cardView)) {
                if (typeof column.width === 'string') {
                    if (column.width.indexOf('%') !== -1) {
                        unitWidth = '%';
                    }
                }
            }
            if (column.width && typeof column.width === 'string') {
                width = column.width.replace('%', '').replace('px', '');
            }

            halign = sprintf('text-align: %s; ', column.halign ? column.halign : column.align);
            align = sprintf('text-align: %s; ', column.align);
            style = sprintf('vertical-align: %s; ', column.valign);
            style += sprintf('width: %s%s; ', column.checkbox || column.radio ? 36 : width, unitWidth);

            visibleColumns.push(column);
            that.header.fields.push(column.field);
            that.header.styles.push(align + style);
            that.header.classes.push(class_);
            that.header.formatters.push(column.formatter);
            that.header.events.push(column.events);
            that.header.sorters.push(column.sorter);
            that.header.sortNames.push(column.sortName);
            that.header.cellStyles.push(column.cellStyle);
            that.header.clickToSelects.push(column.clickToSelect);
            that.header.searchables.push(column.searchable);

            html.push('<th',
                column.checkbox || column.radio ?
                    sprintf(' class="bs-checkbox %s"', column['class'] || '') :
                    class_,
                sprintf(' style="%s"', halign + style),
                '>');

            html.push(sprintf('<div class="th-inner %s">', that.options.sortable && column.sortable ?
                'sortable' : ''));

            text = column.title;

            if (column.checkbox) {
                if (!that.options.singleSelect && that.options.checkboxHeader) {
                    text = '<input name="btSelectAll" type="checkbox" />';
                }
                that.header.stateField = column.field;
            }
            if (column.radio) {
                text = '';
                that.header.stateField = column.field;
                that.options.singleSelect = true;
            }

            html.push(text);
            html.push('</div>');
            html.push('<div class="fht-cell"></div>');
            html.push('</div>');
            html.push('</th>');
        });

        this.$header.find('tr').html(html.join(''));
        this.$header.find('th').each(function (i) {
            $(this).data(visibleColumns[i]);
        });
        this.$container.off('click', '.th-inner').on('click', '.th-inner', function (event) {
            if (that.options.sortable && $(this).parent().data().sortable) {
                that.onSort(event);
            }
        });

        if (!this.options.showHeader || this.options.cardView) {
            this.$header.hide();
            this.$tableHeader.hide();
            this.$tableLoading.css('top', 0);
        } else {
            this.$header.show();
            this.$tableHeader.show();
            this.$tableLoading.css('top', cellHeight + 'px');
            // Assign the correct sortable arrow
            this.getCaretHtml();
        }

        this.$selectAll = this.$header.find('[name="btSelectAll"]');
        this.$container.off('click', '[name="btSelectAll"]')
            .on('click', '[name="btSelectAll"]', function () {
                var checked = $(this).prop('checked');
                that[checked ? 'checkAll' : 'uncheckAll']();
            });
    };

    BootstrapTable.prototype.initFooter = function () {
        if (!this.options.showFooter || this.options.cardView) {
            this.$tableFooter.hide();
        } else {
            this.$tableFooter.show();
        }
    };

    /**
     * @param data
     * @param type: append / prepend
     */
    BootstrapTable.prototype.initData = function (data, type) {
        if (type === 'append') {
            this.data = this.data.concat(data);
        } else if (type === 'prepend') {
            this.data = [].concat(data).concat(this.data);
        } else {
            this.data = data || this.options.data;
        }

        // Fix #839 Records deleted when adding new row on filtered table
        if (type === 'append') {
            this.options.data = this.options.data.concat(data);
        } else if (type === 'prepend') {
            this.options.data = [].concat(data).concat(this.options.data);
        } else {
            this.options.data = this.data;
        }

        if (this.options.sidePagination === 'server') {
            return;
        }
        this.initSort();
    };

    BootstrapTable.prototype.initSort = function () {
        var that = this,
            name = this.options.sortName,
            order = this.options.sortOrder === 'desc' ? -1 : 1,
            index = $.inArray(this.options.sortName, this.header.fields);

        if (index !== -1) {
            this.data.sort(function (a, b) {
                if (that.header.sortNames[index]) {
                    name = that.header.sortNames[index];
                }
                var aa = a[name],
                    bb = b[name],
                    value = calculateObjectValue(that.header, that.header.sorters[index], [aa, bb]);

                if (value !== undefined) {
                    return order * value;
                }

                // Fix #161: undefined or null string sort bug.
                if (aa === undefined || aa === null) {
                    aa = '';
                }
                if (bb === undefined || bb === null) {
                    bb = '';
                }

                // IF both values are numeric, do a numeric comparison
                if ($.isNumeric(aa) && $.isNumeric(bb)) {
                    // Convert numerical values form string to float.
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

                // If value is not a string, convert to string
                if (typeof aa !== 'string') {
                    aa = aa.toString();
                }

                if (aa.localeCompare(bb) === -1) {
                    return order * -1;
                }

                return order;
            });
        }
    };

    BootstrapTable.prototype.onSort = function (event) {
        var $this = $(event.currentTarget).parent(),
            $this_ = this.$header.find('th').eq($this.index());

        this.$header.add(this.$header_).find('span.order').remove();

        if (this.options.sortName === $this.data('field')) {
            this.options.sortOrder = this.options.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            this.options.sortName = $this.data('field');
            this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc';
        }
        this.trigger('sort', this.options.sortName, this.options.sortOrder);

        $this.add($this_).data('order', this.options.sortOrder);

        // Assign the correct sortable arrow
        this.getCaretHtml();

        if (this.options.sidePagination === 'server') {
            this.initServer();
            return;
        }

        this.initSort();
        this.initBody();
    };

    BootstrapTable.prototype.initToolbar = function () {
        var that = this,
            html = [],
            timeoutId = 0,
            $keepOpen,
            $search,
            switchableCount = 0;

        this.$toolbar.html('');

        if (typeof this.options.toolbar === 'string') {
            $(sprintf('<div class="bars pull-%s"></div>', this.options.toolbarAlign))
                .appendTo(this.$toolbar)
                .append($(this.options.toolbar));
        }

        // showColumns, showToggle, showRefresh
        html = [sprintf('<div class="columns columns-%s btn-group pull-%s">',
            this.options.buttonsAlign, this.options.buttonsAlign)];

        if (typeof this.options.icons === 'string') {
            this.options.icons = calculateObjectValue(null, this.options.icons);
        }

        if (this.options.showPaginationSwitch) {
            html.push(sprintf('<button class="btn btn-default" type="button" name="paginationSwitch" title="%s">',
                this.options.formatPaginationSwitch()),
                sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown),
                '</button>');
        }

        if (this.options.showRefresh) {
            html.push(sprintf('<button class="btn btn-default' + (this.options.iconSize === undefined ? '' : ' btn-' + this.options.iconSize) + '" type="button" name="refresh" title="%s">',
                this.options.formatRefresh()),
                sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.refresh),
                '</button>');
        }

        if (this.options.showToggle) {
            html.push(sprintf('<button class="btn btn-default' + (this.options.iconSize === undefined ? '' : ' btn-' + this.options.iconSize) + '" type="button" name="toggle" title="%s">',
                this.options.formatToggle()),
                sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggle),
                '</button>');
        }

        if (this.options.showColumns) {
            html.push(sprintf('<div class="keep-open btn-group" title="%s">',
                this.options.formatColumns()),
                '<button type="button" class="btn btn-default' + (this.options.iconSize == undefined ? '' : ' btn-' + this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">',
                sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns),
                ' <span class="caret"></span>',
                '</button>',
                '<ul class="dropdown-menu" role="menu">');

            $.each(this.options.columns, function (i, column) {
                if (column.radio || column.checkbox) {
                    return;
                }

                if (that.options.cardView && (!column.cardVisible)) {
                    return;
                }

                var checked = column.visible ? ' checked="checked"' : '';

                if (column.switchable) {
                    html.push(sprintf('<li>' +
                        '<label><input type="checkbox" data-field="%s" value="%s"%s> %s</label>' +
                        '</li>', column.field, i, checked, column.title));
                    switchableCount++;
                }
            });
            html.push('</ul>',
                '</div>');
        }

        html.push('</div>');

        // Fix #188: this.showToolbar is for extentions
        if (this.showToolbar || html.length > 2) {
            this.$toolbar.append(html.join(''));
        }

        if (this.options.showPaginationSwitch) {
            this.$toolbar.find('button[name="paginationSwitch"]')
                .off('click').on('click', $.proxy(this.togglePagination, this));
        }

        if (this.options.showRefresh) {
            this.$toolbar.find('button[name="refresh"]')
                .off('click').on('click', $.proxy(this.refresh, this));
        }

        if (this.options.showToggle) {
            this.$toolbar.find('button[name="toggle"]')
                .off('click').on('click', function () {
                    that.toggleView();
                });
        }

        if (this.options.showColumns) {
            $keepOpen = this.$toolbar.find('.keep-open');

            if (switchableCount <= this.options.minimumCountColumns) {
                $keepOpen.find('input').prop('disabled', true);
            }

            $keepOpen.find('li').off('click').on('click', function (event) {
                event.stopImmediatePropagation();
            });
            $keepOpen.find('input').off('click').on('click', function () {
                var $this = $(this);

                that.toggleColumn(getFieldIndex(that.options.columns, $(this).data('field')), $this.prop('checked'), false);
                that.trigger('column-switch', $(this).data('field'), $this.prop('checked'));
            });
        }

        if (this.options.search) {
            html = [];
            html.push(
                '<div class="pull-' + this.options.searchAlign + ' search">',
                sprintf('<input class="form-control' + (this.options.iconSize === undefined ? '' : ' input-' + this.options.iconSize) + '" type="text" placeholder="%s">',
                    this.options.formatSearch()),
                '</div>');

            this.$toolbar.append(html.join(''));
            $search = this.$toolbar.find('.search input');
            $search.off('keyup drop').on('keyup drop', function (event) {
                clearTimeout(timeoutId); // doesn't matter if it's 0
                timeoutId = setTimeout(function () {
                    that.onSearch(event);
                }, that.options.searchTimeOut);
            });

            if (this.options.searchText !== '') {
                $search.val(this.options.searchText);
                clearTimeout(timeoutId); // doesn't matter if it's 0
                timeoutId = setTimeout(function () {
                    $search.trigger('keyup');
                }, that.options.searchTimeOut);
            }
        }
    };

    BootstrapTable.prototype.onSearch = function (event) {
        var text = $.trim($(event.currentTarget).val());

        // trim search input
        if (this.options.trimOnSearch && $(event.currentTarget).val() !== text) {
            $(event.currentTarget).val(text);
        }

        if (text === this.searchText) {
            return;
        }
        this.searchText = text;

        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination();
        this.trigger('search', text);
    };

    BootstrapTable.prototype.initSearch = function () {
        var that = this;

        if (this.options.sidePagination !== 'server') {
            var s = this.searchText && this.searchText.toLowerCase();
            var f = $.isEmptyObject(this.filterColumns) ? null : this.filterColumns;

            // Check filter
            this.data = f ? $.grep(this.options.data, function (item, i) {
                for (var key in f) {
                    if (item[key] !== f[key]) {
                        return false;
                    }
                }
                return true;
            }) : this.options.data;

            this.data = s ? $.grep(this.data, function (item, i) {
                for (var key in item) {
                    key = $.isNumeric(key) ? parseInt(key, 10) : key;
                    var value = item[key],
                        column = that.options.columns[getFieldIndex(that.options.columns, key)],
                        j = $.inArray(key, that.header.fields);

                    // Fix #142: search use formated data
                    value = calculateObjectValue(column,
                        that.header.formatters[j],
                        [value, item, i], value);

                    var index = $.inArray(key, that.header.fields);
                    if (index !== -1 && that.header.searchables[index] &&
                        (typeof value === 'string' ||
                            typeof value === 'number') &&
                        (value + '').toLowerCase().indexOf(s) !== -1) {
                        return true;
                    }
                }
                return false;
            }) : this.data;
        }
    };

    BootstrapTable.prototype.initPagination = function () {
        if (!this.options.pagination) {
            this.$pagination.hide();
            return;
        } else {
            this.$pagination.show();
        }

        var that = this,
            html = [],
            $allSelected = false,
            i, from, to,
            $pageList,
            $first, $pre,
            $next, $last,
            $number,
            data = this.getData();

        if (this.options.sidePagination !== 'server') {
            this.options.totalRows = data.length;
        }

        this.totalPages = 0;
        if (this.options.totalRows) {
            if (this.options.pageSize === this.options.formatAllRows()) {
                this.options.pageSize = this.options.totalRows;
                $allSelected = true;
            } else if (this.options.pageSize === this.options.totalRows) {
                // Fix #667 Table with pagination, multiple pages and a search that matches to one page throws exception
                var pageLst = typeof this.options.pageList === 'string' ?
                    this.options.pageList.replace('[', '').replace(']', '').replace(/ /g, '').toLowerCase().split(',') :
                    this.options.pageList;
                if (pageLst.indexOf(this.options.formatAllRows().toLowerCase()) > -1) {
                    $allSelected = true;
                }
            }

            this.totalPages = ~~((this.options.totalRows - 1) / this.options.pageSize) + 1;

            this.options.totalPages = this.totalPages;
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
            '<div class="pull-' + this.options.paginationDetailHAlign + ' pagination-detail">',
            '<span class="pagination-info">',
            this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows),
            '</span>');

        html.push('<span class="page-list">');

        var pageNumber = [
                sprintf('<span class="btn-group %s">', this.options.paginationVAlign === 'top' || this.options.paginationVAlign === 'both' ?
                    'dropdown' : 'dropup'),
                '<button type="button" class="btn btn-default ' + (this.options.iconSize === undefined ? '' : ' btn-' + this.options.iconSize) + ' dropdown-toggle" data-toggle="dropdown">',
                '<span class="page-size">',
                $allSelected ? this.options.formatAllRows() : this.options.pageSize,
                '</span>',
                ' <span class="caret"></span>',
                '</button>',
                '<ul class="dropdown-menu" role="menu">'],
            pageList = this.options.pageList;

        if (typeof this.options.pageList === 'string') {
            var list = this.options.pageList.replace('[', '').replace(']', '').replace(/ /g, '').split(',');

            pageList = [];
            $.each(list, function (i, value) {
                pageList.push(value.toUpperCase() === that.options.formatAllRows().toUpperCase() ?
                    that.options.formatAllRows() : +value);
            });
        }

        $.each(pageList, function (i, page) {
            if (!that.options.smartDisplay || i === 0 || pageList[i - 1] <= that.options.totalRows) {
                var active;
                if ($allSelected) {
                    active = page === that.options.formatAllRows() ? ' class="active"' : '';
                } else {
                    active = page === that.options.pageSize ? ' class="active"' : '';
                }
                pageNumber.push(sprintf('<li%s><a href="javascript:void(0)">%s</a></li>', active, page));
            }
        });
        pageNumber.push('</ul></span>');

        html.push(this.options.formatRecordsPerPage(pageNumber.join('')));
        html.push('</span>');

        html.push('</div>',
            '<div class="pull-' + this.options.paginationHAlign + ' pagination">',
            '<ul class="pagination' + (this.options.iconSize === undefined ? '' : ' pagination-' + this.options.iconSize) + '">',
            '<li class="page-first"><a href="javascript:void(0)">' + this.options.paginationFirstText + '</a></li>',
            '<li class="page-pre"><a href="javascript:void(0)">' + this.options.paginationPreText + '</a></li>');

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
                '<a href="javascript:void(0)">', i, '</a>',
                '</li>');
        }

        html.push(
            '<li class="page-next"><a href="javascript:void(0)">' + this.options.paginationNextText + '</a></li>',
            '<li class="page-last"><a href="javascript:void(0)">' + this.options.paginationLastText + '</a></li>',
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
        if (this.options.smartDisplay) {
            if (this.totalPages <= 1) {
                this.$pagination.find('div.pagination').hide();
            }
            if (pageList.length < 2 || this.options.totalRows <= pageList[0]) {
                this.$pagination.find('span.page-list').hide();
            }

            // when data is empty, hide the pagination
            this.$pagination[this.getData().length ? 'show' : 'hide']();
        }
        if ($allSelected) {
            this.options.pageSize = this.options.formatAllRows();
        }
        $pageList.off('click').on('click', $.proxy(this.onPageListChange, this));
        $first.off('click').on('click', $.proxy(this.onPageFirst, this));
        $pre.off('click').on('click', $.proxy(this.onPagePre, this));
        $next.off('click').on('click', $.proxy(this.onPageNext, this));
        $last.off('click').on('click', $.proxy(this.onPageLast, this));
        $number.off('click').on('click', $.proxy(this.onPageNumber, this));
    };

    BootstrapTable.prototype.updatePagination = function (event) {
        // Fix #171: IE disabled button can be clicked bug.
        if (event && $(event.currentTarget).hasClass('disabled')) {
            return;
        }

        if (!this.options.maintainSelected) {
            this.resetRows();
        }

        this.initPagination();
        if (this.options.sidePagination === 'server') {
            this.initServer();
        } else {
            this.initBody();
        }

        this.trigger('page-change', this.options.pageNumber, this.options.pageSize);
    };

    BootstrapTable.prototype.onPageListChange = function (event) {
        var $this = $(event.currentTarget);

        $this.parent().addClass('active').siblings().removeClass('active');
        this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ?
            this.options.formatAllRows() : +$this.text();
        this.$toolbar.find('.page-size').text(this.options.pageSize);

        this.updatePagination(event);
    };

    BootstrapTable.prototype.onPageFirst = function (event) {
        this.options.pageNumber = 1;
        this.updatePagination(event);
    };

    BootstrapTable.prototype.onPagePre = function (event) {
        this.options.pageNumber--;
        this.updatePagination(event);
    };

    BootstrapTable.prototype.onPageNext = function (event) {
        this.options.pageNumber++;
        this.updatePagination(event);
    };

    BootstrapTable.prototype.onPageLast = function (event) {
        this.options.pageNumber = this.totalPages;
        this.updatePagination(event);
    };

    BootstrapTable.prototype.onPageNumber = function (event) {
        if (this.options.pageNumber === +$(event.currentTarget).text()) {
            return;
        }
        this.options.pageNumber = +$(event.currentTarget).text();
        this.updatePagination(event);
    };

    BootstrapTable.prototype.initBody = function (fixedScroll) {
        var that = this,
            html = [],
            data = this.getData();

        this.trigger('pre-body', data);

        this.$body = this.$el.find('tbody');
        if (!this.$body.length) {
            this.$body = $('<tbody></tbody>').appendTo(this.$el);
        }

        //Fix #389 Bootstrap-table-flatJSON is not working

        if (!this.options.pagination || this.options.sidePagination === 'server') {
            this.pageFrom = 1;
            this.pageTo = data.length;
        }

        for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
            var key,
                item = data[i],
                style = {},
                csses = [],
                data_ = '',
                attributes = {},
                htmlAttributes = [];

            style = calculateObjectValue(this.options, this.options.rowStyle, [item, i], style);

            if (style && style.css) {
                for (key in style.css) {
                    csses.push(key + ': ' + style.css[key]);
                }
            }

            attributes = calculateObjectValue(this.options,
                this.options.rowAttributes, [item, i], attributes);

            if (attributes) {
                for (key in attributes) {
                    htmlAttributes.push(sprintf('%s="%s"', key, escapeHTML(attributes[key])));
                }
            }

            if (item._data && !$.isEmptyObject(item._data)) {
                $.each(item._data, function (k, v) {
                    // ignore data-index
                    if (k === 'index') {
                        return;
                    }
                    data_ += sprintf(' data-%s="%s"', k, v);
                });
            }

            html.push('<tr',
                sprintf(' %s', htmlAttributes.join(' ')),
                sprintf(' id="%s"', $.isArray(item) ? undefined : item._id),
                sprintf(' class="%s"', style.classes || ($.isArray(item) ? undefined : item._class)),
                sprintf(' data-index="%s"', i),
                sprintf(' data-uniqueid="%s"', item[this.options.uniqueId]),
                sprintf('%s', data_),
                '>'
            );

            if (this.options.cardView) {
                html.push(sprintf('<td colspan="%s">', this.header.fields.length));
            }

            if (!this.options.cardView && this.options.detailView) {
                html.push('<td>',
                    '<a class="detail-icon" href="javascript:">',
                    '<i class="glyphicon glyphicon-plus icon-plus"></i>',
                    '</a>',
                    '</td>');
            }

            $.each(this.header.fields, function (j, field) {
                var text = '',
                    value = item[field],
                    type = '',
                    cellStyle = {},
                    id_ = '',
                    class_ = that.header.classes[j],
                    data_ = '',
                    rowspan_ = '',
                    column = that.options.columns[getFieldIndex(that.options.columns, field)];

                style = sprintf('style="%s"', csses.concat(that.header.styles[j]).join('; '));

                value = calculateObjectValue(column,
                    that.header.formatters[j], [value, item, i], value);

                // handle td's id and class
                if (item['_' + field + '_id']) {
                    id_ = sprintf(' id="%s"', item['_' + field + '_id']);
                }
                if (item['_' + field + '_class']) {
                    class_ = sprintf(' class="%s"', item['_' + field + '_class']);
                }
                if (item['_' + field + '_rowspan']) {
                    rowspan_ = sprintf(' rowspan="%s"', item['_' + field + '_rowspan']);
                }
                cellStyle = calculateObjectValue(that.header,
                    that.header.cellStyles[j], [value, item, i], cellStyle);
                if (cellStyle.classes) {
                    class_ = sprintf(' class="%s"', cellStyle.classes);
                }
                if (cellStyle.css) {
                    var csses_ = [];
                    for (var key in cellStyle.css) {
                        csses_.push(key + ': ' + cellStyle.css[key]);
                    }
                    style = sprintf('style="%s"', csses_.concat(that.header.styles[j]).join('; '));
                }

                if (item['_' + field + '_data'] && !$.isEmptyObject(item['_' + field + '_data'])) {
                    $.each(item['_' + field + '_data'], function (k, v) {
                        // ignore data-index
                        if (k === 'index') {
                            return;
                        }
                        data_ += sprintf(' data-%s="%s"', k, v);
                    });
                }

                if (column.checkbox || column.radio) {
                    type = column.checkbox ? 'checkbox' : type;
                    type = column.radio ? 'radio' : type;

                    text = [that.options.cardView ?
                        '<div class="card-view">' : '<td class="bs-checkbox">',
                        '<input' +
                            sprintf(' data-index="%s"', i) +
                            sprintf(' name="%s"', that.options.selectItemName) +
                            sprintf(' type="%s"', type) +
                            sprintf(' value="%s"', item[that.options.idField]) +
                            sprintf(' checked="%s"', value === true ||
                                (value && value.checked) ? 'checked' : undefined) +
                            sprintf(' disabled="%s"', !column.checkboxEnabled ||
                                (value && value.disabled) ? 'disabled' : undefined) +
                            ' />',
                        that.options.cardView ? '</div>' : '</td>'].join('');

                    item[that.header.stateField] = value === true || (value && value.checked);
                } else {
                    value = typeof value === 'undefined' || value === null ?
                        that.options.undefinedText : value;

                    text = that.options.cardView ?
                        ['<div class="card-view">',
                            that.options.showHeader ? sprintf('<span class="title" %s>%s</span>', style,
                                getPropertyFromOther(that.options.columns, 'field', 'title', field)) : '',
                            sprintf('<span class="value">%s</span>', value),
                            '</div>'].join('') :
                        [sprintf('<td%s %s %s %s %s>', id_, class_, style, data_, rowspan_),
                            value,
                            '</td>'].join('');

                    // Hide empty data on Card view when smartDisplay is set to true.
                    if (that.options.cardView && that.options.smartDisplay && value === '') {
                        text = '';
                    }
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
                sprintf('<td colspan="%s">%s</td>',
                    this.$header.find('th').length, this.options.formatNoMatches()),
                '</tr>');
        }

        this.$body.html(html.join(''));

        if (!fixedScroll) {
            this.scrollTo(0);
        }

        // click to select by column
        this.$body.find('> tr > td').off('click').on('click', function () {
            var $td = $(this),
                $tr = $td.parent(),
                item = that.data[$tr.data('index')],
                cellIndex = $td[0].cellIndex,
                $headerCell = that.$header.find('th:eq(' + cellIndex + ')'),
                field = $headerCell.data('field'),
                value = item[field];
            that.trigger('click-cell', field, value, item, $td);
            that.trigger('click-row', item, $tr);
            // if click to select - then trigger the checkbox/radio click
            if (that.options.clickToSelect) {
                if (that.header.clickToSelects[$tr.children().index($(this))]) {
                    $tr.find(sprintf('[name="%s"]',
                        that.options.selectItemName))[0].click(); // #144: .trigger('click') bug
                }
            }
        });
        this.$body.find('> tr > td').off('dblclick').on('dblclick', function () {
            var $td = $(this),
                $tr = $td.parent(),
                item = that.data[$tr.data('index')],
                cellIndex = $td[0].cellIndex,
                $headerCell = that.$header.find('th:eq(' + cellIndex + ')'),
                field = $headerCell.data('field'),
                value = item[field];
            that.trigger('dbl-click-cell', field, value, item, $td);
            that.trigger('dbl-click-row', item, $tr);
        });

        this.$body.find('> tr > td > .detail-icon').off('click').on('click', function () {
            var $this = $(this),
                $tr = $this.parent().parent(),
                index = $tr.data('index'),
                row = that.options.data[index];

            // remove and update
            if ($tr.next().is('tr.detail-view')) {
                $this.find('i').attr('class', 'glyphicon glyphicon-plus icon-plus');
                $tr.next().remove();
                that.trigger('collapse-row', index, row);
            } else {
                $this.find('i').attr('class', 'glyphicon glyphicon-minus icon-minus');
                $tr.after(sprintf('<tr class="detail-view"><td colspan="%s">%s</td></tr>',
                    $tr.find('td').length, calculateObjectValue(that.options,
                        that.options.detailFormatter, [index, row], '')));
                that.trigger('expand-row', index, row, $tr.next().find('td'));
            }
            that.resetView();
        });

        this.$selectItem = this.$body.find(sprintf('[name="%s"]', this.options.selectItemName));
        this.$selectItem.off('click').on('click', function (event) {
            event.stopImmediatePropagation();

            var checked = $(this).prop('checked'),
                row = that.data[$(this).data('index')];

            row[that.header.stateField] = checked;

            if (that.options.singleSelect) {
                that.$selectItem.not(this).each(function () {
                    that.data[$(this).data('index')][that.header.stateField] = false;
                });
                that.$selectItem.filter(':checked').not(this).prop('checked', false);
            }

            that.updateSelected();
            that.trigger(checked ? 'check' : 'uncheck', row);
        });

        $.each(this.header.events, function (i, events) {
            if (!events) {
                return;
            }
            // fix bug, if events is defined with namespace
            if (typeof events === 'string') {
                events = calculateObjectValue(null, events);
            }
            if (!that.options.cardView && that.options.detailView) {
                i += 1;
            }
            for (var key in events) {
                that.$body.find('tr').each(function () {
                    var $tr = $(this),
                        $td = $tr.find(that.options.cardView ? '.card-view' : 'td').eq(i),
                        index = key.indexOf(' '),
                        name = key.substring(0, index),
                        el = key.substring(index + 1),
                        func = events[key];

                    $td.find(el).off(name).on(name, function (e) {
                        var index = $tr.data('index'),
                            row = that.data[index],
                            value = row[that.header.fields[i]];

                        func.apply(this, [e, value, row, index]);
                    });
                });
            }
        });

        this.updateSelected();
        this.resetView();

        this.trigger('post-body');
    };

    BootstrapTable.prototype.initServer = function (silent, query) {
        var that = this,
            data = {},
            params = {
                pageSize: this.options.pageSize === this.options.formatAllRows() ?
                    this.options.totalRows : this.options.pageSize,
                pageNumber: this.options.pageNumber,
                searchText: this.searchText,
                sortName: this.options.sortName,
                sortOrder: this.options.sortOrder
            },
            request;

        if (!this.options.url && !this.options.ajax) {
            return;
        }

        if (this.options.queryParamsType === 'limit') {
            params = {
                search: params.searchText,
                sort: params.sortName,
                order: params.sortOrder
            };
            if (this.options.pagination) {
                params.limit = this.options.pageSize === this.options.formatAllRows() ?
                    this.options.totalRows : this.options.pageSize;
                params.offset = this.options.pageSize === this.options.formatAllRows() ?
                    0 : this.options.pageSize * (this.options.pageNumber - 1);
            }
        }

        if (!($.isEmptyObject(this.filterColumnsPartial))) {
            params['filter'] = JSON.stringify(this.filterColumnsPartial, null);
        }

        data = calculateObjectValue(this.options, this.options.queryParams, [params], data);

        $.extend(data, query || {});

        // false to stop request
        if (data === false) {
            return;
        }

        if (!silent) {
            this.$tableLoading.show();
        }
        request = $.extend({}, calculateObjectValue(null, this.options.ajaxOptions), {
            type: this.options.method,
            url: this.options.url,
            data: this.options.contentType === 'application/json' && this.options.method === 'post' ?
                JSON.stringify(data) : data,
            cache: this.options.cache,
            contentType: this.options.contentType,
            dataType: this.options.dataType,
            success: function (res) {
                res = calculateObjectValue(that.options, that.options.responseHandler, [res], res);

                that.load(res);
                that.trigger('load-success', res);
            },
            error: function (res) {
                that.trigger('load-error', res.status);
            },
            complete: function () {
                if (!silent) {
                    that.$tableLoading.hide();
                }
            }
        });

        if (this.options.ajax) {
            calculateObjectValue(this, this.options.ajax, [request], null);
        } else {
            $.ajax(request);
        }
    };

    BootstrapTable.prototype.getCaretHtml = function () {
        var that = this;

        $.each(this.$header.find('th'), function (i, th) {
            if ($(th).data('field') === that.options.sortName) {
                $(th).find('.sortable').css('background-image', 'url(' + (that.options.sortOrder === 'desc' ? arrowDesc : arrowAsc) + ')');
            } else {
                $(th).find('.sortable').css('background-image', 'url(' + arrowBoth +')');
            }
        });
    };

    BootstrapTable.prototype.updateSelected = function () {
        var checkAll = this.$selectItem.filter(':enabled').length ===
            this.$selectItem.filter(':enabled').filter(':checked').length;

        this.$selectAll.add(this.$selectAll_).prop('checked', checkAll);

        this.$selectItem.each(function () {
            $(this).parents('tr')[$(this).prop('checked') ? 'addClass' : 'removeClass']('selected');
        });
    };

    BootstrapTable.prototype.updateRows = function () {
        var that = this;

        this.$selectItem.each(function () {
            that.data[$(this).data('index')][that.header.stateField] = $(this).prop('checked');
        });
    };

    BootstrapTable.prototype.resetRows = function () {
        var that = this;

        $.each(this.data, function (i, row) {
            that.$selectAll.prop('checked', false);
            that.$selectItem.prop('checked', false);
            row[that.header.stateField] = false;
        });
    };

    BootstrapTable.prototype.trigger = function (name) {
        var args = Array.prototype.slice.call(arguments, 1);

        name += '.bs.table';
        this.options[BootstrapTable.EVENTS[name]].apply(this.options, args);
        this.$el.trigger($.Event(name), args);

        this.options.onAll(name, args);
        this.$el.trigger($.Event('all.bs.table'), [name, args]);
    };

    BootstrapTable.prototype.resetHeader = function () {
        // fix #61: the hidden table reset header bug.
        // fix bug: get $el.css('width') error sometime (height = 500)
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout($.proxy(this.fitHeader, this), this.$el.is(':hidden') ? 100 : 0);
    };

    BootstrapTable.prototype.fitHeader = function () {
        var that = this,
            fixedBody,
            scrollWidth;

        if (that.$el.is(':hidden')) {
            that.timeoutFooter_ = setTimeout($.proxy(that.fitHeader, that), 100);
            return;
        }
        fixedBody = this.$tableBody.get(0);

        scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth &&
            fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.height() ?
            getScrollBarWidth() : 0;

        this.$el.css('margin-top', -this.$header.height());
        this.$header_ = this.$header.clone(true, true);
        this.$selectAll_ = this.$header_.find('[name="btSelectAll"]');
        this.$tableHeader.css({
            'margin-right': scrollWidth
        }).find('table').css('width', this.$el.css('width'))
            .html('').attr('class', this.$el.attr('class'))
            .append(this.$header_);

        // fix bug: $.data() is not working as expected after $.append()
        this.$header.find('th').each(function (i) {
            that.$header_.find('th').eq(i).data($(this).data());
        });

        this.$body.find('tr:first-child:not(.no-records-found) > *').each(function (i) {
            that.$header_.find('div.fht-cell').eq(i).width($(this).innerWidth());
        });
        // horizontal scroll event
        // TODO: it's probably better improving the layout than binding to scroll event
        this.$tableBody.off('scroll').on('scroll', function () {
            that.$tableHeader.scrollLeft($(this).scrollLeft());
        });
        that.trigger('post-header');
    };

    BootstrapTable.prototype.resetFooter = function () {
        var that = this,
            data = that.getData(),
            html = [];

        if (!this.options.showFooter || this.options.cardView) { //do nothing
            return;
        }

        if (!this.options.cardView && this.options.detailView) {
            html.push('<td></td>');
        }

        $.each(this.options.columns, function (i, column) {
            var falign = '', // footer align style
                style = '',
                class_ = sprintf(' class="%s"', column['class']);

            if (!column.visible) {
                return;
            }

            if (that.options.cardView && (!column.cardVisible)) {
                return;
            }

            falign = sprintf('text-align: %s; ', column.falign ? column.falign : column.align);
            style = sprintf('vertical-align: %s; ', column.valign);

            html.push('<td', class_, sprintf(' style="%s"', falign + style), '>');

            html.push(calculateObjectValue(column, column.footerFormatter, [data], '&nbsp;') || '&nbsp;');
            html.push('</td>');
        });

        this.$tableFooter.find('tr').html(html.join(''));
        clearTimeout(this.timeoutFooter_);
        this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this),
            this.$el.is(':hidden') ? 100 : 0);
    };

    BootstrapTable.prototype.fitFooter = function () {
        var that = this,
            $footerTd,
            elWidth,
            scrollWidth;

        clearTimeout(this.timeoutFooter_);
        if (this.$el.is(':hidden')) {
            this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this), 100);
            return;
        }

        elWidth = this.$el.css('width');
        scrollWidth = elWidth > this.$tableBody.width() ? getScrollBarWidth() : 0;

        this.$tableFooter.css({
            'margin-right': scrollWidth
        }).find('table').css('width', elWidth)
            .attr('class', this.$el.attr('class'));

        $footerTd = this.$tableFooter.find('td');

        this.$tableBody.find('tbody tr:first-child:not(.no-records-found) > td').each(function (i) {
            $footerTd.eq(i).outerWidth($(this).outerWidth());
        });
    };

    BootstrapTable.prototype.toggleColumn = function (index, checked, needUpdate) {
        if (index === -1) {
            return;
        }
        this.options.columns[index].visible = checked;
        this.initHeader();
        this.initSearch();
        this.initPagination();
        this.initBody();

        if (this.options.showColumns) {
            var $items = this.$toolbar.find('.keep-open input').prop('disabled', false);

            if (needUpdate) {
                $items.filter(sprintf('[value="%s"]', index)).prop('checked', checked);
            }

            if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
                $items.filter(':checked').prop('disabled', true);
            }
        }
    };

    BootstrapTable.prototype.toggleRow = function (index, isIdField, visible) {
        if (index === -1) {
            return;
        }

        $(this.$body[0]).children().filter(sprintf(isIdField ? '[data-uniqueid="%s"]' : '[data-index="%s"]', index))
            [visible ? 'show' : 'hide']();
    };

    // PUBLIC FUNCTION DEFINITION
    // =======================

    BootstrapTable.prototype.resetView = function (params) {
        var padding = 0;

        if (params && params.height) {
            this.options.height = params.height;
        }

        this.$selectAll.prop('checked', this.$selectItem.length > 0 &&
            this.$selectItem.length === this.$selectItem.filter(':checked').length);

        if (this.options.height) {
            var toolbarHeight = getRealHeight(this.$toolbar),
                paginationHeight = getRealHeight(this.$pagination),
                height = this.options.height - toolbarHeight - paginationHeight;

            this.$tableContainer.css('height', height + 'px');
        }

        if (this.options.cardView) {
            // remove the element css
            this.$el.css('margin-top', '0');
            this.$tableContainer.css('padding-bottom', '0');
            return;
        }

        if (this.options.showHeader && this.options.height) {
            this.$tableHeader.show();
            this.resetHeader();
            padding += cellHeight;
        } else {
            this.$tableHeader.hide();
            this.trigger('post-header');
        }

        if (this.options.showFooter) {
            this.resetFooter();
            if (this.options.height) {
                padding += cellHeight;
            }
        }

        // Assign the correct sortable arrow
        this.getCaretHtml();
        this.$tableContainer.css('padding-bottom', padding + 'px');
    };

    BootstrapTable.prototype.getData = function (useCurrentPage) {
        return (this.searchText
            || !$.isEmptyObject(this.filterColumns)
            || !$.isEmptyObject(this.filterColumnsPartial)) ?
            (useCurrentPage ? this.data.slice(this.pageFrom -1, this.pageTo)
                : this.data) :
            (useCurrentPage ? this.options.data.slice(this.pageFrom - 1, this.pageTo)
                : this.options.data);
    };

    BootstrapTable.prototype.load = function (data) {
        var fixedScroll = false;

        // #431: support pagination
        if (this.options.sidePagination === 'server') {
            this.options.totalRows = data.total;
            fixedScroll = data.fixedScroll;
            data = data.rows;
        } else if (!$.isArray(data)) { // support fixedScroll
            fixedScroll = data.fixedScroll;
            data = data.data;
        }

        this.initData(data);
        this.initSearch();
        this.initPagination();
        this.initBody(fixedScroll);
    };

    BootstrapTable.prototype.append = function (data) {
        this.initData(data, 'append');
        this.initSearch();
        this.initPagination();
        this.initBody(true);
    };

    BootstrapTable.prototype.prepend = function (data) {
        this.initData(data, 'prepend');
        this.initSearch();
        this.initPagination();
        this.initBody(true);
    };

    BootstrapTable.prototype.remove = function (params) {
        var len = this.options.data.length,
            i, row;

        if (!params.hasOwnProperty('field') || !params.hasOwnProperty('values')) {
            return;
        }

        for (i = len - 1; i >= 0; i--) {
            row = this.options.data[i];

            if (!row.hasOwnProperty(params.field)) {
                continue;
            }
            if ($.inArray(row[params.field], params.values) !== -1) {
                this.options.data.splice(i, 1);
            }
        }

        if (len === this.options.data.length) {
            return;
        }

        this.initSearch();
        this.initPagination();
        this.initBody(true);
    };

    BootstrapTable.prototype.removeAll = function () {
        if (this.options.data.length > 0) {
            this.options.data.splice(0, this.options.data.length);
            this.initSearch();
            this.initPagination();
            this.initBody(true);
        }
    };

    BootstrapTable.prototype.removeByUniqueId = function (id) {
        var uniqueId = this.options.uniqueId,
            len = this.options.data.length,
            i, row;

        for (i = len - 1; i >= 0; i--) {
            row = this.options.data[i];

            if (!row.hasOwnProperty(uniqueId)) {
                continue;
            }

            if (typeof row[uniqueId] === 'string') {
                id = id.toString();
            } else if (typeof row[uniqueId] === 'number') {
                if ((Number(row[uniqueId]) === row[uniqueId]) && (row[uniqueId] % 1 === 0)) {
                    id = parseInt(id);
                } else if ((row[uniqueId] === Number(row[uniqueId])) && (row[uniqueId] !== 0)) {
                    id = parseFloat(id);
                }
            }

            if (row[uniqueId] === id) {
                this.options.data.splice(i, 1);
            }
        }

        if (len === this.options.data.length) {
            return;
        }

        this.initSearch();
        this.initPagination();
        this.initBody(true);
    };

    BootstrapTable.prototype.insertRow = function (params) {
        if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
            return;
        }
        this.data.splice(params.index, 0, params.row);
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
    };

    BootstrapTable.prototype.updateRow = function (params) {
        if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
            return;
        }
        $.extend(this.data[params.index], params.row);
        this.initSort();
        this.initBody(true);
    };

    BootstrapTable.prototype.showRow = function (params) {
        if (!params.hasOwnProperty('index')) {
            return;
        }

        this.toggleRow(params.index, params.isIdField === undefined ? false : true, true);
    };

    BootstrapTable.prototype.hideRow = function (params) {
        if (!params.hasOwnProperty('index')) {
            return;
        }

        this.toggleRow(params.index, params.isIdField === undefined ? false : true, false);
    };

    BootstrapTable.prototype.getRowsHidden = function (show) {
        var rows = $(this.$body[0]).children().filter(':hidden'),
            i = 0;
        if (show) {
            for (; i < rows.length; i++) {
                $(rows[i]).show();
            }
        }
        return rows;
    };

    BootstrapTable.prototype.mergeCells = function (options) {
        var row = options.index,
            col = $.inArray(options.field, this.header.fields),
            rowspan = options.rowspan || 1,
            colspan = options.colspan || 1,
            i, j,
            $tr = this.$body.find('tr'),
            $td = $tr.eq(row).find('td').eq(col);

        if (!this.options.cardView && this.options.detailView) {
            col += 1;
        }
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

    BootstrapTable.prototype.updateCell = function (params) {
        if (!params.hasOwnProperty('rowIndex') || !params.hasOwnProperty('fieldName') || !params.hasOwnProperty('fieldValue')) {
            return;
        }
        this.data[params.rowIndex][params.fieldName] = params.fieldValue;
        this.initSort();
        this.initBody(true);
    };

    BootstrapTable.prototype.getOptions = function () {
        return this.options;
    };

    BootstrapTable.prototype.getSelections = function () {
        var that = this;

        return $.grep(this.data, function (row) {
            return row[that.header.stateField];
        });
    };

    BootstrapTable.prototype.getAllSelections = function () {
        var that = this;

        return $.grep(this.options.data, function (row) {
            return row[that.header.stateField];
        });
    };

    BootstrapTable.prototype.checkAll = function () {
        this.checkAll_(true);
    };

    BootstrapTable.prototype.uncheckAll = function () {
        this.checkAll_(false);
    };

    BootstrapTable.prototype.checkAll_ = function (checked) {
        var rows;
        if (!checked) {
            rows = this.getSelections();
        }
        this.$selectItem.filter(':enabled').prop('checked', checked);
        this.updateRows();
        this.updateSelected();
        if (checked) {
            rows = this.getSelections();
        }
        this.trigger(checked ? 'check-all' : 'uncheck-all', rows);
    };

    BootstrapTable.prototype.check = function (index) {
        this.check_(true, index);
    };

    BootstrapTable.prototype.uncheck = function (index) {
        this.check_(false, index);
    };

    BootstrapTable.prototype.check_ = function (checked, index) {
        this.$selectItem.filter(sprintf('[data-index="%s"]', index)).prop('checked', checked);
        this.data[index][this.header.stateField] = checked;
        this.updateSelected();
        this.trigger(checked ? 'check' : 'uncheck', this.data[index]);
    };

    BootstrapTable.prototype.checkBy = function (obj) {
        this.checkBy_(true, obj);
    };

    BootstrapTable.prototype.uncheckBy = function (obj) {
        this.checkBy_(false, obj);
    };

    BootstrapTable.prototype.checkBy_ = function (checked, obj) {
        if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
            return;
        }

        var that = this,
            rows = [];
        $.each(this.options.data, function (index, row) {
            if (!row.hasOwnProperty(obj.field)) {
                return false;
            }
            if ($.inArray(row[obj.field], obj.values) !== -1) {
                that.$selectItem.filter(sprintf('[data-index="%s"]', index)).prop('checked', checked);
                row[that.header.stateField] = checked;
                rows.push(row);
                that.trigger(checked ? 'check' : 'uncheck', row);
            }
        });
        this.updateSelected();
        this.trigger(checked ? 'check-some' : 'uncheck-some', rows);
    };

    BootstrapTable.prototype.destroy = function () {
        this.$el.insertBefore(this.$container);
        $(this.options.toolbar).insertBefore(this.$el);
        this.$container.next().remove();
        this.$container.remove();
        this.$el.html(this.$el_.html())
            .css('margin-top', '0')
            .attr('class', this.$el_.attr('class') || ''); // reset the class
    };

    BootstrapTable.prototype.showLoading = function () {
        this.$tableLoading.show();
    };

    BootstrapTable.prototype.hideLoading = function () {
        this.$tableLoading.hide();
    };

    BootstrapTable.prototype.togglePagination = function () {
        this.options.pagination = !this.options.pagination;
        var button = this.$toolbar.find('button[name="paginationSwitch"] i');
        if (this.options.pagination) {
            button.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchDown);
        } else {
            button.attr("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchUp);
        }
        this.updatePagination();
    };

    BootstrapTable.prototype.refresh = function (params) {
        if (params && params.url) {
            this.options.url = params.url;
            this.options.pageNumber = 1;
        }
        this.initServer(params && params.silent, params && params.query);
    };

    BootstrapTable.prototype.resetWidth = function () {
        if (this.options.showHeader && this.options.height) {
            this.fitHeader();
        }
        if (this.options.showFooter) {
            this.fitFooter();
        }
    };

    BootstrapTable.prototype.showColumn = function (field) {
        this.toggleColumn(getFieldIndex(this.options.columns, field), true, true);
    };

    BootstrapTable.prototype.hideColumn = function (field) {
        this.toggleColumn(getFieldIndex(this.options.columns, field), false, true);
    };

    BootstrapTable.prototype.filterBy = function (columns) {
        this.filterColumns = $.isEmptyObject(columns) ? {} : columns;
        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination();
    };

    BootstrapTable.prototype.scrollTo = function (value) {
        if (typeof value === 'string') {
            value = value === 'bottom' ? this.$tableBody[0].scrollHeight : 0;
        }
        if (typeof value === 'number') {
            this.$tableBody.scrollTop(value);
        }
        if (typeof value === 'undefined') {
            return this.$tableBody.scrollTop();
        }
    };

    BootstrapTable.prototype.getScrollPosition = function () {
        return this.scrollTo();
    }

    BootstrapTable.prototype.selectPage = function (page) {
        if (page > 0 && page <= this.options.totalPages) {
            this.options.pageNumber = page;
            this.updatePagination();
        }
    };

    BootstrapTable.prototype.prevPage = function () {
        if (this.options.pageNumber > 1) {
            this.options.pageNumber--;
            this.updatePagination();
        }
    };

    BootstrapTable.prototype.nextPage = function () {
        if (this.options.pageNumber < this.options.totalPages) {
            this.options.pageNumber++;
            this.updatePagination();
        }
    };

    BootstrapTable.prototype.toggleView = function () {
        this.options.cardView = !this.options.cardView;
        this.initHeader();
        // Fixed remove toolbar when click cardView button.
        //that.initToolbar();
        this.initBody();
        this.trigger('toggle', this.options.cardView);
    };

    // BOOTSTRAP TABLE PLUGIN DEFINITION
    // =======================

    var allowedMethods = [
        'getOptions',
        'getSelections', 'getAllSelections', 'getData',
        'load', 'append', 'prepend', 'remove', 'removeAll',
        'insertRow', 'updateRow', 'updateCell', 'removeByUniqueId',
        'showRow', 'hideRow', 'getRowsHidden',
        'mergeCells',
        'checkAll', 'uncheckAll',
        'check', 'uncheck',
        'checkBy', 'uncheckBy',
        'refresh',
        'resetView',
        'resetWidth',
        'destroy',
        'showLoading', 'hideLoading',
        'showColumn', 'hideColumn',
        'filterBy',
        'scrollTo',
        'getScrollPosition',
        'selectPage', 'prevPage', 'nextPage',
        'togglePagination',
        'toggleView'
    ];

    $.fn.bootstrapTable = function (option) {
        var value,
            args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
            var $this = $(this),
                data = $this.data('bootstrap.table'),
                options = $.extend({}, BootstrapTable.DEFAULTS, $this.data(),
                    typeof option === 'object' && option);

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw new Error("Unknown method: " + option);
                }

                if (!data) {
                    return;
                }

                value = data[option].apply(data, args);

                if (option === 'destroy') {
                    $this.removeData('bootstrap.table');
                }
            }

            if (!data) {
                $this.data('bootstrap.table', (data = new BootstrapTable(this, options)));
            }
        });

        return typeof value === 'undefined' ? this : value;
    };

    $.fn.bootstrapTable.Constructor = BootstrapTable;
    $.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS;
    $.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS;
    $.fn.bootstrapTable.locales = BootstrapTable.LOCALES;
    $.fn.bootstrapTable.methods = allowedMethods;

    // BOOTSTRAP TABLE INIT
    // =======================

    $(function () {
        $('[data-toggle="table"]').bootstrapTable();
    });

}(jQuery);

/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.1.0
 *
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

(function ($) {
    'use strict';

    var idsStateSaveList = {
        sortOrder: 'bs.table.sortOrder',
        sortName: 'bs.table.sortName',
        pageNumber: 'bs.table.pageNumber',
        pageList: 'bs.table.pageList',
        columns: 'bs.table.columns',
        searchText: 'bs.table.searchText'
    };

    var cookieEnabled = function () {
        return (navigator.cookieEnabled) ? true : false;
    };

    var setCookie = function (that, cookieName, sValue, sPath, sDomain, bSecure) {
        if ((!that.options.stateSave) || (!cookieEnabled()) || (that.options.stateSaveIdTable === '')) {
            return;
        }

        var tableName = that.options.stateSaveIdTable,
            vEnd = that.options.stateSaveExpire;

        cookieName = tableName + '.' + cookieName;
        if (!cookieName || /^(?:expires|max\-age|path|domain|secure)$/i.test(cookieName)) {
            return false;
        }

        document.cookie = encodeURIComponent(cookieName) + '=' + encodeURIComponent(sValue) + calculateExpiration(vEnd) + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
        return true;
    };

    var getCookie = function (tableName, cookieName) {
        cookieName = tableName + '.' + cookieName;
        if (!cookieName) {
            return null;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(cookieName).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    };

    var hasCookie = function (cookieName) {
        if (!cookieName) {
            return false;
        }
        return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(cookieName).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    };

    var deleteCookie = function (tableName, cookieName, sPath, sDomain) {
        cookieName = tableName + '.' + cookieName;
        if (!hasCookie(cookieName)) {
            return false;
        }
        document.cookie = encodeURIComponent(cookieName) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
        return true;
    };

    var calculateExpiration = function(vEnd) {
        var time = vEnd.replace(/[0-9]/, ''); //s,mi,h,d,m,y
        vEnd = vEnd.replace(/[A-Za-z]/, ''); //number

        switch (time.toLowerCase()) {
            case 's':
                vEnd = +vEnd;
                break;
            case 'mi':
                vEnd = vEnd * 60;
                break;
            case 'h':
                vEnd = vEnd * 60 * 60;
                break;
            case 'd':
                vEnd = vEnd * 24 * 60 * 60;
                break;
            case 'm':
                vEnd = vEnd * 30 * 24 * 60 * 60;
                break;
            case 'y':
                vEnd = vEnd * 365 * 30 * 24 * 60 * 60;
                break;
            default:
                vEnd = undefined;
                break;
        }

        return vEnd === undefined ? '' : '; max-age=' + vEnd;
    }

    $.extend($.fn.bootstrapTable.defaults, {
        stateSave: false,
        stateSaveExpire: '2h',
        stateSaveIdTable: ''
    });

    $.fn.bootstrapTable.methods.push('deleteCookie');

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initTable = BootstrapTable.prototype.initTable,
        _onSort = BootstrapTable.prototype.onSort,
        _onPageNumber = BootstrapTable.prototype.onPageNumber,
        _onPageListChange = BootstrapTable.prototype.onPageListChange,
        _onPageFirst = BootstrapTable.prototype.onPageFirst,
        _onPagePre = BootstrapTable.prototype.onPagePre,
        _onPageNext = BootstrapTable.prototype.onPageNext,
        _onPageLast = BootstrapTable.prototype.onPageLast,
        _toggleColumn = BootstrapTable.prototype.toggleColumn,
        _onSearch = BootstrapTable.prototype.onSearch;

    // init save data after initTable function
    BootstrapTable.prototype.initTable = function () {
        _initTable.apply(this, Array.prototype.slice.apply(arguments));
        this.initStateSave();
    };

    BootstrapTable.prototype.initStateSave = function () {
        if (!this.options.stateSave) {
            return;
        }

        if (!cookieEnabled()) {
            return;
        }

        if (this.options.stateSaveIdTable === '') {
            return;
        }

        var sortOrderStateSave = getCookie(this.options.stateSaveIdTable, idsStateSaveList.sortOrder),
            sortOrderStateName = getCookie(this.options.stateSaveIdTable, idsStateSaveList.sortName),
            pageNumberStateSave = getCookie(this.options.stateSaveIdTable, idsStateSaveList.pageNumber),
            pageListStateSave = getCookie(this.options.stateSaveIdTable, idsStateSaveList.pageList),
            columnsStateSave = JSON.parse(getCookie(this.options.stateSaveIdTable, idsStateSaveList.columns)),
            searchStateSave = getCookie(this.options.stateSaveIdTable, idsStateSaveList.searchText);

        if (sortOrderStateSave) {
            this.options.sortOrder = sortOrderStateSave;
            this.options.sortName = sortOrderStateName;
        }

        if (pageNumberStateSave) {
            this.options.pageNumber = +pageNumberStateSave;
        }

        if (pageListStateSave) {
            this.options.pageSize = pageListStateSave ===
                this.options.formatAllRows() ? pageListStateSave : +pageListStateSave;
        }

        if (columnsStateSave) {
            $.each(this.options.columns, function (i, column) {
                column.visible = columnsStateSave.indexOf(i) !== -1;
            });
        }

        if (searchStateSave) {
            this.options.searchText = searchStateSave;
        }
    };

    BootstrapTable.prototype.onSort = function () {
        _onSort.apply(this, Array.prototype.slice.apply(arguments));

        setCookie(this, idsStateSaveList.sortOrder, this.options.sortOrder);
        setCookie(this, idsStateSaveList.sortName, this.options.sortName);
    };

    BootstrapTable.prototype.onPageNumber = function () {
        _onPageNumber.apply(this, Array.prototype.slice.apply(arguments));

        setCookie(this, idsStateSaveList.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.onPageListChange = function () {
        _onPageListChange.apply(this, Array.prototype.slice.apply(arguments));

        setCookie(this, idsStateSaveList.pageList, this.options.pageSize);
    };

    BootstrapTable.prototype.onPageFirst = function () {
        _onPageFirst.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, idsStateSaveList.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.onPagePre = function () {
        _onPagePre.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, idsStateSaveList.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.onPageNext = function () {
        _onPageNext.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, idsStateSaveList.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.onPageLast = function () {
        _onPageLast.apply(this, Array.prototype.slice.apply(arguments));
        setCookie(this, idsStateSaveList.pageNumber, this.options.pageNumber);
    };

    BootstrapTable.prototype.toggleColumn = function () {
        _toggleColumn.apply(this, Array.prototype.slice.apply(arguments));

        var visibleColumns = [];

        $.each(this.options.columns, function (i) {
            if (this.visible) {
                visibleColumns.push(i);
            }
        });

        setCookie(this, idsStateSaveList.columns, JSON.stringify(visibleColumns));
    };

    BootstrapTable.prototype.onSearch = function () {
        _onSearch.apply(this, Array.prototype.slice.apply(arguments));

        setCookie(this, idsStateSaveList.searchText, this.searchText);
    };

    BootstrapTable.prototype.deleteCookie = function (cookieName) {
        if ((cookieName === '') || (!cookieEnabled())) {
            return;
        }

        deleteCookie(idsStateSaveList[cookieName]);
    };
})(jQuery);

/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/vitalets/x-editable
 */

!function ($) {

    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        editable: true,
        onEditableInit: function () {
            return false;
        },
        onEditableSave: function (field, row, oldValue, $el) {
            return false;
        }
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'editable-init.bs.table': 'onEditableInit',
        'editable-save.bs.table': 'onEditableSave'
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
                    ' data-value="' + result + '"',
                    '>' + '</a>'
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
                        index = $(this).parents('tr[data-index]').data('index'),
                        row = data[index],
                        oldValue = row[column.field];

                    row[column.field] = params.submitValue;
                    that.trigger('editable-save', column.field, row, oldValue, $(this));
                });
        });
        this.trigger('editable-init');
    };

}(jQuery);

/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/kayalshri/tableExport.jquery.plugin
 */

(function ($) {
    'use strict';

    var TYPE_NAME = {
        json: 'JSON',
        xml: 'XML',
        png: 'PNG',
        csv: 'CSV',
        txt: 'TXT',
        sql: 'SQL',
        doc: 'MS-Word',
        excel: 'Ms-Excel',
        powerpoint: 'Ms-Powerpoint',
        pdf: 'PDF'
    };

    $.extend($.fn.bootstrapTable.defaults, {
        showExport: false,
        // 'json', 'xml', 'png', 'csv', 'txt', 'sql', 'doc', 'excel', 'powerpoint', 'pdf'
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
        exportOptions: {}
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
                    '<div class="export btn-group">',
                        '<button class="btn btn-default dropdown-toggle" ' +
                            'data-toggle="dropdown" type="button">',
                            '<i class="glyphicon glyphicon-export icon-share"></i> ',
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
                        $menu.append(['<li data-type="' + type + '">',
                                '<a href="javascript:void(0)">',
                                    TYPE_NAME[type],
                                '</a>',
                            '</li>'].join(''));
                    }
                });

                $menu.find('li').click(function () {
                    that.$el.tableExport($.extend({}, that.options.exportOptions, {
                        type: $(this).data('type'),
                        escape: false
                    }));
                });
            }
        }
    };
})(jQuery);

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
        filterControl: false,
        onColumnSearch: function (field, text) {
            return false;
        }
    });

    $.extend($.fn.bootstrapTable.COLUMN_DEFAULTS, {
        filterControl: undefined,
        filterData: undefined
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'column-search.bs.table': 'onColumnSearch'
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initHeader = BootstrapTable.prototype.initHeader,
        _initBody = BootstrapTable.prototype.initBody,
        _initSearch = BootstrapTable.prototype.initSearch;

    BootstrapTable.prototype.initHeader = function () {
        _initHeader.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.filterControl) {
            return;
        }

        var addedFilterControl = false,
            that = this,
            isVisible,
            html,
            timeoutId = 0;

        $.each(this.options.columns, function (i, column) {
            isVisible = 'hidden';
            html = [];

            if (!column.visible) {
                return;
            }

            if (!column.filterControl) {
                html.push('<div style="height: 34px;"></div>');
            } else {
                html.push('<div style="margin: 0px 2px 2px 2px;" class="filterControl">');

                if (column.filterControl && column.searchable) {
                    addedFilterControl = true;
                    isVisible = 'visible'
                }
                switch (column.filterControl.toLowerCase()) {
                    case 'input' :
                        html.push(sprintf('<input type="text" class="form-control" style="width: 100%; visibility: %s">', isVisible));
                        break;
                    case 'select':
                        html.push(sprintf('<select class="%s form-control" style="width: 100%; visibility: %s"></select>',
                            column.field, isVisible))
                        break;
                }
            }

            that.$header.find(sprintf('.th-inner:eq("%s")', i)).next().append(html.join(''));
            if (column.filterData !== undefined && column.filterData.toLowerCase() !== 'column') {
                var filterDataType = column.filterData.substring(0, 3);
                var filterDataSource = column.filterData.substring(4, column.filterData.length);
                var selectControl = $('.' + column.field);
                selectControl.append($("<option></option>")
                    .attr("value", '')
                    .text(''));
                switch (filterDataType) {
                    case 'url':
                        $.ajax({
                            url: filterDataSource,
                            dataType: 'json',
                            success: function (data) {
                                $.each(data, function (key, value) {
                                    selectControl.append($("<option></option>")
                                        .attr("value", key)
                                        .text(value));
                                });
                            }
                        });
                        break;
                    case 'var':
                        var variableValues = window[filterDataSource];
                        for (var key in variableValues) {
                            selectControl.append($("<option></option>")
                                .attr("value", key)
                                .text(variableValues[key]));
                        };
                        break;
                }
            }
        });

        if (addedFilterControl) {
            this.$header.off('keyup', 'input').on('keyup', 'input', function (event) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    that.onColumnSearch(event);
                }, that.options.searchTimeOut);
            });

            this.$header.off('change', 'select').on('change', 'select', function (event) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    that.onColumnSearch(event);
                }, that.options.searchTimeOut);
            });
        } else {
            this.$header.find('.filterControl').hide();
        }
    };

    BootstrapTable.prototype.initBody = function () {
        _initBody.apply(this, Array.prototype.slice.apply(arguments));

        var that = this,
            data = this.getData();

        for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
            var key,
                item = data[i];

            $.each(this.header.fields, function (j, field) {
                var value = item[field],
                    column = that.options.columns[getFieldIndex(that.options.columns, field)];

                value = calculateObjectValue(that.header,
                    that.header.formatters[j], [value, item, i], value);

                if ((!column.checkbox) || (!column.radio)) {
                    if (column.filterControl !== undefined && column.filterControl.toLowerCase() === 'select'
                            && column.searchable) {

                        if (column.filterData === undefined || column.filterData.toLowerCase() === 'column') {
                            var selectControl = $('.' + column.field),
                                    iOpt = 0,
                                    exitsOpt = false,
                                    options;
                            if (selectControl !== undefined) {
                                options = selectControl.get(0).options;

                                if (options.length === 0) {

                                    //Added the default option
                                    selectControl.append($("<option></option>")
                                        .attr("value", '')
                                        .text(''));

                                    selectControl.append($("<option></option>")
                                        .attr("value", value)
                                        .text(value));
                                } else {
                                    for (; iOpt < options.length; iOpt++) {
                                        if (options[iOpt].value === value) {
                                            exitsOpt = true;
                                            break;
                                        }
                                    }

                                    if (!exitsOpt) {
                                        selectControl.append($("<option></option>")
                                            .attr("value", value)
                                            .text(value));
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
    };

    BootstrapTable.prototype.initSearch = function () {
        _initSearch.apply(this, Array.prototype.slice.apply(arguments));

        var that = this;
        var fp = $.isEmptyObject(this.filterColumnsPartial) ? null : this.filterColumnsPartial;

        //Check partial column filter
        this.data = fp ? $.grep(this.data, function (item, i) {
            for (var key in fp) {
                var fval = fp[key].toLowerCase();
                var value = item[key];
                value = calculateObjectValue(that.header,
                    that.header.formatters[$.inArray(key, that.header.fields)],
                    [value, item, i], value);

                if (!($.inArray(key, that.header.fields) !== -1 &&
                    (typeof value === 'string' || typeof value === 'number') &&
                    (value + '').toLowerCase().indexOf(fval) !== -1)) {
                    return false;
                }
            }
            return true;
        }) : this.data;
    };

    BootstrapTable.prototype.onColumnSearch = function (event) {
        var text = $.trim($(event.currentTarget).val());
        var $field = $(event.currentTarget).parent().parent().parent().data('field')

        if ($.isEmptyObject(this.filterColumnsPartial)) {
            this.filterColumnsPartial = {};
        }
        if (text) {
            this.filterColumnsPartial[$field] = text;
        } else {
            delete this.filterColumnsPartial[$field];
        }

        this.options.pageNumber = 1;
        this.onSearch(event);
        this.updatePagination();
        this.trigger('column-search', $field, text);
    };
}(jQuery);

/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/lukaskral/bootstrap-table-filter
 */

!function($) {

    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        showFilter: false
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init,
        _initSearch = BootstrapTable.prototype.initSearch;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        var that = this;
        this.$el.on('load-success.bs.table', function () {
            if (that.options.showFilter) {
                $(that.options.toolbar).bootstrapTableFilter({
                    connectTo: that.$el
                });
            }
        });
    };

    BootstrapTable.prototype.initSearch = function () {
        _initSearch.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.sidePagination !== 'server') {
            if (typeof this.searchCallback === 'function') {
                this.data = $.grep(this.options.data, this.searchCallback);
            }
        }
    };

    BootstrapTable.prototype.getData = function () {
        return (this.searchText || this.searchCallback) ? this.data : this.options.data;
    };

    BootstrapTable.prototype.getColumns = function () {
        return this.options.columns;
    };

    BootstrapTable.prototype.registerSearchCallback = function (callback) {
        this.searchCallback = callback;
    };

    BootstrapTable.prototype.updateSearch = function () {
        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination();
    };

    BootstrapTable.prototype.getServerUrl = function () {
        return (this.options.sidePagination === 'server') ? this.options.url : false;
    };

    $.fn.bootstrapTable.methods.push('getColumns',
        'registerSearchCallback', 'updateSearch',
        'getServerUrl');

}(jQuery);
/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.2.0
 */


(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        flat: false
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initData = BootstrapTable.prototype.initData;

    BootstrapTable.prototype.initData = function (data, type) {
        if( this.options.flat ){
            data = data === undefined ? this.options.data : data;
            data = sd.flatHelper(data);
        }
        _initData.apply(this, [data, type]);
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

/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 *
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

!function ($) {

    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        keyEvents: false
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        this.initKeyEvents();
    };

    BootstrapTable.prototype.initKeyEvents = function () {
        if (this.options.keyEvents) {
            var that = this;

            $(document).off('keydown').on('keydown', function (e) {
                var $search = that.$toolbar.find('.search input'),
                    $refresh = that.$toolbar.find('button[name="refresh"]'),
                    $toggle = that.$toolbar.find('button[name="toggle"]'),
                    $paginationSwitch = that.$toolbar.find('button[name="paginationSwitch"]');

                if (document.activeElement === $search.get(0)) {
                    return true;
                }

                switch (e.keyCode) {
                    case 83: //s
                        if (!that.options.search) {
                            return;
                        }
                        $search.focus();
                        return false;
                    case 82: //r
                        if (!that.options.showRefresh) {
                            return;
                        }
                        $refresh.click();
                        return false;
                    case 84: //t
                        if (!that.options.showToggle) {
                            return;
                        }
                        $toggle.click();
                        return false;
                    case 80: //p
                        if (!that.options.showPaginationSwitch) {
                            return;
                        }
                        $paginationSwitch.click();
                        return false;
                    case 37: // left
                        if (!that.options.pagination) {
                            return;
                        }
                        that.prevPage();
                        return false;
                    case 39: // right
                        if (!that.options.pagination) {
                            return;
                        }
                        that.nextPage();
                        return;
                }
            });
        }
    };
}(jQuery);

/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.1.0
 */

!function ($) {

    'use strict';

    var resetView = function (that) {
        if (that.options.height || that.options.showFooter) {
            setTimeout(that.resetView(), 1);
        }
    };

    var changeView = function (that, width, height) {
        if (that.options.minHeight) {
            if (checkValuesLessEqual(width, that.options.minWidth) && checkValuesLessEqual(height, that.options.minHeight)) {
                conditionCardView(that);
            } else if (checkValuesGreater(width, that.options.minWidth) && checkValuesGreater(height, that.options.minHeight)) {
                conditionFullView(that);
            }
        } else {
            if (checkValuesLessEqual(width, that.options.minWidth)) {
                conditionCardView(that);
            } else if (checkValuesGreater(width, that.options.minWidth)) {
                conditionFullView(that);
            }
        }

        resetView(that);
    };

    var checkValuesLessEqual = function (currentValue, targetValue) {
        return currentValue <= targetValue;
    };

    var checkValuesGreater = function (currentValue, targetValue) {
        return currentValue > targetValue;
    };

    var conditionCardView = function (that) {
        changeTableView(that, false);
    };

    var conditionFullView = function (that) {
        changeTableView(that, true);
    };

    var changeTableView = function (that, cardViewState) {
        that.options.cardView = cardViewState;
        that.toggleView();
    };

    $.extend($.fn.bootstrapTable.defaults, {
        mobileResponsive: false,
        minWidth: 562,
        minHeight: undefined,
        checkOnInit: true,
        toggled: false
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.mobileResponsive) {
            return;
        }

        if (!this.options.minWidth) {
            return;
        }

        var that = this;
        $(window).resize(function () {
            changeView(that, $(this).width(), $(this).height())
        });

        if (this.options.checkOnInit) {
            changeView(this, $(window).width(), $(window).height());
        }
    };
}(jQuery);

/**
 * @author Nadim Basalamah <dimbslmh@gmail.com>
 * @version: v1.0.0
 * https://github.com/dimbslmh/bootstrap-table/tree/master/src/extensions/multiple-sort/bootstrap-table-multiple-sort.js
 */

(function($) {
    'use strict';

    var isSingleSort = false;

    var sort_order = {
            asc: 'Ascending',
            desc: 'Descending'
        },
        arrowAsc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ' +
        '0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBd' +
        'qEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVo' +
        'AADeemwtPcZI2wAAAABJRU5ErkJggg==',
        arrowDesc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWj' +
        'YBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJ' +
        'zcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII= ';

    var showSortModal = function(that) {
        if (!$("#sortModal").hasClass("modal")) {
            var sModal = '  <div class="modal fade" id="sortModal" tabindex="-1" role="dialog" aria-labelledby="sortModalLabel" aria-hidden="true">';
            sModal += '         <div class="modal-dialog">';
            sModal += '             <div class="modal-content">';
            sModal += '                 <div class="modal-header">';
            sModal += '                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
            sModal += '                     <h4 class="modal-title" id="sortModalLabel">' + that.options.formatMultipleSort() + '</h4>';
            sModal += '                 </div>';
            sModal += '                 <div class="modal-body">';
            sModal += '                     <div class="bootstrap-table">';
            sModal += '                         <div class="fixed-table-toolbar">';
            sModal += '                             <div class="bars">';
            sModal += '                                 <div id="toolbar">';
            sModal += '                                     <button id="add" type="button" class="btn btn-default"><i class="' + that.options.iconsPrefix + ' ' + that.options.icons.plus + '"></i> ' + that.options.formatAddLevel() + '</button>';
            sModal += '                                     <button id="delete" type="button" class="btn btn-default" disabled><i class="' + that.options.iconsPrefix + ' ' + that.options.icons.minus + '"></i> ' + that.options.formatDeleteLevel() + '</button>';
            sModal += '                                 </div>';
            sModal += '                             </div>';
            sModal += '                         </div>';
            sModal += '                         <div class="fixed-table-container">';
            sModal += '                             <table id="multi-sort" class="table">';
            sModal += '                                 <thead>';
            sModal += '                                     <tr>';
            sModal += '                                         <th></th>';
            sModal += '                                         <th><div class="th-inner">' + that.options.formatColumn() + '</div></th>';
            sModal += '                                         <th><div class="th-inner">' + that.options.formatOrder() + '</div></th>';
            sModal += '                                     </tr>';
            sModal += '                                 </thead>';
            sModal += '                                 <tbody></tbody>';
            sModal += '                             </table>';
            sModal += '                         </div>';
            sModal += '                     </div>';
            sModal += '                 </div>';
            sModal += '                 <div class="modal-footer">';
            sModal += '                     <button type="button" class="btn btn-default" data-dismiss="modal">' + that.options.formatCancel() + '</button>';
            sModal += '                     <button type="button" class="btn btn-primary">' + that.options.formatSort() + '</button>';
            sModal += '                 </div>';
            sModal += '             </div>';
            sModal += '         </div>';
            sModal += '     </div>';

            $("body").append($(sModal));

            var $sortModal = $('#sortModal'),
                $rows = $sortModal.find("tbody > tr");

            $sortModal.off('click', '#add').on('click', '#add', function() {
                var total = $sortModal.find('.multi-sort-name:first option').length,
                    current = $sortModal.find('tbody tr').length;

                if (current < total) {
                    current++;
                    that.addLevel();
                    that.setButtonStates();
                }
            });

            $sortModal.off('click', '#delete').on('click', '#delete', function() {
                var total = $sortModal.find('.multi-sort-name:first option').length,
                    current = $sortModal.find('tbody tr').length;

                if (current > 1 && current <= total) {
                    current--;
                    $sortModal.find('tbody tr:last').remove();
                    that.setButtonStates();
                }
            });

            $sortModal.off('click', '.btn-primary').on('click', '.btn-primary', function() {
                var $rows = $sortModal.find("tbody > tr"),
                    $alert = $sortModal.find('div.alert'),
                    fields = [],
                    results = [];


                that.options.sortPriority = $.map($rows, function(row) {
                    var $row = $(row),
                        name = $row.find('.multi-sort-name').val(),
                        order = $row.find('.multi-sort-order').val();

                    fields.push(name);

                    return {
                        sortName: name,
                        sortOrder: order
                    };
                });

                var sorted_fields = fields.sort();

                for (var i = 0; i < fields.length - 1; i++) {
                    if (sorted_fields[i + 1] == sorted_fields[i]) {
                        results.push(sorted_fields[i]);
                    }
                }

                if (results.length > 0) {
                    if ($alert.length === 0) {
                        $alert = '<div class="alert alert-danger" role="alert"><strong>' + that.options.formatDuplicateAlertTitle() + '</strong> ' + that.options.formatDuplicateAlertDescription() + '</div>';
                        $($alert).insertBefore($sortModal.find('.bars'));
                    }
                } else {
                    if ($alert.length === 1) {
                        $($alert).remove();
                    }

                    that.options.sortName = "";
                    that.onMultipleSort();
                    $sortModal.modal('hide');
                }
            });

            if (that.options.sortPriority === null) {
                if (that.options.sortName) {
                    that.options.sortPriority = [{
                        sortName: that.options.sortName,
                        sortOrder: that.options.sortOrder
                    }];
                }
            }
            
            if (that.options.sortPriority !== null) {
                if ($rows.length < that.options.sortPriority.length && typeof that.options.sortPriority === 'object') {
                    for (var i = 0; i < that.options.sortPriority.length; i++) {
                        that.addLevel(i, that.options.sortPriority[i]);
                    }
                }
            } else {
                that.addLevel(0);
            }

            that.setButtonStates();
        }
    };

    $.extend($.fn.bootstrapTable.defaults, {
        showMultiSort: false,
        sortPriority: null,
        onMultipleSort: function() {
            return false;
        }
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
        sort: 'glyphicon-sort',
        plus: 'glyphicon-plus',
        minus: 'glyphicon-minus'
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'multiple-sort.bs.table': 'onMultipleSort'
    });

    $.extend($.fn.bootstrapTable.locales, {
        formatMultipleSort: function() {
            return 'Multiple Sort';
        },
        formatAddLevel: function() {
            return "Add Level";
        },
        formatDeleteLevel: function() {
            return "Delete Level";
        },
        formatColumn: function() {
            return "Column";
        },
        formatOrder: function() {
            return "Order";
        },
        formatSortBy: function() {
            return "Sort by";
        },
        formatThenBy: function() {
            return "Then by";
        },
        formatSort: function() {
            return "Sort";
        },
        formatCancel: function() {
            return "Cancel";
        },
        formatDuplicateAlertTitle: function() {
            return "Duplicate(s) detected!";
        },
        formatDuplicateAlertDescription: function() {
            return "Please remove or change any duplicate column.";
        }
    });

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initToolbar = function() {
        this.showToolbar = true;
        var that = this;

        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.showMultiSort) {
            var $btnGroup = this.$toolbar.find('>.btn-group'),
                $multiSortBtn = $btnGroup.find('div.multi-sort');

            if (!$multiSortBtn.length) {
                $multiSortBtn = '  <button class="multi-sort btn btn-default' + (this.options.iconSize === undefined ? '' : ' btn-' + this.options.iconSize) + '" type="button" data-toggle="modal" data-target="#sortModal" title="' + this.options.formatMultipleSort() + '">';
                $multiSortBtn += '     <i class="' + this.options.iconsPrefix + ' ' + this.options.icons.sort + '"></i>';
                $multiSortBtn += '</button>';

                $btnGroup.append($multiSortBtn);

                showSortModal(that);
            }

            this.$el.one('sort.bs.table', function() {
                isSingleSort = true;
            });

            this.$el.on('multiple-sort.bs.table', function() {
                isSingleSort = false;
            });

            this.$el.on('load-success.bs.table', function() {
                if (!isSingleSort && that.options.sortPriority !== null && typeof that.options.sortPriority === 'object') {
                    that.onMultipleSort();
                }
            });

            this.$el.on('column-switch.bs.table', function() {
                that.options.sortPriority = null;
                $('#sortModal').remove();
                showSortModal(that);
            });
        }
    };

    BootstrapTable.prototype.onMultipleSort = function() {
        var that = this;
        
        var cmp = function(x, y) {
            return x > y ? 1 : x < y ? -1 : 0;
        };

        var arrayCmp = function(a, b) {
            var arr1 = [],
                arr2 = [];

            for (var i = 0; i < that.options.sortPriority.length; i++) {
                var order = that.options.sortPriority[i].sortOrder === 'desc' ? -1 : 1,
                    aa = a[that.options.sortPriority[i].sortName],
                    bb = b[that.options.sortPriority[i].sortName];

                if (aa === undefined || aa === null) {
                    aa = '';
                }
                if (bb === undefined || bb === null) {
                    bb = '';
                }
                if ($.isNumeric(aa) && $.isNumeric(bb)) {
                    aa = parseFloat(aa);
                    bb = parseFloat(bb);
                }
                if (typeof aa !== 'string') {
                    aa = aa.toString();
                }

                arr1.push(
                    order * cmp(aa, bb));
                arr2.push(
                    order * cmp(bb, aa));
            }

            return cmp(arr1, arr2);
        };

        this.data.sort(function(a, b) {
            return arrayCmp(a, b);
        });

        this.initBody();
        this.assignSortableArrows();
        this.trigger('multiple-sort');
    };

    BootstrapTable.prototype.addLevel = function(index, sortPriority) {
        var $sortModal = $("#sortModal"),
            text = index === 0 ? this.options.formatSortBy() : this.options.formatThenBy();

        $sortModal.find('tbody')
            .append($('<tr>')
                .append($('<td>').text(text))
                .append($('<td>').append($('<select class="form-control multi-sort-name">')))
                .append($('<td>').append($('<select class="form-control multi-sort-order">')))
            );

        var $multiSortName = $sortModal.find('.multi-sort-name').last(),
            $multiSortOrder = $sortModal.find('.multi-sort-order').last();

        this.options.columns.forEach(function(column) {
            if (column.sortable === false || column.visible === false) {
                return true;
            }
            $multiSortName.append('<option value="' + column.field + '">' + column.title + '</option>');
        });

        $.each(sort_order, function(value, order) {
            $multiSortOrder.append('<option value="' + value + '">' + order + '</option>');
        });

        if (sortPriority !== undefined) {
            $multiSortName.find('option[value="' + sortPriority.sortName + '"]').attr("selected", true);
            $multiSortOrder.find('option[value="' + sortPriority.sortOrder + '"]').attr("selected", true);
        }
    };

    BootstrapTable.prototype.assignSortableArrows = function() {
        var that = this,
            headers = that.$header.find('th');

        for (var i = 0; i < headers.length; i++) {
            for (var c = 0; c < that.options.sortPriority.length; c++) {
                if ($(headers[i]).data('field') === that.options.sortPriority[c].sortName) {
                    $(headers[i]).find('.sortable').css('background-image', 'url(' + (that.options.sortPriority[c].sortOrder === 'desc' ? arrowDesc : arrowAsc) + ')');
                }
            }
        }
    };

    BootstrapTable.prototype.setButtonStates = function() {
        var $sortModal = $('#sortModal'),
            total = $sortModal.find('.multi-sort-name:first option').length,
            current = $sortModal.find('tbody tr').length;

        if (current == total) {
            $sortModal.find('#add').attr('disabled', 'disabled');
        }
        if (current > 1) {
            $sortModal.find('#delete').removeAttr('disabled');
        }
        if (current < total) {
            $sortModal.find('#add').removeAttr('disabled');
        }
        if (current == 1) {
            $sortModal.find('#delete').attr('disabled', 'disabled');
        }
    };
})(jQuery);

/**
 * @author: Brian Huisman
 * @webSite: http://www.greywyvern.com
 * @version: v1.0.0
 * JS function to allow natural sorting on bootstrap-table columns
 * just add data-sorter="alphanum" to any th
 *
 * @update Dennis Hernández <http://djhvscf.github.io/Blog>
 */

function alphanum(a, b) {
  function chunkify(t) {
    var tz = [],
        x = 0,
        y = -1,
        n = 0,
        i,
        j;

    while (i = (j = t.charAt(x++)).charCodeAt(0)) {
      var m = (i === 46 || (i >= 48 && i <= 57));
      if (m !== n) {
        tz[++y] = "";
        n = m;
      }
      tz[y] += j;
    }
    return tz;
  }

  var aa = chunkify(a);
  var bb = chunkify(b);

  for (x = 0; aa[x] && bb[x]; x++) {
    if (aa[x] !== bb[x]) {
      var c = Number(aa[x]),
          d = Number(bb[x]);

      if (c == aa[x] && d == bb[x]) {
        return c - d;
      } else {
          return (aa[x] > bb[x]) ? 1 : -1;
      }
    }
  }
  return aa.length - bb.length;
}
/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.1.0
 */

!function ($) {

    'use strict';

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

    $.extend($.fn.bootstrapTable.defaults, {
        reorderableColumns: false,
        maxMovingRows: 10,
        onReorderColumn: function (headerFields) {
            return false;
        }
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'reorder-column.bs.table': 'onReorderColumn'
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initHeader = BootstrapTable.prototype.initHeader,
        _toggleColumn = BootstrapTable.prototype.toggleColumn,
        _toggleView = BootstrapTable.prototype.toggleView,
        _resetView = BootstrapTable.prototype.resetView;

    BootstrapTable.prototype.initHeader = function () {
        _initHeader.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.reorderableColumns) {
            return;
        }

        this.makeRowsReorderable();
    };

    BootstrapTable.prototype.toggleColumn = function () {
        _toggleColumn.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.reorderableColumns) {
            return;
        }

        this.makeRowsReorderable();
    };

    BootstrapTable.prototype.toggleView = function () {
        _toggleView.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.reorderableColumns) {
            return;
        }

        if (this.options.cardView) {
            return;
        }

        this.makeRowsReorderable();
    };

    BootstrapTable.prototype.resetView = function () {
        _resetView.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.reorderableColumns) {
            return;
        }

        this.makeRowsReorderable();
    };

    BootstrapTable.prototype.makeRowsReorderable = function () {

        var that = this;
        try {
            $(this.$el).dragtable('destroy');
        } catch (e) {}
        $(this.$el).dragtable({
            maxMovingRows: that.options.maxMovingRows,
            clickDelay:200,
            beforeStop: function() {
                var ths = [],
                    columns = [],
                    columnIndex = -1;
                that.$header.find('th').each(function (i) {
                    ths.push($(this).data('field'));
                });

                for (var i = 0; i < ths.length; i++ ) {
                    columnIndex = getFieldIndex(that.options.columns, ths[i]);
                    if (columnIndex !== -1) {
                        columns.push(that.options.columns[columnIndex]);
                        that.options.columns.splice(columnIndex, 1);
                    }
                }

                that.options.columns = that.options.columns.concat(columns);
                that.header.fields = ths;
                that.resetView();
                that.trigger('reorder-column', ths);
            }
        });
    };
}(jQuery);
/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

!function ($) {

    'use strict';

    var isSearch = false;

    var rowAttr = function (row, index) {
        return {
            id: 'customId_' + index
        };
    };

    $.extend($.fn.bootstrapTable.defaults, {
        reorderableRows: false,
        onDragStyle: null,
        onDropStyle: null,
        onDragClass: "reorder_rows_onDragClass",
        dragHandle: null,
        useRowAttrFunc: false,
        onReorderRowsDrag: function (table, row) {
            return false;
        },
        onReorderRowsDrop: function (table, row) {
            return false;
        },
        onReorderRow: function (newData) {
             return false;
        }
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'reorder-row.bs.table': 'onReorderRow'
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init,
        _initSearch = BootstrapTable.prototype.initSearch;

    BootstrapTable.prototype.init = function () {

        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.reorderableRows) {
            return;
        }

        var that = this;
        if (this.options.useRowAttrFunc) {
            this.options.rowAttributes = rowAttr;
        }

        var onPostBody = this.options.onPostBody;
        this.options.onPostBody = function () {
            setTimeout(function () {
                that.makeRowsReorderable();
                onPostBody.apply();
            }, 1);
        };
    };

    BootstrapTable.prototype.initSearch = function () {
        _initSearch.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.reorderableRows) {
            return;
        }

        //Known issue after search if you reorder the rows the data is not display properly
        //isSearch = true;
    };

    BootstrapTable.prototype.makeRowsReorderable = function () {
        if (this.options.cardView) {
            return;
        }

        var that = this;
        this.$el.tableDnD({
            onDragStyle: that.options.onDragStyle,
            onDropStyle: that.options.onDropStyle,
            onDragClass: that.options.onDragClass,
            onDrop: that.onDrop,
            onDragStart: that.options.onReorderRowsDrag,
            dragHandle: that.options.dragHandle
        });
    };

    BootstrapTable.prototype.onDrop = function (table, row) {
        var tableBs = $(table),
            tableBsData = tableBs.data('bootstrap.table'),
            tableBsOptions = tableBs.data('bootstrap.table').options,
            row = null,
            newData = [];

        for (var i = 0; i < table.tBodies[0].rows.length; i++) {
            row = $(table.tBodies[0].rows[i]);
            newData.push(tableBsOptions.data[row.data('index')]);
            row.data('index', i).attr('data-index', i);
        }

        tableBsOptions.data = newData;

        //Call the user defined function
        tableBsOptions.onReorderRowsDrop.apply(table, row);

        //Call the event reorder-row
        tableBsData.trigger('reorder-row', newData);
    };
}(jQuery);
/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

(function ($) {
    'use strict';

    var initResizable = function (that) {
        //Deletes the plugin to re-create it
        that.$el.colResizable({disable: true});

        //Creates the plugin
        that.$el.colResizable({
            liveDrag: that.options.liveDrag,
            fixed: that.options.fixed,
            headerOnly: that.options.headerOnly,
            minWidth: that.options.minWidth,
            hoverCursor: that.options.hoverCursor,
            dragCursor: that.options.dragCursor,
            onResize: that.onResize,
            onDrag: that.options.onResizableDrag
        });
    };

    $.extend($.fn.bootstrapTable.defaults, {
        resizable: false,
        liveDrag: false,
        fixed: true,
        headerOnly: false,
        minWidth: 15,
        hoverCursor: 'e-resize',
        dragCursor: 'e-resize',
        onResizableResize: function (e) {
            return false;
        },
        onResizableDrag: function (e) {
            return false;
        }
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _toggleView = BootstrapTable.prototype.toggleView,
        _resetView = BootstrapTable.prototype.resetView;

    BootstrapTable.prototype.toggleView = function () {
        _toggleView.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.resizable && this.options.cardView) {
            //Deletes the plugin
            $(this.$el).colResizable({disable: true});
        }
    };

    BootstrapTable.prototype.resetView = function () {
        var that = this;

        _resetView.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.resizable) {
            // because in fitHeader function, we use setTimeout(func, 100);
            setTimeout(function () {
                initResizable(that);
            }, 100);
        }
    };

    BootstrapTable.prototype.onResize = function (e) {
        var that = $(e.currentTarget);
        that.bootstrapTable('resetView');
        that.data('bootstrap.table').options.onResizableResize.apply(e);
    }
})(jQuery);

/**
 * @author: aperez <aperez@datadec.es>
 * @version: v2.0.0
 *
 * @update Dennis Hernández <http://djhvscf.github.io/Blog>
 */

!function($) {
    'use strict';

    var firstLoad = false;

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

    var showAvdSearch = function(pColumns, searchTitle, searchText, that) {
        if (!$("#avdSearchModal").hasClass("modal")) {
            var vModal = "<div id=\"avdSearchModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">";
            vModal += "<div class=\"modal-dialog modal-xs\">";
            vModal += " <div class=\"modal-content\">";
            vModal += "  <div class=\"modal-header\">";
            vModal += "   <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" >&times;</button>";
            vModal += sprintf("   <h4 class=\"modal-title\">%s</h4>", searchTitle);
            vModal += "  </div>";
            vModal += "  <div class=\"modal-body modal-body-custom\">";
            vModal += "   <div class=\"container-fluid\" id=\"avdSearchModalContent\" style=\"padding-right: 0px;padding-left: 0px;\" >";
            vModal += "   </div>";
            vModal += "  </div>";
            vModal += "  </div>";
            vModal += " </div>";
            vModal += "</div>";

            $("body").append($(vModal));

            var vFormAvd = createFormAvd(pColumns, searchText, that),
                timeoutId = 0;;

            $('#avdSearchModalContent').append(vFormAvd.join(''));

            $('#' + that.options.idForm).off('keyup blur', 'input').on('keyup blur', 'input', function (event) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    that.onColumnAdvancedSearch(event);
                }, that.options.searchTimeOut);
            });

            $("#btnCloseAvd").click(function() {
                $("#avdSearchModal").modal('hide');
            });

            $("#avdSearchModal").modal();
        } else {
            $("#avdSearchModal").modal();
        }
    };

    var createFormAvd = function(pColumns, searchText, that) {
        var htmlForm = [];
        htmlForm.push(sprintf('<form class="form-horizontal" id="%s" action="%s" >', that.options.idForm, that.options.actionForm));
        for (var i in pColumns) {
            var vObjCol = pColumns[i];
            if (!vObjCol.checkbox && vObjCol.visible && vObjCol.searchable) {
                htmlForm.push('<div class="form-group">');
                htmlForm.push(sprintf('<label class="col-sm-4 control-label">%s</label>', vObjCol.title));
                htmlForm.push('<div class="col-sm-6">');
                htmlForm.push(sprintf('<input type="text" class="form-control input-md" name="%s" placeholder="%s" id="%s">', vObjCol.field, vObjCol.title, vObjCol.field));
                htmlForm.push('</div>');
                htmlForm.push('</div>');
            }
        }

        htmlForm.push('<div class="form-group">');
        htmlForm.push('<div class="col-sm-offset-9 col-sm-3">');
        htmlForm.push(sprintf('<button type="button" id="btnCloseAvd" class="btn btn-default" >%s</button>', searchText));
        htmlForm.push('</div>');
        htmlForm.push('</div>');
        htmlForm.push('</form>');

        return htmlForm;
    };

    $.extend($.fn.bootstrapTable.defaults, {
        advancedSearch: false,
        idForm: 'advancedSearch',
        actionForm: '',
        idTable: undefined,
        onColumnAdvancedSearch: function (field, text) {
            return false;
        }
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
        advancedSearchIcon: 'glyphicon-chevron-down'
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'column-advanced-search.bs.table': 'onColumnAdvancedSearch'
    });

    $.extend($.fn.bootstrapTable.locales, {
        formatAdvancedSearch: function() {
            return 'Advanced search';
        },
        formatAdvancedCloseButton: function() {
            return "Close";
        }
    });

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar,        
        _load = BootstrapTable.prototype.load,
        _initSearch = BootstrapTable.prototype.initSearch;

    BootstrapTable.prototype.initToolbar = function() {
        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.search) {
            return;
        }

        if (!this.options.advancedSearch) {
            return;
        }

        var that = this,
            html = [];

        html.push(sprintf('<div class="columns columns-%s btn-group pull-%s" role="group">', this.options.buttonsAlign, this.options.buttonsAlign));
        html.push(sprintf('<button class="btn btn-default%s' + '" type="button" name="advancedSearch" title="%s">', that.options.iconSize === undefined ? '' : ' btn-' + that.options.iconSize, that.options.formatAdvancedSearch()));
        html.push(sprintf('<i class="%s %s"></i>', that.options.iconsPrefix, that.options.icons.advancedSearchIcon))
        html.push('</button></div>');

        that.$toolbar.prepend(html.join(''));

        that.$toolbar.find('button[name="advancedSearch"]')
            .off('click').on('click', function() {
                showAvdSearch(that.options.columns, that.options.formatAdvancedSearch(), that.options.formatAdvancedCloseButton(), that);
            });
    };

    BootstrapTable.prototype.load = function(data) {
        _load.apply(this, Array.prototype.slice.apply(arguments));

        if (typeof this.options.idTable === 'undefined') {
            return;
        } else {
            if (!firstLoad) {
                var height = parseInt($(".bootstrap-table").height());
                height += 10;
                $("#" + this.options.idTable).bootstrapTable("resetView", {height: height});
                firstLoad = true;
            }
        }
    };

    BootstrapTable.prototype.initSearch = function () {
        _initSearch.apply(this, Array.prototype.slice.apply(arguments));

        var that = this;
        var fp = $.isEmptyObject(this.filterColumnsPartial) ? null : this.filterColumnsPartial;

        this.data = fp ? $.grep(this.data, function (item, i) {
            for (var key in fp) {
                var fval = fp[key].toLowerCase();
                var value = item[key];
                value = calculateObjectValue(that.header,
                    that.header.formatters[$.inArray(key, that.header.fields)],
                    [value, item, i], value);

                if (!($.inArray(key, that.header.fields) !== -1 &&
                    (typeof value === 'string' || typeof value === 'number') &&
                    (value + '').toLowerCase().indexOf(fval) !== -1)) {
                    return false;
                }
            }
            return true;
        }) : this.data;
    };

    BootstrapTable.prototype.onColumnAdvancedSearch = function (event) {
        var text = $.trim($(event.currentTarget).val());
        var $field = $(event.currentTarget)[0].id;

        if ($.isEmptyObject(this.filterColumnsPartial)) {
            this.filterColumnsPartial = {};
        }
        if (text) {
            this.filterColumnsPartial[$field] = text;
        } else {
            delete this.filterColumnsPartial[$field];
        }

        this.options.pageNumber = 1;
        this.onSearch(event);
        this.updatePagination();
        this.trigger('column-advanced-search', $field, text);
    };
}(jQuery);
