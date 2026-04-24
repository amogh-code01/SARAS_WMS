# Install NSSM (if needed) and register SaraWMS as a Windows service using NSSM
# Run this script as Administrator.

function Assert-Admin {
    $isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
    if (-not $isAdmin) {
        Write-Error "This script must be run as Administrator. Right-click and 'Run as administrator'."
        exit 1
    }
}

Assert-Admin

$base = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $base

# Detect python executable
$pythonCmd = (Get-Command python -ErrorAction SilentlyContinue).Source
if (-not $pythonCmd) {
    $pythonCmd = Read-Host -Prompt 'Python executable not found in PATH. Enter full path to python.exe'
    if (-not (Test-Path $pythonCmd)) { Write-Error "Python not found at $pythonCmd"; exit 1 }
}

# Prefer using server_run.py for service mode
$serviceScript = Join-Path $base 'server_run.py'
if (-not (Test-Path $serviceScript)) {
    Write-Error "Could not find server_run.py in project root ($base). Ensure you are running this script from project root."; exit 1
}

# Prepare logs directory
$logsDir = Join-Path $base 'logs'
if (-not (Test-Path $logsDir)) { New-Item -ItemType Directory -Path $logsDir | Out-Null }

# Locate or download nssm
$nssmExe = $null
# Common locations to check
$possible = @(
    "$env:ProgramFiles\nssm\nssm.exe",
    "$env:ProgramFiles(x86)\nssm\nssm.exe",
    Join-Path $base 'nssm\win64\nssm.exe',
    Join-Path $base 'nssm\win32\nssm.exe',
    Join-Path $base 'nssm.exe'
)
foreach ($p in $possible) { if (Test-Path $p) { $nssmExe = $p; break } }

if (-not $nssmExe) {
    Write-Host "nssm.exe not found locally — downloading nssm to project folder..."
    $tmpZip = Join-Path $env:TEMP 'nssm.zip'
    $nssmUrl = 'https://nssm.cc/release/nssm-2.24.zip'
    try {
        Invoke-WebRequest -Uri $nssmUrl -OutFile $tmpZip -UseBasicParsing -ErrorAction Stop
    } catch {
        Write-Error "Failed to download NSSM from $nssmUrl : $_"; exit 1
    }
    # Extract zip
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $extractDir = Join-Path $base 'nssm'
    if (Test-Path $extractDir) { Remove-Item -Recurse -Force $extractDir }
    [System.IO.Compression.ZipFile]::ExtractToDirectory($tmpZip, $extractDir)
    # Try to find exe under extracted dirs
    $found = Get-ChildItem -Path $extractDir -Filter nssm.exe -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($found) { $nssmExe = $found.FullName } else { Write-Error "Could not find nssm.exe inside downloaded archive."; exit 1 }
    Write-Host "Downloaded NSSM to $nssmExe"
}

# Service name
$serviceName = 'SaraWMS'

# Install service
Write-Host "Installing service '$serviceName' using NSSM at: $nssmExe"
$installArgs = "install $serviceName `"$pythonCmd`" `"$serviceScript`""
& $nssmExe install $serviceName $pythonCmd $serviceScript
# Configure service details
& $nssmExe set $serviceName AppDirectory $base
& $nssmExe set $serviceName AppStdout (Join-Path $logsDir 'service.log')
& $nssmExe set $serviceName AppStderr (Join-Path $logsDir 'service.log')
& $nssmExe set $serviceName AppRotateFiles 1
& $nssmExe set $serviceName AppEnvironmentExtra "PYTHONUNBUFFERED=1"

# Set service to auto-start
& $nssmExe set $serviceName Start SERVICE_AUTO_START

# Start the service
try {
    Start-Service -Name $serviceName -ErrorAction Stop
    Write-Host "Service '$serviceName' installed and started. Logs: $logsDir\service.log"
} catch {
    Write-Warning "Service installed but failed to start: $_";
    Write-Host 'You can start it manually with: nssm start SaraWMS OR Start-Service SaraWMS'
}

Write-Host 'Done.'
