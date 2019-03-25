/**
 * @author andrey matveev <aamatveef@gmail.com>
 * @version: v1.1.0
 * https://github.com/aamatveev/bootstrap-table
 * extensions: 
 */

!function ($) {

    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        cellInputEnabled: false,
        cellInputType: "text", // text or select or textarea
        cellInputUniqueId: "",
        cellInputSelectOptinons: [], // [{ text: '', value: '', disabled: false, default: true },{}]
        cellInputIsDeciaml: false,
        onCellInputInit: function () {
            return false
        },
        onCellInputBlur: function (field, row, oldValue, $el) {
            return false
        },
        onCellInputFocus: function (field, row, oldValue, $el) {
            return false
        },
        onCellInputKeyup: function (field, row, oldValue, $el) {
            return false
        },
        onCellInputKeydown: function (field, row, oldValue, $el) {
                return false
        },
        onCellInputSelectChange: function (field, row, oldValue, $el) {
            return false
        },
    })

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'cellinput-init.bs.table': 'onCellInputInit',
        'cellinput-blur.bs.table': 'onCellInputBlur',
        'cellinput-focus.bs.table': 'onCellInputFocus',
        'cellinput-keyup.bs.table': 'onCellInputKeyup',
        'cellinput-keydown.bs.table': 'onCellInputKeydown',
        'cellinput-selectchange.bs.table': 'onCellInputSelectChange'
    })

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initTable = BootstrapTable.prototype.initTable,
        _initBody = BootstrapTable.prototype.initBody

    BootstrapTable.prototype.initTable = function () {
        var that = this
        _initTable.apply(this, Array.prototype.slice.apply(arguments))

        // exit if table.options.cellInputEnabled = false
        if (!this.options.cellInputEnabled) {
            return
        }

        $.each(this.columns, function (i, column) {
            
            // exit if column.cellInputEnabled = false
            if(!column.cellInputEnabled){
                return
            }

            if (column.cellInputType === "text") {
                var _formatter = column.formatter
                column.formatter = function (value, row, index) {
                    var result = _formatter ? _formatter(value, row, index) : value
                    
                    // Решает проблему невозможности ввода кавычек &quot;
                    result = typeof result === "string" ? result.replace(/"/g, '&quot;') : result

                    var isSetDataUniqueIdAttr = column.cellInputUniqueId && column.cellInputUniqueId.length > 0
                    var disableCallbackFunc = column.cellInputDisableCallbackFunc
                    return ['<input type="text" class="table-td-textbox form-control"',
                        //' id="' + column.field + '"',
                        isSetDataUniqueIdAttr ? ' data-uniqueid="' + row[column.cellInputUniqueId] + '"' : "",
                        ' data-name="' + column.field + '"',
                        ' data-value="' + result + '"',
                        ' value="' + result + '"',
                        ' autofocus="autofocus"',
                        typeof disableCallbackFunc !== "undefined" && disableCallbackFunc(row) ? ' disabled="disabled"' : '',
                        '>'
                    ].join('')
                }
            } else if (column.cellInputType === "select") {

                var _formatter = column.formatter
                column.formatter = function (value, row, index) {
                    
                    var result = _formatter ? _formatter(value, row, index) : value
                    var optionDatas = column.cellInputSelectOptinons!= null ? column.cellInputSelectOptinons : []
                    var selectoptions = []

                    var arrAllowedValues = []
                    for (var k = 0; k < optionDatas.length; k++) {
                        arrAllowedValues.push(optionDatas[k].value)
                    }
                    var allowedVal = $.inArray(value, arrAllowedValues) >= 0
                    
                    for (var j = 0; j < optionDatas.length; j++) {
                        var optionData = optionDatas[j]
                        var isSelected = optionData.value === value
                        if (!allowedVal && optionData.disabled) {
                            isSelected = true
                            result = optionData.value
                        }

                        selectoptions.push('<option value="' + optionData.value + '" ' + (isSelected ? ' selected="selected" ' : '') + (optionData.disabled ? ' disabled' : '') + '>' + optionData.text + '</option>');
                    }

                    var isSetDataUniqueIdAttr = column.cellInputUniqueId && column.cellInputUniqueId.length > 0
                    var disableCallbackFunc = column.disableCallbackFunc
                    return [
                        '<select class="form-control" style="padding: 4px;"',
                        isSetDataUniqueIdAttr ? ' data-uniqueid="' + row[column.cellInputUniqueId] + '"' : "",
                        ' data-name="' + column.field + '"',
                        ' data-value="' + result + '"',
                        typeof disableCallbackFunc !== "undefined" && disableCallbackFunc(row) ? ' disabled="disabled"' : '',
                        '>',
                        selectoptions.join(''),
                        '</select>'
                    ].join('')
                }
            }else if (column.cellInputType === "textarea") {

            } else {
                return
            }

        })
    }

    BootstrapTable.prototype.initBody = function (fixedScroll) {
        var that = this
        _initBody.apply(this, Array.prototype.slice.apply(arguments))

        if (!this.options.cellInputEnabled) {
            return
        }

        $.each(this.columns, function (i, column) {
            if (column.cellInputType === "text") {
                that.$body.find('input[data-name="' + column.field + '"]')
                .off('blur').on('blur', function (e) {
                    var data = that.getData(),
                        index = $(this).parents('tr[data-index]').data('index'),
                        row = data[index],
                        newValue = $(this).val()

                    row[column.field] = newValue
                    that.trigger('cellinput-blur', column.field, row, $(this))
                })

                that.$body.find('input[data-name="' + column.field + '"]')
                    .off('keyup').on('keyup', function (e) {
                        var data = that.getData(),
                            index = $(this).parents('tr[data-index]').data('index'),
                            row = data[index],
                            oldValue = row[column.field],
                            newValue = $(this).val()

                        row[column.field] = newValue
                        that.trigger('cellinput-keyup', column.field, row, oldValue, index, $(this))
                    })

                that.$body.find('input[data-name="' + column.field + '"]')
                    .off('keydown').on('keydown', function (e) {
                        var data = that.getData(),
                            index = $(this).parents('tr[data-index]').data('index'),
                            row = data[index],
                            oldValue = row[column.field],
                            newValue = $(this).val()

                        if (!column.tdtexboxIsDeciaml) {
                            row[column.field] = newValue
                        }

                        that.trigger('cellinput-keydown', column.field, row, oldValue, index, $(this))
                    })
                
                that.$body.find('input[data-name="' + column.field + '"]')
                    .off('focus').on('focus', function (e) {
                        var data = that.getData(),
                            index = $(this).parents('tr[data-index]').data('index'),
                            row = data[index]

                        that.trigger('cellinput-focus', column.field, row, $(this))
                    })
            } else if (column.cellInputType === "select") {

                that.$body.find('select[data-name="' + column.field + '"]')
                    .off('change').on('change', function (e) {

                        var data = that.getData(),
                            index = $(this).parents('tr[data-index]').data('index'),
                            row = data[index],
                            oldValue = row[column.field],
                            newValue = $(this).val()

                        var isBoolTrue = newValue.toLowerCase() === 'true'
                        var isBoolFalse = newValue.toLowerCase() === 'false'

                        row[column.field] = isBoolTrue ? true : (isBoolFalse) ? false : newValue
                        that.trigger('cellinput-selectchange', column.field, row, oldValue, index, $(this))
                    })
            } else if (column.cellInputType === "textarea"){
                
            }

        })
        this.trigger('cellinput-init')
    }

}(jQuery)
