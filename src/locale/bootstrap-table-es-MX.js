/**
 * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
 * Author: Felix Vera (felix.vera@gmail.com)
 * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
 * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
 * Revisión: Ricardo González (rickygzz85@gmail.com) (20/Oct/2021)
 */

$.fn.bootstrapTable.locales['es-MX'] = {
  formatAddLevel () {
    return 'Add Level'
  },

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

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Limpiar búsqueda'
  },

  formatColumn () {
    return 'Column'
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

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} filas`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
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

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'No se encontraron registros que coincidan'
  },

  formatOrder () {
    return 'Order'
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

  formatSRPaginationNextText () {
    return 'página siguiente'
  },

  formatSRPaginationPageText (page) {
    return `ir a la página ${page}`
  },

  formatSRPaginationPreText () {
    return 'página anterior'
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

  formatSort () {
    return 'Sort'
  },

  formatSortBy () {
    return 'Sort by'
  },

  formatSortOrders () {
    return {
      asc: 'Ascending',
      desc: 'Descending'
    }
  },

  formatThenBy () {
    return 'Then by'
  },

  formatToggleCustomViewOff () {
    return 'Hide custom view'
  },

  formatToggleCustomViewOn () {
    return 'Show custom view'
  },

  formatToggleOff () {
    return 'Ocultar vista'
  },

  formatToggleOn () {
    return 'Mostrar vista'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX'])
