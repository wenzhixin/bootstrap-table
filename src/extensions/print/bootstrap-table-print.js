/**
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

function printPageBuilderDefault (table) {
  return `
  <html>
  <head>
  <style type="text/css" media="print">
  @page {
    size: auto;
    margin: 25px 0 25px 0;
  }
  </style>
  <style type="text/css" media="all">
  table {
    border-collapse: collapse;
    font-size: 12px;
  }
  table, th, td {
    border: 1px solid grey;
  }
  th, td {
    text-align: center;
    vertical-align: middle;
  }
  p {
    font-weight: bold;
    margin-left:20px;
  }
  table {
    width:94%;
    margin-left:3%;
    margin-right:3%;
  }
  div.bs-table-print {
    text-align:center;
  }
  </style>
  </head>
  <title>Print Table</title>
  <body>
  <p>Printed on: ${new Date} </p>
  <div class="bs-table-print">${table}</div>
  </body>
  </html>`
}

$.extend($.fn.bootstrapTable.locales, {
  formatPrint () {
    return 'Print'
  }
})
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.extend($.fn.bootstrapTable.defaults, {
  showPrint: false,
  printAsFilteredAndSortedOnUI: true,
  printSortColumn: undefined,
  printSortOrder: 'asc',
  printPageBuilder (table) {
    return printPageBuilderDefault(table)
  }
})

$.extend($.fn.bootstrapTable.COLUMN_DEFAULTS, {
  printFilter: undefined,
  printIgnore: false,
  printFormatter: undefined
})

$.extend($.fn.bootstrapTable.defaults.icons, {
  print: {
    bootstrap3: 'glyphicon-print icon-share',
    'bootstrap-table': 'icon-printer'
  }[$.fn.bootstrapTable.theme] || 'fa-print'
})

$.BootstrapTable = class extends $.BootstrapTable {
  init (...args) {
    super.init(...args)

    if (!this.options.showPrint) {
      return
    }

    this.mergedCells = []
  }

  initToolbar (...args) {
    this.showToolbar = this.showToolbar || this.options.showPrint

    if (this.options.showPrint) {
      this.buttons = Object.assign(this.buttons, {
        print: {
          text: this.options.formatPrint(),
          icon: this.options.icons.print,
          event: () => {
            this.doPrint(this.options.printAsFilteredAndSortedOnUI ? this.getData() : this.options.data.slice(0))
          },
          attributes: {
            'aria-label': this.options.formatPrint(),
            title: this.options.formatPrint()
          }
        }
      })
    }

    super.initToolbar(...args)
  }

  mergeCells (options) {
    super.mergeCells(options)

    if (!this.options.showPrint) {
      return
    }

    let col = this.getVisibleFields().indexOf(options.field)

    if (Utils.hasDetailViewIcon(this.options)) {
      col += 1
    }

    this.mergedCells.push({
      row: options.index,
      col,
      rowspan: options.rowspan || 1,
      colspan: options.colspan || 1
    })
  }

  doPrint (data) {
    const formatValue = (row, i, column) => {
      const value = Utils.calculateObjectValue(column, column.printFormatter,
        [row[column.field], row, i], row[column.field])

      return typeof value === 'undefined' || value === null ?
        this.options.undefinedText : value
    }

    const buildTable = (data, columnsArray) => {
      const dir = this.$el.attr('dir') || 'ltr'
      const html = [`<table dir="${dir}"><thead>`]

      for (const columns of columnsArray) {
        html.push('<tr>')
        for (let h = 0; h < columns.length; h++) {
          if (!columns[h].printIgnore) {
            html.push(
              `<th
              ${Utils.sprintf(' rowspan="%s"', columns[h].rowspan)}
              ${Utils.sprintf(' colspan="%s"', columns[h].colspan)}
              >${columns[h].title}</th>`)
          }
        }
        html.push('</tr>')
      }

      html.push('</thead><tbody>')

      const dontRender = []

      if (this.mergedCells) {
        for (let mc = 0; mc < this.mergedCells.length; mc++) {
          const currentMergedCell = this.mergedCells[mc]

          for (let rs = 0; rs < currentMergedCell.rowspan; rs++) {
            const row = currentMergedCell.row + rs

            for (let cs = 0; cs < currentMergedCell.colspan; cs++) {
              const col = currentMergedCell.col + cs

              dontRender.push(`${row },${ col}`)
            }
          }
        }
      }

      for (let i = 0; i < data.length; i++) {
        html.push('<tr>')

        const columns = columnsArray.flat(1)

        columns.sort((c1, c2) => {
          return c1.colspanIndex - c2.colspanIndex
        })

        for (let j = 0; j < columns.length; j++) {
          if (columns[j].colspanGroup > 0) continue

          let rowspan = 0
          let colspan = 0

          if (this.mergedCells) {
            for (let mc = 0; mc < this.mergedCells.length; mc++) {
              const currentMergedCell = this.mergedCells[mc]

              if (currentMergedCell.col === j && currentMergedCell.row === i) {
                rowspan = currentMergedCell.rowspan
                colspan = currentMergedCell.colspan
              }
            }
          }

          if (
            !columns[j].printIgnore && columns[j].field &&
              (
                !dontRender.includes(`${i },${ j}`) ||
                (rowspan > 0 && colspan > 0)
              )
          ) {
            if (rowspan > 0 && colspan > 0) {
              html.push(`<td ${Utils.sprintf(' rowspan="%s"', rowspan)} ${Utils.sprintf(' colspan="%s"', colspan)}>`, formatValue(data[i], i, columns[j]), '</td>')
            } else {
              html.push('<td>', formatValue(data[i], i, columns[j]), '</td>')
            }
          }
        }


        html.push('</tr>')
      }

      html.push('</tbody>')
      if (this.options.showFooter) {
        html.push('<footer><tr>')

        for (const columns of columnsArray) {
          for (let h = 0; h < columns.length; h++) {
            if (!columns[h].printIgnore) {
              const footerData = Utils.trToData(columns, this.$el.find('>tfoot>tr'))
              const footerValue = Utils.calculateObjectValue(columns[h], columns[h].footerFormatter, [data], footerData[0] && footerData[0][columns[h].field] || '')

              html.push(`<th>${footerValue}</th>`)
            }
          }
        }

        html.push('</tr></footer>')
      }
      html.push('</table>')
      return html.join('')
    }

    const sortRows = (data, colName, sortOrder) => {
      if (!colName) {
        return data
      }
      let reverse = sortOrder !== 'asc'

      reverse = -((+reverse) || -1)
      return data.sort((a, b) => reverse * (a[colName].localeCompare(b[colName])))
    }

    const filterRow = (row, filters) => {
      for (let index = 0; index < filters.length; ++index) {
        if (row[filters[index].colName] !== filters[index].value) {
          return false
        }
      }
      return true
    }

    const filterRows = (data, filters) => data.filter(row => filterRow(row, filters))
    const getColumnFilters = columns => !columns || !columns[0] ? [] : columns[0].filter(col => col.printFilter).map(col => ({
      colName: col.field,
      value: col.printFilter
    }))

    data = filterRows(data, getColumnFilters(this.options.columns))
    data = sortRows(data, this.options.printSortColumn, this.options.printSortOrder)
    const table = buildTable(data, this.options.columns)
    const newWin = window.open('')

    newWin.document.write(this.options.printPageBuilder.call(this, table))
    newWin.document.close()
    newWin.focus()
    newWin.print()
    newWin.close()
  }
}
