
// ############# FACTORY ############################
GamingApp.factory('gamingAppFactory', ['$http', function($http){
    var tastypie_api_url = '/api/v1';
    var tastypie_query_string = '?format=json';
    return{
        getAllGames: function(callback)
        {
            var url = "/" + 'games' + tastypie_api_url + "/all_games/" + tastypie_query_string;
            $http.get(url).success(callback);
        },
    }
}]);
