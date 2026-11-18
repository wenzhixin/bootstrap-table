/**
 * Bootstrap Table Spanish Spain translation
 * Author: Marc Pina<iwalkalone69@gmail.com>
 * Update: @misteregis <misteregis@gmail.com>
 */

$.fn.bootstrapTable.locales['es-ES'] = $.fn.bootstrapTable.locales['es'] = {
  formatAddLevel () {
    return 'Agregar nivel'
  },

  formatAdvancedCloseButton () {
    return 'Cerrar'
  },

  formatAdvancedSearch () {
    return 'Búsqueda avanzada'
  },

  formatAllRows () {
    return 'Todos'
  },

  formatAutoRefresh () {
    return 'Auto Recargar'
  },

  formatCancel () {
    return 'Cancelar'
  },

  formatClearSearch () {
    return 'Limpiar búsqueda'
  },

  formatColumn () {
    return 'Columna'
  },

  formatColumns () {
    return 'Columnas'
  },

  formatColumnsToggleAll () {
    return 'Cambiar todo'
  },

  formatCopyRows () {
    return 'Copiar filas'
  },

  formatDeleteLevel () {
    return 'Eliminar nivel'
  },

  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} fila${totalRows > 1 ? 's' : ''}`
  },

  formatDuplicateAlertDescription () {
    return 'Por favor, elimine o modifique las columnas duplicadas'
  },

  formatDuplicateAlertTitle () {
    return '¡Se encontraron entradas duplicadas!'
  },

  formatExport () {
    return 'Exportar los datos'
  },

  formatFilterControlSwitch () {
    return 'Ocultar/Exibir controles'
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
    return 'Cargando, por favor espere'
  },

  formatMultipleSort () {
    return 'Ordenación múltiple'
  },

  formatNoMatches () {
    return 'No se encontraron resultados coincidentes'
  },

  formatOrder () {
    return 'Orden'
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
    return `${pageNumber} resultados por página`
  },

  formatRefresh () {
    return 'Recargar'
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
    const plural = totalRows > 1 ? 's' : ''

    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultado${plural} (filtrado de un total de ${totalNotFiltered} fila${plural})`
    }

    return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultado${plural}`
  },

  formatSort () {
    return 'Ordenar'
  },

  formatSortBy () {
    return 'Ordenar por'
  },

  formatSortOrders () {
    return {
      asc: 'Ascendente',
      desc: 'Descendente'
    }
  },

  formatThenBy () {
    return 'a continuación'
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES'])
