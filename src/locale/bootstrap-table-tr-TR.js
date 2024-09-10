/**
 * Bootstrap Table Turkish translation
 * Author: Emin Şen
 * Author: Sercan Cakir <srcnckr@gmail.com>
 * Update From: Sait KURT <bilgi@ientegre.com> <https://github.com/xDeSwa>
 */

$.fn.bootstrapTable.locales['tr-TR'] = $.fn.bootstrapTable.locales['tr'] = {
  formatAdvancedCloseButton () {
    return 'Kapat'
  },

  formatAdvancedSearch () {
    return 'Gelişmiş Arama'
  },

  formatAllRows () {
    return 'Tüm Satırlar'
  },

  formatAutoRefresh () {
    return 'Otomatik Yenileme'
  },

  formatClearSearch () {
    return 'Aramayı Temizle'
  },

  formatColumns () {
    return 'Sütunlar'
  },

  formatColumnsToggleAll () {
    return 'Tümünü Kapat'
  },

  formatCopyRows () {
    return 'Satırları Kopyala'
  },

  formatDetailPagination (totalRows) {
    return `${totalRows} satır gösteriliyor`
  },

  formatExport () {
    return 'Verileri Dışa Aktar'
  },

  formatFilterControlSwitch () {
    return 'Kontrolleri Gizle/Göster'
  },

  formatFilterControlSwitchHide () {
    return 'Kontrolleri Gizle'
  },

  formatFilterControlSwitchShow () {
    return 'Kontrolleri Göster'
  },

  formatFullscreen () {
    return 'Tam Ekran'
  },

  formatJumpTo () {
    return 'Git'
  },

  formatLoadingMessage () {
    return 'Yükleniyor, lütfen bekleyin'
  },

  formatNoMatches () {
    return 'Eşleşen kayıt bulunamadı.'
  },

  formatPaginationSwitch () {
    return 'Sayfalamayı Gizle/Göster'
  },

  formatPaginationSwitchDown () {
    return 'Sayfalamayı Göster'
  },

  formatPaginationSwitchUp () {
    return 'Sayfalamayı Gizle'
  },

  formatPrint () {
    return 'Yazdır'
  },

  formatRecordsPerPage (pageNumber) {
    return `Sayfa başına ${pageNumber} kayıt.`
  },

  formatRefresh () {
    return 'Yenile'
  },

  formatSearch () {
    return 'Ara'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `${totalRows} kayıttan ${pageFrom}-${pageTo} arası gösteriliyor (${totalNotFiltered} toplam satır filtrelendi).`
    }

    return `${totalRows} kayıttan ${pageFrom}-${pageTo} arası gösteriliyor.`
  },

  formatSRPaginationNextText () {
    return 'sonraki sayfa'
  },

  formatSRPaginationPageText (page) {
    return `sayfa ${page}`
  },

  formatSRPaginationPreText () {
    return 'önceki sayfa'
  },

  formatToggleOff () {
    return 'Kart Görünümünü Gizle'
  },

  formatToggleOn () {
    return 'Kart Görünümünü Göster'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR'])
