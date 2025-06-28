

from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView
from floraigv.apps import FloraigvConfig
from floraigv.views import hello_filename

flora_app_urls = f'{FloraigvConfig.name}.urls'

print(flora_app_urls)

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include(flora_app_urls)),
    path('', RedirectView.as_view(url=f'{hello_filename}/')),
]

# [apps.py] app name set -> [views.py] function for rendering template by [app_name]/[filename].html
# -> [urls.py] path to find function -> [self] include app paths and redirect