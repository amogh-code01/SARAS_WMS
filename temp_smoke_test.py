import os
import subprocess
import time
import urllib.request
import urllib.parse
import json
import http.cookiejar
import signal

def run_tests():
    os.environ["DATABASE_URL"] = "postgresql://saras_user:7pD6l3h6d2UV0BBqdZRdpkum2RUrt6ub@dpg-d7lkomvavr4c73eldk2g-a.singapore-postgres.render.com/saras"
    
    # Start app.py
    server_process = subprocess.Popen(["python", "app.py"], env=os.environ)
    
    base_url = "http://127.0.0.1:5000"
    results = []
    
    # Wait for server
    print("Waiting for server to start...")
    start_time = time.time()
    server_up = False
    while time.time() - start_time < 30:
        try:
            with urllib.request.urlopen(f"{base_url}/api/login-users", timeout=2) as response:
                if response.status == 200:
                    print("Server is up.")
                    server_up = True
                    break
        except Exception:
            # Check if server process is still running
            if server_process.poll() is not None:
                print("Server process died unexpectedly.")
                break
            time.sleep(1)
    
    if not server_up:
        print("Server failed to start in time or died.")
        server_process.terminate()
        return

    # Cookie jar for session
    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
    
    def test_request(method, path, data=None):
        url = f"{base_url}{path}"
        req = urllib.request.Request(url, method=method)
        if data:
            req.add_header('Content-Type', 'application/json')
            body = json.dumps(data).encode('utf-8')
        else:
            body = None
            
        try:
            with opener.open(req, data=body) as resp:
                status = resp.status
                return status
        except urllib.error.HTTPError as e:
            return e.code
        except Exception as e:
            return str(e)

    # Smoke tests
    results.append({"test": "GET /api/login-users", "status": test_request("GET", "/api/login-users")})
    results.append({"test": "POST /api/login", "status": test_request("POST", "/api/login", {"username": "admin1", "password": "Admin@1234"})})
    results.append({"test": "GET /api/session", "status": test_request("GET", "/api/session")})
    results.append({"test": "GET /api/customers", "status": test_request("GET", "/api/customers")})
    results.append({"test": "GET /api/orders", "status": test_request("GET", "/api/orders")})
    
    print("---JSON_SUMMARY---")
    print(json.dumps(results, indent=2))
    print("---END_JSON_SUMMARY---")
    
    # Clean up
    print("Terminating server...")
    server_process.terminate()
    server_process.wait()

if __name__ == "__main__":
    run_tests()
