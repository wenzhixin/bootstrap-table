/**
 * Bootstrap Table Czech translation
 * Author: Lukas Kral (monarcha@seznam.cz)
 * Author: Jakub Svestka <svestka1999@gmail.com>
 */

$.fn.bootstrapTable.locales['cs-CZ'] = $.fn.bootstrapTable.locales['cs'] = {
  formatAddLevel () {
    return 'Přidat úroveň'
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
    return 'Zrušit'
  },

  formatClearSearch () {
    return 'Smazat hledání'
  },

  formatColumn () {
    return 'Sloupec'
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
    return 'Odebrat úroveň'
  },

  formatDetailPagination (totalRows) {
    return `Počet zobrazených řádků: ${totalRows}`
  },

  formatDuplicateAlertDescription () {
    return 'Odeberte nebo změňte sloupce, které se opakují.'
  },

  formatDuplicateAlertTitle () {
    return 'Nalezeny duplicity!'
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
    return 'Zapnout/Vypnout celou obrazovku'
  },

  formatJumpTo () {
    return 'Přejít'
  },

  formatLoadingMessage () {
    return 'Čekejte, prosím'
  },

  formatMultipleSort () {
    return 'Řazení podle více sloupců'
  },

  formatNoMatches () {
    return 'Nenalezena žádná vyhovující položka'
  },

  formatOrder () {
    return 'Pořadí'
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
    return `Řádků na stránce: ${pageNumber}`
  },

  formatRefresh () {
    return 'Aktualizovat'
  },

  formatSRPaginationNextText () {
    return 'další stránka'
  },

  formatSRPaginationPageText (page) {
    return `na stránku ${page}`
  },

  formatSRPaginationPreText () {
    return 'předchozí stránka'
  },

  formatSearch () {
    return 'Vyhledávání'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Zobrazeny řádky ${pageFrom}–${pageTo} z ${totalRows} (vyfiltrováno z ${totalNotFiltered})`
    }

    return `Zobrazeny řádky ${pageFrom}–${pageTo} z ${totalRows}`
  },

  formatSort () {
    return 'Seřadit'
  },

  formatSortBy () {
    return 'Seřadit podle'
  },

  formatSortOrders () {
    return {
      asc: 'Vzestupně',
      desc: 'Sestupně'
    }
  },

  formatThenBy () {
    return 'Potom podle'
  },

  formatToggleCustomViewOff () {
    return 'Skrýt vlastní pohled'
  },

  formatToggleCustomViewOn () {
    return 'Zobrazit vlastní pohled'
  },

  formatToggleOff () {
    return 'Zobrazit tabulku'
  },

  formatToggleOn () {
    return 'Zobrazit karty'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ'])
