/**
 * Bootstrap Table Hindi translation
 * Author: Saurabh Sharma <saurabhsharma2u@gmail.com>
 */

$.fn.bootstrapTable.locales['hi-IN'] = {
  formatAdvancedCloseButton () {
    return 'बंद करे'
  },

  formatAdvancedSearch () {
    return 'एडवांस सर्च'
  },

  formatAllRows () {
    return 'सब'
  },

  formatAutoRefresh () {
    return 'ऑटो रिफ्रेश'
  },

  formatClearSearch () {
    return 'सर्च क्लिअर करें'
  },

  formatColumns () {
    return 'कॉलम'
  },

  formatColumnsToggleAll () {
    return 'टॉगल आल'
  },

  formatCopyRows () {
    return 'पंक्तियों की कॉपी करें'
  },

  formatDetailPagination (totalRows) {
    return `${totalRows} पंक्तियां`
  },

  formatExport () {
    return 'एक्सपोर्ट डाटा'
  },

  formatFilterControlSwitch () {
    return 'छुपाओ/दिखाओ कंट्रोल्स'
  },

  formatFilterControlSwitchHide () {
    return 'छुपाओ कंट्रोल्स'
  },

  formatFilterControlSwitchShow () {
    return 'दिखाओ कंट्रोल्स'
  },

  formatFullscreen () {
    return 'पूर्ण स्क्रीन'
  },

  formatJumpTo () {
    return 'जाओ'
  },

  formatLoadingMessage () {
    return 'लोड हो रहा है कृपया प्रतीक्षा करें'
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

  formatPrint () {
    return 'प्रिंट'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} प्रति पृष्ठ पंक्तियाँ`
  },

  formatRefresh () {
    return 'रिफ्रेश'
  },

  formatSearch () {
    return 'सर्च'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `${pageFrom} - ${pageTo} पक्तिया ${totalRows} में से ( ${totalNotFiltered} पक्तिया)`
    }

    return `${pageFrom} - ${pageTo} पक्तिया ${totalRows} में से`
  },

  formatSRPaginationNextText () {
    return 'अगला पृष्ठ'
  },

  formatSRPaginationPageText (page) {
    return `${page} पृष्ठ पर`
  },

  formatSRPaginationPreText () {
    return 'पिछला पृष्ठ'
  },

  formatToggleOff () {
    return 'कार्ड दृश्य छुपाएं'
  },

  formatToggleOn () {
    return 'कार्ड दृश्य दिखाएं'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hi-IN'])
