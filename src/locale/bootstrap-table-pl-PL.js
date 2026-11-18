/**
 * Bootstrap Table Polish translation
 * Author: zergu <michal.zagdan @ gmail com>
 * Update: kerogos <kerog @ wp pl>
 * Update v2: rem22 <darkman1515 @ gmail com>
 */

$.fn.bootstrapTable.locales['pl-PL'] = $.fn.bootstrapTable.locales['pl'] = {
  formatAddLevel () {
    return 'Dodaj poziom'
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
    return 'Anuluj'
  },

  formatClearSearch () {
    return 'Wyczyść wyszukiwanie'
  },

  formatColumn () {
    return 'Kolumna'
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
    return 'Usuń poziom'
  },

  formatDetailPagination (totalRows) {
    return `Wyświetla ${totalRows} wierszy`
  },

  formatDuplicateAlertDescription () {
    return 'Proszę usunąć lub zmodyfikować zduplikowane kolumny'
  },

  formatDuplicateAlertTitle () {
    return 'Duplikaty wykryte'
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
    return 'Pełny ekran'
  },

  formatJumpTo () {
    return 'Przejdź'
  },

  formatLoadingMessage () {
    return 'Ładowanie, proszę czekać'
  },

  formatMultipleSort () {
    return 'Sortowanie wielopoziomowe'
  },

  formatNoMatches () {
    return 'Niestety, nic nie znaleziono'
  },

  formatOrder () {
    return 'Kolejność'
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
    return 'Drukuj'
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
    return 'Sortuj'
  },

  formatSortBy () {
    return 'Sortuj po'
  },

  formatSortOrders () {
    return {
      asc: 'Rosnąco',
      desc: 'Malejąco'
    }
  },

  formatThenBy () {
    return 'Następnie po'
  },

  formatToggleCustomViewOff () {
    return 'Ukryj własny widok'
  },

  formatToggleCustomViewOn () {
    return 'Pokaż własny widok'
  },

  formatToggleOff () {
    return 'Ukryj układ karty'
  },

  formatToggleOn () {
    return 'Pokaż układ karty'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL'])
