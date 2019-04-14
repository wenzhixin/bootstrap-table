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
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
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
  formatRefresh () {
    return 'Refrescar'
  },
  formatToggle () {
    return 'Ocultar/Mostrar'
  },
  formatColumns () {
    return 'Columnas'
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
  formatClearFilters () {
    return 'Borrar los filtros'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Búsqueda avanzada'
  },
  formatAdvancedCloseButton () {
    return 'Cerrar'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES'])
