/**
 * Created by ajain on 22/01/2015.
 */
(function (app) {
	'use strict';
	app.factory('OrderService', function() {
		return {
			orderNumber: 0
		};
	});
})(angular.module('AngularApp'));