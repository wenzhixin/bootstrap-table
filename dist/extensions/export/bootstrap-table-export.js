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
    global.bootstrapTableExport = mod.exports;
  }
})(this, function () {
  'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

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
   * extensions: https://github.com/hhurz/tableExport.jquery.plugin
   */

  (function ($) {
    var Utils = $.fn.bootstrapTable.utils;

    var bootstrap = {
      3: {
        icons: {
          export: 'glyphicon-export icon-share'
        },
        html: {
          dropmenu: '<ul class="dropdown-menu" role="menu"></ul>',
          dropitem: '<li role="menuitem" data-type="%s"><a href="javascript:">%s</a></li>'
        }
      },
      4: {
        icons: {
          export: 'fa-download'
        },
        html: {
          dropmenu: '<div class="dropdown-menu dropdown-menu-right"></div>',
          dropitem: '<a class="dropdown-item" data-type="%s" href="javascript:">%s</a>'
        }
      }
    }[Utils.bootstrapVersion];

    var TYPE_NAME = {
      json: 'JSON',
      xml: 'XML',
      png: 'PNG',
      csv: 'CSV',
      txt: 'TXT',
      sql: 'SQL',
      doc: 'MS-Word',
      excel: 'MS-Excel',
      xlsx: 'MS-Excel (OpenXML)',
      powerpoint: 'MS-Powerpoint',
      pdf: 'PDF'
    };

    $.extend($.fn.bootstrapTable.defaults, {
      showExport: false,
      exportDataType: 'basic', // basic, all, selected
      exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
      exportOptions: {},
      exportFooter: false
    });

    $.extend($.fn.bootstrapTable.defaults.icons, {
      export: bootstrap.icons.export
    });

    $.extend($.fn.bootstrapTable.locales, {
      formatExport: function formatExport() {
        return 'Export data';
      }
    });
    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    $.fn.bootstrapTable.methods.push('exportTable');

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

          this.showToolbar = this.showToolbar || o.showExport;

          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initToolbar', this).call(this);

          if (!this.options.showExport) {
            return;
          }
          var $btnGroup = this.$toolbar.find('>.btn-group');
          var $export = $btnGroup.find('div.export');

          if ($export.length) {
            return;
          }
          $export = $('\n        <div class="export btn-group">\n        <button class="btn btn-' + o.buttonsClass + ' btn-' + o.iconSize + ' dropdown-toggle"\n          aria-label="export type"\n          title="' + o.formatExport() + '"\n          data-toggle="dropdown"\n          type="button">\n          <i class="' + o.iconsPrefix + ' ' + o.icons.export + '"></i>\n          <span class="caret"></span>\n        </button>\n        ' + bootstrap.html.dropmenu + '\n        </div>\n      ').appendTo($btnGroup);

          var $menu = $export.find('.dropdown-menu');
          var exportTypes = o.exportTypes;

          if (typeof exportTypes === 'string') {
            var types = exportTypes.slice(1, -1).replace(/ /g, '').split(',');
            exportTypes = types.map(function (t) {
              return t.slice(1, -1);
            });
          }
          for (var _iterator = exportTypes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var type = _ref;

            if (TYPE_NAME.hasOwnProperty(type)) {
              $menu.append(Utils.sprintf(bootstrap.html.dropitem, type, TYPE_NAME[type]));
            }
          }

          $menu.find('>li, >a').click(function (_ref2) {
            var currentTarget = _ref2.currentTarget;

            var type = $(currentTarget).data('type');
            var exportOptions = {
              type: type,
              escape: false
            };

            _this2.exportTable(exportOptions);
          });
        }
      }, {
        key: 'exportTable',
        value: function exportTable(options) {
          var _this3 = this;

          var o = this.options;
          var stateField = this.header.stateField;
          var isCardView = o.cardView;

          var doExport = function doExport() {
            if (stateField) {
              _this3.hideColumn(stateField);
            }
            if (isCardView) {
              _this3.toggleView();
            }

            var data = _this3.getData();
            if (o.exportFooter) {
              var $footerRow = _this3.$tableFooter.find('tr').first();
              var footerData = {};
              var footerHtml = [];

              $.each($footerRow.children(), function (index, footerCell) {
                var footerCellHtml = $(footerCell).children('.th-inner').first().html();
                footerData[_this3.columns[index].field] = footerCellHtml === '&nbsp;' ? null : footerCellHtml;

                // grab footer cell text into cell index-based array
                footerHtml.push(footerCellHtml);
              });

              _this3.append(footerData);

              var $lastTableRow = _this3.$body.children().last();

              $.each($lastTableRow.children(), function (index, lastTableRowCell) {
                $(lastTableRowCell).html(footerHtml[index]);
              });
            }

            _this3.$el.tableExport($.extend({}, o.exportOptions, options));

            if (o.exportFooter) {
              _this3.load(data);
            }

            if (stateField) {
              _this3.showColumn(stateField);
            }
            if (isCardView) {
              _this3.toggleView();
            }
          };

          if (o.exportDataType === 'all' && o.pagination) {
            var eventName = o.sidePagination === 'server' ? 'post-body.bs.table' : 'page-change.bs.table';
            this.$el.one(eventName, function () {
              doExport();
              _this3.togglePagination();
            });
            this.togglePagination();
          } else if (o.exportDataType === 'selected') {
            var data = this.getData();
            var selectedData = this.getSelections();
            if (!selectedData.length) {
              return;
            }

            if (o.sidePagination === 'server') {
              data = _defineProperty({
                total: o.totalRows
              }, this.options.dataField, data);
              selectedData = _defineProperty({
                total: selectedData.length
              }, this.options.dataField, selectedData);
            }

            this.load(selectedData);
            doExport();
            this.load(data);
          } else {
            doExport();
          }
        }
      }]);

      return _class;
    }($.BootstrapTable);
  })(jQuery);
});