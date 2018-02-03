'use strict';

angular.module('myApp.currency', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/currency', {
            templateUrl: 'currency/currency.html',
            controller: 'CurrencyCtrl'
        });
    }])

    .controller('CurrencyCtrl', [function () {

    }]);