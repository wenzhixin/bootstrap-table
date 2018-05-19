/**
 * @author: Bighamster
 * @webSite: https://github.com/Bighamster
 * @version: v1.0.0
 */
!function($) {

  'use strict';

  $.extend($.fn.bootstrapTable.defaults, {
    formatSelectedRows: function (totalRows) { return totalRows == 0 ? '' : (" "+totalRows+" row"+(totalRows > 1 ? 's' : '')+" selected"); }
  });

  var BootstrapTable  = $.fn.bootstrapTable.Constructor,
            _initBody = BootstrapTable.prototype.initBody;

  BootstrapTable.prototype.initBody = function () {

  _initBody.apply(this, Array.prototype.slice.apply(arguments));

  if( this.options.multipleSelectRow ) {

    var that = this;

    that.$body.find('> tr[data-index] > td').off('mousedown').on('mousedown', function(e) {
      that.options.multipleSelectRowCtrlKey  = e.ctrlKey || e.metaKey;
      that.options.multipleSelectRowShiftKey = e.shiftKey;
    });

    that.$selectItem.off('click').on('click', function(e) {

      e.stopImmediatePropagation();

      var $this = $(this),
          checked = $this.prop('checked'),
          index = $this.data('index'),
          row = that.data[index];

      if( $(this).is(':radio') ) {
        $.each(that.options.data, function (i, row) {
          row[that.header.stateField] = false;
        });
      }

      row[that.header.stateField] = checked;

      if( that.options.multipleSelectRowShiftKey && that.options.multipleSelectRowLastSelectedIndex >= 0 ) {

        var indexes = [that.options.multipleSelectRowLastSelectedIndex, index].sort();

        for(var i = indexes[0] + 1; i < indexes[1]; i++) {
          that.data[i][that.header.stateField] = true;
          that.$selectItem.filter('[data-index="'+i+'"]').prop('checked', true);
        }
      }
      else {
        if( that.options.multipleSelectRowCtrlKey ) {
         // do nothing
        }
        else {
          that.$selectItem.not(this).each(function () { that.data[$(this).data('index')][that.header.stateField] = false; });
          that.$selectItem.filter(':checked').not(this).prop('checked', false);
        }
      }

      that.updateSelected();
      that.trigger(checked ? 'check' : 'uncheck', row, $this);
      that.options.multipleSelectRowCtrlKey = false;
      that.options.multipleSelectRowShiftKey = false;
      that.options.multipleSelectRowLastSelectedIndex = checked ? index : null;
    });

    // Show selected items (qty) if pagination is true
    that.$tableBody.off('check.bs.table uncheck.bs.table').on('check.bs.table uncheck.bs.table', function() {

      var $pagination_info = $('.pagination-info');

      if( $pagination_info.length ) {
        var $selection_info = $('.selection-info');

        if( $selection_info.length == 0 ) {
          $selection_info = $("<span class='selection-info'></span>").insertAfter($pagination_info);
        }

        $selection_info.text( that.options.formatSelectedRows( that.getSelections().length ) );
      }
    });
  }
 };
}(jQuery);
