/**
 * @author andrey matveev <aamatveef@gmail.com>
 * @version: v1.1.0
 * https://github.com/aamatveev/bootstrap-table
 * extensions:
 */

$.extend($.fn.bootstrapTable.defaults, {
  cellInputEnabled: false,
  cellInputType: 'text', // text or select or textarea
  cellInputUniqueId: '',
  cellInputSelectOptinons: [], // [{ text: '', value: '', disabled: false, default: true },{}]
  cellInputIsDeciaml: false,
  onCellInputInit () {
    return false
  },
  onCellInputBlur (field, row, oldValue, $el) {
    return false
  },
  onCellInputFocus (field, row, oldValue, $el) {
    return false
  },
  onCellInputKeyup (field, row, oldValue, $el) {
    return false
  },
  onCellInputKeydown (field, row, oldValue, $el) {
    return false
  },
  onCellInputSelectChange (field, row, oldValue, $el) {
    return false
  }
})

$.extend($.fn.bootstrapTable.Constructor.EVENTS, {
  'cellinput-init.bs.table': 'onCellInputInit',
  'cellinput-blur.bs.table': 'onCellInputBlur',
  'cellinput-focus.bs.table': 'onCellInputFocus',
  'cellinput-keyup.bs.table': 'onCellInputKeyup',
  'cellinput-keydown.bs.table': 'onCellInputKeydown',
  'cellinput-selectchange.bs.table': 'onCellInputSelectChange'
})

const BootstrapTable = $.fn.bootstrapTable.Constructor
const _initTable = BootstrapTable.prototype.initTable
const _initBody = BootstrapTable.prototype.initBody

BootstrapTable.prototype.initTable = function (...args) {
  _initTable.apply(this, Array.prototype.slice.apply(args))

  // exit if table.options.cellInputEnabled = false
  if (!this.options.cellInputEnabled) {
    return
  }

  $.each(this.columns, (i, column) => {

    // exit if column.cellInputEnabled = false
    if (!column.cellInputEnabled) {
      return
    }
    const _formatter = column.formatter
    if (column.cellInputType === 'text') {
      column.formatter = (value, row, index) => {
        let result = _formatter ? _formatter(value, row, index) : value

        // Решает проблему невозможности ввода кавычек &quot;
        result = typeof result === 'string' ? result.replace(/"/g, '&quot;') : result

        const isSetDataUniqueIdAttr = column.cellInputUniqueId && column.cellInputUniqueId.length > 0
        const disableCallbackFunc = column.cellInputDisableCallbackFunc
        return ['<input type="text" class="table-td-textbox form-control"',
          // ' id="' + column.field + '"',
          isSetDataUniqueIdAttr ? ` data-uniqueid="${row[column.cellInputUniqueId]}"` : '',
          ` data-name="${column.field}"`,
          ` data-value="${result}"`,
          ` value="${result}"`,
          ' autofocus="autofocus"',
          typeof disableCallbackFunc !== 'undefined' && disableCallbackFunc(row) ? ' disabled="disabled"' : '',
          '>'
        ].join('')
      }
    } else if (column.cellInputType === 'select') {
      column.formatter = (value, row, index) => {
        let result = _formatter ? _formatter(value, row, index) : value
        const optionDatas = column.cellInputSelectOptinons !== null ? column.cellInputSelectOptinons : []
        const selectoptions = []

        const arrAllowedValues = []
        for (let k = 0; k < optionDatas.length; k++) {
          arrAllowedValues.push(optionDatas[k].value)
        }
        const allowedVal = $.inArray(value, arrAllowedValues) >= 0

        for (const optionData of optionDatas) {
          let isSelected = optionData.value === value
          if (!allowedVal && optionData.disabled) {
            isSelected = true
            result = optionData.value
          }

          selectoptions.push(`<option value="${optionData.value}" ${isSelected ? ' selected="selected" ' : ''}${optionData.disabled ? ' disabled' : ''}>${optionData.text}</option>`)
        }

        const isSetDataUniqueIdAttr = column.cellInputUniqueId && column.cellInputUniqueId.length > 0
        const disableCallbackFunc = column.disableCallbackFunc
        return [
          '<select class="form-control" style="padding: 4px;"',
          isSetDataUniqueIdAttr ? ` data-uniqueid="${row[column.cellInputUniqueId]}"` : '',
          ` data-name="${column.field}"`,
          ` data-value="${result}"`,
          typeof disableCallbackFunc !== 'undefined' && disableCallbackFunc(row) ? ' disabled="disabled"' : '',
          '>',
          selectoptions.join(''),
          '</select>'
        ].join('')
      }
    }
  })
}

BootstrapTable.prototype.initBody = function (fixedScroll) {
  const that = this
  _initBody.apply(this, Array.prototype.slice.apply(arguments))

  if (!this.options.cellInputEnabled) {
    return
  }

  $.each(this.columns, (i, column) => {
    if (column.cellInputType === 'text') {
      that.$body.find(`input[data-name="${column.field}"]`)
        .off('blur').on('blur', function (e) {
          const data = that.getData()
          const index = $(this).parents('tr[data-index]').data('index')
          const row = data[index]
          const newValue = $(this).val()

          row[column.field] = newValue
          that.trigger('cellinput-blur', column.field, row, $(this))
        })

      that.$body.find(`input[data-name="${column.field}"]`)
        .off('keyup').on('keyup', function (e) {
          const data = that.getData()
          const index = $(this).parents('tr[data-index]').data('index')
          const row = data[index]
          const oldValue = row[column.field]
          const newValue = $(this).val()

          row[column.field] = newValue
          that.trigger('cellinput-keyup', column.field, row, oldValue, index, $(this))
        })

      that.$body.find(`input[data-name="${column.field}"]`)
        .off('keydown').on('keydown', function (e) {
          const data = that.getData()
          const index = $(this).parents('tr[data-index]').data('index')
          const row = data[index]
          const oldValue = row[column.field]
          const newValue = $(this).val()

          if (!column.tdtexboxIsDeciaml) {
            row[column.field] = newValue
          }

          that.trigger('cellinput-keydown', column.field, row, oldValue, index, $(this))
        })

      that.$body.find(`input[data-name="${column.field}"]`)
        .off('focus').on('focus', function (e) {
          const data = that.getData()
          const index = $(this).parents('tr[data-index]').data('index')
          const row = data[index]

          that.trigger('cellinput-focus', column.field, row, $(this))
        })
    } else if (column.cellInputType === 'select') {

      that.$body.find(`select[data-name="${column.field}"]`)
        .off('change').on('change', function (e) {

          const data = that.getData()
          const index = $(this).parents('tr[data-index]').data('index')
          const row = data[index]
          const oldValue = row[column.field]
          const newValue = $(this).val()

          const isBoolTrue = newValue.toLowerCase() === 'true'
          const isBoolFalse = newValue.toLowerCase() === 'false'

          row[column.field] = isBoolTrue ? true : (isBoolFalse) ? false : newValue
          that.trigger('cellinput-selectchange', column.field, row, oldValue, index, $(this))
        })
    }
  })
  this.trigger('cellinput-init')
}
