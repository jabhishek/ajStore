(function () {
	'use strict';
	angular.module('AngularApp', ['ui.router', 'ngCookies', 'restangular', 'ngAnimate', 'LocalStorageModule', 'ngAria', 'ngMaterial'])
		.value('_', _)
		.config(function($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider) {
			localStorageServiceProvider
				.setPrefix('ajStore');

			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'main/main.html',
					controller: 'MainController',
					controllerAs: 'mainVm'
				})
				.state('checkout', {
					url: '/checkout',
					templateUrl: 'checkout/checkout.html',
					controller: 'CheckoutController',
					controllerAs: 'checkoutVm'
				})
				.state('confirmation', {
					url: '/confirmation',
					templateUrl: 'checkout/orderConfirmation.html',
					controller: 'OrderConfirmationController',
					controllerAs: 'orderConfirmationVm'
				});

			$urlRouterProvider.otherwise('/');

			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
		});
})();
