/**
 * Bootstrap Table Luxembourgish translation
 * Author: David Morais Ferreira (https://github.com/DavidMoraisFerreira)
 */

$.fn.bootstrapTable.locales['lb-LU'] = $.fn.bootstrapTable.locales['lb'] = {
  formatCopyRows () {
    return 'Zeilen kopéieren'
  },
  formatPrint () {
    return 'Drécken'
  },
  formatLoadingMessage () {
    return 'Gëtt gelueden, gedellëgt Iech wannechgelift ee Moment'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} Zeilen per Säit`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Weist Zeil ${pageFrom} bis ${pageTo} vun ${totalRows} Zeil${totalRows > 1 ? 'en' : ''} (gefiltert vun insgesamt ${totalNotFiltered} Zeil${totalRows > 1 ? 'en' : ''})`
    }

    return `Weist Zeil ${pageFrom} bis ${pageTo} vun ${totalRows} Zeil${totalRows > 1 ? 'en' : ''}`
  },
  formatSRPaginationPreText () {
    return 'viregt Säit'
  },
  formatSRPaginationPageText (page) {
    return `op Säit ${page}`
  },
  formatSRPaginationNextText () {
    return 'nächst Säit'
  },
  formatDetailPagination (totalRows) {
    return `Weist ${totalRows} Zeilen`
  },
  formatClearSearch () {
    return 'Sich réckgängeg maachen'
  },
  formatSearch () {
    return 'Sich'
  },
  formatNoMatches () {
    return 'Keng passend Anträg fonnt'
  },
  formatPaginationSwitch () {
    return 'Paginatioun uweisen/verstoppen'
  },
  formatPaginationSwitchDown () {
    return 'Paginatioun uweisen'
  },
  formatPaginationSwitchUp () {
    return 'Paginatioun verstoppen'
  },
  formatRefresh () {
    return 'Nei lueden'
  },
  formatToggleOn () {
    return 'Kaartenusiicht uweisen'
  },
  formatToggleOff () {
    return 'Kaartenusiicht verstoppen'
  },
  formatColumns () {
    return 'Kolonnen'
  },
  formatColumnsToggleAll () {
    return 'All ëmschalten'
  },
  formatFullscreen () {
    return 'Vollbild'
  },
  formatAllRows () {
    return 'All'
  },
  formatAutoRefresh () {
    return 'Automatescht neilueden'
  },
  formatExport () {
    return 'Daten exportéieren'
  },
  formatJumpTo () {
    return 'Sprangen'
  },
  formatAdvancedSearch () {
    return 'Erweidert Sich'
  },
  formatAdvancedCloseButton () {
    return 'Zoumaachen'
  },
  formatFilterControlSwitch () {
    return 'Schaltelementer uweisen/verstoppen'
  },
  formatFilterControlSwitchHide () {
    return 'Schaltelementer verstoppen'
  },
  formatFilterControlSwitchShow () {
    return 'Schaltelementer uweisen'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['lb-LU'])
