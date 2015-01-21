(function (app) {
    'use strict';
    app.directive('ajNavbar', function ($state) {
        return {
            restrict: 'EA',
            templateUrl: 'components/NavBar/NavBar.html',
            controller: function() {
                var vm = this;
                vm.isCollapsed = true;

                vm.logout = function() {
                    vm.isCollapsed = true;
                    $state.go('login');
                };
            },
            controllerAs: 'navBarVm'
        };
    });
})(angular.module('AngularApp'));