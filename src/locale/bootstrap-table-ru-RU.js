/**
 * Bootstrap Table Russian translation
 * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
 */

$.fn.bootstrapTable.locales['ru-RU'] = $.fn.bootstrapTable.locales['ru'] = {
  formatCopyRows () {
    return 'Скопировать строки'
  },
  formatPrint () {
    return 'Печать'
  },
  formatLoadingMessage () {
    return 'Пожалуйста, подождите, идёт загрузка'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} записей на страницу`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Записи с ${pageFrom} по ${pageTo} из ${totalRows} (отфильтровано, всего на сервере ${totalNotFiltered} записей)`
    }

    return `Записи с ${pageFrom} по ${pageTo} из ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'предыдущая страница'
  },
  formatSRPaginationPageText (page) {
    return `перейти к странице ${page}`
  },
  formatSRPaginationNextText () {
    return 'следующая страница'
  },
  formatDetailPagination (totalRows) {
    return `Загружено ${totalRows} строк`
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
    return 'Скрыть/Показать постраничную навигацию'
  },
  formatPaginationSwitchDown () {
    return 'Показать постраничную навигацию'
  },
  formatPaginationSwitchUp () {
    return 'Скрыть постраничную навигацию'
  },
  formatRefresh () {
    return 'Обновить'
  },
  formatToggleOn () {
    return 'Показать записи в виде карточек'
  },
  formatToggleOff () {
    return 'Табличный режим просмотра'
  },
  formatColumns () {
    return 'Колонки'
  },
  formatColumnsToggleAll () {
    return 'Выбрать все'
  },
  formatFullscreen () {
    return 'Полноэкранный режим'
  },
  formatAllRows () {
    return 'Все'
  },
  formatAutoRefresh () {
    return 'Автоматическое обновление'
  },
  formatExport () {
    return 'Экспортировать данные'
  },
  formatJumpTo () {
    return 'Стр.'
  },
  formatAdvancedSearch () {
    return 'Расширенный поиск'
  },
  formatAdvancedCloseButton () {
    return 'Закрыть'
  },
  formatFilterControlSwitch () {
    return 'Скрыть/Показать панель инструментов'
  },
  formatFilterControlSwitchHide () {
    return 'Скрыть панель инструментов'
  },
  formatFilterControlSwitchShow () {
    return 'Показать панель инструментов'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU'])
