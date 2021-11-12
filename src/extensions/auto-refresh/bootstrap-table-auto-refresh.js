/**
 * @author: Alec Fenichel
 * @webSite: https://fenichelar.com
 * @update: zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  autoRefresh: false,
  showAutoRefresh: true,
  autoRefreshInterval: 60,
  autoRefreshSilent: true,
  autoRefreshStatus: true,
  autoRefreshFunction: null
})

$.extend($.fn.bootstrapTable.defaults.icons, {
  autoRefresh: {
    bootstrap3: 'glyphicon-time icon-time',
    bootstrap5: 'bi-clock',
    materialize: 'access_time',
    'bootstrap-table': 'icon-clock'
  }[$.fn.bootstrapTable.theme] || 'fa-clock'
})

$.extend($.fn.bootstrapTable.locales, {
  formatAutoRefresh () {
    return 'Auto Refresh'
  }
})

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

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
          html: `
            <button class="auto-refresh ${this.constants.buttonsClass}
              ${this.options.autoRefreshStatus ? ` ${this.constants.classes.buttonActive}` : ''}"
              type="button" name="autoRefresh" title="${this.options.formatAutoRefresh()}">
              ${ this.options.showButtonIcons ? Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.autoRefresh) : ''}
              ${ this.options.showButtonText ? this.options.formatAutoRefresh() : ''}
            </button>
           `,
          event: this.toggleAutoRefresh
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
