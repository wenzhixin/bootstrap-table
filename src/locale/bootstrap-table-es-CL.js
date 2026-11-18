/**
 * Traducción de librería Bootstrap Table a Español (Chile)
 * @author Brian Álvarez Azócar
 * email brianalvarezazocar@gmail.com
 */

$.fn.bootstrapTable.locales['es-CL'] = {
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
    return 'Auto Recargar'
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
    return 'Cambiar todo'
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
    return 'No se encontraron registros'
  },

  formatOrder () {
    return 'Order'
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

  formatSRPaginationNextText () {
    return 'siguiente página'
  },

  formatSRPaginationPageText (page) {
    return `a la página ${page}`
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
    return 'Ocultar vista de carta'
  },

  formatToggleOn () {
    return 'Mostrar vista de carta'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CL'])
