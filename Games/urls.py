from django.conf.urls import patterns, include, url
from .api import GameResource
from tastypie.api import NamespacedApi

v1_api = NamespacedApi(api_name='v1', urlconf_namespace='games')
v1_api.register(GameResource())

urlpatterns = patterns('',
    url(r'^api/', include(v1_api.urls)),
)