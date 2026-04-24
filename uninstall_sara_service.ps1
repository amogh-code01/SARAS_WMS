# Stop and remove the SaraWMS NSSM service (if installed)
# Run as Administrator.
function Assert-Admin {
    $isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
    if (-not $isAdmin) {
        Write-Error "This script must be run as Administrator."; exit 1
    }
}
Assert-Admin

$serviceName = 'SaraWMS'
$base = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $base

# Locate nssm
$nssmExe = (Get-Command nssm -ErrorAction SilentlyContinue).Source
if (-not $nssmExe) {
    $possible = @(Join-Path $base 'nssm\win64\nssm.exe', Join-Path $base 'nssm\win32\nssm.exe', Join-Path $base 'nssm.exe')
    foreach ($p in $possible) { if (Test-Path $p) { $nssmExe = $p; break } }
}

if (Get-Service -Name $serviceName -ErrorAction SilentlyContinue) {
    try { Stop-Service -Name $serviceName -Force -ErrorAction Stop; Start-Sleep -Seconds 1 } catch {}
    if ($nssmExe) {
        & $nssmExe remove $serviceName confirm
    } else {
        sc.exe delete $serviceName | Out-Null
    }
    Write-Host "Service '$serviceName' removed." 
} else {
    Write-Host "Service '$serviceName' not found." 
}

# Optional: remove downloaded nssm folder
$extractDir = Join-Path $base 'nssm'
if (Test-Path $extractDir) {
    Write-Host "Removing downloaded NSSM folder: $extractDir"
    Remove-Item -Recurse -Force $extractDir
}
Write-Host 'Done.'
