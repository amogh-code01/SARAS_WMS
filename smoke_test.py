import json
import warnings
import os
warnings.filterwarnings('ignore')
os.environ['DATABASE_URL'] = 'postgresql://saras_user:7pD6l3h6d2UV0BBqdZRdpkum2RUrt6ub@dpg-d7lkomvavr4c73eldk2g-a.singapore-postgres.render.com/saras'

try:
    from app import app
    client = app.test_client()
    results = {}
    
    # 1) GET /api/login-users
    r1 = client.get('/api/login-users')
    results['1_get_login_users'] = {'status': r1.status_code}
    
    # 2) POST /api/login
    login_data = {'username': 'admin1', 'password': 'Admin@1234'}
    r2 = client.post('/api/login', json=login_data)
    results['2_post_login'] = {'status': r2.status_code}
    
    if r2.status_code == 200:
        # 3) GET /api/session
        r3 = client.get('/api/session')
        results['3_get_session'] = {'status': r3.status_code, 'data': r3.get_json()}
        
        # 4) GET /api/customers
        r4 = client.get('/api/customers')
        results['4_get_customers'] = {'status': r4.status_code, 'count': len(r4.get_json()) if isinstance(r4.get_json(), list) else 'N/A'}
        
        # 5) GET /api/orders
        r5 = client.get('/api/orders')
        results['5_get_orders'] = {'status': r5.status_code, 'count': len(r5.get_json()) if isinstance(r5.get_json(), list) else 'N/A'}
    else:
        results['login_failed_status'] = r2.status_code
        results['login_response_data'] = r2.get_json() if r2.is_json else r2.text
        
    print(json.dumps(results, indent=2))
except Exception as e:
    print(json.dumps({'error': str(e)}))
