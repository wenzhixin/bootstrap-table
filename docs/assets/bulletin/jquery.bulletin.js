/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.0.0
 * @github https://github.com/wenzhixin/bulletin
 * @blog http://wenzhixin.net.cn
 */

(function($) {
			
	'use strict';

	function Bulletin($el, options) {
		this.$el = $el;
		this.options = options;
	}

	Bulletin.prototype = {
		constructor : Bulletin,
		
		init: function() {
			var that = this;
			this.index = this.options.index;
			this.$li = this.$el.find('li');
			this.$li.eq(this.options.index).css('top', 0);
			if (this.$li.length > 1) {
				setTimeout(function() {
					that.scroll();
				}, this.options.interval);
			}
			this.events();
		},
		
		events: function() {
			var that = this;
			this.$el.find('.close').on('click', function() {
				that.$el.slideUp(that.options.speed);
			});
		},
		
		scroll: function() {
			var that = this,
				curIndex = this.index,
				dir = this.options.direction,
				speed = this.options.speed,
				height = this.$li.css('height');
			this.index = dir === 'down' ? this.index - 1 : this.index + 1;
			this.index = this.index % this.$li.length;
			this.$li.eq(curIndex).animate({top: (dir === 'down' ? '' : '-') + height}, speed);
			this.$li.eq(this.index).css('top', (dir === 'down' ? '-' : '') + height).animate({top: '0'}, speed);
			setTimeout(function() {
				that.scroll();
			}, this.options.interval);
		}
	};

	$.fn.bulletin = function() {
		var option = arguments[0], 
			args = arguments,
			
			value, 
			allowedMethods = [];

		this.each(function() {
			var $this = $(this), 
				data = $this.data('bulletin'), 
				options = $.extend({}, $.fn.bulletin.defaults, typeof option === 'object' && option);

			if (!data) {
				data = new Bulletin($this, options);
				$this.data('bulletin', data);
			}

			if (typeof option === 'string') {
				if ($.inArray(option, allowedMethods) < 0) {
					throw "Unknown method: " + option;
				}
				value = data[option](args[1]);
			} else {
				data.init();
			}
		});
		
		return value ? value : this;
	};
	
	$.fn.bulletin.defaults = {
		index: 0,
		interval: 3000,
		speed: 1000,
		direction: 'up' // up or down
	};
})(jQuery);
