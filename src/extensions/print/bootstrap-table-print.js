/**
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

function printPageBuilderDefault (table, styles) {
  return `
    <html>
    <head>
    ${styles}
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
      width: 94%;
      margin-left: 3%;
      margin-right: 3%;
    }
    div.bs-table-print {
      text-align: center;
    }
    table {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    </style>
    </head>
    <title>Print Table</title>
    <body>
    <p>Printed on: ${new Date} </p>
    <div class="bs-table-print">${table}</div>
    </body>
    </html>
  `
}

Object.assign($.fn.bootstrapTable.locales, {
  formatPrint () {
    return 'Print'
  }
})
Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

Object.assign($.fn.bootstrapTable.defaults, {
  showPrint: false,
  printAsFilteredAndSortedOnUI: true,
  printSortColumn: undefined,
  printSortOrder: 'asc',
  printStyles: [],
  printPageBuilder (table, styles) {
    return printPageBuilderDefault(table, styles)
  }
})

Object.assign($.fn.bootstrapTable.columnDefaults, {
  printFilter: undefined,
  printIgnore: false,
  printFormatter: undefined
})

Utils.assignIcons($.fn.bootstrapTable.icons, 'print', {
  glyphicon: 'glyphicon-print icon-share',
  fa: 'fa-print',
  bi: 'bi-printer',
  icon: 'icon-printer',
  'material-icons': 'print'
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
      rowspan: +options.rowspan || 1,
      colspan: +options.colspan || 1
    })
  }

  doPrint (data) {
    const canPrint = column => !column.printIgnore && column.visible

    const formatValue = (row, i, column) => {
      const value_ = Utils.getItemField(row, column.field, this.options.escape, column.escape)
      const value = Utils.calculateObjectValue(column,
        column.printFormatter || column.formatter,
        [value_, row, i], value_)

      return typeof value === 'undefined' || value === null ?
        this.options.undefinedText : $('<div>').html(value).html()
    }

    const getCellStyle = (row, i, column) => {
      const value_ = Utils.getItemField(row, column.field, this.options.escape, column.escape)
      const cellStyle = Utils.calculateObjectValue(this.header,
        this.header.cellStyles[column.fieldIndex],
        [value_, row, i, column.field], {})

      let attrs = ''

      const fieldClass = row[`_${column.field}_class`]
      const fieldStyle = row[`_${column.field}_style`]
      const classes = [fieldClass, cellStyle.classes].filter(Boolean)
      const styles = [fieldStyle, cellStyle.css].filter(Boolean)

      if (classes.length) {
        attrs += ` class="${Utils.escapeAttr(Utils.classToString(classes))}"`
      }

      if (styles.length) {
        const style = Utils.serializeStyle(styles)

        if (style) {
          attrs += ` style="${Utils.escapeAttr(style)}"`
        }
      }

      return attrs
    }

    const buildTable = (data, columnsArray) => {
      const dir = this.$el.attr('dir') || 'ltr'
      const html = [`<table dir="${dir}"><thead>`]

      for (const columns of columnsArray) {
        html.push('<tr>')
        for (let h = 0; h < columns.length; h++) {
          if (canPrint(columns[h])) {
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

      const notRender = []

      if (this.mergedCells) {
        for (let mc = 0; mc < this.mergedCells.length; mc++) {
          const currentMergedCell = this.mergedCells[mc]

          for (let rs = 0; rs < currentMergedCell.rowspan; rs++) {
            const row = currentMergedCell.row + rs

            for (let cs = 0; cs < currentMergedCell.colspan; cs++) {
              const col = currentMergedCell.col + cs

              notRender.push(`${row},${col}`)
            }
          }
        }
      }

      for (let i = 0; i < data.length; i++) {
        const rowStyle = Utils.calculateObjectValue(this.options,
          this.options.rowStyle, [data[i], i], {})

        let rowStyleAttr = ''

        if (rowStyle.classes) {
          rowStyleAttr += ` class="${Utils.escapeAttr(Utils.classToString(rowStyle.classes))}"`
        }

        if (rowStyle.css) {
          const style = Utils.serializeStyle(rowStyle.css)

          if (style) {
            rowStyleAttr += ` style="${Utils.escapeAttr(style)}"`
          }
        }

        if (!rowStyle.classes && data[i]._class) {
          rowStyleAttr += ` class="${Utils.escapeAttr(data[i]._class)}"`
        }

        if (!rowStyle.css && data[i]._style) {
          rowStyleAttr += ` style="${Utils.escapeAttr(data[i]._style)}"`
        }

        html.push(`<tr${rowStyleAttr}>`)

        const columns = columnsArray.flat(1)

        columns.sort((c1, c2) => c1.colspanIndex - c2.colspanIndex)

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
            canPrint(columns[j]) &&
            (
              !notRender.includes(`${i},${j}`) ||
              rowspan > 0 && colspan > 0
            )
          ) {
            if (rowspan > 0 && colspan > 0) {
              html.push(`<td${getCellStyle(data[i], i, columns[j])} ${Utils.sprintf(' rowspan="%s"', rowspan)} ${Utils.sprintf(' colspan="%s"', colspan)}>`, formatValue(data[i], i, columns[j]), '</td>')
            } else {
              html.push(`<td${getCellStyle(data[i], i, columns[j])}>`, formatValue(data[i], i, columns[j]), '</td>')
            }
          }
        }

        html.push('</tr>')
      }

      html.push('</tbody>')
      if (this.options.showFooter) {
        html.push('<tfoot><tr>')

        const columns = columnsArray.flat(1).filter(column => !(column.colspanGroup > 0))

        columns.sort((c1, c2) => c1.colspanIndex - c2.colspanIndex)
        const footerData = Utils.trToData(columns, this.$el.find('>tfoot>tr').get())

        for (const column of columns) {
          if (canPrint(column)) {
            const footerValue = Utils.calculateObjectValue(column, column.footerFormatter, [data], footerData[0] && footerData[0][column.field] || '')

            html.push(`<th>${footerValue}</th>`)
          }
        }

        html.push('</tr></tfoot>')
      }
      html.push('</table>')
      return html.join('')
    }

    const sortRows = (data, colName, sortOrder) => {
      if (!colName) {
        return data
      }
      let reverse = sortOrder !== 'asc'

      reverse = -(+reverse || -1)
      return data.sort((a, b) => reverse * a[colName].localeCompare(b[colName]))
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

    if (!newWin) {
      return
    }

    const printStyles = typeof this.options.printStyles === 'string' ?
      this.options.printStyles.replace(/\[|\]| /g, '').toLowerCase().split(',') :
      this.options.printStyles
    const startPrint = () => {
      newWin.focus()
      newWin.addEventListener('afterprint', () => {
        newWin.close()
      }, { once: true })
      newWin.print()
    }

    const styles = printStyles.length ?
      printStyles.map(s => `<link rel="stylesheet" href="${s}" />`).join('') : ''

    const calculatedPrintPage = Utils.calculateObjectValue(this, this.options.printPageBuilder,
      [table, styles], printPageBuilderDefault(table, styles))

    newWin.document.write(calculatedPrintPage)
    newWin.document.close()

    const links = newWin.document.querySelectorAll('link[rel="stylesheet"]')

    if (!links.length) {
      startPrint()
    } else {
      let loadedCount = 0
      const totalStyles = links.length

      const checkDone = () => {
        loadedCount++
        if (loadedCount === totalStyles) {
          startPrint()
        }
      }

      for (const link of links) {
        if (link.sheet) {
          checkDone()
        } else {
          link.addEventListener('load', checkDone)
          link.addEventListener('error', checkDone)
        }
      }
    }
  }
}
