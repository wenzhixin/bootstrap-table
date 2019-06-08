/**
 * @author Homer Glascock <HopGlascock@gmail.com>
 * @update zhixin wen <wenzhixin2010@gmail.com>
 */

const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults.icons, {
  copy: {
    bootstrap3: 'glyphicon-copy icon-pencil',
    materialize: 'content_copy'
  }[$.fn.bootstrapTable.theme] || 'fa-copy'
})

const copyText = text => {
  const textField = document.createElement('textarea')
  $(textField).html(text)
  document.body.appendChild(textField)
  textField.select()

  try {
    document.execCommand('copy')
  }
  catch (e) {
    console.log('Oops, unable to copy')
  }
  $(textField).remove()
}

$.extend($.fn.bootstrapTable.defaults, {
  showCopyRows: false,
  copyWithHidden: false,
  copyDelimiter: ', ',
  copyNewline: '\n'
})

$.fn.bootstrapTable.methods.push(
  'copyColumnsToClipboard'
)

$.BootstrapTable = class extends $.BootstrapTable {

  initToolbar (...args) {
    super.initToolbar(...args)

    const $btnGroup = this.$toolbar.find('>.columns')

    if (this.options.showCopyRows && this.header.stateField) {
      this.$copyButton = $(`
        <button class="${this.constants.buttonsClass}">
        ${Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.copy)}
        </button>
      `)
      $btnGroup.append(this.$copyButton)
      this.$copyButton.click(() => {
        this.copyColumnsToClipboard()
      })
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
          (!this.options.copyWithHidden ||
          this.options.copyWithHidden && column.visible)
        ) {
          if (row[column.field] !== null) {
            cols.push(Utils.calculateObjectValue(column, this.header.formatters[indy],
              [row[column.field], row, index], row[column.field]))
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
    this.$copyButton.prop('disabled', !this.getSelections().length)
  }
}
