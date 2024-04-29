/**
 * Bootstrap Table Slovenian translation
 * Author: Ales Hotko <ales.hotko@gmail.com>
 */

$.fn.bootstrapTable.locales['sl-SI'] = $.fn.bootstrapTable.locales['sl'] = {
  formatCopyRows () {
    return 'Kopiraj vrstice'
  },
  formatPrint () {
    return 'Natisni'
  },
  formatLoadingMessage () {
    return 'Prosim počakajte...'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} vrstic na stran`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Prikaz ${pageFrom} do ${pageTo} od ${totalRows} vrstic (filtrirano od skupno ${totalNotFiltered} vrstic)`
    }

    return `Prikaz ${pageFrom} do ${pageTo} od ${totalRows} vrstic`
  },
  formatSRPaginationPreText () {
    return 'prejšnja stran'
  },
  formatSRPaginationPageText (page) {
    return `na stran ${page}`
  },
  formatSRPaginationNextText () {
    return 'na slednja stran'
  },
  formatDetailPagination (totalRows) {
    return `Prikaz ${totalRows} vrstic`
  },
  formatClearSearch () {
    return 'Počisti'
  },
  formatSearch () {
    return 'Iskanje'
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
  formatRefresh () {
    return 'Osveži'
  },
  formatToggleOn () {
    return 'Prikaži kartični pogled'
  },
  formatToggleOff () {
    return 'Skrij kartični pogled'
  },
  formatColumns () {
    return 'Stolpci'
  },
  formatColumnsToggleAll () {
    return 'Preklopi vse'
  },
  formatFullscreen () {
    return 'Celozaslonski prikaz'
  },
  formatAllRows () {
    return 'Vse'
  },
  formatAutoRefresh () {
    return 'Samodejna osvežitev'
  },
  formatExport () {
    return 'Izvoz podatkov'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Napredno iskanje'
  },
  formatAdvancedCloseButton () {
    return 'Zapri'
  },
  formatFilterControlSwitch () {
    return 'Skrij/Pokaži kontrole'
  },
  formatFilterControlSwitchHide () {
    return 'Skrij kontrole'
  },
  formatFilterControlSwitchShow () {
    return 'Pokaži kontrole'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sl-SI'])
