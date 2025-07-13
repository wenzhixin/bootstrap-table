/**
 * Bootstrap Table Serbian Latin RS translation
 * Author: Vladimir Kanazir (vladimir@kanazir.com)
 */

$.fn.bootstrapTable.locales['sr-Latn-RS'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Zatvori'
  },

  formatAdvancedSearch () {
    return 'Napredna pretraga'
  },

  formatAllRows () {
    return 'Sve'
  },

  formatAutoRefresh () {
    return 'Automatsko osvežavanje'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Obriši pretragu'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Kolone'
  },

  formatColumnsToggleAll () {
    return 'Prikaži/sakrij sve'
  },

  formatCopyRows () {
    return 'Copy Rows'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Prikazano ${totalRows} redova`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Izvezi podatke'
  },

  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },

  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },

  formatFilterControlSwitchShow () {
    return 'Show controls'
  },

  formatFullscreen () {
    return 'Ceo ekran'
  },

  formatJumpTo () {
    return 'Idi'
  },

  formatLoadingMessage () {
    return 'Molim sačekaj'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Nije pronađen ni jedan podatak'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Prikaži/sakrij paginaciju'
  },

  formatPaginationSwitchDown () {
    return 'Prikaži paginaciju'
  },

  formatPaginationSwitchUp () {
    return 'Sakrij paginaciju'
  },

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} redova po strani`
  },

  formatRefresh () {
    return 'Osveži'
  },

  formatSRPaginationNextText () {
    return 'sledeća strana'
  },

  formatSRPaginationPageText (page) {
    return `na stranu ${page}`
  },

  formatSRPaginationPreText () {
    return 'prethodna strana'
  },

  formatSearch () {
    return 'Pronađi'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Prikazano ${pageFrom}. - ${pageTo}. od ukupnog broja redova ${totalRows} (filtrirano od ${totalNotFiltered})`
    }

    return `Prikazano ${pageFrom}. - ${pageTo}. od ukupnog broja redova ${totalRows}`
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
    return 'Sakrij kartice'
  },

  formatToggleOn () {
    return 'Prikaži kartice'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Latn-RS'])
