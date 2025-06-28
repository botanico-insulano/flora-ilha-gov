from django.shortcuts import render
from django.utils import timezone
from django.views.decorators.http import require_GET
from .apps import FloraigvConfig

hello_filename = 'hello'

@require_GET
def hello_view(request):
    hello_path = f'{FloraigvConfig.name}/{hello_filename}.html'
    print(hello_path)
    return render(request, hello_path, {
        'now': timezone.now(),
        'friendly_name': FloraigvConfig.verbose_name
    })