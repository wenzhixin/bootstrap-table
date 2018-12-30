/**
 * Bootstrap Table Dutch translation
 * Author: Your Name <info@a2hankes.nl>
 */
($ => {
  $.fn.bootstrapTable.locales['nl-NL'] = {
    formatLoadingMessage () {
      return 'Laden, even geduld...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} records per pagina`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Toon ${pageFrom} tot ${pageTo} van ${totalRows} record${(totalRows > 1) ? 's' : ''}`
    },
    formatDetailPagination (totalRows) {
      return `Toon ${totalRows} record${(totalRows > 1) ? 's' : ''}`
    },
    formatSearch () {
      return 'Zoeken'
    },
    formatNoMatches () {
      return 'Geen resultaten gevonden'
    },
    formatRefresh () {
      return 'Vernieuwen'
    },
    formatToggle () {
      return 'Omschakelen'
    },
    formatColumns () {
      return 'Kolommen'
    },
    formatAllRows () {
      return 'Alle'
    },
    formatPaginationSwitch () {
      return 'Verberg/Toon paginatie'
    },
    formatExport () {
      return 'Exporteer data'
    },
    formatClearFilters () {
      return 'Verwijder filters'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nl-NL'])
})(jQuery)
