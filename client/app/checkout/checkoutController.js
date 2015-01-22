(function (app) {
	'use strict';
	app.controller('CheckoutController', function(BasketService, DeliveryMethodService, OrderService, $state) {
		var vm = this;
		vm.basket = BasketService;
		vm.deliveryMethods = DeliveryMethodService.deliveryMethods;
		vm.selectedDeliveryMethod = vm.deliveryMethods[0];

			vm.totalCost = function() {
			return vm.selectedDeliveryMethod.price + vm.basket.getBasketValue();
		};

		vm.submitOrder = function() {
			OrderService.orderNumber = Math.ceil(Math.random() * (1000000 - 100000) + 100000);
			$state.transitionTo('confirmation');
		};
	});
})(angular.module('AngularApp'));