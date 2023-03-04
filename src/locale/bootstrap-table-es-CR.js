/**
 * Bootstrap Table Spanish (Costa Rica) translation
 * Author: Dennis Hernández
 * Review: Jei (@jeijei4) (20/Oct/2022)
 */

$.fn.bootstrapTable.locales['es-CR'] = {
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
    return `${pageNumber} filas por página`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas (filtrado de un total de ${totalNotFiltered} filas)`
    }

    return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas`
  },
  formatSRPaginationPreText () {
    return 'página anterior'
  },
  formatSRPaginationPageText (page) {
    return `ir a la página ${page}`
  },
  formatSRPaginationNextText () {
    return 'página siguiente'
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
    return 'Mostrar/ocultar paginación'
  },
  formatPaginationSwitchDown () {
    return 'Mostrar paginación'
  },
  formatPaginationSwitchUp () {
    return 'Ocultar paginación'
  },
  formatRefresh () {
    return 'Actualizar'
  },
  formatToggleOn () {
    return 'Mostrar vista en tarjetas'
  },
  formatToggleOff () {
    return 'Ocultar vista en tarjetas'
  },
  formatColumns () {
    return 'Columnas'
  },
  formatColumnsToggleAll () {
    return 'Alternar todo'
  },
  formatFullscreen () {
    return 'Pantalla completa'
  },
  formatAllRows () {
    return 'Todas las filas'
  },
  formatAutoRefresh () {
    return 'Actualización automática'
  },
  formatExport () {
    return 'Exportar'
  },
  formatJumpTo () {
    return 'Ver'
  },
  formatAdvancedSearch () {
    return 'Búsqueda avanzada'
  },
  formatAdvancedCloseButton () {
    return 'Cerrar'
  },
  formatFilterControlSwitch () {
    return 'Mostrar/ocultar controles'
  },
  formatFilterControlSwitchHide () {
    return 'Ocultar controles'
  },
  formatFilterControlSwitchShow () {
    return 'Mostrar controles'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR'])
