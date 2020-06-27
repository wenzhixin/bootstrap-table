/**
 * @author: Alec Fenichel
 * @webSite: https://fenichelar.com
 * @update: zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  autoRefresh: false,
  autoRefreshInterval: 60,
  autoRefreshSilent: true,
  autoRefreshStatus: true,
  autoRefreshFunction: null
})

$.extend($.fn.bootstrapTable.defaults.icons, {
  autoRefresh: {
    bootstrap3: 'glyphicon-time icon-time',
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
      this.options.autoRefreshFunction = setInterval(() => {
        this.refresh({silent: this.options.autoRefreshSilent})
      }, this.options.autoRefreshInterval * 1000)
    }
  }

  initToolbar (...args) {
    super.initToolbar(...args)

    if (this.options.autoRefresh) {
      const $btnGroup = this.$toolbar.find('>.columns')
      let $btnAutoRefresh = $btnGroup.find('.auto-refresh')

      if (!$btnAutoRefresh.length) {
        $btnAutoRefresh = $(`
          <button class="auto-refresh ${this.constants.buttonsClass}
          ${this.options.autoRefreshStatus ? ` ${this.constants.classes.buttonActive}` : ''}"
          type="button" title="${this.options.formatAutoRefresh()}">
          ${ this.options.showButtonIcons ? Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.autoRefresh) : ''}
          ${ this.options.showButtonText ? this.options.formatAutoRefresh() : ''}
          </button>
        `).appendTo($btnGroup)

        $btnAutoRefresh.on('click', $.proxy(this.toggleAutoRefresh, this))
      }
    }
  }

  toggleAutoRefresh () {
    if (this.options.autoRefresh) {
      if (this.options.autoRefreshStatus) {
        clearInterval(this.options.autoRefreshFunction)
        this.$toolbar.find('>.columns').find('.auto-refresh')
          .removeClass(this.constants.classes.buttonActive)
      } else {
        this.options.autoRefreshFunction = setInterval(() => {
          this.refresh({silent: this.options.autoRefreshSilent})
        }, this.options.autoRefreshInterval * 1000)
        this.$toolbar.find('>.columns').find('.auto-refresh')
          .addClass(this.constants.classes.buttonActive)
      }
      this.options.autoRefreshStatus = !this.options.autoRefreshStatus
    }
  }
}
