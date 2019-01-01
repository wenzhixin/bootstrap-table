/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['zh-TW'] = {
    formatLoadingMessage () {
      return '正在努力地載入資料，請稍候……'
    },
    formatRecordsPerPage (pageNumber) {
      return `每頁顯示 ${pageNumber} 項記錄`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `顯示第 ${pageFrom} 到第 ${pageTo} 項記錄，總共 ${totalRows} 項記錄`
    },
    formatSearch () {
      return '搜尋'
    },
    formatNoMatches () {
      return '沒有找到符合的結果'
    },
    formatPaginationSwitch () {
      return '隱藏/顯示分頁'
    },
    formatRefresh () {
      return '重新整理'
    },
    formatToggle () {
      return '切換'
    },
    formatColumns () {
      return '列'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW'])
})(jQuery)
