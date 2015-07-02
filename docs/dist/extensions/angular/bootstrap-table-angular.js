// JavaScript source code
(function () {
  angular.module('bsTable', []).directive('bsTableControl', function () {
    var SEARCH_SELECTOR = '.search input';
    var CONTAINER_SELECTOR = '.bootstrap-table';
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
          })
          .on('search.bs.table', function (evt, searchText) {
            if (!options) return;
            options.searchText = searchText;
          });
        $s.$watch('options', function (newOptions) {
          if (!newOptions) return;

          var searchHasFocus = $el.closest(CONTAINER_SELECTOR).find(SEARCH_SELECTOR).is(':focus');
          if (options) {
            scroll = $el.bootstrapTable('getScrollPosition');
            $el.bootstrapTable('destroy');
          }
          newOptions = angular.copy(newOptions);
          if (options) angular.forEach(['sortName', 'sortOrder', 'pageNumber', 'pageSize', 'searchText'], function (key) {
            if (key in options) newOptions[key] = options[key];
          });
          options = newOptions;
          $el.bootstrapTable(options);
          if (scroll) $el.bootstrapTable('scrollTo', scroll);
          if (searchHasFocus) $el.closest(CONTAINER_SELECTOR).find(SEARCH_SELECTOR).focus(); // $el gets detached so have to recompute whole chain
        }, true);
        $(window).resize(function () {
          if (options) $el.bootstrapTable('resetView');
        });
      }
    };
  })
})();
