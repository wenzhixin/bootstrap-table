$(function() {
    'use strict';

    $('.bs-example').each(function () {
        var source = $('<div></div>').text($(this).html()).html(),
            sources = source.split('\n'),
            codes = [],
            spaces = 0;

        try {
            $.each(sources, function (i, text) {
                if (!$.trim(text)) {
                    i > 0  && codes.push('');
                    return;
                }
                if (!spaces) {
                    spaces = text.match(/(^\s+)/)[1].length;
                }
                codes.push(text.substring(spaces));
            });
            $(this).next().find('code').html(codes.join('\n'));
        } catch (e) {
            $(this).next().remove();
        }
    });
    $('#i18n').change(function () {
        $.getScript('../src/locale/bootstrap-table-' + $(this).val() + '.js', function() {
            $('#table-pagination').bootstrapTable('destroy').bootstrapTable();
        });
    });
    $('.start-example').click(function () {
        var $parent = $(this).hide().parent();
        $parent.next('.bs-example').add($parent.next().next('.bs-example'))
            .find('table').bootstrapTable('destroy').bootstrapTable();
    });

    $(window).resize(function () {
        $('table[data-toggle="table"]').add($('table[id]')).bootstrapTable('resetView');
    });
});

function buildTable($el, cells, rows) {
    var i, j, row,
        columns = [],
        data = [];

    for (i = 0; i < cells; i++) {
        columns.push({
            field: 'field' + i,
            title: 'Cell' + i
        });
    }
    for (i = 0; i < rows; i++) {
        row = {};
        for (j = 0; j < cells; j++) {
            row['field' + j] = 'Row-' + i + '-' + j;
        }
        data.push(row);
    }
    $el.bootstrapTable('destroy').bootstrapTable({
        columns: columns,
        data: data
    });
}