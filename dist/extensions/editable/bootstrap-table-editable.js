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
    global.bootstrapTableEditable = mod.exports;
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
   * @author zhixin wen <wenzhixin2010@gmail.com>
   * extensions: https://github.com/vitalets/x-editable
   */

  (function ($) {
    var Utils = $.fn.bootstrapTable.utils;

    $.extend($.fn.bootstrapTable.defaults, {
      editable: true,
      onEditableInit: function onEditableInit() {
        return false;
      },
      onEditableSave: function onEditableSave(field, row, oldValue, $el) {
        return false;
      },
      onEditableShown: function onEditableShown(field, row, $el, editable) {
        return false;
      },
      onEditableHidden: function onEditableHidden(field, row, $el, reason) {
        return false;
      }
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
      'editable-init.bs.table': 'onEditableInit',
      'editable-save.bs.table': 'onEditableSave',
      'editable-shown.bs.table': 'onEditableShown',
      'editable-hidden.bs.table': 'onEditableHidden'
    });

    $.BootstrapTable = function (_$$BootstrapTable) {
      _inherits(_class, _$$BootstrapTable);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'initTable',
        value: function initTable() {
          var _this2 = this;

          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initTable', this).call(this);

          if (!this.options.editable) {
            return;
          }

          $.each(this.columns, function (i, column) {
            if (!column.editable) {
              return;
            }

            var editableOptions = {};
            var editableDataMarkup = [];
            var editableDataPrefix = 'editable-';
            var processDataOptions = function processDataOptions(key, value) {
              // Replace camel case with dashes.
              var dashKey = key.replace(/([A-Z])/g, function ($1) {
                return '-' + $1.toLowerCase();
              });
              if (dashKey.indexOf(editableDataPrefix) === 0) {
                editableOptions[dashKey.replace(editableDataPrefix, 'data-')] = value;
              }
            };

            $.each(_this2.options, processDataOptions);

            column.formatter = column.formatter || function (value) {
              return value;
            };
            column._formatter = column._formatter ? column._formatter : column.formatter;
            column.formatter = function (value, row, index) {
              var result = Utils.calculateObjectValue(column, column._formatter, [value, row, index], value);

              $.each(column, processDataOptions);

              $.each(editableOptions, function (key, value) {
                editableDataMarkup.push(' ' + key + '="' + value + '"');
              });

              var _dont_edit_formatter = false;
              if (column.editable.hasOwnProperty('noeditFormatter')) {
                _dont_edit_formatter = column.editable.noeditFormatter(value, row, index);
              }

              if (_dont_edit_formatter === false) {
                return '<a href="javascript:void(0)"\n              data-name="' + column.field + '"\n              data-pk="' + row[_this2.options.idField] + '"\n              data-value="' + result + '"\n              ' + editableDataMarkup.join('') + '></a>';
              }
              return _dont_edit_formatter;
            };
          });
        }
      }, {
        key: 'initBody',
        value: function initBody(fixedScroll) {
          var _this3 = this;

          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initBody', this).call(this, fixedScroll);

          if (!this.options.editable) {
            return;
          }

          $.each(this.columns, function (i, column) {
            if (!column.editable) {
              return;
            }

            var data = _this3.getData();
            var $field = _this3.$body.find('a[data-name="' + column.field + '"]');

            $field.each(function (i, element) {
              var $element = $(element);
              var $tr = $element.closest('tr');
              var index = $tr.data('index');
              var row = data[index];

              var editableOpts = Utils.calculateObjectValue(column, column.editable, [index, row, $element], {});

              $element.editable(editableOpts);
            });

            $field.off('save').on('save', function (_ref, _ref2) {
              var currentTarget = _ref.currentTarget;
              var submitValue = _ref2.submitValue;

              var $this = $(currentTarget);
              var data = _this3.getData();
              var index = $this.parents('tr[data-index]').data('index');
              var row = data[index];
              var oldValue = row[column.field];

              $this.data('value', submitValue);
              row[column.field] = submitValue;
              _this3.trigger('editable-save', column.field, row, oldValue, $this);
              _this3.resetFooter();
            });

            $field.off('shown').on('shown', function (_ref3, editable) {
              var currentTarget = _ref3.currentTarget;

              var $this = $(currentTarget);
              var data = _this3.getData();
              var index = $this.parents('tr[data-index]').data('index');
              var row = data[index];

              _this3.trigger('editable-shown', column.field, row, $this, editable);
            });

            $field.off('hidden').on('hidden', function (_ref4, reason) {
              var currentTarget = _ref4.currentTarget;

              var $this = $(currentTarget);
              var data = _this3.getData();
              var index = $this.parents('tr[data-index]').data('index');
              var row = data[index];

              _this3.trigger('editable-hidden', column.field, row, $this, reason);
            });
          });
          this.trigger('editable-init');
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});