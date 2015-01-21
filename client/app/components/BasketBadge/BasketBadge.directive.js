(function (app) {
	app.directive("ajBasketBadge", function(BasketService) {
		return {
			restrict: "E",
			templateUrl: 'components/BasketBadge/BasketBadge.html',
			controller: function() {
				var vm = this;
				vm.basket = {
					items: BasketService.items
				};
			},
			controllerAs: "basketBadgeVm"
		};
	});
})(angular.module('AngularApp'));