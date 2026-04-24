@echo off
setlocal
cd /d "%~dp0"

if not exist ".venv\Scripts\python.exe" (
    echo [ERROR] Python venv not found at .venv\Scripts\python.exe
    echo Install dependencies or create the venv first.
    pause
    exit /b 1
)

echo Starting SaraWMS server on 0.0.0.0:5000 ...
".venv\Scripts\python.exe" server_run.py
