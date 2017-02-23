/**
 * @author horken wong <horken.wong@gmail.com>
 * @version: v1.0.0
 * https://github.com/horkenw/bootstrap-table
 * Click to edit row for bootstrap-table
 */
 
(function ($) {
    'use strict';
 
    $.extend($.fn.bootstrapTable.defaults, {
        clickEdit: false
    });
 
    function setSelectOptions(node, options){
        var $option = $('<option />');
        if(options){
            $(options).each(function(i, v){
                $option.clone().text(v.idxNum + ' ' + v.name).val(v.idxNum + v.name).appendTo(node);
            })
        }
        else{
            console.log('Please setup options first!!')
        }
    }
 
    function clickToEdit(evt, tarNode){
        var txt = [], table = evt,
            submit = '<button type="button" class="btn btn-primary btn-sm editable-submit"><i class="glyphicon glyphicon-ok"></i></button>',
            cancel = '<button type="button" class="btn btn-default btn-sm editable-cancel"><i class="glyphicon glyphicon-remove"></i></button>';
        table.editField = [];
 
        var replaceData = function(){
            var txt = [], updateData=[], fieldName=[];
 
            // dynamic get all field name from [data-fieldname] for use on update
            tarNode.find('td').find('[data-fieldname]').each(function(i, td){
                if($(td).eq(0).find('input').length){
                    fieldName.push($(td).eq(0).data('fieldname'));
                    txt.push($(td).eq(0).find('input').val());
                }
                if($(td).eq(0).find('select').length){
                    fieldName.push($(td).eq(0).data('fieldname'));
                    txt.push($(td).eq(0).find('select').val());
                }
            });
            // Combine field name and value for updateRow
            updateData = txt.reduce(function(result, field, index) {
                            result[fieldName[index]] = field;
                            return result;
                        }, {});
             
            $('#table').bootstrapTable('updateRow', {
                index: table.$data.trId,
                row: updateData
            });
            $('#tooling').remove();
            table.editing = true;
            // updateToServerSide(table.$data.itemid, txt);
            return false;
        };
 
        var recoveryData = function(){
          $('#table').bootstrapTable('updateRow', {
                index: table.$data.thId,
                row: {},
            });
          $('#tooling').remove();
          table.editing = true;
          return false;
        };
 
        if(table.editing){
            var  rootid = 0;
            table.editing = false;
            table.columns.forEach(function(column, i){
                if (!column.editable) return;
 
                switch(column.editable){
                    case 'input':
                        var div=$('<div class="editable-input col-md-8 col-sm-8 col-xs-8" data-fieldName='+column.field+'/>');
                        txt.push(tarNode.find('td').eq(column.fieldIndex).text());
                        div.append($('<input type="text" class="form-control input-sm"/>'));
                        div.append($('<span class="clear"><i class="fa fa-times-circle-o" aria-hidden="true"></i></span>'));
                        tarNode.find('td').eq(column.fieldIndex).text('').append(div);
                        break;
                    case 'select':
                        var div=$('<div class="col-md-10 col-sm-10 col-xs-10" data-fieldName='+column.field+'/>'),
                        select=$('<select id="'+column.field+'" class="form-control" >'), options = $.selectArray[column.field];
                        div.append(select);
                        tarNode.find('td').eq(column.fieldIndex).text('').append(div);
                        setSelectOptions($('#'+column.field), options);
                        break;
                    case 'textarea':

                        break;
                    default:
                        break;
                }
 
            }, evt);
            for(var i=0, l=txt.length; i<l; i++){
                tarNode.find('input[type="text"]').eq(i).val(txt[i]);
            }
            tarNode.find('td').last().append('<div id="tooling" class="editable-buttons"/>');
            $('.clear').on('click', function(){ $(this).parent().find('input').val('');});
            $(submit).on('click', replaceData).appendTo('#tooling');
            $(cancel).on('click', recoveryData).appendTo('#tooling');
        }
    }
 
    function updateToServerSide(item, data){
        var itemid = $(item).find('a').attr('href').match(/\d+/g)[0];
        var datas = {'treeId': itemid, 'oldTreeSerialNo': data[0], 'adminDivision': data[2], 'adminUnit': data[3], 'treeAddr': data[1]}; //傳送至伺服器端的Data產生處，需手動修改對應表格
        store( 'data/update', datas)
    }
 
    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initTable = BootstrapTable.prototype.initTable,
        _initBody = BootstrapTable.prototype.initBody;
 
    BootstrapTable.prototype.initTable = function(){
        var that = this;
        this.$data = {};
        _initTable.apply(this, Array.prototype.slice.apply(arguments));
 
        if (!this.options.clickEdit) {
            return;
        }
 
    };
 
    BootstrapTable.prototype.initBody = function () {
        var that = this;
        _initBody.apply(this, Array.prototype.slice.apply(arguments));
 
        if (!this.options.clickEdit) {
            return;
        }
 
        var table = this.$tableBody.find('table');
        that.editing=true;
 
        table.on('click-row.bs.table', function (e, row, $element, field) {
            if(field ==='no') return; //|| field ==='noOld'
 
            this.$data.trId = $element.data().index;
            clickToEdit(this, $element);
        }.bind(this));
    };
})(jQuery);