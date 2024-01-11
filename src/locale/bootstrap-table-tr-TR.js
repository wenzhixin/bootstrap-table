/**
 * Bootstrap Table Turkish translation
 * Author: Emin Şen
 * Author: Sercan Cakir <srcnckr@gmail.com>
 * Update From: Sait KURT <bilgi@ientegre.com> <https://github.com/xDeSwa>
 */

$.fn.bootstrapTable.locales['tr-TR'] = $.fn.bootstrapTable.locales['tr'] = {
  formatCopyRows () {
    return 'Satırları Kopyala'
  },
  formatPrint () {
    return 'Yazdır'
  },
  formatLoadingMessage () {
    return 'Yükleniyor, lütfen bekleyin'
  },
  formatRecordsPerPage (pageNumber) {
    return `Sayfa başına ${pageNumber} kayıt.`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `${totalRows} kayıttan ${pageFrom}-${pageTo} arası gösteriliyor (${totalNotFiltered} toplam satır filtrelendi).`
    }

    return `${totalRows} kayıttan ${pageFrom}-${pageTo} arası gösteriliyor.`
  },
  formatSRPaginationPreText () {
    return 'önceki sayfa'
  },
  formatSRPaginationPageText (page) {
    return `sayfa ${page}`
  },
  formatSRPaginationNextText () {
    return 'sonraki sayfa'
  },
  formatDetailPagination (totalRows) {
    return `${totalRows} satır gösteriliyor`
  },
  formatClearSearch () {
    return 'Aramayı Temizle'
  },
  formatSearch () {
    return 'Ara'
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
  formatRefresh () {
    return 'Yenile'
  },
  formatToggleOn () {
    return 'Kart Görünümünü Göster'
  },
  formatToggleOff () {
    return 'Kart Görünümünü Gizle'
  },
  formatColumns () {
    return 'Sütunlar'
  },
  formatColumnsToggleAll () {
    return 'Tümünü Kapat'
  },
  formatFullscreen () {
    return 'Tam Ekran'
  },
  formatAllRows () {
    return 'Tüm Satırlar'
  },
  formatAutoRefresh () {
    return 'Otomatik Yenileme'
  },
  formatExport () {
    return 'Verileri Dışa Aktar'
  },
  formatJumpTo () {
    return 'Git'
  },
  formatAdvancedSearch () {
    return 'Gelişmiş Arama'
  },
  formatAdvancedCloseButton () {
    return 'Kapat'
  },
  formatFilterControlSwitch () {
    return 'Kontrolleri Gizle/Göster'
  },
  formatFilterControlSwitchHide () {
    return 'Kontrolleri Gizle'
  },
  formatFilterControlSwitchShow () {
    return 'Kontrolleri Göster'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR'])
