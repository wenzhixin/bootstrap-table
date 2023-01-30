/**
 * Bootstrap Table Serbian Cyrilic RS translation
 * Author: Vladimir Kanazir (vladimir@kanazir.com)
 */

$.fn.bootstrapTable.locales['sr-Cyrl-RS'] = $.fn.bootstrapTable.locales['sr'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'Молим сачекај'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} редова по страни`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Приказано ${pageFrom}. - ${pageTo}. од укупног броја редова ${totalRows} (филтрирано од ${totalNotFiltered})`
    }

    return `Приказано ${pageFrom}. - ${pageTo}. од укупног броја редова ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'претходна страна'
  },
  formatSRPaginationPageText (page) {
    return `на страну ${page}`
  },
  formatSRPaginationNextText () {
    return 'следећа страна'
  },
  formatDetailPagination (totalRows) {
    return `Приказано ${totalRows} редова`
  },
  formatClearSearch () {
    return 'Обриши претрагу'
  },
  formatSearch () {
    return 'Пронађи'
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
  formatRefresh () {
    return 'Освежи'
  },
  formatToggleOn () {
    return 'Прикажи картице'
  },
  formatToggleOff () {
    return 'Сакриј картице'
  },
  formatColumns () {
    return 'Колоне'
  },
  formatColumnsToggleAll () {
    return 'Прикажи/сакриј све'
  },
  formatFullscreen () {
    return 'Цео екран'
  },
  formatAllRows () {
    return 'Све'
  },
  formatAutoRefresh () {
    return 'Аутоматско освежавање'
  },
  formatExport () {
    return 'Извези податке'
  },
  formatJumpTo () {
    return 'Иди'
  },
  formatAdvancedSearch () {
    return 'Напредна претрага'
  },
  formatAdvancedCloseButton () {
    return 'Затвори'
  },
  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sr-Cyrl-RS'])
