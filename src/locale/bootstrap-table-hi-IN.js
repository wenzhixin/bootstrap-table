/**
 * Bootstrap Table Hindi translation
 * Author: Saurabh Sharma <saurabhsharma2u@gmail.com>
 */

$.fn.bootstrapTable.locales['hi-IN'] = {
  formatCopyRows () {
    return 'पंक्तियों की कॉपी करें'
  },
  formatPrint () {
    return 'प्रिंट'
  },
  formatLoadingMessage () {
    return 'लोड हो रहा है कृपया प्रतीक्षा करें'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} प्रति पृष्ठ पंक्तियाँ`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (
      totalNotFiltered !== undefined &&
      totalNotFiltered > 0 &&
      totalNotFiltered > totalRows
    ) {
      return `${pageFrom} - ${pageTo} पक्तिया ${totalRows} में से ( ${totalNotFiltered} पक्तिया)`
    }

    return `${pageFrom} - ${pageTo} पक्तिया ${totalRows} में से`
  },
  formatSRPaginationPreText () {
    return 'पिछला पृष्ठ'
  },
  formatSRPaginationPageText (page) {
    return `${page} पृष्ठ पर`
  },
  formatSRPaginationNextText () {
    return 'अगला पृष्ठ'
  },
  formatDetailPagination (totalRows) {
    return `${totalRows} पंक्तियां`
  },
  formatClearSearch () {
    return 'सर्च क्लिअर करें'
  },
  formatSearch () {
    return 'सर्च'
  },
  formatNoMatches () {
    return 'मेल खाते रिकॉर्ड नही मिले'
  },
  formatPaginationSwitch () {
    return 'छुपाओ/दिखाओ पृष्ठ संख्या'
  },
  formatPaginationSwitchDown () {
    return 'दिखाओ पृष्ठ संख्या'
  },
  formatPaginationSwitchUp () {
    return 'छुपाओ पृष्ठ संख्या'
  },
  formatRefresh () {
    return 'रिफ्रेश'
  },
  formatToggleOn () {
    return 'कार्ड दृश्य दिखाएं'
  },
  formatToggleOff () {
    return 'कार्ड दृश्य छुपाएं'
  },
  formatColumns () {
    return 'कॉलम'
  },
  formatColumnsToggleAll () {
    return 'टॉगल आल'
  },
  formatFullscreen () {
    return 'पूर्ण स्क्रीन'
  },
  formatAllRows () {
    return 'सब'
  },
  formatAutoRefresh () {
    return 'ऑटो रिफ्रेश'
  },
  formatExport () {
    return 'एक्सपोर्ट डाटा'
  },
  formatJumpTo () {
    return 'जाओ'
  },
  formatAdvancedSearch () {
    return 'एडवांस सर्च'
  },
  formatAdvancedCloseButton () {
    return 'बंद करे'
  },
  formatFilterControlSwitch () {
    return 'छुपाओ/दिखाओ कंट्रोल्स'
  },
  formatFilterControlSwitchHide () {
    return 'छुपाओ कंट्रोल्स'
  },
  formatFilterControlSwitchShow () {
    return 'दिखाओ कंट्रोल्स'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hi-IN'])
