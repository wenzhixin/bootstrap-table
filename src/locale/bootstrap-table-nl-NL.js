/**
 * Bootstrap Table Dutch (Nederland) translation
 * Author: Your Name <info@a2hankes.nl>
 *         Nevets82 <Nevets82@gmail.com>
 */

$.fn.bootstrapTable.locales['nl-NL'] = $.fn.bootstrapTable.locales['nl'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'Laden, even geduld'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} records per pagina`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Toon ${pageFrom} tot ${pageTo} van ${totalRows} record${(totalRows > 1) ? 's' : ''} (gefilterd van ${totalNotFiltered} records in totaal)`
    }

    return `Toon ${pageFrom} tot ${pageTo} van ${totalRows} record${(totalRows > 1) ? 's' : ''}`
  },
  formatSRPaginationPreText () {
    return 'vorige pagina'
  },
  formatSRPaginationPageText (page) {
    return `tot pagina ${page}`
  },
  formatSRPaginationNextText () {
    return 'volgende pagina'
  },
  formatDetailPagination (totalRows) {
    return `Toon ${totalRows} record${(totalRows > 1) ? 's' : ''}`
  },
  formatClearSearch () {
    return 'Verwijder filters'
  },
  formatSearch () {
    return 'Zoeken'
  },
  formatNoMatches () {
    return 'Geen resultaten gevonden'
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
  formatRefresh () {
    return 'Vernieuwen'
  },
  formatToggle () {
    return 'Omschakelen'
  },
  formatToggleOn () {
    return 'Toon kaartweergave'
  },
  formatToggleOff () {
    return 'Verberg kaartweergave'
  },
  formatColumns () {
    return 'Kolommen'
  },
  formatColumnsToggleAll () {
    return 'Allen omschakelen'
  },
  formatFullscreen () {
    return 'Volledig scherm'
  },
  formatAllRows () {
    return 'Alle'
  },
  formatAutoRefresh () {
    return 'Automatisch vernieuwen'
  },
  formatExport () {
    return 'Exporteer gegevens'
  },
  formatJumpTo () {
    return 'GA'
  },
  formatAdvancedSearch () {
    return 'Geavanceerd zoeken'
  },
  formatAdvancedCloseButton () {
    return 'Sluiten'
  },
  formatFilterControlSwitch () {
    return 'Verberg/Toon controls'
  },
  formatFilterControlSwitchHide () {
    return 'Verberg controls'
  },
  formatFilterControlSwitchShow () {
    return 'Toon controls'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL'])
