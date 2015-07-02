// JavaScript source code
(function () {
    angular.module('bsTable', [])
   .directive('bsTableControl', function () {
       return {
           restrict: 'EA',
           scope: {
               options: '='
           },
           link: function (scope, element, attr) {
               var tableCreated = false;
               scope.$watch('options', function (newValue, oldValue) {
                   if (tableCreated && newValue === oldValue) return;
                   $(element).bootstrapTable('destroy');
                   if (newValue) {
                       $(element).bootstrapTable(scope.options);
                   }
                   tableCreated = typeof (newValue) !== 'undefined';
               });
               $(window).resize(function () {
                   if (tableCreated)
                       $(element).bootstrapTable('resetView');
               })
           }
       };
   })
})();
