/**
 * Bootstrap Table Ukrainian translation
 * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['uk-UA'] = {
    formatLoadingMessage () {
      return 'Завантаження, будь ласка, зачекайте...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} записів на сторінку`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Показано з ${pageFrom} по ${pageTo}. Всього: ${totalRows}`
    },
    formatSearch () {
      return 'Пошук'
    },
    formatNoMatches () {
      return 'Не знайдено жодного запису'
    },
    formatRefresh () {
      return 'Оновити'
    },
    formatToggle () {
      return 'Змінити'
    },
    formatColumns () {
      return 'Стовпці'
    },
    formatClearFilters () {
      return 'Очистити фільтри'
    },
    formatMultipleSort () {
      return 'Сортування за кількома стовпцями'
    },
    formatAddLevel () {
      return 'Додати рівень'
    },
    formatDeleteLevel () {
      return 'Видалити рівень'
    },
    formatColumn () {
      return 'Стовпець'
    },
    formatOrder () {
      return 'Порядок'
    },
    formatSortBy () {
      return 'Сортувати за'
    },
    formatThenBy () {
      return 'потім за'
    },
    formatSort () {
      return 'Сортувати'
    },
    formatCancel () {
      return 'Скасувати'
    },
    formatDuplicateAlertTitle () {
      return 'Дублювання стовпців!'
    },
    formatDuplicateAlertDescription () {
      return 'Видаліть, будь ласка, дублюючий стовпець, або замініть його на інший.'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA'])
})(jQuery)
