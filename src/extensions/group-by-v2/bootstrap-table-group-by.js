/**
 * @author: Yura Knoxville
 * @version: v1.1.0
 */

let initBodyCaller

const groupBy = (array, f) => {
  const tmpGroups = {}

  array.forEach(o => {
    const groups = f(o)

    tmpGroups[groups] = tmpGroups[groups] || []
    tmpGroups[groups].push(o)
  })

  return tmpGroups
}

$.extend($.fn.bootstrapTable.defaults.icons, {
  collapseGroup: {
    bootstrap3: 'glyphicon-chevron-up',
    materialize: 'arrow_drop_down'
  }[$.fn.bootstrapTable.theme] || 'fa-angle-up',
  expandGroup: {
    bootstrap3: 'glyphicon-chevron-down',
    materialize: 'arrow_drop_up'
  }[$.fn.bootstrapTable.theme] || 'fa-angle-down'
})

$.extend($.fn.bootstrapTable.defaults, {
  groupBy: false,
  groupByField: '',
  groupByFormatter: undefined,
  groupByToggle: false,
  groupByShowToggleIcon: false,
  groupByCollapsedGroups: []
})

const Utils = $.fn.bootstrapTable.utils
const BootstrapTable = $.fn.bootstrapTable.Constructor
const _initSort = BootstrapTable.prototype.initSort
const _initBody = BootstrapTable.prototype.initBody
const _updateSelected = BootstrapTable.prototype.updateSelected

BootstrapTable.prototype.initSort = function (...args) {
  _initSort.apply(this, Array.prototype.slice.apply(args))

  const that = this

  this.tableGroups = []

  if ((this.options.groupBy) && (this.options.groupByField !== '')) {
    if ((this.options.sortName !== this.options.groupByField)) {
      if (this.options.customSort) {
        Utils.calculateObjectValue(this.options, this.options.customSort, [
          this.options.sortName,
          this.options.sortOrder,
          this.data
        ])
      } else {
        this.options.data.sort((a, b) => {
          const groupByFields = this.getGroupByFields()
          const fieldValuesA = []
          const fieldValuesB = []

          $.each(groupByFields, (i, field) => {
            fieldValuesA.push(a[field])
            fieldValuesB.push(b[field])
          })

          a = fieldValuesA.join()
          b = fieldValuesB.join()
          return a.localeCompare(b, undefined, { numeric: true })
        })
      }
    }

    const groups = groupBy(that.data, item => {
      const groupByFields = this.getGroupByFields()
      const groupValues = []

      $.each(groupByFields, (i, field) => {
        groupValues.push(item[field])
      })

      return groupValues.join(', ')
    })

    let index = 0

    $.each(groups, (key, value) => {
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
          item._class = 'hidden'
        }

        item._data['parent-index'] = index
      })

      index++
    })
  }
}

BootstrapTable.prototype.initBody = function (...args) {
  initBodyCaller = true
  _initBody.apply(this, Array.prototype.slice.apply(args))

  if ((this.options.groupBy) && (this.options.groupByField !== '')) {
    const that = this
    let checkBox = false
    let visibleColumns = 0

    this.columns.forEach(column => {
      if (column.checkbox) {
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

      html.push(Utils.sprintf('<tr class="info groupBy %s" data-group-index="%s">', this.options.groupByToggle ? 'expanded' : '', item.id))
      if (that.options.detailView && !that.options.cardView) {
        html.push('<td class="detail"></td>')
      }

      if (checkBox) {
        html.push('<td class="bs-checkbox">',
          '<input name="btSelectGroup" type="checkbox" />',
          '</td>'
        )
      }

      let formattedValue = item.name

      if (that.options.groupByFormatter !== undefined) {
        formattedValue = Utils.calculateObjectValue(that.options, that.options.groupByFormatter, [item.name, item.id, item.data])
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
      that.$body.find(`tr[data-parent-index=${item.id}]:first`).before($(html.join('')))
    })

    this.$selectGroup = []
    this.$body.find('[name="btSelectGroup"]').each(function () {
      const self = $(this)

      that.$selectGroup.push({
        group: self,
        item: that.$selectItem.filter(function () {
          return ($(this).closest('tr').data('parent-index') ===
            self.closest('tr').data('group-index'))
        })
      })
    })

    if (this.options.groupByToggle) {
      this.$container.off('click', '.groupBy')
        .on('click', '.groupBy', function () {
          const $this = $(this)
          const groupIndex = $this.closest('tr').data('group-index')
          const $groupRows = that.$body.find(`tr[data-parent-index=${groupIndex}]`)

          $this.toggleClass('expanded collapsed')
          $this.find('span').toggleClass(`${that.options.icons.collapseGroup} ${that.options.icons.expandGroup}`)
          $groupRows.toggleClass('hidden')
          $groupRows.each((i, element) => that.collapseRow($(element).data('index')))
        })
    }

    this.$container.off('click', '[name="btSelectGroup"]')
      .on('click', '[name="btSelectGroup"]', function (event) {
        event.stopImmediatePropagation()

        const self = $(this)
        const checked = self.prop('checked')

        that[checked ? 'checkGroup' : 'uncheckGroup']($(this).closest('tr').data('group-index'))
      })
  }

  initBodyCaller = false
  this.updateSelected()
}

BootstrapTable.prototype.updateSelected = function (...args) {
  if (!initBodyCaller) {
    _updateSelected.apply(this, Array.prototype.slice.apply(args))

    if ((this.options.groupBy) && (this.options.groupByField !== '')) {
      this.$selectGroup.forEach(item => {
        const checkGroup = item.item.filter(':enabled').length ===
          item.item.filter(':enabled').filter(':checked').length

        item.group.prop('checked', checkGroup)
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

    if ($.inArray(groupKey, collapsedGroups) > -1) {
      return true
    }
  }

  return false
}

BootstrapTable.prototype.checkGroup_ = function (index, checked) {
  const rowsBefore = this.getSelections()
  const filter = function () {
    return ($(this).closest('tr').data('parent-index') === index)
  }

  this.$selectItem.filter(filter).prop('checked', checked)

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

  if (!$.isArray(this.options.groupByField)) {
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

        this.$body.find(`> tr:not(.groupBy):lt(${options.value})`).each((i, el) => {
          scrollTo += $(el).outerHeight(true)
        })

        const $targetColumn = this.$body.find(`> tr:not(.groupBy):eq(${options.value})`)

        $targetColumn.prevAll('.groupBy').each((i, el) => {
          scrollTo += $(el).outerHeight(true)
        })

        this.$tableBody.scrollTop(scrollTo)
        return
      }
    }

    super.scrollTo(params)
  }
}
