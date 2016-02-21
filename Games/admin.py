from django.contrib import admin
from models import Game

# Register your models here.

class GamesModel(admin.ModelAdmin):
    list_display = ('name', 'description',)
    list_filter = ('name',)
admin.site.register(Game, GamesModel)
