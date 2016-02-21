// ############# CONTROLLERS ############################

GamingApp.controller('homeController',
        ['$scope', 'gamingAppFactory',
        function($scope, gamingAppFactory){
    gotoHomeController($scope, gamingAppFactory);
}]);