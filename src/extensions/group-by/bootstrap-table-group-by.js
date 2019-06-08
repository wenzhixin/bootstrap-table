/**
 * @author: Bighamster
 * @webSite: https://github.com/Bighamster
 * @version: v1.0.0
 example:
 <table data-group-by="company department"
        data-group-by-sum="salary tax hours"
        data-group-by-count="name"
        data-group-by-avg="salary">
 */

!function ($) {

  'use strict'

  $.extend($.fn.bootstrapTable.defaults, {
    groupBy: '',
    groupBySum: '',
    groupByCount: '',
    groupByAvg: ''
  })

  var BootstrapTable = $.fn.bootstrapTable.Constructor,
    _init = BootstrapTable.prototype.init,
    _load = BootstrapTable.prototype.load,
    _initBody = BootstrapTable.prototype.initBody

  BootstrapTable.prototype.init = function () {

    if ( this.options.groupBy ) {

      this._group_by_plugin = function ( btable ) {

        var groups = {},
          fields = string2hash(btable.options.groupBy),
          fieldsSum = string2hash(btable.options.groupBySum),
          fieldsCount = string2hash(btable.options.groupByCount),
          fieldsAvg = string2hash(btable.options.groupByAvg),
          allFields = Object.keys($.extend({}, fieldsSum, fieldsCount, fieldsAvg))

        var execFunc = function (self, name, args, defaultValue) {
          var func = name

          if (typeof name === 'string') {

            var names = name.split('.')

            if (names.length > 1) {
              func = window
              $.each(names, function (i, f) { func = func[f] })
            } else {
              func = window[name]
            }
          }

          return (typeof func === 'function') ? func.apply(self, args || []) : defaultValue
        };

        function string2hash ( s ) {
          var h = {}
          if ( typeof s === 'string' ) {
            s.split(' ').forEach(function (field) { h[field] = 0 })
          }
          return h
        };

        function aggr_sum ( rows, fields ) {
          for (var field in fields ) {
            rows.forEach(function (row) {
              fields[field] += isNaN(row[field]) ? 0 : row[field] * 1.0
            })
          }
          return fields
        }

        function aggr_count ( rows, fields ) {
          for (var field in fields ) {
            rows.forEach(function (row) {
              fields[field] += row[field] ? 1 : 0
            })
          }
          return fields
        }

        function aggr_avg ( rows, fields ) {
          var sum = 0, count = 0
          for (var field in fields ) {
            rows.forEach(function (row) {
              if ( !isNaN(row[field]) ) {
                sum += row[field] * 1.0
                count += 1
              }
            })
            fields[field] = count > 0 ? sum/count : 0
          }
          return fields
        }

        function initRow ( key, val, first_row ) {

          var html = [], hidden_tds = [], tds = [], colspan = 0, value

          $.each(btable.columns, function (i, column) {

            if (!column.visible) {
              return
            }

            if (btable.options.cardView && (!column.cardVisible)) {
              return
            }

            if ( first_row ) {
              hidden_tds.push('<td '+(column.class ? 'class="'+column.class+'"' : '')+'></td>')
            }

            if ( $.inArray(column.field, allFields) > -1 || tds.length > 0 ) {

              value = val.aggr[column.field]

              tds.push('<td '+(column.class ? 'class="'+column.class+'"' : '')+' '+(value ? 'data-value="'+value+'"' : '')+'>')

              if ( column.formatter ) {
                tds.push(execFunc(column, column.formatter, [value], '&nbsp;'))
              } else {
                tds.push(value)
              }

              tds.push('</td>')
            } else {
              colspan += 1
            }
          })

          // add an empty string because the header row expects a normal visible first row of data
          if ( first_row ) {
            html.push('<tr>'+hidden_tds.join('')+'</tr>')
          }

          html.push('<tr class="group-by-row expanded"><td data-col-name="group-title" colspan='+colspan+'>'+key+'</td>'+tds.join('')+'</tr>')

          return html.join('')
        }

        return {
          groups: function () { return groups },
          data: function () {
            var data = []
            $.each(groups, function ( key, val ) {
              data = data.concat( val.rows )
            })
            return data
          },
          draw: function () {
            var first_row = true
            $.each(groups, function ( key, val ) {
              btable.$body.find('tr[data-parent-index="'+val.index+'"]:first').before( $(initRow(key, val, first_row)) )
              first_row = false
            })
          },
          build:  function ( rows ) {

            var index = 0

            // reset groups
            groups = {}

            // build new groups
            rows.forEach(function (row) {

              var group_key = $.map(fields, function (val, key) { return row[key] }).join(' ')

              groups[group_key] = groups[group_key] || {rows: [], aggr: {}, index: index++}
              groups[group_key].rows.push(row)
            })

            // calculate aggregates for groups
            $.each(groups, function (key, val) {

              // reset values of aggregates
              [fieldsSum, fieldsCount, fieldsAvg].forEach(function (h) {
                for (var key in h ) { h[key] = 0 }
              })

              val.rows.forEach(function (row) {
                row['_data'] = {'parent-index': val.index}
              })

              $.extend(val.aggr, aggr_sum(  val.rows, fieldsSum))
              $.extend(val.aggr, aggr_count(val.rows, fieldsCount))
              $.extend(val.aggr, aggr_avg(  val.rows, fieldsAvg))
            })

            return groups
          }
        }
      }( this )
    }

    _init.apply(this, Array.prototype.slice.apply(arguments))
  }

  BootstrapTable.prototype.initBody = function () {

    if ( this._group_by_plugin ) {

      this._group_by_plugin.build( this.data )
      _initBody.apply(this, Array.prototype.slice.apply(arguments))
      this._group_by_plugin.draw()

    } else {
      _initBody.apply(this, Array.prototype.slice.apply(arguments))
    }
  }

}(jQuery)