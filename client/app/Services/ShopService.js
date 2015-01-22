(function (app) {
	'use strict';
	app.factory('ShopService', function () {
		var shopService = {};

		shopService.ShopItems = [{id: 1, name: 'Denim shirt', price: 39.99},
					 {id: 2, name: 'Denim jeans', price: 69.99},
					 {id: 3, name: 'Brown Khaki Trousers', price: 29.99},
					 {id: 4, name: 'Black Khaki Trousers', price: 29.99},
					 {id: 5, name: 'Red Khaki Trousers', price: 29.99},
					 {id: 6, name: 'Blue Khaki Trousers', price: 29.99},
					 {id: 7, name: 'Green Striped shirt', price: 29.99},
					 {id: 8, name: 'Red Striped shirt', price: 29.99},
					 {id: 9, name: 'Blue Plain Shirt', price: 39.99}
				];

		return shopService;
	});
})(angular.module('AngularApp'));