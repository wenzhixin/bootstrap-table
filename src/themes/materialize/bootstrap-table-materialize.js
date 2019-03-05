/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://github.com/jgthms/bulma/
 */

($ => {
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
      fullscreen: 'fullscreen'
    }
  })

  $.BootstrapTable = class extends $.BootstrapTable {
    initConstants () {
      super.initConstants()

      this.constants.theme = 'materialize'

      this.constants.classes.buttonsGroup = ''
      this.constants.classes.buttonsDropdown = ''
      this.constants.classes.input = 'input-field'
      this.constants.classes.input = ''
      this.constants.classes.paginationDropdown = ''

      this.constants.html.toobarDropdow = ['<ul id="toolbar-dropdown" class="dropdown-content">', '</ul>']
      this.constants.html.toobarDropdowItem = '<li><label>%s</label></li>'
      this.constants.html.pageDropdown = ['<ul id="page-list-dropdown" class="dropdown-content">', '</ul>']
      this.constants.html.pageDropdownItem = '<li><a class="%s" href="#">%s</a></li>'
      this.constants.html.dropdownCaret = '<i class="material-icons">arrow_drop_down</i>'
      this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>'],
      this.constants.html.paginationItem = '<li class="waves-effect page-item%s"><a href="#">%s</a></li>'
      this.constants.html.icon = '<i class="%s">%s</i>'
    }

    initToolbar () {
      super.initToolbar()

      if (this.options.showColumns) {
        this.$toolbar.find('.dropdown-toggle')
          .attr('data-target', 'toolbar-dropdown')
          .dropdown({
            alignment: 'right',
            constrainWidth: false,
            closeOnClick: false
          })
      }
    }

    initPagination () {
      super.initPagination()

      if (this.pagination && !this.options.onlyInfoPagination) {
        this.$pagination.find('.dropdown-toggle')
          .attr('data-target', 'page-list-dropdown')
          .dropdown()
      }
    }
  }
})(jQuery)
