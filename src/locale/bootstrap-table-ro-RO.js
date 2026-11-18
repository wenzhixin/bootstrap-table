/**
 * Bootstrap Table Romanian translation
 * Author: cristake <cristianiosif@me.com>
 */

$.fn.bootstrapTable.locales['ro-RO'] = $.fn.bootstrapTable.locales['ro'] = {
  formatAddLevel () {
    return 'Adaugă nivel'
  },

  formatAdvancedCloseButton () {
    return 'Închide'
  },

  formatAdvancedSearch () {
    return 'Căutare avansată'
  },

  formatAllRows () {
    return 'Toate'
  },

  formatAutoRefresh () {
    return 'Reîncărcare automată'
  },

  formatCancel () {
    return 'Anulează'
  },

  formatClearSearch () {
    return 'Șterge căutarea'
  },

  formatColumn () {
    return 'Coloană'
  },

  formatColumns () {
    return 'Coloane'
  },

  formatColumnsToggleAll () {
    return 'Selectează toate'
  },

  formatCopyRows () {
    return 'Copiază rândurile'
  },

  formatDeleteLevel () {
    return 'Șterge nivel'
  },

  formatDetailPagination (totalRows) {
    // Romanian plural: 1 rând, 2 rânduri, 20 de rânduri
    const n = parseInt(totalRows, 10)
    let rows = 'de rânduri'

    if (n === 1) {
      rows = 'rând'
    } else if (n === 0 || n % 100 >= 1 && n % 100 <= 19) {
      rows = 'rânduri'
    }

    return `Se afișează ${totalRows} ${rows}`
  },

  formatDuplicateAlertDescription () {
    return 'Vă rugăm să eliminați sau să modificați coloanele duplicate.'
  },

  formatDuplicateAlertTitle () {
    return 'Au fost detectate duplicate!'
  },

  formatExport () {
    return 'Exportă datele'
  },

  formatFilterControlSwitch () {
    return 'Ascunde/afișează filtrele'
  },

  formatFilterControlSwitchHide () {
    return 'Ascunde filtrele'
  },

  formatFilterControlSwitchShow () {
    return 'Afișează filtrele'
  },

  formatFullscreen () {
    return 'Ecran complet'
  },

  formatJumpTo () {
    return 'Mergi'
  },

  formatLoadingMessage () {
    return 'Se încarcă, vă rugăm să așteptați'
  },

  formatMultipleSort () {
    return 'Sortare multiplă'
  },

  formatNoMatches () {
    return 'Nu au fost găsite înregistrări'
  },

  formatOrder () {
    return 'Ordine'
  },

  formatPaginationSwitch () {
    return 'Ascunde/afișează paginarea'
  },

  formatPaginationSwitchDown () {
    return 'Afișează paginarea'
  },

  formatPaginationSwitchUp () {
    return 'Ascunde paginarea'
  },

  formatPrint () {
    return 'Imprimă'
  },

  formatRecordsPerPage (pageNumber) {
    return `Rânduri pe pagină: ${pageNumber}`
  },

  formatRefresh () {
    return 'Reîncarcă'
  },

  formatSRPaginationNextText () {
    return 'pagina următoare'
  },

  formatSRPaginationPageText (page) {
    return `la pagina ${page}`
  },

  formatSRPaginationPreText () {
    return 'pagina anterioară'
  },

  formatSearch () {
    return 'Caută'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    // Romanian plural: 1 rând, 2 rânduri, 20 de rânduri
    const rows = count => {
      const n = parseInt(count, 10)

      if (n === 1) {
        return `${count} rând`
      }

      if (n === 0 || n % 100 >= 1 && n % 100 <= 19) {
        return `${count} rânduri`
      }

      return `${count} de rânduri`
    }

    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      const filtered = parseInt(totalRows, 10) === 1 ? 'filtrat' : 'filtrate'

      return `Se afișează de la ${pageFrom} la ${pageTo} din ${rows(totalRows)} (${filtered} dintr-un total de ${rows(totalNotFiltered)})`
    }

    return `Se afișează de la ${pageFrom} la ${pageTo} din ${rows(totalRows)}`
  },

  formatSort () {
    return 'Sortează'
  },

  formatSortBy () {
    return 'Sortează după'
  },

  formatSortOrders () {
    return {
      asc: 'Crescător',
      desc: 'Descrescător'
    }
  },

  formatThenBy () {
    return 'Apoi după'
  },

  formatToggleCustomViewOff () {
    return 'Ascunde vizualizarea personalizată'
  },

  formatToggleCustomViewOn () {
    return 'Afișează vizualizarea personalizată'
  },

  formatToggleOff () {
    return 'Ascunde vizualizarea pe carduri'
  },

  formatToggleOn () {
    return 'Afișează vizualizarea pe carduri'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ro-RO'])
