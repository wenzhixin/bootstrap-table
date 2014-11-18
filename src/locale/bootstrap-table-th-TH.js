/**
 * Bootstrap Table Thai translation
 * Author: Monchai S.<monchais@gmail.com>
 */
(function ($) 
{
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, 
    {
        formatLoadingMessage: function () 
        {
            return 'กำลังโหลดข้อมูล, กรุณารอสักครู่...';
        },
        formatRecordsPerPage: function (pageNumber) 
        {
            return pageNumber + ' รายการต่อหน้า';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) 
        {
            return 'รายการที่ ' + pageFrom + ' ถึง ' + pageTo + ' จากทั้งหมด ' + totalRows + ' รายการ';
        },
        formatSearch: function () 
        {
            return 'ค้าหา';
        },
        formatNoMatches: function () 
        {
            return 'ไม่พบรายการที่ค้นหา !';
        },
        formatRefresh: function () 
        {
            return 'Refresh';
        },
        formatToggle: function () 
        {
            return 'Toggle';
        },
        formatColumns: function () 
        {
            return 'Columns';
        }
    });
})(jQuery);
