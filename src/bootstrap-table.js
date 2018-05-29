/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.12.1
 * https://github.com/wenzhixin/bootstrap-table/
 */

($ => {
  // TOOLS DEFINITION
  // ======================

  let bootstrapVersion = 3
  try {
    bootstrapVersion = parseInt($.fn.dropdown.Constructor.VERSION, 10)
  } catch (e) {}

  const bootstrap = {
    3: {
      iconsPrefix: 'glyphicon',
      icons: {
        paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
        paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
        refresh: 'glyphicon-refresh icon-refresh',
        toggleOff: 'glyphicon-list-alt icon-list-alt',
        toggleOn: 'glyphicon-list-alt icon-list-alt',
        columns: 'glyphicon-th icon-th',
        detailOpen: 'glyphicon-plus icon-plus',
        detailClose: 'glyphicon-minus icon-minus',
        fullscreen: 'glyphicon-fullscreen'
      },
      classes: {
        buttons: 'default',
        pull: 'pull'
      },
      html: {
        toobarDropdow: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        toobarDropdowItem: '<li role="menuitem"><label>%s</label></li>',
        pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
        pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>'
      }
    },
    4: {
      iconsPrefix: 'fa',
      icons: {
        paginationSwitchDown: 'fa-toggle-down',
        paginationSwitchUp: 'fa-toggle-up',
        refresh: 'fa-refresh',
        toggleOff: 'fa-toggle-off',
        toggleOn: 'fa-toggle-on',
        columns: 'fa-th-list',
        detailOpen: 'fa-plus',
        detailClose: 'fa-minus',
        fullscreen: 'fa-arrows-alt'
      },
      classes: {
        buttons: 'secondary',
        pull: 'float'
      },
      html: {
        toobarDropdow: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
        toobarDropdowItem: '<label class="dropdown-item">%s</label>',
        pageDropdown: ['<div class="dropdown-menu">', '</div>'],
        pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>'
      }
    }
  }[bootstrapVersion]

  const Utils = {
    bootstrapVersion,

    // it only does '%s', and return '' when arguments are undefined
    sprintf (str, ...args) {
      let flag = true
      let i = 0

      str = str.replace(/%s/g, () => {
        const arg = args[i++]

        if (typeof arg === 'undefined') {
          flag = false
          return ''
        }
        return arg
      })
      return flag ? str : ''
    },

    getFieldTitle (list, value) {
      for (let item of list) {
        if (item.field === value) {
          return item.title
        }
      }
      return ''
    },

    setFieldIndex (columns) {
      let totalCol = 0
      const flag = []

      for (const column of columns[0]) {
        totalCol += column.colspan || 1
      }

      for (let i = 0; i < columns.length; i++) {
        flag[i] = []
        for (let j = 0; j < totalCol; j++) {
          flag[i][j] = false
        }
      }

      for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < columns[i].length; j++) {
          const r = columns[i][j]
          const rowspan = r.rowspan || 1
          const colspan = r.colspan || 1
          const index = flag[i].indexOf(false)

          if (colspan === 1) {
            r.fieldIndex = index
            // when field is undefined, use index instead
            if (typeof r.field === 'undefined') {
              r.field = index
            }
          }

          for (let k = 0; k < rowspan; k++) {
            flag[i + k][index] = true
          }
          for (let k = 0; k < colspan; k++) {
            flag[i][index + k] = true
          }
        }
      }
    },

    getScrollBarWidth () {
      if (this.cachedWidth === null) {
        const $inner = $('<div/>').addClass('fixed-table-scroll-inner')
        const $outer = $('<div/>').addClass('fixed-table-scroll-outer')
        let w1
        let w2

        $outer.append($inner)
        $('body').append($outer)

        w1 = $inner[0].offsetWidth
        $outer.css('overflow', 'scroll')
        w2 = $inner[0].offsetWidth

        if (w1 === w2) {
          w2 = $outer[0].clientWidth
        }

        $outer.remove()
        this.cachedWidth = w1 - w2
      }
      return this.cachedWidth
    },

    calculateObjectValue (self, name, args, defaultValue) {
      let func = name

      if (typeof name === 'string') {
        // support obj.func1.func2
        const names = name.split('.')

        if (names.length > 1) {
          func = window
          for (const f of name) {
            func = func[f]
          }
        } else {
          func = window[name]
        }
      }

      if (typeof func === 'object') {
        return func
      }

      if (typeof func === 'function') {
        return func.apply(self, args || [])
      }

      if (
        !func &&
        typeof name === 'string' &&
        this.sprintf(name, ...args)
      ) {
        return this.sprintf(name, ...args)
      }

      return defaultValue
    },

    compareObjects (objectA, objectB, compareLength) {
      const aKeys = Object.keys(objectA)
      const bKeys = Object.keys(objectB)

      if (compareLength && aKeys.length !== bKeys.length) {
        return false
      }

      for (const key of aKeys) {
        if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
          return false
        }
      }

      return true
    },

    escapeHTML (text) {
      if (typeof text === 'string') {
        return text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;')
          .replace(/`/g, '&#x60;')
      }
      return text
    },

    getRealDataAttr (dataAttr) {
      for (const attr in dataAttr) {
        const auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase()
        if (auxAttr !== attr) {
          dataAttr[auxAttr] = dataAttr[attr]
          delete dataAttr[attr]
        }
      }
      return dataAttr
    },

    getItemField (item, field, escape) {
      let value = item

      if (typeof field !== 'string' || item.hasOwnProperty(field)) {
        return escape ? this.escapeHTML(item[field]) : item[field]
      }

      const props = field.split('.')
      for (const p of props) {
        value = value && value[p]
      }
      return escape ? this.escapeHTML(value) : value
    },

    isIEBrowser () {
      return navigator.userAgent.includes('MSIE ') ||
        /Trident.*rv:11\./.test(navigator.userAgent)
    }
  }

  // BOOTSTRAP TABLE CLASS DEFINITION
  // ======================

  const DEFAULTS = {
    classes: 'table table-hover',
    locale: undefined,
    height: undefined,
    undefinedText: '-',
    sortName: undefined,
    sortOrder: 'asc',
    sortStable: false,
    sortClass: undefined,
    rememberOrder: false,
    striped: false,
    columns: [
      []
    ],
    data: [],
    totalField: 'total',
    dataField: 'rows',
    method: 'get',
    url: undefined,
    ajax: undefined,
    cache: true,
    contentType: 'application/json',
    dataType: 'json',
    ajaxOptions: {},
    queryParams (params) {
      return params
    },
    queryParamsType: 'limit', // 'limit', undefined
    responseHandler (res) {
      return res
    },
    pagination: false,
    onlyInfoPagination: false,
    paginationLoop: true,
    sidePagination: 'client', // client or server
    totalRows: 0, // server side need to set
    pageNumber: 1,
    pageSize: 10,
    pageList: [10, 25, 50, 100],
    paginationHAlign: 'right', // right, left
    paginationVAlign: 'bottom', // bottom, top, both
    paginationDetailHAlign: 'left', // right, left
    paginationPreText: '&lsaquo;',
    paginationNextText: '&rsaquo;',
    search: false,
    searchOnEnterKey: false,
    strictSearch: false,
    searchAlign: 'right',
    selectItemName: 'btSelectItem',
    showHeader: true,
    showFooter: false,
    showColumns: false,
    showPaginationSwitch: false,
    showRefresh: false,
    showToggle: false,
    showFullscreen: false,
    smartDisplay: true,
    escape: false,
    minimumCountColumns: 1,
    idField: undefined,
    uniqueId: undefined,
    cardView: false,
    detailView: false,
    detailFormatter (index, row) {
      return ''
    },
    detailFilter (index, row) {
      return true
    },
    trimOnSearch: true,
    clickToSelect: false,
    singleSelect: false,
    toolbar: undefined,
    toolbarAlign: 'left',
    buttonsToolbar: undefined,
    buttonsAlign: 'right',
    checkboxHeader: true,
    sortable: true,
    silentSort: true,
    maintainSelected: false,
    searchTimeOut: 500,
    searchText: '',
    iconSize: undefined,
    buttonsClass: bootstrap.classes.buttons,
    iconsPrefix: bootstrap.iconsPrefix, // glyphicon or fa(font-awesome)
    icons: bootstrap.icons,
    customSearch: $.noop,
    customSort: $.noop,
    ignoreClickToSelectOn (element) {
      return ['A', 'BUTTON'].includes(element.tagName)
    },
    rowStyle (row, index) {
      return {}
    },
    rowAttributes (row, index) {
      return {}
    },
    footerStyle (row, index) {
      return {}
    },
    onAll (name, args) {
      return false
    },
    onClickCell (field, value, row, $element) {
      return false
    },
    onDblClickCell (field, value, row, $element) {
      return false
    },
    onClickRow (item, $element) {
      return false
    },
    onDblClickRow (item, $element) {
      return false
    },
    onSort (name, order) {
      return false
    },
    onCheck (row) {
      return false
    },
    onUncheck (row) {
      return false
    },
    onCheckAll (rows) {
      return false
    },
    onUncheckAll (rows) {
      return false
    },
    onCheckSome (rows) {
      return false
    },
    onUncheckSome (rows) {
      return false
    },
    onLoadSuccess (data) {
      return false
    },
    onLoadError (status) {
      return false
    },
    onColumnSwitch (field, checked) {
      return false
    },
    onPageChange (number, size) {
      return false
    },
    onSearch (text) {
      return false
    },
    onToggle (cardView) {
      return false
    },
    onPreBody (data) {
      return false
    },
    onPostBody () {
      return false
    },
    onPostHeader () {
      return false
    },
    onExpandRow (index, row, $detail) {
      return false
    },
    onCollapseRow (index, row) {
      return false
    },
    onRefreshOptions (options) {
      return false
    },
    onRefresh (params) {
      return false
    },
    onResetView () {
      return false
    },
    onScrollBody () {
      return false
    }
  }

  const LOCALES = {}
  LOCALES['en-US'] = LOCALES.en = {
    formatLoadingMessage () {
      return 'Loading, please wait...'
    },
    formatRecordsPerPage (pageNumber) {
      return Utils.sprintf('%s rows per page', pageNumber)
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return Utils.sprintf('Showing %s to %s of %s rows', pageFrom, pageTo, totalRows)
    },
    formatDetailPagination (totalRows) {
      return Utils.sprintf('Showing %s rows', totalRows)
    },
    formatSearch () {
      return 'Search'
    },
    formatNoMatches () {
      return 'No matching records found'
    },
    formatPaginationSwitch () {
      return 'Hide/Show pagination'
    },
    formatRefresh () {
      return 'Refresh'
    },
    formatToggle () {
      return 'Toggle'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatColumns () {
      return 'Columns'
    },
    formatAllRows () {
      return 'All'
    }
  }

  $.extend(DEFAULTS, LOCALES['en-US'])

  const COLUMN_DEFAULTS = {
    radio: false,
    checkbox: false,
    checkboxEnabled: true,
    field: undefined,
    title: undefined,
    titleTooltip: undefined,
    'class': undefined,
    align: undefined, // left, right, center
    halign: undefined, // left, right, center
    falign: undefined, // left, right, center
    valign: undefined, // top, middle, bottom
    width: undefined,
    sortable: false,
    order: 'asc', // asc, desc
    visible: true,
    switchable: true,
    clickToSelect: true,
    formatter: undefined,
    footerFormatter: undefined,
    events: undefined,
    sorter: undefined,
    sortName: undefined,
    cellStyle: undefined,
    searchable: true,
    searchFormatter: true,
    cardVisible: true,
    escape: false,
    showSelectTitle: false
  }

  const EVENTS = {
    'all.bs.table': 'onAll',
    'click-cell.bs.table': 'onClickCell',
    'dbl-click-cell.bs.table': 'onDblClickCell',
    'click-row.bs.table': 'onClickRow',
    'dbl-click-row.bs.table': 'onDblClickRow',
    'sort.bs.table': 'onSort',
    'check.bs.table': 'onCheck',
    'uncheck.bs.table': 'onUncheck',
    'check-all.bs.table': 'onCheckAll',
    'uncheck-all.bs.table': 'onUncheckAll',
    'check-some.bs.table': 'onCheckSome',
    'uncheck-some.bs.table': 'onUncheckSome',
    'load-success.bs.table': 'onLoadSuccess',
    'load-error.bs.table': 'onLoadError',
    'column-switch.bs.table': 'onColumnSwitch',
    'page-change.bs.table': 'onPageChange',
    'search.bs.table': 'onSearch',
    'toggle.bs.table': 'onToggle',
    'pre-body.bs.table': 'onPreBody',
    'post-body.bs.table': 'onPostBody',
    'post-header.bs.table': 'onPostHeader',
    'expand-row.bs.table': 'onExpandRow',
    'collapse-row.bs.table': 'onCollapseRow',
    'refresh-options.bs.table': 'onRefreshOptions',
    'reset-view.bs.table': 'onResetView',
    'refresh.bs.table': 'onRefresh',
    'scroll-body.bs.table': 'onScrollBody'
  }

  class BootstrapTable {
    constructor (el, options) {
      this.options = options
      this.$el = $(el)
      this.$el_ = this.$el.clone()
      this.timeoutId_ = 0
      this.timeoutFooter_ = 0

      this.init()
    }

    init () {
      this.initLocale()
      this.initContainer()
      this.initTable()
      this.initHeader()
      this.initData()
      this.initHiddenRows()
      this.initFooter()
      this.initToolbar()
      this.initPagination()
      this.initBody()
      this.initSearchText()
      this.initServer()
    }

    initLocale () {
      if (this.options.locale) {
        const locales = $.fn.bootstrapTable.locales
        const parts = this.options.locale.split(/-|_/)
        parts[0].toLowerCase()
        if (parts[1]) {
          parts[1].toUpperCase()
        }
        if (locales[this.options.locale]) {
          // locale as requested
          $.extend(this.options, locales[this.options.locale])
        } else if ($.fn.bootstrapTable.locales[parts.join('-')]) {
          // locale with sep set to - (in case original was specified with _)
          $.extend(this.options, locales[parts.join('-')])
        } else if ($.fn.bootstrapTable.locales[parts[0]]) {
          // short locale language code (i.e. 'en')
          $.extend(this.options, locales[parts[0]])
        }
      }
    }

    initContainer () {
      const topPagination = ['top', 'both'].includes(this.options.paginationVAlign)
        ? '<div class="fixed-table-pagination clearfix"></div>' : ''
      const bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign)
        ? '<div class="fixed-table-pagination"></div>' : ''

      this.$container = $(`
        <div class="bootstrap-table">
        <div class="fixed-table-toolbar"></div>
        ${topPagination}
        <div class="fixed-table-container">
        <div class="fixed-table-header"><table></table></div>
        <div class="fixed-table-body">
        <div class="fixed-table-loading">
        ${this.options.formatLoadingMessage()}
        </div>
        </div>
        <div class="fixed-table-footer"><table><tr></tr></table></div>
        </div>
        ${bottomPagination}
        </div>
      `)

      this.$container.insertAfter(this.$el)
      this.$tableContainer = this.$container.find('.fixed-table-container')
      this.$tableHeader = this.$container.find('.fixed-table-header')
      this.$tableBody = this.$container.find('.fixed-table-body')
      this.$tableLoading = this.$container.find('.fixed-table-loading')
      this.$tableFooter = this.$container.find('.fixed-table-footer')
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
      if (this.options.striped) {
        this.$el.addClass('table-striped')
      }
      if (this.options.classes.split(' ').includes('table-no-bordered')) {
        this.$tableContainer.addClass('table-no-bordered')
      }
    }

    initTable () {
      const columns = []
      const data = []

      this.$header = this.$el.find('>thead')
      if (!this.$header.length) {
        this.$header = $('<thead></thead>').appendTo(this.$el)
      }
      this.$header.find('tr').each((i, el) => {
        const column = []

        $(el).find('th').each((i, el) => {
          // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
          if (typeof $(el).data('field') !== 'undefined') {
            $(el).data('field', `${$(el).data('field')}`)
          }
          column.push($.extend({}, {
            title: $(el).html(),
            'class': $(el).attr('class'),
            titleTooltip: $(el).attr('title'),
            rowspan: $(el).attr('rowspan') ? +$(el).attr('rowspan') : undefined,
            colspan: $(el).attr('colspan') ? +$(el).attr('colspan') : undefined
          }, $(el).data()))
        })
        columns.push(column)
      })

      if (!Array.isArray(this.options.columns[0])) {
        this.options.columns = [this.options.columns]
      }

      this.options.columns = $.extend(true, [], columns, this.options.columns)
      this.columns = []
      this.fieldsColumnsIndex = []

      Utils.setFieldIndex(this.options.columns)

      this.options.columns.forEach((columns, i) => {
        columns.forEach((column, j) => {
          column = $.extend({}, BootstrapTable.COLUMN_DEFAULTS, column)

          if (typeof column.fieldIndex !== 'undefined') {
            this.columns[column.fieldIndex] = column
            this.fieldsColumnsIndex[column.field] = column.fieldIndex
          }

          this.options.columns[i][j] = column
        })
      })

      // if options.data is setting, do not process tbody data
      if (this.options.data.length) {
        return
      }

      const m = []
      this.$el.find('>tbody>tr').each((y, el) => {
        const row = {}

        // save tr's id, class and data-* attributes
        row._id = $(el).attr('id')
        row._class = $(el).attr('class')
        row._data = Utils.getRealDataAttr($(el).data())

        $(el).find('>td').each((x, el) => {
          const cspan = +$(el).attr('colspan') || 1
          const rspan = +$(el).attr('rowspan') || 1

          // skip already occupied cells in current row
          for (; m[y] && m[y][x]; x++) {}

          // mark matrix elements occupied by current cell with true
          for (let tx = x; tx < x + cspan; tx++) {
            for (let ty = y; ty < y + rspan; ty++) {
              if (!m[ty]) { // fill missing rows
                m[ty] = []
              }
              m[ty][tx] = true
            }
          }

          const field = this.columns[x].field

          row[field] = $(el).html()
          // save td's id, class and data-* attributes
          row[`_${field}_id`] = $(el).attr('id')
          row[`_${field}_class`] = $(el).attr('class')
          row[`_${field}_rowspan`] = $(el).attr('rowspan')
          row[`_${field}_colspan`] = $(el).attr('colspan')
          row[`_${field}_title`] = $(el).attr('title')
          row[`_${field}_data`] = Utils.getRealDataAttr($(el).data())
        })
        data.push(row)
      })
      this.options.data = data
      if (data.length) {
        this.fromHtml = true
      }
    }

    initHeader () {
      const visibleColumns = {}
      const html = []

      this.header = {
        fields: [],
        styles: [],
        classes: [],
        formatters: [],
        events: [],
        sorters: [],
        sortNames: [],
        cellStyles: [],
        searchables: []
      }

      this.options.columns.forEach((columns, i) => {
        html.push('<tr>')

        if (i === 0 && !this.options.cardView && this.options.detailView) {
          html.push(`<th class="detail" rowspan="${this.options.columns.length}">
            <div class="fht-cell"></div>
            </th>
          `)
        }

        columns.forEach((column, j) => {
          let text = ''

          let halign = '' // header align style

          let align = '' // body align style

          let style = ''
          const class_ = Utils.sprintf(' class="%s"', column['class'])
          let unitWidth = 'px'
          let width = column.width

          if (column.width !== undefined && (!this.options.cardView)) {
            if (typeof column.width === 'string') {
              if (column.width.includes('%')) {
                unitWidth = '%'
              }
            }
          }
          if (column.width && typeof column.width === 'string') {
            width = column.width.replace('%', '').replace('px', '')
          }

          halign = Utils.sprintf('text-align: %s; ', column.halign ? column.halign : column.align)
          align = Utils.sprintf('text-align: %s; ', column.align)
          style = Utils.sprintf('vertical-align: %s; ', column.valign)
          style += Utils.sprintf('width: %s; ', (column.checkbox || column.radio) && !width
            ? (!column.showSelectTitle ? '36px' : undefined)
            : (width ? width + unitWidth : undefined))

          if (typeof column.fieldIndex !== 'undefined') {
            this.header.fields[column.fieldIndex] = column.field
            this.header.styles[column.fieldIndex] = align + style
            this.header.classes[column.fieldIndex] = class_
            this.header.formatters[column.fieldIndex] = column.formatter
            this.header.events[column.fieldIndex] = column.events
            this.header.sorters[column.fieldIndex] = column.sorter
            this.header.sortNames[column.fieldIndex] = column.sortName
            this.header.cellStyles[column.fieldIndex] = column.cellStyle
            this.header.searchables[column.fieldIndex] = column.searchable

            if (!column.visible) {
              return
            }

            if (this.options.cardView && (!column.cardVisible)) {
              return
            }

            visibleColumns[column.field] = column
          }

          html.push(`<th${Utils.sprintf(' title="%s"', column.titleTooltip)}`,
            column.checkbox || column.radio
              ? Utils.sprintf(' class="bs-checkbox %s"', column['class'] || '')
              : class_,
            Utils.sprintf(' style="%s"', halign + style),
            Utils.sprintf(' rowspan="%s"', column.rowspan),
            Utils.sprintf(' colspan="%s"', column.colspan),
            Utils.sprintf(' data-field="%s"', column.field),
            j === 0 && column.fieldIndex ? ' data-not-first-th' : '',
            '>')

          html.push(Utils.sprintf('<div class="th-inner %s">', this.options.sortable && column.sortable
            ? 'sortable both' : ''))

          text = this.options.escape ? Utils.escapeHTML(column.title) : column.title

          const title = text
          if (column.checkbox) {
            text = ''
            if (!this.options.singleSelect && this.options.checkboxHeader) {
              text = '<input name="btSelectAll" type="checkbox" />'
            }
            this.header.stateField = column.field
          }
          if (column.radio) {
            text = ''
            this.header.stateField = column.field
            this.options.singleSelect = true
          }
          if (!text && column.showSelectTitle) {
            text += title
          }

          html.push(text)
          html.push('</div>')
          html.push('<div class="fht-cell"></div>')
          html.push('</div>')
          html.push('</th>')
        })
        html.push('</tr>')
      })

      this.$header.html(html.join(''))
      this.$header.find('th[data-field]').each((i, el) => {
        $(el).data(visibleColumns[$(el).data('field')])
      })
      this.$container.off('click', '.th-inner').on('click', '.th-inner', e => {
        const $this = $(e.currentTarget)

        if (this.options.detailView && !$this.parent().hasClass('bs-checkbox')) {
          if ($this.closest('.bootstrap-table')[0] !== this.$container[0]) {
            return false
          }
        }

        if (this.options.sortable && $this.parent().data().sortable) {
          this.onSort(e)
        }
      })

      this.$header.children().children().off('keypress').on('keypress', e => {
        if (this.options.sortable && $(e.currentTarget).data().sortable) {
          const code = e.keyCode || e.which
          if (code === 13) { // Enter keycode
            this.onSort(e)
          }
        }
      })

      $(window).off('resize.bootstrap-table')
      if (!this.options.showHeader || this.options.cardView) {
        this.$header.hide()
        this.$tableHeader.hide()
        this.$tableLoading.css('top', 0)
      } else {
        this.$header.show()
        this.$tableHeader.show()
        this.$tableLoading.css('top', this.$header.outerHeight() + 1)
        // Assign the correct sortable arrow
        this.getCaret()
        $(window).on('resize.bootstrap-table', $.proxy(this.resetWidth, this))
      }

      this.$selectAll = this.$header.find('[name="btSelectAll"]')
      this.$selectAll.off('click').on('click', e => {
        const checked = $(e.currentTarget).prop('checked')
        this[checked ? 'checkAll' : 'uncheckAll']()
        this.updateSelected()
      })
    }

    initFooter () {
      if (!this.options.showFooter || this.options.cardView) {
        this.$tableFooter.hide()
      } else {
        this.$tableFooter.show()
      }
    }

    /**
     * @param data
     * @param type: append / prepend
     */
    initData (data, type) {
      if (type === 'append') {
        this.options.data = this.options.data.concat(data)
      } else if (type === 'prepend') {
        this.options.data = [].concat(data).concat(this.options.data)
      } else {
        this.options.data = data || this.options.data
      }

      this.data = this.options.data

      if (this.options.sidePagination === 'server') {
        return
      }
      this.initSort()
    }

    initSort () {
      let name = this.options.sortName
      const order = this.options.sortOrder === 'desc' ? -1 : 1
      const index = this.header.fields.indexOf(this.options.sortName)
      let timeoutId = 0

      if (this.options.customSort !== $.noop) {
        this.options.customSort.apply(this, [this.options.sortName, this.options.sortOrder])
        return
      }

      if (index !== -1) {
        if (this.options.sortStable) {
          this.data.forEach((row, i) => {
            row._position = i
          })
        }

        this.data.sort((a, b) => {
          if (this.header.sortNames[index]) {
            name = this.header.sortNames[index]
          }
          let aa = Utils.getItemField(a, name, this.options.escape)
          let bb = Utils.getItemField(b, name, this.options.escape)
          const value = Utils.calculateObjectValue(this.header, this.header.sorters[index], [aa, bb, a, b])

          if (value !== undefined) {
            if (this.options.sortStable && value === 0) {
              return a._position - b._position
            }
            return order * value
          }

          // Fix #161: undefined or null string sort bug.
          if (aa === undefined || aa === null) {
            aa = ''
          }
          if (bb === undefined || bb === null) {
            bb = ''
          }

          if (this.options.sortStable && aa === bb) {
            aa = a._position
            bb = b._position
            return a._position - b._position
          }

          // IF both values are numeric, do a numeric comparison
          if ($.isNumeric(aa) && $.isNumeric(bb)) {
            // Convert numerical values form string to float.
            aa = parseFloat(aa)
            bb = parseFloat(bb)
            if (aa < bb) {
              return order * -1
            }
            return order
          }

          if (aa === bb) {
            return 0
          }

          // If value is not a string, convert to string
          if (typeof aa !== 'string') {
            aa = aa.toString()
          }

          if (aa.localeCompare(bb) === -1) {
            return order * -1
          }

          return order
        })

        if (this.options.sortClass !== undefined) {
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => {
            this.$el.removeClass(this.options.sortClass)
            const index = this.$header.find(Utils.sprintf('[data-field="%s"]',
              this.options.sortName).index() + 1)
            this.$el.find(Utils.sprintf('tr td:nth-child(%s)', index))
              .addClass(this.options.sortClass)
          }, 250)
        }
      }
    }

    onSort ({type, currentTarget}) {
      const $this = type === 'keypress' ? $(currentTarget) : $(currentTarget).parent()
      const $this_ = this.$header.find('th').eq($this.index())

      this.$header.add(this.$header_).find('span.order').remove()

      if (this.options.sortName === $this.data('field')) {
        this.options.sortOrder = this.options.sortOrder === 'asc' ? 'desc' : 'asc'
      } else {
        this.options.sortName = $this.data('field')
        if (this.options.rememberOrder) {
          this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc'
        } else {
          this.options.sortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].order
        }
      }
      this.trigger('sort', this.options.sortName, this.options.sortOrder)

      $this.add($this_).data('order', this.options.sortOrder)

      // Assign the correct sortable arrow
      this.getCaret()

      if (this.options.sidePagination === 'server') {
        this.initServer(this.options.silentSort)
        return
      }

      this.initSort()
      this.initBody()
    }

    initToolbar () {
      let html = []
      let timeoutId = 0
      let $keepOpen
      let $search
      let switchableCount = 0

      if (this.$toolbar.find('.bs-bars').children().length) {
        $('body').append($(this.options.toolbar))
      }
      this.$toolbar.html('')

      if (typeof this.options.toolbar === 'string' || typeof this.options.toolbar === 'object') {
        $(Utils.sprintf('<div class="bs-bars %s-%s"></div>', bootstrap.classes.pull, this.options.toolbarAlign))
          .appendTo(this.$toolbar)
          .append($(this.options.toolbar))
      }

      // showColumns, showToggle, showRefresh
      html = [Utils.sprintf('<div class="columns columns-%s btn-group %s-%s">',
        this.options.buttonsAlign, bootstrap.classes.pull, this.options.buttonsAlign)]

      if (typeof this.options.icons === 'string') {
        this.options.icons = Utils.calculateObjectValue(null, this.options.icons)
      }

      if (this.options.showPaginationSwitch) {
        html.push(Utils.sprintf(`<button class="btn${Utils.sprintf(' btn-%s', this.options.buttonsClass)}${Utils.sprintf(' btn-%s', this.options.iconSize)}" type="button" name="paginationSwitch" aria-label="pagination Switch" title="%s">`,
          this.options.formatPaginationSwitch()),
        Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.paginationSwitchDown),
        '</button>')
      }

      if (this.options.showFullscreen) {
        this.$toolbar.find('button[name="fullscreen"]')
          .off('click').on('click', $.proxy(this.toggleFullscreen, this))
      }

      if (this.options.showRefresh) {
        html.push(Utils.sprintf(`<button class="btn${Utils.sprintf(' btn-%s', this.options.buttonsClass)}${Utils.sprintf(' btn-%s', this.options.iconSize)}" type="button" name="refresh" aria-label="refresh" title="%s">`,
          this.options.formatRefresh()),
        Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.refresh),
        '</button>')
      }

      if (this.options.showToggle) {
        html.push(Utils.sprintf(`<button class="btn${Utils.sprintf(' btn-%s', this.options.buttonsClass)}${Utils.sprintf(' btn-%s', this.options.iconSize)}" type="button" name="toggle" aria-label="toggle" title="%s">`,
          this.options.formatToggle()),
        Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.toggleOff),
        '</button>')
      }

      if (this.options.showFullscreen) {
        html.push(Utils.sprintf(`<button class="btn${Utils.sprintf(' btn-%s', this.options.buttonsClass)}${Utils.sprintf(' btn-%s', this.options.iconSize)}" type="button" name="fullscreen" aria-label="fullscreen" title="%s">`,
          this.options.formatFullscreen()),
        Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.fullscreen),
        '</button>')
      }

      if (this.options.showColumns) {
        html.push(Utils.sprintf('<div class="keep-open btn-group" title="%s">',
          this.options.formatColumns()),
        `<button type="button" aria-label="columns" class="btn${Utils.sprintf(' btn-%s', this.options.buttonsClass)}${Utils.sprintf(' btn-%s', this.options.iconSize)} dropdown-toggle" data-toggle="dropdown">`,
        Utils.sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.columns),
        ' <span class="caret"></span>',
        '</button>',
        bootstrap.html.toobarDropdow[0])

        this.columns.forEach((column, i) => {
          if (column.radio || column.checkbox) {
            return
          }

          if (this.options.cardView && !column.cardVisible) {
            return
          }

          const checked = column.visible ? ' checked="checked"' : ''

          if (column.switchable) {
            html.push(Utils.sprintf(bootstrap.html.toobarDropdowItem,
              Utils.sprintf('<input type="checkbox" data-field="%s" value="%s"%s> %s',
                column.field, i, checked, column.title)))
            switchableCount++
          }
        })
        html.push(bootstrap.html.toobarDropdow[1], '</div>')
      }

      html.push('</div>')

      // Fix #188: this.showToolbar is for extensions
      if (this.showToolbar || html.length > 2) {
        this.$toolbar.append(html.join(''))
      }

      if (this.options.showPaginationSwitch) {
        this.$toolbar.find('button[name="paginationSwitch"]')
          .off('click').on('click', $.proxy(this.togglePagination, this))
      }

      if (this.options.showRefresh) {
        this.$toolbar.find('button[name="refresh"]')
          .off('click').on('click', $.proxy(this.refresh, this))
      }

      if (this.options.showToggle) {
        this.$toolbar.find('button[name="toggle"]')
          .off('click').on('click', () => {
            this.toggleView()
          })
      }

      if (this.options.showColumns) {
        $keepOpen = this.$toolbar.find('.keep-open')

        if (switchableCount <= this.options.minimumCountColumns) {
          $keepOpen.find('input').prop('disabled', true)
        }

        $keepOpen.find('li').off('click').on('click', e => {
          e.stopImmediatePropagation()
        })
        $keepOpen.find('input').off('click').on('click', e => {
          const $this = $(e.currentTarget)

          this.toggleColumn($this.val(), $this.prop('checked'), false)
          this.trigger('column-switch', $this.data('field'), $this.prop('checked'))
        })
      }

      if (this.options.search) {
        html = []
        html.push(
          Utils.sprintf('<div class="%s-%s search">', bootstrap.classes.pull, this.options.searchAlign),
          Utils.sprintf(`<input class="form-control${Utils.sprintf(' input-%s', this.options.iconSize)}" type="text" placeholder="%s">`,
            this.options.formatSearch()),
          '</div>')

        this.$toolbar.append(html.join(''))
        $search = this.$toolbar.find('.search input')
        $search.off('keyup drop blur').on('keyup drop blur', event => {
          if (this.options.searchOnEnterKey && event.keyCode !== 13) {
            return
          }

          if ([37, 38, 39, 40].includes(event.keyCode)) {
            return
          }

          clearTimeout(timeoutId) // doesn't matter if it's 0
          timeoutId = setTimeout(() => {
            this.onSearch(event)
          }, this.options.searchTimeOut)
        })

        if (Utils.isIEBrowser()) {
          $search.off('mouseup').on('mouseup', event => {
            clearTimeout(timeoutId) // doesn't matter if it's 0
            timeoutId = setTimeout(() => {
              this.onSearch(event)
            }, this.options.searchTimeOut)
          })
        }
      }
    }

    onSearch ({currentTarget, firedByInitSearchText}) {
      const text = $.trim($(currentTarget).val())

      // trim search input
      if (this.options.trimOnSearch && $(currentTarget).val() !== text) {
        $(currentTarget).val(text)
      }

      if (text === this.searchText) {
        return
      }
      this.searchText = text
      this.options.searchText = text

      if (!firedByInitSearchText) {
        this.options.pageNumber = 1
      }
      this.initSearch()
      if (firedByInitSearchText) {
        if (this.options.sidePagination === 'client') {
          this.updatePagination()
        }
      } else {
        this.updatePagination()
      }
      this.trigger('search', text)
    }

    initSearch () {
      if (this.options.sidePagination !== 'server') {
        if (this.options.customSearch !== $.noop) {
          window[this.options.customSearch].apply(this, [this.searchText])
          return
        }

        const s = this.searchText && (this.options.escape
          ? Utils.escapeHTML(this.searchText) : this.searchText).toLowerCase()
        const f = $.isEmptyObject(this.filterColumns) ? null : this.filterColumns

        // Check filter
        this.data = f ? this.options.data.filter((item, i) => {
          for (const key in f) {
            if (
              (Array.isArray(f[key]) &&
              !f[key].includes(item[key])) ||
              (!Array.isArray(f[key]) &&
              item[key] !== f[key])
            ) {
              return false
            }
          }
          return true
        }) : this.options.data

        this.data = s ? this.data.filter((item, i) => {
          for (let j = 0; j < this.header.fields.length; j++) {
            if (!this.header.searchables[j]) {
              continue
            }

            const key = $.isNumeric(this.header.fields[j]) ? parseInt(this.header.fields[j], 10) : this.header.fields[j]
            const column = this.columns[this.fieldsColumnsIndex[key]]
            let value

            if (typeof key === 'string') {
              value = item
              const props = key.split('.')
              for (let i = 0; i < props.length; i++) {
                if (value[props[i]] != null) {
                  value = value[props[i]]
                }
              }

              // Fix #142: respect searchForamtter boolean
              if (column && column.searchFormatter) {
                value = Utils.calculateObjectValue(column,
                  this.header.formatters[j], [value, item, i], value)
              }
            } else {
              value = item[key]
            }

            if (typeof value === 'string' || typeof value === 'number') {
              if (this.options.strictSearch) {
                if ((`${value}`).toLowerCase() === s) {
                  return true
                }
              } else {
                if ((`${value}`).toLowerCase().includes(s)) {
                  return true
                }
              }
            }
          }
          return false
        }) : this.data
      }
    }

    initPagination () {
      if (!this.options.pagination) {
        this.$pagination.hide()
        return
      } else {
        this.$pagination.show()
      }

      const html = []
      let $allSelected = false
      let i
      let from
      let to
      let $pageList
      let $pre
      let $next
      let $number
      const data = this.getData()
      let pageList = this.options.pageList

      if (this.options.sidePagination !== 'server') {
        this.options.totalRows = data.length
      }

      this.totalPages = 0
      if (this.options.totalRows) {
        if (this.options.pageSize === this.options.formatAllRows()) {
          this.options.pageSize = this.options.totalRows
          $allSelected = true
        } else if (this.options.pageSize === this.options.totalRows) {
          // Fix #667 Table with pagination,
          // multiple pages and a search this matches to one page throws exception
          const pageLst = typeof this.options.pageList === 'string'
            ? this.options.pageList.replace('[', '').replace(']', '')
              .replace(/ /g, '').toLowerCase().split(',') : this.options.pageList
          if (pageLst.includes(this.options.formatAllRows().toLowerCase())) {
            $allSelected = true
          }
        }

        this.totalPages = ~~((this.options.totalRows - 1) / this.options.pageSize) + 1

        this.options.totalPages = this.totalPages
      }
      if (this.totalPages > 0 && this.options.pageNumber > this.totalPages) {
        this.options.pageNumber = this.totalPages
      }

      this.pageFrom = (this.options.pageNumber - 1) * this.options.pageSize + 1
      this.pageTo = this.options.pageNumber * this.options.pageSize
      if (this.pageTo > this.options.totalRows) {
        this.pageTo = this.options.totalRows
      }

      html.push(
        Utils.sprintf('<div class="%s-%s pagination-detail">', bootstrap.classes.pull, this.options.paginationDetailHAlign),
        '<span class="pagination-info">',
        this.options.onlyInfoPagination ? this.options.formatDetailPagination(this.options.totalRows)
          : this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows),
        '</span>')

      if (!this.options.onlyInfoPagination) {
        html.push('<span class="page-list">')

        const pageNumber = [
          Utils.sprintf('<span class="btn-group %s">',
            this.options.paginationVAlign === 'top' || this.options.paginationVAlign === 'both'
              ? 'dropdown' : 'dropup'),
          `<button type="button" class="btn${Utils.sprintf(' btn-%s', this.options.buttonsClass)}${Utils.sprintf(' btn-%s', this.options.iconSize)} dropdown-toggle" data-toggle="dropdown">`,
          '<span class="page-size">',
          $allSelected ? this.options.formatAllRows() : this.options.pageSize,
          '</span>',
          ' <span class="caret"></span>',
          '</button>',
          bootstrap.html.pageDropdown[0]
        ]

        if (typeof this.options.pageList === 'string') {
          const list = this.options.pageList.replace('[', '').replace(']', '')
            .replace(/ /g, '').split(',')

          pageList = []
          for (let value of list) {
            pageList.push(
              (value.toUpperCase() === this.options.formatAllRows().toUpperCase() ||
              value.toUpperCase() === 'UNLIMITED')
                ? this.options.formatAllRows() : +value)
          }
        }

        pageList.forEach((page, i) => {
          if (!this.options.smartDisplay || i === 0 || pageList[i - 1] < this.options.totalRows) {
            let active
            if ($allSelected) {
              active = page === this.options.formatAllRows() ? 'active' : ''
            } else {
              active = page === this.options.pageSize ? 'active' : ''
            }
            pageNumber.push(Utils.sprintf(bootstrap.html.pageDropdownItem, active, page))
          }
        })
        pageNumber.push(`${bootstrap.html.pageDropdown[1]}</span>`)

        html.push(this.options.formatRecordsPerPage(pageNumber.join('')))
        html.push('</span>')

        html.push('</div>',
          Utils.sprintf('<div class="%s-%s pagination">', bootstrap.classes.pull, this.options.paginationHAlign),
          `<ul class="pagination${Utils.sprintf(' pagination-%s', this.options.iconSize)}">`,
          Utils.sprintf('<li class="page-item page-pre"><a class="page-link" href="#">%s</a></li>',
            this.options.paginationPreText))

        if (this.totalPages < 5) {
          from = 1
          to = this.totalPages
        } else {
          from = this.options.pageNumber - 2
          to = from + 4
          if (from < 1) {
            from = 1
            to = 5
          }
          if (to > this.totalPages) {
            to = this.totalPages
            from = to - 4
          }
        }

        if (this.totalPages >= 6) {
          if (this.options.pageNumber >= 3) {
            html.push(
              Utils.sprintf('<li class="page-item page-first%s">',
                this.options.pageNumber === 1 ? ' active' : ''),
              '<a class="page-link" href="#">', 1, '</a>',
              '</li>')

            from++
          }

          if (this.options.pageNumber >= 4) {
            if (this.options.pageNumber === 4 || this.totalPages === 6 || this.totalPages === 7) {
              from--
            } else {
              html.push('<li class="page-item page-first-separator disabled">',
                '<a class="page-link" href="#">...</a>',
                '</li>')
            }

            to--
          }
        }

        if (this.totalPages >= 7) {
          if (this.options.pageNumber >= (this.totalPages - 2)) {
            from--
          }
        }

        if (this.totalPages === 6) {
          if (this.options.pageNumber >= (this.totalPages - 2)) {
            to++
          }
        } else if (this.totalPages >= 7) {
          if (this.totalPages === 7 || this.options.pageNumber >= (this.totalPages - 3)) {
            to++
          }
        }

        for (i = from; i <= to; i++) {
          html.push(Utils.sprintf('<li class="page-item%s">',
            i === this.options.pageNumber ? ' active' : ''),
          '<a class="page-link" href="#">', i, '</a>',
          '</li>')
        }

        if (this.totalPages >= 8) {
          if (this.options.pageNumber <= (this.totalPages - 4)) {
            html.push('<li class="page-item page-last-separator disabled">',
              '<a class="page-link" href="#">...</a>',
              '</li>')
          }
        }

        if (this.totalPages >= 6) {
          if (this.options.pageNumber <= (this.totalPages - 3)) {
            html.push(Utils.sprintf('<li class="page-item page-last%s">',
              this.totalPages === this.options.pageNumber ? ' active' : ''),
            '<a class="page-link" href="#">', this.totalPages, '</a>',
            '</li>')
          }
        }

        html.push(
          Utils.sprintf('<li class="page-item page-next"><a class="page-link" href="#">%s</a></li>',
            this.options.paginationNextText),
          '</ul>',
          '</div>')
      }
      this.$pagination.html(html.join(''))

      if (!this.options.onlyInfoPagination) {
        $pageList = this.$pagination.find('.page-list a')
        $pre = this.$pagination.find('.page-pre')
        $next = this.$pagination.find('.page-next')
        $number = this.$pagination.find('.page-item').not('.page-next, .page-pre')

        if (this.options.smartDisplay) {
          if (this.totalPages <= 1) {
            this.$pagination.find('div.pagination').hide()
          }
          if (pageList.length < 2 || this.options.totalRows <= pageList[0]) {
            this.$pagination.find('span.page-list').hide()
          }

          // when data is empty, hide the pagination
          this.$pagination[this.getData().length ? 'show' : 'hide']()
        }

        if (!this.options.paginationLoop) {
          if (this.options.pageNumber === 1) {
            $pre.addClass('disabled')
          }
          if (this.options.pageNumber === this.totalPages) {
            $next.addClass('disabled')
          }
        }

        if ($allSelected) {
          this.options.pageSize = this.options.formatAllRows()
        }
        // removed the events for last and first, onPageNumber executeds the same logic
        $pageList.off('click').on('click', $.proxy(this.onPageListChange, this))
        $pre.off('click').on('click', $.proxy(this.onPagePre, this))
        $next.off('click').on('click', $.proxy(this.onPageNext, this))
        $number.off('click').on('click', $.proxy(this.onPageNumber, this))
      }
    }

    updatePagination (event) {
      // Fix #171: IE disabled button can be clicked bug.
      if (event && $(event.currentTarget).hasClass('disabled')) {
        return
      }

      if (!this.options.maintainSelected) {
        this.resetRows()
      }

      this.initPagination()
      if (this.options.sidePagination === 'server') {
        this.initServer()
      } else {
        this.initBody()
      }

      this.trigger('page-change', this.options.pageNumber, this.options.pageSize)
    }

    onPageListChange (event) {
      event.preventDefault()
      const $this = $(event.currentTarget)

      $this.parent().addClass('active').siblings().removeClass('active')
      this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase()
        ? this.options.formatAllRows() : +$this.text()
      this.$toolbar.find('.page-size').text(this.options.pageSize)

      this.updatePagination(event)
      return false
    }

    onPagePre (event) {
      event.preventDefault()
      if ((this.options.pageNumber - 1) === 0) {
        this.options.pageNumber = this.options.totalPages
      } else {
        this.options.pageNumber--
      }
      this.updatePagination(event)
      return false
    }

    onPageNext (event) {
      event.preventDefault()
      if ((this.options.pageNumber + 1) > this.options.totalPages) {
        this.options.pageNumber = 1
      } else {
        this.options.pageNumber++
      }
      this.updatePagination(event)
      return false
    }

    onPageNumber (event) {
      event.preventDefault()
      if (this.options.pageNumber === +$(event.currentTarget).text()) {
        return
      }
      this.options.pageNumber = +$(event.currentTarget).text()
      this.updatePagination(event)
      return false
    }

    initRow (item, i, data) {
      let key
      const html = []
      let style = {}
      const csses = []
      let data_ = ''
      let attributes = {}
      const htmlAttributes = []

      if (this.hiddenRows.includes(item)) {
        return
      }

      style = Utils.calculateObjectValue(this.options, this.options.rowStyle, [item, i], style)

      if (style && style.css) {
        for (key in style.css) {
          csses.push(`${key}: ${style.css[key]}`)
        }
      }

      attributes = Utils.calculateObjectValue(this.options,
        this.options.rowAttributes, [item, i], attributes)

      if (attributes) {
        for (key in attributes) {
          htmlAttributes.push(`${key}="${Utils.escapeHTML(attributes[key])}"`)
        }
      }

      if (item._data && !$.isEmptyObject(item._data)) {
        item._data.forEach((v, k) => {
          // ignore data-index
          if (k === 'index') {
            return
          }
          data_ += ` data-${k}="${v}"`
        })
      }

      html.push('<tr',
        Utils.sprintf(' %s', htmlAttributes.length ? htmlAttributes.join(' ') : undefined),
        Utils.sprintf(' id="%s"', Array.isArray(item) ? undefined : item._id),
        Utils.sprintf(' class="%s"', style.classes || (Array.isArray(item) ? undefined : item._class)),
        ` data-index="${i}"`,
        Utils.sprintf(' data-uniqueid="%s"', item[this.options.uniqueId]),
        Utils.sprintf('%s', data_),
        '>'
      )

      if (this.options.cardView) {
        html.push(`<td colspan="${this.header.fields.length}"><div class="card-views">`)
      }

      if (!this.options.cardView && this.options.detailView) {
        html.push('<td>')

        if (Utils.calculateObjectValue(null, this.options.detailFilter, [i, item])) {
          html.push(`
            <a class="detail-icon" href="#">
            <i class="${this.options.iconsPrefix} ${this.options.icons.detailOpen}"></i>
            </a>
          `)
        }

        html.push('</td>')
      }

      this.header.fields.forEach((field, j) => {
        let text = ''
        let value_ = Utils.getItemField(item, field, this.options.escape)
        let value = ''
        let type = ''
        let cellStyle = {}
        let id_ = ''
        let class_ = this.header.classes[j]
        let style_ = ''
        let data_ = ''
        let rowspan_ = ''
        let colspan_ = ''
        let title_ = ''
        const column = this.columns[j]

        if (this.fromHtml && typeof value_ === 'undefined') {
          if ((!column.checkbox) && (!column.radio)) {
            return
          }
        }

        if (!column.visible) {
          return
        }

        if (this.options.cardView && (!column.cardVisible)) {
          return
        }

        if (column.escape) {
          value_ = Utils.escapeHTML(value_)
        }

        if (csses.concat([this.header.styles[j]]).length) {
          style_ = ` style="${csses.concat([this.header.styles[j]]).join('; ')}"`
        }
        // handle td's id and class
        if (item[`_${field}_id`]) {
          id_ = Utils.sprintf(' id="%s"', item[`_${field}_id`])
        }
        if (item[`_${field}_class`]) {
          class_ = Utils.sprintf(' class="%s"', item[`_${field}_class`])
        }
        if (item[`_${field}_rowspan`]) {
          rowspan_ = Utils.sprintf(' rowspan="%s"', item[`_${field}_rowspan`])
        }
        if (item[`_${field}_colspan`]) {
          colspan_ = Utils.sprintf(' colspan="%s"', item[`_${field}_colspan`])
        }
        if (item[`_${field}_title`]) {
          title_ = Utils.sprintf(' title="%s"', item[`_${field}_title`])
        }
        cellStyle = Utils.calculateObjectValue(this.header,
          this.header.cellStyles[j], [value_, item, i, field], cellStyle)
        if (cellStyle.classes) {
          class_ = ` class="${cellStyle.classes}"`
        }
        if (cellStyle.css) {
          const csses_ = []
          for (const key in cellStyle.css) {
            csses_.push(`${key}: ${cellStyle.css[key]}`)
          }
          style_ = ` style="${csses_.concat(this.header.styles[j]).join('; ')}"`
        }

        value = Utils.calculateObjectValue(column,
          this.header.formatters[j], [value_, item, i, field], value_)

        if (item[`_${field}_data`] && !$.isEmptyObject(item[`_${field}_data`])) {
          item[`_${field}_data`].forEach((v, k) => {
            // ignore data-index
            if (k === 'index') {
              return
            }
            data_ += ` data-${k}="${v}"`
          })
        }

        if (column.checkbox || column.radio) {
          type = column.checkbox ? 'checkbox' : type
          type = column.radio ? 'radio' : type

          const c = column['class'] || ''
          const isChecked = value === true || (value_ || value && value.checked)
          const isDisabled = !column.checkboxEnabled || (value && value.disabled)

          text = [
            this.options.cardView
              ? `<div class="card-view ${c}">`
              : `<td class="bs-checkbox ${c}">`,
            `<input
              data-index="${i}"
              name="${this.options.selectItemName}"
              type="${type}"
              ${Utils.sprintf('value="%s"', item[this.options.idField])}
              ${Utils.sprintf('checked="%s"', isChecked ? 'checked' : undefined)}
              ${Utils.sprintf('disabled="%s"', isDisabled ? 'disabled' : undefined)} />`,
            this.header.formatters[j] && typeof value === 'string' ? value : '',
            this.options.cardView ? '</div>' : '</td>'
          ].join('')

          item[this.header.stateField] = value === true || (!!value_ || (value && value.checked))
        } else {
          value = typeof value === 'undefined' || value === null
            ? this.options.undefinedText : value

          if (this.options.cardView) {
            const cardTitle = this.options.showHeader
              ? `<span class="title"${style}>${Utils.getFieldTitle(this.columns, field)}</span>` : ''

            text = `<div class="card-view">${cardTitle}<span class="value">${value}</span></div>`

            if (this.options.smartDisplay && value === '') {
              text = '<div class="card-view"></div>'
            }
          } else {
            text = `<td${id_}${class_}${style_}${data_}${rowspan_}${colspan_}${title_}>${value}</td>`
          }
        }

        html.push(text)
      })

      if (this.options.cardView) {
        html.push('</div></td>')
      }
      html.push('</tr>')

      return html.join('')
    }

    initBody (fixedScroll) {
      const data = this.getData()

      this.trigger('pre-body', data)

      this.$body = this.$el.find('>tbody')
      if (!this.$body.length) {
        this.$body = $('<tbody></tbody>').appendTo(this.$el)
      }

      // Fix #389 Bootstrap-table-flatJSON is not working
      if (!this.options.pagination || this.options.sidePagination === 'server') {
        this.pageFrom = 1
        this.pageTo = data.length
      }

      const html = []
      for (let i = this.pageFrom - 1; i < this.pageTo; i++) {
        html.push(this.initRow(data[i], i, data))
      }

      // show no records
      if (!html.length) {
        this.$body.html(`<tr class="no-records-found">${Utils.sprintf('<td colspan="%s">%s</td>',
          this.$header.find('th').length,
          this.options.formatNoMatches())}</tr>`)
      }

      this.$body.html(html.join(''))

      if (!fixedScroll) {
        this.scrollTo(0)
      }

      // click to select by column
      this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', (e) => {
        const $td = $(e.currentTarget)
        const $tr = $td.parent()
        const item = this.data[$tr.data('index')]
        const index = $td[0].cellIndex
        const fields = this.getVisibleFields()
        const field = fields[this.options.detailView && !this.options.cardView ? index - 1 : index]
        const column = this.columns[this.fieldsColumnsIndex[field]]
        const value = Utils.getItemField(item, field, this.options.escape)

        if ($td.find('.detail-icon').length) {
          return
        }

        this.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td)
        this.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field)

        // if click to select - then trigger the checkbox/radio click
        if (
          e.type === 'click' &&
          this.options.clickToSelect &&
          column.clickToSelect &&
          !this.options.ignoreClickToSelectOn(e.target)
        ) {
          const $selectItem = $tr.find(Utils.sprintf('[name="%s"]', this.options.selectItemName))
          if ($selectItem.length) {
            $selectItem[0].click() // #144: .trigger('click') bug
          }
        }
      })

      this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click', e => {
        e.preventDefault()

        const $this = $(e.currentTarget) // Fix #980 Detail view, when searching, returns wrong row
        const $tr = $this.parent().parent()
        const index = $tr.data('index')
        const row = data[index]

        // remove and update
        if ($tr.next().is('tr.detail-view')) {
          $this.find('i').attr('class', Utils.sprintf('%s %s', this.options.iconsPrefix, this.options.icons.detailOpen))
          this.trigger('collapse-row', index, row, $tr.next())
          $tr.next().remove()
        } else {
          $this.find('i').attr('class', Utils.sprintf('%s %s', this.options.iconsPrefix, this.options.icons.detailClose))
          $tr.after(Utils.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.find('td').length))
          const $element = $tr.next().find('td')
          const content = Utils.calculateObjectValue(this.options, this.options.detailFormatter, [index, row, $element], '')
          if ($element.length === 1) {
            $element.append(content)
          }
          this.trigger('expand-row', index, row, $element)
        }
        this.resetView()
        return false
      })

      this.$selectItem = this.$body.find(Utils.sprintf('[name="%s"]', this.options.selectItemName))
      this.$selectItem.off('click').on('click', e => {
        e.stopImmediatePropagation()

        const $this = $(e.currentTarget)
        this.check_($this.prop('checked'), $this.data('index'))
      })

      this.header.events.forEach((events, i) => {
        if (!events) {
          return
        }
        // fix bug, if events is defined with namespace
        if (typeof events === 'string') {
          events = Utils.calculateObjectValue(null, events)
        }

        const field = this.header.fields[i]
        let fieldIndex = this.getVisibleFields().indexOf(field)

        if (fieldIndex === -1) {
          return
        }

        if (this.options.detailView && !this.options.cardView) {
          fieldIndex += 1
        }

        for (const key in events) {
          this.$body.find('>tr:not(.no-records-found)').each((i, tr) => {
            const $tr = $(tr)
            const $td = $tr.find(this.options.cardView ? '.card-view' : 'td').eq(fieldIndex)
            const index = key.indexOf(' ')
            const name = key.substring(0, index)
            const el = key.substring(index + 1)
            const func = events[key]

            $td.find(el).off(name).on(name, e => {
              const index = $tr.data('index')
              const row = this.data[index]
              const value = row[field]

              func.apply(this, [e, value, row, index])
            })
          })
        }
      })

      this.updateSelected()
      this.resetView()

      this.trigger('post-body', data)
    }

    initServer (silent, query, url) {
      let data = {}
      const index = this.header.fields.indexOf(this.options.sortName)

      let params = {
        searchText: this.searchText,
        sortName: this.options.sortName,
        sortOrder: this.options.sortOrder
      }

      let request

      if (this.header.sortNames[index]) {
        params.sortName = this.header.sortNames[index]
      }

      if (this.options.pagination && this.options.sidePagination === 'server') {
        params.pageSize = this.options.pageSize === this.options.formatAllRows()
          ? this.options.totalRows : this.options.pageSize
        params.pageNumber = this.options.pageNumber
      }

      if (!(url || this.options.url) && !this.options.ajax) {
        return
      }

      if (this.options.queryParamsType === 'limit') {
        params = {
          search: params.searchText,
          sort: params.sortName,
          order: params.sortOrder
        }

        if (this.options.pagination && this.options.sidePagination === 'server') {
          params.offset = this.options.pageSize === this.options.formatAllRows()
            ? 0 : this.options.pageSize * (this.options.pageNumber - 1)
          params.limit = this.options.pageSize === this.options.formatAllRows()
            ? this.options.totalRows : this.options.pageSize
          if (params.limit === 0) {
            delete params.limit
          }
        }
      }

      if (!($.isEmptyObject(this.filterColumnsPartial))) {
        params.filter = JSON.stringify(this.filterColumnsPartial, null)
      }

      data = Utils.calculateObjectValue(this.options, this.options.queryParams, [params], data)

      $.extend(data, query || {})

      // false to stop request
      if (data === false) {
        return
      }

      if (!silent) {
        this.$tableLoading.show()
      }
      request = $.extend({}, Utils.calculateObjectValue(null, this.options.ajaxOptions), {
        type: this.options.method,
        url: url || this.options.url,
        data: this.options.contentType === 'application/json' && this.options.method === 'post'
          ? JSON.stringify(data) : data,
        cache: this.options.cache,
        contentType: this.options.contentType,
        dataType: this.options.dataType,
        success: res => {
          res = Utils.calculateObjectValue(this.options, this.options.responseHandler, [res], res)

          this.load(res)
          this.trigger('load-success', res)
          if (!silent) this.$tableLoading.hide()
        },
        error: res => {
          let data = []
          if (this.options.sidePagination === 'server') {
            data = {}
            data[this.options.totalField] = 0
            data[this.options.dataField] = []
          }
          this.load(data)
          this.trigger('load-error', res.status, res)
          if (!silent) this.$tableLoading.hide()
        }
      })

      if (this.options.ajax) {
        Utils.calculateObjectValue(this, this.options.ajax, [request], null)
      } else {
        if (this._xhr && this._xhr.readyState !== 4) {
          this._xhr.abort()
        }
        this._xhr = $.ajax(request)
      }
    }

    initSearchText () {
      if (this.options.search) {
        this.searchText = ''
        if (this.options.searchText !== '') {
          const $search = this.$toolbar.find('.search input')
          $search.val(this.options.searchText)
          this.onSearch({currentTarget: $search, firedByInitSearchText: true})
        }
      }
    }

    getCaret () {
      this.$header.find('th').each((i, th) => {
        $(th).find('.sortable').removeClass('desc asc')
          .addClass($(th).data('field') === this.options.sortName
            ? this.options.sortOrder : 'both')
      })
    }

    updateSelected () {
      const checkAll = this.$selectItem.filter(':enabled').length &&
        this.$selectItem.filter(':enabled').length ===
        this.$selectItem.filter(':enabled').filter(':checked').length

      this.$selectAll.add(this.$selectAll_).prop('checked', checkAll)

      this.$selectItem.each((i, el) => {
        $(el).closest('tr')[$(el).prop('checked') ? 'addClass' : 'removeClass']('selected')
      })
    }

    updateRows () {
      this.$selectItem.each((i, el) => {
        this.data[$(el).data('index')][this.header.stateField] = $(el).prop('checked')
      })
    }

    resetRows () {
      for (let row of this.data) {
        this.$selectAll.prop('checked', false)
        this.$selectItem.prop('checked', false)
        if (this.header.stateField) {
          row[this.header.stateField] = false
        }
      }
      this.initHiddenRows()
    }

    trigger (name, ...args) {
      name += '.bs.table'
      this.options[BootstrapTable.EVENTS[name]].apply(this.options, args)
      this.$el.trigger($.Event(name), args)

      this.options.onAll(name, args)
      this.$el.trigger($.Event('all.bs.table'), [name, args])
    }

    resetHeader () {
      // fix #61: the hidden table reset header bug.
      // fix bug: get $el.css('width') error sometime (height = 500)
      clearTimeout(this.timeoutId_)
      this.timeoutId_ = setTimeout($.proxy(this.fitHeader, this), this.$el.is(':hidden') ? 100 : 0)
    }

    fitHeader () {
      let fixedBody
      let scrollWidth
      let focused
      let focusedTemp

      if (this.$el.is(':hidden')) {
        this.timeoutId_ = setTimeout($.proxy(this.fitHeader, this), 100)
        return
      }
      fixedBody = this.$tableBody.get(0)

      scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth &&
      fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight()
        ? Utils.getScrollBarWidth() : 0

      this.$el.css('margin-top', -this.$header.outerHeight())

      focused = $(':focus')
      if (focused.length > 0) {
        const $th = focused.parents('th')
        if ($th.length > 0) {
          const dataField = $th.attr('data-field')
          if (dataField !== undefined) {
            const $headerTh = this.$header.find(`[data-field='${dataField}']`)
            if ($headerTh.length > 0) {
              $headerTh.find(':input').addClass('focus-temp')
            }
          }
        }
      }

      this.$header_ = this.$header.clone(true, true)
      this.$selectAll_ = this.$header_.find('[name="btSelectAll"]')
      this.$tableHeader.css({
        'margin-right': scrollWidth
      }).find('table').css('width', this.$el.outerWidth())
        .html('').attr('class', this.$el.attr('class'))
        .append(this.$header_)

      focusedTemp = $('.focus-temp:visible:eq(0)')
      if (focusedTemp.length > 0) {
        focusedTemp.focus()
        this.$header.find('.focus-temp').removeClass('focus-temp')
      }

      // fix bug: $.data() is not working as expected after $.append()
      this.$header.find('th[data-field]').each((i, el) => {
        this.$header_.find(Utils.sprintf('th[data-field="%s"]', $(el).data('field'))).data($(el).data())
      })

      const visibleFields = this.getVisibleFields()
      const $ths = this.$header_.find('th')

      this.$body.find('>tr:first-child:not(.no-records-found) > *').each((i, el) => {
        const $this = $(el)
        let index = i

        if (this.options.detailView && !this.options.cardView) {
          if (i === 0) {
            this.$header_.find('th.detail').find('.fht-cell').width($this.innerWidth())
          }
          index = i - 1
        }

        if (index === -1) {
          return
        }

        let $th = this.$header_.find(Utils.sprintf('th[data-field="%s"]', visibleFields[index]))
        if ($th.length > 1) {
          $th = $($ths[$this[0].cellIndex])
        }

        const zoomWidth = $th.width() - $th.find('.fht-cell').width()
        $th.find('.fht-cell').width($this.innerWidth() - zoomWidth)
      })

      this.horizontalScroll()
      this.trigger('post-header')
    }

    resetFooter () {
      const data = this.getData()
      const html = []

      if (!this.options.showFooter || this.options.cardView) { // do nothing
        return
      }

      if (!this.options.cardView && this.options.detailView) {
        html.push('<td><div class="th-inner">&nbsp;</div><div class="fht-cell"></div></td>')
      }

      for (let column of this.columns) {
        let key

        let // footer align style
          falign = ''

        let valign = ''
        const csses = []
        let style = {}
        const class_ = Utils.sprintf(' class="%s"', column['class'])

        if (!column.visible) {
          return
        }

        if (this.options.cardView && (!column.cardVisible)) {
          return
        }

        falign = Utils.sprintf('text-align: %s; ', column.falign ? column.falign : column.align)
        valign = Utils.sprintf('vertical-align: %s; ', column.valign)

        style = Utils.calculateObjectValue(null, this.options.footerStyle)

        if (style && style.css) {
          for (key in style.css) {
            csses.push(`${key}: ${style.css[key]}`)
          }
        }

        html.push('<td', class_, Utils.sprintf(' style="%s"', falign + valign + csses.concat().join('; ')), '>')
        html.push('<div class="th-inner">')

        html.push(Utils.calculateObjectValue(column, column.footerFormatter, [data], '&nbsp;') || '&nbsp;')

        html.push('</div>')
        html.push('<div class="fht-cell"></div>')
        html.push('</div>')
        html.push('</td>')
      }

      this.$tableFooter.find('tr').html(html.join(''))
      this.$tableFooter.show()
      clearTimeout(this.timeoutFooter_)
      this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this),
        this.$el.is(':hidden') ? 100 : 0)
    }

    fitFooter () {
      let $footerTd
      let elWidth
      let scrollWidth

      clearTimeout(this.timeoutFooter_)
      if (this.$el.is(':hidden')) {
        this.timeoutFooter_ = setTimeout($.proxy(this.fitFooter, this), 100)
        return
      }

      elWidth = this.$el.css('width')
      scrollWidth = elWidth > this.$tableBody.width() ? Utils.getScrollBarWidth() : 0

      this.$tableFooter.css({
        'margin-right': scrollWidth
      }).find('table').css('width', elWidth)
        .attr('class', this.$el.attr('class'))

      $footerTd = this.$tableFooter.find('td')

      this.$body.find('>tr:first-child:not(.no-records-found) > *').each((i, el) => {
        const $this = $(el)

        $footerTd.eq(i).find('.fht-cell').width($this.innerWidth())
      })

      this.horizontalScroll()
    }

    horizontalScroll () {
      // horizontal scroll event
      // TODO: it's probably better improving the layout than binding to scroll event

      this.trigger('scroll-body')
      this.$tableBody.off('scroll').on('scroll', e => {
        if (this.options.showHeader && this.options.height) {
          this.$tableHeader.scrollLeft($(e.currentTarget).scrollLeft())
        }

        if (this.options.showFooter && !this.options.cardView) {
          this.$tableFooter.scrollLeft($(e.currentTarget).scrollLeft())
        }
      })
    }

    toggleColumn (index, checked, needUpdate) {
      if (index === -1) {
        return
      }
      this.columns[index].visible = checked
      this.initHeader()
      this.initSearch()
      this.initPagination()
      this.initBody()

      if (this.options.showColumns) {
        const $items = this.$toolbar.find('.keep-open input').prop('disabled', false)

        if (needUpdate) {
          $items.filter(Utils.sprintf('[value="%s"]', index)).prop('checked', checked)
        }

        if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
          $items.filter(':checked').prop('disabled', true)
        }
      }
    }

    getVisibleFields () {
      const visibleFields = []

      for (let field of this.header.fields) {
        const column = this.columns[this.fieldsColumnsIndex[field]]

        if (!column.visible) {
          continue
        }
        visibleFields.push(field)
      }
      return visibleFields
    }

    // PUBLIC FUNCTION DEFINITION
    // =======================

    resetView (params) {
      let padding = 0

      if (params && params.height) {
        this.options.height = params.height
      }

      this.$selectAll.prop('checked', this.$selectItem.length > 0 &&
        this.$selectItem.length === this.$selectItem.filter(':checked').length)

      if (this.options.height) {
        const toolbarHeight = this.$toolbar.outerHeight(true)
        const paginationHeight = this.$pagination.outerHeight(true)
        const height = this.options.height - toolbarHeight - paginationHeight

        this.$tableContainer.css('height', `${height}px`)
      }

      if (this.options.cardView) {
        // remove the element css
        this.$el.css('margin-top', '0')
        this.$tableContainer.css('padding-bottom', '0')
        this.$tableFooter.hide()
        return
      }

      if (this.options.showHeader && this.options.height) {
        this.$tableHeader.show()
        this.resetHeader()
        padding += this.$header.outerHeight()
      } else {
        this.$tableHeader.hide()
        this.trigger('post-header')
      }

      if (this.options.showFooter) {
        this.resetFooter()
        if (this.options.height) {
          padding += this.$tableFooter.outerHeight() + 1
        }
      }

      // Assign the correct sortable arrow
      this.getCaret()
      this.$tableContainer.css('padding-bottom', `${padding}px`)
      this.trigger('reset-view')
    }

    getData (useCurrentPage) {
      let data = this.options.data
      if (this.searchText || this.options.sortName || !$.isEmptyObject(this.filterColumns) || !$.isEmptyObject(this.filterColumnsPartial)) {
        data = this.data
      }

      if (useCurrentPage) {
        return data.slice(this.pageFrom - 1, this.pageTo)
      }

      return data
    }

    load (data) {
      let fixedScroll = false

      // #431: support pagination
      if (this.options.pagination && this.options.sidePagination === 'server') {
        this.options.totalRows = data[this.options.totalField]
        fixedScroll = data.fixedScroll
        data = data[this.options.dataField]
      } else if (!Array.isArray(data)) { // support fixedScroll
        fixedScroll = data.fixedScroll
        data = data.data
      }

      this.initData(data)
      this.initSearch()
      this.initPagination()
      this.initBody(fixedScroll)
    }

    append (data) {
      this.initData(data, 'append')
      this.initSearch()
      this.initPagination()
      this.initSort()
      this.initBody(true)
    }

    prepend (data) {
      this.initData(data, 'prepend')
      this.initSearch()
      this.initPagination()
      this.initSort()
      this.initBody(true)
    }

    remove (params) {
      const len = this.options.data.length
      let i
      let row

      if (!params.hasOwnProperty('field') || !params.hasOwnProperty('values')) {
        return
      }

      for (i = len - 1; i >= 0; i--) {
        row = this.options.data[i]

        if (!row.hasOwnProperty(params.field)) {
          continue
        }
        if (params.values.includes(row[params.field])) {
          this.options.data.splice(i, 1)
          if (this.options.sidePagination === 'server') {
            this.options.totalRows -= 1
          }
        }
      }

      if (len === this.options.data.length) {
        return
      }

      this.initSearch()
      this.initPagination()
      this.initSort()
      this.initBody(true)
    }

    removeAll () {
      if (this.options.data.length > 0) {
        this.options.data.splice(0, this.options.data.length)
        this.initSearch()
        this.initPagination()
        this.initBody(true)
      }
    }

    getRowByUniqueId (id) {
      const uniqueId = this.options.uniqueId
      const len = this.options.data.length
      let dataRow = null
      let i
      let row
      let rowUniqueId

      for (i = len - 1; i >= 0; i--) {
        row = this.options.data[i]

        if (row.hasOwnProperty(uniqueId)) { // uniqueId is a column
          rowUniqueId = row[uniqueId]
        } else if (row._data.hasOwnProperty(uniqueId)) { // uniqueId is a row data property
          rowUniqueId = row._data[uniqueId]
        } else {
          continue
        }

        if (typeof rowUniqueId === 'string') {
          id = id.toString()
        } else if (typeof rowUniqueId === 'number') {
          if ((Number(rowUniqueId) === rowUniqueId) && (rowUniqueId % 1 === 0)) {
            id = parseInt(id)
          } else if ((rowUniqueId === Number(rowUniqueId)) && (rowUniqueId !== 0)) {
            id = parseFloat(id)
          }
        }

        if (rowUniqueId === id) {
          dataRow = row
          break
        }
      }

      return dataRow
    }

    removeByUniqueId (id) {
      const len = this.options.data.length
      const row = this.getRowByUniqueId(id)

      if (row) {
        this.options.data.splice(this.options.data.indexOf(row), 1)
      }

      if (len === this.options.data.length) {
        return
      }

      this.initSearch()
      this.initPagination()
      this.initBody(true)
    }

    updateByUniqueId (params) {
      const allParams = Array.isArray(params) ? params : [ params ]

      for (let params of allParams) {
        let rowId

        if (!params.hasOwnProperty('id') || !params.hasOwnProperty('row')) {
          continue
        }

        rowId = this.options.data.indexOf(this.getRowByUniqueId(params.id))

        if (rowId === -1) {
          continue
        }
        $.extend(this.options.data[rowId], params.row)
      }

      this.initSearch()
      this.initPagination()
      this.initSort()
      this.initBody(true)
    }

    refreshColumnTitle (params) {
      if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
        return
      }

      this.columns[this.fieldsColumnsIndex[params.field]].title =
        this.options.escape ? Utils.escapeHTML(params.title) : params.title

      if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
        const header = this.options.height !== undefined ? this.$tableHeader : this.$header
        header.find('th[data-field]').each((i, el) => {
          if ($(el).data('field') === params.field) {
            $($(el).find('.th-inner')[0]).text(params.title)
            return false
          }
        })
      }
    }

    insertRow (params) {
      if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
        return
      }
      this.options.data.splice(params.index, 0, params.row)
      this.initSearch()
      this.initPagination()
      this.initSort()
      this.initBody(true)
    }

    updateRow (params) {
      const allParams = Array.isArray(params) ? params : [ params ]

      for (let params of allParams) {
        if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
          continue
        }
        $.extend(this.options.data[params.index], params.row)
      }

      this.initSearch()
      this.initPagination()
      this.initSort()
      this.initBody(true)
    }

    initHiddenRows () {
      this.hiddenRows = []
    }

    showRow (params) {
      this.toggleRow(params, true)
    }

    hideRow (params) {
      this.toggleRow(params, false)
    }

    toggleRow (params, visible) {
      let row
      let index

      if (params.hasOwnProperty('index')) {
        row = this.getData()[params.index]
      } else if (params.hasOwnProperty('uniqueId')) {
        row = this.getRowByUniqueId(params.uniqueId)
      }

      if (!row) {
        return
      }

      index = this.hiddenRows.indexOf(row)

      if (!visible && index === -1) {
        this.hiddenRows.push(row)
      } else if (visible && index > -1) {
        this.hiddenRows.splice(index, 1)
      }
      this.initBody(true)
    }

    getHiddenRows (show) {
      const data = this.getData()
      const rows = []

      for (let row of data) {
        if (this.hiddenRows.includes(row)) {
          rows.push(row)
        }
      }
      this.hiddenRows = rows
      return rows
    }

    mergeCells (options) {
      const row = options.index
      let col = this.getVisibleFields().indexOf(options.field)
      const rowspan = options.rowspan || 1
      const colspan = options.colspan || 1
      let i
      let j
      const $tr = this.$body.find('>tr')
      let $td

      if (this.options.detailView && !this.options.cardView) {
        col += 1
      }

      $td = $tr.eq(row).find('>td').eq(col)

      if (row < 0 || col < 0 || row >= this.data.length) {
        return
      }

      for (i = row; i < row + rowspan; i++) {
        for (j = col; j < col + colspan; j++) {
          $tr.eq(i).find('>td').eq(j).hide()
        }
      }

      $td.attr('rowspan', rowspan).attr('colspan', colspan).show()
    }

    updateCell (params) {
      if (!params.hasOwnProperty('index') ||
        !params.hasOwnProperty('field') ||
        !params.hasOwnProperty('value')) {
        return
      }
      this.data[params.index][params.field] = params.value

      if (params.reinit === false) {
        return
      }
      this.initSort()
      this.initBody(true)
    }

    updateCellById (params) {
      if (!params.hasOwnProperty('id') ||
        !params.hasOwnProperty('field') ||
        !params.hasOwnProperty('value')) {
        return
      }
      const allParams = Array.isArray(params) ? params : [ params ]

      allParams.forEach(({id, field, value}) => {
        let rowId

        rowId = this.options.data.indexOf(this.getRowByUniqueId(id))

        if (rowId === -1) {
          return
        }
        this.data[rowId][field] = value
      })

      if (params.reinit === false) {
        return
      }
      this.initSort()
      this.initBody(true)
    }

    getOptions () {
      // Deep copy
      return $.extend(true, {}, this.options)
    }

    getSelections () {
      // fix #2424: from html with checkbox
      return this.options.data.filter(row =>
        row[this.header.stateField] === true)
    }

    getAllSelections () {
      return this.options.data.filter(row => row[this.header.stateField])
    }

    checkAll () {
      this.checkAll_(true)
    }

    uncheckAll () {
      this.checkAll_(false)
    }

    checkInvert () {
      const $items = this.$selectItem.filter(':enabled')
      let checked = $items.filter(':checked')
      $items.each((i, el) => {
        $(el).prop('checked', !$(el).prop('checked'))
      })
      this.updateRows()
      this.updateSelected()
      this.trigger('uncheck-some', checked)
      checked = this.getSelections()
      this.trigger('check-some', checked)
    }

    checkAll_ (checked) {
      let rows
      if (!checked) {
        rows = this.getSelections()
      }
      this.$selectAll.add(this.$selectAll_).prop('checked', checked)
      this.$selectItem.filter(':enabled').prop('checked', checked)
      this.updateRows()
      if (checked) {
        rows = this.getSelections()
      }
      this.trigger(checked ? 'check-all' : 'uncheck-all', rows)
    }

    check (index) {
      this.check_(true, index)
    }

    uncheck (index) {
      this.check_(false, index)
    }

    check_ (checked, index) {
      const $el = this.$selectItem.filter(`[data-index="${index}"]`)
      const row = this.data[index]

      if ($el.is(':radio') || this.options.singleSelect) {
        for (let r of this.options.data) {
          r[this.header.stateField] = false
        }
        this.$selectItem.filter(':checked').not($this).prop('checked', false)
      }

      row[this.header.stateField] = checked
      $el.prop('checked', checked)
      this.updateSelected()
      this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el)
    }

    checkBy (obj) {
      this.checkBy_(true, obj)
    }

    uncheckBy (obj) {
      this.checkBy_(false, obj)
    }

    checkBy_ (checked, obj) {
      if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
        return
      }

      const rows = []
      this.options.data.forEach((row, i) => {
        if (!row.hasOwnProperty(obj.field)) {
          return false
        }
        if (obj.values.includes(row[obj.field])) {
          const $el = this.$selectItem.filter(':enabled')
            .filter(Utils.sprintf('[data-index="%s"]', i)).prop('checked', checked)
          row[this.header.stateField] = checked
          rows.push(row)
          this.trigger(checked ? 'check' : 'uncheck', row, $el)
        }
      })
      this.updateSelected()
      this.trigger(checked ? 'check-some' : 'uncheck-some', rows)
    }

    destroy () {
      this.$el.insertBefore(this.$container)
      $(this.options.toolbar).insertBefore(this.$el)
      this.$container.next().remove()
      this.$container.remove()
      this.$el.html(this.$el_.html())
        .css('margin-top', '0')
        .attr('class', this.$el_.attr('class') || '') // reset the class
    }

    showLoading () {
      this.$tableLoading.show()
    }

    hideLoading () {
      this.$tableLoading.hide()
    }

    togglePagination () {
      this.options.pagination = !this.options.pagination
      const button = this.$toolbar.find('button[name="paginationSwitch"] i')
      if (this.options.pagination) {
        button.attr('class', `${this.options.iconsPrefix} ${this.options.icons.paginationSwitchDown}`)
      } else {
        button.attr('class', `${this.options.iconsPrefix} ${this.options.icons.paginationSwitchUp}`)
      }
      this.updatePagination()
    }

    toggleFullscreen () {
      this.$el.closest('.bootstrap-table').toggleClass('fullscreen')
    }

    refresh (params) {
      if (params && params.url) {
        this.options.url = params.url
      }
      if (params && params.pageNumber) {
        this.options.pageNumber = params.pageNumber
      }
      if (params && params.pageSize) {
        this.options.pageSize = params.pageSize
      }
      this.initServer(params && params.silent,
        params && params.query, params && params.url)
      this.trigger('refresh', params)
    }

    resetWidth () {
      if (this.options.showHeader && this.options.height) {
        this.fitHeader()
      }
      if (this.options.showFooter && !this.options.cardView) {
        this.fitFooter()
      }
    }

    showColumn (field) {
      this.toggleColumn(this.fieldsColumnsIndex[field], true, true)
    }

    hideColumn (field) {
      this.toggleColumn(this.fieldsColumnsIndex[field], false, true)
    }

    getHiddenColumns () {
      return this.columns.filter(({visible}) => !visible)
    }

    getVisibleColumns () {
      return this.columns.filter(({visible}) => visible)
    }

    toggleAllColumns (visible) {
      for (let column of this.columns) {
        column.visible = visible
      }

      this.initHeader()
      this.initSearch()
      this.initPagination()
      this.initBody()
      if (this.options.showColumns) {
        const $items = this.$toolbar.find('.keep-open input').prop('disabled', false)

        if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
          $items.filter(':checked').prop('disabled', true)
        }
      }
    }

    showAllColumns () {
      this.toggleAllColumns(true)
    }

    hideAllColumns () {
      this.toggleAllColumns(false)
    }

    filterBy (columns) {
      this.filterColumns = $.isEmptyObject(columns) ? {} : columns
      this.options.pageNumber = 1
      this.initSearch()
      this.updatePagination()
    }

    scrollTo (value) {
      if (typeof value === 'string') {
        value = value === 'bottom' ? this.$tableBody[0].scrollHeight : 0
      }
      if (typeof value === 'number') {
        this.$tableBody.scrollTop(value)
      }
      if (typeof value === 'undefined') {
        return this.$tableBody.scrollTop()
      }
    }

    getScrollPosition () {
      return this.scrollTo()
    }

    selectPage (page) {
      if (page > 0 && page <= this.options.totalPages) {
        this.options.pageNumber = page
        this.updatePagination()
      }
    }

    prevPage () {
      if (this.options.pageNumber > 1) {
        this.options.pageNumber--
        this.updatePagination()
      }
    }

    nextPage () {
      if (this.options.pageNumber < this.options.totalPages) {
        this.options.pageNumber++
        this.updatePagination()
      }
    }

    toggleView () {
      this.options.cardView = !this.options.cardView
      this.initHeader()
      // Fixed remove toolbar when click cardView button.
      // this.initToolbar();
      const $icon = this.$toolbar.find('button[name="toggle"] i')
      if (this.options.cardView) {
        $icon.removeClass(this.options.icons.toggleOff)
        $icon.addClass(this.options.icons.toggleOn)
      } else {
        $icon.removeClass(this.options.icons.toggleOn)
        $icon.addClass(this.options.icons.toggleOff)
      }
      this.initBody()
      this.trigger('toggle', this.options.cardView)
    }

    refreshOptions (options) {
      // If the objects are equivalent then avoid the call of destroy / init methods
      if (Utils.compareObjects(this.options, options, true)) {
        return
      }
      this.options = $.extend(this.options, options)
      this.trigger('refresh-options', this.options)
      this.destroy()
      this.init()
    }

    resetSearch (text) {
      const $search = this.$toolbar.find('.search input')
      $search.val(text || '')
      this.onSearch({currentTarget: $search})
    }

    expandRow_ (expand, index) {
      const $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"]', index))
      if ($tr.next().is('tr.detail-view') === (!expand)) {
        $tr.find('> td > .detail-icon').click()
      }
    }

    expandRow (index) {
      this.expandRow_(true, index)
    }

    collapseRow (index) {
      this.expandRow_(false, index)
    }

    expandAllRows (isSubTable) {
      if (isSubTable) {
        const $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"]', 0))
        let detailIcon = null
        let executeInterval = false
        let idInterval = -1

        if (!$tr.next().is('tr.detail-view')) {
          $tr.find('> td > .detail-icon').click()
          executeInterval = true
        } else if (!$tr.next().next().is('tr.detail-view')) {
          $tr.next().find('.detail-icon').click()
          executeInterval = true
        }

        if (executeInterval) {
          try {
            idInterval = setInterval(() => {
              detailIcon = this.$body.find('tr.detail-view').last().find('.detail-icon')
              if (detailIcon.length > 0) {
                detailIcon.click()
              } else {
                clearInterval(idInterval)
              }
            }, 1)
          } catch (ex) {
            clearInterval(idInterval)
          }
        }
      } else {
        const trs = this.$body.children()
        for (let i = 0; i < trs.length; i++) {
          this.expandRow_(true, $(trs[i]).data('index'))
        }
      }
    }

    collapseAllRows (isSubTable) {
      if (isSubTable) {
        this.expandRow_(false, 0)
      } else {
        const trs = this.$body.children()
        for (let i = 0; i < trs.length; i++) {
          this.expandRow_(false, $(trs[i]).data('index'))
        }
      }
    }

    updateFormatText (name, text) {
      if (this.options[Utils.sprintf('format%s', name)]) {
        if (typeof text === 'string') {
          this.options[Utils.sprintf('format%s', name)] = () => text
        } else if (typeof text === 'function') {
          this.options[Utils.sprintf('format%s', name)] = text
        }
      }
      this.initToolbar()
      this.initPagination()
      this.initBody()
    }
  }

  BootstrapTable.DEFAULTS = DEFAULTS
  BootstrapTable.LOCALES = LOCALES
  BootstrapTable.COLUMN_DEFAULTS = COLUMN_DEFAULTS
  BootstrapTable.EVENTS = EVENTS

  // BOOTSTRAP TABLE PLUGIN DEFINITION
  // =======================

  const allowedMethods = [
    'getOptions',
    'getSelections', 'getAllSelections', 'getData',
    'load', 'append', 'prepend', 'remove', 'removeAll',
    'insertRow', 'updateRow', 'updateCell',
    'updateByUniqueId', 'removeByUniqueId',
    'getRowByUniqueId', 'showRow', 'hideRow', 'getHiddenRows',
    'mergeCells', 'refreshColumnTitle',
    'checkAll', 'uncheckAll', 'checkInvert',
    'check', 'uncheck',
    'checkBy', 'uncheckBy',
    'refresh',
    'resetView',
    'resetWidth',
    'destroy',
    'showLoading', 'hideLoading',
    'showColumn', 'hideColumn',
    'getHiddenColumns', 'getVisibleColumns',
    'showAllColumns', 'hideAllColumns',
    'filterBy',
    'scrollTo',
    'getScrollPosition',
    'selectPage', 'prevPage', 'nextPage',
    'togglePagination',
    'toggleView',
    'refreshOptions',
    'resetSearch',
    'expandRow', 'collapseRow',
    'expandAllRows', 'collapseAllRows',
    'updateFormatText', 'updateCellById'
  ]

  $.BootstrapTable = BootstrapTable
  $.fn.bootstrapTable = function (option, ...args) {
    let value

    this.each((i, el) => {
      let data = $(el).data('bootstrap.table')
      const options = $.extend({}, BootstrapTable.DEFAULTS, $(el).data(),
        typeof option === 'object' && option)

      if (typeof option === 'string') {
        if (!allowedMethods.includes(option)) {
          throw new Error('Unknown method: ' + option)
        }

        if (!data) {
          return
        }

        value = data[option].apply(data, args)

        if (option === 'destroy') {
          $(el).removeData('bootstrap.table')
        }
      }

      if (!data) {
        $(el).data('bootstrap.table', (data = new $.BootstrapTable(el, options)))
      }
    })

    return typeof value === 'undefined' ? this : value
  }

  $.fn.bootstrapTable.Constructor = BootstrapTable
  $.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS
  $.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS
  $.fn.bootstrapTable.locales = BootstrapTable.LOCALES
  $.fn.bootstrapTable.methods = allowedMethods
  $.fn.bootstrapTable.utils = Utils

  // BOOTSTRAP TABLE INIT
  // =======================

  $(() => {
    $('[data-toggle="table"]').bootstrapTable()
  })
})(jQuery)
