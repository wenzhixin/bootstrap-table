/* eslint-disable guard-for-in */
/**
 * @author: Yura Knoxville
 * @version: v1.1.0
 */
const Utils = $.fn.bootstrapTable.utils
const UtilsGroupBy = {
  groupBy (array, f) {
    const groups = {}
    array.forEach(o => {
      const group = f(o)
      groups[group] = groups[group] || []
      groups[group].push(o)
    })

    return groups
  },

  string2hash (s) {
    const h = {}
    if (typeof s === 'string') {
      s.split(' ').forEach(function (field) {
        h[field] = 0
      })
    }
    return h
  },

  aggr_sum (rows, fields) {
    for (const field in fields) {
      rows.forEach(function (row) {
        fields[field] += isNaN(row[field]) ? 0 : row[field] * 1.0
      })
    }
    return fields
  },

  aggr_count (rows, fields) {
    for (const field in fields) {
      rows.forEach(function (row) {
        fields[field] += row[field] ? 1 : 0
      })
    }
    return fields
  },

  aggr_avg (rows, fields) {
    let sum = 0
    let count = 0
    for (const field in fields) {
      rows.forEach(function (row) {
        if (!isNaN(row[field])) {
          sum += row[field] * 1.0
          count += 1
        }
      })
      fields[field] = count > 0 ? sum / count : 0
    }
    return fields
  },

  execFunc (self, name, args, defaultValue) {
    let func = name

    if (typeof name === 'string') {
      const names = name.split('.')

      if (names.length > 1) {
        func = window
        $.each(names, function (i, f) { func = func[f] })
      } else {
        func = window[name]
      }
    }

    return (typeof func === 'function') ? func.apply(self, args || []) : defaultValue
  },

  initRow (key, val, first_row, btable, allFields) {
    const html = []
    const hidden_tds = []
    const tds = []
    let colspan = 0
    let value

    $.each(btable.columns, function (i, column) {
      if (!column.visible) {
        return
      }

      if (btable.options.cardView && (!column.cardVisible)) {
        return
      }

      if (first_row) {
        hidden_tds.push('<td ' + (column.class ? 'class="' + column.class + '"' : '') + '></td>')
      }

      if ($.inArray(column.field, allFields) > -1 || tds.length > 0) {

        value = val.aggr[column.field]

        tds.push('<td ' + (column.class ? 'class="' + column.class + '"' : '') + ' ' + (value ? 'data-value="' + value + '"' : '') + '>')

        if (column.formatter) {
          tds.push(UtilsGroupBy.execFunc(column, column.formatter, [value], '&nbsp;'))
        } else {
          tds.push(value)
        }

        tds.push('</td>')
      } else {
        colspan += 1
      }
    })

    // add an empty string because the header row expects a normal visible first row of data
    if (first_row) {
      html.push('<tr>' + hidden_tds.join('') + '</tr>')
    }

    let formattedValue =
    [Utils.sprintf('<tr class="group-by-row expanded info groupBy" data-group-index="%s">', key),
      Utils.sprintf('<td data-col-name="group-title" colspan="%s">%s</td>', colspan, key),
      tds.join(''),
      '</tr>'].join('')

    if (typeof(btable.options.groupByFormatter) === 'function') {
      formattedValue = btable.options.groupByFormatter(colspan, key, tds)
    }

    html.push(formattedValue)

    return html.join('')
  }
}
let initBodyCaller
let tableGroups

$.extend($.fn.bootstrapTable.defaults, {
  groupBy: false,
  groupByField: '',
  groupByFormatter: undefined,
  groupBySum: '',
  groupByCount: '',
  groupByAvg: ''
})

$.BootstrapTable = class extends $.BootstrapTable {
  initSort () {
    super.initSort()

    const that = this
    tableGroups = []

    if ((this.options.groupBy) && (this.options.groupByField !== '')) {

      if ((this.options.sortName !== this.options.groupByField)) {
        this.data.sort((a, b) => a[that.options.groupByField].localeCompare(b[that.options.groupByField]))
      }

      const groups = UtilsGroupBy.groupBy(that.data, item => [item[that.options.groupByField]])
      const fieldsSum = UtilsGroupBy.string2hash(this.options.groupBySum)
      const fieldsCount = UtilsGroupBy.string2hash(this.options.groupByCount)
      const fieldsAvg = UtilsGroupBy.string2hash(this.options.groupByAvg)
      const allFields = Object.keys($.extend({}, fieldsSum, fieldsCount, fieldsAvg))

      let index = 0
      $.each(groups, (key, value) => {
        tableGroups.push({
          id: index,
          name: key,
          data: value
        })

        value.forEach(item => {
          if (!item._data) {
            item._data = {}
          }

          item._data['parent-index'] = index
        })

        index++
      })
    }
  }

  initBody () {
    initBodyCaller = true

    super.initBody()

    if ((this.options.groupBy) && (this.options.groupByField !== '')) {
      const that = this
      let checkBox = false
      let visibleColumns = 0

      this.columns.forEach(column => {
        if (column.checkbox) {
          checkBox = true
        } else {
          if (column.visible) {
            visibleColumns += 1
          }
        }
      })

      if (this.options.detailView && !this.options.cardView) {
        visibleColumns += 1
      }

      tableGroups.forEach(item => {
        const html = []

        html.push(Utils.sprintf('<tr class="info groupBy expanded" data-group-index="%s">', item.id))

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
        if (typeof(that.options.groupByFormatter) === 'function') {
          formattedValue = that.options.groupByFormatter(item.name, item.id, item.data)
        }
        html.push(Utils.sprintf('<td colspan="%s">%s</td>', visibleColumns, formattedValue))
        html.push('</tr>')

        that.$body.find(`tr[data-parent-index=${item.id}]:first`).before($(html.join('')))
      })

      this.$selectGroup = []
      this.$body.find('[name="btSelectGroup"]').each(function () {
        const self = $(this)

        that.$selectGroup.push({
          group: self,
          item: that.$selectItem.filter(function () {
            return ($(this).closest('tr').data('parent-index') === self.closest('tr').data('group-index'))
          })
        })
      })

      this.$container.off('click', '.groupBy')
        .on('click', '.groupBy', function () {
          $(this).toggleClass('expanded')
          that.$body.find(`tr[data-parent-index=${$(this).closest('tr').data('group-index')}]`).toggleClass('hidden')
        })

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

  updateSelected () {
    if (!initBodyCaller) {
      super.updateSelected()

      if ((this.options.groupBy) && (this.options.groupByField !== '')) {
        this.$selectGroup.forEach(item => {
          const checkGroup = item.item.filter(':enabled').length === item.item.filter(':enabled').filter(':checked').length

          item.group.prop('checked', checkGroup)
        })
      }
    }
  }

  getGroupSelections (index) {
    const that = this

    return this.data.filter(row => row[that.header.stateField] && (row._data['parent-index'] === index))
  }

  checkGroup (index) {
    this.checkGroup_(index, true)
  }

  uncheckGroup (index) {
    this.checkGroup_(index, false)
  }

  checkGroup_ (index, checked) {
    let rows
    const filter = function () {
      return ($(this).closest('tr').data('parent-index') === index)
    }

    if (!checked) {
      rows = this.getGroupSelections(index)
    }

    this.$selectItem.filter(filter).prop('checked', checked)

    this.updateRows()
    this.updateSelected()
    if (checked) {
      rows = this.getGroupSelections(index)
    }
    this.trigger(checked ? 'check-all' : 'uncheck-all', rows)
  }
}
