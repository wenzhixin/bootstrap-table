/**
 * Bootstrap Table Spanish Spain translation
 * Author: Marc Pina<iwalkalone69@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['es-ES'] = {
    formatLoadingMessage () {
      return 'Por favor espere...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} resultados por página`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultados`
    },
    formatSearch () {
      return 'Buscar'
    },
    formatNoMatches () {
      return 'No se encontraron resultados'
    },
    formatPaginationSwitch () {
      return 'Ocultar/Mostrar paginación'
    },
    formatRefresh () {
      return 'Refrescar'
    },
    formatToggle () {
      return 'Ocultar/Mostrar'
    },
    formatColumns () {
      return 'Columnas'
    },
    formatAllRows () {
      return 'Todos'
    },
    formatExport: function () {
      return 'Exportar los datos'
    },
    formatClearFilters: function () {
      return 'Borrar los filtros'
    },
    formatMultipleSort: function () {
      return 'Orden avanzado'
    },
    formatAddLevel: function () {
      return 'Añadir un nivel'
    },
    formatDeleteLevel: function () {
      return 'Eliminar un nivel'
    },
    formatColumn: function () {
      return 'Columna'
    },
    formatOrder: function () {
      return 'Orden'
    },
    formatSortBy: function () {
      return 'Ordenar por'
    },
    formatThenBy: function () {
      return 'Y por'
    },
    formatSort: function () {
      return 'Ordenar'
    },
    formatCancel: function () {
      return 'Cancelar'
    },
    formatDuplicateAlertTitle: function () {
      return 'Duplicado(s) detectado(s)!'
    },
    formatDuplicateAlertDescription: function () {
      return 'Eliminar o cambiar columnas duplicadas.'
    },
    formatSortOrders: function () {
      return {
        asc: 'Ascendente',
        desc: 'Descendente'
      }
    },
    formatAdvancedSearch: function () {
      return 'Búsqueda avanzada'
    },
    formatAdvancedCloseButton: function () {
      return 'Cerrar'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES'])
})(jQuery)
