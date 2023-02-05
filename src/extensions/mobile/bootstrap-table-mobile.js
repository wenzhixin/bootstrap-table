/**
 * @author: Dennis Hernández
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const debounce = (func, wait) => {
  let timeout = 0

  return (...args) => {
    const later = () => {
      timeout = 0
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

Object.assign($.fn.bootstrapTable.defaults, {
  mobileResponsive: false,
  minWidth: 562,
  minHeight: undefined,
  heightThreshold: 100, // just slightly larger than mobile chrome's auto-hiding toolbar
  checkOnInit: true,
  columnsHidden: []
})

$.BootstrapTable = class extends $.BootstrapTable {
  init (...args) {
    super.init(...args)

    if (!this.options.mobileResponsive || !this.options.minWidth) {
      return
    }

    if (this.options.minWidth < 100 && this.options.resizable) {
      console.warn('The minWidth when the resizable extension is active should be greater or equal than 100')
      this.options.minWidth = 100
    }

    let old = {
      width: $(window).width(),
      height: $(window).height()
    }

    $(window).on('resize orientationchange', debounce(() => {
      // reset view if height has only changed by at least the threshold.
      const width = $(window).width()
      const height = $(window).height()
      const $activeElement = $(document.activeElement)

      if ($activeElement.length && ['INPUT', 'SELECT', 'TEXTAREA'].includes($activeElement.prop('nodeName'))) {
        return
      }

      if (
        Math.abs(old.height - height) > this.options.heightThreshold ||
        old.width !== width
      ) {
        this.changeView(width, height)
        old = {
          width,
          height
        }
      }
    }, 200))

    if (this.options.checkOnInit) {
      const width = $(window).width()
      const height = $(window).height()

      this.changeView(width, height)
      old = {
        width,
        height
      }
    }
  }

  conditionCardView () {
    this.changeTableView(false)
    this.showHideColumns(false)
  }

  conditionFullView () {
    this.changeTableView(true)
    this.showHideColumns(true)
  }

  changeTableView (cardViewState) {
    this.options.cardView = cardViewState
    this.toggleView()
  }

  showHideColumns (checked) {
    if (this.options.columnsHidden.length > 0) {
      this.columns.forEach(column => {
        if (this.options.columnsHidden.includes(column.field)) {
          if (column.visible !== checked) {
            this._toggleColumn(this.fieldsColumnsIndex[column.field], checked, true)
          }
        }
      })
    }
  }

  changeView (width, height) {
    if (this.options.minHeight) {
      if (width <= this.options.minWidth && height <= this.options.minHeight) {
        this.conditionCardView()
      } else if (width > this.options.minWidth && height > this.options.minHeight) {
        this.conditionFullView()
      }
    } else if (width <= this.options.minWidth) {
      this.conditionCardView()
    } else if (width > this.options.minWidth) {
      this.conditionFullView()
    }

    this.resetView()
  }
}
