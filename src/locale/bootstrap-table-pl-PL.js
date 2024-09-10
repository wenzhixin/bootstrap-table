/**
 * Bootstrap Table Polish translation
 * Author: zergu <michal.zagdan @ gmail com>
 * Update: kerogos <kerog @ wp pl>
 */

$.fn.bootstrapTable.locales['pl-PL'] = $.fn.bootstrapTable.locales['pl'] = {
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

  formatClearSearch () {
    return 'Wyczyść wyszukiwanie'
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

  formatDetailPagination (totalRows) {
    return `Wyświetla ${totalRows} wierszy`
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

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rekordów na stronę`
  },

  formatRefresh () {
    return 'Odśwież'
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

  formatSRPaginationNextText () {
    return 'następna strona'
  },

  formatSRPaginationPageText (page) {
    return `z ${page}`
  },

  formatSRPaginationPreText () {
    return 'poprzednia strona'
  },

  formatToggleOff () {
    return 'Ukryj układ karty'
  },

  formatToggleOn () {
    return 'Pokaż układ karty'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL'])
