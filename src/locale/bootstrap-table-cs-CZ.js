/**
 * Bootstrap Table Czech translation
 * Author: Lukas Kral (monarcha@seznam.cz)
 * Author: Jakub Svestka <svestka1999@gmail.com>
 */

$.fn.bootstrapTable.locales['cs-CZ'] = {
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
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
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
  formatRefresh () {
    return 'Aktualizovat'
  },
  formatToggle () {
    return 'Přepni'
  },
  formatColumns () {
    return 'Sloupce'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Vše'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Export data'
  },
  formatClearFilters () {
    return 'Clear filters'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ'])
