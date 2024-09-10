/**
 * Bootstrap Table Slovenian translation
 * Author: Ales Hotko <ales.hotko@gmail.com>
 */

$.fn.bootstrapTable.locales['sl-SI'] = $.fn.bootstrapTable.locales['sl'] = {
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

  formatClearSearch () {
    return 'Počisti'
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

  formatDetailPagination (totalRows) {
    return `Prikaz ${totalRows} vrstic`
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

  formatNoMatches () {
    return 'Ni najdenih rezultatov'
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

  formatSearch () {
    return 'Iskanje'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Prikaz ${pageFrom} do ${pageTo} od ${totalRows} vrstic (filtrirano od skupno ${totalNotFiltered} vrstic)`
    }

    return `Prikaz ${pageFrom} do ${pageTo} od ${totalRows} vrstic`
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

  formatToggleOff () {
    return 'Skrij kartični pogled'
  },

  formatToggleOn () {
    return 'Prikaži kartični pogled'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sl-SI'])
