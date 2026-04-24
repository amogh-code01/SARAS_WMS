import os
import subprocess
import time
import urllib.request
import json
import http.cookiejar

def run_tests():
    os.environ["DATABASE_URL"] = "postgresql://saras_user:7pD6l3h6d2UV0BBqdZRdpkum2RUrt6ub@dpg-d7lkomvavr4c73eldk2g-a.singapore-postgres.render.com/saras"
    
    server_process = subprocess.Popen(["python", "app.py"], env=os.environ, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    base_url = "http://127.0.0.1:5000"
    results = []
    
    print("Waiting for server...")
    start_time = time.time()
    server_up = False
    while time.time() - start_time < 60:
        try:
            with urllib.request.urlopen(f"{base_url}/api/login-users", timeout=2) as response:
                if response.status == 200:
                    server_up = True
                    break
        except:
            if server_process.poll() is not None:
                break
            time.sleep(1)
    
    if not server_up:
        print("FAIL: Server start")
        server_process.kill()
        return

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
                return resp.status
        except urllib.error.HTTPError as e:
            return e.code
        except Exception as e:
            return str(type(e).__name__)

    results.append({"test": "GET /api/login-users", "status": test_request("GET", "/api/login-users")})
    results.append({"test": "POST /api/login", "status": test_request("POST", "/api/login", {"username": "admin1", "password": "Admin@1234"})})
    results.append({"test": "GET /api/session", "status": test_request("GET", "/api/session")})
    results.append({"test": "GET /api/customers", "status": test_request("GET", "/api/customers")})
    results.append({"test": "GET /api/orders", "status": test_request("GET", "/api/orders")})
    
    print(json.dumps(results, indent=2))
    
    server_process.kill()

if __name__ == "__main__":
    run_tests()
