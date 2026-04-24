"""
One-time migration tool: SQLite -> PostgreSQL

Usage:
    python migrate_sqlite_to_postgres.py

Reads from local wms_sara.db and writes into PostgreSQL configured by:
- DATABASE_URL (preferred), or
- PGHOST/PGPORT/PGDATABASE/PGUSER/PGPASSWORD, or
- [database] section in config.ini
"""

import os
import sqlite3
import configparser

import psycopg2
from psycopg2.extras import execute_values

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SQLITE_PATH = os.path.join(BASE_DIR, "wms_sara.db")
CONFIG_PATH = os.path.join(BASE_DIR, "config.ini")

TABLES_IN_ORDER = [
    "app_users",
    "customers",
    "work_orders",
]

SEQUENCE_TABLES = [
    ("customers", "customer_id"),
]


def _load_config():
    config = configparser.ConfigParser()
    config.read(CONFIG_PATH)
    return config


def _cfg_value(config, key, env_key, fallback):
    return os.getenv(env_key, config.get("database", key, fallback=fallback)).strip()


def _connect_postgres(config):
    database_url = os.getenv("DATABASE_URL", "").strip()
    if database_url:
        return psycopg2.connect(database_url)

    kwargs = {
        "host": _cfg_value(config, "host", "PGHOST", "127.0.0.1"),
        "port": int(_cfg_value(config, "port", "PGPORT", "5432") or "5432"),
        "dbname": _cfg_value(config, "name", "PGDATABASE", "sara_wms"),
        "user": _cfg_value(config, "user", "PGUSER", "postgres"),
        "sslmode": _cfg_value(config, "sslmode", "PGSSLMODE", "prefer"),
    }
    password = _cfg_value(config, "password", "PGPASSWORD", "")
    if password:
        kwargs["password"] = password
    return psycopg2.connect(**kwargs)


def _sqlite_connection():
    if not os.path.exists(SQLITE_PATH):
        raise FileNotFoundError(f"SQLite file not found: {SQLITE_PATH}")
    conn = sqlite3.connect(SQLITE_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def _table_columns_sqlite(conn, table_name):
    rows = conn.execute(f"PRAGMA table_info({table_name})").fetchall()
    return [row[1] for row in rows]


def _table_columns_postgres(conn, table_name):
    with conn.cursor() as cursor:
        cursor.execute(
            """
            SELECT column_name, data_type
            FROM information_schema.columns
            WHERE table_schema = 'public' AND table_name = %s
            ORDER BY ordinal_position
            """,
            (table_name,),
        )
        return cursor.fetchall()


_NUMERIC_TYPES = {
    "smallint",
    "integer",
    "bigint",
    "numeric",
    "real",
    "double precision",
}


def _coerce_value(value, pg_type):
    if value == "":
        if pg_type in _NUMERIC_TYPES or pg_type in {"boolean", "date", "timestamp without time zone", "timestamp with time zone"}:
            return None
    return value


def _copy_table(sqlite_conn, postgres_conn, table_name):
    sqlite_cols = _table_columns_sqlite(sqlite_conn, table_name)
    pg_cols_with_types = _table_columns_postgres(postgres_conn, table_name)
    pg_cols = [row[0] for row in pg_cols_with_types]
    pg_types = {row[0]: row[1] for row in pg_cols_with_types}

    common_cols = [col for col in sqlite_cols if col in pg_cols]
    if not common_cols:
        print(f"[WARN] {table_name}: no common columns, skipped")
        return

    col_csv = ", ".join(common_cols)
    sqlite_rows = sqlite_conn.execute(
        f"SELECT {col_csv} FROM {table_name}"
    ).fetchall()

    if not sqlite_rows:
        print(f"[INFO] {table_name}: no rows")
        return

    values = [
        tuple(_coerce_value(row[col], pg_types.get(col, "text")) for col in common_cols)
        for row in sqlite_rows
    ]

    conflict_target = None
    if table_name == "app_users":
        conflict_target = "(user_key)"
    elif table_name == "customers":
        conflict_target = "(customer_id)"
    elif table_name == "work_orders":
        conflict_target = "(id)"

    insert_sql = f"INSERT INTO {table_name} ({col_csv}) VALUES %s"
    if conflict_target:
        insert_sql += f" ON CONFLICT {conflict_target} DO NOTHING"

    with postgres_conn.cursor() as cursor:
        execute_values(cursor, insert_sql, values, page_size=500)

    print(f"[OK] {table_name}: copied {len(values)} row(s)")


def _validate_counts(sqlite_conn, postgres_conn):
    print("\nCount validation")
    print("----------------")
    for table in TABLES_IN_ORDER:
        sqlite_count = sqlite_conn.execute(f"SELECT COUNT(*) FROM {table}").fetchone()[0]
        with postgres_conn.cursor() as cursor:
            cursor.execute(f"SELECT COUNT(*) FROM {table}")
            pg_count = cursor.fetchone()[0]
        status = "OK" if sqlite_count == pg_count else "MISMATCH"
        print(f"{table:<12} sqlite={sqlite_count:<8} postgres={pg_count:<8} [{status}]")


def _sync_sequences(postgres_conn):
    for table_name, pk_col in SEQUENCE_TABLES:
        with postgres_conn.cursor() as cursor:
            cursor.execute(
                "SELECT pg_get_serial_sequence(%s, %s)",
                (table_name, pk_col),
            )
            seq_row = cursor.fetchone()
            seq_name = seq_row[0] if seq_row else None
            if not seq_name:
                continue
            cursor.execute(f"SELECT COALESCE(MAX({pk_col}), 0) FROM {table_name}")
            max_id = cursor.fetchone()[0]
            cursor.execute("SELECT setval(%s, %s, %s)", (seq_name, max_id, bool(max_id)))
        print(f"[OK] {table_name}: sequence synced to {max_id}")


def main():
    print("SQLite -> PostgreSQL migration")
    print("===============================")

    config = _load_config()
    sqlite_conn = _sqlite_connection()
    postgres_conn = _connect_postgres(config)

    try:
        for table in TABLES_IN_ORDER:
            _copy_table(sqlite_conn, postgres_conn, table)
        _sync_sequences(postgres_conn)
        postgres_conn.commit()
        _validate_counts(sqlite_conn, postgres_conn)
        print("\nMigration finished.")
    except Exception as exc:
        postgres_conn.rollback()
        raise RuntimeError(f"Migration failed: {exc}") from exc
    finally:
        sqlite_conn.close()
        postgres_conn.close()


if __name__ == "__main__":
    main()
