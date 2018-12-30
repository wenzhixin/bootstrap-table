/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/vitalets/x-editable
 */

($ => {
  const Utils = $.fn.bootstrapTable.utils

  $.extend($.fn.bootstrapTable.defaults, {
    editable: true,
    onEditableInit () {
      return false
    },
    onEditableSave (field, row, oldValue, $el) {
      return false
    },
    onEditableShown (field, row, $el, editable) {
      return false
    },
    onEditableHidden (field, row, $el, reason) {
      return false
    }
  })

  $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
    'editable-init.bs.table': 'onEditableInit',
    'editable-save.bs.table': 'onEditableSave',
    'editable-shown.bs.table': 'onEditableShown',
    'editable-hidden.bs.table': 'onEditableHidden'
  })

  $.BootstrapTable = class extends $.BootstrapTable {
    initTable () {
      super.initTable()

      if (!this.options.editable) {
        return
      }

      $.each(this.columns, (i, column) => {
        if (!column.editable) {
          return
        }

        const editableOptions = {}
        const editableDataMarkup = []
        const editableDataPrefix = 'editable-'
        const processDataOptions = (key, value) => {
          // Replace camel case with dashes.
          const dashKey = key.replace(/([A-Z])/g, $1 => `-${$1.toLowerCase()}`)
          if (dashKey.indexOf(editableDataPrefix) === 0) {
            editableOptions[dashKey.replace(editableDataPrefix, 'data-')] = value
          }
        }

        $.each(this.options, processDataOptions)

        column.formatter = column.formatter || (value => value)
        column._formatter = column._formatter ? column._formatter : column.formatter
        column.formatter = (value, row, index) => {
          const result = Utils.calculateObjectValue(column,
            column._formatter, [value, row, index], value)

          $.each(column, processDataOptions)

          $.each(editableOptions, (key, value) => {
            editableDataMarkup.push(` ${key}="${value}"`)
          })

          let _dont_edit_formatter = false
          if (column.editable.hasOwnProperty('noeditFormatter')) {
            _dont_edit_formatter = column.editable.noeditFormatter(value, row, index)
          }

          if (_dont_edit_formatter === false) {
            return `<a href="javascript:void(0)"
              data-name="${column.field}"
              data-pk="${row[this.options.idField]}"
              data-value="${result}"
              ${editableDataMarkup.join('')}></a>`
          }
          return _dont_edit_formatter
        }
      })
    }

    initBody (fixedScroll) {
      super.initBody(fixedScroll)

      if (!this.options.editable) {
        return
      }

      $.each(this.columns, (i, column) => {
        if (!column.editable) {
          return
        }

        const data = this.getData()
        const $field = this.$body.find(`a[data-name="${column.field}"]`)

        $field.each((i, element) => {
          const $element = $(element)
          const $tr = $element.closest('tr')
          const index = $tr.data('index')
          const row = data[index]

          const editableOpts = Utils.calculateObjectValue(column,
            column.editable, [index, row, $element], {})

          $element.editable(editableOpts)
        })

        $field.off('save').on('save', ({currentTarget}, {submitValue}) => {
          const $this = $(currentTarget)
          const data = this.getData()
          const index = $this.parents('tr[data-index]').data('index')
          const row = data[index]
          const oldValue = row[column.field]

          $this.data('value', submitValue)
          row[column.field] = submitValue
          this.trigger('editable-save', column.field, row, oldValue, $this)
          this.resetFooter()
        })

        $field.off('shown').on('shown', ({currentTarget}, editable) => {
          const $this = $(currentTarget)
          const data = this.getData()
          const index = $this.parents('tr[data-index]').data('index')
          const row = data[index]

          this.trigger('editable-shown', column.field, row, $this, editable)
        })

        $field.off('hidden').on('hidden', ({currentTarget}, reason) => {
          const $this = $(currentTarget)
          const data = this.getData()
          const index = $this.parents('tr[data-index]').data('index')
          const row = data[index]

          this.trigger('editable-hidden', column.field, row, $this, reason)
        })
      })
      this.trigger('editable-init')
    }
  }

})(jQuery)
