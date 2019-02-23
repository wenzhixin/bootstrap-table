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
    global.bootstrapTableAutoRefresh = mod.exports;
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
   * @author: Alec Fenichel
   * @webSite: https://fenichelar.com
   * @update: zhixin wen <wenzhixin2010@gmail.com>
   */

  (function ($) {
    var Utils = $.fn.bootstrapTable.utils;

    $.extend($.fn.bootstrapTable.defaults, {
      autoRefresh: false,
      autoRefreshInterval: 60,
      autoRefreshSilent: true,
      autoRefreshStatus: true,
      autoRefreshFunction: null
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
      autoRefresh: Utils.bootstrapVersion === 4 ? 'fa-clock' : 'glyphicon-time icon-time'
    });

    $.extend($.fn.bootstrapTable.locales, {
      formatAutoRefresh: function formatAutoRefresh() {
        return 'Auto Refresh';
      }
    });

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    $.BootstrapTable = function (_$$BootstrapTable) {
      _inherits(_class, _$$BootstrapTable);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'init',
        value: function init() {
          var _get2,
              _this2 = this;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_get2 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'init', this)).call.apply(_get2, [this].concat(args));

          if (this.options.autoRefresh && this.options.autoRefreshStatus) {
            this.options.autoRefreshFunction = setInterval(function () {
              _this2.refresh({ silent: _this2.options.autoRefreshSilent });
            }, this.options.autoRefreshInterval * 1000);
          }
        }
      }, {
        key: 'initToolbar',
        value: function initToolbar() {
          var _get3;

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_get3 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initToolbar', this)).call.apply(_get3, [this].concat(args));

          if (this.options.autoRefresh) {
            var $btnGroup = this.$toolbar.find('>.btn-group');
            var $btnAutoRefresh = $btnGroup.find('.auto-refresh');

            if (!$btnAutoRefresh.length) {
              $btnAutoRefresh = $('\n            <button class="auto-refresh btn' + Utils.sprintf(' btn-%s', this.options.buttonsClass) + '\n            ' + Utils.sprintf(' btn-%s', this.options.iconSize) + '\n            ' + (this.options.autoRefreshStatus ? 'active' : '') + '"\n            type="button" title="' + this.options.formatAutoRefresh() + '">\n            <i class="' + this.options.iconsPrefix + ' ' + this.options.icons.autoRefresh + '"></i>\n            </button>\n          ').appendTo($btnGroup);

              $btnAutoRefresh.on('click', $.proxy(this.toggleAutoRefresh, this));
            }
          }
        }
      }, {
        key: 'toggleAutoRefresh',
        value: function toggleAutoRefresh() {
          var _this3 = this;

          if (this.options.autoRefresh) {
            if (this.options.autoRefreshStatus) {
              clearInterval(this.options.autoRefreshFunction);
              this.$toolbar.find('>.btn-group').find('.auto-refresh').removeClass('active');
            } else {
              this.options.autoRefreshFunction = setInterval(function () {
                _this3.refresh({ silent: _this3.options.autoRefreshSilent });
              }, this.options.autoRefreshInterval * 1000);
              this.$toolbar.find('>.btn-group').find('.auto-refresh').addClass('active');
            }
            this.options.autoRefreshStatus = !this.options.autoRefreshStatus;
          }
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});