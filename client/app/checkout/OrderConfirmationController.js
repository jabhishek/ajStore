(function (app) {
	'use strict';
	app.controller('OrderConfirmationController', function(OrderService) {
		var vm = this;
		vm.order = OrderService;
	});
})(angular.module('AngularApp'));