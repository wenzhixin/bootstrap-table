/**
 * Bootstrap Table Spanish Spain translation
 * Author: Marc Pina<iwalkalone69@gmail.com>
 */

$.fn.bootstrapTable.locales['es-ES'] = {
  formatLoadingMessage () {
    return 'Por favor espere'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} resultados por página`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultados (filtered from ${totalNotFiltered} total rows)`
    }

    return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultados`
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
    return 'No se encontraron resultados'
  },
  formatPaginationSwitch () {
    return 'Ocultar/Mostrar paginación'
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
    return 'Ocultar/Mostrar'
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
    return 'Todos'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Exportar los datos'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Búsqueda avanzada'
  },
  formatAdvancedCloseButton () {
    return 'Cerrar'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES'])
