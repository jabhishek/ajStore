(function (app) {
	'use strict';
	app.factory('DeliveryMethodService', function () {
		var deliveryMethodService = {};

		deliveryMethodService.deliveryMethods = [
			{id: 1, name: 'Standard Home Delivery', price: 3.99},
			{id: 2, name: 'Next Day Home Delivery', price: 7.99},
			{id: 3, name: 'Collect from Store', price: 0}
		];

		return deliveryMethodService;
	});
})(angular.module('AngularApp'));