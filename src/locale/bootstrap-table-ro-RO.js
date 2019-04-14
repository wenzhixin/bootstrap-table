/**
 * Bootstrap Table Romanian translation
 * Author: cristake <cristianiosif@me.com>
 */

$.fn.bootstrapTable.locales['ro-RO'] = {
  formatLoadingMessage () {
    return 'Se incarca, va rugam asteptati'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} inregistrari pe pagina`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Arata de la ${pageFrom} pana la ${pageTo} din ${totalRows} randuri (filtered from ${totalNotFiltered} total rows)`
    }

    return `Arata de la ${pageFrom} pana la ${pageTo} din ${totalRows} randuri`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Cauta'
  },
  formatNoMatches () {
    return 'Nu au fost gasite inregistrari'
  },
  formatPaginationSwitch () {
    return 'Ascunde/Arata paginatia'
  },
  formatRefresh () {
    return 'Reincarca'
  },
  formatToggle () {
    return 'Comuta'
  },
  formatColumns () {
    return 'Coloane'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Toate'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ro-RO'])
