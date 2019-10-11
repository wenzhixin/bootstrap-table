/**
 * Bootstrap Table Serbian Latin RS translation
 * Author: Vladimir Kanazir (vladimir@kanazir.com)
 */

$.fn.bootstrapTable.locales['sr-Latn-RS'] = {
  formatLoadingMessage () {
    return 'Molim sačekaj'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} redova po strani`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Prikazano ${pageFrom}. - ${pageTo}. od ukupnog broja redova ${totalRows} (filtrirano od ${totalNotFiltered})`
    }

    return `Prikazano ${pageFrom}. - ${pageTo}. od ukupnog broja redova ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'prethodna strana'
  },
  formatSRPaginationPageText (page) {
    return `na stranu ${page}`
  },
  formatSRPaginationNextText () {
    return 'sledeća strana'
  },
  formatDetailPagination (totalRows) {
    return `Prikazano ${totalRows} redova`
  },
  formatClearSearch () {
    return 'Obriši pretragu'
  },
  formatSearch () {
    return 'Pronađi'
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
  formatRefresh () {
    return 'Osveži'
  },
  formatToggle () {
    return 'Promeni prikaz'
  },
  formatToggleOn () {
    return 'Prikaži kartice'
  },
  formatToggleOff () {
    return 'Sakrij kartice'
  },
  formatColumns () {
    return 'Kolone'
  },
  formatColumnsToggleAll () {
    return 'Prikaži/sakrij sve'
  },
  formatFullscreen () {
    return 'Ceo ekran'
  },
  formatAllRows () {
    return 'Sve'
  },
  formatAutoRefresh () {
    return 'Automatsko osvežavanje'
  },
  formatExport () {
    return 'Izvezi podatke'
  },
  formatJumpTo () {
    return 'Idi'
  },
  formatAdvancedSearch () {
    return 'Napredna pretraga'
  },
  formatAdvancedCloseButton () {
    return 'Zatvori'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Latn-RS'])
