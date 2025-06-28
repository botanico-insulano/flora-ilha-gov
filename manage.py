#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from dotenv import load_dotenv, find_dotenv
from django.core.management import execute_from_command_line
from django.core.management.commands.runserver import Command

def main():
    env_path = find_dotenv(usecwd=True)
    load_dotenv(env_path, override=True)
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "plant_catalog_backend.settings")
    default_host = Command.default_addr
    default_port = Command.default_port
    port = os.getenv("DJANGO_PORT", default_port)
    argv = sys.argv
    if len(sys.argv) >= 1 and argv[1] == 'runserver':
        argv = [sys.argv[0], "runserver", f"{default_host}:{port}"]
    try:
        execute_from_command_line(argv)
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Did you forget to activate the virtual environment?"
        ) from exc


if __name__ == "__main__":
    main()
