/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://github.com/zurb/foundation-sites
 */

$.extend($.fn.bootstrapTable.defaults, {
  classes: 'table hover',
  buttonsPrefix: '',
  buttonsClass: 'button'
})

$.BootstrapTable = class extends $.BootstrapTable {
  initConstants () {
    super.initConstants()

    this.constants.theme = 'foundation'

    this.constants.classes.buttonsGroup = 'button-group'
    this.constants.classes.buttonsDropdown = 'dropdown-container'
    this.constants.classes.paginationDropdown = ''
    this.constants.classes.dropdownActive = 'is-active'
    this.constants.classes.paginationActive = 'current'

    this.constants.html.toobarDropdow = ['<ul class="dropdown-pane" data-dropdown data-close-on-click="true" data-position="bottom" data-alignment="right"><ul class="vertical menu">', '</ul></div>']
    this.constants.html.toobarDropdowItem = '<li><label class="dropdown-item">%s</label></li>'
    this.constants.html.pageDropdown = ['<ul class="dropdown-pane" data-dropdown data-close-on-click="true" data-position="top" data-alignment="left"><ul class="vertical menu">', '</ul></ul>']
    this.constants.html.pageDropdownItem = '<li class="dropdown-item %s"><a href="#">%s</a></li>'
    this.constants.html.dropdownCaret = '<i class="fa fa-angle-down"></i>'
    this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>'],
    this.constants.html.paginationItem = '<li><a class="page-item%s" href="#">%s</a></li>'
  }

  initToolbar () {
    super.initToolbar()

    if (this.options.showColumns) {
      const toolbarDropdownId = 'toolbar-dropdown_' + this.$el.attr('id')
      this.$toolbar.find('.dropdown-toggle')
        .attr('data-toggle', toolbarDropdownId)
      const $pane = this.$toolbar.find('.dropdown-pane')
        .attr('id', toolbarDropdownId)
      new window.Foundation.Dropdown($pane)
    }
  }

  initPagination () {
    super.initPagination()

    if (this.options.pagination && !this.options.onlyInfoPagination) {
      const pageListDropdownId = 'page-list-dropdown_' + this.$el.attr('id')
      this.$pagination.find('.dropdown-toggle')
        .attr('data-toggle', pageListDropdownId)
      const $pane = this.$pagination.find('.dropdown-pane')
        .attr('id', pageListDropdownId)
      new window.Foundation.Dropdown($pane)
    }
  }
}
