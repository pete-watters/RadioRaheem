define(['angular-mocks', 'foo/foo'], function() {
    describe('controller title', function() {
        var $scope;
        var $location;
        var dummyFooController;
        beforeEach(module('fooModule'));
        beforeEach(inject(function(_$injector_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $location = _$injector_.get('$location');
            var $controller = _$injector_.get('$controller');
            dummyFooController = $controller('DummyFooController', {
                '$scope': $scope,
                '$location': $location
            });
        }));

        it('should be equal dummy', function() {
            expect($scope.pageTitle).toEqual('dummy');
        });
    });
});
