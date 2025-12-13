/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.26.0
 * https://github.com/wenzhixin/bootstrap-table/
 */

import InitializationModule from './modules/initialization.js'
import BodyModule from './modules/body.js'
import CheckModule from './modules/check.js'
import Constants from './constants/index.js'
import DataModule from './modules/data.js'
import DetailModule from './modules/detail.js'
import HeaderModule from './modules/header.js'
import PaginationModule from './modules/pagination.js'
import SearchModule from './modules/search.js'
import ToolbarModule from './modules/toolbar.js'
import Utils from './utils/index.js'

class BootstrapTable {
  constructor (el, options) {
    this.options = options
    this.$el = $(el)
    this.$el_ = this.$el.clone()
    this._timeoutId = {
      header: 0,
      footer: 0
    }
  }

  init () {
    this.initConstants()
    this.initLocale()
    this.initContainer()
    this.initTable()
    this.initHeader()
    this.initData()
    this.initHiddenRows()
    this.initToolbar()
    this.initPagination()
    this.initBody()
    this.initSearchText()
    this.initServer()
  }

  trigger (_name, ...args) {
    const name = `${_name}.bs.table`

    this.options[BootstrapTable.EVENTS[name]](...[...args, this])
    this.$el.trigger($.Event(name, { sender: this }), args)

    this.options.onAll(name, ...[...args, this])
    this.$el.trigger($.Event('all.bs.table', { sender: this }), [name, args])
  }

  getOptions () {
    // deep copy and remove data
    const options = Utils.extend({}, this.options)

    delete options.data
    return Utils.extend(true, {}, options)
  }

  refreshOptions (options) {
    // If the objects are equivalent then avoid the call of destroy / init methods
    if (Utils.compareObjects(this.options, options, true)) {
      return
    }
    this.optionsColumnsChanged = !!options.columns
    this.options = Utils.extend(this.options, options)
    this.trigger('refresh-options', this.options)
    this.destroy()
    this.init()
  }

  _setDelayTimeout (type, callback, delay) {
    clearTimeout(this._timeoutId[type])
    this._timeoutId[type] = setTimeout(callback, delay)
  }

  destroy () {
    for (const type of Object.keys(this._timeoutId)) {
      clearTimeout(this._timeoutId[type])
    }
    this.$el.insertBefore(this.$container)
    $(this.options.toolbar).insertBefore(this.$el)
    this.$container.next().remove()
    this.$container.remove()
    this.$el.html(this.$el_.html())
      .css('margin-top', '0')
      .attr('class', this.$el_.attr('class') || '') // reset the class

    const resizeEvent = Utils.getEventName('resize.bootstrap-table', this.$el.attr('id'))

    $(window).off(resizeEvent)
  }

  updateFormatText (formatName, text) {
    if (!/^format/.test(formatName) || !this.options[formatName]) {
      return
    }
    if (typeof text === 'string') {
      this.options[formatName] = () => text
    } else if (typeof text === 'function') {
      this.options[formatName] = text
    }
    this.initToolbar()
    this.initPagination()
    this.initBody()
  }
}

Object.assign(BootstrapTable.prototype, InitializationModule)
Object.assign(BootstrapTable.prototype, HeaderModule)
Object.assign(BootstrapTable.prototype, DataModule)
Object.assign(BootstrapTable.prototype, ToolbarModule)
Object.assign(BootstrapTable.prototype, SearchModule)
Object.assign(BootstrapTable.prototype, PaginationModule)
Object.assign(BootstrapTable.prototype, BodyModule)
Object.assign(BootstrapTable.prototype, CheckModule)
Object.assign(BootstrapTable.prototype, DetailModule)

BootstrapTable.VERSION = Constants.VERSION
BootstrapTable.DEFAULTS = Constants.DEFAULTS
BootstrapTable.LOCALES = Constants.LOCALES
BootstrapTable.COLUMN_DEFAULTS = Constants.COLUMN_DEFAULTS
BootstrapTable.METHODS = Constants.METHODS
BootstrapTable.EVENTS = Constants.EVENTS

// BOOTSTRAP TABLE PLUGIN DEFINITION
// =======================

$.BootstrapTable = BootstrapTable
$.fn.bootstrapTable = function (option, ...args) {
  let value

  this.each((i, el) => {
    let data = $(el).data('bootstrap.table')

    if (typeof option === 'string') {
      if (!Constants.METHODS.includes(option)) {
        throw new Error(`Unknown method: ${option}`)
      }

      if (!data) {
        return
      }

      value = data[option](...args)

      if (option === 'destroy') {
        $(el).removeData('bootstrap.table')
      }
      return
    }

    if (data) {
      console.warn('You cannot initialize the table more than once!')
      return
    }

    const options = Utils.extend(true, {}, BootstrapTable.DEFAULTS, $(el).data(),
      typeof option === 'object' && option)

    data = new $.BootstrapTable(el, options)
    $(el).data('bootstrap.table', data)
    data.init()
  })

  return typeof value === 'undefined' ? this : value
}

$.fn.bootstrapTable.Constructor = BootstrapTable
$.fn.bootstrapTable.theme = Constants.THEME
$.fn.bootstrapTable.VERSION = Constants.VERSION
$.fn.bootstrapTable.icons = Constants.ICONS
$.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS
$.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS
$.fn.bootstrapTable.events = BootstrapTable.EVENTS
$.fn.bootstrapTable.locales = BootstrapTable.LOCALES
$.fn.bootstrapTable.methods = BootstrapTable.METHODS
$.fn.bootstrapTable.utils = Utils

// BOOTSTRAP TABLE INIT
// =======================

$(() => {
  $('[data-toggle="table"]').bootstrapTable()
})

export default BootstrapTable
