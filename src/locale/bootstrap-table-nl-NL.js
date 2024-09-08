/**
 * Bootstrap Table Dutch (Nederland) translation
 * Author: Your Name <info@a2hankes.nl>
 *         Nevets82 <Nevets82@gmail.com>
 */

$.fn.bootstrapTable.locales['nl-NL'] = $.fn.bootstrapTable.locales['nl'] = {
  formatAddLevel () {
    return 'Niveau toevoegen'
  },

  formatAdvancedCloseButton () {
    return 'Sluiten'
  },

  formatAdvancedSearch () {
    return 'Geavanceerd zoeken'
  },

  formatAllRows () {
    return 'Alle'
  },

  formatAutoRefresh () {
    return 'Automatisch vernieuwen'
  },

  formatCancel () {
    return 'Annuleren'
  },

  formatClearSearch () {
    return 'Verwijder filters'
  },

  formatColumn () {
    return 'Kolom'
  },

  formatColumns () {
    return 'Kolommen'
  },

  formatColumnsToggleAll () {
    return 'Allen omschakelen'
  },

  formatCopyRows () {
    return 'Copy Rows'
  },

  formatDeleteLevel () {
    return 'Niveau verwijderen'
  },

  formatDetailPagination (totalRows) {
    return `Toon ${totalRows} record${totalRows > 1 ? 's' : ''}`
  },

  formatDuplicateAlertDescription () {
    return 'Gelieve dubbele kolommen te verwijderen of wijzigen'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicaten gevonden!'
  },

  formatExport () {
    return 'Exporteer gegevens'
  },

  formatFilterControlSwitch () {
    return 'Verberg/Toon controls'
  },

  formatFilterControlSwitchHide () {
    return 'Verberg controls'
  },

  formatFilterControlSwitchShow () {
    return 'Toon controls'
  },

  formatFullscreen () {
    return 'Volledig scherm'
  },

  formatJumpTo () {
    return 'GA'
  },

  formatLoadingMessage () {
    return 'Laden, even geduld'
  },

  formatMultipleSort () {
    return 'Meervoudige sortering'
  },

  formatNoMatches () {
    return 'Geen resultaten gevonden'
  },

  formatOrder () {
    return 'Volgorde'
  },

  formatPaginationSwitch () {
    return 'Verberg/Toon paginering'
  },

  formatPaginationSwitchDown () {
    return 'Toon paginering'
  },

  formatPaginationSwitchUp () {
    return 'Verberg paginering'
  },

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} records per pagina`
  },

  formatRefresh () {
    return 'Vernieuwen'
  },

  formatSearch () {
    return 'Zoeken'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Toon ${pageFrom} tot ${pageTo} van ${totalRows} record${totalRows > 1 ? 's' : ''} (gefilterd van ${totalNotFiltered} records in totaal)`
    }

    return `Toon ${pageFrom} tot ${pageTo} van ${totalRows} record${totalRows > 1 ? 's' : ''}`
  },

  formatSort () {
    return 'Sorteren'
  },

  formatSortBy () {
    return 'Sorteren op'
  },

  formatSortOrders () {
    return {
      asc: 'Oplopend',
      desc: 'Aflopend'
    }
  },

  formatSRPaginationNextText () {
    return 'volgende pagina'
  },

  formatSRPaginationPageText (page) {
    return `tot pagina ${page}`
  },

  formatSRPaginationPreText () {
    return 'vorige pagina'
  },

  formatThenBy () {
    return 'vervolgens'
  },

  formatToggleOff () {
    return 'Verberg kaartweergave'
  },

  formatToggleOn () {
    return 'Toon kaartweergave'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL'])
