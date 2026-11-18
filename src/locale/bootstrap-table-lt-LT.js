/**
 * Bootstrap Table Lithuanian translation
 * Author: swift2512 <slamstapastis@gmail.com>
 */

$.fn.bootstrapTable.locales['lt-LT'] = $.fn.bootstrapTable.locales['lt'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Uždaryti'
  },

  formatAdvancedSearch () {
    return 'Išplėstinė paieška'
  },

  formatAllRows () {
    return 'Viskas'
  },

  formatAutoRefresh () {
    return 'Automatinis atnaujinimas'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Išvalyti paiešką'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Stulpeliai'
  },

  formatColumnsToggleAll () {
    return 'Perjungti viską'
  },

  formatCopyRows () {
    return 'Kopijuoti eilutes'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Rodomos ${totalRows} eilutės (-čių)`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Eksportuoti duomenis'
  },

  formatFilterControlSwitch () {
    return 'Slėpti/rodyti valdiklius'
  },

  formatFilterControlSwitchHide () {
    return 'Slėpti valdiklius'
  },

  formatFilterControlSwitchShow () {
    return 'Rodyti valdiklius'
  },

  formatFullscreen () {
    return 'Visame ekrane'
  },

  formatJumpTo () {
    return 'Eiti'
  },

  formatLoadingMessage () {
    return 'Įkeliama, palaukite'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Atitinkančių įrašų nerasta'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Slėpti/rodyti puslapių rūšiavimą'
  },

  formatPaginationSwitchDown () {
    return 'Rodyti puslapių rūšiavimą'
  },

  formatPaginationSwitchUp () {
    return 'Slėpti puslapių rūšiavimą'
  },

  formatPrint () {
    return 'Spausdinti'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} eilučių puslapyje`
  },

  formatRefresh () {
    return 'Atnaujinti'
  },

  formatSRPaginationNextText () {
    return 'sekantis puslapis'
  },

  formatSRPaginationPageText (page) {
    return `į puslapį ${page}`
  },

  formatSRPaginationPreText () {
    return 'ankstesnis puslapis'
  },

  formatSearch () {
    return 'Ieškoti'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Rodomos eilutės nuo ${pageFrom} iki ${pageTo} iš ${totalRows} eilučių (atrinktos iš visų ${totalNotFiltered} eilučių)`
    }

    return `Rodomos eilutės nuo ${pageFrom} iki ${pageTo} iš ${totalRows} eilučių`
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
    return 'Slėpti kortelių rodinį'
  },

  formatToggleOn () {
    return 'Rodyti kortelių rodinį'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['lt-LT'])
