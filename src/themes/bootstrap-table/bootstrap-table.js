/**
 * @author Dustin Utecht
 * https://github.com/wenzhixin/bootstrap-table/
 */

$.fn.bootstrapTable.theme = 'bootstrap-table'

$.extend($.fn.bootstrapTable.defaults, {
  iconsPrefix: 'icon',
  icons: {
    paginationSwitchDown: 'icon-arrow-up-circle',
    paginationSwitchUp: 'icon-arrow-down-circle',
    refresh: 'icon-refresh-cw',
    toggleOff: 'icon-toggle-right',
    toggleOn: 'icon-toggle-right',
    columns: 'icon-list',
    detailOpen: 'icon-plus',
    detailClose: 'icon-minus',
    fullscreen: 'icon-maximize',
    search: 'icon-search',
    clearSearch: 'icon-trash-2'
  }
})

$.BootstrapTable = class extends $.BootstrapTable {
  init () {
    super.init()

    this.constants.classes.dropup = 'dropdown-menu-up'

    $('.modal').on('click', '[data-close]', e => {
      $(e.delegateTarget).removeClass('show')
    })
  }

  initConstants () {
    super.initConstants()

    this.constants.html.inputGroup = '<div class="input-group">%s%s</div>'
  }


  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    if (this.$toolbar.find('.dropdown-toggle').length) {
      this._initDropdown()
    }
  }

  initPagination () {
    super.initPagination()
    if (this.options.pagination && this.paginationParts.includes('pageSize')) {
      this._initDropdown()
    }
  }

  _initDropdown () {
    const $dropdownToggles = $('.dropdown-toggle')

    $dropdownToggles.off('click').on('click', e => {
      let $target = $(e.currentTarget)

      if ($target.parents('.dropdown-toggle').length > 0) {
        $target = $target.parents('.dropdown-toggle')
      }

      $target.next('.dropdown-menu').toggleClass('open')
    })

    $(window).off('click').on('click', e => {
      const $dropdownToggles = $('.dropdown-toggle')

      if ($(e.target).parents('.dropdown-toggle, .dropdown-menu').length === 0 && !$(e.target).hasClass('dropdown-toggle')) {
        $dropdownToggles.next('.dropdown-menu').removeClass('open')
      }
    })
  }
}
