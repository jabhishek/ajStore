(function () {
	angular.module('AngularApp', ['ui.router', 'ngCookies', 'restangular', 'ngAnimate', 'LocalStorageModule', 'ngAria', 'ngMaterial'])
		.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'main/main.html',
					controller: 'MainController as mainVm',
					controllerAs: 'mainVm'
				});

			$urlRouterProvider.otherwise('/');

			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
		});
})();
