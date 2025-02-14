/**
 * Bootstrap Table Lithuanian translation
 * Author: swift2512 <slamstapastis@gmail.com>
 */

$.fn.bootstrapTable.locales['lt-LT'] = $.fn.bootstrapTable.locales['lt'] = {
  formatCopyRows () {
    return 'Kopijuoti eilutes'
  },
  formatPrint () {
    return 'Spausdinti'
  },
  formatLoadingMessage () {
    return 'Įkeliama, palaukite'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} eilučių puslapyje`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Rodomos eilutės nuo ${pageFrom} iki ${pageTo} iš ${totalRows} eilučių (atrinktos iš visų ${totalNotFiltered} eilučių)`
    }

    return `Rodomos eilutės nuo ${pageFrom} iki ${pageTo} iš ${totalRows} eilučių`
  },
  formatSRPaginationPreText () {
    return 'ankstesnis puslapis'
  },
  formatSRPaginationPageText (page) {
    return `į puslapį ${page}`
  },
  formatSRPaginationNextText () {
    return 'sekantis puslapis'
  },
  formatDetailPagination (totalRows) {
    return `Rodomos ${totalRows} eilutės (-čių)`
  },
  formatClearSearch () {
    return 'Išvalyti paiešką'
  },
  formatSearch () {
    return 'Ieškoti'
  },
  formatNoMatches () {
    return 'Atitinkančių įrašų nerasta'
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
  formatRefresh () {
    return 'Atnaujinti'
  },
  formatToggleOn () {
    return 'Rodyti kortelių rodinį'
  },
  formatToggleOff () {
    return 'Slėpti kortelių rodinį'
  },
  formatColumns () {
    return 'Stulpeliai'
  },
  formatColumnsToggleAll () {
    return 'Perjungti viską'
  },
  formatFullscreen () {
    return 'Visame ekrane'
  },
  formatAllRows () {
    return 'Viskas'
  },
  formatAutoRefresh () {
    return 'Automatinis atnaujinimas'
  },
  formatExport () {
    return 'Eksportuoti duomenis'
  },
  formatJumpTo () {
    return 'Eiti'
  },
  formatAdvancedSearch () {
    return 'Išplėstinė paieška'
  },
  formatAdvancedCloseButton () {
    return 'Uždaryti'
  },
  formatFilterControlSwitch () {
    return 'Slėpti/rodyti valdiklius'
  },
  formatFilterControlSwitchHide () {
    return 'Slėpti valdiklius'
  },
  formatFilterControlSwitchShow () {
    return 'Rodyti valdiklius'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['lt-LT'])
