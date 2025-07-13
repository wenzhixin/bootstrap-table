/**
 * Bootstrap Table Russian translation
 * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
 */

$.fn.bootstrapTable.locales['ru-RU'] = $.fn.bootstrapTable.locales['ru'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Закрыть'
  },

  formatAdvancedSearch () {
    return 'Расширенный поиск'
  },

  formatAllRows () {
    return 'Все'
  },

  formatAutoRefresh () {
    return 'Автоматическое обновление'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Очистить фильтры'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Колонки'
  },

  formatColumnsToggleAll () {
    return 'Выбрать все'
  },

  formatCopyRows () {
    return 'Скопировать строки'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Загружено ${totalRows} строк`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Экспортировать данные'
  },

  formatFilterControlSwitch () {
    return 'Скрыть/Показать панель инструментов'
  },

  formatFilterControlSwitchHide () {
    return 'Скрыть панель инструментов'
  },

  formatFilterControlSwitchShow () {
    return 'Показать панель инструментов'
  },

  formatFullscreen () {
    return 'Полноэкранный режим'
  },

  formatJumpTo () {
    return 'Стр.'
  },

  formatLoadingMessage () {
    return 'Пожалуйста, подождите, идёт загрузка'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Ничего не найдено'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Скрыть/Показать постраничную навигацию'
  },

  formatPaginationSwitchDown () {
    return 'Показать постраничную навигацию'
  },

  formatPaginationSwitchUp () {
    return 'Скрыть постраничную навигацию'
  },

  formatPrint () {
    return 'Печать'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} записей на страницу`
  },

  formatRefresh () {
    return 'Обновить'
  },

  formatSRPaginationNextText () {
    return 'следующая страница'
  },

  formatSRPaginationPageText (page) {
    return `перейти к странице ${page}`
  },

  formatSRPaginationPreText () {
    return 'предыдущая страница'
  },

  formatSearch () {
    return 'Поиск'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Записи с ${pageFrom} по ${pageTo} из ${totalRows} (отфильтровано, всего на сервере ${totalNotFiltered} записей)`
    }

    return `Записи с ${pageFrom} по ${pageTo} из ${totalRows}`
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
    return 'Табличный режим просмотра'
  },

  formatToggleOn () {
    return 'Показать записи в виде карточек'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU'])
