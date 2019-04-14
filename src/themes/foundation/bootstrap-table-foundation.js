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

$.fn.bootstrapTable.theme = 'foundation'

$.BootstrapTable = class extends $.BootstrapTable {
  initConstants () {
    super.initConstants()

    this.constants.classes.buttonsGroup = 'button-group'
    this.constants.classes.buttonsDropdown = 'dropdown-container'
    this.constants.classes.paginationDropdown = ''
    this.constants.classes.dropdownActive = 'is-active'
    this.constants.classes.paginationActive = 'current'
    this.constants.classes.buttonActive = 'success'

    this.constants.html.toobarDropdow = ['<ul class="dropdown-pane" id="toolbar-columns-id" data-dropdown><ul class="vertical menu">', '</ul></div>']
    this.constants.html.toobarDropdowItem = '<li><label class="dropdown-item">%s</label></li>'
    this.constants.html.pageDropdown = ['<div class="dropdown-pane" id="pagination-list-id" data-dropdown><ul class="vertical menu">', '</ul></div>']
    this.constants.html.pageDropdownItem = '<li class="dropdown-item %s"><a href="#">%s</a></li>'
    this.constants.html.dropdownCaret = '<i class="fa fa-angle-down"></i>'
    this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>'],
    this.constants.html.paginationItem = '<li><a class="page-item%s" href="#">%s</a></li>'
  }

  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    if (this.$toolbar.find('.dropdown-toggle').length) {
      this.$toolbar.find('.dropdown-toggle').each((i, el) => {
        $(el).attr('data-toggle', $(el).next().attr('id'))
        const $pane = $(el).next()
          .attr('data-position', 'bottom')
          .attr('data-alignment', 'right')
        new window.Foundation.Dropdown($pane)
      })

      this._initDropdown()
    }
  }

  initPagination () {
    super.initPagination()

    if (this.options.pagination && !this.options.onlyInfoPagination) {
      const $el = this.$pagination.find('.dropdown-toggle')
      $el.attr('data-toggle', $el.next().attr('id'))

      const $pane = this.$pagination.find('.dropdown-pane')
        .attr('data-position', 'top')
        .attr('data-alignment', 'left')
      new window.Foundation.Dropdown($pane)

      this._initDropdown()
    }
  }

  _initDropdown () {
    const $dropdowns = this.$container.find('.dropdown-toggle')

    $dropdowns.off('click').on('click', e => {
      const $this = $(e.currentTarget)
      e.stopPropagation()
      $dropdowns.not($this).next().foundation('close')
      $this.next().foundation('toggle')
    })

    $(document).off('click.bs.dropdown.foundation').on('click.bs.dropdown.foundation', () => {
      $dropdowns.next().foundation('close')
    })
  }
}
