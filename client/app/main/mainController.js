(function (app) {
	app.controller('MainController', function (ShopService, BasketService) {
		var vm = this;
		vm.shopItems = ShopService.ShopItems;

		vm.basket = BasketService;
		vm.addItemToBasket = function(item) {
			BasketService.addItem(item);
		};
	});
})(angular.module('AngularApp'));