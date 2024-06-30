(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.find.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.array.sort.js'), require('core-js/modules/es.array.splice.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.parse-float.js'), require('core-js/modules/es.regexp.to-string.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.array.find.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.array.sort.js', 'core-js/modules/es.array.splice.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.parse-float.js', 'core-js/modules/es.regexp.to-string.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_array_find_js, es_array_includes_js, es_array_indexOf_js, es_array_map_js, es_array_slice_js, es_array_sort_js, es_array_splice_js, es_object_assign_js, es_object_toString_js, es_parseFloat_js, es_regexp_toString_js, $) { 'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  /**
   * @author Nadim Basalamah <dimbslmh@gmail.com>
   * @version: v1.1.0
   * @update: ErwannNevou <https://github.com/ErwannNevou>
   */

  var isSingleSort = false;
  var Utils = $.fn.bootstrapTable.utils;
  Object.assign($.fn.bootstrapTable.defaults.icons, {
    plus: {
      bootstrap3: 'glyphicon-plus',
      bootstrap4: 'fa-plus',
      bootstrap5: 'bi-plus',
      semantic: 'fa-plus',
      materialize: 'plus',
      foundation: 'fa-plus',
      bulma: 'fa-plus',
      'bootstrap-table': 'icon-plus'
    }[$.fn.bootstrapTable.theme] || 'fa-clock',
    minus: {
      bootstrap3: 'glyphicon-minus',
      bootstrap4: 'fa-minus',
      bootstrap5: 'bi-dash',
      semantic: 'fa-minus',
      materialize: 'minus',
      foundation: 'fa-minus',
      bulma: 'fa-minus',
      'bootstrap-table': 'icon-minus'
    }[$.fn.bootstrapTable.theme] || 'fa-clock',
    sort: {
      bootstrap3: 'glyphicon-sort',
      bootstrap4: 'fa-sort',
      bootstrap5: 'bi-arrow-down-up',
      semantic: 'fa-sort',
      materialize: 'sort',
      foundation: 'fa-sort',
      bulma: 'fa-sort',
      'bootstrap-table': 'icon-sort-amount-asc'
    }[$.fn.bootstrapTable.theme] || 'fa-clock'
  });
  var theme = {
    bootstrap3: {
      html: {
        multipleSortModal: "\n        <div class=\"modal fade\" id=\"%s\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" id=\"%sLabel\">%s</h4>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"bootstrap-table\">\n                  <div class=\"fixed-table-toolbar\">\n                    <div class=\"bars\">\n                      <button type=\"button\" class=\"toolbar-btn-add btn btn-default\">%s %s</button>\n                      <button type=\"button\" class=\"toolbar-btn-delete btn btn-default\" disabled>%s %s</button>\n                    </div>\n                  </div>\n                  <div class=\"fixed-table-container\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th><div class=\"th-inner\">%s</div></th>\n                          <th><div class=\"th-inner\">%s</div></th>\n                        </tr>\n                      </thead>\n                      <tbody></tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">%s</button>\n                <button type=\"button\" class=\"btn btn-primary multi-sort-order-button\">%s</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s form-control">'
      }
    },
    bootstrap4: {
      html: {
        multipleSortModal: "\n        <div class=\"modal fade\" id=\"%s\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"%sLabel\">%s</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"bootstrap-table\">\n                  <div class=\"fixed-table-toolbar\">\n                    <div class=\"bars pb-3\">\n                      <button type=\"button\" class=\"toolbar-btn-add btn btn-secondary\">%s %s</button>\n                      <button type=\"button\" class=\"toolbar-btn-delete btn btn-secondary\" disabled>%s %s</button>\n                    </div>\n                  </div>\n                  <div class=\"fixed-table-container\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th><div class=\"th-inner\">%s</div></th>\n                          <th><div class=\"th-inner\">%s</div></th>\n                        </tr>\n                      </thead>\n                      <tbody></tbody>\n                    </table>\n                  </div>\n              </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">%s</button>\n                <button type=\"button\" class=\"btn btn-primary multi-sort-order-button\">%s</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s form-control">'
      }
    },
    bootstrap5: {
      html: {
        multipleSortModal: "\n        <div class=\"modal fade\" id=\"%s\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"%sLabel\">%s</h5>\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"bootstrap-table\">\n                  <div class=\"fixed-table-toolbar\">\n                    <div class=\"bars pb-3\">\n                      <button type=\"button\" class=\"toolbar-btn-add btn btn-secondary\">%s %s</button>\n                      <button type=\"button\" class=\"toolbar-btn-delete btn btn-secondary\" disabled>%s %s</button>\n                    </div>\n                  </div>\n                  <div class=\"fixed-table-container\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th><div class=\"th-inner\">%s</div></th>\n                          <th><div class=\"th-inner\">%s</div></th>\n                        </tr>\n                      </thead>\n                      <tbody></tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">%s</button>\n                <button type=\"button\" class=\"btn btn-primary multi-sort-order-button\">%s</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" type="button" data-bs-toggle="modal" data-bs-target="#%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s form-control">'
      }
    },
    semantic: {
      html: {
        multipleSortModal: "\n        <div class=\"ui modal tiny\" id=\"%s\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <i class=\"close icon\"></i>\n          <div class=\"header\" id=\"%sLabel\">\n            %s\n          </div>\n          <div class=\"image content\">\n            <div class=\"bootstrap-table\">\n              <div class=\"fixed-table-toolbar\">\n                <div class=\"bars pb-3\">\n                  <button type=\"button\" class=\"toolbar-btn-add ui button\">%s %s</button>\n                  <button type=\"button\" class=\"toolbar-btn-delete ui button\" disabled>%s %s</button>\n                </div>\n              </div>\n              <div class=\"fixed-table-container\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th></th>\n                      <th><div class=\"th-inner\">%s</div></th>\n                      <th><div class=\"th-inner\">%s</div></th>\n                    </tr>\n                  </thead>\n                  <tbody></tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n          <div class=\"actions\">\n            <div class=\"ui button deny\">%s</div>\n            <div class=\"ui button approve multi-sort-order-button\">%s</div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" type="button" data-toggle="modal" data-target="#%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s">'
      }
    },
    materialize: {
      html: {
        multipleSortModal: "\n        <div id=\"%s\" class=\"modal\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-content\" id=\"%sLabel\">\n            <h4>%s</h4>\n            <div class=\"bootstrap-table\">\n              <div class=\"fixed-table-toolbar\">\n                <div class=\"bars pb-3\">\n                  <button type=\"button\" class=\"toolbar-btn-add waves-effect waves-light btn\">%s %s</button>\n                  <button type=\"button\" class=\"toolbar-btn-delete waves-effect waves-light btn\" disabled>%s %s</button>\n                </div>\n              </div>\n              <div class=\"fixed-table-container\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th></th>\n                      <th><div class=\"th-inner\">%s</div></th>\n                      <th><div class=\"th-inner\">%s</div></th>\n                    </tr>\n                  </thead>\n                  <tbody></tbody>\n                </table>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <a href=\"javascript:void(0)\" class=\"modal-close waves-effect waves-light btn\">%s</a>\n              <a href=\"javascript:void(0)\" class=\"modal-close waves-effect waves-light btn multi-sort-order-button\">%s</a>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<a class="multi-sort %s modal-trigger" href="#%s" type="button" data-toggle="modal" title="%s">%s</a>',
        multipleSortSelect: '<select class="%s %s browser-default">'
      }
    },
    foundation: {
      html: {
        multipleSortModal: "\n        <div class=\"reveal\" id=\"%s\" data-reveal aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div id=\"%sLabel\">\n            <h1>%s</h1>\n            <div class=\"bootstrap-table\">\n              <div class=\"fixed-table-toolbar\">\n                  <div class=\"bars padding-bottom-2\">\n                    <button type=\"button\" class=\"toolbar-btn-add waves-effect waves-light button\">%s %s</button>\n                    <button type=\"button\" class=\"toolbar-btn-delete waves-effect waves-light button\" disabled>%s %s</button>\n                  </div>\n              </div>\n              <div class=\"fixed-table-container\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th></th>\n                      <th><div class=\"th-inner\">%s</div></th>\n                      <th><div class=\"th-inner\">%s</div></th>\n                    </tr>\n                  </thead>\n                  <tbody></tbody>\n                </table>\n              </div>\n            </div>\n\n            <button class=\"waves-effect waves-light button\" data-close aria-label=\"Close modal\" type=\"button\">\n              <span aria-hidden=\"true\">%s</span>\n            </button>\n            <button class=\"waves-effect waves-light button multi-sort-order-button\" data-close aria-label=\"Order\" type=\"button\">\n              <span aria-hidden=\"true\">%s</span>\n            </button>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" data-open="%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s browser-default">'
      }
    },
    bulma: {
      html: {
        multipleSortModal: "\n        <div class=\"modal\" id=\"%s\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-background\"></div>\n          <div class=\"modal-content\" id=\"%sLabel\">\n            <div class=\"box\">\n              <h2>%s</h2>\n              <div class=\"bootstrap-table\">\n                <div class=\"fixed-table-toolbar\">\n                  <div class=\"bars padding-bottom-2\">\n                    <button type=\"button\" class=\"toolbar-btn-add waves-effect waves-light button\">%s %s</button>\n                    <button type=\"button\" class=\"toolbar-btn-delete waves-effect waves-light button\" disabled>%s %s</button>\n                  </div>\n                </div>\n                <div class=\"fixed-table-container\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th></th>\n                        <th><div class=\"th-inner\">%s</div></th>\n                        <th><div class=\"th-inner\">%s</div></th>\n                      </tr>\n                    </thead>\n                    <tbody></tbody>\n                  </table>\n                </div>\n              </div>\n              <button type=\"button\" class=\"waves-effect waves-light button\" data-close>%s</button>\n              <button type=\"button\" class=\"waves-effect waves-light button multi-sort-order-button\" data-close>%s</button>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" data-target="%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s browser-default">'
      }
    },
    'bootstrap-table': {
      html: {
        multipleSortModal: "\n        <div class=\"modal\" id=\"%s\" aria-labelledby=\"%sLabel\" aria-hidden=\"true\">\n          <div class=\"modal-background\"></div>\n          <div class=\"modal-content\" id=\"%sLabel\">\n            <div class=\"box\">\n              <h2>%s</h2>\n              <div class=\"bootstrap-table\">\n                <div class=\"fixed-table-toolbar\">\n                  <div class=\"bars padding-bottom-2\">\n                    <button type=\"button\" class=\"toolbar-btn-add btn\">%s %s</button>\n                    <button type=\"button\" class=\"toolbar-btn-delete btn\" disabled>%s %s</button>\n                  </div>\n                </div>\n                <div class=\"fixed-table-container\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th></th>\n                        <th><div class=\"th-inner\">%s</div></th>\n                        <th><div class=\"th-inner\">%s</div></th>\n                      </tr>\n                    </thead>\n                    <tbody></tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"mt-30\">\n                <button type=\"button\" class=\"btn\" data-close>%s</button>\n                <button type=\"button\" class=\"btn multi-sort-order-button\" data-close>%s</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      ",
        multipleSortButton: '<button class="multi-sort %s" data-target="%s" title="%s">%s</button>',
        multipleSortSelect: '<select class="%s %s browser-default">'
      }
    }
  }[$.fn.bootstrapTable.theme];
  var showSortModal = function showSortModal(that) {
    var _selector = that.sortModalSelector;
    var _id = "#".concat(_selector);
    var o = that.options;
    if (!$(_id).hasClass('modal')) {
      var sModal = Utils.sprintf(theme.html.multipleSortModal, _selector, _selector, _selector, that.options.formatMultipleSort(), Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.plus), that.options.formatAddLevel(), Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.minus), that.options.formatDeleteLevel(), that.options.formatColumn(), that.options.formatOrder(), that.options.formatCancel(), that.options.formatSort());
      $('body').append($(sModal));
      that.$sortModal = $(_id);
      var $rows = that.$sortModal.find('tbody > tr');
      that.$sortModal.off('click', '.toolbar-btn-add').on('click', '.toolbar-btn-add', function () {
        var total = that.$sortModal.find('.multi-sort-name:first option').length;
        var current = that.$sortModal.find('tbody tr').length;
        if (current < total) {
          current++;
          that.addLevel();
          that.setButtonStates();
        }
      });
      that.$sortModal.off('click', '.toolbar-btn-delete').on('click', '.toolbar-btn-delete', function () {
        var total = that.$sortModal.find('.multi-sort-name:first option').length;
        var current = that.$sortModal.find('tbody tr').length;
        if (current > 1 && current <= total) {
          current--;
          that.$sortModal.find('tbody tr:last').remove();
          that.setButtonStates();
        }
      });
      that.$sortModal.off('click', '.multi-sort-order-button').on('click', '.multi-sort-order-button', function () {
        var $rows = that.$sortModal.find('tbody > tr');
        var $alert = that.$sortModal.find('div.alert');
        var fields = [];
        var results = [];
        var sortPriority = $.map($rows, function (row) {
          var $row = $(row);
          var name = $row.find('.multi-sort-name').val();
          var order = $row.find('.multi-sort-order').val();
          fields.push(name);
          return {
            sortName: name,
            sortOrder: order
          };
        });
        var sorted_fields = fields.sort();
        for (var i = 0; i < fields.length - 1; i++) {
          if (sorted_fields[i + 1] === sorted_fields[i]) {
            results.push(sorted_fields[i]);
          }
        }
        if (results.length > 0) {
          if ($alert.length === 0) {
            $alert = "<div class=\"alert alert-danger\" role=\"alert\"><strong>".concat(that.options.formatDuplicateAlertTitle(), "</strong> ").concat(that.options.formatDuplicateAlertDescription(), "</div>");
            $($alert).insertBefore(that.$sortModal.find('.bars'));
          }
        } else {
          if ($alert.length === 1) {
            $($alert).remove();
          }
          if (['bootstrap3', 'bootstrap4', 'bootstrap5'].includes($.fn.bootstrapTable.theme)) {
            that.$sortModal.modal('hide');
          }
          that.multiSort(sortPriority);
        }
      });
      if (that.options.sortPriority === null || that.options.sortPriority.length === 0) {
        if (that.options.sortName) {
          that.options.sortPriority = [{
            sortName: that.options.sortName,
            sortOrder: that.options.sortOrder
          }];
        }
      }
      if (that.options.sortPriority !== null && that.options.sortPriority.length > 0) {
        if ($rows.length < that.options.sortPriority.length && _typeof(that.options.sortPriority) === 'object') {
          for (var i = 0; i < that.options.sortPriority.length; i++) {
            that.addLevel(i, that.options.sortPriority[i]);
          }
        }
      } else {
        that.addLevel(0);
      }
      that.setButtonStates();
    }
  };
  $.fn.bootstrapTable.methods.push('multipleSort');
  $.fn.bootstrapTable.methods.push('multiSort');
  Object.assign($.fn.bootstrapTable.defaults, {
    showMultiSort: false,
    showMultiSortButton: true,
    multiSortStrictSort: false,
    sortPriority: null,
    onMultipleSort: function onMultipleSort() {
      return false;
    }
  });
  Object.assign($.fn.bootstrapTable.events, {
    'multiple-sort.bs.table': 'onMultipleSort'
  });
  Object.assign($.fn.bootstrapTable.locales, {
    formatMultipleSort: function formatMultipleSort() {
      return 'Multiple Sort';
    },
    formatAddLevel: function formatAddLevel() {
      return 'Add Level';
    },
    formatDeleteLevel: function formatDeleteLevel() {
      return 'Delete Level';
    },
    formatColumn: function formatColumn() {
      return 'Column';
    },
    formatOrder: function formatOrder() {
      return 'Order';
    },
    formatSortBy: function formatSortBy() {
      return 'Sort by';
    },
    formatThenBy: function formatThenBy() {
      return 'Then by';
    },
    formatSort: function formatSort() {
      return 'Sort';
    },
    formatCancel: function formatCancel() {
      return 'Cancel';
    },
    formatDuplicateAlertTitle: function formatDuplicateAlertTitle() {
      return 'Duplicate(s) detected!';
    },
    formatDuplicateAlertDescription: function formatDuplicateAlertDescription() {
      return 'Please remove or change any duplicate column.';
    },
    formatSortOrders: function formatSortOrders() {
      return {
        asc: 'Ascending',
        desc: 'Descending'
      };
    }
  });
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);
  var BootstrapTable = $.fn.bootstrapTable.Constructor;
  var _initToolbar = BootstrapTable.prototype.initToolbar;
  var _destroy = BootstrapTable.prototype.destroy;
  BootstrapTable.prototype.initToolbar = function () {
    var _this = this;
    this.showToolbar = this.showToolbar || this.options.showMultiSort;
    var that = this;
    var sortModalSelector = Utils.getEventName('sort-modal', this.$el.attr('id'));
    var sortModalId = "#".concat(sortModalSelector);
    var $multiSortBtn = this.$toolbar.find('div.multi-sort');
    var o = this.options;
    this.$sortModal = $(sortModalId);
    this.sortModalSelector = sortModalSelector;
    if (that.options.sortPriority !== null) {
      that.onMultipleSort();
    }
    if (this.options.showMultiSort && this.options.showMultiSortButton) {
      this.buttons = Object.assign(this.buttons, {
        multipleSort: {
          html: Utils.sprintf(theme.html.multipleSortButton, that.constants.buttonsClass, that.sortModalSelector, this.options.formatMultipleSort(), Utils.sprintf(that.constants.html.icon, o.iconsPrefix, o.icons.sort))
        }
      });
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _initToolbar.apply(this, Array.prototype.slice.apply(args));
    if (that.options.sidePagination === 'server' && !isSingleSort && that.options.sortPriority !== null) {
      var t = that.options.queryParams;
      that.options.queryParams = function (params) {
        params.multiSort = that.options.sortPriority;
        return t(params);
      };
    }
    if (this.options.showMultiSort) {
      if (!$multiSortBtn.length && this.options.showMultiSortButton) {
        if ($.fn.bootstrapTable.theme === 'semantic') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            $(sortModalId).modal('show');
          });
        } else if ($.fn.bootstrapTable.theme === 'materialize') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            $(sortModalId).modal();
          });
        } else if ($.fn.bootstrapTable.theme === 'bootstrap-table') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            $(sortModalId).addClass('show');
          });
        } else if ($.fn.bootstrapTable.theme === 'foundation') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            if (!_this.foundationModal) {
              // eslint-disable-next-line no-undef
              _this.foundationModal = new Foundation.Reveal($(sortModalId));
            }
            _this.foundationModal.open();
          });
        } else if ($.fn.bootstrapTable.theme === 'bulma') {
          this.$toolbar.find('.multi-sort').on('click', function () {
            $('html').toggleClass('is-clipped');
            $(sortModalId).toggleClass('is-active');
            $('button[data-close]').one('click', function () {
              $('html').toggleClass('is-clipped');
              $(sortModalId).toggleClass('is-active');
            });
          });
        }
        showSortModal(that);
      }
      this.$el.on('sort.bs.table', function () {
        isSingleSort = true;
      });
      this.$el.on('multiple-sort.bs.table', function () {
        isSingleSort = false;
      });
      this.$el.on('load-success.bs.table', function () {
        if (!isSingleSort && that.options.sortPriority !== null && _typeof(that.options.sortPriority) === 'object' && that.options.sidePagination !== 'server') {
          that.onMultipleSort();
        }
      });
      this.$el.on('column-switch.bs.table', function (field, checked) {
        if (that.options.sortPriority !== null && that.options.sortPriority.length > 0) {
          for (var i = 0; i < that.options.sortPriority.length; i++) {
            if (that.options.sortPriority[i].sortName === checked) {
              that.options.sortPriority.splice(i, 1);
            }
          }
          that.assignSortableArrows();
        }
        that.$sortModal.remove();
        showSortModal(that);
      });
      this.$el.on('reset-view.bs.table', function () {
        if (!isSingleSort && that.options.sortPriority !== null && _typeof(that.options.sortPriority) === 'object') {
          that.assignSortableArrows();
        }
      });
    }
  };
  BootstrapTable.prototype.destroy = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _destroy.apply(this, Array.prototype.slice.apply(args));
    if (this.options.showMultiSort) {
      this.enableCustomSort = false;
      this.$sortModal.remove();
    }
  };
  BootstrapTable.prototype.multipleSort = function () {
    var that = this;
    if (!isSingleSort && that.options.sortPriority !== null && _typeof(that.options.sortPriority) === 'object' && that.options.sidePagination !== 'server') {
      that.onMultipleSort();
    }
  };
  BootstrapTable.prototype.onMultipleSort = function () {
    var that = this;
    var cmp = function cmp(x, y) {
      return x > y ? 1 : x < y ? -1 : 0;
    };
    var arrayCmp = function arrayCmp(a, b) {
      var arr1 = [];
      var arr2 = [];
      for (var i = 0; i < that.options.sortPriority.length; i++) {
        var fieldName = that.options.sortPriority[i].sortName;
        var fieldIndex = that.header.fields.indexOf(fieldName);
        var sorterName = that.header.sorters[that.header.fields.indexOf(fieldName)];
        if (that.header.sortNames[fieldIndex]) {
          fieldName = that.header.sortNames[fieldIndex];
        }
        var order = that.options.sortPriority[i].sortOrder === 'desc' ? -1 : 1;
        var aa = Utils.getItemField(a, fieldName);
        var bb = Utils.getItemField(b, fieldName);
        var value1 = $.fn.bootstrapTable.utils.calculateObjectValue(that.header, sorterName, [aa, bb, a, b]);
        var value2 = $.fn.bootstrapTable.utils.calculateObjectValue(that.header, sorterName, [bb, aa, b, a]);
        if (value1 !== undefined && value2 !== undefined) {
          arr1.push(order * value1);
          arr2.push(order * value2);
          continue;
        }
        if (aa === undefined || aa === null) aa = '';
        if (bb === undefined || bb === null) bb = '';
        if ($.isNumeric(aa) && $.isNumeric(bb)) {
          aa = parseFloat(aa);
          bb = parseFloat(bb);
        } else {
          aa = aa.toString();
          bb = bb.toString();
          if (that.options.multiSortStrictSort) {
            aa = aa.toLowerCase();
            bb = bb.toLowerCase();
          }
        }
        arr1.push(order * cmp(aa, bb));
        arr2.push(order * cmp(bb, aa));
      }
      return cmp(arr1, arr2);
    };
    this.enableCustomSort = true;
    this.data.sort(function (a, b) {
      return arrayCmp(a, b);
    });
    this.initBody();
    this.assignSortableArrows();
    this.trigger('multiple-sort');
  };
  BootstrapTable.prototype.addLevel = function (index, sortPriority) {
    var text = index === 0 ? this.options.formatSortBy() : this.options.formatThenBy();
    this.$sortModal.find('tbody').append($('<tr>').append($('<td>').text(text)).append($('<td>').append($(Utils.sprintf(theme.html.multipleSortSelect, this.constants.classes.paginationDropdown, 'multi-sort-name')))).append($('<td>').append($(Utils.sprintf(theme.html.multipleSortSelect, this.constants.classes.paginationDropdown, 'multi-sort-order')))));
    var $multiSortName = this.$sortModal.find('.multi-sort-name').last();
    var $multiSortOrder = this.$sortModal.find('.multi-sort-order').last();
    $.each(this.columns, function (i, column) {
      if (column.sortable === false || column.visible === false) {
        return true;
      }
      $multiSortName.append("<option value=\"".concat(column.field, "\">").concat(column.title, "</option>"));
    });
    $.each(this.options.formatSortOrders(), function (value, order) {
      $multiSortOrder.append("<option value=\"".concat(value, "\">").concat(order, "</option>"));
    });
    if (sortPriority !== undefined) {
      $multiSortName.find("option[value=\"".concat(sortPriority.sortName, "\"]")).attr('selected', true);
      $multiSortOrder.find("option[value=\"".concat(sortPriority.sortOrder, "\"]")).attr('selected', true);
    }
  };
  BootstrapTable.prototype.assignSortableArrows = function () {
    var that = this;
    var headers = that.$header.find('th');
    for (var i = 0; i < headers.length; i++) {
      for (var c = 0; c < that.options.sortPriority.length; c++) {
        if ($(headers[i]).data('field') === that.options.sortPriority[c].sortName) {
          $(headers[i]).find('.sortable').removeClass('desc asc').addClass(that.options.sortPriority[c].sortOrder);
        }
      }
    }
  };
  BootstrapTable.prototype.setButtonStates = function () {
    var total = this.$sortModal.find('.multi-sort-name:first option').length;
    var current = this.$sortModal.find('tbody tr').length;
    if (current === total) {
      this.$sortModal.find('.toolbar-btn-add').attr('disabled', 'disabled');
    }
    if (current > 1) {
      this.$sortModal.find('.toolbar-btn-delete').removeAttr('disabled');
    }
    if (current < total) {
      this.$sortModal.find('.toolbar-btn-add').removeAttr('disabled');
    }
    if (current === 1) {
      this.$sortModal.find('.toolbar-btn-delete').attr('disabled', 'disabled');
    }
  };
  BootstrapTable.prototype.multiSort = function (sortPriority) {
    var _this2 = this;
    this.options.sortPriority = sortPriority;
    this.options.sortName = undefined;
    if (this.options.sidePagination === 'server') {
      var queryParams = this.options.queryParams;
      this.options.queryParams = function (params) {
        params.multiSort = _this2.options.sortPriority;
        return $.fn.bootstrapTable.utils.calculateObjectValue(_this2.options, queryParams, [params]);
      };
      isSingleSort = false;
      this.initServer(this.options.silentSort);
    }
    this.onMultipleSort();
  };

}));
