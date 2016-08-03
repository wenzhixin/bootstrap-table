/**
 * @author horken wong <horken.wong@gmail.com>
 * @version: v1.0.0
 * https://github.com/horkenw/bootstrap-table
 * Click to edit row for bootstrap-table
 */

(function ($) {
    'use strict';

    // var sprintf = $.fn.bootstrapTable.utils.sprintf;
    $.extend($.fn.bootstrapTable.defaults, {
        clickEdit: true
    });

    function clikcToEdit(evt){
        var that = this, txt = [], table = evt.data,
            submit = '<button type="button" class="btn btn-primary btn-sm editable-submit"><i class="glyphicon glyphicon-ok"></i></button>',
            cancel = '<button type="button" class="btn btn-default btn-sm editable-cancel"><i class="glyphicon glyphicon-remove"></i></button>';
      
      var replaceData = function(){
        txt = [];
        $(that).find('td').find('input[type="text"]').each(function(i, td){
            txt.push($(td).eq(0).val());
            $(td.parentElement.parentElement).text(txt[i]);
        })
        table.editing = true;
        return false;
      }

      var recoveryData = function(){
        // txt = [];
        $(that).find('td').find('input[type="text"]').each(function(i, td){
            $(td.parentElement.parentElement).text(txt[i]);
        })
        $('#tooling').remove();
        table.editing = true;
        return false;
      }

      if(table.editing){
        table.editing = false;
        $.each(table.columns, function(i, column){
          if (!column.editable) return;

          var div=$('<div class="editable-input col-md-6 col-sm-6 col-xs-6" style="position: relative;"/>');
          txt.push($(that).find('td').eq(column.fieldIndex).text()); 
          div.append($('<input type="text" class="form-control input-sm"/>'));
          div.append($('<span class="clear"><i class="fa fa-times-circle-o" aria-hidden="true"></i></span>'));
          $(that).find('td').eq(column.fieldIndex).text('').append(div);
        });
        for(var i=0, l=txt.length; i<l; i++){
            $(that).find('input[type="text"]').eq(i).val(txt[i]);
        }
        $(that).find('td').last().append('<div id="tooling" class="editable-buttons"/>');
        $('.clear').on('click', function(){ $(this).parent().find('input').val('');})
        $(submit).on('click', replaceData).appendTo('#tooling');
        $(cancel).on('click', recoveryData).appendTo('#tooling');
      }      
    }

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initBody = BootstrapTable.prototype.initBody;

    BootstrapTable.prototype.initBody = function () {
        var that = this;
        _initBody.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.clickEdit) {
            return;
        }

        var table = this.$tableBody.find('table');
        that.editing=true;

        that.$body.find('tr').on('click', that, clikcToEdit);
    };
})(jQuery);
