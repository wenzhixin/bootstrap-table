(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.array.sort.js'), require('core-js/modules/es.function.name.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.array.sort.js', 'core-js/modules/es.function.name.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/web.dom-collections.for-each.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_filter_js, es_array_find_js, es_array_join_js, es_array_slice_js, es_array_sort_js, es_function_name_js, es_object_assign_js, es_object_toString_js, web_domCollections_forEach_js, $) { 'use strict';

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

  /**
   * @author: Yura Knoxville
   * @version: v1.1.0
   */

  var Utils = $.fn.bootstrapTable.utils;
  var initBodyCaller;
  var groupBy = function groupBy(array, f) {
    var tmpGroups = {};
    array.forEach(function (o) {
      var groups = f(o);
      tmpGroups[groups] = tmpGroups[groups] || [];
      tmpGroups[groups].push(o);
    });
    return tmpGroups;
  };
  Object.assign($.fn.bootstrapTable.defaults.icons, {
    collapseGroup: {
      bootstrap3: 'glyphicon-chevron-up',
      bootstrap5: 'bi-chevron-up',
      materialize: 'arrow_drop_down'
    }[$.fn.bootstrapTable.theme] || 'fa-angle-up',
    expandGroup: {
      bootstrap3: 'glyphicon-chevron-down',
      bootstrap5: 'bi-chevron-down',
      materialize: 'arrow_drop_up'
    }[$.fn.bootstrapTable.theme] || 'fa-angle-down'
  });
  Object.assign($.fn.bootstrapTable.defaults, {
    groupBy: false,
    groupByField: '',
    groupByFormatter: undefined,
    groupByToggle: false,
    groupByShowToggleIcon: false,
    groupByCollapsedGroups: []
  });
  var BootstrapTable = $.fn.bootstrapTable.Constructor;
  var _initSort = BootstrapTable.prototype.initSort;
  var _initBody = BootstrapTable.prototype.initBody;
  var _updateSelected = BootstrapTable.prototype.updateSelected;
  BootstrapTable.prototype.initSort = function () {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _initSort.apply(this, Array.prototype.slice.apply(args));
    var that = this;
    this.tableGroups = [];
    if (this.options.groupBy && this.options.groupByField !== '') {
      if (this.options.sortName !== this.options.groupByField) {
        if (this.options.customSort) {
          Utils.calculateObjectValue(this.options, this.options.customSort, [this.options.sortName, this.options.sortOrder, this.data]);
        } else {
          this.options.data.sort(function (a, b) {
            var groupByFields = _this.getGroupByFields();
            var fieldValuesA = [];
            var fieldValuesB = [];
            $.each(groupByFields, function (i, field) {
              fieldValuesA.push(a[field]);
              fieldValuesB.push(b[field]);
            });
            a = fieldValuesA.join();
            b = fieldValuesB.join();
            return a.localeCompare(b, undefined, {
              numeric: true
            });
          });
        }
      }
      var groups = groupBy(that.data, function (item) {
        var groupByFields = _this.getGroupByFields();
        var groupValues = [];
        $.each(groupByFields, function (i, field) {
          var value_ = Utils.getItemField(item, field, that.options.escape, item.escape);
          groupValues.push(value_);
        });
        return groupValues.join(', ');
      });
      var index = 0;
      $.each(groups, function (key, value) {
        _this.tableGroups.push({
          id: index,
          name: key,
          data: value
        });
        value.forEach(function (item) {
          if (!item._data) {
            item._data = {};
          }
          if (_this.isCollapsed(key, value)) {
            item._class += ' hidden';
          }
          item._data['parent-index'] = index;
        });
        index++;
      });
    }
  };
  BootstrapTable.prototype.initBody = function () {
    var _this2 = this;
    initBodyCaller = true;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _initBody.apply(this, Array.prototype.slice.apply(args));
    if (this.options.groupBy && this.options.groupByField !== '') {
      var that = this;
      var checkBox = false;
      var visibleColumns = 0;
      this.columns.forEach(function (column) {
        if (column.checkbox && !that.options.singleSelect) {
          checkBox = true;
        } else if (column.visible) {
          visibleColumns += 1;
        }
      });
      if (this.options.detailView && !this.options.cardView) {
        visibleColumns += 1;
      }
      this.tableGroups.forEach(function (item) {
        var html = [];
        html.push(Utils.sprintf('<tr class="info group-by %s" data-group-index="%s">', _this2.options.groupByToggle ? 'expanded' : '', item.id));
        if (that.options.detailView && !that.options.cardView) {
          html.push('<td class="detail"></td>');
        }
        if (checkBox) {
          html.push('<td class="bs-checkbox">', '<input name="btSelectGroup" type="checkbox" />', '</td>');
        }
        var formattedValue = item.name;
        if (that.options.groupByFormatter !== undefined) {
          formattedValue = Utils.calculateObjectValue(that.options, that.options.groupByFormatter, [item.name, item.id, item.data]);
        }
        html.push('<td', Utils.sprintf(' colspan="%s"', visibleColumns), '>', formattedValue);
        var icon = _this2.options.icons.collapseGroup;
        if (_this2.isCollapsed(item.name, item.data)) {
          icon = _this2.options.icons.expandGroup;
        }
        if (_this2.options.groupByToggle && _this2.options.groupByShowToggleIcon) {
          html.push("<span class=\"float-right ".concat(_this2.options.iconsPrefix, " ").concat(icon, "\"></span>"));
        }
        html.push('</td></tr>');
        that.$body.find("tr[data-parent-index=".concat(item.id, "]:first")).before($(html.join('')));
      });
      this.$selectGroup = [];
      this.$body.find('[name="btSelectGroup"]').each(function () {
        var self = $(this);
        that.$selectGroup.push({
          group: self,
          item: that.$selectItem.filter(function () {
            return $(this).closest('tr').data('parent-index') === self.closest('tr').data('group-index');
          })
        });
      });
      if (this.options.groupByToggle) {
        this.$container.off('click', '.group-by').on('click', '.group-by', function () {
          var $this = $(this);
          var groupIndex = $this.closest('tr').data('group-index');
          var $groupRows = that.$body.find("tr[data-parent-index=".concat(groupIndex, "]"));
          $this.toggleClass('expanded collapsed');
          $this.find('span').toggleClass("".concat(that.options.icons.collapseGroup, " ").concat(that.options.icons.expandGroup));
          $groupRows.toggleClass('hidden');
          $groupRows.each(function (i, element) {
            return that.collapseRow($(element).data('index'));
          });
        });
      }
      this.$container.off('click', '[name="btSelectGroup"]').on('click', '[name="btSelectGroup"]', function (event) {
        event.stopImmediatePropagation();
        var self = $(this);
        var checked = self.prop('checked');
        that[checked ? 'checkGroup' : 'uncheckGroup']($(this).closest('tr').data('group-index'));
      });
    }
    initBodyCaller = false;
    this.updateSelected();
  };
  BootstrapTable.prototype.updateSelected = function () {
    if (!initBodyCaller) {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      _updateSelected.apply(this, Array.prototype.slice.apply(args));
      if (this.options.groupBy && this.options.groupByField !== '') {
        this.$selectGroup.forEach(function (item) {
          var checkGroup = item.item.filter(':enabled').length === item.item.filter(':enabled').filter(':checked').length;
          item.group.prop('checked', checkGroup);
        });
      }
    }
  };
  BootstrapTable.prototype.checkGroup = function (index) {
    this.checkGroup_(index, true);
  };
  BootstrapTable.prototype.uncheckGroup = function (index) {
    this.checkGroup_(index, false);
  };
  BootstrapTable.prototype.isCollapsed = function (groupKey, items) {
    if (this.options.groupByCollapsedGroups) {
      var collapsedGroups = Utils.calculateObjectValue(this, this.options.groupByCollapsedGroups, [groupKey, items], true);
      if ($.inArray(groupKey, collapsedGroups) > -1) {
        return true;
      }
    }
    return false;
  };
  BootstrapTable.prototype.checkGroup_ = function (index, checked) {
    var rowsBefore = this.getSelections();
    var filter = function filter() {
      return $(this).closest('tr').data('parent-index') === index;
    };
    this.$selectItem.filter(filter).prop('checked', checked);
    this.updateRows();
    this.updateSelected();
    var rowsAfter = this.getSelections();
    if (checked) {
      this.trigger('check-all', rowsAfter, rowsBefore);
      return;
    }
    this.trigger('uncheck-all', rowsAfter, rowsBefore);
  };
  BootstrapTable.prototype.getGroupByFields = function () {
    var groupByFields = this.options.groupByField;
    if (!$.isArray(this.options.groupByField)) {
      groupByFields = [this.options.groupByField];
    }
    return groupByFields;
  };
  $.BootstrapTable = /*#__PURE__*/function (_$$BootstrapTable) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _$$BootstrapTable);
    return _createClass(_class, [{
      key: "scrollTo",
      value: function scrollTo(params) {
        if (this.options.groupBy) {
          var options = {
            unit: 'px',
            value: 0
          };
          if (_typeof(params) === 'object') {
            options = Object.assign(options, params);
          }
          if (options.unit === 'rows') {
            var scrollTo = 0;
            this.$body.find("> tr:not(.group-by):lt(".concat(options.value, ")")).each(function (i, el) {
              scrollTo += $(el).outerHeight(true);
            });
            var $targetColumn = this.$body.find("> tr:not(.group-by):eq(".concat(options.value, ")"));
            $targetColumn.prevAll('.group-by').each(function (i, el) {
              scrollTo += $(el).outerHeight(true);
            });
            this.$tableBody.scrollTop(scrollTo);
            return;
          }
        }
        _get(_getPrototypeOf(_class.prototype), "scrollTo", this).call(this, params);
      }
    }]);
  }($.BootstrapTable);

}));
