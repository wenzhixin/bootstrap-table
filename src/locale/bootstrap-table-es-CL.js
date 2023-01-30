/**
 * Traducción de librería Bootstrap Table a Español (Chile)
 * @author Brian Álvarez Azócar
 * email brianalvarezazocar@gmail.com
 */

$.fn.bootstrapTable.locales['es-CL'] = {
  formatCopyRows () {
    return 'Copiar Filas'
  },
  formatPrint () {
    return 'Imprimir'
  },
  formatLoadingMessage () {
    return 'Cargando, espere por favor'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} filas por página`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas (filtrado de ${totalNotFiltered} filas totales)`
    }

    return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas`
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
    return 'No se encontraron registros'
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
    return 'Refrescar'
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
    return 'Todo'
  },
  formatAutoRefresh () {
    return 'Auto Recargar'
  },
  formatExport () {
    return 'Exportar datos'
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CL'])
