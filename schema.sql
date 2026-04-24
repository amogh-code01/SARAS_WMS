-- ============================================================
-- Sara's Work Management System — PostgreSQL Schema
-- Tables used: app_users, work_orders, customers
-- All statements are idempotent (CREATE TABLE IF NOT EXISTS).
-- ============================================================


-- ── Application Users ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS app_users (
    user_key      TEXT PRIMARY KEY,
    name          TEXT NOT NULL,
    role          TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    is_admin      INTEGER NOT NULL DEFAULT 0,
    sections_json TEXT NOT NULL DEFAULT '[]',
    created_at    TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

-- ── Customer Master ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS customers (
    customer_id BIGSERIAL PRIMARY KEY,
    code        TEXT,
    name        TEXT NOT NULL UNIQUE,
    created_at  TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    updated_at  TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_customers_name ON customers(name);
CREATE UNIQUE INDEX IF NOT EXISTS idx_customers_name_unique_ci ON customers ((LOWER(name)));
CREATE UNIQUE INDEX IF NOT EXISTS idx_customers_code_unique
    ON customers ((LOWER(code)))
    WHERE code IS NOT NULL AND TRIM(code) <> '';

-- ── Work Orders ──────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS work_orders (
    id              TEXT    PRIMARY KEY,
    wo              TEXT    NOT NULL UNIQUE,
    customer        TEXT,
    division        TEXT,
    priority        TEXT,
    coating         TEXT,
    electrode       TEXT,
    order_qty       INTEGER,
    order_value     REAL,
    po_advance      TEXT,
    trail           TEXT,
    design          TEXT,
    store_blanks    INTEGER,
    shortage        INTEGER,
    bin_number      TEXT,
    rcvd_status     TEXT,
    rcvd_date       TEXT,
    rcvd_qty        INTEGER,
    del_start       TEXT,
    del_weeks       INTEGER,
    delivery_date   TEXT,
    po_entry_date   TEXT,
    attachment_path TEXT,
    data_json       TEXT    NOT NULL,
    saved_by        TEXT,
    saved_at        TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    updated_at      TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_wo_priority ON work_orders(priority);
CREATE INDEX IF NOT EXISTS idx_wo_division ON work_orders(division);
CREATE INDEX IF NOT EXISTS idx_wo_saved_at ON work_orders(saved_at);


-- ------------------------------------------------------------
-- LOOKUP / REFERENCE TABLES
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS roles (
    role_id     BIGSERIAL PRIMARY KEY,
    role_name   TEXT    NOT NULL UNIQUE,   -- e.g. Admin, Manager, Employee
    description TEXT
);

CREATE TABLE IF NOT EXISTS departments (
    department_id   BIGSERIAL PRIMARY KEY,
    department_name TEXT    NOT NULL UNIQUE,
    manager_id      INTEGER,              -- FK to users (set after users created)
    created_at      TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    updated_at      TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE TABLE IF NOT EXISTS priorities (
    priority_id   BIGSERIAL PRIMARY KEY,
    priority_name TEXT    NOT NULL UNIQUE,  -- e.g. Low, Medium, High, Critical
    sort_order    INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS statuses (
    status_id   BIGSERIAL PRIMARY KEY,
    status_name TEXT    NOT NULL UNIQUE,    -- e.g. Open, In Progress, Review, Done, Cancelled
    is_terminal INTEGER NOT NULL DEFAULT 0, -- 1 = closed/final state
    sort_order  INTEGER NOT NULL DEFAULT 0
);

-- ------------------------------------------------------------
-- USERS
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS users (
    user_id       BIGSERIAL PRIMARY KEY,
    full_name     TEXT    NOT NULL,
    email         TEXT    NOT NULL UNIQUE,
    password_hash TEXT    NOT NULL,
    role_id       INTEGER NOT NULL REFERENCES roles(role_id),
    department_id INTEGER REFERENCES departments(department_id),
    phone         TEXT,
    is_active     INTEGER NOT NULL DEFAULT 1,  -- 1 = active, 0 = disabled
    avatar_path   TEXT,
    created_at    TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    updated_at    TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

-- Finalise the departments.manager_id FK now that users exists
CREATE INDEX IF NOT EXISTS idx_users_email         ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_department    ON users(department_id);
CREATE INDEX IF NOT EXISTS idx_users_role          ON users(role_id);

-- ------------------------------------------------------------
-- PROJECTS
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS projects (
    project_id    BIGSERIAL PRIMARY KEY,
    project_name  TEXT    NOT NULL,
    description   TEXT,
    owner_id      INTEGER NOT NULL REFERENCES users(user_id),
    department_id INTEGER REFERENCES departments(department_id),
    status_id     INTEGER NOT NULL REFERENCES statuses(status_id),
    priority_id   INTEGER NOT NULL REFERENCES priorities(priority_id),
    start_date    TEXT,
    due_date      TEXT,
    completed_at  TEXT,
    budget        REAL,
    created_at    TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    updated_at    TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_projects_owner      ON projects(owner_id);
CREATE INDEX IF NOT EXISTS idx_projects_status     ON projects(status_id);
CREATE INDEX IF NOT EXISTS idx_projects_due_date   ON projects(due_date);

-- Project members (many-to-many)
CREATE TABLE IF NOT EXISTS project_members (
    project_id INTEGER NOT NULL REFERENCES projects(project_id) ON DELETE CASCADE,
    user_id    INTEGER NOT NULL REFERENCES users(user_id)       ON DELETE CASCADE,
    joined_at  TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    PRIMARY KEY (project_id, user_id)
);

-- ------------------------------------------------------------
-- TASKS
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS tasks (
    task_id       BIGSERIAL PRIMARY KEY,
    project_id    INTEGER REFERENCES projects(project_id) ON DELETE CASCADE,
    parent_task_id INTEGER REFERENCES tasks(task_id),  -- for sub-tasks
    title         TEXT    NOT NULL,
    description   TEXT,
    created_by    INTEGER NOT NULL REFERENCES users(user_id),
    status_id     INTEGER NOT NULL REFERENCES statuses(status_id),
    priority_id   INTEGER NOT NULL REFERENCES priorities(priority_id),
    start_date    TEXT,
    due_date      TEXT,
    completed_at  TEXT,
    estimated_hours REAL,
    created_at    TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    updated_at    TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_tasks_project       ON tasks(project_id);
CREATE INDEX IF NOT EXISTS idx_tasks_status        ON tasks(status_id);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date      ON tasks(due_date);
CREATE INDEX IF NOT EXISTS idx_tasks_parent        ON tasks(parent_task_id);

-- Task assignments (many-to-many: a task can have multiple assignees)
CREATE TABLE IF NOT EXISTS task_assignments (
    assignment_id BIGSERIAL PRIMARY KEY,
    task_id       INTEGER NOT NULL REFERENCES tasks(task_id)   ON DELETE CASCADE,
    user_id       INTEGER NOT NULL REFERENCES users(user_id)   ON DELETE CASCADE,
    assigned_by   INTEGER NOT NULL REFERENCES users(user_id),
    assigned_at   TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    UNIQUE (task_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_task_assignments_user ON task_assignments(user_id);

-- ------------------------------------------------------------
-- TIME LOGS
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS time_logs (
    log_id        BIGSERIAL PRIMARY KEY,
    task_id       INTEGER NOT NULL REFERENCES tasks(task_id) ON DELETE CASCADE,
    user_id       INTEGER NOT NULL REFERENCES users(user_id),
    hours_logged  REAL    NOT NULL CHECK (hours_logged > 0),
    log_date      TEXT    NOT NULL DEFAULT (CURRENT_DATE::text),
    notes         TEXT,
    created_at    TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_time_logs_task ON time_logs(task_id);
CREATE INDEX IF NOT EXISTS idx_time_logs_user ON time_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_time_logs_date ON time_logs(log_date);

-- ------------------------------------------------------------
-- COMMENTS
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS comments (
    comment_id  BIGSERIAL PRIMARY KEY,
    task_id     INTEGER NOT NULL REFERENCES tasks(task_id) ON DELETE CASCADE,
    user_id     INTEGER NOT NULL REFERENCES users(user_id),
    body        TEXT    NOT NULL,
    is_edited   INTEGER NOT NULL DEFAULT 0,
    created_at  TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    updated_at  TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_comments_task ON comments(task_id);

-- ------------------------------------------------------------
-- ATTACHMENTS
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS attachments (
    attachment_id BIGSERIAL PRIMARY KEY,
    task_id       INTEGER REFERENCES tasks(task_id)       ON DELETE CASCADE,
    project_id    INTEGER REFERENCES projects(project_id) ON DELETE CASCADE,
    uploaded_by   INTEGER NOT NULL REFERENCES users(user_id),
    file_name     TEXT    NOT NULL,
    file_path     TEXT    NOT NULL,
    file_size_kb  INTEGER,
    mime_type     TEXT,
    uploaded_at   TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    CHECK (task_id IS NOT NULL OR project_id IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS idx_attachments_task    ON attachments(task_id);
CREATE INDEX IF NOT EXISTS idx_attachments_project ON attachments(project_id);

-- ------------------------------------------------------------
-- NOTIFICATIONS
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS notifications (
    notification_id BIGSERIAL PRIMARY KEY,
    user_id         INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    title           TEXT    NOT NULL,
    message         TEXT    NOT NULL,
    link_type       TEXT,    -- e.g. 'task', 'project', 'comment'
    link_id         INTEGER,
    is_read         INTEGER NOT NULL DEFAULT 0,
    created_at      TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id, is_read);

-- ------------------------------------------------------------
-- AUDIT LOG
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS audit_log (
    log_id      BIGSERIAL PRIMARY KEY,
    user_id     INTEGER REFERENCES users(user_id),
    action      TEXT    NOT NULL,   -- e.g. 'CREATE', 'UPDATE', 'DELETE'
    table_name  TEXT    NOT NULL,
    record_id   INTEGER NOT NULL,
    old_values  TEXT,               -- JSON snapshot
    new_values  TEXT,               -- JSON snapshot
    ip_address  TEXT,
    logged_at   TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_audit_table ON audit_log(table_name, record_id);

-- ------------------------------------------------------------
-- CUSTOMERS MASTER
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS customers (
    customer_id BIGSERIAL PRIMARY KEY,
    code        TEXT,
    name        TEXT NOT NULL UNIQUE,
    created_at  TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    updated_at  TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_customers_name ON customers(name);
CREATE UNIQUE INDEX IF NOT EXISTS idx_customers_name_unique_ci ON customers ((LOWER(name)));
CREATE UNIQUE INDEX IF NOT EXISTS idx_customers_code_unique
    ON customers ((LOWER(code)))
    WHERE code IS NOT NULL AND TRIM(code) <> '';

-- ------------------------------------------------------------
-- WORK ORDERS  (flat record mirroring the WOM frontend)
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS work_orders (
    id            TEXT    PRIMARY KEY,
    wo            TEXT    NOT NULL UNIQUE,
    customer      TEXT,
    division      TEXT,
    priority      TEXT,
    coating       TEXT,
    electrode     TEXT,
    order_qty     INTEGER,
    order_value   REAL,
    po_advance    TEXT,
    trail         TEXT,
    design        TEXT,
    store_blanks  INTEGER,
    shortage      INTEGER,
    bin_number    TEXT,
    rcvd_status   TEXT,
    rcvd_date     TEXT,
    rcvd_qty      INTEGER,
    del_start     TEXT,
    del_weeks     INTEGER,
    delivery_date TEXT,
    po_entry_date TEXT,
    data_json     TEXT    NOT NULL,
    saved_by      TEXT,
    saved_at      TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text),
    updated_at    TEXT    NOT NULL DEFAULT (CURRENT_TIMESTAMP::text)
);

CREATE INDEX IF NOT EXISTS idx_wo_priority ON work_orders(priority);
CREATE INDEX IF NOT EXISTS idx_wo_division ON work_orders(division);
CREATE INDEX IF NOT EXISTS idx_wo_saved_at ON work_orders(saved_at);

-- ============================================================
-- SEED DATA
-- ============================================================

INSERT INTO roles (role_name, description) VALUES
    ('Admin',    'Full system access'),
    ('Manager',  'Manage projects, tasks and team members'),
    ('Employee', 'View and update assigned tasks') ON CONFLICT DO NOTHING;

INSERT INTO priorities (priority_name, sort_order) VALUES
    ('Low',      1),
    ('Medium',   2),
    ('High',     3),
    ('Critical', 4) ON CONFLICT DO NOTHING;

INSERT INTO statuses (status_name, is_terminal, sort_order) VALUES
    ('Open',        0, 1),
    ('In Progress', 0, 2),
    ('In Review',   0, 3),
    ('On Hold',     0, 4),
    ('Completed',   1, 5),
    ('Cancelled',   1, 6) ON CONFLICT DO NOTHING;

INSERT INTO departments (department_name) VALUES
    ('Administration'),
    ('Operations'),
    ('Human Resources'),
    ('Finance'),
    ('IT') ON CONFLICT DO NOTHING;

-- Default admin user  (password: Admin@1234 — replace hash in production)
INSERT INTO users (full_name, email, password_hash, role_id, department_id) VALUES
    ('Sara Admin', 'sara@wms.local',
     'pbkdf2:sha256:600000$placeholder$hashedvalue',
     (SELECT role_id FROM roles WHERE role_name = 'Admin'),
     (SELECT department_id FROM departments WHERE department_name = 'Administration')) ON CONFLICT DO NOTHING;
