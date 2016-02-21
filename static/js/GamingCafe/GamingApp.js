
var GamingApp = angular.module('GamingApp',
    ['ngRoute']);

// ############# ROUTING ############################
GamingApp.config
(['$routeProvider', '$httpProvider', '$locationProvider',
    function($routeProvider, $httpProvider, $locationProvider)
    {
        $routeProvider
            .when('/',
            {
                controller: 'homeController',
                templateUrl:'/static/html/home.html',
            })
            .otherwise(
            {
            });
        $locationProvider.html5Mode(true);
    }
]);
