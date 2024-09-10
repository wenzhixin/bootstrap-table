/**
 * Bootstrap Table Luxembourgish translation
 * Author: David Morais Ferreira (https://github.com/DavidMoraisFerreira)
 */

$.fn.bootstrapTable.locales['lb-LU'] = $.fn.bootstrapTable.locales['lb'] = {
  formatAdvancedCloseButton () {
    return 'Zoumaachen'
  },

  formatAdvancedSearch () {
    return 'Erweidert Sich'
  },

  formatAllRows () {
    return 'All'
  },

  formatAutoRefresh () {
    return 'Automatescht neilueden'
  },

  formatClearSearch () {
    return 'Sich réckgängeg maachen'
  },

  formatColumns () {
    return 'Kolonnen'
  },

  formatColumnsToggleAll () {
    return 'All ëmschalten'
  },

  formatCopyRows () {
    return 'Zeilen kopéieren'
  },

  formatDetailPagination (totalRows) {
    return `Weist ${totalRows} Zeilen`
  },

  formatExport () {
    return 'Daten exportéieren'
  },

  formatFilterControlSwitch () {
    return 'Schaltelementer uweisen/verstoppen'
  },

  formatFilterControlSwitchHide () {
    return 'Schaltelementer verstoppen'
  },

  formatFilterControlSwitchShow () {
    return 'Schaltelementer uweisen'
  },

  formatFullscreen () {
    return 'Vollbild'
  },

  formatJumpTo () {
    return 'Sprangen'
  },

  formatLoadingMessage () {
    return 'Gëtt gelueden, gedellëgt Iech wannechgelift ee Moment'
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

  formatPrint () {
    return 'Drécken'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} Zeilen per Säit`
  },

  formatRefresh () {
    return 'Nei lueden'
  },

  formatSearch () {
    return 'Sich'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Weist Zeil ${pageFrom} bis ${pageTo} vun ${totalRows} Zeil${totalRows > 1 ? 'en' : ''} (gefiltert vun insgesamt ${totalNotFiltered} Zeil${totalRows > 1 ? 'en' : ''})`
    }

    return `Weist Zeil ${pageFrom} bis ${pageTo} vun ${totalRows} Zeil${totalRows > 1 ? 'en' : ''}`
  },

  formatSRPaginationNextText () {
    return 'nächst Säit'
  },

  formatSRPaginationPageText (page) {
    return `op Säit ${page}`
  },

  formatSRPaginationPreText () {
    return 'viregt Säit'
  },

  formatToggleOff () {
    return 'Kaartenusiicht verstoppen'
  },

  formatToggleOn () {
    return 'Kaartenusiicht uweisen'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['lb-LU'])
