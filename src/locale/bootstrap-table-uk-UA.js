/**
 * Bootstrap Table Ukrainian translation
 * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
 */

$.fn.bootstrapTable.locales['uk-UA'] = $.fn.bootstrapTable.locales['uk'] = {
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

  formatClearSearch () {
    return 'Скинути фільтри'
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

  formatDetailPagination (totalRows) {
    return `Відображено ${totalRows} рядків`
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

  formatNoMatches () {
    return 'Не знайдено жодного запису'
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

  formatSearch () {
    return 'Пошук'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Відображено рядки з ${pageFrom} по ${pageTo} з ${totalRows} загалом (відфільтровано з ${totalNotFiltered} рядків)`
    }

    return `Відображено рядки з ${pageFrom} по ${pageTo} з ${totalRows} загалом`
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

  formatToggleOff () {
    return 'Вимкнути формат карток'
  },

  formatToggleOn () {
    return 'Відобразити у форматі карток'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA'])
