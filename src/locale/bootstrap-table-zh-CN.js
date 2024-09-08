/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.bootstrapTable.locales['zh-CN'] = $.fn.bootstrapTable.locales['zh'] = {
  formatAddLevel () {
    return '增加层级'
  },

  formatAdvancedCloseButton () {
    return '关闭'
  },

  formatAdvancedSearch () {
    return '高级搜索'
  },

  formatAllRows () {
    return '所有'
  },

  formatAutoRefresh () {
    return '自动刷新'
  },

  formatCancel () {
    return '取消'
  },

  formatClearSearch () {
    return '清空过滤'
  },

  formatColumn () {
    return '列'
  },

  formatColumns () {
    return '列'
  },

  formatColumnsToggleAll () {
    return '切换所有'
  },

  formatCopyRows () {
    return '复制行'
  },

  formatDeleteLevel () {
    return '删除层级'
  },

  formatDetailPagination (totalRows) {
    return `总共 ${totalRows} 条记录`
  },

  formatDuplicateAlertDescription () {
    return '请删除或修改重复的列。'
  },

  formatDuplicateAlertTitle () {
    return '检测到重复项！'
  },

  formatExport () {
    return '导出数据'
  },

  formatFilterControlSwitch () {
    return '隐藏/显示过滤控制'
  },

  formatFilterControlSwitchHide () {
    return '隐藏过滤控制'
  },

  formatFilterControlSwitchShow () {
    return '显示过滤控制'
  },

  formatFullscreen () {
    return '全屏'
  },

  formatJumpTo () {
    return '跳转'
  },

  formatLoadingMessage () {
    return '正在努力地加载数据中，请稍候'
  },

  formatMultipleSort () {
    return '多重排序'
  },

  formatNoMatches () {
    return '没有找到匹配的记录'
  },

  formatOrder () {
    return '排序'
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

  formatPrint () {
    return '打印'
  },

  formatRecordsPerPage (pageNumber) {
    return `每页显示 ${pageNumber} 条记录`
  },

  formatRefresh () {
    return '刷新'
  },

  formatSRPaginationNextText () {
    return '下一页'
  },

  formatSRPaginationPageText (page) {
    return `第${page}页`
  },

  formatSRPaginationPreText () {
    return '上一页'
  },

  formatSearch () {
    return '搜索'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `显示第 ${pageFrom} 到第 ${pageTo} 条记录，总共 ${totalRows} 条记录（从 ${totalNotFiltered} 总记录中过滤）`
    }

    return `显示第 ${pageFrom} 到第 ${pageTo} 条记录，总共 ${totalRows} 条记录`
  },

  formatSort () {
    return '排序'
  },

  formatSortBy () {
    return '排序依据'
  },

  formatSortOrders () {
    return {
      asc: '升序',
      desc: '降序'
    }
  },

  formatThenBy () {
    return '然后按'
  },

  formatToggleCustomViewOff () {
    return '隐藏自定义视图'
  },

  formatToggleCustomViewOn () {
    return '显示自定义视图'
  },

  formatToggleOff () {
    return '隐藏卡片视图'
  },

  formatToggleOn () {
    return '显示卡片视图'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN'])
