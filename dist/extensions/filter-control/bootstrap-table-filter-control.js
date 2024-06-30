(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.keys.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.object.values.js'), require('core-js/modules/es.parse-int.js'), require('core-js/modules/es.promise.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.string.includes.js'), require('core-js/modules/es.string.split.js'), require('core-js/modules/es.string.trim.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('jquery'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.array.sort.js'), require('core-js/modules/es.string.match.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.string.starts-with.js')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.keys.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.object.values.js', 'core-js/modules/es.parse-int.js', 'core-js/modules/es.promise.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.string.includes.js', 'core-js/modules/es.string.split.js', 'core-js/modules/es.string.trim.js', 'core-js/modules/web.dom-collections.for-each.js', 'jquery', 'core-js/modules/es.array.join.js', 'core-js/modules/es.array.sort.js', 'core-js/modules/es.string.match.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.string.starts-with.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_filter_js, es_array_find_js, es_array_includes_js, es_array_indexOf_js, es_object_assign_js, es_object_keys_js, es_object_toString_js, es_object_values_js, es_parseInt_js, es_promise_js, es_regexp_exec_js, es_regexp_toString_js, es_string_includes_js, es_string_split_js, es_string_trim_js, web_domCollections_forEach_js, $) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = _superPropBase(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
    return t;
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r );
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  /* eslint-disable no-use-before-define */
  var Utils$1 = $.fn.bootstrapTable.utils;
  var searchControls = 'select, input:not([type="checkbox"]):not([type="radio"])';
  function getInputClass(that) {
    var isSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formControlClass = isSelect ? that.constants.classes.select : that.constants.classes.input;
    return that.options.iconSize ? Utils$1.sprintf('%s %s-%s', formControlClass, formControlClass, that.options.iconSize) : formControlClass;
  }
  function getOptionsFromSelectControl(selectControl) {
    return selectControl[0].options;
  }
  function getControlContainer(that) {
    if (that.options.filterControlContainer) {
      return $("".concat(that.options.filterControlContainer));
    }
    if (that.options.height && that._initialized) {
      return that.$tableContainer.find('.fixed-table-header table thead');
    }
    return that.$header;
  }
  function isKeyAllowed(keyCode) {
    return $.inArray(keyCode, [37, 38, 39, 40]) > -1;
  }
  function getSearchControls(that) {
    return getControlContainer(that).find(searchControls);
  }
  function existOptionInSelectControl(selectControl, value) {
    var options = getOptionsFromSelectControl(selectControl);
    for (var i = 0; i < options.length; i++) {
      if (options[i].value === Utils$1.unescapeHTML(value)) {
        // The value is not valid to add
        return true;
      }
    }

    // If we get here, the value is valid to add
    return false;
  }
  function addOptionToSelectControl(selectControl, _value, text, selected, shouldCompareText) {
    var value = _value === undefined || _value === null ? '' : _value.toString().trim();
    value = Utils$1.removeHTML(Utils$1.unescapeHTML(value));
    text = Utils$1.removeHTML(Utils$1.unescapeHTML(text));
    if (existOptionInSelectControl(selectControl, value)) {
      return;
    }
    var isSelected = shouldCompareText ? value === selected || text === selected : value === selected;
    var option = new Option(text, value, false, isSelected);
    selectControl.get(0).add(option);
  }
  function sortSelectControl(selectControl, orderBy, options) {
    var $selectControl = selectControl.get(0);
    if (orderBy === 'server') {
      return;
    }
    var tmpAry = new Array();
    for (var i = 0; i < $selectControl.options.length; i++) {
      tmpAry[i] = new Array();
      tmpAry[i][0] = $selectControl.options[i].text;
      tmpAry[i][1] = $selectControl.options[i].value;
      tmpAry[i][2] = $selectControl.options[i].selected;
    }
    tmpAry.sort(function (a, b) {
      return Utils$1.sort(a[0], b[0], orderBy === 'desc' ? -1 : 1, options);
    });
    while ($selectControl.options.length > 0) {
      $selectControl.options[0] = null;
    }
    for (var _i = 0; _i < tmpAry.length; _i++) {
      var op = new Option(tmpAry[_i][0], tmpAry[_i][1], false, tmpAry[_i][2]);
      $selectControl.add(op);
    }
  }
  function fixHeaderCSS(_ref) {
    var $tableHeader = _ref.$tableHeader;
    $tableHeader.css('height', $tableHeader.find('table').outerHeight(true));
  }
  function getElementClass($element) {
    return $element.attr('class').split(' ').filter(function (className) {
      return className.startsWith('bootstrap-table-filter-control-');
    });
  }
  function getCursorPosition(el) {
    if ($(el).is('input[type=search]')) {
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
  function cacheValues(that) {
    var searchControls = getSearchControls(that);
    that._valuesFilterControl = [];
    searchControls.each(function () {
      var $field = $(this);
      var fieldClass = escapeID(getElementClass($field));
      if (that.options.height && !that.options.filterControlContainer) {
        $field = that.$el.find(".fixed-table-header .".concat(fieldClass));
      } else if (that.options.filterControlContainer) {
        $field = $("".concat(that.options.filterControlContainer, " .").concat(fieldClass));
      } else {
        $field = that.$el.find(".".concat(fieldClass));
      }
      that._valuesFilterControl.push({
        field: $field.closest('[data-field]').data('field'),
        value: $field.val(),
        position: getCursorPosition($field.get(0)),
        hasFocus: $field.is(':focus')
      });
    });
  }
  function setCaretPosition(elem, caretPos) {
    try {
      if (elem) {
        if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
        } else {
          elem.setSelectionRange(caretPos, caretPos);
        }
      }
    } catch (ex) {
      // ignored
    }
  }
  function setValues(that) {
    var field = null;
    var result = [];
    var searchControls = getSearchControls(that);
    if (that._valuesFilterControl.length > 0) {
      //  Callback to apply after settings fields values
      var callbacks = [];
      searchControls.each(function (i, el) {
        var $this = $(el);
        field = $this.closest('[data-field]').data('field');
        result = that._valuesFilterControl.filter(function (valueObj) {
          return valueObj.field === field;
        });
        if (result.length > 0) {
          if (result[0].hasFocus || result[0].value) {
            var fieldToFocusCallback = function (element, cacheElementInfo) {
              // Closure here to capture the field information
              var closedCallback = function closedCallback() {
                if (cacheElementInfo.hasFocus) {
                  element.focus();
                }
                if (Array.isArray(cacheElementInfo.value)) {
                  var $element = $(element);
                  $.each(cacheElementInfo.value, function (i, e) {
                    $element.find(Utils$1.sprintf('option[value=\'%s\']', e)).prop('selected', true);
                  });
                } else {
                  element.value = cacheElementInfo.value;
                }
                setCaretPosition(element, cacheElementInfo.position);
              };
              return closedCallback;
            }($this.get(0), result[0]);
            callbacks.push(fieldToFocusCallback);
          }
        }
      });

      // Callback call.
      if (callbacks.length > 0) {
        callbacks.forEach(function (callback) {
          return callback();
        });
      }
    }
  }
  function collectBootstrapTableFilterCookies() {
    var cookies = [];
    var cookieRegex = /bs\.table\.(filterControl|searchText)/g;
    var foundCookies = document.cookie.match(cookieRegex);
    var foundLocalStorage = localStorage;
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
    }
    if (!foundLocalStorage) {
      return cookies;
    }
    Object.keys(localStorage).forEach(function (cookie) {
      if (!cookieRegex.test(cookie)) {
        return;
      }
      cookie = cookie.split('.').pop();
      if (!cookies.includes(cookie)) {
        cookies.push(cookie);
      }
    });
    return cookies;
  }
  function escapeID(id) {
    // eslint-disable-next-line no-useless-escape
    return String(id).replace(/([:.\[\],])/g, '\\$1');
  }
  function isColumnSearchableViaSelect(_ref2) {
    var filterControl = _ref2.filterControl,
      searchable = _ref2.searchable;
    return filterControl && filterControl.toLowerCase() === 'select' && searchable;
  }
  function isFilterDataNotGiven(_ref3) {
    var filterData = _ref3.filterData;
    return filterData === undefined || filterData.toLowerCase() === 'column';
  }
  function hasSelectControlElement(selectControl) {
    return selectControl && selectControl.length > 0;
  }
  function initFilterSelectControls(that) {
    var data = that.options.data;
    $.each(that.header.fields, function (j, field) {
      var column = that.columns[that.fieldsColumnsIndex[field]];
      var selectControl = getControlContainer(that).find("select.bootstrap-table-filter-control-".concat(escapeID(column.field)));
      if (isColumnSearchableViaSelect(column) && isFilterDataNotGiven(column) && hasSelectControlElement(selectControl)) {
        if (!selectControl[0].multiple && selectControl.get(selectControl.length - 1).options.length === 0) {
          // Added the default option, must use a non-breaking space(&nbsp;) to pass the W3C validator
          addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder || ' ', column.filterDefault);
        }
        var uniqueValues = {};
        for (var i = 0; i < data.length; i++) {
          // Added a new value
          var fieldValue = Utils$1.getItemField(data[i], field, false);
          var formatter = that.options.editable && column.editable ? column._formatter : that.header.formatters[j];
          var formattedValue = Utils$1.calculateObjectValue(that.header, formatter, [fieldValue, data[i], i], fieldValue);
          if (fieldValue === undefined || fieldValue === null) {
            fieldValue = formattedValue;
            column._forceFormatter = true;
          }
          if (column.filterDataCollector) {
            formattedValue = Utils$1.calculateObjectValue(that.header, column.filterDataCollector, [fieldValue, data[i], formattedValue], formattedValue);
          }
          if (column.searchFormatter) {
            fieldValue = formattedValue;
          }
          uniqueValues[formattedValue] = fieldValue;
          if (_typeof(formattedValue) === 'object' && formattedValue !== null) {
            formattedValue.forEach(function (value) {
              addOptionToSelectControl(selectControl, value, value, column.filterDefault);
            });
            continue;
          }
        }

        // eslint-disable-next-line guard-for-in
        for (var key in uniqueValues) {
          addOptionToSelectControl(selectControl, uniqueValues[key], key, column.filterDefault);
        }
        if (that.options.sortSelectOptions) {
          sortSelectControl(selectControl, column.filterOrderBy, that.options);
        }
      }
    });
  }
  function getFilterDataMethod(objFilterDataMethod, searchTerm) {
    var keys = Object.keys(objFilterDataMethod);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === searchTerm) {
        return objFilterDataMethod[searchTerm];
      }
    }
    return null;
  }
  function createControls(that, header) {
    var addedFilterControl = false;
    var html;
    $.each(that.columns, function (_, column) {
      html = [];
      if (!column.visible && !(that.options.filterControlContainer && $(".bootstrap-table-filter-control-".concat(escapeID(column.field))).length >= 1)) {
        return;
      }
      if (!column.filterControl && !that.options.filterControlContainer) {
        html.push('<div class="no-filter-control"></div>');
      } else if (that.options.filterControlContainer) {
        // Use a filter control container instead of th
        var $filterControls = $(".bootstrap-table-filter-control-".concat(escapeID(column.field)));
        $.each($filterControls, function (_, filterControl) {
          var $filterControl = $(filterControl);
          if (!$filterControl.is('[type=radio]')) {
            var placeholder = column.filterControlPlaceholder || '';
            $filterControl.attr('placeholder', placeholder).val(column.filterDefault);
          }
          $filterControl.attr('data-field', column.field);
        });
        addedFilterControl = true;
      } else {
        // Create the control based on the html defined in the filterTemplate array.
        var nameControl = column.filterControl.toLowerCase();
        html.push('<div class="filter-control">');
        addedFilterControl = true;
        if (column.searchable && that.options.filterTemplate[nameControl]) {
          html.push(that.options.filterTemplate[nameControl](that, column, column.filterControlPlaceholder ? column.filterControlPlaceholder : '', column.filterDefault));
        }
      }

      // Filtering by default when it is set.
      if (column.filterControl && '' !== column.filterDefault && 'undefined' !== typeof column.filterDefault) {
        if ($.isEmptyObject(that.filterColumnsPartial)) {
          that.filterColumnsPartial = {};
        }
        if (!(column.field in that.filterColumnsPartial)) {
          that.filterColumnsPartial[column.field] = column.filterDefault;
        }
      }
      $.each(header.find('th'), function (_, th) {
        var $th = $(th);
        if ($th.data('field') === column.field) {
          $th.find('.filter-control').remove();
          $th.find('.fht-cell').html(html.join(''));
          return false;
        }
      });
      if (column.filterData && column.filterData.toLowerCase() !== 'column') {
        var filterDataType = getFilterDataMethod(filterDataMethods, column.filterData.substring(0, column.filterData.indexOf(':')));
        var filterDataSource;
        var selectControl;
        if (filterDataType) {
          filterDataSource = column.filterData.substring(column.filterData.indexOf(':') + 1, column.filterData.length);
          selectControl = header.find(".bootstrap-table-filter-control-".concat(escapeID(column.field)));
          addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault, true);
          filterDataType(that, filterDataSource, selectControl, that.options.filterOrderBy, column.filterDefault);
        } else {
          throw new SyntaxError('Error. You should use any of these allowed filter data methods: var, obj, json, url, func.' + ' Use like this: var: {key: "value"}');
        }
      }
    });
    if (addedFilterControl) {
      header.off('keyup', 'input').on('keyup', 'input', function (_ref4, obj) {
        var currentTarget = _ref4.currentTarget,
          keyCode = _ref4.keyCode;
        keyCode = obj ? obj.keyCode : keyCode;
        if (that.options.searchOnEnterKey && keyCode !== 13) {
          return;
        }
        if (isKeyAllowed(keyCode)) {
          return;
        }
        var $currentTarget = $(currentTarget);
        if ($currentTarget.is(':checkbox') || $currentTarget.is(':radio')) {
          return;
        }
        clearTimeout(currentTarget.timeoutId || 0);
        currentTarget.timeoutId = setTimeout(function () {
          that.onColumnSearch({
            currentTarget: currentTarget,
            keyCode: keyCode
          });
        }, that.options.searchTimeOut);
      });
      header.off('change', 'select', '.fc-multipleselect').on('change', 'select', '.fc-multipleselect', function (_ref5) {
        var currentTarget = _ref5.currentTarget,
          keyCode = _ref5.keyCode;
        var $selectControl = $(currentTarget);
        var value = $selectControl.val();
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            if (value[i] && value[i].length > 0 && value[i].trim()) {
              $selectControl.find("option[value=\"".concat(value[i], "\"]")).attr('selected', true);
            }
          }
        } else if (value && value.length > 0 && value.trim()) {
          $selectControl.find('option[selected]').removeAttr('selected');
          $selectControl.find("option[value=\"".concat(value, "\"]")).attr('selected', true);
        } else {
          $selectControl.find('option[selected]').removeAttr('selected');
        }
        clearTimeout(currentTarget.timeoutId || 0);
        currentTarget.timeoutId = setTimeout(function () {
          that.onColumnSearch({
            currentTarget: currentTarget,
            keyCode: keyCode
          });
        }, that.options.searchTimeOut);
      });
      header.off('mouseup', 'input:not([type=radio])').on('mouseup', 'input:not([type=radio])', function (_ref6) {
        var currentTarget = _ref6.currentTarget,
          keyCode = _ref6.keyCode;
        var $input = $(currentTarget);
        var oldValue = $input.val();
        if (oldValue === '') {
          return;
        }
        setTimeout(function () {
          var newValue = $input.val();
          if (newValue === '') {
            clearTimeout(currentTarget.timeoutId || 0);
            currentTarget.timeoutId = setTimeout(function () {
              that.onColumnSearch({
                currentTarget: currentTarget,
                keyCode: keyCode
              });
            }, that.options.searchTimeOut);
          }
        }, 1);
      });
      header.off('change', 'input[type=radio]').on('change', 'input[type=radio]', function (_ref7) {
        var currentTarget = _ref7.currentTarget,
          keyCode = _ref7.keyCode;
        clearTimeout(currentTarget.timeoutId || 0);
        currentTarget.timeoutId = setTimeout(function () {
          that.onColumnSearch({
            currentTarget: currentTarget,
            keyCode: keyCode
          });
        }, that.options.searchTimeOut);
      });

      // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
      if (header.find('.date-filter-control').length > 0) {
        $.each(that.columns, function (i, _ref8) {
          var filterDefault = _ref8.filterDefault,
            filterControl = _ref8.filterControl,
            field = _ref8.field,
            filterDatepickerOptions = _ref8.filterDatepickerOptions;
          if (filterControl !== undefined && filterControl.toLowerCase() === 'datepicker') {
            var $datepicker = header.find(".date-filter-control.bootstrap-table-filter-control-".concat(escapeID(field)));
            if (filterDefault) {
              $datepicker.value(filterDefault);
            }
            if (filterDatepickerOptions.min) {
              $datepicker.attr('min', filterDatepickerOptions.min);
            }
            if (filterDatepickerOptions.max) {
              $datepicker.attr('max', filterDatepickerOptions.max);
            }
            if (filterDatepickerOptions.step) {
              $datepicker.attr('step', filterDatepickerOptions.step);
            }
            if (filterDatepickerOptions.pattern) {
              $datepicker.attr('pattern', filterDatepickerOptions.pattern);
            }
            $datepicker.on('change', function (_ref9) {
              var currentTarget = _ref9.currentTarget;
              clearTimeout(currentTarget.timeoutId || 0);
              currentTarget.timeoutId = setTimeout(function () {
                that.onColumnSearch({
                  currentTarget: currentTarget
                });
              }, that.options.searchTimeOut);
            });
          }
        });
      }
      if (that.options.sidePagination !== 'server') {
        that.triggerSearch();
      }
      if (!that.options.filterControlVisible) {
        header.find('.filter-control, .no-filter-control').hide();
      }
    } else {
      header.find('.filter-control, .no-filter-control').hide();
    }
    that.trigger('created-controls');
  }
  function getDirectionOfSelectOptions(_alignment) {
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
  function syncHeaders(that) {
    if (!that.options.height) {
      return;
    }
    var fixedHeader = that.$tableContainer.find('.fixed-table-header table thead');
    if (fixedHeader.length === 0) {
      return;
    }
    that.$header.children().find('th[data-field]').each(function (_, element) {
      if (element.classList[0] !== 'bs-checkbox') {
        var $element = $(element);
        var $field = $element.data('field');
        var $fixedField = that.$tableContainer.find("th[data-field='".concat($field, "']")).not($element);
        var input = $element.find('input');
        var fixedInput = $fixedField.find('input');
        if (input.length > 0 && fixedInput.length > 0) {
          if (input.val() !== fixedInput.val()) {
            input.val(fixedInput.val());
          }
        }
      }
    });
  }
  var filterDataMethods = {
    func: function func(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var variableValues = window[filterDataSource].apply();

      // eslint-disable-next-line guard-for-in
      for (var key in variableValues) {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected);
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    },
    obj: function obj(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var objectKeys = filterDataSource.split('.');
      var variableName = objectKeys.shift();
      var variableValues = window[variableName];
      if (objectKeys.length > 0) {
        objectKeys.forEach(function (key) {
          variableValues = variableValues[key];
        });
      }

      // eslint-disable-next-line guard-for-in
      for (var key in variableValues) {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected);
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    },
    var: function _var(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var variableValues = window[filterDataSource];
      var isArray = Array.isArray(variableValues);
      for (var key in variableValues) {
        if (isArray) {
          addOptionToSelectControl(selectControl, variableValues[key], variableValues[key], selected, true);
        } else {
          addOptionToSelectControl(selectControl, key, variableValues[key], selected, true);
        }
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    },
    url: function url(that, filterDataSource, selectControl, filterOrderBy, selected) {
      $.ajax({
        url: filterDataSource,
        dataType: 'json',
        success: function success(data) {
          // eslint-disable-next-line guard-for-in
          for (var key in data) {
            addOptionToSelectControl(selectControl, key, data[key], selected);
          }
          if (that.options.sortSelectOptions) {
            sortSelectControl(selectControl, filterOrderBy, that.options);
          }
          setValues(that);
        }
      });
    },
    json: function json(that, filterDataSource, selectControl, filterOrderBy, selected) {
      var variableValues = JSON.parse(filterDataSource);

      // eslint-disable-next-line guard-for-in
      for (var key in variableValues) {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected);
      }
      if (that.options.sortSelectOptions) {
        sortSelectControl(selectControl, filterOrderBy, that.options);
      }
      setValues(that);
    }
  };

  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults, {
    filterControl: false,
    filterControlVisible: true,
    filterControlMultipleSearch: false,
    filterControlMultipleSearchDelimiter: ',',
    filterControlSearchClear: true,
    // eslint-disable-next-line no-unused-vars
    onColumnSearch: function onColumnSearch(field, text) {
      return false;
    },
    onCreatedControls: function onCreatedControls() {
      return false;
    },
    alignmentSelectControlOptions: undefined,
    filterTemplate: {
      input: function input(that, column, placeholder, value) {
        return Utils.sprintf('<input type="search" class="%s bootstrap-table-filter-control-%s search-input" style="width: 100%;" placeholder="%s" value="%s">', getInputClass(that), column.field, 'undefined' === typeof placeholder ? '' : placeholder, 'undefined' === typeof value ? '' : value);
      },
      select: function select(that, column) {
        return Utils.sprintf('<select class="%s bootstrap-table-filter-control-%s %s" %s style="width: 100%;" dir="%s"></select>', getInputClass(that, true), column.field, '', '', getDirectionOfSelectOptions(that.options.alignmentSelectControlOptions));
      },
      datepicker: function datepicker(that, column, value) {
        return Utils.sprintf('<input type="date" class="%s date-filter-control bootstrap-table-filter-control-%s" style="width: 100%;" value="%s">', getInputClass(that), column.field, 'undefined' === typeof value ? '' : value);
      }
    },
    searchOnEnterKey: false,
    showFilterControlSwitch: false,
    sortSelectOptions: false,
    // internal variables
    _valuesFilterControl: [],
    _initialized: false,
    _isRendering: false,
    _usingMultipleSelect: false
  });
  Object.assign($.fn.bootstrapTable.columnDefaults, {
    filterControl: undefined,
    // input, select, datepicker
    filterControlMultipleSelect: false,
    filterControlMultipleSelectOptions: {},
    filterDataCollector: undefined,
    filterData: undefined,
    filterDatepickerOptions: {},
    filterStrictSearch: false,
    filterStartsWithSearch: false,
    filterControlPlaceholder: '',
    filterDefault: '',
    filterOrderBy: 'asc',
    // asc || desc
    filterCustomSearch: undefined
  });
  Object.assign($.fn.bootstrapTable.events, {
    'column-search.bs.table': 'onColumnSearch',
    'created-controls.bs.table': 'onCreatedControls'
  });
  Object.assign($.fn.bootstrapTable.defaults.icons, {
    filterControlSwitchHide: {
      bootstrap3: 'glyphicon-zoom-out icon-zoom-out',
      bootstrap5: 'bi-zoom-out',
      materialize: 'zoom_out'
    }[$.fn.bootstrapTable.theme] || 'fa-search-minus',
    filterControlSwitchShow: {
      bootstrap3: 'glyphicon-zoom-in icon-zoom-in',
      bootstrap5: 'bi-zoom-in',
      materialize: 'zoom_in'
    }[$.fn.bootstrapTable.theme] || 'fa-search-plus'
  });
  Object.assign($.fn.bootstrapTable.locales, {
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Hide/Show controls';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Hide controls';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Show controls';
    },
    formatClearSearch: function formatClearSearch() {
      return 'Clear filters';
    }
  });
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
  $.fn.bootstrapTable.methods.push('triggerSearch');
  $.fn.bootstrapTable.methods.push('clearFilterControl');
  $.fn.bootstrapTable.methods.push('toggleFilterControl');
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "init",
      value: function init() {
        var _this = this;
        // Make sure that the filterControl option is set
        if (this.options.filterControl) {
          // Make sure that the internal variables are set correctly
          this._valuesFilterControl = [];
          this._initialized = false;
          this._usingMultipleSelect = false;
          this._isRendering = false;
          this.$el.on('reset-view.bs.table', Utils.debounce(function () {
            initFilterSelectControls(_this);
            setValues(_this);
          }, 3)).on('toggle.bs.table', Utils.debounce(function (_, cardView) {
            _this._initialized = false;
            if (!cardView) {
              initFilterSelectControls(_this);
              setValues(_this);
              _this._initialized = true;
            }
          }, 1)).on('post-header.bs.table', Utils.debounce(function () {
            initFilterSelectControls(_this);
            setValues(_this);
          }, 3)).on('column-switch.bs.table', Utils.debounce(function () {
            setValues(_this);
            if (_this.options.height) {
              _this.fitHeader();
            }
          }, 1)).on('post-body.bs.table', Utils.debounce(function () {
            if (_this.options.height && !_this.options.filterControlContainer && _this.options.filterControlVisible) {
              fixHeaderCSS(_this);
            }
            _this.$tableLoading.css('top', _this.$header.outerHeight() + 1);
          }, 1)).on('all.bs.table', function () {
            syncHeaders(_this);
          });
        }
        _get(_getPrototypeOf(_class.prototype), "init", this).call(this);
      }
    }, {
      key: "initBody",
      value: function initBody() {
        var _this2 = this;
        _get(_getPrototypeOf(_class.prototype), "initBody", this).call(this);
        if (!this.options.filterControl) {
          return;
        }
        setTimeout(function () {
          initFilterSelectControls(_this2);
          setValues(_this2);
        }, 3);
      }
    }, {
      key: "load",
      value: function load(data) {
        _get(_getPrototypeOf(_class.prototype), "load", this).call(this, data);
        if (!this.options.filterControl) {
          return;
        }
        createControls(this, getControlContainer(this));
        setValues(this);
      }
    }, {
      key: "initHeader",
      value: function initHeader() {
        _get(_getPrototypeOf(_class.prototype), "initHeader", this).call(this);
        if (!this.options.filterControl) {
          return;
        }
        createControls(this, getControlContainer(this));
        this._initialized = true;
      }
    }, {
      key: "initSearch",
      value: function initSearch() {
        var _this3 = this;
        var that = this;
        var filterPartial = $.isEmptyObject(that.filterColumnsPartial) ? null : that.filterColumnsPartial;
        _get(_getPrototypeOf(_class.prototype), "initSearch", this).call(this);
        if (this.options.sidePagination === 'server' || filterPartial === null) {
          return;
        }

        // Check partial column filter
        that.data = filterPartial ? that.data.filter(function (item, i) {
          var itemIsExpected = [];
          var keys1 = Object.keys(item);
          var keys2 = Object.keys(filterPartial);
          var keys = keys1.concat(keys2.filter(function (item) {
            return !keys1.includes(item);
          }));
          keys.forEach(function (key) {
            var thisColumn = that.columns[that.fieldsColumnsIndex[key]];
            var rawFilterValue = filterPartial[key] || '';
            var filterValue = rawFilterValue.toLowerCase();
            var value = Utils.unescapeHTML(Utils.getItemField(item, key, false));
            var tmpItemIsExpected;
            if (_this3.options.searchAccentNeutralise) {
              filterValue = Utils.normalizeAccent(filterValue);
            }
            var filterValues = [filterValue];
            if (_this3.options.filterControlMultipleSearch) {
              filterValues = filterValue.split(_this3.options.filterControlMultipleSearchDelimiter);
            }
            filterValues.forEach(function (filterValue) {
              if (tmpItemIsExpected === true) {
                return;
              }
              filterValue = filterValue.trim();
              if (filterValue === '') {
                tmpItemIsExpected = true;
              } else {
                // Fix #142: search use formatted data
                if (thisColumn) {
                  if (thisColumn.searchFormatter || thisColumn._forceFormatter) {
                    value = $.fn.bootstrapTable.utils.calculateObjectValue(thisColumn, that.header.formatters[$.inArray(key, that.header.fields)], [value, item, i], value);
                  }
                }
                if ($.inArray(key, that.header.fields) !== -1) {
                  if (value === undefined || value === null) {
                    tmpItemIsExpected = false;
                  } else if (_typeof(value) === 'object' && thisColumn.filterCustomSearch) {
                    itemIsExpected.push(that.isValueExpected(rawFilterValue, value, thisColumn, key));
                  } else if (_typeof(value) === 'object' && Array.isArray(value)) {
                    value.forEach(function (objectValue) {
                      if (tmpItemIsExpected) {
                        return;
                      }
                      tmpItemIsExpected = that.isValueExpected(filterValue, objectValue, thisColumn, key);
                    });
                  } else if (_typeof(value) === 'object' && !Array.isArray(value)) {
                    Object.values(value).forEach(function (objectValue) {
                      if (tmpItemIsExpected) {
                        return;
                      }
                      tmpItemIsExpected = that.isValueExpected(filterValue, objectValue, thisColumn, key);
                    });
                  } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                    tmpItemIsExpected = that.isValueExpected(filterValue, value, thisColumn, key);
                  }
                }
              }
            });
            itemIsExpected.push(tmpItemIsExpected);
          });
          return !itemIsExpected.includes(false);
        }) : that.data;
        that.unsortedData = _toConsumableArray(that.data);
      }
    }, {
      key: "isValueExpected",
      value: function isValueExpected(searchValue, value, column, key) {
        var tmpItemIsExpected;
        if (column.filterControl === 'select') {
          value = Utils.removeHTML(value.toString().toLowerCase());
        }
        if (this.options.searchAccentNeutralise) {
          value = Utils.normalizeAccent(value);
        }
        if (column.filterStrictSearch || column.filterControl === 'select' && column.passed.filterStrictSearch !== false) {
          tmpItemIsExpected = value.toString().toLowerCase() === searchValue.toString().toLowerCase();
        } else if (column.filterStartsWithSearch) {
          tmpItemIsExpected = "".concat(value).toLowerCase().indexOf(searchValue) === 0;
        } else if (column.filterControl === 'datepicker') {
          tmpItemIsExpected = new Date(value).getTime() === new Date(searchValue).getTime();
        } else if (this.options.regexSearch) {
          tmpItemIsExpected = Utils.regexCompare(value, searchValue);
        } else {
          tmpItemIsExpected = "".concat(value).toLowerCase().includes(searchValue);
        }
        var largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm;
        var matches = largerSmallerEqualsRegex.exec(searchValue);
        if (matches) {
          var operator = matches[1] || "".concat(matches[5], "l");
          var comparisonValue = matches[2] || matches[3];
          var int = parseInt(value, 10);
          var comparisonInt = parseInt(comparisonValue, 10);
          switch (operator) {
            case '>':
            case '<l':
              tmpItemIsExpected = int > comparisonInt;
              break;
            case '<':
            case '>l':
              tmpItemIsExpected = int < comparisonInt;
              break;
            case '<=':
            case '=<':
            case '>=l':
            case '=>l':
              tmpItemIsExpected = int <= comparisonInt;
              break;
            case '>=':
            case '=>':
            case '<=l':
            case '=<l':
              tmpItemIsExpected = int >= comparisonInt;
              break;
          }
        }
        if (column.filterCustomSearch) {
          var customSearchResult = Utils.calculateObjectValue(column, column.filterCustomSearch, [searchValue, value, key, this.options.data], true);
          if (customSearchResult !== null) {
            tmpItemIsExpected = customSearchResult;
          }
        }
        return tmpItemIsExpected;
      }
    }, {
      key: "initColumnSearch",
      value: function initColumnSearch(filterColumnsDefaults) {
        cacheValues(this);
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
      key: "initToolbar",
      value: function initToolbar() {
        this.showToolbar = this.showToolbar || this.options.showFilterControlSwitch;
        this.showSearchClearButton = this.options.filterControl && this.options.showSearchClearButton;
        if (this.options.showFilterControlSwitch) {
          this.buttons = Object.assign(this.buttons, {
            filterControlSwitch: {
              text: this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow(),
              icon: this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow,
              event: this.toggleFilterControl,
              attributes: {
                'aria-label': this.options.formatFilterControlSwitch(),
                title: this.options.formatFilterControlSwitch()
              }
            }
          });
        }
        _get(_getPrototypeOf(_class.prototype), "initToolbar", this).call(this);
      }
    }, {
      key: "resetSearch",
      value: function resetSearch(text) {
        if (this.options.filterControl && this.options.filterControlSearchClear && this.options.showSearchClearButton) {
          this.clearFilterControl();
        }
        _get(_getPrototypeOf(_class.prototype), "resetSearch", this).call(this, text);
      }
    }, {
      key: "clearFilterControl",
      value: function clearFilterControl() {
        if (!this.options.filterControl) {
          return;
        }
        var that = this;
        var table = this.$el.closest('table');
        var cookies = collectBootstrapTableFilterCookies();
        var controls = getSearchControls(that);
        // const search = Utils.getSearchInput(this)
        var hasValues = false;
        var timeoutId = 0;

        // Clear cache values
        $.each(that._valuesFilterControl, function (i, item) {
          hasValues = hasValues ? true : item.value !== '';
          item.value = '';
        });

        // Clear controls in UI
        $.each(controls, function (i, item) {
          item.value = '';
        });

        // Cache controls again
        setValues(that);

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
          controls.eq(0).trigger(this.tagName === 'INPUT' ? 'keyup' : 'change', {
            keyCode: 13
          });
          /* controls.each(function () {
            $(this).trigger(this.tagName === 'INPUT' ? 'keyup' : 'change', { keyCode: 13 })
          })*/
        } else {
          return;
        }

        /* if (search.length > 0) {
          that.resetSearch('fc')
        }*/

        // use the default sort order if it exists. do nothing if it does not
        if (that.options.sortName !== table.data('sortName') || that.options.sortOrder !== table.data('sortOrder')) {
          var sorter = this.$header.find(Utils.sprintf('[data-field="%s"]', $(controls[0]).closest('table').data('sortName')));
          if (sorter.length > 0) {
            that.onSort({
              type: 'keypress',
              currentTarget: sorter
            });
            $(sorter).find('.sortable').trigger('click');
          }
        }
      }

      // EVENTS
    }, {
      key: "onColumnSearch",
      value: function onColumnSearch(_ref) {
        var _this4 = this;
        var currentTarget = _ref.currentTarget,
          keyCode = _ref.keyCode;
        if (isKeyAllowed(keyCode)) {
          return;
        }
        cacheValues(this);

        // Cookie extension support
        if (!this.options.cookie) {
          this.options.pageNumber = 1;
        } else {
          // Force call the initServer method in Cookie extension
          this._filterControlValuesLoaded = true;
        }
        if ($.isEmptyObject(this.filterColumnsPartial)) {
          this.filterColumnsPartial = {};
        }

        // If searchOnEnterKey is set to true, then we need to iterate over all controls and grab their values.
        var controls = this.options.searchOnEnterKey ? getSearchControls(this).toArray() : [currentTarget];
        controls.forEach(function (element) {
          var $element = $(element);
          var elementValue = $element.val();
          var text = elementValue ? elementValue.trim() : '';
          var $field = $element.closest('[data-field]').data('field');
          _this4.trigger('column-search', $field, text);
          if (text) {
            _this4.filterColumnsPartial[$field] = text;
          } else {
            delete _this4.filterColumnsPartial[$field];
          }
        });
        this.onSearch({
          currentTarget: currentTarget
        }, false);
      }
    }, {
      key: "toggleFilterControl",
      value: function toggleFilterControl() {
        this.options.filterControlVisible = !this.options.filterControlVisible;
        // Controls in original header or container.
        var $filterControls = getControlContainer(this).find('.filter-control, .no-filter-control');
        if (this.options.filterControlVisible) {
          $filterControls.show();
        } else {
          $filterControls.hide();
          this.clearFilterControl();
        }

        // Controls in fixed header
        if (this.options.height) {
          var $fixedControls = this.$tableContainer.find('.fixed-table-header table thead').find('.filter-control, .no-filter-control');
          $fixedControls.toggle(this.options.filterControlVisible);
          fixHeaderCSS(this);
        }
        var icon = this.options.showButtonIcons ? this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow : '';
        var text = this.options.showButtonText ? this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow() : '';
        this.$toolbar.find('>.columns').find('.filter-control-switch').html("".concat(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon), " ").concat(text));
      }
    }, {
      key: "triggerSearch",
      value: function triggerSearch() {
        var searchControls = getSearchControls(this);
        searchControls.each(function () {
          var $element = $(this);
          if ($element.is('select')) {
            $element.trigger('change');
          } else {
            $element.trigger('keyup');
          }
        });
      }
    }, {
      key: "_toggleColumn",
      value: function _toggleColumn(index, checked, needUpdate) {
        this._initialized = false;
        _get(_getPrototypeOf(_class.prototype), "_toggleColumn", this).call(this, index, checked, needUpdate);
        syncHeaders(this);
      }
    }]);
  }($.BootstrapTable);

}));
