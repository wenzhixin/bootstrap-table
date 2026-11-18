/**
 * Bootstrap Table Ukrainian translation
 * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
 */

$.fn.bootstrapTable.locales['uk-UA'] = $.fn.bootstrapTable.locales['uk'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Закрити'
  },

  formatAdvancedSearch () {
    return 'Розширений пошук'
  },

  formatAllRows () {
    return 'Усі'
  },

  formatAutoRefresh () {
    return 'Автооновлення'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Скинути фільтри'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Стовпці'
  },

  formatColumnsToggleAll () {
    return 'Переключити усі'
  },

  formatCopyRows () {
    return 'Скопіювати рядки'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Відображено ${totalRows} рядків`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Експортувати дані'
  },

  formatFilterControlSwitch () {
    return 'Сховати/Відобразити елементи керування'
  },

  formatFilterControlSwitchHide () {
    return 'Сховати елементи керування'
  },

  formatFilterControlSwitchShow () {
    return 'Відобразити елементи керування'
  },

  formatFullscreen () {
    return 'Повноекранний режим'
  },

  formatJumpTo () {
    return 'Швидкий перехід до'
  },

  formatLoadingMessage () {
    return 'Завантаження, будь ласка, зачекайте'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Не знайдено жодного запису'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Сховати/Відобразити пагінацію'
  },

  formatPaginationSwitchDown () {
    return 'Відобразити пагінацію'
  },

  formatPaginationSwitchUp () {
    return 'Сховати пагінацію'
  },

  formatPrint () {
    return 'Друк'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} рядків на сторінку`
  },

  formatRefresh () {
    return 'Оновити'
  },

  formatSRPaginationNextText () {
    return 'наступна сторінка'
  },

  formatSRPaginationPageText (page) {
    return `до сторінки ${page}`
  },

  formatSRPaginationPreText () {
    return 'попередня сторінка'
  },

  formatSearch () {
    return 'Пошук'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Відображено рядки з ${pageFrom} по ${pageTo} з ${totalRows} загалом (відфільтровано з ${totalNotFiltered} рядків)`
    }

    return `Відображено рядки з ${pageFrom} по ${pageTo} з ${totalRows} загалом`
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
    return 'Вимкнути формат карток'
  },

  formatToggleOn () {
    return 'Відобразити у форматі карток'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA'])
