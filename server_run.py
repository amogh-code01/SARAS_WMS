"""
Sara's Work Management System — Headless Server Launcher
Use this when running as a Windows service via NSSM.
No desktop window — just starts the Flask+SocketIO server.

NSSM setup (run once as Administrator):
    nssm install SaraWMS "E:/Project_WOM_Version_2/.venv/Scripts/python.exe"
    nssm set SaraWMS AppParameters "E:/Project_WOM_Version_2/server_run.py"
    nssm set SaraWMS AppDirectory "E:/Project_WOM_Version_2"
    nssm set SaraWMS AppStdout "E:/Project_WOM_Version_2/logs/service.log"
    nssm set SaraWMS AppStderr "E:/Project_WOM_Version_2/logs/service.log"
    nssm set SaraWMS AppRotateFiles 1
    nssm set SaraWMS Start SERVICE_AUTO_START
    nssm start SaraWMS

Usage (direct):
    python server_run.py
"""

import os
import sys

# ── Ensure working directory is the project folder ─────────────────────────
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(BASE_DIR)
sys.path.insert(0, BASE_DIR)

# ── Use eventlet if available for production-grade WebSocket support ─────────
try:
    import eventlet
    eventlet.monkey_patch()
    _USE_EVENTLET = True
except ImportError:
    _USE_EVENTLET = False

# ── Create logs directory if it doesn't exist ───────────────────────────────
_logs_dir = os.path.join(BASE_DIR, "logs")
os.makedirs(_logs_dir, exist_ok=True)

from app import app, socketio

if __name__ == "__main__":
    port = int(os.getenv("PORT", "5000") or "5000")
    print(f"[SaraWMS] Starting server on 0.0.0.0:{port} ...")
    print("[SaraWMS] Database: PostgreSQL (DATABASE_URL / PG* env)")
    if _USE_EVENTLET:
        print("[SaraWMS] Using Eventlet — production-grade async server")
        socketio.run(app, host="0.0.0.0", port=port, debug=False,
                     use_reloader=False)
    else:
        print("[SaraWMS] WARNING: eventlet not installed — using dev server")
        print("[SaraWMS] Run: pip install eventlet  for production use")
        socketio.run(app, host="0.0.0.0", port=port, debug=False,
                     use_reloader=False, allow_unsafe_werkzeug=True)
