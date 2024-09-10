/**
 * Bootstrap Table Spanish (Argentina) translation
 * Author: Felix Vera (felix.vera@gmail.com)
 * Edited by: DarkThinking (https://github.com/DarkThinking)
 */

$.fn.bootstrapTable.locales['es-AR'] = {
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
    return `Mostrando ${totalRows} columnas`
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
    return 'Ir'
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
    return `${pageNumber} registros por página`
  },

  formatRefresh () {
    return 'Recargar'
  },

  formatSearch () {
    return 'Buscar'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando desde ${pageFrom} a ${pageTo} de ${totalRows} filas (filtrado de ${totalNotFiltered} columnas totales)`
    }

    return `Mostrando desde ${pageFrom} a ${pageTo} de ${totalRows} filas`
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-AR'])
