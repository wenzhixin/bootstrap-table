/**
 * @author Susann Sgorzaly <sgorzaly@portrino.com>
 */

(function ($) {
      'use strict';
      var sprintf = $.fn.bootstrapTable.utils.sprintf;
      var calculateObjectValue = $.fn.bootstrapTable.utils.calculateObjectValue;
      var scrollOn = true,
          rowCount = 0,
          scrollTop = 0;


      $.extend($.fn.bootstrapTable.defaults, {
        infiniteScrolling: false,
        ajaxUrl: 'data',
        append: 'true'
      });

      $.fn.bootstrapTable.methods.push('getNewDataItems');

      var BootstrapTable = $.fn.bootstrapTable.Constructor,
          _init = BootstrapTable.prototype.init,
          _initBody = BootstrapTable.prototype.initBody,
          _load = BootstrapTable.prototype.load;

      BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));
        this.getNewDataItems(0);
      };

      BootstrapTable.prototype.initBody = function () {
        var that = this;
        _initBody.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.infiniteScrolling) {
          return;
        }

        this.$tableBody.off('wheel').on('wheel', function (e) {
          if (!(Math.abs($(this).scrollTop() - scrollTop) > 0.01)) {
            // no active scrolling
            return;
          }

          scrollTop = $(this).scrollTop();

          var scrollNeeded = $(this).innerHeight() < $(this)[0].scrollHeight;
          var scrollUp = e.originalEvent.deltaY <= 0;

          if (scrollUp && that.options.append === true) {
            // nothing to do.
            return;
          }

          var bottomReached = $(this).scrollTop() > $(this)[0].scrollHeight - $(this).innerHeight();
          var topReached = $(this).scrollTop() === 0;
          if (scrollNeeded && scrollOn === true && (bottomReached || topReached)) {
            if (topReached) {
              rowCount -= that.getData().length;
              rowCount = rowCount > 0 ? rowCount : 0;
            }
            else {
              if (that.options.append === true) {
                rowCount = that.getData().length;
              }
              else {
                rowCount += that.getData().length;
              }
            }
            that.getNewDataItems(rowCount);
          }
        });
      }

      BootstrapTable.prototype.getNewDataItems = function (offset) {
        var that = this;

        if (!this.options.infiniteScrolling) {
          return this.data;
        }

        scrollOn = false;

        if (offset === undefined || offset < 0) {
          offset = 0;
        }

        $.ajax({
          url: this.options.ajaxUrl,
          type: this.options.method,
          dataType: this.options.dataType,
          data: {
            limitStart: offset,
            filters: '',
            step: this.options.pageSize
          },
          success: function (res) {
            res = calculateObjectValue(that.options, that.options.responseHandler, [res], res);

            if (res.rows.length > 0) {
              if (that.options.append === true || res.rows.length < that.options.pageSize) {
                that.append(res.rows);
              }
              else {
                that.load(res);
              }
              scrollTop = 0;
            }

            scrollOn = true;
            that.trigger('load-success', res);

          },
          error: function (res) {
            that.trigger('load-error', res.status, res);
          }
        });
      }

    }
)(jQuery);