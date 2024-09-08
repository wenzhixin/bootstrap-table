/**
 * Bootstrap Table Serbian Cyrilic RS translation
 * Author: Vladimir Kanazir (vladimir@kanazir.com)
 */

$.fn.bootstrapTable.locales['sr-Cyrl-RS'] = $.fn.bootstrapTable.locales['sr'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Затвори'
  },

  formatAdvancedSearch () {
    return 'Напредна претрага'
  },

  formatAllRows () {
    return 'Све'
  },

  formatAutoRefresh () {
    return 'Аутоматско освежавање'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Обриши претрагу'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Колоне'
  },

  formatColumnsToggleAll () {
    return 'Прикажи/сакриј све'
  },

  formatCopyRows () {
    return 'Copy Rows'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Приказано ${totalRows} редова`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Извези податке'
  },

  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },

  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },

  formatFilterControlSwitchShow () {
    return 'Show controls'
  },

  formatFullscreen () {
    return 'Цео екран'
  },

  formatJumpTo () {
    return 'Иди'
  },

  formatLoadingMessage () {
    return 'Молим сачекај'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Није пронађен ни један податак'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Прикажи/сакриј пагинацију'
  },

  formatPaginationSwitchDown () {
    return 'Прикажи пагинацију'
  },

  formatPaginationSwitchUp () {
    return 'Сакриј пагинацију'
  },

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} редова по страни`
  },

  formatRefresh () {
    return 'Освежи'
  },

  formatSRPaginationNextText () {
    return 'следећа страна'
  },

  formatSRPaginationPageText (page) {
    return `на страну ${page}`
  },

  formatSRPaginationPreText () {
    return 'претходна страна'
  },

  formatSearch () {
    return 'Пронађи'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Приказано ${pageFrom}. - ${pageTo}. од укупног броја редова ${totalRows} (филтрирано од ${totalNotFiltered})`
    }

    return `Приказано ${pageFrom}. - ${pageTo}. од укупног броја редова ${totalRows}`
  },

  formatSort () {
    return 'Sort'
  },

  formatSortBy () {
    return 'Sort by'
  },

  formatSortOrders () {
    return {
      asc: 'Ascending',
      desc: 'Descending'
    }
  },

  formatThenBy () {
    return 'Then by'
  },

  formatToggleCustomViewOff () {
    return 'Hide custom view'
  },

  formatToggleCustomViewOn () {
    return 'Show custom view'
  },

  formatToggleOff () {
    return 'Сакриј картице'
  },

  formatToggleOn () {
    return 'Прикажи картице'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Cyrl-RS'])
