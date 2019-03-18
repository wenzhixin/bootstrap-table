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
    global.bootstrapTableAddrbar = mod.exports;
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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   * @author: general
   * @website: note.generals.space
   * @email: generals.space@gmail.com
   * @github: https://github.com/generals-space/bootstrap-table-addrbar
   * @update: zhixin wen <wenzhixin2010@gmail.com>
   */

  (function ($) {
    /*
       * function: 获取浏览器地址栏中的指定参数.
       * key: 参数名
       * url: 默认为当前地址栏
       */
    function _GET(key) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search;

      /*
       * 注意这里正则表达式的书写方法
       * (^|&)key匹配: 直接以key开始或以&key开始的字符串
       * 同理(&|$)表示以&结束或是直接结束的字符串
       * ...当然, 我并不知道这种用法.
       */
      var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
      var result = url.substr(1).match(reg);

      if (result) {
        return decodeURIComponent(result[2]);
      }
      return null;
    }

    /*
      * function: 根据给定参数生成url地址
      * var dic = {name: 'genreal', age: 24}
      * var url = 'https://www.baidu.com?age=22';
      * _buildUrl(dic, url);
      * 将得到"https://www.baidu.com?age=24&name=genreal"
      * 哦, 忽略先后顺序吧...
      *
      * 补充: 可以参考浏览器URLSearchParams对象, 更加方便和强大.
      * 考虑到兼容性, 暂时不使用这个工具.
      */

    function _buildUrl(dict) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search;

      for (var _iterator = function (target) {
        return Object.keys(target).map(function (key) {
          return [key, target[key]];
        });
      }(dict), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var _ref2 = _ref,
            _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            val = _ref3[1];

        // 搜索name=general这种形式的字符串(&是分隔符)
        var pattern = key + '=([^&]*)';
        var targetStr = key + '=' + val;

        /*
         * 如果目标url中包含了key键, 我们需要将它替换成我们自己的val
         * 不然就直接添加好了.
         */
        if (url.match(pattern)) {
          var tmp = new RegExp('(' + key + '=)([^&]*)', 'gi');
          url = url.replace(tmp, targetStr);
        } else {
          var seperator = url.match('[?]') ? '&' : '?';
          url = url + seperator + targetStr;
        }
      }
      if (location.hash) {
        url += location.hash;
      }
      return url;
    }

    $.BootstrapTable = function (_$$BootstrapTable) {
      _inherits(_class, _$$BootstrapTable);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'init',
        value: function init() {
          var _this2 = this;

          // 拥有addrbar选项并且其值为true的才会继续执行
          if (this.options.addrbar) {
            // 标志位, 初始加载后关闭
            this.addrbarInit = true;
            var _prefix = this.options.addrPrefix || '';

            // 优先级排序: 用户指定值最优先, 未指定时从地址栏获取, 未获取到时采用默认值
            this.options.pageSize = this.options.pageSize || (_GET(_prefix + 'limit') ? parseInt(_GET(_prefix + 'limit')) : $.BootstrapTable.DEFAULTS.pageSize);
            this.options.pageNumber = this.options.pageNumber || (_GET(_prefix + 'page') ? parseInt(_GET(_prefix + 'page')) : $.BootstrapTable.DEFAULTS.pageNumber);
            this.options.sortOrder = this.options.sortOrder || (_GET(_prefix + 'order') ? _GET(_prefix + 'order') : $.BootstrapTable.DEFAULTS.sortOrder);
            this.options.sortName = this.options.sortName || (_GET(_prefix + 'sort') ? _GET(_prefix + 'sort') : 'id');
            this.options.searchText = this.options.searchText || (_GET(_prefix + 'search') ? _GET(_prefix + 'search') : $.BootstrapTable.DEFAULTS.searchText);

            var _onLoadSuccess = this.options.onLoadSuccess;

            this.options.onLoadSuccess = function (data) {
              if (_this2.addrbarInit) {
                _this2.addrbarInit = false;
              } else {
                var params = {};
                params[_prefix + 'page'] = _this2.options.pageNumber, params[_prefix + 'limit'] = _this2.options.pageSize, params[_prefix + 'order'] = _this2.options.sortOrder, params[_prefix + 'sort'] = _this2.options.sortName, params[_prefix + 'search'] = _this2.options.searchText;
                // h5提供的修改浏览器地址栏的方法
                window.history.pushState({}, '', _buildUrl(params));
              }

              if (_onLoadSuccess) {
                _onLoadSuccess.call(_this2, data);
              }
            };
          }
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'init', this).call(this);
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});