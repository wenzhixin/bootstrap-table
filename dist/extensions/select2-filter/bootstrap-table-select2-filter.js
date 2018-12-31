(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery);
    global.bootstrapTableSelect2Filter = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function getCurrentHeader(that) {
    var header = that.$header;
    if (that.options.height) {
      header = that.$tableHeader;
    }

    return header;
  } /**
     * @author: Jewway
     * @version: v1.1.1
     */


  function initFilterValues(that) {
    if (!_jquery2.default.isEmptyObject(that.filterColumnsPartial)) {
      var $header = getCurrentHeader(that);

      _jquery2.default.each(that.columns, function (idx, column) {
        var value = that.filterColumnsPartial[column.field];

        if (column.filter) {
          if (column.filter.setFilterValue) {
            var $filter = $header.find('[data-field=' + column.field + '] .filter');
            column.filter.setFilterValue($filter, column.field, value);
          } else {
            var $ele = $header.find('[data-filter-field=' + column.field + ']');
            switch (column.filter.type) {
              case 'input':
                $ele.val(value);
              case 'select':
                $ele.val(value).trigger('change');
            }
          }
        }
      });
    }
  }

  function createFilter(that, header) {
    var enableFilter = false,
        isVisible,
        html,
        timeoutId = 0;

    _jquery2.default.each(that.columns, function (i, column) {
      isVisible = 'hidden';
      html = null;

      if (!column.visible) {
        return;
      }

      if (!column.filter) {
        html = (0, _jquery2.default)('<div class="no-filter"></div>');
      } else {
        var filterClass = column.filter.class ? ' ' + column.filter.class : '';
        html = (0, _jquery2.default)('<div style="margin: 0px 2px 2px 2px;" class="filter' + filterClass + '">');

        if (column.searchable) {
          enableFilter = true;
          isVisible = 'visible';
        }

        if (column.filter.template) {
          html.append(column.filter.template(that, column, isVisible));
        } else {
          var $filter = (0, _jquery2.default)(that.options.filterTemplate[column.filter.type.toLowerCase()](that, column, isVisible));

          switch (column.filter.type) {
            case 'input':
              var cpLock = true;
              $filter.off('compositionstart').on('compositionstart', function (event) {
                cpLock = false;
              });

              $filter.off('compositionend').on('compositionend', function (event) {
                cpLock = true;
                var $input = (0, _jquery2.default)(this);
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                  that.onColumnSearch(event, column.field, $input.val());
                }, that.options.searchTimeOut);
              });

              $filter.off('keyup').on('keyup', function (event) {
                if (cpLock) {
                  var $input = (0, _jquery2.default)(this);
                  clearTimeout(timeoutId);
                  timeoutId = setTimeout(function () {
                    that.onColumnSearch(event, column.field, $input.val());
                  }, that.options.searchTimeOut);
                }
              });

              $filter.off('mouseup').on('mouseup', function (event) {
                var $input = (0, _jquery2.default)(this),
                    oldValue = $input.val();

                if (oldValue === "") {
                  return;
                }

                setTimeout(function () {
                  var newValue = $input.val();

                  if (newValue === "") {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(function () {
                      that.onColumnSearch(event, column.field, newValue);
                    }, that.options.searchTimeOut);
                  }
                }, 1);
              });
              break;
            case 'select':
              $filter.on('select2:select', function (event) {
                that.onColumnSearch(event, column.field, (0, _jquery2.default)(this).val());
              });

              $filter.on("select2:unselecting", function (event) {
                var $select2 = (0, _jquery2.default)(this);
                event.preventDefault();
                $select2.val(null).trigger('change');
                that.searchText = undefined;
                that.onColumnSearch(event, column.field, $select2.val());
              });
              break;
          }

          html.append($filter);
        }
      }

      _jquery2.default.each(header.children().children(), function (i, tr) {
        tr = (0, _jquery2.default)(tr);
        if (tr.data('field') === column.field) {
          tr.find('.fht-cell').append(html);
          return false;
        }
      });
    });

    if (!enableFilter) {
      header.find('.filter').hide();
    }
  }

  function initSelect2(that) {
    var $header = getCurrentHeader(that);

    _jquery2.default.each(that.columns, function (idx, column) {
      if (column.filter && column.filter.type === 'select') {
        var $selectEle = $header.find('select[data-filter-field="' + column.field + '"]');

        if ($selectEle.length > 0 && !$selectEle.data().select2) {
          var select2Opts = {
            placeholder: "",
            allowClear: true,
            data: column.filter.data,
            dropdownParent: that.$el.closest(".bootstrap-table")
          };

          $selectEle.select2(select2Opts);
        }
      }
    });
  }

  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, {
    filter: false,
    filterValues: {},
    filterTemplate: {
      input: function input(instance, column, isVisible) {
        return '<input type="text" class="form-control" data-filter-field="' + column.field + '" style="width: 100%; visibility:' + isVisible + '">';
      },
      select: function select(instance, column, isVisible) {
        return '<select data-filter-field="' + column.field + '" style="width: 100%; visibility:' + isVisible + '"></select>';
      }
    },
    onColumnSearch: function onColumnSearch(field, text) {
      return false;
    }
  });

  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.COLUMN_DEFAULTS, {
    filter: undefined
  });

  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.Constructor.EVENTS, {
    'column-search.bs.table': 'onColumnSearch'
  });

  var BootstrapTable = _jquery2.default.fn.bootstrapTable.Constructor,
      _init = BootstrapTable.prototype.init,
      _initHeader = BootstrapTable.prototype.initHeader,
      _initSearch = BootstrapTable.prototype.initSearch;

  BootstrapTable.prototype.init = function () {
    //Make sure that the filtercontrol option is set
    if (this.options.filter) {
      var that = this;

      if (that.options.filterTemplate) {
        that.options.filterTemplate = _jquery2.default.extend({}, _jquery2.default.fn.bootstrapTable.defaults.filterTemplate, that.options.filterTemplate);
      }

      if (!_jquery2.default.isEmptyObject(that.options.filterValues)) {
        that.filterColumnsPartial = that.options.filterValues;
        that.options.filterValues = {};
      }

      this.$el.on('reset-view.bs.table', function () {
        //Create controls on $tableHeader if the height is set
        if (!that.options.height) {
          return;
        }

        //Avoid recreate the controls
        if (that.$tableHeader.find('select').length > 0 || that.$tableHeader.find('input').length > 0) {
          return;
        }

        createFilter(that, that.$tableHeader);
      }).on('post-header.bs.table', function () {
        var timeoutId = 0;

        initSelect2(that);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
          initFilterValues(that);
        }, that.options.searchTimeOut - 1000);
      }).on('column-switch.bs.table', function (field, checked) {
        initFilterValues(that);
      });
    }

    _init.apply(this, Array.prototype.slice.apply(arguments));
  };

  BootstrapTable.prototype.initHeader = function () {
    _initHeader.apply(this, Array.prototype.slice.apply(arguments));
    if (this.options.filter) {
      createFilter(this, this.$header);
    }
  };

  BootstrapTable.prototype.initSearch = function () {
    var that = this,
        filterValues = that.filterColumnsPartial;

    // Filter for client
    if (that.options.sidePagination === 'client') {
      this.data = _jquery2.default.grep(this.data, function (row, idx) {
        for (var field in filterValues) {
          var column = that.columns[that.fieldsColumnsIndex[field]],
              filterValue = filterValues[field].toLowerCase(),
              rowValue = row[field];

          rowValue = _jquery2.default.fn.bootstrapTable.utils.calculateObjectValue(that.header, that.header.formatters[_jquery2.default.inArray(field, that.header.fields)], [rowValue, row, idx], rowValue);

          if (column.filterStrictSearch) {
            if (!(_jquery2.default.inArray(field, that.header.fields) !== -1 && (typeof rowValue === 'string' || typeof rowValue === 'number') && rowValue.toString().toLowerCase() === filterValue.toString().toLowerCase())) {
              return false;
            }
          } else {
            if (!(_jquery2.default.inArray(field, that.header.fields) !== -1 && (typeof rowValue === 'string' || typeof rowValue === 'number') && (rowValue + '').toLowerCase().indexOf(filterValue) !== -1)) {
              return false;
            }
          }
        }

        return true;
      });
    }

    _initSearch.apply(this, Array.prototype.slice.apply(arguments));
  };

  BootstrapTable.prototype.onColumnSearch = function (event, field, value) {
    if (_jquery2.default.isEmptyObject(this.filterColumnsPartial)) {
      this.filterColumnsPartial = {};
    }

    if (value) {
      this.filterColumnsPartial[field] = value;
    } else {
      delete this.filterColumnsPartial[field];
    }

    this.options.pageNumber = 1;
    this.onSearch(event);
    this.trigger('column-search', field, value);
  };

  BootstrapTable.prototype.setSelect2Data = function (field, data) {
    var that = this,
        $header = getCurrentHeader(that),
        $selectEle = $header.find('select[data-filter-field=\"' + field + '\"]');
    $selectEle.empty();
    $selectEle.select2({
      data: data,
      placeholder: "",
      allowClear: true,
      dropdownParent: that.$el.closest(".bootstrap-table")
    });

    _jquery2.default.each(this.columns, function (idx, column) {
      if (column.field === field) {
        column.filter.data = data;
        return false;
      }
    });
  };

  BootstrapTable.prototype.setFilterValues = function (values) {
    this.filterColumnsPartial = values;
  };

  _jquery2.default.fn.bootstrapTable.methods.push('setSelect2Data');
  _jquery2.default.fn.bootstrapTable.methods.push('setFilterValues');
});