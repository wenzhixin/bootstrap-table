/**
 * Bootstrap Table Afrikaans translation
 * Author: Phillip Kruger <phillip.kruger@gmail.com>
 */

$.fn.bootstrapTable.locales['af-ZA'] = $.fn.bootstrapTable.locales['af'] = {
  formatCopyRows () {
    return 'Kopieer lyne'
  },
  formatPrint () {
    return 'Druk uit'
  },
  formatLoadingMessage () {
    return 'Laai tans'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} reëls per bladsy`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Wys ${pageFrom} tot ${pageTo} van ${totalRows} lyne (gefiltreer vanaf ${totalNotFiltered} lyne)`
    }
    return `Wys ${pageFrom} tot ${pageTo} van ${totalRows} lyne`
  },
  formatSRPaginationPreText () {
    return 'vorige bladsy'
  },
  formatSRPaginationPageText (page) {
    return `na bladsy ${page}`
  },
  formatSRPaginationNextText () {
    return 'volgende bladsy'
  },
  formatDetailPagination (totalRows) {
    return `${totalRows}-reël vertoon`
  },
  formatClearSearch () {
    return 'Duidelike soektog'
  },
  formatSearch () {
    return 'Navorsing'
  },
  formatNoMatches () {
    return 'Geen resultate nie'
  },
  formatPaginationSwitch () {
    return 'Versteek/Wys paginasie'
  },
  formatPaginationSwitchDown () {
    return 'Wys paginasie'
  },
  formatPaginationSwitchUp () {
    return 'Versteek paginasie'
  },
  formatRefresh () {
    return 'Verfris'
  },
  formatToggleOn () {
    return 'Wys kaartaansig'
  },
  formatToggleOff () {
    return 'Versteek kaartaansig'
  },
  formatColumns () {
    return 'Kolomme'
  },
  formatColumnsToggleAll () {
    return 'Wys alles'
  },
  formatFullscreen () {
    return 'Volskerm'
  },
  formatAllRows () {
    return 'Alles'
  },
  formatAutoRefresh () {
    return 'Verfris outomaties'
  },
  formatExport () {
    return 'Voer data uit'
  },
  formatJumpTo () {
    return 'Gaan na'
  },
  formatAdvancedSearch () {
    return 'Gevorderde soektog'
  },
  formatAdvancedCloseButton () {
    return 'Maak'
  },
  formatFilterControlSwitch () {
    return 'Versteek/Wys kontroles'
  },
  formatFilterControlSwitchHide () {
    return 'Versteek kontroles'
  },
  formatFilterControlSwitchShow () {
    return 'Wys kontroles'
  },
  formatToggleCustomViewOn () {
    return 'Wys pasgemaakte aansig'
  },
  formatToggleCustomViewOff () {
    return 'Versteek pasgemaakte aansig'
  },
  formatClearFilters () {
    return 'Verwyder filters'
  },
  formatAddLevel () {
    return 'Voeg \'n vlak by'
  },
  formatCancel () {
    return 'Kanselleer'
  },
  formatColumn () {
    return 'Kolom'
  },
  formatDeleteLevel () {
    return 'Vee \'n vlak uit'
  },
  formatDuplicateAlertTitle () {
    return 'Duplikaatinskrywings is gevind!'
  },
  formatDuplicateAlertDescription () {
    return 'Verwyder of wysig asseblief duplikaatinskrywings'
  },
  formatMultipleSort () {
    return 'Multi-sorteer'
  },
  formatOrder () {
    return 'Bestelling'
  },
  formatSort () {
    return 'Rangskik'
  },
  formatSortBy () {
    return 'Sorteer volgens'
  },
  formatSortOrders () {
    return {
      asc: 'Stygende',
      desc: 'Dalende'
    }
  },
  formatThenBy () {
    return 'Dan deur'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA'])
