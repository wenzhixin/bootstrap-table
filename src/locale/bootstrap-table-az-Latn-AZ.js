/**
 * Bootstrap Table Azerbaijani (Latin) translation
 * Author: jamalkamaladdin (https://github.com/jamalkamaladdin)
 */

$.fn.bootstrapTable.locales['az-Latn-AZ'] = $.fn.bootstrapTable.locales['az'] = {
  formatAddLevel () {
    return 'Səviyyə əlavə et'
  },

  formatAdvancedCloseButton () {
    return 'Bağla'
  },

  formatAdvancedSearch () {
    return 'Qabaqcıl axtarış'
  },

  formatAllRows () {
    return 'Hamısı'
  },

  formatAutoRefresh () {
    return 'Avtomatik yenilə'
  },

  formatCancel () {
    return 'Ləğv et'
  },

  formatClearSearch () {
    return 'Axtarışı təmizlə'
  },

  formatColumn () {
    return 'Sütun'
  },

  formatColumns () {
    return 'Sütunlar'
  },

  formatColumnsToggleAll () {
    return 'Hamısını aç/bağla'
  },

  formatCopyRows () {
    return 'Sətirləri kopyala'
  },

  formatDeleteLevel () {
    return 'Səviyyəni sil'
  },

  formatDetailPagination (totalRows) {
    return `${totalRows} sətir göstərilir`
  },

  formatDuplicateAlertDescription () {
    return 'Zəhmət olmasa təkrarlanan sütunu silin və ya dəyişin.'
  },

  formatDuplicateAlertTitle () {
    return 'Təkrar(lar) aşkarlandı!'
  },

  formatExport () {
    return 'Məlumatları ixrac et'
  },

  formatFilterControlSwitch () {
    return 'Nizamlayıcıları gizlət/göstər'
  },

  formatFilterControlSwitchHide () {
    return 'Nizamlayıcıları gizlət'
  },

  formatFilterControlSwitchShow () {
    return 'Nizamlayıcıları göstər'
  },

  formatFullscreen () {
    return 'Tam ekran'
  },

  formatJumpTo () {
    return 'Keç'
  },

  formatLoadingMessage () {
    return 'Yüklənir, zəhmət olmasa gözləyin'
  },

  formatMultipleSort () {
    return 'Çoxsaylı sıralama'
  },

  formatNoMatches () {
    return 'Uyğun qeyd tapılmadı'
  },

  formatOrder () {
    return 'Sıra'
  },

  formatPaginationSwitch () {
    return 'Səhifələməni gizlət/göstər'
  },

  formatPaginationSwitchDown () {
    return 'Səhifələməni göstər'
  },

  formatPaginationSwitchUp () {
    return 'Səhifələməni gizlət'
  },

  formatPrint () {
    return 'Çap et'
  },

  formatRecordsPerPage (pageNumber) {
    return `Səhifə başına ${pageNumber} sətir`
  },

  formatRefresh () {
    return 'Yenilə'
  },

  formatSRPaginationNextText () {
    return 'növbəti səhifə'
  },

  formatSRPaginationPageText (page) {
    return `${page}-ci səhifəyə`
  },

  formatSRPaginationPreText () {
    return 'əvvəlki səhifə'
  },

  formatSearch () {
    return 'Axtarış'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `${totalRows} sətirdən ${pageFrom}-${pageTo} arası göstərilir (${totalNotFiltered} sətirdən süzülüb)`
    }

    return `${totalRows} sətirdən ${pageFrom}-${pageTo} arası göstərilir`
  },

  formatSort () {
    return 'Sırala'
  },

  formatSortBy () {
    return 'Sıralama meyarı'
  },

  formatSortOrders () {
    return {
      asc: 'Artan',
      desc: 'Azalan'
    }
  },

  formatThenBy () {
    return 'Sonra'
  },

  formatToggleCustomViewOff () {
    return 'Fərdi görünüşü gizlət'
  },

  formatToggleCustomViewOn () {
    return 'Fərdi görünüşü göstər'
  },

  formatToggleOff () {
    return 'Kart görünüşünü gizlət'
  },

  formatToggleOn () {
    return 'Kart görünüşünü göstər'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['az-Latn-AZ'])
