/**
 * @author Dustin Utecht
 * https://github.com/wenzhixin/bootstrap-table/
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
    const $dropdownToggles = $('.dropdown-toggle')
    $dropdownToggles.off('click').on('click', (e) => {
      let $target = $(e.target)
      if ($target.parents('.dropdown-toggle').length > 0) {
        $target = $target.parents('.dropdown-toggle')
      }

      $target.next('.dropdown-menu').toggleClass('open')
    })

    $(window).off('click').on('click', (e) => {
      if ($(e.target).parents('.dropdown-toggle, .dropdown-menu').length === 0 && !$(e.target).hasClass('dropdown-toggle')) {
        $dropdownToggles.next('.dropdown-menu').removeClass('open')
      }
    })
  }
}