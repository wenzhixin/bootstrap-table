// JavaScript source code
(function () {
  angular.module('bsTable', []).directive('bsTableControl', function () {
    return {
      restrict: 'EA',
      scope: {options: '='},
      link: function ($s, $el) {
        var scroll;
        var options;
        $el
          .on('sort.bs.table', function (evt, sortName, sortOrder) {
            if (!options) return;
            options.sortName = sortName;
            options.sortOrder = sortOrder;
          })
          .on('page-change.bs.table', function (evt, pageNumber, pageSize) {
            if (!options) return;
            options.pageNumber = pageNumber;
            options.pageSize = pageSize;
          });
        $s.$watch('options', function (newOptions) {
          if (!newOptions) return;

          if (options) {
            scroll = $el.bootstrapTable('getScrollPosition');
            $el.bootstrapTable('destroy');
          }
          if (options) newOptions = $.extend({}, newOptions, {
            sortName: options.sortName,
            sortOrder: options.sortOrder,
            pageNumber: options.pageNumber,
            pageSize: options.pageSize
          });
          options = newOptions;
          $el.bootstrapTable(options);
          if (scroll) $el.bootstrapTable('scrollTo', scroll);
        }, true);
        $(window).resize(function () {
          if (options) $el.bootstrapTable('resetView');
        })
      }
    };
  })
})();
