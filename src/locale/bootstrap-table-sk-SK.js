/**
 * Bootstrap Table Slovak translation
 * Author: Jozef Dúc<jozef.d13@gmail.com>
 */

$.fn.bootstrapTable.locales['sk-SK'] = $.fn.bootstrapTable.locales['sk'] = {
  formatAddLevel () {
    return 'Add Level'
  },

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

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Odstráň filtre'
  },

  formatColumn () {
    return 'Column'
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

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Zobrazuje sa ${totalRows} riadkov`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
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

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Nenájdená žiadna vyhovujúca položka'
  },

  formatOrder () {
    return 'Order'
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

  formatSRPaginationNextText () {
    return 'Nasledujúca strana'
  },

  formatSRPaginationPageText (page) {
    return `na stranu ${page}`
  },

  formatSRPaginationPreText () {
    return 'Predchádzajúca strana'
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
    return 'skryť kartové zobrazenie'
  },

  formatToggleOn () {
    return 'Zobraziť kartové zobrazenie'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK'])
