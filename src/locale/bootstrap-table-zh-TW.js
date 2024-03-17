/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.bootstrapTable.locales['zh-TW'] = {
  formatCopyRows () {
    return '複製行'
  },
  formatPrint () {
    return '列印'
  },
  formatLoadingMessage () {
    return '正在努力地載入資料，請稍候'
  },
  formatRecordsPerPage (pageNumber) {
    return `每頁顯示 ${pageNumber} 項記錄`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `顯示第 ${pageFrom} 到第 ${pageTo} 項記錄，總共 ${totalRows} 項記錄（從 ${totalNotFiltered} 總記錄中過濾）`
    }

    return `顯示第 ${pageFrom} 到第 ${pageTo} 項記錄，總共 ${totalRows} 項記錄`
  },
  formatSRPaginationPreText () {
    return '上一頁'
  },
  formatSRPaginationPageText (page) {
    return `第${page}頁`
  },
  formatSRPaginationNextText () {
    return '下一頁'
  },
  formatDetailPagination (totalRows) {
    return `總共 ${totalRows} 項記錄`
  },
  formatClearSearch () {
    return '清空過濾'
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
  formatPaginationSwitchDown () {
    return '顯示分頁'
  },
  formatPaginationSwitchUp () {
    return '隱藏分頁'
  },
  formatRefresh () {
    return '重新整理'
  },
  formatToggleOn () {
    return '顯示卡片視圖'
  },
  formatToggleOff () {
    return '隱藏卡片視圖'
  },
  formatColumns () {
    return '列'
  },
  formatColumnsToggleAll () {
    return '切換所有'
  },
  formatFullscreen () {
    return '全屏'
  },
  formatAllRows () {
    return '所有'
  },
  formatAutoRefresh () {
    return '自動刷新'
  },
  formatExport () {
    return '導出數據'
  },
  formatJumpTo () {
    return '跳轉'
  },
  formatAdvancedSearch () {
    return '高級搜尋'
  },
  formatAdvancedCloseButton () {
    return '關閉'
  },
  formatFilterControlSwitch () {
    return '隱藏/顯示過濾控制'
  },
  formatFilterControlSwitchHide () {
    return '隱藏過濾控制'
  },
  formatFilterControlSwitchShow () {
    return '顯示過濾控制'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-TW'])
