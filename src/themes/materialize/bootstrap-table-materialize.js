/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://github.com/jgthms/bulma/
 */

$.extend($.fn.bootstrapTable.defaults, {
  classes: 'table highlight',
  buttonsPrefix: '',
  buttonsClass: 'waves-effect waves-light btn',
  iconsPrefix: 'material-icons',
  icons: {
    paginationSwitchDown: 'grid_on',
    paginationSwitchUp: 'grid_off',
    refresh: 'refresh',
    toggleOff: 'tablet',
    toggleOn: 'tablet_android',
    columns: 'view_list',
    detailOpen: 'add',
    detailClose: 'remove',
    fullscreen: 'fullscreen',
    sort: 'sort',
    search: 'search',
    clearSearch: 'delete'
  }
})

$.fn.bootstrapTable.theme = 'materialize'

$.BootstrapTable = class extends $.BootstrapTable {
  initConstants () {
    super.initConstants()

    this.constants.classes.buttonsGroup = 'button-group'
    this.constants.classes.buttonsDropdown = ''
    this.constants.classes.input = 'input-field'
    this.constants.classes.input = ''
    this.constants.classes.paginationDropdown = ''
    this.constants.classes.buttonActive = 'green'

    this.constants.html.toolbarDropdown = ['<ul id="toolbar-columns-id" class="dropdown-content">', '</ul>']
    this.constants.html.toolbarDropdownItem = '<li class="dropdown-item-marker"><label>%s</label></li>'
    this.constants.html.toolbarDropdownSeparator = '<li class="divider" tabindex="-1"></li>'
    this.constants.html.pageDropdown = ['<ul id="pagination-list-id" class="dropdown-content">', '</ul>']
    this.constants.html.pageDropdownItem = '<li><a class="%s" href="#">%s</a></li>'
    this.constants.html.dropdownCaret = '<i class="material-icons">arrow_drop_down</i>'
    this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>']
    this.constants.html.paginationItem = '<li class="waves-effect page-item%s" aria-label="%s"><a href="#">%s</a></li>'
    this.constants.html.icon = '<i class="%s">%s</i>'
    this.constants.html.inputGroup = '%s%s'
  }

  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    if (this.$toolbar.find('.dropdown-toggle').length) {
      this.$toolbar.find('.dropdown-toggle').each((i, el) => {
        $(el).attr('data-target', $(el).next().attr('id'))
          .dropdown({
            alignment: 'right',
            constrainWidth: false,
            closeOnClick: false
          })
      })
    }
  }

  initPagination () {
    super.initPagination()

    if (this.options.pagination && !this.options.onlyInfoPagination) {
      this.$pagination.find('.dropdown-toggle')
        .attr('data-target', this.$pagination.find('.dropdown-content').attr('id'))
        .dropdown()
    }
  }
}
