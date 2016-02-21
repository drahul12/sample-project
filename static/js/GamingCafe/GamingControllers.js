gotoHomeController = function(scope, factory)
{
    factory.getAllGames(function(data){
        scope.games = data.all_games;
    });
};