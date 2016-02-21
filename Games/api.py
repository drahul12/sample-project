from models import Game
from tastypie.resources import ModelResource

class GameResource(ModelResource):
    class Meta:
        queryset = Game.objects.all()
        resource_name = 'all_games'
        collection_name = 'all_games'
        list_allowed_methods = ['get']
