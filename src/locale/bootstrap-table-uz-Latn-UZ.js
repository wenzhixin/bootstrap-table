/**
 * Bootstrap Table Uzbek translation
 * Author: Nabijon Masharipov <mnabijonz@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['uz-Latn-UZ'] = {
    formatLoadingMessage () {
      return 'Yuklanyapti, iltimos kuting...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} qator har sahifada`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Ko'rsatypati ${pageFrom} dan ${pageTo} gacha ${totalRows} qatorlarni`
    },
    formatSearch () {
      return 'Qidirish'
    },
    formatNoMatches () {
      return 'Hech narsa topilmadi'
    },
    formatPaginationSwitch () {
      return 'Sahifalashni yashirish/ko\'rsatish'
    },
    formatRefresh () {
      return 'Yangilash'
    },
    formatToggle () {
      return 'Ko\'rinish'
    },
    formatColumns () {
      return 'Ustunlar'
    },
    formatAllRows () {
      return 'Hammasi'
    },
    formatExport () {
      return 'Eksport'
    },
    formatClearFilters () {
      return 'Filtrlarni tozalash'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uz-Latn-UZ'])
})(jQuery)
