(function (app) {
	app.directive("ajBasketBadge", function() {
		return {
			restrict: "E",
			templateUrl: 'components/BasketBadge/BasketBadge.html',
			controller: function() {
				var vm = this;
				vm.basket = {
					items: 2
				};
			},
			controllerAs: "basketBadgeVm"
		};
	});
})(angular.module('AngularApp'));