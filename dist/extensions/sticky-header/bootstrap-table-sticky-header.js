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
    global.bootstrapTableStickyHeader = mod.exports;
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
   * @author vincent loh <vincent.ml@gmail.com>
   * @update J Manuel Corona <jmcg92@gmail.com>
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  (function ($) {
    var Utils = $.fn.bootstrapTable.utils;

    $.extend($.fn.bootstrapTable.defaults, {
      stickyHeader: false,
      stickyHeaderOffsetY: 0
    });

    var hiddenClass = Utils.bootstrapVersion === 4 ? 'd-none' : 'hidden';

    $.BootstrapTable = function (_$$BootstrapTable) {
      _inherits(_class, _$$BootstrapTable);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'initHeader',
        value: function initHeader() {
          var _get2,
              _this2 = this;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_get2 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initHeader', this)).call.apply(_get2, [this].concat(args));

          if (!this.options.stickyHeader) {
            return;
          }

          this.$el.before('<div class="sticky-header-container"></div>');
          this.$el.before('<div class="sticky_anchor_begin"></div>');
          this.$el.after('<div class="sticky_anchor_end"></div>');
          this.$header.addClass('sticky-header');

          // clone header just once, to be used as sticky header
          // deep clone header, using source header affects tbody>td width
          this.$stickyContainer = this.$tableBody.find('.sticky-header-container');
          this.$stickyBegin = this.$tableBody.find('.sticky_anchor_begin');
          this.$stickyEnd = this.$tableBody.find('.sticky_anchor_end');
          this.$stickyHeader = this.$header.clone(true, true);

          // render sticky on window scroll or resize
          $(window).on('resize.sticky-header-table', function () {
            return _this2.renderStickyHeader();
          });
          $(window).on('scroll.sticky-header-table', function () {
            return _this2.renderStickyHeader();
          });
          this.$tableBody.off('scroll').on('scroll', function () {
            return _this2.matchPositionX();
          });
        }
      }, {
        key: 'renderStickyHeader',
        value: function renderStickyHeader() {
          var _this3 = this;

          var top = $(window).scrollTop();
          // top anchor scroll position, minus header height
          var start = this.$stickyBegin.offset().top - this.options.stickyHeaderOffsetY;
          // bottom anchor scroll position, minus header height, minus sticky height
          var end = this.$stickyEnd.offset().top - this.options.stickyHeaderOffsetY - this.$header.height();
          // show sticky when top anchor touches header, and when bottom anchor not exceeded
          if (top > start && top <= end) {
            // ensure clone and source column widths are the same
            this.$stickyHeader.find('tr:eq(0)').find('th').each(function (index, el) {
              $(el).css('min-width', _this3.$header.find('tr:eq(0)').find('th').eq(index).css('width'));
            });
            // match bootstrap table style
            this.$stickyContainer.removeClass(hiddenClass).addClass('fix-sticky fixed-table-container');
            // stick it in position
            this.$stickyContainer.css('top', this.options.stickyHeaderOffsetY + 'px');
            // create scrollable container for header
            this.$stickyTable = $('<table/>');
            this.$stickyTable.addClass(this.options.classes);
            // append cloned header to dom
            this.$stickyContainer.html(this.$stickyTable.append(this.$stickyHeader));
            // match clone and source header positions when left-right scroll
            this.matchPositionX();
          } else {
            this.$stickyContainer.removeClass('fix-sticky').addClass(hiddenClass);
          }
        }
      }, {
        key: 'matchPositionX',
        value: function matchPositionX() {
          this.$stickyContainer.scrollLeft(this.$tableBody.scrollLeft());
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});