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
    global.bootstrapTableSemantic = mod.exports;
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
   * theme: https://github.com/Semantic-Org/Semantic-UI
   */

  (function ($) {
    $.extend($.fn.bootstrapTable.defaults, {
      classes: 'ui selectable celled table',
      buttonsPrefix: '',
      buttonsClass: 'ui button'
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

          this.constants.theme = 'semantic';

          this.constants.classes.buttonsGroup = 'ui buttons';
          this.constants.classes.buttonsDropdown = 'ui button dropdown';
          this.constants.classes.inputGroup = 'ui input';
          this.constants.classes.paginationDropdown = 'ui dropdown';

          this.constants.html.toobarDropdow = ['<div class="menu">', '</div>'];
          this.constants.html.toobarDropdowItem = '<label class="item">%s</label>';
          this.constants.html.pageDropdown = ['<div class="menu">', '</div>'];
          this.constants.html.pageDropdownItem = '<a class="item %s" href="#">%s</a>';
          this.constants.html.dropdownCaret = '<i class="dropdown icon"></i>';
          this.constants.html.pagination = ['<div class="ui pagination menu%s">', '</div>'], this.constants.html.paginationItem = '<a class="page-item item%s" href="#">%s</a>';
        }
      }, {
        key: 'initToolbar',
        value: function initToolbar() {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initToolbar', this).call(this);
          if (this.options.showColumns) {
            this.$toolbar.find('.button.dropdown').dropdown();
          }
        }
      }, {
        key: 'initPagination',
        value: function initPagination() {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initPagination', this).call(this);
          if (this.options.pagination && !this.options.onlyInfoPagination) {
            this.$pagination.find('.dropdown').dropdown();
          }
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});