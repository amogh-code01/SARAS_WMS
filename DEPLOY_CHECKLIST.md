# SaraWMS Render Deployment Checklist

## 1. Pre-Deploy

- Rotate Render PostgreSQL credentials if they were exposed.
- Confirm `DATABASE_URL` works from local smoke test.
- Ensure latest code contains:
  - `requirements.txt`
  - `Procfile`
  - `.env.example`
  - `/health` endpoint in `app.py`

## 2. Render Web Service Setup

- Create a **Web Service** from your GitHub repository.
- Select the same region as PostgreSQL (`Singapore`).
- Configure commands:
  - Build: `pip install -r requirements.txt`
  - Start: `gunicorn --worker-class eventlet -w 1 --bind 0.0.0.0:$PORT app:app`

## 3. Render Environment Variables

Set the following in Render service environment variables:

- `DATABASE_URL` = Render External Database URL (rotated credential)
- `SECRET_KEY` = strong random value
- `CORS_ORIGINS` = your Render service URL (example: `https://your-app.onrender.com`)
- `SESSION_COOKIE_SECURE` = `true`

Optional fallbacks (usually not needed when `DATABASE_URL` is set):

- `PGHOST`, `PGPORT`, `PGDATABASE`, `PGUSER`, `PGPASSWORD`, `PGSSLMODE`

## 4. First Deploy Validation

After deploy is successful:

- Open `https://<your-service>.onrender.com/health`
- Expected response: `{"ok": true, "database": "up"}`
- Validate core flows:
  - Login
  - Session check
  - Customers list/import
  - Orders list/create/update/delete
  - Attachment upload/open/delete

## 5. Rollback Safety

- Keep prior working local package/version until cloud stability is confirmed.
- If deploy fails:
  - Re-check environment variables
  - Confirm DB credential validity
  - Check Render logs for startup or DB errors

## 6. Post-Deploy Operations

- Enable monitoring/alerts for non-200 responses and service restarts.
- Schedule regular PostgreSQL backups.
- Plan attachment persistence strategy for cloud (persistent disk or S3) if not already handled.
