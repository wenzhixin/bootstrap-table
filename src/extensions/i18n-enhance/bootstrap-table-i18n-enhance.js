/**
 * @author: Jewway
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

$.fn.bootstrapTable.methods.push('changeTitle')
$.fn.bootstrapTable.methods.push('changeLocale')

$.BootstrapTable = class extends $.BootstrapTable {

  changeTitle (locale) {
    $.each(this.options.columns, (idx, columnList) => {
      $.each(columnList, (idx, column) => {
        if (column.field) {
          column.title = locale[column.field]
        }
      })
    })
    this.initHeader()
    this.initBody()
    this.initToolbar()
  }

  changeLocale (localeId) {
    this.options.locale = localeId
    this.initLocale()
    this.initPagination()
    this.initBody()
    this.initToolbar()
  }
}
