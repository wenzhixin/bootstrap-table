/**
 * Bootstrap Table English translation
 * Author: Mikhail Kalatchev <kalatchev[at]gmail.com>
 */

$.fn.bootstrapTable.locales['bg-BG'] = {
  formatLoadingMessage () {
    return 'Зареждане, моля изчакайте'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} реда на страница`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Показани редове от ${pageFrom} до ${pageTo} от ${totalRows} реда (филтрирани от общо ${totalNotFiltered} реда)`
    }

    return `Показани редове от ${pageFrom} до ${pageTo} от общо ${totalRows} реда`
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
  formatToggle () {
    return 'Превключване'
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
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['bg-BG'])
