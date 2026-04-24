"""
Sara's Work Management System — Client Launcher
Opens a desktop window connected to the server.
Server URL is read from config.ini (same folder as this exe).
No Flask, no database — just a thin PyWebView wrapper.
"""

import webview
import sys
import os
import configparser
import ctypes
from urllib.parse import urlparse
from urllib.request import Request, urlopen
import subprocess
import time
import shlex

# ── Resolve base directory (works both as .py and .exe) ───────────────────
if getattr(sys, 'frozen', False):
    BASE_DIR = os.path.dirname(sys.executable)
else:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ── Read server URL from config.ini, fallback to hardcoded default ─────────
_DEFAULT_URL = "http://192.168.1.198:5000"
_config_path = os.path.join(BASE_DIR, "config.ini")
config = configparser.ConfigParser()
config.read(_config_path)
SERVER_URL = config.get("server", "url", fallback=_DEFAULT_URL).strip()


def _show_error(message, title="SARAS - Client Error"):
    ctypes.windll.user32.MessageBoxW(0, message, title, 0x10)


def _check_server(url, timeout=5):
    try:
        req = Request(url, headers={"User-Agent": "SaraWMS-Client"})
        with urlopen(req, timeout=timeout) as response:
            return 200 <= getattr(response, "status", 200) < 500
    except Exception:
        return False


def _candidate_server_urls(url):
    parsed = urlparse(url)
    if not parsed.scheme or not parsed.netloc:
        return [url]

    host = parsed.hostname or ""
    port = parsed.port
    default_port = 443 if parsed.scheme == "https" else 80
    port = port or default_port
    path = parsed.path or "/"

    candidates = [url]
    if host not in {"127.0.0.1", "localhost"}:
        candidates.append(f"{parsed.scheme}://127.0.0.1:{port}{path}")
        candidates.append(f"{parsed.scheme}://localhost:{port}{path}")
    return candidates


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
    raise last_error or RuntimeError("No compatible webview runtime is available")

if __name__ == "__main__":
    parsed = urlparse(SERVER_URL)
    if not parsed.scheme or not parsed.netloc:
        _show_error(
            f"Invalid server URL in config.ini:\n\n{SERVER_URL}\n\nExpected format: http://host:port",
            "SARAS - Invalid Server URL",
        )
        sys.exit(1)

    active_url = None
    for candidate in _candidate_server_urls(SERVER_URL):
        if _check_server(candidate):
            active_url = candidate
            break

    if not active_url:
        # If a local bundled launcher exists, try starting it (it will start
        # the Flask server and open the desktop window). This makes the
        # client exe behave like a single-click launcher when the server is
        # included in the same folder.
        run_app_path = os.path.join(BASE_DIR, "run_app.py")
        if os.path.exists(run_app_path):
            try:
                ctypes.windll.user32.MessageBoxW(0, "Starting local server and opening the desktop app.", "SARAS - Starting Local Server", 0)
            except Exception:
                pass
            # Use the same Python interpreter (or the bundled exe when frozen)
            python_exec = sys.executable if sys.executable else "python"
            # Launch run_app.py and exit; run_app will create the window itself.
            try:
                if getattr(sys, 'frozen', False):
                    # If frozen, run the bundled exe instead
                    exe_path = os.path.join(BASE_DIR, os.path.basename(sys.executable))
                    subprocess.Popen([exe_path], cwd=BASE_DIR)
                else:
                    subprocess.Popen([python_exec, run_app_path], cwd=BASE_DIR)
            except Exception as exc:
                _show_error(f"Failed to launch local server: {exc}", "SARAS - Launcher Error")
                sys.exit(1)
            sys.exit(0)

        _show_error(
            "Could not connect to the configured server.\n\n"
            f"Server URL: {SERVER_URL}\n"
            f"Config file: {_config_path}\n\n"
            "Check that the server is running and reachable from this machine.",
            "SARAS - Server Unreachable",
        )
        sys.exit(1)

    if active_url != SERVER_URL:
        SERVER_URL = active_url

    window = webview.create_window(
        title="SARAS - Order Tracking System",
        url=SERVER_URL,
        width=1440,
        height=880,
        resizable=True,
        min_size=(960, 640),
    )
    try:
        _start_webview()
    except Exception as exc:
        _show_error(
            "Could not start the desktop webview runtime.\n\n"
            f"Error: {exc}\n\n"
            "On Windows Server 2012, install WebView2 Runtime or use Internet Explorer components (MSHTML).",
            "SARAS - WebView Startup Error",
        )
        sys.exit(1)
    sys.exit(0)
