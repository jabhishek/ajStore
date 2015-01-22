(function (app) {
	'use strict';
	app.directive('ajBasketBadge', function(BasketService) {
		return {
			restrict: 'E',
			templateUrl: 'components/BasketBadge/BasketBadge.html',
			controller: function() {
				var vm = this;
				vm.basket = BasketService;
			},
			controllerAs: 'basketBadgeVm'
		};
	});
})(angular.module('AngularApp'));