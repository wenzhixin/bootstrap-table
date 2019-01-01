/**
 * Bootstrap Table Thai translation
 * Author: Monchai S.<monchais@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['th-TH'] = {
    formatLoadingMessage () {
      return 'กำลังโหลดข้อมูล, กรุณารอสักครู่...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} รายการต่อหน้า`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `รายการที่ ${pageFrom} ถึง ${pageTo} จากทั้งหมด ${totalRows} รายการ`
    },
    formatSearch () {
      return 'ค้นหา'
    },
    formatNoMatches () {
      return 'ไม่พบรายการที่ค้นหา !'
    },
    formatRefresh () {
      return 'รีเฟรส'
    },
    formatToggle () {
      return 'สลับมุมมอง'
    },
    formatColumns () {
      return 'คอลัมน์'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH'])
})(jQuery)
