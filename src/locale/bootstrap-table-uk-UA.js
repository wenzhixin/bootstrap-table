/**
 * Bootstrap Table Ukrainian translation
 * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
 */

$.fn.bootstrapTable.locales['uk-UA'] = $.fn.bootstrapTable.locales['uk'] = {
  formatCopyRows () {
    return 'Скопіювати рядки'
  },
  formatPrint () {
    return 'Друк'
  },
  formatLoadingMessage () {
    return 'Завантаження, будь ласка, зачекайте'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} рядків на сторінку`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Відображено рядки з ${pageFrom} по ${pageTo} з ${totalRows} загалом (відфільтровано з ${totalNotFiltered} рядків)`
    }

    return `Відображено рядки з ${pageFrom} по ${pageTo} з ${totalRows} загалом`
  },
  formatSRPaginationPreText () {
    return 'попередня сторінка'
  },
  formatSRPaginationPageText (page) {
    return `до сторінки ${page}`
  },
  formatSRPaginationNextText () {
    return 'наступна сторінка'
  },
  formatDetailPagination (totalRows) {
    return `Відображено ${totalRows} рядків`
  },
  formatClearSearch () {
    return 'Скинути фільтри'
  },
  formatSearch () {
    return 'Пошук'
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
  formatRefresh () {
    return 'Оновити'
  },
  formatToggleOn () {
    return 'Відобразити у форматі карток'
  },
  formatToggleOff () {
    return 'Вимкнути формат карток'
  },
  formatColumns () {
    return 'Стовпці'
  },
  formatColumnsToggleAll () {
    return 'Переключити усі'
  },
  formatFullscreen () {
    return 'Повноекранний режим'
  },
  formatAllRows () {
    return 'Усі'
  },
  formatAutoRefresh () {
    return 'Автооновлення'
  },
  formatExport () {
    return 'Експортувати дані'
  },
  formatJumpTo () {
    return 'Швидкий перехід до'
  },
  formatAdvancedSearch () {
    return 'Розширений пошук'
  },
  formatAdvancedCloseButton () {
    return 'Закрити'
  },
  formatFilterControlSwitch () {
    return 'Сховати/Відобразити елементи керування'
  },
  formatFilterControlSwitchHide () {
    return 'Сховати елементи керування'
  },
  formatFilterControlSwitchShow () {
    return 'Відобразити елементи керування'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA'])
