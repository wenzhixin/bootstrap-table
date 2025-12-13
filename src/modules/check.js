import Utils from '../utils/index.js'

export default {
  updateSelected () {
    const checkAll = this.$selectItem.filter(':enabled').length &&
      this.$selectItem.filter(':enabled').length ===
      this.$selectItem.filter(':enabled').filter(':checked').length

    this.$selectAll.add(this.$selectAll_).prop('checked', checkAll)

    this.$selectItem.each((i, el) => {
      $(el).closest('tr')[$(el).prop('checked') ? 'addClass' : 'removeClass']('selected')
    })
  },

  isSelectionColumn (column) {
    return column.radio || column.checkbox
  },

  getSelections () {
    return (this.options.maintainMetaData ? this.options.data : this.data)
      .filter(row => row[this.header.stateField] === true)
  },

  updateRows () {
    this.$selectItem.each((i, el) => {
      this.data[$(el).data('index')][this.header.stateField] = $(el).prop('checked')
    })
  },

  resetRows () {
    if (this.data.length) {
      this.$selectAll.prop('checked', false)
      this.$selectItem.prop('checked', false)
    }
    if (this.header.stateField) {
      for (const row of this.data) {
        row[this.header.stateField] = false
      }
    }
    this.initHiddenRows()
  },

  checkAll () {
    this._toggleCheckAll(true)
  },

  uncheckAll () {
    this._toggleCheckAll(false)
  },

  _toggleCheckAll (checked) {
    const rowsBefore = this.getSelections()

    this.$selectAll.add(this.$selectAll_).prop('checked', checked)
    this.$selectItem.filter(':enabled').prop('checked', checked)
    this.updateRows()
    this.updateSelected()

    const rowsAfter = this.getSelections()

    if (checked) {
      this.trigger('check-all', rowsAfter, rowsBefore)
      return
    }

    this.trigger('uncheck-all', rowsAfter, rowsBefore)
  },

  checkInvert () {
    const $items = this.$selectItem.filter(':enabled')
    let checked = $items.filter(':checked')

    $items.each((i, el) => {
      $(el).prop('checked', !$(el).prop('checked'))
    })
    this.updateRows()
    this.updateSelected()
    this.trigger('uncheck-some', checked)
    checked = this.getSelections()
    this.trigger('check-some', checked)
  },

  check (index) {
    this._toggleCheck(true, index)
  },

  uncheck (index) {
    this._toggleCheck(false, index)
  },

  _toggleCheck (checked, index) {
    const $el = this.$selectItem.filter(`[data-index="${index}"]`)
    const row = this.data[index]

    if (
      $el.is(':radio') ||
      this.options.singleSelect ||
      this.options.multipleSelectRow &&
      !this.multipleSelectRowCtrlKey &&
      !this.multipleSelectRowShiftKey
    ) {
      for (const r of this.options.data) {
        r[this.header.stateField] = false
      }
      this.$selectItem.filter(':checked').not($el).prop('checked', false)
    }

    row[this.header.stateField] = checked

    if (this.options.multipleSelectRow) {
      if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0) {
        const [fromIndex, toIndex] = this.multipleSelectRowLastSelectedIndex < index ?
          [this.multipleSelectRowLastSelectedIndex, index] : [index, this.multipleSelectRowLastSelectedIndex]

        for (let i = fromIndex + 1; i < toIndex; i++) {
          this.data[i][this.header.stateField] = true
          this.$selectItem.filter(`[data-index="${i}"]`).prop('checked', true)
        }
      }

      this.multipleSelectRowCtrlKey = false
      this.multipleSelectRowShiftKey = false
      this.multipleSelectRowLastSelectedIndex = checked ? index : -1
    }

    $el.prop('checked', checked)
    this.updateSelected()
    this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el)
  },

  checkBy (obj) {
    this._toggleCheckBy(true, obj)
  },

  uncheckBy (obj) {
    this._toggleCheckBy(false, obj)
  },

  _toggleCheckBy (checked, obj) {
    if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
      return
    }

    const rows = []

    this.data.forEach((row, i) => {
      if (!row.hasOwnProperty(obj.field)) {
        return false
      }
      if (obj.values.includes(row[obj.field])) {
        let $el = this.$selectItem.filter(':enabled')
          .filter(Utils.sprintf('[data-index="%s"]', i))
        const onlyCurrentPage = obj.hasOwnProperty('onlyCurrentPage') ? obj.onlyCurrentPage : false

        $el = checked ? $el.not(':checked') : $el.filter(':checked')

        if (!$el.length && onlyCurrentPage) {
          return
        }

        $el.prop('checked', checked)
        row[this.header.stateField] = checked
        rows.push(row)
        this.trigger(checked ? 'check' : 'uncheck', row, $el)
      }
    })
    this.updateSelected()
    this.trigger(checked ? 'check-some' : 'uncheck-some', rows)
  }
}
