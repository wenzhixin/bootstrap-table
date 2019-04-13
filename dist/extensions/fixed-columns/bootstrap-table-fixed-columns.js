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
    global.bootstrapTableFixedColumns = mod.exports;
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
   */

  (function ($) {
    $.extend($.fn.bootstrapTable.defaults, {
      fixedColumns: false,
      fixedNumber: 1
    });

    $.BootstrapTable = function (_$$BootstrapTable) {
      _inherits(_class, _$$BootstrapTable);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'fitHeader',
        value: function fitHeader() {
          var _get2;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_get2 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'fitHeader', this)).call.apply(_get2, [this].concat(args));

          if (!this.options.fixedColumns) {
            return;
          }

          if (this.$el.is(':hidden')) {
            return;
          }

          this.$container.find('.fixed-table-header-columns').remove();
          this.$fixedHeader = $('<div class="fixed-table-header-columns"></div>');
          this.$fixedHeader.append(this.$tableHeader.find('>table').clone(true));
          this.$tableHeader.after(this.$fixedHeader);

          var width = this.getFixedColumnsWidth();

          this.$fixedHeader.css({
            top: 0,
            width: width,
            height: this.$tableHeader.outerHeight(true)
          });

          this.initFixedColumnsBody();

          this.$fixedBody.css({
            top: this.$tableHeader.outerHeight(true),
            width: width,
            height: this.$tableBody.outerHeight(true) - 1
          });

          this.initFixedColumnsEvents();
        }
      }, {
        key: 'initBody',
        value: function initBody() {
          var _get3;

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_get3 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initBody', this)).call.apply(_get3, [this].concat(args));

          if (!this.options.fixedColumns) {
            return;
          }

          if (this.options.showHeader && this.options.height) {
            return;
          }

          this.initFixedColumnsBody();

          this.$fixedBody.css({
            top: 0,
            width: this.getFixedColumnsWidth(),
            height: this.$tableHeader.outerHeight(true) + this.$tableBody.outerHeight(true)
          });

          this.initFixedColumnsEvents();
        }
      }, {
        key: 'initFixedColumnsBody',
        value: function initFixedColumnsBody() {
          this.$container.find('.fixed-table-body-columns').remove();
          this.$fixedBody = $('<div class="fixed-table-body-columns"></div>');
          this.$fixedBody.append(this.$tableBody.find('>table').clone(true));
          this.$tableBody.after(this.$fixedBody);
        }
      }, {
        key: 'getFixedColumnsWidth',
        value: function getFixedColumnsWidth() {
          var visibleFields = this.getVisibleFields();
          var width = 0;

          for (var i = 0; i < this.options.fixedNumber; i++) {
            width += this.$header.find('th[data-field="' + visibleFields[i] + '"]').outerWidth(true);
          }

          return width + 1;
        }
      }, {
        key: 'initFixedColumnsEvents',
        value: function initFixedColumnsEvents() {
          var _this2 = this;

          // events
          this.$tableBody.off('scroll.fixed-columns').on('scroll.fixed-columns', function (e) {
            _this2.$fixedBody.find('table').css('top', -$(e.currentTarget).scrollTop());
          });

          this.$body.find('> tr[data-index]').off('hover').hover(function (e) {
            var index = $(e.currentTarget).data('index');
            _this2.$fixedBody.find('tr[data-index="' + index + '"]').css('background-color', $(e.currentTarget).css('background-color'));
          }, function (e) {
            var index = $(e.currentTarget).data('index');
            var $tr = _this2.$fixedBody.find('tr[data-index="' + index + '"]');
            $tr.attr('style', $tr.attr('style').replace(/background-color:.*;/, ''));
          });

          this.$fixedBody.find('tr[data-index]').off('hover').hover(function (e) {
            var index = $(e.currentTarget).data('index');
            _this2.$body.find('tr[data-index="' + index + '"]').css('background-color', $(e.currentTarget).css('background-color'));
          }, function (e) {
            var index = $(e.currentTarget).data('index');
            var $tr = _this2.$body.find('> tr[data-index="' + index + '"]');
            $tr.attr('style', $tr.attr('style').replace(/background-color:.*;/, ''));
          });
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});