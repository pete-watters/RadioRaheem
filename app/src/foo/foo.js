define(['angular', 'angular-ui-router'], function(angular) {
    angular.module('fooModule', ['ui.router']).config(['$stateProvider', function($stateProvider) {
        /*config path for foo module*/
        $stateProvider.state('foo', {
            url: '/foo',
            templateUrl: 'src/foo/foo.tpl.html',
            controller: 'DummyFooController'
        });
    }]).controller('DummyFooController', [
        '$scope',
        '$location',
        function($scope, $location) {
            /* initialize */
            $scope.pageTitle = 'dummy';
        }
    ]);
});
