/**
 * @author Homer Glascock <HopGlascock@gmail.com>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

Object.assign($.fn.bootstrapTable.locales, {
  formatCopyRows () {
    return 'Copy Rows'
  }
})
Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

Object.assign($.fn.bootstrapTable.defaults.icons, {
  copy: {
    bootstrap3: 'glyphicon-copy icon-pencil',
    bootstrap5: 'bi-clipboard',
    materialize: 'content_copy',
    'bootstrap-table': 'icon-copy'
  }[$.fn.bootstrapTable.theme] || 'fa-copy'
})

const copyText = text => {
  const textField = document.createElement('textarea')

  $(textField).html(text)
  document.body.appendChild(textField)
  textField.select()

  try {
    document.execCommand('copy')
  } catch (e) {
    console.warn('Oops, unable to copy')
  }
  $(textField).remove()
}

Object.assign($.fn.bootstrapTable.defaults, {
  showCopyRows: false,
  copyWithHidden: false,
  copyDelimiter: ', ',
  copyNewline: '\n'
})

Object.assign($.fn.bootstrapTable.columnDefaults, {
  ignoreCopy: false,
  rawCopy: false
})

$.fn.bootstrapTable.methods.push(
  'copyColumnsToClipboard'
)

$.BootstrapTable = class extends $.BootstrapTable {

  initToolbar (...args) {
    if (this.options.showCopyRows && this.header.stateField) {
      this.buttons = Object.assign(this.buttons, {
        copyRows: {
          text: this.options.formatCopyRows(),
          icon: this.options.icons.copy,
          event: this.copyColumnsToClipboard,
          attributes: {
            'aria-label': this.options.formatCopyRows(),
            title: this.options.formatCopyRows()
          }
        }
      })
    }

    super.initToolbar(...args)
    this.$copyButton = this.$toolbar.find('>.columns [name="copyRows"]')

    if (this.options.showCopyRows && this.header.stateField) {
      this.updateCopyButton()
    }
  }

  copyColumnsToClipboard () {
    const rows = []

    $.each(this.getSelections(), (index, row) => {
      const cols = []

      $.each(this.options.columns[0], (indy, column) => {
        if (
          column.field !== this.header.stateField &&
          (!this.options.copyWithHidden || this.options.copyWithHidden && column.visible) &&
          !column.ignoreCopy
        ) {
          if (row[column.field] !== null) {
            const columnValue = column.rawCopy ? row[column.field] : Utils.calculateObjectValue(column, this.header.formatters[indy], [row[column.field], row, index], row[column.field])

            cols.push(columnValue)
          }
        }
      })
      rows.push(cols.join(this.options.copyDelimiter))
    })

    copyText(rows.join(this.options.copyNewline))
  }

  updateSelected () {
    super.updateSelected()
    this.updateCopyButton()
  }

  updateCopyButton () {
    if (this.options.showCopyRows && this.header.stateField && this.$copyButton) {
      this.$copyButton.prop('disabled', !this.getSelections().length)
    }
  }
}
