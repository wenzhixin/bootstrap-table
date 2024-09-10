/**
 * Bootstrap Table Russian translation
 * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
 */

$.fn.bootstrapTable.locales['ru-RU'] = $.fn.bootstrapTable.locales['ru'] = {
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

  formatClearSearch () {
    return 'Очистить фильтры'
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

  formatDetailPagination (totalRows) {
    return `Загружено ${totalRows} строк`
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

  formatPrint () {
    return 'Печать'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} записей на страницу`
  },

  formatRefresh () {
    return 'Обновить'
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

  formatSRPaginationNextText () {
    return 'следующая страница'
  },

  formatSRPaginationPageText (page) {
    return `перейти к странице ${page}`
  },

  formatSRPaginationPreText () {
    return 'предыдущая страница'
  },

  formatToggleOff () {
    return 'Табличный режим просмотра'
  },

  formatToggleOn () {
    return 'Показать записи в виде карточек'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU'])
