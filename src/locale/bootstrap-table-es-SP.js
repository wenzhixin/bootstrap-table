/**
 * Bootstrap Table Spanish (España) translation
 * Author: Antonio Pérez <anpegar@gmail.com>
 */

$.fn.bootstrapTable.locales['es-SP'] = {
  formatLoadingMessage () {
    return 'Cargando, por favor espera'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} registros por p&#225;gina.`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `${pageFrom} - ${pageTo} de ${totalRows} registros (filtered from ${totalNotFiltered} total rows)`
    }

    return `${pageFrom} - ${pageTo} de ${totalRows} registros.`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Buscar'
  },
  formatNoMatches () {
    return 'No se han encontrado registros.'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatRefresh () {
    return 'Actualizar'
  },
  formatToggle () {
    return 'Alternar'
  },
  formatColumns () {
    return 'Columnas'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Todo'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-SP'])
