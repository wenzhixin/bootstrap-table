/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://github.com/zurb/foundation-sites
 */

($ => {
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
      this.constants.classes.buttonsDropdown = 'button dropdown-container'
      this.constants.classes.paginationDropdown = ''
      this.constants.classes.dropdownActive = 'is-active'
      this.constants.classes.paginationActive = 'current'

      this.constants.html.toobarDropdow = ['<ul class="dropdown-pane" id="toolbar-dropdown" data-dropdown><ul class="vertical menu">', '</ul></div>']
      this.constants.html.toobarDropdowItem = '<li><label class="dropdown-item">%s</label></li>'
      this.constants.html.pageDropdown = ['<ul class="dropdown-pane" id="page-list-dropdown" data-dropdown><ul class="vertical menu">', '</ul></ul>']
      this.constants.html.pageDropdownItem = '<li class="dropdown-item %s"><a href="#">%s</a></li>'
      this.constants.html.dropdownCaret = '<i class="fa fa-angle-down"></i>'
      this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>'],
      this.constants.html.paginationItem = '<li><a class="page-item%s" href="#">%s</a></li>'
    }

    initToolbar () {
      super.initToolbar()

      if (this.options.showColumns) {
        this.$toolbar.find('.keep-open')
          .attr('data-toggle', 'toolbar-dropdown')
        const $pane = this.$toolbar.find('.dropdown-pane')
          .attr('data-position', 'bottom')
          .attr('data-alignment', 'right')
        new window.Foundation.Dropdown($pane)
        this._initDropdown()
      }
    }

    initPagination () {
      super.initPagination()

      if (this.options.pagination && !this.options.onlyInfoPagination) {
        this.$pagination.find('.dropdown-toggle')
          .attr('data-toggle', 'page-list-dropdown')
        const $pane = this.$pagination.find('.dropdown-pane')
          .attr('data-position', 'top')
          .attr('data-alignment', 'left')
        new window.Foundation.Dropdown($pane)
      }
    }

    _initDropdown ($el) {
      const $dropdowns = this.$container.find('.dropdown-container')

      $dropdowns.off('click').on('click', e => {
        e.stopPropagation()
        $dropdowns.find('.dropdown-pane').foundation('toggle')
      })

      $(document).off('click.bs.dropdown.foundation').on('click.bs.dropdown.foundation', () => {
        $dropdowns.find('.dropdown-pane').foundation('close')
      })
    }
  }
})(jQuery)
