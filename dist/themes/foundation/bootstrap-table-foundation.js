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
    global.bootstrapTableFoundation = mod.exports;
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
   * https://github.com/wenzhixin/bootstrap-table/
   * theme: https://github.com/zurb/foundation-sites
   */

  (function ($) {
    $.extend($.fn.bootstrapTable.defaults, {
      classes: 'table hover',
      buttonsPrefix: '',
      buttonsClass: 'button'
    });

    $.BootstrapTable = function (_$$BootstrapTable) {
      _inherits(_class, _$$BootstrapTable);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'initConstants',
        value: function initConstants() {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initConstants', this).call(this);

          this.constants.theme = 'foundation';

          this.constants.classes.buttonsGroup = 'button-group';
          this.constants.classes.buttonsDropdown = 'button dropdown-container';
          this.constants.classes.paginationDropdown = '';
          this.constants.classes.dropdownActive = 'is-active';
          this.constants.classes.paginationActive = 'current';

          this.constants.html.toobarDropdow = ['<ul class="dropdown-pane" id="toolbar-dropdown" data-dropdown><ul class="vertical menu">', '</ul></div>'];
          this.constants.html.toobarDropdowItem = '<li><label class="dropdown-item">%s</label></li>';
          this.constants.html.pageDropdown = ['<ul class="dropdown-pane" id="page-list-dropdown" data-dropdown><ul class="vertical menu">', '</ul></ul>'];
          this.constants.html.pageDropdownItem = '<li class="dropdown-item %s"><a href="#">%s</a></li>';
          this.constants.html.dropdownCaret = '<i class="fa fa-angle-down"></i>';
          this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>'], this.constants.html.paginationItem = '<li><a class="page-item%s" href="#">%s</a></li>';
        }
      }, {
        key: 'initToolbar',
        value: function initToolbar() {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initToolbar', this).call(this);

          if (this.options.showColumns) {
            this.$toolbar.find('.keep-open').attr('data-toggle', 'toolbar-dropdown');
            var $pane = this.$toolbar.find('.dropdown-pane').attr('data-position', 'bottom').attr('data-alignment', 'right');
            new window.Foundation.Dropdown($pane);
            this._initDropdown();
          }
        }
      }, {
        key: 'initPagination',
        value: function initPagination() {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initPagination', this).call(this);

          if (this.options.pagination && !this.options.onlyInfoPagination) {
            this.$pagination.find('.dropdown-toggle').attr('data-toggle', 'page-list-dropdown');
            var $pane = this.$pagination.find('.dropdown-pane').attr('data-position', 'top').attr('data-alignment', 'left');
            new window.Foundation.Dropdown($pane);
          }
        }
      }, {
        key: '_initDropdown',
        value: function _initDropdown($el) {
          var $dropdowns = this.$container.find('.dropdown-container');

          $dropdowns.off('click').on('click', function (e) {
            e.stopPropagation();
            $dropdowns.find('.dropdown-pane').foundation('toggle');
          });

          $(document).off('click.bs.dropdown.foundation').on('click.bs.dropdown.foundation', function () {
            $dropdowns.find('.dropdown-pane').foundation('close');
          });
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});