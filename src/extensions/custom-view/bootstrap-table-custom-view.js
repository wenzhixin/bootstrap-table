/**
 * @author: Dustin Utecht
 * @github: https://github.com/UtechtDustin
 */

const Utils = $.fn.bootstrapTable.utils

Object.assign($.fn.bootstrapTable.defaults, {
  customView: false,
  showCustomView: false,
  customViewDefaultView: false
})

Utils.assignIcons($.fn.bootstrapTable.icons, 'customViewOn', {
  glyphicon: 'glyphicon-list',
  fa: 'fa-list',
  bi: 'bi-list',
  icon: 'list',
  'material-icons': 'list'
})

Utils.assignIcons($.fn.bootstrapTable.icons, 'customViewOff', {
  glyphicon: 'glyphicon-thumbnails',
  fa: 'fa-th',
  bi: 'bi-grid',
  icon: 'grid_on',
  'material-icons': 'grid_on'
})

Object.assign($.fn.bootstrapTable.defaults, {
  onCustomViewPostBody () {
    return false
  },
  onCustomViewPreBody () {
    return false
  },
  onToggleCustomView () {
    return false
  }
})

Object.assign($.fn.bootstrapTable.locales, {
  formatToggleCustomViewOn () {
    return 'Show custom view'
  },
  formatToggleCustomViewOff () {
    return 'Hide custom view'
  }
})
Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.fn.bootstrapTable.methods.push('toggleCustomView')

Object.assign($.fn.bootstrapTable.events, {
  'custom-view-post-body.bs.table': 'onCustomViewPostBody',
  'custom-view-pre-body.bs.table': 'onCustomViewPreBody',
  'toggle-custom-view.bs.table': 'onToggleCustomView'
})

$.BootstrapTable = class extends $.BootstrapTable {

  init () {
    this.customViewDefaultView = this.options.customViewDefaultView

    super.init()
  }

  initToolbar (...args) {
    if (this.options.customView && this.options.showCustomView) {
      this.buttons = Object.assign(this.buttons, {
        customView: {
          text: this.options.customViewDefaultView ? this.options.formatToggleCustomViewOff() : this.options.formatToggleCustomViewOn(),
          icon: this.options.customViewDefaultView ? this.options.icons.customViewOn : this.options.icons.customViewOff,
          event: this.toggleCustomView,
          attributes: {
            'aria-label': this.options.customViewDefaultView ? this.options.formatToggleCustomViewOff() : this.options.formatToggleCustomViewOn(),
            title: this.options.customViewDefaultView ? this.options.formatToggleCustomViewOff() : this.options.formatToggleCustomViewOn()
          }
        }
      })
    }

    super.initToolbar(...args)
  }

  initBody () {
    super.initBody()

    if (!this.options.customView) {
      return
    }

    const $table = this.$el
    const $customViewContainer = this.$container.find('.fixed-table-custom-view')

    $table.hide()
    $customViewContainer.hide()
    if (!this.options.customView || !this.customViewDefaultView) {
      $table.show()
      return
    }

    const data = this.getData().slice(this.pageFrom - 1, this.pageTo)
    const value = Utils.calculateObjectValue(this, this.options.customView, [data], '')

    this.trigger('custom-view-pre-body', data, value)
    if ($customViewContainer.length === 1) {
      $customViewContainer.show().html(value)
    } else {
      this.$tableBody.after(`<div class="fixed-table-custom-view">${value}</div>`)
    }

    this.trigger('custom-view-post-body', data, value)
  }

  toggleCustomView () {
    this.customViewDefaultView = !this.customViewDefaultView

    const icon = this.options.showButtonIcons ? this.customViewDefaultView ? this.options.icons.customViewOn : this.options.icons.customViewOff : ''
    const text = this.options.showButtonText ? this.customViewDefaultView ? this.options.formatToggleCustomViewOff() : this.options.formatToggleCustomViewOn() : ''

    this.$toolbar.find('button[name="customView"]')
      .html(`${Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon)} ${text}`)
      .attr('aria-label', text)
      .attr('title', text)

    this.initBody()
    this.trigger('toggle-custom-view', this.customViewDefaultView)
  }
}
