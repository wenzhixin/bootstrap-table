/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://github.com/jgthms/bulma/
 */

($ => {
  $.extend($.fn.bootstrapTable.defaults, {
    classes: 'table is-bordered is-hoverable',
    buttonsPrefix: '',
    buttonsClass: 'button'
  })

  $.BootstrapTable = class extends $.BootstrapTable {
    initConstants () {
      super.initConstants()

      this.constants.theme = 'bulma'

      this.constants.classes.buttonsGroup = 'buttons has-addons'
      this.constants.classes.buttonsDropdown = 'button dropdown is-right'
      this.constants.classes.input = 'input'
      this.constants.classes.paginationDropdown = 'ui dropdown'
      this.constants.classes.dropup = 'is-up'
      this.constants.classes.dropdownActive = 'is-active'
      this.constants.classes.paginationActive = 'is-current'

      this.constants.html.toobarDropdow = ['<div class="dropdown-menu"><div class="dropdown-content">', '</div></div>']
      this.constants.html.toobarDropdowItem = '<label class="dropdown-item">%s</label>'
      this.constants.html.pageDropdown = ['<div class="dropdown-menu"><div class="dropdown-content">', '</div></div>']
      this.constants.html.pageDropdownItem = '<a class="dropdown-item %s" href="#">%s</a>'
      this.constants.html.dropdownCaret = '<span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"></i></span>'
      this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>'],
      this.constants.html.paginationItem = '<li><a class="page-item pagination-link%s" href="#">%s</a></li>'
    }

    initToolbar () {
      super.initToolbar()
      if (this.options.showColumns) {
        this._initDropdown()
      }
    }

    initPagination () {
      super.initPagination()
      if (this.options.pagination && !this.options.onlyInfoPagination) {
        this._initDropdown()
      }
    }

    _initDropdown ($el) {
      const $dropdowns = this.$container.find('.dropdown:not(.is-hoverable)')

      $dropdowns.off('click').on('click', e => {
        e.stopPropagation()
        $(e.currentTarget).toggleClass('is-active')
      })

      $(document).off('click.bs.dropdown.bulma').on('click.bs.dropdown.bulma', () => {
        $dropdowns.removeClass('is-active')
      })
    }
  }
})(jQuery)
