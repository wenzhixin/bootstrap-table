/**
 * @author: Alec Fenichel
 * @webSite: https://fenichelar.com
 * @update: zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

Object.assign($.fn.bootstrapTable.defaults, {
  autoRefresh: false,
  showAutoRefresh: true,
  autoRefreshInterval: 60,
  autoRefreshSilent: true,
  autoRefreshStatus: true,
  autoRefreshFunction: null
})

Utils.assignIcons($.fn.bootstrapTable.icons, 'autoRefresh', {
  glyphicon: 'glyphicon-time icon-time',
  fa: 'fa-clock',
  bi: 'bi-clock',
  icon: 'icon-clock',
  'material-icons': 'access_time'
})

Object.assign($.fn.bootstrapTable.locales, {
  formatAutoRefresh () {
    return 'Auto Refresh'
  }
})

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.BootstrapTable = class extends $.BootstrapTable {
  init (...args) {
    super.init(...args)

    if (this.options.autoRefresh && this.options.autoRefreshStatus) {
      this.setupRefreshInterval()
    }
  }

  initToolbar (...args) {
    if (this.options.autoRefresh) {
      this.buttons = Object.assign(this.buttons, {
        autoRefresh: {
          text: this.options.formatAutoRefresh(),
          icon: this.options.icons.autoRefresh,
          render: false,
          event: this.toggleAutoRefresh,
          attributes: {
            'aria-label': this.options.formatAutoRefresh(),
            title: this.options.formatAutoRefresh()
          }
        }
      })
    }

    super.initToolbar(...args)
  }

  toggleAutoRefresh () {
    if (this.options.autoRefresh) {
      if (this.options.autoRefreshStatus) {
        clearInterval(this.options.autoRefreshFunction)
        this.$toolbar.find('>.columns .auto-refresh')
          .removeClass(this.constants.classes.buttonActive)
      } else {
        this.setupRefreshInterval()
        this.$toolbar.find('>.columns .auto-refresh')
          .addClass(this.constants.classes.buttonActive)
      }
      this.options.autoRefreshStatus = !this.options.autoRefreshStatus
    }
  }

  destroy () {
    if (this.options.autoRefresh && this.options.autoRefreshStatus) {
      clearInterval(this.options.autoRefreshFunction)
    }

    super.destroy()
  }

  setupRefreshInterval () {
    this.options.autoRefreshFunction = setInterval(() => {
      if (!this.options.autoRefresh || !this.options.autoRefreshStatus) {
        return
      }
      this.refresh({ silent: this.options.autoRefreshSilent })
    }, this.options.autoRefreshInterval * 1000)
  }
}
