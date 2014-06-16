$(function () {
    $('#table').bootstrapTable({
        columns: [
            {field: 'name', title: 'Name', align: 'center', width: 60, sortable: true},
            {field: 'type', title: 'Type', align: 'center', width: 60},
            {field: 'description', title: 'Description', width: 400},
            {field: 'default', title: 'Default', align: 'right', width: 180}
        ],
        data: [
            {
                name: 'classes',
                type: 'String',
                description: 'The class name of table.',
                'default': 'table table-hover'
            },
            {
                name: 'height',
                type: 'Number',
                description: 'The height of table.',
                'default': 'undefined'
            },
            {
                name: 'undefinedText',
                type: 'String',
                description: 'Defines the default undefined text.',
                'default': '-'
            },
            {
                name: 'striped',
                type: 'Boolean',
                description: 'True to stripe the rows.',
                'default': 'false'
            },
            {
                name: 'sortName',
                type: 'String',
                description: 'Defines which column can be sorted.',
                'default': 'undefined'
            },
            {
                name: 'sortOrder',
                type: 'String',
                description: 'Defines the column sort order, can only be "asc" or "desc".',
                'default': 'asc'
            },
            {
                name: 'columns',
                type: 'Array',
                description: 'The table columns config object, see column properties for more details.',
                'default': '[]'
            },
            {
                name: 'data',
                type: 'Array',
                description: 'The data to be loaded.',
                'default': '[]'
            },
            {
                name: 'method',
                type: 'String',
                description: 'The method type to request remote data.',
                'default': 'get'
            },
            {
                name: 'url',
                type: 'String',
                description: 'A URL to request data from remote site.',
                'default': 'undefined'
            },
            {
                name: 'queryParams',
                type: 'Object',
                description: 'When request remote data, sending additional parameters also.',
                'default': '{}'
            },
            {
                name: 'pagination',
                type: 'Boolean',
                description: 'True to show a pagination toolbar on datagrid bottom.',
                'default': 'false'
            },
            {
                name: 'sidePagination',
                type: 'String',
                description: 'Defines the side pagination of table, can only be "client" or "server".',
                'default': 'client'
            },
            {
                name: 'totalRows',
                type: 'Number',
                description: 'Defines the total rows of table, you need to set this option when the sidePagination option is set to "server".',
                'default': 0
            },
            {
                name: 'pageNumber',
                type: 'Number',
                description: 'When set pagination property, initialize the page number.',
                'default': 1
            },
            {
                name: 'pageSize',
                type: 'Number',
                description: 'When set pagination property, initialize the page size.',
                'default': 10
            },
            {
                name: 'pageList',
                type: 'Array',
                description: 'When set pagination property, initialize the page size selecting list.',
                'default': '[10, 20, 30, 40, 50]'
            }
        ]
    });
    $('#column').bootstrapTable({
        columns: [
            {field: 'name', title: 'Name', align: 'center', valign: 'middle', width: 60, sortable: true},
            {field: 'type', title: 'Type', align: 'center', valign: 'middle', width: 60},
            {field: 'description', title: 'Description', width: 400},
            {field: 'default', title: 'Default', align: 'right', valign: 'middle', width: 180}
        ],
        data: [
            {
                name: 'radio',
                type: 'Boolean',
                description: 'True to show a radio. The radio column has fixed width.',
                'default': 'false'
            },
            {
                name: 'checkbox',
                type: 'Boolean',
                description: 'True to show a checkbox. The checkbox column has fixed width.',
                'default': 'false'
            },
            {
                name: 'field',
                type: 'String',
                description: 'The column field name.',
                'default': 'undefined'
            },
            {
                name: 'title',
                type: 'String',
                description: 'The column title text.',
                'default': 'undefined'
            },
            {
                name: 'align',
                type: 'String',
                description: 'Indicate how to align the column data. "left", "right", "center" can be used.',
                'default': 'undefined'},
            {
                name: 'valign',
                type: 'String',
                description: 'Indicate how to align the cell data. "top", "middle", "bottom" can be used.',
                'default': 'undefined'
            },
            {
                name: 'width',
                type: 'Number',
                description: 'The width of column. If not defined, the width will auto expand to fit its contents.',
                'default': 'undefined'},
            {
                name: 'sortable',
                type: 'Boolean',
                description: 'True to allow the column can be sorted.',
                'default': 'false'
            },
            {
                name: 'order',
                type: 'String',
                description: 'The default sort order, can only be "asc" or "desc".',
                'default': 'asc'
            },
            {
                name: 'formatter',
                type: 'Function',
                description: 'The cell formatter function, take two parameters: <br />value: the field value. <br />row: the row record data.',
                'default': 'undefined'
            },
            {
                name: 'sorter',
                type: 'Function',
                description: 'The custom field sort function that used to do local sorting, take two parameters: <br />a: the first field value.<br /> b: the second field value.',
                'default': 'undefined'
            }
        ]
    });
    $('#event').bootstrapTable({
        columns: [
            {field: 'name', title: 'Name', align: 'center', valign: 'middle', width: 100, sortable: true},
            {field: 'parameter', title: 'Parameter', align: 'center', valign: 'middle', width: 100, sortable: true},
            {field: 'description', title: 'Description', width: 400, sortable: true}
        ],
        data: [
            {
                name: 'onClickRow',
                parameter: 'row',
                description: 'Fires when user click a row, the parameters contains: <br />row: the record corresponding to the clicked row.'},
            {
                name: 'onSort',
                parameter: 'name, order',
                description: 'Fires when user sort a column, the parameters contains: <br />name: the sort column field name<br />order: the sort column order.'
            },
            {
                name: 'onCheck',
                parameter: 'row',
                description: 'Fires when user check a row, the parameters contains: <br />row: the record corresponding to the clicked row.'
            },
            {
                name: 'onUncheck',
                parameter: 'row',
                description: 'Fires when user uncheck a row, the parameters contains: <br />row: the record corresponding to the clicked row.'
            },
            {
                name: 'onCheckAll',
                parameter: 'rows',
                description: 'Fires when user check all rows.'
            },
            {
                name: 'onUncheckAll',
                parameter: 'rows',
                description: 'Fires when user uncheck all rows.'
            }
        ],
        onClickRow: function (row) {
            console.log(row);
        },
        onSort: function (name, order) {
            console.log(name, order);
        },
        onCheck: function(row) {
            console.log(row);
        },
        onUncheck: function(row) {
            console.log(row);
        },
        onCheckAll: function(rows) {
            console.log(rows);
        },
        onUncheckAll: function(rows) {
            console.log(rows);
        }
    });
    $('#method').bootstrapTable({
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
            {name: 'checkAll', parameter: 'none', description: 'Check all current page rows.'},
            {name: 'uncheckAll', parameter: 'none', description: 'Uncheck all current page rows.'},
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

    var $window = $(window);
    var $body = $(document.body);

    var navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
        target: '.bs-sidebar',
        offset: navHeight
    });

    $window.on('load', function () {
        $body.scrollspy('refresh')
    });

    // affix
    setTimeout(function () {
        var $sideBar = $('.bs-sidebar');

        $sideBar.affix({
            offset: {
                top: function () {
                    var offsetTop = $sideBar.offset().top;
                    var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10);
                    var navOuterHeight = $('.bs-docs-nav').height();

                    return (this.top = offsetTop - navOuterHeight - sideBarMargin);
                },
                bottom: function () {
                    return (this.bottom = $('.bs-footer').outerHeight(true));
                }
            }
        });
    }, 100)
});