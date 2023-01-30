/**
 * Bootstrap Table Bulgarian translation
 * Author: Mikhail Kalatchev <kalatchev[at]gmail.com>
 */

$.fn.bootstrapTable.locales['bg-BG'] = $.fn.bootstrapTable.locales['bg'] = {
  formatCopyRows () {
    return 'Копиране на редове'
  },
  formatPrint () {
    return 'Печат'
  },
  formatLoadingMessage () {
    return 'Зареждане, моля изчакайте'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} реда на страница`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Показани редове от ${pageFrom} до ${pageTo} от ${totalRows} (филтрирани от общо ${totalNotFiltered})`
    }

    return `Показани редове от ${pageFrom} до ${pageTo} от общо ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'предишна страница'
  },
  formatSRPaginationPageText (page) {
    return `до страница ${page}`
  },
  formatSRPaginationNextText () {
    return 'следваща страница'
  },
  formatDetailPagination (totalRows) {
    return `Показани ${totalRows} реда`
  },
  formatClearSearch () {
    return 'Изчистване на търсенето'
  },
  formatSearch () {
    return 'Търсене'
  },
  formatNoMatches () {
    return 'Не са намерени съвпадащи записи'
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
  formatRefresh () {
    return 'Обновяване'
  },
  formatToggleOn () {
    return 'Показване на изглед карта'
  },
  formatToggleOff () {
    return 'Скриване на изглед карта'
  },
  formatColumns () {
    return 'Колони'
  },
  formatColumnsToggleAll () {
    return 'Превключване на всички'
  },
  formatFullscreen () {
    return 'Цял екран'
  },
  formatAllRows () {
    return 'Всички'
  },
  formatAutoRefresh () {
    return 'Автоматично обновяване'
  },
  formatExport () {
    return 'Експорт на данни'
  },
  formatJumpTo () {
    return 'ОТИДИ'
  },
  formatAdvancedSearch () {
    return 'Разширено търсене'
  },
  formatAdvancedCloseButton () {
    return 'Затваряне'
  },
  formatFilterControlSwitch () {
    return 'Скрива/показва контроли'
  },
  formatFilterControlSwitchHide () {
    return 'Скрива контроли'
  },
  formatFilterControlSwitchShow () {
    return 'Показва контроли'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['bg-BG'])
