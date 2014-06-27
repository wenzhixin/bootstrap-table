/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        formatLoadingMessage: function() {
            return '正在努力地加載數據中，請稍候……';
        },
        formatRecordsPerPage: function(pageNumber) {
            return '每頁顯示 ' + pageNumber + ' 條記錄';
        },
        formatShowingRows: function(pageFrom, pageTo, totalRows) {
            return '顯示第 ' + pageFrom + ' 到第 ' + pageTo + ' 條記錄，總共 ' + totalRows + ' 條記錄';
        },
        formatSearch: function() {
            return '搜索';
        },
        formatNoMatches: function() {
            return '沒有找到匹配的記錄';
        }
    });
})(jQuery);