from django.urls import path
from .views import hello_view, hello_filename

urlpatterns = [
	path(f'{hello_filename}/', hello_view, name='hello')
]