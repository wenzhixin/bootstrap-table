/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.bootstrapTable.locales['zh-CN'] = {
  formatLoadingMessage () {
    return '正在努力地加载数据中，请稍候'
  },
  formatRecordsPerPage (pageNumber) {
    return `每页显示 ${pageNumber} 条记录`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `显示第 ${pageFrom} 到第 ${pageTo} 条记录，总共 ${totalRows} 条记录（从 ${totalNotFiltered} 总记录中过滤）`
    }

    return `显示第 ${pageFrom} 到第 ${pageTo} 条记录，总共 ${totalRows} 条记录`
  },
  formatSRPaginationPreText () {
    return '上一页'
  },
  formatSRPaginationPageText (page) {
    return `第${page}页`
  },
  formatSRPaginationNextText () {
    return '下一页'
  },
  formatDetailPagination (totalRows) {
    return `总共 ${totalRows} 条记录`
  },
  formatClearSearch () {
    return '清空过滤'
  },
  formatSearch () {
    return '搜索'
  },
  formatNoMatches () {
    return '没有找到匹配的记录'
  },
  formatPaginationSwitch () {
    return '隐藏/显示分页'
  },
  formatPaginationSwitchDown () {
    return '显示分页'
  },
  formatPaginationSwitchUp () {
    return '隐藏分页'
  },
  formatRefresh () {
    return '刷新'
  },
  formatToggle () {
    return '切换'
  },
  formatToggleOn () {
    return '显示卡片视图'
  },
  formatToggleOff () {
    return '隐藏卡片视图'
  },
  formatColumns () {
    return '列'
  },
  formatColumnsToggleAll () {
    return '切换所有'
  },
  formatFullscreen () {
    return '全屏'
  },
  formatAllRows () {
    return '所有'
  },
  formatAutoRefresh () {
    return '自动刷新'
  },
  formatExport () {
    return '导出数据'
  },
  formatJumpTo () {
    return '跳转'
  },
  formatAdvancedSearch () {
    return '高级搜索'
  },
  formatAdvancedCloseButton () {
    return '关闭'
  },
  formatFilterControlSwitch () {
    return '隐藏/显示过滤控制'
  },
  formatFilterControlSwitchHide () {
    return '隐藏过滤控制'
  },
  formatFilterControlSwitchShow () {
    return '显示过滤控制'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN'])
