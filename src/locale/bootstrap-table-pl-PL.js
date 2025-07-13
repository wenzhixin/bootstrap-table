/**
 * Bootstrap Table Polish translation
 * Author: zergu <michal.zagdan @ gmail com>
 * Update: kerogos <kerog @ wp pl>
 */

$.fn.bootstrapTable.locales['pl-PL'] = $.fn.bootstrapTable.locales['pl'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Zamknij'
  },

  formatAdvancedSearch () {
    return 'Wyszukiwanie zaawansowane'
  },

  formatAllRows () {
    return 'Wszystkie'
  },

  formatAutoRefresh () {
    return 'Auto odświeżanie'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Wyczyść wyszukiwanie'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Kolumny'
  },

  formatColumnsToggleAll () {
    return 'Zaznacz wszystko'
  },

  formatCopyRows () {
    return 'Kopiuj wiersze'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Wyświetla ${totalRows} wierszy`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Eksport danych'
  },

  formatFilterControlSwitch () {
    return 'Pokaż/Ukryj'
  },

  formatFilterControlSwitchHide () {
    return 'Pokaż'
  },

  formatFilterControlSwitchShow () {
    return 'Ukryj'
  },

  formatFullscreen () {
    return 'Fullscreen'
  },

  formatJumpTo () {
    return 'Przejdź'
  },

  formatLoadingMessage () {
    return 'Ładowanie, proszę czekać'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Niestety, nic nie znaleziono'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Pokaż/ukryj stronicowanie'
  },

  formatPaginationSwitchDown () {
    return 'Pokaż stronicowanie'
  },

  formatPaginationSwitchUp () {
    return 'Ukryj stronicowanie'
  },

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rekordów na stronę`
  },

  formatRefresh () {
    return 'Odśwież'
  },

  formatSRPaginationNextText () {
    return 'następna strona'
  },

  formatSRPaginationPageText (page) {
    return `z ${page}`
  },

  formatSRPaginationPreText () {
    return 'poprzednia strona'
  },

  formatSearch () {
    return 'Szukaj'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Wyświetlanie rekordów od ${pageFrom} do ${pageTo} z ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Wyświetlanie rekordów od ${pageFrom} do ${pageTo} z ${totalRows}`
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
    return 'Ukryj układ karty'
  },

  formatToggleOn () {
    return 'Pokaż układ karty'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL'])
