/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://github.com/Semantic-Org/Semantic-UI
 */

$.extend($.fn.bootstrapTable.defaults, {
  classes: 'ui selectable celled table',
  buttonsPrefix: '',
  buttonsClass: 'ui button'
})

$.fn.bootstrapTable.theme = 'semantic'

$.BootstrapTable = class extends $.BootstrapTable {
  initConstants () {
    super.initConstants()

    this.constants.classes.buttonsGroup = 'ui buttons'
    this.constants.classes.buttonsDropdown = 'ui button dropdown'
    this.constants.classes.inputGroup = 'ui input'
    this.constants.classes.paginationDropdown = 'ui dropdown'

    this.constants.html.toobarDropdow = ['<div class="menu">', '</div>']
    this.constants.html.toobarDropdowItem = '<label class="item">%s</label>'
    this.constants.html.pageDropdown = ['<div class="menu">', '</div>']
    this.constants.html.pageDropdownItem = '<a class="item %s" href="#">%s</a>'
    this.constants.html.dropdownCaret = '<i class="dropdown icon"></i>'
    this.constants.html.pagination = ['<div class="ui pagination menu%s">', '</div>'],
    this.constants.html.paginationItem = '<a class="page-item item%s" href="#">%s</a>'
  }

  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    this.$toolbar.find('.button.dropdown').dropdown()
  }

  initPagination () {
    super.initPagination()
    if (this.options.pagination && !this.options.onlyInfoPagination) {
      this.$pagination.find('.dropdown').dropdown()
    }
  }
}
