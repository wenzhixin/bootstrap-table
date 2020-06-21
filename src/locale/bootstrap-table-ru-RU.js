/**
 * Bootstrap Table Russian translation
 * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
 */

$.fn.bootstrapTable.locales['ru-RU'] = {
  formatLoadingMessage () {
    return 'Пожалуйста, подождите, идёт загрузка'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} записей на страницу`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Записи с ${pageFrom} по ${pageTo} из ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Записи с ${pageFrom} по ${pageTo} из ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'previous page'
  },
  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },
  formatSRPaginationNextText () {
    return 'next page'
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatClearSearch () {
    return 'Очистить фильтры'
  },
  formatSearch () {
    return 'Поиск'
  },
  formatNoMatches () {
    return 'Ничего не найдено'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Обновить'
  },
  formatToggle () {
    return 'Переключить'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Колонки'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'All'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Export data'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU'])
