/**
 * Bootstrap Table Slovenian translation
 * Author: Ales Hotko <ales.hotko@gmail.com>
 */

$.fn.bootstrapTable.locales['sl-SI'] = $.fn.bootstrapTable.locales['sl'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Zapri'
  },

  formatAdvancedSearch () {
    return 'Napredno iskanje'
  },

  formatAllRows () {
    return 'Vse'
  },

  formatAutoRefresh () {
    return 'Samodejna osvežitev'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Počisti'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Stolpci'
  },

  formatColumnsToggleAll () {
    return 'Preklopi vse'
  },

  formatCopyRows () {
    return 'Kopiraj vrstice'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Prikaz ${totalRows} vrstic`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Izvoz podatkov'
  },

  formatFilterControlSwitch () {
    return 'Skrij/Pokaži kontrole'
  },

  formatFilterControlSwitchHide () {
    return 'Skrij kontrole'
  },

  formatFilterControlSwitchShow () {
    return 'Pokaži kontrole'
  },

  formatFullscreen () {
    return 'Celozaslonski prikaz'
  },

  formatJumpTo () {
    return 'GO'
  },

  formatLoadingMessage () {
    return 'Prosim počakajte...'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Ni najdenih rezultatov'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Skrij/Pokaži oštevilčevanje strani'
  },

  formatPaginationSwitchDown () {
    return 'Pokaži oštevilčevanje strani'
  },

  formatPaginationSwitchUp () {
    return 'Skrij oštevilčevanje strani'
  },

  formatPrint () {
    return 'Natisni'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} vrstic na stran`
  },

  formatRefresh () {
    return 'Osveži'
  },

  formatSRPaginationNextText () {
    return 'na slednja stran'
  },

  formatSRPaginationPageText (page) {
    return `na stran ${page}`
  },

  formatSRPaginationPreText () {
    return 'prejšnja stran'
  },

  formatSearch () {
    return 'Iskanje'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Prikaz ${pageFrom} do ${pageTo} od ${totalRows} vrstic (filtrirano od skupno ${totalNotFiltered} vrstic)`
    }

    return `Prikaz ${pageFrom} do ${pageTo} od ${totalRows} vrstic`
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
    return 'Skrij kartični pogled'
  },

  formatToggleOn () {
    return 'Prikaži kartični pogled'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sl-SI'])
