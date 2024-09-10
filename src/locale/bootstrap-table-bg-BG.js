/**
 * Bootstrap Table Bulgarian translation
 * Author: Mikhail Kalatchev <kalatchev[at]gmail.com>
 */

$.fn.bootstrapTable.locales['bg-BG'] = $.fn.bootstrapTable.locales['bg'] = {
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

  formatClearSearch () {
    return 'Изчистване на търсенето'
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

  formatDetailPagination (totalRows) {
    return `Показани ${totalRows} реда`
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

  formatPrint () {
    return 'Печат'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} реда на страница`
  },

  formatRefresh () {
    return 'Обновяване'
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

  formatSRPaginationNextText () {
    return 'следваща страница'
  },

  formatSRPaginationPageText (page) {
    return `до страница ${page}`
  },

  formatSRPaginationPreText () {
    return 'предишна страница'
  },

  formatToggleOff () {
    return 'Скриване на изглед карта'
  },

  formatToggleOn () {
    return 'Показване на изглед карта'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['bg-BG'])
