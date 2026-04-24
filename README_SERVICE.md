**SaraWMS — NSSM Service Setup**

Overview
- These scripts help install SaraWMS as a Windows service using NSSM (Non-Sucking Service Manager).
- `install_nssm_service.ps1` will download NSSM if needed, register the `SaraWMS` service using `server_run.py`, configure logs, and start the service.
- `uninstall_sara_service.ps1` will stop and remove the service and clean up the downloaded NSSM files.

Prerequisites
- Run the install script as Administrator.
- Python must be installed and visible in PATH, or you will be prompted for the python.exe path.
- `server_run.py` must be present in the project root (recommended for headless service mode). If you prefer a desktop window, modify the script to use `run_app.py` instead.

Install (admin PowerShell):
```powershell
cd /d E:\Project_WOM_Version_2
powershell -ExecutionPolicy Bypass -File .\install_nssm_service.ps1
```

Uninstall (admin PowerShell):
```powershell
cd /d E:\Project_WOM_Version_2
powershell -ExecutionPolicy Bypass -File .\uninstall_sara_service.ps1
```

Check service and logs
- View service status:
  ```powershell
  Get-Service -Name SaraWMS
  ```
- Start/stop manually:
  ```powershell
  Start-Service SaraWMS
  Stop-Service SaraWMS
  ```
- Logs: `E:\Project_WOM_Version_2\logs\service.log`

Notes
- NSSM installs a normal Windows service; configure recovery options in Services.msc if desired.
- If you need the service to run under a specific user account, configure that in Services.msc or via NSSM configuration.
- For unattended servers, NSSM is recommended. For single-user desktop setups, consider scheduled tasks or Startup folder instead.

If you want, I can run the install script here (requires Administrator). If you prefer, I can only provide the commands and guide you through running them as admin.