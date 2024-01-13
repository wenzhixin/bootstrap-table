/**
 * Bootstrap Table Spanish Spain translation
 * Author: Marc Pina<iwalkalone69@gmail.com>
 * Update: @misteregis <misteregis@gmail.com>
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
    const plural = totalRows > 1 ? 's' : ''

    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultado${plural} (filtrado de un total de ${totalNotFiltered} fila${plural})`
    }

    return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultado${plural}`
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
    return `Mostrando ${totalRows} fila${totalRows > 1 ? 's' : ''}`
  },
  formatClearSearch () {
    return 'Limpiar búsqueda'
  },
  formatSearch () {
    return 'Buscar'
  },
  formatNoMatches () {
    return 'No se encontraron resultados coincidentes'
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
    return 'Ocultar/Exibir controles'
  },
  formatFilterControlSwitchHide () {
    return 'Ocultar controles'
  },
  formatFilterControlSwitchShow () {
    return 'Mostrar controles'
  },
  formatAddLevel () {
    return 'Agregar nivel'
  },
  formatCancel () {
    return 'Cancelar'
  },
  formatColumn () {
    return 'Columna'
  },
  formatDeleteLevel () {
    return 'Eliminar nivel'
  },
  formatDuplicateAlertTitle () {
    return '¡Se encontraron entradas duplicadas!'
  },
  formatDuplicateAlertDescription () {
    return 'Por favor, elimine o modifique las columnas duplicadas'
  },
  formatMultipleSort () {
    return 'Ordenación múltiple'
  },
  formatOrder () {
    return 'Orden'
  },
  formatSort () {
    return 'Ordenar'
  },
  formatSortBy () {
    return 'Ordenar por'
  },
  formatThenBy () {
    return 'a continuación'
  },
  formatSortOrders () {
    return {
      asc: 'Ascendente',
      desc: 'Descendente'
    }
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES'])
