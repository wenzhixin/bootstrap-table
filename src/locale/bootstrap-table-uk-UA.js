/**
 * Bootstrap Table Ukrainian translation
 * Author: Vitaliy Timchenko <vitaliy.timchenko@gmail.com>
 */

$.fn.bootstrapTable.locales['uk-UA'] = {
  formatLoadingMessage () {
    return 'Завантаження, будь ласка, зачекайте'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} записів на сторінку`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Показано з ${pageFrom} по ${pageTo}. Всього: ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Показано з ${pageFrom} по ${pageTo}. Всього: ${totalRows}`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Пошук'
  },
  formatNoMatches () {
    return 'Не знайдено жодного запису'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
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
    return 'Очистити фільтри'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uk-UA'])
