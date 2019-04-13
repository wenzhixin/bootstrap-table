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
    global.bootstrapTableBulma = mod.exports;
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
   * theme: https://github.com/jgthms/bulma/
   */

  (function ($) {
    $.extend($.fn.bootstrapTable.defaults, {
      classes: 'table is-bordered is-hoverable',
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

          this.constants.theme = 'bulma';

          this.constants.classes.buttonsGroup = 'buttons has-addons';
          this.constants.classes.buttonsDropdown = 'button dropdown is-right';
          this.constants.classes.input = 'input';
          this.constants.classes.paginationDropdown = 'ui dropdown';
          this.constants.classes.dropup = 'is-up';
          this.constants.classes.dropdownActive = 'is-active';
          this.constants.classes.paginationActive = 'is-current';

          this.constants.html.toobarDropdow = ['<div class="dropdown-menu"><div class="dropdown-content">', '</div></div>'];
          this.constants.html.toobarDropdowItem = '<label class="dropdown-item">%s</label>';
          this.constants.html.pageDropdown = ['<div class="dropdown-menu"><div class="dropdown-content">', '</div></div>'];
          this.constants.html.pageDropdownItem = '<a class="dropdown-item %s" href="#">%s</a>';
          this.constants.html.dropdownCaret = '<span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"></i></span>';
          this.constants.html.pagination = ['<ul class="pagination%s">', '</ul>'], this.constants.html.paginationItem = '<li><a class="page-item pagination-link%s" href="#">%s</a></li>';
        }
      }, {
        key: 'initToolbar',
        value: function initToolbar() {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initToolbar', this).call(this);
          if (this.options.showColumns) {
            this._initDropdown();
          }
        }
      }, {
        key: 'initPagination',
        value: function initPagination() {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initPagination', this).call(this);
          if (this.options.pagination && !this.options.onlyInfoPagination) {
            this._initDropdown();
          }
        }
      }, {
        key: '_initDropdown',
        value: function _initDropdown($el) {
          var $dropdowns = this.$container.find('.dropdown:not(.is-hoverable)');

          $dropdowns.off('click').on('click', function (e) {
            e.stopPropagation();
            $(e.currentTarget).toggleClass('is-active');
          });

          $(document).off('click.bs.dropdown.bulma').on('click.bs.dropdown.bulma', function () {
            $dropdowns.removeClass('is-active');
          });
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});