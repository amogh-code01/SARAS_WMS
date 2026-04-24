import json
import os
import time
import sys
from app import app, _normalize_customer_name

# Set environment variable
os.environ['DATABASE_URL'] = 'postgresql://saras_user:7pD6l3h6d2UV0BBqdZRdpkum2RUrt6ub@dpg-d7lkomvavr4c73eldk2g-a.singapore-postgres.render.com/saras'

results = []

def run_test():
    with open('test_results.txt', 'w') as f:
        f.write("Starting tests...\n")
        with app.test_client() as client:
            # 1. GET /health
            try:
                res = client.get('/health')
                results.append({'step': '1. GET /health', 'status': res.status_code, 'pass': res.status_code == 200})
            except Exception as e:
                results.append({'step': '1. GET /health', 'error': str(e), 'pass': False})

            # 2. GET /api/login-users
            try:
                res = client.get('/api/login-users')
                results.append({'step': '2. GET /api/login-users', 'status': res.status_code, 'pass': res.status_code == 200})
            except Exception as e:
                results.append({'step': '2. GET /api/login-users', 'error': str(e), 'pass': False})

            # 3. POST /api/login
            try:
                res = client.post('/api/login', json={'username': 'admin1', 'password': 'Admin@1234'})
                results.append({'step': '3. POST /api/login', 'status': res.status_code, 'pass': res.status_code == 200})
            except Exception as e:
                results.append({'step': '3. POST /api/login', 'error': str(e), 'pass': False})

            # 4. GET /api/session
            try:
                res = client.get('/api/session')
                results.append({'step': '4. GET /api/session', 'status': res.status_code, 'pass': res.status_code == 200})
            except Exception as e:
                results.append({'step': '4. GET /api/session', 'error': str(e), 'pass': False})

            # 5. GET /api/customers
            try:
                res = client.get('/api/customers')
                results.append({'step': '5. GET /api/customers', 'status': res.status_code, 'pass': res.status_code == 200})
            except Exception as e:
                results.append({'step': '5. GET /api/customers', 'error': str(e), 'pass': False})

            # 6. GET /api/orders
            try:
                res = client.get('/api/orders')
                results.append({'step': '6. GET /api/orders', 'status': res.status_code, 'pass': res.status_code == 200})
            except Exception as e:
                results.append({'step': '6. GET /api/orders', 'error': str(e), 'pass': False})

            # 7. POST /api/orders
            order_id = f"SMOKE-{int(time.time())}"
            # Need to provide more fields to satisfy the 500 error potential
            # The server seems to use JSON data for some fields and root data for others
            order_json = {
                'id': order_id, 
                'customer': 'Test Customer', 
                'savedBy': 'admin1',
                'data_json': json.dumps({'id': order_id, 'customer': 'Test Customer'})
            }
            try:
                res = client.post('/api/orders', json=order_json)
                results.append({'step': f'7. POST /api/orders ({order_id})', 'status': res.status_code, 'pass': res.status_code in [200, 201]})
            except Exception as e:
                results.append({'step': '7. POST /api/orders', 'error': str(e), 'pass': False})

            # 8. GET /api/orders (assert new id exists)
            try:
                res = client.get('/api/orders')
                data = res.get_json()
                ids = [o.get('id') for o in data] if isinstance(data, list) else []
                found = order_id in ids
                results.append({'step': '8. GET /api/orders (Verify ID)', 'status': res.status_code, 'pass': found})
            except Exception as e:
                results.append({'step': '8. GET /api/orders (Verify ID)', 'error': str(e), 'pass': False})

            # 9. DELETE /api/orders/<id>
            try:
                res = client.delete(f'/api/orders/{order_id}')
                results.append({'step': f'9. DELETE /api/orders/{order_id}', 'status': res.status_code, 'pass': res.status_code in [200, 204]})
            except Exception as e:
                results.append({'step': '9. DELETE /api/orders', 'error': str(e), 'pass': False})

            # 10. GET /api/orders (assert id removed)
            try:
                res = client.get('/api/orders')
                data = res.get_json()
                ids = [o.get('id') for o in data] if isinstance(data, list) else []
                not_found = order_id not in ids
                results.append({'step': '10. GET /api/orders (Verify Removed)', 'status': res.status_code, 'pass': not_found})
            except Exception as e:
                results.append({'step': '10. GET /api/orders (Verify Removed)', 'error': str(e), 'pass': False})

        f.write(json.dumps(results, indent=2))
        overall = all(r.get('pass', False) for r in results)
        f.write(f"\nOVERALL: {'PASS' if overall else 'FAIL'}")
        print("Done. Results written to test_results.txt")

if __name__ == '__main__':
    run_test()
