$(function () {
    'use strict';

    function initTables() {
        var cardView = false;

        if ($(window).width() < 640) {
            cardView = true;
        }

        $('#table, #column, #event, #method, #localization').bootstrapTable('destroy');

        $('#table').bootstrapTable({
            cardView: cardView,
            columns: [
                {field: 'name', title: 'Name', align: 'center', valign: 'middle', sortable: true},
                {field: 'attribute', title: 'Attribute', align: 'center', valign: 'middle'},
                {field: 'type', title: 'Type', align: 'center', valign: 'middle'},
                {field: 'description', title: 'Description', valign: 'middle'},
                {field: 'default', title: 'Default', valign: 'middle'},
                {field: 'example', title: '', valign: 'middle', formatter: function (value) {
                    if (!value) {
                        return '-';
                    }
                    return [
                        '<a title="Example" href="examples.html#' + value + '">',
                        '<i class="glyphicon glyphicon-eye-open"></i>',
                        '</a>'].join('');
                }}
            ],
            data: [
                {
                    name: '-',
                    attribute: 'data-toggle',
                    type: 'String',
                    description: 'Activate bootstrap table without writing JavaScript.',
                    'default': 'table',
                    example: 'basic-table'
                },
                {
                    name: 'classes',
                    attribute: 'data-classes',
                    type: 'String',
                    description: 'The class name of table.',
                    'default': 'table table-hover',
                    example: 'classes-table'
                },
                {
                    name: 'height',
                    attribute: 'data-height',
                    type: 'Number',
                    description: 'The height of table.',
                    'default': 'undefined',
                    example: 'basic-table'
                },
                {
                    name: 'undefinedText',
                    attribute: 'data-undefined-text',
                    type: 'String',
                    description: 'Defines the default undefined text.',
                    'default': '-',
                    example: ''
                },
                {
                    name: 'striped',
                    attribute: 'data-striped',
                    type: 'Boolean',
                    description: 'True to stripe the rows.',
                    'default': 'false',
                    example: 'classes-table'
                },
                {
                    name: 'sortName',
                    attribute: 'data-sort-name',
                    type: 'String',
                    description: 'Defines which column can be sorted.',
                    'default': 'undefined',
                    example: 'sort-table'
                },
                {
                    name: 'sortOrder',
                    attribute: 'data-sort-order',
                    type: 'String',
                    description: 'Defines the column sort order, can only be "asc" or "desc".',
                    'default': 'asc',
                    example: 'sort-table'
                },
                {
                    name: 'columns',
                    attribute: '-',
                    type: 'Array',
                    description: 'The table columns config object, see column properties for more details.',
                    'default': '[]',
                    example: 'via-javascript-table'
                },
                {
                    name: 'data',
                    attribute: '-',
                    type: 'Array',
                    description: 'The data to be loaded.',
                    'default': '[]',
                    example: 'table-methods'
                },
                {
                    name: 'method',
                    attribute: 'data-method',
                    type: 'String',
                    description: 'The method type to request remote data.',
                    'default': 'get',
                    example: 'basic-table'
                },
                {
                    name: 'url',
                    attribute: 'data-url',
                    type: 'String',
                    description: 'A URL to request data from remote site.',
                    'default': 'undefined',
                    example: 'basic-table'
                },
                {
                    name: 'contentType',
                    attribute: 'data-content-type',
                    type: 'String',
                    description: 'The contentType of request remote data.',
                    'default': 'application/json',
                    example: ''
                },
                {
                    name: 'queryParams',
                    attribute: 'data-query-params',
                    type: 'Function',
                    description: 'When request remote data, sending additional parameters by format the queryParams, the parameters object contains: <br>pageSize, pageNumber, searchText, sortName, sortOrder.',
                    'default': 'function(params) {<br>return {};<br>}',
                    example: 'server-side-pagination-table'
                },
                {
                    name: 'responseHandler',
                    attribute: 'data-response-handler',
                    type: 'Function',
                    description: 'Before load remote data, handler the response data format, the parameters object contains: <br>res: the response data.',
                    'default': 'function(res) {<br>return res;<br>}',
                    example: 'card-view'
                },
                {
                    name: 'pagination',
                    attribute: 'data-pagination',
                    type: 'Boolean',
                    description: 'True to show a pagination toolbar on datagrid bottom.',
                    'default': 'false',
                    example: 'pagination-table'
                },
                {
                    name: 'sidePagination',
                    attribute: 'data-side-pagination',
                    type: 'String',
                    description: 'Defines the side pagination of table, can only be "client" or "server".',
                    'default': 'client',
                    example: 'pagination-table'
                },
                {
                    name: 'totalRows',
                    attribute: 'data-total-rows',
                    type: 'Number',
                    description: 'Defines the total rows of table, you need to set this option when the sidePagination option is set to "server".',
                    'default': 0,
                    example: ''
                },
                {
                    name: 'pageNumber',
                    attribute: 'data-page-number',
                    type: 'Number',
                    description: 'When set pagination property, initialize the page number.',
                    'default': 1,
                    example: 'via-javascript-table'
                },
                {
                    name: 'pageSize',
                    attribute: 'data-page-size',
                    type: 'Number',
                    description: 'When set pagination property, initialize the page size.',
                    'default': 10,
                    example: 'via-javascript-table'
                },
                {
                    name: 'pageList',
                    attribute: 'data-page-list',
                    type: 'Array',
                    description: 'When set pagination property, initialize the page size selecting list.',
                    'default': '[10, 25, 50, 100]',
                    example: 'via-javascript-table'
                },
                {
                    name: 'search',
                    attribute: 'data-search',
                    type: 'Boolean',
                    description: 'Enable the search input.',
                    'default': 'false',
                    example: 'pagination-table'
                },
                {
                    name: 'selectItemName',
                    attribute: 'data-select-item-name',
                    type: 'String',
                    description: 'The name of radio or checkbox input.',
                    'default': 'btSelectItem',
                    example: 'radio-table'
                },
                {
                    name: 'showHeader',
                    attribute: 'data-show-header',
                    type: 'Boolean',
                    description: 'False to hide the table header.',
                    'default': 'true',
                    example: 'hide-header-table'
                },
                {
                    name: 'showColumns',
                    attribute: 'data-show-columns',
                    type: 'Boolean',
                    description: 'True to show the columns drop down list.',
                    'default': 'false',
                    example: 'show-columns-table'
                },
                {
                    name: 'minimunCountColumns',
                    attribute: 'data-minimun-count-columns',
                    type: 'Number',
                    description: 'The minimun count columns to hide of the columns drop down list.',
                    'default': '1',
                    example: 'via-javascript-table'
                },
                {
                    name: 'idField',
                    attribute: 'data-id-field',
                    type: 'String',
                    description: 'Indicate which field is an identity field.',
                    'default': 'undefined',
                    example: ''
                },
                {
                    name: 'cardView',
                    attribute: 'data-card-view',
                    type: 'Boolean',
                    description: 'True to show card view table, for example mobile view.',
                    'default': 'false',
                    example: 'card-view'
                },
                {
                    name: 'clickToSelect',
                    attribute: 'data-click-to-select',
                    type: 'Boolean',
                    description: 'True to select checkbox or radiobox when click rows.',
                    'default': 'false',
                    example: 'table-select'
                },
                {
                    name: 'singleSelect',
                    attribute: 'data-single-select',
                    type: 'Boolean',
                    description: 'True to allow checkbox selecting only one row.',
                    'default': 'false',
                    example: 'single-checkbox-table'
                },
                {
                    name: 'toolbar',
                    attribute: 'data-toolbar',
                    type: 'String',
                    description: 'A jQuery selector that indicate the toolbar, for example: <br>#toolbar, .toolbar.',
                    'default': 'undefined',
                    example: 'transform-table'
                },
                {
                    name: 'rowStyle',
                    attribute: 'data-row-style',
                    type: 'Function',
                    description: 'The row formatter function, take two parameters: <br>row: the row record data.<br>index: the row index.<br>Support classes or css.',
                    'default': '{}',
                    example: 'classes-table'
                }
            ]
        });
        $('#column').bootstrapTable({
            cardView: cardView,
            columns: [
                {field: 'name', title: 'Name', align: 'center', valign: 'middle', width: 60, sortable: true},
                {field: 'attribute', title: 'Attribute', align: 'center', valign: 'middle'},
                {field: 'type', title: 'Type', align: 'center', valign: 'middle', width: 60},
                {field: 'description', title: 'Description', valign: 'middle', width: 400},
                {field: 'default', title: 'Default', align: 'right', valign: 'middle', width: 180},
                {field: 'example', title: '', valign: 'middle', formatter: function (value) {
                    if (!value) {
                        return '-';
                    }
                    return [
                        '<a title="Example" href="examples.html#' + value + '">',
                        '<i class="glyphicon glyphicon-eye-open"></i>',
                        '</a>'].join('');
                }}
            ],
            data: [
                {
                    name: 'radio',
                    attribute: 'data-radio',
                    type: 'Boolean',
                    description: 'True to show a radio. The radio column has fixed width.',
                    'default': 'false',
                    example: 'radio-table'
                },
                {
                    name: 'checkbox',
                    attribute: 'data-checkbox',
                    type: 'Boolean',
                    description: 'True to show a checkbox. The checkbox column has fixed width.',
                    'default': 'false',
                    example: 'checkbox-table'
                },
                {
                    name: 'field',
                    attribute: 'data-field',
                    type: 'String',
                    description: 'The column field name.',
                    'default': 'undefined',
                    example: 'via-javascript-table'
                },
                {
                    name: 'title',
                    attribute: 'data-title',
                    type: 'String',
                    description: 'The column title text.',
                    'default': 'undefined',
                    example: 'via-javascript-table'
                },
                {
                    name: 'class',
                    attribute: 'class / data-class',
                    type: 'String',
                    description: 'The column class name.',
                    'default': 'undefined',
                    example: 'classes-table'
                },
                {
                    name: 'align',
                    attribute: 'data-align',
                    type: 'String',
                    description: 'Indicate how to align the column data. "left", "right", "center" can be used.',
                    'default': 'undefined',
                    example: 'via-javascript-table'
                },
                {
                    name: 'valign',
                    attribute: 'data-valign',
                    type: 'String',
                    description: 'Indicate how to align the cell data. "top", "middle", "bottom" can be used.',
                    'default': 'undefined',
                    example: 'via-javascript-table'
                },
                {
                    name: 'width',
                    attribute: 'data-width',
                    type: 'Number',
                    description: 'The width of column. If not defined, the width will auto expand to fit its contents.',
                    'default': 'undefined',
                    example: ''
                },
                {
                    name: 'sortable',
                    attribute: 'data-sortable',
                    type: 'Boolean',
                    description: 'True to allow the column can be sorted.',
                    'default': 'false',
                    example: 'sort-table'
                },
                {
                    name: 'order',
                    attribute: 'data-order',
                    type: 'String',
                    description: 'The default sort order, can only be "asc" or "desc".',
                    'default': 'asc',
                    example: 'sort-table'
                },
                {
                    name: 'visible',
                    attribute: 'data-visible',
                    type: 'Boolean',
                    description: 'True to visible the columns item.',
                    'default': 'true',
                    example: 'show-columns-table'
                },
                {
                    name: 'switchable',
                    attribute: 'data-switchable',
                    type: 'Boolean',
                    description: 'False to disable the switchable of columns item.',
                    'default': 'true',
                    example: 'show-columns-table'
                },
                {
                    name: 'formatter',
                    attribute: 'data-formatter',
                    type: 'Function',
                    description: 'The cell formatter function, take two parameters: <br />value: the field value. <br />row: the row record data.<br />index: the row index.',
                    'default': 'undefined',
                    example: 'format-table'
                },
                {
                    name: 'sorter',
                    attribute: 'data-sorter',
                    type: 'Function',
                    description: 'The custom field sort function that used to do local sorting, take two parameters: <br />a: the first field value.<br /> b: the second field value.',
                    'default': 'undefined',
                    example: 'custom-sort-table'
                }
            ]
        });
        $('#event').bootstrapTable({
            cardView: cardView,
            columns: [
                {field: 'name', title: 'Option Event', align: 'center', valign: 'middle', width: 100, sortable: true},
                {field: 'event', title: 'jQuery Event', align: 'center', valign: 'middle', width: 100, sortable: true},
                {field: 'parameter', title: 'Parameter', align: 'center', valign: 'middle', width: 100, sortable: true},
                {field: 'description', title: 'Description', width: 400, sortable: true}
            ],
            data: [
                {
                    name: 'onAll',
                    event: 'all.bs.table',
                    parameter: 'name, args',
                    description: 'Fires when all events trigger, the parameters contains: <br />name: the event name, <br>args: the event data.'
                },
                {
                    name: 'onClickRow',
                    event: 'click-row.bs.table',
                    parameter: 'row, $element',
                    description: 'Fires when user click a row, the parameters contains: <br />row: the record corresponding to the clicked row, <br>$element: the tr element.'
                },
                {
                    name: 'onDblClickRow',
                    event: 'dbl-click-row.bs.table',
                    parameter: 'row, $element',
                    description: 'Fires when user click a row, the parameters contains: <br />row: the record corresponding to the clicked row, <br>$element: the tr element.'
                },
                {
                    name: 'onSort',
                    event: 'sort.bs.table',
                    parameter: 'name, order',
                    description: 'Fires when user sort a column, the parameters contains: <br />name: the sort column field name<br />order: the sort column order.'
                },
                {
                    name: 'onCheck',
                    event: 'check.bs.table',
                    parameter: 'row',
                    description: 'Fires when user check a row, the parameters contains: <br />row: the record corresponding to the clicked row.'
                },
                {
                    name: 'onUncheck',
                    event: 'uncheck.bs.table',
                    parameter: 'row',
                    description: 'Fires when user uncheck a row, the parameters contains: <br />row: the record corresponding to the clicked row.'
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
                {field: 'name', title: 'Name', align: 'center', valign: 'middle', width: 100},
                {field: 'parameter', title: 'Parameter', align: 'center', valign: 'middle', width: 100},
                {field: 'description', title: 'Description', width: 400}
            ]
        }).bootstrapTable('load', [
                {name: 'getSelections', parameter: 'none', description: 'Return all selected rows, when no record selected, am empty array will return.'},
                {name: 'load', parameter: 'data', description: 'Load the data to table.'}
            ]).bootstrapTable('append', [
                {name: 'append', parameter: 'data', description: 'Append the data to table.'},
                {name: 'mergeCells', parameter: 'options', description: 'Merge some cells to one cell, the options contains following properties:'},
                {name: 'mergeCells', parameter: 'options', description: 'index: the row index.'},
                {name: 'mergeCells', parameter: 'options', description: 'field: the field name.'},
                {name: 'mergeCells', parameter: 'options', description: 'rowspan: the rowspan count to be merged.'},
                {name: 'mergeCells', parameter: 'options', description: 'colspan: the colspan count to be merged.'},
                {name: 'refresh', parameter: 'none', description: 'Refresh the remote server data.'},
                {name: 'showLoading', parameter: 'none', description: 'Show loading status.'},
                {name: 'hideLoading', parameter: 'none', description: 'Hide loading status.'},
                {name: 'checkAll', parameter: 'none', description: 'Check all current page rows.'},
                {name: 'uncheckAll', parameter: 'none', description: 'Uncheck all current page rows.'},
                {name: 'resetView', parameter: 'params', description: 'Reset the bootstrap table view, for example reset the table height.'},
                {name: 'destroy', parameter: 'none', description: 'Destroy the bootstrap table.'}
            ]).bootstrapTable('mergeCells', {
                index: 3,
                field: 'name',
                rowspan: 5
            }).bootstrapTable('mergeCells', {
                index: 3,
                field: 'parameter',
                rowspan: 5
            });

        $('#localization').bootstrapTable({
            cardView: cardView,
            columns: [
                {field: 'name', title: 'Name', align: 'center', valign: 'middle', width: 100},
                {field: 'parameter', title: 'Parameter', align: 'center', valign: 'middle', width: 100},
                {field: 'default', title: 'Default', align: 'center', valign: 'middle', width: 200}
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
            }]
        });

        $('[title]').tooltip();
    }

    $(window).on('resize', initTables);
    initTables();
});