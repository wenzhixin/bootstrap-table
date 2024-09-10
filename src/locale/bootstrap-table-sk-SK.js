/**
 * Bootstrap Table Slovak translation
 * Author: Jozef Dúc<jozef.d13@gmail.com>
 */

$.fn.bootstrapTable.locales['sk-SK'] = $.fn.bootstrapTable.locales['sk'] = {
  formatAdvancedCloseButton () {
    return 'Zatvoriť'
  },

  formatAdvancedSearch () {
    return 'Pokročilé vyhľadávanie'
  },

  formatAllRows () {
    return 'Všetky'
  },

  formatAutoRefresh () {
    return 'Automatické obnovenie'
  },

  formatClearSearch () {
    return 'Odstráň filtre'
  },

  formatColumns () {
    return 'Stĺpce'
  },

  formatColumnsToggleAll () {
    return 'Prepnúť všetky'
  },

  formatCopyRows () {
    return 'Skopírovať riadky'
  },

  formatDetailPagination (totalRows) {
    return `Zobrazuje sa ${totalRows} riadkov`
  },

  formatExport () {
    return 'Exportuj dáta'
  },

  formatFilterControlSwitch () {
    return 'Zobraziť/Skryť tlačidlá'
  },

  formatFilterControlSwitchHide () {
    return 'Skryť tlačidlá'
  },

  formatFilterControlSwitchShow () {
    return 'Zobraziť tlačidlá'
  },

  formatFullscreen () {
    return 'Celá obrazovka'
  },

  formatJumpTo () {
    return 'Ísť'
  },

  formatLoadingMessage () {
    return 'Prosím čakajte'
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

  formatPrint () {
    return 'Vytlačiť'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} záznamov na stranu`
  },

  formatRefresh () {
    return 'Obnoviť'
  },

  formatSearch () {
    return 'Vyhľadávanie'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Zobrazená ${pageFrom}. - ${pageTo}. položka z celkových ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Zobrazená ${pageFrom}. - ${pageTo}. položka z celkových ${totalRows}`
  },

  formatSRPaginationNextText () {
    return 'Nasledujúca strana'
  },

  formatSRPaginationPageText (page) {
    return `na stranu ${page}`
  },

  formatSRPaginationPreText () {
    return 'Predchádzajúca strana'
  },

  formatToggleOff () {
    return 'skryť kartové zobrazenie'
  },

  formatToggleOn () {
    return 'Zobraziť kartové zobrazenie'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK'])
