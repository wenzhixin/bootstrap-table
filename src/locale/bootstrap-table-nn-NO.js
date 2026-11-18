/**
 * Bootstrap Table Norwegian Nynorsk translation
 */

$.fn.bootstrapTable.locales['nn-NO'] = $.fn.bootstrapTable.locales['nn'] = {
  formatAddLevel () {
    return 'Legg til nivå'
  },

  formatAdvancedCloseButton () {
    return 'Lukk'
  },

  formatAdvancedSearch () {
    return 'Avansert søk'
  },

  formatAllRows () {
    return 'Alle'
  },

  formatAutoRefresh () {
    return 'Automatisk oppdatering'
  },

  formatCancel () {
    return 'Avbryt'
  },

  formatClearSearch () {
    return 'Tøm søk'
  },

  formatColumn () {
    return 'Kolonne'
  },

  formatColumns () {
    return 'Kolonnar'
  },

  formatColumnsToggleAll () {
    return 'Vis/skjul alle'
  },

  formatCopyRows () {
    return 'Kopier rader'
  },

  formatDeleteLevel () {
    return 'Slett nivå'
  },

  formatDetailPagination (totalRows) {
    return `Viser ${totalRows} rader`
  },

  formatDuplicateAlertDescription () {
    return 'Fjern eller endre eventuelle duplikatkolonnar.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplikat oppdaga!'
  },

  formatExport () {
    return 'Eksporter data'
  },

  formatFilterControlSwitch () {
    return 'Vis/skjul kontrollar'
  },

  formatFilterControlSwitchHide () {
    return 'Skjul kontrollar'
  },

  formatFilterControlSwitchShow () {
    return 'Vis kontrollar'
  },

  formatFullscreen () {
    return 'Fullskjerm'
  },

  formatJumpTo () {
    return 'GÅ'
  },

  formatLoadingMessage () {
    return 'Lastar, vent litt'
  },

  formatMultipleSort () {
    return 'Fleire sorteringar'
  },

  formatNoMatches () {
    return 'Ingen treff funne'
  },

  formatOrder () {
    return 'Rekkjefølgje'
  },

  formatPaginationSwitch () {
    return 'Vis/skjul sideinndeling'
  },

  formatPaginationSwitchDown () {
    return 'Vis sideinndeling'
  },

  formatPaginationSwitchUp () {
    return 'Skjul sideinndeling'
  },

  formatPrint () {
    return 'Skriv ut'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rader per side`
  },

  formatRefresh () {
    return 'Oppdater'
  },

  formatSRPaginationNextText () {
    return 'neste side'
  },

  formatSRPaginationPageText (page) {
    return `til side ${page}`
  },

  formatSRPaginationPreText () {
    return 'førre side'
  },

  formatSearch () {
    return 'Søk'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Viser ${pageFrom} til ${pageTo} av ${totalRows} rader (filtrert frå ${totalNotFiltered} rader totalt)`
    }

    return `Viser ${pageFrom} til ${pageTo} av ${totalRows} rader`
  },

  formatSort () {
    return 'Sorter'
  },

  formatSortBy () {
    return 'Sorter etter'
  },

  formatSortOrders () {
    return {
      asc: 'Stigande',
      desc: 'Synkande'
    }
  },

  formatThenBy () {
    return 'Deretter etter'
  },

  formatToggleCustomViewOff () {
    return 'Skjul tilpassa visning'
  },

  formatToggleCustomViewOn () {
    return 'Vis tilpassa visning'
  },

  formatToggleOff () {
    return 'Skjul kortvisning'
  },

  formatToggleOn () {
    return 'Vis kortvisning'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nn-NO'])
