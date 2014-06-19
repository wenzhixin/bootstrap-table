/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        formatRecordsPerPage: function(pageNumber) {
            return '每页 ' + pageNumber + ' 条记录';
        },
        formatShowingRows: function(pageFrom, pageTo, totalRows) {
            return '显示第 ' + pageFrom + ' 到第 ' + pageTo + ' 条记录，总共 ' + totalRows + ' 条记录';
        },
        formatSearch: function() {
            return '搜索';
        }
    });
})(jQuery);