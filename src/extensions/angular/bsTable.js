// JavaScript source code
(function () {
    angular.module('bsTable', [])
   .directive('bsTableControl', function () {
       return {
           restrict: 'EA',
           scope: {
               options: '='
           },
           link: function (scope, $el, attr) {
               var tableCreated = false;
               scope.$watch('options', function (newValue, oldValue) {
                   if (tableCreated && newValue === oldValue) return;
                   $el.bootstrapTable('destroy');
                   if (newValue) {
                       $el.bootstrapTable(scope.options);
                   }
                   tableCreated = typeof (newValue) !== 'undefined';
               });
               $(window).resize(function () {
                   if (tableCreated)
                       $el.bootstrapTable('resetView');
               })
           }
       };
   })
})();
