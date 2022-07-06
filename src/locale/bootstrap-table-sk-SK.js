/**
 * Bootstrap Table Slovak translation
 * Author: Jozef Dúc<jozef.d13@gmail.com>
 */

$.fn.bootstrapTable.locales['sk-SK'] = $.fn.bootstrapTable.locales['sk'] = {
  formatCopyRows () {
    return 'Skopírovať riadky'
  },
  formatPrint () {
    return 'Vytlačiť'
  },
  formatLoadingMessage () {
    return 'Prosím čakajte'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} záznamov na stranu`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Zobrazená ${pageFrom}. - ${pageTo}. položka z celkových ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Zobrazená ${pageFrom}. - ${pageTo}. položka z celkových ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'Predchádzajúca strana'
  },
  formatSRPaginationPageText (page) {
    return `na stranu ${page}`
  },
  formatSRPaginationNextText () {
    return 'Nasledujúca strana'
  },
  formatDetailPagination (totalRows) {
    return `Zobrazuje sa ${totalRows} riadkov`
  },
  formatClearSearch () {
    return 'Odstráň filtre'
  },
  formatSearch () {
    return 'Vyhľadávanie'
  },
  formatNoMatches () {
    return 'Nenájdená žiadna vyhovujúca položka'
  },
  formatPaginationSwitch () {
    return 'Skry/Zobraz stránkovanie'
  },
  formatPaginationSwitchDown () {
    return 'Zobraziť stránkovanie'
  },
  formatPaginationSwitchUp () {
    return 'Skryť stránkovanie'
  },
  formatRefresh () {
    return 'Obnoviť'
  },
  formatToggleOn () {
    return 'Zobraziť kartové zobrazenie'
  },
  formatToggleOff () {
    return 'skryť kartové zobrazenie'
  },
  formatColumns () {
    return 'Stĺpce'
  },
  formatColumnsToggleAll () {
    return 'Prepnúť všetky'
  },
  formatFullscreen () {
    return 'Celá obrazovka'
  },
  formatAllRows () {
    return 'Všetky'
  },
  formatAutoRefresh () {
    return 'Automatické obnovenie'
  },
  formatExport () {
    return 'Exportuj dáta'
  },
  formatJumpTo () {
    return 'Ísť'
  },
  formatAdvancedSearch () {
    return 'Pokročilé vyhľadávanie'
  },
  formatAdvancedCloseButton () {
    return 'Zatvoriť'
  },
  formatFilterControlSwitch () {
    return 'Zobraziť/Skryť tlačidlá'
  },
  formatFilterControlSwitchHide () {
    return 'Skryť tlačidlá'
  },
  formatFilterControlSwitchShow () {
    return 'Zobraziť tlačidlá'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK'])
