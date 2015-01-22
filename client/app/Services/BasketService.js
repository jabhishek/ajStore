(function (app) {
	'use strict';
	app.factory('BasketService', function (localStorageService, _) {
		var basket = {
			items: [],
			getItemCount: getItemCount,
			getBasketValue: getBasketValue,
			addItem: addItem,
			removeItem: removeItem
		};

		init();

		// Private functions

		function init() {
			var basketFromLs = localStorageService.get('basket');
			if (basketFromLs) {
				basket.items = basketFromLs;
			}
		}

		function getItemCount() {
			return _.reduce(basket.items, function(sum, item) {
				return sum + item.quantity;
			}, 0);
		}

		function getBasketValue() {
			return _.reduce(basket.items, function(sum, item) {
				return +(sum + (item.quantity * item.price)).toFixed(2);
			}, 0);
		}

		 function addItem(item) {
			var index = _.findIndex(basket.items, function(x) {
				return x.id === item.id;
			});
			if (index === -1) {
				item.quantity = 1;
				basket.items.push(item);
			} else {
				basket.items[index].quantity++;
			}
			localStorageService.set('basket', basket.items);
		}
	    function removeItem(item) {
			var index = _.findIndex(basket.items, function(x) {
				return x.id === item.id;
			});
			if (index > -1) {
				if(basket.items[index].quantity > 1) {
					basket.items[index].quantity--;
				} else {
					basket.items.splice(index, 1);
				}

			}
			localStorageService.set('basket', basket.items);
		}

		return basket;
	});
})(angular.module('AngularApp'));