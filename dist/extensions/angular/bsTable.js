// JavaScript source code
(function () {
  angular.module('bsTable', []).directive('bsTableControl', function () {
    return {
      restrict: 'EA',
      scope: {options: '='},
      link: function ($s, $el) {
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
          if (options) $el.bootstrapTable('destroy');
          options = $.extend(options ? {
            sortName: options.sortName,
            sortOrder: options.sortOrder,
            pageNumber: options.pageNumber,
            pageSize: options.pageSize
          } : {}, newOptions);
          $el.bootstrapTable(options);
        }, true);
        $(window).resize(function () {
          if (options) $el.bootstrapTable('resetView');
        })
      }
    };
  })
})();
