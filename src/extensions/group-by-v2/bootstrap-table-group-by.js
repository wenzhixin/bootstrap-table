/**
 * @author: Yura Knoxville
 * @version: v1.1.0
 */

const Utils = $.fn.bootstrapTable.utils
let initBodyCaller

const groupBy = (array, f) => {
  const tmpGroups = new Map()

  array.forEach(o => {
    const groups = f(o)

    if (!tmpGroups.has(groups)) {
      tmpGroups.set(groups, [])
    }
    tmpGroups.get(groups).push(o)
  })

  return Object.fromEntries(tmpGroups)
}

Utils.assignIcons($.fn.bootstrapTable.icons, 'collapseGroup', {
  glyphicon: 'glyphicon-chevron-up',
  fa: 'fa-angle-up',
  bi: 'bi-chevron-up',
  'material-icons': 'arrow_drop_down'
})

Utils.assignIcons($.fn.bootstrapTable.icons, 'expandGroup', {
  glyphicon: 'glyphicon-chevron-down',
  fa: 'fa-angle-down',
  bi: 'bi-chevron-down',
  'material-icons': 'arrow_drop_up'
})

Object.assign($.fn.bootstrapTable.defaults, {
  groupBy: false,
  groupByField: '',
  groupByFormatter: undefined,
  groupByToggle: false,
  groupByShowToggleIcon: false,
  groupByCollapsedGroups: []
})

const BootstrapTable = $.fn.bootstrapTable.Constructor
const _initSort = BootstrapTable.prototype.initSort
const _initBody = BootstrapTable.prototype.initBody
const _updateSelected = BootstrapTable.prototype.updateSelected

BootstrapTable.prototype.initSort = function (...args) {
  // for custom sort
  this.enableCustomSort = this.options.groupBy && this.options.groupByField !== ''
  this.tableGroups = []

  _initSort.apply(this, args)

  if (this.enableCustomSort) {
    if (this.options.sortName !== this.options.groupByField) {
      if (this.options.customSort) {
        Utils.calculateObjectValue(this.options, this.options.customSort, [
          this.options.sortName,
          this.options.sortOrder,
          this.data
        ])
      } else {
        const groupByFields = this.getGroupByFields()

        this.data.sort((a, b) => {
          const fieldValuesA = groupByFields.map(field => a[field])
          const fieldValuesB = groupByFields.map(field => b[field])

          return fieldValuesA.join().localeCompare(fieldValuesB.join(), undefined, { numeric: true })
        })
      }
    }

    const groups = groupBy(this.data, item => {
      const groupByFields = this.getGroupByFields()
      const groupValues = []

      for (const field of groupByFields) {
        const value_ = Utils.getItemField(item, field, this.options.escape, item.escape)

        groupValues.push(value_)
      }

      return groupValues.join(', ')
    })

    let index = 0

    for (const [key, value] of Object.entries(groups)) {
      this.tableGroups.push({
        id: index,
        name: key,
        data: value
      })

      value.forEach(item => {
        if (!item._data) {
          item._data = {}
        }

        if (this.isCollapsed(key, value)) {
          item._class += ' hidden'
        }

        item._data['parent-index'] = index
      })

      index++
    }
  }
}

BootstrapTable.prototype.initBody = function (...args) {
  initBodyCaller = true

  this.initSort()

  _initBody.apply(this, args)

  if (this.options.groupBy && this.options.groupByField !== '') {
    let checkBox = false
    let visibleColumns = 0

    this.columns.forEach(column => {
      if (column.checkbox && !this.options.singleSelect) {
        checkBox = true
      } else if (column.visible) {
        visibleColumns += 1
      }
    })

    if (this.options.detailView && !this.options.cardView) {
      visibleColumns += 1
    }

    this.tableGroups.forEach(item => {
      const html = []

      html.push(Utils.sprintf('<tr class="info group-by %s" data-group-index="%s">', this.options.groupByToggle ? 'expanded' : '', item.id))
      if (this.options.detailView && !this.options.cardView) {
        html.push('<td class="detail"></td>')
      }

      if (checkBox) {
        html.push('<td class="bs-checkbox">',
          '<input name="btSelectGroup" type="checkbox" />',
          '</td>'
        )
      }

      let formattedValue = item.name

      if (this.options.groupByFormatter !== undefined) {
        formattedValue = Utils.calculateObjectValue(this.options, this.options.groupByFormatter, [item.name, item.id, item.data])
      }
      html.push('<td',
        Utils.sprintf(' colspan="%s"', visibleColumns),
        '>', formattedValue
      )

      let icon = this.options.icons.collapseGroup

      if (this.isCollapsed(item.name, item.data)) {
        icon = this.options.icons.expandGroup
      }

      if (this.options.groupByToggle && this.options.groupByShowToggleIcon) {
        html.push(`<span class="float-right ${this.options.iconsPrefix} ${icon}"></span>`)
      }

      html.push('</td></tr>')
      this.$body.find(`tr[data-parent-index=${item.id}]:first`).before($(html.join('')))
    })

    this.selectGroup = []
    for (const el of this.$body.find('[name="btSelectGroup"]')) {
      const groupIndex = $(el).closest('tr').data('group-index')

      this.selectGroup.push({
        group: $(el),
        item: this.$selectItem.filter((i, el) => $(el).closest('tr').data('parent-index') === groupIndex)
      })
    }

    if (this.options.groupByToggle) {
      this.$container.off('click', '.group-by')
        .on('click', '.group-by', event => {
          const $this = $(event.currentTarget)
          const groupIndex = $this.closest('tr').data('group-index')
          const $groupRows = this.$body.find(`tr[data-parent-index=${groupIndex}]`)

          $this.toggleClass('expanded collapsed')
          $this.find('span').toggleClass(`${this.options.icons.collapseGroup} ${this.options.icons.expandGroup}`)
          $groupRows.toggleClass('hidden')
          for (const element of $groupRows) {
            this.collapseRow($(element).data('index'))
          }
        })
    }

    this.$container.off('click', '[name="btSelectGroup"]')
      .on('click', '[name="btSelectGroup"]', event => {
        event.stopImmediatePropagation()

        const $this = $(event.currentTarget)
        const checked = $this.prop('checked')

        this[checked ? 'checkGroup' : 'uncheckGroup']($this.closest('tr').data('group-index'))
      })
  }

  initBodyCaller = false
  this.updateSelected()
}

BootstrapTable.prototype.updateSelected = function (...args) {
  if (!initBodyCaller) {
    _updateSelected.apply(this, args)

    if (this.options.groupBy && this.options.groupByField !== '') {
      this.selectGroup.forEach(item => {
        item.group.prop('checked', item.item.filter(':enabled').length ===
          item.item.filter(':enabled').filter(':checked').length)
      })
    }
  }
}

BootstrapTable.prototype.checkGroup = function (index) {
  this.checkGroup_(index, true)
}

BootstrapTable.prototype.uncheckGroup = function (index) {
  this.checkGroup_(index, false)
}

BootstrapTable.prototype.isCollapsed = function (groupKey, items) {
  if (this.options.groupByCollapsedGroups) {
    const collapsedGroups = Utils.calculateObjectValue(this, this.options.groupByCollapsedGroups, [groupKey, items], true)

    if (collapsedGroups.includes(groupKey)) {
      return true
    }
  }

  return false
}

BootstrapTable.prototype.checkGroup_ = function (index, checked) {
  const rowsBefore = this.getSelections()

  this.$selectItem
    .filter((i, el) => $(el).closest('tr').data('parent-index') === index)
    .prop('checked', checked)

  this.updateRows()
  this.updateSelected()
  const rowsAfter = this.getSelections()

  if (checked) {
    this.trigger('check-all', rowsAfter, rowsBefore)
    return
  }

  this.trigger('uncheck-all', rowsAfter, rowsBefore)
}

BootstrapTable.prototype.getGroupByFields = function () {
  let groupByFields = this.options.groupByField

  if (!Array.isArray(this.options.groupByField)) {
    groupByFields = [this.options.groupByField]
  }

  return groupByFields
}

$.BootstrapTable = class extends $.BootstrapTable {
  scrollTo (params) {
    if (this.options.groupBy) {
      let options = { unit: 'px', value: 0 }

      if (typeof params === 'object') {
        options = Object.assign(options, params)
      }

      if (options.unit === 'rows') {
        let scrollTo = 0

        const rows = this.$body.find(`> tr:not(.group-by):lt(${options.value})`)

        for (const row of rows) {
          scrollTo += $(row).outerHeight(true)
        }

        const $targetColumn = this.$body.find(`> tr:not(.group-by):eq(${options.value})`)
        const prevGroupRows = $targetColumn.prevAll('.group-by')

        for (const row of prevGroupRows) {
          scrollTo += $(row).outerHeight(true)
        }

        this.$tableBody.scrollTop(scrollTo)
        return
      }
    }

    super.scrollTo(params)
  }
}
