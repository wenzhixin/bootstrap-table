/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

!function ($) {

  'use strict'

  $.extend($.fn.bootstrapTable.defaults, {
    multipleSearch: false,
    delimeter: ' '
  })

  var BootstrapTable = $.fn.bootstrapTable.Constructor
  var _initSearch = BootstrapTable.prototype.initSearch

  BootstrapTable.prototype.initSearch = function () {
    if (this.options.multipleSearch) {
      if (this.searchText === undefined) {
        return
      }
      var strArray = this.searchText.split(this.options.delimeter)
      var that = this
      var f = $.isEmptyObject(this.filterColumns) ? null : this.filterColumns
      var dataFiltered = []

      if (strArray.length === 1) {
        _initSearch.apply(this, Array.prototype.slice.apply(arguments))
      } else {
        for (var i = 0; i < strArray.length; i++) {
          var str = strArray[i].trim()
          dataFiltered = str ? $.grep(dataFiltered.length === 0 ? this.options.data : dataFiltered, function (item, i) {
            for (var key in item) {
              if (Object.prototype.hasOwnProperty(key, item)) {
                key = $.isNumeric(key) ? parseInt(key, 10) : key
                var value = item[key]
                var column = that.columns[that.fieldsColumnsIndex[key]]
                var j = $.inArray(key, that.header.fields)

                // Fix #142: search use formated data
                if (column && column.searchFormatter) {
                  value = $.fn.bootstrapTable.utils.calculateObjectValue(column,
                    that.header.formatters[j], [value, item, i], value)
                }

                var index = $.inArray(key, that.header.fields)
                if (index !== -1 && that.header.searchables[index] && (typeof value === 'string' || typeof value === 'number')) {
                  if (that.options.strictSearch) {
                    if ((value + '').toLowerCase() === str) {
                      return true
                    }
                  } else {
                    if ((value + '').toLowerCase().indexOf(str) !== -1) {
                      return true
                    }
                  }
                }
              }
            }
            return false
          }) : this.data
        }

        this.data = dataFiltered
      }
    } else {
      _initSearch.apply(this, Array.prototype.slice.apply(arguments))
    }
  }

}(jQuery)
