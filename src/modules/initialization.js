import Constants from '../constants/index.js'
import Utils from '../utils/index.js'

export default {
  initConstants () {
    const opts = this.options

    this.constants = Constants.CONSTANTS
    this.constants.theme = $.fn.bootstrapTable.theme
    this.constants.dataToggle = this.constants.html.dataToggle || 'data-toggle'

    // init iconsPrefix and icons
    const iconsPrefix = Utils.getIconsPrefix($.fn.bootstrapTable.theme)

    if (typeof opts.icons === 'string') {
      opts.icons = Utils.calculateObjectValue(null, opts.icons)
    }

    opts.iconsPrefix = opts.iconsPrefix || $.fn.bootstrapTable.defaults.iconsPrefix || iconsPrefix
    opts.icons = Object.assign(Utils.getIcons(Constants.ICONS, opts.iconsPrefix),
      $.fn.bootstrapTable.defaults.icons, opts.icons)

    // init buttons class
    const buttonsPrefix = opts.buttonsPrefix ? `${opts.buttonsPrefix}-` : ''

    this.constants.buttonsClass = [
      opts.buttonsPrefix,
      buttonsPrefix + opts.buttonsClass,
      Utils.sprintf(`${buttonsPrefix}%s`, opts.iconSize)
    ].join(' ').trim()

    this.buttons = Utils.calculateObjectValue(this, opts.buttons, [], {})
    if (typeof this.buttons !== 'object') {
      this.buttons = {}
    }
  },

  initLocale () {
    if (this.options.locale) {
      const locales = $.fn.bootstrapTable.locales
      const parts = this.options.locale.split(/-|_/)

      parts[0] = parts[0].toLowerCase()
      if (parts[1]) {
        parts[1] = parts[1].toUpperCase()
      }

      let localesToExtend = {}

      if (locales[this.options.locale]) {
        localesToExtend = locales[this.options.locale]
      } else if (locales[parts.join('-')]) {
        localesToExtend = locales[parts.join('-')]
      } else if (locales[parts[0]]) {
        localesToExtend = locales[parts[0]]
      }

      this._defaultLocales = this._defaultLocales || {}
      for (const [formatName, func] of Object.entries(localesToExtend)) {
        const defaultLocale = this._defaultLocales.hasOwnProperty(formatName) ?
          this._defaultLocales[formatName] : Constants.DEFAULTS[formatName]

        if (this.options[formatName] !== defaultLocale) {
          continue
        }

        this.options[formatName] = func
        this._defaultLocales[formatName] = func
      }
    }
  },

  initContainer () {
    const topPagination = ['top', 'both'].includes(this.options.paginationVAlign) ?
      '<div class="fixed-table-pagination clearfix"></div>' : ''
    const bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign) ?
      '<div class="fixed-table-pagination"></div>' : ''
    const loadingTemplate = Utils.calculateObjectValue(this.options,
      this.options.loadingTemplate, [this.options.formatLoadingMessage()])

    this.$container = $(`
      <div class="bootstrap-table ${this.constants.theme}">
      <div class="fixed-table-toolbar"></div>
      ${topPagination}
      <div class="fixed-table-container">
      <div class="fixed-table-header"><table></table></div>
      <div class="fixed-table-body">
      <div class="fixed-table-loading">
      ${loadingTemplate}
      </div>
      </div>
      <div class="fixed-table-footer"></div>
      </div>
      ${bottomPagination}
      </div>
    `)

    this.$container.insertAfter(this.$el)
    this.$tableContainer = this.$container.find('.fixed-table-container')
    this.$tableHeader = this.$container.find('.fixed-table-header')
    this.$tableBody = this.$container.find('.fixed-table-body')
    this.$tableLoading = this.$container.find('.fixed-table-loading')
    this.$tableFooter = this.$el.find('tfoot')
    // checking if custom table-toolbar exists or not
    if (this.options.buttonsToolbar) {
      this.$toolbar = $('body').find(this.options.buttonsToolbar)
    } else {
      this.$toolbar = this.$container.find('.fixed-table-toolbar')
    }

    this.$pagination = this.$container.find('.fixed-table-pagination')

    this.$tableBody.append(this.$el)
    this.$container.after('<div class="clearfix"></div>')

    this.$el.addClass(this.options.classes)
    this.$tableLoading.addClass(this.options.classes)

    if (this.options.height) {
      this.$tableContainer.addClass('fixed-height')

      if (this.options.showFooter) {
        this.$tableContainer.addClass('has-footer')
      }

      if (this.options.classes.split(' ').includes('table-bordered')) {
        this.$tableBody.append('<div class="fixed-table-border"></div>')
        this.$tableBorder = this.$tableBody.find('.fixed-table-border')
        this.$tableLoading.addClass('fixed-table-border')
      }

      this.$tableFooter = this.$container.find('.fixed-table-footer')
    }
  },

  initTable () {
    const columns = []

    this.$header = this.$el.find('>thead')
    if (!this.$header.length) {
      this.$header = $(`<thead class="${this.options.theadClasses}"></thead>`).appendTo(this.$el)
    } else if (this.options.theadClasses) {
      this.$header.addClass(this.options.theadClasses)
    }

    this._headerTrClasses = []
    this._headerTrStyles = []
    this.$header.find('tr').each((i, el) => {
      const $tr = $(el)
      const column = []

      $tr.find('th').each((i, el) => {
        const $th = $(el)

        // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
        if (typeof $th.data('field') !== 'undefined') {
          $th.data('field', `${$th.data('field')}`)
        }
        const _data = Object.assign({}, $th.data())

        for (const key in _data) {
          if ($.fn.bootstrapTable.columnDefaults.hasOwnProperty(key)) {
            delete _data[key]
          }
        }

        column.push(Utils.extend({}, {
          _data: Utils.getRealDataAttr(_data),
          title: $th.html(),
          class: $th.attr('class'),
          titleTooltip: $th.attr('title'),
          rowspan: $th.attr('rowspan') ? +$th.attr('rowspan') : undefined,
          colspan: $th.attr('colspan') ? +$th.attr('colspan') : undefined,
          scope: $th.attr('scope') ? $th.attr('scope') : undefined
        }, $th.data()))
      })
      columns.push(column)

      if ($tr.attr('class')) {
        this._headerTrClasses.push($tr.attr('class'))
      }
      if ($tr.attr('style')) {
        this._headerTrStyles.push($tr.attr('style'))
      }
    })

    if (!Array.isArray(this.options.columns[0])) {
      this.options.columns = [this.options.columns]
    }

    this.options.columns = Utils.extend(true, [], columns, this.options.columns)
    this.columns = []
    this.fieldsColumnsIndex = []

    if (this.optionsColumnsChanged !== false) {
      Utils.setFieldIndex(this.options.columns)
    }

    this.options.columns.forEach((columns, i) => {
      columns.forEach((_column, j) => {
        const column = Utils.extend({}, Constants.COLUMN_DEFAULTS, _column, { passed: _column })

        if (typeof column.fieldIndex !== 'undefined') {
          this.columns[column.fieldIndex] = column
          this.fieldsColumnsIndex[column.field] = column.fieldIndex
        }

        this.options.columns[i][j] = column
      })
    })

    // if options.data is setting, do not process tbody and tfoot data
    if (!this.options.data.length) {
      const htmlData = Utils.trToData(this.columns, this.$el.find('>tbody>tr'))

      if (htmlData.length) {
        this.options.data = htmlData
        this.fromHtml = true
      }
    }

    if (!(this.options.pagination && this.options.sidePagination !== 'server')) {
      this.footerData = Utils.trToData(this.columns, this.$el.find('>tfoot>tr'))
    }

    if (this.footerData) {
      this.$el.find('tfoot').html('<tr></tr>')
    }

    if (!this.options.showFooter || this.options.cardView) {
      this.$tableFooter.hide()
    } else {
      this.$tableFooter.show()
    }
  }
}
