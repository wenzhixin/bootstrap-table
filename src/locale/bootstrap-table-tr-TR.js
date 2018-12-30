/**
 * Bootstrap Table Turkish translation
 * Author: Emin Şen
 * Author: Sercan Cakir <srcnckr@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['tr-TR'] = {
    formatLoadingMessage () {
      return 'Yükleniyor, lütfen bekleyin...'
    },
    formatRecordsPerPage (pageNumber) {
      return `Sayfa başına ${pageNumber} kayıt.`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `${totalRows} kayıttan ${pageFrom}-${pageTo} arası gösteriliyor.`
    },
    formatSearch () {
      return 'Ara'
    },
    formatNoMatches () {
      return 'Eşleşen kayıt bulunamadı.'
    },
    formatRefresh () {
      return 'Yenile'
    },
    formatToggle () {
      return 'Değiştir'
    },
    formatColumns () {
      return 'Sütunlar'
    },
    formatAllRows () {
      return 'Tüm Satırlar'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR'])
})(jQuery)
