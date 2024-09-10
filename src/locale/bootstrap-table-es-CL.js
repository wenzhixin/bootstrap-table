/**
 * Traducción de librería Bootstrap Table a Español (Chile)
 * @author Brian Álvarez Azócar
 * email brianalvarezazocar@gmail.com
 */

$.fn.bootstrapTable.locales['es-CL'] = {
  formatAdvancedCloseButton () {
    return 'Cerrar'
  },

  formatAdvancedSearch () {
    return 'Búsqueda avanzada'
  },

  formatAllRows () {
    return 'Todo'
  },

  formatAutoRefresh () {
    return 'Auto Recargar'
  },

  formatClearSearch () {
    return 'Limpiar búsqueda'
  },

  formatColumns () {
    return 'Columnas'
  },

  formatColumnsToggleAll () {
    return 'Cambiar todo'
  },

  formatCopyRows () {
    return 'Copiar Filas'
  },

  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} filas`
  },

  formatExport () {
    return 'Exportar datos'
  },

  formatFilterControlSwitch () {
    return 'Ocultar/Mostrar controles'
  },

  formatFilterControlSwitchHide () {
    return 'Ocultar controles'
  },

  formatFilterControlSwitchShow () {
    return 'Mostrar controles'
  },

  formatFullscreen () {
    return 'Pantalla completa'
  },

  formatJumpTo () {
    return 'IR'
  },

  formatLoadingMessage () {
    return 'Cargando, espere por favor'
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

  formatPrint () {
    return 'Imprimir'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} filas por página`
  },

  formatRefresh () {
    return 'Refrescar'
  },

  formatSearch () {
    return 'Buscar'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas (filtrado de ${totalNotFiltered} filas totales)`
    }

    return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas`
  },

  formatSRPaginationNextText () {
    return 'siguiente página'
  },

  formatSRPaginationPageText (page) {
    return `a la página ${page}`
  },

  formatSRPaginationPreText () {
    return 'página anterior'
  },

  formatToggleOff () {
    return 'Ocultar vista de carta'
  },

  formatToggleOn () {
    return 'Mostrar vista de carta'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CL'])
