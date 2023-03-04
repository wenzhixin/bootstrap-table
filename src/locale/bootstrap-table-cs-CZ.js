/**
 * Bootstrap Table Czech translation
 * Author: Lukas Kral (monarcha@seznam.cz)
 * Author: Jakub Svestka <svestka1999@gmail.com>
 */

$.fn.bootstrapTable.locales['cs-CZ'] = $.fn.bootstrapTable.locales['cs'] = {
  formatCopyRows () {
    return 'Kopírovat řádky'
  },
  formatPrint () {
    return 'Tisk'
  },
  formatLoadingMessage () {
    return 'Čekejte, prosím'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} položek na stránku`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Zobrazena ${pageFrom}. - ${pageTo} . položka z celkových ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Zobrazena ${pageFrom}. - ${pageTo} . položka z celkových ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'předchozí strana'
  },
  formatSRPaginationPageText (page) {
    return `na stranu ${page}`
  },
  formatSRPaginationNextText () {
    return 'další strana'
  },
  formatDetailPagination (totalRows) {
    return `Zobrazuji ${totalRows} řádek`
  },
  formatClearSearch () {
    return 'Smazat hledání'
  },
  formatSearch () {
    return 'Vyhledávání'
  },
  formatNoMatches () {
    return 'Nenalezena žádná vyhovující položka'
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
  formatRefresh () {
    return 'Aktualizovat'
  },
  formatToggleOn () {
    return 'Zobrazit karty'
  },
  formatToggleOff () {
    return 'Zobrazit tabulku'
  },
  formatColumns () {
    return 'Sloupce'
  },
  formatColumnsToggleAll () {
    return 'Zobrazit/Skrýt vše'
  },
  formatFullscreen () {
    return 'Zapnout/Vypnout fullscreen'
  },
  formatAllRows () {
    return 'Vše'
  },
  formatAutoRefresh () {
    return 'Automatické obnovení'
  },
  formatExport () {
    return 'Export dat'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Pokročilé hledání'
  },
  formatAdvancedCloseButton () {
    return 'Zavřít'
  },
  formatFilterControlSwitch () {
    return 'Skrýt/Zobrazit ovladače'
  },
  formatFilterControlSwitchHide () {
    return 'Skrýt ovladače'
  },
  formatFilterControlSwitchShow () {
    return 'Zobrazit ovladače'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ'])
