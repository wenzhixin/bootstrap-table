/**
 * Bootstrap Table Bulgarian translation
 * Author: Mikhail Kalatchev <kalatchev[at]gmail.com>
 */

$.fn.bootstrapTable.locales['bg-BG'] = $.fn.bootstrapTable.locales['bg'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Затваряне'
  },

  formatAdvancedSearch () {
    return 'Разширено търсене'
  },

  formatAllRows () {
    return 'Всички'
  },

  formatAutoRefresh () {
    return 'Автоматично обновяване'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Изчистване на търсенето'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Колони'
  },

  formatColumnsToggleAll () {
    return 'Превключване на всички'
  },

  formatCopyRows () {
    return 'Копиране на редове'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Показани ${totalRows} реда`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Експорт на данни'
  },

  formatFilterControlSwitch () {
    return 'Скрива/показва контроли'
  },

  formatFilterControlSwitchHide () {
    return 'Скрива контроли'
  },

  formatFilterControlSwitchShow () {
    return 'Показва контроли'
  },

  formatFullscreen () {
    return 'Цял екран'
  },

  formatJumpTo () {
    return 'ОТИДИ'
  },

  formatLoadingMessage () {
    return 'Зареждане, моля изчакайте'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Не са намерени съвпадащи записи'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Скриване/Показване на странициране'
  },

  formatPaginationSwitchDown () {
    return 'Показване на странициране'
  },

  formatPaginationSwitchUp () {
    return 'Скриване на странициране'
  },

  formatPrint () {
    return 'Печат'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} реда на страница`
  },

  formatRefresh () {
    return 'Обновяване'
  },

  formatSRPaginationNextText () {
    return 'следваща страница'
  },

  formatSRPaginationPageText (page) {
    return `до страница ${page}`
  },

  formatSRPaginationPreText () {
    return 'предишна страница'
  },

  formatSearch () {
    return 'Търсене'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Показани редове от ${pageFrom} до ${pageTo} от ${totalRows} (филтрирани от общо ${totalNotFiltered})`
    }

    return `Показани редове от ${pageFrom} до ${pageTo} от общо ${totalRows}`
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
    return 'Скриване на изглед карта'
  },

  formatToggleOn () {
    return 'Показване на изглед карта'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['bg-BG'])
