/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.11.3 - edycja wlasna https://github.com/andig89/bootstrap-table
 * https://github.com/wenzhixin/bootstrap-table/
 */

(function($) {
    'use strict';

    // TOOLS DEFINITION
    // ======================

    var cachedWidth = null;

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
        return flag ? str : '';
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

    var getFieldIndex = function(columns, field) {
        var index = -1;

        $.each(columns, function(i, column) {
            if (column.field === field) {
                index = i;
                return false;
            }
            return true;
        });
        return index;
    };

    var getScrollBarWidth = function() {
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

    var calculateObjectValue = function(self, name, args, defaultValue) {
        var func = name;

        if (typeof name === 'string') {
            // support obj.func1.func2
            var names = name.split('.');

            if (names.length > 1) {
                func = window;
                $.each(names, function(i, f) {
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
            return func.apply(self, args || []);
        }
        if (!func && typeof name === 'string' && sprintf.apply(this, [name].concat(args))) {
            return sprintf.apply(this, [name].concat(args));
        }
        return defaultValue;
    };

    var compareObjects = function(objectA, objectB, compareLength) {
        // Create arrays of property names
        var objectAProperties = Object.getOwnPropertyNames(objectA),
            objectBProperties = Object.getOwnPropertyNames(objectB),
            propName = '';

        if (compareLength) {
            // If number of properties is different, objects are not equivalent
            if (objectAProperties.length !== objectBProperties.length) {
                return false;
            }
        }

        for (var i = 0; i < objectAProperties.length; i++) {
            propName = objectAProperties[i];

            // If the property is not in the object B properties, continue with the next property
            if ($.inArray(propName, objectBProperties) > -1) {
                // If values of same property are not equal, objects are not equivalent
                if (objectA[propName] !== objectB[propName]) {
                    return false;
                }
            }
        }

        // If we made it this far, objects are considered equivalent
        return true;
    };

    var escapeHTML = function(text) {
        if (typeof text === 'string') {
            return text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;')
                .replace(/`/g, '&#x60;');
        }
        return text;
    };

    var getRealDataAttr = function(dataAttr) {
        for (var attr in dataAttr) {
            var auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase();
            if (auxAttr !== attr) {
                dataAttr[auxAttr] = dataAttr[attr];
                delete dataAttr[attr];
            }
        }

        return dataAttr;
    };

    var getItemField = function(item, field, escape) {
        var value = item;

        if (typeof field !== 'string' || item.hasOwnProperty(field)) {
            return escape ? escapeHTML(item[field]) : item[field];
        }
        var props = field.split('.');
        for (var p in props) {
            if (props.hasOwnProperty(p)) {
                value = value && value[props[p]];
            }
        }
        return escape ? escapeHTML(value) : value;
    };

    var isIEBrowser = function() {
        return !!(navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
    };

    var objectKeys = function() {
        // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
        if (!Object.keys) {
            Object.keys = (function() {
                var hasOwnProperty = Object.prototype.hasOwnProperty,
                    hasDontEnumBug = !({
                        toString: null
                    }).propertyIsEnumerable('toString'),
                    dontEnums = [
                        'toString',
                        'toLocaleString',
                        'valueOf',
                        'hasOwnProperty',
                        'isPrototypeOf',
                        'propertyIsEnumerable',
                        'constructor'
                    ],
                    dontEnumsLength = dontEnums.length;

                return function(obj) {
                    if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                        throw new TypeError('Object.keys called on non-object');
                    }

                    var result = [],
                        prop, i;

                    for (prop in obj) {
                        if (hasOwnProperty.call(obj, prop)) {
                            result.push(prop);
                        }
                    }

                    if (hasDontEnumBug) {
                        for (i = 0; i < dontEnumsLength; i++) {
                            if (hasOwnProperty.call(obj, dontEnums[i])) {
                                result.push(dontEnums[i]);
                            }
                        }
                    }
                    return result;
                };
            }());
        }
    };

    // BOOTSTRAP TABLE CLASS DEFINITION
    // ======================

    var BootstrapTable = function(el, options) {
        this.options = options;
        this.$el = $(el);
        this.$el_ = this.$el.clone();
        this.timeoutId_ = 0;
        this.timeoutFooter_ = 0;

        this.init();
    };

    BootstrapTable.DEFAULTS = {
        class: 'table table-hover',
        sortClass: undefined,
        locale: undefined,
        height: undefined,
        undefinedText: '-',
        sortName: undefined,
        sortOrder: 'asc',
        sortStable: false,
        rememberOrder: false,
        striped: false,
        columns: [
            []
        ],
        data: [],
        totalField: 'total',
        dataField: 'rows',
        method: 'get',
        url: undefined,
        ajax: undefined,
        cache: true,
        contentType: 'application/json',
        dataType: 'json',
        ajaxOptions: {},
        queryParams: function(params) {
            return params;
        },
        queryParamsType: 'limit', // undefined
        responseHandler: function(res) {
            return res;
        },
        pagination: false,
        onlyInfoPagination: false,
        paginationLoop: true,
        sidePagination: 'client', // client or server
        totalRows: 0, // server side need to set
        pageNumber: 1,
        pageSize: 10,
        pageList: [10, 25, 50, 100],
        paginationHAlign: 'right', //right, left
        paginationVAlign: 'bottom', //bottom, top, both
        paginationDetailHAlign: 'left', //right, left
        paginationPreText: '&lsaquo;',
        paginationNextText: '&rsaquo;',
        search: false,
        searchOnEnterKey: false,
        strictSearch: false,
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
        escape: false,
        minimumCountColumns: 1,
        idField: undefined,
        uniqueId: undefined,
        cardView: false,
        detailView: false,
        detailFormatter: function(index, row) {
            return '';
        },
        detailFilter: function(index, row) {
            return true;
        },
        trimOnSearch: true,
        clickToSelect: false,
        singleSelect: false,
        toolbar: undefined,
        toolbarAlign: 'left',
        checkboxHeader: true,
        sortable: true,
        silentSort: true,
        maintainSelected: false,
        searchTimeOut: 500,
        searchText: '',
        iconSize: undefined,
        buttonsClass: 'default',
        iconsPrefix: 'glyphicon', // glyphicon of fa (font awesome)
        icons: {
            paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
            paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
            refresh: 'glyphicon-refresh icon-refresh',
            toggle: 'glyphicon-list-alt icon-list-alt',
            columns: 'glyphicon-th icon-th',
            detailOpen: 'glyphicon-plus icon-plus',
            detailClose: 'glyphicon-minus icon-minus'
        },

        customSearch: $.noop,

        customSort: $.noop,

        rowAttributes: function(row, index) {
            return {};
        },

        footerStyle: function(row, index) {
            return {};
        },

        onAll: function(name, args) {
            return false;
        },
        onClickCell: function(field, value, row, $element) {
            return false;
        },
        onDblClickCell: function(field, value, row, $element) {
            return false;
        },
        onClickRow: function(item, $element) {
            return false;
        },
        onDblClickRow: function(item, $element) {
            return false;
        },
        onSort: function(name, order) {
            return false;
        },
        onCheck: function(row) {
            return false;
        },
        onUncheck: function(row) {
            return false;
        },
        onCheckAll: function(rows) {
            return false;
        },
        onUncheckAll: function(rows) {
            return false;
        },
        onCheckSome: function(rows) {
            return false;
        },
        onUncheckSome: function(rows) {
            return false;
        },
        onLoadSuccess: function(data) {
            return false;
        },
        onLoadError: function(status) {
            return false;
        },
        onColumnSwitch: function(field, checked) {
            return false;
        },
        onPageChange: function(number, size) {
            return false;
        },
        onSearch: function(text) {
            return false;
        },
        onToggle: function(cardView) {
            return false;
        },
        onPreBody: function(data) {
            return false;
        },
        onPostBody: function() {
            return false;
        },
        onPostHeader: function() {
            return false;
        },
        onExpandRow: function(index, row, $detail) {
            return false;
        },
        onCollapseRow: function(index, row) {
            return false;
        },
        onRefreshOptions: function(options) {
            return false;
        },
        onRefresh: function(params) {
            return false;
        },
        onResetView: function() {
            return false;
        }
    };

    BootstrapTable.LOCALES = {};

    BootstrapTable.LOCALES['en-US'] = BootstrapTable.LOCALES.en = {
        formatLoadingMessage: function() {
            return 'Loading, please wait...';
        },
        formatRecordsPerPage: function(pageNumber) {
            return sprintf('%s rows per page', pageNumber);
        },
        formatShowingRows: function(pageFrom, pageTo, totalRows) {
            return sprintf('Showing %s to %s of %s rows', pageFrom, pageTo, totalRows);
        },
        formatDetailPagination: function(totalRows) {
            return sprintf('Showing %s rows', totalRows);
        },
        formatSearch: function() {
            return 'Search';
        },
        formatNoMatches: function() {
            return 'No matching records found';
        },
        formatPaginationSwitch: function() {
            return 'Hide/Show pagination';
        },
        formatRefresh: function() {
            return 'Refresh';
        },
        formatToggle: function() {
            return 'Toggle';
        },
        formatColumns: function() {
            return 'Columns';
        },
        formatAllRows: function() {
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
        titleTooltip: undefined,
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
        searchable: true,
        searchFormatter: true,
        cardVisible: true,
        escape: false
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
        'collapse-row.bs.table': 'onCollapseRow',
        'refresh-options.bs.table': 'onRefreshOptions',
        'reset-view.bs.table': 'onResetView',
        'refresh.bs.table': 'onRefresh'
    };

    BootstrapTable.prototype.init = function() {
        this.initLocale();
        this.initContainer();
        this.initTable();
        this.prepareOptions();
        this.initHeader();
        this.initData();
        this.initHiddenRows();
        this.initFooter();
        this.initToolbar();
        this.initPagination();
        this.initBody();
        this.initSearchText();
        this.initServer();
    };

    BootstrapTable.prototype.initLocale = function() {
        if (this.options.locale) {
            var parts = this.options.locale.split(/-|_/);
            parts[0].toLowerCase();
            if (parts[1]) parts[1].toUpperCase();
            if ($.fn.bootstrapTable.locales[this.options.locale]) {
                // locale as requested
                $.extend(this.options, $.fn.bootstrapTable.locales[this.options.locale]);
            } else if ($.fn.bootstrapTable.locales[parts.join('-')]) {
                // locale with sep set to - (in case original was specified with _)
                $.extend(this.options, $.fn.bootstrapTable.locales[parts.join('-')]);
            } else if ($.fn.bootstrapTable.locales[parts[0]]) {
                // short locale language code (i.e. 'en')
                $.extend(this.options, $.fn.bootstrapTable.locales[parts[0]]);
            }
        }
    };

    BootstrapTable.prototype.initContainer = function() {
        this.$container = $([
            '<div class="bootstrap-table">',
            '<div class="fixed-table-toolbar"></div>',
            this.options.paginationVAlign === 'top' || this.options.paginationVAlign === 'both' ?
            '<div class="fixed-table-pagination" style="clear: both;"></div>' :
            '',
            '<div class="fixed-table-container">',
            '<div class="fixed-table-header"><table><thead></thead></table></div>',
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
            '</div>'
        ].join(''));

        this.$container.insertAfter(this.$el);
        this.$tableContainer = this.$container.find('.fixed-table-container');
        this.$tableHeader = this.$container.find('.fixed-table-header');
        this.$tableBody = this.$container.find('.fixed-table-body');
        this.$tableLoading = this.$container.find('.fixed-table-loading');
        this.$tableFooter = this.$container.find('.fixed-table-footer');
        this.$toolbar = this.$container.find('.fixed-table-toolbar');
        this.$pagination = this.$container.find('.fixed-table-pagination');
        this.eventsBodies = [];
        this.eventsHeaderBodies = [];
        this.eventsTable = [];

        this.$tableBody.append(this.$el);
        this.$container.after('<div class="clearfix"></div>');

        this.$el.addClass(this.options.class);
        if (this.options.striped) {
            this.$el.addClass('table-striped');
        }
        if ($.inArray('table-no-bordered', this.options.class.split(' ')) !== -1) {
            this.$tableContainer.addClass('table-no-bordered');
        }
    };

    BootstrapTable.prototype.initTable = function() {
        var that = this,
            columns = [],
            data = [];

        this.$header = that.$tableHeader.find('thead');
        this.$header.find('tr').each(function() {
            var column = [];

            $(this).find('th').each(function() {
                // Fix #2014 - getFieldIndex and elsewhere assume this is string, causes issues if not
                if (typeof $(this).data('field') !== 'undefined') {
                    $(this).data('field', $(this).data('field') + '');
                }
                column.push($.extend(true, {}, {
                    title: $(this).html(),
                    'class': $(this).prop('class'),
                    titleTooltip: $(this).prop('title'),
                    rowspan: $(this).prop('rowspan') ? +$(this).prop('rowspan') : undefined,
                    colspan: $(this).prop('colspan') ? +$(this).prop('colspan') : undefined
                }, $(this).data()));
            });
            columns.push(column);
        });
        if (!$.isArray(this.options.columns[0])) {
            this.options.columns = [this.options.columns];
        }
        this.options.columns = $.extend(true, [], columns, this.options.columns);
        this.columns = [];

        $.each(this.options.columns, function(i, columns) {
            $.each(columns, function(j, column) {
                that.options.columns[i][j].fieldIndex = j;
                if (!that.options.columns[i][j].hasOwnProperty('field')) {
                    that.options.columns[i][j].field = j;
                }
                column = $.extend(true, {}, BootstrapTable.COLUMN_DEFAULTS, column);

                if (!column.hasOwnProperty('dataField') || column.dataField) {
                    that.columns.push(column);
                }

                that.options.columns[i][j] = column;
            });
        });

        // if options.data is setting, do not process tbody data
        if (this.options.data.length) {
            return;
        }

        var m = [];
        this.$el.find('>tbody>tr').each(function(y) {
            var row = {};

            // save tr's id, class and data-* attributes
            row._id = $(this).prop('id');
            row._class = $(this).prop('class');
            row._data = getRealDataAttr($(this).data());

            $(this).find('>td').each(function(x) {
                var $this = $(this),
                    cspan = +$this.prop('colspan') || 1,
                    rspan = +$this.prop('rowspan') || 1,
                    tx, ty;

                for (; m[y] && m[y][x]; x++); //skip already occupied cells in current row

                for (tx = x; tx < x + cspan; tx++) { //mark matrix elements occupied by current cell with true
                    for (ty = y; ty < y + rspan; ty++) {
                        if (!m[ty]) { //fill missing rows
                            m[ty] = [];
                        }
                        m[ty][tx] = true;
                    }
                }

                var field = that.columns[x].field;

                row[field] = $(this).html();
                // save td's id, class and data-* attributes
                row['_' + field + '_id'] = $(this).prop('id');
                row['_' + field + '_class'] = $(this).prop('class');
                row['_' + field + '_rowspan'] = $(this).prop('rowspan');
                row['_' + field + '_colspan'] = $(this).prop('colspan');
                row['_' + field + '_title'] = $(this).prop('title');
                row['_' + field + '_data'] = getRealDataAttr($(this).data());
            });
            data.push(row);
        });
        this.options.data = data;
        if (data.length) this.fromHtml = true;
    };

    BootstrapTable.prototype.prepareOptions = function() {
        var that = this,
            rowsOptionsDefaults = $.extend(true, {}, that.options.hasOwnProperty('rowsOptionsDefaults') ? that.options.rowsOptionsDefaults : {}),
            columnsOptionsDefaults = $.extend(true, {}, that.options.hasOwnProperty('columnsOptionsDefaults') ? that.options.columnsOptionsDefaults : {}),
            rowsHeadOptionsDefaults = {};

        if (rowsOptionsDefaults.hasOwnProperty('head')) {
            rowsHeadOptionsDefaults = $.extend(true, {}, rowsOptionsDefaults.head);
        }
        delete rowsOptionsDefaults.head;

        $.each(that.options.columns, function(index_row_head, row) {
            var rowOptions = $.extend(true, {}, rowsOptionsDefaults),
                rowHeadOptions = $.extend(true, {}, rowsHeadOptionsDefaults);

            if (typeof rowOptions.rows !== 'undefined' && typeof rowOptions.rows[index_row_head] !== 'undefined') {
                if (typeof rowOptions.rows[index_row_head].extend === 'undefined' || rowOptions.rows[index_row_head].extend) {
                    $.extend(rowOptions, rowOptions.rows[index_row_head]);
                } else {
                    rowOptions = rowOptions.rows[index_row_head];
                }
                if (typeof rowOptions.head !== 'undefined') {
                    if (typeof rowOptions.head.extend === 'undefined' || rowOptions.head.extend) {
                        $.extend(true, rowHeadOptions, rowOptions.head);
                    } else {
                        rowHeadOptions = rowOptions.head;
                    }
                }
            }

            rowHeadOptions.sortable = BootstrapTable.COLUMN_DEFAULTS.sortable;
            rowHeadOptions.checkbox = BootstrapTable.COLUMN_DEFAULTS.checkbox;
            rowHeadOptions.radio = BootstrapTable.COLUMN_DEFAULTS.radio;
            delete rowHeadOptions.field;

            rowOptions.sortable = BootstrapTable.COLUMN_DEFAULTS.sortable;
            rowOptions.checkbox = BootstrapTable.COLUMN_DEFAULTS.checkbox;
            rowOptions.radio = BootstrapTable.COLUMN_DEFAULTS.radio;
            delete rowOptions.field;
            delete rowOptions.head;

            $.each(row, function(index_column, column) {
                var columnHeadOptions = typeof columnsOptionsDefaults.head === 'undefined' ? $.extend(true, {}, rowHeadOptions) : $.extend(true, {}, rowHeadOptions, columnsOptionsDefaults.head),
                    columnOptions = $.extend(true, {}, rowOptions, columnsOptionsDefaults);

                delete columnOptions.head;
                if (typeof columnOptions.columns !== 'undefined' && typeof columnOptions.columns[index_column] !== 'undefined') {
                    if (typeof columnOptions.columns[index_column].extend === 'undefined' || columnHeadOptions.columns[index_column].extend) {
                        $.extend(columnOptions, columnOptions.columns[index_column]);
                    } else {
                        columnOptions = columnOptions.columns[index_column];
                    }
                    if (typeof columnOptions.head !== 'undefined') {
                        if (typeof columnOptions.head.extend === 'undefined' || columnOptions.head.extend) {
                            $.extend(columnHeadOptions, columnOptions.head);
                        } else {
                            columnHeadOptions = columnOptions.head;
                        }
                    }
                    delete columnOptions.head;
                }

                if (typeof column.extend === 'undefined' || column.extend) {
                    $.extend(true, columnOptions, column);
                } else {
                    columnOptions = $.extend(true, {}, column);
                }
                if (typeof columnOptions.head !== 'undefined') {
                    if (typeof columnOptions.head.extend === 'undefined' || columnOptions.head.extend) {
                        $.extend(columnHeadOptions, columnOptions.head);
                    } else {
                        columnHeadOptions = columnOptions.head;
                    }
                }
                if (typeof columnOptions.unsedDataColumn !== 'undefined') {
                    columnHeadOptions.unsedDataColumn = columnOptions.unsedDataColumn;
                }
                if (typeof columnOptions.cardVisible !== 'undefined') {
                    columnHeadOptions.cardVisible = columnOptions.cardVisible;
                }
                if (typeof columnOptions.switchable !== 'undefined') {
                    columnHeadOptions.switchable = columnOptions.switchable;
                }
                if (typeof columnOptions.sortable !== 'undefined') {
                    columnHeadOptions.sortable = columnOptions.sortable;
                }
                if (typeof columnOptions.checkbox !== 'undefined') {
                    columnHeadOptions.checkbox = columnOptions.checkbox;
                }
                if (typeof columnOptions.radio !== 'undefined') {
                    columnHeadOptions.radio = columnOptions.radio;
                }
                if (typeof columnOptions.title !== 'undefined') {
                    columnHeadOptions.title = columnOptions.title;
                }
                if (typeof columnOptions.field !== 'undefined') {
                    columnHeadOptions.field = columnOptions.field;
                }

                columnOptions.head = columnHeadOptions;

                that.options.columns[index_row_head][index_column] = columnOptions;
            });
        });
    };

    BootstrapTable.prototype.prepareRowOptions = function(data) {
        var cellOptions = $.extend(true, {}, data.column),
            cellHeadOptions = typeof cellOptions.head === 'undefined' ? {} : cellOptions.head;

        if (typeof cellOptions.rows !== 'undefined' && typeof cellOptions.rows[data.index_row] !== 'undefined') {
            if (typeof cellOptions.unsedDataColumn !== 'undefined') {
                cellOptions.rows[data.index_row].unsedDataColumn = cellOptions.unsedDataColumn;
            }
            if (typeof cellOptions.cardVisible !== 'undefined') {
                cellOptions.rows[data.index_row].cardVisible = cellOptions.cardVisible;
            }
            if (typeof cellOptions.switchable !== 'undefined') {
                cellOptions.rows[data.index_row].switchable = cellOptions.switchable;
            }
            if (typeof cellOptions.sortable !== 'undefined') {
                cellOptions.rows[data.index_row].sortable = cellOptions.sortable;
            }
            if (typeof cellOptions.checkbox !== 'undefined') {
                cellOptions.rows[data.index_row].checkbox = cellOptions.checkbox;
            }
            if (typeof cellOptions.radio !== 'undefined') {
                cellOptions.rows[data.index_row].radio = cellOptions.radio;
            }
            if (typeof cellOptions.title !== 'undefined') {
                cellOptions.rows[data.index_row].title = cellOptions.title;
            }
            if (typeof cellOptions.field !== 'undefined') {
                cellOptions.rows[data.index_row].field = cellOptions.field;
            }
            if (typeof cellOptions.extend === 'undefined' || cellOptions.extend) {
                $.extend(cellOptions, cellOptions.rows[data.index_row]);
            } else {
                cellOptions = cellOptions.rows[data.index_row];
            }
        }
        if (typeof cellOptions.head !== 'undefined') {
            if (typeof cellOptions.head.extend === 'undefined' || cellOptions.head.extend) {
                $.extend(cellHeadOptions, cellOptions.head);
            } else {
                cellHeadOptions = cellOptions.head;
            }
        }
        delete cellOptions.head;

        if (typeof cellOptions.unsedDataColumn !== 'undefined') {
            cellHeadOptions.unsedDataColumn = cellOptions.unsedDataColumn;
        }
        if (typeof cellOptions.cardVisible !== 'undefined') {
            cellHeadOptions.cardVisible = cellOptions.cardVisible;
        }
        if (typeof cellOptions.switchable !== 'undefined') {
            cellHeadOptions.switchable = cellOptions.switchable;
        }
        if (typeof cellOptions.sortable !== 'undefined') {
            cellHeadOptions.sortable = cellOptions.sortable;
        }
        if (typeof cellOptions.checkbox !== 'undefined') {
            cellHeadOptions.checkbox = cellOptions.checkbox;
        }
        if (typeof cellOptions.radio !== 'undefined') {
            cellHeadOptions.radio = cellOptions.radio;
        }
        if (typeof cellOptions.title !== 'undefined') {
            cellHeadOptions.title = cellOptions.title;
        }
        if (typeof cellOptions.field !== 'undefined') {
            cellHeadOptions.field = cellOptions.field;
        }

        return {
            cellOptions: cellOptions,
            cellHeadOptions: cellHeadOptions
        }
    };

    BootstrapTable.prototype.initHeader = function() {
        var that = this,
            visibleColumns = {},
            elementsHead = [];

        $.each(this.eventsHeaderBodies, function(index_row, row) {
            $.each(row, function(index_column, event) {
                event.$body.off(event.types, event.selector);
            });
        });

        this.header = {
            fields: [],
            styles: [],
            classes: [],
            formatters: [],
            events: [],
            sorters: [],
            sortNames: [],
            searchables: []
        };

        $.each(this.options.columns, function(index_row_head, row) {
            var $elementHead = $(document.createElement('tr')),
                trsOptions = that.options.hasOwnProperty('trsOptions') ? that.options.trsOptions : {},
                trHeadOptions = $.extend(true, {}, trsOptions.head !== 'undefined' ? trsOptions.head : {});

            if (typeof trsOptions.rows !== 'undefined' && typeof trsOptions.rows[index_row_head] !== 'undefined' && typeof trsOptions.rows[index_row_head].head !== 'undefined') {
                if (typeof trsOptions.rows[index_row_head].head.extend === 'undefined' || trsOptions.rows[index_row_head].head.extend) {
                    $.extend(true, trHeadOptions, trsOptions.rows[index_row_head].head);
                } else {
                    trHeadOptions = $.extend(true, {}, trsOptions.rows[index_row_head].head);
                }
            }

            if (typeof trHeadOptions.css === 'undefined') {
                trHeadOptions.css = {};
            }
            if (typeof trHeadOptions.attrHTML === 'undefined') {
                trHeadOptions.attrHTML = {};
            }
            if (typeof trHeadOptions.propDOM === 'undefined') {
                trHeadOptions.propDOM = {};
            }
            if (typeof trHeadOptions.class === 'undefined') {
                trHeadOptions.class = '';
            }

            $elementHead
                .css(trHeadOptions.css)
                .attr(trHeadOptions.attrHTML)
                .prop(trHeadOptions.propDOM)
                .addClass(trHeadOptions.class);

            if (index_row_head === 0 && !that.options.cardView && that.options.detailView) {
                $elementHead
                    .append(
                        $(document.createElement('th'))
                        .addClass('detail')
                        .prop({
                            'rowspan': that.options.columns.length,
                            'width_auto': true
                        })
                        .append(
                            $(document.createElement('div'))
                            .addClass('fht-cell')
                        )
                    );
            }

            $.each(row, function(index_column, column) {
                var responsePrepareRowOptions = that.prepareRowOptions({
                        column: column,
                        index_row: index_row_head
                    }),
                    cellHeadOptions = responsePrepareRowOptions.cellHeadOptions,
                    cellOptions = responsePrepareRowOptions.cellOptions;


                if (typeof cellHeadOptions.css === 'undefined') {
                    cellHeadOptions.css = {};
                }
                if (typeof cellHeadOptions.attrHTML === 'undefined') {
                    cellHeadOptions.attrHTML = {};
                }
                if (typeof cellHeadOptions.propDOM === 'undefined') {
                    cellHeadOptions.propDOM = {};
                }
                if (typeof cellHeadOptions.class === 'undefined') {
                    cellHeadOptions.class = '';
                }

                var unitWidth = 'px',
                    width = cellHeadOptions.width;

                if (typeof cellHeadOptions.width !== 'undefined' && (!that.options.cardView)) {
                    if (typeof cellHeadOptions.width === 'string') {
                        if (cellHeadOptions.width.indexOf('%') !== -1) {
                            unitWidth = '%';
                        }
                    }
                }
                if (cellHeadOptions.width && typeof cellHeadOptions.width === 'string') {
                    width = parseFloat(cellHeadOptions.width);
                }

                if (typeof cellHeadOptions.rowspan !== 'undefined') {
                    if (typeof cellHeadOptions.propDOM.rowspan === 'undefined') {
                        cellHeadOptions.propDOM.rowspan = parseInt(cellHeadOptions.rowspan);
                    }
                }
                if (typeof cellHeadOptions.colspan !== 'undefined') {
                    if (typeof cellHeadOptions.propDOM.colspan === 'undefined') {
                        cellHeadOptions.propDOM.colspan = parseInt(cellHeadOptions.colspan);
                    }
                }

                if (cellHeadOptions.halign) {
                    cellHeadOptions.css['text-align'] = cellHeadOptions.halign;
                } else if (cellHeadOptions.align) {
                    cellHeadOptions.css['text-align'] = cellHeadOptions.align;
                }
                if (cellHeadOptions.valign) {
                    cellHeadOptions.css['vertical-align'] = cellHeadOptions.valign;
                }
                if (width) {
                    cellHeadOptions.css.width = width + unitWidth;
                }

                if (typeof cellHeadOptions.title !== 'undefined') {
                    cellHeadOptions.propDOM.title = cellHeadOptions.title;
                }
                if (typeof column.field !== 'undefined') {
                    cellHeadOptions.attrHTML['data-field'] = column.field;
                }

                if (cellHeadOptions.checkbox || cellHeadOptions.radio) {
                    cellHeadOptions.class += 'bs-checkbox ' + (cellHeadOptions['class'] ? cellHeadOptions['class'] : '');
                } else {
                    cellHeadOptions.class += cellHeadOptions['class'] ? cellHeadOptions['class'] : '';
                }

                if (typeof cellHeadOptions.css.width === 'undefined') {
                    cellHeadOptions.propDOM.width_auto = true;
                } else {
                    cellHeadOptions.propDOM.width_auto = false;
                }

                if (typeof cellOptions.fieldIndex !== 'undefined') {
                    that.header.fields.push(cellOptions.field);
                    that.header.formatters.push(cellOptions.formatter);
                    that.header.sorters.push(cellOptions.sorter);
                    that.header.sortNames.push(cellOptions.sortName);
                    that.header.searchables.push(cellOptions.searchable);

                    if (typeof cellHeadOptions.visible !== 'undefined' && !cellHeadOptions.visible) {
                        return;
                    }
                }

                visibleColumns[cellHeadOptions.field] = cellHeadOptions;

                var $elementHeadSub = $elementHead
                    .append(
                        $(document.createElement('th'))
                        .addClass(cellHeadOptions.class)
                        .attr(cellHeadOptions.attrHTML)
                        .prop(cellHeadOptions.propDOM)
                        .css(cellHeadOptions.css)
                    )
                    .children(':last-child')
                    .append(
                        $(document.createElement('div'))
                        .addClass('th-inner ' + (that.options.sortable && cellHeadOptions.sortable ? 'sortable both' : ''))
                    )
                    .children(':last-child')

                $elementHeadSub.html(that.options.escape ? escapeHTML(cellHeadOptions.title) : cellHeadOptions.title);

                if (cellHeadOptions.checkbox) {
                    if (!that.options.singleSelect && that.options.checkboxHeader) {
                        $elementHeadSub.html('<input name="btSelectAll" type="checkbox" />');
                    }
                    that.header.stateField = cellHeadOptions.field;
                }
                if (cellHeadOptions.radio) {
                    $elementHeadSub.html('');
                    that.header.stateField = cellHeadOptions.field;
                    that.options.singleSelect = true;
                }

                $elementHeadSub.parent().append('<div class="fht-cell"></div>');
                if (typeof cellHeadOptions.events !== 'undefined') {
                    var events = cellHeadOptions.events;

                    // fix bug, if events is defined with namespace
                    if (typeof events === 'string') {
                        events = calculateObjectValue(null, events);
                    }

                    $.each(events, function(index_events, event) {
                        var $bodyEvent = typeof event.find === 'undefined' ? $elementHeadSub.parent() : $elementHeadSub.parent().find(event.find);

                        switch (event.type_handler) {
                            case 'one':
                                $bodyEvent.one(event.types, event.selector, event.data, event.handler);
                                break;
                            default:
                                $bodyEvent.on(event.types, event.selector, event.data, event.handler);
                        }

                        if (typeof that.eventsHeaderBodies[index_row_head] === 'undefined') {
                            that.eventsHeaderBodies[index_row_head] = {};
                            that.eventsHeaderBodies[index_row_head][index_column] = {
                                $body: $bodyEvent,
                                selector: event.selector,
                                types: event.types
                            };
                        } else {
                            that.eventsHeaderBodies[index_row_head][index_column] = {
                                $body: $bodyEvent,
                                selector: event.selector,
                                types: event.types
                            };
                        }
                    });
                }
            });
            elementsHead.push($elementHead);
        });
        this.$header
            .html('')
            .append(elementsHead)
            .find('th[data-field]').each(function(i) {
                $(this).data(visibleColumns[$(this).data('field')]);
            });
        this.$container.off('click', '.th-inner').on('click', '.th-inner', function(event) {
            var target = $(this);

            if (that.options.detailView) {
                if (target.closest('.bootstrap-table')[0] !== that.$container[0])
                    return false;
            }

            if (that.options.sortable && target.parent().data().sortable) {
                that.onSort(event);
            }
        });

        this.$header.children().children().off('keypress').on('keypress', function(event) {
            if (that.options.sortable && $(this).data().sortable) {
                var code = event.keyCode || event.which;
                if (code == 13) { //Enter keycode
                    that.onSort(event);
                }
            }
        });

        $(window).off('resize.bootstrap-table');
        if (!this.options.showHeader || this.options.cardView) {
            this.$header.hide();
            this.$tableHeader.hide();
            this.$tableLoading.css('top', 0);

            this.getCaret();
            $(window).on('resize.bootstrap-table', $.proxy(this.resetWidth, this));
        } else {
            this.$header.show();
            this.$tableHeader.show();
            this.$tableLoading.css('top', this.$header.outerHeight() + 1);
            // Assign the correct sortable arrow
            this.getCaret();
            $(window).on('resize.bootstrap-table', $.proxy(this.resetWidth, this));
        }

        this.$selectAll = this.$header.find('[name="btSelectAll"]');
        this.$selectAll.off('click').on('click', function() {
            var checked = $(this).prop('checked');
            that[checked ? 'checkAll' : 'uncheckAll']();
            that.updateSelected();
        });
    };

    BootstrapTable.prototype.initFooter = function() {
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
    BootstrapTable.prototype.initData = function(data, type) {
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

    BootstrapTable.prototype.initSort = function() {
        var that = this,
            name = this.options.sortName,
            order = this.options.sortOrder === 'desc' ? -1 : 1,
            index = $.inArray(this.options.sortName, this.header.fields),
            timeoutId = 0;

        if (this.options.customSort !== $.noop) {
            this.options.customSort.apply(this, [this.options.sortName, this.options.sortOrder]);
            return;
        }

        if (index !== -1) {
            if (this.options.sortStable) {
                $.each(this.data, function(i, row) {
                    row._position = i;
                });
            }

            this.data.sort(function(a, b) {
                if (that.header.sortNames[index]) {
                    name = that.header.sortNames[index];
                }
                var aa = getItemField(a, name, that.options.escape),
                    bb = getItemField(b, name, that.options.escape),
                    value = calculateObjectValue(that.header, that.header.sorters[index], [aa, bb]);

                if (value !== undefined) {
                    if (that.options.sortStable && value === 0) {
                        return a._position - b._position;
                    }
                    return order * value;
                }

                // Fix #161: undefined or null string sort bug.
                if (aa === undefined || aa === null) {
                    aa = '';
                }
                if (bb === undefined || bb === null) {
                    bb = '';
                }

                if (that.options.sortStable && aa === bb) {
                    aa = a._position;
                    bb = b._position;
                    return a._position - b._position;
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

            if (this.options.sortClass !== undefined) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                    that.$el.removeClass(that.options.sortClass);
                    var index = that.$header.find(sprintf('[data-field="%s"]',
                        that.options.sortName).index() + 1);
                    that.$el.find(sprintf('tr td:nth-child(%s)', index))
                        .addClass(that.options.sortClass);
                }, 250);
            }
        }
    };

    BootstrapTable.prototype.onSort = function(event) {
        var $this = event.type === "keypress" ? $(event.currentTarget) : $(event.currentTarget).parent();

        if (this.options.sortName === $this.data('field')) {
            this.options.sortOrder = this.options.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            this.options.sortName = $this.data('field');
            if (this.options.rememberOrder) {
                this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc';
            }
        }
        this.trigger('sort', this.options.sortName, this.options.sortOrder);

        $this.data('order', this.options.sortOrder);

        // Assign the correct sortable arrow
        this.getCaret();

        if (this.options.sidePagination === 'server') {
            this.initServer(this.options.silentSort);
            return;
        }

        this.initSort();
        this.initBody();
    };

    BootstrapTable.prototype.initToolbar = function() {
        var that = this,
            html = [],
            timeoutId = 0,
            $keepOpen,
            $search,
            switchableCount = 0;

        if (this.$toolbar.find('.bs-bars').children().length) {
            $('body').append($(this.options.toolbar));
        }
        this.$toolbar.html('');

        if (typeof this.options.toolbar === 'string' || typeof this.options.toolbar === 'object') {
            $(sprintf('<div class="bs-bars pull-%s"></div>', this.options.toolbarAlign))
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
            html.push(sprintf('<button class="btn' +
                    sprintf(' btn-%s', this.options.buttonsClass) +
                    sprintf(' btn-%s', this.options.iconSize) +
                    '" type="button" name="paginationSwitch" aria-label="pagination Switch" title="%s">',
                    this.options.formatPaginationSwitch()),
                sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown),
                '</button>');
        }

        if (this.options.showRefresh) {
            html.push(sprintf('<button class="btn' +
                    sprintf(' btn-%s', this.options.buttonsClass) +
                    sprintf(' btn-%s', this.options.iconSize) +
                    '" type="button" name="refresh" aria-label="refresh" title="%s">',
                    this.options.formatRefresh()),
                sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.refresh),
                '</button>');
        }

        if (this.options.showToggle) {
            html.push(sprintf('<button class="btn' +
                    sprintf(' btn-%s', this.options.buttonsClass) +
                    sprintf(' btn-%s', this.options.iconSize) +
                    '" type="button" name="toggle" aria-label="toggle" title="%s">',
                    this.options.formatToggle()),
                sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggle),
                '</button>');
        }

        if (this.options.showColumns) {
            html.push(sprintf('<div class="keep-open btn-group" title="%s">',
                    this.options.formatColumns()),
                '<button type="button" aria-label="columns" class="btn' +
                sprintf(' btn-%s', this.options.buttonsClass) +
                sprintf(' btn-%s', this.options.iconSize) +
                ' dropdown-toggle" data-toggle="dropdown">',
                sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns),
                ' <span class="caret"></span>',
                '</button>',
                '<ul class="dropdown-menu" role="menu">');

            $.each(this.columns, function(i, column) {
                if (column.radio || column.checkbox) {
                    return;
                }

                if (that.options.cardView && !column.cardVisible) {
                    return;
                }

                var checked = column.visible ? ' checked="checked"' : '';

                if (column.switchable) {
                    html.push(sprintf('<li role="menuitem">' +
                        '<label><input type="checkbox" data-field="%s" value="%s"%s> %s</label>' +
                        '</li>', column.field, i, checked, column.title));
                    switchableCount++;
                }
            });
            html.push('</ul>',
                '</div>');
        }

        html.push('</div>');

        // Fix #188: this.showToolbar is for extensions
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
                .off('click').on('click', function() {
                    that.toggleView();
                });
        }

        if (this.options.showColumns) {
            $keepOpen = this.$toolbar.find('.keep-open');

            if (switchableCount <= this.options.minimumCountColumns) {
                $keepOpen.find('input').prop('disabled', true);
            }

            $keepOpen.find('li').off('click').on('click', function(event) {
                event.stopImmediatePropagation();
            });
            $keepOpen.find('input').off('click').on('click', function() {
                var $this = $(this);

                that.toggleColumn($(this).val(), $this.prop('checked'), false);
                that.trigger('column-switch', $(this).data('field'), $this.prop('checked'));
            });
        }

        if (this.options.search) {
            html = [];
            html.push(
                '<div class="pull-' + this.options.searchAlign + ' search">',
                sprintf('<input class="form-control' +
                    sprintf(' input-%s', this.options.iconSize) +
                    '" type="text" placeholder="%s">',
                    this.options.formatSearch()),
                '</div>');

            this.$toolbar.append(html.join(''));
            $search = this.$toolbar.find('.search input');
            $search.off('keyup drop blur').on('keyup drop blur', function(event) {
                if (that.options.searchOnEnterKey && event.keyCode !== 13) {
                    return;
                }

                if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
                    return;
                }

                clearTimeout(timeoutId); // doesn't matter if it's 0
                timeoutId = setTimeout(function() {
                    that.onSearch(event);
                }, that.options.searchTimeOut);
            });

            if (isIEBrowser()) {
                $search.off('mouseup').on('mouseup', function(event) {
                    clearTimeout(timeoutId); // doesn't matter if it's 0
                    timeoutId = setTimeout(function() {
                        that.onSearch(event);
                    }, that.options.searchTimeOut);
                });
            }
        }
    };

    BootstrapTable.prototype.onSearch = function(event) {
        var text = $.trim($(event.currentTarget).val());

        // trim search input
        if (this.options.trimOnSearch && $(event.currentTarget).val() !== text) {
            $(event.currentTarget).val(text);
        }

        if (text === this.searchText) {
            return;
        }
        this.searchText = text;
        this.options.searchText = text;

        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination();
        this.trigger('search', text);
    };

    BootstrapTable.prototype.initSearch = function() {
        var that = this;

        if (this.options.sidePagination !== 'server') {
            if (this.options.customSearch !== $.noop) {
                window[this.options.customSearch].apply(this, [this.searchText]);
                return;
            }

            var s = this.searchText && (this.options.escape ?
                escapeHTML(this.searchText) : this.searchText).toLowerCase();
            var f = $.isEmptyObject(this.filterColumns) ? null : this.filterColumns;

            // Check filter
            this.data = f ? $.grep(this.options.data, function(item, i) {
                for (var key in f) {
                    if ($.isArray(f[key]) && $.inArray(item[key], f[key]) === -1 ||
                        !$.isArray(f[key]) && item[key] !== f[key]) {
                        return false;
                    }
                }
                return true;
            }) : this.options.data;

            this.data = s ? $.grep(this.data, function(item, i) {
                for (var j = 0; j < that.header.fields.length; j++) {

                    if (!that.header.searchables[j]) {
                        continue;
                    }

                    var key = $.isNumeric(that.header.fields[j]) ? parseInt(that.header.fields[j], 10) : that.header.fields[j];
                    var column = that.columns[that.fieldsColumnsIndex[key]];
                    var value;

                    if (typeof key === 'string') {
                        value = item;
                        var props = key.split('.');
                        for (var prop_index = 0; prop_index < props.length; prop_index++) {
                            value = value[props[prop_index]];
                        }

                        // Fix #142: respect searchForamtter boolean
                        if (column && column.searchFormatter) {
                            value = calculateObjectValue(column,
                                that.header.formatters[j], [value, item, i], value);
                        }
                    } else {
                        value = item[key];
                    }

                    if (typeof value === 'string' || typeof value === 'number') {
                        if (that.options.strictSearch) {
                            if ((value + '').toLowerCase() === s) {
                                return true;
                            }
                        } else {
                            if ((value + '').toLowerCase().indexOf(s) !== -1) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            }) : this.data;
        }
    };

    BootstrapTable.prototype.initPagination = function() {
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
            data = this.getData(),
            pageList = this.options.pageList;

        if (this.options.sidePagination !== 'server') {
            this.options.totalRows = data.length;
        }

        this.totalPages = 0;
        if (this.options.totalRows) {
            if (this.options.pageSize === this.options.formatAllRows()) {
                this.options.pageSize = this.options.totalRows;
                $allSelected = true;
            } else if (this.options.pageSize === this.options.totalRows) {
                // Fix #667 Table with pagination,
                // multiple pages and a search that matches to one page throws exception
                var pageLst = typeof this.options.pageList === 'string' ?
                    this.options.pageList.replace('[', '').replace(']', '')
                    .replace(/ /g, '').toLowerCase().split(',') : this.options.pageList;
                if ($.inArray(this.options.formatAllRows().toLowerCase(), pageLst) > -1) {
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
            this.options.onlyInfoPagination ? this.options.formatDetailPagination(this.options.totalRows) :
            this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows),
            '</span>');

        if (!this.options.onlyInfoPagination) {
            html.push('<span class="page-list">');

            var pageNumber = [
                sprintf('<span class="btn-group %s">',
                    this.options.paginationVAlign === 'top' || this.options.paginationVAlign === 'both' ?
                    'dropdown' : 'dropup'),
                '<button type="button" class="btn' +
                sprintf(' btn-%s', this.options.buttonsClass) +
                sprintf(' btn-%s', this.options.iconSize) +
                ' dropdown-toggle" data-toggle="dropdown">',
                '<span class="page-size">',
                $allSelected ? this.options.formatAllRows() : this.options.pageSize,
                '</span>',
                ' <span class="caret"></span>',
                '</button>',
                '<ul class="dropdown-menu" role="menu">'
            ];

            if (typeof this.options.pageList === 'string') {
                var list = this.options.pageList.replace('[', '').replace(']', '')
                    .replace(/ /g, '').split(',');

                pageList = [];
                $.each(list, function(i, value) {
                    pageList.push(value.toUpperCase() === that.options.formatAllRows().toUpperCase() ?
                        that.options.formatAllRows() : +value);
                });
            }

            $.each(pageList, function(i, page) {
                if (!that.options.smartDisplay || i === 0 || pageList[i - 1] < that.options.totalRows) {
                    var active;
                    if ($allSelected) {
                        active = page === that.options.formatAllRows() ? ' class="active"' : '';
                    } else {
                        active = page === that.options.pageSize ? ' class="active"' : '';
                    }
                    pageNumber.push(sprintf('<li role="menuitem"%s><a href="#">%s</a></li>', active, page));
                }
            });
            pageNumber.push('</ul></span>');

            html.push(this.options.formatRecordsPerPage(pageNumber.join('')));
            html.push('</span>');

            html.push('</div>',
                '<div class="pull-' + this.options.paginationHAlign + ' pagination">',
                '<ul class="pagination' + sprintf(' pagination-%s', this.options.iconSize) + '">',
                '<li class="page-pre"><a href="#">' + this.options.paginationPreText + '</a></li>');

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

            if (this.totalPages >= 6) {
                if (this.options.pageNumber >= 3) {
                    html.push('<li class="page-first' + (1 === this.options.pageNumber ? ' active' : '') + '">',
                        '<a href="#">', 1, '</a>',
                        '</li>');

                    from++;
                }

                if (this.options.pageNumber >= 4) {
                    if (this.options.pageNumber == 4 || this.totalPages == 6 || this.totalPages == 7) {
                        from--;
                    } else {
                        html.push('<li class="page-first-separator disabled">',
                            '<a href="#">...</a>',
                            '</li>');
                    }

                    to--;
                }
            }

            if (this.totalPages >= 7) {
                if (this.options.pageNumber >= (this.totalPages - 2)) {
                    from--;
                }
            }

            if (this.totalPages == 6) {
                if (this.options.pageNumber >= (this.totalPages - 2)) {
                    to++;
                }
            } else if (this.totalPages >= 7) {
                if (this.totalPages == 7 || this.options.pageNumber >= (this.totalPages - 3)) {
                    to++;
                }
            }

            for (i = from; i <= to; i++) {
                html.push('<li class="page-number' + (i === this.options.pageNumber ? ' active' : '') + '">',
                    '<a href="#">', i, '</a>',
                    '</li>');
            }

            if (this.totalPages >= 8) {
                if (this.options.pageNumber <= (this.totalPages - 4)) {
                    html.push('<li class="page-last-separator disabled">',
                        '<a href="#">...</a>',
                        '</li>');
                }
            }

            if (this.totalPages >= 6) {
                if (this.options.pageNumber <= (this.totalPages - 3)) {
                    html.push('<li class="page-last' + (this.totalPages === this.options.pageNumber ? ' active' : '') + '">',
                        '<a href="#">', this.totalPages, '</a>',
                        '</li>');
                }
            }

            html.push(
                '<li class="page-next"><a href="#">' + this.options.paginationNextText + '</a></li>',
                '</ul>',
                '</div>');
        }
        this.$pagination.html(html.join(''));

        if (!this.options.onlyInfoPagination) {
            $pageList = this.$pagination.find('.page-list a');
            $first = this.$pagination.find('.page-first');
            $pre = this.$pagination.find('.page-pre');
            $next = this.$pagination.find('.page-next');
            $last = this.$pagination.find('.page-last');
            $number = this.$pagination.find('.page-number');

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

            if (!this.options.paginationLoop) {
                if (this.options.pageNumber === 1) {
                    $pre.addClass('disabled');
                }
                if (this.options.pageNumber === this.totalPages) {
                    $next.addClass('disabled');
                }
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
        }
    };

    BootstrapTable.prototype.updatePagination = function(event) {
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

    BootstrapTable.prototype.onPageListChange = function(event) {
        var $this = $(event.currentTarget);

        $this.parent().addClass('active').siblings().removeClass('active');
        this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ?
            this.options.formatAllRows() : +$this.text();
        this.$toolbar.find('.page-size').text(this.options.pageSize);

        this.updatePagination(event);
        return false;
    };

    BootstrapTable.prototype.onPageFirst = function(event) {
        this.options.pageNumber = 1;
        this.updatePagination(event);
        return false;
    };

    BootstrapTable.prototype.onPagePre = function(event) {
        if ((this.options.pageNumber - 1) === 0) {
            this.options.pageNumber = this.options.totalPages;
        } else {
            this.options.pageNumber--;
        }
        this.updatePagination(event);
        return false;
    };

    BootstrapTable.prototype.onPageNext = function(event) {
        if ((this.options.pageNumber + 1) > this.options.totalPages) {
            this.options.pageNumber = 1;
        } else {
            this.options.pageNumber++;
        }
        this.updatePagination(event);
        return false;
    };

    BootstrapTable.prototype.onPageLast = function(event) {
        this.options.pageNumber = this.totalPages;
        this.updatePagination(event);
        return false;
    };

    BootstrapTable.prototype.onPageNumber = function(event) {
        if (this.options.pageNumber === +$(event.currentTarget).text()) {
            return;
        }
        this.options.pageNumber = +$(event.currentTarget).text();
        this.updatePagination(event);
        return false;
    };

    BootstrapTable.prototype.initRow = function(item, i, data, parentDom, specialPropDOM) {
        var that = this,
            $elementRow = $(document.createElement('tr'));

        if ($.inArray(item, this.hiddenRows) > -1) {
            return;
        }

        var trsOptions = that.options.hasOwnProperty('trsOptions') ? that.options.trsOptions : {},
            trOptions = $.extend(true, {}, trsOptions.head !== 'undefined' ? trsOptions.head : {});

        if (typeof trsOptions.rows !== 'undefined' && typeof trsOptions.rows[index_row_head] !== 'undefined' && typeof trsOptions.rows[index_row_head].head !== 'undefined') {
            if (typeof trsOptions.rows[index_row_head].head.extend === 'undefined' || trsOptions.rows[index_row_head].head.extend) {
                $.extend(true, trOptions, trsOptions.rows[index_row_head].head);
            } else {
                trOptions = $.extend(true, {}, trsOptions.rows[index_row_head].head);
            }
        }

        if (typeof trOptions.css === 'undefined') {
            trOptions.css = {};
        }
        if (typeof trOptions.attrHTML === 'undefined') {
            trOptions.attrHTML = {};
        }
        if (typeof trOptions.propDOM === 'undefined') {
            trOptions.propDOM = {};
        }
        if (typeof trOptions.class === 'undefined') {
            trOptions.class = '';
        }

        if (item._data && !$.isEmptyObject(item._data)) {
            $.each(item._data, function(k, v) {
                // ignore data-index
                if (k === 'index') {
                    return;
                }
                trOptions.propDOM['data-' + k] = v;
            });
        }
        if (!$.isArray(item) && item.hasOwnProperty('_id')) {
            trOptions.propDOM['id'] = item._id;
        }

        trOptions.propDOM['data-index'] = i;
        if (item[this.options.uniqueId]) {
            trOptions.propDOM['data-uniqueid'] = item[this.options.uniqueId];
            if (this.options.hasOwnProperty('attrUniqueId') && this.options.attrUniqueId) {
                trOptions.attrHTML['data-uniqueid'] = item[this.options.uniqueId];
            }
        }

        $elementRow
            .attr(trOptions.attrHTML)
            .prop(trOptions.propDOM)
            .addClass(trOptions.class)
            .css(trOptions.css);

        var $elementRowSub = null;

        if (this.options.cardView) {
            $elementRow.append(
                $(document.createElement('td'))
                .prop('colspan', this.header.fields.length)
            );
            $elementRowSub = $elementRow
                .children(':last-child')
                .append(
                    $(document.createElement('div'))
                    .addClass('card-views')
                )
                .children(':last-child');
        } else {
            $elementRowSub = $elementRow;
        }

        if (!this.options.cardView && this.options.detailView) {
            $elementRowSub.append(
                $(document.createElement('td'))
                .append(
                    $(document.createElement('a'))
                    .addClass('detail-icon')
                    .prop('href', '#')
                    .append(
                        $(document.createElement('i'))
                        .addClass((this.options.iconsPrefix + ' ' + this.options.icons.detailOpen))
                    )
                )
            )
        }

        var specialPropDOMCol = {
            colspan: {
                count: 1
            },
            rowspan: {
                count: 1
            }
        };

        $.each(this.header.fields, function(j, field) {
            if (!that.columns[j].hasOwnProperty('unsedDataColumn') && !that.columns[j].unsedDataColumn) {
                var $elementColumn = null,
                    value_ = getItemField(item, field, that.options.escape),
                    value = '',
                    type = '',
                    column = that.columns[j],
                    cellOptions = that.prepareRowOptions({
                        column: column,
                        index_row: i
                    }).cellOptions;

                if (typeof cellOptions.css === 'undefined') {
                    cellOptions.css = {};
                }
                if (typeof cellOptions.attrHTML === 'undefined') {
                    cellOptions.attrHTML = {};
                }
                if (typeof cellOptions.propDOM === 'undefined') {
                    cellOptions.propDOM = {};
                }
                if (typeof cellOptions.class === 'undefined') {
                    cellOptions.class = '';
                }

                if (that.fromHtml && typeof value_ === 'undefined') {
                    return;
                }

                if (!cellOptions.visible) {
                    return;
                }

                if (that.options.cardView && (!cellOptions.cardVisible)) {
                    return;
                }

                if (cellOptions.escape) {
                    value_ = escapeHTML(value_);
                }

                var displayNotUsed = true;

                if (specialPropDOM.rowspan.length !== 0) {
                    $.each(specialPropDOM.rowspan, function(index_rowspan, rowspan) {
                        if (rowspan.colIndex === j) {
                            displayNotUsed = false;
                            cellOptions.css.display = 'none';
                            specialPropDOM.rowspan[index_rowspan].count--;
                            if (specialPropDOM.rowspan[index_rowspan].count === 1) {
                                specialPropDOM.rowspan.splice(index_rowspan, 1);
                            } else {
                                specialPropDOM.rowspan[index_rowspan] = rowspan;
                            }

                            return false;
                        }
                    });
                }

                if (displayNotUsed) {
                    if (typeof cellOptions.rowspan !== 'undefined' && cellOptions.rowspan > 1) {
                        cellOptions.propDOM.rowspan = parseInt(cellOptions.rowspan);
                        specialPropDOM.rowspan.push({
                            count: parseInt(cellOptions.propDOM.rowspan),
                            colIndex: j
                        });
                    }

                    if (typeof cellOptions.colspan === 'undefined') {
                        if (specialPropDOMCol.colspan.count !== 1) {
                            specialPropDOMCol.colspan.count--;
                            cellOptions.css.display = 'none';
                        }
                    } else {
                        if (specialPropDOMCol.colspan.count === 1) {
                            cellOptions.propDOM.colspan = parseInt(cellOptions.colspan);
                            specialPropDOMCol.colspan.count = cellOptions.propDOM.colspan;
                        } else {
                            specialPropDOMCol.colspan.count--;
                            cellOptions.css.display = 'none';
                        }
                    }
                }

                if (item['_' + field + '_id']) {
                    cellOptions.propDOM.id = item['_' + field + '_id'];
                }
                if (item['_' + field + '_class']) {
                    cellOptions.class = item['_' + field + '_class'];
                }
                if (item['_' + field + '_rowspan']) {
                    cellOptions.propDOM.rowspan = parseInt(item['_' + field + '_rowspan']);
                }
                if (cellOptions.propDOM.rowspan === 1) {
                    delete cellOptions.propDOM.rowspan;
                }
                if (item['_' + field + '_colspan']) {
                    cellOptions.propDOM.colspan = parseInt(item['_' + field + '_colspan']);
                }
                if (cellOptions.propDOM.colspan === 1) {
                    delete cellOptions.propDOM.colspan;
                }
                value = calculateObjectValue(cellOptions,
                    that.header.formatters[j], [value_, item, i, field], value_);

                if (item['_' + field + '_title']) {
                    cellOptions.propDOM.title = item['_' + field + '_title'];
                }

                value = calculateObjectValue(cellOptions,
                    that.header.formatters[j], [value_, item, i], value_);

                if (item['_' + field + '_data'] && !$.isEmptyObject(item['_' + field + '_data'])) {
                    $.each(item['_' + field + '_data'], function(k, v) {
                        // ignore data-index
                        if (k === 'index') {
                            return;
                        }
                        cellOptions.propDOM['data-' + k] = v;
                    });
                }

                if (cellOptions.checkbox || cellOptions.radio) {
                    type = cellOptions.checkbox ? 'checkbox' : type;
                    type = cellOptions.radio ? 'radio' : type;

                    if (that.options.cardView) {
                        $elementColumn = $(document.createElement('div'))
                            .addClass("card-view " + cellOptions.class);
                    } else {
                        $elementColumn = $(document.createElement('td'))
                            .addClass("bs-checkbox " + cellOptions.class)
                            .attr(cellOptions.attrHTML)
                            .prop(cellOptions.propDOM)
                            .css(cellOptions.css);
                    }

                    var inputAttr = {
                        'data-index': i,
                        'name': that.options.selectItemName,
                        'type': type,
                        'value': item[that.options.idField]
                    }

                    if (value === true || (value_ || value && value.checked)) {
                        inputAttr['checked'] = 'checked';
                    }
                    if (!cellOptions.checkboxEnabled || (value && value.disabled)) {
                        inputAttr['disabled'] = 'disabled';
                    }

                    $elementColumn
                        .append(
                            $(document.createElement('input'))
                            .prop(inputAttr)
                        );
                    if (that.header.formatters[j] && typeof value === 'string') {
                        $elementColumn.prop({
                            [value.match(/([^\=]*)\=(.*)/)[1]]: value.match(/([^\=]*)\=(.*)/)[2]
                        });
                    }

                    item[that.header.stateField] = value === true || (value && value.checked);
                } else {
                    value = typeof value === 'undefined' || value === null ?
                        that.options.undefinedText : value;

                    if (that.options.cardView) {
                        $elementColumn = $(document.createElement('div'))
                            .addClass("card-view");

                        var $span = $(document.createElement('span'));

                        $span
                            .addClass('title')
                            .css(cellOptions.css)
                            .append(getPropertyFromOther(that.columns, 'field', 'title', field));
                        $elementColumn.append($span);

                        $span = $(document.createElement('span'))
                            .addClass('value')
                            .append(value);
                    } else {
                        $elementColumn = $(document.createElement('td'))
                            .addClass(cellOptions.class)
                            .attr(cellOptions.attrHTML)
                            .prop(cellOptions.propDOM)
                            .css(cellOptions.css)
                            .append(value);
                    }

                    // Hide empty data on Card view when smartDisplay is set to true.
                    if (that.options.cardView && that.options.smartDisplay && value === '') {
                        // Should set a placeholder for event binding correct fieldIndex
                        $elementColumn = $(document.createElement('div'))
                            .addClass('card-view');
                    }
                }

                if (typeof cellOptions.events !== 'undefined') {
                    var events = cellOptions.events;

                    // fix bug, if events is defined with namespace
                    if (typeof events === 'string') {
                        events = calculateObjectValue(null, events);
                    }

                    $.each(events, function(index_events, event) {
                        var $bodyEvent = typeof event.find === 'undefined' ? $elementColumn : $elementColumn.find(event.find);

                        switch (event.type_handler) {
                            case 'one':
                                $bodyEvent.one(event.types, event.selector, event.data, event.handler);
                                break;
                            default:
                                $bodyEvent.on(event.types, event.selector, event.data, event.handler);
                        }

                        if (typeof that.eventsBodies[i] === 'undefined') {
                            that.eventsBodies[i] = {};
                            that.eventsBodies[i][j] = {
                                $body: $bodyEvent,
                                selector: event.selector,
                                types: event.types
                            };
                        } else {
                            that.eventsBodies[i][j] = {
                                $body: $bodyEvent,
                                selector: event.selector,
                                types: event.types
                            };
                        }
                    });
                }

                $elementRowSub.append($elementColumn);
            }
        });

        $elementRow.append($elementRowSub);

        return [$elementRow[0], specialPropDOM];
    };

    BootstrapTable.prototype.initBody = function(fixedScroll) {
        var that = this,
            data = this.getData();

        this.trigger('pre-body', data);

        this.$body = this.$el.find('>tbody');
        if (!this.$body.length) {
            this.$body = $('<tbody></tbody>').appendTo(this.$el);
        }

        //Fix #389 Bootstrap-table-flatJSON is not working

        if (!this.options.pagination || this.options.sidePagination === 'server') {
            this.pageFrom = 1;
            this.pageTo = data.length;
        }

        var trFragments = $(document.createDocumentFragment()),
            hasTr,
            specialPropDOM = {
                rowspan: []
            };

        $.each(this.eventsBodies, function(index_row, row) {
            $.each(row, function(index_column, event) {
                event.$body.off(event.types, event.selector);
            });
        });
        for (var i = this.pageFrom - 1; i < this.pageTo; i++) {
            var item = data[i],
                responseInitRow = this.initRow(item, i, data, trFragments, specialPropDOM),
                tr = responseInitRow[0];

            specialPropDOM = responseInitRow[1];
            hasTr = hasTr || !!tr;
            if (tr && tr !== true) {
                trFragments.append(tr);
            }
        }

        // show no records
        if (!hasTr) {
            trFragments.append('<tr class="no-records-found">' +
                sprintf('<td colspan="%s">%s</td>',
                    this.$header.find('th').length,
                    this.options.formatNoMatches()) +
                '</tr>');
        }

        this.$body.html('').append(trFragments);

        if (!fixedScroll) {
            this.scrollTo(0);
        }

        // click to select by column
        this.$body.find('> tr > td').off('click dblclick').on('click dblclick', function(e) {
            var $td = $(this),
                $tr = $td.parent();

            if (typeof $tr.prop('data-index') !== 'undefined') {
                var item = that.data[$tr.prop('data-index')],
                    index = $td[0].cellIndex,
                    fields = that.getVisibleFields(),
                    field = fields[that.options.detailView && !that.options.cardView ? index - 1 : index],
                    column = that.columns[getFieldIndex(that.columns, field)],
                    value = getItemField(item, field, that.options.escape);

                if ($td.find('.detail-icon').length) {
                    return;
                }

                that.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td);
                that.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field);

                // if click to select - then trigger the checkbox/radio click
                if (e.type === 'click' && that.options.clickToSelect && column.clickToSelect) {
                    var $selectItem = $tr.find(sprintf('[name="%s"]', that.options.selectItemName));
                    if ($selectItem.length) {
                        $selectItem[0].click(); // #144: .trigger('click') bug
                    }
                }
            }
        });

        this.$body.find('> tr > td > .detail-icon').off('click').on('click', function() {
            var $this = $(this),
                $tr = $this.parent().parent();

            if (typeof $tr.prop('data-index') !== 'undefined') {
                var index = $tr.prop('data-index'),
                    row = data[index]; // Fix #980 Detail view, when searching, returns wrong row

                // remove and update
                if ($tr.next().is('tr.detail-view')) {
                    $this.find('i').prop('class', sprintf('%s %s', that.options.iconsPrefix, that.options.icons.detailOpen));
                    that.trigger('collapse-row', index, row);
                    $tr.next().remove();
                } else {
                    $this.find('i').prop('class', sprintf('%s %s', that.options.iconsPrefix, that.options.icons.detailClose));
                    $tr.after(sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.find('td').length));
                    var $element = $tr.next().find('td');
                    var content = calculateObjectValue(that.options, that.options.detailFormatter, [index, row, $element], '');
                    if ($element.length === 1) {
                        $element.append(content);
                    }
                    that.trigger('expand-row', index, row, $element);
                }
                that.resetView();
            }
            return false;
        });

        this.$selectItem = this.$body.find(sprintf('[name="%s"]', this.options.selectItemName));
        this.$selectItem.off('click').on('click', function(event) {
            event.stopImmediatePropagation();

            var $this = $(this),
                checked = $this.prop('checked'),
                row = that.data[$this.data('index')];

            if (that.options.maintainSelected && $(this).is(':radio')) {
                $.each(that.options.data, function(i, row) {
                    row[that.header.stateField] = false;
                });
            }

            row[that.header.stateField] = checked;

            if (that.options.singleSelect) {
                that.$selectItem.not(that).each(function() {
                    that.data[$(that).data('index')][that.header.stateField] = false;
                });
                that.$selectItem.filter(':checked').not(that).prop('checked', false);
            }
            $.each(that.eventsTable, function(index_eventsTable, event) {
                event.$body.off(event.types, event.selector);
            });

            that.updateSelected();
            that.trigger(checked ? 'check' : 'uncheck', row, $this);
        });

        var options = that.getOptions();

        if (typeof options.events !== 'undefined') {
            var events = options.events;

            // fix bug, if events is defined with namespace
            if (typeof events === 'string') {
                events = calculateObjectValue(null, events);
            }

            $.each(events, function(index_events, event) {
                var $bodyEvent = typeof event.find === 'undefined' ? that.$el : that.$el.find(event.find);

                switch (event.type_handler) {
                    case 'one':
                        $bodyEvent.one(event.types, event.selector, event.data, event.handler);
                        break;
                    default:
                        $bodyEvent.on(event.types, event.selector, event.data, event.handler);
                }

                that.eventsTable.push({
                    $body: $bodyEvent,
                    selector: event.selector,
                    types: event.types
                });
            });
        }

        this.updateSelected();
        this.resetView();

        this.trigger('post-body', data);
    };

    BootstrapTable.prototype.initServer = function(silent, query, url) {
        var that = this,
            data = {},
            params = {
                searchText: this.searchText,
                sortName: this.options.sortName,
                sortOrder: this.options.sortOrder
            },
            request;

        if (this.options.pagination) {
            params.pageSize = this.options.pageSize === this.options.formatAllRows() ?
                this.options.totalRows : this.options.pageSize;
            params.pageNumber = this.options.pageNumber;
        }

        if (!(url || this.options.url) && !this.options.ajax) {
            return;
        }

        if (this.options.queryParamsType === 'limit') {
            params = {
                search: params.searchText,
                sort: params.sortName,
                order: params.sortOrder
            };

            if (this.options.pagination) {
                params.offset = this.options.pageSize === this.options.formatAllRows() ?
                    0 : this.options.pageSize * (this.options.pageNumber - 1);
                params.limit = this.options.pageSize === this.options.formatAllRows() ?
                    this.options.totalRows : this.options.pageSize;
            }
        }

        if (!($.isEmptyObject(this.filterColumnsPartial))) {
            params.filter = JSON.stringify(this.filterColumnsPartial, null);
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
            url: url || this.options.url,
            data: this.options.contentType === 'application/json' && this.options.method === 'post' ?
                JSON.stringify(data) : data,
            cache: this.options.cache,
            contentType: this.options.contentType,
            dataType: this.options.dataType,
            success: function(res) {
                res = calculateObjectValue(that.options, that.options.responseHandler, [res], res);

                that.load(res);
                that.trigger('load-success', res);
                if (!silent) that.$tableLoading.hide();
            },
            error: function(res) {
                that.trigger('load-error', res.status, res);
                if (!silent) that.$tableLoading.hide();
            }
        });

        if (this.options.ajax) {
            calculateObjectValue(this, this.options.ajax, [request], null);
        } else {
            if (this._xhr && this._xhr.readyState !== 4) {
                this._xhr.abort();
            }
            this._xhr = $.ajax(request);
        }
    };

    BootstrapTable.prototype.initSearchText = function() {
        if (this.options.search) {
            if (this.options.searchText !== '') {
                var $search = this.$toolbar.find('.search input');
                $search.val(this.options.searchText);
                this.onSearch({
                    currentTarget: $search
                });
            }
        }
    };

    BootstrapTable.prototype.getCaret = function() {
        var that = this;

        $.each(this.$tableHeader.find('th'), function(i, th) {
            $(th).find('.sortable').removeClass('desc asc').addClass($(th).data('field') === that.options.sortName ? that.options.sortOrder : 'both');
        });
    };

    BootstrapTable.prototype.updateSelected = function() {
        var checkAll = this.$selectItem.filter(':enabled').length &&
            this.$selectItem.filter(':enabled').length ===
            this.$selectItem.filter(':enabled').filter(':checked').length;

        this.$selectAll.add(this.$selectAll_).prop('checked', checkAll);

        this.$selectItem.each(function() {
            $(this).closest('tr')[$(this).prop('checked') ? 'addClass' : 'removeClass']('selected');
        });
    };

    BootstrapTable.prototype.updateRows = function() {
        var that = this;

        this.$selectItem.each(function() {
            that.data[$(this).data('index')][that.header.stateField] = $(this).prop('checked');
        });
    };

    BootstrapTable.prototype.resetRows = function() {
        var that = this;

        $.each(this.data, function(i, row) {
            that.$selectAll.prop('checked', false);
            that.$selectItem.prop('checked', false);
            if (that.header.stateField) {
                row[that.header.stateField] = false;
            }
        });
        this.initHiddenRows();
    };

    BootstrapTable.prototype.trigger = function(name) {
        var args = Array.prototype.slice.call(arguments, 1);

        name += '.bs.table';
        this.options[BootstrapTable.EVENTS[name]].apply(this.options, args);
        this.$el.trigger($.Event(name), args);

        this.options.onAll(name, args);
        this.$el.trigger($.Event('all.bs.table'), [name, args]);
    };

    BootstrapTable.prototype.resetHeader = function() {
        // fix #61: the hidden table reset header bug.
        // fix bug: get $el.css('width') error sometime (height = 500)
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout($.proxy(this.fitHeader, this), this.$el.is(':hidden') ? 100 : 0);
    };

    BootstrapTable.prototype.fitHeader = function() {
        var that = this,
            fixedBody,
            scrollWidth,
            focused,
            focusedTemp;

        if (that.$el.is(':hidden')) {
            that.timeoutId_ = setTimeout($.proxy(that.fitHeader, that), 100);
            return;
        }
        fixedBody = this.$tableBody.get(0);

        scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth &&
            fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ?
            getScrollBarWidth() : 0;

        focused = $(':focus');
        if (focused.length > 0) {
            var $th = focused.parents('th');
            if ($th.length > 0) {
                var dataField = $th.attr('data-field');
                if (dataField !== undefined) {
                    var $headerTh = this.$header.find("[data-field='" + dataField + "']");
                    if ($headerTh.length > 0) {
                        $headerTh.find(":input").addClass("focus-temp");
                    }
                }
            }
        }

        var $trBody = that.$tableBody.find('table>tbody>tr:not(:has([colspan])):first');

        if (!$trBody.hasClass('no-records-found')) {
            var $tdsTrFirstBody = $trBody.find('td'),
                rowspans = [];

            $.each(that.$header.find('tr'), function(index_tr, tr) {
                var thsTrHeader_ = $(tr).find('th'),
                    rowspansTmp = [];

                $.each(rowspans, function(index_rowspans, rowspan) {
                    if (rowspan > 1) {
                        rowspans[index_rowspans]--;
                    }
                    if (rowspans[index_rowspans] !== 1) {
                        rowspansTmp.push(rowspans[index_rowspans]);
                    }
                });
                $.each(thsTrHeader_, function(index_th, th) {
                    if (that.$header.find('tr:nth-child(' + (index_tr + 1) + ')>th:nth-child(' + (index_th + 1) + ')').prop('width_auto')) {
                        var outerWidth = 0,
                            index_start = index_th;

                        $.each(rowspans, function(index_rowspans, rowspan) {
                            if (rowspan > 1) {
                                index_start++;
                            }
                        });
                        $.each($tdsTrFirstBody, function(index_td, td) {
                            if (index_td >= index_start && index_td < (index_start + $(th).prop('colspan'))) {
                                outerWidth += $(td).outerWidth();
                            } else if (index_td >= (index_start + $(th).prop('colspan'))) {
                                return false;
                            }
                        });
                        if ($(th).prop('rowspan') > 1) {
                            rowspansTmp.push($(th).prop('rowspan') + 1);
                        }
                        if (index_start + $(th).prop('colspan') === $tdsTrFirstBody.length) {
                            outerWidth += that.$tableBody.outerWidth() - that.$el.outerWidth();
                        }
                        outerWidth -= ($(th).outerWidth() - $(th).innerWidth());
                        $(th)
                            .outerWidth(outerWidth)
                            .find('>div').outerWidth(outerWidth);
                    }
                });
                rowspans = rowspansTmp.slice();
            });
        }
        this.$selectAll_ = this.$header.find('[name="btSelectAll"]');
        this.$tableHeader.css({
                'margin-right': scrollWidth
            }).find('table')
            .prop('class', this.$el.prop('class'));

        focusedTemp = $('.focus-temp:visible:eq(0)');
        if (focusedTemp.length > 0) {
            focusedTemp.focus();
            this.$header.find('.focus-temp').removeClass('focus-temp');
        }

        var visibleFields = this.getVisibleFields(),
            $ths = this.$header.find('th');

        this.$body.find('>tr:first-child:not(.no-records-found) > *').each(function(i) {
            var $this = $(this),
                index = i;

            if (that.options.detailView && !that.options.cardView) {
                if (i === 0) {
                    that.$header.find('th.detail').find('.fht-cell').width($this.innerWidth());
                }
                index = i - 1;
            }

            var $th = that.$header.find(sprintf('th[data-field="%s"]', visibleFields[index]));
            if ($th.length > 1) {
                $th = $($ths[$this[0].cellIndex]);
            }

            $th.find('.fht-cell').width($this.innerWidth());
        });

        this.horizontalScroll();
        this.trigger('post-header');
    };

    BootstrapTable.prototype.resetFooter = function() {
        var that = this,
            data = that.getData(),
            html = [];

        if (!this.options.showFooter || this.options.cardView) { //do nothing
            return;
        }

        if (!this.options.cardView && this.options.detailView) {
            html.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>');
        }

        $.each(this.columns, function(i, column) {
            var key,
                falign = '', // footer align style
                valign = '',
                csses = [],
                style = {},
                class_ = sprintf(' class="%s"', column['class']);

            if (!column.visible) {
                return;
            }

            if (that.options.cardView && (!column.cardVisible)) {
                return;
            }

            falign = sprintf('text-align: %s; ', column.falign ? column.falign : column.align);
            valign = sprintf('vertical-align: %s; ', column.valign);

            style = calculateObjectValue(null, that.options.footerStyle);

            if (style && style.css) {
                for (key in style.css) {
                    csses.push(key + ': ' + style.css[key]);
                }
            }

            html.push('<td', class_, sprintf(' style="%s"', falign + valign + csses.concat().join('; ')), '>');
            html.push('<div class="th-inner">');

            html.push(calculateObjectValue(column, column.footerFormatter, [data], '&nbsp;') || '&nbsp;');

            html.push('</div>');
            html.push('<div class="fht-cell"></div>');
            html.push('</div>');
            html.push('</td>');
        });

        this.$tableFooter.find('tr').html(html.join(''));
        this.$tableFooter.show();
        clearTimeout(this.timeoutFooter_);
        this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this),
            this.$el.is(':hidden') ? 100 : 0);
    };

    BootstrapTable.prototype.fitFooter = function() {
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
            .prop('class', this.$el.prop('class'));

        $footerTd = this.$tableFooter.find('td');

        this.$body.find('>tr:first-child:not(.no-records-found) > *').each(function(i) {
            var $this = $(this);

            $footerTd.eq(i).find('.fht-cell').width($this.innerWidth());
        });

        this.horizontalScroll();
    };

    BootstrapTable.prototype.horizontalScroll = function() {
        var that = this;
        // horizontal scroll event
        // TODO: it's probably better improving the layout than binding to scroll event
        this.$tableBody.off('scroll').on('scroll', function() {
            if (that.options.showHeader) {
                that.$tableHeader.scrollLeft($(this).scrollLeft());
            }

            if (that.options.showFooter && !that.options.cardView) {
                that.$tableFooter.scrollLeft($(this).scrollLeft());
            }
        });
    };

    BootstrapTable.prototype.toggleColumn = function(index, checked, needUpdate) {
        if (index === -1) {
            return;
        }
        this.columns[index].visible = checked;
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

    BootstrapTable.prototype.getVisibleFields = function() {
        var that = this,
            visibleFields = [];

        $.each(this.header.fields, function(j, field) {
            var column = that.columns.filter(function(column) {
                return column.field === field;
            });

            if (!column.visible) {
                return;
            }
            visibleFields.push(field);
        });
        return visibleFields;
    };

    // PUBLIC FUNCTION DEFINITION
    // =======================

    BootstrapTable.prototype.resetView = function(params) {
        var padding = 0;

        if (params && params.height) {
            this.options.height = params.height;
        }

        this.$selectAll.prop('checked', this.$selectItem.length > 0 &&
            this.$selectItem.length === this.$selectItem.filter(':checked').length);

        if (typeof this.options.height !== 'undefined') {
            var toolbarHeight = this.$toolbar.outerHeight(true),
                paginationHeight = this.$pagination.outerHeight(true),
                height = this.options.height - toolbarHeight - paginationHeight;

            this.$tableContainer.css('height', height + 'px');
        }

        if (this.options.cardView) {
            // remove the element css
            this.$el.css('margin-top', '0');
            this.$tableContainer.css('padding-bottom', '0');
            this.$tableFooter.hide();
            return;
        }

        if (this.options.showHeader) {
            this.$tableHeader.show();
            this.resetHeader();
            padding += this.$header.outerHeight();
        } else {
            this.$tableHeader.hide();
            this.resetHeader();
            padding += this.$header.outerHeight();
        }

        if (this.options.showFooter) {
            this.resetFooter();
            padding += this.$tableFooter.outerHeight() + 1;
        }

        // Assign the correct sortable arrow
        this.getCaret();
        this.$tableContainer.css('padding-bottom', padding + 'px');
        this.trigger('reset-view');
    };

    BootstrapTable.prototype.getData = function(useCurrentPage) {
        var data = this.options.data;
        if (this.searchText || this.options.sortName || !$.isEmptyObject(this.filterColumns) || !$.isEmptyObject(this.filterColumnsPartial)) {
            data = this.data;
        }

        if (useCurrentPage) {
            return data.slice(this.pageFrom - 1, this.pageTo);
        }

        return data;
    };

    BootstrapTable.prototype.load = function(data) {
        var fixedScroll = false;

        // #431: support pagination
        if (this.options.sidePagination === 'server') {
            this.options.totalRows = data[this.options.totalField];
            fixedScroll = data.fixedScroll;
            data = data[this.options.dataField];
        } else if (!$.isArray(data)) { // support fixedScroll
            fixedScroll = data.fixedScroll;
            data = data.data;
        }

        this.initData(data);
        this.initSearch();
        this.initPagination();
        this.initBody(fixedScroll);
    };

    BootstrapTable.prototype.append = function(data) {
        this.initData(data, 'append');
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
    };

    BootstrapTable.prototype.prepend = function(data) {
        this.initData(data, 'prepend');
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
    };

    BootstrapTable.prototype.remove = function(params) {
        function removeData(params) {
            $.each(params, function(index_params, paramsRemove) {
                if (typeof paramsRemove.reinit === 'undefined' || paramsRemove.reinit) {
                    if (paramsRemove.hasOwnProperty('indexesData')) {
                        paramsRemove.indexesData = $.isArray(paramsRemove.indexesData) ? paramsRemove.indexesData : [paramsRemove.indexesData];
                        paramsRemove.indexesData = paramsRemove.indexesData.map(Number);
                        if (paramsRemove.indexesData.filter(function(index_data) {
                                return isNaN(index_data);
                            }).length === 0) {
                            var dataNew = [];

                            $.each(that.options.data, function(index_dataTable, dataTable) {
                                if (paramsRemove.indexesData.indexOf(index_dataTable) === -1) {
                                    dataNew.push(dataTable);
                                } else {
                                    paramsRemove.indexesData.splice(paramsRemove.indexesData.indexOf(index_dataTable), 1);
                                }
                            });
                            that.options.data = dataNew;
                        } else {
                            throw new Error('Wrong indexesData. Array elemnt isn\'t number');
                        }
                    } else if (typeof paramsRemove.field !== 'undefined' && typeof paramsRemove.values !== 'undefined') {
                        var dataNew = [];

                        $.each(that.options.data, function(index_row, row) {
                            if (typeof row[paramsRemove.field] === 'undefined') {
                                dataNew.push(row);
                            } else {
                                if ($.inArray(row[paramsRemove.field], paramsRemove.values) === -1) {
                                    dataNew.push(row);
                                } else {
                                    if (that.options.sidePagination === 'server') {
                                        that.options.totalRows -= 1;
                                    }
                                }
                            }
                        });
                        that.options.data = dataNew;
                    } else if (typeof paramsRemove.idsUnique !== 'undefined') {
                        paramsRemove.idsUnique = $.isArray(paramsRemove.idsUnique) ? paramsRemove.idsUnique : [paramsRemove.idsUnique];
                        paramsRemove.idsUnique = paramsRemove.idsUnique.map(Number);
                        if (paramsRemove.idsUnique.filter(function(element) {
                                return isNaN(element);
                            }).length === 0) {
                            $.each(paramsRemove.idsUnique, function(index_idsUnique, id_unique) {
                                row = that.getRowByUniqueId(id_unique);
                                if (row) {
                                    that.options.data.splice(that.options.data.indexOf(row), 1);
                                }
                            });
                        } else {
                            throw new Error('Wrong idsUnique. Array elemnt isn\'t number');
                        }
                    } else {
                        throw new Error('Unsupported case.');
                    }
                } else {
                    delete paramsRemove.reinit;
                    allParamsWithoutReinit.push(paramsRemove);
                }
            });
        }
        var len = this.options.data.length,
            that = this,
            i, row,
            allParamsWithoutReinit = [];

        try {
            removeData(params)
        } catch (err) {
            throw err;
        }

        if (len === this.options.data.length) {
            return;
        }
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
        if (allParamsWithoutReinit.length !== 0) {
            try {
                removeData(params)
            } catch (err) {
                throw err;
            }
        }
    };

    BootstrapTable.prototype.removeAll = function() {
        if (this.options.data.length > 0) {
            this.options.data.splice(0, this.options.data.length);
            this.initSearch();
            this.initPagination();
            this.initBody(true);
        }
    };

    BootstrapTable.prototype.getRowByUniqueId = function(id) {
        var uniqueId = this.options.uniqueId,
            len = this.options.data.length,
            dataRow = null,
            i, row, rowUniqueId;

        for (i = len - 1; i >= 0; i--) {
            row = this.options.data[i];

            if (row.hasOwnProperty(uniqueId)) { // uniqueId is a column
                rowUniqueId = row[uniqueId];
            } else if (row._data.hasOwnProperty(uniqueId)) { // uniqueId is a row data property
                rowUniqueId = row._data[uniqueId];
            } else {
                continue;
            }

            if (typeof rowUniqueId === 'string') {
                id = id.toString();
            } else if (typeof rowUniqueId === 'number') {
                if ((Number(rowUniqueId) === rowUniqueId) && (rowUniqueId % 1 === 0)) {
                    id = parseInt(id);
                } else if ((rowUniqueId === Number(rowUniqueId)) && (rowUniqueId !== 0)) {
                    id = parseFloat(id);
                }
            }

            if (rowUniqueId === id) {
                dataRow = row;
                break;
            }
        }

        return dataRow;
    };

    BootstrapTable.prototype.updateByUniqueId = function(params) {
        var that = this,
            allParams = $.isArray(params) ? params : [params],
            allParamsWithoutReinit = [],
            refresh_table = false;


        $.each(allParams, function(i, params) {
            var rowId;

            if (params.hasOwnProperty('reinit') && !params.reinit) {
                allParamsWithoutReinit.push(params);
            } else {
                refresh_table = true;
                if (!params.hasOwnProperty('id') || !params.hasOwnProperty('row')) {
                    return;
                }

                rowId = $.inArray(that.getRowByUniqueId(params.id), that.options.data);

                if (rowId === -1) {
                    return;
                }
                if (params.hasOwnProperty('replace') && params.replace) {
                    that.options.data[rowId] = params.row;
                } else {
                    $.extend(that.options.data[rowId], params.row);
                }
            }
        });

        if (refresh_table) {
            this.initSearch();
            this.initPagination();
            this.initSort();
            this.initBody(true);
        }

        $.each(allParamsWithoutReinit, function(i, params) {
            var rowId;

            if (!params.hasOwnProperty('id') || !params.hasOwnProperty('row')) {
                return;
            }

            rowId = $.inArray(that.getRowByUniqueId(params.id), that.options.data);

            if (rowId === -1) {
                return;
            }
            if (params.hasOwnProperty('replace') && params.replace) {
                that.options.data[rowId] = params.row;
            } else {
                $.extend(that.options.data[rowId], params.row);
            }
        });
    };

    BootstrapTable.prototype.refreshColumnTitle = function(params) {
        if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
            return;
        }

        this.columns[this.fieldsColumnsIndex[params.field]].title = this.options.escape ?
            escapeHTML(params.title) :
            params.title;

        if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
            this.$tableHeader.find('th[data-field]').each(function(i) {
                if ($(this).data('field') === params.field) {
                    $($(this).find(".th-inner")[0]).text(params.title);
                    return false;
                }
            });
        }
    };

    BootstrapTable.prototype.insertRow = function(params) {
        if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
            return;
        }
        this.options.data.splice(params.index, 0, params.row);
        this.initSearch();
        this.initPagination();
        this.initSort();
        this.initBody(true);
    };

    BootstrapTable.prototype.updateRow = function(params) {
        var that = this,
            allParams = $.isArray(params) ? params : [params],
            allParamsWithoutReinit = [],
            refresh_table = false;

        $.each(allParams, function(i, params) {
            if (params.hasOwnProperty('reinit') && !params.reinit) {
                allParamsWithoutReinit.push(params);
            } else {
                if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
                    return;
                }
                if (params.hasOwnProperty('replace') && params.replace) {
                    that.options.data[params.index] = params.row;
                } else {
                    $.extend(that.options.data[params.index], params.row);
                }
            }
        });

        if (refresh_table) {
            this.initSearch();
            this.initPagination();
            this.initSort();
            this.initBody(true);
        }

        $.each(allParamsWithoutReinit, function(i, params) {
            if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
                return;
            }
            if (params.hasOwnProperty('replace') && params.replace) {
                that.options.data[params.index] = params.row;
            } else {
                $.extend(that.options.data[params.index], params.row);
            }
        });
    };

    BootstrapTable.prototype.initHiddenRows = function() {
        this.hiddenRows = [];
    };

    BootstrapTable.prototype.showRow = function(params) {
        this.toggleRow(params, true);
    };

    BootstrapTable.prototype.hideRow = function(params) {
        this.toggleRow(params, false);
    };

    BootstrapTable.prototype.toggleRow = function(params, visible) {
        var row, index;

        if (params.hasOwnProperty('index')) {
            row = this.getData()[params.index];
        } else if (params.hasOwnProperty('uniqueId')) {
            row = this.getRowByUniqueId(params.uniqueId);
        }

        if (!row) {
            return;
        }

        index = $.inArray(row, this.hiddenRows);

        if (!visible && index === -1) {
            this.hiddenRows.push(row);
        } else if (visible && index > -1) {
            this.hiddenRows.splice(index, 1);
        }
        this.initBody(true);
    };

    BootstrapTable.prototype.getHiddenRows = function(show) {
        var that = this,
            data = this.getData(),
            rows = [];

        $.each(data, function(i, row) {
            if ($.inArray(row, that.hiddenRows) > -1) {
                rows.push(row);
            }
        });
        this.hiddenRows = rows;
        return rows;
    };

    BootstrapTable.prototype.mergeCells = function(options) {
        var row = options.index,
            col = $.inArray(options.field, this.getVisibleFields()),
            rowspan = options.rowspan || 1,
            colspan = options.colspan || 1,
            i, j,
            $tr = this.$body.find('>tr'),
            $td;

        if (this.options.detailView && !this.options.cardView) {
            col += 1;
        }

        $td = $tr.eq(row).find('>td').eq(col);

        if (row < 0 || col < 0 || row >= this.data.length) {
            return;
        }

        for (i = row; i < row + rowspan; i++) {
            for (j = col; j < col + colspan; j++) {
                $tr.eq(i).find('>td').eq(j).hide();
            }
        }

        $td.prop({
            'rowspan': rowspan,
            'colspan': colspan
        }).show();
    };

    BootstrapTable.prototype.updateCell = function(params) {
        if (!params.hasOwnProperty('index') ||
            !params.hasOwnProperty('field') ||
            !params.hasOwnProperty('value')) {
            return;
        }
        this.data[params.index][params.field] = params.value;

        if (params.reinit === false) {
            return;
        }
        this.initSort();
        this.initBody(true);
    };

    BootstrapTable.prototype.getOptions = function() {
        //Deep copy
        return $.extend(true, {}, this.options);
    };

    BootstrapTable.prototype.getSelections = function() {
        var that = this;

        return $.grep(this.options.data, function(row) {
            // fix #2424: from html with checkbox
            return row[that.header.stateField] === true;
        });
    };

    BootstrapTable.prototype.getAllSelections = function() {
        var that = this;

        return $.grep(this.options.data, function(row) {
            return row[that.header.stateField];
        });
    };

    BootstrapTable.prototype.checkAll = function() {
        this.checkAll_(true);
    };

    BootstrapTable.prototype.uncheckAll = function() {
        this.checkAll_(false);
    };

    BootstrapTable.prototype.checkInvert = function() {
        var that = this;
        var rows = that.$selectItem.filter(':enabled');
        var checked = rows.filter(':checked');
        rows.each(function() {
            $(this).prop('checked', !$(this).prop('checked'));
        });
        that.updateRows();
        that.updateSelected();
        that.trigger('uncheck-some', checked);
        checked = that.getSelections();
        that.trigger('check-some', checked);
    };

    BootstrapTable.prototype.checkAll_ = function(checked) {
        var rows;
        if (!checked) {
            rows = this.getSelections();
        }
        this.$selectAll.add(this.$selectAll_).prop('checked', checked);
        this.$selectItem.filter(':enabled').prop('checked', checked);
        this.updateRows();
        if (checked) {
            rows = this.getSelections();
        }
        this.trigger(checked ? 'check-all' : 'uncheck-all', rows);
    };

    BootstrapTable.prototype.check = function(index) {
        this.check_(true, index);
    };

    BootstrapTable.prototype.uncheck = function(index) {
        this.check_(false, index);
    };

    BootstrapTable.prototype.check_ = function(checked, index) {
        var $el = this.$selectItem.filter(sprintf('[data-index="%s"]', index)).prop('checked', checked);
        this.data[index][this.header.stateField] = checked;
        this.updateSelected();
        this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el);
    };

    BootstrapTable.prototype.checkBy = function(obj) {
        this.checkBy_(true, obj);
    };

    BootstrapTable.prototype.uncheckBy = function(obj) {
        this.checkBy_(false, obj);
    };

    BootstrapTable.prototype.checkBy_ = function(checked, obj) {
        if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
            return;
        }

        var that = this,
            rows = [];
        $.each(this.options.data, function(index, row) {
            if (!row.hasOwnProperty(obj.field)) {
                return false;
            }
            if ($.inArray(row[obj.field], obj.values) !== -1) {
                var $el = that.$selectItem.filter(':enabled')
                    .filter(sprintf('[data-index="%s"]', index)).prop('checked', checked);
                row[that.header.stateField] = checked;
                rows.push(row);
                that.trigger(checked ? 'check' : 'uncheck', row, $el);
            }
        });
        this.updateSelected();
        this.trigger(checked ? 'check-some' : 'uncheck-some', rows);
    };

    BootstrapTable.prototype.destroy = function() {
        this.$el.insertBefore(this.$container);
        $(this.options.toolbar).insertBefore(this.$el);
        this.$container.next().remove();
        this.$container.remove();
        this.$el.html(this.$el_.html())
            .css('margin-top', '0')
            .prop('class', this.$el_.prop('class') || ''); // reset the class
    };

    BootstrapTable.prototype.showLoading = function() {
        this.$tableLoading.show();
    };

    BootstrapTable.prototype.hideLoading = function() {
        this.$tableLoading.hide();
    };

    BootstrapTable.prototype.togglePagination = function() {
        this.options.pagination = !this.options.pagination;
        var button = this.$toolbar.find('button[name="paginationSwitch"] i');
        if (this.options.pagination) {
            button.prop("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchDown);
        } else {
            button.prop("class", this.options.iconsPrefix + " " + this.options.icons.paginationSwitchUp);
        }
        this.updatePagination();
    };

    BootstrapTable.prototype.refresh = function(params) {
        if (params && params.url) {
            this.options.url = params.url;
        }
        if (params && params.pageNumber) {
            this.options.pageNumber = params.pageNumber;
        }
        if (params && params.pageSize) {
            this.options.pageSize = params.pageSize;
        }
        this.initServer(params && params.silent,
            params && params.query, params && params.url);
        this.trigger('refresh', params);
    };

    BootstrapTable.prototype.resetWidth = function() {
        this.fitHeader();
        if (this.options.showFooter && !this.options.cardView) {
            this.fitFooter();
        }
    };

    BootstrapTable.prototype.showColumn = function(field) {
        this.toggleColumn(this.fieldsColumnsIndex[field], true, true);
    };

    BootstrapTable.prototype.hideColumn = function(field) {
        this.toggleColumn(this.fieldsColumnsIndex[field], false, true);
    };

    BootstrapTable.prototype.getHiddenColumns = function() {
        return $.grep(this.columns, function(column) {
            return !column.visible;
        });
    };

    BootstrapTable.prototype.getVisibleColumns = function() {
        return $.grep(this.columns, function(column) {
            return column.visible;
        });
    };

    BootstrapTable.prototype.toggleAllColumns = function(visible) {
        var that = this;
        $.each(this.columns, function(i, column) {
            that.columns[i].visible = visible;
        });

        this.initHeader();
        this.initSearch();
        this.initPagination();
        this.initBody();
        if (this.options.showColumns) {
            var $items = this.$toolbar.find('.keep-open input').prop('disabled', false);

            if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
                $items.filter(':checked').prop('disabled', true);
            }
        }
    };

    BootstrapTable.prototype.showAllColumns = function() {
        this.toggleAllColumns(true);
    };

    BootstrapTable.prototype.hideAllColumns = function() {
        this.toggleAllColumns(false);
    };

    BootstrapTable.prototype.filterBy = function(columns) {
        this.filterColumns = $.isEmptyObject(columns) ? {} : columns;
        this.options.pageNumber = 1;
        this.initSearch();
        this.updatePagination();
    };

    BootstrapTable.prototype.scrollTo = function(value) {
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

    BootstrapTable.prototype.sort = function(data) {
        var $sortButton = this.$header.find('th[data-field=' + data.field + ']>div.sortable')

        if (data.sortOrder === 'asc' || data.sortOrder === 'desc') {
            if (data.force) {
                if ($sortButton.hasClass(data.sortOrder)) {
                    if (data.sortOrder === 'asc') {
                        this.options.sortOrder = 'desc';
                        $sortButton.removeClass('asc').addClass('desc');
                    } else {
                        this.options.sortOrder = 'asc';
                        $sortButton.removeClass('desc').addClass('asc');
                    }
                }
                $sortButton.click();
            } else if (!$sortButton.hasClass('asc') && !$sortButton.hasClass('desc')) {
                this.options.sortOrder = data.sortOrder;
                $sortButton.addClass(data.sortOrder);
                $sortButton.click();
            } else if (!$sortButton.hasClass(data.sortOrder)) {
                $sortButton.click();
            }
        } else {
            throw new Error('Unknown sortOrder: "' + data.sortOrder + '"');
        }
    };

    BootstrapTable.prototype.getScrollPosition = function() {
        return this.scrollTo();
    };

    BootstrapTable.prototype.selectPage = function(page) {
        if (page > 0 && page <= this.options.totalPages) {
            this.options.pageNumber = page;
            this.updatePagination();
        }
    };

    BootstrapTable.prototype.prevPage = function() {
        if (this.options.pageNumber > 1) {
            this.options.pageNumber--;
            this.updatePagination();
        }
    };

    BootstrapTable.prototype.nextPage = function() {
        if (this.options.pageNumber < this.options.totalPages) {
            this.options.pageNumber++;
            this.updatePagination();
        }
    };

    BootstrapTable.prototype.toggleView = function() {
        this.options.cardView = !this.options.cardView;
        this.initHeader();
        // Fixed remove toolbar when click cardView button.
        //that.initToolbar();
        this.initBody();
        this.trigger('toggle', this.options.cardView);
    };

    BootstrapTable.prototype.refreshOptions = function(options) {
        //If the objects are equivalent then avoid the call of destroy / init methods
        if (compareObjects(this.options, options, true)) {
            return;
        }
        this.options = $.extend(this.options, options);
        this.trigger('refresh-options', this.options);
        this.destroy();
        this.init();
    };

    BootstrapTable.prototype.resetSearch = function(text) {
        var $search = this.$toolbar.find('.search input');
        $search.val(text || '');
        this.onSearch({
            currentTarget: $search
        });
    };

    BootstrapTable.prototype.expandRow_ = function(expand, index) {
        var $tr = this.$body.find(sprintf('> tr[data-index="%s"]', index));
        if ($tr.next().is('tr.detail-view') === (expand ? false : true)) {
            $tr.find('> td > .detail-icon').click();
        }
    };

    BootstrapTable.prototype.expandRow = function(index) {
        this.expandRow_(true, index);
    };

    BootstrapTable.prototype.collapseRow = function(index) {
        this.expandRow_(false, index);
    };

    BootstrapTable.prototype.expandAllRows = function(isSubTable) {
        if (isSubTable) {
            var $tr = this.$body.find(sprintf('> tr[data-index="%s"]', 0)),
                that = this,
                detailIcon = null,
                executeInterval = false,
                idInterval = -1;

            if (!$tr.next().is('tr.detail-view')) {
                $tr.find('> td > .detail-icon').click();
                executeInterval = true;
            } else if (!$tr.next().next().is('tr.detail-view')) {
                $tr.next().find(".detail-icon").click();
                executeInterval = true;
            }

            if (executeInterval) {
                try {
                    idInterval = setInterval(function() {
                        detailIcon = that.$body.find("tr.detail-view").last().find(".detail-icon");
                        if (detailIcon.length > 0) {
                            detailIcon.click();
                        } else {
                            clearInterval(idInterval);
                        }
                    }, 1);
                } catch (ex) {
                    clearInterval(idInterval);
                }
            }
        } else {
            var trs = this.$body.children();
            for (var i = 0; i < trs.length; i++) {
                this.expandRow_(true, $(trs[i]).data("index"));
            }
        }
    };

    BootstrapTable.prototype.collapseAllRows = function(isSubTable) {
        if (isSubTable) {
            this.expandRow_(false, 0);
        } else {
            var trs = this.$body.children();
            for (var i = 0; i < trs.length; i++) {
                this.expandRow_(false, $(trs[i]).data("index"));
            }
        }
    };

    BootstrapTable.prototype.updateFormatText = function(name, text) {
        if (this.options[sprintf('format%s', name)]) {
            if (typeof text === 'string') {
                this.options[sprintf('format%s', name)] = function() {
                    return text;
                };
            } else if (typeof text === 'function') {
                this.options[sprintf('format%s', name)] = text;
            }
        }
        this.initToolbar();
        this.initPagination();
        this.initBody();
    };

    // BOOTSTRAP TABLE PLUGIN DEFINITION
    // =======================

    var allowedMethods = [
        'getOptions',
        'getSelections', 'getAllSelections', 'getData',
        'load', 'append', 'prepend', 'remove', 'removeAll',
        'insertRow', 'updateRow', 'updateCell', 'updateByUniqueId',
        'getRowByUniqueId', 'showRow', 'hideRow', 'getHiddenRows',
        'mergeCells', 'refreshColumnTitle',
        'checkAll', 'uncheckAll', 'checkInvert',
        'check', 'uncheck',
        'checkBy', 'uncheckBy',
        'refresh',
        'resetView',
        'resetWidth',
        'destroy',
        'showLoading', 'hideLoading',
        'showColumn', 'hideColumn', 'getHiddenColumns', 'getVisibleColumns',
        'showAllColumns', 'hideAllColumns',
        'filterBy',
        'scrollTo',
        'sort',
        'getScrollPosition',
        'selectPage', 'prevPage', 'nextPage',
        'togglePagination',
        'toggleView',
        'refreshOptions',
        'resetSearch',
        'expandRow', 'collapseRow', 'expandAllRows', 'collapseAllRows',
        'updateFormatText'
    ];

    $.fn.bootstrapTable = function(option) {
        var value,
            args = Array.prototype.slice.call(arguments, 1);

        this.each(function() {
            var $this = $(this),
                data = $this.data('bootstrap.table'),
                options = $.extend({}, BootstrapTable.DEFAULTS, $this.data(),
                    typeof option === 'object' && option);

            if (typeof options.detailFormatter === 'string') {
                options.detailFormatter = detailFormatter;
            }
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
    $.fn.bootstrapTable.utils = {
        sprintf: sprintf,
        compareObjects: compareObjects,
        calculateObjectValue: calculateObjectValue,
        getItemField: getItemField,
        objectKeys: objectKeys,
        isIEBrowser: isIEBrowser
    };

    // BOOTSTRAP TABLE INIT
    // =======================

    $(function() {
        $('[data-toggle="table"]').bootstrapTable();
    });
})(jQuery);