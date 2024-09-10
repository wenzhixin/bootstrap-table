/**
 * Bootstrap Table Serbian Cyrilic RS translation
 * Author: Vladimir Kanazir (vladimir@kanazir.com)
 */

$.fn.bootstrapTable.locales['sr-Cyrl-RS'] = $.fn.bootstrapTable.locales['sr'] = {
  formatAdvancedCloseButton () {
    return 'Затвори'
  },

  formatAdvancedSearch () {
    return 'Напредна претрага'
  },

  formatAllRows () {
    return 'Све'
  },

  formatAutoRefresh () {
    return 'Аутоматско освежавање'
  },

  formatClearSearch () {
    return 'Обриши претрагу'
  },

  formatColumns () {
    return 'Колоне'
  },

  formatColumnsToggleAll () {
    return 'Прикажи/сакриј све'
  },

  formatCopyRows () {
    return 'Copy Rows'
  },

  formatDetailPagination (totalRows) {
    return `Приказано ${totalRows} редова`
  },

  formatExport () {
    return 'Извези податке'
  },

  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },

  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },

  formatFilterControlSwitchShow () {
    return 'Show controls'
  },

  formatFullscreen () {
    return 'Цео екран'
  },

  formatJumpTo () {
    return 'Иди'
  },

  formatLoadingMessage () {
    return 'Молим сачекај'
  },

  formatNoMatches () {
    return 'Није пронађен ни један податак'
  },

  formatPaginationSwitch () {
    return 'Прикажи/сакриј пагинацију'
  },

  formatPaginationSwitchDown () {
    return 'Прикажи пагинацију'
  },

  formatPaginationSwitchUp () {
    return 'Сакриј пагинацију'
  },

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} редова по страни`
  },

  formatRefresh () {
    return 'Освежи'
  },

  formatSearch () {
    return 'Пронађи'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Приказано ${pageFrom}. - ${pageTo}. од укупног броја редова ${totalRows} (филтрирано од ${totalNotFiltered})`
    }

    return `Приказано ${pageFrom}. - ${pageTo}. од укупног броја редова ${totalRows}`
  },

  formatSRPaginationNextText () {
    return 'следећа страна'
  },

  formatSRPaginationPageText (page) {
    return `на страну ${page}`
  },

  formatSRPaginationPreText () {
    return 'претходна страна'
  },

  formatToggleOff () {
    return 'Сакриј картице'
  },

  formatToggleOn () {
    return 'Прикажи картице'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Cyrl-RS'])
