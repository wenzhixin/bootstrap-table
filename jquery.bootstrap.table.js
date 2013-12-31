/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 0.0.1
 * @github https://github.com/wenzhixin/bootstrap-table
 * @blog http://wenzhixin.net.cn
 */

(function($) {
			
	'use strict';

	function Table($el) {
		this.$el = $el;
	}

	Table.prototype = {
		constructor: Table,
		
		init: function(options, first) {
			this.options = options;

			if (first) {
				this.$div = $([
					'<div class="fixed-table-container">',
						'<div class="fixed-table-header"></div>',
						'<div class="fixed-table-body"></div>',
					'</div>'].join(''));
				this.$div.insertAfter(this.$el);
				this.$div.find('.fixed-table-body').append(this.$el);
				if (this.options.height) {
					this.$div.css('height', this.options.height + 'px');
				}
				this.$el.addClass('table table-hover');
			}
			this.$el.html('');
			this.$header = $('<thead></thead>');
			this.$el.append(this.$header);
			this.$body = $('<tbody></tbody>');
			this.$el.append(this.$body);
			
			this.data = [];
			
			this.initHeader();
			this.initData();
			this.initBody();
		},
		
		initHeader: function() {
			var that = this,
				html = ['<tr>'];
			
			this.header = {
				fields: [],
				styles: [],
				formatters: [],
				sorters: []
			};
			$.each(this.options.columns, function(i, column) {
				var style = column.align ? 'text-align: ' + column.align + '; ': '',
					order = that.options.sortOrder || column.order || 'asc';
				
				style += column.valign ? 'vertical-align: ' + column.valign + '; ' : '';
				
				that.header.fields.push(column.field);
				that.header.styles.push(style);
				that.header.formatters.push(column.formatter);
				that.header.sorters.push(column.sorter);
				
				style = column.width ? 'width: ' + column.width + 'px; ': '';
				style += column.sortable ? 'cursor: pointer;' : '';
				
				html.push('<th' + 
					(column.sortable ? ' data-sortable="' + column.field + '"' : '') + 
					(order ? ' data-order="' + order + '"' : '') + 
					' style="' + style + '">');
				html.push('<div class="th-inner">');
				html.push(column.title);
				if (that.options.sortName === column.field && column.sortable) {
					html.push(that.getCaretHtml());
				}
				html.push('</div>');
				html.push('</th>');
			});
			html.push('</tr>');
			this.$header.html(html.join(''));
			
			this.$header.find('th[data-sortable]').click(function() {
				that.onSort($(this));
			});
		},
		
		initData: function(data, append) {
			if (append) {
				this.data = this.data.concat(data);
			} else {
				this.data = data || this.options.data;
			}
			
			this.initSort();
		},
		
		initSort: function() {
			var name = this.options.sortName,
				order = this.options.sortOrder === 'desc' ? -1 : 1,
				index = $.inArray(this.options.sortName, this.header.fields);
				
			if (index !== -1) {
				var sorter = this.header.sorters[index];
				this.data.sort(function(a, b) {
					if (typeof sorter === 'function') {
						return order * sorter(a[name], b[name]);
					}
					if (a[name] === b[name]) {
						return 0;
					}
					if (a[name] < b[name]) {
						return order * -1;
					}
					return order;
				});
			}
		},
		
		initBody: function() {
			var that = this,
				html = [];
			
			$.each(this.data, function(i, item) {
				html.push('<tr>');
				$.each(that.header.fields, function(j, field) {
					var value = item[field];
					if (typeof that.header.formatters[j] === 'function') {
						value = that.header.formatters[j](value, item);
					}
					html.push('<td style="' + that.header.styles[j] + '">' + (value || that.options.undefinedText) + '</td>');
				});
				html.push('</tr>');
			});
			this.$body.html(html.join(''));
			this.$body.find('tr').click(function() {
				that.options.onClickRow(that.data[$(this).index()]);
			});
			this.resetView();
		},
		
		onSort: function($this) {
			this.$header.find('span.order').remove();
			this.options.sortName = $this.attr('data-sortable');
			this.options.sortOrder = $this.attr('data-order') === 'asc' ? 'desc' : 'asc';
			this.options.onSort(this.options.sortName, this.options.sortOrder);
			$this.attr('data-order', this.options.sortOrder);
			$this.find('.th-inner').append(this.getCaretHtml());
			this.initSort();
			this.initBody();
		},
		
		getCaretHtml: function() {
			return ['<span class="order' + (this.options.sortOrder === 'desc' ? '' : ' dropup') + '">',
					'<span class="caret" style="margin: 10px 5px;"></span>',
				'</span>'].join('');
		},
		
		resetView: function() {
			var that = this;
			this.$header.find('.th-inner').each(function(i) {
				$(this).attr('style', that.header.styles[i])
					.css('width', ($(this).parent().width() - 16) + 'px'); // padding: 8px
			});
		},
		
		/** public function **/
		
		load: function(data) {
			this.initData(data);
			this.initBody();
		},
		
		append: function(data) {
			this.initData(data, true);
			this.initBody();
		},
		
		mergeCells: function(options) {
			var row = options.index,
				col = $.inArray(options.field, this.header.fields),
				rowspan = options.rowspan || 1,
				colspan = options.colspan || 1,
				i, j,
				$tr = this.$body.find('tr'),
				$td = $tr.eq(row).find('td').eq(col);
				
			if (row < 0 || col < 0 || row >= this.data.length) {
				return;
			}
			
			for (i = row; i < row + rowspan; i++) {
				for (j = col; j < col + colspan; j++) {
					$tr.eq(i).find('td').eq(j).hide();
				}
			}
				
			$td.attr('rowspan', rowspan).attr('colspan', colspan).show();
		}
	};

	$.fn.bootstrapTable = function() {
		var option = arguments[0], 
			args = arguments,
			
			value, 
			allowedMethods = ['load', 'append', 'mergeCells'];

		this.each(function() {
			var $this = $(this), 
				data = $this.data('bootstrapTable'), 
				options = $.extend({}, $.fn.bootstrapTable.defaults, typeof option === 'object' && option);

			if (typeof option === 'string') {
				if ($.inArray(option, allowedMethods) < 0) {
					throw "Unknown method: " + option;
				}
				value = data[option](args[1]);
			} else {
				if (!data) {
					data = new Table($this);
					data.init(options, true);
					$this.data('bootstrapTable', data);
				} else {
					data.init(options, false);
				}
			}
		});
		
		return value ? value : this;
	};
	
	$.fn.bootstrapTable.defaults = {
		undefinedText: '-',
		columns: [],
		data: [],
		onClickRow: function(value, row) {return false;},
		onSort: function(name, order) {return false;}
	};
})(jQuery);
