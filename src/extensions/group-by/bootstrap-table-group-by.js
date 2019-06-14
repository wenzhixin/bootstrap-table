/* eslint-disable guard-for-in */
/**
 * @author: Bighamster
 * @webSite: https://github.com/Bighamster
 * @version: v1.0.0
 * @update Dennis Hernández | http://djhvscf.github.io/Blog
 */

const UtilsGroupBy = {
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
    ['<tr class="group-by-row expanded">',
      '<td data-col-name="group-title" colspan=' + colspan + '>' + key + '</td>',
      tds.join(''),
      '</tr>'].join('')

    if (typeof(btable.options.groupByFormatter) === 'function') {
      formattedValue = btable.options.groupByFormatter(colspan, key, tds)
    }

    html.push(formattedValue)

    return html.join('')
  }
}

$.extend($.fn.bootstrapTable.defaults, {
  groupBy: '',
  groupBySum: '',
  groupByCount: '',
  groupByAvg: '',
  groupByFormatter: undefined
})

$.BootstrapTable = class extends $.BootstrapTable {
  init () {
    if (this.options.groupBy) {
      this._group_by_plugin = function (btable) {
        let groups = {}
        const fields = UtilsGroupBy.string2hash(btable.options.groupBy)
        const fieldsSum = UtilsGroupBy.string2hash(btable.options.groupBySum)
        const fieldsCount = UtilsGroupBy.string2hash(btable.options.groupByCount)
        const fieldsAvg = UtilsGroupBy.string2hash(btable.options.groupByAvg)
        const allFields = Object.keys($.extend({}, fieldsSum, fieldsCount, fieldsAvg))

        return {
          groups: function () {
            return groups
          },
          data: function () {
            let data = []
            $.each(groups, function (key, val) {
              data = data.concat(val.rows)
            })
            return data
          },
          draw: function () {
            let first_row = true
            $.each(groups, function (key, val) {
              btable.$body.find('tr[data-parent-index="' + val.index + '"]:first').before($(UtilsGroupBy.initRow(key, val, first_row, btable, allFields)))
              first_row = false
            })
          },
          build: function (rows) {
            let index = 0

            // reset groups
            groups = {}

            // build new groups
            rows.forEach(function (row) {

              const group_key = $.map(fields, function (val, key) {
                return row[key]
              }).join(' ')

              groups[group_key] = groups[group_key] || {rows: [], aggr: {}, index: index++}
              groups[group_key].rows.push(row)
            })

            // calculate aggregates for groups
            $.each(groups, function (key, val) {

              // reset values of aggregates
              [fieldsSum, fieldsCount, fieldsAvg].forEach(function (h) {
                for (const key in h) {
                  h[key] = 0
                }
              })

              val.rows.forEach(function (row) {
                row['_data'] = {'parent-index': val.index}
              })

              $.extend(val.aggr, UtilsGroupBy.aggr_sum(val.rows, fieldsSum))
              $.extend(val.aggr, UtilsGroupBy.aggr_count(val.rows, fieldsCount))
              $.extend(val.aggr, UtilsGroupBy.aggr_avg(val.rows, fieldsAvg))
            })

            return groups
          }
        }
      }(this)
    }

    super.init()
  }

  initBody () {
    if (this._group_by_plugin) {
      this._group_by_plugin.build(this.data)
      super.initBody()
      this._group_by_plugin.draw()
    } else {
      super.initBody()
    }
  }
}