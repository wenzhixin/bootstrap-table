/**
 * Bootstrap Table Armenian(Հայերեն) translation
 * Author: Vaig <vaig.tech@gmail.com>
 */

$.fn.bootstrapTable.locales['ru-RU'] = $.fn.bootstrapTable.locales['ru'] = {
  formatCopyRows () {
    return 'Պատճենել տողերը'
  },
  formatPrint () {
    return 'Տպել'
  },
  formatLoadingMessage () {
    return 'Խնդրում ենք սպասել, կատարվումէ տվյալների բեռնում'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} գրառումներ էջում`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Տվյալներ  ${pageFrom}  -ից ${pageTo} ընդհանուր ${totalRows} (ֆիլտրված է, ընդամենը ${totalNotFiltered} գրառում)`
    }

    return `Տվյալներ ${pageFrom} ից  ${pageTo} ընդհանուր ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'Նախորդ էջ'
  },
  formatSRPaginationPageText (page) {
    return `Անցնել ${page} էջ`
  },
  formatSRPaginationNextText () {
    return 'Հաջորդ էջ'
  },
  formatDetailPagination (totalRows) {
    return `Բեռնված է ${totalRows} գրառում`
  },
  formatClearSearch () {
    return 'Մաքրել որոնման ֆիլտրերը'
  },
  formatSearch () {
    return 'Որոնել'
  },
  formatNoMatches () {
    return 'Ոչինչ չի գտնվել'
  },
  formatPaginationSwitch () {
    return 'Թաքցնել/Ցուցադրել էջանշանակը'
  },
  formatPaginationSwitchDown () {
    return 'Ցուցադրել էջանշանակը'
  },
  formatPaginationSwitchUp () {
    return 'Թաքցնել էջանշանակը'
  },
  formatRefresh () {
    return 'Թարմացնել'
  },
  formatToggleOn () {
    return 'Ցուցադրել գրառումները սյունների տեսքով'
  },
  formatToggleOff () {
    return 'Ցուցադրել գրառումները աղյուսակային տեսքով'
  },
  formatColumns () {
    return 'Սյունակներ'
  },
  formatColumnsToggleAll () {
    return 'Ընտրել բոլորը'
  },
  formatFullscreen () {
    return 'Ամբողջ էկրանով ռեժիմ'
  },
  formatAllRows () {
    return 'Բոլորը'
  },
  formatAutoRefresh () {
    return 'Ավտոմատ եղանակով թարմացում'
  },
  formatExport () {
    return 'Արտահանել տվյալները'
  },
  formatJumpTo () {
    return 'Էջ'
  },
  formatAdvancedSearch () {
    return 'Ընդլայնված որոնում'
  },
  formatAdvancedCloseButton () {
    return 'Փակել'
  },
  formatFilterControlSwitch () {
    return 'Թաքցնել/Ցուցադրել գործիքների պատուհանը'
  },
  formatFilterControlSwitchHide () {
    return 'Թաքցնել գործիքների պատուհանը'
  },
  formatFilterControlSwitchShow () {
    return 'Ցուցադրել գործիքների պատուհանը'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ru-RU'])
