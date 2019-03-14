/**
 * Bootstrap Table Japanese translation
 * Author: Azamshul Azizy <azamshul@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['ja-JP'] = {
    formatLoadingMessage () {
      return '読み込み中です。少々お待ちください。'
    },
    formatRecordsPerPage (pageNumber) {
      return `ページ当たり最大${pageNumber}件`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `全${totalRows}件から、${pageFrom}から${pageTo}件目まで表示しています`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return '検索'
    },
    formatNoMatches () {
      return '該当するレコードが見つかりません'
    },
    formatPaginationSwitch () {
      return 'ページ数を表示・非表示'
    },
    formatRefresh () {
      return '更新'
    },
    formatToggle () {
      return 'トグル'
    },
    formatColumns () {
      return '列'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'すべて'
    },
    formatAutoRefresh () {
      return 'Auto Refresh'
    },
    formatExport () {
      return 'Export data'
    },
    formatClearFilters () {
      return 'Clear filters'
    },
    formatJumpto () {
      return 'GO'
    },
    formatAdvancedSearch () {
      return 'Advanced search'
    },
    formatAdvancedCloseButton () {
      return 'Close'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ja-JP'])
})(jQuery)