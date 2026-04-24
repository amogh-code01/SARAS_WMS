@echo off
echo ============================================
echo  Building SaraWMS Client
echo ============================================
cd /d "%~dp0"
call .venv\Scripts\activate.bat

pyinstaller SaraWMS_Client.spec --noconfirm
if errorlevel 1 (
    echo BUILD FAILED
    pause
    exit /b 1
)

echo.
echo Copying VC Runtime DLLs to root for client compatibility...
copy /Y "dist\SaraWMS_Client\_internal\VCRUNTIME140.dll"   "dist\SaraWMS_Client\"
copy /Y "dist\SaraWMS_Client\_internal\VCRUNTIME140_1.dll" "dist\SaraWMS_Client\"
copy /Y "C:\Windows\System32\msvcp140.dll"                 "dist\SaraWMS_Client\"
copy /Y "C:\Windows\System32\msvcp140.dll"                 "dist\SaraWMS_Client\_internal\"

echo.
echo ============================================
echo  Build complete!
echo  Distribute the entire dist\SaraWMS_Client\
echo  folder to each client PC.
echo ============================================
pause
