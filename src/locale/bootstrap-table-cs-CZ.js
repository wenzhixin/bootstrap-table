/**
 * Bootstrap Table Czech translation
 * Author: Lukas Kral (monarcha@seznam.cz)
 * Author: Jakub Svestka <svestka1999@gmail.com>
 */

$.fn.bootstrapTable.locales['cs-CZ'] = $.fn.bootstrapTable.locales['cs'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Zavřít'
  },

  formatAdvancedSearch () {
    return 'Pokročilé hledání'
  },

  formatAllRows () {
    return 'Vše'
  },

  formatAutoRefresh () {
    return 'Automatické obnovení'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Smazat hledání'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Sloupce'
  },

  formatColumnsToggleAll () {
    return 'Zobrazit/Skrýt vše'
  },

  formatCopyRows () {
    return 'Kopírovat řádky'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Zobrazuji ${totalRows} řádek`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Export dat'
  },

  formatFilterControlSwitch () {
    return 'Skrýt/Zobrazit ovladače'
  },

  formatFilterControlSwitchHide () {
    return 'Skrýt ovladače'
  },

  formatFilterControlSwitchShow () {
    return 'Zobrazit ovladače'
  },

  formatFullscreen () {
    return 'Zapnout/Vypnout fullscreen'
  },

  formatJumpTo () {
    return 'GO'
  },

  formatLoadingMessage () {
    return 'Čekejte, prosím'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Nenalezena žádná vyhovující položka'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Skrýt/Zobrazit stránkování'
  },

  formatPaginationSwitchDown () {
    return 'Zobrazit stránkování'
  },

  formatPaginationSwitchUp () {
    return 'Skrýt stránkování'
  },

  formatPrint () {
    return 'Tisk'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} položek na stránku`
  },

  formatRefresh () {
    return 'Aktualizovat'
  },

  formatSRPaginationNextText () {
    return 'další strana'
  },

  formatSRPaginationPageText (page) {
    return `na stranu ${page}`
  },

  formatSRPaginationPreText () {
    return 'předchozí strana'
  },

  formatSearch () {
    return 'Vyhledávání'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Zobrazena ${pageFrom}. - ${pageTo} . položka z celkových ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Zobrazena ${pageFrom}. - ${pageTo} . položka z celkových ${totalRows}`
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
    return 'Zobrazit tabulku'
  },

  formatToggleOn () {
    return 'Zobrazit karty'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ'])
