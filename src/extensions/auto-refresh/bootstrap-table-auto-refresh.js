/**
 * @author: Alec Fenichel
 * @webSite: https://fenichelar.com
 * @update: zhixin wen <wenzhixin2010@gmail.com>
 */

($ => {
  const Utils = $.fn.bootstrapTable.utils

  $.extend($.fn.bootstrapTable.defaults, {
    autoRefresh: false,
    autoRefreshInterval: 60,
    autoRefreshSilent: true,
    autoRefreshStatus: true,
    autoRefreshFunction: null
  })

  $.extend($.fn.bootstrapTable.defaults.icons, {
    autoRefresh: Utils.bootstrapVersion === 4 ? 'fa-clock' : 'glyphicon-time icon-time'
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
        const $btnGroup = this.$toolbar.find('>.btn-group')
        let $btnAutoRefresh = $btnGroup.find('.auto-refresh')

        if (!$btnAutoRefresh.length) {
          $btnAutoRefresh = $(`
            <button class="auto-refresh btn${Utils.sprintf(' btn-%s', this.options.buttonsClass)}
            ${Utils.sprintf(' btn-%s', this.options.iconSize)}
            ${this.options.autoRefreshStatus ? 'active' : ''}"
            type="button" title="${this.options.formatAutoRefresh()}">
            <i class="${this.options.iconsPrefix} ${this.options.icons.autoRefresh}"></i>
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
          this.$toolbar.find('>.btn-group').find('.auto-refresh').removeClass('active')
        } else {
          this.options.autoRefreshFunction = setInterval(() => {
            this.refresh({silent: this.options.autoRefreshSilent})
          }, this.options.autoRefreshInterval * 1000)
          this.$toolbar.find('>.btn-group').find('.auto-refresh').addClass('active')
        }
        this.options.autoRefreshStatus = !this.options.autoRefreshStatus
      }
    }
  }
})(jQuery)
