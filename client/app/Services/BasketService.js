(function (app) {
	app.factory('BasketService', function (localStorageService) {
		var basket = {
			items: []
		};

		init();

		function init() {
			var basketFromLs = localStorageService.get('basket');
			if (basketFromLs) {
				basket.items = basketFromLs;
			}
		};

		basket.groupedItems = function() {
			return _.groupBy(basket.items, function(item) {
				return item.id;
			});
		};

		basket.addItem = function (item) {
			basket.items.push(item);
			localStorageService.set('basket', basket.items);
		};

		return basket;
	});
})(angular.module('AngularApp'));