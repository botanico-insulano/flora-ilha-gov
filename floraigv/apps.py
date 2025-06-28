import os
from dotenv import load_dotenv
from django.apps import AppConfig

load_dotenv()

class FloraigvConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = os.getenv('APP_NAME', 'floraigv')
    verbose_name = 'Flora da Ilha do Governador'