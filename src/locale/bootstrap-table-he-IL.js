/**
 * Bootstrap Table Hebrew translation
 * Author: legshooter
 */
($ => {
  $.fn.bootstrapTable.locales['he-IL'] = {
    formatLoadingMessage () {
      return 'טוען, נא להמתין...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} שורות בעמוד`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `מציג ${pageFrom} עד ${pageTo} מ-${totalRows} שורות`
    },
    formatSearch () {
      return 'חיפוש'
    },
    formatNoMatches () {
      return 'לא נמצאו רשומות תואמות'
    },
    formatPaginationSwitch () {
      return 'הסתר/הצג מספור דפים'
    },
    formatRefresh () {
      return 'רענן'
    },
    formatToggle () {
      return 'החלף תצוגה'
    },
    formatColumns () {
      return 'עמודות'
    },
    formatAllRows () {
      return 'הכל'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL'])
})(jQuery)
