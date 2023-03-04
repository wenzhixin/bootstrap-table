/**
 * Bootstrap Table Polish translation
 * Author: zergu <michal.zagdan @ gmail com>
 * Update: kerogos <kerog @ wp pl>
 */

$.fn.bootstrapTable.locales['pl-PL'] = $.fn.bootstrapTable.locales['pl'] = {
  formatCopyRows () {
    return 'Kopiuj wiersze'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'Ładowanie, proszę czekać'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rekordów na stronę`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Wyświetlanie rekordów od ${pageFrom} do ${pageTo} z ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Wyświetlanie rekordów od ${pageFrom} do ${pageTo} z ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'poprzednia strona'
  },
  formatSRPaginationPageText (page) {
    return `z ${page}`
  },
  formatSRPaginationNextText () {
    return 'następna strona'
  },
  formatDetailPagination (totalRows) {
    return `Wyświetla ${totalRows} wierszy`
  },
  formatClearSearch () {
    return 'Wyczyść wyszukiwanie'
  },
  formatSearch () {
    return 'Szukaj'
  },
  formatNoMatches () {
    return 'Niestety, nic nie znaleziono'
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
  formatRefresh () {
    return 'Odśwież'
  },
  formatToggleOn () {
    return 'Pokaż układ karty'
  },
  formatToggleOff () {
    return 'Ukryj układ karty'
  },
  formatColumns () {
    return 'Kolumny'
  },
  formatColumnsToggleAll () {
    return 'Zaznacz wszystko'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Wszystkie'
  },
  formatAutoRefresh () {
    return 'Auto odświeżanie'
  },
  formatExport () {
    return 'Eksport danych'
  },
  formatJumpTo () {
    return 'Przejdź'
  },
  formatAdvancedSearch () {
    return 'Wyszukiwanie zaawansowane'
  },
  formatAdvancedCloseButton () {
    return 'Zamknij'
  },
  formatFilterControlSwitch () {
    return 'Pokaż/Ukryj'
  },
  formatFilterControlSwitchHide () {
    return 'Pokaż'
  },
  formatFilterControlSwitchShow () {
    return 'Ukryj'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL'])
