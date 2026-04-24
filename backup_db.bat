@echo off
:: ============================================================
:: SaraWMS Daily Database Backup
:: Schedule this via Windows Task Scheduler to run daily.
:: Keeps last 30 days of backups.
:: ============================================================

set PROJECT_DIR=E:\Project_WOM_Version_2
set DB_FILE=%PROJECT_DIR%\wms_sara.db
set BACKUP_DIR=%PROJECT_DIR%\backups

:: Create backups folder if it doesn't exist
if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"

:: Build date stamp YYYYMMDD
for /f "tokens=1-3 delims=/ " %%a in ("%date%") do (
    set DATESTAMP=%%c%%b%%a
)

set BACKUP_FILE=%BACKUP_DIR%\wms_sara_%DATESTAMP%.db

:: Use sqlite3 hot-backup (safe in WAL mode — copies DB + WAL atomically)
echo [%date% %time%] Backing up database...
sqlite3 "%DB_FILE%" ".backup '%BACKUP_FILE%'"
if %errorlevel% == 0 (
    echo [%date% %time%] Backup saved: %BACKUP_FILE%
) else (
    echo [%date% %time%] ERROR: Backup failed! (ensure sqlite3.exe is on PATH)
    exit /b 1
)

:: Delete backups older than 30 days
forfiles /p "%BACKUP_DIR%" /s /m *.db /d -30 /c "cmd /c del @path" 2>nul

echo [%date% %time%] Done. Old backups cleaned up.
