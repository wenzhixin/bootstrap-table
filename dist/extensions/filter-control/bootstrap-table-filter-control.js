(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableFilterControl = mod.exports;
  }
})(this, function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
   * @author: Dennis Hernández
   * @webSite: http://djhvscf.github.io/Blog
   * @version: v2.2.0
   */

  (function ($) {
    var Utils = $.fn.bootstrapTable.utils;
    var UtilsFilterControl = {
      getOptionsFromSelectControl: function getOptionsFromSelectControl(selectControl) {
        return selectControl.get(selectControl.length - 1).options;
      },
      hideUnusedSelectOptions: function hideUnusedSelectOptions(selectControl, uniqueValues) {
        var options = UtilsFilterControl.getOptionsFromSelectControl(selectControl);

        for (var i = 0; i < options.length; i++) {
          if (options[i].value !== '') {
            if (!uniqueValues.hasOwnProperty(options[i].value)) {
              selectControl.find(Utils.sprintf('option[value=\'%s\']', options[i].value)).hide();
            } else {
              selectControl.find(Utils.sprintf('option[value=\'%s\']', options[i].value)).show();
            }
          }
        }
      },
      addOptionToSelectControl: function addOptionToSelectControl(selectControl, _value, text) {
        var value = $.trim(_value);
        var $selectControl = $(selectControl.get(selectControl.length - 1));
        if (!UtilsFilterControl.existOptionInSelectControl(selectControl, value)) {
          $selectControl.append($('<option></option>').attr('value', value).text($('<div />').html(text).text()));
        }
      },
      sortSelectControl: function sortSelectControl(selectControl) {
        var $selectControl = $(selectControl.get(selectControl.length - 1));
        var $opts = $selectControl.find('option:gt(0)');

        $opts.sort(function (a, b) {
          var aa = $(a).text().toLowerCase();
          var bb = $(b).text().toLowerCase();
          if ($.isNumeric(a) && $.isNumeric(b)) {
            // Convert numerical values from string to float.
            aa = parseFloat(aa);
            bb = parseFloat(bb);
          }
          return aa > bb ? 1 : aa < bb ? -1 : 0;
        });

        $selectControl.find('option:gt(0)').remove();
        $selectControl.append($opts);
      },
      existOptionInSelectControl: function existOptionInSelectControl(selectControl, value) {
        var options = UtilsFilterControl.getOptionsFromSelectControl(selectControl);
        for (var i = 0; i < options.length; i++) {
          if (options[i].value === value.toString()) {
            // The value is not valid to add
            return true;
          }
        }

        // If we get here, the value is valid to add
        return false;
      },
      fixHeaderCSS: function fixHeaderCSS(_ref) {
        var $tableHeader = _ref.$tableHeader;

        $tableHeader.css('height', '77px');
      },
      getCurrentHeader: function getCurrentHeader(_ref2) {
        var $header = _ref2.$header,
            options = _ref2.options,
            $tableHeader = _ref2.$tableHeader;

        var header = $header;
        if (options.height) {
          header = $tableHeader;
        }

        return header;
      },
      getCurrentSearchControls: function getCurrentSearchControls(_ref3) {
        var options = _ref3.options;

        var searchControls = 'select, input';
        if (options.height) {
          searchControls = 'table select, table input';
        }

        return searchControls;
      },
      getCursorPosition: function getCursorPosition(el) {
        if (Utils.isIEBrowser()) {
          if ($(el).is('input[type=text]')) {
            var pos = 0;
            if ('selectionStart' in el) {
              pos = el.selectionStart;
            } else if ('selection' in document) {
              el.focus();
              var Sel = document.selection.createRange();
              var SelLength = document.selection.createRange().text.length;
              Sel.moveStart('character', -el.value.length);
              pos = Sel.text.length - SelLength;
            }
            return pos;
          }
          return -1;
        }
        return -1;
      },
      setCursorPosition: function setCursorPosition(el) {
        $(el).val(el.value);
      },
      copyValues: function copyValues(that) {
        var header = UtilsFilterControl.getCurrentHeader(that);
        var searchControls = UtilsFilterControl.getCurrentSearchControls(that);

        that.options.valuesFilterControl = [];

        header.find(searchControls).each(function () {
          that.options.valuesFilterControl.push({
            field: $(this).closest('[data-field]').data('field'),
            value: $(this).val(),
            position: UtilsFilterControl.getCursorPosition($(this).get(0)),
            hasFocus: $(this).is(':focus')
          });
        });
      },
      setValues: function setValues(that) {
        var field = null;
        var result = [];
        var header = UtilsFilterControl.getCurrentHeader(that);
        var searchControls = UtilsFilterControl.getCurrentSearchControls(that);

        if (that.options.valuesFilterControl.length > 0) {
          //  Callback to apply after settings fields values
          var fieldToFocusCallback = null;
          header.find(searchControls).each(function (index, ele) {
            field = $(this).closest('[data-field]').data('field');
            result = that.options.valuesFilterControl.filter(function (valueObj) {
              return valueObj.field === field;
            });

            if (result.length > 0) {
              $(this).val(result[0].value);
              if (result[0].hasFocus) {
                // set callback if the field had the focus.
                fieldToFocusCallback = function (fieldToFocus, carretPosition) {
                  // Closure here to capture the field and cursor position
                  var closedCallback = function closedCallback() {
                    fieldToFocus.focus();
                    UtilsFilterControl.setCursorPosition(fieldToFocus, carretPosition);
                  };
                  return closedCallback;
                }($(this).get(0), result[0].position);
              }
            }
          });

          // Callback call.
          if (fieldToFocusCallback !== null) {
            fieldToFocusCallback();
          }
        }
      },
      collectBootstrapCookies: function collectBootstrapCookies() {
        var cookies = [];
        var foundCookies = document.cookie.match(/(?:bs.table.)(\w*)/g);

        if (foundCookies) {
          $.each(foundCookies, function (i, _cookie) {
            var cookie = _cookie;
            if (/./.test(cookie)) {
              cookie = cookie.split('.').pop();
            }

            if ($.inArray(cookie, cookies) === -1) {
              cookies.push(cookie);
            }
          });
          return cookies;
        }
      },
      escapeID: function escapeID(id) {
        return String(id).replace(/(:|\.|\[|\]|,)/g, '\\$1');
      },
      isColumnSearchableViaSelect: function isColumnSearchableViaSelect(_ref4) {
        var filterControl = _ref4.filterControl,
            searchable = _ref4.searchable;

        return filterControl && filterControl.toLowerCase() === 'select' && searchable;
      },
      isFilterDataNotGiven: function isFilterDataNotGiven(_ref5) {
        var filterData = _ref5.filterData;

        return filterData === undefined || filterData.toLowerCase() === 'column';
      },
      hasSelectControlElement: function hasSelectControlElement(selectControl) {
        return selectControl && selectControl.length > 0;
      },
      initFilterSelectControls: function initFilterSelectControls(that) {
        var data = that.data;
        var itemsPerPage = that.pageTo < that.options.data.length ? that.options.data.length : that.pageTo;
        var z = that.options.pagination ? that.options.sidePagination === 'server' ? that.pageTo : that.options.totalRows : that.pageTo;

        $.each(that.header.fields, function (j, field) {
          var column = that.columns[that.fieldsColumnsIndex[field]];
          var selectControl = $('.bootstrap-table-filter-control-' + UtilsFilterControl.escapeID(column.field));

          if (UtilsFilterControl.isColumnSearchableViaSelect(column) && UtilsFilterControl.isFilterDataNotGiven(column) && UtilsFilterControl.hasSelectControlElement(selectControl)) {
            if (selectControl.get(selectControl.length - 1).options.length === 0) {
              // Added the default option
              UtilsFilterControl.addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder);
            }

            var uniqueValues = {};
            for (var i = 0; i < z; i++) {
              // Added a new value
              var fieldValue = data[i][field];
              var formattedValue = Utils.calculateObjectValue(that.header, that.header.formatters[j], [fieldValue, data[i], i], fieldValue);

              uniqueValues[formattedValue] = fieldValue;
            }

            // eslint-disable-next-line guard-for-in
            for (var key in uniqueValues) {
              UtilsFilterControl.addOptionToSelectControl(selectControl, uniqueValues[key], key);
            }

            UtilsFilterControl.sortSelectControl(selectControl);

            if (that.options.hideUnusedSelectOptions) {
              UtilsFilterControl.hideUnusedSelectOptions(selectControl, uniqueValues);
            }
          }
        });

        that.trigger('created-controls');
      },
      getFilterDataMethod: function getFilterDataMethod(objFilterDataMethod, searchTerm) {
        var keys = Object.keys(objFilterDataMethod);
        for (var i = 0; i < keys.length; i++) {
          if (keys[i] === searchTerm) {
            return objFilterDataMethod[searchTerm];
          }
        }
        return null;
      },
      createControls: function createControls(that, header) {
        var addedFilterControl = false;
        var isVisible = void 0;
        var html = void 0;

        $.each(that.columns, function (i, column) {
          isVisible = 'hidden';
          html = [];

          if (!column.visible) {
            return;
          }

          if (!column.filterControl) {
            html.push('<div class="no-filter-control"></div>');
          } else {
            html.push('<div class="filter-control">');

            var nameControl = column.filterControl.toLowerCase();
            if (column.searchable && that.options.filterTemplate[nameControl]) {
              addedFilterControl = true;
              isVisible = 'visible';
              html.push(that.options.filterTemplate[nameControl](that, column.field, isVisible, column.filterControlPlaceholder ? column.filterControlPlaceholder : '', 'filter-control-' + i));
            }
          }

          $.each(header.children().children(), function (i, tr) {
            var $tr = $(tr);
            if ($tr.data('field') === column.field) {
              $tr.find('.fht-cell').append(html.join(''));
              return false;
            }
          });

          if (column.filterData !== undefined && column.filterData.toLowerCase() !== 'column') {
            var filterDataType = UtilsFilterControl.getFilterDataMethod(
            /* eslint-disable no-use-before-define */
            filterDataMethods, column.filterData.substring(0, column.filterData.indexOf(':')));
            var filterDataSource = void 0;
            var selectControl = void 0;

            if (filterDataType !== null) {
              filterDataSource = column.filterData.substring(column.filterData.indexOf(':') + 1, column.filterData.length);
              selectControl = $('.bootstrap-table-filter-control-' + UtilsFilterControl.escapeID(column.field));

              UtilsFilterControl.addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder);
              filterDataType(filterDataSource, selectControl);
            } else {
              throw new SyntaxError('Error. You should use any of these allowed filter data methods: var, json, url.' + ' Use like this: var: {key: "value"}');
            }

            var variableValues = void 0;
            var key = void 0;
            // eslint-disable-next-line default-case
            switch (filterDataType) {
              case 'url':
                $.ajax({
                  url: filterDataSource,
                  dataType: 'json',
                  success: function success(data) {
                    // eslint-disable-next-line guard-for-in
                    for (var _key in data) {
                      UtilsFilterControl.addOptionToSelectControl(selectControl, _key, data[_key]);
                    }
                    UtilsFilterControl.sortSelectControl(selectControl);
                  }
                });
                break;
              case 'var':
                variableValues = window[filterDataSource];
                // eslint-disable-next-line guard-for-in
                for (key in variableValues) {
                  UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key]);
                }
                UtilsFilterControl.sortSelectControl(selectControl);
                break;
              case 'jso':
                variableValues = JSON.parse(filterDataSource);
                // eslint-disable-next-line guard-for-in
                for (key in variableValues) {
                  UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key]);
                }
                UtilsFilterControl.sortSelectControl(selectControl);
                break;
            }
          }
        });

        if (addedFilterControl) {
          header.off('keyup', 'input').on('keyup', 'input', function (event, obj) {
            // Simulate enter key action from clear button
            event.keyCode = obj ? obj.keyCode : event.keyCode;

            if (that.options.searchOnEnterKey && event.keyCode !== 13) {
              return;
            }

            if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
              return;
            }

            var $currentTarget = $(event.currentTarget);

            if ($currentTarget.is(':checkbox') || $currentTarget.is(':radio')) {
              return;
            }

            clearTimeout(event.currentTarget.timeoutId || 0);
            event.currentTarget.timeoutId = setTimeout(function () {
              that.onColumnSearch(event);
            }, that.options.searchTimeOut);
          });

          header.off('change', 'select').on('change', 'select', function (event) {
            if (that.options.searchOnEnterKey && event.keyCode !== 13) {
              return;
            }

            if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
              return;
            }

            clearTimeout(event.currentTarget.timeoutId || 0);
            event.currentTarget.timeoutId = setTimeout(function () {
              that.onColumnSearch(event);
            }, that.options.searchTimeOut);
          });

          header.off('mouseup', 'input').on('mouseup', 'input', function (event) {
            var $input = $(this);
            var oldValue = $input.val();

            if (oldValue === '') {
              return;
            }

            setTimeout(function () {
              var newValue = $input.val();

              if (newValue === '') {
                clearTimeout(event.currentTarget.timeoutId || 0);
                event.currentTarget.timeoutId = setTimeout(function () {
                  that.onColumnSearch(event);
                }, that.options.searchTimeOut);
              }
            }, 1);
          });

          if (header.find('.date-filter-control').length > 0) {
            $.each(that.columns, function (i, _ref6) {
              var filterControl = _ref6.filterControl,
                  field = _ref6.field,
                  filterDatepickerOptions = _ref6.filterDatepickerOptions;

              if (filterControl !== undefined && filterControl.toLowerCase() === 'datepicker') {
                header.find('.date-filter-control.bootstrap-table-filter-control-' + field).datepicker(filterDatepickerOptions).on('changeDate', function (_ref7) {
                  var currentTarget = _ref7.currentTarget;

                  $(currentTarget).val(currentTarget.value);
                  // Fired the keyup event
                  $(currentTarget).keyup();
                });
              }
            });
          }
        } else {
          header.find('.filterControl').hide();
        }
      },
      getDirectionOfSelectOptions: function getDirectionOfSelectOptions(_alignment) {
        var alignment = _alignment === undefined ? 'left' : _alignment.toLowerCase();

        switch (alignment) {
          case 'left':
            return 'ltr';
          case 'right':
            return 'rtl';
          case 'auto':
            return 'auto';
          default:
            return 'ltr';
        }
      }
    };
    var filterDataMethods = {
      var: function _var(filterDataSource, selectControl) {
        var variableValues = window[filterDataSource];
        // eslint-disable-next-line guard-for-in
        for (var key in variableValues) {
          UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key]);
        }
        UtilsFilterControl.sortSelectControl(selectControl);
      },
      url: function url(filterDataSource, selectControl) {
        $.ajax({
          url: filterDataSource,
          dataType: 'json',
          success: function success(data) {
            // eslint-disable-next-line guard-for-in
            for (var key in data) {
              UtilsFilterControl.addOptionToSelectControl(selectControl, key, data[key]);
            }
            UtilsFilterControl.sortSelectControl(selectControl);
          }
        });
      },
      json: function json(filterDataSource, selectControl) {
        var variableValues = JSON.parse(filterDataSource);
        // eslint-disable-next-line guard-for-in
        for (var key in variableValues) {
          UtilsFilterControl.addOptionToSelectControl(selectControl, key, variableValues[key]);
        }
        UtilsFilterControl.sortSelectControl(selectControl);
      }
    };

    var bootstrap = {
      3: {
        icons: {
          clear: 'glyphicon-trash icon-clear'
        }
      },
      4: {
        icons: {
          clear: 'fa-trash icon-clear'
        }
      }
    }[Utils.bootstrapVersion];

    $.extend($.fn.bootstrapTable.defaults, {
      filterControl: false,
      onColumnSearch: function onColumnSearch(field, text) {
        return false;
      },
      onCreatedControls: function onCreatedControls() {
        return true;
      },

      filterShowClear: false,
      alignmentSelectControlOptions: undefined,
      filterTemplate: {
        input: function input(that, field, isVisible, placeholder) {
          return Utils.sprintf('<input type="text" class="form-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s" placeholder="%s">', field, isVisible, placeholder);
        },
        select: function select(_ref8, field, isVisible) {
          var options = _ref8.options;

          return Utils.sprintf('<select class="form-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s" dir="%s"></select>', field, isVisible, UtilsFilterControl.getDirectionOfSelectOptions(options.alignmentSelectControlOptions));
        },
        datepicker: function datepicker(that, field, isVisible) {
          return Utils.sprintf('<input type="text" class="form-control date-filter-control bootstrap-table-filter-control-%s" style="width: 100%; visibility: %s">', field, isVisible);
        }
      },
      disableControlWhenSearch: false,
      searchOnEnterKey: false,
      // internal variables
      valuesFilterControl: []
    });

    $.extend($.fn.bootstrapTable.columnDefaults, {
      filterControl: undefined,
      filterData: undefined,
      filterDatepickerOptions: undefined,
      filterStrictSearch: false,
      filterStartsWithSearch: false,
      filterControlPlaceholder: ''
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
      'column-search.bs.table': 'onColumnSearch',
      'created-controls.bs.table': 'onCreatedControls'
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
      clear: bootstrap.icons.clear
    });

    $.extend($.fn.bootstrapTable.locales, {
      formatClearFilters: function formatClearFilters() {
        return 'Clear Filters';
      }
    });

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    $.fn.bootstrapTable.methods.push('triggerSearch');
    $.fn.bootstrapTable.methods.push('clearFilterControl');

    $.BootstrapTable = function (_$$BootstrapTable) {
      _inherits(_class, _$$BootstrapTable);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'init',
        value: function init() {
          // Make sure that the filterControl option is set
          if (this.options.filterControl) {
            var that = this;

            // Make sure that the internal variables are set correctly
            this.options.valuesFilterControl = [];

            this.$el.on('reset-view.bs.table', function () {
              // Create controls on $tableHeader if the height is set
              if (!that.options.height) {
                return;
              }

              // Avoid recreate the controls
              if (that.$tableHeader.find('select').length > 0 || that.$tableHeader.find('input').length > 0) {
                return;
              }

              UtilsFilterControl.createControls(that, that.$tableHeader);
            }).on('post-header.bs.table', function () {
              UtilsFilterControl.setValues(that);
            }).on('post-body.bs.table', function () {
              if (that.options.height) {
                UtilsFilterControl.fixHeaderCSS(that);
              }
            }).on('column-switch.bs.table', function () {
              UtilsFilterControl.setValues(that);
            }).on('load-success.bs.table', function () {
              that.EnableControls(true);
            }).on('load-error.bs.table', function () {
              that.EnableControls(true);
            });
          }

          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'init', this).call(this);
        }
      }, {
        key: 'initToolbar',
        value: function initToolbar() {
          this.showToolbar = this.showToolbar || this.options.filterControl && this.options.filterShowClear;

          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initToolbar', this).call(this);

          if (this.options.filterControl && this.options.filterShowClear) {
            var $btnGroup = this.$toolbar.find('>.btn-group');
            var $btnClear = $btnGroup.find('.filter-show-clear');

            if (!$btnClear.length) {
              $btnClear = $([Utils.sprintf('<button class="btn btn-%s filter-show-clear" ', this.options.buttonsClass), Utils.sprintf('type="button" title="%s">', this.options.formatClearFilters()), Utils.sprintf('<i class="%s %s"></i> ', this.options.iconsPrefix, this.options.icons.clear), '</button>'].join('')).appendTo($btnGroup);

              $btnClear.off('click').on('click', $.proxy(this.clearFilterControl, this));
            }
          }
        }
      }, {
        key: 'initHeader',
        value: function initHeader() {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initHeader', this).call(this);

          if (!this.options.filterControl) {
            return;
          }
          UtilsFilterControl.createControls(this, this.$header);
        }
      }, {
        key: 'initBody',
        value: function initBody() {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initBody', this).call(this);

          UtilsFilterControl.initFilterSelectControls(this);
        }
      }, {
        key: 'initSearch',
        value: function initSearch() {
          var that = this;
          var fp = $.isEmptyObject(that.filterColumnsPartial) ? null : that.filterColumnsPartial;

          if (fp === null || Object.keys(fp).length <= 1) {
            _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initSearch', this).call(this);
          }

          if (this.options.sidePagination === 'server') {
            return;
          }

          if (fp === null) {
            return;
          }

          // Check partial column filter
          that.data = fp ? that.options.data.filter(function (item, i) {
            var itemIsExpected = [];
            Object.keys(item).forEach(function (key, index) {
              var thisColumn = that.columns[that.fieldsColumnsIndex[key]];
              var fval = (fp[key] || '').toLowerCase();
              var value = item[key];

              if (fval === '') {
                itemIsExpected.push(true);
              } else {
                // Fix #142: search use formated data
                if (thisColumn && thisColumn.searchFormatter) {
                  value = $.fn.bootstrapTable.utils.calculateObjectValue(that.header, that.header.formatters[$.inArray(key, that.header.fields)], [value, item, i], value);
                }

                if ($.inArray(key, that.header.fields) !== -1) {
                  if (typeof value === 'string' || typeof value === 'number') {
                    if (thisColumn.filterStrictSearch) {
                      if (value.toString().toLowerCase() === fval.toString().toLowerCase()) {
                        itemIsExpected.push(true);
                      } else {
                        itemIsExpected.push(false);
                      }
                    } else if (thisColumn.filterStartsWithSearch) {
                      if (('' + value).toLowerCase().indexOf(fval) === 0) {
                        itemIsExpected.push(true);
                      } else {
                        itemIsExpected.push(false);
                      }
                    } else {
                      if (('' + value).toLowerCase().includes(fval)) {
                        itemIsExpected.push(true);
                      } else {
                        itemIsExpected.push(false);
                      }
                    }
                  }
                }
              }
            });

            return !itemIsExpected.includes(false);
          }) : that.data;
        }
      }, {
        key: 'initColumnSearch',
        value: function initColumnSearch(filterColumnsDefaults) {
          UtilsFilterControl.copyValues(this);

          if (filterColumnsDefaults) {
            this.filterColumnsPartial = filterColumnsDefaults;
            this.updatePagination();

            // eslint-disable-next-line guard-for-in
            for (var filter in filterColumnsDefaults) {
              this.trigger('column-search', filter, filterColumnsDefaults[filter]);
            }
          }
        }
      }, {
        key: 'onColumnSearch',
        value: function onColumnSearch(event) {
          if ($.inArray(event.keyCode, [37, 38, 39, 40]) > -1) {
            return;
          }

          UtilsFilterControl.copyValues(this);
          var text = $.trim($(event.currentTarget).val());
          var $field = $(event.currentTarget).closest('[data-field]').data('field');

          if ($.isEmptyObject(this.filterColumnsPartial)) {
            this.filterColumnsPartial = {};
          }
          if (text) {
            this.filterColumnsPartial[$field] = text;
          } else {
            delete this.filterColumnsPartial[$field];
          }

          // if the searchText is the same as the previously selected column value,
          // bootstrapTable will not try searching again (even though the selected column
          // may be different from the previous search).  As a work around
          // we're manually appending some text to bootrap's searchText field
          // to guarantee that it will perform a search again when we call this.onSearch(event)
          this.searchText += 'randomText';

          this.options.pageNumber = 1;
          this.EnableControls(false);
          this.onSearch(event);
          this.trigger('column-search', $field, text);
        }
      }, {
        key: 'clearFilterControl',
        value: function clearFilterControl() {
          if (this.options.filterControl && this.options.filterShowClear) {
            var that = this;
            var cookies = UtilsFilterControl.collectBootstrapCookies();
            var header = UtilsFilterControl.getCurrentHeader(that);
            var table = header.closest('table');
            var controls = header.find(UtilsFilterControl.getCurrentSearchControls(that));
            var search = that.$toolbar.find('.search input');
            var hasValues = false;
            var timeoutId = 0;

            $.each(that.options.valuesFilterControl, function (i, item) {
              hasValues = hasValues ? true : item.value !== '';
              item.value = '';
            });

            UtilsFilterControl.setValues(that);

            // clear cookies once the filters are clean
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
              if (cookies && cookies.length > 0) {
                $.each(cookies, function (i, item) {
                  if (that.deleteCookie !== undefined) {
                    that.deleteCookie(item);
                  }
                });
              }
            }, that.options.searchTimeOut);

            // If there is not any value in the controls exit this method
            if (!hasValues) {
              return;
            }

            // Clear each type of filter if it exists.
            // Requires the body to reload each time a type of filter is found because we never know
            // which ones are going to be present.
            if (controls.length > 0) {
              this.filterColumnsPartial = {};
              $(controls[0]).trigger(controls[0].tagName === 'INPUT' ? 'keyup' : 'change', { keyCode: 13 });
            } else {
              return;
            }

            if (search.length > 0) {
              that.resetSearch();
            }

            // use the default sort order if it exists. do nothing if it does not
            if (that.options.sortName !== table.data('sortName') || that.options.sortOrder !== table.data('sortOrder')) {
              var sorter = header.find(Utils.sprintf('[data-field="%s"]', $(controls[0]).closest('table').data('sortName')));
              if (sorter.length > 0) {
                that.onSort({ type: 'keypress', currentTarget: sorter });
                $(sorter).find('.sortable').trigger('click');
              }
            }
          }
        }
      }, {
        key: 'triggerSearch',
        value: function triggerSearch() {
          var header = UtilsFilterControl.getCurrentHeader(this);
          var searchControls = UtilsFilterControl.getCurrentSearchControls(this);

          header.find(searchControls).each(function () {
            var el = $(this);
            if (el.is('select')) {
              el.change();
            } else {
              el.keyup();
            }
          });
        }
      }, {
        key: 'EnableControls',
        value: function EnableControls(enable) {
          if (this.options.disableControlWhenSearch && this.options.sidePagination === 'server') {
            var header = UtilsFilterControl.getCurrentHeader(this);
            var searchControls = UtilsFilterControl.getCurrentSearchControls(this);

            if (!enable) {
              header.find(searchControls).prop('disabled', 'disabled');
            } else {
              header.find(searchControls).removeProp('disabled');
            }
          }
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});