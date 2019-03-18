/**
 * Bootstrap Table Russian translation
 * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
 */
($ => {
  $.fn.bootstrapTable.locales['ru-RU'] = {
    formatLoadingMessage () {
      return 'Пожалуйста, подождите, идёт загрузка'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} записей на страницу`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Записи с ${pageFrom} по ${pageTo} из ${totalRows}`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
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
    formatRefresh () {
      return 'Обновить'
    },
    formatToggle () {
      return 'Переключить'
    },
    formatColumns () {
      return 'Колонки'
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
    formatClearFilters () {
      return 'Очистить фильтры'
    },
    formatJumpto () {
      return 'GO'
    },
    formatAdvancedSearch () {
      return 'Advanced search'
    },
    formatAdvancedCloseButton () {
      return 'Close'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU'])
})(jQuery)
