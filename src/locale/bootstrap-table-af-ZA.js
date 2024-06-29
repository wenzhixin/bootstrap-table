/**
 * Bootstrap Table Afrikaans translation
 * Author: Phillip Kruger <phillip.kruger@gmail.com>
 */

$.fn.bootstrapTable.locales['af-ZA'] = $.fn.bootstrapTable.locales['af'] = {
  // General.
  formatAllRows () {
    return 'Alles'
  },
  formatClearSearch () {
    return 'Duidelike soektog'
  },
  formatColumns () {
    return 'Kolomme'
  },
  formatColumnsToggleAll () {
    return 'Wys alles'
  },
  formatDetailPagination (totalRows) {
    return `${totalRows}-reël vertoon`
  },
  formatFullscreen () {
    return 'Volskerm'
  },
  formatLoadingMessage () {
    return 'Laai tans'
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
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} reëls per bladsy`
  },
  formatRefresh () {
    return 'Verfris'
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
  formatSRPaginationNextText () {
    return 'volgende bladsy'
  },
  formatSRPaginationPageText (page) {
    return `na bladsy ${page}`
  },
  formatSRPaginationPreText () {
    return 'vorige bladsy'
  },
  formatToggleOn () {
    return 'Wys kaartaansig'
  },
  formatToggleOff () {
    return 'Versteek kaartaansig'
  },

  // Extension: Auto Refresh.
  formatAutoRefresh () {
    return 'Verfris outomaties'
  },

  // Extension: Copy Rows.
  formatCopyRows () {
    return 'Kopieer lyne'
  },

  // Extension: Custom View.
  formatToggleCustomViewOn () {
    return 'Wys pasgemaakte aansig'
  },
  formatToggleCustomViewOff () {
    return 'Versteek pasgemaakte aansig'
  },

  // Extension: Export.
  formatExport () {
    return 'Voer data uit'
  },

  // Extension: Filter Control.
  formatClearFilters () {
    return 'Verwyder filters'
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

  // Extension: Multiple Sort.
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
  },

  // Extension: Page Jump To.
  formatJumpTo () {
    return 'Gaan na'
  },

  // Extension: Print.
  formatPrint () {
    return 'Druk uit'
  },

  // Extension: Toolbar.
  formatAdvancedCloseButton () {
    return 'Maak'
  },
  formatAdvancedSearch () {
    return 'Gevorderde soektog'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA'])
