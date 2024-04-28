/**
 * @author Nadim Basalamah <dimbslmh@gmail.com>
 * @version: v1.1.0
 * @update: ErwannNevou <https://github.com/ErwannNevou>
 */

let isSingleSort = false
const Utils = $.fn.bootstrapTable.utils

Object.assign($.fn.bootstrapTable.defaults.icons, {
  plus: {
    bootstrap3: 'glyphicon-plus',
    bootstrap4: 'fa-plus',
    bootstrap5: 'bi-plus',
    semantic: 'fa-plus',
    materialize: 'plus',
    foundation: 'fa-plus',
    bulma: 'fa-plus',
    'bootstrap-table': 'icon-plus'
  }[$.fn.bootstrapTable.theme] || 'fa-clock',
  minus: {
    bootstrap3: 'glyphicon-minus',
    bootstrap4: 'fa-minus',
    bootstrap5: 'bi-dash',
    semantic: 'fa-minus',
    materialize: 'minus',
    foundation: 'fa-minus',
    bulma: 'fa-minus',
    'bootstrap-table': 'icon-minus'
  }[$.fn.bootstrapTable.theme] || 'fa-clock',
  sort: {
    bootstrap3: 'glyphicon-sort',
    bootstrap4: 'fa-sort',
    bootstrap5: 'bi-arrow-down-up',
    semantic: 'fa-sort',
    materialize: 'sort',
    foundation: 'fa-sort',
    bulma: 'fa-sort',
    'bootstrap-table': 'icon-sort-amount-asc'
  }[$.fn.bootstrapTable.theme] || 'fa-clock'
})

const theme = {
  bootstrap3: {
    html: {
      multipleSortModal: `
        <div class="modal fade" id="%s" tabindex="-1" role="dialog" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="%sLabel">%s</h4>
              </div>
              <div class="modal-body">
                <div class="bootstrap-table">
                  <div class="fixed-table-toolbar">
                    <div class="bars">
                      <button type="button" class="toolbar-btn-add btn btn-default">%s %s</button>
                      <button type="button" class="toolbar-btn-delete btn btn-default" disabled>%s %s</button>
                    </div>
                  </div>
                  <div class="fixed-table-container">
                    <table class="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th><div class="th-inner">%s</div></th>
                          <th><div class="th-inner">%s</div></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">%s</button>
                <button type="button" class="btn btn-primary multi-sort-order-button">%s</button>
              </div>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s form-control">'
    }
  },
  bootstrap4: {
    html: {
      multipleSortModal: `
        <div class="modal fade" id="%s" tabindex="-1" role="dialog" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="%sLabel">%s</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="bootstrap-table">
                  <div class="fixed-table-toolbar">
                    <div class="bars pb-3">
                      <button type="button" class="toolbar-btn-add btn btn-secondary">%s %s</button>
                      <button type="button" class="toolbar-btn-delete btn btn-secondary" disabled>%s %s</button>
                    </div>
                  </div>
                  <div class="fixed-table-container">
                    <table class="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th><div class="th-inner">%s</div></th>
                          <th><div class="th-inner">%s</div></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">%s</button>
                <button type="button" class="btn btn-primary multi-sort-order-button">%s</button>
              </div>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s form-control">'
    }
  },
  bootstrap5: {
    html: {
      multipleSortModal: `
        <div class="modal fade" id="%s" tabindex="-1" role="dialog" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="%sLabel">%s</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="bootstrap-table">
                  <div class="fixed-table-toolbar">
                    <div class="bars pb-3">
                      <button type="button" class="toolbar-btn-add btn btn-secondary">%s %s</button>
                      <button type="button" class="toolbar-btn-delete btn btn-secondary" disabled>%s %s</button>
                    </div>
                  </div>
                  <div class="fixed-table-container">
                    <table class="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th><div class="th-inner">%s</div></th>
                          <th><div class="th-inner">%s</div></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">%s</button>
                <button type="button" class="btn btn-primary multi-sort-order-button">%s</button>
              </div>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" type="button" data-bs-toggle="modal" data-bs-target="#%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s form-control">'
    }
  },
  semantic: {
    html: {
      multipleSortModal: `
        <div class="ui modal tiny" id="%s" aria-labelledby="%sLabel" aria-hidden="true">
          <i class="close icon"></i>
          <div class="header" id="%sLabel">
            %s
          </div>
          <div class="image content">
            <div class="bootstrap-table">
              <div class="fixed-table-toolbar">
                <div class="bars pb-3">
                  <button type="button" class="toolbar-btn-add ui button">%s %s</button>
                  <button type="button" class="toolbar-btn-delete ui button" disabled>%s %s</button>
                </div>
              </div>
              <div class="fixed-table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th><div class="th-inner">%s</div></th>
                      <th><div class="th-inner">%s</div></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="actions">
            <div class="ui button deny">%s</div>
            <div class="ui button approve multi-sort-order-button">%s</div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s">'
    }
  },
  materialize: {
    html: {
      multipleSortModal: `
        <div id="%s" class="modal" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-content" id="%sLabel">
            <h4>%s</h4>
            <div class="bootstrap-table">
              <div class="fixed-table-toolbar">
                <div class="bars pb-3">
                  <button type="button" class="toolbar-btn-add waves-effect waves-light btn">%s %s</button>
                  <button type="button" class="toolbar-btn-delete waves-effect waves-light btn" disabled>%s %s</button>
                </div>
              </div>
              <div class="fixed-table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th><div class="th-inner">%s</div></th>
                      <th><div class="th-inner">%s</div></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <a href="javascript:void(0)" class="modal-close waves-effect waves-light btn">%s</a>
              <a href="javascript:void(0)" class="modal-close waves-effect waves-light btn multi-sort-order-button">%s</a>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<a class="multi-sort %s modal-trigger" href="#%s" type="button" data-toggle="modal" title="%s">%s</a>',
      multipleSortSelect: '<select class="%s %s browser-default">'
    }
  },
  foundation: {
    html: {
      multipleSortModal: `
        <div class="reveal" id="%s" data-reveal aria-labelledby="%sLabel" aria-hidden="true">
          <div id="%sLabel">
            <h1>%s</h1>
            <div class="bootstrap-table">
              <div class="fixed-table-toolbar">
                  <div class="bars padding-bottom-2">
                    <button type="button" class="toolbar-btn-add waves-effect waves-light button">%s %s</button>
                    <button type="button" class="toolbar-btn-delete waves-effect waves-light button" disabled>%s %s</button>
                  </div>
              </div>
              <div class="fixed-table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th><div class="th-inner">%s</div></th>
                      <th><div class="th-inner">%s</div></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>

            <button class="waves-effect waves-light button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">%s</span>
            </button>
            <button class="waves-effect waves-light button multi-sort-order-button" data-close aria-label="Order" type="button">
              <span aria-hidden="true">%s</span>
            </button>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" data-open="%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s browser-default">'
    }
  },
  bulma: {
    html: {
      multipleSortModal: `
        <div class="modal" id="%s" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-background"></div>
          <div class="modal-content" id="%sLabel">
            <div class="box">
              <h2>%s</h2>
              <div class="bootstrap-table">
                <div class="fixed-table-toolbar">
                  <div class="bars padding-bottom-2">
                    <button type="button" class="toolbar-btn-add waves-effect waves-light button">%s %s</button>
                    <button type="button" class="toolbar-btn-delete waves-effect waves-light button" disabled>%s %s</button>
                  </div>
                </div>
                <div class="fixed-table-container">
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th><div class="th-inner">%s</div></th>
                        <th><div class="th-inner">%s</div></th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
              <button type="button" class="waves-effect waves-light button" data-close>%s</button>
              <button type="button" class="waves-effect waves-light button multi-sort-order-button" data-close>%s</button>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" data-target="%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s browser-default">'
    }
  },
  'bootstrap-table': {
    html: {
      multipleSortModal: `
        <div class="modal" id="%s" aria-labelledby="%sLabel" aria-hidden="true">
          <div class="modal-background"></div>
          <div class="modal-content" id="%sLabel">
            <div class="box">
              <h2>%s</h2>
              <div class="bootstrap-table">
                <div class="fixed-table-toolbar">
                  <div class="bars padding-bottom-2">
                    <button type="button" class="toolbar-btn-add btn">%s %s</button>
                    <button type="button" class="toolbar-btn-delete btn" disabled>%s %s</button>
                  </div>
                </div>
                <div class="fixed-table-container">
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th><div class="th-inner">%s</div></th>
                        <th><div class="th-inner">%s</div></th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
              <div class="mt-30">
                <button type="button" class="btn" data-close>%s</button>
                <button type="button" class="btn multi-sort-order-button" data-close>%s</button>
              </div>
            </div>
          </div>
        </div>
      `,
      multipleSortButton: '<button class="multi-sort %s" data-target="%s" title="%s">%s</button>',
      multipleSortSelect: '<select class="%s %s browser-default">'
    }
  }
}[$.fn.bootstrapTable.theme]

const showSortModal = that => {
  const _selector = that.sortModalSelector
  const _id = `#${_selector}`
  const o = that.options

  if (!$(_id).hasClass('modal')) {
    const sModal = Utils.sprintf(
      theme.html.multipleSortModal,
      _selector, _selector, _selector,
      that.options.formatMultipleSort(),
      Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.plus),
      that.options.formatAddLevel(),
      Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.minus),
      that.options.formatDeleteLevel(),
      that.options.formatColumn(),
      that.options.formatOrder(),
      that.options.formatCancel(),
      that.options.formatSort()
    )

    $('body').append($(sModal))

    that.$sortModal = $(_id)
    const $rows = that.$sortModal.find('tbody > tr')

    that.$sortModal.off('click', '.toolbar-btn-add').on('click', '.toolbar-btn-add', () => {
      const total = that.$sortModal.find('.multi-sort-name:first option').length
      let current = that.$sortModal.find('tbody tr').length

      if (current < total) {
        current++
        that.addLevel()
        that.setButtonStates()
      }
    })

    that.$sortModal.off('click', '.toolbar-btn-delete').on('click', '.toolbar-btn-delete', () => {
      const total = that.$sortModal.find('.multi-sort-name:first option').length
      let current = that.$sortModal.find('tbody tr').length

      if (current > 1 && current <= total) {
        current--
        that.$sortModal.find('tbody tr:last').remove()
        that.setButtonStates()
      }
    })

    that.$sortModal.off('click', '.multi-sort-order-button').on('click', '.multi-sort-order-button', () => {
      const $rows = that.$sortModal.find('tbody > tr')
      let $alert = that.$sortModal.find('div.alert')
      const fields = []
      const results = []

      const sortPriority = $.map($rows, row => {
        const $row = $(row)
        const name = $row.find('.multi-sort-name').val()
        const order = $row.find('.multi-sort-order').val()

        fields.push(name)

        return {
          sortName: name,
          sortOrder: order
        }
      })

      const sorted_fields = fields.sort()

      for (let i = 0; i < fields.length - 1; i++) {
        if (sorted_fields[i + 1] === sorted_fields[i]) {
          results.push(sorted_fields[i])
        }
      }

      if (results.length > 0) {
        if ($alert.length === 0) {
          $alert = `<div class="alert alert-danger" role="alert"><strong>${that.options.formatDuplicateAlertTitle()}</strong> ${that.options.formatDuplicateAlertDescription()}</div>`
          $($alert).insertBefore(that.$sortModal.find('.bars'))
        }
      } else {
        if ($alert.length === 1) {
          $($alert).remove()
        }

        if (['bootstrap3', 'bootstrap4', 'bootstrap5'].includes($.fn.bootstrapTable.theme)) {
          that.$sortModal.modal('hide')
        }

        that.multiSort(sortPriority)
      }
    })

    if (that.options.sortPriority === null || that.options.sortPriority.length === 0) {
      if (that.options.sortName) {
        that.options.sortPriority = [{
          sortName: that.options.sortName,
          sortOrder: that.options.sortOrder
        }]
      }
    }

    if (that.options.sortPriority !== null && that.options.sortPriority.length > 0) {
      if ($rows.length < that.options.sortPriority.length && typeof that.options.sortPriority === 'object') {
        for (let i = 0; i < that.options.sortPriority.length; i++) {
          that.addLevel(i, that.options.sortPriority[i])
        }
      }
    } else {
      that.addLevel(0)
    }

    that.setButtonStates()
  }
}

$.fn.bootstrapTable.methods.push('multipleSort')
$.fn.bootstrapTable.methods.push('multiSort')

Object.assign($.fn.bootstrapTable.defaults, {
  showMultiSort: false,
  showMultiSortButton: true,
  multiSortStrictSort: false,
  sortPriority: null,
  onMultipleSort () {
    return false
  }
})

Object.assign($.fn.bootstrapTable.events, {
  'multiple-sort.bs.table': 'onMultipleSort'
})

Object.assign($.fn.bootstrapTable.locales, {
  formatMultipleSort () {
    return 'Multiple Sort'
  },
  formatAddLevel () {
    return 'Add Level'
  },
  formatDeleteLevel () {
    return 'Delete Level'
  },
  formatColumn () {
    return 'Column'
  },
  formatOrder () {
    return 'Order'
  },
  formatSortBy () {
    return 'Sort by'
  },
  formatThenBy () {
    return 'Then by'
  },
  formatSort () {
    return 'Sort'
  },
  formatCancel () {
    return 'Cancel'
  },
  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },
  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },
  formatSortOrders () {
    return {
      asc: 'Ascending',
      desc: 'Descending'
    }
  }
})

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

const BootstrapTable = $.fn.bootstrapTable.Constructor
const _initToolbar = BootstrapTable.prototype.initToolbar
const _destroy = BootstrapTable.prototype.destroy

BootstrapTable.prototype.initToolbar = function (...args) {
  this.showToolbar = this.showToolbar || this.options.showMultiSort
  const that = this
  const sortModalSelector = Utils.getEventName('sort-modal', this.$el.attr('id'))
  const sortModalId = `#${sortModalSelector}`
  const $multiSortBtn = this.$toolbar.find('div.multi-sort')
  const o = this.options

  this.$sortModal = $(sortModalId)
  this.sortModalSelector = sortModalSelector

  if (that.options.sortPriority !== null) {
    that.onMultipleSort()
  }

  if (this.options.showMultiSort && this.options.showMultiSortButton) {
    this.buttons = Object.assign(this.buttons, {
      multipleSort: {
        html: Utils.sprintf(theme.html.multipleSortButton,
          that.constants.buttonsClass, that.sortModalSelector, this.options.formatMultipleSort(),
          Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.sort))
      }
    })
  }

  _initToolbar.apply(this, Array.prototype.slice.apply(args))

  if (that.options.sidePagination === 'server' && !isSingleSort && that.options.sortPriority !== null) {
    const t = that.options.queryParams

    that.options.queryParams = params => {
      params.multiSort = that.options.sortPriority
      return t(params)
    }
  }

  if (this.options.showMultiSort) {
    if (!$multiSortBtn.length && this.options.showMultiSortButton) {
      if ($.fn.bootstrapTable.theme === 'semantic') {
        this.$toolbar.find('.multi-sort').on('click', () => {
          $(sortModalId).modal('show')
        })
      } else if ($.fn.bootstrapTable.theme === 'materialize') {
        this.$toolbar.find('.multi-sort').on('click', () => {
          $(sortModalId).modal()
        })
      } else if ($.fn.bootstrapTable.theme === 'bootstrap-table') {
        this.$toolbar.find('.multi-sort').on('click', () => {
          $(sortModalId).addClass('show')
        })
      } else if ($.fn.bootstrapTable.theme === 'foundation') {
        this.$toolbar.find('.multi-sort').on('click', () => {
          if (!this.foundationModal) {
            // eslint-disable-next-line no-undef
            this.foundationModal = new Foundation.Reveal($(sortModalId))
          }
          this.foundationModal.open()
        })
      } else if ($.fn.bootstrapTable.theme === 'bulma') {
        this.$toolbar.find('.multi-sort').on('click', () => {
          $('html').toggleClass('is-clipped')
          $(sortModalId).toggleClass('is-active')
          $('button[data-close]').one('click', () => {
            $('html').toggleClass('is-clipped')
            $(sortModalId).toggleClass('is-active')
          })
        })
      }

      showSortModal(that)
    }

    this.$el.on('sort.bs.table', () => {
      isSingleSort = true
    })

    this.$el.on('multiple-sort.bs.table', () => {
      isSingleSort = false
    })

    this.$el.on('load-success.bs.table', () => {
      if (!isSingleSort && that.options.sortPriority !== null && typeof that.options.sortPriority === 'object' && that.options.sidePagination !== 'server') {
        that.onMultipleSort()
      }
    })

    this.$el.on('column-switch.bs.table', (field, checked) => {
      if (that.options.sortPriority !== null && that.options.sortPriority.length > 0) {
        for (let i = 0; i < that.options.sortPriority.length; i++) {
          if (that.options.sortPriority[i].sortName === checked) {
            that.options.sortPriority.splice(i, 1)
          }
        }

        that.assignSortableArrows()
      }

      that.$sortModal.remove()
      showSortModal(that)
    })

    this.$el.on('reset-view.bs.table', () => {
      if (!isSingleSort && that.options.sortPriority !== null && typeof that.options.sortPriority === 'object') {
        that.assignSortableArrows()
      }
    })
  }
}

BootstrapTable.prototype.destroy = function (...args) {
  _destroy.apply(this, Array.prototype.slice.apply(args))

  if (this.options.showMultiSort) {
    this.enableCustomSort = false
    this.$sortModal.remove()
  }
}

BootstrapTable.prototype.multipleSort = function () {
  const that = this

  if (!isSingleSort && that.options.sortPriority !== null && typeof that.options.sortPriority === 'object' && that.options.sidePagination !== 'server') {
    that.onMultipleSort()
  }
}

BootstrapTable.prototype.onMultipleSort = function () {
  const that = this

  const cmp = (x, y) => x > y ? 1 : x < y ? -1 : 0

  const arrayCmp = (a, b) => {
    const arr1 = []
    const arr2 = []

    for (let i = 0; i < that.options.sortPriority.length; i++) {
      let fieldName = that.options.sortPriority[i].sortName
      const fieldIndex = that.header.fields.indexOf(fieldName)
      const sorterName = that.header.sorters[that.header.fields.indexOf(fieldName)]

      if (that.header.sortNames[fieldIndex]) {
        fieldName = that.header.sortNames[fieldIndex]
      }

      const order = that.options.sortPriority[i].sortOrder === 'desc' ? -1 : 1
      let aa = Utils.getItemField(a, fieldName)
      let bb = Utils.getItemField(b, fieldName)
      const value1 = $.fn.bootstrapTable.utils.calculateObjectValue(that.header, sorterName, [aa, bb, a, b])
      const value2 = $.fn.bootstrapTable.utils.calculateObjectValue(that.header, sorterName, [bb, aa, b, a])

      if (value1 !== undefined && value2 !== undefined) {
        arr1.push(order * value1)
        arr2.push(order * value2)
        continue
      }

      if (aa === undefined || aa === null) aa = ''
      if (bb === undefined || bb === null) bb = ''

      if ($.isNumeric(aa) && $.isNumeric(bb)) {
        aa = parseFloat(aa)
        bb = parseFloat(bb)
      } else {
        aa = aa.toString()
        bb = bb.toString()

        if (that.options.multiSortStrictSort) {
          aa = aa.toLowerCase()
          bb = bb.toLowerCase()
        }
      }

      arr1.push(order * cmp(aa, bb))
      arr2.push(order * cmp(bb, aa))
    }

    return cmp(arr1, arr2)
  }

  this.enableCustomSort = true
  this.data.sort((a, b) => arrayCmp(a, b))

  this.initBody()
  this.assignSortableArrows()
  this.trigger('multiple-sort')
}

BootstrapTable.prototype.addLevel = function (index, sortPriority) {
  const text = index === 0 ? this.options.formatSortBy() : this.options.formatThenBy()

  this.$sortModal.find('tbody')
    .append($('<tr>')
      .append($('<td>').text(text))
      .append($('<td>').append($(Utils.sprintf(theme.html.multipleSortSelect, this.constants.classes.paginationDropdown, 'multi-sort-name'))))
      .append($('<td>').append($(Utils.sprintf(theme.html.multipleSortSelect, this.constants.classes.paginationDropdown, 'multi-sort-order'))))
    )

  const $multiSortName = this.$sortModal.find('.multi-sort-name').last()
  const $multiSortOrder = this.$sortModal.find('.multi-sort-order').last()

  $.each(this.columns, (i, column) => {
    if (column.sortable === false || column.visible === false) {
      return true
    }
    $multiSortName.append(`<option value="${column.field}">${column.title}</option>`)
  })

  $.each(this.options.formatSortOrders(), (value, order) => {
    $multiSortOrder.append(`<option value="${value}">${order}</option>`)
  })

  if (sortPriority !== undefined) {
    $multiSortName.find(`option[value="${sortPriority.sortName}"]`).attr('selected', true)
    $multiSortOrder.find(`option[value="${sortPriority.sortOrder}"]`).attr('selected', true)
  }
}

BootstrapTable.prototype.assignSortableArrows = function () {
  const that = this
  const headers = that.$header.find('th')

  for (let i = 0; i < headers.length; i++) {
    for (let c = 0; c < that.options.sortPriority.length; c++) {
      if ($(headers[i]).data('field') === that.options.sortPriority[c].sortName) {
        $(headers[i]).find('.sortable').removeClass('desc asc').addClass(that.options.sortPriority[c].sortOrder)
      }
    }
  }
}

BootstrapTable.prototype.setButtonStates = function () {
  const total = this.$sortModal.find('.multi-sort-name:first option').length
  const current = this.$sortModal.find('tbody tr').length

  if (current === total) {
    this.$sortModal.find('.toolbar-btn-add').attr('disabled', 'disabled')
  }
  if (current > 1) {
    this.$sortModal.find('.toolbar-btn-delete').removeAttr('disabled')
  }
  if (current < total) {
    this.$sortModal.find('.toolbar-btn-add').removeAttr('disabled')
  }
  if (current === 1) {
    this.$sortModal.find('.toolbar-btn-delete').attr('disabled', 'disabled')
  }
}

BootstrapTable.prototype.multiSort = function (sortPriority) {
  this.options.sortPriority = sortPriority
  this.options.sortName = undefined

  if (this.options.sidePagination === 'server') {
    const queryParams = this.options.queryParams

    this.options.queryParams = params => {
      params.multiSort = this.options.sortPriority
      return $.fn.bootstrapTable.utils.calculateObjectValue(this.options, queryParams, [params])
    }
    isSingleSort = false
    this.initServer(this.options.silentSort)
    return
  }

  this.onMultipleSort()
}
