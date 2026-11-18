/**
 * Bootstrap Table Spanish (Costa Rica) translation
 * Author: Dennis Hernández
 * Review: Jei (@jeijei4) (20/Oct/2022)
 */

$.fn.bootstrapTable.locales['es-CR'] = {
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
    return 'Todas las filas'
  },

  formatAutoRefresh () {
    return 'Actualización automática'
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
    return 'Copiar filas'
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
    return 'Exportar'
  },

  formatFilterControlSwitch () {
    return 'Mostrar/ocultar controles'
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
    return 'Ver'
  },

  formatLoadingMessage () {
    return 'Cargando, por favor espere'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'No se encontraron resultados'
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
    return `${pageNumber} filas por página`
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
      return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas (filtrado de un total de ${totalNotFiltered} filas)`
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
    return 'Ocultar vista en tarjetas'
  },

  formatToggleOn () {
    return 'Mostrar vista en tarjetas'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR'])
