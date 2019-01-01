/**
 * Bootstrap Table Russian translation
 * Author: Dunaevsky Maxim <dunmaksim@yandex.ru>
 */
($ => {
  $.fn.bootstrapTable.locales['ru-RU'] = {
    formatLoadingMessage () {
      return 'Пожалуйста, подождите, идёт загрузка...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} записей на страницу`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Записи с ${pageFrom} по ${pageTo} из ${totalRows}`
    },
    formatSearch () {
      return 'Поиск'
    },
    formatNoMatches () {
      return 'Ничего не найдено'
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
    formatClearFilters () {
      return 'Очистить фильтры'
    },
    formatMultipleSort () {
      return 'Множественная сортировка'
    },
    formatAddLevel () {
      return 'Добавить уровень'
    },
    formatDeleteLevel () {
      return 'Удалить уровень'
    },
    formatColumn () {
      return 'Колонка'
    },
    formatOrder () {
      return 'Порядок'
    },
    formatSortBy () {
      return 'Сортировать по'
    },
    formatThenBy () {
      return 'затем по'
    },
    formatSort () {
      return 'Сортировать'
    },
    formatCancel () {
      return 'Отмена'
    },
    formatDuplicateAlertTitle () {
      return 'Дублирование колонок!'
    },
    formatDuplicateAlertDescription () {
      return 'Удалите, пожалуйста, дублирующую колонку, или замените ее на другую.'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU'])
})(jQuery)
