/**
 * Bootstrap Table Spanish (Costa Rica) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 */

$.fn.bootstrapTable.locales['es-CR'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'Cargando, por favor espere'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} registros por página`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando de ${pageFrom} a ${pageTo} registros de ${totalRows} registros en total (filtered from ${totalNotFiltered} total rows)`
    }

    return `Mostrando de ${pageFrom} a ${pageTo} registros de ${totalRows} registros en total`
  },
  formatSRPaginationPreText () {
    return 'previous page'
  },
  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },
  formatSRPaginationNextText () {
    return 'next page'
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatClearSearch () {
    return 'Limpiar búsqueda'
  },
  formatSearch () {
    return 'Buscar'
  },
  formatNoMatches () {
    return 'No se encontraron registros'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Refrescar'
  },
  formatToggle () {
    return 'Alternar'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Columnas'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
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
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  },
  formatFilterControlSwitch () {
    return 'Ocultar/Mostrar controles'
  },
  formatFilterControlSwitchHide () {
    return 'Ocultar controles'
  },
  formatFilterControlSwitchShow () {
    return 'Mostrar controles'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR'])
