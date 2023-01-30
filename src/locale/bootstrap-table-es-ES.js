/**
 * Bootstrap Table Spanish Spain translation
 * Author: Marc Pina<iwalkalone69@gmail.com>
 */

$.fn.bootstrapTable.locales['es-ES'] = $.fn.bootstrapTable.locales['es'] = {
  formatCopyRows () {
    return 'Copiar filas'
  },
  formatPrint () {
    return 'Imprimir'
  },
  formatLoadingMessage () {
    return 'Cargando, por favor espere'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} resultados por página`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultados (filtrado de ${totalNotFiltered} filas totales)`
    }

    return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultados`
  },
  formatSRPaginationPreText () {
    return 'página anterior'
  },
  formatSRPaginationPageText (page) {
    return `a la página ${page}`
  },
  formatSRPaginationNextText () {
    return 'siguiente página'
  },
  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} filas`
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
    return 'Mostrar paginación'
  },
  formatPaginationSwitchUp () {
    return 'Ocultar paginación'
  },
  formatRefresh () {
    return 'Recargar'
  },
  formatToggleOn () {
    return 'Mostrar vista de carta'
  },
  formatToggleOff () {
    return 'Ocultar vista de carta'
  },
  formatColumns () {
    return 'Columnas'
  },
  formatColumnsToggleAll () {
    return 'Cambiar todo'
  },
  formatFullscreen () {
    return 'Pantalla completa'
  },
  formatAllRows () {
    return 'Todos'
  },
  formatAutoRefresh () {
    return 'Auto Recargar'
  },
  formatExport () {
    return 'Exportar los datos'
  },
  formatJumpTo () {
    return 'IR'
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES'])
