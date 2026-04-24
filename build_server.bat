@echo off
setlocal
cd /d "%~dp0"

if not exist ".venv\Scripts\activate.bat" (
    echo [ERROR] Virtual environment not found at .venv\Scripts\activate.bat
    pause
    exit /b 1
)

call .venv\Scripts\activate.bat

echo ============================================
echo  Building SaraWMS Server
echo ============================================
pyinstaller SaraWMS.spec --noconfirm
if errorlevel 1 (
    echo BUILD FAILED
    pause
    exit /b 1
)

echo.
echo ============================================
echo  Build complete!
echo  Server build output: dist\SaraWMS\
echo ============================================
pause
