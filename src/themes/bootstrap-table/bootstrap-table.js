/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/bootstrap-table/
 * theme: https://github.com/jgthms/bulma/
 */

$.fn.bootstrapTable.theme = 'bootstrap-table'

$.extend($.fn.bootstrapTable.defaults, {
  iconsPrefix: 'icon',
  icons: {
    paginationSwitchDown: 'grid_on',
    paginationSwitchUp: 'grid_off',
    refresh: 'icon-refresh-cw',
    toggleOff: 'icon-toggle-right',
    toggleOn: 'icon-toggle-right',
    columns: 'icon-list',
    detailOpen: 'add',
    detailClose: 'remove',
    fullscreen: 'icon-maximize',
    clearSearch: 'icon-trash-2'
  }
})

$.BootstrapTable = class extends $.BootstrapTable {
  initConstants () {
    super.initConstants()

    this.constants.html.inputGroup = '<div class="input-group">%s%s</div>'
  }


  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    if (this.$toolbar.find('.dropdown').length) {
      this._initDropdown()
    }
  }

  initPagination () {
    super.initPagination()
    if (this.options.pagination && !this.options.onlyInfoPagination) {
      this._initDropdown()
    }
  }

  _initDropdown () {
    const $dropdowns = this.$container.find('.dropdown:not(.is-hoverable)')

    $dropdowns.off('click').on('click', e => {
      const $this = $(e.currentTarget)
      e.stopPropagation()
      $dropdowns.not($this).removeClass('is-active')
      $this.toggleClass('is-active')
    })

    $(document).off('click.bs.dropdown.bulma').on('click.bs.dropdown.bulma', () => {
      $dropdowns.removeClass('is-active')
    })
  }
}
