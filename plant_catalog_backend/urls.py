

from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView
from floraigv.apps import FloraigvConfig

print(f'{FloraigvConfig.name}.urls')

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', RedirectView.as_view(url='hello/')),
    path('', include(f'{FloraigvConfig.name}.urls')),
]
