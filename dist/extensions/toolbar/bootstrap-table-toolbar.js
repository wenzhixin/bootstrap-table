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
    global.bootstrapTableToolbar = mod.exports;
  }
})(this, function () {
  'use strict';

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
   * @author: aperez <aperez@datadec.es>
   * @version: v2.0.0
   *
   * @update Dennis Hernández <http://djhvscf.github.io/Blog>
   * @update zhixin wen <wenzhixin2010@gmail.com>
   */

  (function ($) {
    var Utils = $.fn.bootstrapTable.utils;

    var bootstrap = {
      3: {
        icons: {
          advancedSearchIcon: 'glyphicon-chevron-down'
        },
        html: {
          modalHeader: '\n          <div class="modal-header">\n            <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n            </button>\n            <h4 class="modal-title">%s</h4>\n          </div>\n        '
        }
      },
      4: {
        icons: {
          advancedSearchIcon: 'fa-chevron-down'
        },
        html: {
          modalHeader: '\n          <div class="modal-header">\n            <h4 class="modal-title">%s</h4>\n            <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n            </button>\n          </div>\n        '
        }
      }
    }[Utils.bootstrapVersion];

    $.extend($.fn.bootstrapTable.defaults, {
      advancedSearch: false,
      idForm: 'advancedSearch',
      actionForm: '',
      idTable: undefined,
      onColumnAdvancedSearch: function onColumnAdvancedSearch(field, text) {
        return false;
      }
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
      advancedSearchIcon: bootstrap.icons.advancedSearchIcon
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
      'column-advanced-search.bs.table': 'onColumnAdvancedSearch'
    });

    $.extend($.fn.bootstrapTable.locales, {
      formatAdvancedSearch: function formatAdvancedSearch() {
        return 'Advanced search';
      },
      formatAdvancedCloseButton: function formatAdvancedCloseButton() {
        return 'Close';
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
        key: 'initToolbar',
        value: function initToolbar() {
          var _this2 = this;

          var o = this.options;

          this.showToolbar = this.showToolbar || o.search && o.advancedSearch && o.idTable;

          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initToolbar', this).call(this);

          if (!o.search || !o.advancedSearch || !o.idTable) {
            return;
          }

          this.$toolbar.find('>.btn-group').append('\n        <button class="btn btn-default' + Utils.sprintf(' btn-%s', o.buttonsClass) + Utils.sprintf(' btn-%s', o.iconSize) + '"\n          type="button"\n          name="advancedSearch"\n          aria-label="advanced search"\n          title="' + o.formatAdvancedSearch() + '">\n        <i class="' + o.iconsPrefix + ' ' + o.icons.advancedSearchIcon + '"></i>\n        </button>\n      ');

          this.$toolbar.find('button[name="advancedSearch"]').off('click').on('click', function () {
            return _this2.showAvdSearch();
          });
        }
      }, {
        key: 'showAvdSearch',
        value: function showAvdSearch() {
          var _this3 = this;

          var o = this.options;

          if (!$('#avdSearchModal_' + o.idTable).hasClass('modal')) {
            $('body').append('\n          <div id="avdSearchModal_' + o.idTable + '"  class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">\n            <div class="modal-dialog modal-xs">\n              <div class="modal-content">\n                ' + Utils.sprintf(bootstrap.html.modalHeader, o.formatAdvancedSearch()) + '\n                <div class="modal-body modal-body-custom">\n                  <div class="container-fluid" id="avdSearchModalContent_' + o.idTable + '"\n                    style="padding-right: 0px; padding-left: 0px;" >\n                  </div>\n                </div>\n                <div class="modal-footer">\n                  <button type="button" id="btnCloseAvd_' + o.idTable + '" class="btn btn-' + o.buttonsClass + '">\n                    ' + o.formatAdvancedCloseButton() + '\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        ');

            var timeoutId = 0;

            $('#avdSearchModalContent_' + o.idTable).append(this.createFormAvd().join(''));

            $('#' + o.idForm).off('keyup blur', 'input').on('keyup blur', 'input', function (e) {
              if (o.sidePagination === 'server') {
                _this3.onColumnAdvancedSearch(e);
              } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                  _this3.onColumnAdvancedSearch(e);
                }, o.searchTimeOut);
              }
            });

            $('#btnCloseAvd_' + o.idTable).click(function () {
              $('#avdSearchModal_' + o.idTable).modal('hide');
              if (o.sidePagination === 'server') {
                _this3.options.pageNumber = 1;
                _this3.updatePagination();
                _this3.trigger('column-advanced-search', _this3.filterColumnsPartial);
              }
            });

            $('#avdSearchModal_' + o.idTable).modal();
          } else {
            $('#avdSearchModal_' + o.idTable).modal();
          }
        }
      }, {
        key: 'createFormAvd',
        value: function createFormAvd() {
          var o = this.options;
          var html = ['<form class="form-horizontal" id="' + o.idForm + '" action="' + o.actionForm + '">'];

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var column = _step.value;

              if (!column.checkbox && column.visible && column.searchable) {
                html.push('\n            <div class="form-group row">\n              <label class="col-sm-4 control-label">' + column.title + '</label>\n              <div class="col-sm-6">\n                <input type="text" class="form-control input-md" name="' + column.field + '" placeholder="' + column.title + '" id="' + column.field + '">\n              </div>\n            </div>\n          ');
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          html.push('</form>');

          return html;
        }
      }, {
        key: 'initSearch',
        value: function initSearch() {
          var _this4 = this;

          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initSearch', this).call(this);

          if (!this.options.advancedSearch || this.options.sidePagination === 'server') {
            return;
          }

          var fp = $.isEmptyObject(this.filterColumnsPartial) ? null : this.filterColumnsPartial;

          this.data = fp ? $.grep(this.data, function (item, i) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = Object.entries(fp)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _ref = _step2.value;

                var _ref2 = _slicedToArray(_ref, 2);

                var key = _ref2[0];
                var v = _ref2[1];

                var fval = v.toLowerCase();
                var value = item[key];
                var index = _this4.header.fields.indexOf(key);
                value = Utils.calculateObjectValue(_this4.header, _this4.header.formatters[index], [value, item, i], value);

                if (!(index !== -1 && (typeof value === 'string' || typeof value === 'number') && ('' + value).toLowerCase().includes(fval))) {
                  return false;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            return true;
          }) : this.data;
        }
      }, {
        key: 'onColumnAdvancedSearch',
        value: function onColumnAdvancedSearch(e) {
          var text = $.trim($(e.currentTarget).val());
          var $field = $(e.currentTarget)[0].id;

          if ($.isEmptyObject(this.filterColumnsPartial)) {
            this.filterColumnsPartial = {};
          }
          if (text) {
            this.filterColumnsPartial[$field] = text;
          } else {
            delete this.filterColumnsPartial[$field];
          }

          if (this.options.sidePagination !== 'server') {
            this.options.pageNumber = 1;
            this.onSearch(e);
            this.updatePagination();
            this.trigger('column-advanced-search', $field, text);
          }
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});