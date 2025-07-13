/**
 * Bootstrap Table Afrikaans translation
 * Author: Phillip Kruger <phillip.kruger@gmail.com>
 */

$.fn.bootstrapTable.locales['af-ZA'] = $.fn.bootstrapTable.locales['af'] = {
  formatAddLevel () {
    return 'Voeg \'n vlak by'
  },

  formatAdvancedCloseButton () {
    return 'Maak'
  },

  formatAdvancedSearch () {
    return 'Gevorderde soektog'
  },

  formatAllRows () {
    return 'Alles'
  },

  formatAutoRefresh () {
    return 'Verfris outomaties'
  },

  formatCancel () {
    return 'Kanselleer'
  },

  formatClearSearch () {
    return 'Duidelike soektog'
  },

  formatColumn () {
    return 'Kolom'
  },

  formatColumns () {
    return 'Kolomme'
  },

  formatColumnsToggleAll () {
    return 'Wys alles'
  },

  formatCopyRows () {
    return 'Kopieer lyne'
  },

  formatDeleteLevel () {
    return 'Vee \'n vlak uit'
  },

  formatDetailPagination (totalRows) {
    return `${totalRows}-reël vertoon`
  },

  formatDuplicateAlertDescription () {
    return 'Verwyder of wysig asseblief duplikaatinskrywings'
  },

  formatDuplicateAlertTitle () {
    return 'Duplikaatinskrywings is gevind!'
  },

  formatExport () {
    return 'Voer data uit'
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

  formatFullscreen () {
    return 'Volskerm'
  },

  formatJumpTo () {
    return 'Gaan na'
  },

  formatLoadingMessage () {
    return 'Laai tans'
  },

  formatMultipleSort () {
    return 'Multi-sorteer'
  },

  formatNoMatches () {
    return 'Geen resultate nie'
  },

  formatOrder () {
    return 'Bestelling'
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

  formatPrint () {
    return 'Druk uit'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} reëls per bladsy`
  },

  formatRefresh () {
    return 'Verfris'
  },

  formatSRPaginationNextText () {
    return 'volgende bladsy'
  },

  formatSRPaginationPageText (page) {
    return `na bladsy ${page}`
  },

  formatSRPaginationPreText () {
    return 'vorige bladsy'
  },

  formatSearch () {
    return 'Navorsing'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Wys ${pageFrom} tot ${pageTo} van ${totalRows} lyne (gefiltreer vanaf ${totalNotFiltered} lyne)`
    }

    return `Wys ${pageFrom} tot ${pageTo} van ${totalRows} lyne`
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
  },

  formatToggleCustomViewOff () {
    return 'Versteek pasgemaakte aansig'
  },

  formatToggleCustomViewOn () {
    return 'Wys pasgemaakte aansig'
  },

  formatToggleOff () {
    return 'Versteek kaartaansig'
  },

  formatToggleOn () {
    return 'Wys kaartaansig'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA'])
