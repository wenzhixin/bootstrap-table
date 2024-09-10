/**
 * Bootstrap Table Serbian Latin RS translation
 * Author: Vladimir Kanazir (vladimir@kanazir.com)
 */

$.fn.bootstrapTable.locales['sr-Latn-RS'] = {
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

  formatClearSearch () {
    return 'Obriši pretragu'
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

  formatDetailPagination (totalRows) {
    return `Prikazano ${totalRows} redova`
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

  formatNoMatches () {
    return 'Nije pronađen ni jedan podatak'
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

  formatSearch () {
    return 'Pronađi'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Prikazano ${pageFrom}. - ${pageTo}. od ukupnog broja redova ${totalRows} (filtrirano od ${totalNotFiltered})`
    }

    return `Prikazano ${pageFrom}. - ${pageTo}. od ukupnog broja redova ${totalRows}`
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

  formatToggleOff () {
    return 'Sakrij kartice'
  },

  formatToggleOn () {
    return 'Prikaži kartice'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Latn-RS'])
