/**
 * @author: Dustin Utecht
 */

const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  customView: false,
  showCustomView: false,
  showCustomViewButton: false
})

$.extend($.fn.bootstrapTable.defaults.icons, {
  customView: {
    bootstrap3: 'glyphicon glyphicon-eye-open',
    bootstrap4: 'da fa-eye'
  }[$.fn.bootstrapTable.theme] || 'fa-eye'
})

$.extend($.fn.bootstrapTable.defaults, {
  onCustomViewPostBody () {
    return false
  }
})

$.extend($.fn.bootstrapTable.locales, {
  formatToggleCustomView () {
    return 'Toggle customview'
  }
})
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.extend($.fn.bootstrapTable.Constructor.EVENTS, {
  'custom-view-post-body.bs.table': 'onCustomViewPostBody'
})

$.BootstrapTable = class extends $.BootstrapTable {

  init () {
    this.showCustomView = this.options.showCustomView || true
    super.init()
  }

  initToolbar (...args) {
    super.initToolbar(...args)

    if (this.options.customView && this.options.showCustomViewButton) {
      const $btnGroup = this.$toolbar.find('>.' + this.constants.classes.buttonsGroup.split(' ').join('.')).first()
      let $btnToggleCustomView = $btnGroup.find('.toggle-custom-view')

      if (!$btnToggleCustomView.length) {
        $btnToggleCustomView = $(`
          <button class="toggle-custom-view ${this.constants.buttonsClass}
          ${this.options.autoRefreshStatus ? ` ${this.constants.classes.buttonActive}` : ''}"
          type="button" title="${this.options.formatToggleCustomView()}">
          ${this.options.showButtonIcons ? Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.customView) : ''}
          ${this.options.showButtonText ? this.options.formatToggleCustomView() : ''}
          </button>
        `).appendTo($btnGroup)

        $btnToggleCustomView.on('click', $.proxy(this.toggleCustomView, this))
      }
    }
  }

  initBody () {
    super.initBody()
    const $table = this.$el
    const $customViewContainer = this.$container.find('.fixed-table-custom-view')

    $table.hide()
    $customViewContainer.hide()
    if (!this.options.customView || !this.showCustomView) {
      $table.show()
      return
    }

    const _data = this.getData()
    const data = []
    for (let i = this.pageFrom - 1; i < this.pageTo; i++) {
      data.push(_data[i])
    }

    const value = Utils.calculateObjectValue(this, this.options.customView, [data], '')
    if ($customViewContainer.length === 1) {
      $customViewContainer.show()
      $customViewContainer.html(value)
    } else {
      this.$tableBody.after(`<div class="fixed-table-custom-view">${value}</div>`)
    }

    this.trigger('custom-view-post-body', data, value)
  }

  toggleCustomView () {
    this.showCustomView = !this.showCustomView
    this.initBody()
  }
}
