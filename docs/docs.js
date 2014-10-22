$(function () {
    'use strict';

    function initTables() {
        var cardView = false;

        if ($(window).width() < 640) {
            cardView = true;
        }

        $('#table, #column, #event, #method, #localization').bootstrapTable('destroy');

        var tableColumns = [
            {field: 'name', title: 'Name', sortable: true},
            {field: 'name', title: '名称', sortable: true, visible: false},
            {field: 'attribute', title: 'Attribute'},
            {field: 'attribute', title: '属性', visible: false},
            {field: 'type', title: 'Type'},
            {field: 'type', title: '类型', visible: false},
            {field: 'description', title: 'Description', align: 'left'},
            {field: 'description_zh', title: '描述', align: 'left', visible: false},
            {field: 'default', title: 'Default', align: 'left'},
            {field: 'default', title: '默认', align: 'left', visible: false},
            {field: 'example', title: '', valign: 'middle', formatter: function (value) {
                if (!value) {
                    return '-';
                }
                return [
                    '<a title="Example" href="examples.html#' + value + '">',
                    '<i class="glyphicon glyphicon-eye-open"></i>',
                    '</a>'].join('');
            }}
        ];

        var columnColumns = [
            {field: 'name', title: 'Name', width: 60, sortable: true},
            {field: 'name', title: '名称', width: 60, sortable: true, visible: false},
            {field: 'attribute', title: 'Attribute'},
            {field: 'attribute', title: '属性', visible: false},
            {field: 'type', title: 'Type', width: 60},
            {field: 'type', title: '类型', width: 60, visible: false},
            {field: 'description', title: 'Description', align: 'left', width: 400},
            {field: 'description_zh', title: '描述', align: 'left', width: 400, visible: false},
            {field: 'default', title: 'Default', align: 'left', width: 180},
            {field: 'default', title: '默认', align: 'left', width: 180, visible: false},
            {field: 'example', title: '', formatter: function (value) {
                if (!value) {
                    return '-';
                }
                return [
                    '<a title="Example" href="examples.html#' + value + '">',
                    '<i class="glyphicon glyphicon-eye-open"></i>',
                    '</a>'].join('');
            }}
        ];

        if (getLocale() === 'zh') {
            $.each([tableColumns, columnColumns], function (i, columns) {
                $.each(columns, function (j, row) {
                    if (row.field === 'example') {
                        return;
                    }
                    row.visible = typeof row.visible !== 'undefined';
                });
            });
        }

        $('#table').bootstrapTable({
            cardView: cardView,
            columns: tableColumns,
            data: [
                {
                    name: '-',
                    attribute: 'data-toggle',
                    type: 'String',
                    description: 'Activate bootstrap table without writing JavaScript.',
                    description_zh: '不通过JavaScript的方式启动Bootstrap Table。',
                    'default': 'table',
                    example: 'basic-table'
                },
                {
                    name: 'classes',
                    attribute: 'data-classes',
                    type: 'String',
                    description: 'The class name of table.',
                    description_zh: '表格的类名。',
                    'default': 'table table-hover',
                    example: 'classes-table'
                },
                {
                    name: 'height',
                    attribute: 'data-height',
                    type: 'Number',
                    description: 'The height of table.',
                    description_zh: '表格的高度。',
                    'default': 'undefined',
                    example: 'basic-table'
                },
                {
                    name: 'undefinedText',
                    attribute: 'data-undefined-text',
                    type: 'String',
                    description: 'Defines the default undefined text.',
                    description_zh: '定义默认的undefined显示文字。',
                    'default': '-',
                    example: ''
                },
                {
                    name: 'striped',
                    attribute: 'data-striped',
                    type: 'Boolean',
                    description: 'True to stripe the rows.',
                    description_zh: '使表格带有条纹。',
                    'default': 'false',
                    example: 'classes-table'
                },
                {
                    name: 'sortName',
                    attribute: 'data-sort-name',
                    type: 'String',
                    description: 'Defines which column can be sorted.',
                    description_zh: '定义哪一列可被排序。',
                    'default': 'undefined',
                    example: 'sort-table'
                },
                {
                    name: 'sortOrder',
                    attribute: 'data-sort-order',
                    type: 'String',
                    description: 'Defines the column sort order, can only be "asc" or "desc".',
                    description_zh: '定义列排序的顺序，只能为“asc”和“desc”',
                    'default': 'asc',
                    example: 'sort-table'
                },
                {
                    name: 'columns',
                    attribute: '-',
                    type: 'Array',
                    description: 'The table columns config object, see column properties for more details.',
                    description_zh: '表格列的配置，详细见列属性。',
                    'default': '[]',
                    example: 'via-javascript-table'
                },
                {
                    name: 'data',
                    attribute: '-',
                    type: 'Array',
                    description: 'The data to be loaded.',
                    description_zh: '需要加载的数据。',
                    'default': '[]',
                    example: 'table-methods'
                },
                {
                    name: 'method',
                    attribute: 'data-method',
                    type: 'String',
                    description: 'The method type to request remote data.',
                    description_zh: '远程数据请求的方法。',
                    'default': 'get',
                    example: 'basic-table'
                },
                {
                    name: 'url',
                    attribute: 'data-url',
                    type: 'String',
                    description: 'A URL to request data from remote site.',
                    description_zh: '远程数据请求的URL地址。',
                    'default': 'undefined',
                    example: 'basic-table'
                },
                {
                    name: 'cache',
                    attribute: 'data-cache',
                    type: 'Boolean',
                    description: 'False to disable caching of AJAX requests.',
                    description_zh: '设置False禁用AJAX请求的缓存。',
                    'default': 'true',
                    example: 'basic-table'
                },
                {
                    name: 'contentType',
                    attribute: 'data-content-type',
                    type: 'String',
                    description: 'The contentType of request remote data.',
                    description_zh: '远程数据请求的“contentType”类型。',
                    'default': 'application/json',
                    example: ''
                },
                {
                    name: 'queryParams',
                    attribute: 'data-query-params',
                    type: 'Function',
                    description: 'When request remote data, sending additional parameters by format the queryParams, the parameters object contains: <br>pageSize, pageNumber, searchText, sortName, sortOrder. Return false to stop request',
                    description_zh: '远程数据请求时，可以通过queryParams来格式化所需要的数据信息，参数（对象）包含了：<br>pageSize, pageNumber, searchText, sortName, sortOrder。返回 false 可以禁用请求。',
                    'default': 'function(params) {<br>return params;<br>}',
                    example: 'server-side-pagination-table'
                },
                {
                    name: 'queryParamsType',
                    attribute: 'data-query-params-type',
                    type: 'String',
                    description: 'Set "limit" to send query params width RESTFul type.',
                    description_zh: '设置为“limit”可以发送标准的RESTFul类型的参数请求。',
                    'default': 'limit',
                    example: ''
                },
                {
                    name: 'responseHandler',
                    attribute: 'data-response-handler',
                    type: 'Function',
                    description: 'Before load remote data, handler the response data format, the parameters object contains: <br>res: the response data.',
                    description_zh: '在加载数据前，可以对返回的数据进行处理，参数包含：<br>res: 返回的数据。',
                    'default': 'function(res) {<br>return res;<br>}',
                    example: 'card-view'
                },
                {
                    name: 'pagination',
                    attribute: 'data-pagination',
                    type: 'Boolean',
                    description: 'True to show a pagination toolbar on table bottom.',
                    description_zh: '设置True在表格底部显示分页工具栏。',
                    'default': 'false',
                    example: 'pagination-table'
                },
                {
                    name: 'sidePagination',
                    attribute: 'data-side-pagination',
                    type: 'String',
                    description: 'Defines the side pagination of table, can only be "client" or "server".',
                    description_zh: '定义表格分页的位置，只能是“client”（客户端）和“server”（服务器端）。',
                    'default': 'client',
                    example: 'pagination-table'
                },
//                {
//                    name: 'totalRows',
//                    attribute: 'data-total-rows',
//                    type: 'Number',
//                    description: 'Defines the total rows of table, you need to set this option when the sidePagination option is set to "server".',
//                    description_zh: '定义表格记录的总条数，在server端分页的时候需要设置该参数。',
//                    'default': 0,
//                    example: ''
//                },
                {
                    name: 'pageNumber',
                    attribute: 'data-page-number',
                    type: 'Number',
                    description: 'When set pagination property, initialize the page number.',
                    description_zh: '分页的时候设置当前的页码。',
                    'default': 1,
                    example: 'via-javascript-table'
                },
                {
                    name: 'pageSize',
                    attribute: 'data-page-size',
                    type: 'Number',
                    description: 'When set pagination property, initialize the page size.',
                    description_zh: '分页的时候设置每页的条数。',
                    'default': 10,
                    example: 'via-javascript-table'
                },
                {
                    name: 'pageList',
                    attribute: 'data-page-list',
                    type: 'Array',
                    description: 'When set pagination property, initialize the page size selecting list.',
                    description_zh: '分页的时候设置分页数的列表。',
                    'default': '[10, 25, 50, 100]',
                    example: 'via-javascript-table'
                },
                {
                    name: 'search',
                    attribute: 'data-search',
                    type: 'Boolean',
                    description: 'Enable the search input.',
                    description_zh: '启用搜索输入框。',
                    'default': 'false',
                    example: 'pagination-table'
                },
                {
                    name: 'selectItemName',
                    attribute: 'data-select-item-name',
                    type: 'String',
                    description: 'The name of radio or checkbox input.',
                    description_zh: '单选框或者复选框的name，用于多个表格使用radio的情况。',
                    'default': 'btSelectItem',
                    example: 'radio-table'
                },
                {
                    name: 'showHeader',
                    attribute: 'data-show-header',
                    type: 'Boolean',
                    description: 'False to hide the table header.',
                    description_zh: '设置为False可隐藏表头。',
                    'default': 'true',
                    example: 'hide-header-table'
                },
                {
                    name: 'showColumns',
                    attribute: 'data-show-columns',
                    type: 'Boolean',
                    description: 'True to show the columns drop down list.',
                    description_zh: '设置为True可显示表格显示/隐藏列表。',
                    'default': 'false',
                    example: 'show-columns-table'
                },
                {
                    name: 'showRefresh',
                    attribute: 'data-show-refresh',
                    type: 'Boolean',
                    description: 'True to show the refresh button.',
                description_zh: '设置为True可显示刷新按钮。',
                    'default': 'false',
                    example: 'basic-toolbar-table'
                },
                {
                    name: 'showToggle',
                    attribute: 'data-show-toggle',
                    type: 'Boolean',
                    description: 'True to show the toggle button to toggle table / card view.',
                    description_zh: '设置为True可显示切换普通表格和名片（card）布局。',
                    'default': 'false',
                    example: 'basic-toolbar-table'
                },
                {
                    name: 'minimumCountColumns',
                    attribute: 'data-minimum-count-columns',
                    type: 'Number',
                    description: 'The minimum count columns to hide of the columns drop down list.',
                    description_zh: '表格显示/隐藏列表时可设置最小隐藏的列数。',
                    'default': '1',
                    example: 'via-javascript-table'
                },
                {
                    name: 'idField',
                    attribute: 'data-id-field',
                    type: 'String',
                    description: 'Indicate which field is an identity field.',
                    description_zh: '标识哪个字段为id主键。',
                    'default': 'undefined',
                    example: ''
                },
                {
                    name: 'cardView',
                    attribute: 'data-card-view',
                    type: 'Boolean',
                    description: 'True to show card view table, for example mobile view.',
                    description_zh: '设置为True时显示名片（card）布局，例如用手机浏览的时候。',
                    'default': 'false',
                    example: 'card-view'
                },
                {
                    name: 'clickToSelect',
                    attribute: 'data-click-to-select',
                    type: 'Boolean',
                    description: 'True to select checkbox or radiobox when click rows.',
                    description_zh: '设置为True时点击行即可选中单选/复选框。',
                    'default': 'false',
                    example: 'table-select'
                },
                {
                    name: 'singleSelect',
                    attribute: 'data-single-select',
                    type: 'Boolean',
                    description: 'True to allow checkbox selecting only one row.',
                    description_zh: '设置为True时复选框只能选择一条记录。',
                    'default': 'false',
                    example: 'single-checkbox-table'
                },
                {
                    name: 'toolbar',
                    attribute: 'data-toolbar',
                    type: 'String',
                    description: 'A jQuery selector that indicate the toolbar, for example: <br>#toolbar, .toolbar.',
                    description_zh: '设置jQuery元素为工具栏，例如：<br>#toolbar, .toolbar。',
                    'default': 'undefined',
                    example: 'custom-toolbar-table'
                },
                {
                    name: 'checkboxHeader',
                    attribute: 'data-checkbox-header',
                    type: 'Boolean',
                    description: 'False to hide check-all checkbox in header row.',
                    description_zh: '设置为False时隐藏表头中的全选复选框。',
                    'default': 'true',
                    example: ''
                },
                {
                    name: 'maintainSelected',
                    attribute: 'data-maintain-selected',
                    type: 'Boolean',
                    description: 'True to maintain selected rows on change page and search.',
                    description_zh: '设置为True当换页或者搜索时保持选中的行。',
                    'default': 'false',
                    example: ''
                },
                {
                    name: 'sortable',
                    attribute: 'data-sortable',
                    type: 'Boolean',
                    description: 'False to disable sortable of all columns.',
                    description_zh: '设置为False时禁用所有列的排序。',
                    'default': 'true',
                    example: ''
                },
                {
                    name: 'rowStyle',
                    attribute: 'data-row-style',
                    type: 'Function',
                    description: 'The row style formatter function, take two parameters: <br>row: the row record data.<br>index: the row index.<br>Support classes or css.',
                    description_zh: '行样式格式化方法，有两个参数：<br>row: 行记录的数据。<br>index: 行数据的 index。<br>支持 classes 或者 css.',
                    'default': '{}',
                    example: 'classes-table'
                }
            ]
        });
        $('#column').bootstrapTable({
            cardView: cardView,
            columns: columnColumns,
            data: [
                {
                    name: 'radio',
                    attribute: 'data-radio',
                    type: 'Boolean',
                    description: 'True to show a radio. The radio column has fixed width.',
                    description_zh: '设置为True显示单选框，单选框列有固定的宽度。',
                    'default': 'false',
                    example: 'radio-table'
                },
                {
                    name: 'checkbox',
                    attribute: 'data-checkbox',
                    type: 'Boolean',
                    description: 'True to show a checkbox. The checkbox column has fixed width.',
                    description_zh: '设置为True显示复选框，复选框列有固定的宽度。',
                    'default': 'false',
                    example: 'checkbox-table'
                },
                {
                    name: 'field',
                    attribute: 'data-field',
                    type: 'String',
                    description: 'The column field name.',
                    description_zh: '列标识名称。',
                    'default': 'undefined',
                    example: 'via-javascript-table'
                },
                {
                    name: 'title',
                    attribute: 'data-title',
                    type: 'String',
                    description: 'The column title text.',
                    description_zh: '表头标题。',
                    'default': 'undefined',
                    example: 'via-javascript-table'
                },
                {
                    name: 'class',
                    attribute: 'class / data-class',
                    type: 'String',
                    description: 'The column class name.',
                    description_zh: '列的类名称。',
                    'default': 'undefined',
                    example: 'classes-table'
                },
                {
                    name: 'align',
                    attribute: 'data-align',
                    type: 'String',
                    description: 'Indicate how to align the column data. "left", "right", "center" can be used.',
                    description_zh: '定义列的水平对齐方式，只能为："left", "right" 和 "center"。',
                    'default': 'undefined',
                    example: 'aligning-columns'
                },
                {
                    name: 'halign',
                    attribute: 'data-halign',
                    type: 'String',
                    description: 'Indicate how to align the table header. "left", "right", "center" can be used.',
                    description_zh: '定义表头的水平对齐方式，只能为："left", "right" 和 "center"。',
                    'default': 'undefined',
                    example: 'aligning-columns'
                },
                {
                    name: 'valign',
                    attribute: 'data-valign',
                    type: 'String',
                    description: 'Indicate how to align the cell data. "top", "middle", "bottom" can be used.',
                    description_zh: '定义列的垂直对齐方式，只能为："top", "middle" 和 "bottom"。',
                    'default': 'undefined',
                    example: 'via-javascript-table'
                },
                {
                    name: 'width',
                    attribute: 'data-width',
                    type: 'Number',
                    description: 'The width of column. If not defined, the width will auto expand to fit its contents.',
                    description_zh: '列的宽度，假如没有定义，将根据内容自适应宽度。',
                    'default': 'undefined',
                    example: ''
                },
                {
                    name: 'sortable',
                    attribute: 'data-sortable',
                    type: 'Boolean',
                    description: 'True to allow the column can be sorted.',
                    description_zh: '设置为True允许对该列进行排序。',
                    'default': 'false',
                    example: 'sort-table'
                },
                {
                    name: 'order',
                    attribute: 'data-order',
                    type: 'String',
                    description: 'The default sort order, can only be "asc" or "desc".',
                    description_zh: '定义列排序的顺序，只能为“asc”和“desc”。',
                    'default': 'asc',
                    example: 'sort-table'
                },
                {
                    name: 'visible',
                    attribute: 'data-visible',
                    type: 'Boolean',
                    description: 'False to hide the columns item.',
                    description_zh: '设置为False隐藏该列。',
                    'default': 'true',
                    example: 'show-columns-table'
                },
                {
                    name: 'switchable',
                    attribute: 'data-switchable',
                    type: 'Boolean',
                    description: 'False to disable the switchable of columns item.',
                    description_zh: '设置为False禁用切换列的显示/隐藏。',
                    'default': 'true',
                    example: 'show-columns-table'
                },
                {
                    name: 'clickToSelect',
                    attribute: 'data-click-to-select',
                    type: 'Boolean',
                    description: 'True to select checkbox or radiobox when the column is clicked.',
                    description_zh: '设置为True时点击行即可选中单选/复选框。',
                    'default': 'true',
                    example: 'via-javascript-table'
                },
                {
                    name: 'formatter',
                    attribute: 'data-formatter',
                    type: 'Function',
                    description: 'The cell formatter function, take three parameters: <br>value: the field value. <br>row: the row record data.<br>index: the row index.',
                    description_zh: '列的格式化方法，包含3个参数：<br>value: 该单元格的数据。<br>row: 该行的数据。<br>index: 该行的index。',
                    'default': 'undefined',
                    example: 'format-table'
                },
                {
                    name: 'events',
                    attribute: 'data-events',
                    type: 'Object',
                    description: 'The cell events listener when you use formatter function, take three parameters: <br>event: the jQuery event. <br>value: the field value. <br>row: the row record data.<br>index: the row index.',
                    description_zh: '当你使用格式化方式时，可以对该列的元素进行事件监听。包含三个参数：<br>event: jQuery 事件。<br>value: 该单元格的数据。<br>row: 该行的数据。<br>index: 该行的index。',
                    'default': 'undefined',
                    example: 'column-events-table'
                },
                {
                    name: 'sorter',
                    attribute: 'data-sorter',
                    type: 'Function',
                    description: 'The custom field sort function that used to do local sorting, take two parameters: <br>a: the first field value.<br> b: the second field value.',
                    description_zh: '可对列进行自定义排序，包含两个参数：<br>a: 第一个值。<br> b: 第二个值。',
                    'default': 'undefined',
                    example: 'custom-sort-table'
                },
                {
                    name: 'cellStyle',
                    attribute: 'data-cell-style',
                    type: 'Function',
                    description: 'The cell style formatter function, take three parameters: <br>value: the field value.<br>row: the row record data.<br>index: the row index.<br>Support classes or css.',
                    description_zh: '列样式格式化方法，有三个参数：<br>row: 行记录的数据。<br>value: 该单元格的数据。<br>index: 行数据的 index。<br>支持 classes 或者 css.',
                    'default': 'undefined',
                    example: ''
                }
            ]
        });
        $('#event').bootstrapTable({
            cardView: cardView,
            columns: [
                {field: 'name', title: 'Option Event', width: 100, sortable: true},
                {field: 'event', title: 'jQuery Event', width: 100, sortable: true},
                {field: 'parameter', title: 'Parameter', width: 100, sortable: true},
                {field: 'description', title: 'Description', align: 'left', width: 400, sortable: true}
            ],
            data: [
                {
                    name: 'onAll',
                    event: 'all.bs.table',
                    parameter: 'name, args',
                    description: 'Fires when all events trigger, the parameters contains: <br>name: the event name, <br>args: the event data.'
                },
                {
                    name: 'onClickRow',
                    event: 'click-row.bs.table',
                    parameter: 'row, $element',
                    description: 'Fires when user click a row, the parameters contains: <br>row: the record corresponding to the clicked row, <br>$element: the tr element.'
                },
                {
                    name: 'onDblClickRow',
                    event: 'dbl-click-row.bs.table',
                    parameter: 'row, $element',
                    description: 'Fires when user click a row, the parameters contains: <br>row: the record corresponding to the clicked row, <br>$element: the tr element.'
                },
                {
                    name: 'onSort',
                    event: 'sort.bs.table',
                    parameter: 'name, order',
                    description: 'Fires when user sort a column, the parameters contains: <br>name: the sort column field name<br>order: the sort column order.'
                },
                {
                    name: 'onCheck',
                    event: 'check.bs.table',
                    parameter: 'row',
                    description: 'Fires when user check a row, the parameters contains: <br>row: the record corresponding to the clicked row.'
                },
                {
                    name: 'onUncheck',
                    event: 'uncheck.bs.table',
                    parameter: 'row',
                    description: 'Fires when user uncheck a row, the parameters contains: <br>row: the record corresponding to the clicked row.'
                },
                {
                    name: 'onCheckAll',
                    event: 'check-all.bs.table',
                    parameter: 'none',
                    description: 'Fires when user check all rows.'
                },
                {
                    name: 'onUncheckAll',
                    event: 'uncheck-all.bs.table',
                    parameter: 'none',
                    description: 'Fires when user uncheck all rows.'
                },
                {
                    name: 'onLoadSuccess',
                    event: 'load-success.bs.table',
                    parameter: 'data',
                    description: 'Fires when remote data is loaded successfully.'
                },
                {
                    name: 'onLoadError',
                    event: 'load-error.bs.table',
                    parameter: 'status',
                    description: 'Fires when some errors occur to load remote data.'
                },
                {
                    name: 'onColumnSwitch',
                    event: 'column-switch.bs.table',
                    parameter: 'field, checked',
                    description: 'Fires when switch the column visible.'
                }
            ],
            onClickRow: function (row) {
                console.log('onClickRow', row);
            },
            onSort: function (name, order) {
                console.log('onSort', name, order);
            },
            onCheck: function(row) {
                console.log('onCheck', row);
            },
            onUncheck: function(row) {
                console.log('onUncheck', row);
            },
            onCheckAll: function() {
                console.log('onCheckAll');
            },
            onUncheckAll: function() {
                console.log('onUncheckAll');
            }
        });
        $('#method').bootstrapTable({
            cardView: cardView,
            columns: [
                {field: 'name', title: 'Name', width: 100},
                {field: 'parameter', title: 'Parameter', width: 100},
                {field: 'description', title: 'Description', align: 'left', width: 400}
            ]
        }).bootstrapTable('load', [
                {name: 'getSelections', parameter: 'none', description: 'Return all selected rows, when no record selected, am empty array will return.'},
                {name: 'getData', parameter: 'none', description: 'Get the loaded data of table.'},
                {name: 'load', parameter: 'data', description: 'Load the data to table, the old rows will be removed.'}
            ]).bootstrapTable('append', [
                {name: 'append', parameter: 'data', description: 'Append the data to table.'},
                {name: 'remove', parameter: 'params', description: 'Remove data from table, the params contains two properties: <br>field: the field name of remove rows. <br>values: the values of remove rows.'},
                {name: 'updateRow', parameter: 'params', description: 'Update the specified row, the param contains following properties: <br>index: the row index to be updated. <br>row: the new row data.'},
                {name: 'mergeCells', parameter: 'options', description: 'Merge some cells to one cell, the options contains following properties:'},
                {name: 'mergeCells', parameter: 'options', description: 'index: the row index.'},
                {name: 'mergeCells', parameter: 'options', description: 'field: the field name.'},
                {name: 'mergeCells', parameter: 'options', description: 'rowspan: the rowspan count to be merged.'},
                {name: 'mergeCells', parameter: 'options', description: 'colspan: the colspan count to be merged.'},
                {name: 'refresh', parameter: 'params', description: 'Refresh the remote server data, you can set <code>{silent: true}</code> to refresh the data silently, and set <code>{url: newUrl}</code> to change the url.'},
                {name: 'showLoading', parameter: 'none', description: 'Show loading status.'},
                {name: 'hideLoading', parameter: 'none', description: 'Hide loading status.'},
                {name: 'checkAll', parameter: 'none', description: 'Check all current page rows.'},
                {name: 'uncheckAll', parameter: 'none', description: 'Uncheck all current page rows.'},
                {name: 'resetView', parameter: 'params', description: 'Reset the bootstrap table view, for example reset the table height.'},
                {name: 'destroy', parameter: 'none', description: 'Destroy the bootstrap table.'},
                {name: 'showColumn', parameter: 'field', description: 'Show the specified column.'},
                {name: 'hideColumn', parameter: 'field', description: 'Hide the specified column.'}
            ]).bootstrapTable('mergeCells', {
                index: 6,
                field: 'name',
                rowspan: 5
            }).bootstrapTable('mergeCells', {
                index: 6,
                field: 'parameter',
                rowspan: 5
            });

        $('#localization').bootstrapTable({
            cardView: cardView,
            columns: [
                {field: 'name', title: 'Name', width: 100},
                {field: 'parameter', title: 'Parameter', width: 100},
                {field: 'default', title: 'Default', width: 200}
            ],
            data: [{
                name: 'formatLoadingMessage',
                parameter: '-',
                'default': 'Loading, please wait…'
            }, {
                name: 'formatRecordsPerPage',
                parameter: 'pageNumber',
                'default': '%s records per page'
            }, {
                name: 'formatShowingRows',
                parameter: 'pageFrom, pageTo, totalRows',
                'default': 'Showing %s to %s of %s rows'
            }, {
                name: 'formatSearch',
                parameter: '-',
                'default': 'Search'
            }, {
                name: 'formatNoMatches',
                parameter: '-',
                'default': 'No matching records found'
            }, {
                name: 'formatRefresh',
                parameter: '-',
                'default': 'Refresh'
            }, {
                name: 'formatToggle',
                parameter: '-',
                'default': 'Toggle'
            }, {
                name: 'formatColumns',
                parameter: '-',
                'default': 'Columns'
            }]
        });

        $('[title]').tooltip();
    }

    $(window).on('resize', initTables);
    initTables();
});
