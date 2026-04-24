"""
Sara's Work Management System — Desktop Launcher
Runs the app as a native desktop window (no browser needed).
It starts its own local Flask instance on the first free port so the
desktop app does not accidentally attach to a stale server already running
on port 5000.

Usage:
    python run_app.py
"""

import threading
import time
import socket
import sys
import os
import traceback
import logging
import ctypes
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
import subprocess
import re

# ── Resolve directories ────────────────────────────────────────────────────
if getattr(sys, 'frozen', False):
    EXE_DIR  = os.path.dirname(sys.executable)   # folder containing the .exe
    BASE_DIR = sys._MEIPASS                        # bundled resources (templates etc.)
else:
    EXE_DIR  = os.path.dirname(os.path.abspath(__file__))
    BASE_DIR = EXE_DIR

# ── Startup log written next to the exe ───────────────────────────────────
_LOG_PATH = os.path.join(EXE_DIR, "sara_startup.log")
logging.basicConfig(
    filename=_LOG_PATH,
    level=logging.DEBUG,
    format="%(asctime)s %(levelname)s %(message)s",
    filemode="w",
)

os.chdir(BASE_DIR)

import webview

_flask_error: str = ""   # populated by start_flask() on failure
_server_port: int = 5000


def _is_port_open(host="127.0.0.1", port=5000):
    """Return True if something is already listening on the port."""
    try:
        with socket.create_connection((host, port), timeout=0.5):
            return True
    except OSError:
        return False


def _is_our_server(host="127.0.0.1", port=5000, timeout=1.0):
    """Probe the given port and return True if it's the SARAS Flask app.

    This performs a simple HTTP GET against `/` and looks for a known
    string in the page title to avoid falsely assuming unrelated services
    are suitable to reuse.
    """
    url = f"http://{host}:{port}/"
    req = Request(url, headers={"User-Agent": "SaraWMS-Launcher"})
    try:
        with urlopen(req, timeout=timeout) as resp:
            content = resp.read(1024).decode('utf-8', errors='ignore')
            # index.html title contains "SWM V1" in this project
            return "SWM V1" in content or "SWM V1 — Work Order Management" in content
    except (URLError, HTTPError, OSError):
        return False


def _find_free_port(host="127.0.0.1", start_port=5000, attempts=50):
    """Return the first free local port starting from start_port."""
    for port in range(start_port, start_port + attempts):
        if _is_port_open(host, port):
            # If something is listening, prefer to reuse it only if it's
            # our Flask app; otherwise continue searching.
            try:
                if _is_our_server(host, port):
                    return port
                # Log PID info when another process is using the port
                pid = None
                try:
                    pid = _get_pid_for_port(port)
                except Exception:
                    pid = None
                logging.info("Port %s in use by PID %s; not SARAS, skipping.", port, pid or "unknown")
            except Exception:
                pass
            continue
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                sock.bind((host, port))
            except OSError:
                continue
        return port
    raise RuntimeError(f"No free port found in range {start_port}-{start_port + attempts - 1}")


def _get_pid_for_port(port):
    """Return the PID listening on the given TCP port (Windows `netstat -ano`).

    Returns int PID or None if not found.
    """
    try:
        out = subprocess.check_output(["netstat", "-ano"], stderr=subprocess.DEVNULL, shell=True)
        text = out.decode('utf-8', errors='ignore')
        # look for lines like: TCP    127.0.0.1:5000      0.0.0.0:0      LISTENING       1234
        pattern = re.compile(r"\b(?:TCP|UDP)\b\s+[^\s:]+:%s\b[\s\S]*?(\d+)" % re.escape(str(port)))
        m = pattern.search(text)
        if m:
            return int(m.group(1))
    except Exception:
        return None
    return None


def start_flask(port):
    """Run Flask+SocketIO in background thread; log any crash."""
    global _flask_error
    try:
        logging.info("Importing Flask app...")
        from app import app, socketio
        logging.info("Flask app imported — starting server on port %s...", port)
        # Bind to 0.0.0.0 so the server is reachable from other machines on the LAN.
        # This is required when the client desktop opens a remote browser to
        # http://<host_ip>:port. Keep `allow_unsafe_werkzeug=True` for bundled
        # desktop use; consider a production WSGI server for public deployment.
        socketio.run(app, host="0.0.0.0", port=port, debug=False,
                     use_reloader=False, allow_unsafe_werkzeug=True)
    except Exception:
        _flask_error = traceback.format_exc()
        logging.error("Flask failed to start:\n%s", _flask_error)


def _start_webview():
    last_error = None
    for gui in (None, "edgechromium", "mshtml"):
        try:
            if gui is None:
                webview.start()
            else:
                webview.start(gui=gui)
            return
        except Exception as exc:
            last_error = exc
            logging.error("Webview startup failed for gui=%s: %s", gui or "default", exc)
    raise last_error or RuntimeError("No compatible webview runtime is available")


def wait_for_flask(flask_thread, host="127.0.0.1", port=5000, timeout=30):
    """Poll until Flask is accepting connections or the thread dies."""
    start = time.time()
    while time.time() - start < timeout:
        if not flask_thread.is_alive():
            return False          # crashed — no need to wait further
        if _is_port_open(host, port):
            return True
        time.sleep(0.1)
    return False


if __name__ == "__main__":
    try:
        _server_port = _find_free_port()
        logging.info("Using local port %s for desktop backend.", _server_port)
    except Exception:
        _flask_error = traceback.format_exc()
        logging.error("Could not select a local port:\n%s", _flask_error)
        _server_port = 5000

    flask_thread = threading.Thread(target=start_flask, args=(_server_port,), daemon=True)
    flask_thread.start()
    server_ready = wait_for_flask(flask_thread, port=_server_port)

    if not server_ready:
        short = (_flask_error[:600] + "…") if len(_flask_error) > 600 else _flask_error
        msg = (
            f"Server failed to start.\n\n"
            f"{short or 'Unknown error.'}\n\n"
            f"Full log: {_LOG_PATH}"
        )
        ctypes.windll.user32.MessageBoxW(0, msg, "Sara's WMS — Startup Error", 0x10)
        sys.exit(1)

    # Open native desktop window
    window = webview.create_window(
        title="SARAS - Order Tracking System",
        url=f"http://127.0.0.1:{_server_port}",
        width=1440,
        height=880,
        resizable=True,
        min_size=(960, 640),
    )

    try:
        _start_webview()
    except Exception as exc:
        ctypes.windll.user32.MessageBoxW(
            0,
            "Could not start the desktop webview runtime.\n\n"
            f"Error: {exc}\n\n"
            f"Full log: {_LOG_PATH}",
            "SARAS - WebView Startup Error",
            0x10,
        )
        sys.exit(1)
