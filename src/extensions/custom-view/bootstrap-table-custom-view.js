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

Object.assign($.fn.bootstrapTable.defaults.icons, {
  customViewOn: {
    bootstrap3: 'glyphicon glyphicon-list',
    bootstrap5: 'bi-list',
    bootstrap4: 'fa fa-list',
    semantic: 'fa fa-list',
    foundation: 'fa fa-list',
    bulma: 'fa fa-list',
    materialize: 'list'
  }[$.fn.bootstrapTable.theme] || 'fa-list',
  customViewOff: {
    bootstrap3: 'glyphicon glyphicon-thumbnails',
    bootstrap5: 'bi-grid',
    bootstrap4: 'fa fa-th',
    semantic: 'fa fa-th',
    foundation: 'fa fa-th',
    bulma: 'fa fa-th',
    materialize: 'grid_on'
  }[$.fn.bootstrapTable.theme] || 'fa-th'
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
