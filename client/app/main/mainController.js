(function (app) {
	app.controller('MainController', function (ShopService) {
		var vm = this;
		vm.shopItems = ShopService.ShopItems;
	});
})(angular.module('AngularApp'));