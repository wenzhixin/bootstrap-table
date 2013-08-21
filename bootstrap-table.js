/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 0.0.1
 * @github https://github.com/wenzhixin/bootstrap-table
 * @blog http://wenzhixin.net.cn
 */

(function($) {
			
	'use strict';

	function Table($el, options) {
		this.$el = $el;
		this.options = options;
	}

	Table.prototype = {
		constructor: Table,
		
		init: function() {
			this.$el.addClass(this.options.class);
			this.$header = $('<thead></thead>');
			this.$el.append(this.$header);
			this.$body = $('<tbody></tbody>');
			this.$el.append(this.$body);
			this.data = [];
			
			this.initHeader();
			this.initBody();
		},
		
		initHeader: function() {
			var that = this,
				html = ['<tr>'];
			
			this.header = {
				fields: [],
				styles: [],
				formatters: []
			};
			$.each(this.options.columns, function(i, column) {
				var style = column.align ? 'text-align: ' + column.align + '; ': '';
				style += column.width ? 'width: ' + column.width + 'px; ': '';
				
				that.header.fields.push(column.field);
				that.header.styles.push(style);
				that.header.formatters.push(column.formatter);
				
				html.push('<th style="' + style + '">' + column.title + '</th>');
			});
			html.push('</tr>');
			this.$header.html(html.join(''));
		},
		
		initBody: function(data, append) {
			var that = this,
				html = [];
				
			$.each(data || this.options.data, function(i, item) {
				html.push('<tr>');
				$.each(that.header.fields, function(j, field) {
					var value = item[field];
					if (typeof that.header.formatters[j] === 'function') {
						value = that.header.formatters[j](value, item);
					}
					html.push('<td style="' + that.header.styles[j] + '">' + value + '</td>');
				});
				html.push('</tr>');
			});
			this.$body[append ? 'append' : 'html'](html.join(''));
			
			if (append) {
				this.data = this.data.concat(data);
			} else {
				this.data = data || this.options.data;
			}
			this.$body.find('tr').click(function() {
				that.options.onClickRow(that.data[$(this).index()]);
			});
		},
		
		load: function(data) {
			this.initBody(data);
		},
		
		append: function(data) {
			this.initBody(data, true);
		}
	};

	$.fn.bootstrapTable = function() {
		var option = arguments[0], 
			args = arguments,
			
			value, 
			allowedMethods = ['load', 'append'];

		this.each(function() {
			var $this = $(this), 
				data = $this.data('bootstrapTable'), 
				options = $.extend({}, $.fn.bootstrapTable.defaults, typeof option === 'object' && option);

			if (!data) {
				data = new Table($this, options);
				$this.data('bootstrapTable', data);
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
	
	$.fn.bootstrapTable.defaults = {
		class: 'table table-bordered table-hover',
		columns: [],
		data: [],
		onClickRow: function() {return false;}
	};
})(jQuery);
