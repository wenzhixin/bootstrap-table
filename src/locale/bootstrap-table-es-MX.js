/**
 * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
 * Author: Felix Vera (felix.vera@gmail.com)
 * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
 * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
 * Revisión: Ricardo González (rickygzz85@gmail.com) (20/Oct/2021)
 */

$.fn.bootstrapTable.locales['es-MX'] = {
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
    return 'Auto actualizar'
  },

  formatClearSearch () {
    return 'Limpiar búsqueda'
  },

  formatColumns () {
    return 'Columnas'
  },

  formatColumnsToggleAll () {
    return 'Alternar todo'
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
    return 'No se encontraron registros que coincidan'
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

  formatPrint () {
    return 'Imprimir'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} resultados por página`
  },

  formatRefresh () {
    return 'Actualizar'
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
    return 'página siguiente'
  },

  formatSRPaginationPageText (page) {
    return `ir a la página ${page}`
  },

  formatSRPaginationPreText () {
    return 'página anterior'
  },

  formatToggleOff () {
    return 'Ocultar vista'
  },

  formatToggleOn () {
    return 'Mostrar vista'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX'])
