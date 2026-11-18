/**
 * Bootstrap Table Luxembourgish translation
 * Author: David Morais Ferreira (https://github.com/DavidMoraisFerreira)
 */

$.fn.bootstrapTable.locales['lb-LU'] = $.fn.bootstrapTable.locales['lb'] = {
  formatAddLevel () {
    return 'Add Level'
  },

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

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Sich réckgängeg maachen'
  },

  formatColumn () {
    return 'Column'
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

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Weist ${totalRows} Zeilen`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
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

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Keng passend Anträg fonnt'
  },

  formatOrder () {
    return 'Order'
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

  formatSRPaginationNextText () {
    return 'nächst Säit'
  },

  formatSRPaginationPageText (page) {
    return `op Säit ${page}`
  },

  formatSRPaginationPreText () {
    return 'viregt Säit'
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
    return 'Kaartenusiicht verstoppen'
  },

  formatToggleOn () {
    return 'Kaartenusiicht uweisen'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['lb-LU'])
