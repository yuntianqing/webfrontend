﻿define([], function () {
    var func = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('service-demo', {
                url: '/service-demo',
                templateUrl: 'views/service-demo.html',
                controller: 'serviceDemoCtrl'
            })
        ;
    };

    func.$inject = ['$stateProvider', '$urlRouterProvider'];
    return func;
});